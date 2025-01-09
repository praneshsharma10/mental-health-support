// 'use client'

// import { useTheme } from '../contexts/ThemeContext'

// export default function CalmingBackground() {
//   const { theme } = useTheme()

//   return (
//     <div className="fixed inset-0 -z-10 overflow-hidden">
//       <div
//         className={`absolute inset-0 ${
//           theme === 'light'
//             ? 'bg-gradient-to-br from-blue-50 to-green-50'
//             : 'bg-gradient-to-br from-gray-900 to-blue-900'
//         }`}
//       />
//       <div
//         className={`absolute inset-0 opacity-30 ${
//           theme === 'light' ? 'bg-[url("/light-pattern.svg")]' : 'bg-[url("/dark-pattern.svg")]'
//         }`}
//       />
//     </div>
//   )
// }



// //2
// 'use client'

// import { useTheme } from '../contexts/ThemeContext'

// export default function CalmingBackground() {
//   const { theme } = useTheme()

//   return (
//     <div className="fixed inset-0 -z-10 overflow-hidden">
//       <div
//         className={`absolute inset-0 ${
//           theme === 'light'
//             ? 'bg-gradient-to-br from-blue-50 to-green-50'
//             : 'bg-gradient-to-br from-gray-900 to-blue-900'
//         }`}
//       />
//       <div
//         className={`absolute inset-0 opacity-30 ${
//           theme === 'light' ? 'bg-[url("/light-pattern.svg")]' : 'bg-[url("/dark-pattern.svg")]'
//         }`}
//       />
//     </div>
//   )
// }



'use client'

import { useTheme } from '../contexts/ThemeContext'

export default function CalmingBackground() {
  const { theme } = useTheme()

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className={`absolute inset-0 ${
          theme === 'light'
            ? 'bg-gradient-to-br from-blue-50 to-green-50'
            : 'bg-gradient-to-br from-gray-900 to-blue-900'
        }`}
      />
    </div>
  )
}




