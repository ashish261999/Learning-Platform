import React from "react";
import Course from "./course";


function courses() {
  const isLoding = false;

  const courses = [1,2,3,4,5,6,7,8];


  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="font-bold text-3xl text-center mb-10">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6">
        {isLoding
          ? Array.from({ length: 8 }).map((_, index) => (
              <CourseSkeleton key={index} />
            ))
          : courses.map((course, index) => <Course key={index} />)
          }
        </div>
       
      </div>
    </div>
  );
}
export default courses;

export const CourseSkeleton = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition-shadow w-full max-w-sm animate-pulse">
      {/* Image skeleton */}
      <div className="bg-gray-300 h-40 w-full rounded-md mb-4"></div>

      {/* Title skeleton */}
      <div className="bg-gray-300 h-6 w-3/4 rounded mb-2"></div>

      {/* Description skeleton */}
      <div className="bg-gray-300 h-4 w-full rounded mb-2"></div>
      <div className="bg-gray-300 h-4 w-5/6 rounded mb-4"></div>

      {/* Button skeleton */}
      <div className="bg-gray-300 h-10 w-1/2 rounded-md mx-auto"></div>
    </div>
  );
};
