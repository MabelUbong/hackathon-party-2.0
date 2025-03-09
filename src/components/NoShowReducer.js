// NoShowReducer.jsx
import React, { useState } from 'react';

// Icon components reused from your existing code
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

const CheckCircle = ({ size = 16, className = "" }) => (
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
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const Calendar = ({ size = 16, className = "" }) => (
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
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
    <line x1="16" x2="16" y1="2" y2="6"></line>
    <line x1="8" x2="8" y1="2" y2="6"></line>
    <line x1="3" x2="21" y1="10" y2="10"></line>
  </svg>
);

const Bell = ({ size = 16, className = "" }) => (
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
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
  </svg>
);

const Users = ({ size = 16, className = "" }) => (
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
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const MessageSquare = ({ size = 16, className = "" }) => (
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
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

// Sample upcoming events data
const upcomingEvents = [
  {
    id: 1,
    title: "Frontend Development Workshop",
    date: "March 15, 2025",
    time: "1:00 PM - 3:00 PM",
    description: "Learn modern CSS techniques and responsive design principles",
    confirmationPoints: 15,
    attendancePoints: 25,
    confirmationDeadline: "March 13, 2025"
  },
  {
    id: 2,
    title: "AI/ML Networking Mixer",
    date: "March 20, 2025",
    time: "6:00 PM - 8:00 PM",
    description: "Connect with professionals in AI and machine learning",
    confirmationPoints: 15,
    attendancePoints: 20,
    confirmationDeadline: "March 18, 2025"
  },
  {
    id: 3,
    title: "Data Science Hackathon Prep",
    date: "March 25, 2025",
    time: "5:30 PM - 7:30 PM",
    description: "Get your questions answered before the main event",
    confirmationPoints: 15,
    attendancePoints: 25,
    confirmationDeadline: "March 23, 2025"
  }
];

// Sample accountability buddies data
const recommendedBuddies = [
  {
    id: 1,
    name: "Elena Rodriguez",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    interests: ["Frontend", "UI/UX", "React"],
    tier: "Platinum"
  },
  {
    id: 2,
    name: "Priya Sharma",
    image: "https://randomuser.me/api/portraits/women/39.jpg",
    interests: ["Data Science", "Python", "Visualization"],
    tier: "Silver"
  },
  {
    id: 3,
    name: "Maya Patel",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    interests: ["Cloud", "DevOps", "AWS"],
    tier: "Diamond"
  }
];

const NoShowReducer = () => {
  const [confirmedEvents, setConfirmedEvents] = useState([]);
  const [accountabilityPartner, setAccountabilityPartner] = useState(null);
  const [showCommitmentModal, setShowCommitmentModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Handle event confirmation
  const handleConfirmEvent = (event) => {
    setSelectedEvent(event);
    setShowCommitmentModal(true);
  };

  // Handle commitment confirmation
  const handleCommitmentConfirm = () => {
    if (selectedEvent && !confirmedEvents.includes(selectedEvent.id)) {
      setConfirmedEvents([...confirmedEvents, selectedEvent.id]);
    }
    setShowCommitmentModal(false);
  };

  // Handle setting an accountability partner
  const handleSetBuddy = (buddy) => {
    setAccountabilityPartner(buddy.id);
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header section */}
      <header className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Attendance Commitment</h1>
            <p className="text-sm opacity-90">Boost your participation and earn more points</p>
          </div>
          <div className="rounded-lg px-4 py-2 flex items-center backdrop-blur-sm bg-purple-900/30">
            <Star className="mr-2" size={20} />
            <div>
              <div className="font-bold text-xl">75 points</div>
              <div className="text-xs">
                Current tier: <span className="font-medium">Bronze</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* No-show stats and impact section */}
        <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Why Attendance Matters</h2>
         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-dark rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-2 text-purple-400">
                40%
              </div>
              <p className="text-sm">Average no-show rate at tech events for women</p>
            </div>

            <div className="bg-dark rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-2 text-purple-400">
                65%
              </div>
              <p className="text-sm">Higher chance of future participation after attending one event</p>
            </div>

            <div className="bg-dark rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-2 text-purple-400">
                3x
              </div>
              <p className="text-sm">More likely to complete projects with accountability</p>
            </div>
          </div>

          <p className="text-gray-300">
            Attending events is a crucial step in building your tech career. Women who consistently participate in tech events report stronger networks, more job opportunities, and increased confidence in their skills.
          </p>
        </div>

        {/* Upcoming events section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-gray-300 mb-6">
            Confirm your attendance in advance to earn commitment points. Attend the event to earn additional participation points.
          </p>

          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-dark rounded-lg p-4 border border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="font-bold text-lg">{event.title}</h3>
                    <div className="flex items-center text-gray-400 text-sm mt-1">
                      <Calendar size={14} className="mr-1" />
                      <span>{event.date} • {event.time}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{event.description}</p>
                   
                    <div className="mt-3 flex items-center text-xs text-purple-400">
                      <span className="mr-4">
                        <Star size={12} className="inline mr-1" />
                        {event.confirmationPoints} pts for confirming
                      </span>
                      <span>
                        <CheckCircle size={12} className="inline mr-1" />
                        {event.attendancePoints} pts for attending
                      </span>
                    </div>
                  </div>
                 
                  <div className="flex flex-col items-start md:items-end">
                    {confirmedEvents.includes(event.id) ? (
                      <div className="bg-green-900/30 text-green-400 px-3 py-1.5 rounded-lg text-sm flex items-center">
                        <CheckCircle size={14} className="mr-1.5" />
                        Attendance Confirmed
                      </div>
                    ) : (
                      <button
                        onClick={() => handleConfirmEvent(event)}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1.5 rounded-lg text-sm"
                      >
                        Confirm Attendance
                      </button>
                    )}
                    <div className="text-xs text-gray-400 mt-2">
                      Confirm by: {event.confirmationDeadline}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accountability section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Accountability Partners</h2>
          <p className="text-gray-300 mb-6">
            Having a buddy increases event attendance by 78%. Partner with someone to keep each other motivated and committed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recommendedBuddies.map((buddy) => (
              <div key={buddy.id} className="bg-dark rounded-lg p-4 border border-gray-700 hover:border-purple-500 transition-all">
                <div className="flex items-start">
                  <img
                    src={buddy.image}
                    alt={buddy.name}
                    className="w-12 h-12 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <h3 className="font-bold">{buddy.name}</h3>
                    <div className="flex items-center mt-1">
                      <span className={"text-xs px-2 py-0.5 rounded-full " + (
                        buddy.tier === "Diamond" ? "bg-blue-900/30 text-blue-300" :
                        buddy.tier === "Platinum" ? "bg-gray-700/80 text-gray-300" :
                        buddy.tier === "Gold" ? "bg-yellow-900/30 text-yellow-300" :
                        buddy.tier === "Silver" ? "bg-gray-600/30 text-gray-400" :
                        "bg-amber-900/30 text-amber-600"
                      )}>
                        {buddy.tier}
                      </span>
                    </div>
                  </div>
                </div>
               
                <div className="mt-3">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {buddy.interests.map((interest, i) => (
                      <span key={i} className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded">
                        {interest}
                      </span>
                    ))}
                  </div>
                 
                  {accountabilityPartner === buddy.id ? (
                    <div className="bg-green-900/30 text-green-400 w-full px-3 py-1.5 rounded-lg text-sm text-center">
                      <CheckCircle size={14} className="inline mr-1.5" />
                      Your Buddy
                    </div>
                  ) : (
                    <button
                      onClick={() => handleSetBuddy(buddy)}
                      className="bg-gray-700 hover:bg-gray-600 text-white w-full px-3 py-1.5 rounded-lg text-sm"
                    >
                      Partner Up
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment features section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Stay Committed with These Features</h2>
         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-dark rounded-lg p-4 hover:bg-gray-800">
              <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center mb-3">
                <Bell size={20} className="text-purple-400" />
              </div>
              <h3 className="font-bold mb-2">Smart Reminders</h3>
              <p className="text-sm text-gray-300">
                Get personalized reminders based on your schedule patterns to ensure you never miss an event.
              </p>
              <div className="mt-4">
                <button className="text-xs bg-purple-600 text-white px-2 py-1 rounded">
                  Set Up
                </button>
              </div>
            </div>
           
            <div className="bg-dark rounded-lg p-4 hover:bg-gray-800">
              <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center mb-3">
                <Users size={20} className="text-purple-400" />
              </div>
              <h3 className="font-bold mb-2">Carpool Groups</h3>
              <p className="text-sm text-gray-300">
                Connect with other participants in your area to arrange shared transportation to events.
              </p>
              <div className="mt-4">
                <button className="text-xs bg-purple-600 text-white px-2 py-1 rounded">
                  Find Group
                </button>
              </div>
            </div>
           
            <div className="bg-dark rounded-lg p-4 hover:bg-gray-800">
              <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center mb-3">
                <MessageSquare size={20} className="text-purple-400" />
              </div>
              <h3 className="font-bold mb-2">Community Check-ins</h3>
              <p className="text-sm text-gray-300">
                Regular check-ins with the community before events to build excitement and resolve any concerns.
              </p>
              <div className="mt-4">
                <button className="text-xs bg-purple-600 text-white px-2 py-1 rounded">
                  Join Chat
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats and impact section */}
        <div className="mt-8 bg-gradient-to-r from-indigo-50 to-pink-50 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Your Impact</h2>
          <p className="text-gray-700 mb-6">
            When women in tech show up consistently, amazing things happen. Here's the impact of your commitment:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-4 shadow">
              <h3 className="font-bold text-gray-900 mb-3">Community Growth</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Each event you attend encourages 2-3 other women to join future events
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Consistent participation helps build a stronger support network for all women in tech
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Your presence contributes to more diverse perspectives in discussions and projects
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 shadow">
              <h3 className="font-bold text-gray-900 mb-3">Personal Growth</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Regular attendance is linked to 32% faster skill acquisition
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Participants who attend multiple events are 2x more likely to land tech interviews
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Consistency builds confidence and reduces imposter syndrome
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Commitment modal */}
      {showCommitmentModal && selectedEvent && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-2">Confirm Your Attendance</h3>
            <p className="text-gray-300 mb-4">
              You're committing to attend <span className="font-bold">{selectedEvent.title}</span> on {selectedEvent.date}.
            </p>

            <div className="bg-gray-700/50 rounded-lg p-4 mb-4">
              <h4 className="font-medium mb-2">Why confirm in advance?</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle size={14} className="text-green-400 mr-2 mt-0.5" />
                  Earn {selectedEvent.confirmationPoints} points immediately
                </li>
                <li className="flex items-start">
                  <CheckCircle size={14} className="text-green-400 mr-2 mt-0.5" />
                  Earn {selectedEvent.attendancePoints} additional points for attending
                </li>
                <li className="flex items-start">
                  <CheckCircle size={14} className="text-green-400 mr-2 mt-0.5" />
                  Help event organizers plan better
                </li>
                <li className="flex items-start">
                  <CheckCircle size={14} className="text-green-400 mr-2 mt-0.5" />
                  Increase your chances of completing the event
                </li>
              </ul>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={handleCommitmentConfirm}
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg"
              >
                Confirm Attendance
              </button>
              <button
                onClick={() => setShowCommitmentModal(false)}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoShowReducer;