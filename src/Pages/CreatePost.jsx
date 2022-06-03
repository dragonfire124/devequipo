import React from "react";
import { IconDev } from "../components/IconDev/IconDev";
import { AppContext } from "../Context/AppContext";
import "../App.css";
import { useNavigate } from "react-router-dom";
const URL = "https://devtoclon.herokuapp.com/posts";

export const CreatePost = () => {
  const Context = React.useContext(AppContext);
  const token = localStorage.getItem(Context.user.userID);
  const navigate = useNavigate();
  const [Post, setPost] = React.useState({
    image: "",
    idUserPost: Context.user.userID,
    titlePost: "",
    tags: "",
    content: "",
    reactionsPost: "0",
    commentsPost: "0",
    datePost: "0",
    timeReadP: "o",
  });

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const HandlePost = (e) => {
    e.preventDefault();
    const d = new Date();
    const month = months[d.getMonth()];
    const day = d.getUTCDate();
    const datePost = `${month} ${day}`;

    setPost({
      ...Post,
      datePost,
    });

    const postCreate = fetch(URL, {
      method: "POST",
      body: JSON.stringify(Post),
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    });
    console.log(postCreate);
    postCreate.then((body) => {
      console.log(body);
    });
    // navigate("/");
  };
  console.log(token);
  return (
    <section className="d-flex px-4 p-2">
      {<IconDev />}
      <article className="container col-7">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <span className="fw-bolder">Create a Post</span>
          </div>
          <div className="">
            <button className="fw-bolder btn btn-light">Edit</button>
            <button className="fw-light btn btn-light">Preview</button>
          </div>
        </div>
        <form>
          <div class="px-5 pt-5 bg-white">
            <input
              type="text"
              className="fs-6 boder-input"
              placeholder="Add a cover image here..."
              onChange={({ target }) => {
                setPost({
                  ...Post,
                  image: target.value,
                });
              }}
            />
            <br />
            <input
              type="text"
              className="fw-bold fs-1 boder-input"
              placeholder="New post title here..."
              onChange={({ target }) => {
                setPost({
                  ...Post,
                  titlePost: target.value,
                });
              }}
            />
            <input
              type="text"
              className="m-2 mt-3 boder-input"
              placeholder="Add up to for tags..."
              onChange={({ target }) => {
                setPost({
                  ...Post,
                  tags: target.value,
                });
              }}
            />
          </div>
          <section className="bg-light mw-100">
            {Context.state.Icons.map((item) => {
              return <i className={item.icon}></i>;
            })}
          </section>
          <section>
            <textarea
              className="form-control border-0"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Write your post content here..."
              onChange={({ target }) => {
                setPost({
                  ...Post,
                  content: target.value,
                });
              }}
            ></textarea>
          </section>
          <section>
            <button className="btn btn-primary" onClick={HandlePost}>
              Publish
            </button>
          </section>
        </form>
      </article>
    </section>
  );
};
