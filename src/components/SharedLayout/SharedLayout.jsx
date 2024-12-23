import { Suspense } from "react";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";

const SharedLayout = ({ children }) => {
  console.log("Rendering SharedLayout");
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
