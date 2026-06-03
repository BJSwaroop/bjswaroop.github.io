// src/lib/content.ts
// ═══════════════════════════════════════════════════════════
// SWAROOP PORTFOLIO - Content Data (Hiring Audience Version)
// All copy lives here. Edit text here, never in the JSX.
// ═══════════════════════════════════════════════════════════
// PRIVATE (pitch-deck only, never rendered): rate card, lifetime
// earnings, salary and phone are intentionally absent from this file.

export const siteConfig = {
  name: 'Swaroop',
  fullName: 'B. Jyothi Swaroop',
  title: 'Swaroop · Brand & Content Leader',
  description:
    'I build brands students trust, and the systems that scale them. Associate Director, Brand & Content at Scaler School of Technology, with a 1M+ organic audience built from zero.',
  url: 'https://bjswaroop.github.io',
  ogImage: '/images/og-image.jpg',
  email: 'workwithswaroop@gmail.com',
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID || '',
};

export const nav = {
  links: [
    { label: 'What I Run', href: '#roles' },
    { label: 'Work', href: '#work' },
    { label: 'Ecosystem', href: '#empire' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  resume: { label: 'CV', href: '/swaroop-cv.pdf' },
};

export const hero = {
  wordmark: 'SWAROOP',
  headline: 'I build brands students trust, and the systems that scale them.',
  subtitle:
    'Associate Director, Brand & Content at Scaler School of Technology  ·  1M+ organic audience  ·  18 content properties  ·  24 years old',
  cta: { label: 'Get in touch', href: '#contact' },
  ctaSecondary: { label: 'See what I run', href: '#roles' },
};

export const proof = {
  label: '// 01 · SCOPE',
  stats: [
    { value: 5, suffix: '', label: 'Brand Channels Owned' },
    { value: 4, suffix: '', label: 'Content Pods Led' },
    { value: 18, suffix: '', label: 'Properties in the Ecosystem' },
    { value: 1_000_000, suffix: '+', label: 'Organic Audience' },
    { value: 30, suffix: '+', label: 'Brand Collaborations' },
    { value: 24, suffix: '', label: 'Years Old' },
  ],
  caption: 'Content-led campaigns drive the majority of SST’s organic inbound.',
};

// ═══════════════════════════════════════════
// "Sound familiar?" - objection-handling flip cards
// ═══════════════════════════════════════════
export const hiring = {
  label: "// 02 · IF YOU'RE HIRING",
  heading: 'Sound familiar?',
  subheading: 'These are the worries I hear most when companies hire for content. Tap any one.',
  painPoints: [
    {
      pain: '“They do the tasks but don’t own the outcome.”',
      counter:
        'I don’t wait for a brief. When I see a gap, I build the fix, and I stay on the hook for whether it actually worked.',
      trait: 'Ownership',
    },
    {
      pain: '“They need a team of ten to produce anything.”',
      counter:
        'I built AI systems that do the work of a small agency. One of them ships five Instagram carousels a day, on its own.',
      trait: 'Lean by design',
    },
    {
      pain: '“They run one channel, not an ecosystem.”',
      counter:
        'I run 18 handles at once across YouTube, Instagram, LinkedIn, sites and apps, and I wire them so each one feeds the next.',
      trait: 'Ecosystem thinking',
    },
    {
      pain: '“They write strategy decks but can’t ship.”',
      counter:
        'On day one of my channel I shipped four videos. I build the strategy, then I build the machine that runs it.',
      trait: 'I ship',
    },
    {
      pain: '“They chase vanity metrics, not business results.”',
      counter:
        'Every piece of content I make knows where it’s sending the viewer. I care what happens after the view, not just the view.',
      trait: 'Funnel first',
    },
    {
      pain: '“New hires take months to learn our brand voice.”',
      counter:
        'Reading a brand and getting its voice right is the core of my job. I built a tool that turns a brand’s docs into a voice guide in days.',
      trait: 'Brand instinct',
    },
  ],
  closingLine: 'If even one of these landed, that’s a good reason to talk.',
  cta: { label: 'workwithswaroop@gmail.com', href: 'mailto:workwithswaroop@gmail.com' },
};

// ═══════════════════════════════════════════
// "What you get" - strengths the flip cards don't cover
// ═══════════════════════════════════════════
export const qualities = {
  label: '// 03 · WORKING WITH ME',
  heading: 'What you get.',
  items: [
    {
      trait: 'Full-stack on content',
      proof:
        'Strategy, scripts, shoot direction, edit reviews, distribution, and the numbers afterward. I can hold the whole pipeline, not one slice of it.',
    },
    {
      trait: 'A feel for audiences',
      proof:
        'I grew a following past a million from zero, in Telugu, from a tier-3 college. I know what makes people stop, watch, and come back.',
    },
    {
      trait: 'Storytelling that builds belief',
      proof:
        'At SST my student-story films became the content parents trust most. Real stories move people in a way an ad never will.',
    },
    {
      trait: 'I make the people around me sharper',
      proof:
        'I’ve mentored thousands of students and I run pods, agencies and interns. The work gets better, and so do the people doing it.',
    },
    {
      trait: 'Honest over hype',
      proof:
        'No brochure language. I would rather earn trust with something real than win attention with something loud. That’s how you build a brand that lasts.',
    },
  ],
};

export const roles = {
  label: '// 04 · WHAT I RUN',
  heading: 'What I Run.',
  items: [
    {
      number: '01',
      title: 'Brand & Content at Scale',
      org: 'Scaler School of Technology · Since 2024',
      role: 'Associate Director, Brand & Content',
      bullets: [
        'Own brand and content across five SST channels: YouTube, Instagram, LinkedIn, X and the blog.',
        'Lead four pods: Brand and Content, Digital Growth, Student Media Club, and Innovation Lab storytelling.',
        'Hire, brief, review and ship with agencies, freelancers, editors and interns.',
        'Run 30 to 40 day content sprints that feed the admissions funnel.',
        'Built the outreach-to-admission content plan, so every video knows where it’s sending the student.',
      ],
      quote:
        'Any brand can post content. But not every brand can build belief. Especially in education, belief matters a lot.',
    },
    {
      number: '02',
      title: 'Founder & Product Builder',
      org: 'MentiBY Technologies · Since 2024',
      role: 'Founder',
      bullets: [
        'Built a cohort-based learning platform with XP, accountability loops and WhatsApp doubt-solving.',
        'Designed the 21-day LinkedIn Challenge that gets students visible and active.',
        'Shipped codewithswaroop.com and a mobile app, with 50,000+ downloads.',
        'Profitable from the first cohort, with no outside funding.',
      ],
      quote:
        'When I went to college, I didn’t have anyone to tell me the reality. So I built the thing I wish I’d had.',
    },
    {
      number: '03',
      title: 'The Audience I Bring',
      org: '1M+ followers · 18 properties · Since 2021',
      role: 'What I bring to the table',
      bullets: [
        'Over a million organic followers, built from zero with no paid spend. The kind of distribution moat most brands spend millions trying to buy.',
        '28.8M YouTube views and 2M+ watch hours, all organic, all in Telugu and Tenglish.',
        'I can build an audience in a language and a market most brands write off.',
        'It’s real proof I understand content-market fit, not a slide that says I do.',
      ],
      quote: 'Your language was never the limitation. It’s a distribution channel.',
    },
  ],
};

export const work = {
  label: '// 05 · WORK',
  heading: 'Selected Work',
  projects: [
    {
      title: 'Meta OpenEnv AI Hackathon',
      subtitle: 'India’s first · Hosted at SST',
      description:
        'Ran the whole content operation: 16+ Reels, 50+ Stories, an after-film, voxpops, influencer activations with Kushal Vijay and Tharun Speaks, a 32-handle DM tracker, and an automated posting pipeline. The result: 2x the social reach of any prior SST event, and the highest single-event engagement SST has run.',
      tags: ['Content Ops', 'Event', 'AI'],
      image: '[IMAGE: Meta OpenEnv hackathon event photo]',
      featured: true,
    },
    {
      title: 'Content-Led Enrollment Engine',
      subtitle: 'SST Admissions Funnel',
      description:
        'Designed the content funnel for SST admissions: top-of-funnel YouTube scripts, a 50-second JEE Fast-Track ad, fee and ROI comparison films, and outreach-to-admission sprint content. Most of SST’s organic inbound now comes from content-led campaigns, and the student decision cycle dropped from weeks to days.',
      tags: ['Funnel', 'Performance', 'Strategy'],
      image: '[IMAGE: SST ad or funnel content screenshot]',
      featured: false,
    },
    {
      title: 'Student Story Series',
      subtitle: 'SST’s Highest-Trust Content',
      description:
        'Produced narrative profiles of real students: Vivek Singh (Anthropic Fellowship), a GSoC 2026 triple selection, Hemkesh, Archisman, Pratyush (Trackroo founder), and a parent testimonial series. It became the number one parent-facing trust asset, the thing parents watch before saying yes to a ₹10L/year decision.',
      tags: ['Brand', 'Storytelling', 'Video'],
      image: '[IMAGE: SST student story thumbnail collage]',
      featured: false,
    },
    {
      title: 'Future in Tech After XII Summit',
      subtitle: 'Hyderabad · May 2026',
      description:
        'Led the content for a large-format event aimed at students who just finished class XII. Event branding, the social campaign, on-ground capture, and the cut-downs we ran afterward.',
      tags: ['Event', 'Campaign', 'Branding'],
      image: '[IMAGE: Future in Tech event photo]',
      featured: false,
    },
  ],
  flagship: {
    heading: 'Most Watched',
    videos: [
      {
        title: 'Python Full Course Telugu',
        duration: '9 hours',
        views: '2M+',
        image: '[IMAGE: Python course YouTube thumbnail]',
        url: 'https://www.youtube.com/@SwaroopVITB',
      },
      {
        title: 'C Language Full Course',
        duration: 'Full length',
        views: '1.17M',
        image: '[IMAGE: C Language course thumbnail]',
        url: 'https://www.youtube.com/@SwaroopVITB',
      },
      {
        title: 'HTML Full Course',
        duration: 'Full length',
        views: '985K',
        image: '[IMAGE: HTML course thumbnail]',
        url: 'https://www.youtube.com/@SwaroopVITB',
      },
      {
        title: '24 Lakhs CTC in Tier-3',
        duration: 'Short',
        views: '548K',
        image: '[IMAGE: 24 Lakhs CTC thumbnail]',
        url: 'https://www.youtube.com/@SwaroopVITB',
      },
    ],
  },
};

// ═══════════════════════════════════════════
// Testimonials.
// The items below are REAL, lightly copy-edited reviews from students on
// codewithswaroop.com. They are attributed honestly.
//
// To add professional endorsements (a manager at Scaler, a brand partner,
// a peer, or a LinkedIn recommendation), paste them in the SAME shape with
// the real person's name and title, e.g.
//   { quote: '…', name: 'Full Name', title: 'VP of Growth, Company' },
// Real names and titles are what make testimonials convincing. See the note
// I left you in the chat about why these should be genuine.
// ═══════════════════════════════════════════
export const testimonials = {
  label: '// WHAT PEOPLE SAY',
  heading: 'What people say.',
  items: [
    {
      quote:
        'Because he’s a student himself, he actually understands how students think. Nothing he teaches ever feels out of reach.',
      name: 'Student',
      title: 'CodeWithSwaroop',
    },
    {
      quote:
        'Learning in Telugu made all the difference for me. Concepts I kept struggling with in English finally clicked.',
      name: 'Student',
      title: 'CodeWithSwaroop',
    },
    {
      quote:
        'The course is genuinely well structured and easy to follow, and getting something this useful at this price is rare.',
      name: 'Student',
      title: 'CodeWithSwaroop',
    },
  ],
};

export const empire = {
  label: '// 06 · ECOSYSTEM',
  heading: 'The Content Ecosystem I Built',
  subheading: '18 properties. One flywheel.',
  description:
    'Every property feeds the next. The personal channels build trust, the SST channels convert, and the infrastructure keeps it all running on its own. It’s how one person keeps 18 handles moving without a 50-person team. Hire me and you get the whole system, not just one more name on the org chart.',
  rings: [
    {
      name: 'Personal',
      color: 'amber',
      properties: [
        { name: 'Swaroop Talks', platform: 'YouTube', handle: '@SwaroopVITB' },
        { name: 'Code with Swaroop', platform: 'Instagram', handle: '@codewithswaroop' },
        { name: 'Raw Talks', platform: 'Instagram', handle: '@raw_talks_with_swaroop' },
        { name: 'Swaroop AI', platform: 'Instagram', handle: '@swaroop.ai_' },
        { name: 'MentiBY', platform: 'Platform', handle: 'mentiby.com' },
        { name: 'codewithswaroop.com', platform: 'Website', handle: 'codewithswaroop.com' },
        { name: 'LinkedIn', platform: 'LinkedIn', handle: '/in/swaroop-talks' },
      ],
    },
    {
      name: 'SST',
      color: 'blue',
      properties: [
        { name: 'SST YouTube', platform: 'YouTube', handle: 'SST Channel' },
        { name: 'SST Instagram', platform: 'Instagram', handle: 'SST Handle' },
        { name: 'SST LinkedIn', platform: 'LinkedIn', handle: 'SST Page' },
        { name: 'SST Twitter/X', platform: 'X', handle: 'SST Handle' },
        { name: 'SST Blog', platform: 'Website', handle: 'SST Blog' },
      ],
    },
    {
      name: 'Infrastructure',
      color: 'gray',
      properties: [
        { name: 'AI Carousel Engine', platform: 'System', handle: '5 posts/day' },
        { name: 'AI Reel Engine', platform: 'System', handle: 'SSML + critic' },
        { name: 'Brand Reply System', platform: 'System', handle: 'Automated' },
        { name: 'CreatorOS', platform: 'System', handle: 'Multi-agent' },
        { name: 'BrandForge AI', platform: 'System', handle: 'Voice guides' },
        { name: 'Content Stack', platform: 'System', handle: 'Custom skills' },
      ],
    },
  ],
};

export const frameworks = {
  label: '// 07 · HOW I THINK',
  heading: 'How I Think',
  subheading: 'A few ideas I operate by, and teach my teams.',
  items: [
    {
      name: 'The Flywheel',
      description:
        'Every piece of content feeds the next. Audience builds trust, trust supports the product, the product creates stories, the stories make more content. It compounds.',
    },
    {
      name: 'Build the Audience You Own',
      description:
        'Renting attention on someone else’s platform is fragile. Build an audience that’s yours, then point it at what matters.',
    },
    {
      name: 'Brands Pay for Action, Not Impressions',
      description:
        'The real value of content isn’t how many people saw it. It’s how many people did something because of it.',
    },
    {
      name: 'Start From the Conversion',
      description:
        'I plan backwards from the thing I want someone to do. Every video knows where it’s sending the viewer before I write a word.',
    },
    {
      name: 'AI Is Leverage, Not a Shortcut',
      description:
        'I use AI to multiply the voice, not replace it. Built right, a system produces agency-scale output without losing the human in it.',
    },
  ],
};

export const systems = {
  label: '// 07 · AI LEVERAGE',
  heading: 'How I Produce 10x With a Lean Team',
  subheading:
    'I don’t just use AI, I build content systems with it. Each one does the job that would normally take three to five people.',
  engines: [
    {
      name: 'Carousel Engine',
      description:
        'An Instagram carousel generator that runs on its own. It researches the topic, writes the slides, and exports finished PNGs. Five a day.',
      stat: '5 posts/day',
    },
    {
      name: 'Reel Engine',
      description:
        'A reel pipeline with SSML scripts, a critic that scores them against a rubric, HeyGen avatar generation, and an automated publishing queue.',
      stat: 'SSML + critic',
    },
    {
      name: 'Brand Reply System',
      description:
        'Drafts replies to collaboration emails. It picks the right channel, applies pricing logic, matches the audience, and keeps the tone consistent.',
      stat: 'Auto-draft',
    },
    {
      name: 'CreatorOS',
      description:
        'A multi-agent LinkedIn pipeline that researches, drafts, critiques, polishes and schedules. The whole loop runs without me babysitting it.',
      stat: 'Multi-agent',
    },
    {
      name: 'BrandForge AI',
      description:
        'Turns a brand’s documents, transcripts and calls into a usable voice and messaging guide. What used to take weeks now takes days.',
      stat: 'Voice guides',
    },
    {
      name: 'Content Stack',
      description:
        '20+ custom AI skills: long-form writer, short-form writer, collab assistant, knowledge base, all carrying my voice.',
      stat: '20+ skills',
    },
  ],
};

export const about = {
  label: '// 08 · THE BACKSTORY',
  pullQuote: 'I am someone who always wanted to make things useful for people.',
  paragraphs: [
    'I run brand and content at Scaler School of Technology, one of India’s most selective engineering colleges. Five channels, four pods, a mix of agencies, freelancers and interns, and a content engine that feeds admissions through 30 to 40 day sprints. I joined as the first content hire. Today I lead the brand.',
    'Alongside that, I built an audience of over a million people across 18 properties. It started in January 2021 with Python tutorials in Telugu, recorded on a screen recorder with no plan and no audience. That following isn’t a vanity number. It’s a distribution channel, a trust engine, and proof that I understand content-market fit from the ground up. I also founded MentiBY, a cohort platform that gives engineering students the guidance I never had.',
    'I’m 24, from Bhimavaram in Andhra Pradesh. ECE branch, not CS. EAMCET rank 6,464. I didn’t get placed on campus. The same person who couldn’t crack the IIT entrance now gets invited to speak at IIT Tirupati. People used to say I got lucky. It was never luck. It was work that slowly turned into luck. And I’m still building.',
  ],
  image: '[IMAGE: Candid portrait of Swaroop, approachable, warm lighting]',
};

export const brands = {
  label: '// 09 · BRANDS',
  heading: 'Collaborations',
  cta: { label: 'For collaborations', href: 'mailto:workwithswaroop@gmail.com' },
  list: [
    'Scaler',
    'NxtWave',
    'GeeksforGeeks',
    'Replit',
    'Coding Ninjas',
    'College Vidya',
    'Odin School',
    'Hostinger',
    'AWS Builder Center',
    'Masai',
    'NMIMS',
    'Target Test Prep',
    'Woxsen',
    'Tata AIA',
    'Cashify',
    'HP',
    'Spotify',
    'MuleRun',
    'SimpliLearn',
    'Cars24',
    'Network18',
    'TestSprite',
  ],
};

export const speaking = {
  label: '// 10 · SPEAKING',
  heading: 'Speaking',
  cta: { label: 'Invite me to speak', href: '#contact' },
  events: [
    { name: 'TEDxACE Engineering College', type: 'TEDx Speaker', location: 'India' },
    { name: 'IIT Tirupati', type: 'Guest Lecturer', location: 'Tirupati, AP' },
    { name: 'Future in Tech After XII Summit', type: 'Summit', location: 'Hyderabad, May 2026' },
    { name: 'Personal Branding Workshops', type: 'Workshop Series', location: 'AP & Telangana' },
    { name: 'Smart India Hackathon', type: 'Mentor', location: 'National' },
  ],
};

export const contact = {
  label: '// 11 · CONTACT',
  heading: 'Let’s Talk',
  subheading: 'Whether you’re hiring, want to collaborate, or need a speaker, one email is all it takes.',
  email: 'workwithswaroop@gmail.com',
  socials: [
    { platform: 'YouTube', url: 'https://www.youtube.com/@SwaroopVITB', label: '@SwaroopVITB' },
    { platform: 'Instagram', url: 'https://instagram.com/codewithswaroop', label: '@codewithswaroop' },
    { platform: 'Instagram', url: 'https://instagram.com/raw_talks_with_swaroop', label: '@raw_talks' },
    { platform: 'Instagram', url: 'https://instagram.com/swaroop.ai_', label: '@swaroop.ai_' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/swaroop-talks', label: '/in/swaroop-talks' },
    { platform: 'Website', url: 'https://codewithswaroop.com', label: 'codewithswaroop.com' },
    { platform: 'MentiBY', url: 'https://mentiby.com', label: 'mentiby.com' },
  ],
};

export const footer = {
  copyright: `© ${new Date().getFullYear()} B. Jyothi Swaroop. All rights reserved.`,
  location: 'Bangalore, India',
};
