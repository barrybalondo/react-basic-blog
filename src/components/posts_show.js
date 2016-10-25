import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';
import { deletePost } from '../actions/index';
import { Link } from 'react-router';


class PostsShow extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick(){
    
    this.props.deletePost(this.props.params.id) 
      .then( () => {
        this.context.router.push('/');
      });;
  }

  render() {
    
    const { post } = this.props;

    // automitcally renders, even at the time data is not there yet
    // so this is put
    if(!this.props.post){
      return <div>Loading...</div>
    }

    // take note binding is important on event functions!
    return (
      <div>
        <Link to="/">Back to Index</Link>
        <button 
          onClick = {this.onDeleteClick.bind(this)}
          className = "btn btn-danger pull-xs-right">
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return { post: state.posts.post }
}



export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);

