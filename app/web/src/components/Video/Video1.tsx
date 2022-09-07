import React from 'react'
import { Container } from 'src/base/layout/container'

function Video() {
  return (
    <Container>
      <iframe className=" w-full h-[500px] -mt-[250px]"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
      ></iframe>
    </Container>
  )
}

export default Video