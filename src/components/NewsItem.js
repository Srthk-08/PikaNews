import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='container my-3'>
                <div className="card">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        99+
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    <img src={imageUrl ? imageUrl : "https://analyticsindiamag.com/wp-content/uploads/2024/06/Google-Gemini-Motorola.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}
                            <span className="badge rounded-pill text-bg-dark ms-2">{source}</span>
                        </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-danger">By {author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
