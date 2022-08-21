import React from "react";
import Card from "../card/card";
import styles from "./card_preview.module.css";

const CardPreview = ({ cards }) => (
  <section className={styles.cardPreview}>
    <h1 className={styles.title}>card preview</h1>
    <ul className={styles.cards}>
      {cards.map((card) => (
        <Card card={card} />
      ))}
    </ul>
  </section>
);

export default CardPreview;
