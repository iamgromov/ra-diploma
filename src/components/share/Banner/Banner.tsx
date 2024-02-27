import bannerImg from "../../../img/banner.jpg";
import "./Banner.styles.css";

export const Banner: React.FunctionComponent = () => {
  return (
    <div className="banner">
      <img src={bannerImg} className="img-fluid" alt="К весне готовы!" />
      <h2 className="banner-header">К весне готовы!</h2>
    </div>
  );
};
