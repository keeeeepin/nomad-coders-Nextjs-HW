import { BASE_URL } from '../../../constants';

import BookCardLists from '../../../../components/category-detail/bookCardLists';
import { Metadata } from 'next';

async function getCategoryBooks(category: string) {
  console.log(category);

  const response = await fetch(`${BASE_URL}/list?name=${category}`);
  const json = await response.json();

  console.log(json);

  return json;
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const category = (await params).category;
  return {
    title: `${category} Books`,
    description: `Explore the best selling ${category} books`,
  };
}

export default async function CategoryDetail({ params }: { params: Promise<{ category: string }> }) {
  const category = (await params).category;
  const books = await getCategoryBooks(category);

  return <BookCardLists books={books.results.books} />;
}
