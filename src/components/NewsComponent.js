import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export class NewsComponent extends Component {
  constructor () {
    super ();
    
    
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }
    
    async componentDidMount(){
      this.setState({loading: true})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4f3efa616e6a41c7859eca2215a28393&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url)
        let parsedData = await data.json();
        console.log(await parsedData)
        this.setState({
          articles: parsedData.articles, 
          totalResults: parsedData.totalResults,
          loading: false
        })
      }
      
      handlePrevClick = async () => {
        this.setState({loading: true})
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=4f3efa616e6a41c7859eca2215a28393&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url)
        let parsedData = await data.json();
        console.log(await parsedData)
        this.setState({
          page: this.state.page-1,
          articles: parsedData.articles,
          loading: false
        })
      }
      
      
      handleNextClick = async () => {
        this.setState({loading: true})
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=4f3efa616e6a41c7859eca2215a28393&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url)
        let parsedData = await data.json();
        console.log(await parsedData)
        this.setState({
          page: this.state.page+1,
          articles: parsedData.articles,
          loading: false
        })
    }

  render() {
    return (
      <div>
        <div className='container my-3 text-center'>
          <h1>Main Heading - devEws</h1>
          {this.state.loading && <Spinner/>}
          <div className='row'>
          {!this.state.loading && this.state.articles.map((element)=>{

            return <div className='col md-4' key={element.url}>
              <NewsItem title={element.title?(element.title.slice(0, 45)+"..."):""} description={element.description?(element.description.slice(0, 88)+"..."):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}
          </div>
        </div>
       <div className='container d-flex justify-content-between my-5'>
        <button disabled={this.state.page<=1} type='button' className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/20)} type='button' className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
export default NewsComponent;