import { Suspense } from "react";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import css from "./SharedLayout.module.css";

const SharedLayout = ({ children }) => {
  return (
    <div className={css.layout}>
      <Header />
      <main className={css.main}>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </main>
    </div>
  );
};

export default SharedLayout;
