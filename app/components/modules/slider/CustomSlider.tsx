import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import ChevronLeftIcon from "@/public/icons/chevron_left_black_36dp.svg";
// import ChevronRightIcon from "@/public/icons/chevron_right_black_36dp.svg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type SlickSliderProps = {
  moreSetting?: object;
  children: React.ReactNode;
};

const CustomSlider = (
  { moreSetting = {}, children }: SlickSliderProps,
  ref: any
) => {
  const SmiplePrevArrow = (props: any) => {
    const { className, onClick } = props;

    return (
      <div onClick={onClick} className={className}>
        <FiChevronLeft color="#fff" size={"2rem"} />
      </div>
    );
  };

  const SmipleNextArrow = (props: any) => {
    const { className, onClick } = props;

    return (
      <div onClick={onClick} className={className}>
        <FiChevronRight color="#fff" size={"2rem"} />
      </div>
    );
  };

  const settings = {
    infinite: false,
    speed: 500,

    // @ts-ignore
    nextArrow: <SmipleNextArrow />,
    // @ts-ignore
    prevArrow: <SmiplePrevArrow />,
  };

  // responsive setting exemple

  // const responsiveSetting = {
  //   slidesToShow: 7,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1450,
  //       settings: {
  //         slidesToShow: 6,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 1250,
  //       settings: {
  //         slidesToShow: 5,
  //         slidesToScroll: 1,
  //       },
  //     },

  //   ],
  // };

  const finalSetting = {
    ...settings,
    ...moreSetting,
  };
  return (
    <Slider {...finalSetting} ref={ref}>
      {children}
    </Slider>
  );
};

export default React.forwardRef(CustomSlider);
