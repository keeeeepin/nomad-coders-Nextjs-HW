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
}

export default function BookCardLists({ books }: BookCardListsProps) {
  return (
    <>
      <div className={styles.bookCardListsContainer}>
        {books.map((book) => (
          <BookCard key={book.rank} book={book} />
        ))}
      </div>
    </>
  );
}
