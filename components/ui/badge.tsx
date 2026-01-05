import { cn } from '@/lib/utils';

export interface BadgeProps {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  className?: string;
  children: React.ReactNode;
}

export function Badge({
  variant = 'default',
  className,
  children,
}: BadgeProps) {
  const variantClasses = {
    default: 'bg-primary hover:bg-primary/80 border-transparent text-primary-foreground',
    secondary: 'bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground',
    destructive: 'bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground',
    outline: 'text-foreground',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </div>
  );
}