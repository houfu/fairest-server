import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {ResultsSection} from "./resultsSection";
import {act} from "react-dom/test-utils";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('Renders a report', () => {
    const fakeReports = [
        {
            "title": "Document Statistics",
            "message": "\nWord count: 5\nSentence count: 1\nAverage sentence length: 5.0\nReadability: 1st and 2nd grade\nReading time: 0.34s\n            ",
            "rule_id": "DocumentStatisticsRule",
            "severity": "OTHERS",
            "example": null,
            "attribution": null,
            "position": null
        }
    ]

    act(() => {
        render(<ResultsSection results={fakeReports}/>, container)
    })

    expect(container.textContent).toContain('Document Statistics')
})
