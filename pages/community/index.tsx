import { useState } from "react";
import { NextPage } from "next";
import withLayoutBasic from "@/libs/components/layout/LayoutBasic";

const Community: NextPage = () => {
  const [title,setTitle]= useState<string>("Hello")
  return (
    <div>
      COMMUNITY{""}
      <button onClick={()=>alert("HELLO MIT")} style={{margin:"15px"}}>
        PressMe
      </button>
    </div>
  );
};
export default withLayoutBasic(Community);