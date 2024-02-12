import { FC } from 'react';
import OppsError from '../../../public/images/opps-error.png';

interface NoItemFoundProps {
  message?: string
}

const NoItemFound: FC<NoItemFoundProps> = ({message}) => (
  <div className="text-center" data-testid="NoItemFound">
    <h2 className="pb-[30px] text-[30px]">{message}</h2>
    <img className="inline-block align-middle" src={OppsError} alt="No data found"/>
  </div>
);

export default NoItemFound;
