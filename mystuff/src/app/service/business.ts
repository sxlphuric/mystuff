import { Injectable } from '@angular/core';
import { StuffCategory } from '../classes/stuff-category';

@Injectable({
  providedIn: 'root',
})
export class Business {
  Categories: StuffCategory[] = [
    new StuffCategory(
      "Unblocking",
      "I host a few unblocking stuff. Here are the links.",
      "",
      [
        {
          link: "https://seminaire-sherbrooke.v6.rocks",
          text: "Séminaire-Sherbrooke.V6.ROCKS"
        }
      ]),
      new StuffCategory(
      "Self-hosted",
      "Here are some few things I host on my computer.",
      "",
      [
        {
          link: "https://windows.phuri.cc",
          text: "Windows VM"
        },
        {
          link: "https://copyparty.phuri.cc",
          text: "Copyparty"
        },
      ]),
  ]
}
