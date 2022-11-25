import React from "react";
import './Fruits.css'


class Card extends React.Component{
    render(){
        return(
            <div>
                <div className="container">
                    <img className="img" src={this.props?.src} alt="" />
                    <p className='title'><b>{this.props?.title}</b></p>
                </div>
            </div>
        )
    }
}

export default Card;
