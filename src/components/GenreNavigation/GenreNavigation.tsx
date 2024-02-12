import { FC } from 'react';
import SidebarNavigation, { NavigationListItem } from '../SidebarNavigation/SidebarNavigation.tsx';
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import { booksSelectedGenre, updateSelectedGenre } from '../../features/books/booksSlice.ts';

const navigationList: NavigationListItem[] = [
  {
    text: 'Business',
    value: 'Business'
  },
  {
    text: 'Science',
    value: 'Science'
  },
  {
    text: 'Fiction',
    value: 'Fiction'
  },
  {
    text: 'Philosophy',
    value: 'Philosophy'
  },
  {
    text: 'Biography',
    value: 'Biography'
  }
]

interface GenreNavigationProps {}

const GenreNavigation: FC<GenreNavigationProps> = () => {
  const genre = useAppSelector(booksSelectedGenre);
  const dispatch = useAppDispatch();

  const onGenreSelected = (genre: string) => {
    dispatch(updateSelectedGenre(genre));
  }

  return <div className="min-w-[250px]" data-testid="GenreNavigation">
    <SidebarNavigation title="Book by Genre" active={genre} navigationList={navigationList} onChange={onGenreSelected} />
  </div>
};

export default GenreNavigation;
