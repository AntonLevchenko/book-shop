import React, { FC } from 'react';
import styles from './BookDetails.module.scss';
import { httpToHttps } from '../../shared/helpers/http-to-https.ts';
import TextTruncate from 'react-text-truncate';
import { Book } from '../../shared/interfaces/book.interface.ts';

interface BookDetailsProps {
  book: Book;
  short?: boolean;
}

const BookDetails: FC<BookDetailsProps> = ({book, short = false}) => {
  const volumeInfo = book.volumeInfo;

  return <div className={styles.BookDetails + ' flex items-start gap-4'} data-testid="BookDetails">
    <div className="min-w-[150px]">
          {/*replace http to https to prevent CORS error for the thumbnail*/}
          <img src={volumeInfo.imageLinks?.thumbnail && httpToHttps(volumeInfo.imageLinks.thumbnail)} alt={volumeInfo.title}/>
        </div>
        <div>
      <h3 className="mb-1.5 text-[25px]">{volumeInfo.title}</h3>
      <p className="mb-2.5 text-[16px] text-gray-400">By {volumeInfo.authors?.join(', ')}</p>
      {short
        ? <TextTruncate
          line={5}
          element="p"
          className="text-[16px] text-gray-600"
          truncateText="…"
          text={volumeInfo.description} />
        : <p className="text-[16px] text-gray-600">{volumeInfo.description}</p>}
    </div>
  </div>
};

export default BookDetails;
