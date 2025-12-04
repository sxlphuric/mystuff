import { Injectable } from '@angular/core';
import { StuffCategory } from '../classes/stuff-category';

@Injectable({
  providedIn: 'root',
})
export class Business {
  Categories: StuffCategory[] = [
    new StuffCategory(
      "Social",
      "These are links to some of my social handles.",
      "",
      [
        {
          link: "https://github.com/sxlphuric",
          text: "Github"
        },
        {
          link: "https://tiktok.com/@sxlphuric",
          text: "Tiktok"
        },
        {
          link: "https://bento.me/sxlphuric",
          text: "Bento"
        },
        {
          link: "https://discord.com/users/803002209934508082",
          text: "Discord"
        },
      ]),
    new StuffCategory(
      "Unblocking",
      "I host a few unblocking stuff. Here are the links.",
      "",
      [
        {
          link: "https://seminaire-sherbrooke.v6.rocks",
          text: "UB Metadomain"
        },
        {
          link: "https://snake.phuri.cc",
          text: "Google Snake Mods Instance"
        },
      ]),
      new StuffCategory(
      "Self-hosted",
      "Here are some few things I host on my computer.",
      "",
      [
        {
          link: "https://windows.phuri.cc",
          text: "Windows VM (Not in service)"
        },
        {
          link: "https://copyparty.phuri.cc",
          text: "Copyparty"
        },
      ]),
    new StuffCategory(
      "Unblocking",
      "I host a few unblocking stuff. Here are the links.",
      "",
      [
        {
          link: "https://seminaire-sherbrooke.v6.rocks",
          text: "UB Metadomain"
        },
        {
          link: "https://snake.phuri.cc",
          text: "Google Snake Mods Instance"
        },
      ]),
    new StuffCategory(
      "Random stuff",
      "I put random bs here",
      "Warning: If you enable pop-ups on the 'Mangoes' website, it WILL spawn multiple windows of google searches of mangoes.",
      [
        {
          link: "https://mangos.phuri.cc",
          text: "Mangoes"
        },
      ]),
  ]
}
