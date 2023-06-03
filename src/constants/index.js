import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  java,
  html,
  opencv,
  mediapipe,
  css,
  uoh,
  nvidia,
  micro,
  reactjs,
  c,
  sklearn,
  pytorch,
  keras,
  cplus,
  python,
  webdev,
  yrc,
  redux,
  tailwind,
  airbnb,
  uvj,
  tensorflow,
  nodejs,
  intel,
  mongodb,
  ml,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  signlang,
  jobit,
  tripguide,
  car,
  snake,
  tumor,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning",
    icon: web,
  },
  {
    title: "Deep Learning",
    icon: backend,
  },
  {
    title: "UX/UI Developer",
    icon: mobile,
  },
  {
    title: "React Native Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "tensorflow",
    icon: tensorflow,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "opencv",
    icon: opencv,
  },
  {
    name: "mediapipe",
    icon: mediapipe,
  },
  {
    name: "c",
    icon: c,
  },
  {
    name: "cplus",
    icon: cplus,
  },
  
  {
    name: "java",
    icon: java,
  },
  {
    name: "Html",
    icon: html,
  },
  {
    name: "css",
    icon: css,
  },
  {
    name: "javascript",
    icon: javascript,
  },
  
  {
    name: "Three JS",
    icon: threejs,
  },
  
  {
    name: "tailwindcss",
    icon: tailwind,
  },
  {
    name: "react",
    icon: reactjs,
  },
  // {
  //   name: "nodejs",
  //   icon: nodejs,
  // },
  
  
];

const experiences = [
  {
    title: "Web Development",
    company_name: "Online Courses and Projects",
    icon: webdev,
    iconBg: "#383E56",
    date: "June 2020 - July 2021",
    points: [
      "Enrolled in web development bootcamps and online courses, acquiring practical knowledge and skills in building landing pages and mastering web development fundamentals.",
      "Explored and learned React and other frameworks, applying them effectively in personal projects.",
      "Developed personalized web applications using technologies like React, Next.js, Three.js, etc., including projects such as an Airbnb clone and an Uber app.",
    ],
  },
  {
    title: "Machine learning",
    company_name: "Online Courses and Projects",
    icon: ml,
    iconBg: "#E6DEDD",
    date: "July 2021 - May 2022",
    points: [
      "Initiated the development of machine learning projects, leveraging Kaggle as a valuable resource and guide.",
      "Enrolled in Machine learning courses such as Andrew Ng's Machine Learning course and used MIT's 6.S191 videos.",
      "Collaborated with cross-functional teams, including fellow students, to collectively build high-quality machine learning models.",
      "Successfully completed multiple projects and various courses on platforms such as Coursera and Udemy.",
      "Participated in the Intel Unnithi Grand Challenge, showcasing skills and expertise in the field.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "UVJ Technologies Pvt. Ltd.",
    icon: uvj,
    iconBg: "#383E56",
    date: "June 2022 - July 2022",
    points: [
      "Led an internship  project team of four to identify Brain Tumors from MRI scans using Keras and OpenCV.",
      "Collaborated with team members to develop a classification model using the Br35H Dataset from Kaggle.",
      "Implemented a Sequential CNN model using Tensorflow and trained it on the dataset until achieving satisfactory accuracy and performance.",
      "Integrated the trained model into a web application and utilized Flask for its implementation.",
    ],
  },
  {
    title: "Intel Equipithon",
    company_name: "Intel",
    icon: intel,
    iconBg: "#E6DEDD",
    date: "Fed 2023 - May 2023",
    points: [
      "Engaged in the Intel Equipithon Challenge alongside a four-person team, focused on creating machine learning solutions for Assistive Technologies.",
      "Developed a real-time model for translating Sign Language into Text.",
      "Formulated a novel project proposal for a system that integrates Sign Language recognition with emotion recognition, enabling Speech Generation.",
      "Participated in code reviews, proposed the project plan, and delivered presentations to faculties and professors.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "The Microsoft AI-900 certification provides a foundational understanding of artificial intelligence (AI) concepts.",
    name: "AI-900",
    designation: "Microsoft ,",
    company: "November 2022",
    image: micro,
  },
  {
    testimonial:
      "The Nvidia Deep Learning certification equips individuals with the skills to utilize deep learning techniques and technologies",
    name: "Deep Learning",
    designation: "Nvidia ,",
    company: "August 2022",
    image: nvidia,
  },
  {
    testimonial:
      "Provides a comprehensive introduction to the fundamental concepts of artificial intelligence",
    name: "Elements of AI",
    designation: "University of Helsinki",
    company: "Januray 2022",
    image: uoh,
  },
];

const projects = [
  {
    name: "Sign Language Transition",
    description:
      "Translating videos of people talking in sign language to real time text using LSTM and action recognition in Tensorflow.",
    tags: [
      {
        name: "Tensorflow",
        color: "orange-text-gradient",
      },
      {
        name: "mediapipe",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "yellow-text-gradient",
      },
    ],
    image: signlang,
    source_code_link: "https://github.com/jubaljacob/Sign_language_translation",
  },
  {
    name: "Ai Snake Game",
    description:
      "The objective of this project is to create an AI which is taught using Reinforcement Learning and Deep Q Learning to play the classic snake game by itself.",
    tags: [
      {
        name: "pytorch",
        color: "pink-text-gradient",
      },
      {
        name: "pygame",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "yellow-text-gradient",
      },
    ],
    image: snake,
    source_code_link: "https://github.com/jubaljacob/aI_snakegame/tree/main",
  },
  {
    name: "Brain Tumor Detection",
    description:
      "A project to identify if an MRI scan of the brain contains presences of brain tumor using Tensorflow sequential model and OpenCV.",
    tags: [
      {
        name: "Tensorflow",
        color: "orange-text-gradient",
      },
      {
        name: "python",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
    ],
    image: tumor,
    source_code_link: "https://github.com/jubaljacob/Brain_tumor_detection",
  },
  {
    name: "Auto Drive",
    description:
      "This project demonstrates real-time car and pedestrian detection using Python, Mediapipe, Haar cascades, and OpenCV. The combination of these technologies allows us to identify and track vehicles and pedestrians in a video stream or from a webcam.",
    tags: [
      {
        name: "OpenCV",
        color: "pink-text-gradient",
      },
      {
        name: "python",
        color: "orange-text-gradient",
      },
    ],
    image: car,
    source_code_link: "https://github.com/jubaljacob/Car_Detection",
  },
  {
    name: "Airbnb Project",
    description:
      "This project is an Airbnb clone built using Next.js, TypeScript, Tailwind CSS. It aims to recreate the user interface and functionality of the popular Airbnb website. ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: airbnb,
    source_code_link: "https://github.com/jubaljacob/airbnb_project/tree/main",
  },
];

export { services, technologies, experiences, testimonials, projects };