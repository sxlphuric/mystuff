import { Injectable } from '@angular/core';
import { StuffCategory } from '../classes/stuff-category';
import type { Link } from '../classes/link';

@Injectable({
  providedIn: 'root',
})
export class Business {
  Subdomains: Link[] = [
    { link: "https://projects.phuri.cc",
      text: "Projects"
    },
    /*{ link: "https://ub.phuri.cc",
      text: "Unblocking"
    },
    { link: "https://ubg.phuri.cc",
      text: "Games"
    },*/
  ]
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
    /*new StuffCategory(
      "Unblocking",
      "I host a few unblocking stuff. Here are the links.",
      "",
      [
        {
          link: "https://seminaire-sherbrooke.v6.rocks",
          text: "UB Metadomain"
        },
        {
          link: "https://neo.ub.phuri.cc",
          text: "Neo"
        },
        {
          link: "https://galaxy.ub.phuri.cc",
          text: "GalaxyOS"
        },
        {
          link: "https://waves.ub.phuri.cc",
          text: "Waves"
        },
        {
          link: "https://afilite.ub.phuri.cc",
          text: "AfiliteOS"
        },
      ]),
    new StuffCategory(
      "Games",
      "Here are a few games.",
      "",
      [
        {
          link: "https://sandboxels.ubg.phuri.cc",
          text: "Sandboxels"
        },
        {
          link: "https://snake.ubg.phuri.cc",
          text: "Google Snake Mods"
        },
        {
          link: "https://pixel12.ubg.phuri.cc",
          text: "Pixel Client 1.12.2"
        },
      ]),*/
    new StuffCategory(
      "Self-hosted",
      "Here are some few things I host on my computer.",
      "",
      [
        {
          link: "https://windows.phuri.cc",
          text: "Windows VM (Not in service)"
        },
      ]),
    /*new StuffCategory(
      "Random stuff",
      "I put random bs here",
      "Warning: If you enable pop-ups on the 'Mangoes' website, it WILL spawn multiple windows of google searches of mangoes.",
      [
        {
          link: "https://mangos.phuri.cc",
          text: "Mangoes"
        },
      ]),*/
    new StuffCategory(
      "Projects",
      "Here are some personal projects.",
      "",
      [
        {
          link: "https://timetable.phuri.cc",
          text: "School timetable"
        },
        {
          link: "https://cars-test.projects.phuri.cc",
          text: "People and cars"
        },
        {
          link: "https://number-guess.projects.phuri.cc",
          text: "Number guess"
        },
        {
          link: "https://food-test.projects.phuri.cc",
          text: "Food information"
        },
        {
          link: "https://oldwebsite.projects.phuri.cc",
          text: "My 'old' website"
        },
        {
          link: "https://adrouter.projects.phuri.cc",
          text: "Adrouter"
        },
        {
          link: "https://burstnews.projects.phuri.cc",
          text: "BURST news"
        },
      ])
  ]
}
