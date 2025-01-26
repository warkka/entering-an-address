import React from 'react';

interface UserCardProps {
  name: string;
  address: string;
  verified?: boolean;
}

export const UserCard: React.FC<UserCardProps> = ({ name, address, verified }) => {
  return (
    <div className="flex min-h-16 w-full items-center gap-4 px-2.5 py-2 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer">
      <div
        className="bg-[rgba(38,237,28,1)] self-stretch flex w-12 shrink-0 h-12 my-auto rounded-[500px]"
        aria-hidden="true"
      />
      <div className="self-stretch flex min-w-60 flex-col items-stretch justify-center flex-1 shrink basis-[0%] my-auto">
        <div className="flex w-full items-center gap-1 text-[rgba(28,28,28,1)] font-medium leading-none">
          <div className="self-stretch my-auto">{name}</div>
          {verified && (
            <div className="self-stretch flex w-5 shrink-0 h-5 my-auto" aria-label="Verified user" />
          )}
        </div>
        <div className="text-[rgba(143,143,143,1)] font-normal">
          {address}
        </div>
      </div>
    </div>
  );
};