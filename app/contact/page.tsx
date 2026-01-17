import Navbar from "@/components/Navbar";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="py-8 md:py-16 px-4 md:px-8 relative overflow-hidden">
        {/* Background effect */}
        <div className="absolute inset-0 bg-linear-to-r from-indigo-900/20 via-purple-900/20 to-pink-900/20 blur-3xl -z-10"></div>

        <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center bg-linear-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
          Get In Touch
        </h1>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                Let's Connect
              </h2>
              <p className="text-gray-300 mb-6 md:mb-8 text-sm md:text-base">
                I'm always interested in new opportunities and collaborations.
                Feel free to reach out if you'd like to work together or just say
                hello!
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="text-xl md:text-2xl">📧</div>
                <div>
                  <h3 className="font-semibold text-sm md:text-base">Email</h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    vasquezalfie919@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="text-xl md:text-2xl">📱</div>
                <div>
                  <h3 className="font-semibold text-sm md:text-base">Phone</h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    +639813498127
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="text-xl md:text-2xl">📍</div>
                <div>
                  <h3 className="font-semibold text-sm md:text-base">
                    Location
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    Philippines
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-8">
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">
                Follow Me
              </h3>

              <div className="flex items-center justify-center md:justify-start space-x-4 md:space-x-6">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/heyyalfie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white text-xl md:text-2xl shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                    <FaInstagram />
                  </div>
                  <span className="mt-2 text-xs md:text-sm text-gray-600 group-hover:text-pink-500">
                    Alfie
                  </span>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl md:text-2xl shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                    <FaFacebook />
                  </div>
                  <span className="mt-2 text-xs md:text-sm text-gray-600 group-hover:text-blue-600">
                    Alfie Mape Vasquez
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="group relative p-6 md:p-8 bg-linear-to-br from-white/10 to-white/5 border border-white/20 rounded-xl backdrop-blur-sm">
            <div className="absolute inset-0 bg-linear-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 rounded-xl transition-all duration-500"></div>

            <div className="relative z-10">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                Send a Message
              </h2>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none text-sm md:text-base"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 md:py-3 px-4 md:px-6 bg-linear-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}