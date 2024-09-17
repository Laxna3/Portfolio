import portfolio from "../assets/projects/portfolio.png";
import blog from "../assets/projects/blog.png";
import bts from "../assets/projects/bts.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React.js, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. I am pursuing B.Tech in CSE from Maharaja Agrasen Institute Of Technology.What drives me is the ever-evolving nature of technology and the challenge of staying at the forefront of innovation. I'm constantly learning new tools and technologies, eager to implement them in my projects. Beyond coding, I’m a problem-solver at heart, always looking for ways to improve and optimize.
 `;

export const EXPERIENCES = [
  {
    year: "Aug 2024 - Present",
    role: "Front-end Developer Intern",
    company: "Echo Sphere.",
    description: `Responsible for designing and implementing the company’s website. Translating design concepts into interactive and responsive web pages, ensuring a seamless user experience.collaborated closely with designers and back-end developers to bring the site to life, focusing on performance optimization and maintaining a consistent brand identity across all digital touchpoints.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
    
];

export const PROJECTS = [
  {
    title: "BTS Website",
    image: bts,
    description:
      "Designed a dynamic website for BTS fans using Next.js, Sanity, and React.js. Showcased skills in creating interactive interfaces, managing content with a headless CMS, and ensuring real-time updates to keep fans connected with the latest BTS news.",
    technologies: ["Next.js", "Sanity CMS", "React"],
  },
  {
    title: "Blog Website",
    image: blog,
    description:
      "Created a blog website using TypeScript, React.js, Next.js, and Sanity. Developed dynamic user interfaces, implemented server-side rendering, and utilized a headless CMS for flexible content management. Ensured a seamless and responsive user experience.",
    technologies: ["Typescript", "Next.js", "React.js", "Sanity CMS"],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Framer Motion", "React", "Tailwind"],
  },
  
];

export const CONTACT = {
  linkedin:"LinkedIn: Laxna Gautam",
  email: "Email: laxna.gautam1206@example.com",
};