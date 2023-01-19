import Login from "components/Login";
import { getProviders } from "next-auth/react";
import React from "react";
type Props = {};
interface Inputs {
  email: string;
  password: string;
}
const page = async (props: Props) => {
  const providers = await getProviders();
  return (
    <div>
      <Login providers={providers} />
    </div>
  );
};

export default page;
