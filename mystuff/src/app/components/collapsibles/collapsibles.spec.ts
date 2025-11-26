import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Collapsibles } from './collapsibles';

describe('Collapsibles', () => {
  let component: Collapsibles;
  let fixture: ComponentFixture<Collapsibles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Collapsibles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Collapsibles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
