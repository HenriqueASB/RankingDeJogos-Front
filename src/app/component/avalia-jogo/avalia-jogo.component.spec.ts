import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliaJogoComponent } from './avalia-jogo.component';

describe('AvaliaJogoComponent', () => {
  let component: AvaliaJogoComponent;
  let fixture: ComponentFixture<AvaliaJogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliaJogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliaJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
