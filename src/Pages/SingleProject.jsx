import { useEffect } from "react";
import { useState } from "react";
import { ScrollRestoration } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { useParams } from "react-router-dom";

const SingleProject = () => {
  const [data, setData] = useState({});

  const currentId = useParams();

  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.filter((item) => item.id == currentId.id);
        setData(filteredData[0]);
      });
  }, [currentId?.id]);

  return (
    <div className="bg-primary pt-3 min-h-screen">
      <ScrollRestoration />
      <div className="lg:mx-auto text-white text-center relative">
        <h2 className="lg:text-3xl text-lg font-bold mb-2">{data.heading}</h2>
        <div className="mx-auto w-44 h-1 mb-5 bg-secondary"></div>
        <Link
          to={"/projects"}
          className="text-white   absolute left-5 lg:left-10 top-0 bg-secondary p-2 rounded-full hover:bg-primary transition-colors">
          <IoMdArrowBack className="h-5 w-5" />
        </Link>
      </div>

      <div className=" max-w-4xl mx-auto  flex flex-col-reverse  lg:justify-between gap-10   pt-4 pb-14">
        <ul className="list-disc   list-inside ml-5 lg:ml-0  text-gray-200 text-lg lg:text-xl  space-y-2">
          {data?.text?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <img
          className="  object-cover lg:rounded-lg shadow-lg h-[280px] lg:h-[430px] w-full"
          src={data.image}
          alt=""
        />
      </div>
    </div>
  );
};

export default SingleProject;
