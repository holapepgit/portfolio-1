const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-primary py-4 border-t border-gray-600">
      <h1 className="text-gray-200 text-sm lg:text-lg text-center font-medium tracking-wide">
        © {year} Sessrail. All Rights Reserved.
      </h1>
    </div>
  );
};

export default Footer;
