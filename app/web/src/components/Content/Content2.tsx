import React from 'react'
import { Container } from 'src/base/layout/container'


function Content2() {
  return (
    <Container>
    <div className="w-full px-10 gap-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 mb-36">
        <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-center">2.5K +</div>
                <p className="text-[#C3C3C3] text-xl mt-2 text-center">
                    Jobe Done Succesfully
                 </p>
            </div>
        <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-center">2.2K +</div>
                <p className="text-[#C3C3C3] text-xl mt-2 text-center">
                    Happy Client
                </p>
            </div>
        <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-center">94%</div>
                <p className="text-[#C3C3C3] text-xl mt-2 text-center">
                    Daily Active Engagement
                </p>
            </div>
        <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-center">58+</div>
                <p className="text-[#C3C3C3] text-xl mt-2 text-center">
                Trusted by Company
                </p>
            </div>
    </div>
    </Container>
  )
}

export default Content2