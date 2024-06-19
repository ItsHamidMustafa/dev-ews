import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class NewsComponent extends Component {
  render() {
    return (
      <div>
        <div className='container my-3'>
          <h1>Main Heading - devEws</h1>
          <div className='row'>
            <div className='col md-3'>
              <NewsItem title="myTitle" description="myDescription" />
            </div>
            <div className='col md-3'>
              <NewsItem title="myTitle" description="myDescription" />
            </div>
            <div className='col md-3'>
              <NewsItem title="myTitle" description="myDescription" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsComponent;