import React from "react";
import CsvParse from '@vtex/react-csv-parse';


import SampleLineChart from './LineChart';

const colors = ['green', 'blue', 'black', 'yellow'];

class FileUploadSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.handleData = this.handleData.bind(this);
    }

    handleData = data => {
        console.log(data);
        if (data) {
            data = data.map((el, index) => {
                el = el.data;
                if (el) {
                    let content = el.split(',');
                    let seriesName = content[0];
                    let seriesData = content.slice(1);
                    seriesData = seriesData.map(d => {
                        let info = d.split('|');
                        return {
                            x: parseInt(info[0], 10),
                            y: parseInt(info[1], 10)
                        }
                    });
                    return {
                        id: seriesName,
                        name: seriesName,
                        points: seriesData,
                        color: colors[index]
                    }
                }
            })
        }
        this.setState({data});
    };

    render() {
        const keys = [
            "data"
        ];

        return (
            <div>
                <CsvParse
                    keys={keys}
                    separators={['\n']}
                    onDataUploaded={this.handleData}
                    render={onChange => <input type="file" onChange={onChange}/>}
                />

                <SampleLineChart data={this.state.data}/>

            </div>

        )
    }
}

export default FileUploadSection;