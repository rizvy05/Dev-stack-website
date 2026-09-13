import fullLogo from '../assets/logo-text.png';

export default function Navbar() {
  return (

<nav className="bg-white border-b border-gray-100 px-4 sm:px-8 py-3 shadow-sm">
<div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button>
            </button> 



                <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-40 h-10">
            <img src={fullLogo} alt="Logo" />
          </div>
                </div>
        </div>
<ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
              <li>
                <a href="#home" className="text-pink-600 font-semibold hover:text-pink-700 transition-colors">
                  Home
                </a>
              </li>
  <li>
    <a href="#tech" className="text-gray-600 hover:text-pink-600 transition-colors">
      Technologies
    </a>
      </li>
              <li>
                <a href="#projects" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Projects
                </a>
              </li>
          <li>
            <a href="#about" className="text-gray-600 hover:text-pink-600 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-600 hover:text-pink-600 transition-colors">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm">
<button type="button" className="bg-fuchsia-50 hover:bg-blue-100 text-pink-600 font-medium px-4 py-2 rounded-full shadow hover:shadow-md transition-all">
            Sign in
          </button>
          <button type="button" className="bg-pink-500 hover:bg-pink-900 text-white font-medium px-4 py-2 rounded-full shadow hover:shadow-md transition-all">
            Sign Up
          </button>
        </div>

      </div>
    </nav>

  )
}
