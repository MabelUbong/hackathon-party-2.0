import React, { useState } from 'react';
import './SponsorsPage.css'; // You'll need to create this CSS file with the styles

// Icon components
const Star = ({ size = 16, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const Briefcase = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const Building = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
    <path d="M9 22v-4h6v4"></path>
    <path d="M8 6h.01"></path>
    <path d="M16 6h.01"></path>
    <path d="M12 6h.01"></path>
    <path d="M12 10h.01"></path>
    <path d="M12 14h.01"></path>
    <path d="M16 10h.01"></path>
    <path d="M16 14h.01"></path>
    <path d="M8 10h.01"></path>
    <path d="M8 14h.01"></path>
  </svg>
);

const User = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const MessageCircle = ({ size = 16, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

// Main Component
const SponsorsPage = ({ initialPoints = 75 }) => {
  const [flippedCards, setFlippedCards] = useState({});
  const [points, setPoints] = useState(initialPoints);
  const [showNotification, setShowNotification] = useState(false);

  // Sample sponsors data
  const sponsors = [
    {
      id: 1,
      character: 'blinky',
      company: 'Softwire',
      description: 'Leading software development consultancy',
      role: 'Come and find out about opportunities with us',
      imageUrl: 'https://raw.githubusercontent.com/gist/lemonchi/f3ebd3f5ff0c97183af22d2f40fa32d5/raw/dbd04f9e1b53cc6e1014d03d5790ccf45c212ebd/ghost-blinky.png'
    },
    {
      id: 2,
      character: 'pinky',
      company: 'Starling Bank',
      description: "Britain's first digital bank",
      role: 'Come and have a chat with us',
      imageUrl: 'https://raw.githubusercontent.com/gist/lemonchi/f3ebd3f5ff0c97183af22d2f40fa32d5/raw/dbd04f9e1b53cc6e1014d03d5790ccf45c212ebd/ghost-pinky.png'
    },
    {
      id: 3,
      character: 'inky',
      company: 'Addition',
      description: 'RECRUITMENT Age',
      role: 'Cloud Solutions Architect',
      imageUrl: 'https://raw.githubusercontent.com/gist/lemonchi/f3ebd3f5ff0c97183af22d2f40fa32d5/raw/dbd04f9e1b53cc6e1014d03d5790ccf45c212ebd/ghost-inky.png'
    },
    {
      id: 4,
      character: 'clyde',
      company: 'Meta',
      description: 'Social media and virtual reality pioneer',
      role: 'Frontend Engineer',
      imageUrl: 'https://raw.githubusercontent.com/gist/lemonchi/f3ebd3f5ff0c97183af22d2f40fa32d5/raw/dbd04f9e1b53cc6e1014d03d5790ccf45c212ebd/ghost-clyde.png'
    },
    {
      id: 5,
      character: 'blue_ghost',
      company: 'Apple',
      description: 'Innovation leader in consumer technology',
      role: 'iOS Developer',
      imageUrl: 'https://i.imgur.com/GF8JctO.png'
    }
  ];

  const handleCardClick = (id) => {
    // If this is the first time viewing this card's details
    if (!flippedCards[id]) {
      setPoints(points + 5);
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }

    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <header className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Meet Our Sponsors</h1>
            <p className="text-sm opacity-90">Learn about the companies supporting HackathonParty</p>
          </div>
          <div className="rounded-lg px-4 py-2 flex items-center backdrop-blur-sm bg-purple-900/30">
            <Star className="mr-2" size={20} />
            <span>{points} points</span>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Intro section */}
        <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-xl p-6 mb-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl font-bold mb-4">Connect with Potential Employers</h2>
            <p className="text-gray-300 mb-4">
              Get to know the companies supporting HackathonParty. These sponsors are looking to connect with talented women in tech. Flip the cards to learn more about each company!
            </p>
            <div className="bg-purple-900/30 py-2 px-4 rounded-lg inline-block">
              <p className="text-sm">Earn <span className="text-purple-400 font-bold">5 points</span> for each sponsor you learn about</p>
            </div>
          </div>
        </div>

        {/* Sponsors cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className={`card w-full h-72 ${flippedCards[sponsor.id] ? 'flipped' : ''}`}
              onClick={() => handleCardClick(sponsor.id)}
            >
              <div className="card-inner w-full h-full">
                {/* Front of card */}
                <div className="card-face rounded-xl">
                  <img
                    src={sponsor.imageUrl}
                    alt={sponsor.character}
                    className="character-image"
                  />
                  <h3 className="text-xl font-bold capitalize text-purple-400">
                    {sponsor.character}
                  </h3>
                  <p className="text-sm mt-2 text-gray-400">Click to flip</p>
                </div>
               
                {/* Back of card */}
                <div className="card-face card-back rounded-xl">
                  <h3 className="text-xl font-bold text-purple-400 mb-3">
                    {sponsor.company}
                  </h3>
                  <div className="mb-4 bg-purple-900/20 p-2 rounded-lg">
                    <Building size={20} className="inline-block mr-2 text-purple-400" />
                    <span className="text-sm">{sponsor.description}</span>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-bold mb-1 text-gray-300">Our Message:</h4>
                    <p className="text-sm">{sponsor.role}</p>
                  </div>
                  <div className="mt-auto text-xs text-center pt-2 border-t border-gray-700">
                    <button className="text-purple-400 hover:text-purple-300">
                      Mark interest (+10 pts)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recruiter events section */}
        <div className="bg-dark rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-gray-700">
            <h3 className="text-lg font-bold">Upcoming Recruiter Events</h3>
          </div>
          <div className="p-4">
            <div className="border-b border-gray-700 pb-4 mb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400 mr-4">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Lightning Tech Talks</h4>
                  <p className="text-sm text-gray-400">Friday, 3:00 PM - Main Stage</p>
                  <p className="text-xs mt-1">Hear 5-minute presentations from our sponsors about their technology</p>
                </div>
                <div className="ml-auto">
                  <button className="text-sm bg-purple-600 text-white px-3 py-1 rounded-full hover:bg-purple-700">
                    RSVP (+15 pts)
                  </button>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-700 pb-4 mb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400 mr-4">
                  <User size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Resume Review Workshop</h4>
                  <p className="text-sm text-gray-400">Saturday, 11:00 AM - Room 204</p>
                  <p className="text-xs mt-1">One-on-one resume reviews with recruiters from top tech companies</p>
                </div>
                <div className="ml-auto">
                  <button className="text-sm bg-purple-600 text-white px-3 py-1 rounded-full hover:bg-purple-700">
                    RSVP (+15 pts)
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400 mr-4">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Industry Mixer</h4>
                  <p className="text-sm text-gray-400">Saturday, 5:30 PM - Exhibition Hall</p>
                  <p className="text-xs mt-1">Informal networking with sponsor companies - refreshments provided</p>
                </div>
                <div className="ml-auto">
                  <button className="text-sm bg-purple-600 text-white px-3 py-1 rounded-full hover:bg-purple-700">
                    RSVP (+15 pts)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career opportunities */}
        <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">Career Opportunities</h3>
          <p className="text-gray-300 mb-6">
            Our sponsors are actively recruiting talented women in tech. Express interest in open positions to have your information forwarded to company recruiters after the event.
          </p>
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-dark rounded-lg overflow-hidden">
              <div className="px-4 py-3 bg-purple-900/30 border-b border-gray-700">
                <div className="flex items-center">
                  <h4 className="font-bold">Softwire</h4>
                  <span className="ml-auto text-xs bg-purple-800 text-purple-300 px-2 py-0.5 rounded-full">3 positions</span>
                </div>
              </div>
              <div className="p-4">
                <div className="mb-3 border-b border-gray-700 pb-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Software Developer</span>
                    <button className="text-xs bg-gray-700 hover:bg-gray-600 px-2 py-0.5 rounded text-gray-300">
                      Express Interest
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Full-time • Remote • Entry-level</p>
                </div>
                <div className="mb-3 border-b border-gray-700 pb-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Project Manager</span>
                    <button className="text-xs bg-gray-700 hover:bg-gray-600 px-2 py-0.5 rounded text-gray-300">
                      Express Interest
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Full-time • Hybrid • 2+ years</p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span className="font-medium">UX Designer</span>
                    <button className="text-xs bg-gray-700 hover:bg-gray-600 px-2 py-0.5 rounded text-gray-300">
                      Express Interest
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Full-time • London • 1+ years</p>
                </div>
              </div>
            </div>
           
            <div className="bg-dark rounded-lg overflow-hidden">
              <div className="px-4 py-3 bg-purple-900/30 border-b border-gray-700">
                <div className="flex items-center">
                  <h4 className="font-bold">Starling Bank</h4>
                  <span className="ml-auto text-xs bg-purple-800 text-purple-300 px-2 py-0.5 rounded-full">2 positions</span>
                </div>
              </div>
              <div className="p-4">
                <div className="mb-3 border-b border-gray-700 pb-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Backend Engineer</span>
                    <button className="text-xs bg-gray-700 hover:bg-gray-600 px-2 py-0.5 rounded text-gray-300">
                      Express Interest
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Full-time • London • Mid-level</p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span className="font-medium">Data Scientist</span>
                    <button className="text-xs bg-gray-700 hover:bg-gray-600 px-2 py-0.5 rounded text-gray-300">
                      Express Interest
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Full-time • Remote • 3+ years</p>
                </div>
              </div>
            </div>
          </div>
         
          <div className="mt-4 text-center">
            <button className="text-sm bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
              View All Open Positions (+5 pts)
            </button>
          </div>
        </div>

        {/* Points notification */}
        {showNotification && (
          <div className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center pulse-animation z-50">
            <div className="mr-3 bg-white text-green-500 rounded-full w-8 h-8 flex items-center justify-center font-bold">+5</div>
            <div>
              <div className="font-bold">Points earned!</div>
              <div className="text-sm">You learned about a sponsor</div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-8 bg-gradient-to-r from-indigo-50 to-pink-50 rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold mb-2">Maximize Your Career Opportunities</h3>
          <p className="text-gray-600 mb-4">Connect with sponsors during the event to discover exciting career paths in tech!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center justify-center">
              Schedule Recruiter Chats
            </a>
            <a href="/community" className="bg-white text-purple-600 border border-purple-200 px-4 py-2 rounded-lg inline-flex items-center justify-center">
              Find Team Members
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;