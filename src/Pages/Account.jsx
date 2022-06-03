import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
const URL = "https://devtoclon.herokuapp.com";

export const Account = () => {
  const { id } = useParams();
  const Context = React.useContext(AppContext);
  const [user, setUser] = React.useState(null);
  const [Loading, setLoading] = React.useState(true);
  const token = localStorage.getItem(Context.user.userID);

  const handleInfo = (e) => {
    e.preventDefault();
    console.log(e.target[1].value);
    const updateUser = fetch(`${URL}/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        firstName: e.target[0].value,
        lastName: e.target[1].value,
        imageUser: e.target[3].value,
      }),
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    });
    updateUser.then((body) => {
      console.log(body);
    });
  };

  React.useEffect(() => {
    const apiUrl = `${URL}/users/${id}`;
    fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    })
      .then((res) => res.json())
      .then((body) => {
        console.log(body);
        setUser(body);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Navbar />
      {Loading ? (
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <section className="flex-column d-flex align-items-center">
          <form onSubmit={handleInfo}>
            <article>
              <h3>Edit Account</h3>
            </article>
            <article className="d-flex flex-column">
              <input type="text" className="my-2" placeholder="Name" />
              <input type="text" className="my-2" placeholder="Last Name" />
              <input type="text" className="my-2" placeholder="Image" />
              <button class="btn btn-primary">Edit</button>
            </article>
          </form>
        </section>
      )}
    </div>
  );
};
