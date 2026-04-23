import Image from "next/image";

export default function MissionLineWebsite() {
  const services = [
    {
      title: "Logistics Services",
      description:
        "Reliable logistics support tailored for commercial and government clients, with a focus on coordination, delivery support, and dependable service.",
    },
    {
      title: "Construction Services",
      description:
        "Professional construction support designed to meet project requirements with quality workmanship, responsiveness, and attention to detail.",
    },
    {
      title: "Project Support",
      description:
        "Flexible operational support for businesses and agencies that need organized, timely, and mission-focused execution.",
    },
  ];

  const pages = [
    "Home",
    "About",
    "Services",
    "Capabilities",
    "Government",
    "Projects",
    "Contact",
  ];

  const coreValues = [
    {
      title: "Integrity",
      description:
        "We operate with honesty, accountability, and professionalism in every client relationship.",
    },
    {
      title: "Reliability",
      description:
        "We are committed to timely service, clear communication, and dependable execution.",
    },
    {
      title: "Quality",
      description:
        "We focus on delivering practical, high-standard results that meet project requirements.",
    },
    {
      title: "Service",
      description:
        "We support our clients with responsiveness, respect, and mission-focused attention to detail.",
    },
  ];

  const capabilities = [
    "Logistics coordination and operational support",
    "Construction support services",
    "Project assistance for government and commercial clients",
    "Responsive client communication and service delivery",
    "Flexible support tailored to project requirements",
    "Dependable performance with a focus on quality and efficiency",
  ];

  const companyInfo = [
    {
      label: "Business Name",
      value: "MissionLine Logistics Services & Construction",
    },
    { label: "Location", value: "Ashburn, Virginia" },
    { label: "Phone", value: "571-307-8095" },
    { label: "Email", value: "info@missionlineusa.com" },
    { label: "Business Type", value: "Small Business" },
    { label: "SAM Registration", value: "Pending / To Be Added" },
    { label: "UEI", value: "To Be Added" },
    { label: "CAGE Code", value: "To Be Added" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="MissionLine logo"
              width={220}
              height={90}
              className="h-20 w-auto object-contain md:h-24"
              priority
            />
          </div>
          <nav className="hidden gap-6 md:flex">
            {pages.map((page) => (
              <a
                key={page}
                href={`#${page.toLowerCase()}`}
                className="text-sm font-medium text-slate-200 transition hover:text-white"
              >
                {page}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-2xl bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-500"
          >
            Get a Quote
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,6,23,0.97),rgba(15,23,42,0.9),rgba(30,41,59,0.82))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.05),rgba(255,255,255,0))]" />
          <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:36px_36px]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-slate-200 shadow-sm backdrop-blur">
                Supporting military, federal, and commercial work
              </p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                Reliable logistics and construction support you can count on.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
                MissionLine delivers dependable logistics services and construction support with a commitment to professionalism, responsiveness, and quality execution.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm"
                >
                  Explore Services
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-sm backdrop-blur ring-1 ring-white/10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
                  Mission Statement
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-100">
                  To provide efficient, trustworthy, and mission-driven logistics and construction services that help clients complete projects with confidence.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-blue-400/20 bg-blue-950/60 p-6 text-white shadow-sm backdrop-blur">
                  <p className="text-sm text-slate-300">Focused on</p>
                  <p className="mt-2 text-2xl font-semibold">Dependability</p>
                </div>
                <div className="rounded-3xl border border-red-300/20 bg-white/10 p-6 shadow-sm ring-1 ring-white/10 backdrop-blur">
                  <p className="text-sm text-slate-300">Serving</p>
                  <p className="mt-2 text-2xl font-semibold text-white">
                    Commercial & Government Clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-y border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">About Us</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Built on service, reliability, and strong client relationships.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                MissionLine is a Virginia-based business offering logistics services and construction support for clients who value dependable execution and clear communication.
              </p>
              <p>
                We are committed to delivering practical solutions, staying responsive to client needs, and supporting projects with professionalism from start to finish.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 md:grid-cols-2">
            <div className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Mission</p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                To deliver responsive, high-quality logistics, construction, and operational support services that meet the needs of government and commercial clients with precision, accountability, and excellence.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Vision</p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                To grow into a trusted contracting partner known for reliable performance, strong values, and exceptional service across every mission we support.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-6 pb-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Core Values</p>
            <div className="mt-8 grid gap-6 md:grid-cols-4">
              {coreValues.map((value) => (
                <div key={value.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Services</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Solutions tailored to your operational and project needs.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="capabilities" className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Capabilities</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Ready to support commercial and government project needs.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                MissionLine provides flexible support services designed to help clients execute projects efficiently and professionally. This section can also be used as the foundation for a future capabilities statement.
              </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {capabilities.map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-5 py-4 ring-1 ring-slate-200">
                  <p className="font-medium text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="government" className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Government Contracting</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Positioned to support public sector and mission-driven work.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                MissionLine is building a strong foundation to pursue government and commercial opportunities through dependable service, organized operations, and client-focused execution.
              </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {companyInfo.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <p className="text-sm uppercase tracking-wide text-slate-400">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-slate-900 text-white">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Projects</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Ready to support your next project.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              This section can later feature completed projects, capabilities, certifications, or past performance details to help build credibility with future clients.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                "Capability highlights",
                "Past performance examples",
                "Industry certifications",
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-xl font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Let’s discuss your logistics or construction needs.
              </h2>
              <div className="mt-8 space-y-4 text-lg text-slate-700">
                <p>
                  <span className="font-semibold">Phone:</span> 571-307-8095
                </p>
                <p>
                  <span className="font-semibold">Email:</span> info@missionlineusa.com
                </p>
                <p>
                  <span className="font-semibold">Location:</span> Ashburn, VA
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="grid gap-4">
                <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none" placeholder="Your Name" />
                <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none" placeholder="Your Email" />
                <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none" placeholder="Subject" />
                <textarea className="min-h-[140px] rounded-2xl border border-slate-300 px-4 py-3 outline-none" placeholder="Tell us about your project" />
                <button className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm">
                  Send Inquiry
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 MissionLine Logistics Services & Construction. All rights reserved.</p>
          <p>Ashburn, Virginia</p>
        </div>
      </footer>
    </div>
  );
}
