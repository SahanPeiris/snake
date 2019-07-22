// Reaches out to firebase, gets game instance, serializes to json and deserialize to typescript.
import * as firebase from 'firebase';

export class GameService {
  // makes a singleton
  public static shared: GameService = new GameService();

  private readonly app: firebase.app.App;
  private db: firebase.firestore.Firestore;

  private constructor() {
    //initialize firebase client
    const firebaseConfig = {
      apiKey: 'AIzaSyDnU_bJCkrEDguaeg4J3gNtF9CzY55bVIs',
      authDomain: 'snake-c0d02.firebaseapp.com',
      databaseURL: 'https://snake-c0d02.firebaseio.com',
      projectId: 'snake-c0d02',
      storageBucket: '',
      messagingSenderId: '372245550250',
      appId: '1:372245550250:web:947a2a94370170fd'
    };
    this.app = firebase.initializeApp(firebaseConfig);
    this.db = firebase.firestore(this.app);
  }

  async getGame(id: string): Promise<any> {
    const doc = await this.db.collection('game').doc(id).get();
    return doc.data();
  }

  getGameState(): any {
  }

  addGame(game: any) {
    this.db.collection('game').add(game);
  }

  updatePlayerPosition(playerId: any, newPosition: any): Promise<any> {
    return Promise.resolve(null);
  }

  updateSnakePosition(snakeHeadPosition: any): Promise<any> {
    return Promise.resolve(null);
  }
}
