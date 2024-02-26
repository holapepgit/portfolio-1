const ProjectOverview = () => {
  return (
    <div className="py-5 space-y-10 px-5">
      <div className="lg:mx-auto text-center">
        <h2 className="text-3xl font-bold ">Project Overview</h2>
        <div className="mx-auto w-48 h-1  bg-secondary"></div>
      </div>

      <p className="mx-auto max-w-5xl text-medium text-gray-700">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus,
        assumenda doloribus alias optio amet dolorum nesciunt corrupti aliquam
        distinctio, provident eligendi, neque ab iusto asperiores quae molestiae
        natus ullam reprehenderit!
      </p>

      <div className="flex lg:flex-row flex-col gap-10 justify-center ">
        <table className="text-center h-full  shadow-lg rounded bg-   overflow-hidden">
          <thead>
            {tableHead.map((head, index) => (
              <th key={index} className="px-4 py-2 border">
                {head}
              </th>
            ))}
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2 border">{data.name}</td>
                <td className="px-4 py-2 border">{data.originCity}</td>
                <td className="px-4 py-2 border">{data.destinationCity}</td>
                <td className="px-4 py-2 border">{data.estimatedDistance}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/No_colonies_blank_world_map.png/800px-No_colonies_blank_world_map.png"
          alt="maps"
          className="w-[500px] h-[500px] object-cover"
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
    originCity: "City 1",
    destinationCity: "City 2",
    estimatedDistance: "1000",
  },
  {
    name: "2",
    originCity: "City 2",
    destinationCity: "City 3",
    estimatedDistance: "2000",
  },
  {
    name: "3",
    originCity: "City 3",
    destinationCity: "City 4",
    estimatedDistance: "3000",
  },
  {
    name: "4",
    originCity: "City 4",
    destinationCity: "City 5",
    estimatedDistance: "4000",
  },
  {
    name: "6",
    originCity: "City 5",
    destinationCity: "City 6",
    estimatedDistance: "5000",
  },
  {
    name: "7",
    originCity: "City 5",
    destinationCity: "City 6",
    estimatedDistance: "5000",
  },
  {
    name: "8",
    originCity: "City 5",
    destinationCity: "City 6",
    estimatedDistance: "5000",
  },
  {
    name: "8",
    originCity: "City 5",
    destinationCity: "City 6",
    estimatedDistance: "5000",
  },
  {
    name: "8",
    originCity: "City 5",
    destinationCity: "City 6",
    estimatedDistance: "5000",
  },
];

export default ProjectOverview;
