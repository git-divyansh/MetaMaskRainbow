import { iconData } from '../../utils'

const Footer = () => {
  return (
    <div>
      <div className='flex justify-between text-white mx-10'>
        <div className='flex flex-col'>
            <div className='flex justify-start items-center font-bold text-4xl'>
                <img src={iconData.VAULT2} className='size-14' />
                <div className='flex'>
                    <p className='font-dynamix specialtext text-4xl specialtext'>
                        Vault
                    </p>
                </div>
            </div>
            <div className='font-neue opacity-50'>
                <p>
                The ultimate platform for turning coins into long-term gains. 
                </p>
                <p>
                Stake, hold, and grow your assets with strategies designed for degen investors
                </p>
            </div>
        </div>
        <div className='flex flex-col'>
            <p className='font-dynamix'>Product</p>      
            <p className='font-neue opacity-50'>About product</p>  
            <p className='font-neue opacity-50'>Guide</p>
            <div className='flex'>
                <p className='font-neue opacity-50'>Join Discord </p>
                <img src={iconData.DISCORD2} alt="" />
            </div>
        </div>   
      </div>
      <div className='flex justify-center text-white opacity-50 py-10 font-neue'>
        <p>2024 @metaborong all rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
