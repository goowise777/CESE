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
    logo_arabic: "Ù…Ø¤Ø³Ø³Ø© ØªÙˆØ±ÙŠØ¯ Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¡ Ø§Ù„ØªØ¬Ø§Ø±ÙŠØ©",
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
    logo_title: "ØªÙˆØ±ÙŠØ¯ Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¡",
    logo_subtitle: "Ù…Ø¤Ø³Ø³Ø©",
    logo_arabic: "Ù…Ø¤Ø³Ø³Ø© ØªÙˆØ±ÙŠØ¯ Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¡ Ø§Ù„ØªØ¬Ø§Ø±ÙŠØ©",
    nav_home: "Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©",
    nav_about: "Ù…Ù† Ù†Ø­Ù†",
    nav_brands: "Ø§Ù„Ø¹Ù„Ø§Ù…Ø§Øª Ø§Ù„ØªØ¬Ø§Ø±ÙŠØ©",
    nav_products: "Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª",
    nav_contact: "Ø§ØªØµÙ„ Ø¨Ù†Ø§",
    nav_quote_btn: "Ø·Ù„Ø¨ ØªØ³Ø¹ÙŠØ±Ø©",
    hero_eyebrow: "Ù…Ø¤Ø³Ø³Ø© ØªÙˆØ±ÙŠØ¯ Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¡ Ø§Ù„ØªØ¬Ø§Ø±ÙŠØ©",
    hero_headline: "Ø­Ù„ÙˆÙ„ Ø§Ù„Ø£ØªÙ…ØªØ© Ø§Ù„ØµÙ†Ø§Ø¹ÙŠØ©",
    hero_subheadline: "ØªÙˆØ±ÙŠØ¯ ÙˆØªÙˆØ²ÙŠØ¹ ÙˆØªÙƒØ§Ù…Ù„ Ù…ÙˆØ«ÙˆÙ‚ Ù„Ù„Ù…ÙƒÙˆÙ†Ø§Øª Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ©ØŒ ÙˆØ£Ù†Ø¸Ù…Ø© Ø§Ù„ØªØ­ÙƒÙ… ÙˆØ§Ù„Ø£ØªÙ…ØªØ©ØŒ ÙˆØ£Ø¬Ù‡Ø²Ø© Ø§Ù„Ù‚ÙŠØ§Ø³ Ø§Ù„Ø¯Ù‚ÙŠÙ‚Ø© ÙÙŠ Ø§Ù„Ù…Ù…Ù„ÙƒØ© Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ© ÙˆØ¯ÙˆÙ„ Ø§Ù„Ø®Ù„ÙŠØ¬. ØµÙÙ…Ù… Ù„Ù„Ù…Ù‡Ù†Ø¯Ø³ÙŠÙ† ÙˆÙ…Ø¯Ø±Ø§Ø¡ Ø§Ù„Ù…ØµØ§Ù†Ø¹.",
    hero_cta_browse: "ØªØµÙØ­ Ø§Ù„ÙØ¦Ø§Øª",
    hero_cta_quote: "Ø·Ù„Ø¨ ØªØ³Ø¹ÙŠØ±Ø©",
    tag_ksa: "Ø§Ù„Ø±ÙŠØ§Ø¶ØŒ Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©",
    tag_gcc: "Ø´Ø¨ÙƒØ© ØªÙˆØ²ÙŠØ¹ Ø¯ÙˆÙ„ Ø§Ù„Ø®Ù„ÙŠØ¬",
    sld_grid_infeed: "ØªØºØ°ÙŠØ© Ø§Ù„Ø·Ø§Ù‚Ø© Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©",
    brands_eyebrow: "Ø´Ø±ÙƒØ§Ø¡ Ø§Ù„ØªÙˆØ²ÙŠØ¹ ÙˆØ§Ù„Ø®Ø·ÙˆØ·",
    brands_title: "Ø§Ù„Ø¹Ù„Ø§Ù…Ø§Øª Ø§Ù„ØªØ¬Ø§Ø±ÙŠØ© Ø§Ù„Ø¹Ø§Ù„Ù…ÙŠØ© Ø§Ù„ØªÙŠ Ù†Ù…Ø«Ù„Ù‡Ø§",
    products_eyebrow: "Ù…ØµÙÙˆÙØ© Ø§Ù„ÙƒØªØ§Ù„ÙˆØ¬ v3.2",
    products_title: "ÙØ¦Ø§Øª Ø§Ù„ØªÙˆØ±ÙŠØ¯ Ø§Ù„ØµÙ†Ø§Ø¹ÙŠ",
    products_subtitle: "ÙˆØµÙˆÙ„ Ù…Ø¨Ø§Ø´Ø± Ù„Ù„Ù…ÙƒÙˆÙ†Ø§Øª Ø§Ù„Ù‚ÙŠØ§Ø³ÙŠØ© ÙˆØ§Ù„Ù…ØªØ®ØµØµØ© Ù…Ù† Ø§Ù„Ø´Ø±ÙƒØ§Øª Ø§Ù„Ø¹Ø§Ù„Ù…ÙŠØ© Ø§Ù„Ù…ØµÙ†Ø¹Ø©. Ø§Ø®ØªØ± Ø§Ù„ÙØ¦Ø© Ø£Ùˆ Ø§Ø·Ù„Ø¨ ÙˆØ±Ù‚Ø© Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„ÙÙ†ÙŠØ© Ø§Ù„Ù…Ø­Ø¯Ø¯Ø©.",
    card_cta: "Ø·Ù„Ø¨ ØªØ³Ø¹ÙŠØ±Ø©",
    cat_title_1: "Ø§Ù„Ø£ØªÙ…ØªØ© ÙˆØ£Ù†Ø¸Ù…Ø© Ø§Ù„ØªØ­ÙƒÙ…",
    cat_desc_1: "Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ø£ØªÙ…ØªØ© Ø§Ù„Ø´Ø§Ù…Ù„Ø© ÙˆØ£Ø¬Ù‡Ø²Ø© Ù…Ø±Ø§Ù‚Ø¨Ø© Ø§Ù„Ø¹Ù…Ù„ÙŠØ§Øª Ø§Ù„ØµÙ†Ø§Ø¹ÙŠØ©.",
    cat_title_3: "Ø§Ù„Ù…ÙƒÙˆÙ†Ø§Øª Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ©",
    cat_desc_3: "Ù…ÙƒÙˆÙ†Ø§Øª Ù„ÙˆØ­Ø§Øª Ø§Ù„ØªØ­ÙƒÙ…ØŒ ÙˆØ­Ø¯Ø§Øª ØªÙˆØ²ÙŠØ¹ Ø§Ù„Ø·Ø§Ù‚Ø©ØŒ ÙˆÙ…Ø±Ø­Ù„Ø§Øª Ø§Ù„Ø³Ù„Ø§Ù…Ø©.",
    cat_title_4: "Ø§Ù„ØªØ­ÙƒÙ… ÙÙŠ Ø¯Ø±Ø¬Ø© Ø§Ù„Ø­Ø±Ø§Ø±Ø©",
    cat_desc_4: "Ø§Ù„Ù…Ø±Ø§Ù‚Ø¨Ø© Ø§Ù„Ø­Ø±Ø§Ø±ÙŠØ© ÙˆØ£Ø¯ÙˆØ§Øª ØªÙ†Ø¸ÙŠÙ… Ø¯Ø±Ø¬Ø§Øª Ø§Ù„Ø­Ø±Ø§Ø±Ø© Ø§Ù„Ø¯Ù‚ÙŠÙ‚Ø©.",
    cat_title_5: "Ø§Ù„Ù…ÙØ§ØªÙŠØ­ Ø§Ù„ØªÙ„Ù‚Ø§Ø¦ÙŠØ© ÙˆØ§Ù„Ù…Ø¤Ø´Ø±Ø§Øª",
    cat_desc_5: "Ø§Ù„Ù…Ø¤Ø´Ø±Ø§Øª Ø§Ù„Ù…Ø±Ø¦ÙŠØ©ØŒ Ø£Ø²Ø±Ø§Ø± Ø§Ù„ØªØ­ÙƒÙ… Ø¨Ø§Ù„Ø¶ØºØ·ØŒ ÙˆØ§Ù„Ù…ÙØ§ØªÙŠØ­ Ø§Ù„Ù…ÙŠÙƒØ§Ù†ÙŠÙƒÙŠØ©.",
    cat_title_6: "Ø§Ù„Ø£Ø¬Ù‡Ø²Ø© ÙˆØ§Ù„Ù‚ÙŠØ§Ø³",
    cat_desc_6: "Ø£Ø¬Ù‡Ø²Ø© Ù‚ÙŠØ§Ø³ Ø§Ù„ØªØ¯ÙÙ‚ØŒ Ø§Ù„Ø¶ØºØ·ØŒ ÙˆØ§Ù„Ù…Ø³ØªÙˆÙ‰ Ø¹Ø§Ù„ÙŠØ© Ø§Ù„Ø¯Ù‚Ø©.",
    cat_title_7: "Ø§Ù„ØµÙ…Ø§Ù…Ø§Øª Ø§Ù„ØµÙ†Ø§Ø¹ÙŠØ©",
    cat_desc_7: "ØµÙ…Ø§Ù…Ø§Øª Ø§Ù„ØªØ­ÙƒÙ… Ø§Ù„Ù„ÙˆÙ„Ø¨ÙŠØ© ÙˆØ§Ù„Ù‡ÙˆØ§Ø¦ÙŠØ© ÙˆØ§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ© Ù„Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø³ÙˆØ§Ø¦Ù„ ÙˆØ§Ù„ØºØ§Ø²Ø§Øª.",
    cat_title_8: "Ø§Ù„Ù…Ø³ØªØ´Ø¹Ø±Ø§Øª",
    cat_desc_8: "Ø£Ø¬Ù‡Ø²Ø© Ø§Ù„Ø§Ø³ØªØ´Ø¹Ø§Ø± Ù„Ù„Ù…Ù‡Ø§Ù… Ø§Ù„Ø´Ø§Ù‚Ø© Ù„Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ù„ØªØºØ°ÙŠØ© Ø§Ù„Ø±Ø§Ø¬Ø¹Ø© Ø§Ù„ØµÙ†Ø§Ø¹ÙŠØ©.",
    cat_title_9: "Ø§Ù„Ø¹ÙˆØ§ÙƒØ³ ÙˆÙ…Ø­Ø±ÙƒØ§Øª VFD",
    cat_desc_9: "Ù…Ø­Ø±ÙƒØ§Øª Ø§Ù„ØªØ±Ø¯Ø¯ Ø§Ù„Ù…ØªØºÙŠØ± ÙˆØ£Ù†Ø¸Ù…Ø© Ø§Ù„Ø³ÙŠØ±ÙÙˆ Ù„Ù„ØªØ­ÙƒÙ… ÙÙŠ Ø§Ù„Ø³Ø±Ø¹Ø©.",
    cat_title_10: "Ø§Ù„Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ù‡ÙˆØ§Ø¦ÙŠØ©",
    cat_desc_10: "Ø§Ù„ØµÙ…Ø§Ù…Ø§Øª ÙˆØ§Ù„Ø£Ø³Ø·ÙˆØ§Ù†Ø§Øª ÙˆÙˆØ­Ø¯Ø§Øª ØªÙˆØ²ÙŠØ¹ Ø§Ù„Ù‡ÙˆØ§Ø¡ Ø§Ù„Ù…Ø¶ØºÙˆØ·.",
    cat_title_11: "Ø§Ù„Ù…ÙƒÙˆÙ†Ø§Øª Ø§Ù„Ù‡ÙˆØ§Ø¦ÙŠØ©",
    cat_desc_11: "Ù…Ø´ØºÙ„Ø§Øª Ø§Ù„Ù‡ÙˆØ§Ø¡ Ø§Ù„Ø¯ÙˆØ§Ø±Ø©ØŒ ÙˆØ§Ù„Ù…Ø¶Ø®Ø§Øª Ø§Ù„Ù‡ÙˆØ§Ø¦ÙŠØ©ØŒ ÙˆØ§Ù„Ù‡Ø²Ø§Ø²Ø§Øª.",
    stat_val_1: "Ù¡Ù¥+",
    stat_lbl_1: "Ø³Ù†ÙˆØ§Øª Ø§Ù„Ø®Ø¨Ø±Ø© ÙˆØ§Ù„ØªØ´ØºÙŠÙ„",
    stat_val_2: "Ù£Ù +",
    stat_lbl_2: "Ø¹Ù„Ø§Ù…Ø© ØªØ¬Ø§Ø±ÙŠØ© Ù…Ù…Ø«Ù„Ø©",
    stat_val_3: "Ù¡Ù  Ø¢Ù„Ø§Ù+",
    stat_lbl_3: "Ù…ÙƒÙˆÙ† Ù…ØªØ§Ø­ ÙÙŠ Ø§Ù„ÙƒØªØ§Ù„ÙˆØ¬",
    stat_val_4: "Ø£Ù‚Ù„ Ù…Ù† Ù¤ Ø³Ø§Ø¹Ø§Øª",
    stat_lbl_4: "Ù…ØªÙˆØ³Ø· Ø§Ù„Ø±Ø¯ Ø¹Ù„Ù‰ Ø·Ù„Ø¨Ø§Øª Ø§Ù„ØªØ³Ø¹ÙŠØ±",
    about_eyebrow: "Ø±Ø§Ø¦Ø¯_Ø§Ù„ØªÙˆØ±ÙŠØ¯Ø§Øª_Ø§Ù„ØµÙ†Ø§Ø¹ÙŠØ©",
    about_title: "Ø³Ø¯ Ø§Ù„ÙØ¬ÙˆØ© ÙÙŠ Ø§Ù„ØªÙˆØ±ÙŠØ¯Ø§Øª Ø§Ù„ØµÙ†Ø§Ø¹ÙŠØ© Ø§Ù„Ø®Ù„ÙŠØ¬ÙŠØ©",
    about_p1: "ØªØ¹Ø¯ Ù…Ø¤Ø³Ø³Ø© ØªÙˆØ±ÙŠØ¯ Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¡ Ø§Ù„ØªØ¬Ø§Ø±ÙŠØ© (CESE) Ù…ÙˆØ²Ø¹Ù‹Ø§ Ø±Ø¦ÙŠØ³ÙŠÙ‹Ø§ Ø³Ø±ÙŠØ¹ Ø§Ù„Ù†Ù…Ùˆ ÙˆÙ…ØªØ®ØµØµÙ‹Ø§ ÙÙŠ Ø£Ù†Ø¸Ù…Ø© Ø§Ù„ØªØ­ÙƒÙ… Ø¨Ø§Ù„Ø£ØªÙ…ØªØ© Ø§Ù„ØµÙ†Ø§Ø¹ÙŠØ© ÙˆØ£Ø¬Ù‡Ø²Ø© Ø§Ù„Ø§Ø³ØªØ´Ø¹Ø§Ø± ÙˆØ§Ù„Ù…ÙƒÙˆÙ†Ø§Øª Ø§Ù„Ù‡ÙˆØ§Ø¦ÙŠØ© ÙˆÙ…Ù†ØªØ¬Ø§Øª Ù†Ù‚Ù„ Ø§Ù„Ø·Ø§Ù‚Ø© ÙÙŠ Ø¬Ù…ÙŠØ¹ Ø£Ù†Ø­Ø§Ø¡ Ø§Ù„Ù…Ù…Ù„ÙƒØ© Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ© ÙˆÙ…Ù†Ø·Ù‚Ø© Ø§Ù„Ø®Ù„ÙŠØ¬ Ø§Ù„Ø¹Ø±Ø¨ÙŠ.",
    about_p2: "Ù†Ø­Ù† Ù†Ø¨Ø³Ø· Ø¹Ù…Ù„ÙŠØ§Øª Ø§Ù„Ø´Ø±Ø§Ø¡ Ù„Ù‚Ø·Ø§Ø¹Ø§Øª Ø§Ù„ØªØµÙ†ÙŠØ¹ØŒ Ø§Ù„Ù…Ø¹Ø§Ù„Ø¬Ø© Ø§Ù„ÙƒÙŠÙ…ÙŠØ§Ø¦ÙŠØ©ØŒ Ù…Ù†Ø´Ø¢Øª Ø§Ù„Ù†ÙØ· ÙˆØ§Ù„ØºØ§Ø²ØŒ ÙˆÙ…Ø±Ø§ÙÙ‚ Ù…Ø¹Ø§Ù„Ø¬Ø© Ø§Ù„Ù…ÙŠØ§Ù‡. Ù…Ù† Ø®Ù„Ø§Ù„ Ø§Ù„Ø­ÙØ§Ø¸ Ø¹Ù„Ù‰ Ø¹Ù„Ø§Ù‚Ø§Øª Ù…Ø¨Ø§Ø´Ø±Ø© Ù…Ø¹ ÙƒØ¨Ø§Ø± Ø§Ù„Ù…ØµÙ†Ø¹ÙŠÙ† Ø§Ù„Ø¹Ø§Ù„Ù…ÙŠÙŠÙ†ØŒ Ù†ÙˆÙØ± Ø¥Ù…Ø¯Ø§Ø¯Ø§Øª Ù‡Ù†Ø¯Ø³ÙŠØ© Ø£ØµÙ„ÙŠØ© Ø°Ø§Øª Ù…ÙˆØ«ÙˆÙ‚ÙŠØ© Ø¹Ø§Ù„ÙŠØ© ÙˆØ¯Ø¹Ù… ÙÙ†ÙŠ Ù…Ø­Ù„ÙŠ Ù‚ÙˆÙŠ.",
    about_sectors_title: "Ø§Ù„Ù‚Ø·Ø§Ø¹Ø§Øª Ø§Ù„ØªÙŠ Ù†Ø¯Ø¹Ù…Ù‡Ø§:",
    sec_1: "Ø§Ù„Ù†ÙØ· ÙˆØ§Ù„ØºØ§Ø²",
    sec_2: "Ø§Ù„ØªØµÙ†ÙŠØ¹",
    sec_3: "Ù…Ø¹Ø§Ù„Ø¬Ø© Ø§Ù„Ù…ÙŠØ§Ù‡",
    sec_4: "Ø§Ù„Ø¨Ù†ÙŠØ© Ø§Ù„ØªØ­ØªÙŠØ© ÙˆØ§Ù„ÙƒÙ‡Ø±ÙˆÙ…ÙŠÙƒØ§Ù†ÙŠÙƒÙŠØ©",
    sec_5: "Ø§Ù„Ù…Ø±Ø§ÙÙ‚ ÙˆØ§Ù„Ø®Ø¯Ù…Ø§Øª Ø§Ù„Ø¹Ø§Ù…Ø©",
    work_eyebrow: "Ø®Ø·_Ø§Ù„Ø¹Ù…Ù„ÙŠØ§Øª_Ø§Ù„ØªØ´ØºÙŠÙ„ÙŠØ©",
    work_title: "Ø³ÙŠØ± Ø§Ù„Ø¹Ù…Ù„ÙŠØ§Øª Ø§Ù„ØªØ´ØºÙŠÙ„ÙŠØ©",
    step_1_title: "Ø§Ù„Ø§Ø³ØªØ´Ø§Ø±Ø© Ø§Ù„ÙÙ†ÙŠØ©",
    step_1_desc: "ØªÙ‚Ø¯ÙŠÙ… Ø§Ù„Ù…ÙˆØ§ØµÙØ§Øª Ø£Ùˆ ÙƒØªØ§Ù„ÙˆØ¬ Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª Ø£Ùˆ Ø§Ù„Ø±Ù…ÙˆØ² Ø§Ù„ÙÙ†ÙŠØ©. ÙŠØ±Ø§Ø¬Ø¹ ÙØ±ÙŠÙ‚Ù†Ø§ Ø§Ù„Ù‡Ù†Ø¯Ø³ÙŠ Ø§Ù„Ù…ØªÙ…ØªÙ„Ùƒ Ù„Ù„Ø®Ø¨Ø±Ø© Ø§Ù„Ù…ØªØ·Ù„Ø¨Ø§Øª Ù„Ø¶Ù…Ø§Ù† ØªÙˆØ§ÙÙ‚Ù‡Ø§ Ø£Ùˆ Ø§Ù„ØªÙˆØµÙŠØ© Ø¨Ø¨Ø¯Ø§Ø¦Ù„ Ù…ÙƒØ§ÙØ¦Ø© ÙÙ†ÙŠÙ‹Ø§.",
    step_2_title: "Ø§Ù„ØªÙˆØ±ÙŠØ¯ Ø§Ù„Ø§Ø³ØªØ±Ø§ØªÙŠØ¬ÙŠ",
    step_2_desc: "Ù†Ø³ØªÙÙŠØ¯ Ù…Ù† Ù‚Ù†ÙˆØ§Øª Ø§Ù„ØªÙˆØ²ÙŠØ¹ Ø§Ù„Ù…Ø¨Ø§Ø´Ø±Ø© Ù„Ù„Ù…ØµØ§Ù†Ø¹ Ù„ØªØ£Ù…ÙŠÙ† Ø£Ø³Ø¹Ø§Ø± ØªÙ†Ø§ÙØ³ÙŠØ©ØŒ ÙˆØ§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ù…ÙˆØ§Ø¹ÙŠØ¯ Ø§Ù„ØªØ³Ù„ÙŠÙ… ÙˆØªØ£ÙƒÙŠØ¯ Ø´Ù‡Ø§Ø¯Ø§Øª Ø§Ù„Ø¶Ù…Ø§Ù† Ø§Ù„Ø£ØµÙ„ÙŠØ©.",
    step_3_title: "Ø§Ù„Ù„ÙˆØ¬Ø³ØªÙŠØ§Øª Ø§Ù„Ø³Ø±ÙŠØ¹Ø©",
    step_3_desc: "ÙŠØªÙ… ØªØ¬Ù…ÙŠØ¹ Ø§Ù„Ù…ÙˆØ§Ø¯ ÙˆØ´Ø­Ù†Ù‡Ø§ ØªØ­Øª Ø±Ù‚Ø§Ø¨Ø© ØµØ§Ø±Ù…Ø© Ø¹Ù„Ù‰ Ø§Ù„Ø¬ÙˆØ¯Ø© Ù…Ø¨Ø§Ø´Ø±Ø© Ø¥Ù„Ù‰ Ù…ÙˆÙ‚Ø¹ Ù…ØµÙ†Ø¹Ùƒ Ø£Ùˆ Ù…Ø³ØªÙˆØ¯Ø¹Ùƒ ÙÙŠ Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ© Ø£Ùˆ Ø§Ù„Ø®Ù„ÙŠØ¬ Ù…Ø¹ ÙƒØ§ÙØ© Ø§Ù„Ù…Ø³ØªÙ†Ø¯Ø§Øª ÙˆØ§Ù„Ø´Ù‡Ø§Ø¯Ø§Øª.",

    contact_eyebrow: "Ù‚Ù†Ø§Ø©_Ø§Ù„Ø§Ø³ØªÙØ³Ø§Ø±Ø§Øª_ÙˆØ·Ù„Ø¨Ø§Øª_Ø§Ù„Ø£Ø³Ø¹Ø§Ø±",
    contact_title: "Ø¨Ø¯Ø¡ Ø¹Ù…Ù„ÙŠØ© Ø§Ù„Ø´Ø±Ø§Ø¡",
    contact_desc: "Ø·Ù„Ø¨ Ø£Ø³Ø¹Ø§Ø±ØŒ ÙƒØªØ§Ù„ÙˆØ¬Ø§Øª ÙÙ†ÙŠØ©ØŒ Ø£Ùˆ Ø¬Ø¯ÙˆÙ„Ø© Ù…Ø±Ø§Ø¬Ø¹Ø§Øª Ø§Ø³ØªØ´Ø§Ø±ÙŠØ©. Ù…ØªÙˆØ³Ø· ÙˆÙ‚Øª Ø§Ù„Ø§Ø³ØªØ¬Ø§Ø¨Ø© Ù„Ø¯ÙŠÙ†Ø§ Ø£Ù‚Ù„ Ù…Ù† Ù¤ Ø³Ø§Ø¹Ø§Øª Ø¹Ù…Ù„.",
    contact_addr: "Ø§Ù„Ù…Ù…Ù„ÙƒØ© Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©\nØ§Ù„Ø±ÙŠØ§Ø¶\nØ­ÙŠ Ø§Ù„Ø³Ù„Ø§Ù…\nRQSA 6843",
    form_title: "Ø·Ù„Ø¨ ØªØ³Ø¹ÙŠØ± Ø£Ùˆ Ù…Ø±Ø§Ø¬Ø¹Ø© Ù‡Ù†Ø¯Ø³ÙŠØ©",
    form_lbl_name: "Ø§Ù„Ø§Ø³Ù… Ø§Ù„ÙƒØ§Ù…Ù„",
    form_lbl_company: "Ø§Ù„Ø´Ø±ÙƒØ© / Ø§Ù„Ù…Ø¤Ø³Ø³Ø©",
    form_lbl_email: "Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ",
    form_lbl_phone: "Ø±Ù‚Ù… Ø§Ù„Ù‡Ø§ØªÙ",
    form_lbl_subject: "Ù…ÙˆØ¶ÙˆØ¹ Ø§Ù„Ø§Ø³ØªÙØ³Ø§Ø±",
    form_lbl_msg: "ØªÙØ§ØµÙŠÙ„ Ø§Ù„Ø±Ø³Ø§Ù„Ø©",
    opt_1: "Ø·Ù„Ø¨ ØªÙˆØ±ÙŠØ¯ Ø¹Ø§Ù…",
    opt_2: "Ø·Ù„Ø¨ ØªØ³Ø¹ÙŠØ± Ø§Ù„Ø£ØªÙ…ØªØ© ÙˆØ£Ù†Ø¸Ù…Ø© Ø§Ù„ØªØ­ÙƒÙ…",
    opt_3: "Ø·Ù„Ø¨ ØªØ³Ø¹ÙŠØ± Ø§Ù„ØµÙ…Ø§Ù…Ø§Øª ÙˆØ§Ù„Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ù‡ÙˆØ§Ø¦ÙŠØ©",
    opt_4: "Ø·Ù„Ø¨ ØªØ³Ø¹ÙŠØ± Ø§Ù„Ù…Ø³ØªØ´Ø¹Ø±Ø§Øª ÙˆØ§Ù„Ø£Ø¬Ù‡Ø²Ø© Ø§Ù„Ø¯Ù‚ÙŠÙ‚Ø©",
    opt_5: "Ø§Ø³ØªØ´Ø§Ø±Ø© Ù‡Ù†Ø¯Ø³ÙŠØ©",
    opt_6: "ØªØ¬Ù…ÙŠØ¹ Ù„ÙˆØ­Ø© ØªØ­ÙƒÙ… Ù…Ø®ØµØµØ©",
    form_submit_btn: "Ø¥Ø±Ø³Ø§Ù„ Ø§Ù„Ø·Ù„Ø¨",
    footer_desc: "Ù…ÙˆØ²Ø¹ Ù…Ø¹ØªÙ…Ø¯ Ù„Ù„Ø£ØªÙ…ØªØ© Ø§Ù„ØµÙ†Ø§Ø¹ÙŠØ© ÙˆØ§Ù„Ø£Ø¬Ù‡Ø²Ø© Ø§Ù„Ø¯Ù‚ÙŠÙ‚Ø©. ØªÙˆØ±ÙŠØ¯ Ø¬ÙˆØ¯Ø© Ù…Ø¹ØªÙ…Ø¯ØŒ Ø§Ø³ØªØ¬Ø§Ø¨Ø© Ø³Ø±ÙŠØ¹Ø©ØŒ ÙˆØªÙƒØ§Ù…Ù„ ÙÙ†ÙŠ Ù„ØªØµÙ…ÙŠÙ… Ø§Ù„Ø£Ù†Ø¸Ù…Ø© Ù„Ø®Ø¯Ù…Ø© Ù‚Ø·Ø§Ø¹Ø§Øª Ø§Ù„ØµÙ†Ø§Ø¹Ø© ÙÙŠ Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ© ÙˆØ§Ù„Ø®Ù„ÙŠØ¬.",
    footer_nav_title: "Ø§Ù„Ø±ÙˆØ§Ø¨Ø· Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©",
    footer_brands_title: "Ø£Ø¨Ø±Ø² Ø§Ù„Ø¹Ù„Ø§Ù…Ø§Øª Ø§Ù„ØªØ¬Ø§Ø±ÙŠØ©",
    footer_legal_title: "Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„Ù…Ø¤Ø³Ø³Ø©",
    footer_privacy: "Ø³ÙŠØ§Ø³Ø© Ø§Ù„Ø®ØµÙˆØµÙŠØ©",
    footer_terms: "Ø´Ø±ÙˆØ· Ø§Ù„ØªÙˆØ±ÙŠØ¯",
    form_success: "Ø´ÙƒØ±Ø§Ù‹ Ù„Ùƒ. ØªÙ… ØªØ³Ø¬ÙŠÙ„ Ø±Ù…Ø² Ø·Ù„Ø¨ Ø§Ù„ØªØ³Ø¹ÙŠØ±Ø© Ø§Ù„Ø®Ø§Øµ Ø¨Ùƒ [RFQ-%ID%] Ø¨Ù†Ø¬Ø§Ø­. Ø³ÙŠÙ‚ÙˆÙ… Ù…Ù‡Ù†Ø¯Ø³Ùˆ Ø§Ù„ØªÙˆØ±ÙŠØ¯ Ù„Ø¯ÙŠÙ†Ø§ Ø¨Ø§Ù„Ø±Ø¯ Ø¹Ù„ÙŠÙƒ ÙÙŠ ØºØ¶ÙˆÙ† Ù¤ Ø³Ø§Ø¹Ø§Øª.",
    form_error: "ÙØ´Ù„ Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† ØµØ­Ø© Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª. ÙŠØ±Ø¬Ù‰ Ø§Ù„ØªØ£ÙƒØ¯ Ù…Ù† Ù…Ù„Ø¡ Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø­Ù‚ÙˆÙ„ Ø§Ù„Ù…Ø·Ù„ÙˆØ¨Ø© Ø¨Ø´ÙƒÙ„ ØµØ­ÙŠØ­.",
    modal_specs_header: "Ø§Ù„Ù…ÙˆØ§ØµÙØ§Øª Ø§Ù„ÙÙ†ÙŠØ©",
    modal_brands_header: "Ø§Ù„Ø¹Ù„Ø§Ù…Ø§Øª Ø§Ù„ØªØ¬Ø§Ø±ÙŠØ© Ø§Ù„Ù…ÙˆÙØ±Ø©",
    modal_cta_btn: "Ø·Ù„Ø¨ ØªØ³Ø¹ÙŠØ±Ø© Ù„Ù„Ù…Ù†ØªØ¬",
    privacy_title: "Ø³ÙŠØ§Ø³Ø© Ø§Ù„Ø®ØµÙˆØµÙŠØ©",
    privacy_p1: "ØªØ­ÙƒÙ… Ø³ÙŠØ§Ø³Ø© Ø§Ù„Ø®ØµÙˆØµÙŠØ© Ù‡Ø°Ù‡ Ø§Ù„Ø·Ø±ÙŠÙ‚Ø© Ø§Ù„ØªÙŠ ØªØ¬Ù…Ø¹ Ø¨Ù‡Ø§ Ù…Ø¤Ø³Ø³Ø© ØªÙˆØ±ÙŠØ¯ Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¡ Ø§Ù„ØªØ¬Ø§Ø±ÙŠØ© (CESE) Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„ØªÙŠ ÙŠØªÙ… Ø¬Ù…Ø¹Ù‡Ø§ Ù…Ù† Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ† ÙˆØªØ³ØªØ®Ø¯Ù…Ù‡Ø§ ÙˆØªØ­Ø§ÙØ¸ Ø¹Ù„ÙŠÙ‡Ø§ ÙˆØªÙØµØ­ Ø¹Ù†Ù‡Ø§ Ù„Ù…ÙˆÙ‚Ø¹ cese.in.",
    privacy_h1: "Ù¡. Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„ØªÙŠ Ù†Ø¬Ù…Ø¹Ù‡Ø§",
    privacy_p2: "Ù‚Ø¯ Ù†Ø¬Ù…Ø¹ Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø´Ø®ØµÙŠØ© Ù…Ù† Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ† Ø¨Ø·Ø±Ù‚ Ù…Ø®ØªÙ„ÙØ©ØŒ Ø¨Ù…Ø§ ÙÙŠ Ø°Ù„ÙƒØŒ Ø¹Ù„Ù‰ Ø³Ø¨ÙŠÙ„ Ø§Ù„Ù…Ø«Ø§Ù„ Ù„Ø§ Ø§Ù„Ø­ØµØ±ØŒ Ø¹Ù†Ø¯ Ø²ÙŠØ§Ø±Ø© Ù…ÙˆÙ‚Ø¹Ù†Ø§ØŒ ÙˆÙ…Ù„Ø¡ Ù†Ù…ÙˆØ°Ø¬ Ø·Ù„Ø¨ Ø§Ù„ØªØ³Ø¹ÙŠØ± (RFQ)ØŒ ÙˆØ¨Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· Ø¨Ø§Ù„Ø£Ù†Ø´Ø·Ø© Ø£Ùˆ Ø§Ù„Ø®Ø¯Ù…Ø§Øª Ø£Ùˆ Ø§Ù„Ù…ÙŠØ²Ø§Øª Ø£Ùˆ Ø§Ù„Ù…ÙˆØ§Ø±Ø¯ Ø§Ù„Ø£Ø®Ø±Ù‰ Ø§Ù„ØªÙŠ Ù†ÙˆÙØ±Ù‡Ø§ Ø¹Ù„Ù‰ Ù…ÙˆÙ‚Ø¹Ù†Ø§. Ù‚Ø¯ ÙŠÙØ·Ù„Ø¨ Ù…Ù† Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ†ØŒ Ø­Ø³Ø¨ Ø§Ù„Ø§Ù‚ØªØ¶Ø§Ø¡ØŒ Ø§Ù„Ø§Ø³Ù… ÙˆØ¹Ù†ÙˆØ§Ù† Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ ÙˆØ§Ø³Ù… Ø§Ù„Ø´Ø±ÙƒØ© ÙˆØ±Ù‚Ù… Ø§Ù„Ù‡Ø§ØªÙ.",
    privacy_h2: "Ù¢. ÙƒÙŠÙ Ù†Ø³ØªØ®Ø¯Ù… Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„ØªÙŠ ØªÙ… Ø¬Ù…Ø¹Ù‡Ø§",
    privacy_p3: "ØªØ¬Ù…Ø¹ Ù…Ø¤Ø³Ø³Ø© ØªÙˆØ±ÙŠØ¯ Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¡ Ø§Ù„ØªØ¬Ø§Ø±ÙŠØ© (CESE) Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ† Ø§Ù„Ø´Ø®ØµÙŠØ© ÙˆØªØ³ØªØ®Ø¯Ù…Ù‡Ø§ Ù„Ù„Ø£ØºØ±Ø§Ø¶ Ø§Ù„ØªØ§Ù„ÙŠØ©:",
    privacy_p3_li1: "Ù„Ù…Ø¹Ø§Ù„Ø¬Ø© Ø·Ù„Ø¨Ø§Øª Ø§Ù„ØªØ³Ø¹ÙŠØ± ÙˆØ§Ù„Ø§Ø³ØªØ¬Ø§Ø¨Ø© Ù„Ù‡Ø§ (RFQs).",
    privacy_p3_li2: "Ù„ØªØ­Ø³ÙŠÙ† Ø®Ø¯Ù…Ø© Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡ ÙˆØ§Ø­ØªÙŠØ§Ø¬Ø§Øª Ø§Ù„Ø¯Ø¹Ù… Ø§Ù„ÙÙ†ÙŠ.",
    privacy_p3_li3: "Ù„Ø¥Ø±Ø³Ø§Ù„ Ø±Ø³Ø§Ø¦Ù„ Ø¨Ø±ÙŠØ¯ Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ Ø¯ÙˆØ±ÙŠØ© Ø¨Ø´Ø£Ù† Ø­Ø§Ù„Ø© Ø§Ù„Ø·Ù„Ø¨ Ø£Ùˆ Ø§Ù„ØªØ­Ø¯ÙŠØ«Ø§Øª Ø§Ù„ÙÙ†ÙŠØ© Ø£Ùˆ Ø§Ù„Ø§Ø³ØªØ´Ø§Ø±Ø§Øª Ø§Ù„Ù‡Ù†Ø¯Ø³ÙŠØ©.",
    privacy_h3: "Ù£. ÙƒÙŠÙ Ù†Ø­Ù…ÙŠ Ù…Ø¹Ù„ÙˆÙ…Ø§ØªÙƒ",
    privacy_p4: "Ù†Ø¹ØªÙ…Ø¯ Ù…Ù…Ø§Ø±Ø³Ø§Øª Ù…Ù†Ø§Ø³Ø¨Ø© Ù„Ø¬Ù…Ø¹ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª ÙˆØªØ®Ø²ÙŠÙ†Ù‡Ø§ ÙˆÙ…Ø¹Ø§Ù„Ø¬ØªÙ‡Ø§ ÙˆØªØ¯Ø§Ø¨ÙŠØ± Ø£Ù…Ù†ÙŠØ© Ù„Ø­Ù…Ø§ÙŠØ© Ù…Ø¹Ù„ÙˆÙ…Ø§ØªÙƒ Ø§Ù„Ø´Ø®ØµÙŠØ© ÙˆØ§Ø³Ù… Ø´Ø±ÙƒØªÙƒ ÙˆØ§Ù„Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„Ù…Ø®Ø²Ù†Ø© Ø¹Ù„Ù‰ Ù…ÙˆÙ‚Ø¹Ù†Ø§ Ù…Ù† Ø§Ù„ÙˆØµÙˆÙ„ ØºÙŠØ± Ø§Ù„Ù…ØµØ±Ø­ Ø¨Ù‡ Ø£Ùˆ Ø§Ù„ØªØ¹Ø¯ÙŠÙ„ Ø£Ùˆ Ø§Ù„Ø¥ÙØµØ§Ø­ Ø£Ùˆ Ø§Ù„Ø¥ØªÙ„Ø§Ù.",
    privacy_h4: "Ù¤. Ù…Ø´Ø§Ø±ÙƒØ© Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„Ø´Ø®ØµÙŠØ©",
    privacy_p5: "Ù†Ø­Ù† Ù„Ø§ Ù†Ø¨ÙŠØ¹ Ø£Ùˆ Ù†ØªØ§Ø¬Ø± Ø£Ùˆ Ù†Ø¤Ø¬Ø± Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø´Ø®ØµÙŠØ© Ù„Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ† Ù„Ù„Ø¢Ø®Ø±ÙŠÙ†. Ù‚Ø¯ Ù†Ø´Ø§Ø±Ùƒ Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø¯ÙŠÙ…ÙˆØºØ±Ø§ÙÙŠØ© Ù…Ø¬Ù…Ø¹Ø© Ø¹Ø§Ù…Ø© ØºÙŠØ± Ù…Ø±ØªØ¨Ø·Ø© Ø¨Ø£ÙŠ Ù…Ø¹Ù„ÙˆÙ…Ø§Øª ØªØ¹Ø±ÙŠÙ Ø´Ø®ØµÙŠØ© ØªØªØ¹Ù„Ù‚ Ø¨Ø§Ù„Ø²ÙˆØ§Ø± ÙˆØ§Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ† Ù…Ø¹ Ø´Ø±ÙƒØ§Ø¦Ù†Ø§ Ø§Ù„ØªØ¬Ø§Ø±ÙŠÙŠÙ† Ø§Ù„Ù…ÙˆØ«ÙˆÙ‚ÙŠÙ† ÙˆØ§Ù„Ø´Ø±ÙƒØ§Øª Ø§Ù„ØªØ§Ø¨Ø¹Ø© Ø§Ù„Ù…ÙˆØ«ÙˆÙ‚Ø© ÙˆØ§Ù„Ù…Ø¹Ù„Ù†ÙŠÙ† Ù„Ù„Ø£ØºØ±Ø§Ø¶ Ø§Ù„Ù…ÙˆØ¶Ø­Ø© Ø£Ø¹Ù„Ø§Ù‡."
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
    langLabel.textContent = 'Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©';
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

  if (nameInput) nameInput.placeholder = currentLang === 'ar' ? 'Ø§Ù„Ø§Ø³Ù… Ø§Ù„Ø«Ù†Ø§Ø¦ÙŠ' : 'John Doe';
  if (companyInput) companyInput.placeholder = currentLang === 'ar' ? 'Ø§Ø³Ù… Ø§Ù„Ù…ØµÙ†Ø¹ Ø£Ùˆ Ø§Ù„Ù…Ù‚Ø§ÙˆÙ„' : 'Industrial Corp Ltd';
  if (emailInput) emailInput.placeholder = currentLang === 'ar' ? 'procurement@company.com' : 'procurement@company.com';
  if (phoneInput) phoneInput.placeholder = currentLang === 'ar' ? '+966 50 000 0000' : '+966 50 000 0000';
  if (messageInput) messageInput.placeholder = currentLang === 'ar' ? 'ÙŠØ±Ø¬Ù‰ ØªÙ‚Ø¯ÙŠÙ… ØªÙØ§ØµÙŠÙ„ Ø§Ù„Ù…Ø´Ø±ÙˆØ¹ØŒ Ø±Ù…ÙˆØ² Ø§Ù„Ù‚Ø·Ø¹ Ø§Ù„Ù…Ø·Ù„ÙˆØ¨Ø©ØŒ Ø£Ùˆ Ù…ÙˆØ§ØµÙØ§Øª Ø§Ù„Ø¹Ø±Ø¶...' : 'Provide details, list part numbers, brands, or describe your system requirements...';
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
      ar: { title: 'Ø¹Ù‚Ø¯Ø© Ù Ù¡: Ø§Ù„Ø£ØªÙ…ØªØ© ÙˆØ£Ù†Ø¸Ù…Ø© Ø§Ù„ØªØ­ÙƒÙ…', desc: 'Ø´Ø§Ø´Ø§Øª HMIØŒ ÙˆØ­Ø¯Ø§Øª PLCØŒ Ù…Ø´ØºÙ„Ø§Øª Ø§Ù„Ø­Ø±ÙƒØ© ÙˆØ§Ù„Ø¨Ø±Ø§Ù…Ø¬. Ø§Ø¶ØºØ· Ù„Ù„Ø§Ù†ØªÙ‚Ø§Ù„.' }
    },
    'node-electrical': {
      en: { title: 'Node 03: Electrical Panels', desc: 'Panel meters, encoders, SSR switches, IO-Link. Click to navigate.' },
      ar: { title: 'Ø¹Ù‚Ø¯Ø© Ù Ù£: Ø§Ù„Ù„ÙˆØ­Ø§Øª Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ©', desc: 'Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ù„ÙˆØ­Ø§ØªØŒ Ø§Ù„Ù…Ø´ÙØ±Ø§Øª Ø§Ù„Ø¯ÙˆØ§Ø±Ø©ØŒ Ù…Ø±Ø­Ù„Ø§Øª Ø§Ù„Ø­Ø§Ù„Ø© Ø§Ù„ØµÙ„Ø¨Ø©. Ø§Ø¶ØºØ· Ù„Ù„Ø§Ù†ØªÙ‚Ø§Ù„.' }
    },
    'node-sensors': {
      en: { title: 'Node 04: Sensors & Signals', desc: 'Proximity detectors, distance lasers, area curatins. Click to navigate.' },
      ar: { title: 'Ø¹Ù‚Ø¯Ø© Ù Ù¤: Ø§Ù„Ù…Ø³ØªØ´Ø¹Ø±Ø§Øª ÙˆØ§Ù„Ø¥Ø´Ø§Ø±Ø§Øª', desc: 'Ø­Ø³Ø§Ø³Ø§Øª Ø§Ù„ØªÙ‚Ø§Ø±Ø¨ØŒ Ù„ÙŠØ²Ø± Ù‚ÙŠØ§Ø³ Ø§Ù„Ù…Ø³Ø§ÙØ§ØªØŒ Ø³ØªØ§Ø¦Ø± Ø§Ù„Ø³Ù„Ø§Ù…Ø©. Ø§Ø¶ØºØ· Ù„Ù„Ø§Ù†ØªÙ‚Ø§Ù„.' }
    },
    'node-valves': {
      en: { title: 'Node 05: Industrial Valves', desc: 'Butterfly, ball, gate, knife gate, solenoid, and piloted air valves. Click to navigate.' },
      ar: { title: 'Ø¹Ù‚Ø¯Ø© Ù Ù¥: Ø§Ù„ØµÙ…Ø§Ù…Ø§Øª Ø§Ù„ØµÙ†Ø§Ø¹ÙŠØ©', desc: 'ØµÙ…Ø§Ù…Ø§Øª Ø§Ù„ÙØ±Ø§Ø´Ø© ÙˆØ§Ù„ÙƒØ±Ø© ÙˆØ§Ù„Ø¨ÙˆØ§Ø¨Ø© ÙˆØ§Ù„Ø³ÙƒÙŠÙ† ÙˆØ§Ù„Ù…Ù„Ù Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠ. Ø§Ø¶ØºØ· Ù„Ù„Ø§Ù†ØªÙ‚Ø§Ù„.' }
    },
    'node-pneumatics': {
      en: { title: 'Node 06: Pneumatics / VFD', desc: 'Piston cylinders, air preparation FRL, inverters. Click to navigate.' },
      ar: { title: 'Ø¹Ù‚Ø¯Ø© Ù Ù¦: Ø§Ù„Ù…ÙƒÙˆÙ†Ø§Øª Ø§Ù„Ù‡ÙˆØ§Ø¦ÙŠØ© ÙˆÙ…ØºÙŠØ± Ø§Ù„ØªØ±Ø¯Ø¯', desc: 'Ø§Ù„Ø£Ø³Ø·ÙˆØ§Ù†Ø§Øª Ø§Ù„Ù‡ÙˆØ§Ø¦ÙŠØ©ØŒ ÙˆØ­Ø¯Ø§Øª FRLØŒ Ù…Ø­Ø±ÙƒØ§Øª VFD Ø§Ù„Ù…ØºÙŠØ± Ù„Ù„Ø³Ø±Ø¹Ø©. Ø§Ø¶ØºØ· Ù„Ù„Ø§Ù†ØªÙ‚Ø§Ù„.' }
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

    var emailInput = document.getElementById('rfq-email');
    if (emailInput && !validateEmail(emailInput.value)) {
      showFormMessage(translations[currentLang].form_error, 'error');
      emailInput.focus();
      return;
    }

    submitBtn.disabled = true;
    btnText.classList.add('hidden');
    spinner.classList.remove('hidden');

    var rfqId = Math.floor(100000 + Math.random() * 900000);
    var templateParams = {
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
        var msg = translations[currentLang].form_success.replace('%ID%', rfqId);
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
  var alertBox = document.getElementById('form-alert');
  if (!alertBox) return;
  alertBox.textContent = message;
  alertBox.className = 'form-alert ' + type;
}

function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
      title: "Ø£Ø¬Ù‡Ø²Ø© Ø§Ù„ØªØ­ÙƒÙ… Ø§Ù„Ù…Ù†Ø·Ù‚ÙŠ Ø§Ù„Ù‚Ø§Ø¨Ù„Ø© Ù„Ù„Ø¨Ø±Ù…Ø¬Ø© (PLC)",
      desc: "ÙƒÙ…Ø¨ÙŠÙˆØªØ±Ø§Øª Ø±Ù‚Ù…ÙŠØ© ØµÙ†Ø§Ø¹ÙŠØ© Ù…ØµÙ…Ù…Ø© Ù„Ù„ØªØ­ÙƒÙ… ÙˆØ£ØªÙ…ØªØ© Ø¹Ù…Ù„ÙŠØ§Øª Ø§Ù„ØªØµÙ†ÙŠØ¹ØŒ ÙˆØ®Ø·ÙˆØ· Ø§Ù„ØªØ¬Ù…ÙŠØ¹ØŒ ÙˆØ§Ù„Ø£Ø¬Ù‡Ø²Ø© Ø§Ù„Ø±ÙˆØ¨ÙˆØªÙŠØ©ØŒ ÙˆØ§Ù„Ø¢Ù„Ø§Øª Ø§Ù„Ø«Ù‚ÙŠÙ„Ø©.",
      specs: [
        "Ù„ØºØ§Øª Ø¨Ø±Ù…Ø¬Ø© Ø§Ù„Ù…Ù†Ø·Ù‚: Ù…Ø®Ø·Ø· Ø§Ù„Ø³Ù„Ù… (LD)ØŒ Ù…Ø®Ø·Ø· ÙƒØªÙ„ Ø§Ù„ÙˆØ¸Ø§Ø¦Ù (FBD)ØŒ Ø§Ù„Ù†Øµ Ø§Ù„Ù…Ù†Ø¸Ù… (ST)",
        "Ù…Ø¯Ø®Ù„Ø§Øª Ø¹Ø§Ù„ÙŠØ© Ø§Ù„Ø³Ø±Ø¹Ø© ÙˆÙ…Ø®Ø±Ø¬Ø§Øª Ù†Ø¨Ø¶ÙŠØ© Ù…Ø¯Ù…Ø¬Ø©",
        "Ø¨Ø±ÙˆØªÙˆÙƒÙˆÙ„Ø§Øª Ø§Ù„Ø§ØªØµØ§Ù„: PROFINETØŒ Modbus TCPØŒ EtherCATØŒ Ethernet/IP",
        "ØªÙƒÙˆÙŠÙ†Ø§Øª Ø§Ù„Ø¥Ø¯Ø®Ø§Ù„/Ø§Ù„Ø¥Ø®Ø±Ø§Ø¬ Ø§Ù„Ù‚Ø§Ø¨Ù„Ø© Ù„Ù„ØªÙˆØ³ÙŠØ¹ Ù…Ø¹ ÙˆØ­Ø¯Ø§Øª Ø§Ù„Ø³Ù„Ø§Ù…Ø©"
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
      title: "ÙˆØ§Ø¬Ù‡Ø§Øª Ø§Ù„Ø¥Ù†Ø³Ø§Ù† ÙˆØ§Ù„Ø¢Ù„Ø© (HMI)",
      desc: "Ø´Ø§Ø´Ø§Øª Ù„Ù…Ø³ ÙˆØ£Ø·Ø±Ø§Ù Ø¹Ø±Ø¶ Ù…ØªÙ…ÙŠØ²Ø© ØªØ±Ø¨Ø· Ø§Ù„Ù…Ø´ØºÙ„ÙŠÙ† Ø¨Ø£Ø¬Ù‡Ø²Ø© PLC ÙˆØ´Ø¨ÙƒØ§Øª Ø§Ù„ØªØ­ÙƒÙ…ØŒ ÙˆØªÙˆÙØ± ØªØ´Ø®ÙŠØµØ§Øª ÙÙˆØ±ÙŠØ© ÙˆØ£Ø²Ø±Ø§Ø± ØªØ­ÙƒÙ… ÙˆØ±Ø³ÙˆÙ… Ø¨ÙŠØ§Ù†ÙŠØ© ØªÙØ§Ø¹Ù„ÙŠØ©.",
      specs: [
        "Ø£Ø­Ø¬Ø§Ù… Ø§Ù„Ø´Ø§Ø´Ø§Øª: Ø´Ø§Ø´Ø§Øª TFT Ø¹Ø±ÙŠØ¶Ø© Ù…Ù† Ù¤.Ù£ Ø¥Ù„Ù‰ Ù¢Ù¡.Ù¥ Ø¨ÙˆØµØ©",
        "Ù…ØªØ§Ù†Ø© Ø¹Ø§Ù„ÙŠØ© Ù…Ø¹ Ø­Ù…Ø§ÙŠØ© Ø§Ù„Ù„ÙˆØ­Ø© Ø§Ù„Ø£Ù…Ø§Ù…ÙŠØ© Ø¨Ù…Ø¹ÙŠØ§Ø± IP66",
        "ÙŠØ¯Ø¹Ù… Ø¥ÙŠÙ…Ø§Ø¡Ø§Øª Ø§Ù„Ù„Ù…Ø³ Ø§Ù„Ù…ØªØ¹Ø¯Ø¯ ÙˆØ§Ù„Ù…Ø±Ø§Ù‚Ø¨Ø© Ø¹Ù† Ø¨Ø¹Ø¯ Ø¹Ø¨Ø± VNC / Ø®Ø§Ø¯Ù… Ø§Ù„ÙˆÙŠØ¨",
        "Ø´Ø§Ø´Ø§Øª Ø±Ø³ÙˆÙ…ÙŠØ© Ù…ØªØ¬Ù‡Ø© Ù†Ø§Ø¨Ø¶Ø© Ø¨Ø§Ù„Ø­ÙŠØ§Ø© Ù…Ø¹ ØªØ³Ø¬ÙŠÙ„ ØªØ§Ø±ÙŠØ®ÙŠ Ù„Ù„Ø¥Ù†Ø°Ø§Ø±Ø§Øª"
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
      title: "Ù…Ø­Ø±ÙƒØ§Øª Ø§Ù„ØªØ±Ø¯Ø¯ Ø§Ù„Ù…ØªØºÙŠØ± (VFD / Ø§Ù„Ø¹ÙˆØ§ÙƒØ³)",
      desc: "Ø£Ø¬Ù‡Ø²Ø© ØªØ­ÙƒÙ… Ù…ØªÙ‚Ø¯Ù…Ø© ÙÙŠ Ø³Ø±Ø¹Ø© Ù…Ø­Ø±ÙƒØ§Øª Ø§Ù„ØªÙŠØ§Ø± Ø§Ù„Ù…ØªØ±Ø¯Ø¯ØŒ Ù…Ù…Ø§ ÙŠÙˆÙØ± Ø§Ù„Ø·Ø§Ù‚Ø© Ù…Ø¹ ØªØ­Ø³ÙŠÙ† Ø¹Ø²Ù… Ø§Ù„Ø¯ÙˆØ±Ø§Ù† ÙˆØ§Ù„ØªØ­ÙƒÙ… ÙÙŠ Ø§Ù„Ø³Ø±Ø¹Ø© ÙˆÙ…Ø²Ø§Ù…Ù†Ø© Ø§Ù„Ø®Ø·ÙˆØ· ÙÙŠ Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ù†Ù‚Ù„ ÙˆØ§Ù„Ø¶Ø® ÙˆØ­Ø±ÙƒØ§Øª Ø§Ù„Ø¢Ù„Ø§Øª.",
      specs: [
        "Ù†Ø·Ø§Ù‚ Ø§Ù„Ù‚Ø¯Ø±Ø©: Ù…Ù† Ù .Ù¡Ù¨ ÙƒÙŠÙ„ÙˆÙˆØ§Ø· Ø¥Ù„Ù‰ Ø£ÙƒØ«Ø± Ù…Ù† Ù¥Ù Ù  ÙƒÙŠÙ„ÙˆÙˆØ§Ø·",
        "ÙˆØ¸Ø§Ø¦Ù Ø³Ù„Ø§Ù…Ø© Ù…Ø¯Ù…Ø¬Ø© STO (Ø¥ÙŠÙ‚Ø§Ù Ø¹Ø²Ù… Ø§Ù„Ø¯ÙˆØ±Ø§Ù† Ø§Ù„Ø¢Ù…Ù†)",
        "Ù…Ø±Ø´Ø­Ø§Øª Ø®Ø·ÙˆØ· EMC Ø§Ù„Ù…Ø¯Ù…Ø¬Ø© ÙˆØªØ±Ø§Ù†Ø²Ø³ØªÙˆØ±Ø§Øª Ø§Ù„ÙƒØ¨Ø­",
        "ÙˆØ§Ø¬Ù‡Ø§Øª Ø´Ø¨ÙƒØ© Modbus Ùˆ Profibus Ùˆ EtherCAT"
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
      title: "ØµÙ…Ø§Ù…Ø§Øª Ø§Ù„ÙØ±Ø§Ø´Ø© Ø§Ù„ØµÙ†Ø§Ø¹ÙŠØ©",
      desc: "ØµÙ…Ø§Ù…Ø§Øª Ø¯ÙˆØ§Ø±Ø© Ø¨Ø±Ø¨Ø¹ Ø¯ÙˆØ±Ø© Ù…ØµÙ…Ù…Ø© Ù„ØªÙ†Ø¸ÙŠÙ… Ø£Ùˆ Ø¹Ø²Ù„ Ø§Ù„ØªØ¯ÙÙ‚ ÙÙŠ Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ø£Ù†Ø§Ø¨ÙŠØ¨ØŒ ÙˆØºØ§Ù„Ø¨Ù‹Ø§ Ù…Ø§ ØªÙ‚ØªØ±Ù† Ø¨Ù…Ø´ØºÙ„Ø§Øª Ù‡ÙˆØ§Ø¦ÙŠØ© Ù…Ø²Ø¯ÙˆØ¬Ø© Ø§Ù„Ù…ÙØ¹ÙˆÙ„.",
      specs: [
        "Ù…ÙˆØ§Ø¯ Ø§Ù„Ø¬Ø³Ù…: Ø­Ø¯ÙŠØ¯ Ù…Ø·ÙŠÙ„ØŒ ÙÙˆÙ„Ø§Ø° ÙƒØ±Ø¨ÙˆÙ†ÙŠØŒ ÙÙˆÙ„Ø§Ø° Ù…Ù‚Ø§ÙˆÙ… Ù„Ù„ØµØ¯Ø£",
        "Ø§Ù„ØªØ´ØºÙŠÙ„: Ù…Ø´ØºÙ„ Ù‡ÙˆØ§Ø¦ÙŠØŒ Ù…Ø­Ø±Ùƒ ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØŒ Ø£Ùˆ ØªØ±Ø³ ÙŠØ¯ÙˆÙŠ",
        "ÙØ¦Ø§Øª Ø§Ù„Ø¶ØºØ·: PN10ØŒ PN16ØŒ ANSI 150",
        "Ø§Ù„Ø®ØªÙ…: Ø­Ø´ÙˆØ§Øª EPDM Ø£Ùˆ NBR Ø£Ùˆ Viton Ø£Ùˆ Ø­Ø´ÙˆØ§Øª Ù…Ø¹Ø¯Ù†ÙŠØ©"
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
      title: "Ø§Ù„Ù…Ø³ØªØ´Ø¹Ø±Ø§Øª Ø§Ù„Ø³Ø¹ÙˆÙŠØ© Ø§Ù„ØµÙ†Ø§Ø¹ÙŠØ©",
      desc: "Ù…Ø³ØªØ´Ø¹Ø±Ø§Øª ØªÙ‚Ø§Ø±Ø¨ Ù„Ø§ ØªÙ„Ø§Ù…Ø³ÙŠØ© ØªÙƒØªØ´Ù Ø§Ù„Ø£Ø¬Ø³Ø§Ù… Ø§Ù„Ù…Ø¹Ø¯Ù†ÙŠØ© ÙˆØºÙŠØ± Ø§Ù„Ù…Ø¹Ø¯Ù†ÙŠØ© (Ø§Ù„Ø³ÙˆØ§Ø¦Ù„ØŒ Ø§Ù„Ø¨Ù„Ø§Ø³ØªÙŠÙƒØŒ Ø§Ù„Ø­Ø¨ÙˆØ¨) Ø¨Ù†Ø§Ø¡Ù‹ Ø¹Ù„Ù‰ Ø§Ù„ØªØºÙŠØ±Ø§Øª ÙÙŠ Ø§Ù„Ø³Ø¹Ø© Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ©.",
      specs: [
        "Ù…Ø³Ø§ÙØ© Ø§Ù„Ø§Ø³ØªØ´Ø¹Ø§Ø±: Ù…Ù† Ù¢ Ù…Ù„Ù… Ø¥Ù„Ù‰ Ù£Ù  Ù…Ù„Ù…",
        "ØªÙƒÙˆÙŠÙ†Ø§Øª Ø§Ù„Ù…Ø®Ø±Ø¬Ø§Øª: NPN/PNPØŒ Ø§Ø®ØªÙŠØ§Ø± NO/NC",
        "Ø§Ù„Ù‡ÙŠÙƒÙ„: Ù†Ø­Ø§Ø³ Ù…Ø·Ù„ÙŠ Ø¨Ø§Ù„Ù†ÙŠÙƒÙ„ Ø£Ùˆ Ø¨Ù„Ø§Ø³ØªÙŠÙƒ Ø¹Ø§Ù„ÙŠ Ø§Ù„Ø¬ÙˆØ¯Ø©",
        "Ø¯Ø±Ø¬Ø© Ø§Ù„Ø­Ù…Ø§ÙŠØ©: IP67 Ù…Ù‚Ø§ÙˆÙ…Ø© Ø§Ù„ØºØ¨Ø§Ø± ÙˆØ§Ù„Ù…Ø§Ø¡"
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
      title: "Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ù„ÙˆØ­Ø§Øª Ø§Ù„Ø±Ù‚Ù…ÙŠØ©",
      desc: "Ø´Ø§Ø´Ø§Øª Ù‚ÙŠØ§Ø³ Ø±Ù‚Ù…ÙŠØ© Ù…ØµÙ…Ù…Ø© Ù„Ù…Ø±Ø§Ù‚Ø¨Ø© ÙˆÙ‚ÙŠØ§Ø³ Ø§Ù„Ø¬Ù‡Ø¯ØŒ Ø§Ù„ØªÙŠØ§Ø±ØŒ Ø§Ù„ØªØ±Ø¯Ø¯ØŒ Ù…Ø¹Ø§Ù…Ù„ Ø§Ù„Ù‚Ø¯Ø±Ø©ØŒ ÙˆØ§Ù„Ù…Ø¯Ø®Ù„Ø§Øª Ø§Ù„Ù…Ø¨Ø§Ø´Ø±Ø© Ù…Ù† Ø§Ù„Ù…Ø³ØªØ´Ø¹Ø±Ø§Øª Ø§Ù„ØµÙ†Ø§Ø¹ÙŠØ©.",
      specs: [
        "Ø¥Ø´Ø§Ø±Ø§Øª Ø§Ù„Ù…Ø¯Ø®Ù„Ø§Øª: Ø¬Ù‡Ø¯/ØªÙŠØ§Ø± Ù…ØªØ±Ø¯Ø¯ ÙˆÙ…Ø³ØªÙ…Ø±ØŒ Ø§Ù„Ù…Ø²Ø¯ÙˆØ¬Ø§Øª Ø§Ù„Ø­Ø±Ø§Ø±ÙŠØ©ØŒ Ø§Ù„Ù…Ù‚Ø§ÙˆÙ…Ø©",
        "Ø§Ù„Ø´Ø§Ø´Ø©: Ø´Ø§Ø´Ø© LED Ø¹Ø§Ù„ÙŠØ© Ø§Ù„Ø³Ø·ÙˆØ¹ØŒ Ù…ØªØ¹Ø¯Ø¯Ø© Ø§Ù„Ø£Ø±Ù‚Ø§Ù…",
        "Ù…Ø®Ø±Ø¬Ø§Øª Ù…Ù‚Ø§Ø±Ù† Ù…Ø¯Ù…Ø¬Ø© ÙˆØ§ØªØµØ§Ù„ Modbus RTU",
        "Ø¹Ø²Ù„ Ø§Ù„Ù„ÙˆØ­Ø© Ø§Ù„Ø£Ù…Ø§Ù…ÙŠØ© Ù…ØªÙˆØ§ÙÙ‚ Ù…Ø¹ Ù…Ø¹Ø§ÙŠÙŠØ± IP66"
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
      title: "Ù…ØµØ§Ø¯Ø± Ø§Ù„Ø·Ø§Ù‚Ø© Ø°Ø§Øª Ø§Ù„ÙˆØ¶Ø¹ Ø§Ù„ØªØ¨Ø¯ÙŠÙ„Ù‰ (SMPS)",
      desc: "Ù…ØµØ§Ø¯Ø± Ø·Ø§Ù‚Ø© ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ© Ø¹Ø§Ù„ÙŠØ© Ø§Ù„ÙƒÙØ§Ø¡Ø© ØªØ«Ø¨Øª Ø¹Ù„Ù‰ Ø³ÙƒØ© DIN ØªÙˆÙØ± Ø®Ø·ÙˆØ· Ø¬Ù‡Ø¯ Ù…Ø³ØªÙ‚Ø±Ø© Ù¢Ù¤ ÙÙˆÙ„ØªØŒ Ù¡Ù¢ ÙÙˆÙ„ØªØŒ Ø£Ùˆ Ù¥ ÙÙˆÙ„Øª ØªÙŠØ§Ø± Ù…Ø³ØªÙ…Ø± Ù„Ù„Ù…ØªØ­ÙƒÙ…Ø§Øª ÙˆØ§Ù„Ù…Ø³ØªØ´Ø¹Ø±Ø§Øª Ø§Ù„ØµÙ†Ø§Ø¹ÙŠØ©.",
      specs: [
        "Ø¬Ù‡Ø¯ Ø§Ù„Ø¥Ø¯Ø®Ø§Ù„: Ø¹Ø§Ù„Ù…ÙŠ Ù¨Ù¥-Ù¢Ù¦Ù¤ ÙÙˆÙ„Øª ØªÙŠØ§Ø± Ù…ØªØ±Ø¯Ø¯ØŒ Ù¥Ù /Ù¦Ù  Ù‡Ø±ØªØ²",
        "ÙƒÙØ§Ø¡Ø© Ù…Ø®Ø±Ø¬Ø§Øª ØªØµÙ„ Ø¥Ù„Ù‰ Ù©Ù¤Ùª",
        "Ø§Ù„Ø­Ù…Ø§ÙŠØ©: Ø§Ù„ØªÙ…Ø§Ø³ Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØŒ Ø§Ù„ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ø²Ø§Ø¦Ø¯ØŒ Ø§Ù„Ø¬Ù‡Ø¯ Ø§Ù„Ø²Ø§Ø¦Ø¯ØŒ Ø§Ù„Ø­Ø±Ø§Ø±Ø© Ø§Ù„Ø²Ø§Ø¦Ø¯Ø©",
        "ØªØµÙ…ÙŠÙ… ØµÙ†Ø§Ø¹ÙŠ Ù†Ø­ÙŠÙ ÙŠÙˆÙØ± Ù…Ø³Ø§Ø­Ø© ÙÙŠ Ø®Ø²Ø§Ù†Ø© Ø§Ù„ØªØ­ÙƒÙ…"
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
      title: "Ø§Ù„Ù…Ø±Ø­Ù„Ø§Øª Ø§Ù„ØµÙ†Ø§Ø¹ÙŠØ© ÙˆÙ…Ø±Ø­Ù„Ø§Øª Ø§Ù„Ø­Ø§Ù„Ø© Ø§Ù„ØµÙ„Ø¨Ø© (SSR)",
      desc: "Ø£Ø¬Ù‡Ø²Ø© ØªØ­ÙˆÙŠÙ„ ÙƒÙ‡Ø±ÙˆÙ…ØºÙ†Ø§Ø·ÙŠØ³ÙŠØ© ÙˆØ­Ø§Ù„Ø© ØµÙ„Ø¨Ø© Ù…ØµÙ…Ù…Ø© Ù„Ù„ØªØ­ÙƒÙ… ÙÙŠ Ø§Ù„Ø£Ø­Ù…Ø§Ù„ Ø§Ù„Ø«Ù‚ÙŠÙ„Ø©ØŒ ÙˆÙ…Ø´ØºÙ„Ø§Øª Ø§Ù„Ù…Ø­Ø±ÙƒØ§ØªØŒ ÙˆØ¯ÙˆØ§Ø¦Ø± Ø§Ù„Ø¥Ø´Ø§Ø±Ø§Øª Ø§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø© Ù…Ø¹ Ø¹Ø²Ù„ ÙƒÙ„ÙØ§Ù†ÙŠ ÙƒØ§Ù…Ù„.",
      specs: [
        "Ø¬Ù‡Ø¯ Ø§Ù„ØªØ­ÙƒÙ…: Ø®ÙŠØ§Ø±Ø§Øª Ù¢Ù¤ ÙÙˆÙ„Øª Ù…Ø³ØªÙ…Ø±ØŒ Ù¡Ù¡Ù  ÙÙˆÙ„Øª Ù…ØªØ±Ø¯Ø¯ØŒ Ù¢Ù£Ù  ÙÙˆÙ„Øª Ù…ØªØ±Ø¯Ø¯",
        "Ù…Ø±Ø­Ù„Ø§Øª Ø§Ù„Ø­Ø§Ù„Ø© Ø§Ù„ØµÙ„Ø¨Ø© (SSR) Ù…Ø¹ ØªØ¨Ø¯ÙŠÙ„ ØµÙØ±ÙŠ Ù„Ø¹Ù…Ù„ÙŠØ© ØµØ§Ù…ØªØ© Ø¨Ø§Ù„ÙƒØ§Ù…Ù„",
        "Ø¯ÙˆØ±Ø§Øª ØªØ­ÙˆÙŠÙ„ Ø¹Ø§Ù„ÙŠØ© (ØªØµÙ„ Ø¥Ù„Ù‰ Ù¡Ù  Ù…Ù„Ø§ÙŠÙŠÙ† Ø¹Ù…Ù„ÙŠØ©)",
        "ØªØªØ¶Ù…Ù† Ù…Ø¤Ø´Ø± LED ÙˆÙ…Ø²Ù„Ø§Ø¬ Ø§Ø®ØªØ¨Ø§Ø± ÙŠØ¯ÙˆÙŠ"
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
      title: "Ø£Ø¬Ù‡Ø²Ø© Ø§Ù„ØªØ­ÙƒÙ… Ø§Ù„Ø±Ù‚Ù…ÙŠØ© ÙÙŠ Ø¯Ø±Ø¬Ø© Ø§Ù„Ø­Ø±Ø§Ø±Ø©",
      desc: "ÙˆØ­Ø¯Ø§Øª ØªØ­ÙƒÙ… PID Ù…ØµÙ…Ù…Ø© Ù„Ù„Ø­ÙØ§Ø¸ Ø¹Ù„Ù‰ Ø¯Ø±Ø¬Ø§Øª Ø§Ù„Ø­Ø±Ø§Ø±Ø© Ø§Ù„Ù…Ø³ØªÙ‡Ø¯ÙØ© ÙÙŠ Ø§Ù„Ø£ÙØ±Ø§Ù†ØŒ ÙˆØ£Ù†Ø¸Ù…Ø© Ø§Ù„ØªØ¯ÙØ¦Ø©ØŒ ÙˆØ£ÙØ±Ø§Ù† Ø§Ù„ØªØ¬ÙÙŠÙØŒ ÙˆØ­Ù„Ù‚Ø§Øª Ø§Ù„ØªØ¨Ø±ÙŠØ¯ Ø¨Ø¯Ù‚Ø© Ø¹Ø§Ù„ÙŠØ©.",
      specs: [
        "Ø£ÙˆØ¶Ø§Ø¹ Ø§Ù„ØªØ­ÙƒÙ…: Ø¶Ø¨Ø· Ø°Ø§ØªÙŠ Ù„Ù€ PIDØŒ ØªØ´ØºÙŠÙ„/Ø¥ÙŠÙ‚Ø§ÙØŒ ØªØ­ÙƒÙ… Ø¨Ø§Ù„ØªØ¯ÙØ¦Ø© ÙˆØ§Ù„ØªØ¨Ø±ÙŠØ¯",
        "Ø¯Ø¹Ù… Ø§Ù„Ù…Ø¯Ø®Ù„Ø§Øª: Ø§Ù„Ù…Ø²Ø¯ÙˆØ¬Ø§Øª Ø§Ù„Ø­Ø±Ø§Ø±ÙŠØ© K, J, T, R, S ÙˆÙ…Ø³ØªØ´Ø¹Ø±Ø§Øª Pt100",
        "Ø§Ù„Ù…Ø®Ø±Ø¬Ø§Øª: Ù…Ø±Ø­Ù„ØŒ Ø¬Ù‡Ø¯ ØªØ´ØºÙŠÙ„ SSRØŒ Ø£Ùˆ Ø­Ù„Ù‚Ø© ØªÙŠØ§Ø± Ù¤-Ù¢Ù  Ù…Ù„Ù„ÙŠ Ø£Ù…Ø¨ÙŠØ± ØªÙ†Ø§Ø¸Ø±ÙŠØ©",
        "Ø´Ø§Ø´Ø© Ø¹Ø±Ø¶ Ø±Ù‚Ù…ÙŠØ© LED Ø¹Ø§Ù„ÙŠØ© Ø§Ù„Ø¯Ù‚Ø©"
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
      title: "Ø£Ø¨Ø±Ø§Ø¬ Ø§Ù„Ø¥Ø´Ø§Ø±Ø§Øª Ø§Ù„Ø¶ÙˆØ¦ÙŠØ© LED",
      desc: "Ø£Ø¨Ø±Ø§Ø¬ Ø¥Ù†Ø°Ø§Ø± Ù…Ø±Ø¦ÙŠØ© LED Ù…ØªØ¹Ø¯Ø¯Ø© Ø§Ù„Ù…Ø³ØªÙˆÙŠØ§Øª Ù„ØªÙˆØ¶ÙŠØ­ Ø­Ø§Ù„Ø© Ø§Ù„Ø¢Ù„Ø§ØªØŒ Ø§Ù„Ø£Ø¹Ø·Ø§Ù„ØŒ ÙˆØ¸Ø±ÙˆÙ Ø§Ù„ØªØ´ØºÙŠÙ„ Ø§Ù„Ø¹Ø§Ø¯ÙŠØ© Ø¹Ù„Ù‰ Ø®Ø·ÙˆØ· Ø§Ù„ØªØ¬Ù…ÙŠØ¹ Ø§Ù„Ø¢Ù„ÙŠØ©.",
      specs: [
        "Ø§Ù„Ù…Ø±Ø¦ÙŠ: ÙƒØªÙ„ LED Ø¹Ø§Ù„ÙŠØ© Ø§Ù„ÙƒØ«Ø§ÙØ© (Ø£Ø­Ù…Ø±ØŒ Ø¨Ø±ØªÙ‚Ø§Ù„ÙŠØŒ Ø£Ø®Ø¶Ø±ØŒ Ø£Ø²Ø±Ù‚ØŒ Ø£Ø¨ÙŠØ¶)",
        "Ø§Ù„ØµÙˆØªÙŠ: Ø¬Ø±Ø³ Ù…Ø¯Ù…Ø¬ØŒ Ø®Ø±Ø¬ ØµÙˆØª Ø¨Ù‚ÙˆØ© Ù¨Ù¥ Ø¯ÙŠØ³ÙŠØ¨Ù„ Ø¹Ù„Ù‰ Ù…Ø³Ø§ÙØ© Ù…ØªØ± ÙˆØ§Ø­Ø¯",
        "Ø®ÙŠØ§Ø±Ø§Øª Ø§Ù„ØªØ±ÙƒÙŠØ¨: ØªØ±ÙƒÙŠØ¨ Ø¹Ù„Ù‰ Ø¹Ù…ÙˆØ¯ØŒ ØªØ±ÙƒÙŠØ¨ Ù…Ø¨Ø§Ø´Ø± Ø¹Ù„Ù‰ Ø§Ù„Ù‚Ø§Ø¹Ø¯Ø©ØŒ Ø£Ùˆ Ø²Ø§ÙˆÙŠØ© L",
        "Ø¯Ø±Ø¬Ø© Ø§Ù„Ø­Ù…Ø§ÙŠØ©: IP65 Ù…Ù‚Ø§ÙˆÙ…Ø© Ø§Ù„ØºØ¨Ø§Ø± ÙˆØ§Ù„Ù…Ø§Ø¡"
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
      title: "Ø£Ø¬Ù‡Ø²Ø© Ø¥Ø±Ø³Ø§Ù„ Ø§Ù„Ø¶ØºØ· Ø§Ù„ØªÙØ§Ø¶Ù„ÙŠ",
      desc: "Ø£Ø¬Ù‡Ø²Ø© Ø¥Ø±Ø³Ø§Ù„ Ø¶ØºØ· Ø¹Ø§Ù„ÙŠØ© Ø§Ù„Ø¯Ù‚Ø© Ù…ØµÙ…Ù…Ø© Ù„Ù‚ÙŠØ§Ø³ Ø§Ù„Ø¶ØºØ· Ø§Ù„ØªÙØ§Ø¶Ù„ÙŠ ÙˆØ§Ù„Ø¶ØºØ· Ø§Ù„Ù‚ÙŠØ§Ø³ÙŠ ÙˆØ§Ù„Ø¶ØºØ· Ø§Ù„Ù…Ø·Ù„Ù‚ ÙÙŠ Ø§Ù„Ø¹Ù…Ù„ÙŠØ§Øª Ø§Ù„Ø³Ø§Ø¦Ù„Ø© ÙˆØ§Ù„ØºØ§Ø²ÙŠØ© ÙˆØ§Ù„Ø¨Ø®Ø§Ø±ÙŠØ©.",
      specs: [
        "Ù†Ø·Ø§Ù‚ Ø§Ù„Ù‚ÙŠØ§Ø³: Ù .Ù¡ ÙƒÙŠÙ„ÙˆØ¨Ø§Ø³ÙƒØ§Ù„ Ø¥Ù„Ù‰ Ù¡Ù  Ù…ÙŠØºØ§Ø¨Ø§Ø³ÙƒØ§Ù„ Ø¨Ø¯Ù‚Ø© Ø¹Ø§Ù„ÙŠØ© Ù„Ù„ØºØ§ÙŠØ©",
        "Ø¥Ø´Ø§Ø±Ø© Ø§Ù„Ù…Ø®Ø±Ø¬Ø§Øª: Ù¤-Ù¢Ù  Ù…Ù„Ù„ÙŠ Ø£Ù…Ø¨ÙŠØ± Ù…Ø¹ Ø¨Ø±ÙˆØªÙˆÙƒÙˆÙ„ HART Ø§Ù„Ø±Ù‚Ù…ÙŠ",
        "Ù…ÙˆØ§Ø¯ Ø§Ù„Ø­Ø¬Ø§Ø¨ Ø§Ù„Ø­Ø§Ø¬Ø²: ÙÙˆÙ„Ø§Ø° Ù…Ù‚Ø§ÙˆÙ… Ù„Ù„ØµØ¯Ø£ 316LØŒ Ù‡Ø§Ø³ÙŠÙ„ÙˆÙŠ-CØŒ ØªØ§Ù†ØªØ§Ù„ÙˆÙ…",
        "ØºÙ„Ø§Ù Ù…Ù‚Ø§ÙˆÙ… Ù„Ù„Ø§Ù†ÙØ¬Ø§Ø± (Ù…Ø¹ØªÙ…Ø¯ Ù…Ù† ATEX / IECEx)"
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
      title: "ØµÙ…Ø§Ù…Ø§Øª Ø§Ù„Ù…Ù„Ù Ø§Ù„Ù„ÙˆÙ„Ø¨ÙŠ Ù„Ù„ØªØ­ÙƒÙ… ÙÙŠ Ø§Ù„Ø§ØªØ¬Ø§Ù‡",
      desc: "ØµÙ…Ø§Ù…Ø§Øª Ù…Ù„Ù Ù„ÙˆÙ„Ø¨ÙŠ Ù‡ÙˆØ§Ø¦ÙŠØ© Ù…ØµÙ…Ù…Ø© Ù„Ù„ØªØ­ÙƒÙ… ÙÙŠ Ø§ØªØ¬Ø§Ù‡ ÙˆØ³Ø±Ø¹Ø© ØªØ¯ÙÙ‚ Ø§Ù„Ù‡ÙˆØ§Ø¡ Ø§Ù„Ù…Ø¶ØºÙˆØ· ÙÙŠ Ù…Ø´ØºÙ„Ø§Øª Ø§Ù„ØµÙ…Ø§Ù…Ø§Øª Ø§Ù„Ø¢Ù„ÙŠØ© ÙˆØ£Ø³Ø·ÙˆØ§Ù†Ø§Øª Ø§Ù„Ù‡ÙˆØ§Ø¡.",
      specs: [
        "ÙˆØ¸Ø§Ø¦Ù Ø§Ù„ØµÙ…Ø§Ù…: ØªÙƒÙˆÙŠÙ†Ø§Øª Ù£/Ù¢ Ø§ØªØ¬Ø§Ù‡ØŒ Ù¥/Ù¢ Ø§ØªØ¬Ø§Ù‡ØŒ Ù¥/Ù£ Ø§ØªØ¬Ø§Ù‡",
        "Ø¬Ù‡Ø¯ Ø§Ù„Ù…Ù„Ù: Ù¢Ù¤ ÙÙˆÙ„Øª Ù…Ø³ØªÙ…Ø±ØŒ Ù¡Ù¡Ù  ÙÙˆÙ„Øª Ù…ØªØ±Ø¯Ø¯ØŒ Ù¢Ù¢Ù  ÙÙˆÙ„Øª Ù…ØªØ±Ø¯Ø¯",
        "Ø¶ØºØ· Ø§Ù„ØªØ´ØºÙŠÙ„: Ù…Ù† Ù¡.Ù¥ Ø¥Ù„Ù‰ Ù¨ Ø¨Ø§Ø±",
        "Ø²Ø± ØªØ¬Ø§ÙˆØ² ÙŠØ¯ÙˆÙŠ Ù…Ø¯Ù…Ø¬ Ù„Ø¥Ø¬Ø±Ø§Ø¡ Ø§Ù„Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª"
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
      title: "Ø§Ù„Ø£Ø³Ø·ÙˆØ§Ù†Ø§Øª Ø§Ù„Ù‡ÙˆØ§Ø¦ÙŠØ© (Ø¨Ø³ØªÙ†)",
      desc: "Ù…Ø´ØºÙ„Ø§Øª Ù‡ÙˆØ§Ø¦ÙŠØ© Ø®Ø·ÙŠØ© Ù…Ø²Ø¯ÙˆØ¬Ø© Ø§Ù„ÙØ¹Ù„ Ù…ØªÙˆØ§ÙÙ‚Ø© Ù…Ø¹ Ù…Ø¹Ø§ÙŠÙŠØ± ISO ØªÙˆÙØ± Ù‚ÙˆØ© Ø¯ÙØ¹ ÙˆØ­Ø±ÙƒØ© Ù…ÙŠÙƒØ§Ù†ÙŠÙƒÙŠØ© Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„Ù‡ÙˆØ§Ø¡ Ø§Ù„Ù…Ø¶ØºÙˆØ· ÙÙŠ Ø£ØªÙ…ØªØ© Ø®Ø·ÙˆØ· Ø§Ù„Ø¥Ù†ØªØ§Ø¬.",
      specs: [
        "Ø§Ù„ØªÙˆØ§ÙÙ‚ Ø§Ù„Ù‚ÙŠØ§Ø³ÙŠ: ISO 15552, ISO 6431, ISO 6432",
        "Ø£Ù‚Ø·Ø§Ø± Ø§Ù„Ø¨Ø³ØªÙ†: Ù£Ù¢ Ù…Ù„Ù… Ø¥Ù„Ù‰ Ù¡Ù¢Ù¥ Ù…Ù„Ù…Ø› Ø£Ø·ÙˆØ§Ù„ Ø£Ø´ÙˆØ§Ø· Ù…Ø®ØµØµØ©",
        "Ù…ÙƒØ¨Ø³ Ù…ØºÙ†Ø§Ø·ÙŠØ³ÙŠ Ù…Ø¯Ù…Ø¬ Ù„Ø§ÙƒØªØ´Ø§Ù Ø§Ù„Ù…ÙˆÙ‚Ø¹ Ø¹Ø¨Ø± Ø§Ù„Ø­Ø³Ø§Ø³Ø§Øª",
        "ØªØ®Ù…ÙŠØ¯ Ù‡ÙˆØ§Ø¦ÙŠ Ù‚Ø§Ø¨Ù„ Ù„Ù„ØªØ¹Ø¯ÙŠÙ„ Ø¹Ù†Ø¯ Ù†Ù‡Ø§ÙŠØ© Ø§Ù„Ø´ÙˆØ·"
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
      title: "ØµÙ…Ø§Ù…Ø§Øª Ø§Ù„ÙƒØ±Ø© Ø§Ù„ØµÙ†Ø§Ø¹ÙŠØ©",
      desc: "ØµÙ…Ø§Ù…Ø§Øª ÙƒØ±ÙˆÙŠØ© Ù‚ÙˆÙŠØ© Ø«Ù†Ø§Ø¦ÙŠØ© ÙˆØ«Ù„Ø§Ø«ÙŠØ© Ø§Ù„Ø§ØªØ¬Ø§Ù‡Ø§Øª ØªÙˆÙØ± ØªØ­ÙƒÙ…Ù‹Ø§ Ø¨Ø¥ØºÙ„Ø§Ù‚ Ù…Ø­ÙƒÙ… ÙˆØªØ¯ÙÙ‚ Ø¹Ø§Ù„ÙŠ ÙˆØ§Ù†Ø®ÙØ§Ø¶ Ø¶Ø¦ÙŠÙ„ ÙÙŠ Ø§Ù„Ø¶ØºØ· Ù„Ø£Ù†Ø§Ø¨ÙŠØ¨ Ø§Ù„Ù‡ÙˆØ§Ø¡ ÙˆØ§Ù„Ø¨Ø®Ø§Ø± ÙˆØ§Ù„Ø²ÙŠØª ÙˆØ§Ù„Ø³ÙˆØ§Ø¦Ù„.",
      specs: [
        "Ø£Ù†ÙˆØ§Ø¹ Ø§Ù„Ù…Ù†Ø§ÙØ°: ØªØ¬ÙˆÙŠÙ ÙƒØ§Ù…Ù„ØŒ ØªØ¬ÙˆÙŠÙ Ù…Ø®ÙØ¶ØŒ Ù…Ø³Ø§Ø±Ø§Øª ØªØ¯ÙÙ‚ Ù…ØªØ¹Ø¯Ø¯Ø© T/L",
        "Ø§Ù„Ù‡ÙŠÙƒÙ„: ÙÙˆÙ„Ø§Ø° Ù…Ù‚Ø§ÙˆÙ… Ù„Ù„ØµØ¯Ø£ 316ØŒ ÙÙˆÙ„Ø§Ø° ÙƒØ±Ø¨ÙˆÙ†ÙŠØŒ Ù†Ø­Ø§Ø³",
        "Ø§Ù„ØªÙˆØµÙŠÙ„: Ù…Ù„ÙˆÙ„Ø¨ØŒ Ø°Ùˆ Ø´ÙØ© (ÙÙ„Ù†Ø¬Ø©)ØŒ Ø£Ùˆ ÙˆØµÙ„Ø§Øª ØµØ­ÙŠØ©",
        "Ø³Ø¹Ø© Ø§Ù„Ø¶ØºØ· ØªØµÙ„ Ø¥Ù„Ù‰ Ù¡Ù Ù Ù  Ø±Ø·Ù„ Ù„ÙƒÙ„ Ø¨ÙˆØµØ© Ù…Ø±Ø¨Ø¹Ø© (Ù¦Ù© Ø¨Ø§Ø±)"
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
      title: "Ù…Ø­Ø±ÙƒØ§Øª ÙˆØ£Ù†Ø¸Ù…Ø© Ø§Ù„Ø³ÙŠØ±ÙÙˆ Ø§Ù„ØµÙ†Ø§Ø¹ÙŠØ©",
      desc: "Ù…Ø­Ø±ÙƒØ§Øª Ø³ÙŠØ±ÙÙˆ ØªÙŠØ§Ø± Ù…ØªØ±Ø¯Ø¯ ÙˆÙ…ÙƒØ¨Ø±Ø§Øª ØµÙˆØª Ø¹Ø§Ù„ÙŠØ© Ø§Ù„Ø¯Ù‚Ø© ØªÙˆÙØ± ØªØ­ÙƒÙ…Ù‹Ø§ Ø§Ø³ØªØ«Ù†Ø§Ø¦ÙŠÙ‹Ø§ ÙÙŠ Ø§Ù„Ø³Ø±Ø¹Ø© ÙˆØ§Ù„Ù…ÙˆÙ‚Ø¹ ÙˆØ¹Ø²Ù… Ø§Ù„Ø¯ÙˆØ±Ø§Ù† Ù„Ø£Ù†Ø¸Ù…Ø© Ø£ØªÙ…ØªØ© Ø§Ù„Ù…ØµØ§Ù†Ø¹ Ø§Ù„Ø¯ÙŠÙ†Ø§Ù…ÙŠÙƒÙŠØ©.",
      specs: [
        "Ø¬Ù‡Ø¯ Ø§Ù„Ø¥Ø¯Ø®Ø§Ù„: Ù¢Ù Ù -Ù¢Ù¤Ù  ÙÙˆÙ„Øª Ù…ØªØ±Ø¯Ø¯ Ø£Ø­Ø§Ø¯ÙŠ/Ø«Ù„Ø§Ø«ÙŠ Ø§Ù„Ø£Ø·ÙˆØ§Ø±ØŒ Ø®ÙŠØ§Ø±Ø§Øª Ù¤Ù Ù  ÙÙˆÙ„Øª Ù…ØªØ±Ø¯Ø¯",
        "Ø£Ø¬Ù‡Ø²Ø© ØªØ´ÙÙŠØ± Ù…Ø·Ù„Ù‚Ø© Ø¹Ø§Ù„ÙŠØ© Ø§Ù„Ø¯Ù‚Ø© Ù…Ø¯Ù…Ø¬Ø©",
        "Ø§Ø³ØªØ¬Ø§Ø¨Ø© Ø³Ø±ÙŠØ¹Ø© Ù…Ø¹ Ø®ÙˆØ§Ø±Ø²Ù…ÙŠØ§Øª Ø¶Ø¨Ø· Ø°Ø§ØªÙŠ Ù„Ø­Ù„Ù‚Ø© Ø§Ù„ØªØ­ÙƒÙ…",
        "Ù‡ÙŠÙƒÙ„ Ù…Ø­Ø±Ùƒ Ø¨Ù…Ø¹ÙŠØ§Ø± IP67 Ù…Ø¹ Ù…ÙƒØ§Ø¨Ø­ Ù…Ø¯Ù…Ø¬Ø©"
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
      title: "Ù…ÙØ§ØªÙŠØ­ Ø­Ø¯ÙŠØ© Ù„Ù„Ø®Ø¯Ù…Ø© Ø§Ù„Ø´Ø§Ù‚Ø©",
      desc: "Ù…ÙØ§ØªÙŠØ­ Ù…ÙŠÙƒØ§Ù†ÙŠÙƒÙŠØ© Ù…ØµÙ…Ù…Ø© Ù„Ø§ÙƒØªØ´Ø§Ù Ø§Ù„ÙˆØ¬ÙˆØ¯ Ø§Ù„Ù…Ø§Ø¯ÙŠØŒ Ø£Ùˆ Ø­Ø¯ÙˆØ¯ Ù†Ù‡Ø§ÙŠØ© Ø§Ù„Ø´ÙˆØ·ØŒ Ø£Ùˆ Ø§Ù„Ù…ÙˆØ¶Ø¹ Ø§Ù„Ù…ÙŠÙƒØ§Ù†ÙŠÙƒÙŠ Ù„Ù„Ø¨ÙˆØ§Ø¨Ø§Øª ÙˆØ§Ù„Ø£Ø³Ø·ÙˆØ§Ù†Ø§Øª ÙˆØ§Ù„Ø£Ø¬Ø²Ø§Ø¡ Ø§Ù„Ù…ØªØ­Ø±ÙƒØ©.",
      specs: [
        "Ø£Ù†ÙˆØ§Ø¹ Ø§Ù„Ù…Ø´ØºÙ„Ø§Øª: Ø°Ø±Ø§Ø¹ Ø¨ÙƒØ±Ø©ØŒ Ù…ÙƒØ¨Ø³ØŒ Ù‚Ø¶ÙŠØ¨ Ù‚Ø§Ø¨Ù„ Ù„Ù„ØªØ¹Ø¯ÙŠÙ„ØŒ Ø²Ù†Ø¨Ø±ÙƒÙŠ",
        "Ø¥Ø¹Ø¯Ø§Ø¯ Ù†Ù‚Ø§Ø· Ø§Ù„ØªÙ„Ø§Ù…Ø³: Ù†Ù‚Ø§Ø· ØªÙ„Ø§Ù…Ø³ Ø³Ø±ÙŠØ¹Ø© Ø§Ù„Ø¹Ù…Ù„ 1NO / 1NC Ø£Ùˆ 2NO / 2NC",
        "Ø§Ù„ØºÙ„Ø§Ù: Ù…Ø¹Ø¯Ù† Ø«Ù‚ÙŠÙ„ Ù…ØµØ¨ÙˆØ¨ Ø£Ùˆ Ø¨Ù„Ø§Ø³ØªÙŠÙƒ Ù…Ù‚ÙˆÙ‰ Ø¨Ø§Ù„Ø²Ø¬Ø§Ø¬ØŒ Ù…Ø¹Ø²ÙˆÙ„ Ø¨Ù…Ø¹ÙŠØ§Ø± IP67",
        "Ø§Ù„Ø¹Ù…Ø± Ø§Ù„Ù…ÙŠÙƒØ§Ù†ÙŠÙƒÙŠ: Ø£ÙƒØ«Ø± Ù…Ù† Ù¡Ù¥ Ù…Ù„ÙŠÙˆÙ† Ø¹Ù…Ù„ÙŠØ© ØªØ´ØºÙŠÙ„"
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
      title: "Ù…Ø³ØªØ´Ø¹Ø±Ø§Øª Ø§Ù„Ø§Ù†Ø¹ÙƒØ§Ø³ ÙˆØ§Ù„Ù…Ø³Ø§ÙØ© Ø§Ù„ÙƒÙ‡Ø±ÙˆØ¶ÙˆØ¦ÙŠØ©",
      desc: "Ù…Ø³ØªØ´Ø¹Ø±Ø§Øª Ø¨ØµØ±ÙŠØ© Ù…ØªÙ…ÙŠØ²Ø© ØªØ³ØªØ®Ø¯Ù… Ø­Ø²Ù… Ø§Ù„Ø¶ÙˆØ¡ Ø§Ù„Ù…Ø¹Ø¯Ù„Ø© Ù„Ø§ÙƒØªØ´Ø§Ù ÙˆØ¬ÙˆØ¯ Ø§Ù„Ø£Ø¬Ø³Ø§Ù… ÙˆØ§Ù„Ù…Ø³Ø§ÙØ© ÙˆØªØ¨Ø§ÙŠÙ† Ø§Ù„Ø£Ù„ÙˆØ§Ù† Ø¯ÙˆÙ† ØªÙ„Ø§Ù…Ø³ Ù…ÙŠÙƒØ§Ù†ÙŠÙƒÙŠ.",
      specs: [
        "Ø£Ù†ÙˆØ§Ø¹ Ø§Ù„Ø§Ø³ØªØ´Ø¹Ø§Ø±: Ø´Ø¹Ø§Ø¹ Ù†Ø§ÙØ°ØŒ Ø¹Ø§ÙƒØ³ Ø±Ø¬Ø¹ÙŠØŒ Ø§Ù†Ø¹ÙƒØ§Ø³ÙŠ Ù…Ù†ØªØ´Ø±",
        "Ù…ØµØ¯Ø± Ø§Ù„Ø¶ÙˆØ¡: Ù…Ø¤Ø´Ø± LED Ø£Ø­Ù…Ø±ØŒ Ø£Ùˆ ØªØ­Øª Ø£Ø­Ù…Ø±ØŒ Ø£Ùˆ Ù„ÙŠØ²Ø± Ù…Ù† Ø§Ù„ÙØ¦Ø© Ù¡ Ø¹Ø§Ù„ÙŠ Ø§Ù„Ø¯Ù‚Ø©",
        "ÙˆØ§Ø¬Ù‡Ø© Ù…Ù‚ÙŠØ§Ø³ Ø¬Ù‡Ø¯ Ù…Ø¯Ù…Ø¬ Ø£Ùˆ ÙˆØ§Ø¬Ù‡Ø© IO-Link Ù„Ø¶Ø¨Ø· Ø§Ù„Ù…Ø³Ø§ÙØ©",
        "Ù†Ø·Ø§Ù‚ Ø§Ø³ØªØ´Ø¹Ø§Ø± ÙŠØµÙ„ Ø¥Ù„Ù‰ Ù¢Ù  Ù…ØªØ±Ù‹Ø§ (Ø¥Ø¹Ø¯Ø§Ø¯ Ø§Ù„Ø´Ø¹Ø§Ø¹ Ø§Ù„Ù†Ø§ÙØ°)"
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
      title: "Ø§Ù„ÙˆØµÙ„Ø§Øª Ø§Ù„Ù‡ÙˆØ§Ø¦ÙŠØ© Ø§Ù„Ø³Ø±ÙŠØ¹Ø© ÙˆÙˆØµÙ„Ø§Øª Ø§Ù„Ø¨Ø§Ù†Ø¬Ùˆ",
      desc: "ÙˆØµÙ„Ø§Øª Ø®Ø±Ø§Ø·ÙŠÙ… Ø³Ø±ÙŠØ¹Ø© Ø§Ù„ØªÙˆØµÙŠÙ„ Ø¨Ø§Ù„Ø¶ØºØ· Ù…ØµÙ…Ù…Ø© Ù„ØªÙˆØµÙŠÙ„ Ø®Ø±Ø§Ø·ÙŠÙ… Ø§Ù„Ø¨ÙˆÙ„ÙŠ ÙŠÙˆØ±ÙŠØ«ÙŠÙ† ÙˆØ§Ù„Ø¨ÙˆÙ„ÙŠ Ø¥ÙŠØ«ÙŠÙ„ÙŠÙ† ÙˆØ§Ù„Ù†Ø§ÙŠÙ„ÙˆÙ† Ø¨Ø¯ÙˆÙ† ØªØ³Ø±ÙŠØ¨ ÙÙŠ Ø´Ø¨ÙƒØ§Øª Ø§Ù„Ù‡ÙˆØ§Ø¡ Ø§Ù„ØµÙ†Ø§Ø¹ÙŠØ©.",
      specs: [
        "Ø£Ù‚Ø·Ø§Ø± Ø§Ù„Ø®Ø±Ø§Ø·ÙŠÙ… Ø§Ù„Ù…Ø¯Ø¹ÙˆÙ…Ø©: Ù¤ Ù…Ù„Ù… Ø¥Ù„Ù‰ Ù¡Ù¦ Ù…Ù„Ù…ØŒ ØªØªÙˆÙØ± Ù…Ù‚Ø§Ø³Ø§Øª Ø¨Ø§Ù„Ø¨ÙˆØµØ©",
        "Ø£Ù†ÙˆØ§Ø¹ Ø§Ù„Ø³Ù† (Ø§Ù„Ù‚Ù„Ø§ÙˆÙˆØ¸): Ù…ØªØ±ÙŠØŒ BSPP (G)ØŒ BSPT (R)ØŒ NPT",
        "Ø§Ù„Ù‡ÙŠÙƒÙ„: Ù†Ø­Ø§Ø³ Ù…Ø·Ù„ÙŠ Ø¨Ø§Ù„Ù†ÙŠÙƒÙ„ØŒ ÙÙˆÙ„Ø§Ø° Ù…Ù‚Ø§ÙˆÙ… Ù„Ù„ØµØ¯Ø£ØŒ Ø£Ùˆ Ø¨Ù„Ø§Ø³ØªÙŠÙƒ Ù…Ø±ÙƒØ¨ ÙÙ†ÙŠ",
        "Ø¶ØºØ· Ø§Ù„ØªØ´ØºÙŠÙ„ ÙŠØµÙ„ Ø¥Ù„Ù‰ Ù¡Ù  Ø¨Ø§Ø± (Ù¡.Ù  Ù…ÙŠØºØ§Ø¨Ø§Ø³ÙƒØ§Ù„) ØªØ­Øª Ø§Ù„ÙØ±Ø§Øº"
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
      title: "ÙˆØ­Ø¯Ø§Øª Ø§Ù„Ø®Ø¯Ù…Ø© Ø§Ù„Ù‡ÙˆØ§Ø¦ÙŠØ© Ø«Ù„Ø§Ø«ÙŠØ© Ø§Ù„Ù…Ø±Ø§Ø­Ù„ (FRL)",
      desc: "ÙˆØ­Ø¯Ø§Øª ØªØ­Ø¶ÙŠØ± Ø§Ù„Ù‡ÙˆØ§Ø¡ Ø§Ù„Ù‡ÙˆØ§Ø¦ÙŠ Ø§Ù„ØªÙŠ ØªØ¹Ù…Ù„ Ø¹Ù„Ù‰ ØªØµÙÙŠØ© Ø§Ù„Ø±Ø·ÙˆØ¨Ø© ÙˆØ§Ù„ØºØ¨Ø§Ø± Ø§Ù„Ø¬Ø²Ø¦ÙŠ ÙˆØªÙ†Ø¸ÙŠÙ… Ø¶ØºØ· Ø®Ø·ÙˆØ· Ø§Ù„Ù‡ÙˆØ§Ø¡ ÙˆØªØ²ÙŠÙŠØª Ø§Ù„ØµÙ…Ø§Ù…Ø§Øª ÙˆØ§Ù„Ù…Ø´ØºÙ„Ø§Øª Ø§Ù„Ù†Ù‡Ø§Ø¦ÙŠØ©.",
      specs: [
        "Ø¯Ø±Ø¬Ø© Ø§Ù„ØªØ±Ø´ÙŠØ­: Ø¹Ù†Ø§ØµØ± ÙÙ„ØªØ± Ù¥ Ù…ÙŠÙƒØ±ÙˆÙ† Ø£Ùˆ Ù¤Ù  Ù…ÙŠÙƒØ±ÙˆÙ†",
        "Ø®ÙŠØ§Ø±Ø§Øª Ø§Ù„ØªØµØ±ÙŠÙ: ØªØµØ±ÙŠÙ Ø´Ø¨Ù‡ ØªÙ„Ù‚Ø§Ø¦ÙŠØŒ ØªØµØ±ÙŠÙ ØªÙ„Ù‚Ø§Ø¦ÙŠ Ø¨Ø§Ù„ÙƒØ§Ù…Ù„ Ø¨Ø¹ÙˆØ§Ù…Ø©",
        "Ø­Ù…Ø§ÙŠØ© Ø§Ù„ÙˆØ¹Ø§Ø¡: ÙˆØ§Ù‚ÙŠ ÙˆØ¹Ø§Ø¡ Ù…Ø¹Ø¯Ù†ÙŠ Ù„Ù„Ø£Ù…Ø§Ù† Ø§Ù„Ø¹Ø§Ù„ÙŠ Ø¹Ù†Ø¯ Ø§Ù„Ø§ØµØ·Ø¯Ø§Ù…",
        "Ù†Ø·Ø§Ù‚ ØªÙ†Ø¸ÙŠÙ… Ø§Ù„Ø¶ØºØ·: Ù…Ù† Ù .Ù¥ Ø¥Ù„Ù‰ Ù¨.Ù¥ Ø¨Ø§Ø±"
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
      title: "Ø£Ø²Ø±Ø§Ø± Ø§Ù„ØªØ­ÙƒÙ… Ø§Ù„ØµÙ†Ø§Ø¹ÙŠØ© ÙˆÙ…ÙØ§ØªÙŠØ­ Ø§Ù„Ø·ÙˆØ§Ø±Ø¦",
      desc: "Ø£Ø²Ø±Ø§Ø± Ø¶ØºØ· ØµÙ†Ø§Ø¹ÙŠØ© Ø¨Ù…Ù‚Ø§Ø³ Ù¢Ù¢ Ù…Ù„Ù… ÙˆÙ£Ù  Ù…Ù„Ù…ØŒ ÙˆÙ…ÙØ§ØªÙŠØ­ Ø§Ø®ØªÙŠØ§Ø± Ù…Ø¶ÙŠØ¦Ø©ØŒ ÙˆØ£Ø²Ø±Ø§Ø± Ø·ÙˆØ§Ø±Ø¦ Ø°Ø§Øª Ù‚ÙÙ„ Ø³Ø­Ø¨ ÙˆØ¯ÙØ¹ Ù„Ù…Ø´ØºÙ„ÙŠ Ø§Ù„Ù„ÙˆØ­Ø§Øª.",
      specs: [
        "Ù‚Ø·Ø± Ø§Ù„ØªØ±ÙƒÙŠØ¨: Ù‚Ø·Ø¹ Ù„ÙˆØ­Ø© Ù‚ÙŠØ§Ø³ÙŠ Ø¨Ù…Ù‚Ø§Ø³ Ù¢Ù¢.Ù¥ Ù…Ù„Ù…",
        "Ø§Ù„Ø¥Ø¶Ø§Ø¡Ø©: ÙˆØ­Ø¯Ø§Øª LED Ù…Ø¯Ù…Ø¬Ø© Ù…Ù†Ø®ÙØ¶Ø© Ø§Ù„Ø·Ø§Ù‚Ø©",
        "Ø£Ù†ÙˆØ§Ø¹ Ø§Ù„ØªØ´ØºÙŠÙ„: Ù…Ø³Ø·Ø­ØŒ Ù…Ù…ØªØ¯ØŒ Ù‚ÙÙ„ Ø·ÙˆØ§Ø±Ø¦ ÙØ·Ø± Ø§Ù„Ø´ÙƒÙ„",
        "Ø¯Ø±Ø¬Ø© Ø§Ù„Ø­Ù…Ø§ÙŠØ©: IP65 / IP66 Ø¹Ø²Ù„ Ø§Ù„Ù„ÙˆØ­Ø© Ø§Ù„Ø£Ù…Ø§Ù…ÙŠØ© Ù…Ù† Ø§Ù„ØºØ¨Ø§Ø±"
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
      title: "Ø§Ù„Ù…Ø´ÙØ±Ø§Øª Ø§Ù„Ø¯ÙˆØ§Ø±Ø© Ø§Ù„ØµÙ†Ø§Ø¹ÙŠØ©",
      desc: "Ù…Ø´ÙØ±Ø§Øª Ø¨ØµØ±ÙŠØ© ØªØ²Ø§ÙŠØ¯ÙŠØ© ÙˆÙ…Ø·Ù„Ù‚Ø© ØªØ­ÙˆÙ„ Ø²Ø§ÙˆÙŠØ© Ø¯ÙˆØ±Ø§Ù† Ø§Ù„Ø¹Ù…ÙˆØ¯ ÙˆØ³Ø±Ø¹ØªÙ‡ Ø¥Ù„Ù‰ Ù†Ø¨Ø¶Ø§Øª Ø±Ù‚Ù…ÙŠØ© Ø¯Ù‚ÙŠÙ‚Ø© Ù„ØªØºØ°ÙŠØ© Ø­Ù„Ù‚Ø§Øª Ø§Ù„ØªØ­ÙƒÙ… Ø¨Ø§Ù„Ø³Ø±Ø¹Ø© Ø±Ø§Ø¬Ø¹Ø©.",
      specs: [
        "Ù†ÙˆØ¹ Ø§Ù„Ù…Ø´ÙØ±: ØªØ²Ø§ÙŠØ¯ÙŠ Ø£Ùˆ Ù…Ø·Ù„Ù‚ (Ø¯ÙˆØ±Ø© ÙˆØ§Ø­Ø¯Ø© / Ù…ØªØ¹Ø¯Ø¯ Ø§Ù„Ø¯ÙˆØ±Ø§Øª)",
        "Ø§Ù„Ø¯Ù‚Ø©: ØªØµÙ„ Ø¥Ù„Ù‰ Ù¡Ù ,Ù Ù Ù  Ù†Ø¨Ø¶Ø© ÙÙŠ Ø§Ù„Ø¯ÙˆØ±Ø© Ø§Ù„ÙˆØ§Ø­Ø¯Ø© (PPR)",
        "Ø§Ù„Ù…Ø®Ø±Ø¬ Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠ: Ù…Ø­Ø±Ùƒ Ø®Ø·ÙŠØŒ Ø¯ÙØ¹ ÙˆØ³Ø­Ø¨ØŒ Ù…Ø¬Ù…Ø¹ Ù…ÙØªÙˆØ­",
        "Ù‚Ø¯Ø±Ø© ØªØ­Ù…Ù„ Ø¹Ù…ÙˆØ¯ Ø´Ø§Ù‚Ø© Ù…Ø¹ Ø¯Ø±Ø¬Ø© Ø­Ù…Ø§ÙŠØ© Ø§Ù„Ù‡ÙŠÙƒÙ„ Ø¨Ù…Ø¹ÙŠØ§Ø± IP65"
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
      title: "ØµÙ…Ø§Ù…Ø§Øª Ø§Ù„Ø¨ÙˆØ§Ø¨Ø© Ø§Ù„ØµÙ†Ø§Ø¹ÙŠØ©",
      desc: "ØµÙ…Ø§Ù…Ø§Øª Ø¨ÙˆØ§Ø¨Ø© Ø°Ø§Øª Ø¬Ø°Ø¹ ØµØ§Ø¹Ø¯ Ø«Ù‚ÙŠÙ„Ø© Ù…ØµÙ…Ù…Ø© Ù„Ø¹Ø²Ù„ ÙˆØ¥ØºÙ„Ø§Ù‚ Ø§Ù„ØªØ¯ÙÙ‚ ÙÙŠ Ø´Ø¨ÙƒØ§Øª Ø§Ù„Ø£Ù†Ø§Ø¨ÙŠØ¨ Ø§Ù„ØªÙŠ ØªØªØ¹Ø§Ù…Ù„ Ù…Ø¹ Ø§Ù„Ø³ÙˆØ§Ø¦Ù„ Ø§Ù„Ø³Ù…ÙŠÙƒØ© Ø£Ùˆ Ø§Ù„ØºØ§Ø² Ø£Ùˆ Ø§Ù„Ø¨Ø®Ø§Ø±.",
      specs: [
        "ØªØµÙ…ÙŠÙ… Ø§Ù„Ø¥Ø³ÙÙŠÙ†: Ø¥Ø³ÙÙŠÙ† Ù…Ø±Ù†ØŒ Ø¥Ø³ÙÙŠÙ† ØµÙ„Ø¨ØŒ Ø¨ÙˆØ§Ø¨Ø© Ø°Ø§Øª Ù…Ù‚Ø¹Ø¯ Ù…Ø±Ù†",
        "ÙØ¦Ø© Ø§Ù„Ø´ÙØ©: ANSI 150/300, PN16/40",
        "Ø§Ù„Ù‡ÙŠÙƒÙ„: Ø­Ø¯ÙŠØ¯ Ø²Ù‡Ø±ØŒ ÙÙˆÙ„Ø§Ø° ÙƒØ±Ø¨ÙˆÙ†ÙŠØŒ ÙÙˆÙ„Ø§Ø° Ù…Ù‚Ø§ÙˆÙ… Ù„Ù„ØµØ¯Ø£",
        "Ø®ÙŠØ§Ø±Ø§Øª ØªØ´ØºÙŠÙ„ Ø¨Ø¹Ø¬Ù„Ø© ÙŠØ¯ÙˆÙŠØ©ØŒ Ø£Ø³Ø·ÙˆØ§Ù†Ø© Ù‡ÙˆØ§Ø¦ÙŠØ©ØŒ Ø£Ùˆ ØªØ´ØºÙŠÙ„ Ø¨Ø§Ù„ØªØ±ÙˆØ³"
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
      title: "Ø§Ù„Ù…Ø´ØºÙ„Ø§Øª Ø§Ù„Ø¯ÙˆØ§Ø±Ø© ÙˆØ§Ù„Ù…Ø­Ø±ÙƒØ§Øª Ø§Ù„Ù‡ÙˆØ§Ø¦ÙŠØ©",
      desc: "Ù…Ø­Ø±ÙƒØ§Øª Ù‡ÙˆØ§Ø¦ÙŠØ© Ø°Ø§Øª Ø±ÙŠØ´ Ø¯ÙˆØ§Ø±Ø© ÙˆØ±Ù ØªØ±Ø³ ØªØ­ÙˆÙ„ Ø§Ù„Ù‡ÙˆØ§Ø¡ Ø§Ù„Ù…Ø¶ØºÙˆØ· Ø¥Ù„Ù‰ Ø¹Ø²Ù… Ø¯ÙˆØ±Ø§Ù† Ø¯ÙˆØ±Ø§Ù†ÙŠ Ù„Ù„Ø®Ù„Ø§Ø·Ø§ØªØŒ ÙˆÙ…Ø­Ø±ÙƒØ§Øª Ø§Ù„Ù…Ø¶Ø®Ø§ØªØŒ ÙˆØ·Ø§ÙˆÙ„Ø§Øª Ø§Ù„ÙÙ‡Ø±Ø³Ø© Ø§Ù„Ø¯ÙˆØ§Ø±Ø©.",
      specs: [
        "Ù†ÙˆØ¹ Ø§Ù„ØªØ´ØºÙŠÙ„: Ù…Ø´ØºÙ„ Ø¯ÙˆØ§Ø± Ø°Ùˆ Ø±Ù ÙˆØªØ±Ø³ØŒ Ù…Ø­Ø±Ùƒ Ù‡ÙˆØ§Ø¦ÙŠ Ø°Ùˆ Ø±ÙŠØ´ Ø¯ÙˆØ§Ø±Ø©",
        "Ø²ÙˆØ§ÙŠØ§ Ø§Ù„Ø¯ÙˆØ±Ø§Ù†: Ù©Ù  Ø¯Ø±Ø¬Ø©ØŒ Ù¡Ù¨Ù  Ø¯Ø±Ø¬Ø©ØŒ ÙˆØ¯ÙˆØ±Ø§Ù† Ù…Ø³ØªÙ…Ø±",
        "Ø¹Ø²Ù… Ø¯ÙˆØ±Ø§Ù† Ø¹Ø§Ù„ÙŠ Ù…Ø¹ Ù‡ÙŠØ§ÙƒÙ„ Ù…Ø¯Ù…Ø¬Ø© ÙˆÙ…Ù‚Ø§ÙˆÙ…Ø© Ù„Ù„Ø§Ù†ÙØ¬Ø§Ø±",
        "ÙŠØªÙˆÙØ± Ø®ÙŠØ§Ø± ØªØ´ØºÙŠÙ„ Ø¨Ø¯ÙˆÙ† ØªØ²ÙŠÙŠØª Ù„Ù…Ù†Ø§Ø·Ù‚ Ø§Ù„ØºØ±Ù Ø§Ù„Ù†Ø¸ÙŠÙØ©"
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
          : `Ø·Ù„Ø¨ ØªØ³Ø¹ÙŠØ± Ù„Ù€ ${productName}`;
          
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
      desc: `Ù…ÙƒÙˆÙ†Ø§Øª ${name} Ø§Ù„Ù…Ø¹ØªÙ…Ø¯Ø© ÙˆØ¹Ø§Ù„ÙŠØ© Ø§Ù„Ø¬ÙˆØ¯Ø© ÙˆØ§Ù„Ù…ØµÙ…Ù…Ø© Ù„Ù„ØªØ´ØºÙŠÙ„ Ø§Ù„Ø´Ø§Ù‚ ÙÙŠ Ø´Ø¨ÙƒØ§Øª Ø§Ù„Ø£ØªÙ…ØªØ© Ø§Ù„Ù…ØµÙ†Ø¹ÙŠØ© ÙˆØ­Ù„Ù‚Ø§Øª Ù‡Ù†Ø¯Ø³Ø© Ø§Ù„Ù…ØµØ§Ù†Ø¹.`,
      specs: [
        "Ù…ØªÙˆØ§ÙÙ‚ Ù…Ø¹ Ø´Ù‡Ø§Ø¯Ø§Øª CE Ùˆ UL Ùˆ SEC / IEC Ø§Ù„ØµÙ†Ø§Ø¹ÙŠØ©",
        "Ù‡ÙŠÙƒÙ„ Ù…ØªÙŠÙ† Ø°Ùˆ ØªØ­Ù…Ù„ Ø¹Ø§Ù„ÙŠ Ù„Ø¯Ø±Ø¬Ø§Øª Ø§Ù„Ø­Ø±Ø§Ø±Ø© Ø§Ù„Ù…ØªÙØ§ÙˆØªØ©",
        "Ù…ØµÙ…Ù… Ù„Ø¹Ù…Ø± ØªØ´ØºÙŠÙ„ÙŠ Ø·ÙˆÙŠÙ„ ÙˆØµÙŠØ§Ù†Ø© Ù…Ù†Ø®ÙØ¶Ø© Ù„Ù„ØºØ§ÙŠØ©",
        "Ù…ØµÙ…Ù… Ù„Ù„ØªØ±ÙƒÙŠØ¨ Ø§Ù„Ø³Ø±ÙŠØ¹ Ø¹Ù„Ù‰ Ù„ÙˆØ­Ø§Øª Ø§Ù„ØªÙˆØµÙŠÙ„"
      ],
      brands: defaultBrands
    }
  };
}