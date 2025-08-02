import React from 'react';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h2 className="text-lg font-semibold">Welcome to StackedUp</h2>
        <p>Your investor control center is now live.</p>
      </main>
    </div>
  );
}
