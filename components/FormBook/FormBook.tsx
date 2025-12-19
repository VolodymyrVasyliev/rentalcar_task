'use client';

import toast from 'react-hot-toast';
import css from './FormBook.module.css';
import { Formik, Form, Field } from 'formik';

type Props = {
  carId: string;
  carBrand: string;
};

const FormBook = ({ carId, carBrand }: Props) => {
  const today = new Date().toISOString().split('T')[0];

  return (
    <Formik
      initialValues={{
        carId,
        name: '',
        email: '',
        date: today,
        comment: '',
      }}
      onSubmit={(values, { resetForm }) => {
        toast.success(
          values.name + ', ' + carBrand + ' successfully booked 🚗',
        );
        console.log(values);
      }}
    >
      <Form className={css.connected}>
        <h2 className={css.title}>Book your car now</h2>

        <p className={css.text}>
          Stay connected! We are always ready to help you.
        </p>

        <label className={css.label}>
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="Name*"
            required
          />
        </label>

        <label className={css.label}>
          <Field
            className={css.input}
            type="email"
            name="email"
            placeholder="Email*"
            required
          />
        </label>

        <label className={css.label}>
          <Field className={css.input} type="date" name="date" />
        </label>

        <label className={css.label}>
          <Field
            as="textarea"
            className={css.textarea}
            name="comment"
            placeholder="Comment"
          />
        </label>

        <button className={css.button} type="submit">
          Send
        </button>
      </Form>
    </Formik>
  );
};

export default FormBook;
