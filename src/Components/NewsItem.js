import React, { Component } from 'react'

export class NewsItem extends Component {
    
   
  render() {
    let {title,description,imgUrl,url ,author ,date,source}=this.props;
    return (
      <div className=' my-2'>
        
       <div className="card"style={{width:"18rem"}} >
       <div style={{display:'flex-end',justifyContent:'center',position:'absolute',right:'0'}}>
        <span className=" badge rounded-pill bg-danger">{source}
            </span>
        </div>
            <img src={!imgUrl?"https://media.cnn.com/api/v1/images/stellar/prod/231027221010-01-robert-card-photo.jpg?c=16x9&q=w_800,c_fill":imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}...</p>
                <a href={url} target ="_blank" className="btn btn-dark btn-sm">Read more</a>
                <p className="card-text"><small className="text-body-secondary">By {author} on {date}</small></p>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
