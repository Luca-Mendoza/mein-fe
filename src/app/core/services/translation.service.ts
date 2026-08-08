import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

export type Language = 'en' | 'es';

export interface TranslationData {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguageSubject = new BehaviorSubject<Language>('en');
  public currentLanguage$ = this.currentLanguageSubject.asObservable();

  private translations: { [key: string]: TranslationData } = {
    en: {
      COMMON: {
        ABOUT: "About Me",
        EXPERIENCE: "Experience",
        PROJECTS: "Projects",
        SEE_MORE_INFO: "See more information",
        DOWNLOAD_PORTFOLIO: "Download Portfolio",
        ALL_RIGHTS_RESERVED: "All rights reserved",
        ROLE_AND_RESPONSIBILITIES: "Role and Responsibilities",
        PROJECT_DESCRIPTION: "Project Description",
        CHALLENGES_AND_SOLUTIONS: "Challenges and Solutions",
        KEY_LEARNINGS: "Key Learnings",
        SOFT_SKILLS: "Skills",
        TECHNOLOGIES_USED: "Technologies Used",
        FOCUS: "Focus",
        IMPACT: "Impact",
        PROJECT_PREVIEW: "Project Preview",
        GO_TO_GITHUB_BACKEND: "Go to Github Back-end",
        GO_TO_GITHUB_FRONTEND: "Go to Github Front-end",
        GO_TO_GITHUB: "Go to Github",
        GO_TO: "Go to",
        DASHBOARD: "Dashboard",
        OVERVIEW: "Overview",
        HOME: "Home"
      },
      HOME: {
        TITLE: "Luca D. Mendoza",
        SUBTITLE: "Full-Stack Engineer",
        DESCRIPTION: "Specialized in Angular architecture, scalable backend development, and product engineering.",
        OPEN_TO_FREELANCE: "Open to freelance projects and collaboration opportunities.",
        LETS_CONNECT: {
          TITLE: "Let's Connect",
          DESCRIPTION: "I'm currently open to freelance and remote opportunities — especially exciting Angular, NestJS or full-stack focused projects. If you have something in mind, feel free to ",
          LINK_TEXT: "reach out"
        },
        ABOUT_SECTION: {
          TITLE: "About",
          SUMMARY: "Full-Stack Developer with over 5 years of experience building web platforms and digital products in production. Proven track record in end-to-end development of digital wallets, payment systems, B2B platforms, e-commerce, and logistics solutions.\n\nCovering everything from conceiving reactive and modular Angular interfaces to implementing backend services and REST APIs/WebSockets with NestJS and Go, alongside relational database modeling and product-impact driven engineering.",
          PARAGRAPH_1: "Full-Stack Developer with over 5 years of experience building web platforms and digital products in production. Proven track record in end-to-end development of digital wallets, payment systems, B2B platforms, e-commerce, and logistics solutions.\n\nCovering everything from conceiving reactive and modular Angular interfaces to implementing backend services and REST APIs/WebSockets with NestJS and Go, alongside relational database modeling and product-impact driven engineering."
        },
        INTRO_VIDEO: {
          TITLE: "About Me",
          SUBTITLE: "Full-Stack Developer with over 5 years of experience building web platforms and digital products in production. Proven track record in end-to-end development of digital wallets, payment systems, B2B platforms, e-commerce, and logistics solutions.\n\nCovering everything from conceiving reactive and modular Angular interfaces to implementing backend services and REST APIs/WebSockets with NestJS and Go, alongside relational database modeling and product-impact driven engineering."
        },
        EXPERIENCE_SECTION: {
          TITLE: "Experience",
          EVENT_LOOP_CLUB: {
            DATE_FROM: "Dec 2023 - Present",
            TITLE: "Fundador & Full-Stack Developer · Eventloop.ar",
            PREVIEW: "Web platform development from initial stages, leading the Angular UI construction from day one while collaborating on backend engineering tasks.",
            DESCRIPTION: "Web platform development from initial stages, leading the Angular UI construction from day one while collaborating on backend engineering tasks.",
            EMPLOYMENT_STATUS: "Profesional independiente",
            LINKEDIN_LABEL: "Eventloop.ar",
            LINKEDIN_URL: "https://www.linkedin.com/company/eventloop-club",
            DETAILED_PAGE: {
              ROLE_AND_RESPONSIBILITIES: {
                DESCRIPTION: "Web platform development from initial stages, leading the Angular UI construction from day one while collaborating on backend engineering tasks.\n\nKey Engineering Highlights:\n• Frontend Core (Angular & TypeScript): Built and maintained the frontend codebase from project inception, delivering modular components, responsive layouts with Tailwind CSS / Angular Material, and seamless REST API integrations.\n• State Management & Reactivity: Implemented NgRx and RxJS for global application state management and asynchronous data flow optimization.\n• Backend Contributions (Go): Engineered application updates, supported WebSocket integration for real-time notifications, and maintained backend API endpoints in Go.\n• Community Impact: Actively contributed to the platform's technical ecosystem to enhance community engagement and user experience."
              },
              PROJECT_DESCRIPTION: {
                DESCRIPTION: "An innovative ticketing platform that enables producers to publish and manage their events comprehensively. The application facilitates real-time event management from the dashboard, allowing control from publication to tracking of every activity. I collaborated with designers and backend developers to implement an intuitive interface and reusable components, ensuring an optimal experience on any device. The solution provides producers with a complete tool for controlling and updating their events in real time, improving management efficiency and audience interaction."
              },
              CHALLENGES: [
                {
                  title: "Real-time Integration with WebSockets & NTFY",
                  description: "Configured and implemented WebSockets and NTFY for the initial push notifications of the application. I collaborated closely with the development team to set up this real-time infrastructure, ensuring reliable communication between the backend and the frontend."
                },
                {
                  title: "Development of Complex Interactive Sections",
                  description: "Designed and developed advanced interactive sections for both frontend and backend, including a complete Community section and dynamic image carousels. This required complex state management and seamless integration with the backend to ensure a smooth user experience."
                },
                {
                  title: "Migration to Angular 19 Standalone",
                  description: "One of the most significant challenges was migrating the project from Angular 18 based on modules to Angular 19 with standalone components. This process required restructuring the architecture, updating dependencies, and adjusting the configuration to leverage new functionalities, optimizing maintainability and performance."
                },
                {
                  title: "Design and Implementation of Innovative Solutions",
                  description: "Another important challenge was designing and implementing innovative solutions to enhance the user experience and interaction with the application. We focused on creating reusable components, integrating smooth animations, and adopting modern design patterns, resulting in an intuitive and efficient interface."
                }
              ],
              LEARNINGS: [
                "Optimizing frontend performance by minimizing network requests and reducing render-blocking resources.",
                "Utilizing Angular's store for effective state management.",
                "Collaborative teamwork in implementing new functionalities with optimal solutions.",
                "Integrating Google sign-in and improving image handling in Angular.",
                "Expanding knowledge in Tailwind and optimizing the UI/UX experience.",
                "Deepening my understanding of the Go language for backend development.",
                "Learning DBeaver for advanced database management."
              ],
              TECHNOLOGIES: [
                "Angular",
                "Angular Material",
                "Tailwind",
                "RESTful APIs",
                "ClickUp",
                "Jira",
                "Figma",
                "Swiper",
                "MercadoPago",
                "Google APIs",
                "TypeScript",
                "SCSS",
                "HTML"
              ],
              DURATION: "2023 — Present",
              EMPLOYMENT_TYPE: "Part-Time",
              IMAGES: [
                "assets/imgs/eventloop_logo.webp"
              ],
              LINKS: {
                WEBSITE: "eventloop.club",
                LOGO: "assets/imgs/eventloop_logo.webp",
                GITHUB: "",
                LINK: "https://eventloop.club/"
              }
            }
          },
          SIETE_IDEAS: {
            DATE_FROM: "feb. 2022 - mar. 2026",
            TITLE: "Frontend Web Developer · Siete Ideas",
            PREVIEW: "Ingeniería de aplicaciones web con Angular utilizando componentes, routing, gestión de estado y dependency injection.",
            DESCRIPTION: "Ingeniería de aplicaciones web con Angular utilizando componentes, routing, gestión de estado y dependency injection.",
            EMPLOYMENT_STATUS: "Jornada completa",
            LINKEDIN_LABEL: "Siete Ideas",
            LINKEDIN_URL: "https://www.linkedin.com/company/siete-ideas",
            DETAILED_PAGE: {
              ROLE_AND_RESPONSIBILITIES: {
                DESCRIPTION: "Frontend Developer in an Angular project using the Fuse template. Responsible for migrating and updating the project's architecture, implementing reusable components, and improving overall application performance."
              },
              PROJECT_DESCRIPTION: {
                DESCRIPTION: "I worked on updating and modernizing a platform based on Angular and Fuse. Two key migrations were carried out to improve scalability and code maintainability. Additionally, I collaborated on developing new functionalities and optimizing workflow."
              },
              CHALLENGES: [
                {
                  title: "Migration from Angular 11 with Modules to Angular 18 with Standalone",
                  description: "I transitioned the project's architecture from Angular 11 with modules to Angular 18 using standalone components, which reduced complexity and enhanced performance."
                },
                {
                  title: "Migration from Angular 9 to Angular 11 with Fuse",
                  description: "I migrated the platform from Angular 9 with Fuse to Angular 11, improving code organization, optimizing dependencies, and refactoring critical components."
                },
                {
                  title: "First Professional Experience",
                  description: "This was my first professional experience, which allowed me to acquire key knowledge and open doors in my career."
                }
              ],
              LEARNINGS: [
                "Deepening my understanding of Angular and Fuse migrations, including the transition from module-based to standalone architecture.",
                "Gaining more experience in code optimization and performance improvement.",
                "Learning NestJS and its integration with Angular for efficient backend and frontend development.",
                "Working as a team with collaboration three times a week in the city of Tandil."
              ],
              TECHNOLOGIES: [
                "Angular",
                "Fuse Template",
                "TypeScript",
                "RxJS",
                "SCSS",
                "HTML",
                "NestJS",
                "Node.js"
              ],
              DURATION: "2022 — 2026",
              EMPLOYMENT_TYPE: "Full-Time",
              LINKS: {
                WEBSITE: "sieteideas.com",
                LOGO: "assets/imgs/7ideas_logo_dark.svg",
                GITHUB: "",
                LINK: "https://www.sieteideas.com.ar/"
              }
            }
          },
          XTECH: {
            DATE_FROM: "oct. 2024 - mar. 2026",
            TITLE: "Lead Full-Stack Engineer · XTECHARG",
            PREVIEW: "Liderazgo técnico y desarrollo end-to-end de plataforma SaaS B2B. Arquitectura de software, infraestructura, seguridad e integraciones de pago.",
            DESCRIPTION: "Liderazgo técnico y desarrollo end-to-end de plataforma SaaS B2B. Arquitectura de software, infraestructura, seguridad e integraciones de pago.",
            EMPLOYMENT_STATUS: "Profesional independiente",
            LINKEDIN_LABEL: "XTECHARG",
            LINKEDIN_URL: "https://www.linkedin.com/company/xtecharg",
            EXECUTIVE_SUMMARY: "Co-founder and Technical Lead of XTECHARG, a scalable B2B SaaS platform that automates business processes and facilitates direct commercial transactions. Full-stack architect and developer responsible for designing and implementing the entire platform architecture from scratch. I lead the development team, define technical strategy, implement advanced enterprise patterns, and ensure code quality through exhaustive testing. The platform handles thousands of concurrent transactions with cutting-edge technology, guaranteeing scalability, security, and performance in production.",
            KEY_FEATURES: "Multi-module architecture with 15+ specialized NestJS modules · Multi-payment method integration · Advanced user authentication with OAuth2 + JWT tokens · Loyalty and promotional benefits system · Invoicing module with PDF generation · Complete order lifecycle management · Admin dashboard with analytics · Role-based access control (RBAC) · Responsive Angular Material + Tailwind CSS UI",
            TECHNICAL_ARCHITECTURE: "Backend: NestJS 11.0 with TypeScript, PostgreSQL + TypeORM, OAuth2 + JWT, modular architecture with 15+ independent modules. Frontend: Angular 19 Standalone, NgRx state management, Angular Material + Tailwind CSS. Database: PostgreSQL 8.16 with TypeORM, advanced index optimization and query optimization, connection pooling. Security: OAuth2 + JWT with refresh tokens in httpOnly cookies, granular RBAC, adaptive rate limiting.",
            METRICS: "Code Quality: >80% test coverage on critical logic, 100% TypeScript strict mode, 0 ESLint errors. Scalability: 1000+ simultaneous users, 15+ independent modules, 50+ API endpoints.",
            DETAILED_PAGE: {
              ROLE_AND_RESPONSIBILITIES: {
                DESCRIPTION: "As Co-founder and Technical Lead, I architect and implement the entire platform from zero, making strategic decisions on technology stack, system design, and team structure. I lead the development team, conduct code reviews, mentor junior developers, and ensure adherence to best practices. My responsibilities include backend API design with NestJS, frontend optimization with Angular 19 Standalone, database architecture and optimization, security implementation, and DevOps/CI-CD pipeline management. I define the technical roadmap, evaluate new technologies, and balance business requirements with engineering excellence."
              },
              PROJECT_DESCRIPTION: {
                DESCRIPTION: "XTECHARG is a B2B SaaS platform that automates business processes and enables direct commercial transactions. The system integrates Angular 19 Standalone with NestJS modular REST APIs for scalability, PostgreSQL with strategic indexing and optimization, and Docker/Dokploy for containerization and deployment. The platform integrates payment gateways (Mercado Pago, CoinPayments), implements OAuth2/Google API authentication with JWT, and provides comprehensive logging. All data communication uses secure HTTPS with proper validation."
              },
              CHALLENGES: [
                {
                  title: "Scalable Modular Architecture from Scratch",
                  description: "Designed 15+ independent NestJS modules, each responsible for a specific business domain. Each module encapsulates TypeORM entities, controllers, services, DTOs, and validators. Implemented custom Guards (@RoleProtected, @Public) and decorators for granular role-based authorization (RBAC). Modules communicate through injected services, enabling scalability and reusability without coupling. Challenge: maintaining loose coupling while scaling horizontally without circular dependencies."
                },
                {
                  title: "Strategy Pattern for Multiple Payment Providers",
                  description: "Implemented the Strategy pattern in PaymentsService abstracting multiple payment providers (Mercado Pago, CoinPayments, transfers, future integrations). Each provider implements a common interface with methods: createPayment(), processPayment(), cancelPayment(). Service maps providers in a Map<PaymentMethod, PaymentProvider>. Allows adding new payment methods without modifying existing logic, following SOLID principles."
                },
                {
                  title: "Advanced Authentication: OAuth2 + JWT + Custom Guards",
                  description: "Implemented robust authentication system with multiple strategies: OAuth2 Google, JWT local, refresh tokens. Refresh tokens stored in httpOnly cookies. Created custom Guards: JwtAuthGuard for token validation, UserRoleGuard for role-based authorization, @RoleProtected decorator for specifying required roles. Each endpoint automatically validates authentication and authorization. JWT tokens include user claims, roles, permissions with automatic expiration and rotation."
                },
                {
                  title: "NgRx State Management with Complex Effects and Selectors",
                  description: "Implemented NgRx store with multiple feature states: leftSidebar, rightSidebar, stepper, currentUser, favorites, order, leftSidebarFilters. Each feature has Actions, Reducers, memoized Selectors, and Effects. Used Custom Middleware for complex logic between actions. Memoized Selectors prevent unnecessary renders. Effects handle asynchronous HTTP calls and chained actions. Result: predictable state, easy Redux DevTools debugging, optimized performance."
                },
                {
                  title: "Server-Side Rendering (SSR) for SEO and Performance",
                  description: "Configured Angular 19 SSR to render components on server before sending to client. Improves SEO (crawlers get complete HTML), LCP (Largest Contentful Paint), and initial experience. Implemented correct NgRx state hydration on server. Configured Angular Platform Server, custom Express server, and server-side lazy loading. Assets pre-loaded and precompiled on server. Result: initial load time reduced ~60%, better SEO ranking, LCP <2.1s."
                },
                {
                  title: "Typed Communication with HTTP Interceptors and Error Handling",
                  description: "Created HTTP layer service with strict TypeScript types. Implemented custom HttpInterceptor that: 1) Attaches JWT token to headers, 2) Handles errors with retry logic, 3) Transforms HTTP errors to user-friendly messages. Services define typed interfaces for each response. Implemented centralized error handling with try-catch in Effects, mapping HTTP errors to Redux actions. Result: type-safe code, better debugging, consistent user experience."
                },
                {
                  title: "Responsive UI with Angular Material + Tailwind + Animations",
                  description: "Designed reusable components using Angular Material + Tailwind CSS. Material provides accessible components (buttons, forms, tables, dialogs). Tailwind CSS customizes styles with utility classes. Implemented custom Angular animations (expandCollapse, slide, zoom) for smooth transitions. Responsive sidebars (left, right) with adaptive breakpoints. Reactive forms with real-time validation. Consistent color palette with light/dark theme compatible with multiple devices."
                },
                {
                  title: "AI Chat Assistant with NestJS, Angular and OpenAI",
                  description: "Implemented an in-app chat assistant (Asistente xtecharg) to support users with orders, shipments, payments and store FAQs. Backend: NestJS module with OpenAI API integration, prompt engineering and secure streaming responses. Frontend: Angular widget (floating button, modal, quick actions for Pedido, Envíos, Pago, Contacto), real-time message handling and UX aligned with the platform. End-to-end flow with typed DTOs and error handling."
                }
              ],
              LEARNINGS: [
                "Modular architecture of complex applications: separation of concerns, loose coupling, SOLID principles in production.",
                "Design patterns in production: Strategy, Factory, Guard, Observer, Decorator, Repository.",
                "NestJS advanced: modules, Guards, Interceptors, custom decorators, validation with class-validator.",
                "TypeORM: complex entity relationships, optimized queries, migrations, connection pooling, strategic indexes.",
                "Angular 19 Standalone API: modular architecture, standalone components, composition without NgModule.",
                "NgRx state management: Actions, Reducers, Effects, memoized Selectors, DevTools debugging advanced.",
                "Multi-payment integration: provider abstraction with Strategy Pattern, error handling, transaction reconciliation.",
                "Multi-level security: OAuth2/Google API, JWT with refresh tokens, granular RBAC, input validation, HTTPS.",
                "Testing: unit tests Jest with >80% coverage, integration tests, contract testing.",
                "Responsive design: Angular Material, Tailwind CSS, mobile-first, accessibility (a11y), performance.",
                "In-app AI chat assistant: NestJS + OpenAI API, Angular widget, streaming responses, prompt engineering."
              ],
              TECHNOLOGIES: [
                "Angular 19 Standalone",
                "Angular Material",
                "Tailwind CSS",
                "RxJS",
                "NgRx with Effects and Selectors",
                "NestJS",
                "TypeORM",
                "PostgreSQL",
                "JWT Authentication",
                "OAuth2/Google API Auth",
                "Docker (Multi-stage builds)",
                "Docker Compose",
                "Dokploy",
                "GitHub Actions CI/CD",
                "Swagger/OpenAPI",
                "Jest (Unit Testing)",
                "TypeScript (Strict Mode)",
                "Git",
                "Google Cloud Platform",
                "Google Cloud Storage",
                "Google Cloud SQL",
                "Mercado Pago API",
                "OpenAI API"
              ],
              DURATION: "2024 — Present",
              EMPLOYMENT_TYPE: "Full-Time",
              LINKS: {
                WEBSITE: "xtech.com.ar",
                LOGO: "assets/imgs/xtecharg.jpeg",
                GITHUB: "https://github.com/xtecharg",
                LINK: "https://xtech.com.ar/"
              }
            }
          }
        },
        PROJECTS_SECTION: {
          TITLE: "Projects",
          PORTFOLIO: {
            TITLE: "Web Frontend Engineer · Portfolio",
            DESCRIPTION: "Developed and designed a portfolio website using Angular and Angular Material. This project showcases various frontend skills, including the use of CSS/SCSS for styling and Git/GitHub for version control. The site is fully responsive and optimized for performance, offering an engaging and interactive user experience.",
            DETAILED_PAGE: {
              ROLE_AND_RESPONSIBILITIES: {
                DESCRIPTION: "My personal portfolio is an open window into my passion for technology and professional growth. With a relaxed and natural style, I develop modern, interactive, and adaptive interfaces using Angular, Angular Material, Tailwind, and SCSS. Each project, whether in ecommerce, event organization, or logistics, is an opportunity to continue learning and enjoy the creative process."
              },
              PROJECT_DESCRIPTION: {
                DESCRIPTION: "The project covers the development of comprehensive web solutions: a robust ecommerce platform, applications for event organizers, and logistics platforms. Started with Angular 9 and evolved to Angular 19, it integrates Node.js and GraphQL to build efficient APIs, applying advanced performance techniques and an intuitive design."
              },
              CHALLENGES: [
                {
                  title: "Eventloop.ar",
                  description: "In the 'Eventloop.ar' project, I served as an SSR Frontend Developer, contributing to the development of reusable components and integrating RESTful services. Managing state with NgRx was key to implementing technical strategies that optimized performance and scalability, overcoming challenges in real-time data synchronization."
                },
                {
                  title: "Siete Ideas",
                  description: "As an Frontend Developer at 'Siete Ideas', I developed and maintained responsive web applications, implementing robust UI components with Angular and Angular Material. Integrating RESTful services and performing unit and integration tests were fundamental to ensuring product quality and reliability in a dynamic environment."
                },
                {
                  title: "Various Projects",
                  description: "In various projects encompassing ecommerce, event organization, and logistics, I developed comprehensive solutions by applying advanced practices in performance, security, and usability. This challenge allowed me to adapt to market needs and optimize critical processes, consolidating my experience in developing scalable applications."
                }
              ],
              LEARNINGS: [
                "Advanced mastery of the Angular ecosystem and its evolution from version 9 to 19.",
                "Advanced use of Tailwind CSS and SCSS for modern and efficient styling.",
                "Integration of backend solutions through REST and GraphQL APIs for real-time applications.",
                "Optimization of web applications and state management with RxJS.",
                "Development and implementation of scalable APIs with Node.js, NestJS, and GraphQL.",
                "Implementation of Docker containers to improve deployments and scalability.",
                "Automation of integration and continuous deployment processes using CI/CD (GitHub Actions).",
                "Courses and certifications in Full Web Development, Node, JavaScript, Angular, and NestJS."
              ],
                             SOFT_SKILLS: [
                 "Effective communication and collaboration in multidisciplinary teams",
                 "Analytical thinking and complex problem resolution",
                 "Continuous learning and rapid adaptation to new technologies",
                 "Efficient time management and meeting deadlines in agile environments"
               ],
              TECHNOLOGIES: [
                "Angular 9 → 19",
                "Angular Material",
                "Tailwind CSS",
                "CSS",
                "HTML",
                "SCSS",
                "JavaScript",
                "TypeScript",
                "RxJS",
                "Node.js",
                "NestJS",
                "GraphQL",
                "Docker",
                "CI/CD (GitHub Actions)",
                "Git",
                "GitHub",
                "DBeaver",
                "ClickUp",
                "Jira",
                "Trello",
                "Scrum",
                "GitGraph (VS Code)"
              ],
              DURATION: "2019 — Present",
              EMPLOYMENT_TYPE: "Full-Time",
              LINKS: {
                WEBSITE: "portfolio",
                LOGO: "assets/imgs/porfolio_web.png",
                GITHUB: "https://github.com/username/portfolio",
                LIVE: "https://lucadmendoza.dev/"
              }
            }
          },
          GAMEZONIA: {
            TITLE: "Web Engineer · Gamezonia",
            DESCRIPTION: "Developed a comprehensive e-commerce platform using the MEAN stack (MongoDB, Express.js, Angular, Node.js) combined with GraphQL. The project involved implementing payment processing with Stripe, automatic email notifications with Nodemailer, and deploying the application on various platforms including Netlify, Heroku, and MongoDB Atlas.",
            DETAILED_PAGE: {
              ROLE_AND_RESPONSIBILITIES: {
                DESCRIPTION: "Gamezonia is an innovative e-commerce project based on the MEAN+G stack, integrating a full online store along with an admin panel solution. Its architecture utilizes Angular on the frontend and Node.js with GraphQL on the backend, enabling secure authentication with JWT, payment processing via Stripe, and cloud deployment to provide a robust and scalable experience."
              },
              PROJECT_DESCRIPTION: {
                DESCRIPTION: "The project focuses on developing a comprehensive e-commerce solution that includes an intuitive admin panel for managing products, users, and orders. Employing Angular 9 for a responsive frontend and Node.js with GraphQL for the API, it implements advanced functionalities such as Lazy Loading, pagination, filtering, and automatic backups, ensuring an efficient solution adaptable to diverse needs."
              },
              CHALLENGES: [
                {
                  title: "Integrating GraphQL in a MEAN Stack",
                  description: "Implementing GraphQL as an API instead of REST using Apollo Server and adapting the structure of resolvers and schemas for efficient data management."
                },
                {
                  title: "Optimizing the Frontend with Angular 9",
                  description: "Adapting HTML templates within the Angular project, improving performance with Lazy Loading, and optimizing the user experience in a large-scale application."
                },
                {
                  title: "Cost-Free Deployment",
                  description: "Properly configuring the backend on Heroku, the frontend on Netlify, and the database on MongoDB Atlas, ensuring a scalable architecture without additional costs."
                }
              ],
              LEARNINGS: [
                "Deepened knowledge in Angular and GraphQL with Apollo Server.",
                "Advanced management of authentication and security in web applications.",
                "Performance optimization of MEAN applications.",
                "Implementation of payments with Stripe in e-commerce.",
                "Managing cloud deployments using free tools."
              ],
              TECHNOLOGIES: [
                "Angular 9",
                "Node.js",
                "GraphQL",
                "MongoDB",
                "Express",
                "JWT",
                "Stripe",
                "Nodemailer",
                "NgBootstrap",
                "Netlify",
                "Heroku",
                "MongoDB Atlas",
                "GitHub"
              ],
              DURATION: "11/2020 — 11/2021",
              EMPLOYMENT_TYPE: "Part-Time",
              LINKS: {
                WEBSITE: "gamezonia.com",
                LOGO: "assets/imgs/gamezonia.png",
                GITHUB_FRONTEND: "https://github.com/Luca-Mendoza/Frontend-meang-online-shop",
                GITHUB_BACKEND: "https://github.com/Luca-Mendoza/Backend-meang-online-shop",
                LINK: "https://luca-mendoza.github.io/Frontend-meang-online-shop/#/"
              }
            }
          }
        }
      },
      DETAILS: {
        COPY_URL: "Copy URL",
        TECHNOLOGIES: "Technologies Used",
        PREVIOUS_EXPERIENCE: "Previous Experience",
        NEXT_EXPERIENCE: "Next Experience",
        PREVIOUS_PROJECT: "Previous Project",
        NEXT_PROJECT: "Next Project",
        DURATION: "Duration",
        EMPLOYMENT_TYPE: "Employment Type",
        PART_TIME: "PART-TIME",
        FULL_TIME: "FULL-TIME",
        PRESENT: "PRESENT"
      },
      LANGUAGES: {
        EN: "English",
        ES: "Español"
      },
      VOICE_PAGE: {
        HERO_TITLE: "Luca Mendoza",
        HERO_SUBTITLE: "Senior Front-End Developer",
        VIDEO_PLACEHOLDER: "Video introduction.",
        CONTEXT_PARAGRAPH: "I work as a Senior Front-End Developer with Angular, building scalable applications in production. I also take part in independent projects. I care about clean code, clear communication, and solid frontend ownership.",
        CONTEXT_PARAGRAPH_1: "I'm a Senior Front-End Engineer specialized in Angular, with over five years of experience working on applications that evolve in real-world environments.",
        CONTEXT_PARAGRAPH_2: "My focus lies in frontend architecture — state management with NgRx, performance optimization, and building scalable structures that support long-term product growth.",
        CONTEXT_PARAGRAPH_3: "I value clarity, maintainability, and thoughtful technical decisions. I collaborate closely with design and backend teams, understanding frontend as a strategic layer where business requirements become reliable user experiences.",
        CONTEXT_PERSONAL: "Beyond the technical scope, I'm continuously refining how I design systems and approach software development with a calm, pragmatic mindset.",
        CTA_RESUME: "View Resume",
        CTA_CONTACT: "Contact",
        FOOTER_NOTE: "If you want to learn more, you can explore my experience, check my resume, or reach out directly."
      }
    },
    es: {
      COMMON: {
        ABOUT: "Sobre mí",
        EXPERIENCE: "Experiencia",
        PROJECTS: "Proyectos",
        SEE_MORE_INFO: "Ver más información",
        DOWNLOAD_PORTFOLIO: "Descargar Portafolio",
        ALL_RIGHTS_RESERVED: "Todos los derechos reservados",
        ROLE_AND_RESPONSIBILITIES: "Rol y Responsabilidades",
        PROJECT_DESCRIPTION: "Descripción del Proyecto",
        CHALLENGES_AND_SOLUTIONS: "Desafíos y Soluciones",
        KEY_LEARNINGS: "Aprendizajes Clave",
        SOFT_SKILLS: "Habilidades",
        TECHNOLOGIES_USED: "Tecnologías Utilizadas",
        FOCUS: "Foco",
        IMPACT: "Impacto",
        PROJECT_PREVIEW: "Vista del Proyecto",
        GO_TO_GITHUB_BACKEND: "Ir a Github Back-end",
        GO_TO_GITHUB_FRONTEND: "Ir a Github Front-end",
        GO_TO_GITHUB: "Ir a Github",
        GO_TO: "Ir a",
        DASHBOARD: "Panel de Control",
        OVERVIEW: "Vista General",
        HOME: "Inicio"
      },
      HOME: {
        TITLE: "Luca D. Mendoza",
        SUBTITLE: "Full-Stack Engineer",
        DESCRIPTION: "Especializado en arquitectura Angular, desarrollo backend escalable e ingeniería de producto.",
        OPEN_TO_FREELANCE: "Abierto a proyectos freelance y oportunidades de colaboración.",
        LETS_CONNECT: {
          TITLE: "Conectemos",
          DESCRIPTION: "Estoy abierto a proyectos freelance y oportunidades remotas — sobre todo en Angular, NestJS o desarrollo Full-Stack. Si tenés algo en mente, ",
          LINK_TEXT: "escribime"
        },
        ABOUT_SECTION: {
          TITLE: "Sobre mí",
          SUMMARY: "Desarrollador Full-Stack con más de 5 años de experiencia construyendo plataformas web y productos digitales en producción. Cuento con trayectoria en el desarrollo end-to-end de billeteras digitales, sistemas de pago, plataformas B2B, e-commerce y soluciones de logística.\n\nAbarco desde la concepción de interfaces reactivas y modulares en Angular hasta la implementación de servicios backend y APIs REST/WebSockets con NestJS y Go, junto con el modelado de bases de datos relacionales e ingeniería enfocada en el impacto de producto.",
          PARAGRAPH_1: "Desarrollador Full-Stack con más de 5 años de experiencia construyendo plataformas web y productos digitales en producción. Cuento con trayectoria en el desarrollo end-to-end de billeteras digitales, sistemas de pago, plataformas B2B, e-commerce y soluciones de logística.\n\nAbarco desde la concepción de interfaces reactivas y modulares en Angular hasta la implementación de servicios backend y APIs REST/WebSockets con NestJS y Go, junto con el modelado de bases de datos relacionales e ingeniería enfocada en el impacto de producto."
        },
        INTRO_VIDEO: {
          TITLE: "Sobre mí",
          SUBTITLE: "Desarrollador Full-Stack con más de 5 años de experiencia construyendo plataformas web y productos digitales en producción. Cuento con trayectoria en el desarrollo end-to-end de billeteras digitales, sistemas de pago, plataformas B2B, e-commerce y soluciones de logística.\n\nAbarco desde la concepción de interfaces reactivas y modulares en Angular hasta la implementación de servicios backend y APIs REST/WebSockets con NestJS y Go, junto con el modelado de bases de datos relacionales e ingeniería enfocada en el impacto de producto."
        },
        EXPERIENCE_SECTION: {
          TITLE: "Experiencia",
          EVENT_LOOP_CLUB: {
            DATE_FROM: "dic. 2023 - actualidad",
            TITLE: "Fundador & Full-Stack Developer · Eventloop.ar",
            PREVIEW: "Web platform development from initial stages, leading the Angular UI construction from day one while collaborating on backend engineering tasks.",
            DESCRIPTION: "Web platform development from initial stages, leading the Angular UI construction from day one while collaborating on backend engineering tasks.",
            EMPLOYMENT_STATUS: "Profesional independiente",
            LINKEDIN_LABEL: "Eventloop.ar",
            LINKEDIN_URL: "https://www.linkedin.com/company/eventloop-club",
            DETAILED_PAGE: {
              ROLE_AND_RESPONSIBILITIES: {
                DESCRIPTION: "Web platform development from initial stages, leading the Angular UI construction from day one while collaborating on backend engineering tasks.\n\nKey Engineering Highlights:\n• Frontend Core (Angular & TypeScript): Built and maintained the frontend codebase from project inception, delivering modular components, responsive layouts with Tailwind CSS / Angular Material, and seamless REST API integrations.\n• State Management & Reactivity: Implemented NgRx and RxJS for global application state management and asynchronous data flow optimization.\n• Backend Contributions (Go): Engineered application updates, supported WebSocket integration for real-time notifications, and maintained backend API endpoints in Go.\n• Community Impact: Actively contributed to the platform's technical ecosystem to enhance community engagement and user experience."
              },
              PROJECT_DESCRIPTION: {
                DESCRIPTION: "Una plataforma de ticketing innovadora que permite a los productores publicar y gestionar sus eventos de manera integral. La aplicación facilita la gestión de eventos en tiempo real desde el dashboard, permitiendo control desde la publicación hasta el seguimiento de cada actividad. Colaboré con diseñadores y desarrolladores backend para implementar una interfaz intuitiva y componentes reutilizables, asegurando una experiencia óptima en cualquier dispositivo. La solución proporciona a los productores una herramienta completa para controlar y actualizar sus eventos en tiempo real, mejorando la eficiencia de gestión y la interacción con la audiencia."
              },
              CHALLENGES: [
                {
                  title: "Integración en Tiempo Real con WebSockets y NTFY",
                  description: "Configuré e implementé WebSockets y NTFY para las notificaciones push iniciales de la aplicación. Colaboré estrechamente con el equipo de desarrollo para establecer esta infraestructura en tiempo real, asegurando una comunicación confiable entre el backend y el frontend."
                },
                {
                  title: "Desarrollo de Secciones Interactivas Complejas",
                  description: "Diseñé y desarrollé secciones interactivas avanzadas tanto en el frontend como en el backend, incluyendo una sección completa de Comunidad y creación de Carruseles dinámicos. Esto requirió una gestión compleja del estado y una integración fluida con el backend para garantizar una experiencia de usuario óptima."
                },
                {
                  title: "Migración a Angular 19 Standalone",
                  description: "Uno de los desafíos más significativos fue migrar el proyecto de Angular 18 basado en módulos a Angular 19 con componentes standalone. Este proceso requirió reestructurar la arquitectura, actualizar dependencias y ajustar la configuración para aprovechar las nuevas funcionalidades, optimizando la mantenibilidad y el rendimiento."
                },
                {
                  title: "Diseño e Implementación de Soluciones Innovadoras",
                  description: "Otro desafío importante fue diseñar e implementar soluciones innovadoras para mejorar la experiencia del usuario y la interacción con la aplicación. Nos enfocamos en crear componentes reutilizables, integrar animaciones suaves y adoptar patrones de diseño modernos, resultando en una interfaz intuitiva y eficiente."
                }
              ],
              LEARNINGS: [
                "Optimización del rendimiento frontend minimizando solicitudes de red y reduciendo recursos que bloquean el renderizado.",
                "Utilización del store de Angular para una gestión efectiva del estado.",
                "Trabajo en equipo colaborativo en la implementación de nuevas funcionalidades con soluciones óptimas.",
                "Integración del inicio de sesión de Google y mejora del manejo de imágenes en Angular.",
                "Expansión del conocimiento en Tailwind y optimización de la experiencia UI/UX.",
                "Profundización en la comprensión del lenguaje Go para desarrollo backend.",
                "Aprendizaje de DBeaver para gestión avanzada de bases de datos."
              ],
              TECHNOLOGIES: [
                "Angular",
                "Angular Material",
                "Tailwind",
                "APIs RESTful",
                "ClickUp",
                "Jira",
                "Figma",
                "Swiper",
                "MercadoPago",
                "APIs de Google",
                "TypeScript",
                "SCSS",
                "HTML"
              ],
              DURATION: "2023 — Presente",
              EMPLOYMENT_TYPE: "Tiempo Parcial",
              IMAGES: [
                "assets/imgs/eventloop_logo.webp"
              ],
              LINKS: {
                WEBSITE: "eventloop.club",
                LOGO: "assets/imgs/eventloop_logo.webp",
                GITHUB: "",
                LINK: "https://eventloop.club/"
              }
            }
          },
          SIETE_IDEAS: {
            DATE_FROM: "feb. 2022 - mar. 2026",
            TITLE: "Frontend Web Developer · Siete Ideas",
            PREVIEW: "Ingeniería de aplicaciones web con Angular utilizando componentes, routing, gestión de estado y dependency injection.",
            DESCRIPTION: "Ingeniería de aplicaciones web con Angular utilizando componentes, routing, gestión de estado y dependency injection.",
            EMPLOYMENT_STATUS: "Jornada completa",
            LINKEDIN_LABEL: "Siete Ideas",
            LINKEDIN_URL: "https://www.linkedin.com/company/siete-ideas",
            DETAILED_PAGE: {
              ROLE_AND_RESPONSIBILITIES: {
                DESCRIPTION: "Desarrollador Frontend en un proyecto Angular usando la plantilla Fuse. Responsable de migrar y actualizar la arquitectura del proyecto, implementar componentes reutilizables y mejorar el rendimiento general de la aplicación."
              },
              PROJECT_DESCRIPTION: {
                DESCRIPTION: "Trabajé en la actualización y modernización de una plataforma basada en Angular y Fuse. Se llevaron a cabo dos migraciones clave para mejorar la escalabilidad y mantenibilidad del código. Además, colaboré en el desarrollo de nuevas funcionalidades y optimización del flujo de trabajo."
              },
              CHALLENGES: [
                {
                  title: "Migración de Angular 11 con Módulos a Angular 18 con Standalone",
                  description: "Transicioné la arquitectura del proyecto de Angular 11 con módulos a Angular 18 usando componentes standalone, lo que redujo la complejidad y mejoró el rendimiento."
                },
                {
                  title: "Migración de Angular 9 a Angular 11 con Fuse",
                  description: "Migré la plataforma de Angular 9 con Fuse a Angular 11, mejorando la organización del código, optimizando dependencias y refactorizando componentes críticos."
                },
                {
                  title: "Primera Experiencia Profesional",
                  description: "Esta fue mi primera experiencia profesional, que me permitió adquirir conocimientos clave y abrir puertas en mi carrera."
                }
              ],
              LEARNINGS: [
                "Profundización en mi comprensión de migraciones de Angular y Fuse, incluyendo la transición de arquitectura basada en módulos a standalone.",
                "Ganancia de más experiencia en optimización de código y mejora de rendimiento.",
                "Aprendizaje de NestJS y su integración con Angular para desarrollo eficiente de backend y frontend.",
                "Formación en Angular, incluyendo la transición de arquitectura basada en módulos a standalone.",
                "Trabajo en equipo con colaboración tres veces por semana en la ciudad de Tandil."
              ],
              TECHNOLOGIES: [
                "Angular",
                "Plantilla Fuse",
                "TypeScript",
                "RxJS",
                "SCSS",
                "HTML",
                "NestJS",
                "Node.js"
              ],
              DURATION: "2022 — 2026",
              EMPLOYMENT_TYPE: "Tiempo Completo",
              LINKS: {
                WEBSITE: "sieteideas.com",
                LOGO: "assets/imgs/7ideas_logo_dark.svg",
                GITHUB: "",
                LINK: "https://www.sieteideas.com.ar/"
              }
            }
          },
          XTECH: {
            DATE_FROM: "oct. 2024 - mar. 2026",
            TITLE: "Lead Full-Stack Engineer · XTECHARG",
            PREVIEW: "Liderazgo técnico y desarrollo end-to-end de plataforma SaaS B2B. Arquitectura de software, infraestructura, seguridad e integraciones de pago.",
            DESCRIPTION: "Liderazgo técnico y desarrollo end-to-end de plataforma SaaS B2B. Arquitectura de software, infraestructura, seguridad e integraciones de pago.",
            EMPLOYMENT_STATUS: "Profesional independiente",
            LINKEDIN_LABEL: "XTECHARG",
            LINKEDIN_URL: "https://www.linkedin.com/company/xtecharg",
            EXECUTIVE_SUMMARY: "Co-fundador y líder técnico de XTECHARG, una plataforma B2B SaaS escalable que automatiza procesos de negocio y facilita transacciones comerciales directas. Arquitecto y desarrollador full-stack responsable de diseñar e implementar la arquitectura completa desde cero. Dirijo un equipo de desarrollo, defino la estrategia técnica, implemento patrones empresariales avanzados y garantizo la calidad del código mediante testing exhaustivo. La plataforma maneja miles de transacciones concurrentes con tecnología de punta, garantizando escalabilidad, seguridad y performance en producción.",
            KEY_FEATURES: "Arquitectura multi-módulo con 15+ módulos NestJS especializados · Integración de múltiples métodos de pago · Autenticación avanzada con OAuth2 + tokens JWT · Sistema de lealtad y beneficios promocionales · Módulo de facturación con generación de PDF · Gestión completa del ciclo de vida de órdenes · Dashboard administrativo con analytics · Control de acceso basado en roles (RBAC) · UI responsivo con Angular Material + Tailwind CSS",
            TECHNICAL_ARCHITECTURE: "Backend: NestJS 11.0 con TypeScript, PostgreSQL + TypeORM, OAuth2 + JWT, arquitectura modular con 15+ módulos independientes. Frontend: Angular 19 Standalone, gestión de estado NgRx, Angular Material + Tailwind CSS. Base de Datos: PostgreSQL 8.16 con TypeORM, optimización avanzada de índices y queries, connection pooling. Seguridad: OAuth2 + JWT con refresh tokens en httpOnly cookies, RBAC granular, rate limiting adaptativo.",
            METRICS: "Calidad de Código: >80% cobertura de tests en lógica crítica, 100% TypeScript strict mode, 0 errores ESLint. Escalabilidad: 1000+ usuarios simultáneos, 15+ módulos independientes, 50+ endpoints API.",
            DETAILED_PAGE: {
              ROLE_AND_RESPONSIBILITIES: {
                DESCRIPTION: "Como Co-fundador y Líder Técnico, arquitecto e implemento la plataforma completa desde cero, tomando decisiones estratégicas en stack tecnológico, diseño de sistemas y estructura del equipo. Lidero el equipo de desarrollo, realizo code reviews, mentoricé a desarrolladores junior y garantizo adherencia a mejores prácticas. Mis responsabilidades incluyen diseño de API backend con NestJS, optimización frontend con Angular 19 Standalone, arquitectura y optimización de base de datos, implementación de seguridad y gestión de pipeline DevOps/CI-CD. Defino la hoja de ruta técnica, evalúo nuevas tecnologías y equilibro requerimientos de negocio con excelencia de ingeniería."
              },
              PROJECT_DESCRIPTION: {
                DESCRIPTION: "XTECHARG es una plataforma SaaS B2B que automatiza procesos empresariales y facilita transacciones comerciales. El sistema integra Angular 19 Standalone con NestJS, APIs REST para escalabilidad, PostgreSQL con indexación estratégica y optimización, y Docker/Dokploy para containerización y deployment. La plataforma integra pasarelas de pago (Mercado Pago, CoinPayments), implementa autenticación OAuth2/Google API con JWT, y proporciona logging integral. Toda la comunicación de datos utiliza HTTPS seguro con validación apropiada."
              },
              CHALLENGES: [
                {
                  title: "Arquitectura Modular Escalable desde Cero",
                  description: "Diseñé 15+ módulos independientes en NestJS, cada uno responsable de un dominio de negocio específico. Cada módulo encapsula: entidades TypeORM, controladores, servicios, DTOs, y validadores. Implementé Guards personalizados (@RoleProtected, @Public) y decoradores para autorización granular basada en roles (RBAC). Los módulos se comunican a través de servicios inyectados, permitiendo escalabilidad y reutilización sin acoplamiento. Desafío: mantener bajo acoplamiento mientras se escala horizontalmente sin dependencias circulares."
                },
                {
                  title: "Patrón Strategy para Múltiples Métodos de Pago",
                  description: "Implementé el patrón Strategy en PaymentsService que abstrae múltiples proveedores de pago. Cada proveedor (MercadoPagoProvider, CoinPaymentsProvider, ManualPaymentProvider, TransferPaymentProvider) implementa la interfaz PaymentProvider con métodos: createPayment(), processPayment(), cancelPayment(). El servicio inyecta los proveedores y los mapea en un Map<PaymentMethod, PaymentProvider>. Esto permite agregar nuevos métodos de pago sin modificar la lógica existente, siguiendo SOLID principles."
                },
                {
                  title: "Autenticación Avanzada: OAuth2 + JWT + Guards Personalizados",
                  description: "Implementé un sistema de autenticación robusto con múltiples estrategias: OAuth2 Google, JWT local, refresh tokens. Los refresh tokens se almacenan en httpOnly cookies. Creé Guards personalizados: JwtAuthGuard para validar tokens, UserRoleGuard para autorización basada en roles, y decorador @RoleProtected que especifica roles requeridos. Cada endpoint valida automáticamente autenticación y autorización. Tokens JWT incluyen claims de usuario, roles, y permisos con expiración y rotación automática."
                },
                {
                  title: "NgRx State Management con Complex Effects y Selectors",
                  description: "Implementé NgRx store con múltiples feature states: leftSidebar, rightSidebar, stepper, currentUser, favorites, order, leftSidebarFilters. Cada feature tiene Actions, Reducers, Selectors memorizados, y Effects. Usé Custom Middleware para lógica compleja entre acciones. Los Selectors memorizados previenen renders innecesarios. Effects manejan llamadas HTTP asincrónicas y actions encadenadas. Resultado: state predictible, debugging fácil con Redux DevTools, rendimiento optimizado."
                },
                {
                  title: "Comunicación Tipada con HTTP Interceptors y Error Handling",
                  description: "Creé un servicio HTTP layer con tipos TypeScript estrictos. Implementé custom HttpInterceptor que: 1) Adjunta JWT token a headers, 2) Maneja errores con retry logic, 3) Transforma errores HTTP a mensajes amigables, 4) Carga automáticamente. Los servicios (@apis) definen interfaces tipadas para cada respuesta. Implementé error handling centralizado con try-catch en Effects, mapeo de errores HTTP a acciones Redux. Resultado: código type-safe, mejor debugging, experiencia de usuario consistente."
                },
                {
                  title: "UI Responsiva con Angular Material + Tailwind + Animaciones",
                  description: "Diseñé componentes reutilizables usando Angular Material + Tailwind CSS. Material proporciona componentes accesibles (buttons, forms, tables, dialogs). Tailwind CSS customiza estilos con utility classes. Implementé animaciones personalizadas Angular (expandCollapse, slide, zoom) para transiciones suaves. Sidebars responsivos (left, right) con breakpoints adaptables. Formularios reactivos con validación en tiempo real. Paleta de colores consistente con tema claro/oscuro compatible con múltiples dispositivos."
                },
                {
                  title: "Asistente de chat con IA (NestJS, Angular y OpenAI)",
                  description: "Implementé un asistente de chat in-app (Asistente xtecharg) para atender dudas sobre pedidos, envíos, pagos y la tienda. Backend: módulo NestJS con integración a OpenAI API, prompt engineering y respuestas en streaming seguras. Frontend: widget Angular (botón flotante, modal, acciones rápidas Pedido, Envíos, Pago, Contacto), manejo de mensajes en tiempo real y UX alineada con la plataforma. Flujo end-to-end con DTOs tipados y manejo de errores."
                }
              ],
              LEARNINGS: [
                "Arquitectura modular de aplicaciones complejas: separación de concerns, bajo acoplamiento, SOLID principles aplicados en producción.",
                "Patrones de diseño en producción: Strategy, Factory, Guard, Observer, Decorator, Repository.",
                "NestJS advanced: módulos, Guards, Interceptors, custom decorators, validación con class-validator.",
                "TypeORM: relaciones de entidades complejas, queries optimizadas, migrations, conexión pooling, índices estratégicos.",
                "Angular 19 Standalone API: arquitectura modular, standalone components, composición sin NgModule.",
                "NgRx state management: Actions, Reducers, Effects, Selectors memorizados, DevTools debugging avanzado.",
                "Multi-payment integration: abstracción de proveedores con Strategy Pattern, manejo de errores, reconciliación de transacciones.",
                "Seguridad multinivel: OAuth2/Google API, JWT con refresh tokens, RBAC granular, validación de datos, HTTPS.",
                "Asistente de chat con IA in-app: NestJS + OpenAI API, widget Angular, respuestas en streaming, prompt engineering."
              ],
              TECHNOLOGIES: [
                "Angular 19 Standalone",
                "Angular Material",
                "Tailwind CSS",
                "RxJS",
                "NgRx con Effects y Selectors",
                "NestJS",
                "TypeORM",
                "PostgreSQL",
                "JWT Authentication",
                "OAuth2/Google API Auth",
                "Docker (Multi-stage builds)",
                "Docker Compose",
                "Dokploy",
                "GitHub Actions CI/CD",
                "Swagger/OpenAPI",
                "Jest (Unit Testing)",
                "TypeScript (Strict Mode)",
                "Git",
                "Google Cloud Platform",
                "Google Cloud Storage",
                "Google Cloud SQL",
                "Mercado Pago API",
                "CoinPayments API",
                "OpenAI API"
              ],
              DURATION: "2024 — Presente",
              EMPLOYMENT_TYPE: "Profesional independiente",
              LINKS: {
                WEBSITE: "xtech.com.ar",
                LOGO: "assets/imgs/xtecharg.jpeg",
                GITHUB: "https://github.com/xtecharg",
                LINK: "https://xtech.com.ar/"
              }
            }
          }
        },
        PROJECTS_SECTION: {
          TITLE: "Proyectos",
          PORTFOLIO: {
            TITLE: "Web Frontend Engineer · Portafolio web",
            DESCRIPTION: "Desarrollé y diseñé un sitio web de portafolio usando Angular y Angular Material. Este proyecto muestra varias habilidades frontend, incluyendo el uso de CSS/SCSS para estilos y Git/GitHub para control de versiones. El sitio es completamente responsivo y optimizado para el rendimiento, ofreciendo una experiencia de usuario atractiva e interactiva.",
            DETAILED_PAGE: {
              ROLE_AND_RESPONSIBILITIES: {
                DESCRIPTION: "Mi portafolio personal es una ventana abierta a mi pasión por la tecnología y crecimiento profesional. Con un estilo relajado y natural, desarrollo interfaces modernas, interactivas y adaptativas usando Angular, Angular Material, Tailwind y SCSS. Cada proyecto, ya sea en ecommerce, organización de eventos o logística, es una oportunidad para continuar aprendiendo y disfrutar del proceso creativo."
              },
              PROJECT_DESCRIPTION: {
                DESCRIPTION: "El proyecto cubre el desarrollo de soluciones web integrales: una plataforma de ecommerce robusta, aplicaciones para organizadores de eventos y plataformas logísticas. Comenzó con Angular 9 y evolucionó a Angular 19, integra Node.js y GraphQL para construir APIs eficientes, aplicando técnicas avanzadas de rendimiento y un diseño intuitivo."
              },
              CHALLENGES: [
                {
                  title: "Eventloop.ar",
                  description: "En el proyecto 'Eventloop.ar', me desempeñé como Desarrollador Frontend SSR, contribuyendo al desarrollo de componentes reutilizables e integrando servicios RESTful. Gestionar el estado con NgRx fue clave para implementar estrategias técnicas que optimizaron el rendimiento y la escalabilidad, superando desafíos en la sincronización de datos en tiempo real."
                },
                {
                  title: "Siete Ideas",
                  description: "Como Desarrollador Frontend Web SSR en 'Siete Ideas', desarrollé y mantuve aplicaciones web responsivas, implementando componentes UI robustos con Angular y Angular Material. Integrar servicios RESTful y realizar pruebas unitarias e integrales fueron fundamentales para asegurar la calidad del producto y la confiabilidad en un entorno dinámico."
                },
                {
                  title: "Varios Proyectos",
                  description: "En varios proyectos que abarcan ecommerce, organización de eventos y logística, desarrollé soluciones integrales aplicando prácticas avanzadas en rendimiento, seguridad y usabilidad. Este desafío me permitió adaptarme a las necesidades del mercado y optimizar procesos críticos, consolidando mi experiencia en el desarrollo de aplicaciones escalables."
                }
              ],
              LEARNINGS: [
                "Dominio avanzado del ecosistema Angular y su evolución desde la versión 9 a la 19.",
                "Uso avanzado de Tailwind CSS y SCSS para estilos modernos y eficientes.",
                "Integración de soluciones backend a través de APIs REST y GraphQL para aplicaciones en tiempo real.",
                "Optimización de aplicaciones web y gestión de estado con RxJS.",
                "Desarrollo e implementación de APIs escalables con Node.js, NestJS y GraphQL.",
                "Implementación de contenedores Docker para mejorar despliegues y escalabilidad.",
                "Automatización de procesos de integración y despliegue continuo usando CI/CD (GitHub Actions).",
                "Cursos y certificaciones en Desarrollo Web Full, Node, JavaScript, Angular y NestJS."
              ],
                             SOFT_SKILLS: [
                 "Comunicación efectiva y colaboración en equipos multidisciplinarios",
                 "Pensamiento analítico y resolución de problemas complejos",
                 "Aprendizaje continuo y rápida adaptación a nuevas tecnologías",
                 "Gestión eficiente del tiempo y cumplimiento de plazos en entornos ágiles"
               ],
              TECHNOLOGIES: [
                "Angular 9 → 19",
                "Angular Material",
                "Tailwind CSS",
                "CSS",
                "HTML",
                "SCSS",
                "JavaScript",
                "TypeScript",
                "RxJS",
                "Node.js",
                "NestJS",
                "GraphQL",
                "Docker",
                "CI/CD (GitHub Actions)",
                "Git",
                "GitHub",
                "DBeaver",
                "ClickUp",
                "Jira",
                "Trello",
                "Scrum",
                "GitGraph (VS Code)"
              ],
              DURATION: "2019 — Presente",
              EMPLOYMENT_TYPE: "Profesional independiente",
              LINKS: {
                WEBSITE: "portafolio",
                LOGO: "assets/imgs/porfolio_web.png",
                GITHUB: "https://github.com/username/portfolio",
                LIVE: "https://lucadmendoza.dev/"
              }
            }
          },
          GAMEZONIA: {
            TITLE: "Web Engineer · Gamezonia",
            DESCRIPTION: "Desarrollé una plataforma de comercio electrónico integral usando el stack MEAN (MongoDB, Express.js, Angular, Node.js) combinado con GraphQL. El proyecto involucró implementar procesamiento de pagos con Stripe, notificaciones automáticas por email con Nodemailer, y desplegar la aplicación en varias plataformas incluyendo Netlify, Heroku y MongoDB Atlas.",
            DETAILED_PAGE: {
              ROLE_AND_RESPONSIBILITIES: {
                DESCRIPTION: "Gamezonia es un proyecto de comercio electrónico innovador basado en el stack MEAN+G, integrando una tienda en línea completa junto con una solución de panel administrativo. Su arquitectura utiliza Angular en el frontend y Node.js con GraphQL en el backend, permitiendo autenticación segura con JWT, procesamiento de pagos a través de Stripe, y despliegue en la nube para proporcionar una experiencia robusta y escalable."
              },
              PROJECT_DESCRIPTION: {
                DESCRIPTION: "El proyecto se enfoca en desarrollar una solución de comercio electrónico integral que incluye un panel administrativo intuitivo para gestionar productos, usuarios y pedidos. Empleando Angular 9 para un frontend responsivo y Node.js con GraphQL para la API, implementa funcionalidades avanzadas como Lazy Loading, paginación, filtrado y respaldos automáticos, asegurando una solución eficiente adaptable a diversas necesidades."
              },
              CHALLENGES: [
                {
                  title: "Integración de GraphQL en un Stack MEAN",
                  description: "Implementar GraphQL como API en lugar de REST usando Apollo Server y adaptar la estructura de resolvers y schemas para una gestión eficiente de datos."
                },
                {
                  title: "Optimización del Frontend con Angular 9",
                  description: "Adaptar plantillas HTML dentro del proyecto Angular, mejorar el rendimiento con Lazy Loading y optimizar la experiencia del usuario en una aplicación de gran escala."
                },
                {
                  title: "Despliegue Sin Costos",
                  description: "Configurar correctamente el backend en Heroku, el frontend en Netlify y la base de datos en MongoDB Atlas, asegurando una arquitectura escalable sin costos adicionales."
                }
              ],
              LEARNINGS: [
                "Profundización del conocimiento en Angular y GraphQL con Apollo Server.",
                "Gestión avanzada de autenticación y seguridad en aplicaciones web.",
                "Optimización de rendimiento de aplicaciones MEAN.",
                "Implementación de pagos con Stripe en comercio electrónico.",
                "Gestión de despliegues en la nube usando herramientas gratuitas."
              ],
              TECHNOLOGIES: [
                "Angular 9",
                "Node.js",
                "GraphQL",
                "MongoDB",
                "Express",
                "JWT",
                "Stripe",
                "Nodemailer",
                "NgBootstrap",
                "Netlify",
                "Heroku",
                "MongoDB Atlas",
                "GitHub"
              ],
              DURATION: "11/2020 — 11/2021",
              EMPLOYMENT_TYPE: "Tiempo Parcial",
              LINKS: {
                WEBSITE: "gamezonia.com",
                LOGO: "assets/imgs/gamezonia.png",
                GITHUB_FRONTEND: "https://github.com/Luca-Mendoza/Frontend-meang-online-shop",
                GITHUB_BACKEND: "https://github.com/Luca-Mendoza/Backend-meang-online-shop",
                LINK: "https://luca-mendoza.github.io/Frontend-meang-online-shop/#/"
              }
            }
          }
        }
      },
      DETAILS: {
        COPY_URL: "Copiar URL",
        TECHNOLOGIES: "Tecnologías Utilizadas",
        PREVIOUS_EXPERIENCE: "Experiencia Anterior",
        NEXT_EXPERIENCE: "Siguiente Experiencia",
        PREVIOUS_PROJECT: "Proyecto Anterior",
        NEXT_PROJECT: "Siguiente Proyecto",
        DURATION: "Duración",
        EMPLOYMENT_TYPE: "Tipo de Empleo",
        PART_TIME: "TIEMPO PARCIAL",
        FULL_TIME: "TIEMPO COMPLETO",
        PRESENT: "PRESENTE"
      },
      LANGUAGES: {
        EN: "English",
        ES: "Español"
      },
      VOICE_PAGE: {
        HERO_TITLE: "Luca Mendoza",
        HERO_SUBTITLE: "Senior Front-End Developer",
        VIDEO_PLACEHOLDER: "Video de presentación.",
        CONTEXT_PARAGRAPH: "Trabajo como Senior Front-End Developer con Angular, construyendo aplicaciones escalables en producción. También participo en proyectos independientes. Me importa el código limpio, la comunicación clara y asumir bien el frontend.",
        CONTEXT_PARAGRAPH_1: "Soy Ingeniero Senior Front-End especializado en Angular, con más de cinco años de experiencia trabajando en aplicaciones que evolucionan en entornos reales.",
        CONTEXT_PARAGRAPH_2: "Mi foco está en la arquitectura frontend: manejo de estado con NgRx, optimización de performance y construcción de estructuras escalables que acompañen el crecimiento del producto a largo plazo.",
        CONTEXT_PARAGRAPH_3: "Valoro la claridad, la mantenibilidad y las decisiones técnicas bien pensadas. Colaboro de cerca con equipos de diseño y backend, entendiendo el frontend como una capa estratégica donde los requisitos de negocio se convierten en experiencias de usuario confiables.",
        CONTEXT_PERSONAL: "Más allá de lo técnico, refino constantemente cómo diseño sistemas y abordo el desarrollo de software con una mentalidad tranquila y pragmática.",
        CTA_RESUME: "Ver CV",
        CTA_CONTACT: "Contacto",
        FOOTER_NOTE: "Si querés saber más, podés explorar mi experiencia, ver mi CV o escribirme."
      }
    }
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.initializeLanguage();
  }

  private initializeLanguage(): void {
    // Solo ejecutar en el navegador
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    try {
      // Obtener idioma guardado en localStorage o usar el del navegador
      const savedLanguage = localStorage.getItem('selectedLanguage') as Language;
      const browserLanguage = navigator.language.split('-')[0] as Language;

      if (savedLanguage && ['en', 'es'].includes(savedLanguage)) {
        this.setLanguage(savedLanguage);
      } else if (browserLanguage && ['en', 'es'].includes(browserLanguage)) {
        this.setLanguage(browserLanguage);
      } else {
        this.setLanguage('en');
      }
    } catch (error) {
      console.warn('Error initializing language:', error);
      this.setLanguage('en');
    }
  }

  public setLanguage(lang: Language): void {
    this.currentLanguageSubject.next(lang);

    // Solo guardar en localStorage si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      try {
        localStorage.setItem('selectedLanguage', lang);
      } catch (error) {
        console.warn('Error saving language to localStorage:', error);
      }
    }
  }

  public getCurrentLanguage(): Language {
    return this.currentLanguageSubject.value;
  }

  public toggleLanguage(): void {
    const currentLang = this.getCurrentLanguage();
    const newLang: Language = currentLang === 'en' ? 'es' : 'en';
    this.setLanguage(newLang);
  }

  public getLanguageLabel(lang: Language): string {
    return lang === 'en' ? 'English' : 'Español';
  }

  public translate(key: string): any {
    const keys = key.split('.');
    let value: any = this.translations[this.getCurrentLanguage()];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Retorna la clave si no se encuentra la traducción
      }
    }

    return value; // Retorna el valor tal como es (string, array, objeto, etc.)
  }
}
