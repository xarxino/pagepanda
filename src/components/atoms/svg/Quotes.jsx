import SVGComponent from "../Svg";

const Quotes = ({ className = "", flipHorizontal = false }) => {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <SVGComponent
        viewBox="0 0 122 82"
        className={`w-full h-full`}
        svgPath="M121.362 0.861112H66.5004V44.6643C66.5004 51.4076 67.7577 57.0938 70.2721 61.7227C72.7866 66.4087 76.1011 70.1804 80.2157 73.0378C84.3303 75.8951 89.0164 77.9524 94.2739 79.2096C99.5314 80.4669 104.903 81.0955 110.389 81.0955V55.7222C109.246 55.6651 108.018 55.4651 106.703 55.1222C105.446 54.7793 104.275 54.2078 103.189 53.4078C102.16 52.6077 101.274 51.4933 100.531 50.0647C99.8457 48.6931 99.5028 46.9216 99.5028 44.75H121.362V0.861112ZM55.5282 0.861112H0.667102V44.6643C0.667102 51.4076 1.92434 57.0938 4.4388 61.7227C6.95327 66.4087 10.2678 70.1804 14.3824 73.0378C18.497 75.8951 23.183 77.9524 28.4405 79.2096C33.6981 80.4669 39.0699 81.0955 44.556 81.0955V55.7222C43.4131 55.6651 42.1844 55.4651 40.87 55.1222C39.6128 54.7793 38.4413 54.2078 37.3555 53.4078C36.3268 52.6077 35.441 51.4933 34.6981 50.0647C34.0124 48.6931 33.6695 46.9216 33.6695 44.75H55.5282V0.861112Z"
        flipHorizontal={flipHorizontal}
        gradientId="paint0_linear_2389_1289"
        gradientType="linear"
        gradientStops={[
          { offset: "0%", color: "#9333EA" },
          { offset: "100%", color: "#FFBB00" },
        ]}
        gradientAttributes={{ x1: "60%", y1: "80%", x2: "60%", y2: "20%" }}
      />
    </div>
  );
};

export default Quotes;