import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "example-project",
    title: "Example Project",
    description: "Краткое описание проекта",
    longDescription: "Подробное описание проекта для отдельной страницы.",
    tech: ["Python", "Django", "PostgreSQL"],
    github: "https://github.com/username/example-project",
    live: "",
    images: [],
  },
  {
    slug: "portfolio",
    title: "Portfolio",
    description: "Личный сайт портфолио для проектов",
    longDescription: "Этот сайт btw",
    tech: ["Next.js","JavaScript", "TypeScript", "Vercel", "React.js"],
    github: "https://github.com/stalmahov/portfolio",
    live: "stalmahov.ru",
    images: ["/projects/portfolio/1.png","/projects/portfolio/2.png"],
  },
];
