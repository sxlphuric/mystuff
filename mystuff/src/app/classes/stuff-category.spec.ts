import { linkedSignal } from '@angular/core';
import { StuffCategory } from './stuff-category';
import { Link } from './link';

const link: Link = {link: "", text: ""}

describe('StuffCategory', () => {
  it('should create an instance', () => {
    expect(new StuffCategory("","","",[link])).toBeTruthy();
  });
});
