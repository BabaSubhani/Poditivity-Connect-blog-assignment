// styledComponents.js (or any appropriate file name)

import styled from 'styled-components';

export const DetailedPostContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const BlogTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const BlogAuthor = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 5px;
`;

export const BlogContent = styled.div`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

export const BlogDate = styled.p`
  font-size: 14px;
  color: #999;
`;
