export type Language = 'en' | 'vi'

export type ProjectCategory = 'all' | 'backend' | 'fullstack' | 'mobile'

export const cvOptions = [
  {
    id: 'frontend',
    title: { en: 'Frontend Developer CV', vi: 'CV Lập trình viên Frontend' },
    sub: { en: 'React, Next.js, TypeScript, UI/UX (PDF)', vi: 'React, Next.js, TypeScript, UI/UX (PDF)' },
    file: '/cv/Frontend-Intern-HuynhGiaHuy.pdf',
    fileName: 'Frontend-Intern-HuynhGiaHuy.pdf',
  },
  {
    id: 'mobile',
    title: { en: 'Flutter Mobile Developer CV', vi: 'CV Lập trình viên Flutter Mobile' },
    sub: { en: 'Flutter, Dart, REST API, PayOS (PDF)', vi: 'Flutter, Dart, REST API, PayOS (PDF)' },
    file: '/cv/CV-Intern-Mobile-HuynhGiaHuy.pdf',
    fileName: 'CV-Intern-Mobile-HuynhGiaHuy.pdf',
  },
] as const

export interface MetricItem {
  id: string
  value: number
  suffix: string
  label: { en: string; vi: string }
  sub: { en: string; vi: string }
}

export const impactMetrics: MetricItem[] = [
  {
    id: 'screens',
    value: 30,
    suffix: '+',
    label: { en: 'Mobile Screens', vi: 'Màn hình Mobile' },
    sub: { en: 'Complete UX flows in StayZ', vi: 'Luồng UX hoàn chỉnh StayZ' },
  },
  {
    id: 'apis',
    value: 15,
    suffix: '+',
    label: { en: 'REST Endpoints', vi: 'Tích hợp REST API' },
    sub: { en: 'Integrated with real-time sync', vi: 'Đồng bộ dữ liệu thời gian thực' },
  },
  {
    id: 'projects',
    value: 5,
    suffix: '+',
    label: { en: 'Shipped Projects', vi: 'Dự án thực tế' },
    sub: { en: 'From backend APIs to mobile apps', vi: 'Từ backend API đến mobile app' },
  },
  {
    id: 'typesafe',
    value: 100,
    suffix: '%',
    label: { en: 'Type-Safe Stack', vi: 'Type-Safe 100%' },
    sub: { en: 'TypeScript, NestJS & Prisma ORM', vi: 'TypeScript, NestJS & Prisma ORM' },
  },
]

export const copy = {
  en: {
    nav: ['Work', 'About', 'Stack', 'Contact'],
    available: 'Available for internship & full-time opportunities',
    role: 'Fullstack Developer',
    coreStack: 'React · Next.js · NestJS · Node.js · TypeScript · Docker · Flutter',
    eyebrow: 'Fullstack Developer',
    heroA: 'I engineer reliable systems',
    heroB: 'and seamless interfaces.',
    intro: 'Final-year IT student engineering scalable backend architectures, responsive web interfaces, and Flutter apps — from database schemas and REST APIs to high-performance user journeys.',
    explore: 'Explore selected work',
    contactCta: 'Contact me',
    resume: 'Download CV',
    selectCv: 'Select CV version',
    selected: 'Selected work',
    selectedSub: 'Five products across backend, web, and mobile. Built with end-to-end focus from data models to fluid UX.',
    viewLive: 'View live',
    viewCode: 'Source code',
    viewDetails: 'Case Study & Architecture',
    flagship: 'Flagship mobile & API experience',
    aboutKicker: 'A little context',
    aboutTitle: 'Engineering across the stack.',
    aboutBody: 'I am a final-year IT student focused on fullstack engineering with hands-on experience designing RESTful APIs with NestJS & Express, data modeling with Prisma ORM & MySQL, containerizing environments with Docker, and developing modern interfaces using React, Next.js, and Flutter. I prioritize clean modular architecture, secure authentication, and AI-accelerated workflows for code quality and documentation.',
    principle1: 'Architect for scalability',
    principle1Body: 'Type-safe database schemas, modular backend services, and clean component hierarchies.',
    principle2: 'Build complete, reliable flows',
    principle2Body: 'From secure JWT authentication and database transactions to synchronized client state and responsive UI.',
    education: 'B.Eng. Information Technology',
    school: 'Industrial University of Ho Chi Minh City · 2022 — Present',
    stackKicker: 'Tools I work with',
    stackTitle: 'A fullstack toolkit for shipping.',
    stackSub: 'Search or filter skills by category to explore my hands-on toolset and project integrations.',
    contactKicker: 'Have a role or an idea?',
    contactTitleA: 'Let’s build something',
    contactTitleB: 'scalable together.',
    contactBody: 'I’m currently looking for Fullstack, Backend, or Frontend Developer opportunities in Ho Chi Minh City.',
    email: 'Send an email',
    copied: 'Email copied to clipboard',
    rights: 'Designed and built by Huynh Gia Huy.',
    additional: 'Additional UI exploration',
    projectRole: 'Role',
    projectProblem: 'Problem solved',
    highlights: 'Key Highlights',
    caseStudy: 'View case study',
    backToTop: 'Back to top',
    filterAll: 'All Projects',
    filterBackend: 'Backend & APIs',
    filterFullstack: 'Fullstack & Web',
    filterMobile: 'Flutter Mobile',
    zoomHint: 'Click to expand image',
    searchSkillsPlaceholder: 'Search technology, database, tool...',
    allSkills: 'All Categories',
    quickMessageTitle: 'Send a quick message',
    quickMessageSub: 'Fill out this quick form to get in touch directly.',
    senderName: 'Your Name / Company',
    senderEmail: 'Your Email',
    senderMsg: 'Message / Project details...',
    sendAction: 'Compose in Email App',
    copyMsgAction: 'Copy Message',
    cmdKHint: 'Press ⌘K or Ctrl+K for quick search & navigation',
    cmdKTitle: 'Command Palette',
    cmdKPlaceholder: 'Type a command, project name, or technology...',
    noResults: 'No matching results found.',
    close: 'Close',
    architecture: 'Architecture & Technical Decisions',
    challenges: 'Core Challenges',
    solution: 'Engineered Solution',
    techStack: 'Technologies Used',
    keyFeatures: 'Key Features & Capabilities',
    metricsTitle: 'Key Metrics & Scope',
  },
  vi: {
    nav: ['Dự án', 'Giới thiệu', 'Kỹ năng', 'Liên hệ'],
    available: 'Sẵn sàng cho cơ hội thực tập & việc làm',
    role: 'Fullstack Developer',
    coreStack: 'React · Next.js · NestJS · Node.js · TypeScript · Docker · Flutter',
    eyebrow: 'Lập trình viên Fullstack',
    heroA: 'Tôi xây dựng hệ thống',
    heroB: 'vững chắc & giao diện mượt mà.',
    intro: 'Sinh viên CNTT năm cuối, phát triển toàn diện từ kiến trúc backend mở rộng, giao diện web responsive đến ứng dụng Flutter — từ thiết kế cơ sở dữ liệu, REST API đến trải nghiệm người dùng tối ưu.',
    explore: 'Khám phá dự án',
    contactCta: 'Liên hệ với tôi',
    resume: 'Tải CV',
    selectCv: 'Chọn bản CV tải về',
    selected: 'Dự án tiêu biểu',
    selectedSub: 'Năm sản phẩm đa nền tảng backend, web và mobile. Phát triển toàn diện từ mô hình dữ liệu đến trải nghiệm người dùng.',
    viewLive: 'Xem trực tiếp',
    viewCode: 'Mã nguồn',
    viewDetails: 'Case Study & Kiến trúc',
    flagship: 'Dự án mobile & API tiêu biểu',
    aboutKicker: 'Đôi nét về tôi',
    aboutTitle: 'Phát triển toàn diện Fullstack.',
    aboutBody: 'Tôi là sinh viên CNTT năm cuối, định hướng Fullstack Developer với kinh nghiệm thực tế thiết kế RESTful API bằng NestJS & Express, quản lý dữ liệu với Prisma ORM & MySQL, đóng gói môi trường Docker, cùng xây dựng giao diện tương tác bằng React, Next.js và Flutter. Tôi chú trọng kiến trúc module sạch, hệ thống xác thực JWT bảo mật và quy trình tích hợp AI để tối ưu chất lượng mã nguồn.',
    principle1: 'Kiến trúc cho khả năng mở rộng',
    principle1Body: 'Schema dữ liệu type-safe, backend module hóa và phân cấp component giao diện rõ ràng.',
    principle2: 'Xây dựng luồng hoàn chỉnh & tin cậy',
    principle2Body: 'Từ xác thực JWT an toàn, transaction dữ liệu đến đồng bộ trạng thái client và phản hồi UI tức thì.',
    education: 'Kỹ sư Công nghệ Thông tin',
    school: 'Đại học Công nghiệp TP.HCM · 2022 — Hiện tại',
    stackKicker: 'Công cụ tôi sử dụng',
    stackTitle: 'Bộ công nghệ Fullstack thực chiến.',
    stackSub: 'Tìm kiếm hoặc lọc kỹ năng theo danh mục để xem các công cụ tôi ứng dụng vào dự án thực tế.',
    contactKicker: 'Bạn có cơ hội hoặc ý tưởng?',
    contactTitleA: 'Cùng nhau xây dựng',
    contactTitleB: 'sản phẩm chất lượng.',
    contactBody: 'Tôi đang tìm kiếm cơ hội thực tập hoặc vị trí Fullstack, Backend, Frontend Developer tại TP. Hồ Chí Minh.',
    email: 'Gửi email',
    copied: 'Đã sao chép email vào clipboard',
    rights: 'Thiết kế và phát triển bởi Huỳnh Gia Huy.',
    additional: 'Khám phá UI bổ sung',
    projectRole: 'Vai trò',
    projectProblem: 'Vấn đề giải quyết',
    highlights: 'Điểm nổi bật',
    caseStudy: 'Xem case study',
    backToTop: 'Về đầu trang',
    filterAll: 'Tất cả dự án',
    filterBackend: 'Backend & APIs',
    filterFullstack: 'Fullstack & Web',
    filterMobile: 'Flutter Mobile',
    zoomHint: 'Nhấp để xem ảnh lớn',
    searchSkillsPlaceholder: 'Tìm kiếm công nghệ, database, công cụ...',
    allSkills: 'Tất cả danh mục',
    quickMessageTitle: 'Gửi tin nhắn nhanh',
    quickMessageSub: 'Điền form dưới đây để kết nối trực tiếp với tôi.',
    senderName: 'Tên của bạn / Công ty',
    senderEmail: 'Email của bạn',
    senderMsg: 'Nội dung tin nhắn / Yêu cầu công việc...',
    sendAction: 'Mở ứng dụng Email',
    copyMsgAction: 'Sao chép tin nhắn',
    cmdKHint: 'Nhấn ⌘K hoặc Ctrl+K để tìm kiếm & điều hướng nhanh',
    cmdKTitle: 'Menu điều hướng nhanh (Command Palette)',
    cmdKPlaceholder: 'Tìm kiếm dự án, công nghệ hoặc tác vụ...',
    noResults: 'Không tìm thấy kết quả phù hợp.',
    close: 'Đóng',
    architecture: 'Kiến trúc & Quyết định Kỹ thuật',
    challenges: 'Thách thức Kỹ thuật',
    solution: 'Giải pháp Triển khai',
    techStack: 'Công nghệ Sử dụng',
    keyFeatures: 'Tính năng & Năng lực Chính',
    metricsTitle: 'Quy mô & Chỉ số Chính',
  },
} as const

export interface CaseStudyData {
  challenge: { en: string; vi: string }
  architecture: { en: string[]; vi: string[] }
  features: { en: string[]; vi: string[] }
  takeaways: { en: string[]; vi: string[] }
}

export interface ProjectItem {
  id: string
  index: string
  year: string
  category: ProjectCategory
  title: string
  role: { en: string; vi: string }
  problem: { en: string; vi: string }
  highlights: { en: readonly string[]; vi: readonly string[] }
  type: { en: string; vi: string }
  description: { en: string; vi: string }
  stats: readonly string[]
  tags: readonly string[]
  github: string
  live: string
  visual: string
  caseStudy: CaseStudyData
}

export const projects: readonly ProjectItem[] = [
  {
    id: 'nestapi',
    index: '01',
    year: '2026',
    category: 'backend',
    title: 'NestJS Core API Engine',
    role: { en: 'Fullstack & Backend Developer', vi: 'Lập trình viên Fullstack & Backend' },
    problem: {
      en: 'Architect a scalable, type-safe backend ecosystem with secure JWT authentication, relational data integrity, and containerized deployment.',
      vi: 'Xây dựng hệ sinh thái backend API type-safe, chịu tải tốt với xác thực JWT bảo mật, toàn vẹn dữ liệu quan hệ và đóng gói triển khai Docker.',
    },
    highlights: {
      en: [
        'NestJS modular architecture & Dependency Injection',
        'Prisma ORM with automated migrations & relational integrity',
        'JWT Authentication with Role-Based Access Control (RBAC)',
        'Docker Compose multi-container setup (Node + MySQL + Prisma Studio)',
        'Interactive Swagger / OpenAPI 3.0 documentation',
      ],
      vi: [
        'Kiến trúc module hóa NestJS & Dependency Injection',
        'Prisma ORM với migration tự động & quan hệ CSDL toàn vẹn',
        'Xác thực JWT an toàn kết hợp phân quyền người dùng (RBAC)',
        'Đóng gói multi-container bằng Docker Compose (Node + MySQL + Prisma Studio)',
        'Tài liệu API tương tác tự động theo chuẩn Swagger / OpenAPI 3.0',
      ],
    },
    type: { en: 'Backend Architecture · NestJS · Docker', vi: 'Kiến trúc Backend · NestJS · Docker' },
    description: {
      en: 'Engineered a modular, enterprise-ready RESTful backend service using NestJS, Prisma ORM, MySQL, and Docker. Implemented role-based access control (RBAC), secure token authentication, automated database migrations, global validation pipes, and comprehensive Swagger documentation.',
      vi: 'Xây dựng dịch vụ RESTful backend module hóa chuẩn doanh nghiệp với NestJS, Prisma ORM, MySQL và Docker. Triển khai phân quyền người dùng (RBAC), xác thực JWT bảo mật, migration CSDL tự động, validation pipe toàn cục và tài liệu Swagger chuẩn hóa.',
    },
    stats: ['NestJS + Express', 'Prisma + MySQL', 'Docker Compose', 'JWT & RBAC'],
    tags: ['NestJS', 'TypeScript', 'Prisma ORM', 'MySQL', 'Docker', 'JWT', 'Swagger'],
    github: 'https://github.com/huynhgiahuy236',
    live: '',
    visual: 'code',
    caseStudy: {
      challenge: {
        en: 'Creating a unified, scalable REST API template that enforces strict data validation, prevents unauthorized data mutations, isolates development dependencies, and provides instant interactive documentation for frontend and mobile teams.',
        vi: 'Tạo một khung REST API chuẩn mực, mở rộng linh hoạt, kiểm soát tính toàn vẹn dữ liệu nghiêm ngặt, ngăn chặn truy cập trái phép, cô lập môi trường dev qua Docker và cung cấp tài liệu API tương tác tức thì cho đội ngũ Frontend/Mobile.',
      },
      architecture: {
        en: [
          'Layered Domain Architecture: Controller -> Service -> Repository Pattern with Prisma ORM.',
          'Security Pipeline: Global ValidationPipe (class-validator), Guards for JWT & Roles, Bcrypt password hashing.',
          'Database Strategy: MySQL 8 relational schema with foreign key constraints, indexes on lookup keys, and automated Prisma migrations.',
          'DevOps: Multi-stage Dockerfile and Docker Compose managing backend app, MySQL container, and Prisma Studio web viewer.',
        ],
        vi: [
          'Kiến trúc phân tầng Domain: Controller -> Service -> Repository Pattern với Prisma ORM.',
          'Quy trình bảo mật: ValidationPipe toàn cục (class-validator), Guards kiểm tra JWT & Role, mã hóa mật khẩu Bcrypt với salt.',
          'Chiến lược CSDL: CSDL quan hệ MySQL 8 với khóa ngoại, chỉ mục (index) tối ưu truy vấn và migration tự động qua Prisma.',
          'DevOps: Dockerfile tối ưu và Docker Compose điều phối backend, MySQL container và Prisma Studio giao diện web.',
        ],
      },
      features: {
        en: [
          'Authentication & Authorization: Register, Login, Refresh Tokens, and Admin vs. User role enforcement.',
          'Data Validation: Strict DTO schema enforcement with class-validator and transformation pipes.',
          'Interactive Swagger UI: Live request testing with JWT bearer token support.',
          'Containerized Database: One-command spinning of MySQL database and Prisma ORM client.',
        ],
        vi: [
          'Xác thực & Phân quyền: Đăng ký, đăng nhập, cấp refresh token và phân quyền Admin/User.',
          'Kiểm tra dữ liệu: Ép kiểu DTO chặt chẽ với class-validator và pipe chuyển đổi dữ liệu.',
          'Giao diện Swagger tương tác: Kiểm thử trực tiếp API kèm hỗ trợ gắn Bearer Token.',
          'Cơ sở dữ liệu đóng gói: Khởi chạy CSDL MySQL và Prisma ORM chỉ với một lệnh Docker duy nhất.',
        ],
      },
      takeaways: {
        en: [
          'Mastered NestJS dependency injection lifecycle, custom decorators, and exception filters.',
          'Deepened understanding of relational integrity, database index optimization, and transaction safety.',
          'Streamlined cross-platform collaboration through auto-generated OpenAPI contracts.',
        ],
        vi: [
          'Nắm vững vòng đời Dependency Injection, Custom Decorators và Exception Filters trong NestJS.',
          'Hiểu sâu về toàn vẹn dữ liệu quan hệ, tối ưu hóa Index CSDL và an toàn Transaction.',
          'Tối ưu hóa quy trình phối hợp đa nền tảng nhờ tài liệu OpenAPI tự động chuẩn xác.',
        ],
      },
    },
  },
  {
    id: 'stayz',
    index: '02',
    year: '2026',
    category: 'mobile',
    title: 'StayZ',
    role: { en: 'Fullstack & Mobile Developer', vi: 'Lập trình viên Fullstack & Mobile' },
    problem: {
      en: 'Turn a fragmented hotel search and booking process into one guided mobile journey with real-time API sync.',
      vi: 'Kết nối quá trình tìm kiếm và đặt phòng rời rạc thành một hành trình mobile liền mạch đồng bộ API thời gian thực.',
    },
    highlights: {
      en: [
        '30+ responsive screens covering complete customer and admin lifecycle',
        '15+ REST API integrations with real-time state synchronization',
        'Seamless PayOS QR payment flow with dynamic status verification',
        'AI booking assistant for intelligent hotel recommendation',
      ],
      vi: [
        'Hơn 30 màn hình responsive phục vụ trọn vẹn quy trình khách hàng & admin',
        'Tích hợp 15+ REST API với cơ chế đồng bộ trạng thái thời gian thực',
        'Tích hợp cổng thanh toán QR PayOS mượt mà với kiểm tra giao dịch tự động',
        'Trợ lý AI hỗ trợ tìm kiếm và gợi ý khách sạn thông minh',
      ],
    },
    type: { en: 'Hotel booking · Flutter & REST API', vi: 'Đặt phòng khách sạn · Flutter & REST API' },
    description: {
      en: 'Built a 30+ screen Flutter booking experience spanning customer and admin journeys, with 15+ REST integrations, a six-stage reservation flow, PayOS QR payments and AI-assisted hotel search.',
      vi: 'Xây dựng trải nghiệm đặt phòng Flutter hơn 30 màn hình cho cả khách hàng và quản trị, tích hợp hơn 15 REST API, quy trình đặt phòng 6 giai đoạn, thanh toán QR PayOS và tìm kiếm hỗ trợ bởi AI.',
    },
    stats: ['30+ screens', '6-stage booking', '15+ API operations', 'PayOS QR'],
    tags: ['Flutter', 'Dart', 'REST API', 'PayOS', 'AI Assistant', 'State Management'],
    github: 'https://github.com/huynhgiahuy236/stayz-mobile-app',
    live: '',
    visual: 'phone',
    caseStudy: {
      challenge: {
        en: 'Delivering a frictionless booking experience across both mobile client and administrative dashboard, managing multi-step reservation state without data loss, and integrating secure automated QR payments.',
        vi: 'Xây dựng trải nghiệm đặt phòng liền mạch trên cả ứng dụng di động cho khách và trang quản trị, duy trì trạng thái đặt phòng đa bước không bị mất dữ liệu và tích hợp thanh toán QR an toàn, tự động.',
      },
      architecture: {
        en: [
          'Feature-Driven Architecture in Flutter: separating UI widgets, state controllers, and REST data sources.',
          'Unified API Client: Custom HTTP wrapper handling token renewal, network error handling, and JSON serialization.',
          'Multi-step Checkout Engine: 6-stage booking state machine guaranteeing room availability and transaction safety.',
          'Payment Gateway Integration: PayOS webhook & dynamic QR code generation with client-side polling for instant success transition.',
        ],
        vi: [
          'Kiến trúc Feature-Driven trong Flutter: phân tách rõ ràng giữa UI Widgets, State Controllers và REST Data Sources.',
          'API Client đồng bộ: Wrapper HTTP tùy chỉnh tự động gắn token, bắt lỗi kết nối mạng và parse JSON an toàn.',
          'State Machine đặt phòng 6 giai đoạn: Đảm bảo giữ phòng chính xác và không thất thoát dữ liệu người dùng.',
          'Tích hợp cổng thanh toán: Sinh mã QR động từ PayOS và polling kiểm tra trạng thái thanh toán tức thì.',
        ],
      },
      features: {
        en: [
          'Smart Discovery: Instant search with auto-suggestions, price/location filters, and AI assistant query handler.',
          'Interactive Room Selection: Dynamic room photos gallery, amenities checklist, and real-time total price calculation.',
          'PayOS QR Payment: Instant banking transfer QR generation with countdown timer and automated status check.',
          'Admin Control Center: Manage rooms, bookings, user roles, revenue charts, and review moderation.',
        ],
        vi: [
          'Khám phá thông minh: Tìm kiếm tức thì với gợi ý địa điểm, lọc theo giá/tiện ích và trợ lý AI gợi ý phòng phù hợp.',
          'Chọn phòng trực quan: Thư viện ảnh phòng chi tiết, danh sách tiện nghi và tự động tính tổng tiền theo số đêm/ngày.',
          'Thanh toán QR PayOS: Sinh mã QR chuyển khoản ngân hàng kèm đồng hồ đếm ngược và tự động chuyển trang khi hoàn tất.',
          'Trung tâm quản trị: Quản lý danh mục phòng, đơn đặt, phân quyền tài khoản, biểu đồ doanh thu và duyệt đánh giá.',
        ],
      },
      takeaways: {
        en: [
          'Gained deep experience in complex Flutter UI styling, custom painter, and animations.',
          'Mastered asynchronous Dart programming, stream handling, and robust network error recovery.',
          'Designed scalable client-side caching to reduce server API roundtrips.',
        ],
        vi: [
          'Tích lũy kinh nghiệm sâu về thiết kế giao diện Flutter phức tạp, responsive trên mọi kích thước màn hình.',
          'Làm chủ lập trình bất đồng bộ Dart, xử lý Stream và cơ chế tự phục hồi khi mất kết nối mạng.',
          'Thiết kế bộ nhớ đệm (caching) phía client giúp giảm tải số lần gọi API lên máy chủ.',
        ],
      },
    },
  },
  {
    id: 'movie',
    index: '03',
    year: '2026',
    category: 'fullstack',
    title: 'Movie Booking Platform',
    role: { en: 'Frontend & Fullstack Developer', vi: 'Lập trình viên Frontend & Fullstack' },
    problem: {
      en: 'Make showtime discovery, seat selection and administration clear within one responsive platform.',
      vi: 'Làm rõ luồng tìm suất chiếu, chọn ghế và quản trị trong một nền tảng responsive.',
    },
    highlights: {
      en: [
        'Role-protected customer and admin routes with token guards',
        'Interactive real-time seat matrix with multiple seat types (VIP, Standard, Selected, Reserved)',
        'Comprehensive admin CRUD for movies, theaters, showtimes, and user accounts',
        'Optimized data fetching with TanStack Query and Redux Toolkit cache',
      ],
      vi: [
        'Bảo vệ phân quyền route cho khách hàng và quản trị viên với JWT Guard',
        'Sơ đồ chọn ghế tương tác trực quan phân biệt ghế VIP, Thường, Đang chọn, Đã đặt',
        'Hệ thống CRUD quản trị toàn diện cho phim, rạp chiếu, lịch chiếu và tài khoản',
        'Tối ưu hóa tải dữ liệu và bộ nhớ đệm với TanStack Query kết hợp Redux Toolkit',
      ],
    },
    type: { en: 'Entertainment platform · React', vi: 'Nền tảng giải trí · React' },
    description: {
      en: 'Developed responsive customer and admin flows for movie discovery, showtimes and seat booking, with synchronized seat states, protected routes and reusable CRUD management interfaces.',
      vi: 'Phát triển luồng khách hàng và quản trị responsive cho tìm phim, suất chiếu và đặt ghế; đồng bộ trạng thái ghế, bảo vệ route và tái sử dụng giao diện CRUD quản lý.',
    },
    stats: ['Customer + Admin', 'Seat matrix', 'Role-based access', 'Redux Toolkit'],
    tags: ['ReactJS', 'Redux Toolkit', 'TanStack Query', 'Tailwind CSS', 'TypeScript'],
    github: 'https://github.com/huynhgiahuy236/capstone_reactjs',
    live: 'https://capstone-movie-ten.vercel.app/',
    visual: 'cinema',
    caseStudy: {
      challenge: {
        en: 'Handling high-concurrency seat selection UI without lag, maintaining authentication state across page reloads, and building a modular admin dashboard.',
        vi: 'Xử lý giao diện chọn ghế mượt mà không độ trễ, duy trì trạng thái đăng nhập khi tải lại trang và xây dựng dashboard quản trị module hóa.',
      },
      architecture: {
        en: [
          'State Architecture: Redux Toolkit for auth and booking slice, TanStack Query for server cache invalidation.',
          'Security: Higher-Order Component (HOC) and Route Guards redirecting unauthorized users.',
          'UI Component System: Tailwind CSS styling with atomic reusable components (Buttons, Modals, Tables, Forms).',
        ],
        vi: [
          'Kiến trúc trạng thái: Redux Toolkit quản lý auth và luồng đặt vé, TanStack Query tối ưu cache dữ liệu máy chủ.',
          'Bảo mật: HOC và Route Guards tự động điều hướng người dùng chưa đăng nhập hoặc không đủ quyền.',
          'Hệ thống Component: Tailwind CSS với các thành phần nguyên tử tái sử dụng cao (Nút, Modal, Bảng, Form).',
        ],
      },
      features: {
        en: [
          'Cinema Schedule Engine: Filter showtimes by theater branch, date, and movie format.',
          'Visual Seat Selector: Real-time calculation of total price, VIP seat surcharges, and instant toggle response.',
          'Admin Dashboard: Full CRUD operations for movies, banner uploads, showtime scheduling, and customer data.',
        ],
        vi: [
          'Bộ lọc lịch chiếu: Xem suất chiếu theo cụm rạp, ngày chiếu và định dạng phim.',
          'Sơ đồ ghế trực quan: Tự động tính toán tổng tiền, phụ thu ghế VIP và phản hồi thao tác click tức thì.',
          'Dashboard quản trị: Quản lý đầy đủ thêm/sửa/xóa phim, upload banner, tạo lịch chiếu và danh sách tài khoản.',
        ],
      },
      takeaways: {
        en: [
          'Deepened proficiency in complex React state synchronization and form validation.',
          'Optimized component re-rendering using React.memo and useCallback hooks.',
        ],
        vi: [
          'Nâng cao kỹ năng đồng bộ trạng thái React phức tạp và validation form người dùng.',
          'Tối ưu hóa hiệu năng render tránh render thừa với React.memo và useCallback.',
        ],
      },
    },
  },
  {
    id: 'shoes',
    index: '04',
    year: '2026',
    category: 'fullstack',
    title: 'HiKu Shoes E-Commerce',
    role: { en: 'Frontend & Fullstack Developer', vi: 'Lập trình viên Frontend & Fullstack' },
    problem: {
      en: 'Keep storefront, cart, inventory and order states consistent across customer and admin flows.',
      vi: 'Đồng bộ trạng thái cửa hàng, giỏ hàng, tồn kho và đơn hàng giữa khách hàng và quản trị.',
    },
    highlights: {
      en: [
        'Persistent cart state synchronized across browser sessions and tabs',
        'End-to-end checkout and order management pipeline',
        'Sales and inventory analytics dashboard with interactive charts',
        'Responsive product catalog with multi-criteria filtering and sorting',
      ],
      vi: [
        'Đồng bộ giỏ hàng nhất quán trên các phiên duyệt web và đa tab',
        'Quy trình đặt hàng và quản lý đơn hàng từ đầu đến cuối',
        'Dashboard phân tích doanh thu và tồn kho với biểu đồ trực quan',
        'Danh mục sản phẩm responsive với bộ lọc đa tiêu chí và sắp xếp thông minh',
      ],
    },
    type: { en: 'Commerce system · React', vi: 'Hệ thống thương mại · React' },
    description: {
      en: 'Engineered a complete storefront and admin system that keeps cart, checkout, inventory and order states consistent across customer and management workflows.',
      vi: 'Xây dựng hệ thống cửa hàng và quản trị hoàn chỉnh, giữ trạng thái giỏ hàng, thanh toán, tồn kho và đơn hàng nhất quán giữa luồng khách hàng và quản lý.',
    },
    stats: ['Cart + Checkout', 'Inventory CRUD', 'Admin analytics', 'Axios + Query'],
    tags: ['ReactJS', 'Redux Toolkit', 'React Query', 'Axios', 'Tailwind CSS'],
    github: 'https://github.com/huynhgiahuy236/ShoesStore_ReactJS',
    live: 'https://shoes-store-react-js.vercel.app/',
    visual: 'shoe',
    caseStudy: {
      challenge: {
        en: 'Maintaining accurate cart inventory calculations across multiple product variants (sizes, colors) while ensuring sub-second response times during checkout.',
        vi: 'Duy trì độ chính xác của giỏ hàng và tồn kho trên nhiều biến thể sản phẩm (kích cỡ, màu sắc) đồng thời đảm bảo phản hồi tức thì khi thanh toán.',
      },
      architecture: {
        en: [
          'Centralized Cart Store: Redux Toolkit slice handling variant selection, stock validation, and discount codes.',
          'API Data Layer: Axios instance with request/response interceptors for unified error toast alerts.',
          'Modular Admin Layout: Reusable data tables with pagination, column sorting, and bulk actions.',
        ],
        vi: [
          'Cart Store tập trung: Redux Toolkit xử lý biến thể kích cỡ, kiểm tra tồn kho và áp dụng mã giảm giá.',
          'Tầng API: Axios interceptors tự động bắt mã lỗi và hiển thị thông báo toast phù hợp.',
          'Giao diện Admin module hóa: Bảng dữ liệu tái sử dụng hỗ trợ phân trang, sắp xếp cột và tác vụ hàng loạt.',
        ],
      },
      features: {
        en: [
          'Product Showcase: Zoomable image gallery, size selector, customer reviews, and related products carousel.',
          'Checkout Pipeline: Address selection, payment method toggle, and instant invoice generation.',
          'Admin Analytics: Real-time revenue metrics, low-stock warnings, and order fulfillment status updates.',
        ],
        vi: [
          'Trưng bày sản phẩm: Thư viện ảnh phóng to, chọn size trực quan, đánh giá khách hàng và sản phẩm liên quan.',
          'Quy trình thanh toán: Nhập địa chỉ giao hàng, chọn hình thức thanh toán và sinh hóa đơn tức thì.',
          'Thống kê quản trị: Báo cáo doanh thu thời gian thực, cảnh báo sắp hết hàng và cập nhật trạng thái giao hàng.',
        ],
      },
      takeaways: {
        en: [
          'Gained hands-on experience structuring medium-to-large e-commerce applications in React.',
          'Refined UX design patterns for high-converting shopping carts and checkout pages.',
        ],
        vi: [
          'Kinh nghiệm thực chiến trong cấu trúc và mở rộng ứng dụng thương mại điện tử bằng React.',
          'Hoàn thiện các mẫu thiết kế UX tối ưu hóa chuyển đổi cho giỏ hàng và trang thanh toán.',
        ],
      },
    },
  },
  {
    id: 'phone',
    index: '05',
    year: '2026',
    category: 'fullstack',
    title: 'HiKu Phone Store',
    role: { en: 'Frontend Developer', vi: 'Lập trình viên Frontend' },
    problem: {
      en: 'Build a maintainable commerce workflow using vanilla JavaScript and persistent browser data.',
      vi: 'Xây dựng luồng thương mại dễ bảo trì bằng JavaScript thuần và dữ liệu lưu trên trình duyệt.',
    },
    highlights: {
      en: [
        'Clean Modular Vanilla JavaScript architecture without heavyweight frameworks',
        'Persistent browser storage (LocalStorage) for cart and checkout state',
        'Full MockAPI integration for real-time CRUD operations',
        'Client-side Excel reporting and data export capability',
      ],
      vi: [
        'Kiến trúc JavaScript thuần module hóa sạch sẽ, không phụ thuộc framework nặng',
        'Lưu trữ trạng thái giỏ hàng và phiên làm việc bền vững với LocalStorage',
        'Tích hợp MockAPI hoàn chỉnh thực hiện CRUD dữ liệu thời gian thực',
        'Tính năng xuất báo cáo dữ liệu ra file Excel trực tiếp trên trình duyệt',
      ],
    },
    type: { en: 'E-commerce · JavaScript', vi: 'Thương mại điện tử · JavaScript' },
    description: {
      en: 'Structured a maintainable vanilla JavaScript commerce application with MockAPI CRUD, authentication, persistent browser state, checkout, inventory management and Excel reporting.',
      vi: 'Tổ chức ứng dụng thương mại JavaScript thuần dễ bảo trì với MockAPI CRUD, xác thực, trạng thái lưu trên trình duyệt, thanh toán, quản lý tồn kho và báo cáo Excel.',
    },
    stats: ['Vanilla JavaScript', 'MockAPI CRUD', 'Excel export', 'Tailwind CSS'],
    tags: ['JavaScript', 'Tailwind CSS', 'MockAPI', 'LocalStorage', 'ExcelJS'],
    github: '',
    live: 'https://phone-store-js-html-tailwindcss.vercel.app/',
    visual: 'device',
    caseStudy: {
      challenge: {
        en: 'Demonstrating deep mastery of core JavaScript fundamentals (DOM manipulation, asynchronous fetch, event delegation, and modular patterns) without relying on UI libraries.',
        vi: 'Thể hiện năng lực nắm vững nền tảng cốt lõi của JavaScript (thao tác DOM, gọi API bất đồng bộ, ủy quyền sự kiện và module hóa) mà không phụ thuộc thư viện UI.',
      },
      architecture: {
        en: [
          'MVC-Inspired Structure: Models for data entities, Views for DOM rendering, and Controllers for business logic.',
          'Event Delegation: Single listener setups on parent containers for fast dynamic list interactions.',
          'MockAPI Client: Asynchronous REST operations with robust try/catch and loading state indicators.',
        ],
        vi: [
          'Cấu trúc cảm hứng MVC: Model quản lý đối tượng dữ liệu, View kết xuất DOM và Controller điều phối logic.',
          'Ủy quyền sự kiện (Event Delegation): Bắt sự kiện trên container cha giúp tối ưu bộ nhớ cho danh sách động.',
          'MockAPI Client: Các thao tác REST bất đồng bộ với cơ chế bắt lỗi và hiển thị loading rõ ràng.',
        ],
      },
      features: {
        en: [
          'Interactive Catalog: Search by phone brand, filter by price range, and sort by ratings.',
          'Shopping Cart: Live quantity updates, subtotal calculation, and instant LocalStorage sync.',
          'Admin Inventory & Excel Export: Add/edit phones, upload image URLs, and export inventory spreadsheets.',
        ],
        vi: [
          'Danh mục tương tác: Tìm kiếm theo hãng điện thoại, lọc theo khoảng giá và sắp xếp theo đánh giá.',
          'Giỏ hàng trực quan: Tự động cập nhật số lượng, tính tổng tiền và đồng bộ tức thì vào LocalStorage.',
          'Quản lý kho & Xuất Excel: Thêm/sửa sản phẩm, nhập link ảnh và xuất toàn bộ danh sách kho ra file Excel.',
        ],
      },
      takeaways: {
        en: [
          'Mastered native DOM manipulation, browser lifecycle events, and performance optimization.',
          'Built solid foundational knowledge before transitioning to modern reactive frameworks like React and Next.js.',
        ],
        vi: [
          'Nắm vững thao tác DOM thuần, vòng đời sự kiện trình duyệt và tối ưu hóa hiệu năng JavaScript.',
          'Xây dựng nền tảng tư duy lập trình vững chắc trước khi tiến lên các framework hiện đại như React và Next.js.',
        ],
      },
    },
  },
]
