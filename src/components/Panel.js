import React from "react";
import {Panel} from 'react-bootstrap';


export default class SimplePanel extends React.Component {
    render() {
        return (
            <div>
                <Panel>
                    <Panel.Heading>Panel heading without a title</Panel.Heading>
                    <Panel.Body>Panel content</Panel.Body>
                </Panel>
                <Panel>
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Panel heading with a title</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>Panel content</Panel.Body>
                </Panel>
                <table className="table table-striped table-condensed">
                    <tr>
                        <td>adasd</td>
                        <td>adasd</td>
                        <td>adasd</td>
                    </tr>
                    <tr>
                        <td>adasd</td>
                        <td>adasd</td>
                        <td>adasd</td>
                    </tr>
                </table>
            </div>
        );
    }
}