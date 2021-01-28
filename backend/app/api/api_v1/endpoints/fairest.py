import logging
from typing import Union

from fairest.main import fairest
from fairest.models import Request, ResponseCode
from fastapi import APIRouter, HTTPException, File, Body
from starlette import status

from app.schemas.fairest import FairestResult, FairestRequest, FairestReport

router = APIRouter()

server_logger = logging.getLogger('fairest.server')


def to_fairest_request(request: Request) -> FairestRequest:
    return FairestRequest(request_body=request.request_body, disable=request.disable, options=request.options)


@router.post("/text", response_model=FairestResult)
def get_reports_text(body: FairestRequest):
    """
    Run the fairest program on a request.

    :param body: The document to process. It is either a string or a file/bytes.
    :return: The results containing a list of reports and other information
    """
    response = fairest(body=body.request_body)
    result = process_response(response)
    return result


def process_response(response):
    if response.response_code == ResponseCode.BAD_REQUEST:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="The input could not be processed.")
    result = FairestResult(source=to_fairest_request(response.source_request), reports=[], debug_log=response.debug_log)
    for report in response.reports:
        result.reports.append(FairestReport(
            title=report.title,
            message=report.message,
            rule_id=report.rule_id,
            severity=report.severity.name,
            example=report.example,
            attribution=report.attribution,
            position=report.position)
        )
    return result


@router.post("/file", response_model=FairestResult)
def get_reports_file(file: bytes = File(...)):
    """
    Run the fairest program on a request.

    :param file: The document to process. It is either a string or a file/bytes.
    :return: The results containing a list of reports and other information
    """
    response = fairest(body=file)
    result = process_response(response)
    return result
