import * as Yup from 'yup';

export const BookingSchema = Yup.object().shape({
  name: Yup.string()
    .required()
    .min(3, 'Name is too short - should be 3 chars minimum'),
  email: Yup.string().email('Email not valid, example user@mail.ua').required(),
  date: Yup.date()
    .nullable()
    .required()
    .min(
      new Date(new Date().setDate(new Date().getDate() - 1)),
      'You cannot enter a date from the past'
    ),
});
