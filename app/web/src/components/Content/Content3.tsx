import React from 'react'
import { porto } from 'src/base/global/porto'
import { Container } from 'src/base/layout/container'
import { useGlobal } from 'web-utils'
import Product1Img from '/public/images/product1.png'


type Props = {}

const Content3 = (props: Props) => {
  const datas = useGlobal(porto).data
  
  return (
    <Container>
      <div className="flex justify-center">
        <div className="g-0 flex justify-start items-center mb-8">
          <div className="g-0 mr-1 text-[#FFBE40]"></div>
          <div>
            <p className="text-[#FFBE40] text-xl font-medium">Product</p>
          </div>
        </div>
      </div>
      <div className="text-center text-5xl font-semibold mb-20">
        Our product we've created before
      </div>
      <div className="sm:flex">
        <div className="col-span-4 row-span-4 lg:col-span-2 lg:row-span-2">
          <img src={Product1Img} alt="img" className="w-full" />
        </div>
        <div className='grid grid-cols-1 flex flex-col justify-center mt-4 sm:grid-cols-2  '>
        {datas.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start px-4 sm:grid-col-2  w-[330px] "
          >
            <img src={item.img} alt="img" className='object-cover'/>
            <h1 className="text-xl font-bold mt-8" >{item.title}</h1>
            <p className="mt-7 text-xl font-semibold text-[#8F96AA]">
              {item.desc}
            </p>
          </div>
        ))}
        </div>
      </div>
    </Container>
  )
}

export default Content3