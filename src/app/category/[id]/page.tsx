import React from "react";
import { Clock, Mail, BellRing } from "lucide-react";

type Props = {};

const ComingSoonPage = (props: Props) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white p-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 animate-pulse">
          Coming Soon
        </h1>
        <p className="text-xl md:text-2xl mb-12">
          We're working hard to bring you something amazing. Stay tuned!
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-12">
          <div className="flex items-center">
            <Clock className="w-6 h-6 mr-2" />
            <span>Launch: Soon</span>
          </div>
          <div className="flex items-center">
            <BellRing className="w-6 h-6 mr-2" />
            <span>Exciting Features</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-6 h-6 mr-2" />
            <span>support@example.com</span>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Subscribe for Updates</h2>
          <form className="flex flex-col md:flex-row justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 mb-2 md:mb-0 md:mr-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-yellow-500 text-gray-900 rounded-md hover:bg-yellow-400 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              Notify Me
            </button>
          </form>
        </div>

        <div className="text-sm opacity-75">
          © 2024 Your Company Name. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
