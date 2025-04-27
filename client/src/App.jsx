import "./App.css";
import { BrowserRouter as Router, Routes, Route, RouterProvider } from "react-router-dom";
import Login from "./pages/login";
import Courses from "./pages/student/courses";
import NavBar from "./components/ui/navBar";
import HeroSection from "./pages/student/heroSection";
import MyLearning from "./pages/student/myLearning";
import MainLayout from "./layout/mainLayout";
// import { create } from "domain";
// import path from "path";
import { createBrowserRouter } from "react-router-dom";
import Profile from "./pages/student/profile"

const appRouter= createBrowserRouter([
  
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      { 
        path: "/",
        element: (
        <> <HeroSection />,
          <Courses />
        </>
        ),
      },
      {
    path: "/login",
    element: <Login/>,
      },
      {
        path: "/myLearning",
        element: <MyLearning/>,
      },
      {
        path: "/profile",
        element: <Profile/>,
      }
  ],
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={appRouter}/>
    </main>
    
  
  );
}

export default App;
