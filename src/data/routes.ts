import { HOME, ABOUT, PROJECTS, CONTACT } from "../routes";

export type Routes = {
  label: string,
  path: string
}

export const routes: Routes[] = [
    {
      label: "Home",
      path: HOME,
    },
    {
      label: "About Us",
      path: ABOUT,
    },
    {
      label: "Projects",
      path: PROJECTS,
    },
    {
      label: "Contact",
      path: CONTACT,
    },
]