import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import CSVReader from 'react-csv-reader';

import SampleLineChart from './LineChart';


const primaryColor = ['green', 'blue', 'black', 'yellow'];


class NewFileUploadSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.handleForce = this.handleForce.bind(this);
    }

    handleForce = data => {
        if (data) {
            data = data.map((el, index) => {
                if (el) {
                    let seriesName = el[0];
                    let seriesData = el.slice(1);
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
                        color: primaryColor[index]
                    }
                }
            })
        }
        data = data.filter(function (rec) {
            if (rec.id !== "") {
                return rec;
            }
        });
        // we store this data in server by making axios call
        this.setState({data});
    };

    render() {
        return (
            <div>
                <CSVReader
                    cssClass="csv-input"
                    label="Select a csv file "
                    onFileLoaded={this.handleForce}
                    // onError={this.handleDarkSideForce}
                />

                <hr/>

                <SampleLineChart data={this.state.data}/>
            </div>
        )
    }
}

export default NewFileUploadSection;