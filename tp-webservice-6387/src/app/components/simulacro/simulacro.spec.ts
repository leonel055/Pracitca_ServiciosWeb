import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Simulacro } from './simulacro';

describe('Simulacro', () => {
  let component: Simulacro;
  let fixture: ComponentFixture<Simulacro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Simulacro],
    }).compileComponents();

    fixture = TestBed.createComponent(Simulacro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
