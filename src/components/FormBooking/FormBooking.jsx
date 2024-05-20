import { Formik, Field } from 'formik';
import { Button } from '../';
import { BookingSchema } from './validationShema';
import DatepickerField from './DatePickerField';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';
import s from './FormBooking.module.css';

const handleSubmit = (value, action) => {
  action.resetForm();

  window.location.reload();
};

const FormBooking = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        date: '',
        comment: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={BookingSchema}
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          handleBlur,
          isValid,
          dirty,
          errors,
          touched,
        } = formik;
        return (
          <form className={s.form_container} onSubmit={handleSubmit}>
            <h3 className={s.form_title}>Book your campervan now</h3>
            <p className={s.form_text}>
              Stay connected! We are always ready to help you.
            </p>
            <div className={s.form_input__container}>
              <Field
                className={s.form_input}
                type="text"
                name="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                title="Name should be 3 chars minimum, example `Art`"
              />
              {errors.name && touched.name ? (
                <div className={s.error_container}>{errors.name}</div>
              ) : null}
            </div>
            <div className={s.form_input__container}>
              <Field
                className={s.form_input}
                type="email"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                title="Email should be valid, example `example@mail.com`"
              />{' '}
              {errors.email && touched.email ? (
                <div className={s.error_container}>{errors.email}</div>
              ) : null}
            </div>
            <div className={s.form_input__container}>
              <Field
                name="date"
                className={s.form_input__date}
                component={DatepickerField}
                type="date"
                placeholder="Booking date"
                value={values.date}
                onChange={handleChange}
                onBlur={handleBlur}
                title="Booking date should be valid, example `01.01.2024`"
              />{' '}
              {errors.date && touched.date ? (
                <div className={s.error_container}>{errors.date}</div>
              ) : null}
            </div>
            <div className={s.form_input__container}>
              <Field
                className={s.form_input_comment}
                as="textarea"
                name="comment"
                placeholder="Comment"
                value={values.comment}
                onChange={handleChange}
                onBlur={handleBlur}
                title="Comment"
              />
            </div>

            <Button
              className={'send'}
              type="submit"
              isDisabled={!(dirty && isValid)}
            >
              Send
            </Button>
          </form>
        );
      }}
    </Formik>
  );
};

export default FormBooking;
