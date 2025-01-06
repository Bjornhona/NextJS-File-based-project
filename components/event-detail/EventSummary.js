import styles from './eventSummary.module.css';

function EventSummary(props) {
  const { title } = props;

  return (
    <div className={styles.summary}>
      <h2>{title}</h2>
    </div>
  );
}

export default EventSummary;