// import React, { useState } from 'react';
// import './SocialMediaWall.css'; // You'll need to create this CSS file with the styles

// // Icon components
// const Heart = ({ size = 16, className = "" }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={className}
//   >
//     <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
//   </svg>
// );

// const MessageCircle = ({ size = 16, className = "" }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={className}
//   >
//     <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
//   </svg>
// );

// const Share2 = ({ size = 16, className = "" }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={className}
//   >
//     <circle cx="18" cy="5" r="3"></circle>
//     <circle cx="6" cy="12" r="3"></circle>
//     <circle cx="18" cy="19" r="3"></circle>
//     <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
//     <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
//   </svg>
// );

// const Star = ({ size = 16, className = "" }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={className}
//   >
//     <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
//   </svg>
// );

// const Award = ({ size = 16, className = "" }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={className}
//   >
//     <circle cx="12" cy="8" r="6"></circle>
//     <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
//   </svg>
// );

// const Camera = ({ size = 20, className = "" }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={className}
//   >
//     <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
//     <circle cx="12" cy="13" r="3"></circle>
//   </svg>
// );

// const Hash = ({ size = 12, className = "" }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={className}
//   >
//     <line x1="4" y1="9" x2="20" y2="9"></line>
//     <line x1="4" y1="15" x2="20" y2="15"></line>
//     <line x1="10" y1="3" x2="8" y2="21"></line>
//     <line x1="16" y1="3" x2="14" y2="21"></line>
//   </svg>
// );

// // Social Media Wall Component
// const SocialMediaWall = ({ initialPoints = 0 }) => {
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [points, setPoints] = useState(initialPoints);
//   const [likedPosts, setLikedPosts] = useState([]);

//   // Sample posts data
//   const posts = [
//     {
//       id: 1,
//       platform: 'twitter',
//       username: 'techJulia',
//       name: 'Julia Chen',
//       userImage: 'https://randomuser.me/api/portraits/women/12.jpg',
//       content: "Just registered for #HackathonParty! Can't wait to meet other women in tech and build something amazing together! This will be my first hackathon - any tips? #WomenInTech #CodingJourney",
//       image: null,
//       date: '2 days ago',
//       likes: 42,
//       comments: 7,
//       shares: 3,
//       featured: true
//     },
//     {
//       id: 2,
//       platform: 'linkedin',
//       username: 'sarah-patel',
//       name: 'Sarah Patel',
//       userImage: 'https://randomuser.me/api/portraits/women/37.jpg',
//       content: "Incredibly grateful for the experience at #HackathonParty last weekend! Our team built a mobile app that helps connect senior citizens with tech volunteers. We won the 'Social Impact' category! 🏆",
//       image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//       date: '1 week ago',
//       likes: 218,
//       comments: 32,
//       shares: 14,
//       featured: true
//     },
//     {
//       id: 3,
//       platform: 'instagram',
//       username: 'code.with.elena',
//       name: 'Elena Rodriguez',
//       userImage: 'https://randomuser.me/api/portraits/women/63.jpg',
//       content: "Still buzzing from the energy at #HackathonParty! 24 hours of coding, learning, and making new friends. Swipe to see our project - an AR experience that helps people understand climate change impacts in their local area. 💻🌍 #WomenWhoCode",
//       image: 'https://images.unsplash.com/photo-1573495627361-d9b87960b12d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//       date: '3 days ago',
//       likes: 352,
//       comments: 41,
//       shares: 8,
//       featured: true
//     },
//     {
//       id: 4,
//       platform: 'twitter',
//       username: 'devAshley',
//       name: 'Ashley Wong',
//       userImage: 'https://randomuser.me/api/portraits/women/44.jpg',
//       content: "The mentors at #HackathonParty are AMAZING! Just had a 1:1 session with a senior engineer from Google who helped debug our API issue in minutes. This event is so much more than just coding! #WomenInTech",
//       image: null,
//       date: '1 day ago',
//       likes: 76,
//       comments: 5,
//       shares: 2
//     },
//     {
//       id: 5,
//       platform: 'linkedin',
//       username: 'maya-james',
//       name: 'Maya James',
//       userImage: 'https://randomuser.me/api/portraits/women/71.jpg',
//       content: "I'm excited to share that I've accepted a software engineering position at Microsoft! The journey started at HackathonParty last year where I connected with a Microsoft recruiter who was impressed with our team's project.",
//       image: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//       date: '2 weeks ago',
//       likes: 943,
//       comments: 128,
//       shares: 47
//     },
//     {
//       id: 6,
//       platform: 'instagram',
//       username: 'tech.olivia',
//       name: 'Olivia Thompson',
//       userImage: 'https://randomuser.me/api/portraits/women/8.jpg',
//       content: "Post-hackathon celebration! 🎉 Our team didn't win, but we learned so much and made connections that will last far beyond the weekend. Special shoutout to the HackathonParty organizers!",
//       image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//       date: '5 days ago',
//       likes: 217,
//       comments: 23,
//       shares: 5
//     }
//   ];

//   const handleLike = (postId) => {
//     if (!likedPosts.includes(postId)) {
//       setLikedPosts([...likedPosts, postId]);
//       setPoints(points + 5);
//     } else {
//       setLikedPosts(likedPosts.filter(id => id !== postId));
//       setPoints(Math.max(0, points - 5));
//     }
//   };

//   const handleCreatePost = () => {
//     alert("In a real implementation, this would open a form to create and share a post about HackathonParty on your social media accounts. Sharing earns you 20 engagement points!");
//     setPoints(points + 20);
//   };

//   const filteredPosts = activeFilter === 'all'
//     ? posts
//     : posts.filter(post => post.platform === activeFilter);

//   const getPlatformIcon = (platform) => {
//     switch(platform) {
//       case 'twitter':
//         return (
//           <div className="bg-blue-400 w-6 h-6 rounded-full flex items-center justify-center text-white">
//             <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
//               <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//             </svg>
//           </div>
//         );
//       case 'linkedin':
//         return (
//           <div className="bg-blue-700 w-6 h-6 rounded-full flex items-center justify-center text-white">
//             <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
//               <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//             </svg>
//           </div>
//         );
//       case 'instagram':
//         return (
//           <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 w-6 h-6 rounded-full flex items-center justify-center text-white">
//             <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
//               <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z" />
//             </svg>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto">
//       <header className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6">
//         <div className="flex justify-between items-center mb-6">
//           <div>
//             <h1 className="text-2xl font-bold">Social Media Wall</h1>
//             <p className="text-sm opacity-90">See what others are saying about HackathonParty</p>
//           </div>
//           <div className="rounded-lg px-3 py-1 flex items-center backdrop-blur-sm">
//             <Star className="mr-1" />
//             <span>{points} engagement points</span>
//           </div>
//         </div>
//       </header>

//       {/* Create Post Card */}
//       <div className="bg-gradient-to-r from-indigo-50 to-pink-50 rounded-xl shadow-md p-4 mt-5 text-gray-800">
//         <div className="flex items-start">
//           <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center mr-3 text-purple-600">
//             <Camera />
//           </div>
//           <div className="flex-1">
//             <textarea
//               className="w-full border rounded-lg p-3 h-20 text-sm"
//               placeholder="Share your excitement about HackathonParty! Use #HackathonParty to join the conversation."
//             ></textarea>
//             <div className="flex justify-between items-center mt-3">
//               <div className="flex space-x-2">
//                 <span className="inline-flex items-center text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
//                   <Hash className="mr-1" />
//                   HackathonParty
//                 </span>
//                 <span className="inline-flex items-center text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full">
//                   <Hash className="mr-1" />
//                   WomenInTech
//                 </span>
//               </div>
//               <button
//                 className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm"
//                 onClick={handleCreatePost}
//               >
//                 Share & Earn Points
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="p-6 bg-dark">
//         {/* Filters */}
//         <div className="flex items-center mb-6 overflow-x-auto pb-2">
//           <button
//             className={`px-4 py-2 mr-2 rounded-full text-sm font-medium ${activeFilter === 'all' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700'}`}
//             onClick={() => setActiveFilter('all')}
//           >
//             All Posts
//           </button>
//           <button
//             className={`px-4 py-2 mr-2 rounded-full text-sm font-medium flex items-center ${activeFilter === 'twitter' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}
//             onClick={() => setActiveFilter('twitter')}
//           >
//             <div className="mr-1">
//               <svg viewBox="0 0 24 24" className="w-4 h-4">
//                 <path fill="currentColor" d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//               </svg>
//             </div>
//             Twitter
//           </button>
//           <button
//             className={`px-4 py-2 mr-2 rounded-full text-sm font-medium flex items-center ${activeFilter === 'linkedin' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}
//             onClick={() => setActiveFilter('linkedin')}
//           >
//             <div className="mr-1">
//               <svg viewBox="0 0 24 24" className="w-4 h-4">
//                 <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//               </svg>
//             </div>
//             LinkedIn
//           </button>
//           <button
//             className={`px-4 py-2 mr-2 rounded-full text-sm font-medium flex items-center ${activeFilter === 'instagram' ? 'bg-pink-100 text-pink-700' : 'bg-gray-100 text-gray-700'}`}
//             onClick={() => setActiveFilter('instagram')}
//           >
//             <div className="mr-1">
//               <svg viewBox="0 0 24 24" className="w-4 h-4">
//                 <path fill="currentColor" d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z" />
//               </svg>
//             </div>
//             Instagram
//           </button>
//           <button
//             className="px-4 py-2 mr-2 rounded-full text-sm font-medium bg-purple-600 text-white flex items-center"
//           >
//             <Award className="mr-1" />
//             Featured
//           </button>
//         </div>

//         {/* Featured Posts - Larger Cards */}
//         {activeFilter === 'all' && (
//           <div


import React, { useState } from 'react';
import './SocialMediaWall.css'; // You'll need to create this CSS file with the styles

// Icon components
const Heart = ({ size = 16, className = "" }) => (
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
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
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

const Share2 = ({ size = 16, className = "" }) => (
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
    <circle cx="18" cy="5" r="3"></circle>
    <circle cx="6" cy="12" r="3"></circle>
    <circle cx="18" cy="19" r="3"></circle>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
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

const Award = ({ size = 16, className = "" }) => (
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
    <circle cx="12" cy="8" r="6"></circle>
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
  </svg>
);

const Camera = ({ size = 20, className = "" }) => (
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
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
    <circle cx="12" cy="13" r="3"></circle>
  </svg>
);

const Hash = ({ size = 12, className = "" }) => (
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
    <line x1="4" y1="9" x2="20" y2="9"></line>
    <line x1="4" y1="15" x2="20" y2="15"></line>
    <line x1="10" y1="3" x2="8" y2="21"></line>
    <line x1="16" y1="3" x2="14" y2="21"></line>
  </svg>
);

// Social Media Wall Component
const SocialMediaWall = ({ initialPoints = 0 }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [points, setPoints] = useState(initialPoints);
  const [likedPosts, setLikedPosts] = useState([]);

  // Sample posts data
  const posts = [
    {
      id: 1,
      platform: 'twitter',
      username: 'techJulia',
      name: 'Julia Chen',
      userImage: 'https://randomuser.me/api/portraits/women/12.jpg',
      content: "Just registered for #HackathonParty! Can't wait to meet other women in tech and build something amazing together! This will be my first hackathon - any tips? #WomenInTech #CodingJourney",
      image: null,
      date: '2 days ago',
      likes: 42,
      comments: 7,
      shares: 3,
      featured: true
    },
    {
      id: 2,
      platform: 'linkedin',
      username: 'sarah-patel',
      name: 'Sarah Patel',
      userImage: 'https://randomuser.me/api/portraits/women/37.jpg',
      content: "Incredibly grateful for the experience at #HackathonParty last weekend! Our team built a mobile app that helps connect senior citizens with tech volunteers. We won the 'Social Impact' category! 🏆",
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      date: '1 week ago',
      likes: 218,
      comments: 32,
      shares: 14,
      featured: true
    },
    {
      id: 3,
      platform: 'instagram',
      username: 'code.with.elena',
      name: 'Elena Rodriguez',
      userImage: 'https://randomuser.me/api/portraits/women/63.jpg',
      content: "Still buzzing from the energy at #HackathonParty! 24 hours of coding, learning, and making new friends. Swipe to see our project - an AR experience that helps people understand climate change impacts in their local area. 💻🌍 #WomenWhoCode",
      image: 'https://images.unsplash.com/photo-1573495627361-d9b87960b12d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      date: '3 days ago',
      likes: 352,
      comments: 41,
      shares: 8,
      featured: true
    },
    {
      id: 4,
      platform: 'twitter',
      username: 'devAshley',
      name: 'Ashley Wong',
      userImage: 'https://randomuser.me/api/portraits/women/44.jpg',
      content: "The mentors at #HackathonParty are AMAZING! Just had a 1:1 session with a senior engineer from Google who helped debug our API issue in minutes. This event is so much more than just coding! #WomenInTech",
      image: null,
      date: '1 day ago',
      likes: 76,
      comments: 5,
      shares: 2
    },
    {
      id: 5,
      platform: 'linkedin',
      username: 'maya-james',
      name: 'Maya James',
      userImage: 'https://randomuser.me/api/portraits/women/71.jpg',
      content: "I'm excited to share that I've accepted a software engineering position at Microsoft! The journey started at HackathonParty last year where I connected with a Microsoft recruiter who was impressed with our team's project.",
      image: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      date: '2 weeks ago',
      likes: 943,
      comments: 128,
      shares: 47
    },
    {
      id: 6,
      platform: 'instagram',
      username: 'tech.olivia',
      name: 'Olivia Thompson',
      userImage: 'https://randomuser.me/api/portraits/women/8.jpg',
      content: "Post-hackathon celebration! 🎉 Our team didn't win, but we learned so much and made connections that will last far beyond the weekend. Special shoutout to the HackathonParty organizers!",
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      date: '5 days ago',
      likes: 217,
      comments: 23,
      shares: 5
    }
  ];

  const handleLike = (postId) => {
    if (!likedPosts.includes(postId)) {
      setLikedPosts([...likedPosts, postId]);
      setPoints(points + 5);
    } else {
      setLikedPosts(likedPosts.filter(id => id !== postId));
      setPoints(Math.max(0, points - 5));
    }
  };

  const handleCreatePost = () => {
    alert("In a real implementation, this would open a form to create and share a post about HackathonParty on your social media accounts. Sharing earns you 20 engagement points!");
    setPoints(points + 20);
  };

  const filteredPosts = activeFilter === 'all'
    ? posts
    : posts.filter(post => post.platform === activeFilter);

  const getPlatformIcon = (platform) => {
    switch(platform) {
      case 'twitter':
        return (
          <div className="bg-blue-400 w-6 h-6 rounded-full flex items-center justify-center text-white">
            <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </div>
        );
      case 'linkedin':
        return (
          <div className="bg-blue-700 w-6 h-6 rounded-full flex items-center justify-center text-white">
            <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </div>
        );
      case 'instagram':
        return (
          <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 w-6 h-6 rounded-full flex items-center justify-center text-white">
            <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <header className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Social Media Wall</h1>
            <p className="text-sm opacity-90">See what others are saying about HackathonParty</p>
          </div>
          <div className="rounded-lg px-3 py-1 flex items-center backdrop-blur-sm">
            <Star className="mr-1" />
            <span>{points} engagement points</span>
          </div>
        </div>
      </header>

      {/* Create Post Card */}
      <div className="bg-gradient-to-r from-indigo-50 to-pink-50 rounded-xl shadow-md p-4 mt-5 text-gray-800">
        <div className="flex items-start">
          <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center mr-3 text-purple-600">
            <Camera />
          </div>
          <div className="flex-1">
            <textarea
              className="w-full border rounded-lg p-3 h-20 text-sm"
              placeholder="Share your excitement about HackathonParty! Use #HackathonParty to join the conversation."
            ></textarea>
            <div className="flex justify-between items-center mt-3">
              <div className="flex space-x-2">
                <span className="inline-flex items-center text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                  <Hash className="mr-1" />
                  HackathonParty
                </span>
                <span className="inline-flex items-center text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full">
                  <Hash className="mr-1" />
                  WomenInTech
                </span>
              </div>
              <button
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm"
                onClick={handleCreatePost}
              >
                Share & Earn Points
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-dark">
        {/* Filters */}
        <div className="flex items-center mb-6 overflow-x-auto pb-2">
          <button
            className={`px-4 py-2 mr-2 rounded-full text-sm font-medium ${activeFilter === 'all' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => setActiveFilter('all')}
          >
            All Posts
          </button>
          <button
            className={`px-4 py-2 mr-2 rounded-full text-sm font-medium flex items-center ${activeFilter === 'twitter' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => setActiveFilter('twitter')}
          >
            <div className="mr-1">
              <svg viewBox="0 0 24 24" className="w-4 h-4">
                <path fill="currentColor" d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </div>
            Twitter
          </button>
          <button
            className={`px-4 py-2 mr-2 rounded-full text-sm font-medium flex items-center ${activeFilter === 'linkedin' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => setActiveFilter('linkedin')}
          >
            <div className="mr-1">
              <svg viewBox="0 0 24 24" className="w-4 h-4">
                <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            LinkedIn
          </button>
          <button
            className={`px-4 py-2 mr-2 rounded-full text-sm font-medium flex items-center ${activeFilter === 'instagram' ? 'bg-pink-100 text-pink-700' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => setActiveFilter('instagram')}
          >
            <div className="mr-1">
              <svg viewBox="0 0 24 24" className="w-4 h-4">
                <path fill="currentColor" d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </div>
            Instagram
          </button>
          <button
            className="px-4 py-2 mr-2 rounded-full text-sm font-medium bg-purple-600 text-white flex items-center"
          >
            <Award className="mr-1" />
            Featured
          </button>
        </div>

        {/* Featured Posts - Larger Cards */}
        {activeFilter === 'all' && (
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Featured Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {posts.filter(post => post.featured).map(post => (
                <div key={post.id} className="rounded-xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="p-4">
                    <div className="flex items-center mb-3">
                      <img
                        src={post.userImage}
                        alt={post.name}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <div className="font-bold">{post.name}</div>
                        <div className="text-xs text-gray-500 flex items-center">
                          @{post.username} · {post.date}
                          <span className="ml-1">{getPlatformIcon(post.platform)}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm mb-3">{post.content}</p>
                    {post.image && (
                      <div className="rounded-lg overflow-hidden mb-3">
                        <img src={post.image} alt="Post" className="w-full h-48 object-cover" />
                      </div>
                    )}
                    <div className="flex justify-between text-gray-500 text-sm">
                      <button
                        className={`flex items-center ${likedPosts.includes(post.id) ? 'text-red-500' : ''}`}
                        onClick={() => handleLike(post.id)}
                      >
                        <Heart className={`mr-1 ${likedPosts.includes(post.id) ? 'fill-current' : ''}`} />
                        {post.likes + (likedPosts.includes(post.id) ? 1 : 0)}
                      </button>
                      <button className="flex items-center">
                        <MessageCircle className="mr-1" />
                        {post.comments}
                      </button>
                      <button className="flex items-center">
                        <Share2 className="mr-1" />
                        {post.shares}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div>
          <h2 className="text-lg font-bold mb-4">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPosts.filter(post => activeFilter === 'all' ? !post.featured : true).map(post => (
              <div key={post.id} className="rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="p-4">
                  <div className="flex items-center mb-3">
                    <img
                      src={post.userImage}
                      alt={post.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <div className="font-bold">{post.name}</div>
                      <div className="text-xs text-gray-500 flex items-center">
                        @{post.username} · {post.date}
                        <span className="ml-1">{getPlatformIcon(post.platform)}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm mb-3">{post.content}</p>
                  {post.image && (
                    <div className="rounded-lg overflow-hidden mb-3">
                      <img src={post.image} alt="Post" className="w-full h-48 object-cover" />
                    </div>
                  )}
                  <div className="flex justify-between text-gray-500 text-sm">
                    <button
                      className={`flex items-center ${likedPosts.includes(post.id) ? 'text-red-500' : ''}`}
                      onClick={() => handleLike(post.id)}
                    >
                      <Heart className={`mr-1 ${likedPosts.includes(post.id) ? 'fill-current' : ''}`} />
                      {post.likes + (likedPosts.includes(post.id) ? 1 : 0)}
                    </button>
                    <button className="flex items-center">
                      <MessageCircle className="mr-1" />
                      {post.comments}
                    </button>
                    <button className="flex items-center">
                      <Share2 className="mr-1" />
                      {post.shares}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 bg-gradient-to-r from-indigo-50 to-pink-50 rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold mb-2">Ready to Join the Conversation?</h3>
          <p className="text-gray-600 mb-4">Register for the next HackathonParty and share your journey!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
              Register Now
            </button>
            <a href="/community" className="bg-white text-purple-600 border border-purple-200 px-4 py-2 rounded-lg inline-flex items-center justify-center">
              View Hackathon Community
            </a>
          </div>

          <div className="mt-4 flex justify-center space-x-4">
            <a href="/success-stories" className="inline-flex items-center text-purple-400 hover:text-purple-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              Success Stories
            </a>
            <span className="text-gray-500">|</span>
            <a href="/incentives" className="inline-flex items-center text-purple-400 hover:text-purple-300">
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
            <a href="/community" className="inline-flex items-center text-purple-400 hover:text-purple-300">
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
  );
};

export default SocialMediaWall;