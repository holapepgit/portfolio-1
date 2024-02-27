const ProjectOverview = () => {
  return (
    <div className="py-10 space-y-10 px-5">
      <div className="lg:mx-auto text-center">
        <h2 className="text-3xl font-bold ">Project Overview</h2>
        <div className="mx-auto w-48 h-1  bg-secondary"></div>
      </div>

      <p className="mx-auto text-center tracking-wider max-w-5xl text-medium text-sm lg:text-base text-gray-700">
        This project aims to provide detailed geographical and topographical
        information for the proposed railway lines connecting key cities in the
        South-South and South-East regions of Nigeria. The survey will map the
        right-of-way (Rof-W) for each proposed route, including stations, for
        land acquisition purposes.
      </p>

      <div className="flex lg:flex-row flex-col-reverse gap-10 justify-center pb-10 ">
        <table className="text-center h-full  shadow-lg rounded bg-   overflow-hidden">
          <thead>
            {tableHead.map((head, index) => (
              <th key={index} className="px-4 py-2 border text-xs lg:text-base">
                {head}
              </th>
            ))}
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index} className="border text-sm lg:text-base">
                <td className="px-4 py-2 border">{data.name}</td>
                <td className="px-4 py-2 border">{data.originCity}</td>
                <td className="px-4 py-2 border">{data.destinationCity}</td>
                <td className="px-4 py-2 border">{data.estimatedDistance}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <img
          loading="lazy"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/No_colonies_blank_world_map.png/800px-No_colonies_blank_world_map.png"
          alt="maps"
          className="lg:w-[600px] lg:h-[600px] object-cover"
        />
      </div>
    </div>
  );
};

const tableHead = [
  "Route No.",
  "Origin City",
  "Destination n City",
  "Estimated Distance",
];

const tableData = [
  {
    name: "1",
    originCity: "Abakaliki",
    destinationCity: "Enugu",
    estimatedDistance: "100",
  },
  {
    name: "2",
    originCity: "Enugu",
    destinationCity: "Awka",
    estimatedDistance: "75",
  },
  {
    name: "3",
    originCity: "Awka",
    destinationCity: "Onitsha",
    estimatedDistance: "35",
  },
  {
    name: "4",
    originCity: "Onitsha",
    destinationCity: "Nnewi",
    estimatedDistance: "46",
  },
  {
    name: "5",
    originCity: "Nnewi",
    destinationCity: "Okigwe",
    estimatedDistance: "66",
  },
  {
    name: "6",
    originCity: "Okigwe",
    destinationCity: "Owerri",
    estimatedDistance: "61",
  },
  {
    name: "7",
    originCity: "Owerri",
    destinationCity: "Umuahia",
    estimatedDistance: "59.6",
  },
  {
    name: "8",
    originCity: "Umuahia",
    destinationCity: "Aba",
    estimatedDistance: "54",
  },
  {
    name: "9",
    originCity: "Aba",
    destinationCity: "Uyo",
    estimatedDistance: "68",
  },
  {
    name: "10",
    originCity: "Uyo",
    destinationCity: "Calabar",
    estimatedDistance: "94",
  },
  {
    name: "11",
    originCity: "Calabar",
    destinationCity: "Abakiliki",
    estimatedDistance: "187",
  },
  {
    name: "12",
    originCity: "Aba",
    destinationCity: "Port Harcourt",
    estimatedDistance: "63",
  },
  {
    name: "13",
    originCity: "Port Harcourt",
    destinationCity: "Yenagoa",
    estimatedDistance: "140",
  },
  {
    name: "14",
    originCity: "Yenagoa",
    destinationCity: "Warri",
    estimatedDistance: "155",
  },
  {
    name: "15",
    originCity: "Warri",
    destinationCity: "Benin City",
    estimatedDistance: "111.7",
  },
  {
    name: "16",
    originCity: "Benin City",
    destinationCity: "Asaba",
    estimatedDistance: "132.7",
  },
];

export default ProjectOverview;
