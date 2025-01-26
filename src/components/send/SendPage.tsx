import React, { useState } from 'react';
import { AddressInput } from './AddressInput';
import { ActionCard } from './ActionCard';
import { UserCard } from './UserCard';

export const SendPage: React.FC = () => {
  const [address, setAddress] = useState('apkuzmin.eth');

  return (
    <div className="bg-[rgba(245,245,247,1)] flex max-w-[393px] flex-col overflow-hidden items-center pt-5 pb-[400px] rounded-[18px_18px_0px_0px]">
      <header className="flex w-full max-w-[353px] items-center gap-[40px_100px] text-xl text-[rgba(28,28,28,1)] font-semibold whitespace-nowrap justify-between mb-4">
        <button
          className="self-stretch flex w-8 shrink-0 h-8 my-auto"
          aria-label="Close"
        />
        <h1 className="self-stretch my-auto">Send</h1>
      </header>

      <main className="w-full max-w-[353px] space-y-4">
        <AddressInput value={address} onChange={setAddress} />

        <ActionCard
          title="Scan QR code"
          description="Tap to scan an address"
          onClick={() => console.log('Scan QR')}
        />

        <ActionCard
          title="Create link"
          description="Tap to create link for share"
          onClick={() => console.log('Create link')}
        />

        <section className="self-stretch w-full whitespace-nowrap">
          <h2 className="text-xl text-[rgba(28,28,28,1)] font-medium px-5 mb-4">
            Matching
          </h2>
          <div className="flex w-full flex-col items-center text-lg">
            <UserCard
              name="alex.tavi"
              address="0x9a23...a37a"
              verified={true}
            />
          </div>
        </section>
      </main>
    </div>
  );
};