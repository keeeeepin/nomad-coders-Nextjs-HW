import styels from './bookCard.module.css';

interface Book {
  amazon_product_url: string;
  author: string;
  book_image: string;
  description: string;
  title: string;
}

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  // const safeId = `book-${book.title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`;
  const safeId = `${book.title.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}`;

  return (
    <>
      <div className={styels.bookCardContainer}>
        <div className={styels.bookCoverImg}>
          <img src={book.book_image} alt={book.title} />
        </div>
        <div className={styels.bookTitle}>{book.title}</div>
        <div className={styels.author}>{book.author}</div>

        <div className={styels.buyBtn} onClick={() => window.open(`${book.amazon_product_url}`)}>
          BUY
        </div>
      </div>
    </>
  );
}
