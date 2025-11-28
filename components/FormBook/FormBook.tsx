import css from './FormBook.module.css';
const FormBook = () => {
  return (
    <form className={css.connected}>
      <h2 className={css.title}>Book your car now</h2>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>

      <label>
        <input type="text" name="name" placeholder="Name*" required />
      </label>

      <label>
        <input type="email" name="email" placeholder="Email*" required />
      </label>

      <label>
        <input type="date" name="date" placeholder="Booking date" />
      </label>

      <label>
        <textarea name="comment" placeholder="Comment"></textarea>
      </label>

      <button type="submit">Send</button>
    </form>
  );
};

export default FormBook;
