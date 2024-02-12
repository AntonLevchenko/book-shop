import React, { FC, MouseEvent } from 'react';
import styles from './BookDetailsPage.module.scss';
import BookDetails from '../../BookDetails/BookDetails.tsx';
import Container from '../../Container/Container.tsx';
import { useParams } from 'react-router-dom';
import { useGetBookQuery } from '../../../services/books.ts';
import Button from '../../Forms/Button/Button.tsx';
import { useAppDispatch, useAppSelector } from '../../../store/hooks.ts';
import { addBook, cartBooks } from '../../../features/cart/cartSlice.ts';
import { findBookById } from '../../../shared/helpers/cart.helpers.ts';

interface PagesBookDetailsPageProps {}

const PagesBookDetailsPage: FC<PagesBookDetailsPageProps> = () => {
  const { bookId } = useParams();
  const { data, error } = useGetBookQuery(bookId!);
  const books = useAppSelector(cartBooks);
  const dispatch = useAppDispatch();
  const isBookAddedToCart = findBookById(books, bookId!);

  const handleAddToCardClick = (e: MouseEvent) => {
    dispatch(addBook(data!));
  }

  return <div className={styles.PagesBookDetailsPage} data-testid="PagesBookDetailsPage">
    <Container className="pt-[150px]">
      { data
        ? <>
          <div className="pb-[30px]">
            <BookDetails book={data}/>
          </div>
          { isBookAddedToCart
            ? <div className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50" role="alert">
              <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
              </svg>
              <span className="sr-only">Info</span>
              <p>
                <span className="font-medium">Success!</span> Book has been already added to the cart
              </p>
            </div>
            : <Button onClick={handleAddToCardClick} disabled={isBookAddedToCart}>Add To Card</Button>
          }
        </>
        : <div>loading</div> }
    </Container>
  </div>
};

export default PagesBookDetailsPage;
