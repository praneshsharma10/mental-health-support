// import Image from 'next/image'
// import Link from 'next/link'
// import FAQ from './components/FAQ'

// export default function Home() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <section className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Mental Health Support</h1>
//         <p className="text-xl text-gray-600">Connecting You with Mental Health Resources to Build a Better Tomorrow</p>
//         <Image src="/landingpageimg.jpg" alt="Mental well-being" width={1000} height={400} className="mx-auto mt-8 rounded-lg shadow-lg" />
//       </section>

//       <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-semibold text-blue-600 mb-4">Educational Resources</h2>
//           <p className="text-gray-600 mb-4">Explore our comprehensive library of mental health information and resources.</p>
//           <Link href="/learn" className="text-blue-600 hover:underline">Learn More</Link>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-semibold text-blue-600 mb-4">Self-Assessment Tools</h2>
//           <p className="text-gray-600 mb-4">Take our confidential quizzes to gain insights into your mental well-being.</p>
//           <Link href="/assess" className="text-blue-600 hover:underline">Start Assessment</Link>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-semibold text-blue-600 mb-4">Talk to a Specialist</h2>
//           <p className="text-gray-600 mb-4">Connect with licensed mental health professionals for personalized support.</p>
//           <Link href="/support" className="text-blue-600 hover:underline">Get Support</Link>
//         </div>
//       </section>

//       <FAQ />

//       <section className="bg-gray-100 p-8 rounded-lg mb-12">
//         <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Success Stories</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <p className="text-gray-600 mb-4"> This website has been a lifeline for me. The resources and support I found here helped me overcome my anxiety and regain control of my life.</p>
//             <p className="text-blue-600 font-semibold">- Sarah, 28</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <p className="text-gray-600 mb-4"> I never realized how important mental health was until I started using the tools on this site. Its made a world of difference in my daily life.</p>
//             <p className="text-blue-600 font-semibold">- Michael, 35</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }




// before fixing final one
import Image from 'next/image'
import Link from 'next/link'
import FAQ from './components/FAQ'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Mental Health Support</h1>
        <p className="text-xl text-gray-600">Connecting You with Mental Health Resources to Build a Better Tomorrow</p>
        <Image src="/landingpageimg.jpg" alt="Mental well-being" width={900} height={600} className="mx-auto mt-8 rounded-lg shadow-lg priority='true'" />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Educational Resources</h2>
          <p className="text-gray-600 mb-4">Explore our comprehensive library of mental health information and resources.</p>
          <Link href="/learn" className="text-blue-600 hover:underline">Learn More</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Self-Assessment Tools</h2>
          <p className="text-gray-600 mb-4">Take our confidential quizzes to gain insights into your mental well-being.</p>
          <Link href="/assess" className="text-blue-600 hover:underline">Start Assessment</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Talk to a Specialist</h2>
          <p className="text-gray-600 mb-4">Connect with licensed mental health professionals for personalized support.</p>
          <Link href="/support" className="text-blue-600 hover:underline">Get Support</Link>
        </div>
      </section>

      <FAQ />

      <section className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 text-center">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <p className="text-gray-600 dark:text-gray-300 mb-4">This website has been a lifeline for me. The resources and support I found here helped me overcome my anxiety and regain control of my life.</p>
            <p className="text-blue-600 dark:text-blue-400 font-semibold">- Sarah, 28</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <p className="text-gray-600 dark:text-gray-300 mb-4">I never realized how important mental health was until I started using the tools on this site. Its made a world of difference in my daily life.</p>
            <p className="text-blue-600 dark:text-blue-400 font-semibold">- Michael, 35</p>
          </div>
        </div>
      </section>


    </div>
  )
}

{/* <section className="bg-gray-100 p-8 rounded-lg mb-12">
<h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Success Stories</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="text-gray-600 mb-4">This website has been a lifeline for me. The resources and support I found here helped me overcome my anxiety and regain control of my life.</p>
    <p className="text-blue-600 font-semibold">- Sarah, 28</p>
  </div>
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="text-gray-600 mb-4">I never realized how important mental health was until I started using the tools on this site. Its made a world of difference in my daily life.</p>
    <p className="text-blue-600 font-semibold">- Michael, 35</p>
  </div>
</div>
</section> */}