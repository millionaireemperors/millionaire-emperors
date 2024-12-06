import { cn } from '../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  glowing?: boolean;
}

export function Button({
  children,
  className,
  variant = 'primary',
  glowing = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105',
        variant === 'primary' &&
          'bg-emperor-white text-emperor-black border-2 border-emperor-black',
        variant === 'secondary' &&
          'bg-transparent text-emperor-white border-2 border-emperor-white',
        glowing &&
          'animate-pulse shadow-lg shadow-emperor-white/50 hover:shadow-emperor-white/70',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}