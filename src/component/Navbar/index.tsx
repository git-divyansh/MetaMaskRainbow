import { useAccount } from 'wagmi';
import { iconData } from '../../utils'
import { ConnectButton } from '@rainbow-me/rainbowkit'


const Navbar = ({flag} : {flag : boolean}) => {
  const { address, isConnected } = useAccount();
    
  return (
    <div className='flex flex-1 mx-1/6 justify-center h-20 py-4 gap-5'>
      <div className='w-2/5 flex justify-between bg-[#204AF8E5] pr-5 rounded-md border-t-2 border-l-2 border-r-2 border-b-4 border-white'>
        <div className='flex justify-center items-center mx-3 gap-1'>
            <span>
              <img src = {iconData.VAULT} className='size-6'></img>
            </span>
          <p className='text-white font-light'>
            Vault
          </p>
        </div>
        <div className='flex'>
          <div className='flex justify-center items-center mx-3 gap-1'>
              <span>
                <img src = {iconData.HOME}></img>
              </span>
            <p className='text-white font-light'>
              <a href="/home">
                home
              </a>
            </p>
          </div>
          <div className='flex justify-center items-center mx-3 gap-1'>
              <span>
                <img src = {iconData.DASHBOARD}></img>
              </span>
            <p className='text-white font-light'>
              <a href="#">
                Admin
              </a>
            </p>
          </div>
          <div className='flex justify-center items-center mx-3 gap-1'>
              <span>
                <img src = {iconData.ANALYTICS}></img>
              </span>
            <p className='text-white font-light'>
              <a href="#">
                Analytics
              </a>
            </p>
          </div>
          <div className='flex justify-center items-center mx-3 gap-1'>
              <span>
                <img src = {iconData.GUIDE}></img>
              </span>
            <p className='text-white font-light'>
              <a href="#">
                Guide
              </a>
            </p>
          </div>
          <div className='flex justify-center items-center mx-3 gap-1'>
              <span>
                <img src = {iconData.ABOUT}></img>
              </span>
            <p className='text-white font-light'>
              <a href="#">
                About
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className='h-full items-center justify-center flex px-3 bg-[#7B61FF] rounded-md border-t-2 border-l-2 border-r-2 border-b-4 border-white'>  
          <img src = {iconData.DISCORD}></img>
      </div>
      {
        flag ? 
        <div className='bg-[#000000] flex h-fit w-fit rounded-md border-t-2 border-l-2 border-r-2 border-b-4 border-white font-neue'>
            <span className=''>
              <ConnectButton label='Connect Wallet' />
            </span>
            <img src={iconData.ADDWALLET} alt="" className='pr-5' />
        </div>
        :
        null
      }
      {
        isConnected ?
          <div className='flex justify-center items-center p-5 gap-2 rounded-md border-t-2 border-l-2 border-r-2 border-b-4 border-white font-neue'>
            <img src={iconData.METAMASK} alt="" />
            <p>{address}</p>
          </div>
        :
        null
      }
    </div>
  )
}

export default Navbar
