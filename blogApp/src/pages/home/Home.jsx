import React from "react";
import { Header, Posts, Sidebar } from "../../components";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
