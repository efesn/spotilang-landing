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
              <img 
                src="/spotilang.png" 
                alt="SpotiLang Logo" 
                className="h-12 w-12 md:h-14 md:w-14"
              />
              <h1 className="logo-text text-[#FFFFFF] font-bold text-2xl md:text-3xl">SpotiLang</h1>
            </div>
            
            <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
              <div className="flex gap-12">
                <a href="#features" className="text-white hover:text-[#1DB954] transition">Features</a>
                <a href="#how-it-works" className="text-white hover:text-[#1DB954] transition">How It Works</a>
                {/* <a href="#testimonials" className="text-white hover:text-[#1DB954] transition">Testimonials</a> */}
              </div>
            </div>
          </nav>
          
          <div className="flex-1 flex flex-col justify-center max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              Improve Your Language Skills with Music You Enjoy!
            </h2>
            <p className="text-lg md:text-2xl mb-8 md:mb-16 text-gray-100">
            SpotiLang is a browser extension that helps you learn and improve your language skills while you listen to your favorite songs on Spotify. It’s a fun and easy way to boost your vocabulary and understanding, all while enjoying the music you love!
            </p>
            
            <div className="flex flex-col items-center">
              <div className="flex w-full md:w-[420px] mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-4 md:px-6 py-3 bg-[#121212] text-white rounded-l-full border border-gray-700 focus:outline-none focus:border-[#1DB954] transition text-sm md:text-base"
                />
                <button className="shiny-green whitespace-nowrap px-4 md:px-8 py-3 text-white rounded-r-full font-semibold transition-all duration-300 text-sm md:text-base">
                  Join the<br/>Waitlist!
                </button>
              </div>
              <p className="text-gray-200 text-xs md:text-sm mt-3">Join our waitlist for early access!</p>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-32 bg-[#121212]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Use SpotiLang?
            </h2>
            <p className="text-gray-400 text-lg">
            Turn your daily music into a fun and effective way to improve your language skills!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            <div className="relative p-8 rounded-2xl bg-black/50 backdrop-blur-sm border border-gray-800 hover:border-[#1DB954] transition-all duration-300 group">
              <div className="w-20 h-20 bg-[#1DB954] rounded-full mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M2 12h20"></path>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-[#1DB954] transition-colors">Learn Any Language</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Support for over 30 languages, perfectly integrated with Spotify's vast music library.
              </p>
            </div>
            <div className="relative p-8 rounded-2xl bg-black/50 backdrop-blur-sm border border-gray-800 hover:border-[#1DB954] transition-all duration-300 group">
              <div className="w-20 h-20 bg-[#1DB954] rounded-full mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-[#1DB954] transition-colors">Immersive Learning</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Learn naturally by listening to lyrics and translations in real-time as you enjoy your music.
              </p>
            </div>
            <div className="relative p-8 rounded-2xl bg-black/50 backdrop-blur-sm border border-gray-800 hover:border-[#1DB954] transition-all duration-300 group">
              <div className="w-20 h-20 bg-[#1DB954] rounded-full mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20v-6M6 20V10M18 20V4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-[#1DB954] transition-colors">Vocabulary Building</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Save and review words you learn from songs, building your vocabulary effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How SpotiLang Works
            </h2>
            <p className="text-gray-400 text-lg">
              Get started with SpotiLang in three simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-24 left-[22%] w-[27%] h-1 bg-[#1DB954]/20">
              <div className="absolute inset-0 bg-[#1DB954]/40 blur-md"></div>
            </div>
            <div className="hidden md:block absolute top-24 right-[22%] w-[27%] h-1 bg-[#1DB954]/20">
              <div className="absolute inset-0 bg-[#1DB954]/40 blur-md"></div>
            </div>
            
            <div className="relative p-8 rounded-2xl bg-black border border-gray-800 hover:border-[#1DB954] transition-all duration-300 group">
              <div className="relative">
                <div className="relative w-16 h-16 mx-auto mb-6">
                  <div className="absolute inset-0 bg-[#1DB954] opacity-90 blur-lg rounded-full"></div>
                  <div className="absolute inset-0 bg-[#1DB954] rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-[#1DB954] transition-colors">Install the Extension</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Add SpotiLang to your Chrome browser with just one click.
              </p>
            </div>

            <div className="relative p-8 rounded-2xl bg-black border border-gray-800 hover:border-[#1DB954] transition-all duration-300 group">
              <div className="relative">
                <div className="relative w-16 h-16 mx-auto mb-6">
                  <div className="absolute inset-0 bg-[#1DB954] opacity-75 blur-xl rounded-full"></div>
                  <div className="absolute inset-0 bg-[#1DB954] rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-[#1DB954] transition-colors">Set Your Language Preferences on Spotify Web</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Select your native language and the language you want to learn.
              </p>
            </div>

            <div className="relative p-8 rounded-2xl bg-black border border-gray-800 hover:border-[#1DB954] transition-all duration-300 group">
              <div className="relative">
                <div className="relative w-16 h-16 mx-auto mb-6">
                  <div className="absolute inset-0 bg-[#1DB954] opacity-75 blur-xl rounded-full"></div>
                  <div className="absolute inset-0 bg-[#1DB954] rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-[#1DB954] transition-colors">Start Listening and Learning!</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Play your music and start improving your language skills with SpotiLang
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be Among the First to Experience SpotiLang
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join our exclusive waitlist and get early access to transform your music listening into an immersive language learning experience.
          </p>
          <div className="flex flex-col items-center">
            <div className="flex w-full md:w-[420px] mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 md:px-6 py-3 bg-[#121212] text-white rounded-l-full border border-gray-700 focus:outline-none focus:border-[#1DB954] transition text-sm md:text-base"
              />
              <button className="shiny-green whitespace-nowrap px-4 md:px-8 py-3 text-white rounded-r-full font-semibold transition-all duration-300 text-sm md:text-base">
                Join the<br/>Waitlist!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Commented out original CTA section for future use */}
      {/* <section className="py-32 bg-black border-t border-gray-800">
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
      </section> */}

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
