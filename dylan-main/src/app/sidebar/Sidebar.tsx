// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";

// interface SidebarProps {
//   isOpen: boolean;
//   setIsOpen: (isOpen: boolean) => void;
// }

// export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
//   // Close sidebar when screen size is small and clicking outside
//   useEffect(() => {
//     function handleResize() {
//       if (window.innerWidth < 768) {
//         setIsOpen(false);
//       }
//     }

//     function handleClickOutside(e: MouseEvent) {
//       const target = e.target as HTMLElement;
//       if (window.innerWidth < 768 && isOpen && !target.closest('.sidebar')) {
//         setIsOpen(false);
//       }
//     }

//     window.addEventListener('resize', handleResize);
//     document.addEventListener('mousedown', handleClickOutside);
    
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isOpen, setIsOpen]);

//   return (
//     <>
//       {/* Overlay when sidebar is open on mobile */}
//       {isOpen && (
//         <div 
//           className="md:hidden fixed inset-0 bg-black/30 z-20" 
//           onClick={() => setIsOpen(false)}
//         />
//       )}
      
//       {/* Sidebar */}
//       <div 
//         className={`sidebar fixed top-0 left-0 h-full bg-[#202123] text-white z-30 transition-transform duration-300 ease-in-out transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0 w-[260px]`}
//       >
//         <div className="flex flex-col h-full">
//           {/* Header with new chat button */}
//           <div className="p-4">
//             <button 
//               className="flex items-center justify-between w-full px-3 py-3 rounded-md border border-white/20 hover:bg-gray-700/50 text-sm"
//             >
//               <span className="flex items-center">
//                 <svg 
//                   stroke="currentColor" 
//                   fill="none" 
//                   strokeWidth="2" 
//                   viewBox="0 0 24 24" 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   className="h-4 w-4 mr-2" 
//                   height="1em" 
//                   width="1em" 
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <line x1="12" y1="5" x2="12" y2="19"></line>
//                   <line x1="5" y1="12" x2="19" y2="12"></line>
//                 </svg>
//                 New chat
//               </span>
//             </button>
//           </div>

//           {/* Navigation links */}
//           <nav className="flex-1 overflow-y-auto p-2">
//             <div className="mb-2 px-2 text-xs text-gray-500">Recent pages</div>
//             <Link href="/" className="flex items-center px-3 py-3 rounded-md hover:bg-gray-700/50 text-sm">
//               <svg 
//                 stroke="currentColor" 
//                 fill="none" 
//                 strokeWidth="2" 
//                 viewBox="0 0 24 24" 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round" 
//                 className="h-4 w-4 mr-2" 
//                 height="1em" 
//                 width="1em" 
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
//                 <polyline points="9 22 9 12 15 12 15 22"></polyline>
//               </svg>
//               Home
//             </Link>
//             <Link href="/about" className="flex items-center px-3 py-3 rounded-md hover:bg-gray-700/50 text-sm">
//               <svg 
//                 stroke="currentColor" 
//                 fill="none" 
//                 strokeWidth="2" 
//                 viewBox="0 0 24 24" 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round" 
//                 className="h-4 w-4 mr-2" 
//                 height="1em" 
//                 width="1em" 
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <circle cx="12" cy="12" r="10"></circle>
//                 <line x1="12" y1="16" x2="12" y2="12"></line>
//                 <line x1="12" y1="8" x2="12.01" y2="8"></line>
//               </svg>
//               About
//             </Link>
//             <Link href="/projects" className="flex items-center px-3 py-3 rounded-md hover:bg-gray-700/50 text-sm">
//               <svg 
//                 stroke="currentColor" 
//                 fill="none" 
//                 strokeWidth="2" 
//                 viewBox="0 0 24 24" 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round" 
//                 className="h-4 w-4 mr-2" 
//                 height="1em" 
//                 width="1em" 
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
//                 <line x1="3" y1="9" x2="21" y2="9"></line>
//                 <line x1="9" y1="21" x2="9" y2="9"></line>
//               </svg>
//               Projects
//             </Link>
//           </nav>

//           {/* User section */}
//           <div className="border-t border-white/20 p-3">
//             <div className="flex items-center px-3 py-3 rounded-md hover:bg-gray-700/50 text-sm">
//               <div className="flex items-center space-x-2">
//                 <div className="h-8 w-8 rounded-full bg-emerald-700 flex items-center justify-center">
//                   <span>D</span>
//                 </div>
//                 <span>Dylan</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }