import React from 'react'
import './index.css';
function Main(props) {
    return (

        <React.Fragment className="main">
            <div className="container">
                <div className="cards">
                    <div className="card">
                        <img className="image"src={props.imglink} />
                        <div className="card__info">
                            <span className="card__category">{props.cardcat}</span>
                            <h3 className="card__title">{props.cardtitle}</h3>
                            <a href= {props.link} width="40px" height="30px" target="_blank">
                                <button> Watch Now</button>
                            </a>

                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}


export default Main
