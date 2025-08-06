import { Animal } from './Animal';

export class Hamster extends Animal {
  emitirSom(): string {
    return 'ricric!';
  }

  ComerSemente() {
    return `Hum... estou de barriga cheia!`;
  }
  correr() {
    return `${this.getNome()} está correndo na roda!`;
  }
}