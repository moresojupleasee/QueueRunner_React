import React from 'react'
import './article.css'

const Article = ({imgurl,date,text}) => (
  <div className="qr__blog-container_article">
    <div className="qr__blog-container_article-image">
      <img src={imgurl} alt='blog'/>
      </div>
      <div className="qr__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
  </div>
)

export default Article
