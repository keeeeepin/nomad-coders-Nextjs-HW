import styles from '../../../styles/about.module.css';

export const metadata = {
  title: 'book-explorer-about',
  description: 'description for book-explorer site',
};

export default function About() {
  return (
    <>
      <div className={styles.aboutContainer}>
        <h1>Find a Book You'll Love</h1>
        <p>Welcome the official explorer for the New York Times Best Seller List explorer.</p>
      </div>
    </>
  );
}
