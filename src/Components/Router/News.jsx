import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import News1 from './Nested/News1'
import News2 from './Nested/News2'

function News() {
  return (
    <div>
      <h1>News</h1>
      <ul>
        <li>
          <Link to='news1'> News 1</Link>
        </li>
        <li>
          <Link to="news2"> News 2</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/news1" element = {<News1/>}/>
        <Route path="/news2" element = {<News2/>}/>
      </Routes>
    </div>
  );
}

export default News;
