import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  names = [];
  texts = [];
  images = [];

  // names = ['Daisy', 'Mia', 'Larissa', 'Laura'];
  // texts = ['1 Jahr alt', '2 Jahr alt', 'Isst gerne Kekse', '3 Jahr alt']
  // images = ['assets/img/hamster/3.jpg', 'assets/img/hamster/4.jpg', 'assets/img/hamster/5.jpg', 'assets/img/hamster/6.jpg'];

  constructor() { }

  addFriend(name, text, image) {
    this.names.push(name);
    this.texts.push(text);
    this.images.push(image);
  }
}
