import React from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}
export function Input({
  label,
  error,
  className = '',
  id,
  ...props
}: InputProps) {
  const inputId = id || props.name;
  return (
    <div className="w-full">
      {label &&
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-text mb-1">
        
          {label}
        </label>
      }
      <input
        id={inputId}
        className={`w-full px-4 py-2 rounded-md bg-background border ${error ? 'border-red-500' : 'border-border'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-text placeholder-text-muted ${className}`}
        {...props} />
      
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>);

}