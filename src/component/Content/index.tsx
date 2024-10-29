import { useEffect, useState } from 'react'
import { iconData } from '../../utils'
import { Link } from 'react-router-dom';

const Content = () => {
    const [time, setTime] = useState(0);
    useEffect(() => {
        if (time >= 13) {
            return;
        }
            
        const timer = setTimeout(() => {
            setTime(time + 1); 
        }, 1000);
    
        console.log(time);
        return () => clearTimeout(timer);
    }, [time]);

  return (
    <div className='h-full 3xl:h-4/5 mb-60 3xl:mb-0'>
        {/* Heading */}
        <div className='flex flex-col items-center my-16 gap-2'>
            <div className='flex'>
                <p className={`specialtext1 font-clash text-[#204AF8] text-5xl ${time >= 1 ? "word-animation1" : ""}`}>Hodling</p>
                <p className='font-awesome text-white opacity-60 text-5xl pl-1'>
                    isn't just a flex,
                </p>
            </div>
            <div className='flex'>
                <p className='font-awesome text-white opacity-60 text-4xl pr-4'>it is a</p>
                <p className={`font-clash text-[#204AF8] text-5xl specialtext1 ${time >= 1 ? "word-animation2" : ""}`}>Strategy</p>
            </div>
        </div>
        {/* Buttons */}
        <div className='w-2/5 flex justify-center mx-auto gap-3'>
            <div className='h-full items-center justify-center flex py-2 px-3 bg-[#7B61FF] rounded-md border-t-2 border-l-2 border-r-2 border-b-4 border-white'>  
                <img src = {iconData.DISCORD}></img>
            </div>
            <div className='h-full items-center justify-center flex py-3 px-16 rounded-md border-t-2 border-l-2 border-r-2 border-b-4 border-white gap-3 active:scale-95'>  
                <p className='text-white font-neue'>
                    <Link to={"/home"}>Launch App</Link>
                </p>
                <img src={iconData.ROCKET} alt="" />
            </div>
        </div>
        {/* animation */}
        <div className='relative flex justify-center mt-10'>
            <div className='absolute flex items-center top-20 h-10'>
                <div className={`${time <= 2 ? "hidden" : ""} ${time >= 2  ? "animation-div1 visible" : ""} ${time > 5 && time <= 8 ? "animation1-div1 visible" : ""} ${time > 8 && time <= 11 ? "animation2-div1 visible" : ""} ${time >= 11 ? "animation3-div1 visible" : ""}`}>
                    <img src={iconData.ANIMATION4} alt="" className=''/>
                    <img src={iconData.ANIMATION1} alt="" className=''/>
                </div>
                <div className={`${time <= 2 ? "hidden" : ""} ${time >= 2  ? "animation-div2 visible" : ""} ${time > 5 && time <= 8 ? "animation1-div2 visible" : ""} ${time > 8 && time <= 11 ? "animation2-div2 visible" : ""} ${time >= 11 ? "animation3-div2 visible" : ""}`}>
                    <img src={iconData.ANIMATION3} alt="" className=''/>
                    <img src={iconData.ANIMATION2} alt="" className=''/>
                </div>
            </div>
        </div>
        <div className={`my-32 h-1/2 3xl:h-1/4 flex justify-center items-center`}>
            
            <img src={iconData.GROUP} alt="" className={`${time >= 11 ? "visible visibility-flag" : "hidden"}  z-10 left-[14rem] lg:left-[15rem] xl:left-[28rem] 2xl:left-[30rem] 3xl:left-[63rem]`}/>

            <div className='flex items-center justify-center h-full 2xl:h-fit'>
                <div className={`bg-[#204AF8] p-5 w-fit rounded-2xl z-20 ${time >= 11 ? "box-animation" : ""}`}>
                    <img src={iconData.VAULT} alt="" className='size-14'/>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content
