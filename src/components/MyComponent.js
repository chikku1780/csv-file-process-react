import React from 'react';
import FileReaderInput from 'react-file-reader-input';


class MyComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: []
        };
        console.log(this);
    }

    handleChange = (e, results) => {
        results.forEach(result => {
            const [e, file] = result;
            console.log(e);
            console.log(result);
            this.props.dispatch(this.uploadFile(e.target.result));
            console.log(`Successfully uploaded ${file.name}!`);
        });
    };

    uploadFile(value) {
        console.log(value);
    }

    render() {
        return (
            <form>
                <label htmlFor="my-file-input">Upload a File:</label>
                <FileReaderInput as="text" id="my-file-input"
                                 onChange={this.handleChange}>
                    <button>Select a file!</button>
                </FileReaderInput>
            </form>
        );
    }
}

export default MyComponent;