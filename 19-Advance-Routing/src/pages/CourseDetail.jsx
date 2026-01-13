import React from "react";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const parems = useParams();
  console.log(parems);
  console.log(parems.id);
  
  return (
    <div>
      <h1>{parems.id} Course Detail page</h1>
    </div>
  );
};

export default CourseDetail;
