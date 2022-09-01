// import { getDatabase, ref, set, remove } from "firebase/database";

import firebaseApp from "./firebase";

// class CardRepository {
//   saveCard(userId, card) {
//     const db = getDatabase();
//     set(ref(db, `${userId}/cards/${card.id}`), card);
//   }

//   removeCard(userId, card) {
//     const db = getDatabase();
//     const cardRef = ref(db, `${userId}/cards/${card.id}`);
//     remove(cardRef);
//   }
// }

class CardRepository {
  syncCards(userId, onUpdate) {
    const ref = firebaseApp.database().ref(`${userId}/cards`);
    ref.on("value", (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }

  saveCard(userId, card) {
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
  }

  removeCard(userId, card) {
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
  }
}

export default CardRepository;
