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
    contactKicker: 'Have a role or an idea?',
    contactTitleA: 'Let’s build something',
    contactTitleB: 'scalable together.',
    contactBody: 'I’m currently looking for Fullstack, Backend, or Frontend Developer opportunities in Ho Chi Minh City.',
    email: 'Send an email',
    copied: 'Email copied',
    rights: 'Designed and built by Huynh Gia Huy.',
    additional: 'Additional UI exploration',
    projectRole: 'Role',
    projectProblem: 'Problem solved',
    highlights: 'Highlights',
    caseStudy: 'View case study',
    backToTop: 'Back to top',
    filterAll: 'All Projects',
    filterBackend: 'Backend & APIs',
    filterFullstack: 'Fullstack & Web',
    filterMobile: 'Flutter Mobile',
    zoomHint: 'Click to expand image',
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
    contactKicker: 'Bạn có cơ hội hoặc ý tưởng?',
    contactTitleA: 'Cùng nhau xây dựng',
    contactTitleB: 'sản phẩm chất lượng.',
    contactBody: 'Tôi đang tìm kiếm cơ hội thực tập hoặc vị trí Fullstack, Backend, Frontend Developer tại TP. Hồ Chí Minh.',
    email: 'Gửi email',
    copied: 'Đã sao chép email',
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
  },
} as const

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
        'NestJS modular architecture & DI',
        'Prisma ORM + MySQL migrations & relations',
        'JWT Auth with RBAC & bcrypt hashing',
        'Docker Compose container orchestration',
        'Interactive Swagger / OpenAPI docs',
      ],
      vi: [
        'Kiến trúc module hóa NestJS & Dependency Injection',
        'Prisma ORM + Migration & quan hệ MySQL',
        'Bảo mật JWT, phân quyền RBAC & mã hóa bcrypt',
        'Đóng gói multi-container bằng Docker Compose',
        'Tài liệu API tương tác Swagger / OpenAPI',
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
      en: ['30+ responsive screens', '15+ REST API integrations', 'PayOS QR payment + AI booking assistant'],
      vi: ['30+ màn hình responsive', '15+ tích hợp REST API', 'Thanh toán QR PayOS + trợ lý AI'],
    },
    type: { en: 'Hotel booking · Flutter & REST API', vi: 'Đặt phòng khách sạn · Flutter & REST API' },
    description: {
      en: 'Built a 30+ screen Flutter booking experience spanning customer and admin journeys, with 15+ REST integrations, a six-stage reservation flow, PayOS QR payments and AI-assisted hotel search.',
      vi: 'Xây dựng trải nghiệm đặt phòng Flutter hơn 30 màn hình cho cả khách hàng và quản trị, tích hợp hơn 15 REST API, quy trình đặt phòng 6 giai đoạn, thanh toán QR PayOS và tìm kiếm hỗ trợ bởi AI.',
    },
    stats: ['30+ screens', '6-stage booking', '15+ API operations'],
    tags: ['Flutter', 'Dart', 'REST API', 'PayOS', 'AI Assistant'],
    github: 'https://github.com/huynhgiahuy236/stayz-mobile-app',
    live: '',
    visual: 'phone',
  },
  {
    id: 'movie',
    index: '03',
    year: '2026',
    category: 'fullstack',
    title: 'Movie Booking',
    role: { en: 'Frontend & Fullstack Developer', vi: 'Lập trình viên Frontend & Fullstack' },
    problem: {
      en: 'Make showtime discovery, seat selection and administration clear within one responsive platform.',
      vi: 'Làm rõ luồng tìm suất chiếu, chọn ghế và quản trị trong một nền tảng responsive.',
    },
    highlights: {
      en: ['Role-protected routes', 'Interactive seat state', 'Customer + Admin CRUD'],
      vi: ['Phân quyền route', 'Trạng thái ghế tương tác', 'CRUD khách hàng + quản trị'],
    },
    type: { en: 'Entertainment platform · React', vi: 'Nền tảng giải trí · React' },
    description: {
      en: 'Developed responsive customer and admin flows for movie discovery, showtimes and seat booking, with synchronized seat states, protected routes and reusable CRUD management interfaces.',
      vi: 'Phát triển luồng khách hàng và quản trị responsive cho tìm phim, suất chiếu và đặt ghế; đồng bộ trạng thái ghế, bảo vệ route và tái sử dụng giao diện CRUD quản lý.',
    },
    stats: ['Customer + Admin', 'Seat booking', 'Role-based access'],
    tags: ['ReactJS', 'Redux Toolkit', 'TanStack Query', 'Tailwind CSS'],
    github: 'https://github.com/huynhgiahuy236/capstone_reactjs',
    live: 'https://capstone-movie-ten.vercel.app/',
    visual: 'cinema',
  },
  {
    id: 'shoes',
    index: '04',
    year: '2026',
    category: 'fullstack',
    title: 'HiKu Shoes',
    role: { en: 'Frontend & Fullstack Developer', vi: 'Lập trình viên Frontend & Fullstack' },
    problem: {
      en: 'Keep storefront, cart, inventory and order states consistent across customer and admin flows.',
      vi: 'Đồng bộ trạng thái cửa hàng, giỏ hàng, tồn kho và đơn hàng giữa khách hàng và quản trị.',
    },
    highlights: {
      en: ['Synchronized cart state', 'Inventory + order workflow', 'Sales analytics dashboard'],
      vi: ['Đồng bộ trạng thái giỏ hàng', 'Luồng tồn kho + đơn hàng', 'Dashboard phân tích doanh thu'],
    },
    type: { en: 'Commerce system · React', vi: 'Hệ thống thương mại · React' },
    description: {
      en: 'Engineered a complete storefront and admin system that keeps cart, checkout, inventory and order states consistent across customer and management workflows.',
      vi: 'Xây dựng hệ thống cửa hàng và quản trị hoàn chỉnh, giữ trạng thái giỏ hàng, thanh toán, tồn kho và đơn hàng nhất quán giữa luồng khách hàng và quản lý.',
    },
    stats: ['Cart + Checkout', 'Inventory', 'Admin analytics'],
    tags: ['ReactJS', 'Redux Toolkit', 'React Query', 'Axios', 'Tailwind CSS'],
    github: 'https://github.com/huynhgiahuy236/ShoesStore_ReactJS',
    live: 'https://shoes-store-react-js.vercel.app/',
    visual: 'shoe',
  },
  {
    id: 'phone',
    index: '05',
    year: '2026',
    category: 'fullstack',
    title: 'HiKu Phone',
    role: { en: 'Frontend Developer', vi: 'Lập trình viên Frontend' },
    problem: {
      en: 'Build a maintainable commerce workflow using vanilla JavaScript and persistent browser data.',
      vi: 'Xây dựng luồng thương mại dễ bảo trì bằng JavaScript thuần và dữ liệu lưu trên trình duyệt.',
    },
    highlights: {
      en: ['Vanilla JS architecture', 'Persistent browser state', 'MockAPI CRUD + Excel export'],
      vi: ['Kiến trúc JavaScript thuần', 'Trạng thái lưu trên trình duyệt', 'MockAPI CRUD + xuất Excel'],
    },
    type: { en: 'E-commerce · JavaScript', vi: 'Thương mại điện tử · JavaScript' },
    description: {
      en: 'Structured a maintainable vanilla JavaScript commerce application with MockAPI CRUD, authentication, persistent browser state, checkout, inventory management and Excel reporting.',
      vi: 'Tổ chức ứng dụng thương mại JavaScript thuần dễ bảo trì với MockAPI CRUD, xác thực, trạng thái lưu trên trình duyệt, thanh toán, quản lý tồn kho và báo cáo Excel.',
    },
    stats: ['Vanilla JavaScript', 'MockAPI CRUD', 'Excel export'],
    tags: ['JavaScript', 'Tailwind CSS', 'MockAPI', 'LocalStorage'],
    github: '',
    live: 'https://phone-store-js-html-tailwindcss.vercel.app/',
    visual: 'device',
  },
]
