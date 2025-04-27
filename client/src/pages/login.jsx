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
import {
  useLoginUserMutation,
  useSignupUserMutation,
} from "@/feature/api/authApi";
import { Loader2 } from "lucide-react";
// import { sign } from "crypto";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  // working with useState for storing details send by the user....

  const [loginInput, setLoginInput] = useState({ email: "", password: "" });
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  //this is mutation from RTK query for api intigartion

  const [
    signupUser,
    {
      data: signupData,
      error: signupError,
      isLoding: signupIsLoading,
      isSuccess: signupIsSuccess,
    },
  ] = useSignupUserMutation();
  const [
    loginUser,
    {
      data: loginData,
      error: loginError,
      isLoding: loginIsLoading,
      isSuccess: loginIsSuccess,
    },
  ] = useLoginUserMutation();

  // Input handler function to handle input send by the user.

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;

    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };

  // To get data of signup and login

  const handleRegistration = async (type) => {
    const inputData = type === "signup" ? signupInput : loginInput;
    const action = type === "signup" ? signupUser : loginUser;
    await action(inputData);
  };

  useEffect(() => {
   if(signupIsSuccess && signupData){
    toast.success(signupData.message || "Signup successfully...")
    }
    if(signupError){
      toast.error(signupError.message || "Signup failed...")
    }
    if(loginIsSuccess && loginData){
      toast.success(loginData.message || "Login successfully...")
      navigate("/");
      }
      if(loginError){
        toast.error(loginError.message || "Login failed...")
      }
  }, [
    loginIsLoading,
    signupIsLoading,
    loginData,
    signupData,
    loginError,
    signupError,
  ]);


  const navigate = useNavigate();


  return (
    <div className="flex items-center w-full justify-center mt-21">
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
                  onChange={(e) => {
                    changeInputHandler(e, "signup");
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
                  onChange={(e) => {
                    changeInputHandler(e, "signup");
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
                  onChange={(e) => {
                    changeInputHandler(e, "signup");
                  }}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                disabled={signupIsLoading}
                onClick={() => {
                  handleRegistration("signup");
                }}
              >
                {signupIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                    wait
                  </>
                ) : (
                  "Signup"
                )}
              </Button>
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
                  onChange={(e) => {
                    changeInputHandler(e, "login");
                  }}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={loginInput.password}
                  placeholder="Eg. xyz"
                  required="true"
                  onChange={(e) => {
                    changeInputHandler(e, "login");
                  }}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                disabled={loginIsLoading}
                onClick={() => {
                  handleRegistration("login");
                }}
              >
                {loginIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                    wait
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
