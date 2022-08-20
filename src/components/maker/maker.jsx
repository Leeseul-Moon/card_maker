import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardMaker from "../card_maker/card_maker";
import CardPreview from "../card_preview/card_preview";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
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

  return (
    <section className={styles.maker}>
      <Header className={styles.header} onLogout={onLogout} />
      <div className={styles.cards}>
        <CardMaker className={styles.cardMaker} />
        <CardPreview className={styles.cardPreview} />
      </div>
      <Footer className={styles.footer} />
    </section>
  );
};

export default Maker;
