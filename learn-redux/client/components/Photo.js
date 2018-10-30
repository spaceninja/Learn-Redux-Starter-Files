import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = React.createClass({
  render() {
    const { post, i, comments } = this.props;
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <img
              alt={post.caption}
              className="grid-photo"
              src={post.display_src}
            />
          </Link>
          <CSSTransitionGroup
            transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <span key={post.likes} className="likes-heart">
              {post.likes}
            </span>
          </CSSTransitionGroup>
        </div>
        <figcaption>
          <p>{post.caption}</p>
          <button className="likes">&hearts; {post.likes}</button>
          <Link className="button" to={`/view/${post.code}`}>
            <span className="comment-count">
              <span className="speech-bubble" />
              &nbsp;
              {comments[post.code] ? comments[post.code].length : 0}
            </span>
          </Link>
        </figcaption>
      </figure>
    );
  }
});

export default Photo;