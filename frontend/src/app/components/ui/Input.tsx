import { InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export default function Input({
  className,
  error,
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      <input
        className={clsx(
          "w-full rounded-md border border-gray-300 px-4 py-2 outline-none transition input-field input-field:focus",
          "focus:border-green-500 focus:ring-2 focus:ring-green-500",
          error && "border-red-500",
          className
        )}
        {...props}
      />

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}