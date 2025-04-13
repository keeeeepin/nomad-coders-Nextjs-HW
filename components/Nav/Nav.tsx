import Link from 'next/link';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <>
      <div className={styles.nav}>
        <Link href="/">
          <div className={styles.home}>HOME</div>
        </Link>
        <Link href="/about">
          <div className={styles.about}>ABOUT</div>
        </Link>

        {/* <div className={styles.leftMenu}>
          <Link href="/about">
            <div className={styles.about}>ABOUT</div>
          </Link>
        </div> */}
      </div>
    </>
  );
}
