import React from 'react'
import  {Container}  from 'src/base/layout/container'

function Content1() {
  return (
    <section className='bg-green-army pt-6 pb-[250px]'>
      <Container>
      <div className="mt-24 flex flex-row justify-center">
          <div className="w-full lg:basis-3/5">
            <h1 className="text-white text-center text-6xl font-medium">
              We create digital product and solve your problem
            </h1>
            <p className="text-white text-center pt-10 px-16">
              A fully integrated digital agency that willo help you create
              beautiful website and solve your problem in your company
            </p>
          </div>
        </div>
        <div className="my-10 flex justify-center">
          <button className="mx-10 bg-white py-3 px-8 rounded-3xl font-medium">
            Get Started
          </button>
          <button className="mx-10 text-white">Learn More</button>
      </div>
      </Container>
    </section>   
  )
}

export default Content1