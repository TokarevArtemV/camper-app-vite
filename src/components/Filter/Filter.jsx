import { useDispatch, useSelector } from 'react-redux';
import { addFilteredCars, clearFilteredCars } from '../../redux/carsSlice';
import { selectAllCars } from '../../redux/selector';
import { Formik, Field } from 'formik';
import { Button, Icons } from '../';
import * as Yup from 'yup';
import s from './Filter.module.css';

const Filter = () => {
  const cars = useSelector(selectAllCars);
  const dispatch = useDispatch();

  const handleSubmit = (value, action) => {
    const searchQuery = Object.assign({}, value);

    if (searchQuery.location === '') delete searchQuery.location;
    if (searchQuery.transmission)
      searchQuery.transmission = searchQuery.transmission.join();

    const searchKeys = Object.keys(searchQuery);
    const filteredCars = [];

    cars.forEach((car) => {
      for (let key of searchKeys) {
        if (typeof car[key] === 'object') {
          let serchKey = searchQuery[key];
          for (let arrKey of serchKey) {
            if (!car[key].hasOwnProperty(arrKey)) return;
            if (car[key][arrKey] < 1) return;
          }
        } else {
          if (!car[key].toLowerCase().includes(searchQuery[key].toLowerCase()))
            return;
        }
      }
      filteredCars.push(car);
    });

    dispatch(addFilteredCars(filteredCars));

    action.resetForm();
  };

  const clearSearch = () => dispatch(clearFilteredCars());

  return (
    <Formik
      initialValues={{
        location: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={Yup.object().shape({
        location: Yup.string().min(
          3,
          'Location is too short - should be 3 chars minimum'
        ),
      })}
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          handleBlur,
          isValid,
          dirty,
        } = formik;
        return (
          <form className={s.filter_container} onSubmit={handleSubmit}>
            <span className={s.form_filtersText}>Location</span>
            <div className={s.form_locationInputContainer}>
              <Icons id={'icon-map-pin'} fill="none" size="18" height="20" />
              <Field
                className={s.form_locationInput}
                id="location"
                type="text"
                name="location"
                placeholder="City"
                value={values.location}
                onChange={handleChange}
                onBlur={handleBlur}
                title="Location should be 3 chars minimum, example `Kharkiv, Ukraine`"
              />
            </div>

            <p className={s.form_subtext}>Filters</p>

            <h3 className={s.form_filtersTitle}>Vehicle equipment</h3>
            <div className={s.form_equipmentContainer}>
              <label htmlFor="details_ac" className={s.form_equipmentLabel}>
                <Icons id={'icon-airConditioner'} size="32" />
                <p>AC</p>

                <Field
                  className={s.form_equipmentCheckbox}
                  id="details_ac"
                  type="checkbox"
                  name="details"
                  value="airConditioner"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  title="Location should be 3 chars minimum, example `kha`"
                />
                <span className={s.form_equipmentCheckmark}></span>
              </label>

              <label htmlFor="details_tm" className={s.form_equipmentLabel}>
                <Icons id={'icon-transmission'} fill="none" size="32" />
                <p>Automatic</p>
                <Field
                  className={s.form_equipmentCheckbox}
                  id="details_tm"
                  type="checkbox"
                  name="transmission"
                  value="automatic"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  title="Location should be 3 chars minimum, example `kha`"
                />
                <span className={s.form_equipmentCheckmark}></span>
              </label>

              <label
                htmlFor="details_kitchen"
                className={s.form_equipmentLabel}
              >
                <Icons id={'icon-kitchen'} fill="none" size="32" />
                <p>Kitchen</p>
                <Field
                  className={s.form_equipmentCheckbox}
                  id="details_kitchen"
                  type="checkbox"
                  name="details"
                  value="kitchen"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  title="Location should be 3 chars minimum, example `kha`"
                />
                <span className={s.form_equipmentCheckmark}></span>
              </label>

              <label htmlFor="details_tv" className={s.form_equipmentLabel}>
                <Icons id={'icon-tv'} fill="none" size="32" />
                <p>TV</p>
                <Field
                  className={s.form_equipmentCheckbox}
                  id="details_tv"
                  type="checkbox"
                  name="details"
                  value="TV"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  title="Location should be 3 chars minimum, example `kha`"
                />
                <span className={s.form_equipmentCheckmark}></span>
              </label>

              <label htmlFor="details_shower" className={s.form_equipmentLabel}>
                <Icons id={'icon-shower'} fill="none" size="32" />
                <p>Shower/WC</p>
                <Field
                  className={s.form_equipmentCheckbox}
                  id="details_shower"
                  type="checkbox"
                  name="details"
                  value="shower"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  title="Location should be 3 chars minimum, example `kha`"
                />
                <span className={s.form_equipmentCheckmark}></span>
              </label>
            </div>

            <h3 className={s.form_filtersTitle}>Vehicle type</h3>
            <div className={s.form_typeContainer}>
              <label htmlFor="type_van" className={s.form_typeLabel}>
                <Icons id={'icon-van'} size="40" height="28" />
                <p>Van</p>
                <Field
                  className={s.form_typeRadioButton}
                  id="type_van"
                  type="radio"
                  name="form"
                  value="panelTruck"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  title="Location should be 3 chars minimum, example `kha`"
                />
                <span className={s.form_equipmentCheckmark}></span>
              </label>

              <label htmlFor="type_fully" className={s.form_typeLabel}>
                <Icons id={'icon-fully'} size="40" height="28" />
                <p>Fully Integrated</p>
                <Field
                  className={s.form_typeRadioButton}
                  id="type_fully"
                  type="radio"
                  name="form"
                  value="fullyIntegrated"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  title="Location should be 3 chars minimum, example `kha`"
                />
                <span className={s.form_equipmentCheckmark}></span>
              </label>

              <label htmlFor="type_alcove" className={s.form_typeLabel}>
                <Icons id={'icon-alcove'} size="40" height="28" />
                <p>Alcove</p>
                <Field
                  className={s.form_typeRadioButton}
                  id="type_alcove"
                  type="radio"
                  name="form"
                  value="alcove"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  title="Location should be 3 chars minimum, example `kha`"
                />
                <span className={s.form_equipmentCheckmark}></span>
              </label>
            </div>

            <div className={s.buttonContainer}>
              <Button
                className={'search'}
                type="submit"
                // isDisabled={!(dirty && isValid)}
              >
                Search
              </Button>
              <Button
                className={'clearSearch'}
                type="button"
                onClick={clearSearch}
                // isDisabled={!(dirty && isValid)}
              >
                Clear filters
              </Button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default Filter;
