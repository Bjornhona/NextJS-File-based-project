import Button from '../ui/Button';
import styles from './eventsSearch.module.css';
import {useRef} from 'react';

const EventsSearch = ({onSearch}) => {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchYear = yearInputRef.current.value;
    const searchMonth = monthInputRef.current.value;
    onSearch(searchYear, searchMonth);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="searchYear">Year</label>
          <select ref={yearInputRef} name="searchYear" id="searchYear">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="searchMonth">Month</label>
          <select ref={monthInputRef} name="searchMonth" id="searchMonth">
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button onClick={() => {}}>Find Event</Button>
    </form>
  )
}

export default EventsSearch;
