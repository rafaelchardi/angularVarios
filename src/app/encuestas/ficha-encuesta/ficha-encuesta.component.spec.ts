import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaEncuestaComponent } from './ficha-encuesta.component';

describe('FichaEncuestaComponent', () => {
  let component: FichaEncuestaComponent;
  let fixture: ComponentFixture<FichaEncuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaEncuestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
