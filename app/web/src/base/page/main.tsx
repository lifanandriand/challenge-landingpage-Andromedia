import Content1 from 'src/components/Content/Content1'
import Content2 from 'src/components/Content/Content2'
import Content3 from 'src/components/Content/Content3'
import Footer from 'src/components/Footer/Footer'
import Navbar from 'src/components/Navbar/Navbar'
import Services from 'src/components/Services/Services'
import Testimonials from 'src/components/Testimonials/Testimonials'
import Video from 'src/components/Video/Video1'
import Work from 'src/components/Work/Work'
import { page } from 'web-init'

export default page({
  url: '/main',
  component: ({}) => {
    return <div>
     < Navbar/>
     < Content1/>
     < Video/>
     < Content2/>
     < Services/>
     < Work/>
     < Content3/>
     < Testimonials/>
     < Footer/>
    </div>
  }
})