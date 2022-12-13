import "../styles/Banner.css";
import logo from "../assets/logo.png";

export default function Banner() {
  const title = " Clinical Trial Management";

  return (
    <div className="mtl-banner">
      <img src={logo} alt={title} className="mtl-logo" />
      <h2>{title}</h2>
    </div>
  );
}
