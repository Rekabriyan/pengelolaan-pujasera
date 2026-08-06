"use client";

import { Search } from "lucide-react";
import Input from "../ui/Input";

interface SearchBarProps {
  value: string;
  placeholder?: string;
  buttonText?: string;
  loading?: boolean;
  onChange: (value: string) => void;
  onSearch: () => void;
}

export default function SearchBar({
  value,
  placeholder = "Search Food, Stall...",
//   loading = false,
  onChange,
  onSearch,
}: SearchBarProps) {
  return (
    <div className="flex w-full gap-2">
      <div className="relative flex-1">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <Input
          value={value}
          placeholder={placeholder}
          className="pl-10"
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch();
            }
          }}
        />
      </div>

      {/* <Button loading={loading} onClick={onSearch}>
        {buttonText}
      </Button> */}
    </div>
  );
}