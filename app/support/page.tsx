import Link from 'next/link'

export default function Support() {
  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">Support Resources</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-blue-800 p-6 rounded-lg shadow-md">                                {/*dark mode*/}
          <h2 className="text-2xl font-semibold text-white hover:text-blue-200 mb-4">Helplines</h2>
          <ul className="space-y-2">

            <li className="text-gray-100 mb-4">Crisis Line: xxxxxxxxxxxxx</li>
            <li className="text-gray-100 mb-4">National Helpline: 000000000000</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Support Groups</h2>
          <p className="text-gray-600 mb-4">Find local support groups in your area:</p>
          <Link href="#" className="text-blue-600 hover:underline">Search Support Groups</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Online Therapy </h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-blue-600 hover:underline hover:scale-95">aaaaaaaaaa</a></li>
            <li><a href="#" className="text-blue-600 hover:underline hover:scale-95">aaaaaaaaaaa</a></li>
            <li><a href="#" className="text-blue-600 hover:underline hover:scale-95">aaaaaaaa</a></li>
          </ul>
        </div>
        <div className="bg-white dark:bg-blue-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-100 mb-4">Resources for Families and Caregivers</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-blue-100 hover:underline">Check on WHOs site</a></li>
            <li><a href="#" className="text-blue-100 hover:underline">Mental Health America - For Families and Caregivers</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

