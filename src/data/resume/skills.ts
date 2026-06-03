export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
  /** Pre-computed text color for contrast - 'dark' for light backgrounds, 'light' for dark */
  textColor: 'dark' | 'light';
}

const skills: Skill[] = [
  // Languages
  {
    title: 'Python',
    competency: 3,
    category: ['Languages', 'ML Engineering', 'Firmware Development'],
  },
  {
    title: 'C',
    competency: 4,
    category: ['Languages', 'Firmware Development'],
  },
  {
    title: 'C++',
    competency: 4,
    category: ['Languages', 'Firmware Development'],
  },
  {
    title: 'Embedded C',
    competency: 4,
    category: ['Languages', 'Firmware Development'],
  },
  //
  {
    title: 'Embedded Systems',
    competency: 4.5,
    category: ['Firmware Development'],
  },
  {
    title: 'STM32',
    competency: 4,
    category: ['Firmware Development'],
  },
  {
    title: 'FreeRTOS',
    competency: 3.5,
    category: ['Firmware Development'],
  },
  {
    title: 'Bare-Metal Programming',
    competency: 4,
    category: ['Firmware Development'],
  },
  {
    title: 'Device Driver Development',
    competency: 3.5,
    category: ['Firmware Development'],
  },
  {
    title: 'UART',
    competency: 4.5,
    category: ['Firmware Development'],
  },
  {
    title: 'SPI',
    competency: 4,
    category: ['Firmware Development'],
  },
  {
    title: 'I2C',
    competency: 4,
    category: ['Firmware Development'],
  },
  {
    title: 'USB',
    competency: 3,
    category: ['Firmware Development'],
  },
  {
    title: 'BLE',
    competency: 2.5,
    category: ['Firmware Development'],
  },
  {
    title: 'Firmware Debugging',
    competency: 4,
    category: ['Firmware Development'],
  },
  {
    title: 'JTAG/SWD Debugging',
    competency: 4,
    category: ['Firmware Development'],
  },
  {
    title: 'Interrupt Programming',
    competency: 4,
    category: ['Firmware Development'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Firmware Development', 'ML Engineering'],
  },
  // AI & LLM
  {
    title: 'AI Agents',
    competency: 1.5,
    category: ['ML Engineering'],
  },
  {
    title: 'Prompt Engineering',
    competency: 2.5,
    category: ['ML Engineering'],
  },
  {
    title: 'PyTorch',
    competency: 3,
    category: ['ML Engineering'],
  },
  {
    title: 'Pandas',
    competency: 2.5,
    category: ['ML Engineering'],
  },
  {
    title: 'OpenCV',
    competency: 3,
    category: ['ML Engineering'],
  },
  // Web Development
  {
    title: 'HTML',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'JavaScript',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'CSS',
    competency: 2,
    category: ['Web Development'],
  },
  // PCB
  {
    title: 'Altium Designer',
    competency: 3.5,
    category: ['Schematic & PCB Design'],
  },
  {
    title: 'Multisim',
    competency: 3,
    category: ['Schematic & PCB Design'],
  },
  {
    title: 'Schematic Capture',
    competency: 4,
    category: ['Schematic & PCB Design'],
  },
  {
    title: 'PCB Layout Design',
    competency: 4,
    category: ['Schematic & PCB Design'],
  },
  {
    title: 'Multi-layer PCB Design',
    competency: 3,
    category: ['Schematic & PCB Design'],
  },
  {
    title: 'Signal Integrity',
    competency: 2.5,
    category: ['Schematic & PCB Design'],
  },
  {
    title: 'Power Integrity',
    competency: 3,
    category: ['Schematic & PCB Design'],
  },
  {
    title: 'Circuit Simulation',
    competency: 3.5,
    category: ['Schematic & PCB Design'],
  },
  {
    title: 'Design for Manufacturability (DFM)',
    competency: 3,
    category: ['Schematic & PCB Design'],
  },
  {
    title: 'EMI/EMC Design',
    competency: 2.5,
    category: ['Schematic & PCB Design'],
  },
  {
    title: 'Analog Circuit Design',
    competency: 3.5,
    category: ['Schematic & PCB Design'],
  },
  {
    title: 'Digital Circuit Design',
    competency: 4,
    category: ['Schematic & PCB Design'],
  },
  {
    title: 'Power Supply Design',
    competency: 3,
    category: ['Schematic & PCB Design'],
  },
  {
    title: 'Microcontroller Hardware Design',
    competency: 4,
    category: ['Schematic & PCB Design', 'Firmware Development'],
  },
  {
    title: 'BOM Generation & Manufacturing Documentation',
    competency: 3.5,
    category: ['Schematic & PCB Design'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

/**
 * Category colors with pre-computed text contrast.
 * Uses CSS custom properties defined in tailwind.css for runtime styling,
 * with textColor pre-computed from the hex values for accessibility.
 *
 * Hex values from tailwind.css @theme block:
 * --color-skill-1: #6968b3, --color-skill-2: #37b1f5, --color-skill-3: #40494e
 * --color-skill-4: #515dd4, --color-skill-5: #e47272, --color-skill-6: #cc7b94
 */
const CATEGORY_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: 'var(--color-skill-1)', textColor: 'light' }, // #6968b3 - dark bg
  { color: 'var(--color-skill-2)', textColor: 'dark' }, // #37b1f5 - light bg
  { color: 'var(--color-skill-3)', textColor: 'light' }, // #40494e - dark bg
  { color: 'var(--color-skill-4)', textColor: 'light' }, // #515dd4 - dark bg
  { color: 'var(--color-skill-5)', textColor: 'dark' }, // #e47272 - light bg
  { color: 'var(--color-skill-6)', textColor: 'dark' }, // #cc7b94 - light bg
];

// Fallback colors for categories beyond the predefined set (with pre-computed contrast)
const FALLBACK_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: '#3896e2', textColor: 'dark' },
  { color: '#c3423f', textColor: 'light' },
  { color: '#d75858', textColor: 'light' },
  { color: '#747fff', textColor: 'light' },
  { color: '#64cb7b', textColor: 'dark' },
];

/**
 * Build categories from skills with type-safe color assignment.
 * Logs a warning in development if there are more categories than colors.
 */
function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort();

  const allColors = [...CATEGORY_COLORS, ...FALLBACK_COLORS];

  if (
    process.env.NODE_ENV === 'development' &&
    uniqueCategories.length > allColors.length
  ) {
    console.warn(
      `[skills.ts] Warning: ${uniqueCategories.length} categories but only ${allColors.length} colors defined`,
    );
  }

  return uniqueCategories.map((category, index) => {
    const colorConfig = allColors[index] ?? {
      color: '#888888',
      textColor: 'light' as const,
    };
    return {
      name: category,
      color: colorConfig.color,
      textColor: colorConfig.textColor,
    };
  });
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };
