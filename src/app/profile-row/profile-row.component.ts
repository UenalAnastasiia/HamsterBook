import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss']
})
export class ProfileRowComponent implements OnInit {
  @Input() name = 'Marcy';
  @Input() img = 'assets/img/hamster/2.jpg';
  @Input() description = '1 Jahr alt';

  constructor() { }

  ngOnInit(): void {
  }

}
