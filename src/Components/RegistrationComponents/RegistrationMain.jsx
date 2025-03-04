import PigeonIco_2 from "../../img/PigeonIco_2.svg";
import { TbBrandGoogle } from "react-icons/tb";

const Register = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-neutral-100">
      <div className="flex flex-col items-center w-screen h-screen justify-center gap-6">
        <div className="">
          <img src={PigeonIco_2} className="w-80" />
        </div>
        <form className="flex flex-col space-y-4 w-full max-w-xs">
          <input
            type="text"
            placeholder="Enter your name"
            required
            className=" placeholder:text-neutral-500 rounded-lg p-3 border-neutral-600 border text-indigo-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-color duration-300"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className=" placeholder:text-neutral-500 rounded-lg p-3 border-neutral-600 border text-indigo-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-color duration-300"
          />
          <button
            type="submit"
            className=" placeholder:text-neutral-500 rounded-lg p-3  text-neutral-200 text-sm bg-indigo-700 hover:bg-indigo-700 transition-color duration-300"
          >
            Sign Up
          </button>
        </form>
        <h2 className="text-neutral-400 text-sm">
          Already registered?{" "}
          <a href="#" className="font-bold text-indigo-600 hover:underline">
            Sign In
          </a>
        </h2>
        <div className="border border-indigo-300 w-16"></div>
        <a
          href="#"
          className="border border-zinc-700 flex justify-center items-center h-12 max-w-xs w-full rounded-lg p-2 text-neutral-900 hover:outline-none hover:ring-2 hover:ring-indigo-600 transition-color duration-300"
        >
          <TbBrandGoogle className="text-3xl mr-3 text-neutral-900" />
          Sign in via Google
        </a>
      </div>
    </section>
  );
};

export default Register;
