import { getDatabase, remove, ref, set, onValue, off } from 'firebase/database';
import { card } from '../data/cards';

export type cardRepo = {
  saveCard(userId: string, card: card): void;
  removeCard(userId: string, card: card): void;
  asyncCard(userId: string, onUpdate: Function): () => void;
};

class CardRepository {
  saveCard(userId: string, card: card) {
    const db = getDatabase();
    set(ref(db, `${userId}/cards/${card.id}`), card);
  }

  removeCard(userId: string, card: card) {
    const db = getDatabase();
    remove(ref(db, `${userId}/cards/${card.id}`));
  }

  asyncCard(userId: string, onUpdate: Function) {
    const db = getDatabase();
    const cardRef = ref(db, `${userId}/cards`);
    onValue(cardRef, (snapshot) => {
      const data = snapshot.val();
      data && onUpdate(data);
    });
    return () => off(cardRef);
  }
}

export default CardRepository;
