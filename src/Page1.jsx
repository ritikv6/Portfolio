import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/navbar/navbar";
import GlidingWindow from "./Page1_component/floating_images/glidingwindow";

const Page1 = () => {
  return (
    <div>
      <GlidingWindow/>
      <Contact />
    </div>
  )
}
export default Page1;
