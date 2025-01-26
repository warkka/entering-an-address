import React from 'react';

interface ActionCardProps {
  title: string;
  description: string;
  onClick?: () => void;
}

export const ActionCard: React.FC<ActionCardProps> = ({ title, description, onClick }) => {
  return (
    <div
      className="bg-white flex min-h-16 w-full max-w-[353px] items-center gap-4 text-lg px-2.5 py-2 rounded-2xl cursor-pointer hover:bg-gray-50 transition-colors"
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <div
        className="bg-[rgba(38,237,28,1)] self-stretch flex w-12 shrink-0 h-12 my-auto rounded-[500px]"
        aria-hidden="true"
      />
      <div className="self-stretch flex min-w-60 flex-col items-stretch justify-center flex-1 shrink basis-[0%] my-auto">
        <div className="text-[rgba(28,28,28,1)] font-medium">
          {title}
        </div>
        <div className="text-[rgba(143,143,143,1)] font-normal">
          {description}
        </div>
      </div>
    </div>
  );
};