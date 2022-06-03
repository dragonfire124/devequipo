import React from "react";
import { ImgPost } from "../ImgPost/ImgPost";
import { ImgPostAccount } from "../ImgPostAccount/ImgPostAccount";
import { PostAutorName } from "../PostAutorName/PostAutorName";
import { PostDate } from "../PostDate/PostDate";
import { PostTitle } from "../PostTitle/PostTitle";
import { Tags } from "../Tags/Tags";
import { ButtonReactions } from "../ButtonReactions/ButtonReactions";
import { ButtonComments } from "../ButtomComments/ButtomComments";
import { LabelTimeRead } from "../LabelTimeRead/LabelTimeRead";
import { ButtonSave } from "../ButtonSave/ButtonSave";
import { Link } from "react-router-dom";

export const CardPost = ({ post }) => {
  return (
    <div className="bg-white my-3 col-12">
      <article>
        <section>
          <Link
            className="p-2 d-flex justify-content-center"
            to={`/post/${post.id}`}
          >
            <ImgPost link={post.image} />
          </Link>
        </section>
        <section className="d-flex">
          <div>
            <ImgPostAccount link={post.imageUser} />
          </div>
          <div className="d-flex flex-column align-items-start">
            <section>
              <article className="d-flex flex-column">
                <PostAutorName name={post.userId} />
                <PostDate date={post.datePost} />
              </article>
            </section>
            <div>
              <Link
                className="text-dark text-decoration-none"
                to={`/post/${post.id}`}
              >
                <PostTitle title={post.titlePost} />
              </Link>
            </div>

            <div className="d-flex">
              <Tags tags="Tag 1" />
              <Tags tags="Tag 1" />
            </div>
          </div>
        </section>
        <div className="d-flex justify-content-xl-between mt-1 p-4 ">
          <div className="d-flex justify-content-xxl-between flex-column flex-sm-column flex-xxl-row">
            <ButtonReactions />
            <ButtonComments />
          </div>
          <div className="d-flex justify-content-xxl-between">
            <LabelTimeRead />
            <ButtonSave />
          </div>
        </div>
      </article>
    </div>
  );
};
