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
  headline: 'Engineer by degree. Creator by grit. Growth marketer by design.',
  subtitle:
    'Associate Director, Brand & Content at Scaler School of Technology  ·  1M+ organic audience  ·  18 channels & systems  ·  24 years old',
  cta: { label: 'Get in touch', href: '#contact' },
  ctaSecondary: { label: 'See what I run', href: '#roles' },
};

export const proof = {
  label: '// 01 · SCOPE',
  stats: [
    { value: 5, suffix: '', label: 'Brand Channels Owned' },
    { value: 4, suffix: '', label: 'Content Pods Led' },
    { value: 18, suffix: '', label: 'Channels & Systems Run' },
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
        'Grew those channels organically: YouTube 4K to 78K, LinkedIn 2K to 17K, Instagram 4K to 26K.',
        'Lead four pods and manage agencies, freelancers, editors and interns, from hiring to shipping.',
        'Built a student UGC creator engine that acquires at roughly 75% lower CAC than influencer campaigns.',
        'Run 30 to 40 day sprints and built the outreach-to-admission plan, so every video has a conversion destination.',
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
        'Shipped codewithswaroop.com and a mobile app: 200K+ registered users and 50,000+ downloads.',
        'Profitable from the first cohort, with no outside funding.',
      ],
      quote:
        'When I went to college, I didn’t have anyone to tell me the reality. So I built the thing I wish I’d had.',
    },
    {
      number: '03',
      title: 'The Audience I Bring',
      org: '1M+ followers · Since 2021',
      role: 'What I bring to the table',
      bullets: [
        'Grew my own YouTube from 80K to 460K subscribers in two years, all organic.',
        'Over a million followers across platforms, built from zero with no paid spend. The distribution moat most brands spend millions trying to buy.',
        '28.8M YouTube views and 2M+ watch hours, all in Telugu and Tenglish.',
        'Real proof I understand content-market fit in a language and market most brands write off.',
      ],
      quote: 'Your language was never the limitation. It’s a distribution channel.',
    },
  ],
};

export const work = {
  label: '// 05 · WORK',
  heading: 'Selected Work',
  intro: 'Campaigns I led at Scaler School of Technology. Tap any card to open it.',
  growth: [
    { channel: 'SST YouTube', from: '4K', to: '78K' },
    { channel: 'SST LinkedIn', from: '2K', to: '17K' },
    { channel: 'SST Instagram', from: '4K', to: '26K' },
  ],
  campaigns: [
    {
      title: 'Meta x PyTorch OpenEnv Hackathon',
      category: 'Hackathon Coverage',
      summary:
        'Owned content for India’s first OpenEnv hackathon, hosted at SST. The recap was praised by the Meta and PyTorch teams.',
      details: [
        'Two days of full coverage: a tech-heavy recap film, the top-15 announcement, a bootcamp explainer, 16+ reels and 50+ stories.',
        'Ran an automated posting pipeline and a 32-handle DM tracker through the whole event.',
      ],
      impact:
        'Put SST at the centre of a global AI moment. The recap crossed 10K+ views and doubled the reach of any prior SST event.',
      link: { label: 'Watch the recap', href: 'https://www.youtube.com/watch?v=VEx10IGo4do' },
    },
    {
      title: 'SST Launch Film, San Francisco',
      category: 'Brand Film',
      summary:
        'Produced a founder-led brand film shot in San Francisco, run end to end remotely from India.',
      details: [
        'Coordinated the San Francisco crew for a week from India, across a 12+ hour time difference.',
        'Scouted venues, secured location permissions, and planned every shot around sun direction, time of day and on-site construction.',
        'Protected the founder’s time so the shoot day ran without a single hiccup.',
      ],
      impact: 'A flagship brand asset, delivered flawlessly across the world, coordinated by one person.',
      link: null,
    },
    {
      title: 'UGC Creator Engine & Team',
      category: 'Growth System',
      summary:
        'Built a student creator community and a UGC pipeline that brings students in at a fraction of influencer cost.',
      details: [
        'Recruited and trained student creators into a real, repeatable content team.',
        'Built it as a system, not a pile of one-off automations, so it keeps running without me.',
      ],
      impact:
        'UGC acquired students at roughly a quarter of the cost of influencer campaigns, about 75% lower CAC, while building the trust that moves enrollment decisions.',
      link: null,
    },
    {
      title: 'Content-Led Enrollment Funnel',
      category: 'Performance',
      summary: 'The films that move students from first touch to enrollment.',
      details: [
        'Top-of-funnel awareness videos and bottom-of-funnel decision content: fees, ROI and outcomes.',
        'A 50-second JEE Fast-Track ad and outreach-to-admission sprint content, each with a conversion destination.',
      ],
      impact:
        'Most of SST’s organic inbound now comes from content-led campaigns, and the decision cycle dropped from weeks to days.',
      link: null,
    },
    {
      title: 'Yugaantar Cultural Fest, After-Movie',
      category: 'Event Film',
      summary: 'Directed the official after-film for SST’s multi-day cultural fest.',
      details: [
        'Captured the full fest end to end, then ran selects, edit and delivery.',
        'Owned the creative from the first frame to the final cut.',
      ],
      impact: 'The kind of high-emotion film that makes prospective students, and their parents, want in.',
      link: { label: 'Watch the after-movie', href: 'https://www.youtube.com/watch?v=mdsiLaamxz4' },
    },
    {
      title: 'India AI Impact Summit, Coverage',
      category: 'Event Film',
      summary: 'Led SST’s four-day coverage of India’s largest AI summit.',
      details: [
        'Four days on the ground deciding what was worth covering and what was not.',
        'Shaped hours of footage into one tight, watchable film.',
      ],
      impact: 'Tied SST to the national AI conversation, not just its own campus.',
      link: { label: 'Watch the coverage', href: 'https://www.youtube.com/watch?v=z0OfayzTc2A' },
    },
    {
      title: 'Student Story Series',
      category: 'Brand Storytelling',
      summary: 'Narrative profiles of real students that became SST’s highest-trust content.',
      details: [
        'Profiles of students like Vivek Singh (Anthropic Fellowship), a GSoC 2026 triple selection, and Pratyush (Trackroo founder), plus a parent testimonial series.',
        'Real stories, nothing staged.',
      ],
      impact: 'The content parents watch before saying yes to a ₹10L/year decision.',
      link: null,
    },
    {
      title: 'Super Mentor Sessions',
      category: 'In-house Series',
      summary: 'Captured industry-leader visits in-house and shipped each one within a day or two.',
      details: [
        'Founders and senior engineers on campus, including Bhavin Turakhia and the lead engineer behind ChatGPT Agent.',
        'In-house capture, fast edit, fast ship. Turnaround in days, not weeks.',
      ],
      impact: 'A steady drumbeat of credibility content that keeps the brand warm between the big moments.',
      link: { label: 'Watch a session', href: 'https://www.youtube.com/watch?v=boox_CgmL68' },
    },
    {
      title: 'Robodog Hero Campaign',
      category: 'Social Campaign',
      summary: 'Took a Unitree robot dog out of campus and across Bangalore to make scroll-stopping reels.',
      details: [
        'Built a hero campaign around one striking idea and shot it on location.',
        'Turned lab hardware into a brand moment people actually shared.',
      ],
      impact: 'High-reach social content that made the brand feel alive, not institutional.',
      link: { label: 'See it on Instagram', href: 'https://www.instagram.com/p/DUDZZkDEegy/' },
    },
  ],
  flagship: {
    heading: 'On my own channel',
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
  subheading: '18 channels and systems. One flywheel.',
  description:
    'The content channels and AI systems I run, all wired together. Every channel feeds the next: the personal channels build trust, the SST channels convert, and the AI systems keep it all running on their own. It’s how one person keeps the whole thing moving without a 50-person team. Hire me and you get the machine, not just one more name on the org chart.',
  rings: [
    {
      name: 'Personal Channels',
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
      name: 'SST Channels',
      color: 'blue',
      properties: [
        { name: 'SST YouTube', platform: 'YouTube', handle: '@ScalerSchoolOfTechnology' },
        { name: 'SST Instagram', platform: 'Instagram', handle: '@scaler_school_of_technology' },
        { name: 'SST LinkedIn', platform: 'LinkedIn', handle: 'Scaler School of Technology' },
        { name: 'SST Twitter / X', platform: 'X', handle: 'Scaler SST' },
        { name: 'SST Blog', platform: 'Website', handle: 'scaler.com' },
      ],
    },
    {
      name: 'AI Systems',
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
    'Alongside that, I built an audience of over a million people across a dozen-plus channels, with my own YouTube going from 80K to 460K subscribers in the last two years alone. It started in January 2021 with Python tutorials in Telugu, recorded on a screen recorder with no plan and no audience. That following isn’t a vanity number. It’s a distribution channel, a trust engine, and proof that I understand content-market fit from the ground up. I also founded MentiBY, a cohort platform that gives engineering students the guidance I never had.',
    'I’m 24, from Bhimavaram in Andhra Pradesh. ECE branch, not CS. EAMCET rank 6,464. I didn’t get placed on campus. The same person who couldn’t crack the IIT entrance now gets invited to speak at IIT Tirupati. People used to say I got lucky. It was never luck. It was work that slowly turned into luck. And I’m still building.',
  ],
  image: '[IMAGE: Candid portrait of Swaroop, approachable, warm lighting]',
};

export const journey = {
  label: '// 09 · THE JOURNEY',
  heading: 'The Journey',
  milestones: [
    {
      year: '2021',
      title: 'Started from zero',
      body: 'Launched Swaroop Talks and shipped four videos on day one, teaching coding in Telugu on a screen recorder with no audience.',
    },
    {
      year: '2024',
      title: 'The pivot',
      body: 'Joined Scaler School of Technology as its first content hire, and founded MentiBY Technologies, the platform I wish I’d had in college.',
    },
    {
      year: 'Since 2024',
      title: 'Building the brand',
      body: 'Associate Director, Brand & Content. Grew five SST channels from scratch and built the AI systems behind a lean, agency-scale team.',
    },
    {
      year: 'Now',
      title: 'Still building',
      body: 'A million-plus organic audience across 18 channels and systems, and a lot left to build.',
    },
  ],
};

export const brands = {
  label: '// 10 · BRANDS',
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
  label: '// 11 · SPEAKING',
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
  label: '// 12 · CONTACT',
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
