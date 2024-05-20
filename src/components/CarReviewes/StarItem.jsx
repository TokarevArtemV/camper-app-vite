import { Icons } from '../';

const StarItem = ({ reviewer_rating }) => {
  const starsArray = new Array(5);

  {
    return [...starsArray].map((_, index) => {
      return (
        <li key={index}>
          <Icons
            id={'icon-star'}
            size="16"
            fill={
              index + 1 <= reviewer_rating
                ? 'var(--primary-orange)'
                : 'var(--additional-white)'
            }
            stroke={
              index + 1 <= reviewer_rating
                ? 'var(--primary-orange)'
                : 'var(--additional-white)'
            }
          />
        </li>
      );
    });
  }
};

export default StarItem;
