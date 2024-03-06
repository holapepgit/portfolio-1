import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="bg-primary py-4 border-t border-gray-600">
      <h1 className="text-gray-200 lg:text-lg text-center font-medium">
        © {year} Project Railway. All Rights Reserved.
      </h1>
      {isHomePage && (
        <h1 className="text-gray-200 lg:text-lg text-center font-medium">
          Powered by{" "}
          <span className="font-semibold pt-2">
            <Link className="underline" to={"https://www.holapep.com/"}>
              holaPep
            </Link>
          </span>
        </h1>
      )}
    </div>
  );
};

export default Footer;
