import { BASE_URL } from '../../../constants';

import BookCardLists from '../../../../components/category-detail/bookCardLists';

async function getCategoryBooks({ category }: { category: string }) {
  console.log(category);

  const response = await fetch(`${BASE_URL}/list?name=${category}`);
  const json = await response.json();

  console.log(json);

  return json;
}

export async function generateMetadata({ params }: { params: { category: string } }) {
  const { category } = params;

  return {
    title: `${category} Books`,
    description: `Explore the best selling ${category} books`,
  };
}

export default async function CategoryDetail({ params }: { params: { category: string } }) {
  const { category } = params;
  const books = await getCategoryBooks({ category });

  return <BookCardLists books={books.results.books} />;
}
