import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header';
import {
  AddPostContainer,
  Form,
  FormField,
  Label,
  Input,
  TextArea,
  Button,
  Message,
  Error,
  FormFieldGrid,
} from './styledComponents';

const AddPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({
    id: null,
    title: '',
    author: '',
    content: '',
    publicationDate: '',
    message: ''
  });

  useEffect(() => {
    if (id) {
      const storedPosts = JSON.parse(localStorage.getItem('blogs')) || [];
      const existingPost = storedPosts.find(post => post.id === parseInt(id));
      if (existingPost) {
        setPost(existingPost);
      }
    }
  }, [id]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id, title, author, content, publicationDate } = post;
    const newPost = {
      id: id || Date.now(),
      title,
      author,
      summary: content.substring(0, 100),
      content,
      publicationDate
    };

    let blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    if (id) {
      const index = blogs.findIndex(blog => blog.id === id);
      blogs[index] = newPost;
    } else {
      blogs.push(newPost);
    }

    localStorage.setItem('blogs', JSON.stringify(blogs));

    setPost({
      ...post,
      message: id ? 'Post updated successfully!' : 'Post added successfully!',
      id: null,
      title: '',
      author: '',
      content: '',
      publicationDate: ''
    });
  };

  const { title, author, content, publicationDate, message } = post;

  return (
    <>
      <Header />
      <AddPostContainer>
        <h1>{id ? 'Edit Post' : 'Add Post'}</h1>
        {message && <Message>{message}</Message>}
        <Form onSubmit={handleSubmit}>
          <FormFieldGrid>
            <FormField>
              <Label>Title:</Label>
              <Input
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                required
              />
            </FormField>
            <FormField>
              <Label>Author:</Label>
              <Input
                type="text"
                name="author"
                value={author}
                onChange={handleChange}
                required
              />
            </FormField>
          </FormFieldGrid>
          <FormField>
            <Label>Content:</Label>
            <TextArea
              name="content"
              value={content}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <Label>Publication Date:</Label>
            <Input
              type="date"
              name="publicationDate"
              value={publicationDate}
              onChange={handleChange}
              required
            />
          </FormField>
          
          <Button type="submit">Submit</Button>
        </Form>
        {message && <Message>{message}</Message>}
        {post.error && <Error>{post.error}</Error>}
      </AddPostContainer>
    </>
  );
};

export default AddPost;
