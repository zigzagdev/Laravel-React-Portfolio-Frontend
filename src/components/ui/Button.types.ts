export type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    className?: string;
    value?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
