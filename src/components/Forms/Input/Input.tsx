import { ChangeEvent, FC, ReactNode } from 'react';
import styles from './Input.module.scss';

interface FormsInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  type?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  label?: string;
  className?: string;
  children?: ReactNode;
}

const FormsInput: FC<FormsInputProps> = (props) => {
  const type = props.type || 'text';
  return <div className={styles.FormsInput} data-testid="FormsInput">
    <div>
      <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
        { props.label }
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        { props.children }
        <input
          type={type}
          name={props.name}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          className={
            "block w-full rounded-md border-0 py-1.5 px-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
            + props.className
          }
          placeholder={props.placeholder}
        />
      </div>
    </div>
  </div>
};

export default FormsInput;
