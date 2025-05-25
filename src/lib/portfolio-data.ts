// Define types for projects
export type ProjectCategory = 'All' | 'Web Design' | 'E-commerce' | 'Branding' | 'Mobile App' | 'UI/UX Design' | 'Web App';

export type Project = {
  id: number;
  title: string;
  category: ProjectCategory | ProjectCategory[];
  clientType: string;
  clientAudience: string;
  overview: string;
  challenge: string;
  solution: string;
  features: string[];
  technologies: string[];
  results: string[];
  images: string[];
  thumbnailImage?: string;
  testimonial?: {
    text: string;
    author: string;
    position: string;
    avatar?: string;
  };
  deliverables: string[];
  timeline: string;
  year: number;
};

// Portfolio project data
export const projects: Project[] = [
  {
    id: 1,
    title: 'Lumina Finance Dashboard',
    category: ['Web App', 'UI/UX Design'],
    clientType: 'Fintech Startup',
    clientAudience: 'Financial advisors and individual investors',
    overview: 'A comprehensive financial dashboard that helps users track investments, analyze market trends, and make data-driven decisions.',
    challenge: "Lumina needed a sophisticated yet intuitive dashboard that could present complex financial data in an accessible way. Their target users ranged from professional financial advisors to casual investors, requiring an interface that could scale in complexity. The existing solutions in the market were either too simplified or overwhelmingly complex.",
    solution: 'I designed and developed a modular dashboard with progressive disclosure of information. The interface uses a card-based layout that allows users to customize their view based on expertise level. Advanced data visualization techniques make complex financial information immediately understandable, while maintaining depth for professional analysis.',
    features: [
      'Real-time portfolio tracking with performance metrics',
      'Interactive charts for historical analysis and trend identification',
      'Customizable dashboard with drag-and-drop interface',
      'Risk assessment tools with predictive modeling',
      'Market news integration with sentiment analysis',
      'Goal tracking and financial planning tools',
      'Notification system for price alerts and portfolio changes'
    ],
    technologies: [
      'React with TypeScript for type-safe development',
      'D3.js for advanced data visualizations',
      'Redux for state management',
      'TailwindCSS for responsive design',
      'Node.js backend with Express',
      'MongoDB for user preferences and settings',
      'WebSockets for real-time data updates',
      'Jest and React Testing Library for comprehensive testing'
    ],
    results: [
      'Attracted over 25,000 active users within first six months',
      '92% user satisfaction rate based on in-app surveys',
      'Featured in "Financial Technology Today" as an innovative solution',
      'Reduced average decision-making time by 47% according to user studies',
      'Successfully secured Series A funding based on platform traction',
      'Achieved 4.8/5 rating on professional review platforms'
    ],
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    testimonial: {
      text: "Working with this developer was transformative for our product. They understood both the financial complexities and user experience challenges we faced. The dashboard they created strikes the perfect balance between power and usability, which has been key to our rapid user adoption. Their technical expertise in both frontend and data visualization was evident throughout the project.",
      author: "Elena Voss",
      position: "CTO, Lumina Finance",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150"
    },
    deliverables: [
      'Fully responsive web application with mobile-optimized views',
      'Admin dashboard for customer support and user management',
      'Documentation for API integration and component library',
      'User onboarding flow and tutorial system',
      'Performance optimization for handling large datasets',
      'Accessibility compliance to WCAG 2.1 AA standards'
    ],
    timeline: '14 weeks',
    year: 2023
  },
  {
    id: 2,
    title: 'NomadNest Booking Platform',
    category: ['Web App', 'E-commerce'],
    clientType: 'Travel Accommodation Marketplace',
    clientAudience: 'Remote workers, digital nomads, and extended-stay travelers',
    overview: 'A specialized booking platform that connects remote workers with long-term accommodations that meet their specific needs for workspace, amenities, and community.',
    challenge: 'The rise of remote work created a new type of traveler with unique accommodation needs, but existing platforms were designed for short-term vacation stays. NomadNest needed a platform that would specifically address the requirements of digital nomads: reliable internet, workspaces, monthly rates, and community connections.',
    solution: 'I built a comprehensive marketplace platform that focuses on the specific needs of remote workers. The search functionality prioritizes workspace quality, internet reliability, and monthly pricing transparency. Property listings include detailed workspace information, verified internet speeds, and neighborhood guides for digital nomads. The platform also features a community component where users can connect with other remote workers in their destination.',
    features: [
      'Advanced search with work-specific filters (desk setup, internet speed, quiet hours)',
      'Verified internet speed tests for all properties',
      'Monthly pricing with utility transparency',
      'Virtual tours of workspaces and common areas',
      'Community forum organized by location',
      'Host verification system with remote-work friendliness rating',
      'Integrated calendar with booking flexibility for longer stays',
      'Local coworking space partnerships and discounts'
    ],
    technologies: [
      'Next.js for SEO optimization and performance',
      'Prisma ORM with PostgreSQL database',
      'AWS S3 for image and virtual tour storage',
      'MapBox integration for neighborhood exploration',
      'Stripe Connect for host payments and platform fees',
      'Socket.io for real-time messaging',
      'Vercel for deployment and serverless functions',
      'Storybook for component documentation'
    ],
    results: [
      'Platform grew to 5,000+ work-friendly listings across 43 countries',
      'Average stay duration of 47 days (compared to industry average of 4 days)',
      'Maintained 96% booking satisfaction rate for remote work suitability',
      'Successfully raised $3.2M in seed funding based on platform growth',
      'Featured in "Remote Work Revolution" as essential tool for digital nomads',
      'Established partnerships with 15 global coworking space networks'
    ],
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
      'https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?w=800'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800',
    testimonial: {
      text: "The platform developed exceeded our expectations in every way. The developer didn't just execute our requirements - they brought valuable insights about user experience and marketplace dynamics that significantly improved our concept. The attention to detail in features specific to remote workers has been the key differentiator for our business. Their technical architecture choices have also allowed us to scale smoothly as we've grown.",
      author: "Leo Demarco",
      position: "Founder, NomadNest",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
    },
    deliverables: [
      'Full-stack marketplace platform with host and guest interfaces',
      'Admin dashboard for platform management and support',
      'Payment processing system with multi-currency support',
      'Review and rating system with work-specific criteria',
      'Mobile-responsive design optimized for all devices',
      'Analytics dashboard for business intelligence'
    ],
    timeline: '20 weeks',
    year: 2022
  },
  {
    id: 3,
    title: 'Culinary Companion App',
    category: 'Mobile App',
    clientType: 'Food Technology Startup',
    clientAudience: 'Home cooks, meal planners, and food enthusiasts',
    overview: 'A personalized recipe and meal planning application that uses AI to customize recommendations based on dietary preferences, available ingredients, and cooking skill levels.',
    challenge: 'Existing recipe apps offered generic content that didn\'t account for individual preferences, dietary restrictions, or what users already had in their kitchen. The client wanted to reduce food waste and decision fatigue around meal planning while making cooking more accessible to users of all skill levels.',
    solution: 'I developed a cross-platform mobile application that combines an extensive recipe database with smart personalization. The app features AI-powered recommendation algorithms that learn user preferences over time. A standout feature is the "What\'s in my kitchen" tool that suggests recipes based on ingredients users already have, reducing food waste and shopping trips.',
    features: [
      'AI-powered recipe recommendations based on taste preferences and history',
      'Ingredient scanning and inventory management',
      'Step-by-step cooking instructions with adjustable serving sizes',
      'Voice-controlled cooking mode for hands-free operation',
      'Meal planning calendar with automatic shopping list generation',
      'Dietary restriction and allergy filters',
      'Nutritional information and dietary goal tracking',
      'Community recipe sharing and rating system'
    ],
    technologies: [
      'React Native for cross-platform functionality',
      'TensorFlow.js for on-device AI recommendations',
      'Firebase for authentication and cloud functions',
      'Firestore for real-time database functionality',
      'Expo Camera for ingredient scanning',
      'Redux for global state management',
      'Custom animation system for recipe interactions',
      'Native speech recognition integration'
    ],
    results: [
      'Over 100,000 downloads within first three months',
      'Average user engagement of 4.3 sessions per week',
      '78% reduction in reported food waste among active users',
      'Featured as "App of the Day" in Apple App Store',
      '92% positive ratings across app stores',
      'Successfully implemented premium subscription model with 28% conversion rate'
    ],
    images: [
      'https://images.unsplash.com/photo-1505935428862-770b6f24f629?w=800',
      'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800',
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1505935428862-770b6f24f629?w=800',
    testimonial: {
      text: "This developer delivered an app that our users absolutely love. The technical implementation of the AI recommendation system exceeded our expectations, and their attention to UI details created an incredibly intuitive experience. They were able to translate complex functionality into a simple, delightful user experience that appeals to cooks of all levels. The architecture they designed has also made it easy for our team to continue adding features and scaling the platform.",
      author: "Mia Chen",
      position: "Product Director, Culinary Companion",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150"
    },
    deliverables: [
      'Native iOS and Android applications',
      'Backend API for recipe database and user profiles',
      'AI recommendation system with personalization algorithm',
      'Content management system for recipe creation and editing',
      'Analytics dashboard for user behavior insights',
      'Comprehensive testing suite including usability studies'
    ],
    timeline: '16 weeks',
    year: 2023
  },
  {
    id: 4,
    title: 'Artisan E-Commerce Platform',
    category: ['E-commerce', 'Web Design'],
    clientType: 'Handcrafted Goods Marketplace',
    clientAudience: 'Independent artisans, craftspeople, and conscious consumers',
    overview: 'A specialized e-commerce platform that connects artisans directly with consumers, emphasizing the stories behind handcrafted products and creating transparent supply chains.',
    challenge: 'Traditional e-commerce platforms commoditize products and obscure the creators, which is particularly harmful for artisans whose value lies in craftsmanship and story. The client needed a platform that would highlight the humans behind the products, educate consumers about crafting processes, and provide fair compensation to creators.',
    solution: 'I designed and built a marketplace that puts artisans at the center of the experience. Each seller has an immersive profile that showcases their workshop, techniques, and personal story. The product listings include detailed information about materials, crafting time, and sustainable practices. A unique feature is the "creation timeline" that documents the making of each item with photos and descriptions.',
    features: [
      'Artisan profiles with workshop tours and crafting philosophy',
      'Product creation timelines with process documentation',
      'Material sourcing transparency and sustainability metrics',
      'Direct messaging between buyers and creators',
      'Commission request system for custom orders',
      'Artisan-friendly payment terms with advance options',
      'Workshop location map with open studio events',
      'Craft technique educational content'
    ],
    technologies: [
      'React with Next.js for frontend performance',
      'GraphQL API for efficient data fetching',
      'PostgreSQL database with PostGIS for location features',
      'Cloudinary for optimized media management',
      'Stripe Connect for multi-party payments',
      'Algolia for advanced search functionality',
      'Framer Motion for subtle animations',
      'i18n for multilingual support'
    ],
    results: [
      'Platform hosts over 2,500 artisans across 47 countries',
      'Average product value 3.2x higher than typical e-commerce marketplaces',
      '87% of customers cite artisan story as primary purchase factor',
      'Featured in "Sustainable Business Journal" as marketplace innovation',
      'Artisans report 42% higher earnings compared to other platforms',
      'Established partnerships with 12 traditional craft preservation organizations'
    ],
    images: [
      'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=800',
      'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800',
      'https://images.unsplash.com/photo-1466027397211-20d0f2449a3f?w=800'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=800',
    testimonial: {
      text: "This developer created more than just an e-commerce platform - they built a digital home for our artisan community. Their technical expertise was matched by a genuine understanding of both our artisans' needs and our customers' desires. The storytelling features they implemented have completely transformed how our products are perceived and valued. The platform is beautiful, performant, and has the right balance of features without overwhelming users.",
      author: "Sofia Aguirre",
      position: "Co-founder, Artisans United",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
    },
    deliverables: [
      'Responsive marketplace platform with artisan and customer interfaces',
      'Custom CMS for artisan story and product management',
      'Order management and fulfillment system',
      'Review and verification system for quality assurance',
      'Analytics dashboard for sales and engagement metrics',
      'Documentation and training materials for artisan onboarding'
    ],
    timeline: '18 weeks',
    year: 2022
  },
  {
    id: 5,
    title: 'EcoTrack Sustainability Dashboard',
    category: ['Web App', 'UI/UX Design'],
    clientType: 'Environmental Technology Company',
    clientAudience: 'Businesses, municipalities, and organizations committed to sustainability goals',
    overview: 'An enterprise sustainability management platform that helps organizations track, analyze, and improve their environmental impact through data-driven insights and actionable recommendations.',
    challenge: 'Organizations were struggling to measure and improve their environmental impact due to fragmented data sources, complex reporting requirements, and difficulty translating sustainability metrics into actionable strategies. The client needed a comprehensive solution that would simplify environmental data management while providing meaningful insights.',
    solution: 'I developed an integrated dashboard that connects to multiple data sources to create a unified view of an organization\'s environmental impact. The platform visualizes complex sustainability metrics in an accessible way and provides AI-powered recommendations for improvement. Key features include automated ESG reporting, carbon footprint calculation, and scenario planning tools for sustainability initiatives.',
    features: [
      'Comprehensive emissions tracking across scopes 1, 2, and 3',
      'Energy and resource consumption monitoring with anomaly detection',
      'Automated sustainability reporting for various frameworks (GRI, SASB, CDP)',
      'Scenario modeling for initiative planning and ROI analysis',
      'Supplier sustainability assessment and management',
      'Interactive goal setting and progress tracking',
      'Benchmarking against industry standards and competitors',
      'Executive dashboards with actionable insights'
    ],
    technologies: [
      'Vue.js with Composition API for reactive interfaces',
      'Python backend with FastAPI for data processing',
      'PostgreSQL with TimescaleDB for time-series data',
      'Apache Airflow for ETL pipeline orchestration',
      'TensorFlow for predictive analytics',
      'D3.js and ECharts for advanced visualizations',
      'Docker and Kubernetes for deployment',
      'OAuth2 with role-based access control'
    ],
    results: [
      'Platform adopted by 78 organizations including 3 Fortune 500 companies',
      'Users report average 23% reduction in carbon emissions within first year',
      'Automated reporting reduced sustainability team workload by 67%',
      'Selected as preferred solution by major sustainability consultant network',
      'Recognized with "Green Technology Innovation" award',
      '92% user satisfaction rate in enterprise client survey'
    ],
    images: [
      'https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?w=800',
      'https://images.unsplash.com/photo-1473186505569-9c61870c11f9?w=800',
      'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?w=800',
    testimonial: {
      text: "The developer we worked with understood both the technical and environmental aspects of our project, which was crucial for its success. They translated complex sustainability metrics into intuitive visualizations that make sense to everyone from facilities managers to C-suite executives. The platform they built has become essential to our clients' sustainability strategies, providing both the detail and clarity needed for effective environmental management. Their work has set a new standard in environmental data platforms.",
      author: "Dr. Marcus Rivera",
      position: "Director of Innovation, EcoTrack",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150"
    },
    deliverables: [
      'Enterprise-grade web application with role-based access',
      'Data integration framework for multiple source connections',
      'Automated reporting system with export capabilities',
      'Recommendation engine with actionable insights',
      'Admin portal for system configuration and user management',
      'Comprehensive documentation and training materials'
    ],
    timeline: '22 weeks',
    year: 2023
  },
  {
    id: 6,
    title: 'MindfulMoment Meditation App',
    category: 'Mobile App',
    clientType: 'Wellness and Mental Health Startup',
    clientAudience: 'Busy professionals, stress management seekers, and mindfulness practitioners',
    overview: 'A personalized meditation and mindfulness application that helps users develop consistent practice through guided sessions, progress tracking, and adaptive recommendations.',
    challenge: 'Despite growing interest in meditation, existing apps either overwhelmed beginners with too many options or didn\'t provide enough progression for experienced practitioners. Users struggled to maintain consistent practice due to lack of personalization and contextual guidance for different life situations.',
    solution: 'I created an adaptive meditation app that meets users at their skill level and grows with them. The app features a personalized recommendation system that suggests practices based on user experience, time availability, current mood, and goals. A standout feature is the contextual meditation library that offers specific practices for different situations (work stress, sleep issues, emotional challenges) with appropriate duration options.',
    features: [
      'Personalized meditation journey with adaptive difficulty',
      'Mood tracking and practice recommendation engine',
      'Context-specific meditation library for different situations',
      'Progress visualization and streak tracking',
      'Ambient soundscapes with spatial audio',
      'Subtle haptic guidance for breathing exercises',
      'Integration with health platforms for stress and sleep correlation',
      'Community challenges and group meditation events'
    ],
    technologies: [
      'React Native for cross-platform development',
      'Redux Toolkit for state management',
      'Node.js backend with Express',
      'MongoDB for user profiles and preferences',
      'AWS Amplify for backend services',
      'Native audio modules for high-quality sound',
      'Custom animation library for breathing visualizations',
      'HealthKit and Google Fit integrations'
    ],
    results: [
      'Over 250,000 downloads with minimal marketing',
      '76% of users maintain practice for 30+ days (industry average: 41%)',
      'Average session rating of 4.9/5 based on post-meditation feedback',
      'Featured in "Mental Wellness Today" as leading meditation app',
      'Successfully implemented freemium model with 34% conversion',
      'User testimonials credit app with significant stress reduction and sleep improvement'
    ],
    images: [
      'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800',
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800',
      'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800',
    testimonial: {
      text: "This developer created an app that truly understands the meditation journey. The technical excellence is evident in the seamless experience, but what really sets their work apart is the thoughtfulness behind every feature. They created an experience that feels deeply human and supportive. The adaptive nature of the recommendations has been key to helping our users build consistent practice, and the attention to details like audio quality and subtle animations creates a premium experience that users love.",
      author: "Amara Lee",
      position: "Founder, MindfulMoment",
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150"
    },
    deliverables: [
      'Native iOS and Android applications',
      'Backend API for content management and user data',
      'Custom audio player with background mode',
      'Analytics system for practice insights',
      'Content management system for meditation library',
      'Offline functionality for practice without connectivity'
    ],
    timeline: '14 weeks',
    year: 2022
  },
  {
    id: 7,
    title: 'FitSync Personal Training Platform',
    category: ['Web App', 'Mobile App'],
    clientType: 'Fitness Technology Company',
    clientAudience: 'Personal trainers, fitness coaches, and their clients',
    overview: 'A comprehensive platform that connects fitness professionals with clients through workout planning, progress tracking, and interactive training sessions.',
    challenge: 'Personal trainers were using a cobbled-together set of tools (spreadsheets, messaging apps, video calls) to manage client relationships and workouts. This fragmented approach created friction, limited scalability, and provided poor client experiences. The client needed an integrated solution that would streamline trainer workflows while enhancing client engagement.',
    solution: 'I built a dual-facing platform with specialized interfaces for both trainers and clients. The trainer dashboard enables efficient client management, workout programming, and progress monitoring at scale. The client mobile app delivers personalized workouts with video guidance, progress tracking, and direct communication with their trainer. The platform supports both in-person and remote training models.',
    features: [
      'Exercise library with 1000+ movements and video demonstrations',
      'Drag-and-drop workout builder with templates and smart suggestions',
      'Real-time client progress tracking and milestone alerts',
      'Form check video submission and feedback system',
      'Integrated nutrition planning and meal tracking',
      'In-app messaging and video consultation scheduling',
      'Client metrics dashboard with progress visualization',
      'Business analytics for trainer practice growth'
    ],
    technologies: [
      'React for trainer web dashboard',
      'React Native for client mobile application',
      'GraphQL API for efficient data operations',
      'PostgreSQL database with complex relationship modeling',
      'WebRTC for video consultations',
      'AWS S3 for media storage and streaming',
      'Firebase for real-time messaging',
      'Stripe for subscription and payment management'
    ],
    results: [
      'Platform adopted by 3,400+ fitness professionals',
      'Trainers report 43% increase in client capacity',
      'Client adherence to programs increased by 58%',
      '92% reduction in administrative work for trainers',
      'Average trainer revenue increased by 37% within six months',
      'Featured in "Fitness Business Quarterly" as technology innovation'
    ],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
      'https://images.unsplash.com/photo-1571388208497-71bedc66e932?w=800',
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
    testimonial: {
      text: "The platform developed for us has completely transformed how trainers run their businesses. The developer understood both the operational challenges trainers face and the engagement needs of clients. The dual-interface approach has been brilliant - trainers get powerful management tools, while clients get a simple, motivating experience. The attention to detail in workout programming functionality and progress visualization has made this the most powerful tool in the industry. It's genuinely changed how personal training can be delivered.",
      author: "Chris Torres",
      position: "CEO, FitSync",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150"
    },
    deliverables: [
      'Web dashboard for trainers with full client management',
      'Mobile applications for iOS and Android clients',
      'Video hosting and streaming infrastructure',
      'Exercise library with content management system',
      'Analytics dashboard for business insights',
      'Comprehensive documentation and onboarding materials'
    ],
    timeline: '24 weeks',
    year: 2023
  },
  {
    id: 8,
    title: 'CreativeFlow Design System',
    category: ['UI/UX Design', 'Web Design'],
    clientType: 'Digital Product Agency',
    clientAudience: 'Internal design and development teams, client projects',
    overview: 'A comprehensive design system and component library that unifies the visual language across all client projects while accelerating the design and development process.',
    challenge: 'The agency was struggling with inconsistent design across projects, inefficient handoffs between designers and developers, and difficulty maintaining quality at scale. Each project used different patterns and components, creating unnecessary rework and inconsistent user experiences for clients.',
    solution: 'I created a modular design system with both Figma components and corresponding React implementations. The system features comprehensive documentation, usage guidelines, and a playbook for extending the system for client-specific needs. The component library is fully accessible, responsive, and includes interactive states and animations. A custom Storybook implementation allows for visual testing and easy component discovery.',
    features: [
      'Comprehensive component library with 60+ reusable elements',
      'Token-based design system for colors, typography, spacing, and more',
      'Interactive component documentation with usage guidelines',
      'Responsive behavior specifications for all screen sizes',
      'Accessibility compliance built into every component',
      'Animation and micro-interaction patterns',
      'Theme customization system for client branding',
      'Integration with design tools and development workflows'
    ],
    technologies: [
      'React with TypeScript for type-safe components',
      'Styled Components with theme provider',
      'Storybook for documentation and visual testing',
      'Jest and React Testing Library for component testing',
      'Figma for design assets and documentation',
      'GitHub Actions for CI/CD pipeline',
      'Chromatic for visual regression testing',
      'Rollup for optimized component distribution'
    ],
    results: [
      'Reduced design-to-development time by 64% on new projects',
      'Improved design consistency score from 68% to 97% in audit',
      'Accessibility compliance increased from 74% to 100%',
      'System adopted across 23 client projects within first year',
      'Designer and developer satisfaction increased by 47% in surveys',
      'Won "Design System of the Year" at industry awards'
    ],
    images: [
      'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
      'https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=800'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800',
    testimonial: {
      text: "The design system this developer created has transformed our entire product development process. They didn't just build components - they created a complete system with thoughtful architecture that's both powerful and flexible. The documentation is exceptional, making it easy for our entire team to adopt. The component quality is outstanding, with attention to accessibility and performance we hadn't seen before. This system has become a competitive advantage for our agency, allowing us to deliver higher quality work more efficiently.",
      author: "Taylor Richards",
      position: "Design Director, Pixel Perfect Agency",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150"
    },
    deliverables: [
      'React component library with TypeScript definitions',
      'Design tokens and theme configuration system',
      'Storybook documentation with interactive examples',
      'Figma component library with design tokens',
      'Integration guides for various project types',
      'Training workshops for design and development teams'
    ],
    timeline: '16 weeks',
    year: 2022
  }
];