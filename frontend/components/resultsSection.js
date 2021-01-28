import React from "react";
import ReactMarkdown from 'react-markdown';


export function ResultsSection(props) {
    let reports = props.results

    return (
        <div id="results" className="container mx-auto w-4/5 mb-1">
            <h2 id="results-section-header" className="text-3xl font-bold text-center tracking-wide mb-1">Reports</h2>
            <ul id="results-list" className="flex flex-col md:space-y-6 space-y-1">
                {reports?.map((report, index) => (
                    <li id="results-list-item" className="md:mx-8 mx-1 border rounded-md shadow" key={index}>
                        <h3 id="results-list-item-title"
                            className="text-lg font-medium mb-1 px-1 bg-gray-400">{report.title}</h3>
                        <div id="results-list-item-message" className="px-1 text-justify text-base font-normal">
                            <ReactMarkdown>{report.message}</ReactMarkdown>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
