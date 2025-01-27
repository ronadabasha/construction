import { HOME, ABOUT, PROJECTS, CONTACT } from "../routes";

export type Routes = {
  label: string,
  path: string
}

export const routes: Routes[] = [
    {
      label: "Kreu",
      path: HOME,
    },
    {
      label: "Rreth nesh",
      path: ABOUT,
    },
    {
      label: "Projekte",
      path: PROJECTS,
    },
    {
      label: "Kontakt",
      path: CONTACT,
    },
]