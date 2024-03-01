import { Suspense } from "react";
import './App.css'
import Pages from "./pages/Pages";
import Loading from "./components/shared/Loading";

export default function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Pages />
      </Suspense>
    </>
  );
}
