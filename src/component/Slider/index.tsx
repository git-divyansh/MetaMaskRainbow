

const Slider = ({value, handleChange} : {value : any; handleChange : any, setValue : any}) => {
  return (
    <div className="flex flex-col items-center space-y-4 w-full max-w-md mx-auto p-4 bg-gray-900 rounded-md">
    {/* Icon and Slider Container */}
    <div className="flex items-center space-x-4 w-full">
      <span className="text-2xl">🐕</span> {/* Replace with your icon */}
      
      <div className="flex flex-col w-full">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className="appearance-none w-full h-2 rounded-full bg-gray-700 accent-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        
        {/* Labels */}
        <div className="flex justify-between text-gray-400 text-sm mt-1">
          <span>min</span>
          <span>25%</span>
          <span>75%</span>
          <span>max</span>
        </div>
      </div>
    </div>

    {/* Display Current Value */}
    {/* <div className="text-yellow-400 text-lg font-semibold">
      Current Value: {value}%
    </div> */}
  </div>
  )
}

export default Slider
