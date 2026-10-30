
import { useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Menu,
  X,
  Mail,
  Globe,
  MessageCircle,
  Code2,
  Palette,
  Search,
  ShoppingBag,
  Megaphone,
  Wrench,
  MapPin,
  ShieldCheck,
  Zap,
  Send,
  ChevronDown,
  Monitor,
  Smartphone,
  Sparkles,
  Layers,
  Clock3,
} from 'lucide-react'

const WHATSAPP = 'https://wa.me/250792036500'
const PHONE = '+250792036500'
const EMAIL = 'digitalolutionsrwanda@gmail.com'

const content = {
  rw: {
    nav: ['Ahabanza', 'Serivisi', 'Imirimo', 'Twandikire'],
    badge: 'Dufasha ubucuruzi bwo mu Rwanda',
    heroTitle: 'Ubucuruzi bwawe bukwiye',
    heroAccent: 'kugaragara kuri internet.',
    heroText:
      'Dukora imbuga za internet zigezweho kandi zigaragara neza, zigafasha abakiriya kukubona, kukwizera no kuguhitamo.',
    primary: 'Tangira umushinga wawe',
    secondary: 'Reba serivisi zacu',
    trusted: 'Dufasha ubucuruzi gukura mu ikoranabuhanga',
    servicesLabel: 'Ibyo tugukorera',
    servicesTitle: 'Ibikoresho by’ikoranabuhanga',
    servicesAccent: 'byagufasha gukura.',
    servicesText:
      'Duhitamo ibisubizo bijyanye n’ubucuruzi bwawe, intego zawe n’ingengo y’imari yawe.',
    portfolioLabel: 'Imirimo yacu',
    portfolioTitle: 'Ibitekerezo bihinduka',
    portfolioAccent: 'ibisubizo bifatika.',
    portfolioText:
      'Dushobora gukora urubuga rujyanye n’imiterere y’ubucuruzi bwawe n’abakiriya ugamije.',
    processLabel: 'Uko dukora',
    processTitle: 'Biroroshye gutangira.',
    processText:
      'Dukorana nawe kuva ku gitekerezo cya mbere kugeza urubuga rwawe rwiteguye gukoreshwa.',
    aboutLabel: 'Impamvu waduhitamo',
    aboutTitle: 'Ikoranabuhanga rigomba kugufasha,',
    aboutAccent: 'ntirigukomere.',
    aboutText:
      'Twibanda ku bisubizo byoroshye gukoresha, bigaragara neza kuri telefoni na mudasobwa, kandi bifasha abakiriya kugera ku bucuruzi bwawe.',
    contactLabel: 'Tuganire ku mushinga wawe',
    contactTitle: 'Witeguye kujyana ubucuruzi bwawe kuri internet?',
    contactText:
      'Tubwire ibyo ukora n’icyo wifuza kugeraho. Tuzagufasha guhitamo igisubizo kigukwiriye.',
    contactButton: 'Twandikire kuri WhatsApp',
    nameLabel: 'Amazina yawe',
    businessLabel: 'Izina ry’ubucuruzi',
    serviceLabel: 'Serivisi ukeneye',
    messageLabel: 'Tubwire ibyo ukeneye',
    namePlaceholder: 'Andika amazina yawe',
    businessPlaceholder: 'Urugero: Hotel, salon, restaurant...',
    messagePlaceholder: 'Sobanura mu magambo make umushinga wawe...',
    selectPlaceholder: 'Hitamo serivisi',
    sendButton: 'Ohereza ubutumwa',
    footerText: 'Dufashe ubucuruzi bwawe kujya kuri internet.',
    footerLinks: 'Amahitamo',
    footerContact: 'Twandikire',
    viewProject: 'Reba igitekerezo',
    learnMore: 'Menya byinshi',
    steps: [
      {
        number: '01',
        title: 'Tuganira',
        text: 'Tumenya ubucuruzi bwawe, abakiriya bawe n’intego zawe.',
      },
      {
        number: '02',
        title: 'Dutegura igisubizo',
        text: 'Duhitamo igishushanyo n’imikorere bijyanye n’ibyo ukeneye.',
      },
      {
        number: '03',
        title: 'Turagishyira hanze',
        text: 'Tugerageza urubuga, turunoza kandi tugufasha kurushyira kuri internet.',
      },
    ],
    services: [
      {
        title: 'Gukora imbuga za internet',
        text: 'Urubuga rw’umwuga rwerekana serivisi zawe, amakuru y’ubucuruzi n’uburyo bwo kukugeraho.',
        icon: Code2,
        number: '01',
      },
      {
        title: 'Kugaragara kuri Google',
        text: 'Dufasha abantu kubona amakuru y’ubucuruzi bwawe kuri Google no kuri Maps.',
        icon: Search,
        number: '02',
      },
      {
        title: 'Branding n’ibishushanyo',
        text: 'Ibishushanyo, amabara n’ibindi bifasha ubucuruzi bwawe kugira isura ihamye.',
        icon: Palette,
        number: '03',
      },
      {
        title: 'Kwamamaza kuri internet',
        text: 'Ibitekerezo n’ibikoresho bigufasha kumenyekanisha ubucuruzi bwawe ku mbuga nkoranyambaga.',
        icon: Megaphone,
        number: '04',
      },
      {
        title: 'Imbuga zo kugurishirizaho',
        text: 'Urubuga rwerekana ibicuruzwa byawe n’uburyo abakiriya bashobora kubaza cyangwa kugura.',
        icon: ShoppingBag,
        number: '05',
      },
      {
        title: 'Kuvugurura imbuga',
        text: 'Dufasha kuvugurura amakuru, kunoza imiterere no gukomeza kubungabunga urubuga.',
        icon: Wrench,
        number: '06',
      },
    ],
    projects: [
      {
        category: 'UBUKERARUGENDO',
        title: 'Urubuga rwa hotel',
        text: 'Urubuga rugaragaza ibyumba, serivisi, amafoto n’amakuru yo kubariza.',
        tag: 'Hotel & Lodge',
        image:
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85',
      },
      {
        category: 'IBYO KURYA',
        title: 'Restaurant igezweho',
        text: 'Imiterere yoroshye yerekana menu, aho restaurant iherereye n’uko wayandikira.',
        tag: 'Restaurant',
        image:
          'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85',
      },
      {
        category: 'UBUCURUZI',
        title: 'Ubucuruzi bw’ibicuruzwa',
        text: 'Urubuga rwerekana ibicuruzwa, amakuru yabyo n’uburyo bwo kubaza ibiciro.',
        tag: 'Online shop',
        image:
          'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=85',
      },
    ],
    faqs: [
      {
        q: 'Ni ubuhe bucuruzi mushobora gukorera urubuga?',
        a: 'Dushobora gufasha amahoteli, restaurants, salons, amaduka, garages, abatanga serivisi n’ubundi bucuruzi.',
      },
      {
        q: 'Ese nshobora kugira urubuga ntazi gukora coding?',
        a: 'Yego. Turagufasha gutegura no gushyira urubuga rwawe kuri internet. Uzashobora kutwandikira igihe ukeneye kuvugurura amakuru.',
      },
      {
        q: 'Urubuga rutwara angahe?',
        a: 'Igiciro giterwa n’ibyo ukeneye, ingano y’urubuga n’imikorere yarwo. Twandikire tuganire ku mushinga wawe mbere yo kugena igiciro.',
      },
      {
        q: 'Ese muzamfasha kugaragara kuri Google?',
        a: 'Yego, dushobora kugufasha gutegura amakuru y’urubuga no kuganira ku buryo bwo kurushyira kuri Google. Kugaragara mu bushakashatsi ntibihita byemezwa.',
      },
    ],
  },

  en: {
    nav: ['Home', 'Services', 'Portfolio', 'Contact'],
    badge: 'Supporting businesses across Rwanda',
    heroTitle: 'Your business deserves',
    heroAccent: 'to be seen online.',
    heroText:
      'We create modern, professional websites that help customers discover your business, trust your brand, and get in touch.',
    primary: 'Start your project',
    secondary: 'Explore our services',
    trusted: 'Helping businesses grow through digital solutions',
    servicesLabel: 'What we do',
    servicesTitle: 'Digital tools',
    servicesAccent: 'built for your growth.',
    servicesText:
      'We help you choose practical digital solutions that fit your business, goals, and budget.',
    portfolioLabel: 'Our work',
    portfolioTitle: 'Ideas turned into',
    portfolioAccent: 'digital experiences.',
    portfolioText:
      'Explore example concepts showing how a website could present your business professionally.',
    processLabel: 'How we work',
    processTitle: 'Getting started is simple.',
    processText:
      'We work with you from the first conversation to a website that is ready to go online.',
    aboutLabel: 'Why work with us',
    aboutTitle: 'Technology should help you,',
    aboutAccent: 'not overwhelm you.',
    aboutText:
      'We focus on practical, attractive digital solutions that work across phones and computers and make it easier for customers to reach you.',
    contactLabel: 'Let’s discuss your project',
    contactTitle: 'Ready to take your business online?',
    contactText:
      'Tell us what your business does and what you want to achieve. We will help you explore the right solution.',
    contactButton: 'Chat with us on WhatsApp',
    nameLabel: 'Your name',
    businessLabel: 'Business name',
    serviceLabel: 'Service you need',
    messageLabel: 'Tell us about your project',
    namePlaceholder: 'Enter your name',
    businessPlaceholder: 'e.g. Hotel, salon, restaurant...',
    messagePlaceholder: 'Briefly describe what you need...',
    selectPlaceholder: 'Choose a service',
    sendButton: 'Send your message',
    footerText: 'Helping your business get online.',
    footerLinks: 'Quick links',
    footerContact: 'Contact us',
    viewProject: 'Discuss a project',
    learnMore: 'Learn more',
    steps: [
      {
        number: '01',
        title: 'We listen',
        text: 'We learn about your business, your customers, and your goals.',
      },
      {
        number: '02',
        title: 'We plan',
        text: 'We choose a suitable design and features for your needs.',
      },
      {
        number: '03',
        title: 'We launch',
        text: 'We test, refine, and help you get your website online.',
      },
    ],
    services: [
      {
        title: 'Website development',
        text: 'A professional website to present your services, business details, and contact options.',
        icon: Code2,
        number: '01',
      },
      {
        title: 'Google visibility',
        text: 'Help customers find your business information through Google Search and Maps.',
        icon: Search,
        number: '02',
      },
      {
        title: 'Branding and graphic design',
        text: 'Visual designs, colors, and brand materials that help your business look consistent.',
        icon: Palette,
        number: '03',
      },
      {
        title: 'Digital marketing',
        text: 'Ideas and digital materials to help promote your business on social media.',
        icon: Megaphone,
        number: '04',
      },
      {
        title: 'Product and shop websites',
        text: 'Present your products online and make it easier for customers to ask questions or order.',
        icon: ShoppingBag,
        number: '05',
      },
      {
        title: 'Website maintenance',
        text: 'Keep your website updated with refreshed information and design improvements.',
        icon: Wrench,
        number: '06',
      },
    ],
    projects: [
      {
        category: 'HOSPITALITY',
        title: 'Hotel website concept',
        text: 'A clear presentation of rooms, amenities, photography, and enquiry options.',
        tag: 'Hotel & Lodge',
        image:
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85',
      },
      {
        category: 'FOOD & DINING',
        title: 'Modern restaurant concept',
        text: 'A simple way to showcase a menu, location, and contact information.',
        tag: 'Restaurant',
        image:
          'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85',
      },
      {
        category: 'RETAIL',
        title: 'Product business concept',
        text: 'An online showcase for products, descriptions, and customer enquiries.',
        tag: 'Online shop',
        image:
          'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=85',
      },
    ],
    faqs: [
      {
        q: 'What types of businesses do you work with?',
        a: 'We can help hotels, restaurants, salons, shops, garages, service providers, and other small businesses.',
      },
      {
        q: 'Do I need coding knowledge to have a website?',
        a: 'No. We can help plan and publish your website. Contact us when you need changes or updates.',
      },
      {
        q: 'How much does a website cost?',
        a: 'Pricing depends on the size, features, and requirements of your project. Contact us to discuss your needs before agreeing on a price.',
      },
      {
        q: 'Can you help my business appear on Google?',
        a: 'We can help prepare your website and discuss Google visibility. Search ranking and placement cannot be guaranteed.',
      },
    ],
  },
}

const serviceOptions = {
  rw: [
    'Gukora urubuga',
    'Kugaragara kuri Google',
    'Branding n’ibishushanyo',
    'Kwamamaza kuri internet',
    'Urubuga rw’ibicuruzwa',
    'Kuvugurura urubuga',
    'Izindi serivisi',
  ],
  en: [
    'Website development',
    'Google visibility',
    'Branding and graphic design',
    'Digital marketing',
    'Product website',
    'Website maintenance',
    'Other services',
  ],
}

function SectionHeading({ label, title, accent, text, center = false }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
        <span className="h-2 w-2 rounded-full bg-blue-600" />
        {label}
      </div>
      <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#14243A] sm:text-4xl lg:text-5xl">
        {title} <span className="text-blue-600">{accent}</span>
      </h2>
      {text && (
        <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
          {text}
        </p>
      )}
    </div>
  )
}

function App() {
  const [language, setLanguage] = useState('rw')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [form, setForm] = useState({
    name: '',
    business: '',
    service: '',
    message: '',
  })

  const t = content[language]

  const navIds = ['home', 'services', 'portfolio', 'contact']

  function goTo(id) {
    setMobileMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  function submitForm(event) {
    event.preventDefault()

    const message = [
      `Hello Digital Solutions Rwanda!`,
      `Name: ${form.name}`,
      `Business: ${form.business || 'Not specified'}`,
      `Service: ${form.service || 'Not specified'}`,
      `Project details: ${form.message || 'I would like to discuss my project.'}`,
    ].join('\n')

    window.open(
      `${WHATSAPP}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#14243A]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <button
            onClick={() => goTo('home')}
            className="flex items-center gap-3 text-left"
            aria-label="Digital Solutions Rwanda home"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
              <Globe size={23} />
            </span>
            <span>
              <span className="block text-sm font-extrabold tracking-tight sm:text-base">
                Digital Solutions
              </span>
              <span className="block text-xs font-semibold tracking-[0.2em] text-blue-600">
                RWANDA
              </span>
            </span>
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            {t.nav.map((item, index) => (
              <button
                key={item}
                onClick={() => goTo(navIds[index])}
                className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={() =>
                setLanguage((current) => (current === 'rw' ? 'en' : 'rw'))
              }
              className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm font-bold transition hover:border-blue-300 hover:bg-blue-50"
              aria-label="Switch language"
            >
              <Globe size={16} />
              {language === 'rw' ? 'EN' : 'RW'}
              <ChevronDown size={14} />
            </button>
            <button
              onClick={() => goTo('contact')}
              className="rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              {t.primary}
              <ArrowUpRight className="ml-2 inline" size={16} />
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() =>
                setLanguage((current) => (current === 'rw' ? 'en' : 'rw'))
              }
              className="rounded-full border border-slate-200 px-3 py-2 text-xs font-bold"
              aria-label="Switch language"
            >
              {language === 'rw' ? 'EN' : 'RW'}
            </button>
            <button
              onClick={() => setMobileMenuOpen((current) => !current)}
              className="rounded-xl border border-slate-200 p-2.5"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-1">
              {t.nav.map((item, index) => (
                <button
                  key={item}
                  onClick={() => goTo(navIds[index])}
                  className="rounded-xl px-4 py-3 text-left font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => goTo('contact')}
                className="mt-2 rounded-xl bg-blue-600 px-4 py-3 text-left font-bold text-white"
              >
                {t.primary}
              </button>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="relative scroll-mt-24">
          <div className="pointer-events-none absolute right-0 top-0 -z-0 h-[420px] w-[420px] rounded-full bg-blue-100/60 blur-3xl" />
          <div className="pointer-events-none absolute left-0 top-52 -z-0 h-56 w-56 rounded-full bg-sky-100/70 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-28">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold text-blue-700 shadow-sm sm:text-sm">
                <Sparkles size={16} />
                {t.badge}
              </div>

              <h1 className="mt-7 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#14243A] sm:text-5xl lg:text-6xl xl:text-7xl">
                {t.heroTitle}{' '}
                <span className="text-blue-600">{t.heroAccent}</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                {t.heroText}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => goTo('contact')}
                  className="rounded-full bg-blue-600 px-6 py-4 text-center font-bold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
                >
                  {t.primary}
                  <ArrowRight className="ml-3 inline" size={18} />
                </button>
                <button
                  onClick={() => goTo('services')}
                  className="rounded-full border border-slate-200 bg-white px-6 py-4 text-center font-bold text-[#14243A] transition hover:border-blue-300 hover:bg-blue-50"
                >
                  {t.secondary}
                </button>
              </div>

              <div className="mt-10 flex items-center gap-3 border-t border-slate-200 pt-6">
                <div className="flex -space-x-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-blue-700">
                    <Monitor size={16} />
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-sky-100 text-blue-700">
                    <Smartphone size={16} />
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-indigo-100 text-blue-700">
                    <Globe size={16} />
                  </span>
                </div>
                <p className="max-w-xs text-sm font-medium leading-6 text-slate-500">
                  {t.trusted}
                </p>
              </div>
            </div>

            {/* Website preview illustration */}
            <div className="relative z-10 mx-auto w-full max-w-xl">
              <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-blue-200/60 blur-2xl" />
              <div className="absolute -bottom-6 -left-5 h-36 w-36 rounded-full bg-sky-200/70 blur-2xl" />

              <div className="relative rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-blue-900/10 sm:p-5">
                <div className="flex items-center justify-between border-b border-slate-100 px-2 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="w-2/3 rounded-full bg-slate-100 px-3 py-1.5 text-center text-[10px] text-slate-400 sm:text-xs">
                    yourbusiness.rw
                  </div>
                  <Globe size={16} className="text-slate-400" />
                </div>

                <div className="grid gap-3 p-2 sm:grid-cols-[1fr_0.8fr] sm:gap-5 sm:p-4">
                  <div className="flex flex-col justify-center py-3">
                    <div className="mb-3 h-2 w-16 rounded-full bg-blue-100" />
                    <div className="h-5 w-full rounded-md bg-[#14243A]" />
                    <div className="mt-2 h-5 w-4/5 rounded-md bg-blue-600" />
                    <div className="mt-4 h-2 w-full rounded-full bg-slate-100" />
                    <div className="mt-2 h-2 w-5/6 rounded-full bg-slate-100" />
                    <div className="mt-2 h-2 w-2/3 rounded-full bg-slate-100" />
                    <div className="mt-5 flex gap-2">
                      <div className="rounded-full bg-blue-600 px-3 py-2 text-[9px] font-bold text-white sm:text-[10px]">
                        Get in touch
                      </div>
                      <div className="rounded-full border border-slate-200 px-3 py-2 text-[9px] font-bold text-slate-500 sm:text-[10px]">
                        Explore
                      </div>
                    </div>
                  </div>

                  <div className="relative min-h-44 overflow-hidden rounded-2xl bg-blue-50 sm:min-h-64">
                    <img
                      src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=85"
                      alt="Modern interior design example"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14243A]/50 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/50 bg-white/90 p-3 backdrop-blur">
                      <div className="h-2 w-2/3 rounded-full bg-[#14243A]" />
                      <div className="mt-2 h-1.5 w-1/2 rounded-full bg-slate-300" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 px-2 pb-2 sm:gap-3 sm:px-4 sm:pb-4">
                  {[
                    { icon: ShieldCheck, title: 'Trust' },
                    { icon: Zap, title: 'Speed' },
                    { icon: Layers, title: 'Design' },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-slate-100 bg-slate-50 p-3"
                    >
                      <item.icon size={18} className="text-blue-600" />
                      <p className="mt-2 text-xs font-bold text-slate-700">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -left-4 top-1/3 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:flex">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Check size={21} />
                </span>
                <span>
                  <span className="block text-sm font-bold">Mobile friendly</span>
                  <span className="block text-xs text-slate-500">
                    Built for every screen
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-24 bg-[#F8FAFC] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeading
              label={t.servicesLabel}
              title={t.servicesTitle}
              accent={t.servicesAccent}
              text={t.servicesText}
            />

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {t.services.map((service) => {
                const Icon = service.icon
                return (
                  <article
                    key={service.number}
                    className="group rounded-3xl border border-slate-200/80 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                        <Icon size={26} strokeWidth={1.8} />
                      </span>
                      <span className="text-sm font-bold text-slate-300">
                        {service.number}
                      </span>
                    </div>
                    <h3 className="mt-7 text-xl font-bold tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {service.text}
                    </p>
                    <button
                      onClick={() => {
                        setForm((current) => ({
                          ...current,
                          service: service.title,
                        }))
                        goTo('contact')
                      }}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800"
                    >
                      {t.learnMore}
                      <ArrowRight size={16} />
                    </button>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="scroll-mt-24 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading
                label={t.portfolioLabel}
                title={t.portfolioTitle}
                accent={t.portfolioAccent}
                text={t.portfolioText}
              />
              <button
                onClick={() => goTo('contact')}
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-slate-200 px-5 py-3 text-sm font-bold transition hover:border-blue-300 hover:bg-blue-50 md:self-auto"
              >
                {t.primary}
                <ArrowUpRight size={17} />
              </button>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {t.projects.map((project, index) => (
                <article key={project.title} className="group">
                  <div className="relative overflow-hidden rounded-3xl bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                    />
                    <div className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-[10px] font-extrabold tracking-[0.12em] text-[#14243A] backdrop-blur">
                      {project.category}
                    </div>
                    <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue-600 shadow-lg transition group-hover:bg-blue-600 group-hover:text-white">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <h3 className="text-xl font-bold tracking-tight">
                      {project.title}
                    </h3>
                    <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                      {project.tag}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {project.text}
                  </p>
                  <button
                    onClick={() => {
                      setForm((current) => ({
                        ...current,
                        message: `I am interested in a website similar to the ${project.title} concept.`,
                      }))
                      goTo('contact')
                    }}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800"
                  >
                    {t.viewProject}
                    <ArrowRight size={16} />
                  </button>
                  {index === 0 && (
                    <p className="mt-2 text-xs text-slate-400">
                      {language === 'rw'
                        ? 'Ibi ni ibitekerezo by’icyitegererezo, si imirimo y’abakiriya yemejwe.'
                        : 'These are sample concepts, not verified client projects.'}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-[#14243A] py-20 text-white sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-blue-300">
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                  {t.processLabel}
                </div>
                <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  {t.processTitle}
                </h2>
                <p className="mt-5 max-w-md leading-7 text-slate-300">
                  {t.processText}
                </p>
                <button
                  onClick={() => goTo('contact')}
                  className="mt-8 rounded-full bg-white px-6 py-3.5 font-bold text-[#14243A] transition hover:bg-blue-50"
                >
                  {t.primary}
                  <ArrowRight className="ml-2 inline" size={17} />
                </button>
              </div>

              <div className="space-y-4">
                {t.steps.map((step) => (
                  <div
                    key={step.number}
                    className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition hover:bg-white/[0.09] sm:gap-6 sm:p-7"
                  >
                    <span className="text-3xl font-extrabold text-blue-300 sm:text-4xl">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold sm:text-xl">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About / benefits */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] bg-blue-50">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
                  alt="Bright, modern workspace"
                  loading="lazy"
                  className="h-80 w-full object-cover sm:h-[440px]"
                />
              </div>
              <div className="absolute -bottom-5 right-4 max-w-xs rounded-2xl border border-slate-100 bg-white p-5 shadow-xl sm:-right-4 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Clock3 size={22} />
                  </span>
                  <div>
                    <p className="font-bold">
                      {language === 'rw'
                        ? 'Ubufasha bujyanye n’icyo ukeneye'
                        : 'Support built around your needs'}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {language === 'rw'
                        ? 'Tuganira mbere yo gutangira.'
                        : 'We discuss the plan before starting.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 lg:pl-5">
              <SectionHeading
                label={t.aboutLabel}
                title={t.aboutTitle}
                accent={t.aboutAccent}
                text={t.aboutText}
              />

              <div className="mt-8 space-y-5">
                {[
                  {
                    title:
                      language === 'rw'
                        ? 'Imiterere igezweho'
                        : 'Modern presentation',
                    text:
                      language === 'rw'
                        ? 'Urubuga rutunganye kandi rworoshye gusoma.'
                        : 'A clean, professional layout that is easy to navigate.',
                  },
                  {
                    title:
                      language === 'rw'
                        ? 'Rukora kuri telefoni'
                        : 'Designed for mobile',
                    text:
                      language === 'rw'
                        ? 'Abakiriya bashobora kureba amakuru kuri telefoni cyangwa mudasobwa.'
                        : 'Customers can browse your information on phones and computers.',
                  },
                  {
                    title:
                      language === 'rw'
                        ? 'Korohereza abakiriya kukugeraho'
                        : 'Clear contact options',
                    text:
                      language === 'rw'
                        ? 'Dushyiramo uburyo bwo guhamagara cyangwa kwandikira kuri WhatsApp.'
                        : 'Make it easier for visitors to call or message your business.',
                  },
                ].map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Check size={16} />
                    </span>
                    <div>
                      <h3 className="font-bold">{benefit.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {benefit.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#F8FAFC] py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
            <div>
              <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                FAQ
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {language === 'rw'
                  ? 'Ibibazo bikunze kubazwa.'
                  : 'Questions businesses often ask.'}
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                {language === 'rw'
                  ? 'Dore ibisubizo ku bibazo ushobora kuba ufite mbere yo gutangira.'
                  : 'Here are answers to common questions before starting a project.'}
              </p>
            </div>

            <div className="space-y-3">
              {t.faqs.map((faq, index) => (
                <div
                  key={faq.q}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  <button
                    onClick={() =>
                      setOpenFaq((current) =>
                        current === index ? -1 : index,
                      )
                    }
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-bold sm:px-6"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-blue-600 transition ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-5 text-sm leading-7 text-slate-600 sm:px-6">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="overflow-hidden rounded-[2rem] bg-blue-50">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative overflow-hidden bg-blue-600 p-7 text-white sm:p-10 lg:p-12">
                  <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border-[40px] border-white/10" />
                  <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full border-[40px] border-white/10" />

                  <div className="relative">
                    <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-blue-100">
                      <span className="h-2 w-2 rounded-full bg-white" />
                      {t.contactLabel}
                    </div>
                    <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
                      {t.contactTitle}
                    </h2>
                    <p className="mt-5 leading-7 text-blue-100">
                      {t.contactText}
                    </p>

                    <div className="mt-10 space-y-5">
                      <a
                        href={WHATSAPP}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 transition hover:bg-white/20"
                      >
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-600">
                          <MessageCircle size={22} />
                        </span>
                        <span>
                          <span className="block text-xs text-blue-100">
                            WhatsApp / Phone
                          </span>
                          <span className="mt-1 block font-bold">
                            {PHONE}
                          </span>
                        </span>
                        <ArrowUpRight className="ml-auto" size={20} />
                      </a>

                      <a
                        href={`mailto:${EMAIL}`}
                        className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 transition hover:bg-white/20"
                      >
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-600">
                          <Mail size={22} />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-xs text-blue-100">
                            Email
                          </span>
                          <span className="mt-1 block break-all text-sm font-bold sm:text-base">
                            {EMAIL}
                          </span>
                        </span>
                        <ArrowUpRight className="ml-auto shrink-0" size={20} />
                      </a>

                      <div className="flex items-center gap-3 pt-2 text-sm text-blue-100">
                        <MapPin size={18} />
                        Rwanda
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-10 lg:p-12">
                  <h3 className="text-2xl font-bold">
                    {language === 'rw'
                      ? 'Tubwire umushinga wawe'
                      : 'Tell us about your project'}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {language === 'rw'
                      ? 'Uzuza aya makuru. Ubutumwa burafungukira kuri WhatsApp kugira ngo ubyemeze mbere yo kohereza.'
                      : 'Fill in these details. Your message will open in WhatsApp so you can review it before sending.'}
                  </p>

                  <form onSubmit={submitForm} className="mt-7 space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-bold"
                      >
                        {t.nameLabel} *
                      </label>
                      <input
                        id="name"
                        required
                        value={form.name}
                        onChange={(event) =>
                          setForm({ ...form, name: event.target.value })
                        }
                        placeholder={t.namePlaceholder}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="business"
                        className="mb-2 block text-sm font-bold"
                      >
                        {t.businessLabel}
                      </label>
                      <input
                        id="business"
                        value={form.business}
                        onChange={(event) =>
                          setForm({ ...form, business: event.target.value })
                        }
                        placeholder={t.businessPlaceholder}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="mb-2 block text-sm font-bold"
                      >
                        {t.serviceLabel}
                      </label>
                      <select
                        id="service"
                        value={form.service}
                        onChange={(event) =>
                          setForm({ ...form, service: event.target.value })
                        }
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      >
                        <option value="">{t.selectPlaceholder}</option>
                        {serviceOptions[language].map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-bold"
                      >
                        {t.messageLabel}
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={form.message}
                        onChange={(event) =>
                          setForm({ ...form, message: event.target.value })
                        }
                        placeholder={t.messagePlaceholder}
                        className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-3 rounded-full bg-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
                    >
                      <Send size={18} />
                      {t.sendButton}
                      <ArrowRight size={18} />
                    </button>
                    <p className="text-center text-xs leading-5 text-slate-500">
                      {language === 'rw'
                        ? 'Ubutumwa bwoherezwa ukoresheje WhatsApp. Nta makuru yoherezwa mu buryo bwikora.'
                        : 'Your message is prepared in WhatsApp. Nothing is sent automatically.'}
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <button
            onClick={() => goTo('home')}
            className="flex items-center gap-3 self-start text-left"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
              <Globe size={21} />
            </span>
            <span>
              <span className="block font-extrabold">Digital Solutions</span>
              <span className="block text-xs font-bold tracking-[0.2em] text-blue-600">
                RWANDA
              </span>
            </span>
          </button>

          <p className="max-w-sm text-sm leading-6 text-slate-500">
            {t.footerText}
          </p>

          <div className="flex flex-wrap gap-5 text-sm font-semibold text-slate-600">
            <button onClick={() => goTo('services')} className="hover:text-blue-600">
              {t.nav[1]}
            </button>
            <button onClick={() => goTo('portfolio')} className="hover:text-blue-600">
              {t.nav[2]}
            </button>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-blue-600">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-slate-100 px-5 py-5 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Digital Solutions Rwanda.{' '}
          {language === 'rw' ? 'Uburenganzira bwose burabitswe.' : 'All rights reserved.'}
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl shadow-green-900/20 transition hover:-translate-y-1 hover:bg-green-600"
      >
        <MessageCircle size={27} />
      </a>
    </div>
  )
}

export default App
