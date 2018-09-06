import React, {Component} from 'react';

class newComponent extends Component
{
    constructor()
    {
        super();
        this.state =
        {
            colorValues:
            [
                'black',
                'red',
                'blue'
            ],
            selectedColor: 'black',
        };
    }

    toggleColor()
    {
        do
        {
            var item = this.state.colorValues[Math.floor(Math.random()*this.state.colorValues.length)];
        }while(this.state.selectedColor == item);
        this.setState({
            selectedColor: item
        })
    }

    toggleColorHandler = () =>
    {
        console.log('clicked');
        this.toggleColor();
    }

    render()
    {
        const stil = 
        {
            color: this.state.selectedColor,
            cursor: 'pointer'
        }; 
        return (
            <h1 onClick={this.toggleColorHandler} style={stil}>Welcome to new component.</h1>
        );
    }
}

export default newComponent;