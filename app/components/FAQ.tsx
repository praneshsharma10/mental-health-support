// 'use client'

// import { useState } from 'react'

// const faqs = [
//   {
//     question: "What are the most common mental health disorders?",
//     answer: "The most common mental health disorders include anxiety disorders, depression, bipolar disorder, post-traumatic stress disorder (PTSD), and schizophrenia. Anxiety and depression are particularly prevalent worldwide."
//   },
//   {
//     question: "How can I tell if I or someone I know needs mental health support?",
//     answer: "Signs that someone might need mental health support include persistent sadness or anxiety, significant changes in sleep or eating patterns, difficulty concentrating, withdrawal from social activities, and thoughts of self-harm. If these symptoms persist and interfere with daily life, it's important to seek professional help."
//   },
//   {
//     question: "What are some effective self-care strategies for mental health?",
//     answer: "Effective self-care strategies include regular exercise, maintaining a healthy diet, getting enough sleep, practicing mindfulness or meditation, staying connected with supportive friends and family, and engaging in activities you enjoy. It's also important to limit alcohol consumption and avoid illicit drugs."
//   },
//   {
//     question: "Are mental health disorders treatable?",
//     answer: "Yes, most mental health disorders are treatable. Treatment often involves a combination of psychotherapy (talk therapy), medication, and lifestyle changes. Many people with mental health disorders lead fulfilling lives with the right support and treatment."
//   },
//   {
//     question: "How can I support a loved one with a mental health disorder?",
//     answer: "You can support a loved one by listening without judgment, encouraging them to seek professional help, learning about their condition, helping them maintain their treatment plan, and being patient. It's also important to take care of your own mental health while supporting others."
//   }
// ]

// export default function FAQ() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null)

//   const toggleFAQ = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index)
//   }

//   return (
//     <section className="w-full py-12 md:py-24 lg:py-32">
//       <div className="container px-4 md:px-6">
//         <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Frequently Asked Questions</h2>
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div key={index} className="border border-gray-200 rounded-lg">
//               <button
//                 className="flex justify-between items-center w-full p-4 text-left"
//                 onClick={() => toggleFAQ(index)}
//               >
//                 <span className="font-semibold text-blue-600">{faq.question}</span>
//                 <span className="text-2xl">{openIndex === index ? '−' : '+'}</span>
//               </button>
//               {openIndex === index && (
//                 <div className="p-4 bg-gray-50">
//                   <p className="text-gray-600">{faq.answer}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


'use client'

import { useState } from 'react'

const faqs = [
  {
    question: "What are the most common mental health disorders?",
    answer: "The most common mental health disorders include anxiety disorders, depression, bipolar disorder, post-traumatic stress disorder (PTSD), and schizophrenia. Anxiety and depression are particularly prevalent worldwide."
  },
  {
    question: "How can I tell if I or someone I know needs mental health support?",
    answer: "Signs that someone might need mental health support include persistent sadness or anxiety, significant changes in sleep or eating patterns, difficulty concentrating, withdrawal from social activities, and thoughts of self-harm. If these symptoms persist and interfere with daily life, it's important to seek professional help."
  },
  {
    question: "What are some effective self-care strategies for mental health?",
    answer: "Effective self-care strategies include regular exercise, maintaining a healthy diet, getting enough sleep, practicing mindfulness or meditation, staying connected with supportive friends and family, and engaging in activities you enjoy. It's also important to limit alcohol consumption and avoid illicit drugs."
  },
  {
    question: "Are mental health disorders treatable?",
    answer: "Yes, most mental health disorders are treatable. Treatment often involves a combination of psychotherapy (talk therapy), medication, and lifestyle changes. Many people with mental health disorders lead fulfilling lives with the right support and treatment."
  },
  {
    question: "How can I support a loved one with a mental health disorder?",
    answer: "You can support a loved one by listening without judgment, encouraging them to seek professional help, learning about their condition, helping them maintain their treatment plan, and being patient. It's also important to take care of your own mental health while supporting others."
  }
]


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6 ">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="flex justify-between items-center w-full p-4 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-blue-600">{faq.question}</span>
                <span className="text-2xl">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-gray-50 ">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// dark:bg-gray-800

// text-blue-600 dark:text-blue-400