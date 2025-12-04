const images = import.meta.glob('../assets/**/*.{jpg,png,jpeg,webp}', { eager: true }) as Record<string, { default: string }>;

const getAsset = (path: string) => {
  const fullPath = `../assets/${path}`;
  return images[fullPath]?.default;
};

export interface NavLink {
  id: number;
  link: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  content: string;
}

export interface Blog {
  id: number;
  title: string;
  date: string;
  summary: string;
  content: string;
  tags: string[];
}

export const navLinks: NavLink[] = [
  { id: 1, link: 'home' },
  { id: 2, link: 'about' },
  { id: 3, link: 'portfolio' },
  { id: 4, link: 'blog' },
  { id: 5, link: 'contact' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "HowestPrime - Cinema Project",
    description: "A comprehensive 4-part microservices project for cinema management. Includes a TypeScript ticketing service, C# movie service with Blazor admin panel, Kotlin Android app for snacks/scanning, and full Azure deployment via Terraform.",
    tech: [".NET", "TypeScript", "Kotlin", "Azure", "Terraform", "Docker", "Blazor", "DDD"],
    github: "https://github.com/Or3nges?tab=repositories&q=howestprime",
    live: "#",
    content: `
      <p><strong>HowestPrime</strong> was a massive undertaking divided into four distinct parts, each focusing on a critical aspect of modern software architecture. The goal was to build a scalable, microservices-based cinema management system.</p>
      <br/>
      <h3 class="text-xl font-bold text-textPrimary">Part 1: Ticketing Microservice (TypeScript)</h3>
      <p>The foundation was a <strong>Ticketing System</strong> built with <strong>TypeScript</strong>. We applied <strong>Domain Driven Design (DDD)</strong> principles to ensure the business logic was robust and decoupled. This service handled ticket processing and was fully containerized using <strong>Docker</strong>, with extensive test coverage to guarantee reliability.</p>
      <br/>
      <h3 class="text-xl font-bold text-textPrimary">Part 2: Movie Service & Admin Panel (.NET/Blazor)</h3>
      <p>Next, we developed a <strong>Movie Microservice</strong> in <strong>C#</strong> to handle movie bookings, which also adhered to <strong>Domain Driven Design (DDD)</strong>. This part included a <strong>Blazor</strong> web application for administrators to manage movie schedules and add new releases. Both the service and the frontend were containerized in Docker, ensuring consistent environments from dev to prod.</p>
      <br/>
      <h3 class="text-xl font-bold text-textPrimary">Part 3: Android App (Kotlin)</h3>
      <p>For the on-site experience, I built a native <strong>Android application</strong> using <strong>Kotlin</strong>. This app allowed users to buy snacks and provided a scanner for staff to validate tickets. Like the backend services, this was rigorously tested to ensure a smooth user experience.</p>
      <br/>
      <h3 class="text-xl font-bold text-textPrimary">Part 4: Cloud Deployment (Azure & Terraform)</h3>
      <p>The final piece of the puzzle was infrastructure. We used <strong>Terraform</strong> to define our infrastructure as code and deployed the entire ecosystem of microservices and databases to <strong>Azure</strong>. This automated the deployment process and made the infrastructure reproducible.</p>
      <br/>
      <p><em>Note: A pre-built frontend was provided to test the user's ticket ordering flow, allowing us to focus on the backend architecture and integration.</em></p>
    `
  },
  {
    id: 2,
    title: "Splendor - Digital Card Game",
    description: "An online multiplayer version of the board game Splendor. Built with a vanilla javascript frontend and a robust Java backend handling game logic, turn management, and scoring. Includes comprehensive JUnit tests.",
    tech: ["Javascript", "Java", "JUnit", "Rest API"],
    github: "https://github.com/Or3nges?tab=repositories&q=Splendor",
    live: "#",
    content: `
      <p><strong>Splendor</strong> is a digital adaptation of the popular board game, focusing on multiplayer interactions and game logic integrity.</p>
      <br/>
      <h3 class="text-xl font-bold text-textPrimary">Backend Logic</h3>
      <p>The core of the game resides in a Java backend. We used REST APIs to communicate game states to the frontend. A significant portion of the development went into ensuring the game rules were strictly enforced using <strong>JUnit</strong> tests.</p>
      <br/>
      <h3 class="text-xl font-bold text-textPrimary">Frontend Interaction</h3>
      <p>The frontend was built with vanilla JavaScript to keep it lightweight. We used long-polling to update the game state for all players in real-time.</p>
      <br/>
      <h3 class="text-xl font-bold text-textPrimary">Project Resources</h3>
      <ul class="list-disc list-inside mt-2 space-y-2 text-textSecondary">
        <li><a href="https://drive.google.com/file/d/1LbioBDWv5PsaBK9K1uehNCrHrWd_0cx6/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">Functionality Demo</a></li>
      </ul>
    `
  },
  {
    id: 3,
    title: "ADRIA - SAAS Platform",
    description: "A fictional SAAS platform for ordering satellite lighting. Developed frontend planning tools in Vue.js and backend processing APIs in Java. Included a detailed business case and cost analysis.",
    tech: ["Vue.js", "Java", "Business Analysis"],
    github: "https://github.com/Or3nges?tab=repositories&q=LightingFast",
    live: "#",
    content: `
      <p><strong>ADRIA</strong> was a comprehensive project that went beyond just coding. It involved creating a business case for a fictional SAAS company providing satellite lighting solutions.</p>
      <br/>
      <h3 class="text-xl font-bold text-textPrimary">Full Stack Development</h3>
      <p>I worked on the frontend using <strong>Vue.js</strong> to create an interactive planning tool where users could schedule lighting for specific locations. The backend, built in Java, handled the complex scheduling logic and order processing.</p>
      <br/>
      <h3 class="text-xl font-bold text-textPrimary">Business Analysis</h3>
      <p>We also conducted a cost analysis and market research to justify the viability of the product, bridging the gap between technical implementation and business requirements.</p>
      <br/>
      <h3 class="text-xl font-bold text-textPrimary">Project Resources</h3>
      <ul class="list-disc list-inside mt-2 space-y-2 text-textSecondary">
        <li><a href="https://drive.google.com/file/d/1zQHCmGafO5bD0ZBndQ3PHA_3ATyeF8t-/view" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">POC Video Demo</a></li>
        <li><a href="https://docs.google.com/document/d/1cNANvLvn1wYs3RTPzRXbn09-7pvYuygV/edit?usp=sharing&ouid=104510553238380225642&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">Business Case Document</a></li>
        <li><a href="https://docs.google.com/document/d/1ALCf3Frhr_iGFv7YHWAEY7NXL43npNTV/edit?usp=sharing&ouid=104510553238380225642&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">Analysis Document</a></li>
        <li><a href="https://www.figma.com/design/8nrC3TTYv6EUOwOhETIOIG/LightingFast-customer?node-id=504-14033&t=ckRQpRjYjSghN9S0-1" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">Figma Wireframes</a></li>
      </ul>
    `
  },
  {
    id: 4,
    title: "Autonomous Car AI (BIP Austria)",
    description: "Intensive project on AI/ML for autonomous systems. Improved a Python AI model to enable a small car to navigate autonomously using computer vision and real-time model training.",
    tech: ["Python", "AI/ML", "Computer Vision"],
    github: "https://github.com/Or3nges/Autonomous-AWS-Car",
    live: "#",
    content: `
      <p>My intensive project in Austria (BIP) was an eye-opener regarding the capabilities of Computer Vision.</p>
      <br/>
      <p>We worked on optimizing a Python-based AI model to allow a small vehicle to navigate a track autonomously. The key takeaway was the importance of <strong>training data quality</strong>. No matter how good the model architecture is, if the data is noisy, the car will crash.</p>
      <br/>
      <p>We used OpenCV for image processing and PyTorch for the model training. Seeing the car successfully complete a lap without human intervention was a highlight of my academic career so far.</p>
    `
  },
  {
    id: 5,
    title: "Labyrinth - Digital Board Game",
    description: "A digital adaptation of the classic Labyrinth board game. Developed a Java backend to manage game logic and a JavaScript frontend for user interaction. Implemented multiplayer functionality and game state persistence.",
    tech: ["Javascript", "Java", "JUnit", "Rest API"],
    github: "https://github.com/Or3nges?tab=repositories&q=Labyrinth",
    live: "#",
    content: `
      <p><strong>Labyrinth</strong> is another digital board game adaptation, focusing on pathfinding and dynamic board states.</p>
      <br/>
      <h3 class="text-xl font-bold text-textPrimary">Dynamic Game Board</h3>
      <p>The unique challenge of Labyrinth is the shifting board. We implemented a robust data structure in Java to handle the sliding tiles and ensure valid player movements.</p>
      <br/>
      <h3 class="text-xl font-bold text-textPrimary">Multiplayer Sync</h3>
      <p>Similar to Splendor, we used REST APIs to synchronize the board state across different clients, ensuring a smooth multiplayer experience.</p>
      <br/>
      <h3 class="text-xl font-bold text-textPrimary">Project Resources</h3>
      <ul class="list-disc list-inside mt-2 space-y-2 text-textSecondary">
        <li><a href="https://drive.google.com/file/d/1IwbsQSBGSyToptpRwVQlUYfSmW2l1Y_v/view?usp=drive_link" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">Functionality Demo</a></li>
      </ul>
    `
  },
];

export const blogs: Blog[] = [
  {
    id: 6,
    title: "Tech & Meet: Cyber Security at NATO",
    date: "December 2, 2025",
    summary: "This Tech & Meet evening presentation by Martin De Pauw shows how Cyber ​​Security at NATO has evolved, the challenges that needed to be overcome, and how collaboration with international military and civilian experts proved crucial.",
    content: `
      <p>Once upon a time, Cyber was seen as something for nerds and techies - a playground for the young and curious. Today, Cyber is everyone’s reality.</p>
      <p>Cyber has no borders. It doesn’t care about age, gender, or color. It connects us all - and exposes us all, and ... It has no limits to good and bad.</p>
      <br/>
      <img src="${getAsset('tech&meet/meeting_4/speaker.jpg')}" alt="Martin De Pauw" class="w-full rounded-lg mb-4 shadow-md" />
      <br/>
      <h3 class="text-xl font-bold text-textPrimary mb-2">The Evolution of Cyber Risks</h3>
      <p>Software, hardware, networks, clouds, and Artificial Intelligence are evolving faster than ever. This brings incredible opportunities for innovation and progress… but also unprecedented risks. Where there’s good intent, there’s always someone looking to exploit it.</p>
      <br/>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <img src="${getAsset('tech&meet/meeting_4/weaponized-AI.jpg')}" alt="Weaponized AI" class="w-full rounded-lg shadow-md" />
        <img src="${getAsset('tech&meet/meeting_4/north-korean-hackers.jpg')}" alt="North Korean Hackers" class="w-full rounded-lg shadow-md" />
      </div>
      <br/>
      <h3 class="text-xl font-bold text-textPrimary mb-2">NATO's Historic Move</h3>
      <p>In 2016, NATO made a historic move: it officially recognized Cyberspace as a new domain of operations - alongside land, sea, and air. Today NATO has grown to a resilient 32 nations and is the strongest Alliance on earth, and Cyber Defence has become a cornerstone of the Alliance’s mission to protect its nations.</p>
      <br/>
      <img src="${getAsset('tech&meet/meeting_4/landscape-math.jpg')}" alt="Cyber Landscape" class="w-full rounded-lg mb-4 shadow-md" />
      <br/>
      <h3 class="text-xl font-bold text-textPrimary mb-2">Key Topics: Integration & Risk</h3>
      <p>Martin touched upon several critical aspects of modern cybersecurity:</p>
      <ul class="list-disc list-inside mt-2 space-y-2 text-textSecondary">
        <li><strong>Risk Management:</strong> How to assess and mitigate threats in a constantly changing environment.</li>
        <li><strong>Weaknesses:</strong> Identifying vulnerabilities before they are exploited.</li>
        <li><strong>Integration:</strong> The challenge of integrating secure systems across 32 nations.</li>
        <li><strong>The Math Equation:</strong> Understanding the logic behind the chaos.</li>
      </ul>
      <br/>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <img src="${getAsset('tech&meet/meeting_4/risk-management.jpg')}" alt="Risk Management" class="w-full rounded-lg shadow-md" />
        <img src="${getAsset('tech&meet/meeting_4/integration_math.jpg')}" alt="Integration Math" class="w-full rounded-lg shadow-md" />
      </div>
      <br/>
      <h3 class="text-xl font-bold text-textPrimary mb-2">About the Speaker</h3>
      <p><strong>ir. Martin De Pauw</strong> graduated at the Polytechnic division of the Royal Military Academy in 1989 and started his career in F16 avionics. Later on, he switched to the world of software, hardware and networks and was ultimately given the responsibility to co-create cyberspace in the NATO context.</p>
      <p class="mt-2">After his military career, he started working for the NATO Headquarters, still in the area of IT and Cyber. This is where he is working today.</p>
      <br/>
      <img src="${getAsset('tech&meet/meeting_4/speaker_info.jpg')}" alt="Speaker Info" class="w-full rounded-lg mb-4 shadow-md" />
    `,
    tags: ["NATO", "CyberSecurity", "AI", "RiskManagement"]
  },
  {
    id: 1,
    title: "Tech & Meet: Transitioning to IPv6",
    date: "November 25, 2025",
    summary: "Why IPv6 is the future, how SLAAC changes the game, and what the history of beer has to do with network adoption.",
    content: `
      <p>Yesterday, I attended an insightful and engaging <strong>Tech & Meet</strong> session by <strong>Nico Declerck</strong> on 'Transitioning to IPv6'. It wasn't just a technical deep dive; it was a wake-up call about the future of the internet.</p>
      <br/>
      <img src="${getAsset('tech&meet/meeting_3/speaker.jpg')}" alt="Nico Declerck Presentation" class="w-full rounded-lg mb-4 shadow-md" />
      <br/>
      <h3 class="text-xl font-bold text-textPrimary mb-2">Why IPv6?</h3>
      <p>The simple answer is that we're running out of IPv4 addresses. But Nico explained that IPv6 offers much more than just a larger address space. It brings features like <strong>SLAAC (Stateless Address Autoconfiguration)</strong>, which is a game-changer for network configuration, allowing devices to configure themselves without a DHCP server.</p>
      <br/>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <img src="${getAsset('tech&meet/meeting_3/ipv4-downsides.jpg')}" alt="IPv6 Slide" class="w-full rounded-lg shadow-md" />
        <img src="${getAsset('tech&meet/meeting_3/fun-fact.jpg')}" alt="Networking Diagram" class="w-full rounded-lg shadow-md" />
      </div>
      <br/>
      <h3 class="text-xl font-bold text-textPrimary mb-2">Beer & Networking?</h3>
      <p>One of the most memorable parts of the talk was Nico's analogy involving the history of beer. Who knew that the adoption of new brewing standards could parallel the adoption of network protocols? It made a complex, dry topic relatable and fun.</p>
      <br/>
      <img src="${getAsset('tech&meet/meeting_3/bruges&beer.jpg')}" alt="Audience" class="w-full rounded-lg mb-4 shadow-md" />
      <br/>
      <h3 class="text-xl font-bold text-textPrimary mb-2">Key Takeaways</h3>
      <ul class="list-disc list-inside mt-2 space-y-2 text-textSecondary">
        <li><strong>Router Advertisements</strong> are crucial in IPv6 networking.</li>
        <li>IPv6 is not just "IPv4 with longer addresses"; it requires a shift in mindset.</li>
        <li>Lack of knowledge is no longer an excuse to avoid adopting IPv6.</li>
      </ul>
      <p class="mt-4">Huge thanks to Nico Declerck for making such a technical topic fun and engaging! Looking forward to seeing more adoption of IPv6 in the future.</p>
    `,
    tags: ["IPv6", "Networking", "Innovation", "Howest"]
  },
  {
    id: 2,
    title: "Hack The Future: A CTF Adventure",
    date: "November 12, 2025",
    summary: "Participating in the Hack The Future hackathon: cracking Caesar ciphers and balancing submarines with Exsertus.",
    content: `
      <p>Yesterday, I had the opportunity to participate in <strong>Hack The Future</strong> in Antwerp, a hackathon that brings together students and companies for a day of intense coding and problem-solving. I took on the challenge organized by <strong>Exsertus</strong>, and it was a thrilling mix of coding and CTF-style challenges.</p>
      <br/>
      <img src="${getAsset('hackaton/badge.jpg')}" alt="Hack The Future Venue" class="w-full rounded-lg mb-4 shadow-md" />
      <br/>
      <div class="flex flex-col md:flex-row gap-4 mb-4">
        <div class="flex-1">
            <h3 class="text-xl font-bold text-textPrimary mb-2">The Schedule</h3>
            <ul class="list-disc list-inside space-y-1 text-textSecondary">
                <li><strong>08:00 - 09:00:</strong> Reception with coffee</li>
                <li><strong>09:00 - 09:30:</strong> Welcome</li>
                <li><strong>09:30 - 10:00:</strong> Briefing</li>
                <li><strong>10:00 - 12:00:</strong> Hacking Session</li>
                <li><strong>12:00 - 13:00:</strong> Lunch</li>
                <li><strong>13:00 - 16:00:</strong> Hacking Session</li>
                <li><strong>16:00 - 18:00:</strong> Pitches</li>
                <li><strong>18:00 - 21:00:</strong> Awards & Dinner</li>
            </ul>
        </div>
        <div class="flex-1">
             <img src="${getAsset('hackaton/dagplanning.jpg')}" alt="Day Planning" class="w-full rounded-lg shadow-md" />
        </div>
      </div>
      <br/>
      <h3 class="text-xl font-bold text-textPrimary mb-2">The Challenge: Decrypt & Stabilize</h3>
      <p>Teaming up with Rune Wittevrongel, we tackled two major hurdles that pushed our skills to the limit:</p>
      <ul class="list-disc list-inside mt-2 space-y-2 text-textSecondary">
        <li><strong>Cryptography:</strong> We had to decipher Caesar ciphers to unlock hidden messages. It was a test of our attention to detail and basic crypto knowledge.</li>
        <li><strong>Algorithmic Logic:</strong> The second part involved calculating precise volumes for submarine tanks to maintain balance during a mass offset. This wasn't just about coding; it required mathematical precision and creative problem-solving to ensure the submarine remained stable.</li>
      </ul>
      <br/>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <img src="${getAsset('hackaton/antwerp-station.jpg')}" alt="Coding Challenge" class="w-full rounded-lg shadow-md" />
        <div class="grid grid-rows-2 gap-4">
             <img src="${getAsset('hackaton/monkey.jpg')}" alt="Teamwork" class="w-full rounded-lg shadow-md" />
             <img src="${getAsset('hackaton/penguins.jpg')}" alt="Penguins" class="w-full rounded-lg shadow-md" />
        </div>
      </div>
      <br/>
      <h3 class="text-xl font-bold text-textPrimary mb-2">Atmosphere & Takeaways</h3>
      <p>The event was designed to simulate a high-pressure environment, blending technical skills with teamwork under strict time constraints. The venue, right next to the <strong>Antwerp ZOO</strong>, added a unique touch (we even got free access to the zoo during breaks!).</p>
      <p class="mt-2">A big thank you to Hack The Future, Exsertus, and all the participating companies. It was an engaging and educational experience that reminded me why I love this field: the constant challenge to learn, adapt, and solve.</p>
    `,
    tags: ["HackTheFuture", "CTF", "Coding", "ProblemSolving"]
  },
  {
    id: 3,
    title: "Tech & Meet: Open Minds, Open Models",
    date: "October 28, 2025",
    summary: "Reflections on a talk by Niels Rogge (Hugging Face) about the democratization of AI and the power of open-source models.",
    content: `
      <p>Artificial Intelligence is often portrayed as a battle of giants, massive corporations with unlimited resources building models behind closed doors. But last week's <strong>Tech & Meet</strong> with <strong>Niels Rogge</strong> from <strong>Hugging Face</strong> (and ML6) painted a very different picture.</p>
      <br/>
      <img src="${getAsset('tech&meet/meeting_2/selfie.jpg')}" alt="Niels Rogge Presentation" class="w-full rounded-lg mb-4 shadow-md" />
      <br/>
      <h3 class="text-xl font-bold text-textPrimary mb-2">Small but Mighty</h3>
      <p>One of the most striking points Niels made was about efficiency. We tend to think "bigger is better" with LLMs, but Hugging Face is championing smaller, highly efficient models. This is a game-changer for developers like me. It means we don't need a supercomputer to start experimenting with AI; we can run powerful models on consumer hardware.</p>
      <br/>
      <h3 class="text-xl font-bold text-textPrimary mb-2">A Global Shift</h3>
      <p>The landscape of AI innovation is shifting. It was surprising to learn that China is currently leading the download charts for these models. It's a reminder that innovation isn't centralized in Silicon Valley anymore; it's a global phenomenon driven by accessibility.</p>
      <br/>
      <h3 class="text-xl font-bold text-textPrimary mb-2">No More Gatekeeping</h3>
      <p>What I loved most about the talk was the emphasis on <strong>community</strong>. Open-source AI is tearing down the gates. It's not just about sharing code; it's about sharing ideas, datasets, and breakthroughs. It empowers anyone, students, hobbyists, startups, to jump in and start creating.</p>
      <p class="mt-2">Leaving the event, I felt energized. The barrier to entry for AI has never been lower, and the tools are right there, waiting for us to build something cool.</p>
    `,
    tags: ["AI", "OpenSource", "HuggingFace", "MachineLearning"]
  },
  {
    id: 4,
    title: "Tech & Meet: Threat Intelligence",
    date: "October 07, 2025",
    summary: "Insights from the Centre for Cybersecurity Belgium (CCB) on analyzing and tackling real-world cyber threats.",
    content: `
      <p>Attending the recent <strong>Tech & Meet</strong> at Howest Bruges was a refreshing break from my usual coding routine. The topic? <strong>Threat Intelligence</strong>. While I spend most of my days building applications, this session was all about protecting them.</p>
      <br/>
      <img src="${getAsset('tech&meet/meeting_1/first-slide.jpg')}" alt="Tech & Meet Session" class="w-full rounded-lg mb-4 shadow-md" />
      <br/>
      <h3 class="text-xl font-bold text-textPrimary mb-2">The Cat and Mouse Game</h3>
      <p>Two experts from the <strong>Centre for Cybersecurity Belgium (CCB)</strong> took the stage, and it wasn't just dry theory. They walked us through the lifecycle of a cyber threat, from detection to mitigation. It was fascinating to see the sheer scale of monitoring required to keep digital infrastructure safe.</p>
      <p class="mt-2">They highlighted that cybersecurity isn't just about firewalls; it's about <strong>proactive intelligence</strong>, knowing what the attackers are planning before they strike. It really put into perspective the "cat and mouse" game that happens behind the scenes of the internet.</p>
      <br/>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <img src="${getAsset('tech&meet/meeting_1/high-level-overview.jpg')}" alt="Presentation Slide" class="w-full rounded-lg shadow-md" />
        <img src="${getAsset('tech&meet/meeting_1/methodology.jpg')}" alt="Networking" class="w-full rounded-lg shadow-md" />
      </div>
      <br/>
      <h3 class="text-xl font-bold text-textPrimary mb-2">Developer vs. Security Mindset</h3>
      <p>As a software developer, I often focus on functionality and user experience. "Does it work?" and "Does it look good?" are my primary questions. This session forced me to ask, "Is it safe?".</p>
      <p class="mt-2">It was a step outside my comfort zone, realizing that every line of code we write is a potential entry point if not secured properly. It bridged the gap between 'Dev' and 'Sec' in a very tangible way.</p>
      <br/>
      <h3 class="text-xl font-bold text-textPrimary mb-2">Practical Takeaways</h3>
      <p>One specific tool that caught my attention was <strong>URLScan</strong>. I decided to play around with it after the session. It's incredible how much information you can gather just by scanning a URL, server details, IP addresses, and potential malicious behaviors. It gave me a glimpse into the toolkit of a security analyst and has definitely inspired me to look deeper into secure coding practices.</p>
    `,
    tags: ["ThreatIntelligence", "CyberSecurity", "Networking"]
  },
  {
    id: 5,
    title: "Why I Chose React for My Portfolio",
    date: "October 2, 2025",
    summary: "A look into why React and Tailwind CSS are my go-to tools for frontend development.",
    content: `
      <p>Building a portfolio is more than just showing off projects; it's about showing off your code quality and design sense. That's why I chose <strong>React</strong> and <strong>Tailwind CSS</strong>.</p>
      <br/>
      <h3 class="text-xl font-bold text-textPrimary">Component-Based Architecture</h3>
      <p>React's component-based structure allows me to reuse code efficiently. For example, the project cards in my portfolio are a single component reused multiple times with different data.</p>
      <br/>
      <h3 class="text-xl font-bold text-textPrimary">Styling with Tailwind</h3>
      <p>Tailwind CSS speeds up the styling process significantly. Instead of switching between CSS files and JSX, I can apply styles directly, making the development loop much faster.</p>
    `,
    tags: ["React", "Frontend", "Tailwind"]
  }
];
