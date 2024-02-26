import { GoNorthStar } from "react-icons/go";
const ProjectDetails = () => {
  return (
    <div className="bg-black py-12">
      <div className="flex justify-center items-center">
        <GoNorthStar className="text-5xl text-white" />
        <h1 className="text-center lg:text-5xl text-2xl font font-semibold text-white px-2">
          Star VENDOR MANAGEMENT -SAAS Star
        </h1>
        <GoNorthStar className="text-5xl text-white" />
      </div>
      <div className="flex justify-center mt-10">
        <img
          className="object-cover w-full h-[500px] rounded-2xl lg:w-full px-12"
          src="https://i.ibb.co/XLq7DLr/422913501-585066360505027-3513557962592483288-n.jpg"
        />
      </div>
    </div>
  );
};

export default ProjectDetails;
