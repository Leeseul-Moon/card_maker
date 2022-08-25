import React from "react";
import AddForm from "../addForm/add_form";
import Card from "../card/card";
import CardEditForm from "../card_edit_form/card_edit_form";
import styles from "./card_maker.module.css";

const CardMaker = ({ FileInput, cards, addCard, delCard, updateCard }) => (
  <section className={styles.cardMaker}>
    <h1 className={styles.title}>card maker</h1>
    {Object.keys(cards).map((key) => (
      <CardEditForm
        card={cards[key]}
        key={key}
        FileInput={FileInput}
        delCard={delCard}
        updateCard={updateCard}
      />
    ))}
    <AddForm FileInput={FileInput} addCard={addCard} />
  </section>
);

export default CardMaker;
