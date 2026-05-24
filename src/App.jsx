import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    // Exact premium dark green background structure to match your Planto theme
    <div className="min-h-screen bg-[#111e16] text-white">
      {/* Fixed Transparent Navbar */}
      <Navbar />

      {/* Hero Section Container (Just for testing alignment) */}
      <main className="pt-32 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="h-[80vh] flex flex-col justify-center items-start">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Breath Natural
          </h1>
          <p className="text-gray-400 text-lg max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Planto brings fresh green vibes straight to your living space.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;