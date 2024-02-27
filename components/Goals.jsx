import job from "../src/assets/job.svg";
import farm from "../src/assets/farm.svg";
import economy from "../src/assets/economy.svg";

const Goals = () => {
  return (
    <div className="max-w-5xl mx-auto py-14 ">
      <div className="lg:mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Goals</h2>
        <div className="mx-auto w-12 h-1 mb-5 bg-secondary"></div>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-3 place-items-center justify-items-center gap-5 ">
        <div className="flex my-3 lg:my-0  w-80 lg:w-auto mx-auto flex-col items-center justify-center gap-2 border rounded-lg shadow-lg border-gray-200 p-5">
          <img className="w-24 h-24" src={job} alt="job" />
          <h1 className="tracking-wide">
            Alleviate unemployment by creating jobs through the construction and
            operation of the regional rail system.
          </h1>
        </div>
        <div className="flex my-3 lg:my-0 w-80 lg:w-auto mx-auto flex-col items-center justify-center gap-2 border rounded-lg shadow-lg border-gray-200 p-5">
          <img className="w-24 h-24" src={economy} alt="economy" />
          <h1 className="tracking-wide">
            Enhance economic activities and trade within and between states in
            the region
          </h1>
        </div>
        <div className="flex my-3 lg:my-0 w-80 lg:w-auto mx-auto flex-col items-center justify-center gap-2 border rounded-lg shadow-lg border-gray-200 p-5">
          <img className="w-24 h-24" src={farm} alt="farm" />
          <h1 className="tracking-wide">
            Improve access to farms, markets, and other essential services.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Goals;
