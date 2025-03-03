import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import PigeonIco from "../../img/Subtract.svg"
import { TbBrandGoogle} from "react-icons/tb";

const Register = () => {
  const [Name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    login({ Name });
    navigate("/Messages"); // Перенаправляем после регистрации
  };

  return (
    <section className="flex bg-linear-to-r from-slate-200 to-white">
      <div className="flex justify-center items-center flex-col w-screen h-screen">
        <div className=" rounded-xl px-10">
      <img src ={PigeonIco} className="w-15"></img>
      </div>
      <h1 className="font-bold text-3xl mb-3 text-slate-500 mt-5">Create account</h1>
      <form onSubmit={handleRegister} className="flex flex-col">
        <input
          type="text"
          placeholder="Enter your name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          required
           className="z-1 mb-3 placeholder:text-neutral-400 rounded-md p-2 bg-slate-200 transition-color duration-300"/>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mb-3 rounded-md placeholder:text-neutral-400 bg-slate-200 p-2 transition-color duration-300"/>
        <button type="submit" className="rounded-md border-1 border-neutral-400 p-1 w-full bg-slate-500 text-white transition-color duration-300">Confirm</button>
      </form>
      <h2 className="text-neutral-400 mt-3 font-sm">Already registered? <a href = '#' className="font-bold text-slate-500">Sign In</a></h2>
      <div className="border-1 border-slate-300 w-15 mt-5"></div>
      <a href='#' className="bg-slate-200 flex justify-start items-center mt-5 h-12 rounded-md p-2 text-slate-500"><TbBrandGoogle className="text-3xl font-bold mr-3 text-slate-400"/>Sign in via Google</a>
    </div>

    </section>
  );
};

export default Register;
