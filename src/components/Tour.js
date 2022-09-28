
import "./tour.scss";

import tourimg from "../image/tour-img-1.svg"
import tourimg2 from "../image/tour-img-2.svg"
import tourimg3 from "../image/tour-img-3.svg"
import tourimg4 from "../image/tour-img-4.svg"
import tourimg5 from "../image/tour-img-5.svg"
import tourimg6 from "../image/tour-img-6.svg"


function Tour() {
  return(
    <>
   <section className="tour">
        <div className="container">
          <div className="tour__content">
            <div className="tour__inner">
              <h2 className="tour__heading">Virtual tour</h2>
              <span className="tour__line"></span>
            </div>
            <ul className="tour__list">
              <li className="tour__item">
                <a className="tour__link" href="#">
                  <img
                    className="tour__img"
                    src={tourimg} 
                    alt="Virtual tour img"
                    width="380"
                    height="255"
                  />
                  <h3 className="tour__link-title">Royal Palace</h3>
                  <span className="tour__link-line"></span>
                  <p className="tour__link-text">360° Virtual Tour</p>
                  <p className="tour__link-text">Google Street Panorama View</p>
                </a>
              </li>

              <li className="tour__item">
                <a className="tour__link" href="#">
                  <img
                    className="tour__img"
                    src={tourimg2}
                    alt="Virtual tour img"
                    width="380"
                    height="255"
                  />
                  <h3 className="tour__link-title">Denon Wing</h3>
                  <span className="tour__link-line"></span>
                  <p className="tour__link-text">360° Virtual Tour</p>
                  <p className="tour__link-text">Google Street Panorama View</p>
                </a>
              </li>

              <li className="tour__item">
                <a className="tour__link" href="#">
                  <img
                    className="tour__img"
                    src={tourimg3}
                    alt="Virtual tour img"
                    width="380"
                    height="255"
                  />
                  <h3 className="tour__link-title">Colonnade Perrault</h3>
                  <span className="tour__link-line"></span>
                  <p className="tour__link-text">360° Virtual Tour</p>
                  <p className="tour__link-text">Google Street Panorama View</p>
                </a>
              </li>

              <li className="tour__item">
                <a className="tour__link" href="#">
                  <img
                    className="tour__img"
                    src={tourimg4}
                    alt="Virtual tour img"
                    width="380"
                    height="255"
                  />
                  <h3 className="tour__link-title">Greek hall</h3>
                  <span className="tour__link-line"></span>
                  <p className="tour__link-text">360° Virtual Tour</p>
                  <p className="tour__link-text">Google Street Panorama View</p>
                </a>
              </li>

              <li className="tour__item">
                <a className="tour__link" href="#">
                  <img
                    className="tour__img"
                    src={tourimg5}
                    alt="Virtual tour img"
                    width="380"
                    height="255"
                  />
                  <h3 className="tour__link-title">Mona Lisa</h3>
                  <span className="tour__link-line"></span>
                  <p className="tour__link-text">360° Virtual Tour</p>
                  <p className="tour__link-text">Google Street Panorama View</p>
                </a>
              </li>
              <li className="tour__item">
                <a className="tour__link" href="#">
                  <img
                    className="tour__img"
                    src={tourimg6}
                    alt="Virtual tour img"
                    width="380"
                    height="255"
                  />
                  <h3 className="tour__link-title">Night Palace</h3>
                  <span className="tour__link-line"></span>
                  <p className="tour__link-text">360° Virtual Tour</p>
                  <p className="tour__link-text">Google Street Panorama View</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </>
  )
  
}

export default Tour