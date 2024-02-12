import { FC } from 'react';
import HeroSection from '../../HeroSection/HeroSection.tsx';
import BooksList from '../../BooksList/BooksList.tsx';
import Container from '../../Container/Container.tsx';6
import { useAppSelector } from '../../../store/hooks.ts';
import { useGetBooksListQuery } from '../../../services/books.ts';
import { booksSearchText, booksSelectedGenre } from '../../../features/books/booksSlice.ts';
import NoItemFound from '../../NoItemFound/NoItemFound.tsx';
import GenreNavigation from '../../GenreNavigation/GenreNavigation.tsx';

interface PagesShopPageProps {}

const ShopPage: FC<PagesShopPageProps> = () => {
  const searchText = useAppSelector(booksSearchText)
  const genre = useAppSelector(booksSelectedGenre)
  const { data, error } =
    useGetBooksListQuery({
      query: searchText.trim(),
      genre: genre
    }, { skip: !searchText.trim() });

  return <div data-testid="PagesShopPage">
    <HeroSection/>
    <Container>
      <div className="flex py-[90px]">
        <GenreNavigation />
        <div className="py-[30px] px-[70px] grow bg-white shadow-xl shadow-gray-400">
          <h2 className="pb-[60px] text-[40px]">Recommended</h2>
          { data?.items && searchText && !error
            ? <BooksList books={data.items}/>
            : <NoItemFound message="Try to search, no data found" />
          }
        </div>
      </div>
    </Container>
  </div>
};

export default ShopPage;
