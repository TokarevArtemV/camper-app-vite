import { useDispatch, useSelector } from 'react-redux';
import { Button, CarItem } from '../';
import { incrementPage } from '../../redux/carsSlice';
import { selectFilteredCars, selectIsLoadMore } from '../../redux/selector';
import s from './CarList.module.css';

const CarList = ({ cars, isFavorites = false }) => {
  const isLoadMore = useSelector(selectIsLoadMore);
  const filteredCars = useSelector(selectFilteredCars);
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(incrementPage());
  };

  const isLoadMoreShow = () => {
    if (cars.length > 0 && !isFavorites && isLoadMore && !filteredCars)
      return true;
    return false;
  };

  return (
    <ul className={`${s.carList}`}>
      {cars.length > 0 &&
        cars.map((car, index) => <CarItem key={index} carDatails={car} />)}
      {isLoadMoreShow() && (
        <Button onClick={handleLoadMore} className={'loadMore'}>
          Load more
        </Button>
      )}
    </ul>
  );
};

export default CarList;
