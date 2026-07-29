import { TRANSLATIONS } from '../../constants/translations';
import type { Review } from '../../types/vehicle';
import styles from './CommentItem.module.css';

interface CommentItemProps {
  review: Review;
}

export const CommentItem = ({ review }: CommentItemProps) => {
  const { reviewerName, rating, comment, date, isCustom } = review;

  const formattedDate = new Date(date).toLocaleDateString('uk-UA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className={`${styles.item} ${isCustom ? styles.customItem : ''}`}>
      <div className={styles.header}>
        <div className={styles.authorInfo}>
          <span className={styles.authorName}>{reviewerName}</span>
          {isCustom && <span className={styles.badge}>{TRANSLATIONS.comments.yourComment}</span>}
        </div>
        <span className={styles.date}>{formattedDate}</span>
      </div>

      <div className={styles.rating}>
        {'★'.repeat(rating)}
        {'☆'.repeat(5 - rating)}
      </div>

      <p className={styles.text}>{comment}</p>
    </article>
  );
};

export default CommentItem;
