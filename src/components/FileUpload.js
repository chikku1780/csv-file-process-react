import React from 'react'

// import axios, {post} from 'axios';


class SimpleReactFileUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            content: []
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.fileUpload = this.fileUpload.bind(this);
        // this.processData = this.processData.bind(this);
        console.log(this);
    }

    onFormSubmit(e) {
        e.preventDefault();
        let reader = new FileReader();
        reader.onload = function (e) {
            // console.log(this);
            SimpleReactFileUpload.processData(reader.result);
        };
        reader.readAsText(this.state.file);
    }

    onChange(e) {
        this.setState({file: e.target.files[0]});
    }

    fileUpload(file) {
        console.log(file);
    }

    static processData(content) {
        console.log(content);
        console.log(typeof content)
        // console.log(this);
        // this.setState({content: content});
        if(content) {
            let seriesList = content.split('\n');
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <h1>File Upload</h1>
                    <input type="file" onChange={this.onChange}/>
                    <button type="submit">Upload</button>
                </form>
                <div className="content">
                    <h3>Content</h3>
                    {this.state.content}
                </div>
            </div>
        )
    }
}


export default SimpleReactFileUpload