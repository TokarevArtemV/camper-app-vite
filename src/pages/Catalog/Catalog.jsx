import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiGetCars } from '../../redux/operations';
import { selectAllCars, selectPage } from '../../redux/selector';
import { CarList, Filter } from 'components';
import s from './Catalog.module.css';

const Catalog = () => {
  const cars = useSelector(selectAllCars);
  const page = useSelector(selectPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetCars(page));
  }, [dispatch, page]);

  return (
    <section className={`${s.page_catalog_container} container`}>
      <Filter />
      <CarList cars={cars} />
    </section>
  );
};

export default Catalog;
