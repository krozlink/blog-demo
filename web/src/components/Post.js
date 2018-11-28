import React, { Component } from 'react';
import './Post.css';
import PropTypes from 'prop-types';

class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  formatPost(body) {
    let newText = body.split('\n').map((item, i) => {
      return <p key={i}>{item}</p>;
    });
    return newText;
  }

  formatDate(date) {
    return new Date(date).toDateString();
  }

  render() {
    return (
      <div className="post">
        
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-96x96">
                  <img src={this.props.avatar || 'https://api.adorable.io/avatars/96/default.png'} alt="placeholder"/>
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-5">{this.props.title}</p>
                <p className="subtitle is-6">Posted by <a href={'mailto:'+this.props.email}>{this.props.name}</a>
                  <br/><span>{this.formatDate(this.props.date)}</span>
                </p>
              </div>
            </div>

            <div className="content post-body">
              {this.formatPost(this.props.body)}
              <br/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

Post.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  num_comments: PropTypes.number.isRequired,
}

export default Post;