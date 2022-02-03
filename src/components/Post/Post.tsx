import styles from './Post.module.css';

interface IProps {
  userId: number;
  title: string;
  body: string;
}

export const Post = ({ userId, title, body }: IProps) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.postTitles}>{title}</h2>
      <p>{body}</p>
      <p className={styles.postAuthor}>
        Author: <a href=''> {userId} Leanne Graham</a>
      </p>
    </div>
  );
};
