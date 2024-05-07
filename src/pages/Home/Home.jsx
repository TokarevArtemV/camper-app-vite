import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCars } from '../../redux/carsSlice';
import { Button } from '../../components';
import s from './Home.module.css';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/catalog');
  };

  useEffect(() => {
    return () => {
      dispatch(clearCars());
    };
  }, [dispatch]);

  return (
    <section className={s.page_home}>
      <div className={s.home_page_background} />
      <div className={`${s.page_home_image_container}`} />
      <h1 className={s.page_home_title}>
        RENT OF CAMPERS
        <br /> FOR ACTIVE RECREATION
      </h1>

      <Button onClick={handleNavigate} className="rent">
        rent now
      </Button>
    </section>
  );
};

export default Home;
