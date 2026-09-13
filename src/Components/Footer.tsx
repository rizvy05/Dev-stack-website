import logo from '../assets/logo-text.png'
 function Footer() {
  return (
  
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-6 md:px-12 lg:px-20 mt-auto">
      <div className="container mx-auto">
       
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-gray-100">
         
          <div className="md:col-span-2 flex flex-col items-start pr-4">
            <img
              src={logo}
              alt="DevStack Logo"
              className="h-8 w-auto object-contain mb-4 cursor-pointer"
            />
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

 <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <button className="btn bg-black text-white border-black">
  <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
  Login with GitHub
</button>
            <button className="btn bg-black text-white border-black">
  <svg aria-label="X logo" width="16" height="12" viewBox="0 0 300 271" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"/></svg>
  Login with X
</button>
  <button className="btn bg-[#0967C2] text-white border-[#0059b3]">
  <svg aria-label="LinkedIn logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fillRule="evenodd"></path></svg>
  Login with LinkedIn
</button>
    </div>
    </div>



<div>
<h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">Product </h4>
    <ul className="space-y-3 text-sm text-gray-500">
            <li><a href="#home" className="hover:text-pink-600 transition-colors">Home</a></li>
            <li><a href="#tech" className="hover:text-pink-600 transition-colors"> Technologies </a></li>
            <li><a href="#projects" className="hover:text-pink-600 transition-colors">Projects</a></li>
    </ul>
</div>

<div>
<h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">Company </h4>
<ul className="space-y-3 text-sm text-gray-500">
    <li><a href="#about" className="hover:text-pink-600 transition-colors"> About</a></li>
    <li> <a href="#contacts" className="hover:text-pink-600 transition-colors">Contact</a></li>
    <li><a href="#career" className="hover:text-pink-600 transition-colors">Careers</a></li>
</ul>
</div>

        
<div>
    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">Legal</h4>
    <ul className="space-y-3 text-sm text-gray-500">
    <li> <a href="#privacy" className="hover:text-pink-600 transition-colors">Privacy Policy</a></li>
    <li> <a href="#terms" className="hover:text-pink-600 transition-colors"> Terms of Service </a></li></ul>
</div>
        </div>

      
<div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 DevStack. All rights reserved.</p>
          <div className="flex gap-6">
    <a href="#privacy" className="hover:text-gray-600 transition-colors">Privacy</a>
    <a href="#terms" className="hover:text-gray-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;