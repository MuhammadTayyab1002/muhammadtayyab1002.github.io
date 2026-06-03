export interface Course {
  title: string;
  number: string;
  link: string;
  university: string;
}

const courses: Course[] = [
  {
    title: 'Machine Learning',
    number: 'EE4406',
    link: '/',
    university: 'NuTech',
  },
  {
    title: 'Wireless Sensor Networks',
    number: 'EE 4118',
    link: '/',
    university: 'NuTech',
  },
  {
    title: 'Robotics & Automation',
    number: 'IDE 2005',
    link: '/',
    university: 'NuTech',
  },
  {
    title: 'Data Structure & Algorithms',
    number: 'EE 2005',
    link: '/',
    university: 'Nutech',
  },
  {
    title: 'Digital Signal Processing',
    number: 'EE 3403',
    link: '/',
    university: 'NuTech',
  },
  {
    title: 'Power Electronics',
    number: 'EE 4614',
    link: '/',
    university: 'Nutech',
  },
];

export default courses;
