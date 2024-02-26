import Lottie from "lottie-react";
import animationData from "../public/email.json";

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
