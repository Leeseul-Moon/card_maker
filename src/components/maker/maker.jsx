import React, { useEffect, useState } from "react";
import { mockComponent } from "react-dom/test-utils";
import { useNavigate } from "react-router-dom";
import CardMaker from "../card_maker/card_maker";
import CardPreview from "../card_preview/card_preview";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "moon",
      company: "samsung",
      job: "Software Engineer",
      email: "leeseul@gamil.com",
      memo: "Don't forget to code your dream",
      photo: "lalalal",
      photoURL: null,
      theme: "dark",
    },
    {
      id: "2",
      name: "kang",
      company: "Uber",
      job: "Engineer",
      email: "kang@gamil.com",
      memo: "love you",
      photo: "lalalal",
      photoURL: "lalala.png",
      theme: "light",
    },
    {
      id: "3",
      name: "June",
      company: "Instagram",
      job: "Manager",
      email: "June@gamil.com",
      memo: "I will get you",
      photo: "lalalal",
      photoURL: null,
      theme: "colorful",
    },
  ]);
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <section className={styles.maker}>
      <Header className={styles.header} onLogout={onLogout} />
      <div className={styles.cards}>
        <CardMaker
          className={styles.cardMaker}
          cards={cards}
          addCard={addCard}
        />
        <CardPreview className={styles.cardPreview} cards={cards} />
      </div>
      <Footer className={styles.footer} />
    </section>
  );
};

export default Maker;
