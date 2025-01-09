// import Link from 'next/link'

// export default function Learn() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-blue-600 mb-8">Learn About Mental Health</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         <Link href="/learn/understanding-mental-health" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//           <h2 className="text-2xl font-semibold text-blue-600 mb-4">Understanding Mental Health</h2>
//           <p className="text-gray-600">Explore the basics of mental health and its importance in our daily lives.</p>
//         </Link>
//         <Link href="/learn/common-disorders" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//           <h2 className="text-2xl font-semibold text-blue-600 mb-4">Common Disorders</h2>
//           <p className="text-gray-600">Learn about various mental health disorders, their symptoms, and treatment options.</p>
//         </Link>
//         <Link href="/learn/tips-for-wellbeing" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//           <h2 className="text-2xl font-semibold text-blue-600 mb-4">Tips for Well-being</h2>
//           <p className="text-gray-600">Discover practical strategies to maintain and improve your mental health.</p>
//         </Link>
//       </div>
//     </div>
//   )
// }


// youtube added 
import Link from 'next/link'
import YouTubePlayer from '../components/Youtube'

export default function Learn() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-600 mb-8">Learn About Mental Health</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-600 mb-4">Featured Video</h2>
        <div className="aspect-w-16 aspect-h-9">
          <YouTubePlayer videoId="AzZpiZPxvq0" width="100%" height="100%" />
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-500">This video provides an overview of mental health and its importance in our daily lives.</p>
      </section>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Link href="/learn/understanding-mental-health" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Understanding Mental Health</h2>
          <p className="text-gray-600 dark:text-gray-300">Explore the basics of mental health and its importance in our daily lives.</p>
        </Link>
        <Link href="/learn/common-disorders" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Common Disorders</h2>
          <p className="text-gray-600 dark:text-gray-300">Learn about various mental health disorders, their symptoms, and treatment options.</p>
        </Link>
        <Link href="/learn/tips-for-wellbeing" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Tips for Well-being</h2>
          <p className="text-gray-600 dark:text-gray-300">Discover practical strategies to maintain and improve your mental health.</p>
        </Link>
      </div>
      
      <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Additional Resources</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
          <li>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Mental Health First Aid Course</a>
            : Learn how to identify, understand and respond to signs of mental illnesses and substance use disorders.
          </li>
          <li>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Recommended Books on Mental Health</a>
            : A curated list of books that provide in-depth knowledge on various mental health topics.
          </li>
          <li>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Podcasts on Mental Wellness</a>
            : Listen to experts discuss various aspects of mental health and well-being.
          </li>
        </ul>
      </section>
    </div>
  )
}





