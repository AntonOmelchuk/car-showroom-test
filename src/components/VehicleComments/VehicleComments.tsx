import { TRANSLATIONS } from '../../constants/translations';
import { useReviewsStore } from '../../stores/useReviewsStore';
import type { Review } from '../../types/vehicle';
import AddCommentForm from './AddCommentForm';
import CommentItem from './CommentItem';
import styles from './VehicleComments.module.css';

interface VehicleCommentsProps {
  vehicleId: string | number;
  allReviews?: Review[];
}

export const VehicleComments = ({ vehicleId, allReviews = [] }: VehicleCommentsProps) => {
  const customReviewsMap = useReviewsStore((state) => state.customReviews);

  const customReviews = customReviewsMap[vehicleId] || [];

  const mergedReviews = [...customReviews, ...allReviews];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        {TRANSLATIONS.comments.title} ({mergedReviews.length})
      </h2>

      <div className={styles.grid}>
        {/* Left Column: Comments List */}
        <div className={styles.listContainer}>
          {mergedReviews.length === 0 ? (
            <p className={styles.noComments}>{TRANSLATIONS.comments.noComments}</p>
          ) : (
            <div className={styles.list}>
              {mergedReviews.map((review) => (
                <CommentItem key={review.id} review={review} />
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Add Form */}
        <div className={styles.formContainer}>
          <AddCommentForm vehicleId={vehicleId} />
        </div>
      </div>
    </section>
  );
};

export default VehicleComments;
