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
        <h1 className='heading display-4'><i className="fal fa-newspaper p-2"/> News</h1>

        {rows.map((row, i) =>
          <div className='row' key={i}>
            {row.map((newsItem, i) =>
              <a className='col-lg-3 col-md-6 col-sm-6 col-xs-12 pb-4 pt-2 hvr-bob hvr-underline-reveal' href={newsItem.url} key={i}>
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
