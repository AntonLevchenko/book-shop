import { FC } from 'react';
import styles from './BookItem.module.scss';
import { Book } from '../../../shared/interfaces/book.interface.ts';
import { Link } from 'react-router-dom';
import BookDetails from '../../BookDetails/BookDetails.tsx';

interface BookItemProps {
  book: Book
}

const BookItem: FC<BookItemProps> = ({book}) => {
  return <div className={styles.BookItem + ' flex items-start gap-4'} data-testid="BookItem">
    <Link to={book.id}>
      <BookDetails book={book} short={true} />
    </Link>
  </div>
};

export default BookItem;
