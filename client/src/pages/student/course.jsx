import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";
import { Badge } from "@/components/ui/badge";

function Course() {
  return (
    <div>
      <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
        <div className="relative">
          <img
            className="w-full h-48 object-cover rounded-t-lg" // Adjusted image height to h-48 for better fit
            alt="course image"
            src="https://img-c.udemycdn.com/course/750x422/3873464_403c_3.jpg"
          />
        </div>

        <CardContent className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out w-72">
          <h1 className="hover:underline truncate text-lg font-semibold text-gray-900 dark:text-gray-200 mb-2">
            Next.js Complete Course in Hindi 2025
          </h1>

          <div className="flex items-center gap-3 mb-3">
            <Avatar className="w-10 h-10 border-2 border-gray-300 dark:border-gray-600">
              <AvatarImage
                src="https://github.com/shadcn.png"
                className="rounded-full"
              />
              <AvatarFallback className="text-xs font-semibold">
                CN
              </AvatarFallback>
            </Avatar>
            <h1 className="text-black dark:text-white font-medium text-sm">
              Ranjan Mernstack
            </h1>

            <Badge
              className="bg-blue-500 text-white font-medium rounded-md py-1 px-3 text-xs"
              variant="outline"
            >
              Beginner
            </Badge>
          </div>

          {/* Price section aligned to the left */}
          <div className="text-lg font-bold text-left">
            <span className="text-gray-800 dark:text-white">₹499</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Course;
