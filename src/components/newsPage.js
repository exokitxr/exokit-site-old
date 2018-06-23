import React, { Component } from 'react';
import '../css/newsPage.css';

import newsItems from '../text/news.json';

class NewsPage extends Component {
  render() {
    const newsPerRow = 4;
    const rows = [];
    for (let i = 0; i < newsItems.length; i += newsPerRow) {
      rows.push(newsItems.slice(i, i + newsPerRow));
    }

    return (
      <div className='newsPage'>
        <h1 className='heading display-4'>News</h1>

        {rows.map(row =>
          <div className='row'>
            {row.map(newsItem =>
              <a className='col-lg-3 col-md-6 col-sm-12 col-xs-12' href={newsItem.url}>
                <div className="card">
                  <img className="card-img-top" src={newsItem.img} alt="Card"/>
                  <div className="card-body">{newsItem.title}</div>
                </div>
                <div className='card-footer d-flex justify-content-flex-start'>{newsItem.date}</div>
              </a>
            )}
          </div>
        )}
      </div>
    );
  }
}
export default NewsPage;
