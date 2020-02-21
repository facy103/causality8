import React, { Component } from 'react';
import questions from '../../DB/perfectDB.js';
import { Markup } from 'interweave';




class Design extends Component { 

    render () {
    
        return (
            <div>
                 <Markup content={this.props.botMessege} /> 
            </div>
            
    )
            }
}

export default Design;