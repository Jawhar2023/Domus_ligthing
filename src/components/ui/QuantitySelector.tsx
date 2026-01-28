import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  className?: string;
}

export const QuantitySelector = ({
  value,
  onChange,
  min = 1,
  max = 99,
  className = '',
}: QuantitySelectorProps) => {
  const handleDecrease = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const newValue = value - 1;
    if (newValue >= min) {
      onChange(newValue);
    }
  };

  const handleIncrease = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const newValue = value + 1;
    if (newValue <= max) {
      onChange(newValue);
    }
  };

  const isDecreaseDisabled = value <= min;
  const isIncreaseDisabled = value >= max;

  return (
    <div className={`flex items-center overflow-hidden rounded-sm border border-border bg-muted/20 ${className}`}>
      <button
        onClick={handleDecrease}
        disabled={isDecreaseDisabled}
        type="button"
        className="relative z-10 flex h-10 w-10 flex-shrink-0 cursor-pointer items-center justify-center border-r border-border transition-all duration-200 hover:bg-gold/10 active:scale-95 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4 text-crystal" />
      </button>
      <span className="min-w-[3rem] flex-shrink-0 px-2 text-center font-sans text-base font-medium text-crystal">
        {value}
      </span>
      <button
        onClick={handleIncrease}
        disabled={isIncreaseDisabled}
        type="button"
        className="relative z-10 flex h-10 w-10 flex-shrink-0 cursor-pointer items-center justify-center border-l border-border transition-all duration-200 hover:bg-gold/10 active:scale-95 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4 text-crystal" />
      </button>
    </div>
  );
};
