'use client';

import BookCard from './bookCard';
import styles from './bookCardLists.module.css';

interface Book {
  rank: number;
  amazon_product_url: string;
  author: string;
  book_image: string;
  description: string;
  title: string;
}

interface BookCardListsProps {
  books: Book[];
  category: string;
}

export default function BookCardLists({ books, category }: BookCardListsProps) {
  return (
    <>
      <div className={styles.currentCategory}>{category}</div>
      <div className={styles.bookCardListsContainer}>
        {books.map((book) => (
          <BookCard key={book.rank} book={book} />
        ))}
      </div>
    </>
  );
}
