import React from 'react';
import useFetchData from '../hooks/useFetchData';

const PostsTable: React.FC = () => {
  const { data, loading } = useFetchData('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>No data found.</div>;

  return (
    <table border={1} cellPadding={8} cellSpacing={0}>
      <thead>
        <tr>
          <th>User ID</th>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {(data as any[]).map(post => (
          <tr key={post.id}>
            <td>{post.userId}</td>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PostsTable;
