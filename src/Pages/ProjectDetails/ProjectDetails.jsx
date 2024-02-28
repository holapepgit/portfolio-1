import { GoNorthStar } from "react-icons/go";
import icon from "../../assets/icon2.png";
import { tableData } from "../../constant/tableData";
const ProjectDetails = () => {
  return (
    <div className="bg-primary">
      <div className="flex justify-center  relative">
        <img
          className="object-cover w-full lg:h-[500px]  lg:w-full "
          src="https://i.ibb.co/PG9m9Yp/marc-olivier-jodoin-HIi-NFXcbt-Q-unsplash.jpg"
        />
        <div className="flex absolute  bg-black/60 inset-0 z-10  justify-center items-center">
          <GoNorthStar className="text-5xl text-gray-200" />
          <h1 className="  lg:text-5xl text-2xl font font-semibold text-white px-2">
            PROJECT FACT SHEET
          </h1>
          <GoNorthStar className="text-5xl text-gray-200" />
        </div>
      </div>

      <div className="max-w-4xl my-5   relative border border-gray-700 mx-1 lg:mx-auto   rounded-lg bg-gradient-to-l from-neutral-950/80 to-neutral-900">
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

      {/* projects phases */}

      <div className=" mx-auto space-y-28 lg:space-y-44 py-14 mt-5 bg-black/30 backdrop-blur-md">
        <div>
          <div className="lg:mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl text-gray-200 font-bold mb-2">
              Rail Corridors in Nigeria
            </h2>
            <div className="mx-auto w-40  h-1 mb-5 bg-secondary"></div>
          </div>
          <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row lg:justify-between gap-10 lg:items-center py-8 ">
            <ul className="list-disc max-w-lg  list-outside ml-10 lg:ml-0  text-gray-200 lg:text-xl  space-y-2">
              <li>
                <span className="font-semibold">157 km</span> Lagos-Ibadan
                standard gauge rail.{" "}
              </li>
              <li>
                <span className="font-semibold">186 km</span>Abuja-Kaduna
                standard gauge rail line
              </li>
              <li>
                <span className="font-semibold">327 km</span> Itakpe-Warri
                standard gauge rail. Agbor Railway Village, Abuja Light Rail
                project
              </li>
              <li>
                <span className="font-semibold">284 km</span> Kano-Maradi
                Standard Gauge Rail
              </li>
            </ul>
            <img
              loading="lazy"
              className="lg:w-[600px] h-[300px] object-cover lg:rounded-lg shadow-lg"
              src="https://img.freepik.com/free-photo/railroad-track-transportation-speed-sunset-mode-transport-motion-travel-outdoors-generative-ai_188544-8140.jpg?t=st=1708969588~exp=1708973188~hmac=a295b8e8d4a6c84aacf91e5c75dad176b173bacdb32cfe1b80f2dc095291b8f0&w=826"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
