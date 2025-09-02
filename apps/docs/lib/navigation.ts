export type NavigationData = {
  id: number;
  title: string;
  href: string;
}[];

export const navigation: NavigationData = [
  {
    id: 1,
    title: "Documentation",
    href: "/docs",
  },
  {
    id: 2,
    title: "Components",
    href: "/docs/components",
  },
];
