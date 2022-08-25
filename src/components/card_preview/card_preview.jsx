import React from "react";
import Card from "../card/card";
import styles from "./card_preview.module.css";

const CardPreview = ({ cards }) => (
  <section className={styles.cardPreview}>
    <h1 className={styles.title}>card preview</h1>
    <ul className={styles.cards}>
      {Object.keys(cards).map((key) => (
        <Card card={cards[key]} key={key} />
      ))}
    </ul>
  </section>
);

export default CardPreview;
