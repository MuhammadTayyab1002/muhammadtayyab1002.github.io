export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
  highlights?: string[];
}

const degrees: Degree[] = [
  {
    school: 'National University of Technology, Islamabad',
    degree: 'B.S. Electrical Engineering',
    link: 'https://nutech.edu.pk/',
    year: 2023,
    highlights: ['CGPA 3.28/4.0', 'Top 4 in EE-19 Batch'],
  },
];

export default degrees;
