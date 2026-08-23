export const projects = [
    {
        "id": "gamezonia",
        "type": "project",
        "title": "Full-Stack Engineer",
        "company": "Gamezonia",
        "date": "2020 — 2021",
        "duration": "Proyecto Full-Stack",
        "description": "Plataforma de comercio electrónico Full-Stack desarrollada sobre la arquitectura MEAN+G (MongoDB, Express, Angular, Node.js y GraphQL con Apollo Server). Incluye una tienda online orientada al cliente y un panel de administración completo con autenticación JWT, pasarela de pagos con Stripe API, emisión de correos transaccionales con Nodemailer y despliegue cloud.",
        "project_description": "Desarrollo integral de una solución e-commerce completa con panel de control administrativo para gestión de catálogo, usuarios y pedidos. Utiliza GraphQL para consultas con paginación avanzada y filtrado dinámico, autenticación con cifrado bcrypt, persistencia del carrito de compras y sincronización de eventos de pago.",
        "technologies": [
            "Angular",
            "Node.js",
            "GraphQL",
            "Apollo Server",
            "Express",
            "MongoDB",
            "MongoDB Atlas",
            "Stripe API",
            "JWT",
            "Nodemailer",
            "RxJS",
            "HTML",
            "CSS / SCSS",
            "Git",
            "GitHub",
            "Netlify",
            "Heroku"
        ],
        "features": [
            "Arquitectura Full-Stack desacoplada con API GraphQL y cliente Angular.",
            "Sistema de autenticación y autorización mediante JWT y bcrypt.",
            "Procesamiento seguro de cobros y sincronización de clientes con Stripe API.",
            "Notificaciones por correo electrónico transaccionales automáticas con Nodemailer.",
            "Paginación avanzada, ordenamiento y filtrado dinámico de productos en GraphQL.",
            "Panel de administración para gestión completa de catálogo, categorías y usuarios.",
            "Despliegue y gestión de base de datos cloud con MongoDB Atlas y servidores cloud."
        ],
        "challenges": [
            {
                "title": "Arquitectura de API GraphQL sobre MongoDB",
                "description": "Diseño de esquemas GraphQL estructurados, resolvers de consulta y mutaciones utilizando Apollo Server para gestionar eficientemente catálogos de productos relacionales y órdenes compuestas sobre bases de datos de documentos."
            },
            {
                "title": "Integración Segura de Pagos de Extremo a Extremo",
                "description": "Desarrollo de un flujo de compra robusto con Stripe API, gestionando el registro de clientes, procesamiento de transacciones, generación de recibos por correo y manejo en tiempo real de estados de cobro."
            },
            {
                "title": "Sincronización de Estado y Autenticación Modular",
                "description": "Sincronización de tokens de autenticación JWT entre los guards de Angular y los headers HTTP de Apollo, garantizando la persistencia de sesión y seguridad para usuarios y administradores."
            }
        ],
        "learnings": [
            "Dominio profundo del lenguaje de definición de esquemas (SDL) de GraphQL, resolvers y arquitectura Apollo Server en Node.js.",
            "Implementación de patrones de autenticación seguros con JWT, encriptación bcrypt de contraseñas y autorización basada en roles.",
            "Desarrollo de soluciones de pago para ecommerce listas para producción integradas con Stripe API y correos transaccionales con Nodemailer.",
            "Optimización del rendimiento frontend en Angular mediante carga perezosa de módulos (lazy loading), servicios reactivos y jerarquía limpia de componentes.",
            "Arquitectura y despliegue de soluciones cloud escalables utilizando MongoDB Atlas, Netlify y servidores de aplicaciones."
        ],
        "course": {
            "name": "Tienda Online: NodeJS + MongoDB + Stripe + GraphQL - MEAN+G",
            "platform": "Udemy",
            "link": "https://www.udemy.com/course/anartz-mugika-ledo-ecommerce-graphql-angular-nodejs-mongo-stripe-meang/?couponCode=ST17MT31325G1",
            "requirements": [
                "Tener muchas ganas de aprender",
                "Conocimientos en Angular (componentes, directivas, pipes, servicios, etc.)",
                "Experiencia básica en GraphQL y manejo del playground",
                "Conocimientos básicos de Git (añadir, commitear y pushear)"
            ],
            "description": "Curso práctico para desarrollar un proyecto real de e-commerce con el stack MEAN+G, integrando Angular, NodeJS, GraphQL, MongoDB, Stripe y más, enfocado en la creación de aplicaciones modulares y escalables."
        },
        "links": {
            "github_frontend": "https://github.com/Luca-Mendoza/Frontend-meang-online-shop",
            "github_backend": "https://github.com/Luca-Mendoza/Backend-meang-online-shop",
            "link": "https://luca-mendoza.github.io/Frontend-meang-online-shop/#/",
            "name": "gamezonia.com",
            "assets": "assets/imgs/gamezonia.png"
        },
        "images": [
            "assets/imgs/gamezonia/gamezonia_01.jpeg",
            "assets/imgs/gamezonia/gamezonia_02.jpeg",
            "assets/imgs/gamezonia/gamezonia_03.jpeg",
            "assets/imgs/gamezonia/gamezonia_04.jpeg",
            "assets/imgs/gamezonia/gamezonia_05.jpeg",
            "assets/imgs/gamezonia/gamezonia_06.jpeg",
            "assets/imgs/gamezonia/gamezonia_07.jpeg",
            "assets/imgs/gamezonia/gamezonia_08.jpeg",
            "assets/imgs/gamezonia/gamezonia_09.jpeg",
            "assets/imgs/gamezonia/gamezonia_10.jpeg",
            "assets/imgs/gamezonia/gamezonia_11.jpeg",
            "assets/imgs/gamezonia/gamezonia_12.png"
        ]
    },
    {
        "id": "portfolio",
        "type": "project",
        "title": "Web Frontend Engineer",
        "company": "Luca D. Mendoza",
        "date": "2019 — Present",
        "duration": "Full-Time",
        "role": "Ingeniero en Sistemas y Desarrollador Web, siempre en búsqueda de innovación y actualización, especializado en el desarrollo de interfaces modernas y escalables con Angular.",
        "responsibilities": [
            "Desarrollar y mantener aplicaciones web responsivas utilizando Angular y tecnologías emergentes.",
            "Implementar diseños UI/UX atractivos con Angular Material y Tailwind CSS, combinando estética y funcionalidad.",
            "Optimizar el rendimiento mediante técnicas como Lazy Loading, prefetching y manejo avanzado del estado con RxJS.",
            "Integrar soluciones backend mediante APIs REST y GraphQL para autenticación y gestión de datos en tiempo real.",
            "Colaborar con equipos de diseño y desarrollo en proyectos de ecommerce, eventos y logística.",
            "Realizar pruebas, debugging y mejoras continuas para garantizar la estabilidad y calidad de las aplicaciones."
        ],
        "description": "Mi portafolio personal es una ventana abierta a mi pasión por la tecnología y mi evolución profesional. Con un estilo relajado y natural, desarrollo interfaces modernas, interactivas y adaptativas usando Angular, Angular Material, Tailwind y SCSS. Cada proyecto, ya sea de ecommerce, organización de eventos o logística, es una oportunidad para seguir aprendiendo y disfrutar del proceso creativo.",
        "project_description": "El proyecto abarca el desarrollo de soluciones web integrales: un ecommerce robusto, aplicaciones para organizadores de eventos y plataformas logísticas. Iniciado con Angular 9 y evolucionado a Angular 19, integra Node.js y GraphQL para construir APIs eficientes, aplicando técnicas avanzadas de rendimiento y un diseño intuitivo.",
        "technologies": [
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
        "features": [
            "Interfaz moderna y responsiva utilizando Angular Material y Tailwind.",
            "Gestión de contenido dinámico y en tiempo real mediante APIs REST y GraphQL.",
            "Sección interactiva de proyectos con animaciones fluidas.",
            "Optimización del rendimiento mediante técnicas como Lazy Loading y prefetching.",
            "Integración de APIs y servicios de terceros para ampliar la funcionalidad de la aplicación."
        ],
        "challenges": [
            {
                "title": "Eventloop.ar",
                "description": "En el proyecto 'Eventloop.ar', desempeñé el rol de SSR Frontend Developer, colaborando en el desarrollo de componentes reutilizables y en la integración de servicios RESTful. La gestión del estado con NgRx fue clave para implementar estrategias técnicas que optimizaron el rendimiento y la escalabilidad, superando desafíos en la sincronización de datos en tiempo real."
            },
            {
                "title": "Siete Ideas",
                "description": "Como Frontend Web Developer en 'Siete Ideas', desarrollé y mantuve aplicaciones web responsivas, implementando componentes UI robustos con Angular y Angular Material. La integración de servicios RESTful y la realización de pruebas unitarias e integrales fueron fundamentales para garantizar la calidad y confiabilidad del producto en un entorno dinámico."
            },
            {
                "title": "Proyectos Diversos",
                "description": "En diversos proyectos que abarcan ecommerce, organización de eventos y logística, desarrollé soluciones integrales aplicando prácticas avanzadas de rendimiento, seguridad y usabilidad. Este desafío me permitió adaptarme a las necesidades del mercado y optimizar procesos críticos, consolidando mi experiencia en el desarrollo de aplicaciones escalables."
            }
        ],
        "learnings": [
            "Dominio avanzado del ecosistema Angular y su evolución desde la versión 9 hasta la 19.",
            "Uso avanzado de Tailwind CSS y SCSS para estilizaciones modernas y eficientes.",
            "Integración de soluciones backend mediante APIs REST y GraphQL para aplicaciones en tiempo real.",
            "Optimización de aplicaciones web y manejo del estado con RxJS.",
            "Desarrollo e implementación de APIs escalables con Node.js, NestJS y GraphQL.",
            "Implementación de contenedores Docker para mejorar despliegues y escalabilidad.",
            "Automatización de procesos de integración y despliegue continuo mediante CI/CD (GitHub Actions).",
            "Cursos y certificaciones en Desarrollo Web Completo, Node, JavaScript, Angular y NestJS."
        ],
        "soft_skills": [
            "Comunicación efectiva y colaboración en equipos multidisciplinarios.",
            "Pensamiento analítico y resolución de problemas complejos.",
            "Aprendizaje continuo y rápida adaptación a nuevas tecnologías.",
            "Gestión eficiente del tiempo y cumplimiento de deadlines en entornos ágiles."
        ],
        "achievements": [
            "Reducción del tiempo de carga en un 40% mediante optimización de assets y técnicas de Lazy Loading.",
            "Implementación exitosa de autenticación segura con APIs REST y GraphQL, mejorando la seguridad de la plataforma.",
            "Desarrollo de paneles de administración intuitivos que optimizaron la gestión de productos y usuarios en proyectos ecommerce y logísticos."
        ],
        "links": {
            "github": "https://github.com/username/portfolio",
            "live": "https://lucadmendoza.dev/"
        },
        "images": [
            "/assets/portfolio-preview.png"
        ],
        "contact_info": {
            "location": "Boedo, CABA, Argentina",
            "mobile": "1123923591",
            "email": "mendoza.d.luca@gmail.com",
            "linkedin": "https://www.linkedin.com/in/luca-d-mendoza-470575180"
        },
        "aptitudes": [
            "Apollo GraphQL",
            "Docker",
            "Redux.js"
        ],
        "languages": [
            "Inglés",
            "Español"
        ],
        "certifications": [
            "Desarrollo Web Completo con HTML5, CSS3, JS, AJAX, PHP y MySQL",
            "Node: De cero a experto",
            "JavaScript: de cero hasta los detalles (ES5)",
            "Angular: De cero a experto (Angular 10+)",
            "Fundamentos de la gestión del tiempo"
        ],
        "profile_summary": "Soy Luca Alberto Daniel Mendoza, Senior Front-End Engineer especializado en Angular. Construyo aplicaciones escalables y mantenibles, con foco en arquitectura frontend, rendimiento, UI/UX e integración con APIs. Fui Frontend Developer en Siete Ideas entre 2022 y 2026, y actualmente soy cofundador de XTECHARG y Eventloop.ar."
    }

]

export const projects_ingles = [
    {
        "id": "gamezonia",
        "type": "project",
        "title": "Full-Stack Engineer",
        "company": "Gamezonia",
        "date": "2020 — 2021",
        "duration": "Full-Stack Project",
        "description": "Full-stack e-commerce platform built on the MEAN+G architecture (MongoDB, Express, Angular, Node.js, and GraphQL with Apollo Server). Features a customer-facing storefront and a complete administrative panel with JWT authentication, Stripe API payments, Nodemailer transactional emails, and cloud deployment.",
        "project_description": "End-to-end development of a full e-commerce system with an administrative dashboard for catalog, user, and order management. Utilizes GraphQL for advanced query pagination and dynamic filtering, bcrypt authentication encryption, shopping cart persistence, and payment event sync.",
        "technologies": [
            "Angular",
            "Node.js",
            "GraphQL",
            "Apollo Server",
            "Express",
            "MongoDB",
            "MongoDB Atlas",
            "Stripe API",
            "JWT",
            "Nodemailer",
            "RxJS",
            "HTML",
            "CSS / SCSS",
            "Git",
            "GitHub",
            "Netlify",
            "Heroku"
        ],
        "features": [
            "Decoupled full-stack architecture with GraphQL API and Angular client.",
            "JWT-based authentication and authorization system using bcrypt.",
            "Secure payment processing and customer synchronization with Stripe API.",
            "Automated transactional email notifications with Nodemailer.",
            "Advanced pagination, sorting, and dynamic product filtering in GraphQL.",
            "Admin panel for full management of products, categories, and users.",
            "Cloud database deployment and management with MongoDB Atlas and cloud hosts."
        ],
        "challenges": [
            {
                "title": "GraphQL API Architecture over MongoDB",
                "description": "Designing structured GraphQL schemas, query resolvers, and mutation handlers using Apollo Server to support complex relational product catalogs and nested order items efficiently on top of document stores."
            },
            {
                "title": "End-to-End Secure Payment Integration",
                "description": "Building a secure checkout flow with Stripe API, handling customer registration, payment intent processing, receipt generation, and real-time transaction error handling."
            },
            {
                "title": "Modular Full-Stack State & Auth Synchronization",
                "description": "Synchronizing JWT-based authentication tokens across Angular guards and Apollo HTTP headers, ensuring seamless session persistence and security for admin and client roles."
            }
        ],
        "learnings": [
            "Deep mastery of GraphQL schema definition language (SDL), resolvers, and Apollo Server architecture in Node.js.",
            "Implementation of secure authentication patterns with JWT, bcrypt password encryption, and role-based authorization.",
            "Building production-ready e-commerce checkout solutions integrated with Stripe API and transactional emails via Nodemailer.",
            "Optimization of Angular application performance through lazy loading modules, custom reactive services, and clean component hierarchy.",
            "Architecting scalable cloud deployments using MongoDB Atlas, Netlify, and cloud backend hosts."
        ],
            "Managing cloud deployments using free tools."
        ],
        "course": {
            "name": "Online Store: NodeJS + MongoDB + Stripe + GraphQL - MEAN+G",
            "platform": "Udemy",
            "link": "https://www.udemy.com/course/anartz-mugika-ledo-ecommerce-graphql-angular-nodejs-mongo-stripe-meang/?couponCode=ST17MT31325G1",
            "requirements": [
                "A strong desire to learn",
                "Knowledge of Angular (components, directives, pipes, services, etc.)",
                "Basic experience with GraphQL and using the playground",
                "Basic Git knowledge (adding, committing, and pushing)"
            ],
            "description": "A practical course to develop a real e-commerce project using the MEAN+G stack, integrating Angular, NodeJS, GraphQL, MongoDB, Stripe, and more, focused on creating modular and scalable applications."
        },
        "links": {
            "github_frontend": "https://github.com/Luca-Mendoza/Frontend-meang-online-shop",
            "github_backend": "https://github.com/Luca-Mendoza/Backend-meang-online-shop",
            "link": "https://luca-mendoza.github.io/Frontend-meang-online-shop/#/",
            "name": "gamezonia.com",
            "assets": "assets/imgs/gamezonia.png"
        },
        "images": [
            "assets/imgs/gamezonia/gamezonia_01.jpeg",
            "assets/imgs/gamezonia/gamezonia_02.jpeg",
            "assets/imgs/gamezonia/gamezonia_03.jpeg",
            "assets/imgs/gamezonia/gamezonia_04.jpeg",
            "assets/imgs/gamezonia/gamezonia_05.jpeg",
            "assets/imgs/gamezonia/gamezonia_06.jpeg",
            "assets/imgs/gamezonia/gamezonia_07.jpeg",
            "assets/imgs/gamezonia/gamezonia_08.jpeg",
            "assets/imgs/gamezonia/gamezonia_09.jpeg",
            "assets/imgs/gamezonia/gamezonia_10.jpeg",
            "assets/imgs/gamezonia/gamezonia_11.jpeg",
            "assets/imgs/gamezonia/gamezonia_12.png"
        ]
    },
    {
        "id": "portfolio",
        "type": "project",
        "title": "Web Frontend Engineer",
        "company": "Luca D. Mendoza",
        "date": "2019 — Present",
        "duration": "Full-Time",
        "role": "Systems Engineer and Web Developer, constantly seeking innovation and improvement, specialized in developing modern and scalable interfaces with Angular.",
        "responsibilities": [
            "Develop and maintain responsive web applications using Angular and emerging technologies.",
            "Implement attractive UI/UX designs with Angular Material and Tailwind CSS, combining aesthetics and functionality.",
            "Optimize performance through techniques such as Lazy Loading, prefetching, and advanced state management with RxJS.",
            "Integrate backend solutions through REST and GraphQL APIs for secure authentication and real-time data management.",
            "Collaborate with design and development teams on ecommerce, events, and logistics projects.",
            "Conduct testing, debugging, and continuous improvements to ensure application stability and quality."
        ],
        "description": "My personal portfolio is an open window into my passion for technology and professional growth. With a relaxed and natural style, I develop modern, interactive, and adaptive interfaces using Angular, Angular Material, Tailwind, and SCSS. Each project, whether in ecommerce, event organization, or logistics, is an opportunity to continue learning and enjoy the creative process.",
        "project_description": "The project covers the development of comprehensive web solutions: a robust ecommerce platform, applications for event organizers, and logistics platforms. Started with Angular 9 and evolved to Angular 19, it integrates Node.js and GraphQL to build efficient APIs, applying advanced performance techniques and an intuitive design.",
        "technologies": [
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
        "features": [
            "Modern and responsive interface using Angular Material and Tailwind.",
            "Real-time dynamic content management through REST and GraphQL APIs.",
            "Interactive project section with smooth animations.",
            "Performance optimization using Lazy Loading and prefetching techniques.",
            "Integration of third-party APIs and services to expand application functionality."
        ],
        "challenges": [
            {
                "title": "Eventloop.ar",
                "description": "In the 'Eventloop.ar' project, I served as an SSR Frontend Developer, contributing to the development of reusable components and integrating RESTful services. Managing state with NgRx was key to implementing technical strategies that optimized performance and scalability, overcoming challenges in real-time data synchronization."
            },
            {
                "title": "Siete Ideas",
                "description": "As an Frontend Engineer at 'Siete Ideas', I developed and maintained responsive web applications, implementing robust UI components with Angular and Angular Material. Integrating RESTful services and performing unit and integration tests were fundamental to ensuring product quality and reliability in a dynamic environment."
            },
            {
                "title": "Various Projects",
                "description": "In various projects encompassing ecommerce, event organization, and logistics, I developed comprehensive solutions by applying advanced practices in performance, security, and usability. This challenge allowed me to adapt to market needs and optimize critical processes, consolidating my experience in developing scalable applications."
            }
        ],
        "learnings": [
            "Advanced mastery of the Angular ecosystem and its evolution from version 9 to 19.",
            "Advanced use of Tailwind CSS and SCSS for modern and efficient styling.",
            "Integration of backend solutions through REST and GraphQL APIs for real-time applications.",
            "Optimization of web applications and state management with RxJS.",
            "Development and implementation of scalable APIs with Node.js, NestJS, and GraphQL.",
            "Implementation of Docker containers to improve deployments and scalability.",
            "Automation of integration and continuous deployment processes using CI/CD (GitHub Actions).",
            "Courses and certifications in Full Web Development, Node, JavaScript, Angular, and NestJS."
        ],
        "soft_skills": [
            "Effective communication and collaboration in multidisciplinary teams.",
            "Analytical thinking and resolution of complex problems.",
            "Continuous learning and rapid adaptation to new technologies.",
            "Efficient time management and meeting deadlines in agile environments."
        ],
        "achievements": [
            "40% reduction in load times through asset optimization and Lazy Loading techniques.",
            "Successful implementation of secure authentication with REST and GraphQL APIs, enhancing platform security.",
            "Development of intuitive admin panels that optimized product and user management in ecommerce and logistics projects."
        ],
        "links": {
            "github": "https://github.com/username/portfolio",
            "live": "https://lucadmendoza.dev/"
        },
        "images": [
            "/assets/portfolio-preview.png"
        ],
        "contact_info": {
            "location": "Boedo, CABA, Argentina",
            "mobile": "1123923591",
            "email": "mendoza.d.luca@gmail.com",
            "linkedin": "https://www.linkedin.com/in/luca-d-mendoza-470575180"
        },
        "aptitudes": [
            "Apollo GraphQL",
            "Docker",
            "Redux.js"
        ],
        "languages": [
            "English",
            "Spanish"
        ],
        "certifications": [
            "Complete Web Development with HTML5, CSS3, JS, AJAX, PHP, and MySQL",
            "Node: From Zero to Expert",
            "JavaScript: From Zero to the Details (ES5)",
            "Angular: From Zero to Expert (Angular 10+)",
            "Time Management Fundamentals"
        ],
        "profile_summary": "I am Luca Alberto Daniel Mendoza, a Senior Front-End Engineer specialized in Angular. I build scalable and maintainable applications with a focus on frontend architecture, performance, UI/UX, and API integration. I worked as a Frontend Developer at Siete Ideas from 2022 to 2026, and I am currently co-founder of XTECHARG and Eventloop.ar."
    }
];
