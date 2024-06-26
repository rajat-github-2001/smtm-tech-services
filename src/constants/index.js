import { flowvity, destack, mealPrep, sanuDigital, npstocks, onlineKhabar } from "../assets/icons";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  bgImage1,
  bgImage2,
  bgImage3,
  bgImage4,
}
  from '../assets/images';

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#our-process", label: "Our Process" },
  { href: "#footer", label: "Contact Us" },
]

export const heroText = {
  heading1: 'On Day 1',
  heading2: 'Anything Is Possible',
  heading3: 'On Day 1 Anything Is Possible',
  description: "We are a tech company that provides the necessary building blocks to bring your ideas to life. Our secret sauce? Pouring our hearts into crafting projects that scream 'wow'! With a team of dedicated geniuses, we're all about delivering top-notch solutions that dance to the beat of your business drum.",
  share: 'Share your awesome idea with us',
}

export const clientIcons = [
  {
    icon: destack,
    name: 'destack',
  },
  {
    icon: onlineKhabar,
    name: 'onlineKhabar',
  },
  {
    icon: sanuDigital,
    name: 'sanuDigital',
  },
  {
    icon: mealPrep,
    name: 'mealPrep',
  },
  {
    icon: npstocks,
    name: 'npstocks',
  },
  {
    icon: flowvity,
    name: 'flowvity',
  },
];

export const ourServicesText = {
  title: 'Our Services',
  description: 'For established businesses and start ups we provide the following services',
};

export const services = [
  {
    title: 'Mobile App Development',
    description: 'From Design, Development to Launch.',
    tags: ['React Native', 'Flutter'],
    image: bgImage1,
  },
  {
    title: 'Web Development',
    description: 'Responsive web design for the new age consumers',
    tags: ['ReactJS', 'NodeJs', 'Framer'],
    image: bgImage2,
  },
  {
    title: 'UI/UX',
    description: 'We do our best to provide our clients a custom and functional design that stands out from the crowd ',
    tags: ['Figma', 'Spline'],
    image: bgImage4,
  },
  {
    title: 'Support',
    description: 'From front end to back end, we provide continual support to your core development team on need basis. ',
    tags: ['Front End', 'Back End'],
    image: bgImage3,
  },
];

export const workText = {
  title: 'Some glimpses of our work'
}

export const workImages = [
  {
    image: image1,
  },
  {
    image: image2,
  },
  {
    image: image3,
  },
  {
    image: image4,
  },
  {
    image: image5,
  },
  {
    image: image6,
  },
  {
    image: image7,
  },
  {
    image: image8,
  },
  {
    image: image9,
  },
  {
    image: image10,
  },
];

export const ourProcessText = {
  title: 'Our Process',
  description: "Creating something that's as smooth as a jazz tune and bug-free is like baking a perfect cake—it takes time, patience, and a sprinkle of magic. Our approach is like crafting a masterpiece, ensuring our clients get the exact level of engagement they crave. While our talented team works on your project, a dedicated project lead will be your VIP guide through this adventure!"
};

export const processes = [
  {
    title: 'Initial Consultation',
    description: 'You guide us through your vision, goals, requirements for the project. We will pick your brain and solidify a checklist of everything you want.'
  },
  {
    title: 'Framework',
    description: 'In this phase we will lock in the design and scope to start development work.',
    points: ['Functionality and content', 'Wireframe', 'Integration with existing digital platform']
  },
  {
    title: 'Development',
    description: 'Our team of developers will start on the finalised designs. Developer will start on bringing the UI to life, while our backend developers will design and develop the necessary database and apis.'
  },
  {
    title: 'Testing and Pilot',
    description: 'Once the beta version of the product is ready,  rigorous testing and QA will be performed by the team. We will then proceed to bring in a small group of intended users to test and provide feedback. Based on the changes required we will proceed with final launch of the product'
  },
  {
    title: 'Deployment and Support',
    description: 'Product is launched to final users. Source code and other assets are handed over to you. This is when our support period starts to ensure app operates as it should.'
  },
];

export const ourTechStacksText = {
  title: 'Our Current Tech Stacks',
}

export const techStacksData = [
  {
    title: "Frontend",
    list: ['JavaScript', 'Next.js', 'React', 'Vue.js', 'Flutter', 'React Native']
  },
  {
    title: 'Backend',
    list: ['Java', 'Scala', 'node.js', 'Spring', 'Express.js', 'FastAPI']
  },
  {
    title: 'Database',
    list: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
  },
  {
    title: 'Data Pipelines/ Automation',
    list: ['Apache Airflow', 'python', 'Flowable']
  },
  {
    title: 'Systems',
    list: ['Kubernets', 'Ansible', 'Amazon web services', 'Microsoft Azure', 'Docker', 'Github Actions']
  }
];

export const footerText = {
  title: "Let's get talking",
  description: 'For the last 10 years we’ve worked with Financial Institutions, Startups, Media. Let us know what we will be working on next together.'
}
