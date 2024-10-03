import Carousel from "../../components/carousel"
import Header from "../../components/header"


function HomePage() {
  return (
    <div>
        <Header/>
        <Carousel autoplay/>
        <Carousel numberOfSlides={6} category="Action"/>
    </div>
  )
}

export default HomePage