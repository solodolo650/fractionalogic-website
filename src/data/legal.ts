/* Website legal policies (Disclaimer, Terms of Use, Privacy Policy), from
   Fractionalogic_Website_Legal_Policies.docx v1.0 with the street address removed and
   provider details matched to the live site. Blocks: h = heading, p = paragraph,
   ul = bullet list, table = head + rows. URLs and email addresses are linked on render. */
export type LegalBlock =
  | { h: string }
  | { p: string }
  | { ul: string[] }
  | { table: { head: string[]; rows: string[][] } };

export const legalUpdated = { label: '7 November 2026', iso: '2026-11-07' };

export const legal: Record<'disclaimer' | 'terms-of-use' | 'privacy-policy', { title: string; lede: string; blocks: LegalBlock[] }> = {
  "disclaimer": {
    "title": "Disclaimer",
    "lede": "The limits and context of the information on this website.",
    "blocks": [
      {
        "h": "1. About this website"
      },
      {
        "p": "Fractionalogic is a fractional leadership practice focused on senior marketing leadership, with Fractional Twinning extending an engagement through complementary executive expertise. This website is operated by E. Muralidharan, trading as Fractionalogic, based in Chennai, Tamil Nadu, India. “Fractionalogic,” “we,” “us,” and “our” refer to that operator."
      },
      {
        "p": "This Disclaimer applies to the public website, its staging or preview versions, and resources we make available through it, including articles, reports, presentations, frameworks, case studies, and linked commentary. Read it with our Terms of Use and Privacy Policy."
      },
      {
        "h": "2. Information, not an engagement"
      },
      {
        "p": "Website content is general business information. It is not a diagnosis of your business, a complete implementation plan, or advice tailored to your circumstances. Reading a resource, submitting an enquiry, applying to the partner roster, or having an introductory conversation does not by itself establish a paid engagement or an obligation to provide services."
      },
      {
        "p": "Any engagement requires a separately agreed written contract that defines the scope, executive capacity, responsibilities, commercial terms, and relevant safeguards. That agreement governs the services if it differs from this Disclaimer."
      },
      {
        "h": "3. Commercial accountability, not guaranteed results"
      },
      {
        "p": "Our emphasis on revenue accountability means working to agreed priorities, responsibilities, measures, and reporting. It is not a promise of a particular revenue increase, return on investment, number of leads, pipeline value, fundraising result, market-entry outcome, or time to growth."
      },
      {
        "p": "Results depend on factors including product-market fit, pricing, sales execution, budgets, team capacity, data quality, implementation, customer behaviour, competition, and market conditions. Illustrations, forecasts, benchmarks, savings comparisons, and previous outcomes are not a prediction of what your business will achieve. Any express commitment in a signed engagement agreement remains subject to that agreement."
      },
      {
        "h": "4. Research, estimates, and forward-looking statements"
      },
      {
        "p": "We aim to distinguish evidence, opinion, estimates, and assumptions. Third-party studies and market forecasts may use different definitions, samples, periods, and methodologies, and may change after publication. Cost comparisons depend on the roles, hours, geography, compensation assumptions, and services included."
      },
      {
        "p": "Check the source and date of any statistic material to your decision and ask us for clarification where needed. Forward-looking statements describe expectations rather than certainties. We may correct or update material, but do not undertake to keep every historical resource continuously current. These qualifications do not excuse misleading statements or obligations that cannot lawfully be excluded."
      },
      {
        "h": "5. Testimonials, case studies, and credentials"
      },
      {
        "p": "Testimonials reflect the relevant person’s experience or opinion in its original context. Case studies describe particular circumstances and are not universal results. Where a qualification is needed to avoid a misleading impression, it should accompany the relevant claim rather than depend on this page alone."
      },
      {
        "p": "A client name, logo, partner profile, award, or professional credential refers only to the relationship or recognition described. It does not imply that an organization endorses every service, that a partner is available for every assignment, or that a historical relationship continues unchanged."
      },
      {
        "h": "6. Executive titles and regulated advice"
      },
      {
        "p": "“Fractional CMO,” “Fractional CTO,” “Fractional CFO,” and similar descriptions identify the capability or role under discussion. They do not, by themselves, appoint a company director, create employment, give signing authority, or establish a regulated professional appointment. Any formal appointment and resulting duties are determined by the agreement and applicable law."
      },
      {
        "p": "Unless expressly agreed within an appropriately authorized scope, our website and general business services do not provide legal, tax, investment, audit, medical, cybersecurity-certification, or other regulated advice. Obtain advice from suitably qualified professionals where required. A finance, technology, AI, healthcare, or financial-services reference does not itself establish authorization to give regulated advice."
      },
      {
        "h": "7. Partners and third-party resources"
      },
      {
        "p": "Fractional Twinning, the Twin Partner Network, and strategic collaborations may involve independent professionals or organizations. Their inclusion is not a blanket warranty of every statement, product, platform, or service they provide. Contracting, supervision, data-handling roles, and responsibility for an assignment must be clear in the relevant engagement documents."
      },
      {
        "p": "Links to LinkedIn and other external resources lead to services governed by their own terms and privacy notices. Magic Pencils instruments, where used, may also have separate access terms and data arrangements. We remain responsible for our own obligations and for subcontracted work to the extent required by our agreements and applicable law."
      },
      {
        "h": "8. AI-assisted work and human judgment"
      },
      {
        "p": "Where AI-assisted tools support research, analysis, drafting, or operational work, their output may contain errors, omissions, bias, or outdated information. Appropriate human review and source validation remain necessary. An AI-generated output or technology recommendation is not a guarantee of accuracy, regulatory acceptance, ownership, security, or fitness for a particular use."
      },
      {
        "p": "Any use of client confidential information or personal data in AI tools must be governed by the agreed scope, appropriate safeguards, and applicable law. Our Privacy Policy explains the proposed safeguards for personal information."
      },
      {
        "h": "9. Availability and lawful limits"
      },
      {
        "p": "We take reasonable care in preparing the website, but, to the extent permitted by law, provide public content on an “as available” basis without guaranteeing uninterrupted access, error-free operation, or suitability for every business purpose. Staging content may be incomplete or awaiting approval and must not be treated as an offer or final commitment."
      },
      {
        "p": "Nothing here excludes liability for fraud, fraudulent misrepresentation, or any liability, duty of care, statutory right, privacy right, or remedy that cannot lawfully be excluded or restricted. The liability provisions in the Terms of Use apply subject to those safeguards."
      },
      {
        "h": "10. Contact and corrections"
      },
      {
        "p": "For questions, permissions, or a concern about a statement on this website, contact Fractionalogic at murali.e@fractionalogic.com or +91 98405 42240. Please identify the page and the issue so that we can review it."
      }
    ]
  },
  "terms-of-use": {
    "title": "Terms of Use",
    "lede": "The terms that govern your use of this website and its resources.",
    "blocks": [
      {
        "h": "1. Operator and scope"
      },
      {
        "p": "These Terms govern access to and use of the Fractionalogic public website, its preview or staging versions, and its public resources. The operator is E. Muralidharan, trading as Fractionalogic, based in Chennai, Tamil Nadu, India. “We,” “us,” and “our” mean that operator; “you” means the individual user and, where the user has authority, the organization they represent."
      },
      {
        "p": "Please read these Terms before using the website. Where we ask you to accept them through a form or other feature, you must do so to use that feature. We rely on these Terms only to the extent that they have been fairly brought to your attention and are legally binding under applicable law. If you disagree, do not use the relevant feature or request permission for an alternative arrangement."
      },
      {
        "p": "The Privacy Policy explains personal-data handling; acknowledging it does not, by itself, constitute consent to every processing activity. Our Disclaimer explains the limits and context of public content. Neither document overrides mandatory law."
      },
      {
        "h": "2. Business audience and authority"
      },
      {
        "p": "The website is intended for adults acting in a professional or business capacity. Do not submit a service enquiry or partner application if you are under 18. If acting for an organization, provide accurate details and do not suggest that you have authority you do not hold."
      },
      {
        "p": "Nothing in these Terms removes any consumer protection or other mandatory right that applies despite the website’s business focus."
      },
      {
        "h": "3. No online service contract"
      },
      {
        "p": "Service descriptions, introductory conversations, and public resources are invitations to discuss an engagement, not a binding offer, appointment, or promise of availability. A form submission is a request for contact, not a confirmed booking or acceptance of a commercial proposal. Any automated acknowledgement confirms receipt only when the form has successfully delivered the information; it is not an acceptance of an engagement."
      },
      {
        "p": "Paid services require a separately agreed written engagement agreement, statement of work, or equivalent contract. Scope, hours, fees, currency, taxes, expenses, invoicing, payment, cancellation, deliverables, ownership, confidentiality, liability, and termination must be addressed there. Website use does not create subscription charges, and these Terms do not impose service cancellation fees."
      },
      {
        "p": "If documents conflict, mandatory law prevails first, then the signed engagement or data processing agreement for the relevant subject, then these Terms and the Disclaimer. The Privacy Policy and applicable law govern personal-data handling; a commercial term does not waive an individual’s statutory rights."
      },
      {
        "h": "4. Fractional leadership and partner relationships"
      },
      {
        "p": "Fractionalogic may deliver work through its founder, authorized associates, or appropriately engaged partners. Fractional Twinning coordinates complementary leaders around an agreed mandate; it does not automatically make every listed professional an employee, agent, legal partner, director, or representative of Fractionalogic or of the client."
      },
      {
        "p": "Unless a written appointment or applicable law provides otherwise, no user, applicant, or listed partner may bind Fractionalogic, commit a client’s expenditure, or represent that they can do so. Any authority, reporting line, conflict management, joint responsibility, and data access for an engagement must be agreed expressly."
      },
      {
        "p": "Applying to the Twin Partner Network does not guarantee selection, public listing, referrals, assignments, income, exclusivity, or employment. We may assess fit through proportionate, human-reviewed checks. Public use of an applicant’s name, biography, photograph, or profile requires a separate agreement or permission; an application alone is not permission to publish it."
      },
      {
        "p": "If we contract to provide a service and use a subcontractor, that arrangement does not remove our obligations under the engagement or applicable law. A partner engaged directly by you is responsible under its own agreement with you."
      },
      {
        "h": "5. Permitted use of website content"
      },
      {
        "p": "Unless a page states otherwise, you may access the website, share links, and download resources offered for download for your personal professional reference and your organization’s internal evaluation. Keep copyright notices, attribution, and any stated resource restrictions intact. This is a limited, non-exclusive, revocable permission, not a transfer of ownership."
      },
      {
        "p": "You may not, without permission or a legal entitlement, republish substantial content, resell resources, remove attribution, redistribute editable frameworks as your own, or use our materials to market a competing service. A small attributed quotation or other use permitted by applicable copyright law remains permitted."
      },
      {
        "p": "Do not use our name, logo, founder’s identity, client references, or partner marks to imply sponsorship, certification, or endorsement. Third-party marks and materials remain subject to their owners’ rights. Separately contracted client deliverables are governed by the engagement agreement, not this website-content licence."
      },
      {
        "h": "6. Prohibited conduct"
      },
      {
        "ul": [
          "Do not use the website for fraud, unlawful activity, impersonation, harassment, discriminatory abuse, or misleading representations.",
          "Do not introduce malware, attempt unauthorized access, defeat security or consent controls, or interfere with availability.",
          "Do not collect personal information from the website for unsolicited mass outreach or unlawful profiling.",
          "Do not use automated extraction that bypasses access controls, ignores applicable permissions, or places an unreasonable load on the service. Ordinary search indexing and use authorized by us remain permitted.",
          "Do not reproduce substantial protected content in commercial datasets or AI-model training without permission or a legal entitlement.",
          "Do not submit information you have no right to disclose, or use the website to infringe privacy, confidentiality, intellectual-property, or other rights."
        ]
      },
      {
        "h": "7. Enquiries, applications, and submissions"
      },
      {
        "p": "You remain responsible for the accuracy and lawful disclosure of the information you provide. Submit only what is reasonably necessary. Do not send passwords, payment-card data, government identification, health records, customer exports, detailed employee records, source code, or trade secrets through a public enquiry form."
      },
      {
        "p": "You retain ownership of your submissions. You give us only the permission reasonably needed to receive, review, store, and use them for the purpose of the enquiry or application, subject to our Privacy Policy and any applicable confidentiality arrangement. This is not a licence to publish your submission, sell it, train a general-purpose AI model on it, or use it for unrelated promotion."
      },
      {
        "p": "Please arrange a suitable confidentiality agreement and secure channel before sharing sensitive commercial material. An initial enquiry does not create legal professional privilege or a bespoke confidentiality contract, but this does not reduce our privacy, security, or other applicable duties. We will not publish an enquiry or application without an appropriate separate basis."
      },
      {
        "h": "8. External services and specialist tools"
      },
      {
        "p": "The website may link to external publications, professional profiles, partner resources, and tools. Following a link may bring you under the third party’s own terms and privacy practices. Inclusion of a link does not guarantee availability, accuracy, suitability, or regulatory status."
      },
      {
        "p": "If an engagement uses Magic Pencils instruments or another specialist platform, access rights, charges, data roles, confidentiality, ownership, and permitted use should be agreed before use. These Terms do not silently enrol you in a partner platform or authorize unrestricted sharing of enquiry data with the partner network."
      },
      {
        "h": "9. Content and outcome qualifications"
      },
      {
        "p": "Our public information supports informed business discussions and does not replace advice tailored to your organization. Market research, projections, testimonials, case studies, and examples must be read in context, including their source dates, assumptions, and any prominent qualifications."
      },
      {
        "p": "We do not guarantee a commercial outcome from using the website or adopting a general framework. A commitment to revenue-facing accountability is a commitment to the agreed mandate and measures, not an unconditional revenue warranty. Nothing in these Terms negates an express promise in a signed engagement agreement or permits misleading marketing."
      },
      {
        "h": "10. Website operation and changes"
      },
      {
        "p": "We may update, correct, add, or remove public content and features. We may temporarily interrupt access for security, maintenance, or operational reasons and may restrict a user’s access where reasonably necessary to prevent misuse or comply with law. Where practical and appropriate, we will provide notice and a way to raise concerns."
      },
      {
        "p": "These measures do not terminate a separate service agreement or remove rights to receive contracted services. To the extent permitted by law, we do not guarantee that the public website will be continuously available, free of defects, or compatible with every device. You should use reasonable device and internet security precautions."
      },
      {
        "h": "11. Liability and protected rights"
      },
      {
        "p": "Nothing in these Terms excludes or limits liability for fraud, fraudulent misrepresentation, death or personal injury caused by negligence where such exclusion is unlawful, wilful misconduct or gross negligence where liability cannot be limited, or any non-excludable statutory obligation or remedy. Your enforceable privacy and data-protection rights remain unaffected."
      },
      {
        "p": "Subject to that protection and to the extent permitted by law, we are not liable for indirect or consequential loss, or for business losses such as lost profit, revenue, anticipated savings, opportunities, or goodwill, arising from use of the free public website. This exclusion does not apply where the relevant loss must be recoverable under mandatory law."
      },
      {
        "p": "Liability for paid services is determined by the signed engagement agreement and applicable law, not by a liability cap hidden in website terms. Nothing here makes you responsible for our own unlawful conduct or removes our responsibility for reasonable care where required by law."
      },
      {
        "h": "12. Responsibility for unlawful business use"
      },
      {
        "p": "If you use the website on behalf of a business, you are responsible, to the extent permitted by law, for a third-party claim directly caused by your deliberate unlawful use, knowing infringement of another person’s rights, or materially false claim of authority. This does not cover claims caused by our fault, ordinary good-faith use, or the exercise of a lawful right."
      },
      {
        "p": "We will notify you of such a claim, take reasonable steps to limit avoidable loss, and allow reasonable participation in its defence. No settlement imposing an obligation or admission on you will be made without your consent, not to be unreasonably withheld. This clause does not impose a general duty to reimburse regulatory fines or apply to an individual acting as a consumer."
      },
      {
        "h": "13. Updates to these Terms"
      },
      {
        "p": "We will post revised Terms with an updated date. Revisions operate prospectively and do not retrospectively change an agreed service contract, an accrued claim, or the purpose of an earlier data collection. Material changes will be brought to users’ attention where appropriate; we will obtain fresh acceptance where required for an existing feature or relationship."
      },
      {
        "h": "14. Law, disputes, and international users"
      },
      {
        "p": "Subject to mandatory local protections, these Terms are governed by Indian law. Courts having competent jurisdiction in Chennai, Tamil Nadu, India will hear disputes about these Terms, except where applicable law gives you a right to bring proceedings elsewhere or requires another forum. This does not restrict complaints to regulators or other non-waivable remedies."
      },
      {
        "p": "Please first contact murali.e@fractionalogic.com with a description of the concern so that we can try to resolve it. Informal contact is encouraged, not a condition that prevents urgent relief or causes a legal deadline to expire. These Terms do not impose mandatory arbitration or a class-action waiver."
      },
      {
        "p": "Access from another country does not establish a local office or an authorization to deliver a regulated service there. You and we must comply with laws applicable to our respective activities, including applicable sanctions and export restrictions."
      },
      {
        "h": "15. General provisions and contact"
      },
      {
        "p": "If a provision is invalid or unenforceable, it will be limited or removed to the minimum necessary without affecting the rest. Failure to enforce a term immediately is not a waiver. These Terms concern website use only and do not replace separately agreed commercial terms."
      },
      {
        "p": "Legal operator: E. Muralidharan, trading as Fractionalogic. Location: Chennai, Tamil Nadu, India. Email: murali.e@fractionalogic.com. Telephone: +91 98405 42240."
      }
    ]
  },
  "privacy-policy": {
    "title": "Privacy Policy",
    "lede": "How Fractionalogic handles personal information.",
    "blocks": [
      {
        "h": "1. Who is responsible"
      },
      {
        "p": "Fractionalogic is a fractional leadership practice operated by E. Muralidharan, trading as Fractionalogic, based in Chennai, Tamil Nadu, India. For the website, business enquiries, partner applications, and our own business administration, that operator determines why and how personal information is used. It acts as controller or Data Fiduciary where those terms apply."
      },
      {
        "p": "Privacy and grievance contact: Muralidharan Erumbala, Founder, Fractionalogic. Email: murali.e@fractionalogic.com, with the subject “Privacy request” or “Privacy grievance.” Telephone: +91 98405 42240."
      },
      {
        "p": "You do not need to be a client, create an account, or subscribe to marketing to ask a privacy question or exercise a right."
      },
      {
        "h": "2. What this Policy covers"
      },
      {
        "p": "This Policy explains how we handle personal information about website visitors, prospective and current client contacts, people requesting resources or conversations, applicants to the Twin Partner Network, professional collaborators, and other people communicating with our practice. It covers relevant website, email, telephone, professional-network, meeting, and offline interactions."
      },
      {
        "p": "Personal information means information about an identified or identifiable person. Business contact details can be personal information even when used in a B2B context. Information irreversibly anonymized so that no person can reasonably be identified is not treated as personal information under this Policy."
      },
      {
        "p": "Client-controlled data is different. If we access a client’s CRM, lead database, campaign platform, or employee information solely on that client’s documented instructions, the client ordinarily controls that processing and we act as its processor or service provider. The engagement agreement and any data processing agreement govern that work. Contact the client for its privacy notice and rights process; we will assist as required. We do not use client-controlled records for our own prospecting or unrelated marketing."
      },
      {
        "h": "3. Information you give us"
      },
      {
        "ul": [
          "Conversation requests: name, email address, company, professional role, country, preferred region, your message, and, optionally, how you found us. These details help us assess the enquiry and arrange a relevant conversation.",
          "Partner applications: name, email address, LinkedIn profile URL, primary function, working region, and information about your practice, experience, clients, and preferred mandates. Do not identify confidential clients or provide another person’s personal data without authority.",
          "Communications: messages, meeting arrangements, correspondence, and relevant notes from discussions. A telephone number is collected if you provide it or communicate with us by phone.",
          "Engagement administration: business contact details, authorized-signatory details, proposals, agreements, billing information, payment references, and records necessary to manage the relationship. The public enquiry form is not a payment channel.",
          "Resources and preferences: details you provide when requesting a resource or choosing to receive updates, together with subscription, consent, and opt-out records where relevant. Simply reading an ungated resource does not require you to provide contact details."
        ]
      },
      {
        "p": "Fields identified as required are needed to handle that specific request. Optional information is voluntary. If you do not provide necessary details, we may be unable to respond, assess an application, or perform the requested work; you may still browse public content."
      },
      {
        "h": "4. Technical information and other sources"
      },
      {
        "p": "When you visit, our hosting and infrastructure providers may process IP address, request date and time, requested pages, referring page where supplied, browser or device information, error information, and security-related records. This supports delivery, diagnostics, reliability, and abuse prevention. Where IP-derived location is processed, it is approximate, not precise GPS location."
      },
      {
        "p": "This website is hosted on Vercel. Website forms are delivered to us by Web3Forms, and messages to our published email address are handled by our email service provider. A provider may process limited information for its own legal or security purposes under its own notice as well as providing services to us. Provider information: https://vercel.com/legal/privacy-notice and https://web3forms.com/privacy."
      },
      {
        "p": "We may receive relevant professional information from a referral, a prospective client or partner, LinkedIn or another public professional source, or an event or meeting in which you participate. We limit this to information relevant to the relationship and record its source where appropriate. Public availability does not by itself authorize unrelated use or unrestricted marketing."
      },
      {
        "p": "Where the law requires notice for indirectly obtained information, we will provide this Policy and relevant context within the required period, including at first contact, before disclosure, or within one month where those rules apply, subject to lawful exceptions."
      },
      {
        "h": "5. Information we do not request"
      },
      {
        "p": "Do not submit government identifiers, passwords, bank-login details, full payment-card data, health records, biometric data, precise location, or sensitive information about another person through a public form. Our ordinary website enquiries and partner applications do not require such information."
      },
      {
        "p": "If a particular engagement genuinely requires sensitive or specially protected data, we will agree the purpose, lawful basis, secure channel, access restrictions, retention, and any additional notice or consent before that processing. A general website enquiry is not authorization for that activity."
      },
      {
        "h": "6. Why we use information"
      },
      {
        "table": {
          "head": [
            "Purpose",
            "Relevant information",
            "Basis where EU/UK GDPR applies"
          ],
          "rows": [
            [
              "Respond to an enquiry and arrange a conversation",
              "Contact, company, role, country, region, message",
              "Legitimate interests in handling requested business enquiries; consent where requested or legally required; pre-contract steps only where you are personally the prospective contracting party"
            ],
            [
              "Assess a partner application and discuss a possible mandate",
              "Contact, professional profile, function, region, practice details",
              "Legitimate interests in assessing professional collaborations; consent for optional future-opportunity retention or publication where used"
            ],
            [
              "Deliver an agreed engagement and administer the relationship",
              "Business contacts, instructions, agreements, billing records",
              "Contract where you are a party; otherwise legitimate interests in managing a corporate-client relationship; legal obligation for required records"
            ],
            [
              "Send an expressly requested resource",
              "Delivery details and the request",
              "Legitimate interests in fulfilling the request, or consent where the collection mechanism relies on consent"
            ],
            [
              "Send optional insights, invitations, or promotional updates",
              "Contact details and recorded preferences",
              "Consent where required; legitimate interests only where the relevant direct-marketing rules permit this and a valid objection is respected"
            ],
            [
              "Operate and secure the website; prevent misuse",
              "Technical and security information",
              "Legitimate interests in a reliable, secure service; legal obligation where applicable; consent for non-essential technologies where required"
            ],
            [
              "Handle rights requests, complaints, and legal matters",
              "Contact, verification, correspondence, relevant records",
              "Legal obligation where applicable; legitimate interests in addressing concerns and establishing or defending legal claims"
            ]
          ]
        }
      },
      {
        "p": "“Legitimate interests” applies only where the relevant law recognizes it and the processing is necessary, proportionate, and not overridden by your rights. We assess the interests involved; it is not permission to ignore a consent requirement. A contract with your employer does not automatically make contractual necessity the lawful basis for all of your personal information."
      },
      {
        "p": "For India, where applicable and in force, we rely on consent or a specifically permitted legitimate use under the DPDP Act, and on other lawful requirements as relevant. We do not treat GDPR “legitimate interests” as a general substitute for an Indian-law basis. A new incompatible purpose requires an appropriate basis and notice before it begins."
      },
      {
        "h": "7. Marketing choices"
      },
      {
        "p": "Requesting a conversation, downloading a resource, or applying to the partner roster does not automatically subscribe you to a newsletter or authorize a partner to market to you. We distinguish replies about your request and essential engagement messages from optional promotional messages."
      },
      {
        "p": "Where consent is required, we ask separately, do not pre-tick the choice, and identify the communication channel and purpose. Where local law permits relevant B2B outreach without prior consent, we use only an appropriate lawful basis and honour opt-outs. We do not assume that every professional email address belongs to an incorporated business rather than a sole trader."
      },
      {
        "p": "You can stop promotional emails through the unsubscribe facility where provided or by emailing murali.e@fractionalogic.com with “Unsubscribe.” You can also withdraw a particular marketing permission or object to direct marketing at any time. We will stop the relevant marketing and keep only a minimal suppression record where necessary to respect your choice. Essential replies and contracted-service communications may continue where lawful."
      },
      {
        "h": "8. Cookies, analytics, and advertising"
      },
      {
        "p": "Cookies and similar technologies can store or access information on your device. We distinguish technologies necessary for a service you request from optional analytics, embedded media, or advertising features. Technical server logs do not necessarily involve a cookie."
      },
      {
        "p": "We do not use advertising pixels or personal information for cross-context behavioural advertising or targeted-advertising audiences under this Policy. If that changes, we will assess the legal requirements, update the notice, and implement any necessary controls before the activity starts. We do not treat continued browsing or acceptance of our Terms as consent to optional tracking."
      },
      {
        "p": "Where an optional technology is offered, we will explain its provider, purpose, duration, and choice through the relevant notice or settings, and obtain consent before use wherever required. Rejecting optional technology must not prevent ordinary access to public content. Consent can be changed or withdrawn through the relevant settings, or by contacting us; browser deletion alone may not communicate withdrawal to every provider."
      },
      {
        "p": "Following a normal external link, such as to LinkedIn, takes you to the external service. If an embedded third-party service would access your device before you visit that service, we will apply the relevant notice and choice requirements before loading it. No general cookie-consent banner is a substitute for an accurate technology inventory."
      },
      {
        "h": "9. Who receives information"
      },
      {
        "ul": [
          "Authorized people within the practice: the founder and properly authorized associates with a genuine need to handle your enquiry, application, engagement, or administration, subject to suitable confidentiality obligations.",
          "Service providers: hosting and infrastructure providers, email and business-communication providers, and any specifically selected form, scheduling, document, CRM, billing, or professional-support providers needed for the relevant activity. These providers receive only what is necessary and are subject to appropriate terms where they act for us.",
          "Delivery partners: a relevant Twin Partner Network professional or strategic collaborator, including Magic Pencils where its instruments are used, only when appropriate to an enquiry or agreed engagement, with a lawful basis and an explanation of the role. We do not circulate every enquiry to the full roster.",
          "Professional advisers and authorities: legal, tax, accounting, insurance, regulatory, or law-enforcement recipients where necessary, proportionate, and lawful, including to meet a binding requirement or address a genuine legal claim.",
          "A business successor: only where a proposed transfer or reorganization of the practice requires it, subject to appropriate confidentiality, limited access, and continued protection. We will give notice where required and will not use a transaction to bypass existing privacy rights."
        ]
      },
      {
        "p": "We do not sell personal information, rent contact lists, or disclose personal information for cross-context behavioural advertising. A necessary service-provider disclosure is not permission for that provider to use your information for unrelated marketing. When an independent partner determines its own purposes, we will explain that role and direct you to its notice where appropriate. If joint-controller rules apply, we will establish the required arrangement and explain its essential terms."
      },
      {
        "p": "Partner applicants’ profiles are not published just because they apply. Permission and any profile-publication terms are addressed separately."
      },
      {
        "h": "10. International handling"
      },
      {
        "p": "Our practice is based in India, and information may be accessed there. Depending on the provider or engagement, information may also be processed in countries where an authorized provider or professional operates. This may include the United States and countries in APAC, the Middle East, or Europe. We do not promise that every record stays in one country or that all countries have equivalent privacy laws."
      },
      {
        "p": "Where international-transfer requirements apply, we use a lawful mechanism before a restricted transfer. Depending on the relevant law and destination, this may be an adequacy decision, approved contractual safeguards such as the EU Standard Contractual Clauses, the UK International Data Transfer Agreement or UK Addendum, or another lawfully available mechanism. We assess any required supplementary safeguards rather than treating a policy reference as an executed transfer agreement."
      },
      {
        "p": "Transfers from India are subject to applicable restrictions and continuing requirements, including any relevant sector rules. We do not rely on your website visit or acceptance of the Terms as blanket consent to international transfers. Contact us for information about relevant recipient locations and safeguards, and a copy or summary of applicable safeguards subject to lawful redactions."
      },
      {
        "h": "11. How long we keep information"
      },
      {
        "p": "We keep personal information only for as long as reasonably necessary for the disclosed purpose, a justified continuing relationship, or a legal requirement. We review retention and do not keep a prospect or application file indefinitely merely because it may be useful someday."
      },
      {
        "table": {
          "head": [
            "Record type",
            "Retention criteria"
          ],
          "rows": [
            [
              "Enquiries and unsuccessful proposals",
              "Until the enquiry and reasonable follow-up are complete, with further retention only for a justified ongoing relationship, a dispute, or an applicable recordkeeping obligation"
            ],
            [
              "Unsuccessful or withdrawn partner applications",
              "Until assessment and related correspondence are complete; a separate future-opportunity record only where you agree or another notified lawful basis permits it, subject to periodic review"
            ],
            [
              "Client and active-partner records",
              "For the relationship and afterward only as required for contracts, tax, accounting, professional obligations, or the relevant legal limitation period"
            ],
            [
              "Marketing details and preferences",
              "Until withdrawal, objection, the end of the relevant subscription, or loss of a justified purpose, subject to periodic relevance review; minimal suppression evidence may remain"
            ],
            [
              "Technical and security records",
              "For proportionate operational and security periods, and for any mandatory statutory minimum that applies; relevant records may be preserved for an incident or claim"
            ],
            [
              "Rights, grievance, and consent records",
              "For the period necessary to act on the request, demonstrate the response or permission, respect preferences, and meet applicable accountability requirements"
            ]
          ]
        }
      },
      {
        "p": "A legal hold or binding statutory retention obligation may require us to preserve limited records after a relationship ends or erasure is requested. We restrict their use accordingly. When retention ends, we delete or irreversibly anonymize information, or isolate it securely pending scheduled backup deletion. We will explain a material retention exception when responding to an affected request, where required."
      },
      {
        "h": "12. Security and incident response"
      },
      {
        "p": "We use reasonable technical and organizational safeguards appropriate to the information and risks, including controlled access, suitable authentication, secure transfer methods, confidentiality measures, and proportionate provider review. Access is limited to people who need it for the relevant purpose. No website, email system, or transmission method can be guaranteed completely secure."
      },
      {
        "p": "If a personal-data incident occurs, we will assess it, take appropriate containment and remedial steps, and notify affected people, clients, and authorities where and when required by applicable law or contract. We do not promise that every incident has the same notification threshold or deadline worldwide. Report a suspected issue to murali.e@fractionalogic.com without sending unnecessary sensitive data."
      },
      {
        "h": "13. AI tools, recordings, and automated decisions"
      },
      {
        "p": "Where AI tools are used in work involving personal information, we limit the information to what is necessary, assess the provider and settings, and apply an appropriate lawful basis and safeguards. We do not put identifiable enquiry or application data, or client-confidential material, into public/general-purpose AI services for unrestricted use or model training. Client-controlled data is used only within the client’s authorized instructions and agreed safeguards."
      },
      {
        "p": "We do not make decisions producing legal or similarly significant effects about you solely by automated processing under this Policy. Commercial fit and partner selection remain subject to human judgment. If a future activity changes this position, we will explain it and provide any required rights and safeguards before it begins."
      },
      {
        "p": "We do not record or transcribe a meeting merely because you contact us. If recording, AI note-taking, or transcription is proposed, we will tell participants beforehand, explain the purpose and handling, obtain any required permission, and offer an appropriate alternative where practicable."
      },
      {
        "h": "14. Your rights and how to ask"
      },
      {
        "p": "Depending on applicable law and its commencement, you may request access to information, correction, completion or updating, deletion, restriction, portability, or an explanation of relevant processing. You may withdraw consent, object to permitted grounds of processing, and object to direct marketing. Some laws also provide nomination, authorized-agent, appeal, or other specific rights."
      },
      {
        "p": "Email murali.e@fractionalogic.com with the request and enough context to locate your interaction, such as the email address used for an enquiry. You may also contact the published telephone number for assistance. Tell us which right you wish to exercise; legal terminology is not required. We may ask for proportionate verification or evidence of an agent’s authority, but will not request excessive identity documents or make you open an account."
      },
      {
        "p": "We respond without undue delay and within the applicable legal period. For EU/UK requests, this is ordinarily one month, with a lawful extension where permitted and explained. For applicable US-state requests, the period is commonly 45 days, subject to the particular law and any permitted extension. For California requests to know, correct, or delete, where the CCPA applies, we confirm receipt within 10 business days and ordinarily give a substantive response within 45 calendar days, with any permitted extension explained. Different requests, including advertising opt-outs, can have shorter deadlines. We will explain any lawful refusal, limitation, fee, or extension and the available review or complaint route."
      },
      {
        "p": "Withdrawal does not invalidate earlier lawful processing. We may continue limited processing where a different valid legal basis requires or permits it, for example a mandatory record. We will not discriminate or retaliate against you for exercising a protected right."
      },
      {
        "h": "15. Regional provisions"
      },
      {
        "p": "India. We will handle personal information under the Indian requirements that apply at the relevant time, including the IT Act and SPDI Rules where applicable and the DPDP Act and Rules as their provisions commence. Once applicable, relevant DPDP rights include access to a summary of processing and specified sharing information, correction, completion, updating, erasure, grievance redressal, withdrawal of consent, and nomination of another person to exercise rights in the circumstances provided by law. Contact the named privacy and grievance contact to make a request. This Policy does not represent uncommenced statutory rights as already enforceable."
      },
      {
        "p": "EU/EEA and UK. Where the EU GDPR or UK GDPR applies, the purposes and lawful grounds are described in Section 6, recipients in Section 9, transfers in Section 10, and retention in Section 11. You may complain to the competent supervisory authority, including the authority where you live or work or where an alleged infringement occurred, and to the UK Information Commissioner where relevant. You do not have to complain to us first where the law permits a direct complaint. UK regulator information: https://ico.org.uk/make-a-complaint/."
      },
      {
        "p": "United States. State privacy statutes differ in coverage, thresholds, and exemptions; some exclude certain business-contact data. Where a statute applies to your interaction and our processing, applicable rights may include knowing or accessing information, correction, deletion, portability, opting out of sale, targeted advertising or specified profiling, and an appeal against a refusal. California rights, where applicable, also include limiting certain uses of sensitive personal information and using an authorized agent. We do not use sensitive personal information for purposes that require a California limitation mechanism under this Policy."
      },
      {
        "p": "US category disclosure. The categories addressed by this Policy are identifiers (for example name, email and IP address), professional or employment-related information (such as role, function and professional profile), commercial relationship records (such as requests, proposals and billing), internet or network information (such as request and security logs), and information you include in correspondence. Sources are you, relevant professional or referral sources, and technical service providers. Purposes are listed in Section 6; business-purpose recipients are listed in Section 9; retention criteria are in Section 11. For the twelve months preceding this Policy’s last-updated date, the applicable categories are those listed above that were collected through the activities described in Sections 3 and 4. The relevant categories may be disclosed for the business purposes in Section 6 to the recipient categories in Section 9, subject to the stated safeguards. We do not sell or share these categories for cross-context behavioural advertising or use them for targeted-advertising audiences."
      },
      {
        "p": "US choices. Submit a request or appeal to murali.e@fractionalogic.com; for an appeal, state “Privacy appeal” and identify the original decision. We will provide the response and further complaint options within the period the applicable law requires. Where legally required and relevant to an activity we undertake, we honour recognized universal opt-out signals such as Global Privacy Control. A general “Do Not Track” setting is not the same as every legally recognized opt-out signal. The absence of a sale or targeted-advertising activity does not remove other rights that apply."
      },
      {
        "p": "Singapore. Where the Singapore PDPA applies, you may request access and correction and withdraw consent, subject to applicable exceptions and consequences that we will explain. Overseas transfers require the applicable comparable-protection safeguards. The law treats qualifying business contact information differently; that does not make every record about a professional exempt. Contact our privacy contact first; unresolved matters may be referred to the Personal Data Protection Commission at https://www.pdpc.gov.sg/."
      },
      {
        "p": "Australia. Where the Australian Privacy Act and Australian Privacy Principles apply, you may request access and correction and complain to us about our handling of your information. Allow a reasonable opportunity for us to respond, ordinarily 30 days; unresolved matters may be raised with the Office of the Australian Information Commissioner at https://www.oaic.gov.au/privacy/privacy-complaints. Likely overseas recipient locations must be identified as specifically as practicable, and applicable cross-border safeguards remain our responsibility unless a lawful exception applies."
      },
      {
        "p": "United Arab Emirates. Where the UAE federal personal-data law applies, relevant rights can include access, correction, erasure, restriction, and objection subject to statutory conditions. Contact us to identify the applicable route. A separate framework may apply where the interaction falls within a financial free zone such as DIFC; the existence of UAE-based contact details does not make every framework apply. We will assess the applicable regime and transfer requirements rather than assuming that a single Middle East rule covers every engagement."
      },
      {
        "p": "Other regions. If privacy law in an APAC, Middle Eastern, or other jurisdiction applies, we will honour the relevant notice, consent or other lawful-basis, transfer, security, access, correction, withdrawal, and complaint obligations. Rights are not identical everywhere, and providing a global website does not establish that every overseas law applies to every visitor. Mandatory local protections prevail over any inconsistent wording in this Policy."
      },
      {
        "h": "16. Questions and grievances"
      },
      {
        "p": "Please contact Muralidharan Erumbala at murali.e@fractionalogic.com with “Privacy grievance” and describe the concern. We acknowledge promptly, and in any event within 30 days where UK complaint-handling requirements apply. We investigate without undue delay, keep you informed, and aim to address grievances within one month, or within a shorter period if applicable law requires. If an issue cannot be fully resolved in that time, we will explain the position and any lawful next steps; an update does not replace a binding deadline."
      },
      {
        "p": "Where an Indian-law complaint route requires first using our grievance mechanism, please do so. Once the relevant DPDP provisions and complaint process apply, you may escalate an unresolved matter to the Data Protection Board of India in accordance with that process. This does not delay another regulator complaint or legal remedy available under applicable law."
      },
      {
        "h": "17. Children and third-party services"
      },
      {
        "p": "Our website enquiries and professional services are intended for adults, not children under 18. We do not knowingly seek personal information from children through the public website. If you believe a child has provided information, tell us so that we can assess the position and delete or otherwise handle it as required by law. An age statement is not a substitute for additional safeguards if an activity actually involves children."
      },
      {
        "p": "External sites and independently operated partner platforms have their own privacy practices. Review their notices before giving them information. Linking to a service does not authorize it to collect information through our website without any notice or choice required by law."
      },
      {
        "h": "18. Changes to this Policy"
      },
      {
        "p": "We will post an updated Policy and revision date when our practices change. For material changes, we will give additional notice where appropriate and obtain fresh consent before a new use where required. Continuing to browse does not amount to consent to a new processing purpose. Earlier information will not be used inconsistently with applicable law or an existing valid commitment."
      }
    ]
  }
};
