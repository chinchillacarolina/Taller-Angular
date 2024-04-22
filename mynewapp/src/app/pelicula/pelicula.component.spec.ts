/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';
import { PeliculaComponent } from './pelicula.component';
import { PeliculaService } from './pelicula.service';
import { Pelicula } from './pelis';

describe('BookListComponent', () => {
 let component: PeliculaComponent;
 let fixture: ComponentFixture<PeliculaComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ PeliculaComponent ],
     providers: [ PeliculaService ]
   })
   .compileComponents();
 }));


 beforeEach(() => {
   fixture = TestBed.createComponent(PeliculaComponent);
   component = fixture.componentInstance;
   component.peliculas = [
     new Pelicula(faker.number.int(), faker.person.fullName(), faker.lorem.sentence(), faker.number.int(), faker.lorem.sentence(), faker.lorem.sentence(),faker.lorem.sentence())
   ]

   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it("Component has a table", () => {
   expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
 });

 it('should have an dd element ', () => {
   const dd = debug.query(By.css('dd'));
   const content: HTMLElement = dd.nativeElement;
   expect(content.textContent).toEqual(component.peliculas[0].name)
 });


});