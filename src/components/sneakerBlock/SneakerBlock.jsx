import imgSlider from "../../../public/images/image-product-1.jpg";
import s from "./SneakerBlock.module.scss";

const SneakerBlock = () => {
  return (
    <>
      <div className="slider">
        <img src={imgSlider} alt="" />
      </div>
      <div className={s.container}>
        <div className={s.sneakerItem}>
          <div className={s.information}>
            <div className={s.company}>Sneaker company</div>
            <div className={s.title}>Fall Limited Edition Sneakers</div>
            <div className={s.subtitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              a iure deserunt voluptatibus, ratione eaque nihil dignissimos
              nesciunt totam maiores, aspernatur.
            </div>
          </div>
          <div className={s.price}>
            <div className={s.cost}>
              $125.00 <nav>50%</nav>
            </div>
            <div className={s.oldPrice}>$250.00</div>
          </div>
          <div className="amount">
            <button className="btt_minus"></button>
            <button className="number">0</button>
            <button className="btt_plus"></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SneakerBlock;
