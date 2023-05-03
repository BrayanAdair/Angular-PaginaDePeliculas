import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PixaComponent } from './pixa/pixa.component';
import { DreamworksComponent } from './dreamworks/dreamworks.component';
import { BlumhouseComponent } from './blumhouse/blumhouse.component';
import { OfertaComponent } from './oferta/oferta.component';
import { TabsComponent } from './tabs/tabs.component';
import { ExpansionComponent } from './expansion/expansion.component';


const routes: Routes = [
  { path: 'pixar', component: PixaComponent },
  { path: 'dream', component: DreamworksComponent },
  { path: 'blum', component: BlumhouseComponent },
  { path: 'ofertas', component: OfertaComponent },
  { path: 'tab', component: TabsComponent },
  { path: 'acercade', component: ExpansionComponent, },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
