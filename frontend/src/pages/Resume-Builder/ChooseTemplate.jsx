import { Link } from "react-router-dom";

const ChooseTemplate = () => {
  return (
    <div className="min-h-screen lg:px-10 px-2 flex flex-col items-center justify-center">
      <h1 className="lg:text-[65px] text-[50px] leading-[50px] font-bold text-center">
        Best templates for your experience
      </h1>
      <p className="text-center text-[20px] font-semibold mt-4">
        You can always change your template later.
      </p>

      <div className="mt-10 grid lg:grid-cols-3 gap-5">
        <Link to={"/resume-options"}>
          <img
            src="/resume1.jpg"
            alt="resume-template"
            className="h-[550px] w-[400px] object-cover hover:border-4 hover:border-green-500 cursor-pointer"
          />
        </Link>
        <Link to={"/resume-options"}>
          <img
            src="/resume2.jpg"
            alt="resume-template"
            className="h-[550px] w-[400px] object-cover hover:border-4 hover:border-green-500 cursor-pointer"
          />
        </Link>

        <Link to={"/resume-options"}>
          <img
            src="/resume3.jpg"
            alt="resume-template"
            className="h-[550px] w-[400px] object-cover hover:border-4 hover:border-green-500 cursor-pointer"
          />
        </Link>

        <Link to={"/resume-options"}>
          <img
            src="/resume4.jpg"
            alt="resume-template"
            className="h-[550px] w-[400px] object-cover hover:border-4 hover:border-green-500 cursor-pointer"
          />
        </Link>

        <Link to={"/resume-options"}>
          <img
            src="/resume5.jpg"
            alt="resume-template"
            className="h-[550px] w-[400px] object-cover hover:border-4 hover:border-green-500 cursor-pointer"
          />
        </Link>

        <Link to={"/resume-options"}>
          <img
            src="/resume6.jpg"
            alt="resume-template"
            className="h-[550px] w-[400px] object-cover hover:border-4 hover:border-green-500 cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default ChooseTemplate;
