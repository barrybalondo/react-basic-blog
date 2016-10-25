import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux'; // not needed anymore because boilerplate code is removed
import { fetchPosts } from '../actions/index'; // action creator
import { Link } from 'react-router'; // acts to link to another component. Behaves like an a tag

class PostsIndex extends Component {
 
  // best place to get fetching of data since it runs on first run to render, but no on re renders
  componentWillMount() {
    this.props.fetchPosts();
    //console.log('this would be a good time to call an action creator to fetch posts');
  }


  renderPosts() {

    //console.log('props are here', this.props.posts);
    return this.props.posts.map((post) => {
      return ( 
        <li className = "list-group-item" key={post.id}>
          <Link to={`posts/${post.id}`}>
            <span className = "pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      )
    });
    
  }

  // an alternative form, call by -> {this.props.map(renderPostsTwo)}
  renderPostsTwo(post){
    return ( 
      <li className = "list-group-item" key={post.id}>
        <span className = "pull-xs-right">{post.categories}</span>
        <strong>{post.title}</strong>
      </li>
    );

  }
  // {this.renderPosts()}
  render() {
      return (
        <div>
          <div className = "text-xs-right">
            <Link to ="/posts/new" className = "btn btn-primary" >
              Add a post
            </Link>
          </ div>
          <h3>Posts</h3>
          <ul className = "list-group">
            {this.renderPosts()}
          </ul>
        </div>
      );
  }

}

function mapStateToProps(state){
  return { posts: state.posts.all };
}


/*
function mapDispatchtoProps(dispatch){
  return bindActionCreators( {fetchPosts}, dispatch );
}


export default connect(null, mapDispatchtoProps)(PostsIndex);

*/

// to reduce boilerplate code and just pass the object directly
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);