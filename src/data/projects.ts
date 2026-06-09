export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  tech?: string[];
  type?: number;
}

const data: Project[] = [
  {
    title: 'STM Step Control',
    subtitle: 'Precise Stepper Control Library',
    link: 'https://muhammadtayyab1002.github.io/STM-StepControl',
    image: '/images/projects/lead-bg.jpg',
    date: '2024-04-03',
    desc: 'Provides an easy-to-use interface for controlling stepper motors using STM microcontrollers and driver modules. It supports two pulse generation methods: - Delay-based control for precise step timing. - PWM-based control for efficient and scalable pulse output',
    tech: ['C', 'Keil IDE', 'STM32', 'BareMetal', 'Stepper', 'Motor Control'],
    type: 1,
  },
  {
    title: 'OTS Glucometer',
    subtitle: 'A Non-Invasive Glucometer (On-Going)',
    link: '',
    image: '/images/projects/OTS.jpg',
    date: '2026',
    desc: 'A blood glucose device that detects blood glucose level through light just like spO2 meters. Can be called as non invasive blood glcose detector. Over the Skin',
    tech: ['NRF', 'DSP', 'Light Specturm', 'ML', 'C', 'Regression'],
    type: 1,
  },
  {
    title: '3-Axis Stabilizer',
    subtitle: 'PCB Design',
    image: '/images/projects/PCB1.png',
    link: 'https://muhammadtayyab1002.github.io/3-Axis-Stabilizer',
    date: '2025-08-01',
    desc: 'Powered by STM32L432 ensuring top-notch low-power, high-performance control. Integration of 3-axis motor drivers for precise motion control. On-board MPU6050 IMU providing essential orientation feedback.',
    tech: ['Altium', 'PCB Layout', 'Multi Layer', 'DFM'],
    type: 2,
  },
  {
    title: 'BP Monitor POC',
    subtitle: 'Firmware & Circuit Design',
    image: '/images/projects/BP.png',
    link: 'https://muhammadtayyab1002.github.io/BP-Monitor-POC/',
    date: '2025-10-01',
    desc: 'A Blood pressure compute algorithm designed for STM32 based MCUs. Additionally Designed a minimal single layer PCB for In-House Fabrication.',
    tech: ['Altium', 'PCB Layout', 'DFM', 'STM', 'Keil', 'Filters'],
    type: 2,
  },
  {
    title: 'Thermoforming Machine',
    subtitle: 'Catheter Tip Shaping Machine',
    link: 'https://muhammadtayyab1002.github.io/Thermoforming.github.io/',
    image: '/images/projects/Thermo.png',
    date: '2024-02-15',
    desc: 'A specialized piece of equipment used in the use in early prototype shaping of catheters in Catheter Research & Development. It utilizes heat and pressure to mold catheter tip into specific shapes and designs needed. Developed at Revive Medical Technologies',
    tech: [
      'Stm32L432KC',
      'PID',
      'Thermocouple',
      'Ceramic Heaters',
      'Nextion Display',
      'State Machine',
    ],
    type: 3,
  },
  {
    title: 'Electroplating Machine',
    subtitle: 'FDM & SLA Electro Plating Machine',
    image: '/images/projects/lead.jpg',
    link: '/',
    date: '2025-04-15',
    desc: 'A specialized mahcine design to give fdm and sla prints a metallic finish. With remote monitoring and control through App & Web. Designed to give FDM and SLA prints metallic finish. Developed at IGNIUS',
    tech: ['ESP', 'Remote Monitoring', 'Altium', 'C', 'Power Management'],
    type: 3,
  },
  {
    title: 'Gesture Controlled Robot',
    subtitle: 'Department 2nd in Open House',
    link: 'https://muhammadtayyab1002.github.io/Gesture_Controlled_Robot/',
    image: '/images/projects/GCR.jpg',
    date: '2023-06-28',
    desc: 'The robotic arm moves and completes the task while the system mimics the actions of human hands. It is coded so that the expected behavior for the fatal gesture is carried out.',
    tech: [
      'Hardware',
      'Servo',
      'Arduino',
      'Robotics',
      'Computer Vision',
      'Mediapipe',
      'Wifi',
    ],
    type: 4,
  },
  {
    title: 'Wireless Control of Home Applainces',
    subtitle: 'A low cost control system from scratch',
    image: '/images/projects/WCHA.jpg',
    date: '2020-01-15',
    desc: 'We use Atmel microcontroller AT89C61 and a ULN 2003 driver. And done programming on MiKro C IDE. Use a transmitter receiver to control the relays.',
    tech: ['RF', 'Embedded', 'Atmel', 'MikroC', 'Proteus'],
    type: 4,
  },
  {
    title: 'Electric Bike',
    subtitle: '2nd in University ICAT',
    image: '/images/projects/project.jpg',
    date: '2022-04-01',
    desc: 'A Retrofitted bike on a Honda CD70 chassis. Using 1kW brushless DC motor combined with a PWM motor Controller and a 48V 20Ah Lead Acid dry cell battery pack for the power.',
    tech: ['Power management', 'Eco Friendly', 'BLDC', 'Retrofitting'],
    type: 4,
  },
];

export default data;
