import { Outlet } from "react-router-dom";

import Header from "../Header";
import Navbar from "../Navbar";

export default function Layout() {
  return (
    <div className="grid-custom-layout">
        <Header />
        <Navbar />
        <main className="row-span-1 p-8">
            <Outlet />
        </main>
    </div>
  );
}