import React from "react";
import Card from "../card/card";
import CardEditForm from "../card_edit_form/card_edit_form";
import styles from "./card_maker.module.css";

const CardMaker = ({ cards }) => (
  <section className={styles.cardMaker}>
    <h1 className={styles.title}>card maker</h1>
    {cards.map((card) => (
      <CardEditForm card={card} key={card.id} />
    ))}
  </section>
);

export default CardMaker;
