import { FC } from 'react';
import { Book } from '../../../shared/interfaces/book.interface.ts';
import { httpToHttps } from '../../../shared/helpers/http-to-https.ts';
import Button from '../../Forms/Button/Button.tsx';

interface CartListItemProps {
  book: Book;
  count: number;
  onRemove: (book: Book) => void
}

const CartListItem: FC<CartListItemProps> = ({book, count, onRemove}) => {
  const volumeInfo = book.volumeInfo;

  return  <div className="flex py-6" data-testid="CartListItem">
    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
      <img
        src={httpToHttps(volumeInfo.imageLinks.thumbnail)}
        alt={volumeInfo.title}
        className="h-full w-full object-cover object-center"
      />
    </div>
    <div className="ml-4 flex flex-1 flex-col">
      <div>
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3>
            {volumeInfo.title}
          </h3>
          <p className="ml-4">{volumeInfo.pageCount}</p>
        </div>
      </div>
      <div className="flex flex-1 items-end justify-between text-sm">
        <p className="text-gray-500">Count {count}</p>

        <div className="flex">
          <Button onClick={() => onRemove(book)}>Remove</Button>
        </div>
      </div>
    </div>
  </div>
};

export default CartListItem;
