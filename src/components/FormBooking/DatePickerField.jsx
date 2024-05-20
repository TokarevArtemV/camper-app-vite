import Datepicker, { registerLocale } from 'react-datepicker';
import Icons from '../Icons/Icons';
import s from './FormBooking.module.css';
import { enGB } from 'date-fns/locale';

const locale = {
  ...enGB,
  localize: {
    ...enGB.localize,
    day: (n) => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][n],
  },
};

registerLocale('custom', locale);

const DatepickerField = ({ field, form, ...props }) => (
  // OR const { setFieldValue } = form;
  // OR const { value, name } = field;

  <Datepicker
    showIcon
    icon={<Icons id={'icon-schedule'} size="20" fill="none" />}
    toggleCalendarOnIconClick
    dateFormat="dd/MM/yyyy"
    placeholderText="Booking date"
    className={s.form_input__date}
    calendarClassName={s.calendar_datepicker__container}
    locale="custom"
    {...field}
    selected={field.value}
    onChange={(val) => form.setFieldValue(field.name, val)}
  />
);
export default DatepickerField;
