import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface LuxuryButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: 'outline' | 'filled';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export const LuxuryButton = ({
  children,
  to,
  href,
  variant = 'outline',
  onClick,
  className = '',
  type = 'button',
}: LuxuryButtonProps) => {
  const baseStyles = `
    relative overflow-hidden inline-flex items-center justify-center
    px-8 py-4 font-sans text-xs uppercase tracking-[0.2em]
    transition-all duration-500 ease-out
    ${variant === 'outline' 
      ? 'border border-primary bg-transparent text-primary hover:text-background' 
      : 'border border-primary bg-primary text-background hover:bg-transparent hover:text-primary'
    }
    ${className}
  `;

  const content = (
    <>
      <motion.span
        className={`absolute inset-0 ${variant === 'outline' ? 'bg-primary' : 'bg-transparent'}`}
        initial={{ x: '-100%' }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{ zIndex: 0 }}
      />
      <span className="relative z-10">{children}</span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseStyles}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseStyles}>
        {content}
      </a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={baseStyles}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
};
