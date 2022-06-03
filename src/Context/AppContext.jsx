import React, { createContext, useState } from "react";

export const AppContext = createContext();

const ArrayOne = {
  loadPage: [
    {
      text: "Home",
      icon: `bi bi-house-door mx-2`,
    },
    {
      text: "Listings",
      icon: `bi bi-newspaper mx-2`,
    },
    {
      text: "Podcast",
      icon: `bi bi-mic-fill mx-2`,
    },
    {
      text: "Videos",
      icon: `bi bi-camera-reels-fill mx-2`,
    },
    {
      text: "Tags",
      icon: `bi bi-tags mx-2`,
    },
    {
      text: "FAQ",
      icon: `bi bi-lightbulb-fill mx-2`,
    },
    {
      text: "Forem Shop",
      icon: `bi bi-bag-fill mx-2`,
    },
    {
      text: "Sponsors",
      icon: `bi bi-heart-fill mx-2`,
    },
    {
      text: "About",
      icon: `bi bi-card-list mx-2 textHover`,
    },
    {
      text: "Contact",
      icon: `bi bi-telephone-fill mx-2 textHover`,
    },
  ],
  other: [
    {
      text: "Code of Conduct",
      icon: "bi bi-hand-thumbs-up-fill",
    },
    {
      text: "Privacy Policy",
      icon: "bi bi-emoji-sunglasses",
    },
    {
      text: "Code of Conduct",
      icon: "bi bi-eyeglasses",
    },
  ],
  socialNetworkIcons: [
    {
      text: "",
      icon: "bi bi-twitter h4 textHover p-2",
    },
    {
      text: "",
      icon: "bi bi-facebook p-2",
    },
    {
      text: "",
      icon: "bi bi-github p-2",
    },
    {
      text: "",
      icon: "bi bi-instagram p-2",
    },
    {
      text: "",
      icon: "bi bi-twitch p-2",
    },
  ],
  Icons: [
    {
      icon: "bi bi-type-bold mx-2",
    },
    {
      icon: "bi bi-type-italic mx-2",
    },
    {
      icon: "bi bi-link-45deg mx-2",
    },
    {
      icon: "bi bi-list-ol mx-2",
    },
    {
      icon: "bi bi-list-ul mx-2",
    },
    {
      icon: "bi bi-quote mx-2",
    },
    {
      icon: "bi bi-code mx-2",
    },
    {
      icon: "bi bi-code-square mx-2",
    },
    {
      icon: "bi bi-card-image mx-2",
    },
  ],
};

const userID = {
  userID: "",
};

export const AppProvider = ({ children }) => {
  const [state, setState] = useState(ArrayOne);
  const [user, setUser] = useState(userID);

  const setUserId = (user) => {
    setUser({
      userID: user,
    });
  };

  return (
    <AppContext.Provider value={{ state, user, setUserId }}>
      {children}
    </AppContext.Provider>
  );
};
