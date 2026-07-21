/* ==========================================================================
   CESE B2B WEBSITE - APPLICATION LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initStickyHeader();
  initMobileNav();
  initSingleLineDiagram();
  initRfqForm();
  initCardMouseTracking();
  initProductShowcaseModal();
  initPrivacyModal();
});

/* ==========================================================================
   1. TRANSLATION ENGINE & LOCALIZATION
   ========================================================================== */

const translations = {
  en: {
    logo_title: "CESE",
    logo_subtitle: "Establishment",
    logo_arabic: "مؤسسة توريد الكهرباء التجارية",
    nav_home: "Home",
    nav_about: "About Us",
    nav_brands: "Brands",
    nav_products: "Products",
    nav_contact: "Contact",
    nav_quote_btn: "Request a Quote",
    hero_eyebrow: "Commercial Electricity Supply Establishment",
    hero_headline: "Industrial Automation Solutions",
    hero_subheadline: "Reliable B2B sourcing, distribution, and systems supply of electrical components, automation controls, and instrumentation across Saudi Arabia & the GCC. Built for plant managers and procurement engineers.",
    hero_cta_browse: "Browse Categories",
    hero_cta_quote: "Request a Quote",
    tag_ksa: "Riyadh, KSA",
    tag_gcc: "GCC Distribution Network",
    sld_grid_infeed: "MAIN POWER INFEED",
    brands_eyebrow: "LINE_DISTRIBUTION_PARTNERS",
    brands_title: "Global Brands We Represent",
    products_eyebrow: "CATALOGUE_MATRIX_v3.2",
    products_title: "Industrial Supply Categories",
    products_subtitle: "Direct access to standard and specialized components sourced from global manufacturers. Select category or request specific technical datasheets.",
    card_cta: "Request Quotation",
    cat_title_1: "Automation & Controls",
    cat_desc_1: "Comprehensive automation systems and process monitoring devices.",
    cat_title_3: "Electricals",
    cat_desc_3: "Panel components, power distribution units, and safety relays.",
    cat_title_4: "Temperature Control",
    cat_desc_4: "Thermal monitoring and precision temperature regulation instruments.",
    cat_title_5: "Autoswitches & Indicators",
    cat_desc_5: "Visual indicators, control pushbuttons, and mechanical switches.",
    cat_title_6: "Instrumentation",
    cat_desc_6: "High-precision flow, pressure, and level transmitters.",
    cat_title_7: "Industrial Valves",
    cat_desc_7: "Solenoid, pneumatic, and motorized control valves for all media.",
    cat_title_8: "Sensors",
    cat_desc_8: "Heavy-duty detection instruments for industrial feedback.",
    cat_title_9: "Inverters & VFD Drives",
    cat_desc_9: "Variable frequency drives and servo systems for speed control.",
    cat_title_10: "Pneumatics",
    cat_desc_10: "Valves, cylinders, and compressed air distribution units.",
    cat_title_11: "Pneumatics Components",
    cat_desc_11: "Rotary air actuators, pneumatic pumps, and vibrators.",
    stat_val_1: "15+",
    stat_lbl_1: "Years in Operation",
    stat_val_2: "30+",
    stat_lbl_2: "Represented Brands",
    stat_val_3: "10k+",
    stat_lbl_3: "Active SKU Catalog",
    stat_val_4: "< 4 hr",
    stat_lbl_4: "Average RFQ Response",
    about_eyebrow: "LEADING_INDUSTRIAL_SUPPLIER",
    about_title: "Bridging the Gap in Gulf Industrial Supply",
    about_p1: "Commercial Electricity Supply Establishment (CESE) is a premier, rapidly expanding distributor of industrial automation controls, sensors, pneumatics, and power transmission products across the Kingdom of Saudi Arabia and the broader GCC.",
    about_p2: "We streamline procurement for manufacturing, chemical processing, oil & gas installations, and water treatment utilities. By maintaining direct relationships with top-tier international manufacturers, we provide genuine engineering supplies with certified traceability and robust local technical support.",
    about_sectors_title: "Sectors We Support:",
    sec_1: "Oil & Gas",
    sec_2: "Manufacturing",
    sec_3: "Water Treatment",
    sec_4: "MEP Infrastructure",
    sec_5: "Utilities",
    work_eyebrow: "OPERATIONAL_PIPELINE",
    work_title: "Operational Workflow",
    step_1_title: "Technical Consultation",
    step_1_desc: "Submit specifications, datasheets, or part codes. Our engineering team reviews requirements to match exact system alignments or recommend compatible crosses.",
    step_2_title: "Strategic Sourcing",
    step_2_desc: "We utilize direct factory distribution channels to secure competitive pricing, check lead times, and confirm manufacturer warranty certifications.",
    step_3_title: "Express Logistics",
    step_3_desc: "Materials are consolidated and shipped under strict quality control directly to your plant site or warehouse in KSA/GCC, complete with documentation.",

    contact_eyebrow: "INQUIRY_AND_RFQ_CHANNEL",
    contact_title: "Initiate Procurement",
    contact_desc: "Request price quotes, technical catalogs, or schedule consulting reviews. Our average response window is under 4 working hours.",
    contact_addr: "Saudia Arabia\nRiyadh\nAlSalam District\nRQSA 6843",
    form_title: "Request RFQ or Engineering Review",
    form_lbl_name: "FULL_NAME",
    form_lbl_company: "COMPANY",
    form_lbl_email: "EMAIL_ADDRESS",
    form_lbl_phone: "TELEPHONE",
    form_lbl_subject: "INQUIRY_SUBJECT",
    form_lbl_msg: "MESSAGE_BODY",
    opt_1: "General Supply Request",
    opt_2: "Automation & Controls RFQ",
    opt_3: "Valves & Pneumatics RFQ",
    opt_4: "Sensors & Instrumentation Quote",
    opt_5: "Engineering Consultation",
    opt_6: "Custom Panel Assembly",
    form_submit_btn: "SUBMIT REQUEST",
    footer_desc: "Authorized industrial automation and instrumentation distributor. Certified quality sourcing, prompt responses, and system-level design integration serving KSA & GCC industries.",
    footer_nav_title: "NAVIGATION",
    footer_brands_title: "FEATURED BRANDS",
    footer_legal_title: "ESTABLISHMENT",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Supply",
    form_success: "Thank you. Your RFQ code [RFQ-%ID%] has been successfully logged. An engineer will respond within 4 hours.",
    form_error: "Verification failed. Please ensure all required fields are correctly formatted.",
    modal_specs_header: "Technical Specifications",
    modal_brands_header: "Sourced Brands",
    modal_cta_btn: "Request Price Quotation",
    privacy_title: "Privacy Policy",
    privacy_p1: "This Privacy Policy governs the manner in which Commercial Electricity Supply Establishment (CESE) collects, uses, maintains, and discloses information collected from users (each, a \"User\") of the cese.in website.",
    privacy_h1: "1. Information We Collect",
    privacy_p2: "We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, fill out the Request for Quote (RFQ) form, and in connection with other activities, services, features, or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, company name, and phone number.",
    privacy_h2: "2. How We Use Collected Information",
    privacy_p3: "CESE collects and uses Users' personal information for the following purposes:",
    privacy_p3_li1: "To process and respond to request for quotations (RFQs).",
    privacy_p3_li2: "To improve customer service and support needs.",
    privacy_p3_li3: "To send periodic emails regarding order status, technical updates, or engineering consultation.",
    privacy_h3: "3. How We Protect Your Information",
    privacy_p4: "We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, company name, and data stored on our Site.",
    privacy_h4: "4. Sharing Personal Information",
    privacy_p5: "We do not sell, trade, or rent Users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our trusted business partners, trusted affiliates, and advertisers for the purposes outlined above."
  },
  ar: {
    logo_title: "توريد الكهرباء",
    logo_subtitle: "مؤسسة",
    logo_arabic: "مؤسسة توريد الكهرباء التجارية",
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_brands: "العلامات التجارية",
    nav_products: "المنتجات",
    nav_contact: "اتصل بنا",
    nav_quote_btn: "طلب تسعيرة",
    hero_eyebrow: "مؤسسة توريد الكهرباء التجارية",
    hero_headline: "حلول الأتمتة الصناعية",
    hero_subheadline: "توريد وتوزيع وتكامل موثوق للمكونات الكهربائية، وأنظمة التحكم والأتمتة، وأجهزة القياس الدقيقة في المملكة العربية السعودية ودول الخليج. صُمم للمهندسين ومدراء المصانع.",
    hero_cta_browse: "تصفح الفئات",
    hero_cta_quote: "طلب تسعيرة",
    tag_ksa: "الرياض، السعودية",
    tag_gcc: "شبكة توزيع دول الخليج",
    sld_grid_infeed: "تغذية الطاقة الرئيسية",
    brands_eyebrow: "شركاء التوزيع والخطوط",
    brands_title: "العلامات التجارية العالمية التي نمثلها",
    products_eyebrow: "مصفوفة الكتالوج v3.2",
    products_title: "فئات التوريد الصناعي",
    products_subtitle: "وصول مباشر للمكونات القياسية والمتخصصة من الشركات العالمية المصنعة. اختر الفئة أو اطلب ورقة البيانات الفنية المحددة.",
    card_cta: "طلب تسعيرة",
    cat_title_1: "الأتمتة وأنظمة التحكم",
    cat_desc_1: "أنظمة الأتمتة الشاملة وأجهزة مراقبة العمليات الصناعية.",
    cat_title_3: "المكونات الكهربائية",
    cat_desc_3: "مكونات لوحات التحكم، وحدات توزيع الطاقة، ومرحلات السلامة.",
    cat_title_4: "التحكم في درجة الحرارة",
    cat_desc_4: "المراقبة الحرارية وأدوات تنظيم درجات الحرارة الدقيقة.",
    cat_title_5: "المفاتيح التلقائية والمؤشرات",
    cat_desc_5: "المؤشرات المرئية، أزرار التحكم بالضغط، والمفاتيح الميكانيكية.",
    cat_title_6: "الأجهزة والقياس",
    cat_desc_6: "أجهزة قياس التدفق، الضغط، والمستوى عالية الدقة.",
    cat_title_7: "الصمامات الصناعية",
    cat_desc_7: "صمامات التحكم اللولبية والهوائية والكهربائية لجميع السوائل والغازات.",
    cat_title_8: "المستشعرات",
    cat_desc_8: "أجهزة الاستشعار للمهام الشاقة للحصول على التغذية الراجعة الصناعية.",
    cat_title_9: "العواكس ومحركات VFD",
    cat_desc_9: "محركات التردد المتغير وأنظمة السيرفو للتحكم في السرعة.",
    cat_title_10: "الأنظمة الهوائية",
    cat_desc_10: "الصمامات والأسطوانات ووحدات توزيع الهواء المضغوط.",
    cat_title_11: "المكونات الهوائية",
    cat_desc_11: "مشغلات الهواء الدوارة، والمضخات الهوائية، والهزازات.",
    stat_val_1: "١٥+",
    stat_lbl_1: "سنوات الخبرة والتشغيل",
    stat_val_2: "٣٠+",
    stat_lbl_2: "علامة تجارية ممثلة",
    stat_val_3: "١٠ آلاف+",
    stat_lbl_3: "مكون متاح في الكتالوج",
    stat_val_4: "أقل من ٤ ساعات",
    stat_lbl_4: "متوسط الرد على طلبات التسعير",
    about_eyebrow: "رائد_التوريدات_الصناعية",
    about_title: "سد الفجوة في التوريدات الصناعية الخليجية",
    about_p1: "تعد مؤسسة توريد الكهرباء التجارية (CESE) موزعًا رئيسيًا سريع النمو ومتخصصًا في أنظمة التحكم بالأتمتة الصناعية وأجهزة الاستشعار والمكونات الهوائية ومنتجات نقل الطاقة في جميع أنحاء المملكة العربية السعودية ومنطقة الخليج العربي.",
    about_p2: "نحن نبسط عمليات الشراء لقطاعات التصنيع، المعالجة الكيميائية، منشآت النفط والغاز، ومرافق معالجة المياه. من خلال الحفاظ على علاقات مباشرة مع كبار المصنعين العالميين، نوفر إمدادات هندسية أصلية ذات موثوقية عالية ودعم فني محلي قوي.",
    about_sectors_title: "القطاعات التي ندعمها:",
    sec_1: "النفط والغاز",
    sec_2: "التصنيع",
    sec_3: "معالجة المياه",
    sec_4: "البنية التحتية والكهروميكانيكية",
    sec_5: "المرافق والخدمات العامة",
    work_eyebrow: "خط_العمليات_التشغيلية",
    work_title: "سير العمليات التشغيلية",
    step_1_title: "الاستشارة الفنية",
    step_1_desc: "تقديم المواصفات أو كتالوج المنتجات أو الرموز الفنية. يراجع فريقنا الهندسي المتمتلك للخبرة المتطلبات لضمان توافقها أو التوصية ببدائل مكافئة فنيًا.",
    step_2_title: "التوريد الاستراتيجي",
    step_2_desc: "نستفيد من قنوات التوزيع المباشرة للمصانع لتأمين أسعار تنافسية، والتحقق من مواعيد التسليم وتأكيد شهادات الضمان الأصلية.",
    step_3_title: "اللوجستيات السريعة",
    step_3_desc: "يتم تجميع المواد وشحنها تحت رقابة صارمة على الجودة مباشرة إلى موقع مصنعك أو مستودعك في السعودية أو الخليج مع كافة المستندات والشهادات.",

    contact_eyebrow: "قناة_الاستفسارات_وطلبات_الأسعار",
    contact_title: "بدء عملية الشراء",
    contact_desc: "طلب أسعار، كتالوجات فنية، أو جدولة مراجعات استشارية. متوسط وقت الاستجابة لدينا أقل من ٤ ساعات عمل.",
    contact_addr: "المملكة العربية السعودية\nالرياض\nحي السلام\nRQSA 6843",
    form_title: "طلب تسعير أو مراجعة هندسية",
    form_lbl_name: "الاسم الكامل",
    form_lbl_company: "الشركة / المؤسسة",
    form_lbl_email: "البريد الإلكتروني",
    form_lbl_phone: "رقم الهاتف",
    form_lbl_subject: "موضوع الاستفسار",
    form_lbl_msg: "تفاصيل الرسالة",
    opt_1: "طلب توريد عام",
    opt_2: "طلب تسعير الأتمتة وأنظمة التحكم",
    opt_3: "طلب تسعير الصمامات والأنظمة الهوائية",
    opt_4: "طلب تسعير المستشعرات والأجهزة الدقيقة",
    opt_5: "استشارة هندسية",
    opt_6: "تجميع لوحة تحكم مخصصة",
    form_submit_btn: "إرسال الطلب",
    footer_desc: "موزع معتمد للأتمتة الصناعية والأجهزة الدقيقة. توريد جودة معتمد، استجابة سريعة، وتكامل فني لتصميم الأنظمة لخدمة قطاعات الصناعة في السعودية والخليج.",
    footer_nav_title: "الروابط الرئيسية",
    footer_brands_title: "أبرز العلامات التجارية",
    footer_legal_title: "بيانات المؤسسة",
    footer_privacy: "سياسة الخصوصية",
    footer_terms: "شروط التوريد",
    form_success: "شكراً لك. تم تسجيل رمز طلب التسعيرة الخاص بك [RFQ-%ID%] بنجاح. سيقوم مهندسو التوريد لدينا بالرد عليك في غضون ٤ ساعات.",
    form_error: "فشل التحقق من صحة البيانات. يرجى التأكد من ملء جميع الحقول المطلوبة بشكل صحيح.",
    modal_specs_header: "المواصفات الفنية",
    modal_brands_header: "العلامات التجارية الموفرة",
    modal_cta_btn: "طلب تسعيرة للمنتج",
    privacy_title: "سياسة الخصوصية",
    privacy_p1: "تحكم سياسة الخصوصية هذه الطريقة التي تجمع بها مؤسسة توريد الكهرباء التجارية (CESE) المعلومات التي يتم جمعها من المستخدمين وتستخدمها وتحافظ عليها وتفصح عنها لموقع cese.in.",
    privacy_h1: "١. المعلومات التي نجمعها",
    privacy_p2: "قد نجمع معلومات التعريف الشخصية من المستخدمين بطرق مختلفة، بما في ذلك، على سبيل المثال لا الحصر، عند زيارة موقعنا، وملء نموذج طلب التسعير (RFQ)، وبالارتباط بالأنشطة أو الخدمات أو الميزات أو الموارد الأخرى التي نوفرها على موقعنا. قد يُطلب من المستخدمين، حسب الاقتضاء، الاسم وعنوان البريد الإلكتروني واسم الشركة ورقم الهاتف.",
    privacy_h2: "٢. كيف نستخدم المعلومات التي تم جمعها",
    privacy_p3: "تجمع مؤسسة توريد الكهرباء التجارية (CESE) معلومات المستخدمين الشخصية وتستخدمها للأغراض التالية:",
    privacy_p3_li1: "لمعالجة طلبات التسعير والاستجابة لها (RFQs).",
    privacy_p3_li2: "لتحسين خدمة العملاء واحتياجات الدعم الفني.",
    privacy_p3_li3: "لإرسال رسائل بريد إلكتروني دورية بشأن حالة الطلب أو التحديثات الفنية أو الاستشارات الهندسية.",
    privacy_h3: "٣. كيف نحمي معلوماتك",
    privacy_p4: "نعتمد ممارسات مناسبة لجمع البيانات وتخزينها ومعالجتها وتدابير أمنية لحماية معلوماتك الشخصية واسم شركتك والبيانات المخزنة على موقعنا من الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف.",
    privacy_h4: "٤. مشاركة المعلومات الشخصية",
    privacy_p5: "نحن لا نبيع أو نتاجر أو نؤجر معلومات التعريف الشخصية للمستخدمين للآخرين. قد نشارك معلومات ديموغرافية مجمعة عامة غير مرتبطة بأي معلومات تعريف شخصية تتعلق بالزوار والمستخدمين مع شركائنا التجاريين الموثوقين والشركات التابعة الموثوقة والمعلنين للأغراض الموضحة أعلاه."
  }
};

let currentLang = 'en';

function initLanguage() {
  const langToggle = document.getElementById('lang-toggle');
  if (!langToggle) return;

  langToggle.addEventListener('click', () => {
    toggleLanguage();
  });

  // Apply default text values
  applyTranslations();
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';

  // Update UI button label and layout attributes
  const langToggle = document.getElementById('lang-toggle');
  const langLabel = langToggle.querySelector('.lang-label');

  if (currentLang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
    langLabel.textContent = 'English';
    langToggle.setAttribute('aria-label', 'Toggle language to English');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', 'en');
    langLabel.textContent = 'العربية';
    langToggle.setAttribute('aria-label', 'Toggle language to Arabic');
  }

  applyTranslations();
}

function applyTranslations() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      // Preserve HTML markup for address translation
      if (key === 'contact_addr') {
        el.innerHTML = translations[currentLang][key].replace('\n', '<br>');
      } else {
        el.textContent = translations[currentLang][key];
      }
    }
  });

  // Translate placeholders where relevant
  const nameInput = document.getElementById('rfq-name');
  const companyInput = document.getElementById('rfq-company');
  const emailInput = document.getElementById('rfq-email');
  const phoneInput = document.getElementById('rfq-phone');
  const messageInput = document.getElementById('rfq-message');

  if (nameInput) nameInput.placeholder = currentLang === 'ar' ? 'الاسم الثنائي' : 'John Doe';
  if (companyInput) companyInput.placeholder = currentLang === 'ar' ? 'اسم المصنع أو المقاول' : 'Industrial Corp Ltd';
  if (emailInput) emailInput.placeholder = currentLang === 'ar' ? 'procurement@company.com' : 'procurement@company.com';
  if (phoneInput) phoneInput.placeholder = currentLang === 'ar' ? '+966 50 000 0000' : '+966 50 000 0000';
  if (messageInput) messageInput.placeholder = currentLang === 'ar' ? 'يرجى تقديم تفاصيل المشروع، رموز القطع المطلوبة، أو مواصفات العرض...' : 'Provide details, list part numbers, brands, or describe your system requirements...';
}

/* ==========================================================================
   2. STICKY HEADER & SCROLL BEHAVIOR
   ========================================================================== */

function initStickyHeader() {
  const header = document.querySelector('.header');
  const sections = document.querySelectorAll('section[id], main[id]');
  const navLinks = document.querySelectorAll('.nav-desktop .nav-link');

  window.addEventListener('scroll', () => {
    // Height scroll state
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active link update based on scroll position
    let scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/* ==========================================================================
   3. MOBILE NAVIGATION DRAWER
   ========================================================================== */

function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const navDrawer = document.querySelector('.nav-mobile');
  const mobileLinks = document.querySelectorAll('.nav-mobile-link');

  if (!toggleBtn || !navDrawer) return;

  const closeMenu = () => {
    toggleBtn.setAttribute('aria-expanded', 'false');
    navDrawer.classList.remove('open');
    navDrawer.setAttribute('aria-hidden', 'true');
  };

  const openMenu = () => {
    toggleBtn.setAttribute('aria-expanded', 'true');
    navDrawer.classList.add('open');
    navDrawer.setAttribute('aria-hidden', 'false');
  };

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close drawer on link selection
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close drawer when clicking outside
  document.addEventListener('click', (e) => {
    const isClickInside = navDrawer.contains(e.target) || toggleBtn.contains(e.target);
    if (!isClickInside && navDrawer.classList.contains('open')) {
      closeMenu();
    }
  });
}

/* ==========================================================================
   4. SINGLE-LINE DIAGRAM (SLD) INTERACTION
   ========================================================================== */

function initSingleLineDiagram() {
  const nodes = document.querySelectorAll('.sld-node');
  const tooltip = document.getElementById('diagram-tooltip');

  // Path definitions corresponding to each interactive Node ID
  const pathMap = {
    'node-automation': ['#path-main', '#path-automation'],
    'node-electrical': ['#path-main', '#path-electrical'],
    'node-sensors': ['#path-main', '#path-sensors'],
    'node-valves': ['#path-main', '#path-valves'],
    'node-pneumatics': ['#path-main', '#path-pneumatics']
  };

  // Tooltip content dictionary for English/Arabic
  const nodeInfo = {
    'node-automation': {
      en: { title: 'Node 01: Automation & Controls', desc: 'PLC, HMI, motion controls, vision & software. Click to navigate.' },
      ar: { title: 'عقدة ٠١: الأتمتة وأنظمة التحكم', desc: 'شاشات HMI، وحدات PLC، مشغلات الحركة والبرامج. اضغط للانتقال.' }
    },
    'node-electrical': {
      en: { title: 'Node 03: Electrical Panels', desc: 'Panel meters, encoders, SSR switches, IO-Link. Click to navigate.' },
      ar: { title: 'عقدة ٠٣: اللوحات الكهربائية', desc: 'عدادات اللوحات، المشفرات الدوارة، مرحلات الحالة الصلبة. اضغط للانتقال.' }
    },
    'node-sensors': {
      en: { title: 'Node 04: Sensors & Signals', desc: 'Proximity detectors, distance lasers, area curatins. Click to navigate.' },
      ar: { title: 'عقدة ٠٤: المستشعرات والإشارات', desc: 'حساسات التقارب، ليزر قياس المسافات، ستائر السلامة. اضغط للانتقال.' }
    },
    'node-valves': {
      en: { title: 'Node 05: Industrial Valves', desc: 'Butterfly, ball, gate, knife gate, solenoid, and piloted air valves. Click to navigate.' },
      ar: { title: 'عقدة ٠٥: الصمامات الصناعية', desc: 'صمامات الفراشة والكرة والبوابة والسكين والملف الكهربائي. اضغط للانتقال.' }
    },
    'node-pneumatics': {
      en: { title: 'Node 06: Pneumatics / VFD', desc: 'Piston cylinders, air preparation FRL, inverters. Click to navigate.' },
      ar: { title: 'عقدة ٠٦: المكونات الهوائية ومغير التردد', desc: 'الأسطوانات الهوائية، وحدات FRL، محركات VFD المغير للسرعة. اضغط للانتقال.' }
    }
  };

  nodes.forEach(node => {
    // Hover: Energize related single-line paths
    node.addEventListener('mouseenter', () => {
      const nodeId = node.getAttribute('id');
      const pathsToEnergize = pathMap[nodeId] || [];

      pathsToEnergize.forEach(selector => {
        const pathEl = document.querySelector(selector);
        if (pathEl) pathEl.classList.add('sld-path-active');
      });

      // Update and position tooltip
      if (tooltip && nodeInfo[nodeId]) {
        const info = nodeInfo[nodeId][currentLang];
        tooltip.querySelector('.tooltip-title').textContent = info.title;
        tooltip.querySelector('.tooltip-desc').textContent = info.desc;
        tooltip.classList.add('visible');
      }
    });

    // Hover Exit: Denergize paths
    node.addEventListener('mouseleave', () => {
      const nodeId = node.getAttribute('id');
      const pathsToEnergize = pathMap[nodeId] || [];

      pathsToEnergize.forEach(selector => {
        const pathEl = document.querySelector(selector);
        if (pathEl) pathEl.classList.remove('sld-path-active');
      });

      if (tooltip) {
        tooltip.classList.remove('visible');
      }
    });

    // Click: Smooth scroll to matching category card + focus animation highlight
    node.addEventListener('click', () => {
      const targetId = node.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);

      if (targetEl) {
        // Remove existing target highlights
        document.querySelectorAll('.category-card').forEach(card => {
          card.classList.remove('target-highlight');
        });

        // Scroll with offset
        const yOffset = -100;
        const y = targetEl.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });

        // Energize visual feedback on target card
        targetEl.classList.add('target-highlight');
        setTimeout(() => {
          targetEl.classList.remove('target-highlight');
        }, 2200);
      }
    });

    // Keyboard support: activation on enter key
    node.setAttribute('tabindex', '0');
    node.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        node.click();
      }
    });
  });

  // Wire up category links to auto-fill the contact subject field
  const quoteLinks = document.querySelectorAll('.card-link');
  const subjectSelect = document.getElementById('rfq-subject');

  quoteLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const subject = link.getAttribute('data-quote-subject');
      if (subjectSelect && subject) {
        // Iterate select options to find matches
        for (let i = 0; i < subjectSelect.options.length; i++) {
          const option = subjectSelect.options[i];
          if (subject.toLowerCase().includes(option.value.toLowerCase().split(' ')[0])) {
            subjectSelect.selectedIndex = i;
            break;
          }
        }
      }
    });
  });
}

/* ==========================================================================
   5. RFQ CONTACT FORM - EmailJS Integration
   ========================================================================== */

// --- PASTE YOUR 3 EMAILJS VALUES BELOW ------------------------------------
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
// --------------------------------------------------------------------------

emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

function initRfqForm() {
  const form      = document.getElementById('rfq-form');
  const alertBox  = document.getElementById('form-alert');
  const submitBtn = form ? form.querySelector('.btn-submit') : null;
  const btnText   = submitBtn ? submitBtn.querySelector('.btn-text') : null;
  const spinner   = submitBtn ? submitBtn.querySelector('.btn-spinner') : null;

  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alertBox.className = 'form-alert hidden';
    alertBox.textContent = '';

    const emailInput = document.getElementById('rfq-email');
    if (emailInput && !validateEmail(emailInput.value)) {
      showFormMessage(translations[currentLang].form_error, 'error');
      emailInput.focus();
      return;
    }

    submitBtn.disabled = true;
    btnText.classList.add('hidden');
    spinner.classList.remove('hidden');

    const rfqId = Math.floor(100000 + Math.random() * 900000);
    const templateParams = {
      from_name:  document.getElementById('rfq-name').value.trim(),
      company:    document.getElementById('rfq-company').value.trim(),
      from_email: document.getElementById('rfq-email').value.trim(),
      phone:      document.getElementById('rfq-phone').value.trim(),
      subject:    document.getElementById('rfq-subject').value,
      message:    document.getElementById('rfq-message').value.trim(),
      rfq_id:     'RFQ-' + rfqId
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
      .then(function() {
        const msg = translations[currentLang].form_success.replace('%ID%', rfqId);
        showFormMessage(msg, 'success');
        form.reset();
      })
      .catch(function(err) {
        console.error('EmailJS error:', err);
        showFormMessage('Failed to send. Please email sales@cese.org.in directly.', 'error');
      })
      .finally(function() {
        submitBtn.disabled = false;
        btnText.classList.remove('hidden');
        spinner.classList.add('hidden');
      });
  });
}

function showFormMessage(message, type) {
  const alertBox = document.getElementById('form-alert');
  if (!alertBox) return;
  alertBox.textContent = message;
  alertBox.className = 'form-alert ' + type;
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}


/* ==========================================================================
   6. PREMIUM CARD MOUSE TRACKING GLOW
   ========================================================================== */

function initCardMouseTracking() {
  const cards = document.querySelectorAll('.category-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* ==========================================================================
   7. PRODUCT SHOWCASE MODAL LOGIC
   ========================================================================== */

const productDatabase = {
  "PLC": {
    image: "products/plc_showcase.png",
    en: {
      title: "Programmable Logic Controllers (PLC)",
      desc: "Industrial digital computers designed for control and automation of manufacturing processes, assembly lines, robotic devices, and heavy-duty machinery.",
      specs: [
        "Logic programming languages: Ladder (LD), FBD, Structured Text (ST)",
        "Integrated high-speed inputs and pulse outputs",
        "Communication protocols: PROFINET, Modbus TCP, EtherCAT, Ethernet/IP",
        "Expandable I/O configurations with safety modules"
      ],
      brands: ["Siemens", "ABB", "Schneider Electric", "LS Electric", "Omron"]
    },
    ar: {
      title: "أجهزة التحكم المنطقي القابلة للبرمجة (PLC)",
      desc: "كمبيوترات رقمية صناعية مصممة للتحكم وأتمتة عمليات التصنيع، وخطوط التجميع، والأجهزة الروبوتية، والآلات الثقيلة.",
      specs: [
        "لغات برمجة المنطق: مخطط السلم (LD)، مخطط كتل الوظائف (FBD)، النص المنظم (ST)",
        "مدخلات عالية السرعة ومخرجات نبضية مدمجة",
        "بروتوكولات الاتصال: PROFINET، Modbus TCP، EtherCAT، Ethernet/IP",
        "تكوينات الإدخال/الإخراج القابلة للتوسيع مع وحدات السلامة"
      ],
      brands: ["Siemens", "ABB", "Schneider Electric", "LS Electric", "Omron"]
    }
  },
  "HMI": {
    image: "products/hmi_showcase.png",
    en: {
      title: "Human-Machine Interfaces (HMI)",
      desc: "Premium touch panels and display terminals that connect operators to PLCs and control networks, offering real-time diagnostics, control widgets, and graphical process maps.",
      specs: [
        "Screen sizes: 4.3 inch to 21.5 inch wide TFT displays",
        "High durability with IP66 front panel protection",
        "Supports multi-touch gestures and remote monitoring via VNC/Web server",
        "Vibrant vector graphic displays with historical alarm logging"
      ],
      brands: ["Siemens", "Schneider Electric", "Omron", "Fuji Electric", "ABB"]
    },
    ar: {
      title: "واجهات الإنسان والآلة (HMI)",
      desc: "شاشات لمس وأطراف عرض متميزة تربط المشغلين بأجهزة PLC وشبكات التحكم، وتوفر تشخيصات فورية وأزرار تحكم ورسوم بيانية تفاعلية.",
      specs: [
        "أحجام الشاشات: شاشات TFT عريضة من ٤.٣ إلى ٢١.٥ بوصة",
        "متانة عالية مع حماية اللوحة الأمامية بمعيار IP66",
        "يدعم إيماءات اللمس المتعدد والمراقبة عن بعد عبر VNC / خادم الويب",
        "شاشات رسومية متجهة نابضة بالحياة مع تسجيل تاريخي للإنذارات"
      ],
      brands: ["Siemens", "Schneider Electric", "Omron", "Fuji Electric", "ABB"]
    }
  },
  "VFD": {
    image: "products/vfd_showcase.png",
    en: {
      title: "Variable Frequency Drives (VFD)",
      desc: "Advanced speed controllers for AC motor applications, saving energy while optimizing torque, speed control, and line sync in conveying, pumping, and mechanical motion systems.",
      specs: [
        "Power range: 0.18 kW to over 500 kW",
        "Built-in STO (Safe Torque Off) safety functions",
        "Integrated EMC line filters and braking transistors",
        "Modbus, Profibus, and EtherCAT network interfaces"
      ],
      brands: ["Yaskawa", "ABB", "Schneider Electric", "Lenze", "Fuji Electric", "Siemens"]
    },
    ar: {
      title: "محركات التردد المتغير (VFD / العواكس)",
      desc: "أجهزة تحكم متقدمة في سرعة محركات التيار المتردد، مما يوفر الطاقة مع تحسين عزم الدوران والتحكم في السرعة ومزامنة الخطوط في أنظمة النقل والضخ وحركات الآلات.",
      specs: [
        "نطاق القدرة: من ٠.١٨ كيلوواط إلى أكثر من ٥٠٠ كيلوواط",
        "وظائف سلامة مدمجة STO (إيقاف عزم الدوران الآمن)",
        "مرشحات خطوط EMC المدمجة وترانزستورات الكبح",
        "واجهات شبكة Modbus و Profibus و EtherCAT"
      ],
      brands: ["Yaskawa", "ABB", "Schneider Electric", "Lenze", "Fuji Electric", "Siemens"]
    }
  },
  "Butterfly Valves": {
    image: "products/valve_showcase.png",
    en: {
      title: "Industrial Butterfly Valves",
      desc: "Quarter-turn rotary valves designed for regulating or isolating flow in piping systems, commonly paired with double-acting pneumatic actuators.",
      specs: [
        "Body materials: Ductile iron, carbon steel, stainless steel",
        "Actuation: Pneumatic actuator, electric motor, or manual gear",
        "Pressure classes: PN10, PN16, ANSI 150",
        "Sealing: EPDM, NBR, Viton, or metal-to-metal seats"
      ],
      brands: ["SMC", "Festo", "Honeywell", "Schneider Electric"]
    },
    ar: {
      title: "صمامات الفراشة الصناعية",
      desc: "صمامات دوارة بربع دورة مصممة لتنظيم أو عزل التدفق في أنظمة الأنابيب، وغالبًا ما تقترن بمشغلات هوائية مزدوجة المفعول.",
      specs: [
        "مواد الجسم: حديد مطيل، فولاذ كربوني، فولاذ مقاوم للصدأ",
        "التشغيل: مشغل هوائي، محرك كهربائي، أو ترس يدوي",
        "فئات الضغط: PN10، PN16، ANSI 150",
        "الختم: حشوات EPDM أو NBR أو Viton أو حشوات معدنية"
      ],
      brands: ["SMC", "Festo", "Honeywell", "Schneider Electric"]
    }
  },
  "Capacitive Sensor": {
    image: "products/sensor_showcase.png",
    en: {
      title: "Industrial Capacitive Sensors",
      desc: "Non-contact proximity sensors that detect both metallic and non-metallic objects (liquids, plastics, grains) based on changes in electrical capacitance.",
      specs: [
        "Sensing distance: 2 mm to 30 mm",
        "Output configurations: NPN/PNP, NO/NC select",
        "Housing: Brass nickel-plated or high-grade plastic",
        "IP rating: IP67 dust and water protection"
      ],
      brands: ["Sick Sensors", "Pepperl+Fuchs", "Omron", "Siemens"]
    },
    ar: {
      title: "المستشعرات السعوية الصناعية",
      desc: "مستشعرات تقارب لا تلامسية تكتشف الأجسام المعدنية وغير المعدنية (السوائل، البلاستيك، الحبوب) بناءً على التغيرات في السعة الكهربائية.",
      specs: [
        "مسافة الاستشعار: من ٢ ملم إلى ٣٠ ملم",
        "تكوينات المخرجات: NPN/PNP، اختيار NO/NC",
        "الهيكل: نحاس مطلي بالنيكل أو بلاستيك عالي الجودة",
        "درجة الحماية: IP67 مقاومة الغبار والماء"
      ],
      brands: ["Sick Sensors", "Pepperl+Fuchs", "Omron", "Siemens"]
    }
  },
  "Panel Meter": {
    image: "products/panel_meter_showcase.png",
    en: {
      title: "Digital Panel Meters",
      desc: "Digital display meters designed to measure and monitor voltage, current, frequency, power factor, and direct inputs from industrial sensors.",
      specs: [
        "Input signals: AC/DC voltage/current, thermocouples, resistance",
        "Display: High-brightness LED, multi-digit layout",
        "Built-in comparator outputs and Modbus RTU connectivity",
        "Front panel sealing conforms to IP66 standards"
      ],
      brands: ["Omron", "Schneider Electric", "Siemens", "Fuji Electric"]
    },
    ar: {
      title: "عدادات اللوحات الرقمية",
      desc: "شاشات قياس رقمية مصممة لمراقبة وقياس الجهد، التيار، التردد، معامل القدرة، والمدخلات المباشرة من المستشعرات الصناعية.",
      specs: [
        "إشارات المدخلات: جهد/تيار متردد ومستمر، المزدوجات الحرارية، المقاومة",
        "الشاشة: شاشة LED عالية السطوع، متعددة الأرقام",
        "مخرجات مقارن مدمجة واتصال Modbus RTU",
        "عزل اللوحة الأمامية متوافق مع معايير IP66"
      ],
      brands: ["Omron", "Schneider Electric", "Siemens", "Fuji Electric"]
    }
  },
  "Power Supply": {
    image: "products/power_supply_showcase.png",
    en: {
      title: "Switch-Mode Power Supplies (SMPS)",
      desc: "Highly efficient DIN-rail mounted switching power supplies providing stable 24VDC, 12VDC, or 5VDC voltage lines to industrial controllers and sensors.",
      specs: [
        "Input voltage: Universal 85-264VAC, 50/60Hz",
        "Output efficiency up to 94%",
        "Protections: Short circuit, overload, overvoltage, overtemperature",
        "Industrial slim design saving din-rail cabinet space"
      ],
      brands: ["Mean Well", "Schneider Electric", "Omron", "Siemens", "ABB"]
    },
    ar: {
      title: "مصادر الطاقة ذات الوضع التبديلى (SMPS)",
      desc: "مصادر طاقة كهربائية عالية الكفاءة تثبت على سكة DIN توفر خطوط جهد مستقرة ٢٤ فولت، ١٢ فولت، أو ٥ فولت تيار مستمر للمتحكمات والمستشعرات الصناعية.",
      specs: [
        "جهد الإدخال: عالمي ٨٥-٢٦٤ فولت تيار متردد، ٥٠/٦٠ هرتز",
        "كفاءة مخرجات تصل إلى ٩٤٪",
        "الحماية: التماس الكهربائي، التحميل الزائد، الجهد الزائد، الحرارة الزائدة",
        "تصميم صناعي نحيف يوفر مساحة في خزانة التحكم"
      ],
      brands: ["Mean Well", "Schneider Electric", "Omron", "Siemens", "ABB"]
    }
  },
  "Relay": {
    image: "products/relay_showcase.png",
    en: {
      title: "Industrial Relays & SSRs",
      desc: "Solid-state and electromagnetic switching devices designed for controlling heavy loads, motor starters, and auxiliary signal circuits with galvanic isolation.",
      specs: [
        "Control voltage: 24VDC, 110VAC, 230VAC select options",
        "Solid state relays (SSR) with zero-cross switching for silent operation",
        "High switching cycles (up to 10 million operations)",
        "Includes LED indicator and manual test toggle latch"
      ],
      brands: ["Carlo Gavazzi", "Omron", "Schneider Electric", "Siemens", "ABB"]
    },
    ar: {
      title: "المرحلات الصناعية ومرحلات الحالة الصلبة (SSR)",
      desc: "أجهزة تحويل كهرومغناطيسية وحالة صلبة مصممة للتحكم في الأحمال الثقيلة، ومشغلات المحركات، ودوائر الإشارات المساعدة مع عزل كلفاني كامل.",
      specs: [
        "جهد التحكم: خيارات ٢٤ فولت مستمر، ١١٠ فولت متردد، ٢٣٠ فولت متردد",
        "مرحلات الحالة الصلبة (SSR) مع تبديل صفري لعملية صامتة بالكامل",
        "دورات تحويل عالية (تصل إلى ١٠ ملايين عملية)",
        "تتضمن مؤشر LED ومزلاج اختبار يدوي"
      ],
      brands: ["Carlo Gavazzi", "Omron", "Schneider Electric", "Siemens", "ABB"]
    }
  },
  "Temperature Controller": {
    image: "products/temp_controller_showcase.png",
    en: {
      title: "Digital Temperature Controllers",
      desc: "PID control units designed to maintain target temperatures in furnaces, heating systems, ovens, and cooling loops with high accuracy.",
      specs: [
        "Control modes: PID auto-tuning, On/Off, Heating/Cooling control",
        "Input support: K, J, T, R, S, Pt100 RTDs",
        "Outputs: Relay, SSR drive voltage, or 4-20mA current analog loop",
        "High accuracy digital LED display screen"
      ],
      brands: ["Omron", "Fuji Electric", "Honeywell", "Siemens"]
    },
    ar: {
      title: "أجهزة التحكم الرقمية في درجة الحرارة",
      desc: "وحدات تحكم PID مصممة للحفاظ على درجات الحرارة المستهدفة في الأفران، وأنظمة التدفئة، وأفران التجفيف، وحلقات التبريد بدقة عالية.",
      specs: [
        "أوضاع التحكم: ضبط ذاتي لـ PID، تشغيل/إيقاف، تحكم بالتدفئة والتبريد",
        "دعم المدخلات: المزدوجات الحرارية K, J, T, R, S ومستشعرات Pt100",
        "المخرجات: مرحل، جهد تشغيل SSR، أو حلقة تيار ٤-٢٠ مللي أمبير تناظرية",
        "شاشة عرض رقمية LED عالية الدقة"
      ],
      brands: ["Omron", "Fuji Electric", "Honeywell", "Siemens"]
    }
  },
  "Sign Tower / Signal Lights": {
    image: "products/sign_tower_showcase.png",
    en: {
      title: "LED Signal Tower Lights",
      desc: "Multi-tier LED visual alarm towers representing machinery status, faults, and normal operating conditions on automated assembly lines.",
      specs: [
        "Visual: High-intensity LED blocks (Red, Amber, Green, Blue, White)",
        "Acoustic: Built-in buzzer, 85dB volume output at 1 meter",
        "Mounting options: Pole mount, direct base mount, L-bracket mount",
        "Protection rating: IP65 dust and water seal"
      ],
      brands: ["Patlite", "Schneider Electric", "Omron", "SMC"]
    },
    ar: {
      title: "أبراج الإشارات الضوئية LED",
      desc: "أبراج إنذار مرئية LED متعددة المستويات لتوضيح حالة الآلات، الأعطال، وظروف التشغيل العادية على خطوط التجميع الآلية.",
      specs: [
        "المرئي: كتل LED عالية الكثافة (أحمر، برتقالي، أخضر، أزرق، أبيض)",
        "الصوتي: جرس مدمج، خرج صوت بقوة ٨٥ ديسيبل على مسافة متر واحد",
        "خيارات التركيب: تركيب على عمود، تركيب مباشر على القاعدة، أو زاوية L",
        "درجة الحماية: IP65 مقاومة الغبار والماء"
      ],
      brands: ["Patlite", "Schneider Electric", "Omron", "SMC"]
    }
  },
  "Pressure Transmitter": {
    image: "products/pressure_transmitter_showcase.png",
    en: {
      title: "Differential Pressure Transmitters",
      desc: "High-precision pressure transmitters designed to measure differential, gauge, and absolute pressure in liquid, gas, and steam processes.",
      specs: [
        "Measuring range: 0.1 kPa to 10 MPa with high accuracy",
        "Output signal: 4-20 mA with HART protocol digital communication",
        "Diaphragm materials: Stainless steel 316L, Hastelloy-C, Tantalum",
        "Explosion-proof enclosure (ATEX/IECEx approved)"
      ],
      brands: ["Rosemount", "Yokogawa", "Honeywell", "Siemens", "ABB"]
    },
    ar: {
      title: "أجهزة إرسال الضغط التفاضلي",
      desc: "أجهزة إرسال ضغط عالية الدقة مصممة لقياس الضغط التفاضلي والضغط القياسي والضغط المطلق في العمليات السائلة والغازية والبخارية.",
      specs: [
        "نطاق القياس: ٠.١ كيلوباسكال إلى ١٠ ميغاباسكال بدقة عالية للغاية",
        "إشارة المخرجات: ٤-٢٠ مللي أمبير مع بروتوكول HART الرقمي",
        "مواد الحجاب الحاجز: فولاذ مقاوم للصدأ 316L، هاسيلوي-C، تانتالوم",
        "غلاف مقاوم للانفجار (معتمد من ATEX / IECEx)"
      ],
      brands: ["Rosemount", "Yokogawa", "Honeywell", "Siemens", "ABB"]
    }
  },
  "Solenoid Valves": {
    image: "products/solenoid_valve_showcase.png",
    en: {
      title: "Directional Control Solenoid Valves",
      desc: "Pneumatic solenoid valves designed to control the flow direction and flow speed of compressed air in automated valve actuators and air cylinders.",
      specs: [
        "Valve functions: 3/2-way, 5/2-way, 5/3-way configurations",
        "Coil voltage: 24VDC, 110VAC, 220VAC",
        "Operating pressure: 1.5 to 8 bar",
        "Integrated manual override button for testing"
      ],
      brands: ["SMC", "Festo", "Parker", "Schneider Electric"]
    },
    ar: {
      title: "صمامات الملف اللولبي للتحكم في الاتجاه",
      desc: "صمامات ملف لولبي هوائية مصممة للتحكم في اتجاه وسرعة تدفق الهواء المضغوط في مشغلات الصمامات الآلية وأسطوانات الهواء.",
      specs: [
        "وظائف الصمام: تكوينات ٣/٢ اتجاه، ٥/٢ اتجاه، ٥/٣ اتجاه",
        "جهد الملف: ٢٤ فولت مستمر، ١١٠ فولت متردد، ٢٢٠ فولت متردد",
        "ضغط التشغيل: من ١.٥ إلى ٨ بار",
        "زر تجاوز يدوي مدمج لإجراء الاختبارات"
      ],
      brands: ["SMC", "Festo", "Parker", "Schneider Electric"]
    }
  },
  "Cylinders": {
    image: "products/pneumatic_cylinder_showcase.png",
    en: {
      title: "Pneumatic Cylinders",
      desc: "ISO standard double-acting linear pneumatic actuators providing mechanical thrust and stroke movements using compressed air in production automation.",
      specs: [
        "Standard conformances: ISO 15552, ISO 6431, ISO 6432",
        "Bore sizes: 32 mm to 125 mm; custom strokes available",
        "Integrated magnetic piston for position sensor detection",
        "End-stroke adjustable pneumatic cushioning"
      ],
      brands: ["SMC", "Festo", "Parker"]
    },
    ar: {
      title: "الأسطوانات الهوائية (بستن)",
      desc: "مشغلات هوائية خطية مزدوجة الفعل متوافقة مع معايير ISO توفر قوة دفع وحركة ميكانيكية باستخدام الهواء المضغوط في أتمتة خطوط الإنتاج.",
      specs: [
        "التوافق القياسي: ISO 15552, ISO 6431, ISO 6432",
        "أقطار البستن: ٣٢ ملم إلى ١٢٥ ملم؛ أطوال أشواط مخصصة",
        "مكبس مغناطيسي مدمج لاكتشاف الموقع عبر الحساسات",
        "تخميد هوائي قابل للتعديل عند نهاية الشوط"
      ],
      brands: ["SMC", "Festo", "Parker"]
    }
  },
  "Ball Valves": {
    image: "products/ball_valve_showcase.png",
    en: {
      title: "Industrial Ball Valves",
      desc: "Robust 2-way and 3-way ball valves providing high-flow, low-pressure drop shutoff control for air, steam, oil, and liquid process pipes.",
      specs: [
        "Port types: Full bore, reduced bore, multi-port T/L flow paths",
        "Body: Stainless steel 316, carbon steel, brass",
        "Connection: Threaded, flanged, or tri-clamp sanitary ends",
        "Pressure capacity up to 1000 PSI (69 bar)"
      ],
      brands: ["SMC", "Festo", "Honeywell", "Parker"]
    },
    ar: {
      title: "صمامات الكرة الصناعية",
      desc: "صمامات كروية قوية ثنائية وثلاثية الاتجاهات توفر تحكمًا بإغلاق محكم وتدفق عالي وانخفاض ضئيل في الضغط لأنابيب الهواء والبخار والزيت والسوائل.",
      specs: [
        "أنواع المنافذ: تجويف كامل، تجويف مخفض، مسارات تدفق متعددة T/L",
        "الهيكل: فولاذ مقاوم للصدأ 316، فولاذ كربوني، نحاس",
        "التوصيل: ملولب، ذو شفة (فلنجة)، أو وصلات صحية",
        "سعة الضغط تصل إلى ١٠٠٠ رطل لكل بوصة مربعة (٦٩ بار)"
      ],
      brands: ["SMC", "Festo", "Honeywell", "Parker"]
    }
  },
  "Servo Motor": {
    image: "products/servo_motor_showcase.png",
    en: {
      title: "Industrial Servo Drives & Motors",
      desc: "High-precision rotary AC servo motor and amplifier systems providing exceptional speed, position, and torque control for dynamic factory automation systems.",
      specs: [
        "Input voltage: 200-240VAC single/three phase, 400VAC options",
        "High resolution absolute encoders integrated",
        "Fast responsiveness with auto-tuning control loop algorithms",
        "IP67 motor construction with built-in holding brakes"
      ],
      brands: ["Yaskawa", "Siemens", "Omron", "Mitsubishi Electric"]
    },
    ar: {
      title: "محركات وأنظمة السيرفو الصناعية",
      desc: "محركات سيرفو تيار متردد ومكبرات صوت عالية الدقة توفر تحكمًا استثنائيًا في السرعة والموقع وعزم الدوران لأنظمة أتمتة المصانع الديناميكية.",
      specs: [
        "جهد الإدخال: ٢٠٠-٢٤٠ فولت متردد أحادي/ثلاثي الأطوار، خيارات ٤٠٠ فولت متردد",
        "أجهزة تشفير مطلقة عالية الدقة مدمجة",
        "استجابة سريعة مع خوارزميات ضبط ذاتي لحلقة التحكم",
        "هيكل محرك بمعيار IP67 مع مكابح مدمجة"
      ],
      brands: ["Yaskawa", "Siemens", "Omron", "Mitsubishi Electric"]
    }
  },
  "Limit Switch": {
    image: "products/limit_switch_showcase.png",
    en: {
      title: "Heavy-Duty Limit Switches",
      desc: "Mechanical contact limit switches designed to detect physical presence, end of stroke limits, or mechanical position of gates, cylinders, and moving assemblies.",
      specs: [
        "Actuator types: Roller lever, plunger, adjustable rod, spring whisker",
        "Contact setup: 1NO/1NC, 2NO/2NC snap action contacts",
        "Enclosure: Heavy die-cast metal or glass-reinforced plastic, IP67 sealed",
        "Mechanical life: Over 15 million operations"
      ],
      brands: ["Omron", "Schneider Electric", "Siemens", "Honeywell"]
    },
    ar: {
      title: "مفاتيح حدية للخدمة الشاقة",
      desc: "مفاتيح ميكانيكية مصممة لاكتشاف الوجود المادي، أو حدود نهاية الشوط، أو الموضع الميكانيكي للبوابات والأسطوانات والأجزاء المتحركة.",
      specs: [
        "أنواع المشغلات: ذراع بكرة، مكبس، قضيب قابل للتعديل، زنبركي",
        "إعداد نقاط التلامس: نقاط تلامس سريعة العمل 1NO / 1NC أو 2NO / 2NC",
        "الغلاف: معدن ثقيل مصبوب أو بلاستيك مقوى بالزجاج، معزول بمعيار IP67",
        "العمر الميكانيكي: أكثر من ١٥ مليون عملية تشغيل"
      ],
      brands: ["Omron", "Schneider Electric", "Siemens", "Honeywell"]
    }
  },
  "Photo Electric Sensor": {
    image: "products/photoelectric_sensor_showcase.png",
    en: {
      title: "Photoelectric Reflex & Distance Sensors",
      desc: "Premium optical sensors utilizing modulated light beams to detect presence, distance, and color contrast of objects without mechanical contact.",
      specs: [
        "Sensing types: Through-beam, retro-reflective, diffuse-reflective",
        "Light source: Red LED, infrared LED, or high-precision Class 1 laser",
        "Integrated potentiometer or IO-Link interface for distance tuning",
        "Sensing range up to 20 meters (through-beam setup)"
      ],
      brands: ["SICK Sensors", "Pepperl+Fuchs", "Omron", "Siemens"]
    },
    ar: {
      title: "مستشعرات الانعكاس والمسافة الكهروضوئية",
      desc: "مستشعرات بصرية متميزة تستخدم حزم الضوء المعدلة لاكتشاف وجود الأجسام والمسافة وتباين الألوان دون تلامس ميكانيكي.",
      specs: [
        "أنواع الاستشعار: شعاع نافذ، عاكس رجعي، انعكاسي منتشر",
        "مصدر الضوء: مؤشر LED أحمر، أو تحت أحمر، أو ليزر من الفئة ١ عالي الدقة",
        "واجهة مقياس جهد مدمج أو واجهة IO-Link لضبط المسافة",
        "نطاق استشعار يصل إلى ٢٠ مترًا (إعداد الشعاع النافذ)"
      ],
      brands: ["SICK Sensors", "Pepperl+Fuchs", "Omron", "Siemens"]
    }
  },
  "Fitting": {
    image: "products/pneumatic_fittings_showcase.png",
    en: {
      title: "Pneumatic Push-In Fittings & Banjo Connectors",
      desc: "Quick-connect push-in tube fittings designed for leakage-free connection of polyurethane, polyethylene, and nylon tubing in industrial air networks.",
      specs: [
        "Tube outer diameters supported: 4mm to 16mm, inch sizes available",
        "Thread types: Metric, BSPP (G), BSPT (R), NPT",
        "Body: Brass nickel-plated, stainless steel, or technical composite plastic",
        "Operating pressure up to 10 bar (1.0 MPa) under vacuum"
      ],
      brands: ["SMC", "Festo", "Parker"]
    },
    ar: {
      title: "الوصلات الهوائية السريعة ووصلات البانجو",
      desc: "وصلات خراطيم سريعة التوصيل بالضغط مصممة لتوصيل خراطيم البولي يوريثين والبولي إيثيلين والنايلون بدون تسريب في شبكات الهواء الصناعية.",
      specs: [
        "أقطار الخراطيم المدعومة: ٤ ملم إلى ١٦ ملم، تتوفر مقاسات بالبوصة",
        "أنواع السن (القلاووظ): متري، BSPP (G)، BSPT (R)، NPT",
        "الهيكل: نحاس مطلي بالنيكل، فولاذ مقاوم للصدأ، أو بلاستيك مركب فني",
        "ضغط التشغيل يصل إلى ١٠ بار (١.٠ ميغاباسكال) تحت الفراغ"
      ],
      brands: ["SMC", "Festo", "Parker"]
    }
  },
  "Filter Regulator Lubricator (FRL)": {
    image: "products/frl_unit_showcase.png",
    en: {
      title: "Pneumatic FRL Service Units",
      desc: "Pneumatic air preparation units that filter moisture and particulate dust, regulate pressure line sync, and lubricate downstream valves and actuators.",
      specs: [
        "Filtration rating: 5 micron or 40 micron filter elements",
        "Drain options: Semi-auto drain, fully automatic float drain",
        "Bowl guard: Metal bowl guard for high impact safety",
        "Pressure regulation range: 0.5 to 8.5 bar"
      ],
      brands: ["SMC", "Festo", "Parker"]
    },
    ar: {
      title: "وحدات الخدمة الهوائية ثلاثية المراحل (FRL)",
      desc: "وحدات تحضير الهواء الهوائي التي تعمل على تصفية الرطوبة والغبار الجزئي وتنظيم ضغط خطوط الهواء وتزييت الصمامات والمشغلات النهائية.",
      specs: [
        "درجة الترشيح: عناصر فلتر ٥ ميكرون أو ٤٠ ميكرون",
        "خيارات التصريف: تصريف شبه تلقائي، تصريف تلقائي بالكامل بعوامة",
        "حماية الوعاء: واقي وعاء معدني للأمان العالي عند الاصطدام",
        "نطاق تنظيم الضغط: من ٠.٥ إلى ٨.٥ بار"
      ],
      brands: ["SMC", "Festo", "Parker"]
    }
  },
  "Switches and Pushbutton": {
    image: "products/pushbutton_showcase.png",
    en: {
      title: "Industrial Control Pushbuttons & Emergency Stops",
      desc: "22mm and 30mm industrial pushbuttons, illuminated selector switches, and emergency stop push-pull latch buttons for panel operators.",
      specs: [
        "Mounting diameter: 22.5 mm standard panel cutout",
        "Illumination: Integrated low-power LED modules",
        "Operator types: Flush, extended, mushroom emergency latch",
        "Protection rating: IP65/IP66 front panel dust-tight seal"
      ],
      brands: ["Schneider Electric", "Siemens", "Omron", "Fuji Electric"]
    },
    ar: {
      title: "أزرار التحكم الصناعية ومفاتيح الطوارئ",
      desc: "أزرار ضغط صناعية بمقاس ٢٢ ملم و٣٠ ملم، ومفاتيح اختيار مضيئة، وأزرار طوارئ ذات قفل سحب ودفع لمشغلي اللوحات.",
      specs: [
        "قطر التركيب: قطع لوحة قياسي بمقاس ٢٢.٥ ملم",
        "الإضاءة: وحدات LED مدمجة منخفضة الطاقة",
        "أنواع التشغيل: مسطح، ممتد، قفل طوارئ فطر الشكل",
        "درجة الحماية: IP65 / IP66 عزل اللوحة الأمامية من الغبار"
      ],
      brands: ["Schneider Electric", "Siemens", "Omron", "Fuji Electric"]
    }
  },
  "Optical Encoder": {
    image: "products/rotary_encoder_showcase.png",
    en: {
      title: "Industrial Rotary Encoders",
      desc: "Incremental and absolute optical encoders converting shaft rotation angle and speed into precision digital pulses for speed loop feedbacks.",
      specs: [
        "Encoder type: Incremental or Absolute (single-turn/multi-turn)",
        "Resolution: Up to 10,000 pulses per revolution (PPR)",
        "Electrical output: Line driver, push-pull, open collector",
        "Rugged shaft load capacity with IP65 housing protection"
      ],
      brands: ["Omron", "Pepperl+Fuchs", "Sick Sensors", "Yaskawa"]
    },
    ar: {
      title: "المشفرات الدوارة الصناعية",
      desc: "مشفرات بصرية تزايدية ومطلقة تحول زاوية دوران العمود وسرعته إلى نبضات رقمية دقيقة لتغذية حلقات التحكم بالسرعة راجعة.",
      specs: [
        "نوع المشفر: تزايدي أو مطلق (دورة واحدة / متعدد الدورات)",
        "الدقة: تصل إلى ١٠,٠٠٠ نبضة في الدورة الواحدة (PPR)",
        "المخرج الكهربائي: محرك خطي، دفع وسحب، مجمع مفتوح",
        "قدرة تحمل عمود شاقة مع درجة حماية الهيكل بمعيار IP65"
      ],
      brands: ["Omron", "Pepperl+Fuchs", "Sick Sensors", "Yaskawa"]
    }
  },
  "Gate Valve": {
    image: "products/gate_valve_showcase.png",
    en: {
      title: "Industrial Gate Valves",
      desc: "Heavy-duty rising stem gate valves designed for isolation and shutoff of flow in piping networks handling thick fluids, gas, or steam.",
      specs: [
        "Wedge design: Flexible wedge, solid wedge, resilient seated gate",
        "Flange class: ANSI 150/300, PN16/40",
        "Body: Cast iron, carbon steel, stainless steel",
        "Manual handwheel, pneumatic cylinder, or gear operated options"
      ],
      brands: ["SMC", "Festo", "Parker", "Honeywell"]
    },
    ar: {
      title: "صمامات البوابة الصناعية",
      desc: "صمامات بوابة ذات جذع صاعد ثقيلة مصممة لعزل وإغلاق التدفق في شبكات الأنابيب التي تتعامل مع السوائل السميكة أو الغاز أو البخار.",
      specs: [
        "تصميم الإسفين: إسفين مرن، إسفين صلب، بوابة ذات مقعد مرن",
        "فئة الشفة: ANSI 150/300, PN16/40",
        "الهيكل: حديد زهر، فولاذ كربوني، فولاذ مقاوم للصدأ",
        "خيارات تشغيل بعجلة يدوية، أسطوانة هوائية، أو تشغيل بالتروس"
      ],
      brands: ["SMC", "Festo", "Parker", "Honeywell"]
    }
  },
  "Air Motors": {
    image: "products/air_motor_showcase.png",
    en: {
      title: "Pneumatic Rotary Actuators & Motors",
      desc: "Rugged rotary vane and rack-and-pinion pneumatic motors converting compressed air into rotational torque for mixers, pump drives, and rotary index tables.",
      specs: [
        "Actuation type: Rack & pinion rotary, vane rotary air motors",
        "Rotation angles: 90 degree, 180 degree, and continuous rotation",
        "High torque outputs with compact explosion-proof frames",
        "Lubrication-free option available for cleanroom zones"
      ],
      brands: ["SMC", "Festo", "Parker"]
    },
    ar: {
      title: "المشغلات الدوارة والمحركات الهوائية",
      desc: "محركات هوائية ذات ريش دوارة ورف ترس تحول الهواء المضغوط إلى عزم دوران دوراني للخلاطات، ومحركات المضخات، وطاولات الفهرسة الدوارة.",
      specs: [
        "نوع التشغيل: مشغل دوار ذو رف وترس، محرك هوائي ذو ريش دوارة",
        "زوايا الدوران: ٩٠ درجة، ١٨٠ درجة، ودوران مستمر",
        "عزم دوران عالي مع هياكل مدمجة ومقاومة للانفجار",
        "يتوفر خيار تشغيل بدون تزييت لمناطق الغرف النظيفة"
      ],
      brands: ["SMC", "Festo", "Parker"]
    }
  }
};

function initProductShowcaseModal() {
  const modal = document.getElementById('product-modal');
  const closeBtn = document.getElementById('product-modal-close');
  const backdrop = document.getElementById('product-modal-backdrop');
  const listItems = document.querySelectorAll('.card-items-list li');
  const quoteBtn = document.getElementById('product-modal-quote-btn');

  if (!modal) return;

  // Close modal logic
  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Quote button inside modal
  if (quoteBtn) {
    quoteBtn.addEventListener('click', () => {
      const productName = document.getElementById('product-modal-title').textContent.trim();
      closeModal();

      // Auto-populate RFQ Subject field
      const subjectInput = document.getElementById('rfq-subject');
      
      if (subjectInput) {
        const customVal = currentLang === 'en'
          ? `RFQ for ${productName}`
          : `طلب تسعير لـ ${productName}`;
          
        let exists = false;
        for (let i = 0; i < subjectInput.options.length; i++) {
          if (subjectInput.options[i].value === customVal) {
            exists = true;
            break;
          }
        }
        if (!exists) {
          const newOpt = document.createElement('option');
          newOpt.value = customVal;
          newOpt.textContent = customVal;
          subjectInput.appendChild(newOpt);
        }
        subjectInput.value = customVal;
      }

      // Smooth scroll to RFQ form
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

function initPrivacyModal() {
  const modal = document.getElementById('privacy-modal');
  const trigger = document.getElementById('privacy-link');
  const closeBtn = document.getElementById('privacy-modal-close');
  const backdrop = document.getElementById('privacy-modal-backdrop');

  if (!modal || !trigger) return;

  const openModal = (e) => {
    e.preventDefault();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  trigger.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

function openProductModal(name, category) {
  const modal = document.getElementById('product-modal');
  const imgEl = document.getElementById('product-modal-img');
  const titleEl = document.getElementById('product-modal-title');
  const descEl = document.getElementById('product-modal-desc');
  const specsList = document.getElementById('product-modal-specs-list');
  const brandsList = document.getElementById('product-modal-brands-list');

  if (!modal) return;

  // Search product database (direct match or partial match)
  let dbKey = null;
  Object.keys(productDatabase).forEach(key => {
    if (name.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(name.toLowerCase())) {
      dbKey = key;
    }
  });

  let productDetails = null;
  if (dbKey) {
    productDetails = productDatabase[dbKey];
  } else {
    // Generate high-quality fallback details dynamically based on category
    productDetails = generateFallbackProduct(name, category);
  }

  // Populate data
  const localized = productDetails[currentLang];
  titleEl.textContent = localized.title;
  descEl.textContent = localized.desc;
  imgEl.src = productDetails.image;
  imgEl.alt = localized.title;

  // Clear & populate specs
  specsList.innerHTML = '';
  localized.specs.forEach(spec => {
    const li = document.createElement('li');
    li.textContent = spec;
    specsList.appendChild(li);
  });

  // Clear & populate brands
  brandsList.innerHTML = '';
  localized.brands.forEach(brand => {
    const span = document.createElement('span');
    span.className = 'modal-brand-badge';
    span.textContent = brand;
    brandsList.appendChild(span);
  });

  // Apply translations for statically bound text in the modal
  applyModalTranslations();

  // Open modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function applyModalTranslations() {
  const specsHeader = document.querySelector('.product-modal-specs h4');
  const brandsHeader = document.querySelector('.product-modal-brands h4');
  const quoteBtn = document.getElementById('product-modal-quote-btn');

  if (specsHeader) specsHeader.textContent = translations[currentLang].modal_specs_header;
  if (brandsHeader) brandsHeader.textContent = translations[currentLang].modal_brands_header;
  if (quoteBtn) quoteBtn.textContent = translations[currentLang].modal_cta_btn;
}

function generateFallbackProduct(name, category) {
  // Common industrial brands as fallback lists
  const defaultBrands = ["Schneider Electric", "Siemens", "ABB", "Omron", "SMC", "Festo", "Honeywell", "Yaskawa"];
  
  // Clean category names to match card titles
  const categoryLower = category.toLowerCase();
  
  let imagePath = "products/generic_showcase.png";
  if (categoryLower.includes("automation")) {
    imagePath = "products/plc_showcase.png";
  } else if (categoryLower.includes("electrical")) {
    imagePath = "products/relay_showcase.png";
  } else if (categoryLower.includes("temperature")) {
    imagePath = "products/temp_controller_showcase.png";
  } else if (categoryLower.includes("switches") || categoryLower.includes("indicator")) {
    imagePath = "products/sign_tower_showcase.png";
  } else if (categoryLower.includes("instrumentation")) {
    imagePath = "products/pressure_transmitter_showcase.png";
  } else if (categoryLower.includes("valve")) {
    imagePath = "products/valve_showcase.png";
  } else if (categoryLower.includes("sensor")) {
    imagePath = "products/sensor_showcase.png";
  } else if (categoryLower.includes("inverter") || categoryLower.includes("vfd")) {
    imagePath = "products/vfd_showcase.png";
  } else if (categoryLower.includes("components") || categoryLower.includes("actuator")) {
    imagePath = "products/air_motor_showcase.png";
  } else if (categoryLower.includes("pneumatics")) {
    imagePath = "products/pneumatic_cylinder_showcase.png";
  }

  return {
    image: imagePath,
    en: {
      title: name,
      desc: `High-fidelity, certified industrial-grade ${name} components designed for rugged operation in factory automation networks and plant engineering loops.`,
      specs: [
        "Conforms to CE, UL, and SEC/IEC industrial certifications",
        "Heavy-duty housing with high temperature tolerance",
        "Optimized for low-maintenance, long-lifecycle execution",
        "Designed for quick installation and terminal mounting"
      ],
      brands: defaultBrands
    },
    ar: {
      title: name,
      desc: `مكونات ${name} المعتمدة وعالية الجودة والمصممة للتشغيل الشاق في شبكات الأتمتة المصنعية وحلقات هندسة المصانع.`,
      specs: [
        "متوافق مع شهادات CE و UL و SEC / IEC الصناعية",
        "هيكل متين ذو تحمل عالي لدرجات الحرارة المتفاوتة",
        "مصمم لعمر تشغيلي طويل وصيانة منخفضة للغاية",
        "مصمم للتركيب السريع على لوحات التوصيل"
      ],
      brands: defaultBrands
    }
  };
}
