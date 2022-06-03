import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Cards } from "../components/Cards/Cards";
import { Paragraphs } from "../components/Paragraphs/Paragraphs";
import { Title } from "../components/Title/Title";
import { ButtonLogin } from "../components/ButtonLogIn/ButtonLogin";
import { CreateAccountButton } from "../components/CreateAccountButton/CreateAccountButton";
import { List } from "../components/List/List";
import { AComponent } from "../components/AComponent.jsx/AComponent";
import { ButtonGeneral } from "../components/ButtonGeneral/ButtonGeneral";
import { CardPost } from "../components/CardPost/CardPost";
import { AppContext } from "../Context/AppContext";
import { CardMain } from "../components/CardMain/CardMain";
import { ASecondary } from "../components/ASecondary/ASecondary";


const URL = 'https://devtoclon.herokuapp.com/posts';

export const Home = () => {
  const context = React.useContext(AppContext);
  const [Post, setPost] = React.useState([]);
  React.useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((body) => {
        setPost(body.payload);
      });
  }, []);

  return (
    <div className="">
      <Navbar />
      <section className="py-5 ">
        <article className="d-flex bd-highlight justify-content-start">
          <div className="p-2 me-3 col-3 col-sm-3 col-lg-3 col-xl-2 col-xxl-2 d-sm-none d-none d-md-block d-lg-block d-xl-block d-xxl-block">
            <div className="">
              <Cards>
                <Title />
                <Paragraphs />
                <CreateAccountButton />
                <ButtonLogin />
              </Cards>
              <List>
                {context.state.loadPage.map((item) => {
                  return <AComponent text={item.text} icon={item.icon} />;
                })}
              </List>
              <h6 className="mt-3">Other</h6>
              <List>
                {context.state.other.map((item) => {
                  return <AComponent text={item.text} icon={item.icon} />;
                })}
              </List>
              <h6 className="mt-3">Popular Tags</h6>
              <List>
                <AComponent text="#Lorem" />
                <AComponent text="#Lorem" />
                <AComponent text="#Lorem" />
                <AComponent text="#Lorem" />
              </List>
              <section>
                {context.state.socialNetworkIcons.map((item) => {
                  return <i className={item.icon}></i>;
                })}
              </section>
              <Cards>
                <p className="fw-bolder">
                  Nearly 700 developers have contributed to the Forem codebase
                  that powers DEV and other communities. 🤯
                </p>
                <h4>Thank you!</h4>
              </Cards>
            </div>
          </div>
          <div className="d-flex flex-column col-12 col-sm-10 col-lg-8 col-xl-6 col-xxl-6">
            <div className="d-flex">
              <ButtonGeneral text={'Relevant'} />
              <ButtonGeneral text={'Latest'} />
              <ButtonGeneral text={'Top'} />
            </div>
            <div>
              {Post.map((post) => {
                return <CardPost post={post} />;
              })}
            </div>
          </div>

          <div className="col-3">
            <CardMain>
              <ASecondary img="https://res.cloudinary.com/practicaldev/image/fetch/s--jbMf-P5U--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://jess.forem.lol/remoteimages/uploads/articles/2hdqak549ex78azbqdk4.png" />
              <ASecondary text="Adding headers to the response in an angular aplication" />
              <ASecondary text="Do you know MusicAp. It's the best App to get live music" />
               
              <ASecondary text="How to Transition  into an Engineering  leadership group" />
              <ASecondary text="Give me your git command" />
              <ASecondary text="Commnunity Lead- Remore within Europe  jobs" />
              <ASecondary text="Best Coding Interview resources" />
              <ASecondary text="What is your development  philosophy" />
              <ASecondary text="What do you know about W-BENform??" />
              <ASecondary text="Adding headers to  the response  in an Angular application" />
              <ASecondary text="Does functional programming  have any advantage  in real environments???" />
              <ASecondary text="The word that kill your Dreams" />
              <ASecondary text="10 REact coding challenges" />
              <ASecondary text="Best coding Interview resources" />
              <ASecondary text="What's your current code IDe editor setup??" />
            </CardMain>
          </div>

          <div className="col-3"></div>

        </article>
      </section>
    </div>
  );
};
