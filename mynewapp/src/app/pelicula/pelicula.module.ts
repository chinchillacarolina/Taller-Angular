import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculaComponent } from './pelicula.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PeliculaComponent],
  exports: [PeliculaComponent]
})
export class PeliculaModule { }
