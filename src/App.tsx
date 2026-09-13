import './App.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import CardSection from './Components/CardSection'
import Footer from './Components/Footer'
import type { Technology } from './Components/CardType'
import { Suspense } from 'react'

const cardFetch=async():Promise<Technology[]>=>{
const res=await fetch('/public/Data.json');
const data=await res.json();
return data;
}
function App() {
const cardPromise=cardFetch();

  return (
    <>
  
   <Navbar/>
   <HeroSection/>
   <Suspense fallback={<h2>Loading.</h2>}>
 <CardSection cardPromise={cardPromise}/>
   </Suspense>
  
   <Footer/>
    </>
  )
}

export default App
