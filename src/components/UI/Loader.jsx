import loader from "../../assets/spinner.gif";

const Loader = ({ title }) => (
  <div className="w-full flex justify-center items-center flex-col">
    <img
      src={loader}
      alt="loader"
      className="w-52 h-52 object-contain text-blue "
    />
    <h1 className="font-bold text-xl text-blue mt-2">
      {title || "Fetching properties..."}
    </h1>
  </div>
);

export default Loader;
