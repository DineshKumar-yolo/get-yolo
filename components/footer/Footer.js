import React from 'react'
import logo from '../../public/logo.svg'
import playStore from '../../public/play-store.png'
import BankingPartners from '../../public/banking-partners.png';
import SecurityPartners from '../../public/security-partners.png'
import { FaFacebook } from 'react-icons/fa'
import { ImLinkedin } from 'react-icons/im'
import { AiFillTwitterCircle } from 'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'

const Features = ['Debit Card', 'Investing', 'Security', 'Chores & Allowance', 'Cashback and Savings'];
const Plans = ['Refer Friends', 'Gifts'];
const Learn = ['Blog', 'Help Center', 'FAQ', 'Financial Literacy'];
const Resources = ['Careers', 'Leadership', 'Press'];
const Partnerships = ['For Classrooms', 'Credit Unions', 'Partner With Us'];

const Footer = () => {
  return (
    <div className='py-16 px-[100px] w-full bg-[#121213] inline-flex justify-center flex-col items-start gap-36'>
      <div className='flex w-[1240px] h-[216px] items-start gap-5 shrink-0'>
        <div className='w-[190px]'>
          <Image src={logo} className='mb-[31px]' />
          <Image src={playStore} className='mb-[20.86px] w-[120.83px] h-[37.31px] shrink-0' />
          <div className='flex gap-4 items-start opacity-20 text-white text-2xl'>
            <FaFacebook className="rounded-full " />
            <ImLinkedin className="rounded-[50%] " />
            <AiFillTwitterCircle className="rounded-[50%]" />
          </div>
        </div>
        <div className='flex pb-4 items-start gap-5 flex-grid'>
          <div className='flex flex-col w-[190px] items-start justify-start'>
            <h5 className='text-white font-poppins text-xs font-semibold leading-[133.333%] opacity-60 mb-[21px]'>Features</h5>
            {
              Features && Features.map((feature) => {
                return (
                  <Link href={`/${feature}`} className='text-white font-poppins text-sm font-normal leading-[142.857%] mb-4' >{feature}</Link>
                )
              })
            }
          </div>
          <div className='flex flex-col w-[190px] items-start justify-start'>
            <h5 className='text-white font-poppins text-xs font-semibold leading-[133.333%] opacity-60 mb-[21px]'>Plans</h5>
            {
              Plans && Plans.map((plan) => {
                return (
                  <Link href={`/${plan}`} className='text-white font-poppins text-sm font-normal leading-[142.857%] mb-4' >{plan}</Link>
                )
              })
            }
          </div>
          <div className='flex flex-col w-[190px] items-start justify-start'>
            <h5 className='text-white font-poppins text-xs font-semibold leading-[133.333%] opacity-60 mb-[21px]'>Learn</h5>
            {
              Learn && Learn.map((learn) => {
                return (
                  <Link href={`/${learn}`} className='text-white font-poppins text-sm font-normal leading-[142.857%] mb-4' >{learn}</Link>
                )
              })
            }
          </div>
          <div className='flex flex-col w-[190px] items-start justify-start'>
            <h5 className='text-white font-poppins text-xs font-semibold leading-[133.333%] opacity-60 mb-[21px] uppercase'>Resources</h5>
            {
              Resources && Resources.map((resource) => {
                return (
                  <Link href={`/${resource}`} className='text-white font-poppins text-sm font-normal leading-[142.857%] mb-4' >{resource}</Link>
                )
              })
            }
          </div>
          <div className='flex flex-col w-[190px] items-start justify-start'>
            <h5 className='text-white font-poppins text-xs font-semibold leading-[133.333%] opacity-60 mb-[21px]'>Partnerships</h5>
            {
              Partnerships && Partnerships.map((partners) => {
                return (
                  <Link href={`/${partners}`} className='text-white font-poppins text-sm font-normal leading-[142.857%] mb-4' >{partners}</Link>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className='flex flex-col items-start gap-[68px] w-[1240px]'>
        <div className='flex flex-col items-start gap-12'>
          <div className='flex items-start justify-between w-full'>
            <div className='flex flex-col justify-center items-start gap-1'>
              <h4 className='text-white text-center font-poppins text-2xl font-semibold leading-[133.333%]'>We work with trusted partners</h4>
              <p className='text-white opacity-60 text-xs font-normal leading-[133.333%]'>Jupiter deploys high level security standards to keep your money safe</p>
            </div>
            <div className='flex items-start gap-4'>
              <div className='min-w-[341px] flex flex-col p-4 gap-3 bg-white rounded-[7px] items-start'>
                <p className='text-[#656565] font-poppins text-[11px] font-normal leding-[145.455%]'>SECURITY PARTNERS</p>
                <Image src={SecurityPartners} />
              </div>
              <div className='min-w-[341px] flex flex-col p-4 pb-[26px] gap-3 bg-white rounded-[7px] items-start'>
                <p className='text-[#656565] font-poppins text-[11px] font-normal leding-[145.455%]'>BANKING AND PAYMENT PARTNERS</p>
                <Image src={BankingPartners} />
              </div>
            </div>
          </div>
          <p className='text-[#F3F3F3] font-poppins text-sm font-normal leading-[150%]'>
            *Yolo Core and Yolo + Invest families can earn monthly rewards of 1% per annum, Yolo Max families can earn 2% per annum, and Yolo Infinity families can earn 5% per annum on an average daily savings balance of up to $5,000 per family. Only Yolo Max and Infinity families can earn 1% cash back on spending monthly. To qualify, the Primary Account must be in Good Standing and have a verified ACH funding account. See Yolo Terms of Service for details. Subject to change at any time.
          </p>
        </div>
        <div className='w-full flex justify-between items-start'>
          <p className='text-[#F3F3F3] font-poppins text-sm font-normal leading-[150%]'>
            copyright © 2020-22 Dreamplug Technologies Pvt Ltd.
          </p>
          <div className='flex items-center gap-4'>
            <p className='text-[#F3F3F3] font-poppins text-sm font-normal leading-[150%]'>privacy policy</p>
            <div className='w-[1px] h-7 bg-white'></div>
            <p className='text-[#F3F3F3] font-poppins text-sm font-normal leading-[150%]'>terms and conditions</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer