const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  speed: 2000,
  slidesToShow: 4,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  arrows: false,
  dots: false,
  initialSlide: 0,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export const SlideSettings = () => {
  return <></>;
};
