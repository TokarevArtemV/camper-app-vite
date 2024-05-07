import { useDispatch, useSelector } from 'react-redux';
import { Button, CarItem } from '../';
import { incrementPage } from '../../redux/carsSlice';
import { selectIsLoadMore } from '../../redux/selector';
import s from './CarList.module.css';

const CarList = ({ cars, isFavorites = false }) => {
  const isLoadMore = useSelector(selectIsLoadMore);
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(incrementPage());
  };

  return (
    <ul className={`${s.carList}`}>
      {cars.length > 0 &&
        cars.map((car, index) => <CarItem key={index} carDatails={car} />)}
      {cars.length > 0 && !isFavorites && isLoadMore && (
        <Button onClick={handleLoadMore} className={'loadMore'}>
          Load more
        </Button>
      )}
    </ul>
  );
};

export default CarList;
