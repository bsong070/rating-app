import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Rating extends React.Component{
    constructor(props){
        super(props);
        this.state={
            input: "",
            results: false,
        }

        this.viewResults = this.viewResults.bind(this);

    }

    viewResults() {
        this.setState({
            results:true
        })
    }

    render(){
        return(
            <div id="div-parent">
                <div id="title-page">
                    <h1>Rank Your Top Choices</h1>
                </div>
                <div id="rating-container">
                    <input id="rating-input" type="number" min="0" max="5" placeholder="Enter Rating Between 0-5"></input> 
                    <button id="submit-button">Submit Rating</button>
                </div>

            </div>

        )
    }
}

ReactDOM.render(<Rating />,document.getElementById("root"))