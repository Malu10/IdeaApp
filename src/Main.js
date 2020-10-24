import React, {Component} from 'react';
import Content from './Content';

class Main extends Component {
    constructor(props) {
        super(props);
            var products = [{
                name: "ModernOffice", votes: 0
            },{
                name: "Offsite", votes: 0
            }
        ]
        this.state = {
            products: products
        }
    }
    handleIncClick(i) {
        console.log('click event');
        let items = [...this.state.products];
        items[i].votes += 1;
        this.setState({
            products: items
        })
    }
    handleDecClick() {
        console.log('click event');
    }
    render() {
        return (
            <>
                <h1>Modern Offices</h1>
                <Content
                    products = {this.state.products}
                    handleIncClick = {this.handleIncClick}
                    handleDecClick = {this.handleDecClick}
                />
            </>
        )
    }
}

export default Main;