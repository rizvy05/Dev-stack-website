import { use, useState } from 'react';
import toast from 'react-hot-toast';
import CardDesign from './CardDesign';
import StackItems from './StackItems';
import type { Technology } from './CardType';
interface CardProps {
  cardPromise: Promise<Technology[]>;
}
const CardSection = ({ cardPromise }: CardProps) => {
  const tech = use(cardPromise);
  const [selected, setIsSelected] = useState<Technology[]>([]);

  const handleSelectTech = (item: Technology) =>
   {setIsSelected((prevSelected) => {
     const existingInCategory = prevSelected.find((t) => t.category === item.category);
if (existingInCategory) { }
 toast.success(`   ${item.name} added to your stack!`);
return [...prevSelected, item];
 }); };

const handleRemoveAll = () => {
if (selected.length === 0)
 return;
setIsSelected([]);
toast.error('Cleared all items from your stack');}; 




  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Section Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Explore the <span className="text-[#c773d3]">Technologies</span>
        </h1>
        <p className="text-gray-400 text-sm md:text-base mt-2 font-normal">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start relative">
        {/* Left Side: Cards */}
        <div className="lg:col-span-3">
          <CardDesign 
            tech={tech} 
            selected={selected} 
            onSelectTech={handleSelectTech} 
          />
        </div>

        {/* Right Side: Sticky Stack Sidebar */}
        <div className="lg:col-span-1 sticky top-6 self-start">
          <StackItems 
            selected={selected} 
            setIsSelected={setIsSelected} 
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </div>
  );
};

export default CardSection;
