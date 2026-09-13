import type { Technology } from './CardType';
interface CardDesignProps {
  tech: Technology[];
}
const CardDesign = ({ tech }: CardDesignProps) => {


  return (
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {tech.map((item) => (
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
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-emerald-500">
                  {item.badge}
                </span>
              )}
            </div>

           
            <h3 className="text-xl font-bold text-gray-950 mb-2">{item.name}</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-3">
              {item.description}
            </p>
          </div>
          <div>
          
            <div className="flex items-center justify-between text-xs text-gray-700 mb-5">
              <div className="flex items-center space-x-2">
                <span className="bg-gray-100 px-2.5 py-1 rounded-md font-medium text-gray-900">
                  {item.category}
                </span>
                <span className="text-gray-600 font-medium">{item.difficulty}</span>
              </div>
              <div className="flex items-center space-x-1 font-semibold text-gray-950">
                <span className="text-amber-400">★</span>
                <span>{item.rating}</span>
              </div>
            </div>

           
            <button className="w-full bg-gray-950 hover:bg-gray-800 text-white font-medium py-2.5 px-4 rounded-xl text-sm transition-colors duration-150">
              Add to Stack
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardDesign;