import React, { Component } from 'react';


var Water = React.createClass({
    getInitialState: function() {
        return {
            currentTemp: 12
        };
    },


    setTemperature: function(e) {

    	this.setState({currentTemp: e.target.value})
    },

    render: function() {
    	  var stateOfMatter;
    	// empty variable that will hold either "Liquid", "Solid", or "Gas"
        

        if(this.state.currentTEmp <=32) {

        	stateOfMatter = 'Solid'
        }

        else if(this.state.currentTemp >= 212){
        stateOfMatter = 'Gas'

        }

        else {
         stateOfMatter = 'Liquid';

        }

        return (
        <div>
         <input type="text" onChange={ this.setTemperature } value={ this.state.currentTemp } />
            <p>At { this.state.currentTemp }°F, water is considered to be a "{ stateOfMatter }" state of matter.</p>
        </div>
    );
        
    }
});


export default Water