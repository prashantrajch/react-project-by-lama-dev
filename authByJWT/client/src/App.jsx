import { useState } from "react";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const api = "http://localhost:5000/api";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const refreshToken = async () => {
    try {
      const res = await axios.post(`${api}/refresh`, {
        token: user.refreshToken,
      });
      setUser({
        ...user,
        accessToken: res.data.accessToken,
        refreshToken: res.data.refreshToken,
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      let currentDate = new Date();
      const decodeToken = jwtDecode(user.accessToken);
      if (decodeToken.exp * 1000 < currentDate.getTime()) {
        const data = await refreshToken();
        config.headers["authorization"] = "Bearer " + data.accessToken;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${api}/login`, formData);
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    setSuccess(false);
    setError(false);
    try {
      await axiosJWT.delete(`${api}/users/${id}`, {
        headers: {
          authorization: "Bearer " + user.accessToken,
        },
      });
      setSuccess(true);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      {user ? (
        <Card className={"w-[350px]"}>
          <CardHeader>
            <CardTitle className={"text-center"}>
              Welcome to the <b>{user?.isAdmin ? "admin" : "user"}</b> dashboard{" "}
              <b>{user?.username}</b>{" "}
            </CardTitle>
            <CardContent className={"flex flex-col gap-4"}>
              <span className="text-center mt-5 text-2xl">Delete Users:</span>
              <Button
                className={"cursor-pointer"}
                variant={"destructive"}
                onClick={() => handleDelete(1)}
              >
                Delete Prash
              </Button>
              <Button
                className={"cursor-pointer"}
                variant={"destructive"}
                onClick={() => handleDelete(2)}
              >
                Delete Rani{" "}
              </Button>
            </CardContent>
          </CardHeader>
          <CardFooter className={"flex-col"}>
            {error && (
              <p className="text-xs text-[crimson]">
                You are not allowed to delete this user!
              </p>
            )}
            {success && (
              <p className="text-xs text-[green]">
                User has been deleted successfully.....
              </p>
            )}
          </CardFooter>
        </Card>
      ) : (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className={"text-center text-2xl"}>Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Username</Label>
                  <Input
                    name="username"
                    id="name"
                    placeholder="Username"
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        username: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    name="password"
                    id="password"
                    type={"password"}
                    placeholder="Password"
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
              <div className="mt-5 flex justify-center">
                <Button type="submit" className={"cursor-pointer"}>
                  Login
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default App;
