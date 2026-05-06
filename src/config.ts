export const siteConfig = {
  name: "Khoo Zhen Xian",
  title: "Software Developer & AI Specialist",
  description: "Portfolio of Khoo Zhen Xian, Malaysia's representative for WorldSkills Asia 2025 and AI Engineer.",
  accentColor: "#a200ff",
  social: {
    email: "khoozhenxian@gmail.com",
    linkedin: "https://linkedin.com/in/khoo-zhen-xian-0a96b5188",
    github: "https://github.com/khoo04",
  },
  aboutMe:
    "I am a software developer and AI specialist with a deep focus on full-stack development and mobile application. I have a proven track record in technical competitions, having earned a Silver Medal at WorldSkills Malaysia Belia 2024 and represented Malaysia at WorldSkills Asia 2025 in Chinese Taipei. My work bridges the gap between robust software architecture and intelligent systems, utilizing deep learning and optimization algorithms to solve real-world problems.",
  skills: [
    "Flutter",
    "Python",
    "Java",
    "C#",
    "Vue.js",
    "Dart",
    "Web Development",
    "Artificial Intelligence",
    "Android Development",
  ],
  projects: [
    {
      name: "Intelligent Task Manager for Visually Impaired Users (EchoPlan)",
      description:
        "An AI-driven scheduling assistant designed for accessibility. It features a conversational interface powered by Dialogflow, a Django and React architecture, and a Genetic Algorithm backend to optimize task management for visually impaired users.",
      links: [
        { label: "Pending", url: "#projects" },
      ],
      skills: ["Dialogflow", "NLP", "Django", "React", "Genetic Algorithm", "Python"],
    },
    {
      name: "GoGreen",
      description:
        "An AI-based waste classification and carbon savings tracking mobile application. It utilizes the SigLip2 vision-language model for waste classification and integrates the Gemini API to provide users with personalized, AI-generated disposal tips based on identified items.",
      image: "/images/go_green_app_logo.png",
      links: [
        { label: "Frontend", url: "https://github.com/khoo04/waste-classification-app-go-green" },
        { label: "Backend", url: "https://github.com/khoo04/waste-classification-api" },
      ],
      skills: ["Flutter", "SigLip2", "Gemini API", "Computer Vision", "Dart", "FlaskAPI", "Python"],
    },
    {
      name: "RideNow",
      description:
        "An Android carpooling mobile application developed as a Diploma project. It facilitates efficient ride-sharing through a high-performance Flutter interface and a robust RESTful API backend built with Laravel.",
      link: "https://github.com/khoo04/Ride-Now",
      image: "/images/ride_now_logo.png",
        links: [
        { label: "Frontend", url: "https://github.com/khoo04/Ride-Now" },
        { label: "Backend", url: "https://github.com/khoo04/prim-development-ride-now-app" },
      ],
      skills: ["Flutter", "Android Development", "Dart", "Laravel", "PHP", "RESTful API"],
    },
  ],
  experience: [
    {
      company: "TMS Enthu Technology Sdn Bhd",
      title: "Internship Software Developer",
      dateRange: "July 2024 - Oct 2024",
      bullets: [
        "Developed a full-stack web application using Vue.js and TypeScript on the front-end.",
        "Integrated front-end components with a C# ASP.NET RESTful API backend.",
        "Implemented the MVVM (Model-View-ViewModel) Design Pattern for scalable development.",
        "Managed codebase and team collaboration through Git and GitHub.",
      ],
    },
  ],
  education: [
    {
      school: "Universiti Teknikal Malaysia Melaka (UTeM)",
      degree: "Bachelor of Computer Science (Artificial Intelligence) with Honours",
      dateRange: "March 2025 - Present",
      achievements: [
        "Current CGPA: 4.00/4.00",
        "Dean's List Award (All Semesters)",
        "Representing Malaysia in WorldSkills Asia 2025 (Chinese Taipei).",
      ],
    },
    {
      school: "Universiti Teknikal Malaysia Melaka (UTeM)",
      degree: "Diploma in Computer Science",
      dateRange: "July 2022 - March 2025",
      achievements: [
        "CGPA: 3.96/4.00",
        "Vice Chancellor's Award Recipient",
        "Silver Medallist: WorldSkills Malaysia Belia 2024.",
      ],
    },
  ],
};