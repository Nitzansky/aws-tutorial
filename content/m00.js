COURSE.add({
  id: 'm00', order: 0, icon: '🧭',
  title: { en: 'Start here', he: 'מתחילים כאן' },
  summary: { en: 'How this course works, and a map of everything AWS offers for GenAI.', he: 'איך הקורס עובד, ומפה של כל מה ש-AWS מציעה ל-GenAI.' },
  glossary: [
    { term: 'GenAI', aka: ['Generative AI'], en: 'Generative AI. Software that creates new content (text, code, images) instead of only sorting or scoring existing data.', he: 'בינה מלאכותית יוצרת. תוכנה שיוצרת תוכן חדש (טקסט, קוד, תמונות) במקום רק למיין או לדרג מידע קיים.' },
    { term: 'AWS', en: 'Amazon Web Services. A cloud provider: you rent computers and ready-made services over the internet and pay for what you use.', he: 'Amazon Web Services. ספק ענן: שוכרים מחשבים ושירותים מוכנים דרך האינטרנט ומשלמים לפי שימוש.' },
    { term: 'Amazon Bedrock', aka: ['Bedrock'], en: 'The AWS service that gives you many AI models behind one API, plus tools around them (knowledge bases, guardrails, evaluations).', he: 'שירות AWS שנותן גישה להרבה מודלי AI דרך API אחד, ועוד כלים סביבם (knowledge bases, guardrails, evaluations).' },
    { term: 'AgentCore', aka: ['Amazon Bedrock AgentCore'], en: 'A set of AWS services for building and running AI agents in production: Harness, Runtime, Memory, Gateway, Identity, built-in tools, Observability, Policy, Evaluations and more. You can use each part alone.', he: 'אוסף שירותי AWS לבנייה והרצה של סוכני AI בפרודקשן: Harness, Runtime, Memory, Gateway, Identity, כלים מובנים, Observability, Policy, Evaluations ועוד. אפשר להשתמש בכל חלק לבד.' },
    { term: 'Console', aka: ['AWS Management Console'], en: 'The AWS website where you click to create and view resources. The opposite of doing it from code or the command line.', he: 'אתר האינטרנט של AWS שבו לוחצים כדי ליצור ולראות משאבים. ההפך מלעשות את זה מקוד או משורת הפקודה.' },
    { term: 'Managed service', en: 'A service where AWS runs the servers, updates and scaling for you. You only use it.', he: 'שירות שבו AWS מריצה בשבילך את השרתים, העדכונים וה-scaling. אתה רק משתמש בו.' },
    { term: 'Serverless', en: 'You do not manage any servers. The service starts when a request arrives, and you pay only for what you use.', he: 'אתה לא מנהל שרתים. השירות עולה כשמגיעה בקשה, ומשלמים רק על מה שמשתמשים.' },
    { term: 'Production', aka: ['prod'], en: 'The real system that real users use. The opposite of a demo or a test.', he: 'המערכת האמיתית שמשתמשים אמיתיים עובדים איתה. ההפך מדמו או בדיקה.' }
  ],
  lessons: [
    {
      id: 'm00l1', minutes: 5,
      title: { en: 'How this course works', he: 'איך הקורס עובד' },
      blocks: [
        { t: 'p', en: 'Welcome. This course takes you from zero to a professional **GenAI developer on AWS**. It works with no internet, so you can do all of it on a flight.', he: 'ברוך הבא. הקורס הזה לוקח אותך מאפס למפתח **GenAI מקצועי ב-AWS**. הוא עובד בלי אינטרנט, אז אפשר לעשות את כולו בטיסה.' },
        { t: 'h', en: 'You learn by doing', he: 'לומדים דרך עשייה' },
        { t: 'list', en: [
          '**Questions** after every idea. A wrong answer is fine — it goes into your Practice list.',
          '**Fill in the code**: real Python and CLI commands with gaps.',
          '**Terminal labs**: a fake terminal where you type the real commands.',
          '**Console labs**: rebuilt AWS console screens where you fill in the form like in the real thing.',
          '**Simulators**: small toys that show how tokens, RAG, guardrails, memory and traces behave.',
          '**Do it for real**: short task lists for when you land and have an AWS account.'
        ], he: [
          '**שאלות** אחרי כל רעיון. תשובה שגויה זה בסדר — היא נכנסת לרשימת התרגול שלך.',
          '**השלמת קוד**: Python ופקודות CLI אמיתיות עם חורים.',
          '**מעבדות טרמינל**: טרמינל מדומה שבו מקלידים את הפקודות האמיתיות.',
          '**מעבדות קונסול**: מסכי קונסול AWS משוחזרים שבהם ממלאים את הטופס כמו באמת.',
          '**סימולטורים**: צעצועים קטנים שמראים איך מתנהגים טוקנים, RAG, guardrails, זיכרון ו-traces.',
          '**עשה את זה באמת**: רשימות משימות קצרות לרגע שתנחת ויהיה לך חשבון AWS.'
        ] },
        { t: 'note', kind: 'jargon', en: 'Words with a dotted line, like [[Amazon Bedrock]] or [[Serverless]], are jargon. Click one to see what it means. All of them are also in the **Glossary**, with flashcards.', he: 'מילים עם קו מנוקד, כמו [[Amazon Bedrock]] או [[Serverless]], הן ז׳רגון. לחץ על אחת כדי לראות מה היא אומרת. כולן נמצאות גם ב**מילון המונחים**, עם כרטיסיות.' },
        { t: 'note', kind: 'info', en: 'Technical words stay in English also in the Hebrew version. This is on purpose: at work, in the docs and in the AWS console you will only meet them in English.', he: 'מונחים טכניים נשארים באנגלית גם בגרסה העברית. זה בכוונה: בעבודה, בתיעוד ובקונסול של AWS תפגוש אותם רק באנגלית.' },
        { t: 'note', kind: 'warn', en: 'The console screens here are **rebuilt copies**, not real screenshots. Labels and steps follow the AWS docs from November 2026. AWS changes the console often, so the real screen may look a little different.', he: 'מסכי הקונסול כאן הם **העתקים משוחזרים**, לא צילומי מסך אמיתיים. התוויות והשלבים לפי תיעוד AWS מנובמבר 2026. AWS משנה את הקונסול לעיתים קרובות, כך שהמסך האמיתי עשוי להיראות קצת אחרת.' },
        { t: 'h', en: 'How to pass', he: 'איך עוברים' },
        { t: 'p', en: 'A lesson is done when you solve all its exercises. At the end there is a **final exam** of 40 questions. Get 80% and you unlock a certificate. Your progress is saved in this browser.', he: 'שיעור מסתיים כשפותרים את כל התרגילים שבו. בסוף יש **מבחן מסכם** של 40 שאלות. 80% פותח תעודה. ההתקדמות שלך נשמרת בדפדפן הזה.' },
        { t: 'quiz', q: { en: 'Try your first question. What happens when you answer a question wrong?', he: 'נסה את השאלה הראשונה. מה קורה כשעונים לא נכון על שאלה?' },
          options: { en: ['The course locks for an hour', 'It is saved to your Practice list so you see it again', 'You lose all your XP', 'Nothing is saved at all'], he: ['הקורס ננעל לשעה', 'היא נשמרת ברשימת התרגול כדי שתראה אותה שוב', 'מאבדים את כל ה-XP', 'שום דבר לא נשמר'] },
          answer: 1, explain: { en: 'Mistakes are the best material. The Practice page shows the questions you missed first.', he: 'טעויות הן החומר הכי טוב. עמוד התרגול מציג קודם את השאלות שטעית בהן.' } }
      ]
    },
    {
      id: 'm00l2', minutes: 10,
      title: { en: 'The map: GenAI on AWS in one picture', he: 'המפה: GenAI ב-AWS בתמונה אחת' },
      blocks: [
        { t: 'p', en: 'Before the details, look at the whole map. Almost everything a GenAI developer does on AWS sits in one of these layers. You build from the bottom up.', he: 'לפני הפרטים, נסתכל על כל המפה. כמעט כל מה שמפתח GenAI עושה ב-AWS יושב באחת מהשכבות האלה. בונים מלמטה למעלה.' },
        { t: 'arch', layers: [
          { title: { en: '5 · Ready-made assistants (you use them, you do not build them)', he: '5 · עוזרים מוכנים (משתמשים בהם, לא בונים אותם)' }, items: ['Kiro', 'Amazon Q', 'AWS Quick'] },
          { title: { en: '4 · Run agents in production — Amazon Bedrock AgentCore', he: '4 · הרצת סוכנים בפרודקשן — Amazon Bedrock AgentCore' }, items: ['Harness', 'Runtime', 'Memory', 'Gateway', 'Identity', 'Code Interpreter', 'Browser', 'Observability', 'Policy', 'Evaluations', 'Registry'] },
          { title: { en: '3 · Make the model useful and safe — Amazon Bedrock features', he: '3 · להפוך את המודל לשימושי ובטוח — יכולות Amazon Bedrock' }, items: ['Knowledge Bases (RAG)', 'Guardrails', 'Prompt Management', 'Evaluations', 'Flows'] },
          { title: { en: '2 · Talk to a model — Amazon Bedrock', he: '2 · לדבר עם מודל — Amazon Bedrock' }, items: ['Converse API', 'Claude', 'Amazon Nova', 'Llama', 'Mistral', { en: 'many more models', he: 'עוד הרבה מודלים' }] },
          { title: { en: '1 · AWS basics that everything stands on', he: '1 · יסודות AWS שהכול עומד עליהם' }, items: ['IAM', 'S3', 'Lambda', 'CloudWatch', 'VPC', 'KMS'] },
          { title: { en: 'On the side · Train or host your own models', he: 'בצד · אימון או אירוח של מודלים משלך' }, items: ['Amazon SageMaker AI'] }
        ], caption: { en: 'This course goes through layers 1 → 4 in order, then visits layer 5 and SageMaker.', he: 'הקורס עובר על שכבות 1 ← 4 לפי הסדר, ואז מבקר בשכבה 5 וב-SageMaker.' } },
        { t: 'h', en: 'What does a GenAI developer actually do?', he: 'מה מפתח GenAI עושה בפועל?' },
        { t: 'p', en: 'You usually do **not** train models. You take a model that already exists and build a product around it. A typical week looks like this:', he: 'בדרך כלל **לא** מאמנים מודלים. לוקחים מודל שכבר קיים ובונים סביבו מוצר. שבוע טיפוסי נראה כך:' },
        { t: 'flow', steps: {
          en: ['Pick a model and write the prompt', 'Connect company data (RAG)', 'Give the model tools → it becomes an agent', 'Add guardrails so it stays safe', 'Deploy it (AgentCore Runtime)', 'Measure quality (evaluations)', 'Watch it in production (observability)', 'Cut cost and latency'],
          he: ['בוחרים מודל וכותבים פרומפט', 'מחברים מידע של החברה (RAG)', 'נותנים למודל כלים ← הוא הופך לסוכן', 'מוסיפים guardrails כדי שיישאר בטוח', 'מעלים אותו (AgentCore Runtime)', 'מודדים איכות (evaluations)', 'עוקבים אחריו בפרודקשן (observability)', 'מורידים עלות וזמן תגובה'] } },
        { t: 'note', kind: 'tip', en: 'Keep this list in your head. Every module in the course is one of these steps. A "pro" is simply someone who can do all eight, and can explain the trade-offs of each.', he: 'שמור את הרשימה הזו בראש. כל מודול בקורס הוא אחד מהשלבים האלה. "מקצוען" הוא פשוט מי שיודע לעשות את כל השמונה, ולהסביר את ה-trade-offs של כל אחד.' },
        { t: 'match', prompt: { en: 'Match the need to the AWS piece that answers it.', he: 'התאם את הצורך לחלק ב-AWS שעונה עליו.' }, pairs: [
          { a: { en: 'I want to call Claude or Nova from my code', he: 'אני רוצה לקרוא ל-Claude או Nova מהקוד שלי' }, b: 'Amazon Bedrock — Converse API' },
          { a: { en: 'The model must answer from our company documents', he: 'המודל צריך לענות מתוך מסמכי החברה' }, b: 'Knowledge Bases (RAG)' },
          { a: { en: 'The model must never give medical advice or leak emails', he: 'אסור שהמודל ייתן ייעוץ רפואי או ידליף כתובות אימייל' }, b: 'Guardrails' },
          { a: { en: 'I wrote an agent and need a place to run it for many users', he: 'כתבתי סוכן וצריך מקום להריץ אותו להרבה משתמשים' }, b: 'AgentCore Runtime' },
          { a: { en: 'The agent should remember the user next week', he: 'הסוכן צריך לזכור את המשתמש בשבוע הבא' }, b: 'AgentCore Memory' },
          { a: { en: 'I need to see why one request took 9 seconds', he: 'אני צריך לראות למה בקשה אחת לקחה 9 שניות' }, b: 'Observability (traces)' }
        ] },
        { t: 'quiz', q: { en: 'Your company wants a chatbot that answers from its internal PDF files. Which layer of the map solves "answers from our PDFs"?', he: 'החברה שלך רוצה צ׳אטבוט שעונה מתוך קבצי PDF פנימיים. איזו שכבה במפה פותרת את "עונה מתוך ה-PDF שלנו"?' },
          options: { en: ['Layer 1 — IAM', 'Layer 3 — Knowledge Bases', 'SageMaker AI — train a new model on the PDFs', 'Layer 5 — Kiro'], he: ['שכבה 1 — IAM', 'שכבה 3 — Knowledge Bases', 'SageMaker AI — לאמן מודל חדש על ה-PDF', 'שכבה 5 — Kiro'] },
          answer: 1, explain: { en: 'You almost never train a model for this. You keep the model as it is and hand it the right pages at question time. That technique is called RAG, and Knowledge Bases is the managed way to do it.', he: 'כמעט אף פעם לא מאמנים מודל בשביל זה. משאירים את המודל כמו שהוא ונותנים לו את הדפים הנכונים בזמן השאלה. לטכניקה קוראים RAG, ו-Knowledge Bases היא הדרך המנוהלת לעשות זאת.' } },
        { t: 'quiz', q: { en: 'Which TWO are parts of AgentCore?', he: 'אילו שניים הם חלקים של AgentCore?' },
          options: { en: ['Runtime', 'S3', 'Memory', 'Kiro'], he: ['Runtime', 'S3', 'Memory', 'Kiro'] },
          answer: [0, 2], explain: { en: 'Runtime runs your agent, Memory lets it remember. S3 is file storage and Kiro is an AI coding tool — both are separate from AgentCore.', he: 'Runtime מריץ את הסוכן, Memory נותן לו לזכור. S3 הוא אחסון קבצים ו-Kiro הוא כלי קוד עם AI — שניהם נפרדים מ-AgentCore.' } },
        { t: 'reveal', q: { en: 'In one or two sentences: what is the difference between "using a model" and "building an agent"?', he: 'במשפט או שניים: מה ההבדל בין "להשתמש במודל" לבין "לבנות סוכן"?' },
          a: { en: 'Using a model: you send text and get text back, once. An agent: the model runs in a loop, decides which tools to call (search, APIs, code), looks at the results and continues until the task is done.', he: 'שימוש במודל: שולחים טקסט ומקבלים טקסט, פעם אחת. סוכן: המודל רץ בלולאה, מחליט אילו כלים להפעיל (חיפוש, APIs, קוד), מסתכל על התוצאות וממשיך עד שהמשימה הושלמה.' } }
      ]
    }
  ]
});
