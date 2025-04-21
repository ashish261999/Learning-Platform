import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { sign } from "crypto";
import { useState } from "react";

const Login = () => {

  // working with useState for storing details send by the user....

  const [loginInput, setLoginInput] = useState({ email: "", password: "" });
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Input handler function to handle input send by the user.

  const changeInputHandler=(e, type)=>{
    const {name , value}= e.target;

    if(type === "signup"){
      setSignupInput({...signupInput , [name]: value});
    }else{
      setLoginInput({...loginInput, [name]:value});
    }
  }

  // To get data of signup and login

  const handleRegistration= (type)=>{

    const inputData= type === "signup" ? signupInput: loginInput;
    console.log(inputData);

  }


  return (
    <div className="flex items-center w-full justify-center">
      <Tabs defaultValue="signup" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Signup</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>Create your Account...</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input  
                type="text"
                name="name"
                value={signupInput.name}
                placeholder="Eg. Ranjan" 
                required="true" 
                onChange={(e)=>{
                  changeInputHandler(e, "signup")
                }}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={signupInput.email}
                  placeholder="Eg. Ranjan@googl.com"
                  required="true"
                  onChange={(e)=>{
                    changeInputHandler(e, "signup")
                  }}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Password</Label>
                <Input
                type="password"
                name="password"
                value={signupInput.password}
                placeholder="Eg. xyz"
                required="true"
                onChange={(e)=>{
                  changeInputHandler(e, "signup")
                }}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={()=>{handleRegistration("signup")}}>Signup</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>login</CardTitle>
              <CardDescription>
                Loign using Email and Password...
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={loginInput.email}
                  placeholder="Eg. Ranjan@googl.com"
                  required="true"
                  onChange={(e)=>{
                    changeInputHandler(e, "login")
                  }}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Password</Label>
                <Input 
                type="password" 
                name ="password"
                value={loginInput.password}
                placeholder="Eg. xyz" 
                required="true" 
                onChange={(e)=>{
                  changeInputHandler(e, "login")
                }}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button  onClick={()=>{handleRegistration("signup")}} >Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
