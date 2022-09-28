import "./hero.scss";

import heroimg from "../image/monalize.png"

function Hero() {
  return(
    <>
    
    <section className="hero">
        <div className="main__container container">
          <div className="hero__inner">
            <h2 className="hero__title">
              Welcome <br />
              to the Louvre
            </h2>
            <p className="hero__text">From the castle to the museum</p>
            <a className="hero__link" href="#">Discover the Louvre</a>
          </div>
          <img
            className="hero__img"
            src={heroimg}
            alt="Monalize portreat"
            width="100%" />
        </div>
      </section>
    </>
  )
  
}

export default Hero