import React, {Fragment} from "react"
import {ResultsSection} from "./resultsSection";

class InputPart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: '', submit_disabled: true, text_disabled: false}
        this.fileInput = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this)

    }

    handleInputChange(event) {
        this.setState(() => {
            return {
                text: event.target.value,
                submit_disabled: (event.target.value === '') || (!this.fileInput)
            }
        })
    }

    handleFileChange(event) {
        this.setState(() => {
                return {
                    text: '',
                    submit_disabled: !this.fileInput,
                    text_disabled: !!this.fileInput
                }
            }
        )
    }

    handleSubmit(event) {
        if (!this.state.text_disabled) {
            this.props.submitFunc(this.state.text)
        }
        event.preventDefault()
    }

    render() {
        return (
            <div id="fairest_form" className="container mx-auto w-4/5 mb-1">
                <form className="flex flex-col" onSubmit={this.handleSubmit}>
                    <label htmlFor="input-text" className="mt-2"> Input the text to process: </label>
                    <textarea id="input-text" value={this.state.text} onChange={this.handleInputChange}
                              className="w-full h-1/4 md:h-80 border focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent
                              shadow" disabled={this.state.text_disabled}/>
                    <label htmlFor="input-file" className="mt-2">Or upload a DOCX file:</label>
                    <input id='input-file' type="file" className="mt-1" ref={this.fileInput}
                           onChange={this.handleFileChange}/>
                    <input type="submit" value="Submit"
                           className="w-24 mt-3 bg-yellow-200 p-2 rounded border border-solid place-self-end hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 disabled:bg-gray-100"
                           disabled={this.state.submit_disabled}
                    />
                </form>
            </div>
        )
    }
}


export class FairestForm extends React.Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this)
        this.resultRef = React.createRef()
        this.state = {results: []}
    }

    async fetchResponseText(host, text) {
        const init = {
            method: 'POST',
            headers: {'content-type': "application/json"},
            body: JSON.stringify({request_body: text})
        }
        return await fetch(`http://${host}/api/v1/fairest/text`, init)
    }

    onSubmit(text) {
        this.resultRef.current.focus()
        const responseText = this.fetchResponseText(this.props.host, text)
        responseText.then(response => {
            response.json().then(json => this.setState({results: json['reports']}))
        }).catch(error => console.log(error))
    }

    render() {
        let results_node = this.state.results.length > 0 ? <ResultsSection results={this.state.results}/> : null
        return (
            <>
                <InputPart submitFunc={this.onSubmit}/>
                <div id="results_part" ref={this.resultRef}>
                    {results_node}
                </div>
            </>
        )
    }

}
