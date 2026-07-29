import { useState } from 'react';

import { TRANSLATIONS } from '../../constants/translations';
import { useReviewsStore } from '../../stores/useReviewsStore';
import styles from './AddCommentForm.module.css';

interface AddCommentFormProps {
  vehicleId: string | number;
}

interface FormErrors {
  reviewerName?: string;
  comment?: string;
}

// Production limits constants
const NAME_MAX_LENGTH = 30;
const COMMENT_MAX_LENGTH = 500;

// Regex for valid name: unicode letters, spaces, hyphens, and apostrophes
const NAME_REGEX = /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ'’\s-]+$/;

export const AddCommentForm = ({ vehicleId }: AddCommentFormProps) => {
  const addReview = useReviewsStore((state) => state.addReview);

  const [reviewerName, setReviewerName] = useState('');
  const [rating, setRating] = useState<number>(5);
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  // Input change handlers with immediate error clearing for better UX
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setReviewerName(val);

    if (errors.reviewerName) {
      setErrors((prev) => ({ ...prev, reviewerName: undefined }));
    }
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setComment(val);

    if (errors.comment) {
      setErrors((prev) => ({ ...prev, comment: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    const trimmedName = reviewerName.trim();
    const trimmedComment = comment.trim();

    // 1. Validate Name
    if (!trimmedName) {
      newErrors.reviewerName = TRANSLATIONS.comments.errors.nameRequired;
    } else if (trimmedName.length > NAME_MAX_LENGTH) {
      newErrors.reviewerName = TRANSLATIONS.comments.errors.nameMaxLength;
    } else if (!NAME_REGEX.test(trimmedName)) {
      newErrors.reviewerName = TRANSLATIONS.comments.errors.invalidName;
    }

    // 2. Validate Comment Text
    if (!trimmedComment) {
      newErrors.comment = TRANSLATIONS.comments.errors.commentRequired;
    } else if (trimmedComment.length > COMMENT_MAX_LENGTH) {
      newErrors.comment = TRANSLATIONS.comments.errors.commentMaxLength;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    addReview(vehicleId, {
      reviewerName: reviewerName.trim(),
      rating,
      comment: comment.trim(),
    });

    // Reset form state
    setReviewerName('');
    setComment('');
    setRating(5);
    setErrors({});
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <h3 className={styles.formTitle}>{TRANSLATIONS.comments.formTitle}</h3>

      {/* Name Field */}
      <div className={styles.fieldGroup}>
        <label htmlFor="reviewerName" className={styles.label}>
          {TRANSLATIONS.comments.nameLabel} *
        </label>
        <input
          id="reviewerName"
          type="text"
          className={`${styles.input} ${errors.reviewerName ? styles.inputError : ''}`}
          placeholder={TRANSLATIONS.comments.namePlaceholder}
          value={reviewerName}
          onChange={handleNameChange}
          maxLength={NAME_MAX_LENGTH}
        />
        {errors.reviewerName && <span className={styles.errorMessage}>{errors.reviewerName}</span>}
      </div>

      {/* Rating Field */}
      <div className={styles.fieldGroup}>
        <label htmlFor="rating" className={styles.label}>
          {TRANSLATIONS.comments.ratingLabel}
        </label>
        <select
          id="rating"
          className={styles.select}
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          <option value={5}>★★★★★ (5/5)</option>
          <option value={4}>★★★★☆ (4/5)</option>
          <option value={3}>★★★☆☆ (3/5)</option>
          <option value={2}>★★☆☆☆ (2/5)</option>
          <option value={1}>★☆☆☆☆ (1/5)</option>
        </select>
      </div>

      {/* Comment Textarea */}
      <div className={styles.fieldGroup}>
        <label htmlFor="comment" className={styles.label}>
          {TRANSLATIONS.comments.commentLabel} *
        </label>
        <textarea
          id="comment"
          className={`${styles.textarea} ${errors.comment ? styles.inputError : ''}`}
          placeholder={TRANSLATIONS.comments.commentPlaceholder}
          value={comment}
          onChange={handleCommentChange}
          rows={4}
          maxLength={COMMENT_MAX_LENGTH}
        />
        <div className={styles.textareaFooter}>
          {errors.comment ? (
            <span className={styles.errorMessage}>{errors.comment}</span>
          ) : (
            <span className={styles.charCounter}>
              {comment.length}/{COMMENT_MAX_LENGTH}
            </span>
          )}
        </div>
      </div>

      <button type="submit" className={styles.submitBtn}>
        {TRANSLATIONS.comments.submitBtn}
      </button>
    </form>
  );
};

export default AddCommentForm;
