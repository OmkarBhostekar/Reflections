"use client";
import { BuiltInProviderType } from "next-auth/providers";
import { ClientSafeProvider, signIn } from "next-auth/react";
import React from "react";
import { useForm, SubmitHandler, LiteralUnion } from "react-hook-form";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Vaibhav from "../assets/panda.png";
type Props = {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
};
interface Inputs {
  email: string;
  password: string;
}
const page = ({ providers }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const registerOptions = {
    name: { required: "Name is required" },
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
  };
  return (
    <div>
      <section className=" min-h-screen   flex items-center justify-between w-full">
        <div className=" flex rounded-2xl pt-10 w-full px-20 items-center">
          <div className="md:w-1/2 px-2 md:px-2 ">
            <h1 className="text-4xl antialiased font-bold dark:text-white">
              Welcome to Reflections
            </h1>
            <h2 className="font-bold text-2xl text-[#126eff] dark:text-[#e5ff12]">
              Fast Login
            </h2>
            <p className="text-xs mt-4 text-[#002D74] dark:text-white">
              Easy login with Google, Github, Twitter and LinkedIn
            </p>

            {/* <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <input
                className="py-2 px-4 mt-8 rounded-xl border"
                type="email"
                placeholder="Email"
                {...register("email", registerOptions.email)}
              />
              <small className="text-danger">
                {errors?.email && errors.email.message}
              </small>
              <div className="relative">
                <input
                  className="py-2 px-4 rounded-xl border w-full"
                  type="password"
                  placeholder="Password"
                  {...register("password", registerOptions.password)}
                />
                <small className="text-danger">
                  {errors?.password && errors.password.message}
                </small>
              </div>
              <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
                Login
              </button>
            </form> */}

            {/* <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div> */}
            <div className="">
              {providers &&
                Object.values(providers).map((provider) =>
                  provider.name === "Google" ? (
                    <button
                      onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                      className="bg-white border py-3 w-1/2 rounded-xl mt-5 flex justify-center items-center text-sm  duration-300 text-[#002D74]"
                    >
                      <FcGoogle className="text-2xl" />
                      <div className="ml-2">Login with Google</div>
                    </button>
                  ) : (
                    <button
                      onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                      className="bg-white border py-3 w-1/2 rounded-xl mt-5 flex justify-center items-center text-sm  duration-300 text-[#002D74]"
                    >
                      <BsGithub className="text-xl" />
                      <div className="ml-2">Login with Github</div>
                    </button>
                  )
                )}
            </div>

            {/* <div className="mt-3 text-xs flex justify-between items-center text-[#002D74] dark:text-white">
              <p>Don't have an account?</p>
              <button className="py-2 px-5 border rounded-xl hover:scale-110 duration-300 bg-[#002D74] text-white">
                Register
              </button>
            </div> */}
          </div>
          <div className="md:inline-block hidden w-1/2 h-full">
            <img
              className="rounded-2xl dark:invert h-auto w-full "
              src={Vaibhav.src}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
