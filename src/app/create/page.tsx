import CreateBlogs from "components/CreateBlog";
import { unstable_getServerSession } from "next-auth/next";
import { useSession } from "next-auth/react";

import React from "react";

type Props = {};

const CreateBlog = async (props: Props) => {
  const session = await unstable_getServerSession();
  return <CreateBlogs session={session} />;
};

export default CreateBlog;
