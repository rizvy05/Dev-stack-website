import fullLogo from '../assets/logo-text.png';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 sm:px-8 py-3 shadow-xs">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 cursor-pointer">
     <img src={fullLogo} alt="Logo" className="h-9 w-auto object-contain" />
        </div>

<ul className="flex flex-nowrap items-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm font-medium whitespace-nowrap overflow-x-auto no-scrollbar">
  <li><a href="#home" className="text-pink-600 font-semibold hover:text-pink-700 transition-colors">
    Home</a></li>
  <li><a href="#tech" className="text-gray-600 hover:text-pink-600 transition-colors">
    Technologies</a></li>
  <li><a href="#projects" className="text-gray-600 hover:text-pink-600 transition-colors">
    Projects</a></li>
  <li><a href="#about" className="text-gray-600 hover:text-pink-600 transition-colors">
    About</a></li>
  <li><a href="#contact" className="text-gray-600 hover:text-pink-600 transition-colors">
    Contact</a></li>
</ul>
  <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
 <button type="button" className="bg-fuchsia-50 hover:bg-fuchsia-100
  text-pink-600 font-medium px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-2xs hover:shadow-xs transition-all">Sign in</button>
   <button type="button" className="bg-pink-500
    hover:bg-pink-600 text-white font-medium px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-2xs hover:shadow-xs transition-all" >  Sign Up </button>
        </div>
      </div>
    </nav>
  );
}