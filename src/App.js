import React, { Component } from 'react'
import axios from 'axios';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import ArticlesList from './components/ArticlesList';

export class App extends Component {

  state = {
    posts: [],
    queryNumber: 6
  }

  componentDidMount() {
    this.performSearch(this.state.queryNumber)
  }

  performSearch = (query) => {
    axios.get(`https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/posts/?fields=author,title,date,featured_image,content,URL&number=${query}`)
      .then(response => {
        this.setState({
          posts: response.data.posts,
          queryNumber: query + 6
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
    <div className="main-content">
    <Header />
    <Navbar />
    <HashRouter>
      <Switch>
        <Route path="/" render={ ()=> <ArticlesList posts={this.state.posts}/>}>
        </Route>
      </Switch>
    </HashRouter>
    <button onClick={() => this.performSearch(this.state.queryNumber)} className="btn-loadMore article__btn blue">load more posts</button>
  </div>
   )
  }
}

export default App;
