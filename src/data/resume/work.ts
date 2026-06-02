/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'IGNIUS',
    position: 'Embedded Systems Engineer',
    url: 'https://www.ignius.tech/',
    startDate: '2025-03-01',
    endDate: '2025-06-15',
    summary: `A highly equipped engineering and digital fabrication facility—headquartered in Bath, UK, 
    with its main manufacturing facility in Rawalpindi, Pakistan.`,
    highlights: [
      'Developed and deployed embedded firmware and automation workflows for a 3D printing farm, improving operational efficiency by ~20%',
      'Implemented IoT-based monitoring and predictive maintenance, reducing print failures and material wastage.',
      'Designed embedded control systems for printer coordination, job scheduling, and filament tracking, enabling scalable farm operations.',
      'Streamlined inventory and consumption tracking, supporting cost forecasting, procurement & planning',
    ],
  },
  {
    name: 'Revive Medical Technologies',
    position: 'Technical Project Manager',
    url: 'https://rmt-usa.com/',
    startDate: '2024-12-17',
    endDate: '2025-02-28',
    summary: `Revive Medical Technologies Inc. was founded in 2023 with a bold vision—to streamline and accelerate the journey 
    from concept to commercialization for medical innovations.`,
    highlights: [
      'Managed end-to-end execution of 10+ medical and electromechanical projects, ensuring on-time delivery and alignment with regulatory and business objectives.',
      'Authored and maintained technical documentation including Development Plans, Change Management Forms, and design records.',
      'Acted as the primary technical liaison between firmware, electronics, mechanical, and software teams, reducing cross-team delays.',
      'Led project planning, procurement coordination, and client-facing technical discussions.',
      'Cleared a backlog of 20+ stalled projects by restructuring priorities and workflows. ',
    ],
  },
  {
    name: 'Revive Medical Technologies',
    position: 'Embedded Systems Engineer',
    url: 'https://rmt-usa.com/',
    startDate: '2024-04-01',
    endDate: '2025-02-28',
    highlights: [
      'Led and successfully delivered 4+ complete machine development projects as Team Lead, overseeing firmware, electronics, GUI development, and cross-functional coordination from concept to deployment. ',
      'Designed and implemented firmware architectures on STM32 (F4/L4 series) for real-time control systems.',
      'Developed GUI-based HMIs (DWIN, PyQt) to improve usability and operator efficiency. ',
      'Supervised PCB schematic design, debugging, and hardware validation, reducing rework cycles.',
      'Mentored junior engineers, accelerating onboarding and improving firmware quality.',
    ],
  },
  {
    name: 'Revive Medical Technologies',
    position: 'Trainee Engineer',
    url: 'https://rmt-usa.com/',
    startDate: '2024-01-01',
    endDate: '2024-03-31',
    highlights: [
      'Developed embedded firmware modules for production systems.',
      'Designed and optimized PCB layouts, improving signal integrity and manufacturability.',
      'Assisted in circuit design, prototyping, and testing.',
    ],
  },
  {
    name: 'Revive Medical Technologies',
    position: 'Embedded Systems Engineer Intern',
    url: 'https://rmt-usa.com/',
    startDate: '2023-11-01',
    endDate: '2023-12-31',
    highlights: [
      'Gained hands-on experience with STM32 microcontrollers and Keil IDE.',
      'Developed Nextion-based HMIs integrated with embedded firmware for industrial use.',
    ],
  },
  {
    name: 'Netkom Technologies',
    position: 'MBB Intern',
    url: 'https://netkom.com.pk/',
    startDate: '2023-08-17',
    endDate: '2023-10-31',
    summary: `Providing NSS, BSS & POWER equipment, Enterprise Solutions, Network designing, network construction, 
    civil works, supply of testing equipment.`,
    highlights: [
      'CAD Designing of Telecom sites for Huawei.',
      'Designed Telecom sites of South Africa Telecom Company RAIN.',
      'Designed Telecom sites of Kazakhstan Telecom Company.',
      'Proposed new Antennas.',
    ],
  },
  {
    name: 'IESCO',
    position: 'Summer Intern',
    url: 'https://iesco.com.pk/',
    startDate: '2022-09-01',
    endDate: '2022-10-31',
    summary:
      'IESCO is responsible for the supply, distribution, and sale of electricity across its jurisdiction, spanning from Attock to Jhelum and from the Indus River to the Neelum River in Kashmir.',
    highlights: [
      'Working of a Grid station.',
      'Handling different situations for uninterrupted service.',
    ],
  },
];

export default work;
