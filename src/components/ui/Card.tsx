import React from 'react';
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}
export function Card({
  children,
  className = '',
  hover = false,
  ...props
}: CardProps) {
  return (
    <div
      className={`bg-surface rounded-xl border border-border shadow-sm overflow-hidden ${hover ? 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-md' : ''} ${className}`}
      {...props}>
      
      {children}
    </div>);

}