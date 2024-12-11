const SectionTitle = ({ Heading }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-8">
      {/* <p className="text-yellow-600 mb-2">---{subHeading}---</p> */}
      <h1 className="text-4xl uppercase border-y-4 py-4">{Heading}</h1>
    </div>
  );
};

export default SectionTitle;
