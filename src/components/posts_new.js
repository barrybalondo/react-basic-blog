import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {

  
  // try to avoid context unless you are using routers
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(propsForm) {
    this.props.createPost(propsForm)
      .then( () => {
        // blog post has been created, navigate the user to the index
        // we navigate by calling this.context.router.push with the
        // new path to navigate to.
        this.context.router.push('/');
      });
  }

  render() {
    const { fields:  { title, categories, content }, handleSubmit } = this.props;
    // same as
    // const title = this.props.fields.title;
    // const handleSubmit = this.props.handleSubmit;
    //console.log(title);



    // NOTE ...title is just destructuring to pass all the values. Eg. like onChange = {title.onChange} is there
    // take note binding is important on event functions!
    return (
      <form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a New  Post</h3>
        <div className = {`form-group ${title.touched && title.invalid ? 'has-danger': ''}`} >
          <label>Title</label>
          <input type = "text" className = "form-control" { ...title } />
          <div className = "form-control-feedback">
            {title.touched ? title.error : ''}
          </div>
        </div>
         <div className = {`form-group ${categories.touched && categories.invalid ? 'has-danger': ''}`} >
          <label>Categories</label>
          <input type = "text" className = "form-control" { ... categories } />
          <div className = "form-control-feedback">
           {categories.touched ? categories.error : ''}
          </div>
        </div>
        <div className = {`form-group ${content.touched && content.invalid ? 'has-danger': ''}`} >
          <label>Content</label>
          <textarea className = "form-control" { ...content }/>
          <div className = "form-control-feedback">
           {content.touched ? content.error : ''}
          </div>
        </div>

        <button type = "submit" className = "btn btn-primary">Submit</button>
        <Link to = "/" className = "btn btn-danger">Cancel</Link>
      </form>
    );

  }

}


function validate(values) {

  const errors = {};

  if(!values.title) {
    errors.title = 'Enter a title';
  }
  if(!values.categories) {
    errors.categories = 'Enter a categories';
  }
  if(!values.content) {
    errors.content = 'Enter a content';
  }


  return errors;

}


// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  // this is where pass the configuration for redux form
  // what the form is called, sumbition, etc.
  form: 'PostsNewForm', // form name, doesn't need match
  fields: ['title', 'categories', 'content'], // the feild that are being used.
  validate
}, null, { createPost })(PostsNew);