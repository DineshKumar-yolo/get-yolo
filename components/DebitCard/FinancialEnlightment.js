import React from 'react'
import hero_image_2 from '../../public/hero-image-2.jpg'
import Image from 'next/image'

const FinancialEnlightment = () => {
  return (
      <div className='bg-[#F8F8F8] flex w-full h-screen'>
          <div className='flex justify-center items-center w-1/2'>
              <div className='flex flex-col gap-8 items-start justify-center w-[500px]'>
                  <h1 className='text-[#212426] font-poppins text-[40px] font-semibold leading-[150%]'>The path to financial enlightenment.</h1>
                  <p className='text-[#7F7F7F] font-poppins text-base font-normal leading-[170%] tracking-[-0.165px]'>YOLO Debit Card & App: Empowering Kids to Save, Spend Wisely. Informed Parents with Real-time Notifications. Financial Freedom for the Whole Family.</p>
              </div>
          </div>
          <div className='flex w-1/2 FinancialEnlightment-bg'>
              <div className="w-[217px] h-[104.16px] px-2 py-4 flex flex-col gap-3 justify-center items-center relative top-[25%] left-[50%] rounded-2xl backdrop-blur-sm shrink-0 bg-gradient-to-br from-[#FFFFFF52] via-[#FFFFFF33] to-[#FFE0E033]">
                  <div className="flex justify-between items-center gap-4">
                      <Image src={hero_image_2} height={29.5} width={29.5} />
                      <h5 className="text-black font-poppins text-[13.5px] font-medium leading-normal tracking-[-0.052px]">Get Verified Instantly</h5>
                  </div>
                  <p className="text-black w-[163.836px] font-poppins text-[9px] font-normal leading-normal tracking-[-0.059px]">Get your account verified in just 60 secs and enjoy the product</p>
              </div>
          </div>
    </div>
  )
}

export default FinancialEnlightment