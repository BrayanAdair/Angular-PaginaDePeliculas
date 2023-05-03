import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { DreamworksComponent } from './dreamworks/dreamworks.component';
import { BlumhouseComponent } from './blumhouse/blumhouse.component';
import { PixaComponent } from './pixa/pixa.component';
import { OfertaComponent } from './oferta/oferta.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TabsComponent } from './tabs/tabs.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table'; 
import { NgxPaginationModule } from 'ngx-pagination';
import { ExpansionComponent } from './expansion/expansion.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule  } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule  } from '@angular/material/datepicker';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    CardComponent,
    FooterComponent,
    DreamworksComponent,
    BlumhouseComponent,
    PixaComponent,
    OfertaComponent,
    TabsComponent,
    ExpansionComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatTabsModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatCardModule,
    MatTableModule,
    NgxPaginationModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatDividerModule,
    MatGridListModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
