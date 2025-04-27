import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import Course from "./course";

const profile = () => {

    const isLoading = false; // Simulating loading state
    const enrolledCourses = [1, 2];
  return (
    <div className="max-w-4xl max-auto px-4 my-24 ml-100 ">
      <h1 className="font-bold text-2xl text-center md:text-left">PROFILE</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8  my-5">
        <div className="flex flex-col items-center ">
          <Avatar className="h-24 w-24 md:h-32 md:w-32 ">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div className="mb-2">
            <h1 className="text-semibold text-gray-900 dark:text-shadow-gray-950 ">
              Name:
              <span className="font-normal text-gray-700  dark:text-gray-900">
                {" "}
                Ranjan mernstack
              </span>
            </h1>
          </div>
          <div className="mb-2">
            <h1 className="text-semibold text-gray-900 dark:text-shadow-gray-950 ">
              Email:
              <span className="font-normal text-gray-700  dark:text-gray-900">
                {" "}
                ranjan@gmail.com
              </span>
            </h1>
          </div>
          <div className="mb-2">
            <h1 className="text-semibold text-gray-900 dark:text-shadow-gray-950 ">
              Role:
              <span className="font-normal text-gray-700  dark:text-gray-900">
                {" "}
                INSTRUCTOR
              </span>
            </h1>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" className="mt-2 ">
                Edit Profile
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4 ">
                  <Label>Name</Label>
                  <Input
                    type="text"
                    placeholder="Name"
                    className="col-span-3"
                  />
                </div>

                <div className="grid grid-cols-4 items-center gap-4 ">
                  <Label>Profile Photo</Label>
                  <Input type="file" accept="image/*" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
             <Button>
               {
                isLoading ? (
                    <>
                     <Loader2 className="animate-spin mr-2 h-4 w-4" /> Please wait
                    </>
                   
                ) : "Save changes"
               }
             </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div>
        <h1 className="fornt-medium text-lg ">
            Courses you are enrolled in:
        </h1>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
               {
                enrolledCourses.length === 0 ? <h1>You have not enrolled yet</h1> : 
                enrolledCourses.map((course, index) => <Course key={index}/>)
               }

        </div>
      </div>
    </div>
  );
};

export default profile;
