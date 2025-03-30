import { useEffect, useState } from "react";
import "./App.css";
import { Feed, Sidebar, Topbar } from "./components";
import axios from "axios";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  const getUser = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("http://localhost:8000/api/user/1");
      setUser(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="container">
      <Sidebar isLoading={isLoading} />
      <div className="home">
        <Topbar isLoading={isLoading} user={user} />
        <Feed />
      </div>
    </div>
  );
}
