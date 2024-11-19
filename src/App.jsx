import React from "react";
import NavBar from "./pages/navbar";
import Home from "./pages/home";
import AboutMe from "./pages/aboutMe";
import Project from "./pages/project";
import Contact from "./pages/contact";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <NavBar />,
//         <Home />
//       </div>
//     ),
//   },
//   {
//     path: "/about",
//     element: (
//       <div>
//         <NavBar />,
//         <AboutMe />
//       </div>
//     ),
//   },
//   {
//     path: "/project",
//     element: (
//       <div>
//         <NavBar />,
//         <Project />
//       </div>
//     ),
//   },
//   {
//     path: "/contact",
//     element: (
//       <div>
//         <NavBar />,
//         <Contact />
//       </div>
//     ),
//   },

// ]);

function App() {
  return (
    <>
      <Home />
      <Project/>
      <Contact/>
    </>
  );
}

export default App;
