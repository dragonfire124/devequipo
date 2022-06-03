import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./Pages/Home";
import { Post } from "./Pages/Post";
import { CreatePost } from "./Pages/CreatePost";
import { Routes, Route } from "react-router-dom";
import { EditPost } from "./Pages/EditPost";
import { Account } from "./Pages/Account";
import { Login } from "./Pages/Login";
import { Createaccount } from "./Pages/Createaccount";
import React from "react";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<Createaccount />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/editpost/:id" element={<EditPost />} />
        <Route path="/account/:id" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
