import BookCategory from '../../components/book-category/book-category';

export const BASE_URL = 'https://books-api.nomadcoders.workers.dev';

export const metadata = {
  title: 'book-explorer',
  description: 'official explorer for the New York Times Best Seller List explorer',
};

export default function App() {
  return (
    <>
      <BookCategory />
    </>
  );
}
