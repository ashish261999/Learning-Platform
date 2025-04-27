import React from "react";
import Course from "../../pages/student/Course";
import course from "./Course";

const myLearning = () => {
  const isLoading = false;
  const myLearningCourses = [1, 2];
  return (
    <div className="max-w-4xl mx-auto my-25 px-4 md:px-0">
      <h1 className="font-bold text-2xl">MY LEARNING</h1>
      <div className="my-5">
        {isLoading ? (
          <MyLearningSkeleton />
        ) : myLearningCourses.length === 0 ? (
          <p>You are not enrolled to any courses</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 width-100%"> 
            {[1, 2].map((course, index) => (
              <Course key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default myLearning;

const MyLearningSkeleton = () => {
  return (
    <div className="grid  grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-4">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="animate-pulse h-10 bg-gray-300  dark:bg-gray-700  rounded-lg"
        ></div>
      ))}
    </div>
  );
};
