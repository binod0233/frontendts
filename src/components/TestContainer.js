import React from "react";
import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
// import Value from "../../../backend/.cache/plugins/strapi-plugin-content-type-builder/admin/src/components/ComponentSelect/Value";

const TestContainer = (props) => {
  const userRole = useSelector((state) => state.user.userRole);
  console.log("testing................", userRole);

  return (
    <div>
      {/* {userRole} */}
      <MainContainer name={userRole} />
    </div>
  );
};

export default TestContainer;
