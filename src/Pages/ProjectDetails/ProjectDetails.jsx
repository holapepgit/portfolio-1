import { GoNorthStar } from "react-icons/go";
import icon from "../../assets/icon2.png";
const ProjectDetails = () => {
  return (
    <div className="bg-primary ">
      <div className="flex justify-center  relative">
        <img
          className="object-cover w-full lg:h-[500px]  lg:w-full "
          src="https://i.ibb.co/PG9m9Yp/marc-olivier-jodoin-HIi-NFXcbt-Q-unsplash.jpg"
        />
        <div className="flex absolute  bg-black/60 inset-0 z-10  justify-center items-center">
          <GoNorthStar className="text-5xl text-gray-200" />
          <h1 className="  lg:text-5xl text-2xl font font-semibold text-white px-2">
            PROJECT FACTSHEET
          </h1>
          <GoNorthStar className="text-5xl text-gray-200" />
        </div>
      </div>

      <div className="max-w-4xl relative  mx-1 lg:mx-auto  mt-5 rounded-lg bg-gradient-to-l from-neutral-950/80 to-neutral-900">
        <table className="p-3 lg:p-7  h-full lg:text-justify  shadow-lg rounded bg-   overflow-hidden">
          <thead className="text-xs lg:text-[19px]">
            <th className="px-4 py-2  text-gray-300 w-80">Project title</th>
            <th className="px-4 py-2  text-gray-300">
              South-East & South-South Rail Network
            </th>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index} className="text-gray-300 text-sm lg:text-base ">
                <td className="px-4 py-2">{data.title}</td>
                <td className="px-4 py-2">{data.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <img
          src={icon}
          alt="icon"
          className=" absolute top-0 lg:left-72 left-1/2 z-10 w-7 lg:w-auto"
        />
      </div>
    </div>
  );
};

const tableData = [
  {
    title: "Expected Outcome",
    details: "Regional Network",
  },
  {
    title: "Project funding requirement",
    details: "$15 billion",
  },
  {
    title: "Potential Source (s) of Funding",
    details: "",
  },
  {
    title: "Expected Commencement date",
    details: "",
  },
  {
    title: "Expected Duration",
    details: "18 Months",
  },
  {
    title: "Contact information",
    details: `Prof Pat Utomi -
Dr Chinonye Okwuosa -
Prof Jude Nzeako +447565394466
Mr Emmanuel Finddoro Obasi -
Dr Donald Duke -
email: info@sessrail.com`,
  },
  {
    title: "Project Ownership",
    details: " South-East & South-South Governors Forum",
  },
];

export default ProjectDetails;
