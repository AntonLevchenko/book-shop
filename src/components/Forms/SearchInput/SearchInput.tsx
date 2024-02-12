import { ChangeEvent, FC } from 'react';
import Input from '../Input/Input.tsx';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

interface FormsSearchInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  placeholder?: string;
  name?: string;
  id?: string;
  label?: string;
  className?: string;
}

const FormsSearchInput: FC<FormsSearchInputProps> = (props) => {
  return <Input {...props} className={props.className + ' pl-11'}>
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <span className="text-gray-500 sm:text-sm">
        <MagnifyingGlassIcon className="h-6 w-6 text-black" />
      </span>
    </div>
  </Input>
};

export default FormsSearchInput;
