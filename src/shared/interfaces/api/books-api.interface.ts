import { Book } from '../book.interface.ts';

export interface BooksListApiResponse {
  kind: string;
  totalItems: number;
  items: Book[]
}
