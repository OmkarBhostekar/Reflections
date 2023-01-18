"use client";
import { BuiltInProviderType } from "next-auth/providers";
import {
  ClientSafeProvider,
  LiteralUnion,
  signIn,
  getProviders,
} from "next-auth/react";

interface Props {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
  // session: Session | null;
}

function Login(props: Props) {
  const { providers } = props;
  return (
    <div className="flex flex-col items-center space-y-20 pt-48">
      <div>
        {providers &&
          Object.values(providers).map((provider) => (
            <div key={provider.name} className="mt-2">
              <a
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                className="group relative inline-flex cursor-pointer items-center justify-center rounded-md bg-gray-800 px-6 py-3 text-lg font-medium tracking-tighter text-white"
              >
                <span className="absolute inset-0 mt-1 ml-1 h-full w-full rounded-md bg-green-600 transition-all duration-500 ease-in-out group-hover:mt-0 group-hover:ml-0"></span>
                <span className="absolute inset-0 h-full w-full rounded-md bg-white "></span>
                <span className="absolute inset-0 h-full w-full rounded-md bg-green-600 opacity-0 transition-all delay-100 duration-300 ease-in-out group-hover:opacity-100 "></span>
                <span className="relative text-green-700 transition-colors delay-100 duration-300 ease-in-out group-hover:text-white">
                  Sign in with {provider.name}
                </span>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Login;
