import React from 'react';

interface AddressInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const AddressInput: React.FC<AddressInputProps> = ({ value, onChange }) => {
  return (
    <div className="bg-white flex min-h-[52px] w-full max-w-[353px] gap-2 text-xl text-[rgba(28,28,28,1)] whitespace-nowrap mt-4 px-2.5 py-3 rounded-[14px]">
      <label className="font-normal" htmlFor="address-input">To:</label>
      <input
        id="address-input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="font-medium flex-1 shrink basis-[0%] bg-transparent outline-none"
        placeholder="ENS or Address"
      />
      <div className="flex w-7 shrink-0 h-7" aria-hidden="true" />
    </div>
  );
};