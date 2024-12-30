import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-b from-black to-[#1DB954] min-h-screen flex flex-col">
        <div className="container mx-auto px-4 flex-1 flex flex-col">
          <nav className="flex justify-between items-center pt-8 relative">
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
            
            <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
              <div className="flex gap-12">
                <a href="#features" className="text-white hover:text-[#1DB954] transition">Features</a>
                <a href="#how-it-works" className="text-white hover:text-[#1DB954] transition">How It Works</a>
                <a href="#testimonials" className="text-white hover:text-[#1DB954] transition">Testimonials</a>
              </div>
            </div>
          </nav>
          
          <div className="flex-1 flex flex-col justify-center max-w-4xl mx-auto text-center">
            <h2 className="text-7xl font-bold mb-8 leading-tight">
              Learn Languages While You Listen
            </h2>
            <p className="text-2xl mb-12 text-gray-100">
            SpotiLang turns your favorite Spotify playlists into powerful language learning tools. Master new languages effortlessly while enjoying your music.
            </p>
            <button className="shiny-green text-white px-10 py-4 rounded-full text-xl font-semibold hover:scale-105 transition flex items-center mx-auto">
              Add to Chrome - It's Free!
              <ChevronRightIcon className="w-6 h-6 ml-2" />
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-20">
            Why Use SpotiLang?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1DB954] rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M2 12h20"></path>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Learn Any Language</h3>
              <p className="text-gray-400 text-lg">
                Support for over 30 languages, perfectly integrated with Spotify's vast music library.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1DB954] rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Immersive Learning</h3>
              <p className="text-gray-400 text-lg">
                Learn naturally by listening to lyrics and translations in real-time as you enjoy your music.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1DB954] rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20v-6M6 20V10M18 20V4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Vocabulary Building</h3>
              <p className="text-gray-400 text-lg">
                Save and review words you learn from songs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 bg-[#121212] border-t border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-20">
            How SpotiLang Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="relative">
                <div className="w-16 h-16 bg-[#1DB954] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Install the Extension</h3>
              <p className="text-gray-400 text-lg">
                Add SpotiLang to your Chrome browser with just one click.
              </p>
            </div>
            <div className="text-center">
              <div className="relative">
                <div className="w-16 h-16 bg-[#1DB954] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Set your language settings</h3>
              <p className="text-gray-400 text-lg">
              Select your native language and the language you want to learn
              </p>
            </div>
            <div className="text-center">
              <div className="relative">
                <div className="w-16 h-16 bg-[#1DB954] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Start Learning</h3>
              <p className="text-gray-400 text-lg">
                Play your music and watch as SpotiLang transforms your listening experience into a language lesson.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Start Your Language Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join thousands of users who are already learning languages effortlessly with SpotiLang.
          </p>
          <button className="bg-[#1DB954] text-white px-8 py-4 rounded-full text-xl font-semibold hover:scale-105 transition flex items-center mx-auto">
            Get SpotiLang Now
            <ChevronRightIcon className="w-6 h-6 ml-2" />
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
