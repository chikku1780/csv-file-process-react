import React from 'react';
// import ReactDOM from 'react-dom';


import Header from './Header';
// import FileUploadSection from "./FileUploadSection";
import NewFileUploadSection from "./NewFileUploadSection";


export default class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <NewFileUploadSection/>
            </div>
        );
    }
}