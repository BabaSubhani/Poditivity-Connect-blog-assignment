import React, { Component } from 'react';
import Header from '../Header';
import {
  HomeContainer,
  BlogList,
  BlogItem,
  BlogTitle,
  BlogAuthor,
  BlogSummary,
  BlogDate,
  BlogLink, // Updated import
  Button,
  DeleteButton
} from './styledComponents';

class Home extends Component {
  state = {
    blogs: []
  };

  componentDidMount() {
    this.getBlogsData();
  }

  getBlogsData = () => {
    const data = JSON.parse(localStorage.getItem('blogs')) || [];
    this.setState({ blogs: data });
  };

  handleDelete = (id) => {
    const blogs = this.state.blogs.filter(blog => blog.id !== id);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    this.setState({ blogs });
  };

  render() {
    const { blogs } = this.state;
    return (
      <>
        <Header />
        <HomeContainer>
          <h1>Blog Posts</h1>
          {blogs.length === 0 ? (
            <p>No blog posts available.</p>
          ) : (
            <BlogList>
              {blogs.map(blog => (
                <BlogLink key={blog.id} to={`/blog/${blog.id}`}>
                  <BlogItem>
                    <BlogTitle>{blog.title}</BlogTitle>
                    <BlogAuthor>Author: {blog.author}</BlogAuthor>
                    <BlogSummary>Summary: {blog.summary}</BlogSummary>
                    <BlogDate>Publication Date: {blog.publicationDate}</BlogDate>
                    <Button to={`/editpost/${blog.id}`}>Edit</Button>
                    <DeleteButton onClick={() => this.handleDelete(blog.id)}>Delete</DeleteButton>
                  </BlogItem>
                </BlogLink>
              ))}
            </BlogList>
          )}
        </HomeContainer>
      </>
    );
  }
}

export default Home;
