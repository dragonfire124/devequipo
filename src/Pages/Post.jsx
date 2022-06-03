import React from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { ImgPost } from "../components/ImgPost/ImgPost";
import { ImgPostAccount } from "../components/ImgPostAccount/ImgPostAccount";
import { PostAutorName } from "../components/PostAutorName/PostAutorName";
import { PostDate } from "../components/PostDate/PostDate";
import { PostTitle } from "../components/PostTitle/PostTitle";
import { Tags } from "../components/Tags/Tags";
import { ButtonReactions } from "../components/ButtonReactions/ButtonReactions";
import { ButtonComments } from "../components/ButtomComments/ButtomComments";
import { LabelTimeRead } from "../components/LabelTimeRead/LabelTimeRead";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const URL = "https://devtoclon.herokuapp.com/posts";

export const Post = () => {
  const { id } = useParams();
  const Context = React.useContext(AppContext);
  const navigate = useNavigate();
  const [Post, setPost] = React.useState();
  const [Loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    fetch(`${URL}/${id}`)
      .then((res) => res.json())
      .then((body) => {
        setPost(body);
        setLoading(false);
      });
  }, []);

  const del = () => {
    const token = localStorage.getItem(Context.user.userID);
    //console.log("ENTRA BORRAR ", token);
    const del = fetch(`${URL}/${id}`, {
      method: "DELETE",
      body: JSON.stringify({
        idUser: Context.user.userID,
      }),
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    });
    del.then((body) => {
      console.log(body);
    });
    navigate("/");
  };

  return (
    <div className="d-flex flex-column">
      <Navbar />
      {Loading ? (
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <section className="bg-white d-flex flex-column col-lg-8 align-self-center my-3">
          <div className="d-flex align-self-center">
            <ImgPost link={Post.image} />
          </div>
          <div className="d-flex mt-3 align-self-start align-items-center mx-3">
            <ImgPostAccount link={Post.imageUser} />
            <div className="d-flex flex-column">
              <PostAutorName name={Post.userId} />
              <PostDate date={Post.datePost} />
            </div>
          </div>
          <div className="px-5">
            <PostTitle title={Post.titlePost} />
            <div className="m-3">
              <Tags tags={Post.tags} />
            </div>
            <div>{Post.content}</div>
          </div>
          <div className="d-flex justify-content-between m-3 w-75">
            <div className="d-flex justify-content-around">
              <ButtonReactions />
              <ButtonComments />
            </div>
            <LabelTimeRead />
          </div>
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-primary mx-2"
              onClick={() => {
                navigate(`/editpost/${id}`);
              }}
            >
              Edit
            </button>
            <button type="button" class="btn btn-danger mx-2" onClick={del}>
              Delete
            </button>
          </div>
        </section>
      )}
    </div>
  );
};
