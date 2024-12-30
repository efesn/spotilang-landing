import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-b from-[#1DB954] to-black pt-20 pb-32">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center mb-16">
            <div className="flex items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-music h-8 w-8 text-[#1DB954]"
              >
                <path d="M9 18V5l12-2v13"></path>
                <circle cx="6" cy="18" r="3"></circle>
                <circle cx="18" cy="16" r="3"></circle>
              </svg>
              <h1 className="logo-text text-[#FFFFFF] font-bold">SpotiLang</h1>
            </div>
            <button className="bg-white text-black px-6 py-2 rounded-full hover:scale-105 transition">
              Add to Chrome
            </button>
          </nav>
          
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-6xl font-bold mb-6">
              Learn Languages While You Listen
            </h2>
            <p className="text-xl mb-8">
              Transform your Spotify experience into an immersive language learning journey
            </p>
            <button className="shiny-green text-white px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 transition flex items-center mx-auto">
              Add to Chrome - It's Free!
              <ChevronRightIcon className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1DB954] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Learn with Music</h3>
              <p className="text-gray-400">
                Master new languages naturally while enjoying your favorite songs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1DB954] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Translation</h3>
              <p className="text-gray-400">
                See lyrics translations as the song plays
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1DB954] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Vocabulary Building</h3>
              <p className="text-gray-400">
                Save and review words you learn from songs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1DB954] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Learn with Music?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already learning languages through their favorite songs on Spotify
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 transition">
            Install SpotiLang Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 SpotiLang. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
