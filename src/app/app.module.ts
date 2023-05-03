import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    CardComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
