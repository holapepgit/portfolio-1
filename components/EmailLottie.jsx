import Lottie from "lottie-react";
import animationData from "../src/assets/email.json";

const EmailLottie = () => {
  return (
    <Lottie
      animationData={animationData}
      width={400}
      height={400}
      loop={true}
    />
  );
};

export default EmailLottie;
