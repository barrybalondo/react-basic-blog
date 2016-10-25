import React from 'react';
import { Route, IndexRoute } from 'react-router'; // IndexRoute provides a parent to child rendering

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

// :id is automatically parsed by react-router -> this.props.params.id
export default (
  <Route path = "/"  component = { App } >
    <IndexRoute component = { PostsIndex } />
    <Route path = "/posts/new" component = { PostsNew } />
    <Route path = "/posts/:id" component = { PostsShow } />
  </Route>
);
