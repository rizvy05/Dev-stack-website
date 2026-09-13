

const StackIn = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-xs w-full">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">Your Stack</h2>
        <p className="text-xs text-gray-400 mt-1 font-medium">
          2 Technologies Selected
        </p>
      </div>
      <div className="space-y-3 mb-6">


        
      </div>

      {/* Remove All Button */}
      <button className="w-full border border-red-200 text-red-500 hover:bg-red-50 hover:border-red-300 font-medium py-2.5 px-4 rounded-xl text-md transition-colors duration-150">
        Remove All
      </button>
    </div>
  );
};

export default StackIn;