import React, {Component} from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div id="root">
                    <ul>
                        {this.props.products.map((item, i) => {
                            return <li key={i}>
                                <span>Name: {item.name}</span> - 
                                <span>Votes: {item.votes}</span>
                                <button className="add-btn" onClick={this.props.handleIncClick(i)}>+</button> 
                                <button className="add-btn" onClick={this.props.handleDecClick}>-</button>
                            </li>
                        })}
                        {/* <li>
                            <span>
                            </span>
                             - <span>votes: 1</span>
                            <button onClick={this.props.handleIncClick}>+</button> 
                            <button onClick={this.props.handleDecClick}>-</button>
                        </li>
                        <li>
                            <span>Offsite</span> - <span>votes: 0</span>
                            <button onClick={this.props.handleIncClick}>+</button> 
                            <button onClick={this.props.handleDecClick}>-</button>
                        </li> */}
                    </ul>
                </div>
                <button className="add-btn" onClick={this.props.handleClick}>Add + </button>
            </>
        )
    }
}

export default Content;