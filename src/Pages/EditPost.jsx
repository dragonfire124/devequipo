import React from "react";
import { IconDev } from "../components/IconDev/IconDev";
import { AppContext } from "../Context/AppContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../App.css";
const URL = "https://devtoclon.herokuapp.com";

export const EditPost = () => {
  const { id } = useParams();
  const Context = React.useContext(AppContext);
  const [Post, setPost] = React.useState(null);
  const [Loading, setLoading] = React.useState(true);
  const token = localStorage.getItem(Context.user.userID);
  const navigate = useNavigate();

  React.useEffect(() => {
    const apiUrl = `${URL}/posts/${id}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((body) => {
        setPost({
          image: `${body.image}`,
          titlePost: `${body.titlePost}`,
          tags: `${body.tags}`,
          content: `${body.content}`,
          idUser: Context.user.userID,
        });
        setLoading(false);
      });
  }, []);

  const HandlePost = (e) => {
    e.preventDefault();
    const apiUrl = `${URL}/posts/${id}`;
    const postCreate = fetch(apiUrl, {
      method: "PATCH",
      body: JSON.stringify(Post),
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    }).catch((error) => {
      console.log(error);
    });
    navigate("/");

    //console.log(postCreate);
  };
  //console.log(Post);
  return (
    <section className="d-flex px-4 p-2">
      {<IconDev />}
      <article className="container col-7">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <span className="fw-bolder">Edit Post</span>
          </div>
        </div>
        {Loading ? (
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          <form>
            <div class="px-5 pt-5 bg-white">
              <input
                type="text"
                className="fs-6 boder-input"
                value={Post.image}
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
                value={Post.titlePost}
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
                value={Post.tags}
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
                value={Post.content}
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
                Edit
              </button>
            </section>
          </form>
        )}
      </article>
    </section>
  );
};
