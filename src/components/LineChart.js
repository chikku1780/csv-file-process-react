import React, {Component} from 'react';
import LineChart from 'react-linechart';
import '../../node_modules/react-linechart/dist/styles.css';

export default class SampleLineChart extends Component {
    // constructor(props) {
    //     super(props);
    // }

    componentWillReceiveProps(data) {
        this.setState({data});
    }

    // onPointHover = (obj) => <div>`x: ${obj.x}<br/>y: ${obj.y}`</div>;

    render() {
        return (
            <div>
                <div className="App">
                    <h3>Series - Chart</h3>
                    <LineChart
                        interpolate={"linear"}
                        showLegends={true}
                        legendPosition={"top-right"}
                        width={900}
                        height={450}
                        yMax={90}
                        xLabel={"Year"}
                        yLabel={"Values"}
                        pointRadius={2}
                        // onPointHover={this.onPointHover}
                        margins={{top: 0, right: 20, bottom: 45, left: 45}}
                        data={this.props.data}
                    />
                </div>
            </div>
        );
    }
}
