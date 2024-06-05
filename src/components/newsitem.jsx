import React, { Component } from 'react'
import '../App.css'
export default class NewsItem extends Component {

    render() {
        let { title, description, imgUrl, newsUrl } = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{ width: 250, height: 400 }}>
                    <img src={!imgUrl ? "https://play-lh.googleusercontent.com/OABfRfKxyvf6PUg_6YBJXvbKSbegFsBKvFDEm5jOA0rC5k1la-OwmnWz6GK55vr3EGA" : imgUrl} className="card-img-top" style={{height: "160px"}} alt="news pic" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        
                        <p className="card-text">{description}</p>
                        <div className="d-flex justify-content-center">
                        <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
