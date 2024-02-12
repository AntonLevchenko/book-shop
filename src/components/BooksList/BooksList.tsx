import { FC } from 'react';
import { Book } from '../../shared/interfaces/book.interface.ts';
import BookItem from './BookItem/BookItem.tsx';

interface BooksListProps {
  books: Book[]
}

const BooksList: FC<BooksListProps> = ({books}) => (
  <div className="grid lg:grid-cols-2 gap-[80px]" data-testid="BooksList">
    { books.map((book: Book) => (
      <BookItem key={book.id+book.etag} book={book} />
    )) }
  </div>
);

export default BooksList;
