import { useState, useEffect } from 'react';
import { Post } from '../Post/Post';
import styles from './PostList.module.css';

export const PostList = () => {
  const [post, setPost] = useState([]);

  const getPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();
    setPost(data);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className={styles.row}>
      {post.map((item: { userId: number; title: string; body: string }) => {
        return (
          <Post title={item.title} body={item.body} userId={item.userId} />
        );
      })}
    </div>
  );
};
