import styles from '../../styles/loading.module.css';

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loading}>Loading ... </div>
    </div>
  );
}
