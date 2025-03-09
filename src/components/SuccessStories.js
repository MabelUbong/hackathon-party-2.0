import React, { useState, useEffect } from 'react';
import './SuccessStories.css';

// Icon components
const ChevronRight = ({ size = 16, className = "" }) => (
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
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

const ChevronLeft = ({ size = 16, className = "" }) => (
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
    <path d="m15 18-6-6 6-6"/>
  </svg>
);

const Tag = ({ size = 12, className = "" }) => (
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
    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/>
    <path d="M7 7h.01"/>
  </svg>
);

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

const Header = () => (
  <header className="top-0 z-50 w-full border-b border-foreground/20 bg-background/90">
    <div className="relative z-50 mx-auto flex w-full max-w-6xl items-center justify-between px-2 py-2 sm:px-6 lg:px-4">
      {/* Logo and Title */}
      <div className="flex items-center space-x-2 bg-transparent">
        <a className="text group flex items-center space-x-1 hover:text-primary" href="index.html">
          <div style={{ willChange: "transform", transform: "none" }}>
            <svg className="-mt-0.5 h-5 group-hover:text-primary md:h-6" fill="none" viewBox="0 0 197 197" xmlns="http://www.w3.org/2000/svg">
              <path className="fill-current hover:text-primary" d="M104.51 36.8379V36.6051L112.165 41.0161C113.112 41.5633 114.146 41.8201 115.165 41.8201C117.243 41.8201 119.264 40.7425 120.375 38.8202C122.034 35.9499 121.051 32.2804 118.175 30.6245L110.52 26.2135L118.175 21.8024C121.051 20.1465 122.034 16.477 120.375 13.6067C118.716 10.7364 115.04 9.75008 112.165 11.4108L104.51 15.8219V6.99978C104.51 3.6855 101.82 1 98.4996 1C95.1794 1 92.4892 3.6855 92.4892 6.99978V15.8219L84.8343 11.4108C81.9565 9.75008 78.2829 10.7388 76.624 13.6067C74.9651 16.477 75.9484 20.1465 78.8238 21.8024L86.4787 26.2135L78.8238 30.6245C75.9484 32.2804 74.9651 35.9499 76.624 38.8202C77.7372 40.7449 79.7567 41.8201 81.8339 41.8201C82.8532 41.8201 83.887 41.5609 84.8343 41.0161L92.4892 36.6051V36.8379L19.5994 187.389C18.6978 189.249 18.8204 191.44 19.9191 193.19C21.0179 194.939 22.9412 196 25.0112 196H171.988C174.056 196 175.981 194.939 177.08 193.19C178.181 191.44 178.301 189.249 177.4 187.389L104.51 36.8379ZM71.7195 184L144.076 146.137L152.444 163.424L113.668 184H71.7195ZM98.4996 52.0005L110.696 77.19L78.0954 94.1454L98.4996 52.0005ZM58.0566 135.532L123.008 102.619L129.739 116.525L46.4733 159.457L58.0566 135.532Z"></path>
            </svg>
          </div>
          <p className="whitespace-nowrap text-2xl font-bold md:text-3xl">
            <span className="inline-block">HackathonParty</span>
          </p>
        </a>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-4">
        <a href="index.html" className="text-sm hover:text-purple-400 transition-colors">Social Wall</a>
        <a href="success-stories.html" className="text-sm hover:text-purple-400 transition-colors">Success Stories</a>
        <a href="community.html" className="text-sm hover:text-purple-400 transition-colors">Community</a>
        <a href="incentives.html" className="text-sm hover:text-purple-400 transition-colors">Incentives</a>
      </div>

      {/* Points Dropdown */}
      <div className="relative group">
        <button className="flex items-center space-x-1 bg-purple-900/30 hover:bg-purple-800/50 rounded-lg px-3 py-1.5 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <span className="font-medium">75 points</span>
          <span className="text-xs text-purple-300 ml-1">Bronze</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </button>

        {/* Dropdown Menu */}
        <div className="absolute right-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-lg overflow-hidden transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 z-50">
          <div className="p-3 border-b border-gray-700">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Bronze Level</span>
              <a href="points-dashboard.html" className="text-xs text-purple-400 hover:text-purple-300">View Dashboard</a>
            </div>
            <div className="mt-2 bg-gray-700 rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-pink-500 h-full rounded-full" style={{ width: "60%" }}></div>
            </div>
            <div className="mt-1 flex justify-between text-xs text-gray-400">
              <span>75 points</span>
              <span>Next: Silver (125 pts)</span>
            </div>
          </div>

          <div className="p-3">
            <div className="text-xs font-medium text-gray-400 mb-2">Quick Actions:</div>
            <a href="community.html" className="flex items-center py-2 px-3 text-sm hover:bg-gray-700 rounded transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg>
              Connect with participants
              <span className="ml-auto text-xs text-purple-400">+15 pts</span>
            </a>
            <a href="#" className="flex items-center py-2 px-3 text-sm hover:bg-gray-700 rounded transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              Share on social media
              <span className="ml-auto text-xs text-purple-400">+20 pts</span>
            </a>
            <a href="incentives.html" className="flex items-center py-2 px-3 text-sm hover:bg-gray-700 rounded transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                <path d="M4 22h16"></path>
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
              </svg>
              View rewards
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const SuccessStories = () => {
  const [activeStory, setActiveStory] = useState(0);
  const [points, setPoints] = useState(35);

  // Sample success stories data
  const successStories = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Frontend Developer at Google",
      year: "2023",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      quote: "HackathonParty was the turning point in my career. I came with barely any experience and left with a job offer!",
      story: "When I signed up for HackathonParty in 2023, I was a recent computer science graduate with no professional experience. I almost didn't show up because I was intimidated, but I'm so glad I did! I teamed up with two other women who helped me build my first real project - a web app that helps track carbon emissions. Not only did our project win the sustainability category, but a recruiter from Google was so impressed with my frontend work that they invited me to interview. Three weeks later, I had my first job as a developer. The supportive environment at HackathonParty gave me the confidence I needed to showcase my skills in a way I never had before.",
      tags: ["Frontend", "Career Switcher", "First-time Hacker"]
    },
    {
      id: 2,
      name: "Maya Johnson",
      role: "Founder of TechMoms",
      year: "2021",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      quote: "I found my co-founder and my purpose at HackathonParty. Now we're helping thousands of mothers enter tech.",
      story: "I attended HackathonParty after taking a 5-year break from tech to raise my children. I felt completely out of touch with the industry and wasn't sure if there was still a place for me. During the event, I met Sophia who was in a similar situation. We bonded over the challenges of balancing motherhood and a tech career, and decided to create a platform that would help mothers learn coding skills on a flexible schedule. Our hackathon project was just a prototype, but the mentors helped us refine our business model. Today, TechMoms has helped over 3,000 mothers transition into tech roles, and we've raised $2.5M in funding. None of this would have happened if I hadn't gathered the courage to attend HackathonParty that day.",
      tags: ["Entrepreneurship", "Social Impact", "Returning to Tech"]
    },
    {
      id: 3,
      name: "Zoe Williams",
      role: "Senior Data Scientist at Netflix",
      year: "2022",
      image: "https://randomuser.me/api/portraits/women/17.jpg",
      quote: "From academia to industry in one weekend - HackathonParty showed me how my PhD skills could solve real-world problems.",
      story: "After spending years in academia working on my Machine Learning PhD, I was interested in industry roles but wasn't sure how to make the transition. My advisor suggested attending HackathonParty to get exposure to how ML is applied in business contexts. At the hackathon, I joined a team working on a recommendation system for independent films. My theoretical knowledge combined with my teammates' practical experience resulted in an innovative approach that caught the attention of a Netflix engineering manager who was judging the competition. They encouraged me to apply for their data science team, highlighting how my academic background was actually a strength. Six months later, I was leading a team at Netflix working on similar algorithms. HackathonParty helped me see that my academic experience was valuable in industry settings, I just needed to learn how to translate it.",
      tags: ["Data Science", "PhD", "Career Transition"]
    },
    {
      id: 4,
      name: "Jasmine Chen",
      role: "CTO of HealthTech Startup",
      year: "2020",
      image: "https://randomuser.me/api/portraits/women/79.jpg",
      quote: "I went from being the 'only woman engineer' at my company to building a diverse engineering team of my own.",
      story: "Before HackathonParty, I was used to being the only woman on my engineering teams, which was isolating and often undermined my confidence. At the hackathon, for the first time in my career, I was surrounded by other women engineers with similar experiences. We built a health monitoring application that won the healthcare track, but more importantly, I found a community that understood my challenges. The mentorship I received from senior women in tech inspired me to take more risks in my career. A year later, I joined a healthtech startup as their CTO, and I've made it my mission to build a diverse engineering team. Today, our team is 45% women, and we've created an inclusive culture that attracts top talent from all backgrounds. HackathonParty showed me what was possible when diversity is prioritized.",
      tags: ["Leadership", "Diversity in Tech", "HealthTech"]
    },
    {
      id: 5,
      name: "Leila Rodriguez",
      role: "Cybersecurity Expert & Tech Speaker",
      year: "2019",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "At HackathonParty, I not only discovered my passion for cybersecurity but also my voice as a tech advocate.",
      story: "I was working as a QA engineer when I attended HackathonParty on a whim. I joined a team focused on building a secure messaging app, and something clicked. I found cybersecurity fascinating in a way that QA never was for me. After the hackathon, I started taking security courses and eventually transitioned to a security role. But HackathonParty gave me more than a new career direction—it also gave me confidence as a speaker. During the final presentations, despite my nervousness, I received great feedback on how I explained technical concepts. That encouraged me to start speaking at local meetups, which eventually led to conference invitations. Today, I split my time between consulting on cybersecurity and speaking at events to encourage more women to enter the field. What started as a weekend hackathon completely redirected my career path.",
      tags: ["Cybersecurity", "Public Speaking", "Career Change"]
    }
  ];

  useEffect(() => {
    // Initialize points from session storage if available
    const storedPoints = sessionStorage.getItem('engagement-points');
    if (storedPoints) {
      setPoints(parseInt(storedPoints, 10));
    }
  }, []);

  const handleReadStory = (index) => {
    setActiveStory(index);
    // Award points only once per story
    if (!sessionStorage.getItem(`read-story-${successStories[index].id}`)) {
      sessionStorage.setItem(`read-story-${successStories[index].id}`, 'true');
      const newPoints = points + 10;
      setPoints(newPoints);
      sessionStorage.setItem('engagement-points', newPoints.toString());
    }
  };

  const handleNextStory = () => {
    setActiveStory((activeStory + 1) % successStories.length);
  };

  const handlePreviousStory = () => {
    setActiveStory((activeStory - 1 + successStories.length) % successStories.length);
  };

  return (
    <div className="success-stories">
      <Header />
      <div className="max-w-6xl mx-auto">
        <header className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold">Success Stories</h1>
              <p className="text-sm opacity-90">Inspiring journeys from past HackathonParty participants</p>
            </div>
            <div className="rounded-lg px-3 py-1 flex items-center backdrop-blur-sm">
              <Star className="mr-1" />
              <span>{points} engagement points</span>
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* Featured Story */}
          <div className="bg-gradient-to-r from-indigo-50 to-pink-50 rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gray-50 p-6 flex flex-col">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img
                    src={successStories[activeStory].image}
                    alt={successStories[activeStory].name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h2 className="text-xl text-purple-700 font-bold text-center mb-1">{successStories[activeStory].name}</h2>
                <p className="text-gray-600 text-sm text-center mb-4">{successStories[activeStory].role}</p>

                <div className="bg-purple-50 p-3 rounded-lg mb-4">
                  <p className="text-purple-700 text-sm italic">"{successStories[activeStory].quote}"</p>
                </div>

                <div className="flex flex-wrap mt-auto">
                  {successStories[activeStory].tags.map(tag => (
                    <span key={tag} className="tag flex items-center">
                      <Tag size={12} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:w-2/3 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold">Her HackathonParty Story</h3>
                  <span className="text-sm text-gray-500">HackathonParty {successStories[activeStory].year}</span>
                </div>

                <div className="prose">
                  <p className="mb-4">{successStories[activeStory].story}</p>
                </div>

                <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-700">
                  <button
                    onClick={handlePreviousStory}
                    className="flex items-center text-purple-600 hover:text-purple-800"
                  >
                    <ChevronLeft size={20} className="mr-1" />
                    Previous Story
                  </button>

                  <button
                    onClick={handleNextStory}
                    className="flex items-center text-purple-600 hover:text-purple-800"
                  >
                    Next Story
                    <ChevronRight size={20} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Story Thumbnails */}
          <h3 className="text-lg font-bold mb-4">More Inspiring Journeys</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {successStories.map((story, index) => (
              <div
                key={story.id}
                className={`bg-gradient-to-r from-indigo-50 to-pink-50 rounded-lg shadow overflow-hidden cursor-pointer transition-transform hover:scale-105 ${activeStory === index ? 'ring-2 ring-purple-500' : ''}`}
                onClick={() => handleReadStory(index)}
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-sm truncate">{story.name}</h4>
                  <p className="text-xs text-gray-600 truncate">{story.role}</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-xs text-gray-500">{story.year}</span>
                    <button className="text-purple-600 text-xs flex items-center">
                      Read
                      <ChevronRight size={12} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-8 bg-gradient-to-r from-indigo-50 to-pink-50 rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Ready to Create Your Success Story?</h3>
            <p className="text-gray-600 mb-4">Join us at the next HackathonParty and start your journey</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
                Register for Next Event
              </button>
              <a href="index.html" className="bg-white text-purple-600 border border-purple-200 px-4 py-2 rounded-lg inline-flex items-center justify-center">
                Back to Social Media Wall
              </a>
            </div>

            <div className="mt-4 flex justify-center space-x-4">
              <a href="index.html" className="inline-flex items-center text-purple-400 hover:text-purple-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                Social Media Wall
              </a>
              <span className="text-gray-500">|</span>
              <a href="success-stories.html" className="inline-flex items-center text-purple-400 hover:text-purple-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Success Stories
              </a>
              <span className="text-gray-500">|</span>
              <a href="incentives.html" className="inline-flex items-center text-purple-400 hover:text-purple-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M12 8H8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-4z"/>
                  <path d="M12 2v6"/>
                  <path d="M12 18v4"/>
                  <path d="m4.93 10.93 2.83-2.83"/>
                  <path d="m16.24 16.24 2.83-2.83"/>
                </svg>
                Prizes & Incentives
              </a>
              <span className="text-gray-500">|</span>
              <a href="community.html" className="inline-flex items-center text-purple-400 hover:text-purple-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;