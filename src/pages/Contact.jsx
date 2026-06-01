import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-slate-800">
          Support Center
        </h1>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          <textarea
            placeholder="Describe your issue..."
            rows="5"
            className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ></textarea>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200 cursor-pointer">
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact