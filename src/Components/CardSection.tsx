import React, { use } from 'react';
import CardDesign from './CardDesign';
import type { Technology } from './CardType';
import StakeItems from './StackItems'
interface CardProps {
  cardPromise: Promise<Technology[]>;
}

const CardSection = ({ cardPromise }: CardProps) => {
  const tech = use(cardPromise);
  console.log(tech);

  return (
    <div>
        <div className="mb-8">
  <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
    Explore the <span className="text-[#c773d3]">Technologies</span>
  </h1>
  <p className="text-gray-400 text-xl md:text-base mt-2 font-normal">
    Pick one technology per category to build your ideal stack.
  </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
  {/* Left Part: Card Collection */}
  <div className="lg:col-span-3">
    <CardDesign tech={tech} />
  </div>

  {/* Right Part: Selected Stack */}
  <div className="lg:col-span-1 sticky top-20">
    <StakeItems />
  </div>
</div>
    </div>
  );
};

export default CardSection;
