import { GoNorthStar } from "react-icons/go";
import icon from "../../assets/icon2.png";
import { tableData } from "../../constant/tableData";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMemo } from "react";
const ProjectDetails = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch("/project.json");
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const memoizedTableData = useMemo(() => tableData, []);

  return (
    <>
      <div className="bg-primary ">
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
              <tr>
                <th className="px-4 py-2  text-gray-300 w-80">Project title</th>
                <th className="px-4 py-2  text-gray-300">
                  South-East & South-South Rail Network
                </th>
              </tr>
            </thead>
            <tbody>
              {memoizedTableData.map((data, index) => (
                <tr key={index} className="text-gray-300 text-sm lg:text-base ">
                  <td className="px-4 py-2 ">{data.title}</td>
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

        <div className="  mt-5 bg-black/30 backdrop-blur-md pb-10">
          <div className="lg:mx-auto text-center py-10">
            <h2 className="lg:text-3xl text-2xl font-bold text-white">
              Project Phases
            </h2>
            <div className="mx-auto w-44 h-1 mb-5 bg-secondary"></div>
          </div>
          {loading ? (
            <div className="flex items-center justify-center">
              <h1 className="w-10 h-10 rounded-full border-4 border-dashed animate-spin"></h1>
            </div>
          ) : (
            <div className="grid px-10 max-w-7xl mx-auto gap-5 grid-cols-1 lg:grid-cols-3">
              {data.map((item, index) => (
                <Link key={index} to={`/project/${item.id}`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      className="h-72 w-full object-cover rounded-lg brightness-90"
                      alt=""
                    />

                    <div className="absolute h-[100px] w-full -bottom-4 z-20 bg-gradient-to-b from-[#502465] to-[#000000] blur-3xl" />
                    <h1 className="text-white inset-0 flex items-end hover:bg-black/40 text-xl font-semibold absolute z-50 transition duration-400 rounded-lg p-5">
                      {item.heading}
                    </h1>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
