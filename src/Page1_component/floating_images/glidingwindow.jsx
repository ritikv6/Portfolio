import "./gliding_window.css";
import work_img_1 from "../../assets/work_img_1.jpg";
import work_img_2 from "../../assets/work_img_2.jpg";
import work_img_3 from "../../assets/work_img_3.jpg";
const GlidingWindow = () => {
  return (
    <div className="gliding-window">
      <div className="gliding-track">
        <img src={work_img_1} alt="work 1" />
        <img src={work_img_2} alt="work 2" />
        <img src={work_img_3} alt="work 3" />
        <img src={work_img_1} alt="work 1" />
        <img src={work_img_2} alt="work 2" />
        <img src={work_img_3} alt="work 3" />
      </div>
      
      <div className="content">
        <h1>Capital Shop</h1>
        <p>
          Explore the latest trends in men’s, women’s, and kids’ fashion. From
          timeless essentials to seasonal favorites, find styles made to fit
          your lifestyle.
        </p>
      </div>
      <div className="content">
        <h1>one.com</h1>
        <p>
          Custom-designed PowerPoint slides crafted to communicate clearly,
          confidently, and visually. Helping ideas stand out through structured,
          impactful design.
        </p>
      </div>
      <div className="content">
        <h1>Bloggie.com</h1>
        <p>
          Insights, stories, and ideas from creators, entrepreneurs, and
          everyday people. Explore articles that spark conversations, inspire
          growth, and connect you with what’s happening around you.
        </p>
      </div>
    </div>
  );
};
export default GlidingWindow;
