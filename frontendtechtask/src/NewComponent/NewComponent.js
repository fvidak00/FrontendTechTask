import React, {Component} from 'react';

class newComponent extends Component
{
    constructor(props)
    {
        super(props);
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
        }while(this.state.selectedColor === item);
        this.setState({
            selectedColor: item
        })
    }

    toggleColorHandler = () =>
    {
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
            <div>
                <h1 onClick={this.toggleColorHandler} style={stil}>{this.props.tekst}</h1>
            </div>
        );
    }
}



export default newComponent;