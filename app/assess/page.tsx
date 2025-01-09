'use client'

import { useState } from 'react'

const questions = [
  {
    question: "How often do you feel overwhelmed by your daily tasks?",
    options: ["Never", "Rarely", "Sometimes", "Often"]
  },
  {
    question: "How would you rate your overall mood in the past week?",
    options: ["Excellent", "Good", "Fair", "Poor"]
  },
  {
    question: "How often do you have trouble falling asleep or staying asleep?",
    options: ["Never", "Rarely", "Sometimes", "Often"]
  },
  {
    question: "How often do you feel anxious or worried?",
    options: ["Never", "Rarely", "Sometimes", "Often"]
  },
  {
    question: "How often do you feel down, depressed, or hopeless?",
    options: ["Never", "Rarely", "Sometimes", "Often"]
  },
  {
    question: "How often do you have little interest or pleasure in doing things?",
    options: ["Never", "Rarely", "Sometimes", "Often"]
  },
  {
    question: "How often do you have difficulty concentrating on tasks?",
    options: ["Never", "Rarely", "Sometimes", "Often"]
  },
  {
    question: "How often do you feel irritable or easily annoyed?",
    options: ["Never", "Rarely", "Sometimes", "Often"]
  }
]

export default function Assess() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const calculateResult = () => {
    const total = answers.reduce((sum, answer) => sum + answer, 0)
    const average = total / answers.length

    if (average < 1) return "Your mental health appears to be in good condition. Keep up the good work!"
    if (average < 2) return "You may be experiencing mild stress. Consider incorporating some stress-reduction techniques into your daily routine."
    if (average < 3) return "You may be experiencing moderate levels of stress or anxiety. It might be helpful to talk to a mental health professional."
    return "Your responses indicate you may be experiencing significant stress or mental health challenges. We strongly recommend reaching out to a mental health professional for support."
  }

  if (showResults) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-8">Assessment Results</h1>
        <p className="text-xl text-gray-600 mb-4">{calculateResult()}</p>
        <p className="text-gray-600">Remember, this assessment is not a diagnostic tool. If you are concerned about your mental health, please consult with a qualified mental health professional.</p>
      </div>
    )
  } 

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">Mental Health Self-Assessment</h1>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Question {currentQuestion + 1} of {questions.length}</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{questions[currentQuestion].question}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="bg-blue-100 dark:bg-blue-700 text-blue-600 dark:text-blue-200 px-4 py-2 rounded hover:bg-blue-200 dark:hover:bg-blue-600 transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

