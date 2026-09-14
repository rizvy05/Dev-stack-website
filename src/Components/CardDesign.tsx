import type { Technology } from './CardType';
interface CardDesignProps {
  tech: Technology[];
  selected: Technology[];
  onSelectTech: (item: Technology) => void;
}

const CardDesign = ({ tech, selected, onSelectTech }: CardDesignProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tech.map((item: Technology) => {
        const isSelected = selected.some((s) => s.id === item.id);

        return (
          <div
key={item.id}
className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
>
<div>
<div className="flex items-center justify-between mb-4">
  <img
    src={item.icon}
    alt={item.name}
    className="w-10 h-10 object-contain"
  />
  {item.badge && (
    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-600">
      {item.badge}
    </span>
  )}
</div>


<h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
<p className="text-xs text-gray-500 leading-relaxed mb-6 line-clamp-3">
  {item.description}
</p>
</div>

<div>

<div className="flex items-center justify-between text-xs text-gray-500 mb-5">
  <div className="flex items-center space-x-2">
    <span className="bg-gray-100 px-2.5 py-1 rounded-md font-medium text-gray-700">
      {item.category}
    </span>
    <span className="font-medium text-gray-400">{item.difficulty}</span>
  </div>
  <div className="flex items-center space-x-1 font-semibold text-gray-900">
    <span className="text-amber-400">★</span>
    <span>{item.rating}</span>
  </div>
</div>


<button
  type="button"
  onClick={() => onSelectTech(item)}
  disabled={isSelected}
  className={`w-full font-medium py-2.5 px-4 rounded-xl text-sm transition-all duration-150 ${
    isSelected
      ? 'bg-emerald-50 text-emerald-600 cursor-default border border-emerald-200'
      : 'bg-slate-950 hover:bg-slate-800 text-white cursor-pointer'
  }`}
>
                {isSelected ? 'Added to Stack' : 'Add to Stack'}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardDesign;