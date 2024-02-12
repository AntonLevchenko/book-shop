import { FC, ReactNode, MouseEvent } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  onClick: (e: MouseEvent) => void;
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  onClick, children, className, disabled, type = 'button'
                                           }) => (
  <div className={styles.FormsButton} data-testid="FormsButton">
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={'flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' + className}
    >
      {children}
    </button>
  </div>
);

export default Button;
