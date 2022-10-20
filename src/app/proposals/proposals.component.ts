import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent implements OnInit {
  names = ['Daisy', 'Mia', 'Larissa', 'Laura'];
  texts = ['1 Jahr alt', '2 Jahr alt', 'Isst gerne Kekse', '3 Jahr alt']
  images = ['assets/img/hamster/3.jpg', 'assets/img/hamster/4.jpg', 'assets/img/hamster/5.jpg', 'assets/img/hamster/6.jpg'];

  constructor() { }

  ngOnInit(): void {
  }

}
