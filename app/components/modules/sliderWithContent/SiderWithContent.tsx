import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomSlider from "../slider/CustomSlider";
import styles from "./sliderWithContent.module.scss";

const SliderWithContent = (props: any) => {
  const { allUrl, settings } = props;
  const responsiveSetting = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    ...settings,
  };

  return (
    <div className={styles.main__slider}>
      <div className={styles.heading}>
        <div className={styles.leftSide}>
          {typeof props?.image === "string" ? (
            <Image
              src={props.image}
              alt={"Icon"}
              objectFit={"contain"}
              height={30}
              width={30}
              style={{ borderRadius: "50px" }}
            />
          ) : (
            props?.image
          )}

          <h3 className={styles.title}>{props.heading}</h3>
        </div>
        <Link href={allUrl || "#"} passHref>
          <span className={styles.rightSide}>View All</span>
        </Link>
      </div>
      <div>
        <CustomSlider moreSetting={responsiveSetting}>
          {props.children}
        </CustomSlider>
      </div>
    </div>
  );
};
export default SliderWithContent;
