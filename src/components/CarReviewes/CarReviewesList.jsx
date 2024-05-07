import CarReviewesItem from './CarReviewesItem';
import s from './CarReviewesList.module.css';

const CarReviewesList = ({ carDatails: { reviews } }) => {
  return (
    <ul className={s.reviews_list}>
      {reviews.length > 0 &&
        reviews.map((review, index) => (
          <CarReviewesItem key={index} review={review} />
        ))}
    </ul>
  );
};

export default CarReviewesList;
