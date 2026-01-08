import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subdomains } from './subdomains';

describe('Subdomains', () => {
  let component: Subdomains;
  let fixture: ComponentFixture<Subdomains>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subdomains]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subdomains);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
