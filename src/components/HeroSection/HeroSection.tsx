import { ChangeEvent, FC } from 'react';
import styles from './HeroSection.module.scss';
import HeroImage from '../../../public/images/hero-img.png';
import Container from '../Container/Container.tsx';
import FormsSearchInput from '../Forms/SearchInput/SearchInput.tsx';
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import { booksSearchText, updateSearchText } from '../../features/books/booksSlice.ts';

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => {
  const bookSearchText = useAppSelector(booksSearchText);
  const dispatch = useAppDispatch()

  const onBookSearchTextChanged = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearchText(e.target.value));
  }

  return <div className={styles.HeroSection + ' pt-16 bg-white bg-cover md:bg-contain'} data-testid="HeroSection">
    <Container>
      <div className="sm:flex items-center gap-4 justify-between">
        <div>
          <h1 className="sm:max-w-2xl mb-2 text-7xl uppercase ">read and add your insight</h1>
          <p className="mb-4 text-2xl capitalize">find your favorite book and read it here for free</p>
          <FormsSearchInput value={bookSearchText} onChange={onBookSearchTextChanged} placeholder="Search Book" className="max-w-[400px]" />
        </div>
        <img src={HeroImage} alt=""/>
      </div>
    </Container>
  </div>
};

export default HeroSection;
