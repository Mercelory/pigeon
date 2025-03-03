import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import PigeonIco from "../../img/Subtract.svg"

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
      <img src ={PigeonIco} className="w-15 mb-10 "></img>
      <h1 className="font-bold text-3xl mb-3 text-slate-500">Registration</h1>
      <form onSubmit={handleRegister} className="flex flex-col">
        <input
          type="text"
          placeholder="Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          required
           className="mb-3 placeholder:text-neutral-400 rounded-md border-1 p-2 border-neutral-400 hover:border-neutral-900 transition-color duration-300"/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mb-3 rounded-md placeholder:text-neutral-400 border-1 p-2 border-neutral-400 hover:border-neutral-900 transition-color duration-300"/>
        <button type="submit" className="rounded-md border-1 border-neutral-400 p-1 w-full bg-slate-500 text-white transition-color duration-300">Confirm</button>
      </form>
      <h2 className="text-neutral-400 mt-3 font-sm">Already registered? <a href = '#' className="font-bold text-slate-500">Sign In</a></h2>
    </div>
    </section>
  );
};

export default Register;
