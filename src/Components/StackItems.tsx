import { type Dispatch, type SetStateAction } from 'react';
import SelectedInStack from './SelectedInStack';
import type { Technology } from './CardType';
interface StackItemsProps {
  selected: Technology[];
  setIsSelected: Dispatch<SetStateAction<Technology[]>>;
  onRemoveAll: () => void;
}

const StackItems = ({ selected, setIsSelected, onRemoveAll }: StackItemsProps) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm w-full sticky top-10 z-10">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-900">Your Stack</h2>
        <p className="text-xs text-slate-400 mt-1 font-medium">
          {selected.length} {selected.length === 1 ? 'Technology' : 'Technologies'} Selected
        </p>
      </div>
      <div className="mb-6">
        <SelectedInStack selected={selected} setIsSelected={setIsSelected} />
      </div>
      {selected.length > 0 && (
        <button
          type="button"
          onClick={onRemoveAll}
          className="w-full border border-red-200 text-red-500 hover:bg-red-50 hover:border-red-300 font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors duration-150 cursor-pointer"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default StackItems;
