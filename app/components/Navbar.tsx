


// import Link from "next/link";

// export default function Navbar() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <nav className="bg-blue-600 text-white">
//       <div className="container mx-auto px-4">
//         <ul className="flex justify-center space-x-6 py-4">
//           <li>
//             <Link href="/" className="hover:text-blue-200">
//               Home
//             </Link>
//           </li>

//           <li className="relative">
//             {/* Dropdown Button */}
//             <button
//               onClick={toggleDropdown}
//               className="hover:text-blue-200 focus:outline-none"
//               aria-expanded={isDropdownOpen}
//             >
//               Learn
//             </button>

//             {/* Dropdown Menu */}
//             {isDropdownOpen && (
//               <ul className="absolute bg-white text-gray-800 shadow-md rounded-md mt-2 w-56 z-10">
//                 <li>
//                   <Link
//                     href="/learn/understanding-mental-health"
//                     className="block px-4 py-2 hover:bg-blue-100 border-b border-gray-200"
//                   >
//                     Understanding Mental Health
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/learn/common-disorders"
//                     className="block px-4 py-2 hover:bg-blue-100 border-b border-gray-200"
//                   >
//                     Common Disorders
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/learn/tips-for-wellbeing"
//                     className="block px-4 py-2 hover:bg-blue-100"
//                   >
//                     Tips for Well-being
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>

//           <li>
//             <Link href="/assess" className="hover:text-blue-200">
//               Assess
//             </Link>
//           </li>
//           <li>
//             <Link href="/support" className="hover:text-blue-200">
//               Support
//             </Link>
//           </li>
//           <li>
//             <Link href="/blog" className="hover:text-blue-200">
//               Blog
//             </Link>
//           </li>
//           <li>
//             <Link href="/our-mission" className="hover:text-blue-200">
//               Our Mission
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }











import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 dark:bg-blue-800 text-white">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center space-x-6 py-4">
          <li><Link href="/" className="hover:text-blue-200">Home</Link></li>
          <li className="relative group">
            <Link href="/learn" className="hover:text-blue-200">Learn</Link>
            <ul className="absolute hidden group-hover:block hover:block bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md rounded-md mt-2">
              <li><Link href="/learn/understanding-mental-health" className="block px-4 py-2 hover:bg-blue-100 dark:hover:bg-blue-700 border-b border-gray-200 dark:border-gray-700">Understanding Mental Health</Link></li>
              <li><Link href="/learn/common-disorders" className="block px-4 py-2 hover:bg-blue-100 dark:hover:bg-blue-700 border-b border-gray-200 dark:border-gray-700">Common Disorders</Link></li>
              <li><Link href="/learn/tips-for-wellbeing" className="block px-4 py-2 hover:bg-blue-100 dark:hover:bg-blue-700">Tips for Well-being</Link></li>
            </ul>
          </li>
          <li><Link href="/assess" className="hover:text-blue-200">Assess</Link></li>
          <li><Link href="/support" className="hover:text-blue-200">Support</Link></li>
          <li><Link href="/blog" className="hover:text-blue-200">Blog</Link></li>
          <li><Link href="/our-mission" className="hover:text-blue-200">Our Mission</Link></li>
        </ul>
      </div>
    </nav>
  )
}

