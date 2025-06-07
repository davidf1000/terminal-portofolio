// Command handler for terminal commands

function terminalLink(href: string, text: string): string {
  return `<a href="${href}" target="_blank" rel="noopener noreferrer" class='text-cyan-300 hover:bg-[#00eaff] hover:text-amber-50 px-1 rounded transition-colors' style='text-decoration:none;'>${text}</a>`;
}

export function handleTerminalCommand(cmd: string): string {
  const trimmed = cmd.trim().toLowerCase();
  switch (trimmed) {
    case "banner":
      return `Welcome to my terminal! My name is 
██████╗  █████╗ ██╗   ██╗██╗██████╗     ███████╗ █████╗ ██╗   ██╗███████╗██╗
██╔══██╗██╔══██╗██║   ██║██║██╔══██╗    ██╔════╝██╔══██╗██║   ██║╚══███╔╝██║
██║  ██║███████║██║   ██║██║██║  ██║    █████╗  ███████║██║   ██║  ███╔╝ ██║
██║  ██║██╔══██║╚██╗ ██╔╝██║██║  ██║    ██╔══╝  ██╔══██║██║   ██║ ███╔╝  ██║
██████╔╝██║  ██║ ╚████╔╝ ██║██████╔╝    ██║     ██║  ██║╚██████╔╝███████╗██║
╚═════╝ ╚═╝  ╚═╝  ╚═══╝  ╚═╝╚═════╝     ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝
type help for a list of commands.`;
    case "help":
      return  `banner         Show the welcome banner
help           List available commands
aboutme        About David Fauzi
experience     Work experience
education      My education background
honor          Honors and awards
contactme      Contact information
clear          Clear the terminal screen`;
    case "aboutme":
      return `
Hi, I'm David Fauzi 🧑🏻‍💻
I'm a Backend software engineer with over 2 years of professional working experience as an software engineer.
Currently working as a backend software engineer in one the biggest ride hailing tech company in Indonesia. 
I'm an electrical engineering graduate from Bandung Institute of Technology (ITB).
I have a strong passion for crafting clean, scalable, and maintainable systems, with expertise in microservices and cloud infrastructure.
Driven by curiosity, I love exploring new technologies and integrating them into real-world projects.
My journey into tech began during college, where I participated in over 10 hackathons and competitions, 
ranging from ideation, IT business cases, robotics, IoT, embedded systems, cloud computing, and web & mobile development. 
These experiences not only honed my technical skills but also ignited my enduring fascination with the tech world.
When I'm not building or learning, you can find me immersed in co-op or single-player PC games 🎮, watching manga, or binge-watching anime 📺.`;
    case "experience":
      return `1. Gojek (Jan 2025 - Present)
Role        : Backend Software Engineer (L2)
Domain      : Cartography Routing
Tech Stack  : Go, Java, Redis, Kafka, PostgreSQL, Kubernetes, Tencent Cloud
Description : Developed and maintained performance-critical and scalable microservices to power Gojek's routing engine.

2. Blibli (Sep 2022 - Jan 2025)
Role        : Backend Software Engineer (Associate)
Domain      : Warehouse Management System
Tech Stack  : Java, Spring Boot, Spring Webflux, PostgreSQL, Redis, Kafka, Kubernetes, GCP
Description : Developed and maintained microservices for Blibli's warehouse management system, focusing on inventory management and order processing.

3. Paragon Technology and Innovation (Aug 2021 - Feb 2022)
Role        : Software Engineer (Intern)
Domain      : Manufacturing and IoT
Tech Stack  : Python, OpenCV, Tesseract OCR, Flask, Tkinter, MySQL, PHP
Description : Developed an IoT-based packaging inspection system with Computer Vision, achieving 95.5% accuracy. Built a touchscreen interface and web dashboard.`
    case "education":
      return `1. Institut Teknologi Bandung (Aug 2018 - Oct 2022)
Degree           : Bachelor of Electrical Engineering (Cum Laude, GPA: 3.91/4.00)
Relevant Courses : Computation, Digital Systems, Computer Architecture
Leadership Exp   : Chairman of Workshop HME ITB, Hexapod Robotics Team Lead

2. Bangkit Academy by Google (Feb 2022 - July 2022)
Topic        : Cloud Computing (Graduated with distinction, 94.9/100)
Skills       : Web development and cloud solution design.
Description  : Goverment-backed bootcamp program in collaboration with Google, Gojek, and Traveloka. `;
    case "honor":
      return `1. Ganesha Karya Awardee (2020, 2021) - Institut Teknologi Bandung
2. 1st Place - IoT Development Competition (ITS, 2020)
3. 1st Runner Up - AWS Build On Hackathon (AWS, 2020)
4. 1st Runner Up - ARS IoT Smart City Hackaton (ARS, 2020) 
5. 2nd Runner Up - WICAN Instrumentation and Control Contest (WICAN, 2019)
6. 2nd Runner Up - COMPFEST IT Business Case Competition (UI, 2019)`;
    case "contactme":
      return [
        `Email     ${terminalLink('mailto:davidfauzi29@gmail.com', 'davidfauzi29@gmail.com')}`,
        `LinkedIn  ${terminalLink('https://www.linkedin.com/in/davidfauzi', 'https://www.linkedin.com/in/davidfauzi')}`,
        `GitHub    ${terminalLink('https://github.com/davidf1000', 'https://github.com/davidf1000')}`,
        `Whatsapp  ${terminalLink('https://wa.me/6287743872830', '+62 877-4387-2830')}`
      ].join('\n');
    case "":
      return "";
    default:
      return `command not found: ${cmd}`;
  }
}
