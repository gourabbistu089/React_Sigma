import React from 'react';
import { useParams } from 'react-router-dom';

function Blog() {
  const { id } = useParams();
  return (
    <div>Blog Id: {id}</div>
  );
}

export default Blog;