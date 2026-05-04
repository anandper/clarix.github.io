import { Link } from "react-router-dom";
import { ArrowRight, Code2, Cloud, Bot, GitBranch, ShieldCheck, Layers, Zap, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import softwareHero from "@/assets/software-hero.jpg";

const offerings = [
  { icon: Code2, title: "End-to-End Program Delivery", body: "From discovery through launch — scope, architecture, delivery, and stabilization owned by a senior operator." },
  { icon: Layers, title: "Engineering Org Leadership", body: "Fractional CTO, VP Engineering, and director-level leadership to stand up, scale, or turn around engineering organizations." },
  { icon: Cloud, title: "Cloud & Platform Modernization", body: "Azure, AWS, and GCP modernization aligned to the Well-Architected Framework with active FinOps governance." },
  { icon: Bot, title: "AI & ML Transformation", body: "RAG pipelines, LLM integration, ML-driven automation — production-grade, not proof-of-concept." },
  { icon: GitBranch, title: "DevSecOps & CI/CD", body: "Pipeline architecture, supply-chain security, and platform engineering to compress lead time without breaking compliance." },
  { icon: ShieldCheck, title: "Delivery in Regulated Environments", body: "SDLC patterns that satisfy FDA, HIPAA, SOC 2, and ISO without strangling velocity." },
];

const cases = [
  {
    n: "01",
    industry: "Insurance / FinServ",
    title: "Contact Center AI Transformation",
    challenge: "High ticket resolution times and manual knowledge management across a sprawling support organization.",
    solution: "Architected a RAG pipeline on Azure OpenAI and deployed an LLM-powered IT support chatbot integrated with existing knowledge systems.",
    metric: "40%",
    metricLabel: "reduction in ticket resolution time",
  },
  {
    n: "02",
    industry: "Title Insurance",
    title: "Technical Debt Elimination",
    challenge: "A legacy Lender Integration System carrying ~90% technical debt and blocking every major release.",
    solution: "Applied a Strangler Fig modernization pattern with Salesforce and MuleSoft re-engineering — incrementally, with zero downtime.",
    metric: "90%",
    metricLabel: "technical debt eliminated · zero disruptions",
  },
  {
    n: "03",
    industry: "Real Estate / Retail",
    title: "Cloud Migration & Cost Optimization",
    challenge: "Legacy infrastructure, escalating licensing costs, and limited engineering leverage.",
    solution: "Executed Cloud Optimizely migration aligned to the Azure Well-Architected Framework with active FinOps governance.",
    metric: "70% / 30%",
    metricLabel: "infra cost reduction · cloud cost savings",
  },
  {
    n: "04",
    industry: "Manufacturing",
    title: "AI-Driven Delivery Acceleration",
    challenge: "Slow SDLC, manual QA processes, and inconsistent defect detection across product lines.",
    solution: "Led an AI-centric SDLC transition with ML-based test automation and intelligent defect triage.",
    metric: "25% / 40%",
    metricLabel: "delivery acceleration · defect detection improvement",
  },
];

const stack = [
  { group: "Cloud", items: ["Azure", "AWS", "GCP"] },
  { group: "AI / Data", items: ["Azure OpenAI", "LangChain", "Databricks", "Snowflake"] },
  { group: "Platforms", items: ["Salesforce", "MuleSoft", "Kubernetes"] },
  { group: "Delivery", items: ["GitHub Actions", "Terraform", "Datadog"] },
];

const Software = () => (
  <div className="bg-ink text-ivory">
    {/* HERO — distinct dark identity */}
    <section className="relative -mt-20 pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={softwareHero} alt="" width={1920} height={1280} className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/85 to-ink" />
      </div>
      <div className="container-tight pt-20 md:pt-28 pb-24 md:pb-36 relative">
        <div className="eyebrow text-ivory/60"><span className="h-px w-8 bg-brass" />Software Development Practice</div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-light leading-[0.98] mt-6 text-ivory text-balance max-w-4xl">
          Engineering leadership for software that <em className="italic text-brass font-normal">ships.</em>
        </h1>
        <p className="mt-8 text-lg md:text-xl text-ivory/70 max-w-2xl leading-relaxed text-pretty">
          A dedicated practice for technology modernization, AI delivery, and engineering org leadership — operating with the velocity tech demands and the rigor regulated industries require.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button asChild variant="brass" size="xl">
            <Link to="/contact">Start a Software Engagement <ArrowRight /></Link>
          </Button>
          <Button asChild variant="outlineIvory" size="xl">
            <Link to="/services">See advisory services</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* OFFERINGS */}
    <section className="py-24 md:py-32 relative">
      <div className="container-tight">
        <div className="max-w-3xl">
          <div className="eyebrow text-ivory/60"><span className="h-px w-8 bg-brass" />What we deliver</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] mt-4 text-ivory text-balance">
            Six offerings. One team of senior operators.
          </h2>
          <p className="mt-6 text-lg text-ivory/70 leading-relaxed">
            Engagements scoped from 6-week sprints to multi-year transformations — always principal-led.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px mt-16 bg-ivory/10 border border-ivory/10">
          {offerings.map((o) => (
            <div key={o.title} className="bg-ink p-8 md:p-10 hover:bg-ink-soft/40 transition-colors duration-500 group">
              <div className="size-12 grid place-items-center bg-brass/15 text-brass border border-brass/30">
                <o.icon className="size-5" />
              </div>
              <h3 className="font-display text-2xl mt-8 text-ivory leading-snug">{o.title}</h3>
              <p className="mt-4 text-ivory/65 leading-relaxed text-sm">{o.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* STACK */}
    <section className="py-20 border-y border-ivory/10 bg-ink-soft/20">
      <div className="container-tight">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="eyebrow text-ivory/60"><span className="h-px w-8 bg-brass" />Tooling fluency</div>
            <h2 className="font-display text-3xl md:text-4xl font-light mt-4 text-ivory max-w-xl text-balance">
              Hands-on across modern cloud, data, and AI stacks.
            </h2>
          </div>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-px bg-ivory/10 border border-ivory/10">
          {stack.map((s) => (
            <div key={s.group} className="bg-ink p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-brass">{s.group}</div>
              <ul className="mt-4 space-y-2">
                {s.items.map((i) => (
                  <li key={i} className="text-ivory/85 text-sm">{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CASE STUDIES */}
    <section className="py-24 md:py-32">
      <div className="container-tight">
        <div className="max-w-3xl">
          <div className="eyebrow text-ivory/60"><span className="h-px w-8 bg-brass" />Selected work</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] mt-4 text-ivory text-balance">
            Software case studies.
          </h2>
          <p className="mt-6 text-lg text-ivory/70 leading-relaxed">
            Outcomes from recent software, AI, and cloud engagements. Client names withheld per confidentiality.
          </p>
        </div>

        <div className="space-y-px bg-ivory/10 border border-ivory/10 mt-16">
          {cases.map((c) => (
            <article key={c.n} className="bg-ink grid md:grid-cols-12 gap-8 p-8 md:p-12 hover:bg-ink-soft/30 transition-colors duration-500">
              <div className="md:col-span-1">
                <div className="font-display text-3xl text-brass">{c.n}</div>
              </div>
              <div className="md:col-span-7">
                <div className="text-xs uppercase tracking-[0.2em] text-ivory/50">{c.industry}</div>
                <h3 className="font-display text-3xl md:text-4xl text-ivory mt-3 leading-tight text-balance">{c.title}</h3>
                <div className="mt-6 grid sm:grid-cols-2 gap-6">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-ivory/50 mb-2">Challenge</div>
                    <p className="text-ivory/85 leading-relaxed text-sm">{c.challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-ivory/50 mb-2">What Clarix did</div>
                    <p className="text-ivory/85 leading-relaxed text-sm">{c.solution}</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4 md:border-l md:border-ivory/10 md:pl-8 flex flex-col justify-center">
                <div className="text-xs uppercase tracking-[0.2em] text-ivory/50">Outcome</div>
                <div className="font-display text-4xl md:text-5xl font-light text-ivory mt-3 leading-none">{c.metric}</div>
                <div className="mt-3 text-sm text-ivory/65 leading-relaxed">{c.metricLabel}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative overflow-hidden border-t border-ivory/10">
      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] [background-size:24px_24px]" />
      <div className="container-tight py-24 md:py-32 relative grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-8">
          <div className="eyebrow text-ivory/60"><span className="h-px w-8 bg-brass" />Let's build</div>
          <h2 className="font-display text-4xl md:text-6xl font-light leading-[1.05] mt-4 text-ivory text-balance">
            Have a software bet that has to land?
          </h2>
          <p className="mt-6 text-lg text-ivory/70 max-w-xl text-pretty">
            Tell us the problem. We'll tell you honestly whether we're the right team — and if so, how we'd approach it.
          </p>
        </div>
        <div className="md:col-span-4 md:text-right">
          <Button asChild variant="brass" size="xl">
            <Link to="/contact">Schedule a Conversation <ArrowRight className="ml-1" /></Link>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default Software;
