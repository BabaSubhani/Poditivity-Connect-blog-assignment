// styledComponents.js (or your styled-components file)

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  padding: 20px;
`;

export const BlogList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const BlogItem = styled.li`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
`;

export const BlogTitle = styled.h2`
  margin: 0;
`;

export const BlogAuthor = styled.p`
  margin: 5px 0;
`;

export const BlogSummary = styled.p`
  margin: 5px 0;
`;

export const BlogDate = styled.p`
  margin: 5px 0;
`;

export const BlogLink = styled(Link)`
  text-decoration: none;
  color: #333; /* Adjust color as per your design */
  display: block;
  transition: all 0.3s ease;

  &:hover {
    color: #007bff; /* Change to the hover color you prefer */
  }
`;

export const Button = styled(Link)`
  background-color: #007bff;
  color: white;
  padding: 5px 10px;
  text-decoration: none;
  margin-right: 10px;
`;

export const DeleteButton = styled.button`
  background-color: red;
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
`;
