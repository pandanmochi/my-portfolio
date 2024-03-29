import * as Si from 'react-icons/si'

export const projects = [
  {
    title: 'Data Synthesizer',
    description:
      "For my Bachelor thesis I developed a data synthesizer for generating single tabular data. To do this, I have built a Bayesian network of the statistical attributes of the table's columns and their codependencies. New data was then generated from this network by sampling values for each node, taking into account the distribution of its associated node(s).",
    image: './cockroach_eating.gif',
    link: 'https://github.com/pandanmochi/UDDataSynthesis',
  },
  {
    title: 'This Portfolio Website',
    description:
      'In my second term, I initially wrote this website in pure HTML and CSS. Later I migrated the code into React and Tailwind. The illustrations are drawn by me.',
    image: './portfolio.gif',
    link: 'https://github.com/pandanmochi/my-portfolio',
  },
  {
    title: 'Sheets Fruit and Email Creator?',
    description:
      'A Take Home Assignment from a company I applied at. I did not get the job (🥲 ) but I was happy about what I created. It was my first time using Apps Script and I learned a lot about it.',
    image: './fruit.gif',
    link:
      'https://docs.google.com/spreadsheets/d/1HiIsMms1z8TxBNrjfrhnevxGh9FKsTXLPqMMvqacseA/edit?usp=sharing',
  },
]

export const schoolProjects = [
  {
    title: 'MiniGoogle',
    description:
      'School Project: A little search engine for looking up xkcd comics. Written in Java, CSS, Pug. Group work with fellow student',
    image: './minigoogle.gif',
    link:
      'https://gitfront.io/r/pandanmochi/7e411e9826dd584bd12461fac7a7bd97026fa3f5/minigoogle/',
  },
  {
    title: 'IOS App: Currency Converter',
    description:
      'Another School Project, group work. Written in XCode with Swift. Converts USD and GBP into EUR and the other way around.',
    image: './minigoogle.gif',
    link: '',
  },
]

export const skills = [
  {
    name: 'React',
    icon: Si.SiReact,
  },
  {
    name: 'JavaScript',
    icon: Si.SiJavascript,
  },
  {
    name: 'Python',
    icon: Si.SiPython,
  },
  {
    name: 'Pandas',
    icon: Si.SiPandas,
  },
  {
    name: 'Java',
    icon: Si.SiJava,
  },
  {
    name: 'Scala',
    icon: Si.SiScala,
  },
  {
    name: 'Adobe Photoshop',
    icon: Si.SiAdobephotoshop,
  },
  {
    name: 'Figma',
    icon: Si.SiFigma,
  },
]
