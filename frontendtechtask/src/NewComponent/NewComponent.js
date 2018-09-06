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
            ],
            selectedColor: ''
        };
    }

    componentWillMount()
    {
        this.setState(
            {
                colorValues:
                [
                    '#000'
                ]
            }
        )
        for (var i=0;i<2;i++)
        {
            fetch('http://www.colr.org/json/color/random')
                .then(response => response.json())
                .then(data =>
                    {
                        this.setState(
                            {
                                colorValues:
                                [
                                    ...this.state.colorValues, '#'+data.new_color
                                ]
                            }
                        )
                    });
        }
    }

    

    toggleColor()
    {
        do
        {
            var item = this.state.colorValues[Math.floor(Math.random()*this.state.colorValues.length)];
        }while(this.state.selectedColor === item);
        this.setState(
            {
                selectedColor: item
            }
        )
    }

    toggleColorHandler = () =>
    {
        this.toggleColor();
    }

    render()
    {
        this.state.colorValues.forEach(element => {
            console.log(element);
        });

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