import React from 'react'
import profile_2 from '../../public/profile.svg'
import yolo_coins from '../../public/yolo-coins.png'
import yolo_money from '../../public/yolo-money.svg'
import yolo_giveaways from '../../public/yolo-giveaways.svg'
import Image from 'next/image'

const Extras = () => {
  return (
      <div className='py-24 px-[100px] flex flex-col justify-center items-start gap-20'>
          <div className='flex justify-center self-stretch items-start gap-[10px]'>
              <h1 className='flex-grid text-[#0D0D0D] font-poppins text-[40px] font-semibold leading-normal -tracking-[0.165px]'>Children's love more <br /> and we are happy to provide</h1>
              <div className='h-full'>
                <Image src={profile_2} />
              </div>
          </div>
          <div className='flex items-center gap-5'>
              <div className='py-[75px] px-[55px] flex flex-col justify-center items-center gap-[10px] bg-[#F8F8F8] border-gradient'>
                  <div className='flex flex-col items-start gap-[30px] w-[290px]'>
                      <Image src={yolo_coins} />
                      <div className='flex flex-col items-start gap-5'>
                          <h5 className='text-[#0D0D0D] font-poppins text-[26px] leading-[92.308%] lowercase font-semibold'>Get Yolo coins</h5>
                          <p className='text-[#7F7F7F] font-poppins text-base leading-[170%] font-normal tracking-[-0.165px]'>get yolo coins for every money you spent on stores and offers.</p>
                      </div>
                  </div>
              </div>
              <div className='py-[61px] px-[55px] flex flex-col justify-center items-center gap-[10px] bg-[#F8F8F8] border-gradient'>
                  <div className='flex flex-col items-start gap-[30px] w-[290px]'>
                      <Image src={yolo_money} />
                      <div className='flex flex-col items-start gap-5'>
                          <h5 className='text-[#0D0D0D] font-poppins text-[26px] leading-[92.308%] lowercase font-semibold'>Earn money by tasks</h5>
                          <p className='text-[#7F7F7F] font-poppins text-base leading-[170%] font-normal tracking-[-0.165px]'>Complete tasks in 5-10 mins and earn money direct to your bank account</p>
                      </div>
                  </div>
              </div>
              <div className='py-[75px] px-[55px] flex flex-col justify-center items-center gap-[10px] bg-[#F8F8F8] border-gradient'>
                  <div className='flex flex-col items-start gap-[30px] w-[290px]'>
                      <Image src={yolo_giveaways} />
                      <div className='flex flex-col items-start gap-5'>
                          <h5 className='text-[#0D0D0D] font-poppins text-[26px] leading-[92.308%] lowercase font-semibold'>exciting Giveaways</h5>
                          <p className='text-[#7F7F7F] font-poppins text-base leading-[170%] font-normal tracking-[-0.165px]'>get chance to win fantastic prizes by burning your yolo coin.</p>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Extras
