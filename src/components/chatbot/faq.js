
export const GREETING = "Hi! Ask me anything about me or my work.";
export const FALLBACK =
    "Sorry, I don't have an answer for that yet. Try asking about my skills, projects, or how to contact me.";

export const FAQ = [
    {
        questions: ["What is your name?", "Who are you?", "Tumi ke?", "Apnar nam ki?", "Introduce yourself"],
        answer: "I'm [Your Name], a React developer from Bangladesh.",
    },
    {
        questions: ["What are your skills?", "Which technologies do you use?", "Tumi ki ki jano?", "Tech stack"],
        answer: "React, JavaScript, Tailwind CSS, HTML/CSS, Git/GitHub.",
    },
    {
        questions: ["What projects have you made?", "Show me your work", "Tumi ki ki project banaiso?", "Your portfolio projects"],
        answer: "Movie Explorer, CPI ICT Club. Check the projects section for details.",
        link: { label: "See projects", href: "/project" },
    },
    {
        questions: ["Are you available for freelance work?", "Can I hire you?", "What is your rate?", "Tumi ki kaj koro?", "Hire me"],
        answer: "Yes, I'm open to freelance React work. Send me a short message about your project and I'll reply with a quote.",
        link: { label: "Contact me", href: "#contact" },
    },
    {
        questions: ["How can I contact you?", "What is your email?", "Whatsapp number", "Tomar sathe jogajog korbo kivabe?"],
        answer: "Email: you@example.com\nWhatsApp: +880-XXXX-XXXXXX",
    },
    {
        questions: ["Where are you from?", "Where do you live?", "Tumi kothay thako?"],
        answer: "I'm from Bangladesh.",
    },
    {
        questions: ["What do you study?", "What is your education?", "Tumi ki poro?"],
        answer: "I'm a 2nd-year diploma student.",
    },
    {
        questions: ["How old are you?", "What is your age?", "Tomar boyos koto?", "Boyos koto?"],
        answer: "I'm [age] years old.",
    },
    {
        questions: ["Which languages do you speak?", "Do you speak English?", "Tumi kon bhasha-y kotha bolo?", "Bangla ba English e kotha bolte paro?"],
        answer: "I speak Bangla and [English level, e.g. good working English]. I can communicate with clients in both.",
    },
    {
        questions: ["How long have you been coding?", "How many years of experience do you have?", "Koto din dhore coding korcho?", "Tomar experience koto?"],
        answer: "I've been building with React for [X] months/years, and I learn mostly by shipping real projects.",
    },
    {
        questions: ["Which institute do you study in?", "Which college do you go to?", "Tumi kon institute e poro?"],
        answer: "I study at [Institute name], in the diploma program.",
    },
    {
        questions: ["What are you learning now?", "What are you currently learning?", "Ekhon ki shikhcho?"],
        answer: "Right now I'm learning [topic, e.g. advanced React patterns, Node.js] along with my diploma subjects.",
    },
    {
        questions: ["Do you know data structures and algorithms?", "DSA jano?", "Do you practice DSA?"],
        answer: "Yes, I'm studying Data Structures & Algorithms as part of my diploma and practicing it alongside React.",
    },
    {
        questions: ["Do you play Free Fire?", "Are you a gamer?", "Free Fire khelo?", "Tumi ki gamer?"],
        answer: "Yes, I play Free Fire in my free time.",
    },
    {
        questions: ["What are your hobbies?", "What do you do in your free time?", "Free time e ki koro?", "Tomar shokh ki?"],
        answer: "Coding, playing Free Fire, and trying out new web tech.",
    },

    {
        questions: ["Can I see your resume?", "Do you have a CV?", "Download resume", "Tomar CV ache?"],
        answer: "Yes, you can download my resume here.",
        link: { label: "Download resume", href: "/resume.pdf" },
    },
    {
        questions: ["What is your GitHub?", "GitHub link", "Tomar GitHub id ki?"],
        answer: "My GitHub: github.com/[your-username]",
        link: { label: "Open GitHub", href: "https://github.com/your-username" },
    },
    {
        questions: ["Are you on LinkedIn?", "LinkedIn profile", "Tomar LinkedIn link dao"],
        answer: "My LinkedIn: linkedin.com/in/[your-username]",
        link: { label: "Open LinkedIn", href: "https://linkedin.com/in/your-username" },
    },
    {
        questions: ["Where can I follow you?", "Social media links", "Facebook e tomake pabo kothay?"],
        answer: "Facebook: [link]\nInstagram: [link]\nYouTube: [link]",
    },
    {
        questions: ["What is your time zone?", "Which timezone are you in?", "Tomar time zone ki?"],
        answer: "I'm in Bangladesh Standard Time (UTC+6).",
    },
    {
        questions: ["How fast do you reply?", "How long to get a reply?", "Reply dite koto time lage?"],
        answer: "I usually reply within [a few hours / 24 hours].",
    },

    {
        questions: ["Why do you use React?", "Why React?", "Keno React use koro?"],
        answer: "React lets me build fast, reusable and easy-to-maintain interfaces, and it has a huge ecosystem.",
    },
    {
        questions: ["Why do you use Tailwind CSS?", "Tailwind or plain CSS?", "Tailwind keno use koro?"],
        answer: "Tailwind helps me build clean, consistent and responsive designs quickly without fighting with CSS files.",
    },
    {
        questions: ["Are you a frontend or backend developer?", "Do you know backend?", "Tumi frontend na backend?"],
        answer: "I'm mainly a frontend developer (React). Backend: [what you know, or 'I'm learning it'].",
    },
    {
        questions: ["Which database do you use?", "Do you know Firebase?", "Tumi kon database use koro?"],
        answer: "I've worked with [Firebase / MongoDB / none yet]. I pick what fits the project.",
    },
    {
        questions: ["Can you integrate APIs?", "Do you work with REST APIs?", "API connect korte paro?"],
        answer: "Yes, I regularly connect React apps to REST APIs (fetch/axios) and handle loading and error states properly.",
    },
    {
        questions: ["Do you use Git?", "Do you use GitHub for projects?", "Git use koro?"],
        answer: "Yes, all my projects use Git and GitHub, so you always get clean version history.",
    },
    {
        questions: ["Which tools do you use?", "What code editor do you use?", "Tumi kon editor use koro?", "VS Code"],
        answer: "VS Code, Git/GitHub, Chrome DevTools, [Figma, Postman, etc.].",
    },
    {
        questions: ["Can you add animations?", "Do you use Framer Motion?", "Animation add korte paro?"],
        answer: "Yes, I can add smooth, tasteful animations (CSS or Framer Motion) without slowing the site down.",
    },
    {
        questions: ["Can you add dark mode?", "Dark mode thakbe?", "Do you build dark mode?"],
        answer: "Yes, dark mode is easy to add and I can include it in your project.",
    },

    {
        questions: ["Can you build a landing page?", "Landing page banaite paro?", "I need a landing page"],
        answer: "Yes, landing pages are one of my main services: fast, responsive and focused on getting visitors to take action.",
    },
    {
        questions: ["Can you make a portfolio website for me?", "Amar jonno portfolio website banai dibe?", "I need a personal website"],
        answer: "Yes, I can build a clean personal portfolio site tailored to you.",
    },
    {
        questions: ["Can you build an online store?", "E-commerce website banaite paro?", "Do you build e-commerce sites?"],
        answer: "I can build the frontend of an online store (product pages, cart, checkout UI). For payments and backend I'll tell you honestly what I can handle: [your scope].",
    },
    {
        questions: ["Can you fix bugs in my React project?", "Can you debug my code?", "Amar React code-er bug fix korte paro?"],
        answer: "Yes, send me the repo or the error and I'll take a look.",
    },
    {
        questions: ["Can you redesign my existing website?", "Amar website-er design change kore dibe?", "Website redesign"],
        answer: "Yes, I can modernize an existing site and make it responsive and faster.",
    },
    {
        questions: ["Will my site work on mobile?", "Do you build responsive websites?", "Mobile e site thik moto cholbe?"],
        answer: "Yes, every site I build is responsive and tested on mobile, tablet and desktop.",
    },
    {
        questions: ["Will my website be fast?", "Do you optimize performance?", "Website fast hobe?"],
        answer: "Yes, I keep pages lightweight: optimized images, minimal dependencies and code splitting when needed.",
    },
    {
        questions: ["Do you do SEO?", "Will my site show on Google?", "Website Google e ashbe?"],
        answer: "I set up the technical basics (titles, meta tags, clean structure, speed). Ranking itself depends on content and time.",
    },
    {
        questions: ["Can you deploy my website?", "Do you help with hosting?", "Website host korte help koro?", "Vercel or Netlify"],
        answer: "Yes, I can deploy it for you on Vercel or Netlify and connect your domain.",
    },
    {
        questions: ["Do I need a domain and hosting?", "Domain lagbe?", "How do I buy a domain?"],
        answer: "A domain is optional but recommended (about [price]/year). I can guide you through buying one. Basic hosting on Vercel/Netlify is free.",
    },

    {
        questions: ["How much does a website cost?", "How much do you charge?", "Website banate koto taka lage?", "Price koto?"],
        answer: "It depends on the pages and features. Landing pages start from [price] BDT and full sites from [price] BDT. Message me for an exact quote.",
        link: { label: "Get a quote", href: "#contact" },
    },
    {
        questions: ["How can I pay you?", "Do you accept bKash?", "Payment kivabe korbo?", "Which payment methods do you accept?"],
        answer: "I accept bKash, Nagad, [bank transfer / Payoneer / PayPal].",
    },
    {
        questions: ["Do you take advance payment?", "Is advance required?", "Advance dite hobe?"],
        answer: "Yes, I take [50%] in advance and the rest on delivery.",
    },
    {
        questions: ["How long does a website take?", "What is your delivery time?", "Koto diner moddhe kaj dibe?", "Kaj shesh korte koto time lage?"],
        answer: "A landing page usually takes [3-5 days], a multi-page site [1-2 weeks]. I'll give you a clear deadline before we start.",
    },
    {
        questions: ["Do you offer revisions?", "Can I request changes?", "Kaj-er pore change korte parbo?"],
        answer: "Yes, [2] rounds of revisions are included. Extra changes are charged separately.",
    },
    {
        questions: ["Do you offer support after delivery?", "What if something breaks after delivery?", "Delivery-r pore support dao?"],
        answer: "Yes, I fix any bug in my work for [7-14] days after delivery for free. Ongoing maintenance is available too.",
    },
    {
        questions: ["Will I get the source code?", "Do I get full ownership?", "Source code pabo?"],
        answer: "Yes, you get the full source code and full ownership once the project is paid.",
    },
    {
        questions: ["Is my project confidential?", "Do you keep client information private?", "Amar project-er information gopon thakbe?"],
        answer: "Yes, your project details stay private. I can sign an NDA if you need one.",
    },

    {
        questions: ["What is your work process?", "How do you work with clients?", "Tumi kivabe kaj koro?"],
        answer: "1) You share your idea. 2) I send a plan, price and deadline. 3) I build and show progress. 4) Revisions. 5) Delivery and support.",
    },
    {
        questions: ["How do I start a project with you?", "How can I order?", "Kaj shuru korbo kivabe?"],
        answer: "Just send me a message with a short description of what you need. I'll reply with questions and a quote.",
        link: { label: "Contact me", href: "#contact" },
    },
    {
        questions: ["What do you need from me to start?", "What information do you need?", "Kaj shuru korte ami ki dibo?"],
        answer: "Your goal, any design or reference sites you like, text and images (or I can use placeholders), and your deadline.",
    },
    {
        questions: ["How many hours do you work per day?", "When are you available?", "Tumi kon shomoy available thako?", "Working hours"],
        answer: "I'm usually available [time range] Bangladesh time.",
    },
    {
        questions: ["Do you work with international clients?", "Do you work with clients outside Bangladesh?", "Bidesh-er client er shathe kaj koro?"],
        answer: "Yes, I'm happy to work with clients anywhere. We can communicate by email, WhatsApp or Zoom.",
    },
    {
        questions: ["Do you work remotely?", "Remote e kaj koro?", "Is remote work okay?"],
        answer: "Yes, I work fully remotely.",
    },
    {
        questions: ["Do you work alone or in a team?", "Can you work in a team?", "Tumi ki team e kaj korte paro?"],
        answer: "Both. I'm comfortable working solo and I use Git workflows that fit well in a team.",
    },
    {
        questions: ["Can we collaborate on a project?", "Want to collaborate?", "Collab korbe amar shathe?"],
        answer: "I'd love to. Tell me about your idea and I'll let you know how I can help.",
        link: { label: "Contact me", href: "#contact" },
    },
    {
        questions: ["Are you looking for a job?", "Are you open to internships?", "Tumi ki job khujcho?", "Internship korte chao?"],
        answer: "I'm open to [internships / part-time / junior frontend roles]. Please send me the details.",
        link: { label: "Contact me", href: "#contact" },
    },
    
];


const STOP = new Set(["the", "a", "an", "is", "are", "do", "does", "of", "to", "and", "please"]);
const ANSWER_AT = 0.5; 
const SUGGEST_AT = 0.25; 

const normalize = (s) =>
    s.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();

const tokenize = (s) => normalize(s).split(" ").filter((t) => t && !STOP.has(t));

function dice(a, b) {
    if (a === b) return 1;
    if (a.length < 4 || b.length < 4) return 0;
    const counts = new Map();
    for (let i = 0; i < a.length - 1; i++) {
        const g = a.slice(i, i + 2);
        counts.set(g, (counts.get(g) || 0) + 1);
    }
    let hits = 0;
    for (let i = 0; i < b.length - 1; i++) {
        const g = b.slice(i, i + 2);
        const c = counts.get(g) || 0;
        if (c > 0) {
            hits++;
            counts.set(g, c - 1);
        }
    }
    return (2 * hits) / (a.length + b.length - 2);
}

const tokenSim = (a, b) => {
    if (a === b) return 1;
    const d = dice(a, b);
    return d >= 0.75 ? d : 0;
};

const items = FAQ.flatMap((f, idx) => f.questions.map((q) => ({ idx, tokens: tokenize(q) })));
const df = new Map();
for (const it of items) for (const t of new Set(it.tokens)) df.set(t, (df.get(t) || 0) + 1);
const idf = (t) => Math.log((items.length + 1) / ((df.get(t) || 0) + 1)) + 1;

function score(userTokens, qTokens) {
    if (!userTokens.length || !qTokens.length) return 0;

    const best = (t, pool) => Math.max(0, ...pool.map((x) => tokenSim(t, x)));

    let covNum = 0, covDen = 0;
    for (const u of userTokens) {
        covNum += idf(u) * best(u, qTokens);
        covDen += idf(u);
    }
    let preNum = 0, preDen = 0;
    for (const q of qTokens) {
        preNum += idf(q) * best(q, userTokens);
        preDen += idf(q);
    }
    const cov = covNum / covDen;
    const pre = preNum / preDen;
    return cov + pre === 0 ? 0 : (2 * cov * pre) / (cov + pre);
}

export function findAnswer(input) {
    const userTokens = tokenize(input);
    if (!userTokens.length) return { answer: FALLBACK };

    const perEntry = new Map();
    for (const it of items) {
        const s = score(userTokens, it.tokens);
        if (s > (perEntry.get(it.idx) ?? 0)) perEntry.set(it.idx, s);
    }
    const ranked = [...perEntry.entries()].sort((a, b) => b[1] - a[1]);
    const [topIdx, topScore] = ranked[0] ?? [-1, 0];

    if (topScore >= ANSWER_AT) return FAQ[topIdx];

    const close = ranked.filter(([, s]) => s >= SUGGEST_AT).slice(0, 3);
    if (close.length) {
        return {
            answer: "I'm not sure I got that. Did you mean one of these?",
            suggestions: close.map(([i]) => FAQ[i].questions[0]),
        };
    }
    return { answer: FALLBACK };
}

export const SUGGESTIONS = FAQ.slice(0, 4).map((f) => f.questions[0]);