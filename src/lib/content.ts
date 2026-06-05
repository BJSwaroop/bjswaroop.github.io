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
    { label: 'What I Do', href: '#whatido' },
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

// ═══════════════════════════════════════════
// "What I do" - expanding capability rows (reference-style)
// Every line here is grounded in the roles / systems data below.
// ═══════════════════════════════════════════
export const whatIDo = {
  label: '// WHAT I DO',
  heading: 'What I do.',
  intro: 'Five things companies hire me for. Hover any one to open it.',
  items: [
    {
      title: 'Brand & content leadership',
      tag: 'Strategy to ship',
      body: 'I own the narrative, the voice and the content engine for one of India’s most selective engineering schools. Five channels, four pods, agencies and interns, all pointed at one story.',
      points: [
        'Set the brand voice and the content calendar',
        'Run 30 to 40 day sprints tied to admissions',
      ],
    },
    {
      title: 'Organic growth from zero',
      tag: 'Audience building',
      body: 'I grow channels without paid spend, the slow way that compounds.',
      growth: [
        { name: 'SST YouTube', from: 4, to: 78 },
        { name: 'SST LinkedIn', from: 2, to: 17 },
        { name: 'SST Instagram', from: 4, to: 26 },
        { name: 'My YouTube', from: 80, to: 460 },
      ],
      points: [
        'Content-market fit in Telugu and English',
        'Distribution you own, not attention you rent',
      ],
    },
    {
      title: 'Films that build belief',
      tag: 'Story & production',
      body: 'Brand films, fest after-movies, a founder shoot in San Francisco, student-story series. The high-trust content people watch before a big decision.',
      points: [
        'Direct end to end, script to final cut',
        'The films parents watch before saying yes',
      ],
    },
    {
      title: 'AI content systems',
      tag: 'Leverage',
      body: 'I build the machine, not just the post. Custom engines that research, write, generate and publish, so a lean team ships at agency scale.',
      points: [
        'Carousels, reels and replies on autopilot',
        '20+ custom skills that carry my voice',
      ],
    },
    {
      title: 'Teams & pipelines',
      tag: 'People & process',
      body: 'I hire, train and run creators. I built a student UGC engine that acquires at roughly 75% lower CAC than influencer campaigns, and keeps running without me.',
      points: [
        'Recruited and trained a creator community',
        'Systems that outlast any single hire',
      ],
    },
  ],
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
  subheading: 'The worries I hear most when companies hire for content. Tap every one that sounds familiar.',
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
        'Own brand and content across five SST channels.',
        'Grew them organically: YouTube 4K to 78K, LinkedIn 2K to 17K, Instagram 4K to 26K.',
        'Lead four pods plus agencies, freelancers and interns, hiring to shipping.',
        'Built a student UGC engine acquiring at ~75% lower CAC than influencers.',
        'Run 30 to 40 day sprints, every video with a conversion destination.',
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
        'A cohort platform with XP, accountability loops and WhatsApp doubt-solving.',
        'The 21-day LinkedIn Challenge that gets students visible and active.',
        'codewithswaroop.com and a mobile app: 200K+ users, 50K+ downloads.',
        'Profitable from the first cohort, no outside funding.',
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
        'My own YouTube: 80K to 460K subscribers in two years, all organic.',
        'A million-plus followers from zero, no paid spend. The moat brands pay millions for.',
        '28.8M YouTube views and 2M+ watch hours, in Telugu and Tenglish.',
        'Proof I understand content-market fit where most brands write the market off.',
      ],
      quote: 'Your language was never the limitation. It’s a distribution channel.',
    },
  ],
};

export const work = {
  label: '// 05 · WORK',
  heading: 'Selected Work',
  intro: 'Campaigns I led at Scaler School of Technology. Real videos, real outcomes.',
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
      link: { label: 'Watch the film', href: 'https://www.youtube.com/watch?v=dhaw2e6MBQ4' },
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
      link: {
        label: 'Watch the series',
        href: 'https://www.youtube.com/watch?v=JOFrIlK68ck&list=PL_aMuHABgX0j0KtjKUvZNw23FM_5Og525',
      },
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
      link: {
        label: 'Watch the sessions',
        href: 'https://www.youtube.com/watch?v=M7H1SHc1f2Q&list=PL_aMuHABgX0g_HRBGUR0LbYm8QhDf-hy8',
      },
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
      { title: 'Python Full Course · Telugu', url: 'https://www.youtube.com/watch?v=GmdGv5ndX54' },
      { title: 'Java Full Course · Telugu', url: 'https://www.youtube.com/watch?v=d530rd7m_1E' },
      { title: 'AI Career Roadmap 2026', url: 'https://www.youtube.com/watch?v=SvLfQR3hz3M' },
      { title: '6-Month DSA Roadmap', url: 'https://www.youtube.com/watch?v=4Kwd78XCmQU' },
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
      quote: `We have an entire organization with Scaler Academy, SST, dozens of teams, and somehow, when anyone needs something done with content, video, or brand, the name that comes up is Swaroop. It's not his title. It's his speed. You give him something on Monday, it's done by Tuesday, and it's better than what you asked for. We asked for 100%, he delivered 200%. I took him to San Francisco for a critical project because I knew he'd execute. Because he's a creator himself, he understands audience, distribution, and storytelling at a level most brand hires simply don't. Not everyone can do what he does.`,
      name: 'Anshuman Singh',
      title: 'Co-founder, Scaler / InterviewBit',
    },
    {
      quote: `I don't review Swaroop's work anymore. Not because I don't care, because I don't need to. I hand him a problem, and he owns it end to end. The brief, the team, the output, the iteration, all of it. He's built and run his own creator business, so he thinks like an operator, not an employee. There are very few people you can trust with that level of autonomy. When I say I leave things on him with 100% trust, I mean it literally.`,
      name: 'Manmeet Singh Akali',
      title: 'VP, Scaler School of Technology',
    },
    {
      quote: `What struck me about Swaroop was that he never operated like an intern. We'd give him a task expecting deliverables, and he'd come back thinking about the business, how it scales, how it impacts revenue, what the second-order effects are. He has the instinct of someone who's built their own thing, because he has. More practical understanding of growth, audience, and distribution than most MBA grads I've worked with. We hadn't found anyone like him. That's why we didn't let him leave. We made him our first full-time hire.`,
      name: 'Sanchit Srivastava',
      title: 'VP, Goldman Sachs',
      linkedin: 'https://www.linkedin.com/in/sanchitsrivastava/',
    },
  ],
};

export const empire = {
  label: '// 06 · ECOSYSTEM',
  heading: 'The Content Ecosystem I Built',
  subheading: '18 channels and systems. One flywheel.',
  description:
    'Channels and AI systems, all wired together. The personal channels build trust, the SST channels convert, the AI systems keep it running. One person, not a 50-person team.',
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
    'I don’t just use AI, I build with it. Each system does the work of a small team.',
  engines: [
    {
      name: 'Carousel Engine',
      description: 'Researches a topic, writes the slides, exports finished carousels. Hands-off.',
      stat: '5 a day',
    },
    {
      name: 'Reel Engine',
      description: 'Scripts reels, scores each against a rubric, and queues the winners.',
      stat: 'Scripted + scored',
    },
    {
      name: 'Reply System',
      description: 'Auto-drafts collab-email replies with the right channel, pricing and tone.',
      stat: 'Auto-draft',
    },
    {
      name: 'CreatorOS',
      description: 'A multi-agent pipeline that researches, writes and schedules LinkedIn posts.',
      stat: 'Multi-agent',
    },
    {
      name: 'BrandForge',
      description: 'Turns a brand’s docs and calls into a ready-to-use voice guide in days.',
      stat: 'Voice guides',
    },
    {
      name: 'Content Stack',
      description: '20+ custom AI skills, all writing in my voice.',
      stat: '20+ skills',
    },
  ],
};

export const about = {
  label: '// 08 · THE BACKSTORY',
  pullQuote: 'I am someone who always wanted to make things useful for people.',
  paragraphs: [
    'I run brand and content at Scaler School of Technology, one of India’s most selective engineering colleges. Five channels, four pods, agencies and interns, and a content engine that feeds admissions. I joined as the first content hire. Today I lead the brand.',
    'Alongside that, I built an audience past a million from zero, my own YouTube going 80K to 460K in two years. It started in 2021 with Python tutorials in Telugu on a screen recorder, no plan, no audience. That following is a distribution channel and a trust engine, not a vanity number. I also founded MentiBY, the cohort platform I wish I’d had in college.',
    'I’m 24, from Bhimavaram. ECE, not CS. EAMCET rank 6,464. Not placed on campus. The same person who couldn’t crack the IIT entrance now gets invited to speak at IIT Tirupati. It was never luck, it was work that slowly turned into luck. And I’m still building.',
  ],
  image: '[IMAGE: Candid portrait of Swaroop, approachable, warm lighting]',
};

export const journey = {
  label: '// 09 · THE JOURNEY',
  heading: 'The Journey',
  milestones: [
    {
      year: '2021',
      org: 'YouTube · Tech Creator',
      title: 'Started from zero',
      body: 'Launched Swaroop Talks, teaching coding in Telugu on a screen recorder with no audience. It grew into 460K+ subscribers and 28.8M views.',
    },
    {
      year: '2022',
      org: 'Enligence Technologies · Intern',
      title: 'Engineer in the trenches',
      body: 'Full-stack intern shipping real products. The engineering foundation under everything I build now.',
    },
    {
      year: '2023',
      org: 'MentiBY · Founder',
      title: 'Built what I wish I had',
      body: 'Founded MentiBY, a cohort platform: 200K+ users, 50K+ downloads, profitable from cohort one. Also shipped full-stack work at Curepoint.',
    },
    {
      year: '2024',
      org: 'Scaler · Organic Growth Specialist',
      title: 'Into growth',
      body: 'Joined Scaler School of Technology as its first content hire, and started growing the channels from scratch.',
    },
    {
      year: '2025',
      org: 'Scaler · Content & Brand Lead',
      title: 'Owning the brand',
      body: 'Took the brand and the content engine across every channel, and built the AI systems behind a lean, agency-scale team.',
    },
    {
      year: '2026',
      org: 'Scaler · Associate Director of Brand',
      title: 'Leading brand & content',
      body: 'Promoted to Associate Director. 1M+ organic audience across 18 channels and systems.',
    },
    {
      year: 'Now',
      org: '',
      title: 'Still building',
      body: 'Engineer by degree, creator by grit, growth marketer by design. And a lot left to build.',
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
    {
      name: 'TEDxACE Engineering College',
      type: 'TEDx Speaker',
      location: 'India',
      link: 'https://youtu.be/Nk0XLV0lvpQ',
    },
    { name: 'IIT Tirupati', type: 'Guest Lecturer', location: 'Tirupati, AP' },
    { name: 'Future in Tech After XII Summit', type: 'Summit', location: 'Hyderabad, May 2026' },
    { name: 'Personal Branding Workshops', type: 'Workshop Series', location: 'AP & Telangana' },
  ],
};

export const contact = {
  label: '// 12 · CONTACT',
  heading: 'Let’s Talk',
  subheading: 'Whether you’re hiring, want to collaborate, or need a speaker, a WhatsApp message is all it takes.',
  email: 'workwithswaroop@gmail.com',
  whatsapp:
    'https://wa.me/918917564117?text=Hi%20Swaroop%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect.',
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
