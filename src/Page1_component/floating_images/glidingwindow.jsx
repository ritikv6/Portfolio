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
        <img src={work_img_1} alt="work 1 duplicate" />
        <img src={work_img_2} alt="work 2 duplicate" />
        <img src={work_img_3} alt="work 3 duplicate" />
      </div>
    </div>
  );
};
export default GlidingWindow;
