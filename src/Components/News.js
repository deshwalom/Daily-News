import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
    
constructor(){
        super();
        this.state={
          articles : [],
          loading : false,
          page :1,
          totalResults:0
        }
    }
    async updateNews(){
      this.props.setProgress(10);
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b11b8ea7e0c94eb1867505fc34d73ffb&page=${this.state.page}&pageSize=${this.props.pageSize}`
      let cat=this.props.category
      let word=cat.charAt(0).toUpperCase()+cat.slice(1)
      document.title=word+" Daily-News"
      this.setState({ loading:true})
      let data=await fetch(url);
      this.props.setProgress(30);
      let parseData=await data.json()
      this.props.setProgress(50);
      console.log(parseData);
      this.setState({
        articles:parseData.articles,
        totalResults: parseData.totalResults,
        loading:false
      })
      this.props.setProgress(100);
    }

// ________________________In case of using button to come back on previous page________________

    // handlePreClick=async()=>{

      // ****************you can comment it out this section***********************
       // const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b11b8ea7e0c94eb1867505fc34d73ffb&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
       // this.setState({ loading:true})
       // let data=await fetch(url);
       // let parseData=await data.json()
       // this.setState({
       //   page : this.state.page-1,
       //   articles:parseData.articles,
       //   loading:false
       // })
      // ************************************************************************** 

    // this.setState({page:this.state.page-1})
    // this.updateNews();
    // }
// ________________________________________________________________________________________________

// ________________________In case of using Next button to go on next page________________
    // handleNextClick= async()=>{

      // ****************you can comment it out this section***********************
      //if(!(this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize))){
      // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b11b8ea7e0c94eb1867505fc34d73ffb&page=${this.state.page+1}&pagesize=${this.props.pageSize}`
      // this.setState({ loading:true})
      // let data=await fetch(url);
      // let parseData=await data.json()
      // this.setState({
      //   page : this.state.page+1,
      //   articles:parseData.articles,
      //   loading:false
      // })
      // }
// ************************************************************************** 
    //   this.setState({page:this.state.page+1})
    //   this.updateNews();
    // }
    async componentDidMount(){
      // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b11b8ea7e0c94eb1867505fc34d73ffb&page=1&pageSize=${this.props.pageSize}`
      // let data=await fetch(url);
      // let parseData=await data.json()
      // console.log(parseData);
      // this.setState({articles:parseData.articles,totalResults: parseData.totalResults})
      this.updateNews()
    }
    fetchData=async()=>{
      // this.setState({page:this.state.page+1})
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b11b8ea7e0c94eb1867505fc34d73ffb&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        let cat=this.props.category
        let word=cat.charAt(0).toUpperCase()+cat.slice(1)
        document.title=word+" Daily-News"
        // this.setState({ loading:true})
        let data=await fetch(url);
        let parseData=await data.json()
        this.setState({
          page:this.state.page+1,
          articles: this.state.articles.concat(parseData.articles),
          totalResults: parseData.totalResults,
          // loading:false
          }) 
     };
  render() {
      let cat=this.props.category
      let word=cat.charAt(0).toUpperCase()+cat.slice(1)
      console.log(this.state.totalResults + "-------" + this.state.articles.length)
    return (
      <>
        <h2 className='text-center'>Daily News- Top {word} Headlines </h2>
        {this.state.loading && <Spinner/>} 
        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={ <Spinner/>}
          endMessage="finished....">
          
          <div className="container">
            <div className="row ">
            {!this.state.loading &&  this.state.articles.map((element,index)=>{
            // why use Key?
            //  when we use map we have to assign a unique key to each element 
            // in articles "url" is unique of each element so we have used url as key here
            return <div className="col md-4 my-3" key={index}>
            <NewsItem title={element.title.length !== 0 ? element.title.slice(0,45):"Not available"} description={ element.description !== null? element.description.slice(0,88) : " Not Available "} imgUrl={element.urlToImage} url={element.url} author={element.author?element.author:"Unkown"} date={new Date(element.publishedAt).toGMTString()} source={element.source.name} key={index}/>
            </div>
            })}
            {/* It will render Buttons Next and Prev */}
            {/* <div className='container  d-flex justify-content-between'>
            <button disabled={this.state.page<=1} type="button" className="btn btn-primary  " onClick={this.handlePreClick}>&larr; Previous</button>
            <button  disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNextClick} >Next &rarr;</button>
            </div>  */}
            </div>
         </div>
        </InfiniteScroll>
    </>
    )
  }
}

export default News
