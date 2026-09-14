import { type Dispatch, type SetStateAction } from 'react';
import toast from 'react-hot-toast';
import type { Technology } from './CardType';

interface SelectedInStackProps {
  selected: Technology[];
  setIsSelected: Dispatch<SetStateAction<Technology[]>>;
}

const SelectedInStack = ({ selected, setIsSelected }: SelectedInStackProps) => {
  const handleRemoveCard = (item: Technology) => {
    const restCards = selected.filter((s) => s.id !== item.id);
    setIsSelected(restCards);
    toast.error(`${item.name} removed from stack`);
  };

  if (selected.length === 0) {
    return (
      <div className="text-center py-6 text-gray-400 text-xs border border-dashed border-gray-200 rounded-xl">
        No technologies added yet.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {selected.map((item) => (
        <div key={item.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-xl bg-white shadow-2xs"
        >
          {/* Left: Icon & Name/Category */}
          <div className="flex items-center gap-3">
            <img
              src={item.icon}
              alt={item.name}
              className="w-8 h-8 object-contain"
            />
            <div>
              <h4 className="text-sm font-bold text-gray-900 leading-tight">
                {item.name}
              </h4>
              <span className="text-[10px] text-gray-400 font-medium">
                {item.category}
              </span>
            </div>
          </div>

          {/* Right: Remove Button (X) */}
          <button
            type="button"
            onClick={() => handleRemoveCard(item)}
            aria-label={`Remove ${item.name}`}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 cursor-pointer"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};

export default SelectedInStack;

//1st aii
// import React, { type Dispatch,type SetStateAction } from 'react';
// import type { Technology } from './CardType';

// interface SelectedInStackProps {
//   selected: Technology[];
//   setIsSelected: Dispatch<SetStateAction<Technology[]>>;
// }

// const SelectedInStack = ({ selected, setIsSelected }: SelectedInStackProps) => {
//   const handleRemoveCard = (id: string | number) => {
//     const restCards = selected.filter((item) => item.id !== id);
//     setIsSelected(restCards);
//   };

//   if (selected.length === 0) {
//     return (
//       <div className="text-center py-6 text-gray-400 text-xs border border-dashed border-gray-200 rounded-xl">
//         No technologies added yet.
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-3">
//       {selected.map((item) => (
//         <div
//           key={item.id}
//           className="flex items-center justify-between p-3 border border-gray-200 rounded-xl bg-white shadow-2xs"
//         >
//           {/* Left: Icon & Name/Category */}
//           <div className="flex items-center gap-3">
//             <img
//               src={item.icon}
//               alt={item.name}
//               className="w-8 h-8 object-contain"
//             />
//             <div>
//               <h4 className="text-sm font-bold text-gray-900 leading-tight">
//                 {item.name}
//               </h4>
//               <span className="text-[10px] text-gray-400 font-medium">
//                 {item.category}
//               </span>
//             </div>
//           </div>

//           {/* Right: Remove Button (X) */}
//           <button
//             type="button"
//             onClick={() => handleRemoveCard(item.id)}
//             aria-label={`Remove ${item.name}`}
//             className="text-gray-400 hover:text-gray-600 transition-colors p-1 cursor-pointer"
//           >
//             <svg
//               className="w-4 h-4"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SelectedInStack;






//class
// import type { Technology } from "./CardType";
// import StackItems from "./StackItems";

// interface IsSelectedInStackProps={
//     selected: Technology[];
//     setIsSelected:Dispatch<SetStateAction<Technology[]>>
// }
// const SelectedInStack = ({selected,setIsSelected}:IsSelectedInStackProps) => {
//  console.log(selected,'From selected card')
 
//  const handleRemoveCard=(tech:Technology)=>{
//   const restCards=selected.filter(selected=>selected.name!=item.name)

// setIsSelected(restCards)


//  }
 
//   return (
//     <div>
//       Selected players
      
//       {
// selected.map(item=>{
//   return <div>
// <div>

//   <img src={item.icon} alt=""/>
// <div>
//   <h2>{item.name}</h2>
// </div>

// </div>
// <span className="text-red-500 font-bold" onClick={()=>handleRemoveCard(tech)}>
// <TbTrash/>

// </span>

//   </div>;

// })


//       }
//     </div>
//   );
// };

// export default SelectedInStack;