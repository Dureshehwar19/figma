import React from 'react'
import { BiSearch } from 'react-icons/bi'
import {recentPostData , saleProductData , offerProductData } from "../../blogpage/history/historydata";
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr'

const BlogSide = () => {
  return (
    <div>
      <h3 className='text-[22px] text-navy font-josefin'>Search</h3>
      <div  className='relative mt-4'>
        <div>
            <input placeholder='Search For Posts' className='w-full border-lightYellow text-lightGray' type="search" name="" id="" />
            <div className='absolute top-2 right-5'>
                <BiSearch className='text-gray-400 text-2xl' />
            </div>
        </div>
      </div>

      <div>
          <h3 className='text-[22px] text-navy mt-12 font-josefin'>Categories</h3>

          <div className='grid grid-cols-2 items-center justify-between  '>
            <div className=' '>
                <h6 className='text-[14px] text-navy font-semibold '>Hobbies (14)</h6>
                <h6 className='text-[14px] text-navy font-semibold my-4'>Women (21)</h6>
                <h6 className='text-[14px] text-navy font-semibold'>Women (21)</h6>
            </div>

            <div className='text-center '>
              <h6 className='text-[14px] text-navy font-semibold'>Women (21)</h6>
              <h6 className='text-[14px] text-navy font-semibold my-4'>Women (21)</h6>
              <h6 className='text-[14px] text-navy font-semibold'>Women (21)</h6>
            </div>
          </div>
      </div>

      <div>
          <h3 className='text-[22px] text-navy mt-12 font-josefin'>Recent Post</h3>
          <div>
            {recentPostData.map((item) => {
              return <div className='flex items-center gap-3 my-6'>
                <div>
                  <img src={item.pic} alt="" />
                </div>
                <div>
                  <h5 className='text-navy font-semibold'>{item.title}</h5>
                  <h5 className='text-[11px] text-tertiary'>{item.des}</h5>
                </div>

              </div>
            })}
          </div>
      </div>

      <div>
          <h3 className='text-[22px] text-navy mt-12 font-josefin'>Sale Product</h3>
          <div>
            {saleProductData.map((item) => {
              return <div className='flex items-center gap-3 my-6'>
                    <div>
                      <img src={item.pic} alt="" />
                    </div>
                    <div>
                      <h5 className='text-navy font-semibold'>{item.title}</h5>
                      <h5 className='text-[11px] text-tertiary'>{item.des}</h5>
                    </div>

            </div>
            })}
          </div>
      </div>

      <div>
          <h3 className='text-[22px] text-navy mt-12 font-josefin'>Offer Product</h3>

          <div className='grid grid-cols-2 '>
            {offerProductData.map((item) => {
              return <div className=' mb-6'>
                <div className='flex justify-between  text-center'>
                  <div>
                    <img src={item.pic} alt="" />
                    <h5 className='font-semibold text-navy'>{item.title}</h5>
                    <h6 className='text-xs text-tertiary'>{item.price}</h6>
                  </div>
                </div>
              </div>
            })}
          </div>
      </div>

      <div>
        <h3 className='text-[22px] text-navy mt-12 font-josefin'>Follow</h3>

        <div className='flex shadow-primary w-max py-2 px-4 mt-6'>
          <div className='bg-purple text-white rounded-full p-2'>
              <GrFacebookOption/>
          </div>
          <div className='bg-pink text-white rounded-full p-2 mx-4'>
              <AiOutlineInstagram/>
          </div>
          <div className='bg-dark_cyan text-white rounded-full p-2'>
              <AiOutlineTwitter/>
          </div>
        </div>
      </div>

      <div>
          <h3 className='text-[22px] text-navy mt-12 font-josefin'>Tags</h3>
          <div className='grid grid-cols-3 my-3 mb-12 text-navy font-medium underline'>
            <a className='mb-3' href="">General</a>
            <a  href="">Atsanil</a>
            <a href="">Insas.</a>
            <a href="">Bibsaas</a>
            <a href="">Nulla.</a>
          </div>
      </div>


    </div>
  )
}

export default BlogSide