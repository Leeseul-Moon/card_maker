import React from "react";
import AddForm from "../addForm/add_form";
import Card from "../card/card";
import CardEditForm from "../card_edit_form/card_edit_form";
import styles from "./card_maker.module.css";

const CardMaker = ({ cards, addCard }) => (
  <section className={styles.cardMaker}>
    <h1 className={styles.title}>card maker</h1>
    {cards.map((card) => (
      <CardEditForm card={card} key={card.id} />
    ))}
    <AddForm addCard={addCard} />
  </section>
);

export default CardMaker;
