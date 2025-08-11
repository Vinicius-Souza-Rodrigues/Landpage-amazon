function TooltipExample() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative group">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Passe o mouse
        </button>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max px-3 py-2 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
          Esse é um tooltip!
        </div>
      </div>
    </div>
  );
}

export default TooltipExample;
