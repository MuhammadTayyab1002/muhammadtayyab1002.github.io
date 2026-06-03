export interface Route {
  label: string;
  path: string;
  index?: boolean;
}

const routes: Route[] = [
  {
    index: true,
    label: 'Muhammad Tayyab',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Resume',
    path: '/resume',
  },
  // {
  //   label: 'Writing',
  //   path: '/writing',
  // },
  // {
  //   label: 'Stats',
  //   path: '/stats',
  // },
  {
    label: 'Contact',
    path: '/contact',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
];

export default routes;
