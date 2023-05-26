import React from 'react'
import './blog.css'
import Article from '../../components/article/Article'
import {blog01,blog02,blog03,blog04,blog05} from './imports'

const Blog = () => (
  <div className="qr__blog section__padding" id='blog' >
    <div className="qr__blog-heading">
      <h1 className='gradient__text'>Check out the latest from Streaming</h1>
    </div>
    <div className="qr__blog-container">
    <div className="qr__blog-container__groupa">
    <  Article imgurl={blog01} date='May 19, 2023' text='Live stream fails'/>
    </div>
    <div className="qr__blog-container__groupb">
    < Article imgurl={blog02} date='May 19, 2023' text='Live stream fails'/> 
    < Article imgurl={blog03} date='May 20, 2023' text='Live stream fails'/>
    < Article imgurl={blog04} date='May 21, 2023' text='Live stream fails'/>
    < Article imgurl={blog05} date='May 22, 2023' text='Live stream fails'/>
    </div>
    </div>
    </div>

)

export default Blog
