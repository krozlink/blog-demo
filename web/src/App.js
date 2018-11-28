import React from 'react';
import './App.css';
import Spinner from './components/Spinner';
import Post from './components/Post';
import Header from './components/Header';
import Api from './api';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      posts: [],
      loading: true,
    }
  }

  async componentDidMount() {
    const response = await Api.LatestPosts();
    this.setState({posts: response, loading: false});
  }

  posts(state) {
    if(state.loading) {
      return (
        <Spinner />
      );
    } else {
      return state.posts.map(p => (
        <Post key={p.id} {...p} />
      ));
    }
  }


  render() {
    return (
      <div className="App">
        <Header />
        <div id="blog-content">
          { this.posts(this.state) }
        </div>
      </div>
    );
  }
}

export default App;
