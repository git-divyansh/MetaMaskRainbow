import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useState } from 'react';
import { useAccount, useBalance } from 'wagmi';
import { iconData } from '../../utils';
import TokenDropdown from '../TokenDropdown';
import Slider from '../Slider';

interface token{
    
    symbol: string;
    name: string;
    logo: string;
      
}

const Wallet = () => {

    const StatBox = ({ label, value } : { label : string, value : string}) => (
        <div className="bg-[#1A3DCA] text-white rounded-md p-2 flex flex-col items-center">
          <span className="font-medium">{label}</span>
          <span className="text-lg font-bold">{value}</span>
        </div>
      );
      
      // Subcomponent for Fields
      const Field = ({ label, amount, currency, exchangeRate, assetBalance}: { label: string; amount: string; currency?: string | null; exchangeRate?: string | undefined; assetBalance?: string | undefined}) => (
        <div className="p-3 py-5 rounded-md h-full w-full">
          <div className=" text-gray-400">
            <span className='flex w-full justify-between'>
                <p>{label}</p>
                <p>${label === "Deposit" || label === "Withdraw" ? assetBalance : exchangeRate}</p>
            </span>
            <div className="flex justify-between text-white text-sm font-semibold items-center">
                <p>{amount}</p>
                <button
                        onClick={() => setIsDropdownOpen(true)}
                        className="bg-[#1A3DCA] text-white px-4 py-2 mt-6 rounded-md border-t-2 border-l-2 border-r-2 border-b-4 border-white font-dynamix flex items-center"
                    >
                        {!DropdownVal.name ? "Open Token Dropdown" : 
                            <div className='flex items-center gap-2'>
                                <img src={DropdownVal.logo} alt="" />
                                <p>{DropdownVal.name}</p>
                            </div>
                        }
                        <svg className="h-8 w-8 text-white-500"  width="10" height="10" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="6 9 12 15 18 9" /></svg>
                    </button>
                    
                    <TokenDropdown
                        isOpen={isDropdownOpen}
                        onClose={() => setIsDropdownOpen(false)}
                        setDropdownVal={setDropdownVal}
                    />

                    
            </div>
            {exchangeRate && <div className="text-orange-400 text-sm flex justify-between items-center mt-3">
                <p>
                {exchangeRate}
                </p>
                {
                        label === "Recieve" && tab ===1 && isConnected ? 
                            <div className='p-5 flex justify-center items-center gap-2 rounded-md border-t-2 border-l-2 border-r-2 border-b-4 border-white font-neue'>
                                <img src={iconData.METAMASK} alt="" />    
                                {address}
                            </div>                            
                        :
                        null
                } 
                </div>}
            <div className='flex justify-between items-center'>
                <span>{currency}</span>
                {label === "Deposit" || label === "Withdraw" ?
                    <div>
                    <Slider handleChange={handleChange}
                        value={value}
                        setValue={setValue}
                    />
                </div>
                :
                null
                }
            </div>
          </div>
        </div>
      );

    const [DropdownVal, setDropdownVal]  = useState<token>({ symbol: "DOGE", name: "ms DOGE", logo: "src/assets/Group 734.svg" });
    const [value, setValue] = useState<number>(0);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
    };

    const { address, isConnected } = useAccount();
    const { data: balanceData } = useBalance({
        address: address, // Changed from addressOrName to address
    });
    
    const [tab, setTab] = useState(0);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-dark-blue p-8 lg:flex-row flex-col lg:gap-8 gap-4">
    {/* Analytics Panel */}
    <div className="bg-[#1f2937] p-4 w-[400px] lg:w-[450px] flex flex-col items-center rounded-md border-t-2 border-l-2 border-r-2 border-b-4 border-white font-dynamix">
      <div className="w-full">
        <h3 className="text-white font-semibold text-lg mb-4 font-dynamix flex justify-between">Analytics 
            <span>
                <img src={iconData.ABOUT} alt="" />
            </span>
        </h3>
        <div className="bg-[#111827] h-40 w-full flex items-center justify-center text-gray-400 rounded-md border-t-2 border-l-2 border-r-2 border-b-4 border-white font-dynamix">No data available</div>
      </div>
      
      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-2 mt-4 w-full font-neue">
        <StatBox label="Current price" value="0" />
        <StatBox label="TVL" value="0" />
        <StatBox label="24H Volume" value="0" />
      </div>
  
      {/* Recent Trades */}
      <div className="w-full mt-6">
        <h4 className="text-white font-medium">Recent Trades</h4>
        <div className="flex items-center justify-between p-2 text-gray-400 bg-[#374151] rounded-md border border-white">
          <span>Timestamp</span>
          <span>Token amount</span>
          <span>msToken amount</span>
        </div>
        <div className="h-24 flex items-center justify-center text-gray-400 mt-4 bg-[#111827] rounded-md border border-white">No data available</div>
      </div>
    </div>
  
    {/* Deposit/Withdraw Panel */}
    <div className="bg-[#1f2937] p-4 w-[400px] lg:w-[500px] rounded-md border-t-2 border-l-2 border-r-2 border-b-4 border-white font-dynamix">
      <div className="flex justify-between mb-7 rounded-md border-t-2 border-l-2 border-r-2 border-b-4 border-white">
        <div className='flex-1'>
            <button className={`w-1/2  ${tab === 0 ? 'bg-[#1A3DCA]' : ""} text-white py-2 rounded-md`} onClick={()=>setTab(0)}>Deposit</button>
            <button className={`w-1/2 ${tab === 1 ? 'bg-[#1A3DCA]' : ""} text-white py-2 rounded-md`} onClick={()=>setTab(1)}>Withdraw</button>
        </div>
        <div className='flex-1 flex justify-end'>
            <button className={`w-1/2 ${tab === 2 ? 'bg-[#1A3DCA]' : "bg-[#1A3DCA]"} text-white py-2 rounded-md`} onClick={()=>setTab(2)}>Slippage: 0.5%</button>
        </div>
      </div>
  
      {/* Deposit Fields */}
      <div className={`my-3 rounded-md border-t-2 border-l-2 border-r-2 border-b-4 border-white flex bg-[#111827]`}>
        <Field label={`${tab === 0 ? "Deposit" : "Withdraw"}`} amount="0.00" currency="$ 0" assetBalance = {`Asset Balance: ${isConnected ? balanceData : "000.00"} DOGE`} />
      </div>
      <div className="my-3 rounded-md border-t-2 border-l-2 border-r-2 border-b-4 border-white bg-[#111827]">
        <Field label={"Recieve"} amount="0.00" exchangeRate="1 DOGE = 0.890 ms DOGE" />
      </div>
        <div className='flex justify-end'>
            <p className='font-neue text-[#F6851B]'>
                Receive withdrawal in another wallet?
            </p>
        </div>
      {/* Vault entry fees */}
      <div className="mt-4 flex justify-between text-gray-400">
        <span className='flex gap-1'>
        <img src={iconData.ABOUT} alt="" />
            Vault entry fees</span>
        <span>0.80%</span>
      </div>
      {
        tab == 1 ?
        <div className={`mt-4 flex justify-between text-gray-400`}>
            <span className='flex gap-1'>
                <img src={iconData.ABOUT} alt="" />
                Platform fees</span>
            <span>
                1.02%</span>
        </div>
        :
        null
      }
      
      {/* Connect Wallet Button */}
      <div className="flex justify-center mt-4 rounded-md border-t-2 border-l-2 border-r-2 border-b-4 border-white">
        <button className="bg-[#000000] text-white py-3 w-full rounded-md">
            <span className='w-full flex justify-center'>
                <ConnectButton  />
            </span>
        </button>
      </div>
    </div>
  </div>
  
      );

      
}

// Subcomponent for StatBox
export default Wallet
