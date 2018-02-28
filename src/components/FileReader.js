import React from "react";
import ReactFileReader from "react-file-reader";

class SimpleFileReader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: []
        };
        this.handleFiles = this.handleFiles.bind(this);
        this.checking = this.checking.bind(this);
        console.log(this);
    }

    handleFiles(files) {
        console.log(this);
        let reader = new FileReader();
        reader.onload = function (e) {
            // console.log(reader.result);
            SimpleFileReader.processData(reader.result);
        };
        reader.readAsText(files[0]);
    };

    static processData(content) {
        console.log(this);
        console.log(content);
        // this.setState({content: content});
    };

    checking(info) {
        this.setState({content: info});
    }


    render() {
        return (
            <div>
                <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
                    <button className='btn'>Upload</button>
                </ReactFileReader>
                <div className="content">
                    <h3>Content</h3>
                    {this.state.content}
                </div>
            </div>
        )
    }
}

export default SimpleFileReader;




