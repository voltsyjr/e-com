// importing react and styles
import React from "react";
import styles from "./BaseProductCard.module.scss";

// global imports

// other imports
import { ReactComponent as Star } from "../../../asset/Star.svg";
import { ReactComponent as AddCart } from "../../../asset/Cart.svg";
import dummyImg from '../../../asset/images/fImageDummy.png'; 

//* compoenet
function BaseProductCard() {
  //* refs

  //* statics

  //* states

  //* effects

  //* callbacks and handlers

  //* rendering
  return (
    <div className={styles.BaseProductCardContainer}>
      <div className={styles.imageBox}>
        <img src={dummyImg} />
      </div>

      <div className={styles.descriptionBox}>
        <div className={styles.descriptionWrapper + " row"}>

          <div className={styles.detailsWrapper}>

            <div className={styles.headingWrapper} >
              <p className={styles.heading + " medium montserrat"}>
                Peacock Greenasdfadsfdsfasdf
              </p>
            </div>

            <div className={styles.price_info_row + " row"}>
              <p className={styles.subheading + " light montserrat"}>Rs. 2000</p>
              <div className={styles.iconRow + " row"}>
                <Star className={styles.star_icon} />
                <Star className={styles.star_icon} />
                <Star className={styles.star_icon} />
                <Star className={styles.star_icon} />
                <Star className={styles.star_icon} />
              </div>
            </div>
          </div>

          <div className={styles.shopping_cart_icon}>
            <AddCart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BaseProductCard;
