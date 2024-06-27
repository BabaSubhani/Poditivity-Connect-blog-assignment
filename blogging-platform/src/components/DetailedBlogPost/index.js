import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header';
import {
  DetailedPostContainer,
  BlogTitle,
  BlogAuthor,
  BlogContent,
  BlogDate
} from './styledComponents'; 

const DetailedBlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({
    id: null,
    title: '',
    author: '',
    content: '',
    publicationDate: ''
  });

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('blogs')) || [];
    const existingPost = storedPosts.find(post => post.id === parseInt(id));
    if (existingPost) {
      setPost(existingPost);
    }
  }, [id]);

  return (
    <>
      <Header />
      <DetailedPostContainer>
        <BlogTitle>{post.title}</BlogTitle>
        <BlogAuthor>Author: {post.author}</BlogAuthor>
        <BlogContent>{post.content}</BlogContent>
        <BlogDate>Publication Date: {post.publicationDate}</BlogDate>
      </DetailedPostContainer>
    </>
  );
};

export default DetailedBlogPost;
