import styles from './book-category.module.css';

import Link from 'next/link';

// API
import { BASE_URL } from '../../app/constants';

// async function
async function getBookCategories() {
  const response = await fetch(`${BASE_URL}/lists`);

  const json = await response.json();
  console.log(json);
  return json;
}

export default async function BookCategory() {
  const bookCategories = await getBookCategories();

  return (
    <>
      <div className={styles.bookCategoryContainer}>
        {bookCategories.results.map((category) => (
          <Link href={`/books/${category.list_name.replace(/\s+/g, '-')}`} key={category.list_name}>
            <div className={styles.bookWrapper}>
              <div className={styles.category}>{category.list_name}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
