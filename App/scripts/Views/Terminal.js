import React from 'react';
import ReactDom from "react-dom";
var {home} = require('../config');

var Terminal = React.createClass({
    getInitialState() {
        return {
            output: "",
            input: "",
            inputIndex: 0,
            currentPath: "~"
            // delimeter: "$ "
        };
    },

    componentDidMount() {
        this.textArea = ReactDom.findDOMNode(this.refs.textArea);

        this.textArea.addEventListener("keyup", (e) => {
            console.info(`Key Up [${e.keyCode}]:  ${e.key}`);

            switch (e.keyCode) {
                case 13: //Enter
                    this.onSubmit(e);
                    break;
                default:
                    // console.debug("Unregistered Key: ", e.key, e.keyCode);
            }

        });

        this.textArea.addEventListener("keydown", (e) => {
            console.info(`Key Down [${e.keyCode}]:  ${e.key}`);

            switch (e.keyCode) {
                case 9: //Tab
                    this.prevent(e);
                    this.appendInput("    ");
                    break;
                case 8: //Delete/Backspace
                    this.onDelete(e);
                    break;
                case 13: //Enter
                    this.prevent(e);
                    break;
            }

        });

        this.appendInput(`${this.state.currentPath}  `);
        this.state.inputIndex = this.textArea.value.length;
    },

    componentWillUpdate() {
        // console.debug("Will Update")
    },

    onSubmit(e) {
        console.debug("Input Submit");
        this.appendInput(`\n${this.state.currentPath}  `)
        this.setState({inputIndex: e.target.selectionStart})
    },

    onUpdate(e) {
        // .replace("$","");
    },

    onDelete(e) {
        if(e.target.selectionStart <= this.state.inputIndex){
            this.prevent(e);
        }
    },

    prevent(e) {
        console.debug("Prevent!!!")
        e.preventDefault();
    },

    autoComplete() {

    },

    appendOutput(output) {
        this.setOutput(this.textArea.value + output);
    },

    setOutput(output){
        this.textArea.value = output;
        this.setState({output: output});
    },

    appendInput(input) {
        this.setInput(this.textArea.value + input);
    },

    setInput(input){
        this.textArea.value = input;
        this.setState({input: input});
    },

    render: function() {
        return (
            <div className="app-view terminal">
                <textarea ref="textArea" className="terminal-input" spellCheck="false" onChange={this.onUpdate}>{this.state.input}</textarea>
            </div>
        );
    }
});

module.exports = Terminal;
