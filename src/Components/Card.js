import React, { Component } from 'react'

export default class Card extends Component {
    render() {


        return (
            <div className="card">
                <img className="card-img-top" src={this.props.img} alt="Card"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.text}</p>
                </div>
            </div>
        )
    }
}

