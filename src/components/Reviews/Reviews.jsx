import { Icons } from '../';
import s from './Reviews.module.css';

const Reviews = ({ className, rating, reviews, location }) => {
  return (
    <div className={`${s.reviewsContainer} ${className ? s[className] : ''}`}>
      <span>
        <Icons
          id={'icon-star'}
          stroke={`var(--primary-orange)`}
          fill={`var(--primary-orange)`}
        />
        {rating}
        {reviews.length === 1
          ? `(${reviews.length} review)`
          : `(${reviews.length} reviews)`}
      </span>
      <span>
        <Icons id={'icon-map-pin'} fill="none" />
        {location}
      </span>
    </div>
  );
};

export default Reviews;
