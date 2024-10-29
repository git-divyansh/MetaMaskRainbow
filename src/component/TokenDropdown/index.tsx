import { useState } from "react";

const tokens = [
  { symbol: "DOGE", name: "ms DOGE", logo: "src/assets/Group 734.svg" },
  { symbol: "SHIB", name: "ms SHIB", logo: "src/assets/Group 733.svg" },
  { symbol: "PEPE", name: "ms PEPE", logo: "src/assets/Group 734 (1).svg" },
  { symbol: "BONK", name: "ms BONK", logo: "src/assets/Group 734 (2).svg" },
  { symbol: "FLOKI", name: "ms FLOKI", logo: "src/assets/Group 735.svg" },
];

export default function TokenDropdown({ isOpen, onClose, setDropdownVal } : {isOpen:any; onClose:any; setDropdownVal:any}) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTokens = tokens.filter((token) =>
    token.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 `}
    >
      <div className="bg-gray-900 text-white shadow-lg w-full max-w-md p-6 relative rounded-md border-t-2 border-l-2 border-r-2 border-b-4 border-white font-dynamix">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-4 text-center">Set a ms token</h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search ms coins"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 mb-4 text-sm bg-gray-800 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Token List */}
        <ul className="space-y-2">
          {filteredTokens.length > 0 ? (
            filteredTokens.map((token, index) => (
              <li
                key={index}
                className="flex items-center p-2 rounded hover:bg-gray-700 cursor-pointer"
                onClick={()=>{setDropdownVal(token); onClose()}}
              >
                <span className="mr-3 text-2xl">
                    <img src={token.logo} alt="" />
                </span>
                <div>
                  <p className="font-medium">{token.name}</p>
                  <p className="text-gray-400 text-sm">{token.symbol}</p>
                </div>
              </li>
            ))
          ) : (
            <p className="text-gray-400 text-center">No tokens found</p>
          )}
        </ul>
      </div>
      
    </div>
  );
}
