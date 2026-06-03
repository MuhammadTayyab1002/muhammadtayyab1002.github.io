import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://www.linkedin.com/in/muhammadtayyab1002',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://github.com/MuhammadTayyab1002',
    label: 'Github',
    icon: faGithub,
  },
  // {
  //   link: 'https://x.com/dangelosaurus',
  //   label: 'X',
  //   icon: faTwitter,
  // },
  // {
  //   link: 'https://angel.co/michael-d-angelo',
  //   label: 'Angel List',
  //   icon: faAngellist,
  // },
  // {
  //   link: 'https://www.instagram.com/dangelosaurus/',
  //   label: 'Instagram',
  //   icon: faInstagram,
  // },
  // {
  //   link: 'https://facebook.com/d',
  //   label: 'Facebook',
  //   icon: faFacebookF,
  // },
  {
    link: 'mailto:m.tayyabtahir1002@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
