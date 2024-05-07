import s from './CarReviewesItem.module.css';
import StarItem from './StarItem';

const CarReviewesItem = ({
  review: { reviewer_name, reviewer_rating, comment },
}) => {
  return (
    <li className={s.list_item}>
      <div className={s.block1}>
        <div className={s.item_avatar}>
          {reviewer_name.charAt(0).toUpperCase()}
        </div>
        <div className={s.item_name_star}>
          <p>{reviewer_name}</p>
          <ul className={s.star_container}>
            <StarItem reviewer_rating={reviewer_rating} />
          </ul>
        </div>
      </div>
      <p>{comment}</p>
    </li>
  );
};

export default CarReviewesItem;
