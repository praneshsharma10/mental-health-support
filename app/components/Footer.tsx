// import Link from 'next/link'
// import { Facebook, Twitter, Instagram } from 'lucide-react'

// export default function Footer() {
//   return (
//     <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 py-8">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Get Help</h3>
//             <form>
//               <input type="text" placeholder="Name" required className="w-full mb-2 p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
//               <input type="email" placeholder="Email" required className="w-full mb-2 p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
//               <input type="text" placeholder="Preferred Contact Time" className="w-full mb-2 p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
//               <textarea placeholder="Message" className="w-full mb-2 p-2 border rounded dark:bg-gray-700 dark:border-gray-600"></textarea>
//               <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">Submit</button>
//             </form>
//             <p className="text-sm mt-2">Your information is confidential and will only be used to provide support.</p>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li><Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link></li>
//               <li><Link href="/learn" className="hover:text-blue-600 dark:hover:text-blue-400">Learn</Link></li>
//               <li><Link href="/assess" className="hover:text-blue-600 dark:hover:text-blue-400">Assess</Link></li>
//               <li><Link href="/support" className="hover:text-blue-600 dark:hover:text-blue-400">Support</Link></li>
//               <li><Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</Link></li>
//               <li><Link href="/our-mission" className="hover:text-blue-600 dark:hover:text-blue-400">Our Mission</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
//             <div className="flex space-x-4">
//               <a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
//                 <Facebook size={24} />
//                 <span className="sr-only">Facebook</span>
//               </a>
//               <a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
//                 <Twitter size={24} />
//                 <span className="sr-only">Twitter</span>
//               </a>
//               <a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
//                 <Instagram size={24} />
//                 <span className="sr-only">Instagram</span>
//               </a>
//             </div>
//             <form className="mt-4">
//               <input type="email" placeholder="Subscribe to our newsletter" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
//               <button type="submit" className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">Subscribe</button>
//             </form>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Legal</h3>
//             <ul className="space-y-2">
//               <li><Link href="/privacy-policy" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</Link></li>
//               <li><Link href="/terms-of-service" className="hover:text-blue-600 dark:hover:text-blue-400">Terms of Service</Link></li>
//             </ul>
//           </div>
//         </div>
//         <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
//           <div className="flex justify-between items-center">
//             <p>&copy; 2024 Pranesh Sharma. All rights reserved.</p>
//             <a href="mailto:pranesh@example.com" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
//               Contact Pranesh
//             </a>
//           </div>
//         </div>
        
        
//       </div>
//     </footer>
//   )
// }



import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Help</h3>
            <form>
              <input type="text" placeholder="Name" required className="w-full mb-2 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 text-gray-800 dark:text-gray-200" />
              <input type="email" placeholder="Email" required className="w-full mb-2 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 text-gray-800 dark:text-gray-200" />
              <input type="text" placeholder="Preferred Contact Time" className="w-full mb-2 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 text-gray-800 dark:text-gray-200" />
              <textarea placeholder="Message" className="w-full mb-2 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 text-gray-800 dark:text-gray-200"></textarea>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">Submit</button>
            </form>
            <p className="text-sm mt-2">Your information is confidential and will only be used to provide support.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link></li>
              <li><Link href="/learn" className="hover:text-blue-600 dark:hover:text-blue-400">Learn</Link></li>
              <li><Link href="/assess" className="hover:text-blue-600 dark:hover:text-blue-400">Assess</Link></li>
              <li><Link href="/support" className="hover:text-blue-600 dark:hover:text-blue-400">Support</Link></li>
              <li><Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</Link></li>
              <li><Link href="/our-mission" className="hover:text-blue-600 dark:hover:text-blue-400">Our Mission</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
            <form className="mt-4">
              <input type="email" placeholder="Subscribe to our newsletter" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 text-gray-800 dark:text-gray-200" />
              <button type="submit" className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">Subscribe</button>
            </form>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-blue-600 dark:hover:text-blue-400">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <p>&copy; 2024 Pranesh Sharma. All rights reserved.</p>
            <a href="mailto:pranesh@example.com" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Contact Pranesh
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

