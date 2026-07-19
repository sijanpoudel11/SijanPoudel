import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Globe,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import { profile, navigation } from "./data/content";
import { projects } from "./data/projects";
import { experiences } from "./data/experiences";
import { skills } from "./data/skills";
import { localeOptions, translations } from "./data/localization";
import { cn } from "./utils/cn";
import { useContactForm } from "./hooks/useContactForm";

const skillIcons = {
  swift: Sparkles,
  database: Sparkles,
  mobile: Sparkles,
  shield: Sparkles,
  palette: Sparkles,
  firebase: Sparkles,
  responsive: Sparkles,
  plug: Sparkles,
};

function App() {
  const [locale, setLocale] = useState("en");
  const [activeGallery, setActiveGallery] = useState(null);
  const t = useMemo(() => translations[locale], [locale]);
  const { formData, status, handleChange, handleSubmit } = useContactForm();

  useEffect(() => {
    if (!activeGallery) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveGallery(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeGallery]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a
            href="#intro"
            className="text-lg font-semibold tracking-wide text-white"
          >
            {profile.name}
          </a>
          <div className="flex items-center gap-4">
            <nav className="hidden gap-6 md:flex">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
              <Globe size={16} className="text-fuchsia-300" />
              <select
                value={locale}
                onChange={(event) => setLocale(event.target.value)}
                className="bg-transparent text-sm text-slate-200 outline-none"
              >
                {localeOptions.map((option) => (
                  <option
                    key={option.code}
                    value={option.code}
                    className="bg-slate-900 text-slate-200"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section
          id="intro"
          className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28"
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-3 py-1 text-sm text-fuchsia-200">
              <Sparkles size={16} />
              {t.hero.badge}
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
                {profile.name}
              </h1>
              <p className="max-w-2xl text-lg text-slate-300 sm:text-xl">
                {profile.title} with 4+ years of experience building polished
                iOS and Flutter applications for healthcare, education, events,
                and productivity.
              </p>
              <p className="max-w-2xl text-base leading-8 text-slate-400">
                {profile.summary}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-fuchsia-500 px-5 py-3 font-medium text-white transition hover:bg-fuchsia-400"
              >
                {t.hero.ctaPrimary} <ArrowRight size={18} />
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 font-medium text-slate-200 transition hover:border-fuchsia-400 hover:text-white"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 to-violet-600 text-white">
                <Sparkles size={22} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  Focus
                </p>
                <p className="text-xl font-semibold text-white">
                  {t.hero.focusTitle}
                </p>
              </div>
            </div>
            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p className="font-medium text-white">Core strengths</p>
                <p className="mt-2 leading-7">{t.hero.focusDesc}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p className="font-medium text-white">Industries delivered</p>
                <p className="mt-2 leading-7">{t.hero.industries}</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="border-t border-white/10 bg-slate-900/80"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300">
                Selected work
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                {t.sections.projectsTitle}
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                {t.sections.projectsSubtitle}
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 shadow-xl shadow-black/20"
                >
                  <div className="flex h-40 items-center justify-center border-b border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-slate-900 to-slate-800">
                    <div className="text-center">
                      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                        {t.sections.galleryLabel}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        {project.title}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-5 p-7">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-slate-400">
                        {project.shortDescription}
                      </p>
                    </div>
                    <p className="text-sm leading-7 text-slate-300">
                      {project.description}
                    </p>
                    <ul className="space-y-2 text-sm text-slate-300">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-fuchsia-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => setActiveGallery(project)}
                        className="rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-2 text-sm font-medium text-fuchsia-200 transition hover:bg-fuchsia-500/20"
                      >
                        {t.buttons.viewGallery}
                      </button>
                      <a
                        href={project.appStoreUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-2 text-sm font-medium text-fuchsia-200 transition hover:bg-fuchsia-500/20"
                      >
                        {t.buttons.appStore}
                      </a>
                      {project.playStoreUrl ? (
                        <a
                          href={project.playStoreUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-fuchsia-400 hover:text-white"
                        >
                          {t.buttons.playStore}
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300">
              Capabilities
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              {t.sections.skillsTitle}
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              {t.sections.skillsSubtitle}
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skills.map((skill, index) => {
              const Icon = skillIcons[skill.icon] || Sparkles;
              return (
                <div
                  key={skill.title}
                  className={cn(
                    "rounded-3xl border border-white/10 bg-white/5 p-6",
                    index % 2 === 1 && "md:translate-y-8",
                  )}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-500/15 text-fuchsia-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {skill.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section
          id="experience"
          className="border-t border-white/10 bg-slate-900/80"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300">
                Experience
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                {t.sections.experienceTitle}
              </h2>
            </div>
            <div className="mt-12 space-y-6">
              {experiences.map((experience) => (
                <article
                  key={experience.company}
                  className="rounded-3xl border border-white/10 bg-slate-950/70 p-8"
                >
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <p className="text-lg font-semibold text-white">
                        {experience.role} @ {experience.company}
                      </p>
                      <p className="mt-2 text-sm text-slate-400">
                        {experience.summary}
                      </p>
                    </div>
                    <div className="text-sm text-slate-400">
                      <p>{experience.period}</p>
                      <p className="mt-1">{experience.location}</p>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-2 text-sm text-slate-300">
                    {experience.responsibilities.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-2 w-2 rounded-full bg-fuchsia-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-slate-900 p-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300">
                  Contact
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white">
                  {t.sections.contactTitle}
                </h2>
                <p className="mt-4 text-lg text-slate-400">
                  {t.sections.contactSubtitle}
                </p>
              </div>
              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-fuchsia-300" />
                  {profile.address}
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-fuchsia-300" />
                  {profile.email}
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-fuchsia-300" />
                  {profile.phone}
                </div>
              </div>
              <div className="flex gap-3">
                {profile.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-fuchsia-400 hover:text-white"
                  >
                    <Globe size={16} />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
                        <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-3xl border border-white/10 bg-slate-950/70 p-6"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-slate-300">
                  <span className="mb-2 block">{t.forms.name}</span>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none ring-0"
                    placeholder="Your name"
                  />
                </label>
                <label className="text-sm text-slate-300">
                  <span className="mb-2 block">{t.forms.email}</span>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none ring-0"
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <label className="block text-sm text-slate-300">
                <span className="mb-2 block">{t.forms.message}</span>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none ring-0"
                  placeholder="Tell me about your idea..."
                />
              </label>
              <button
                type="submit"
                disabled={status.submitting}
                className="rounded-full bg-fuchsia-500 px-5 py-3 font-medium text-white transition hover:bg-fuchsia-400 disabled:cursor-not-allowed disabled:bg-fuchsia-800"
              >
                {status.submitting
                  ? t.buttons.sendingMessage
                  : t.buttons.sendMessage}
              </button>
              {status.success && (
                <p className="text-sm text-green-400">
                  {t.forms.successMessage}
                </p>
              )}
              {status.error && (
                <p className="text-sm text-red-400">{status.error}</p>
              )}
            </form>
          </div>
        </section>
      </main>

      {activeGallery ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm sm:p-6"
          onClick={() => setActiveGallery(null)}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-6xl flex-col rounded-[28px] border border-white/10 bg-slate-950/95"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex-shrink-0 border-b border-white/10 p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300">
                    {t.sections.galleryTitle}
                  </p>
                  <h3 className="text-2xl font-semibold text-white">
                    {activeGallery.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveGallery(null)}
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:border-fuchsia-400 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="overflow-auto p-4 sm:p-6">
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {activeGallery.gallery.map((image, index) => (
                  <div
                    key={`${activeGallery.id}-${index}`}
                    className="flex justify-center rounded-3xl border border-white/10 bg-slate-900/80 p-3"
                  >
                    <img
                      src={image}
                      alt={`${activeGallery.title} screenshot ${index + 1}`}
                      className="w-full max-w-[280px] rounded-2xl border border-white/10 object-contain shadow-lg"
                      style={{ aspectRatio: "9 / 19.5", objectFit: "contain" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
