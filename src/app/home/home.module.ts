import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", // /home geldiği zaman direkt bu çalışsın diyorum.
  component:HomeComponent
  },
];

@NgModule({
  declarations: [HomeComponent], //Burada home component kullanacaım için buraya import ettim
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // burası artık forRoot değil forChild olacak.
  ]
})
export class HomeModule { }
