import { Icons } from '../';

const StarItem = ({ reviewer_rating }) => {
  const starsArray = new Array(reviewer_rating);

  {
    return [...starsArray].map((_, index) => {
      return (
        <li key={index}>
          <Icons
            id={'icon-star'}
            size="16"
            fill="var(--primary-orange)"
            stroke="var(--primary-orange)"
          />
        </li>
      );
    });
  }
};

export default StarItem;
