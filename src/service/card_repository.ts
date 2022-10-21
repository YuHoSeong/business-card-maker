import { remove, ref, set, onValue, off } from 'firebase/database';
import { firebaseDatabase } from './firebase';
import { card } from '../data/cards';

export type cardRepo = {
  saveCard(userId: string, card: card): void;
  removeCard(userId: string, card: card): void;
  asyncCard(userId: string, onUpdate: Function): () => void;
};

class CardRepository {
  saveCard(userId: string, card: card) {
    set(ref(firebaseDatabase, `${userId}/cards/${card.id}`), card);
  }

  removeCard(userId: string, card: card) {
    remove(ref(firebaseDatabase, `${userId}/cards/${card.id}`));
  }

  asyncCard(userId: string, onUpdate: Function) {
    const cardRef = ref(firebaseDatabase, `${userId}/cards`);
    onValue(cardRef, (snapshot) => {
      const data = snapshot.val();
      data && onUpdate(data);
    });
    return () => off(cardRef);
  }
}

export default CardRepository;
