import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CarList, Filter } from '../../components';
import { clearCars } from '../../redux/carsSlice';
import { selectFavoriteCars } from '../../redux/selector';
import s from './Favorites.module.css';

const Favorites = () => {
  const favoritesCars = useSelector(selectFavoriteCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCars());
  }, [dispatch]);

  return (
    <section className={`${s.page_favorite_container} container`}>
      <CarList cars={favoritesCars} isFavorites={true} />
    </section>
  );
};

export default Favorites;
