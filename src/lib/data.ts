export const SERVICES = [
  {
    name: "Workers' Compensation",
    desc: "Multi-state programs, assigned-risk alternatives, and experience-mod strategy.",
    body: "From single-state policies to complex multi-jurisdiction programs, we structure coverage around your class codes, payroll, and loss history — including assigned-risk alternatives and group programs for accounts that need specialty market access.",
  },
  {
    name: "General Liability",
    desc: "Primary GL for high-hazard and contractor classes.",
    body: "We place primary general liability across a wide range of trade and contractor classes — including the operations that require surplus-lines access, such as artisan contractors, security firms, and habitational risk.",
  },
  {
    name: "Commercial Auto",
    desc: "Fleet and non-fleet, hired and non-owned, high-radius.",
    body: "Local and long-haul fleets, hired and non-owned exposure, and high-radius operations — including accounts with adverse auto loss histories that need a specialty market and a credible safety story.",
  },
  {
    name: "Umbrella & Excess Liability",
    desc: "Layered excess capacity to satisfy contractual and statutory limits.",
    body: "We build layered excess towers to meet the contractual, lease, and statutory limits your business is held to — coordinating underlying coverage so there are no gaps when a large loss tests the program.",
  },
  {
    name: "Commercial Property",
    desc: "Building, BPP, and business income for owner-occupied and habitational risk.",
    body: "Building, business personal property, and business income coverage for owner-occupied, investor, and habitational exposures — including older construction and protection-class challenges that standard property markets shy away from.",
  },
  {
    name: "Employment Practices Liability",
    desc: "EPLI for employers exposed to wage-and-hour and discrimination claims.",
    body: "As headcount grows, HR missteps turn into claims. We place EPLI sized to your workforce and jurisdiction, with attention to wage-and-hour, discrimination, and retaliation exposure that general liability never covers.",
  },
  {
    name: "Cyber Liability",
    desc: "First- and third-party cyber for firms holding sensitive data.",
    body: "First-party recovery and third-party liability for any firm holding client, patient, or employee data — structured around your actual security posture rather than a checkbox application, so the coverage holds up at claim time.",
  },
  {
    name: "Surety & Bonds",
    desc: "Contract, license, and permit bonds through specialty surety markets.",
    body: "Contract, license, and permit bonds placed through specialty surety markets — including accounts that need a relationship-driven underwriting approach rather than a purely credit-scored one.",
  },
  {
    name: "Specialty & E&S Lines",
    desc: "Excess & surplus placements for distressed and unusual exposures.",
    body: "When the risk is distressed, high-hazard, or simply unusual, the Excess & Surplus market is where it gets written. This is our home field — we know which carriers have appetite and how to present the account so they take it seriously.",
  },
];

export const INDUSTRIES = [
  {
    name: "Construction & Contractors",
    cat: "Construction & Trades",
    desc: "General contractors, subcontractors, and the full range of specialty trades — including the high-hazard classes most markets avoid. Roofing, restoration, demolition, asbestos abatement, environmental remediation, landscaping, grounds maintenance, woodworking, and custom fabrication. If it's built or maintained with hands, we can place it.",
  },
  {
    name: "Security & Guard Services",
    cat: "Security Guards",
    desc: "Armed and unarmed guards, patrol, and event security — classes most carriers decline. We place general liability, professional liability, and workers' compensation for guard payrolls across single-state and multi-jurisdiction operations.",
  },
  {
    name: "Healthcare & Human Services",
    cat: "Healthcare & Human Services",
    desc: "The full continuum of care and the organizations that support it — hospitals, nursing homes, assisted living facilities, group homes, home health agencies, adult day programs, hospice, social service organizations, and non-profits of all kinds. We structure programs that address professional liability, abuse and molestation, and the regulatory complexity that comes with serving vulnerable populations.",
  },
  {
    name: "Staffing — All Classes",
    cat: "Staffing",
    desc: "Every staffing sector — medical, allied health, administrative, light industrial, skilled trades, and IT. We place general liability, professional liability, workers' compensation, and employment practices coverage for staffing agencies placing workers across industries and jurisdictions, including high-volume and multi-state programs.",
  },
  {
    name: "Manufacturing",
    cat: "Manufacturing",
    desc: "Light and heavy manufacturing of all kinds — food processing, metal fabrication, plastics, electronics, chemical manufacturing, printing, and more. We address product liability, commercial property, workers' compensation, and the equipment breakdown and business interruption exposures that define a production floor.",
  },
  {
    name: "Transportation & Commercial Auto Fleets",
    cat: "Transportation",
    desc: "Local and long-haul fleets, high-radius operations, and accounts carrying large-loss auto histories that need a specialty market and a credible safety narrative.",
  },
  {
    name: "Professional Services",
    cat: "Professional",
    desc: "Errors & omissions and management liability for firms whose core exposure is their expertise — attorneys, accountants, consultants, engineers, architects, real estate professionals, insurance agents, technology companies, marketing and PR agencies, and financial advisors. We match coverage to the specific liability profile of each profession rather than fitting every firm into the same policy form.",
  },
];

export const FILTERS = [
  "All",
  "Construction & Trades",
  "Security Guards",
  "Healthcare & Human Services",
  "Staffing",
  "Manufacturing",
  "Transportation",
  "Professional",
];

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string };

export interface Article {
  title: string;
  summary: string;
  cat: string;
  date: string;
  slug: string;
  body: ArticleBlock[];
}

export const ARTICLES: Article[] = [
  {
    title: "What Is the E&S Market and Why Does It Matter",
    summary:
      "Why your toughest accounts end up in surplus lines — and what that means for price, coverage, and flexibility.",
    cat: "Markets",
    date: "May 2026",
    slug: "es-market-explained",
    body: [
      {
        type: "p",
        text: "Most business owners never think about which insurance market their policy came from. But if your broker is placing you in the Excess & Surplus lines market, it's worth understanding what that means — and why it doesn't have to be bad news.",
      },
      { type: "h2", text: "Two markets, one decision" },
      {
        type: "p",
        text: "The standard commercial insurance market operates through \"admitted\" carriers — companies licensed in your state, subject to state-regulated rates and forms. When you buy a standard GL or property policy from a well-known carrier, you're in the admitted market.",
      },
      {
        type: "p",
        text: "The E&S market is different. Excess & Surplus lines carriers are not admitted in most states, which means they operate under different rules. They can set their own rates, use their own policy forms, and take on risks that admitted carriers won't touch. In exchange, their policies aren't backed by your state's guaranty fund.",
      },
      { type: "h2", text: "Why accounts end up in E&S" },
      {
        type: "p",
        text: "An account lands in the E&S market for one of three reasons: the type of operation is unusual or high-hazard; the loss history is distressed; or the coverage need is too specific for a standard form to address cleanly.",
      },
      {
        type: "p",
        text: "None of these automatically means the coverage is inferior. Many E&S carriers are financially strong, well-capitalized, and excellent claims payers. What changes is the pricing flexibility and the policy language — which can actually work in your favor when your risk has characteristics that standard markets price punitively.",
      },
      { type: "h2", text: "What it means for price and flexibility" },
      {
        type: "p",
        text: "Because E&S carriers can deviate from rate filings and standard forms, they have more room to price a risk individually. That can go either direction — higher for distressed accounts, lower for unusual risks that admitted markets misprice because they don't understand them.",
      },
      {
        type: "p",
        text: "It also means the coverage can be tailored. An E&S carrier writing a specialty contractor can build a policy that fits the actual operations, rather than forcing them into a standard form with exclusions that gut the coverage.",
      },
      { type: "h2", text: "What to ask your broker" },
      {
        type: "p",
        text: "If your broker is placing you in the E&S market, ask: Why? What admitted carriers were approached? What does the financial rating look like on the E&S carrier? And critically — what's excluded that a standard form would have covered? A good broker can answer all of these without hesitation. If they can't, that's worth paying attention to.",
      },
    ],
  },
  {
    title: "How to Read a Loss Run Report",
    summary:
      "The three numbers underwriters actually look at, and how to clean up yours before renewal.",
    cat: "Underwriting",
    date: "Apr 2026",
    slug: "how-to-read-a-loss-run",
    body: [
      {
        type: "p",
        text: "At renewal time, your broker will request a loss run report from your current carrier. It's a ledger of every claim you've filed over the past three to five years. Underwriters read it before they quote. You should know how to read it too.",
      },
      { type: "h2", text: "What a loss run shows" },
      {
        type: "p",
        text: "A standard loss run shows the date of each claim, a brief description, the amounts paid and reserved, and whether the claim is open or closed. That's it — but those four data points tell an underwriter a great deal about how your business operates.",
      },
      { type: "h2", text: "The three numbers underwriters focus on" },
      {
        type: "p",
        text: "Frequency: How many claims have you had? One large claim reads very differently from six small ones. Frequency signals something about your operations, safety culture, or claims reporting habits. High frequency — even at low dollar amounts — is often more damaging to your renewal than a single large loss.",
      },
      {
        type: "p",
        text: "Severity: What did each claim cost? A single large claim from a freak accident reads differently from a pattern of mid-size claims that suggests ongoing exposure. Underwriters distinguish between shock losses and systemic problems.",
      },
      {
        type: "p",
        text: "Loss ratio: Your total incurred losses divided by your total premium. A loss ratio under 60% is generally considered acceptable. Above 100% means the carrier has paid out more than you've paid in — and they will price accordingly at renewal.",
      },
      { type: "h2", text: "What \"incurred\" means and why it matters" },
      {
        type: "p",
        text: "Loss runs show incurred amounts — the amount paid plus whatever the carrier has reserved for future payments on open claims. Reserves can be conservative or aggressive depending on the carrier and adjuster. A claim showing a $200,000 reserve isn't necessarily going to cost $200,000 — but it's what underwriters see when they evaluate your account.",
      },
      {
        type: "p",
        text: "Before renewal, ask your broker to pull the loss run and review open reserves. If a reserve looks inflated relative to the facts of the claim, there may be room to push back — or at least to explain the narrative to underwriters proactively.",
      },
      { type: "h2", text: "How to clean up before renewal" },
      {
        type: "p",
        text: "You can't change history, but you can shape the narrative. If you've had losses, document what changed: new safety procedures, equipment upgrades, personnel changes, a completed training program. Underwriters have discretion, and a credible story about what you've done since a bad loss period carries real weight.",
      },
      {
        type: "p",
        text: "Close open claims wherever possible before renewal. An open claim with a reserve hurts more than a closed claim at the same dollar amount, because open claims signal uncertainty. Work with your broker to push the carrier on resolution well ahead of your renewal date.",
      },
    ],
  },
  {
    title: "Workers' Comp Audit Survival Guide",
    summary:
      "What to document, what to dispute, and how to avoid a five-figure surprise at year-end audit.",
    cat: "Compliance",
    date: "Mar 2026",
    slug: "workers-comp-audit-guide",
    body: [
      {
        type: "p",
        text: "Workers' compensation premiums are estimated at the start of the policy year based on projected payroll. At the end of the year, the carrier audits your actual payroll and adjusts the premium accordingly. If your payroll came in higher than estimated, you owe more. The audit bill can be a significant surprise — but with the right documentation, it's manageable.",
      },
      { type: "h2", text: "What the auditor is looking for" },
      {
        type: "p",
        text: "The carrier's auditor — either in person or via mail — will ask for your payroll records broken down by class code. Class codes are the four-digit categories that describe what each employee does. A contractor might have employees classified as laborers, supervisors, and office staff — each at a different rate. If payroll isn't properly allocated to class codes, the auditor will often default to the highest applicable rate.",
      },
      { type: "h2", text: "What to have ready" },
      {
        type: "p",
        text: "Payroll records by employee and job function. Time records if employees split time between class codes — for example, a field supervisor who also does physical labor versus purely supervisory work. Certificates of insurance for every subcontractor you used during the policy year. If a subcontractor can't produce a valid COI, their payroll may be pulled into your audit.",
      },
      { type: "h2", text: "What to dispute" },
      {
        type: "p",
        text: "Auditors make mistakes. Class code misclassifications are common, particularly for employees who perform multiple functions. If an office employee gets lumped into a field classification, that's worth disputing with documentation.",
      },
      {
        type: "p",
        text: "Overtime is another area to watch. Workers' comp premiums are typically calculated on straight-time payroll only — the premium portion of overtime (the extra half) is usually excluded. Make sure your payroll records separate straight time from overtime, or you may end up paying premium on dollars you don't owe.",
      },
      { type: "h2", text: "How to avoid the year-end surprise" },
      {
        type: "p",
        text: "Update your payroll estimate mid-year if your headcount or wages have changed significantly. Most carriers will adjust the policy on request. A large variance between estimated and actual payroll is exactly what produces a large audit bill — keeping the estimate current throughout the year keeps the gap small and the surprises manageable.",
      },
    ],
  },
  {
    title: "EPLI Basics for Growing Employers",
    summary:
      "The headcount threshold that quietly turns ordinary HR mistakes into covered claims.",
    cat: "Coverage",
    date: "Feb 2026",
    slug: "epli-basics-for-growing-employers",
    body: [
      {
        type: "p",
        text: "Employment Practices Liability Insurance — EPLI — covers your business against claims made by employees alleging wrongful termination, discrimination, harassment, or retaliation. As headcount grows, the frequency of these claims grows with it. Understanding what EPLI covers, what it doesn't, and when to buy it can save a growing employer a significant amount of money and exposure.",
      },
      { type: "h2", text: "What EPLI covers" },
      {
        type: "p",
        text: "A standard EPLI policy responds to claims alleging employment-related wrongful acts — discrimination based on a protected class (age, race, gender, disability, religion), sexual harassment, wrongful termination, failure to promote, and retaliation for protected activity. It pays defense costs and, if covered, settlements or judgments.",
      },
      {
        type: "p",
        text: "It also typically covers claims from job applicants, not just current or former employees. A candidate who alleges discriminatory hiring practices can trigger the policy.",
      },
      { type: "h2", text: "The headcount threshold — and why it's not what you think" },
      {
        type: "p",
        text: "Many employers assume EPLI is for large companies because federal employment law — Title VII, the ADA, the ADEA — kicks in at 15 employees. That's partly true. But state employment laws in most states apply at much lower thresholds, sometimes with no minimum at all. A small employer in many states can face a discrimination claim with two or three employees.",
      },
      {
        type: "p",
        text: "The practical answer: if you have employees, you have exposure. For most employers with five or more people on payroll, the cost to defend a single employment claim — even one you win — routinely exceeds $50,000. That number alone tends to settle the question.",
      },
      { type: "h2", text: "What EPLI doesn't cover" },
      {
        type: "p",
        text: "Wage and hour claims — alleged violations of the Fair Labor Standards Act or state wage laws — are excluded from most standard EPLI policies. This is a significant gap, particularly for employers with hourly workforces, tip credits, or complex overtime situations. Some carriers offer wage and hour coverage as an endorsement; ask your broker specifically about this.",
      },
      {
        type: "p",
        text: "EPLI also doesn't cover intentional acts, criminal conduct, or ERISA violations. And it generally won't cover punitive damages in states where insurers are prohibited from paying them.",
      },
      { type: "h2", text: "What to look for in a policy" },
      {
        type: "p",
        text: "Defense costs: Are they inside the limits — reducing your available coverage as you defend — or outside? Outside limits is meaningfully better and worth paying for.",
      },
      {
        type: "p",
        text: "Prior acts coverage: EPLI is written on a claims-made basis, meaning the policy in force when the claim is made responds — not the policy in force when the alleged act occurred. Make sure the retroactive date on your policy covers the period you actually need. Gaps in prior acts coverage can leave you exposed to claims arising from conduct that happened before the policy started.",
      },
    ],
  },
];

export const COVERAGE_LINES = [
  "Workers' Compensation",
  "General Liability",
  "Commercial Auto",
  "Umbrella & Excess",
  "Commercial Property",
  "Employment Practices",
  "Cyber Liability",
  "Surety & Bonds",
  "Specialty / E&S",
];

export const STEP_LABELS = [
  "Business Basics",
  "Coverage Needed",
  "Current Program",
  "Your Details",
];
