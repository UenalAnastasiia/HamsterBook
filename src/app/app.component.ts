import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  postTexts = [
    'Hallo, mein Name ist Marcy. Ich bin hier, um neue Freunde zu treffen!',
    'Hallo zusammen! Freut mich das ihr hier seid',
    'Hallo, mein Name ist Daisy. Ich esse gerne Kekse!',
    'Hallöchen, ich bin hier, um neue Freunde zu treffen, um gemeinsam Kekse zu essen!',
    'Hallo, mein Name ist Cindy. Ich suche andere Hamster, mit denen ich coden kann!',
    'Hallo zusammen! Freut mich das ihr hier seid'
  ];

  postImages = [
    'assets/img/hamster/1.jpg',
    'assets/img/hamster/2.jpg',
    'assets/img/hamster/3.jpg',
    'assets/img/hamster/4.jpg',
    'assets/img/hamster/5.jpg',
    'assets/img/hamster/6.jpg'
  ];
}
