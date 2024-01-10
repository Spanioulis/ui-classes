import React from 'react';
import { clsx } from 'clsx';

type TButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    className: string;
};

const Button = ({ children, className, ...props }: TButton) => {
    return (
        <button {...props} className={clsx('text-gray-200 px-4 py-2 rounded-lg', className)}>
            {children}
        </button>
    );
};

export default Button;
