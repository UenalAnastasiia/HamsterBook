import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { ProfileRowComponent } from './profile-row/profile-row.component';
import { FriendBoxComponent } from './friend-box/friend-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoCardComponent,
    ProposalsComponent,
    ProfileRowComponent,
    FriendBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
