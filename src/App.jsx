import React, { Suspense, lazy } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const Work = lazy(() => import("./pages/Work"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));

const Loading = () => <div className="p-8 text-gray-500">Loading...</div>;

const App = () => {
  const path = window.location.pathname;

  let PageComponent;
  switch (path) {
    case "/":
      PageComponent = Home;
      break;
    case "/work":
      PageComponent = Work;
      break;
    case "/blog":
      PageComponent = Blog;
      break;
    case "/contact":
      PageComponent = Contact;
      break;
    default:
      PageComponent = () => <div className="p-8 text-red-500">404 - Page not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col  dark:bg-gray-900 font-circular">
      <Header currentPath={path} />
      <main className="flex-1">
        <Suspense fallback={<Loading />}>
          <PageComponent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;
