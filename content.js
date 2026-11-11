// ─────────────────────────────────────────────────────────────
// SITE CONTENT — edit this file to update the website.
// Dates are "YYYY-MM". Topics: victims | law | moral | relationships
// ─────────────────────────────────────────────────────────────

export default {
  profile: {
    name: 'Helen Devine',
    email: 'helen.devine@yale.edu',
    links: [
      { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=Qx1TTYkAAAAJ&hl=en' },
      { label: 'X / Twitter', url: 'https://x.com/helenldevine' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/devineh/' },
      { label: 'ORCID', url: 'https://orcid.org/0009-0003-0819-3257' },
      { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Helen-Devine-4' },
      { label: 'Bluesky', url: 'https://bsky.app/profile/helenldevine.bsky.social' },
    ],
  },

  topics: [
    { id: 'victims', label: 'Victims & blame' },
    { id: 'law', label: 'Psychology & law' },
    { id: 'moral', label: 'Morality & AI' },
    { id: 'relationships', label: 'Close relationships' },
  ],

  // openScience: osf = OSF project link; prereg/data/materials/code = optional specific links (each adds a badge). Leave empty to hide. podcast: optional link.
  publications: [
    {
      id: 'victimhood-law', type: 'Journal article', date: '2026-02',
      title: 'The psychology of victimhood in the law',
      authors: 'Gray, K., Devine, H., & Kubin, E.',
      venue: 'Policy Insights from the Behavioral and Brain Sciences, 13(1)',
      doi: '10.1177/23727322251405850', topics: ['victims', 'law'],
      podcast: '',
      abstract: 'Questions of legal blame and punishment hinge on judgments of victimhood: who is a victim and who is a victimizer? The law presumes that we judge victimhood objectively, but science shows that victimhood relies more on biased perceptions than impartial facts. The disconnect between victimhood in the law versus victimhood in our minds undermines the quest for justice. Here, we review three key psychological principles of victimhood and how they cause trouble in the judicial system. We then propose solutions to these challenges. Principle One: Victimhood is subjective—legal judgments hinge on who seems like a victim in our minds. Principle Two: Victimhood is stereotypical—who seems like a victim is biased, with people easily accepting the victimization of the vulnerable (e.g., children) but not the more powerful (e.g., strong men). Principle Three: Victimhood is sticky—once we identify the victim (or victimizer) in a situation, it is hard to change our minds. When the law fails to appreciate these principles, it causes distrust of verdicts, denials of true suffering, and continued condemnation of the exonerated. Potential solutions for these issues includes victim impact statements, restorative justice, and acknowledgments of legal errors. Understanding the true nature of victimhood is essential for a fair legal system.',
    },
    {
      id: 'different-victims', type: 'Journal article', date: '2026-03',
      title: 'Liberals and conservatives see different victims: Moral disagreement is explained by different assumptions of vulnerability',
      authors: 'Womick, J., Kubin, E., Goya-Tocchetto, D., Restrepo Ochoa, N., Rebollar, C., Kapsaskis, K., Pratt, S., Devine, H., Payne, B. K., Vaisey, S., & Gray, K.',
      venue: 'Personality and Social Psychology Bulletin',
      doi: '10.1177/01461672261422957', topics: ['victims'],
      openScience: { osf: 'https://osf.io/gubsv/overview?view_only=84a4ccb9f65c404d8d16805364887bdb', prereg: '', data: '', materials: '', code: '' }, podcast: '', abstract: 'Moral disagreement across politics revolves around the key question, “Who is a victim?” Twelve studies explain moral conflict with assumptions of vulnerability (AoVs): liberals and conservatives disagree about who is especially vulnerable to victimization, harm, and mistreatment. AoVs predict moral judgments, implicit attitudes, and charitable behavior—and explain the link between ideology and moral judgment (usually better than moral foundations). Four clusters of targets—the Environment, the Othered, the Powerful, and the Divine—explain many political debates, from immigration and policing to religion and racism. In general, liberals see vulnerability as group-based, dividing the moral world into groups of vulnerable victims and invulnerable oppressors. Conservatives downplay group-based differences, seeing vulnerability as more individual and evenly distributed. AoVs can be experimentally manipulated and causally impact moral evaluations. These results support a universal harm-based moral mind (Theory of Dyadic Morality): moral disagreement reflects different understandings of harm, not different foundations.',
    },
    {
      id: 'testosterone', type: 'Journal article', date: '2026-04',
      title: 'Testosterone changes in couples in response to a caregiving task with an infant simulator',
      authors: 'Brandon, R. E., From, A., Reynaga, M., Devine, H., Gordon, A. M., & Edelstein, R.',
      venue: 'Human Nature',
      doi: '10.1007/s12110-026-09520-5', topics: ['relationships'],
      openScience: { osf: 'https://osf.io/dzb7m/files/osfstorage', prereg: '', data: '', materials: '', code: '' }, podcast: '', abstract: 'In the current study, we assessed the role of caregiving in testosterone reactivity by examining whether and how testosterone changed in romantic partners as they jointly cared for an “infant simulator,” a lifelike doll designed to mimic many of the behaviors of a real infant. Although testosterone often declines as a function of caring for a child, especially when parents feel able to meet the child’s needs, less is known about joint caregiving with romantic partners. Couples without children (N = 30; 60 participants) engaged in a joint caregiving task in the laboratory before and after taking care of the infant at home, allowing us to examine how testosterone reactivity changed over time and with caregiving experience. We found that, on average, both female and male participants showed significant post-caregiving declines in testosterone following the second, but not the first, lab session. These findings were not mediated by participants’ feelings about or performance during the at-home caregiving. Results were, however, moderated by participants’ comfort with babies and their expectations about parenting: Participants who were less comfortable with babies or had less positive parenting expectations showed larger differences in reactivity across sessions, suggesting that caregiving experience may have contributed to testosterone declines in the second session. Our findings suggest that those with more caregiving experience or who had more positive expectations about parenting were more easily able to lean into nurturance, perhaps leading to testosterone declines. Taken together, our findings reflect the nuanced, situation-dependent influences on testosterone in dyadic contexts.',
    },
    {
      id: 'dogs', type: 'Preprint', date: '2025-08',
      title: 'Pet owners often see dogs as soulmates and value them more than human lives',
      authors: 'Dillion, D., Devine, H., & Gray, K.',
      venue: 'Manuscript under review',
      doi: '10.31234/osf.io/hcbrs_v1', topics: [],
      openScience: { osf: 'https://osf.io/d94b8/overview', prereg: '', data: '', materials: '', code: '' }, podcast: '', abstract: 'Dogs have ascended to core family members in American households. Across three studies, we show that modern dogs now occupy roles historically reserved for close human relationships and often receive greater moral concern than people. Approximately three out of four dog owners view their dogs as primary sources of emotional support and companionship, and this “soulmate” bond is associated with a tendency to prefer and prioritize dogs over people. Childless dog owners are especially likely to view their dog as a soulmate, and national and county-level analyses further reveal that declining birth rates are strongly associated with increased pet-related spending. This suggests that dogs may fulfill caregiving roles once reserved for children and close kin. To assess the implications of this shift, we presented dog owners with moral dilemmas pitting the welfare of dogs against humans. Owners who viewed their dogs as soulmates were more likely to feed, fund, and save the life of a dog over a person. More than half of dog owners chose to save their dog over a human stranger, one in five chose to save an unfamiliar puppy over a person, and one in four chose to give money to a puppy in need over a child in need. The moral elevation of dogs may reflect—and potentially contribute to—declines in human social connection.',
    },
    {
      id: 'thesis', type: 'Honors thesis', date: '2024-04',
      title: 'Keep your friends close and your phones closer: Examining the impact of close others on compliance with consent requests',
      authors: 'Devine, H., & Gordon, A. M.',
      venue: 'Senior Honors Thesis, University of Michigan, Ann Arbor',
      doi: '', topics: ['law'],
      openScience: { prereg: '', data: '', materials: '', code: '' }, podcast: '',
      abstract: 'Consent requests are made across a variety of situations (e.g., legal, medical, and interpersonal). While widespread in their uses, consent requests play a key role within a legal context. Legal searches (e.g., vehicle search) without a warrant are often conducted on the basis of a consent request. U.S. law establishes a right to refuse these requests and the expectation that individuals will feel free to exercise this right. However, previous research has established that in these situations, individuals are more likely to grant consent than we expect. Although we are frequently making consent decisions in the presence of close others, prior experimental work has not examined their potential influence. To address this gap, I conducted two preregistered experiments to examine whether expected (Study 1; online within-person experiment, N = 178 individuals) and actual (Study 2; in-lab between-person experiment, N = 128 friend pairs) compliance rates with an intrusive phone search request were lower in the presence of a close friend compared to when alone. Against my expectations, participants visualizing a friend with them were more inclined to expect they would comply than those imagining being alone. In contrast, nearly everyone in the lab handed over their phone, regardless of whether they had a friend with them (100% when alone, 97% when with a friend). Despite their behavior, in-lab participants reported feeling it would have been easier to say no when with a friend than when alone. These studies provide additional evidence that our behavior towards a consent request is often misaligned with the imagined and ideal response. My findings also showcase that the presence of a friend may alter personal evaluations–but not actions–when facing a consent request. This disconnect suggests that our judgments on the voluntary nature of compliance may be changed by simple alterations to the context of a request.',
    },
  ],

  // Science writing — Moral Understanding (Substack)
  writing: [
    { date: '2026-08', title: 'I committed a crime (allegedly)', authors: 'Gray, K., DaSilva, S., & Devine, H.', url: 'https://www.moralunderstandingnewsletter.com/p/i-committed-a-crime-allegedly' },
    { date: '2026-05', title: 'Original Sin', authors: 'Gray, K., Devine, H., & Stiehl, M.', url: 'https://www.moralunderstandingnewsletter.com/p/original-sin' },
    { date: '2026-05', title: 'Give Better Talks', authors: 'Gray, K. & Devine, H.', url: 'https://www.moralunderstandingnewsletter.com/p/give-better-talks' },
    { date: '2026-02', title: 'Epstein’s Fascination with Moral Psychology', authors: 'Gray, K. & Devine, H.', url: 'https://www.moralunderstandingnewsletter.com/p/epsteins-fascination-with-moral-psychology' },
    { date: '2025-12', title: 'Does lying about Santa hurt kids?', authors: 'Gray, K. & Devine, H.', url: 'https://www.moralunderstandingnewsletter.com/p/does-lying-about-santa-hurt-kids' },
    { date: '2025-11', title: '1 in 5 Dog Owners Will Save a Puppy’s Life Over Yours', authors: 'Dillion, D., Devine, H., & Gray, K.', url: 'https://www.moralunderstandingnewsletter.com/p/1-in-5-dog-owners-will-save-a-puppys' },
    { date: '2025-09', title: 'Moms vs. Dads: Who’s Right in the Parental Blame Game?', authors: 'Gray, K. & Devine, H.', url: 'https://www.moralunderstandingnewsletter.com/p/moms-vs-dads' },
    { date: '2025-09', title: 'Ohio! and the Summer I Turned Sanguine', authors: 'Gray, K. & Devine, H.', url: 'https://www.moralunderstandingnewsletter.com/p/ohio-and-the-summer-i-turned-sanguine' },
    { date: '2025-04', title: 'Strip Club Physics', authors: 'Gray, K., Devine, H., & Pratt, S.', url: 'https://www.moralunderstandingnewsletter.com/p/strip-club-physics' },
    { date: '2025-02', title: 'AI is More Moral than You', authors: 'Gray, K., Pratt, S., & Devine, H.', url: 'https://www.moralunderstandingnewsletter.com/p/ai-is-more-moral-than-you' },
    { date: '2024-12', title: 'How the DMV Saved Christmas', authors: 'Gray, K., Pratt, S., & Devine, H.', url: 'https://www.moralunderstandingnewsletter.com/p/how-the-dmv-saved-christmas' },
    { date: '2024-12', title: 'The Assassination of a CEO', featured: true, authors: 'Gray, K., Devine, H., & Pratt, S.', url: 'https://www.moralunderstandingnewsletter.com/p/the-assassination-of-a-ceo' },
    { date: '2024-11', title: 'In Defense of Flat Earthers', authors: 'Gray, K., Pratt, S., & Devine, H.', url: 'https://www.moralunderstandingnewsletter.com/p/in-defense-of-flat-earthers' },
    { date: '2024-11', title: 'Moving Forward', authors: 'Gray, K., Devine, H., & Pratt, S.', url: 'https://www.moralunderstandingnewsletter.com/p/moving-forward' },
    { date: '2024-10', title: 'The Psychology of Pettiness', authors: 'Gray, K., Devine, H., & Pratt, S.', url: 'https://www.moralunderstandingnewsletter.com/p/the-psychology-of-petty' },
  ],

  // kind: Talk | Poster | Mentored
  // "Presented by me" = you're first author. Override with presenter: true / false.
  talks: [
    { date: '2026-07', kind: 'Talk', topics: ['moral'], title: 'Preliminary findings on empathic AI and social support in romantic relationships', authors: 'Shastry, M., Devine, H., Jolink, T., & Gray, K.', venue: 'Spotlight talk, Mind & Machine Alignment Summit', place: 'Columbus, OH', links: [] },
    { date: '2026-05', kind: 'Poster', topics: ['victims'], title: 'Testing whether fear causally drives victim-blaming using virtual reality', authors: 'Devine, H. & Gray, K.', venue: 'Association for Psychological Science (APS)', place: 'Barcelona, Spain', links: [] },
    { date: '2026-03', kind: 'Poster', topics: ['victims', 'law'], title: 'Prepared or pre-paranoid? Psychological consequences of true crime consumption', authors: 'Devine, H. & Gray, K.', venue: 'American Psychology-Law Society (AP-LS)', place: 'Reno, NV', links: [] },
    { date: '2026-02', kind: 'Poster', topics: ['victims'], award: 'Best Poster Award', title: 'How true crime shapes moral judgments of victims', authors: 'Devine, H. & Gray, K.', venue: 'Moral Psychology Pre-Conference, SPSP', place: 'Chicago, IL', links: [{ label: 'Poster', url: 'assets/docs/devine_spsp26_truecrime.pdf' }] },
    { date: '2025-03', kind: 'Poster', topics: ['moral', 'law'], title: 'A guilty gait: How AI algorithms influence human judgments of deception', authors: 'Devine, H. & Gray, K.', venue: 'American Psychology-Law Society (AP-LS)', place: 'San Juan, Puerto Rico', links: [{ label: 'Poster', url: 'assets/docs/devine_apls25_gait.pdf' }] },
    { date: '2025-03', kind: 'Talk', topics: ['relationships'], title: 'Sleep, conflict, and physiological synchrony in couples', authors: 'Dileo, R., Diamond, E., From, A., Devine, H., Gordon, A. M., & Edelstein, R.', venue: 'Society for Biopsychosocial Science and Medicine', place: 'Seattle, WA', links: [] },
    { date: '2025-02', kind: 'Talk', topics: ['law'], title: 'Keep your friends close, but your rights closer: Social support and compliance with consent requests', authors: 'Devine, H., Meyer, M., & Gordon, A. M.', venue: 'Flash talk, Social Psychology in Legal Contexts Pre-Conference, SPSP', place: 'Denver, CO', links: [{ label: 'Video', url: 'https://drive.google.com/file/d/1UL7eufFCa882wQ1s4ao-pW-v8TP_7QCc/view?usp=sharing' }, { label: 'Slides', url: 'assets/docs/devine_spsp25_consent.pdf' }] },
    { date: '2025-02', kind: 'Poster', topics: ['victims'], title: 'Don’t blame me, fear made me crazy: How fear of crime shapes victim blaming', authors: 'Devine, H. & Gray, K.', venue: 'Society for Personality and Social Psychology (SPSP)', place: 'Denver, CO', links: [{ label: 'Poster', url: 'assets/docs/devine_spsp25_fear.pdf' }] },
    { date: '2024-03', kind: 'Poster', topics: ['law'], title: 'Consent in the company of others: How social influences change intrusive requests', authors: 'Devine, H., Meyer, M., & Gordon, A. M.', venue: 'American Psychology-Law Society (AP-LS)', place: 'Los Angeles, CA', links: [] },
    { date: '2024-02', kind: 'Poster', topics: ['law'], title: 'Consent in the company of others: How social influences change intrusive requests', authors: 'Devine, H., Meyer, M., & Gordon, A. M.', venue: 'Society for Personality and Social Psychology (SPSP)', place: 'San Diego, CA', links: [] },
    { date: '2023-02', kind: 'Poster', topics: ['relationships'], title: 'Falling asleep at the stroller: Sleep quality and childcare division', authors: 'Devine, H., From, A., Reynaga, M., Edelstein, R., & Gordon, A. M.', venue: 'Society for Personality and Social Psychology (SPSP)', place: 'Atlanta, GA', links: [] },
    // Mentored student presentations
    { date: '2026-07', kind: 'Mentored', topics: ['moral'], title: 'The moral psychology of self-harm and suicide', authors: 'Jenkins, D., Devine, H., & Gray, K.', venue: 'SROP Research Symposium', place: 'Columbus, OH', links: [] },
    { date: '2025-04', kind: 'Mentored', topics: ['moral'], award: 'Excellent undergraduate research grant', title: 'Blame or support? How moral judgments shape health policy attitudes', authors: 'Patel, S., Devine, H., & Gray, K.', venue: 'UNC Undergraduate Research Symposium', place: 'Chapel Hill, NC', links: [] },
    { date: '2025-04', kind: 'Mentored', topics: ['moral', 'law'], award: 'Excellent undergraduate research grant', title: 'Moral justifications of vigilante revenge', authors: 'Parrish, K., Devine, H., & Gray, K.', venue: 'UNC Undergraduate Research Symposium', place: 'Chapel Hill, NC', links: [] },
    { date: '2025-04', kind: 'Mentored', topics: ['victims', 'law'], title: 'Fear and punishment: How perceptions of crime influence our reactions to criminality', authors: 'Cedergrund, A., Devine, H., & Gray, K.', venue: 'UNC Undergraduate Research Symposium', place: 'Chapel Hill, NC', links: [] },
    { date: '2024-04', kind: 'Mentored', topics: ['law'], title: 'If someone asked for your phone, what would you do?', authors: 'Spallas, M., Goodman, E., Rogoff, W., Devine, H., Rossmaier, A., Molnar, A., & Meyer, M.', venue: 'UROP Symposium', place: 'Ann Arbor, MI', links: [] },
    { date: '2024-04', kind: 'Mentored', topics: ['law'], title: 'From request to response: Examining the requestee’s role in consent situations', authors: 'Goodman, E., Rogoff, W., Spallas, M., Devine, H., Rossmaier, A., Molnar, A., & Meyer, M.', venue: 'UROP Symposium', place: 'Ann Arbor, MI', links: [] },
    { date: '2023-04', kind: 'Mentored', topics: ['relationships'], award: 'Blue ribbon for excellence', title: 'An attitude of gratitude: The impact of feeling appreciated by a romantic partner on stress levels following an acute stressful event', authors: 'Kolias, E., Devine, H., & Gordon, A. M.', venue: 'UROP Symposium', place: 'Ann Arbor, MI', links: [] },
    { date: '2023-04', kind: 'Mentored', topics: ['relationships'], title: 'The support of a clouded mind: Do depressive symptoms undermine one’s ability to provide support?', authors: 'Harwin, C., Devine, H., & Gordon, A. M.', venue: 'UROP Symposium', place: 'Ann Arbor, MI', links: [] },
    { date: '2023-04', kind: 'Mentored', topics: ['relationships'], title: 'Teamwork is the dreamwork: Its transformation before and throughout parenthood', authors: 'Weng, S., Devine, H., & Gordon, A. M.', venue: 'UROP Symposium', place: 'Ann Arbor, MI', links: [] },
  ],

  news: [
    { date: '2026-08', text: 'Started a PhD in Psychology at Yale University with Dr. Melissa Ferguson in the Implicit Social Cognition Lab.', url: 'https://fergusonlab.com/' },
    { date: '2026-07', text: 'Concluded two years with the Deepest Beliefs Lab as Lab Manager.', url: '' },
    { date: '2026-07', text: 'Co-organized the inaugural Mind & Machine Alignment Summit at The Ohio State University — three days convening social scientists and AI industry researchers on aligning AI with human values.', url: 'https://u.osu.edu/mindmachinealignment/' },
    { date: '2026-05', text: 'Presented a research proposal at the APS annual convention in Barcelona, Spain.', url: '' },
    { date: '2026-04', text: 'Received the NSF Graduate Research Fellowship (GRFP), featured in Ohio State Psychology news.', url: 'https://psychology.osu.edu/news/psychology-graduate-students-research-staff-receive-nsf-fellowships' },
    { date: '2026-03', text: 'Quoted in The Lantern on the ethics of deception in reality TV (Jury Duty, Season 2).', url: 'https://www.thelantern.com/2026/03/jury-duty-season-2-puts-reality-tv-ethics-on-trial/' },
    { date: '2026-02', text: 'Awarded Best Poster at the Moral Psychology Pre-Conference of SPSP 2026 in Chicago.', url: '' },
    { date: '2025-07', text: 'Co-organized the inaugural Science to Impact Symposium at Ohio State, on translating psychological science for public audiences.', url: '' },
    { date: '2025-07', text: 'Moved with the Deepest Beliefs Lab from UNC Chapel Hill to The Ohio State University.', url: 'https://www.deepestbeliefslab.com/' },
    { date: '2024-07', text: 'Joined the Deepest Beliefs Lab (PI: Dr. Kurt Gray) at UNC Chapel Hill as Lab Manager.', url: 'https://www.deepestbeliefslab.com/' },
    { date: '2024-05', text: 'Graduated from the University of Michigan with High Distinction and Highest Honors in Biopsychology, Cognition, and Neuroscience.', url: '' },
    { date: '2024-03', text: 'Received the W.B. Pillsbury Prize for best honors thesis in the BCN major.', url: 'https://lsa.umich.edu/psych/news-events/all-news/awards/announcing-the-2024-department-of-psychology-undergraduate-award1.html' },
    { date: '2023-03', text: 'Received the Louis Bernstein and Martha Muenzer Memorial Awards for senior thesis work on how close friendships shape consent.', url: 'https://lsa.umich.edu/psych/news-events/all-news/awards/announcing-the-2023-department-of-psychology-undergraduate-award.html' },
    { date: '2022-07', text: 'Joined the Well-Being, Health, and Interpersonal Relationships Lab (PI: Dr. Amie Gordon) at Michigan as Lab Manager.', url: 'https://sites.lsa.umich.edu/whirl/' },
  ],

  cv: {
    education: [
      { when: '2026 –', what: 'PhD, Psychology', where: 'Yale University', note: 'Advisor: Dr. Melissa Ferguson' },
      { when: '2020 – 2024', what: 'B.S., Biopsychology, Cognition, and Neuroscience', where: 'University of Michigan, Ann Arbor', note: 'High Distinction & Highest Honors in Major · Advisor: Dr. Amie M. Gordon' },
    ],
    experience: [
      { when: '2024 – 2026', what: 'Lab Manager, Deepest Beliefs Lab', where: 'UNC Chapel Hill → The Ohio State University', note: 'PI: Kurt Gray, PhD' },
      { when: '2022 – 2024', what: 'Lab Manager, Well-Being, Health, and Interpersonal Relationships Lab', where: 'University of Michigan', note: 'PI: Amie M. Gordon, PhD' },
      { when: '2021 – 2022', what: 'Recruitment & Participant Coordinator, WHIRL Lab', where: 'University of Michigan', note: 'PI: Amie M. Gordon, PhD' },
      { when: '2021', what: 'Research Assistant, WHIRL Lab', where: 'University of Michigan', note: 'PI: Amie M. Gordon, PhD' },
      { when: '2020 – 2021', what: 'Research Assistant, Follow the Leader', where: 'University of Michigan', note: 'PI: Elizabeth Trinh' },
    ],
    awards: [
      { when: '2026', what: 'NSF Graduate Research Fellowship' },
      { when: '2026', what: 'Best Poster Award, Moral Psychology Pre-Conference, SPSP' },
      { when: '2024', what: 'W.B. Pillsbury Award for Best Honors Thesis in BCN, University of Michigan' },
      { when: '2024', what: 'Highest Honors in Psychology, University of Michigan' },
      { when: '2024', what: 'Al Cain Honors Award, University of Michigan' },
      { when: '2024', what: 'Finalist, SPSP Undergraduate Student Poster Award' },
      { when: '2024', what: 'UofM Conference Travel Award' },
      { when: '2023', what: 'Louis Bernstein Undergraduate Psychology Award for Senior Thesis' },
      { when: '2023', what: 'Martha Muenzer Memorial Award in Psychology for Senior Thesis' },
      { when: '2023', what: 'James B. Angell Scholar, University of Michigan' },
      { when: '2022', what: 'UofM Conference Travel Award; LSA Spring/Summer Scholarship' },
      { when: '2019', what: 'National Merit Commended Scholar' },
    ],
    service: [
      { when: '2026', what: 'Co-Organizer, Mind & Machine Alignment Summit', note: 'The Ohio State University' },
      { when: '2026', what: 'Creator, psychology post-baccalaureate job resource guide and Slack workspace' },
      { when: '2025', what: 'Co-Organizer, Science to Impact Symposium', note: 'The Ohio State University' },
      { when: '2025', what: 'Mentored Reviewer, Journal of Empirical Legal Studies' },
      { when: '2024', what: 'Mentored Reviewer, Proceedings of the National Academy of Sciences' },
      { when: '2024', what: 'Mentored Reviewer, Nature Reviews Psychology' },
    ],
    teaching: [
      { when: 'Fall 2024', what: 'Teaching Assistant, PSYC 574: The Science of Moral Understanding', note: 'UNC Chapel Hill · Prof. Kurt Gray' },
      { when: '2026', what: 'Mentor, Summer Research Opportunities Program', note: 'Ohio State · 2 undergraduate researchers' },
      { when: '2024 – 2025', what: 'Research Mentor, Deepest Beliefs Lab', note: 'UNC Chapel Hill · 3 undergraduate RAs' },
      { when: '2022 – 2024', what: 'Research Mentor, WHIRL Lab', note: 'University of Michigan · 15 undergraduate RAs' },
    ],
    skills: [
      { when: 'Software', what: 'Qualtrics, Prolific, CloudResearch, RStudio, SPSS' },
      { when: 'Physiological', what: 'AcqKnowledge, MindWare, Viso/Noldus, hormonal assaying' },
    ],
  },
};
