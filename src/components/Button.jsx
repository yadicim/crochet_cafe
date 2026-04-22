export const Button = ({ 
  className = "", 
  size = "default", 
  variant = "primary", 
  children, 
  ...props 
}) => {
  const baseClasses = "relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary: "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-lg shadow-[var(--color-primary)]/20 hover:brightness-110",
    secondary: "bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] border border-[var(--color-border)] hover:bg-[var(--color-muted)]",
    outline: "bg-transparent border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",
    ghost: "bg-transparent text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-muted)]",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    default: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};