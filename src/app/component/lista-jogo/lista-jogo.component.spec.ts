import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaJogoComponent } from './lista-jogo.component';

describe('ListaJogoComponent', () => {
  let component: ListaJogoComponent;
  let fixture: ComponentFixture<ListaJogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaJogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
