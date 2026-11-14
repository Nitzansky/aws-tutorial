COURSE.add({
  id: 'm05', order: 5, icon: '📚',
  title: { en: 'RAG and Bedrock Knowledge Bases', he: 'RAG ו-Bedrock Knowledge Bases' },
  summary: { en: 'Make the model answer from your own documents: chunking, embeddings, vector stores, building and querying a knowledge base, and debugging bad answers.', he: 'לגרום למודל לענות מתוך המסמכים שלך: chunking, embeddings, vector stores, בנייה ותשאול של knowledge base, ודיבוג של תשובות גרועות.' },
  glossary: [
    { term: 'Knowledge base', aka: ['KB', 'Knowledge Bases', 'knowledge bases'], en: 'The managed RAG feature of Bedrock: it ingests your data, searches it at question time and returns chunks, or a generated answer with citations.', he: 'פיצ׳ר ה-RAG המנוהל של Bedrock: הוא קולט את המידע שלך, מחפש בו בזמן השאלה ומחזיר chunks, או תשובה מוכנה עם citations.' },
    { term: 'Chunk', aka: ['chunks', 'chunking'], en: 'A piece of a document, small enough to embed and to put in a prompt. Chunking is the act of cutting documents into chunks.', he: 'חתיכה של מסמך, קטנה מספיק כדי לעשות לה embedding ולשים אותה בפרומפט. Chunking היא הפעולה של חיתוך מסמכים ל-chunks.' },
    { term: 'Overlap', aka: ['chunk overlap'], en: 'Text that is repeated at the end of one chunk and the start of the next, so a sentence on the border is not lost.', he: 'טקסט שחוזר בסוף chunk אחד ובתחילת הבא, כדי שמשפט שנמצא על הגבול לא יאבד.' },
    { term: 'Parsing', aka: ['parser', 'parse'], en: 'Turning a file (PDF, Word, HTML, image) into clean text that can be chunked.', he: 'הפיכת קובץ (PDF, Word, HTML, תמונה) לטקסט נקי שאפשר לחתוך ל-chunks.' },
    { term: 'Ingestion', aka: ['ingestion job', 'sync', 'ingest'], en: 'The offline pipeline that reads your files, parses, chunks and embeds them, and stores the vectors. In the console it is the Sync button.', he: 'ה-pipeline הלא-מקוון שקורא את הקבצים שלך, מפרסר, חותך ל-chunks, עושה embedding ושומר את הוקטורים. בקונסול זה כפתור ה-Sync.' },
    { term: 'Data source', aka: ['data sources', 'connector', 'connectors'], en: 'The place a knowledge base reads documents from, for example an S3 bucket or SharePoint. The code that reads it is called a connector.', he: 'המקום שממנו knowledge base קורא מסמכים, למשל S3 bucket או SharePoint. הקוד שקורא ממנו נקרא connector.' },
    { term: 'Vector store', aka: ['vector database', 'vector stores'], en: 'A database that stores embeddings and quickly finds the ones closest to a query vector.', he: 'מסד נתונים ששומר embeddings ומוצא מהר את אלה שהכי קרובים לוקטור של שאילתה.' },
    { term: 'Vector index', aka: ['index'], en: 'The data structure inside a vector store that makes nearest-vector search fast. It has a fixed number of dimensions and a distance metric.', he: 'מבנה הנתונים בתוך vector store שהופך חיפוש וקטור קרוב למהיר. יש לו מספר קבוע של dimensions ו-distance metric.' },
    { term: 'Dimensions', aka: ['dimension', 'vector dimensions'], en: 'How many numbers are in each embedding vector, for example 1024.', he: 'כמה מספרים יש בכל וקטור embedding, למשל 1024.' },
    { term: 'Semantic search', en: 'Search by meaning: compare the embedding of the question with the embeddings of the chunks.', he: 'חיפוש לפי משמעות: משווים את ה-embedding של השאלה ל-embeddings של ה-chunks.' },
    { term: 'Keyword search', aka: ['lexical search'], en: 'Classic search by the exact words in the text.', he: 'חיפוש קלאסי לפי המילים המדויקות בטקסט.' },
    { term: 'Hybrid search', aka: ['HYBRID'], en: 'Running semantic search and keyword search together and merging the results.', he: 'הרצה של semantic search ו-keyword search יחד ומיזוג התוצאות.' },
    { term: 'Top-k', aka: ['numberOfResults', 'top k'], en: 'How many chunks the search returns. In Bedrock the field is `numberOfResults`.', he: 'כמה chunks החיפוש מחזיר. ב-Bedrock השדה הוא `numberOfResults`.' },
    { term: 'Metadata', aka: ['metadata attributes'], en: 'Extra facts about a document that are stored next to its chunks, such as department, year or language.', he: 'עובדות נוספות על מסמך שנשמרות ליד ה-chunks שלו, כמו מחלקה, שנה או שפה.' },
    { term: 'Metadata filter', aka: ['metadata filtering', 'filter'], en: 'A condition on metadata that limits which chunks the search may return, for example year greater than 2023.', he: 'תנאי על metadata שמגביל אילו chunks החיפוש רשאי להחזיר, למשל year גדול מ-2023.' },
    { term: 'Reranking', aka: ['reranker', 'rerank'], en: 'A second, more careful model reads the retrieved chunks together with the question and puts them in a better order.', he: 'מודל שני, קפדני יותר, קורא את ה-chunks שאוחזרו יחד עם השאלה ומסדר אותם בסדר טוב יותר.' },
    { term: 'Query decomposition', en: 'Breaking one complex question into several simple sub-questions and searching for each one.', he: 'פירוק של שאלה מורכבת אחת לכמה תת-שאלות פשוטות וחיפוש לכל אחת.' },
    { term: 'Citation', aka: ['citations'], en: 'A link from a part of the generated answer to the chunk and the source document it came from.', he: 'קישור מחלק של התשובה שנוצרה אל ה-chunk ומסמך המקור שממנו הוא הגיע.' },
    { term: 'Retrieve', aka: ['Retrieve API'], en: 'The API that only searches the knowledge base and returns chunks. You call the model yourself.', he: 'ה-API שרק מחפש ב-knowledge base ומחזיר chunks. את המודל אתה מפעיל בעצמך.' },
    { term: 'RetrieveAndGenerate', aka: ['retrieve_and_generate'], en: 'The API that searches, builds the prompt, calls the model and returns an answer with citations, all in one call.', he: 'ה-API שמחפש, בונה את הפרומפט, קורא למודל ומחזיר תשובה עם citations, הכול בקריאה אחת.' },
    { term: 'Agentic retrieval', aka: ['AgenticRetrieveStream'], en: 'A model plans the search: it splits the question, retrieves in several rounds, checks if it has enough, and then answers. API: `AgenticRetrieveStream`, managed knowledge bases only.', he: 'מודל מתכנן את החיפוש: הוא מפצל את השאלה, מאחזר בכמה סבבים, בודק אם יש לו מספיק, ואז עונה. API: `AgenticRetrieveStream`, רק ב-managed knowledge bases.' },
    { term: 'Managed knowledge base', aka: ['Managed Knowledge Base', 'managed KB'], en: 'The knowledge base type where Bedrock runs everything: ingestion, storage, indexing and retrieval, with a built-in embedding model and reranker.', he: 'סוג ה-knowledge base שבו Bedrock מריץ הכול: ingestion, אחסון, אינדוקס ואחזור, עם מודל embedding ו-reranker מובנים.' },
    { term: 'Customer-managed knowledge base', aka: ['customer-managed KB', 'customer-managed'], en: 'The knowledge base type where you own the vector store and choose the parser, the chunking and the embedding model.', he: 'סוג ה-knowledge base שבו ה-vector store בבעלותך ואתה בוחר את ה-parser, ה-chunking ומודל ה-embedding.' },
    { term: 'Hierarchical chunking', en: 'Chunking in two levels: small child chunks for precise search, and big parent chunks that are returned to the model for context.', he: 'Chunking בשתי רמות: child chunks קטנים לחיפוש מדויק, ו-parent chunks גדולים שמוחזרים למודל בשביל הקשר.' },
    { term: 'Semantic chunking', en: 'Chunking that cuts where the topic changes, found by comparing the meaning of neighbouring sentences with a model.', he: 'Chunking שחותך במקום שבו הנושא משתנה, ומוצא אותו על ידי השוואת המשמעות של משפטים סמוכים בעזרת מודל.' },
    { term: 'Binary embeddings', en: 'Embeddings stored as bits instead of decimal numbers. Cheaper to store and search, a bit less precise.', he: 'Embeddings שנשמרים כביטים במקום מספרים עשרוניים. זולים יותר לאחסון וחיפוש, קצת פחות מדויקים.' },
    { term: 'S3 Vectors', aka: ['Amazon S3 Vectors'], en: 'Vector storage and similarity search built into Amazon S3. A low-cost vector store for RAG.', he: 'אחסון וקטורים וחיפוש דמיון שמובנים בתוך Amazon S3. Vector store בעלות נמוכה ל-RAG.' },
    { term: 'GraphRAG', en: 'RAG that also stores the links between entities and documents in a graph (Amazon Neptune Analytics), for questions that need connections.', he: 'RAG ששומר גם את הקשרים בין ישויות ומסמכים בגרף (Amazon Neptune Analytics), לשאלות שדורשות חיבורים.' },
    { term: 'NL2SQL', aka: ['natural language to SQL', 'structured data store'], en: 'Turning a question in plain language into an SQL query. Bedrock does it for knowledge bases connected to a structured data store.', he: 'הפיכת שאלה בשפה רגילה לשאילתת SQL. Bedrock עושה את זה ל-knowledge bases שמחוברים ל-structured data store.' },
    { term: 'ACL', aka: ['access control list'], en: 'Access control list: the record of who may read a document.', he: 'Access control list: הרישום של מי רשאי לקרוא מסמך.' },
    { term: 'Context relevance', en: 'An evaluation metric: are the retrieved chunks relevant to the question?', he: 'מדד הערכה: האם ה-chunks שאוחזרו רלוונטיים לשאלה?' },
    { term: 'Faithfulness', en: 'An evaluation metric: does the answer say only what the retrieved chunks support?', he: 'מדד הערכה: האם התשובה אומרת רק מה שה-chunks שאוחזרו תומכים בו?' }
  ],
  lessons: [
    {
      id: 'm05l1', minutes: 12,
      title: { en: 'RAG end to end', he: 'RAG מקצה לקצה' },
      blocks: [
        { t: 'p', en: 'In module 1 you learned the one-line idea of [[RAG]]: search your documents first, put what you found into the prompt, and let the model answer from it. Now you build it. RAG is really **two pipelines**. One runs offline and prepares your documents. The other runs on every question.', he: 'במודול 1 למדת את הרעיון של [[RAG]] בשורה אחת: קודם מחפשים במסמכים שלך, שמים את מה שנמצא בפרומפט, ונותנים למודל לענות מתוכו. עכשיו בונים את זה. RAG הוא בעצם **שני pipelines**. אחד רץ offline ומכין את המסמכים שלך. השני רץ בכל שאלה.' },
        { t: 'h', en: 'Pipeline 1: ingestion (offline)', he: 'Pipeline 1: ingestion (offline)' },
        { t: 'flow', steps: { en: ['Load files', 'Parse to text', 'Chunk', 'Embed each chunk', 'Store vectors + text + metadata'], he: ['טעינת קבצים', 'Parsing לטקסט', 'Chunking', 'Embedding לכל chunk', 'שמירת וקטורים + טקסט + metadata'] }, caption: { en: 'Ingestion. It runs when documents are added or changed, not when a user asks.', he: 'Ingestion. רץ כשמסמכים נוספים או משתנים, לא כשמשתמש שואל.' } },
        { t: 'list', en: [
          '**[[Parsing|Parse]]**: turn PDF, Word or HTML into clean text. Tables, columns and scanned pages are where this step goes wrong.',
          '**[[Chunk]]**: cut the text into pieces. A whole 80-page manual is too big to embed as one meaning and too big to paste into every prompt.',
          '**Embed**: an [[Embedding]] model turns each chunk into a vector.',
          '**Store**: the vector, the original text and the [[Metadata]] go into a [[Vector store]].'
        ], he: [
          '**[[Parsing|Parse]]**: הופכים PDF, Word או HTML לטקסט נקי. טבלאות, עמודות ודפים סרוקים הם המקומות שבהם השלב הזה משתבש.',
          '**[[Chunk]]**: חותכים את הטקסט לחתיכות. מדריך שלם של 80 עמודים גדול מדי בשביל embedding של משמעות אחת, וגדול מדי להדבקה בכל פרומפט.',
          '**Embed**: מודל [[Embedding]] הופך כל chunk לוקטור.',
          '**Store**: הוקטור, הטקסט המקורי וה-[[Metadata]] נכנסים ל-[[Vector store]].'
        ] },
        { t: 'h', en: 'Pipeline 2: query (on every question)', he: 'Pipeline 2: שאילתה (בכל שאלה)' },
        { t: 'flow', steps: { en: ['User question', 'Embed the question', 'Search: top-k closest chunks', 'Augment: put chunks in the prompt', 'Generate: model answers with sources'], he: ['שאלת המשתמש', 'Embedding לשאלה', 'חיפוש: top-k ה-chunks הקרובים', 'Augment: לשים את ה-chunks בפרומפט', 'Generate: המודל עונה עם מקורות'] }, caption: { en: 'Retrieval, Augmented, Generation: the three words of the name are the last three boxes.', he: 'Retrieval, Augmented, Generation: שלוש המילים של השם הן שלוש הקופסאות האחרונות.' } },
        { t: 'note', kind: 'warn', en: 'The question must be embedded with the **same embedding model** that embedded the chunks. Vectors from two different models live in different spaces and cannot be compared. If you change the embedding model, you must embed all documents again.', he: 'לשאלה חייבים לעשות embedding עם **אותו מודל embedding** שעשה embedding ל-chunks. וקטורים משני מודלים שונים חיים במרחבים שונים ואי אפשר להשוות ביניהם. אם מחליפים מודל embedding, חייבים לעשות embedding מחדש לכל המסמכים.' },
        { t: 'order', prompt: { en: 'Put the ingestion steps in order.', he: 'סדר את שלבי ה-ingestion.' },
          items: { en: ['Read the file from the data source', 'Parse it into text', 'Cut the text into chunks', 'Create an embedding for each chunk', 'Write vectors, text and metadata to the vector store'], he: ['לקרוא את הקובץ מה-data source', 'לפרסר אותו לטקסט', 'לחתוך את הטקסט ל-chunks', 'ליצור embedding לכל chunk', 'לכתוב וקטורים, טקסט ו-metadata ל-vector store'] },
          explain: { en: 'Parse before chunk, chunk before embed. An error early in the chain (bad parsing) cannot be fixed by the later steps.', he: 'Parsing לפני chunking, chunking לפני embedding. שגיאה מוקדמת בשרשרת (parsing גרוע) לא ניתנת לתיקון בשלבים המאוחרים.' } },
        { t: 'sim', id: 'rag', title: { en: 'RAG playground: chunk, search, augment', he: 'מגרש משחקים של RAG: chunk, חיפוש, augment' }, intro: { en: 'A small support document is cut into chunks. Move the chunk size, the overlap and top-k, and ask a question. Watch which chunks win and what prompt is finally sent to the model. Try chunk size 8: the answer is cut in half. Try 70: one chunk holds everything and you pay for useless words.', he: 'מסמך תמיכה קטן נחתך ל-chunks. הזז את גודל ה-chunk, ה-overlap ואת top-k, ושאל שאלה. ראה אילו chunks מנצחים ואיזה פרומפט נשלח בסוף למודל. נסה גודל chunk של 8: התשובה נחתכת באמצע. נסה 70: chunk אחד מכיל הכול ואתה משלם על מילים מיותרות.' } },
        { t: 'h', en: 'Why RAG fails', he: 'למה RAG נכשל' },
        { t: 'p', en: 'A RAG answer can be wrong for three different reasons. They need different fixes, so a pro always asks first: **which stage broke?**', he: 'תשובת RAG יכולה להיות שגויה משלוש סיבות שונות. הן דורשות תיקונים שונים, ולכן מקצוען תמיד שואל קודם: **איזה שלב נשבר?**' },
        { t: 'table', head: { en: ['Failure', 'What it looks like', 'Typical cause'], he: ['כשל', 'איך זה נראה', 'סיבה טיפוסית'] }, rows: {
          en: [
            ['**Bad chunks**', 'The right document exists, but no single chunk holds the full answer. Or tables come out as word soup.', 'Chunk too small or too big, cut in the middle of a rule, poor parsing of PDFs and tables.'],
            ['**Wrong retrieval**', 'The answer is in a chunk, but that chunk is not in the top-k.', 'The question uses other words than the document, exact codes that embeddings miss, too many similar documents, no metadata filter, top-k too low.'],
            ['**Model ignores context**', 'The right chunk is in the prompt, but the answer is still wrong or invented.', 'Weak prompt (no "answer only from the context"), too many chunks so the right one is lost, the chunks contradict each other.']
          ],
          he: [
            ['**Chunks גרועים**', 'המסמך הנכון קיים, אבל אין chunk אחד שמכיל את התשובה המלאה. או שטבלאות יוצאות כסלט מילים.', 'Chunk קטן מדי או גדול מדי, חיתוך באמצע כלל, parsing חלש של PDF וטבלאות.'],
            ['**אחזור שגוי**', 'התשובה נמצאת ב-chunk, אבל ה-chunk הזה לא בתוך ה-top-k.', 'השאלה משתמשת במילים אחרות מהמסמך, קודים מדויקים ש-embeddings מפספסים, יותר מדי מסמכים דומים, אין metadata filter, top-k נמוך מדי.'],
            ['**המודל מתעלם מההקשר**', 'ה-chunk הנכון נמצא בפרומפט, אבל התשובה עדיין שגויה או מומצאת.', 'פרומפט חלש (בלי "answer only from the context"), יותר מדי chunks כך שהנכון הולך לאיבוד, ה-chunks סותרים זה את זה.']
          ] } },
        { t: 'quiz', q: { en: 'A user asks "How long is the warranty?" The bot says "one year". The manual says two years. You look at the chunks that were sent to the model: none of them mentions the warranty. Which stage failed?', he: 'משתמש שואל "כמה זמן האחריות?" הבוט עונה "שנה". במדריך כתוב שנתיים. אתה מסתכל על ה-chunks שנשלחו למודל: אף אחד מהם לא מזכיר אחריות. איזה שלב נכשל?' },
          options: { en: ['Retrieval: the right chunk never reached the prompt', 'Generation: the model ignored the context', 'The temperature was too high', 'The model has an old knowledge cutoff'], he: ['Retrieval: ה-chunk הנכון אף פעם לא הגיע לפרומפט', 'Generation: המודל התעלם מההקשר', 'ה-temperature הייתה גבוהה מדי', 'למודל יש knowledge cutoff ישן'] },
          answer: 0, explain: { en: 'The model could not use a chunk it never saw, so it guessed. Changing the model or the prompt will not help. Fix retrieval (or the chunks). Also add the "say I do not know" rule so that a retrieval miss does not become an invented answer.', he: 'המודל לא יכול היה להשתמש ב-chunk שהוא לא ראה, אז הוא ניחש. החלפת מודל או פרומפט לא תעזור. מתקנים את האחזור (או את ה-chunks). מוסיפים גם את הכלל "say I do not know" כדי שפספוס באחזור לא יהפוך לתשובה מומצאת.' } },
        { t: 'quiz', q: { en: 'Why do we cut documents into chunks instead of embedding each whole document?', he: 'למה חותכים מסמכים ל-chunks במקום לעשות embedding לכל מסמך שלם?' },
          options: { en: ['Because vector stores cannot hold long text', 'Because one vector for a long document blurs many topics together, and whole documents waste the context window', 'Because chunking makes the model more creative', 'Because AWS bills per document'], he: ['כי vector stores לא יכולים להחזיק טקסט ארוך', 'כי וקטור אחד למסמך ארוך מטשטש הרבה נושאים יחד, ומסמכים שלמים מבזבזים את ה-context window', 'כי chunking הופך את המודל ליצירתי יותר', 'כי AWS מחייבת לפי מסמך'] },
          answer: 1, explain: { en: 'An embedding is one point for one meaning. A manual about refunds, shipping and passwords lands in the middle of all three and matches none of them well. Small focused chunks match better and cost fewer input tokens.', he: 'Embedding הוא נקודה אחת למשמעות אחת. מדריך על החזרים, משלוחים וסיסמאות נוחת באמצע בין שלושתם ולא מתאים טוב לאף אחד. Chunks קטנים וממוקדים מתאימים טוב יותר ועולים פחות טוקני קלט.' } },
        { t: 'match', prompt: { en: 'Match the symptom to the stage you check first.', he: 'התאם את הסימפטום לשלב שבודקים קודם.' }, pairs: [
          { a: { en: 'Numbers from a PDF table are mixed between rows', he: 'מספרים מטבלה ב-PDF מתערבבים בין שורות' }, b: { en: 'Parsing', he: 'Parsing' } },
          { a: { en: 'The answer has only half of the procedure', he: 'בתשובה יש רק חצי מהנוהל' }, b: { en: 'Chunking (size and overlap)', he: 'Chunking (גודל ו-overlap)' } },
          { a: { en: 'Searching for error code "E-4471" returns unrelated chunks', he: 'חיפוש של קוד שגיאה "E-4471" מחזיר chunks לא קשורים' }, b: { en: 'Search type (add keyword / hybrid)', he: 'סוג החיפוש (להוסיף keyword / hybrid)' } },
          { a: { en: 'The right chunk was retrieved, the answer contradicts it', he: 'ה-chunk הנכון אוחזר, התשובה סותרת אותו' }, b: { en: 'Generation prompt', he: 'פרומפט ה-generation' } }
        ] },
        { t: 'reveal', q: { en: 'Interview: "Why not skip RAG and just paste all our documents into a model with a huge context window?"', he: 'ראיון: "למה לא לדלג על RAG ופשוט להדביק את כל המסמכים שלנו למודל עם context window ענק?"' },
          a: { en: 'For a small, stable set of documents that is a fair choice, especially with prompt caching. It stops working as the data grows. Cost and latency rise with every token on every request. The model pays less attention to each part of a very long context. Most companies have far more text than any window. And you lose access control and freshness: with RAG I can filter by user permissions and a changed document is used right after the next sync. RAG sends the right few pages instead of the whole library.', he: 'בשביל סט קטן ויציב של מסמכים זו בחירה הוגנת, במיוחד עם prompt caching. זה מפסיק לעבוד כשהמידע גדל. העלות וה-latency עולים עם כל טוקן בכל בקשה. המודל שם פחות לב לכל חלק ב-context ארוך מאוד. לרוב החברות יש הרבה יותר טקסט מכל חלון. ומאבדים בקרת גישה ועדכניות: עם RAG אני יכול לסנן לפי הרשאות המשתמש, ומסמך שהשתנה נכנס לשימוש מיד אחרי ה-sync הבא. RAG שולח את מעט העמודים הנכונים במקום את כל הספרייה.' } }
      ]
    },
    {
      id: 'm05l2', minutes: 14,
      title: { en: 'Chunking and embeddings in depth', he: 'Chunking ו-embeddings לעומק' },
      blocks: [
        { t: 'p', en: 'Chunking looks like a boring setting. It is the setting that decides most of your RAG quality. The trade-off is simple to say and hard to get right:', he: 'Chunking נראה כמו הגדרה משעממת. זו ההגדרה שקובעת את רוב האיכות של ה-RAG שלך. את ה-trade-off קל להגיד וקשה לדייק:' },
        { t: 'table', head: { en: ['', 'Small chunks', 'Big chunks'], he: ['', 'Chunks קטנים', 'Chunks גדולים'] }, rows: {
          en: [['Search precision', 'High: one chunk = one idea', 'Lower: many ideas in one vector'], ['Context for the model', 'Poor: the answer may be split over chunks', 'Rich: the whole rule is in one piece'], ['Tokens per request', 'Few', 'Many']],
          he: [['דיוק החיפוש', 'גבוה: chunk אחד = רעיון אחד', 'נמוך יותר: הרבה רעיונות בוקטור אחד'], ['הקשר למודל', 'דל: התשובה עלולה להתפצל בין chunks', 'עשיר: כל הכלל נמצא בחתיכה אחת'], ['טוקנים לבקשה', 'מעט', 'הרבה']] } },
        { t: 'p', en: '[[Overlap]] softens the borders: the end of one chunk is repeated at the start of the next, so a sentence that sits on the cut is whole in at least one of them. More overlap means more chunks to store and embed.', he: '[[Overlap]] מרכך את הגבולות: הסוף של chunk אחד חוזר בתחילת הבא, כך שמשפט שיושב על החיתוך שלם לפחות באחד מהם. יותר overlap אומר יותר chunks לאחסן ולעשות להם embedding.' },
        { t: 'h', en: 'The chunking strategies of Bedrock', he: 'אסטרטגיות ה-chunking של Bedrock' },
        { t: 'p', en: 'In a [[Customer-managed knowledge base]] you choose the strategy per data source. In the API it is `chunkingStrategy` inside `vectorIngestionConfiguration.chunkingConfiguration`.', he: 'ב-[[Customer-managed knowledge base]] בוחרים את האסטרטגיה לכל data source. ב-API זה `chunkingStrategy` בתוך `vectorIngestionConfiguration.chunkingConfiguration`.' },
        { t: 'table', head: { en: ['Strategy', 'API value', 'How it cuts', 'Use it when'], he: ['אסטרטגיה', 'ערך ב-API', 'איך היא חותכת', 'מתי משתמשים'] }, rows: {
          en: [
            ['**Default chunking**', '(no configuration)', 'About 300 tokens per chunk, and it keeps whole sentences.', 'A first version. Good enough for plain prose.'],
            ['**Fixed-size**', '`FIXED_SIZE`', 'You set `maxTokens` (1 to 8192) and `overlapPercentage` (1 to 99).', 'You want control and predictable cost.'],
            ['**Hierarchical**', '`HIERARCHICAL`', 'Exactly two levels: parent and child, each with `maxTokens`, plus `overlapTokens`. Search hits the small child chunks, and the big parent chunk is returned.', 'Long structured documents where the answer needs the text around it: manuals, contracts.'],
            ['**Semantic**', '`SEMANTIC`', 'Cuts where the meaning changes. Settings: `maxTokens`, `bufferSize` (0 or 1 sentences around), `breakpointPercentileThreshold` (50 to 99).', 'Text that moves between topics without clear headings. It uses a foundation model, so ingestion costs more.'],
            ['**No chunking**', '`NONE`', 'One file = one chunk.', 'You already cut the files yourself: one FAQ answer per file.'],
            ['**Custom**', '(Lambda)', 'Your own transformation Lambda function does the chunking.', 'Special formats that no built-in strategy handles.']
          ],
          he: [
            ['**Default chunking**', '(בלי קונפיגורציה)', 'בערך 300 טוקנים ל-chunk, ושומר על משפטים שלמים.', 'גרסה ראשונה. מספיק טוב לפרוזה רגילה.'],
            ['**Fixed-size**', '`FIXED_SIZE`', 'אתה קובע `maxTokens` (1 עד 8192) ו-`overlapPercentage` (1 עד 99).', 'רוצים שליטה ועלות צפויה.'],
            ['**Hierarchical**', '`HIERARCHICAL`', 'בדיוק שתי רמות: parent ו-child, לכל אחת `maxTokens`, ועוד `overlapTokens`. החיפוש פוגע ב-child chunks הקטנים, וה-parent chunk הגדול מוחזר.', 'מסמכים ארוכים ומובנים שבהם התשובה צריכה את הטקסט שמסביב: מדריכים, חוזים.'],
            ['**Semantic**', '`SEMANTIC`', 'חותך איפה שהמשמעות משתנה. הגדרות: `maxTokens`, `bufferSize` (0 או 1 משפטים מסביב), `breakpointPercentileThreshold` (50 עד 99).', 'טקסט שעובר בין נושאים בלי כותרות ברורות. משתמש ב-foundation model, ולכן ה-ingestion עולה יותר.'],
            ['**No chunking**', '`NONE`', 'קובץ אחד = chunk אחד.', 'כבר חתכת את הקבצים בעצמך: תשובת FAQ אחת לכל קובץ.'],
            ['**Custom**', '(Lambda)', 'פונקציית transformation Lambda משלך עושה את ה-chunking.', 'פורמטים מיוחדים שאף אסטרטגיה מובנית לא מטפלת בהם.']
          ] } },
        { t: 'note', kind: 'warn', en: 'Three traps. (1) You **cannot change** the chunking strategy after the data source is created. To try another one you create a new data source and ingest again, so test on a small sample first. (2) With hierarchical chunking you can get **fewer results than you asked for**, because several child hits can belong to the same parent. AWS also does not recommend it with S3 Vectors. (3) With no chunking there is no page-number metadata, and a file that is longer than the embedding model can read is a problem that you must solve before upload.', he: 'שלוש מלכודות. (1) **אי אפשר לשנות** את אסטרטגיית ה-chunking אחרי שה-data source נוצר. כדי לנסות אחרת יוצרים data source חדש ועושים ingestion מחדש, אז בודקים קודם על מדגם קטן. (2) עם hierarchical chunking אפשר לקבל **פחות תוצאות ממה שביקשת**, כי כמה פגיעות ב-child יכולות להיות שייכות לאותו parent. AWS גם לא ממליצה עליו עם S3 Vectors. (3) בלי chunking אין metadata של מספר עמוד, וקובץ שארוך ממה שמודל ה-embedding יכול לקרוא הוא בעיה שצריך לפתור לפני ההעלאה.' },
        { t: 'fill', prompt: { en: 'Configure fixed-size chunking: chunks of at most 400 tokens with 20 percent overlap.', he: 'הגדר fixed-size chunking: chunks של עד 400 טוקנים עם 20 אחוז overlap.' }, lang: 'json',
          code: '{\n  "chunkingConfiguration": {\n    "chunkingStrategy": "{{1}}",\n    "{{2}}": {\n      "maxTokens": {{3}},\n      "{{4}}": 20\n    }\n  }\n}',
          blanks: [
            { accept: ['FIXED_SIZE'], hint: { en: 'upper case with an underscore', he: 'אותיות גדולות עם קו תחתון' } },
            { accept: ['fixedSizeChunkingConfiguration'], hint: { en: 'camelCase: fixedSize + ChunkingConfiguration', he: 'camelCase: fixedSize + ChunkingConfiguration' } },
            { accept: ['400'], hint: { en: 'the chunk size from the task', he: 'גודל ה-chunk מהמשימה' } },
            { accept: ['overlapPercentage'], hint: { en: 'overlap is given in percent here', he: 'כאן ה-overlap ניתן באחוזים' } }
          ],
          explain: { en: 'Fixed-size uses a percentage for overlap (`overlapPercentage`). Hierarchical uses a number of tokens (`overlapTokens`). Mixing them up is a common mistake.', he: 'Fixed-size משתמש באחוזים ל-overlap (`overlapPercentage`). Hierarchical משתמש במספר טוקנים (`overlapTokens`). לבלבל ביניהם זו טעות נפוצה.' } },
        { t: 'quiz', q: { en: 'You index a 300-page maintenance manual. Users ask precise questions ("torque for bolt M8"), but a good answer also needs the safety notes of the same section. Which strategy fits best?', he: 'אתה מאנדקס מדריך תחזוקה של 300 עמודים. משתמשים שואלים שאלות מדויקות ("torque for bolt M8"), אבל תשובה טובה צריכה גם את הערות הבטיחות של אותו סעיף. איזו אסטרטגיה מתאימה ביותר?' },
          options: { en: ['No chunking', 'Fixed-size with 20-token chunks', 'Hierarchical: search small child chunks, return the parent', 'Default chunking with temperature 0'], he: ['No chunking', 'Fixed-size עם chunks של 20 טוקנים', 'Hierarchical: מחפשים ב-child chunks קטנים, מחזירים את ה-parent', 'Default chunking עם temperature 0'] },
          answer: 2, explain: { en: 'Small children give precise matches, and the parent brings the surrounding section to the model. No chunking would make one vector for 300 pages. Tiny fixed chunks find the bolt but lose the safety notes.', he: 'Children קטנים נותנים התאמות מדויקות, וה-parent מביא למודל את הסעיף שמסביב. No chunking היה יוצר וקטור אחד ל-300 עמודים. Chunks קבועים זעירים מוצאים את הבורג אבל מאבדים את הערות הבטיחות.' } },
        { t: 'h', en: 'Parsing: garbage in, garbage out', he: 'Parsing: זבל נכנס, זבל יוצא' },
        { t: 'p', en: 'Before chunking, files must become text. A customer-managed knowledge base has three parsers:', he: 'לפני ה-chunking, קבצים צריכים להפוך לטקסט. ל-customer-managed knowledge base יש שלושה parsers:' },
        { t: 'table', head: { en: ['Parser', 'What it reads', 'What you pay'], he: ['Parser', 'מה הוא קורא', 'על מה משלמים'] }, rows: {
          en: [
            ['**Amazon Bedrock default parser**', 'Text only, from .txt, .md, .html, .doc/.docx, .xls/.xlsx and .pdf.', 'No charge.'],
            ['**Amazon Bedrock Data Automation**', 'Multimodal: also images, tables and layout inside documents.', 'Per page or image.'],
            ['**Foundation models as parser**', 'A vision model (Claude, Nova, Llama 4) reads each page. You can give it a custom prompt.', 'Per token.']
          ],
          he: [
            ['**Amazon Bedrock default parser**', 'טקסט בלבד, מ-.txt, .md, .html, .doc/.docx, .xls/.xlsx ו-.pdf.', 'ללא חיוב.'],
            ['**Amazon Bedrock Data Automation**', 'Multimodal: גם תמונות, טבלאות ו-layout בתוך מסמכים.', 'לפי עמוד או תמונה.'],
            ['**Foundation models כ-parser**', 'מודל vision (Claude, Nova, Llama 4) קורא כל עמוד. אפשר לתת לו פרומפט מותאם.', 'לפי טוקן.']
          ] } },
        { t: 'p', en: 'If you choose Data Automation or a foundation model, it parses **all** PDFs, also the simple text-only ones, so the bill grows with every page. File limits to remember: at most 50 MB per file, and images (.jpeg, .png) at most 3.75 MB. A [[Managed knowledge base]] has its own built-in parser, shown in the console as **Managed parser**.', he: 'אם בוחרים ב-Data Automation או ב-foundation model, הוא מפרסר את **כל** ה-PDFs, גם את הפשוטים שיש בהם רק טקסט, אז החשבון גדל עם כל עמוד. מגבלות קבצים לזכור: עד 50 MB לקובץ, ותמונות (.jpeg, .png) עד 3.75 MB. ל-[[Managed knowledge base]] יש parser מובנה משלו, שמוצג בקונסול כ-**Managed parser**.' },
        { t: 'h', en: 'Embedding models and dimensions', he: 'מודלי embedding ו-dimensions' },
        { t: 'table', head: { en: ['Model', 'Vector types', 'Dimensions'], he: ['מודל', 'סוגי וקטור', 'Dimensions'] }, rows: {
          en: [
            ['Titan Embeddings G1 - Text (`amazon.titan-embed-text-v1`)', 'float', '1536'],
            ['Titan Text Embeddings V2 (`amazon.titan-embed-text-v2:0`)', 'float, binary', '256, 512, 1024'],
            ['Cohere Embed English v3 / Multilingual v3 (`cohere.embed-multilingual-v3`)', 'float, binary', '1024'],
            ['Titan Multimodal Embeddings G1', 'float', '1024'],
            ['Cohere Embed v3 (Multimodal)', 'float, binary', '1024'],
            ['Amazon Nova Multimodal Embeddings', 'float', '1024']
          ],
          he: [
            ['Titan Embeddings G1 - Text (`amazon.titan-embed-text-v1`)', 'float', '1536'],
            ['Titan Text Embeddings V2 (`amazon.titan-embed-text-v2:0`)', 'float, binary', '256, 512, 1024'],
            ['Cohere Embed English v3 / Multilingual v3 (`cohere.embed-multilingual-v3`)', 'float, binary', '1024'],
            ['Titan Multimodal Embeddings G1', 'float', '1024'],
            ['Cohere Embed v3 (Multimodal)', 'float, binary', '1024'],
            ['Amazon Nova Multimodal Embeddings', 'float', '1024']
          ] } },
        { t: 'list', en: [
          '**[[Dimensions]]** is the length of the vector. More dimensions can hold finer differences of meaning, and they cost more storage and a bit more search time. Titan V2 lets you choose 256, 512 or 1024.',
          '**[[Binary embeddings]]** store bits instead of decimal numbers: cheaper, less precise. Not every vector store supports them.',
          'The embedding model and its dimensions are fixed when the knowledge base is created. The [[Vector index]] must have the same number of dimensions. Changing the model means a new knowledge base and a full re-ingestion.'
        ], he: [
          '**[[Dimensions]]** הוא האורך של הוקטור. יותר dimensions יכולים להחזיק הבדלי משמעות עדינים יותר, והם עולים יותר אחסון וקצת יותר זמן חיפוש. Titan V2 מאפשר לבחור 256, 512 או 1024.',
          '**[[Binary embeddings]]** שומרים ביטים במקום מספרים עשרוניים: זול יותר, פחות מדויק. לא כל vector store תומך בהם.',
          'מודל ה-embedding וה-dimensions שלו נקבעים כשה-knowledge base נוצר. ל-[[Vector index]] חייב להיות אותו מספר dimensions. החלפת המודל אומרת knowledge base חדש ו-ingestion מלא מחדש.'
        ] },
        { t: 'h', en: 'Working in Hebrew', he: 'עבודה בעברית' },
        { t: 'list', en: [
          '**Pick an embedding model that was built for many languages.** A model trained mostly on English gives weak vectors for Hebrew. The name tells you a lot: Cohere Embed **Multilingual** v3 versus Cohere Embed **English** v3. Always read the model card for the list of languages.',
          '**Chunk sizes are in tokens, and Hebrew uses more tokens per word** (module 1). A 300-token chunk holds much less Hebrew text than English text. Set a larger `maxTokens` for Hebrew documents and check real chunks with your own eyes.',
          '**Keyword search is weaker in Hebrew.** Hebrew glues short words to the start of a word ("in the house" is one word), and words appear with and without vowels marks and in several spellings. Exact-word matching misses more, so test [[Hybrid search]] and semantic search on real Hebrew questions before you choose.',
          '**Mixed language is normal.** Users ask in Hebrew about documents in English, with product names in English inside the Hebrew sentence. Put such questions in your test set.',
          '**Parsing right-to-left PDFs** can reverse or reorder the text. Open the parsed text of a few Hebrew files before you trust it.'
        ], he: [
          '**בחר מודל embedding שנבנה להרבה שפות.** מודל שאומן בעיקר על אנגלית נותן וקטורים חלשים לעברית. השם מספר הרבה: Cohere Embed **Multilingual** v3 לעומת Cohere Embed **English** v3. תמיד קוראים ב-model card את רשימת השפות.',
          '**גודל chunk נמדד בטוקנים, ועברית משתמשת ביותר טוקנים למילה** (מודול 1). Chunk של 300 טוקנים מחזיק הרבה פחות טקסט בעברית מאשר באנגלית. קובעים `maxTokens` גדול יותר למסמכים בעברית ובודקים chunks אמיתיים בעיניים.',
          '**Keyword search חלש יותר בעברית.** עברית מדביקה מילים קצרות לתחילת המילה ("בבית" היא מילה אחת), ומילים מופיעות עם ובלי ניקוד ובכמה צורות כתיב. התאמה של מילה מדויקת מפספסת יותר, אז בודקים [[Hybrid search]] ו-semantic search על שאלות אמיתיות בעברית לפני שבוחרים.',
          '**שפה מעורבת היא דבר רגיל.** משתמשים שואלים בעברית על מסמכים באנגלית, עם שמות מוצרים באנגלית בתוך המשפט העברי. שים שאלות כאלה בסט הבדיקות שלך.',
          '**Parsing של PDF מימין לשמאל** יכול להפוך או לשנות את סדר הטקסט. פותחים את הטקסט המפורסר של כמה קבצים בעברית לפני שסומכים עליו.'
        ] },
        { t: 'quiz', q: { en: 'Your knowledge base holds Hebrew and English documents. Retrieval works well in English and badly in Hebrew. It uses Cohere Embed English v3. What do you do?', he: 'ה-knowledge base שלך מחזיק מסמכים בעברית ובאנגלית. האחזור עובד טוב באנגלית וגרוע בעברית. הוא משתמש ב-Cohere Embed English v3. מה עושים?' },
          options: { en: ['Raise numberOfResults to 100', 'Translate the system prompt to Hebrew', 'Lower the temperature', 'Build a new knowledge base with a multilingual embedding model and ingest again'], he: ['להעלות את numberOfResults ל-100', 'לתרגם את ה-system prompt לעברית', 'להוריד את ה-temperature', 'לבנות knowledge base חדש עם מודל embedding רב-לשוני ולעשות ingestion מחדש'] },
          answer: 3, explain: { en: 'The vectors themselves are poor for Hebrew, so no query setting can fix it. The embedding model cannot be changed in place: new knowledge base, full re-ingestion. The prompt and the temperature belong to the generation stage, which is not the stage that fails here.', he: 'הוקטורים עצמם חלשים לעברית, אז שום הגדרת שאילתה לא תתקן את זה. אי אפשר להחליף את מודל ה-embedding במקום: knowledge base חדש, ingestion מלא מחדש. הפרומפט וה-temperature שייכים לשלב ה-generation, שהוא לא השלב שנכשל כאן.' } },
        { t: 'match', prompt: { en: 'Match the content to a sensible chunking choice.', he: 'התאם את התוכן לבחירת chunking הגיונית.' }, pairs: [
          { a: { en: '2,000 short FAQ files, one answer per file', he: '2,000 קובצי FAQ קצרים, תשובה אחת לכל קובץ' }, b: { en: 'No chunking', he: 'No chunking' } },
          { a: { en: 'A long contract with nested sections', he: 'חוזה ארוך עם סעיפים מקוננים' }, b: { en: 'Hierarchical', he: 'Hierarchical' } },
          { a: { en: 'Meeting transcripts that jump between topics', he: 'תמלילי ישיבות שקופצים בין נושאים' }, b: { en: 'Semantic', he: 'Semantic' } },
          { a: { en: 'Blog articles, first version, low budget', he: 'מאמרי בלוג, גרסה ראשונה, תקציב נמוך' }, b: { en: 'Default or fixed-size', he: 'Default או fixed-size' } }
        ] },
        { t: 'reveal', q: { en: 'A teammate asks: "What chunk size should we use?" Give a pro answer.', he: 'חבר צוות שואל: "באיזה גודל chunk להשתמש?" תן תשובה של מקצוען.' },
          a: { en: 'There is no universal number. It depends on the documents and on the questions. I start with the default (about 300 tokens) or a fixed size with some overlap, because it is cheap. Then I build a test set of real questions with the passages that should be found, and I look at the retrieved chunks for the failures. If answers are cut in half, I go bigger or hierarchical. If chunks are full of unrelated text, I go smaller or semantic. For Hebrew I raise the token size because the same text needs more tokens. Since the strategy cannot be changed on an existing data source, I test on a small sample in a separate data source before I ingest everything.', he: 'אין מספר אוניברסלי. זה תלוי במסמכים ובשאלות. אני מתחיל עם ברירת המחדל (בערך 300 טוקנים) או גודל קבוע עם קצת overlap, כי זה זול. אחר כך אני בונה סט בדיקות של שאלות אמיתיות עם הקטעים שצריכים להימצא, ומסתכל על ה-chunks שאוחזרו בכישלונות. אם תשובות נחתכות באמצע, אני מגדיל או עובר ל-hierarchical. אם ה-chunks מלאים בטקסט לא קשור, אני מקטין או עובר ל-semantic. בעברית אני מעלה את גודל הטוקנים כי אותו טקסט צריך יותר טוקנים. מכיוון שאי אפשר לשנות את האסטרטגיה ב-data source קיים, אני בודק על מדגם קטן ב-data source נפרד לפני שאני עושה ingestion להכול.' } }
      ]
    },
    {
      id: 'm05l3', minutes: 12,
      title: { en: 'Vector stores on AWS', he: 'Vector stores ב-AWS' },
      blocks: [
        { t: 'p', en: 'A [[Vector store]] has one main job: given a query vector, find the stored vectors that are closest to it, fast, among millions. Comparing the query with every stored vector one by one is too slow. So the store builds a [[Vector index]]: a structure that finds the nearest vectors **approximately** by looking at only a small part of the data. You give up a tiny bit of accuracy and win a lot of speed.', he: 'ל-[[Vector store]] יש תפקיד עיקרי אחד: בהינתן וקטור שאילתה, למצוא את הוקטורים השמורים שהכי קרובים אליו, מהר, מתוך מיליונים. להשוות את השאילתה לכל וקטור שמור אחד אחד זה איטי מדי. לכן ה-store בונה [[Vector index]]: מבנה שמוצא את הוקטורים הקרובים **בקירוב**, כשהוא מסתכל רק על חלק קטן מהמידע. מוותרים על מעט דיוק ומרוויחים הרבה מהירות.' },
        { t: 'note', kind: 'jargon', en: 'An index is created with a fixed number of [[Dimensions]] and a fixed **distance metric** (the formula for "how close are two vectors"). Both must fit your embedding model. This is why you cannot switch the embedding model on an existing index.', he: 'Index נוצר עם מספר קבוע של [[Dimensions]] ועם **distance metric** קבוע (הנוסחה ל-"כמה קרובים שני וקטורים"). שניהם חייבים להתאים למודל ה-embedding שלך. לכן אי אפשר להחליף מודל embedding על index קיים.' },
        { t: 'h', en: 'The stores that Bedrock Knowledge Bases supports', he: 'ה-stores ש-Bedrock Knowledge Bases תומך בהם' },
        { t: 'p', en: 'For a [[Customer-managed knowledge base]], the store is set in `storageConfiguration.type`. The console can create four of them for you (**Quick create a new vector store**): Amazon OpenSearch Serverless, Amazon Aurora PostgreSQL Serverless, Amazon Neptune Analytics and Amazon S3 Vectors. For the others you choose **Choose a vector store you have created**.', he: 'ב-[[Customer-managed knowledge base]], ה-store נקבע ב-`storageConfiguration.type`. הקונסול יכול ליצור ארבעה מהם בשבילך (**Quick create a new vector store**): Amazon OpenSearch Serverless, Amazon Aurora PostgreSQL Serverless, Amazon Neptune Analytics ו-Amazon S3 Vectors. בשביל האחרים בוחרים **Choose a vector store you have created**.' },
        { t: 'table', head: { en: ['Store (API type)', 'What it is', 'Search features', 'Cost and scale'], he: ['Store (סוג ב-API)', 'מה זה', 'יכולות חיפוש', 'עלות ו-scale'] }, rows: {
          en: [
            ['**Amazon OpenSearch Serverless** (`OPENSEARCH_SERVERLESS`)', 'A search engine without servers to manage.', 'Semantic and hybrid search. The fullest filter support (the only one with `startsWith`).', 'You pay for search capacity. Check the pricing page: it is usually not the cheapest start for a small project.'],
            ['**Amazon S3 Vectors** (`S3_VECTORS`)', 'Vectors stored in S3, in a vector bucket with vector indexes.', 'Semantic search only (no hybrid). Inside a knowledge base: 1 KB of custom metadata and 35 metadata keys per vector, no `startsWith` or `stringContains` filters. Hierarchical chunking is not recommended.', 'Low cost: you pay for storage and per query. Up to 2 billion vectors per index.'],
            ['**Amazon Aurora PostgreSQL** (`RDS`)', 'A relational database that also stores vectors.', 'Semantic and hybrid search.', 'You pay for the database. Natural if your team already runs PostgreSQL.'],
            ['**Amazon Neptune Analytics** (`NEPTUNE_ANALYTICS`)', 'A graph database.', '[[GraphRAG]]: answers that need links between entities and documents.', 'You pay for the graph. Use it only when relations matter.'],
            ['**OpenSearch managed cluster** (`OPENSEARCH_MANAGED_CLUSTER`)', 'Your own OpenSearch Service cluster.', 'Depends on your cluster setup.', 'You pay for and operate the cluster.'],
            ['**Pinecone, Redis Enterprise Cloud, MongoDB Atlas** (`PINECONE`, `REDIS_ENTERPRISE_CLOUD`, `MONGO_DB_ATLAS`)', 'Stores from other companies that you already have.', 'MongoDB Atlas also supports hybrid search.', 'Billed by that vendor.']
          ],
          he: [
            ['**Amazon OpenSearch Serverless** (`OPENSEARCH_SERVERLESS`)', 'מנוע חיפוש בלי שרתים לנהל.', 'Semantic ו-hybrid search. תמיכת הסינון המלאה ביותר (היחיד עם `startsWith`).', 'משלמים על קיבולת חיפוש. בדוק בדף התמחור: בדרך כלל זו לא ההתחלה הזולה ביותר לפרויקט קטן.'],
            ['**Amazon S3 Vectors** (`S3_VECTORS`)', 'וקטורים שנשמרים ב-S3, בתוך vector bucket עם vector indexes.', 'Semantic search בלבד (בלי hybrid). בתוך knowledge base: 1 KB של custom metadata ו-35 מפתחות metadata לכל וקטור, בלי סינוני `startsWith` או `stringContains`. Hierarchical chunking לא מומלץ.', 'עלות נמוכה: משלמים על אחסון ולפי שאילתה. עד 2 מיליארד וקטורים ל-index.'],
            ['**Amazon Aurora PostgreSQL** (`RDS`)', 'מסד נתונים רלציוני ששומר גם וקטורים.', 'Semantic ו-hybrid search.', 'משלמים על מסד הנתונים. טבעי אם הצוות שלך כבר מריץ PostgreSQL.'],
            ['**Amazon Neptune Analytics** (`NEPTUNE_ANALYTICS`)', 'מסד נתונים גרפי.', '[[GraphRAG]]: תשובות שדורשות קשרים בין ישויות ומסמכים.', 'משלמים על הגרף. משתמשים רק כשקשרים חשובים.'],
            ['**OpenSearch managed cluster** (`OPENSEARCH_MANAGED_CLUSTER`)', 'Cluster של OpenSearch Service משלך.', 'תלוי בהגדרות ה-cluster שלך.', 'אתה משלם על ה-cluster ומתפעל אותו.'],
            ['**Pinecone, Redis Enterprise Cloud, MongoDB Atlas** (`PINECONE`, `REDIS_ENTERPRISE_CLOUD`, `MONGO_DB_ATLAS`)', 'Stores של חברות אחרות שכבר יש לך.', 'MongoDB Atlas תומך גם ב-hybrid search.', 'מחויב על ידי אותו ספק.']
          ] } },
        { t: 'note', kind: 'info', en: 'Price example for [[S3 Vectors]] in us-east-1, November 2026: storage $0.06 per GB per month, writes $0.20 per GB, queries $2.50 per million plus a charge for the data processed. Prices change, so use them only to feel the model: you pay for what you store and what you query, and nothing runs while nobody asks. About latency: AWS presents S3 Vectors as the low-cost choice. If you need the fastest answers at a high query rate, test a search engine such as OpenSearch with your own data. This course does not give latency numbers, because they depend on your data and setup.', he: 'דוגמת מחיר ל-[[S3 Vectors]] ב-us-east-1, נובמבר 2026: אחסון $0.06 ל-GB לחודש, כתיבות $0.20 ל-GB, שאילתות $2.50 למיליון ועוד חיוב על המידע שעובד. מחירים משתנים, אז השתמש בהם רק כדי להרגיש את המודל: משלמים על מה ששומרים ועל מה ששואלים, ושום דבר לא רץ כשאף אחד לא שואל. לגבי latency: AWS מציגה את S3 Vectors כבחירה בעלות נמוכה. אם אתה צריך את התשובות המהירות ביותר בקצב שאילתות גבוה, בדוק מנוע חיפוש כמו OpenSearch עם המידע שלך. הקורס הזה לא נותן מספרי latency, כי הם תלויים במידע ובהגדרות שלך.' },
        { t: 'quiz', q: { en: 'A startup builds its first RAG bot over 5,000 internal documents. A few hundred questions per day. No need for keyword search. The main goal is a low monthly bill. Which store do you suggest first?', he: 'סטארטאפ בונה בוט RAG ראשון על 5,000 מסמכים פנימיים. כמה מאות שאלות ביום. אין צורך ב-keyword search. המטרה העיקרית היא חשבון חודשי נמוך. איזה store תציע קודם?' },
          options: { en: ['Amazon Neptune Analytics', 'Amazon S3 Vectors', 'A self-managed OpenSearch cluster', 'Redis Enterprise Cloud'], he: ['Amazon Neptune Analytics', 'Amazon S3 Vectors', 'OpenSearch cluster בניהול עצמי', 'Redis Enterprise Cloud'] },
          answer: 1, explain: { en: 'Low volume and semantic search only: pay per storage and per query is the cheapest model, and quick create sets it up. A graph store is for relation questions. A cluster that you operate costs money and time even when it is idle.', he: 'נפח נמוך ו-semantic search בלבד: תשלום לפי אחסון ולפי שאילתה הוא המודל הזול ביותר, ו-quick create מקים אותו. Store גרפי מיועד לשאלות על קשרים. Cluster שאתה מתפעל עולה כסף וזמן גם כשהוא לא בשימוש.' } },
        { t: 'h', en: 'Hybrid search', he: 'Hybrid search' },
        { t: 'p', en: '[[Semantic search]] is great at meaning: "get my money back" finds "refund policy". It is weak at exact strings: a part number, an error code, a family name. [[Keyword search]] is the opposite. [[Hybrid search]] runs both and merges the results. In Bedrock, hybrid search is available only on OpenSearch Serverless, Amazon RDS (Aurora) and MongoDB stores that have a filterable text field. You choose per query with `overrideSearchType`: `HYBRID` or `SEMANTIC`. A managed knowledge base always uses hybrid search.', he: '[[Semantic search]] מצוין במשמעות: "get my money back" מוצא את "refund policy". הוא חלש במחרוזות מדויקות: מספר חלק, קוד שגיאה, שם משפחה. [[Keyword search]] הוא ההפך. [[Hybrid search]] מריץ את שניהם וממזג את התוצאות. ב-Bedrock, hybrid search זמין רק ב-OpenSearch Serverless, Amazon RDS (Aurora) ו-MongoDB stores שיש להם שדה טקסט שניתן לסינון. בוחרים לכל שאילתה עם `overrideSearchType`: `HYBRID` או `SEMANTIC`. Managed knowledge base תמיד משתמש ב-hybrid search.' },
        { t: 'h', en: 'Metadata filtering', he: 'Metadata filtering' },
        { t: 'p', en: 'Similar text is not always the right text. The 2022 price list and the 2026 price list look almost the same to an embedding model. [[Metadata]] solves this. For an S3 data source you put a small JSON file next to each document, named `<fileName.extension>.metadata.json` (at most 10 KB):', he: 'טקסט דומה הוא לא תמיד הטקסט הנכון. מחירון 2022 ומחירון 2026 נראים כמעט זהים למודל embedding. [[Metadata]] פותר את זה. ב-data source מסוג S3 שמים קובץ JSON קטן ליד כל מסמך, בשם `<fileName.extension>.metadata.json` (עד 10 KB):' },
        { t: 'code', lang: 'json', code: '{\n  "metadataAttributes": {\n    "company": {"value": {"type": "STRING", "stringValue": "BioPharm"}, "includeForEmbedding": true},\n    "year":    {"value": {"type": "NUMBER", "numberValue": 2022}, "includeForEmbedding": false}\n  }\n}', caption: { en: 'File `report.pdf.metadata.json`, next to `report.pdf`. `includeForEmbedding` decides if the value is also part of the embedded text or only stored for filtering.', he: 'הקובץ `report.pdf.metadata.json`, ליד `report.pdf`. `includeForEmbedding` קובע אם הערך הוא גם חלק מהטקסט שעובר embedding או רק נשמר לסינון.' } },
        { t: 'p', en: 'At query time you add a [[Metadata filter]]. The operators are `equals`, `notEquals`, `greaterThan`, `greaterThanOrEquals`, `lessThan`, `lessThanOrEquals`, `in`, `notIn`, `startsWith`, `stringContains` and `listContains`. You combine them with `andAll` and `orAll`. There is also **implicit filtering**: you describe the metadata fields, and a model builds the filter from the question by itself (Claude models only).', he: 'בזמן השאילתה מוסיפים [[Metadata filter]]. האופרטורים הם `equals`, `notEquals`, `greaterThan`, `greaterThanOrEquals`, `lessThan`, `lessThanOrEquals`, `in`, `notIn`, `startsWith`, `stringContains` ו-`listContains`. משלבים אותם עם `andAll` ו-`orAll`. יש גם **implicit filtering**: מתארים את שדות ה-metadata, ומודל בונה את ה-filter מהשאלה בעצמו (מודלי Claude בלבד).' },
        { t: 'fill', prompt: { en: 'Write a filter: only documents of department "legal" from a year later than 2023.', he: 'כתוב filter: רק מסמכים של department "legal" משנה מאוחרת מ-2023.' }, lang: 'json',
          code: '{\n  "filter": {\n    "{{1}}": [\n      {"{{2}}": {"key": "department", "value": "legal"}},\n      {"{{3}}": {"key": "year", "value": 2023}}\n    ]\n  }\n}',
          blanks: [
            { accept: ['andAll'], hint: { en: 'both conditions must be true', he: 'שני התנאים חייבים להתקיים' } },
            { accept: ['equals'], hint: { en: 'exact match', he: 'התאמה מדויקת' } },
            { accept: ['greaterThan'], hint: { en: 'later than, not including 2023', he: 'מאוחר מ-, לא כולל 2023' } }
          ],
          explain: { en: 'A filter narrows the search **before** the similarity ranking, so old or forbidden documents cannot win, however similar they are.', he: 'Filter מצמצם את החיפוש **לפני** דירוג הדמיון, כך שמסמכים ישנים או אסורים לא יכולים לנצח, לא משנה כמה הם דומים.' } },
        { t: 'note', kind: 'warn', en: 'A metadata filter that your code sets from the identity of the logged-in user is a real access control. A sentence in the prompt ("do not show HR documents to other departments") is not. Remember also: anyone who has the IAM permission `bedrock:Retrieve` on the knowledge base can read **all** the synced data.', he: 'Metadata filter שהקוד שלך קובע לפי הזהות של המשתמש המחובר הוא בקרת גישה אמיתית. משפט בפרומפט ("do not show HR documents to other departments") הוא לא. זכור גם: כל מי שיש לו את הרשאת ה-IAM‏ `bedrock:Retrieve` על ה-knowledge base יכול לקרוא את **כל** המידע שסונכרן.' },
        { t: 'quiz', q: { en: 'Technicians search for part numbers like "KX-2291-B". Semantic search returns chunks about other parts. The store is S3 Vectors. What is the right observation?', he: 'טכנאים מחפשים מספרי חלקים כמו "KX-2291-B". Semantic search מחזיר chunks על חלקים אחרים. ה-store הוא S3 Vectors. מה האבחנה הנכונה?' },
          options: { en: ['Raise the embedding dimensions to fix exact matches', 'Part numbers need lower temperature', 'Switch to no chunking', 'Exact strings need keyword or hybrid search, which this store does not offer: move to a store with hybrid search, or put the part number in metadata and filter on it'], he: ['להעלות את ה-dimensions של ה-embedding כדי לתקן התאמות מדויקות', 'מספרי חלקים צריכים temperature נמוכה יותר', 'לעבור ל-no chunking', 'מחרוזות מדויקות צריכות keyword או hybrid search, שה-store הזה לא מציע: לעבור ל-store עם hybrid search, או לשים את מספר החלק ב-metadata ולסנן לפיו'] },
          answer: 3, explain: { en: 'Embeddings capture meaning, not exact characters. Hybrid search exists on OpenSearch Serverless, Aurora and MongoDB. A metadata `equals` filter on the part number is the cheap alternative when the app can extract the number from the question.', he: 'Embeddings תופסים משמעות, לא תווים מדויקים. Hybrid search קיים ב-OpenSearch Serverless, Aurora ו-MongoDB. Filter מסוג `equals` על מספר החלק ב-metadata הוא החלופה הזולה, כשהאפליקציה יכולה לחלץ את המספר מהשאלה.' } },
        { t: 'reveal', q: { en: 'Interview: "How do you choose a vector store for a Bedrock knowledge base?"', he: 'ראיון: "איך בוחרים vector store ל-Bedrock knowledge base?"' },
          a: { en: 'I ask four questions. (1) Do I need to own the store at all? If not, a managed knowledge base removes the choice. (2) Which search features do I need: hybrid search, rich filters such as startsWith, graph relations? That removes some options: S3 Vectors has no hybrid search, GraphRAG needs Neptune Analytics. (3) What is the volume: how many vectors and how many queries per second? Low query volume favours pay-per-use storage like S3 Vectors; heavy low-latency search favours a search engine. (4) What does the team already run and know? An existing Aurora or OpenSearch setup can be the cheapest answer. Then I test with real data, because numbers on paper are not my workload.', he: 'אני שואל ארבע שאלות. (1) האם אני בכלל צריך להחזיק את ה-store? אם לא, managed knowledge base מבטל את הבחירה. (2) אילו יכולות חיפוש אני צריך: hybrid search, סינונים עשירים כמו startsWith, קשרי גרף? זה מוריד חלק מהאפשרויות: ל-S3 Vectors אין hybrid search, GraphRAG צריך Neptune Analytics. (3) מה הנפח: כמה וקטורים וכמה שאילתות בשנייה? נפח שאילתות נמוך מתאים לאחסון בתשלום לפי שימוש כמו S3 Vectors; חיפוש כבד עם latency נמוך מתאים למנוע חיפוש. (4) מה הצוות כבר מריץ ומכיר? Aurora או OpenSearch קיימים יכולים להיות התשובה הזולה ביותר. אחר כך אני בודק עם מידע אמיתי, כי מספרים על הנייר הם לא ה-workload שלי.' } }
      ]
    },
    {
      id: 'm05l4', minutes: 14,
      title: { en: 'Building a knowledge base', he: 'בניית knowledge base' },
      blocks: [
        { t: 'p', en: 'You could build both RAG pipelines yourself. Amazon Bedrock [[Knowledge base|Knowledge Bases]] does it for you: it ingests your data, searches it at question time and returns chunks, or a ready answer with citations. In 2026 there are two main types, and the choice between them is the first decision you make.', he: 'אפשר לבנות את שני ה-pipelines של RAG בעצמך. Amazon Bedrock [[Knowledge base|Knowledge Bases]] עושה את זה בשבילך: הוא קולט את המידע שלך, מחפש בו בזמן השאלה ומחזיר chunks, או תשובה מוכנה עם citations. ב-2026 יש שני סוגים עיקריים, והבחירה ביניהם היא ההחלטה הראשונה שלך.' },
        { t: 'table', head: { en: ['', 'Managed Knowledge Base', 'Customer-managed (vector store)'], he: ['', 'Managed Knowledge Base', 'Customer-managed (vector store)'] }, rows: {
          en: [
            ['API `type`', '`MANAGED`', '`VECTOR`'],
            ['You manage', 'Nothing. Bedrock runs ingestion, storage, indexing and retrieval.', 'The vector store, the parser, the chunking and the embedding model.'],
            ['Embedding', 'Built-in model at no extra cost, or a custom Bedrock embedding model (float32, 1024 dimensions).', 'You choose from the supported models.'],
            ['Search', 'Always hybrid.', 'You choose: semantic, or hybrid where the store supports it.'],
            ['Reranker', 'Built-in, at no extra cost (when the built-in embedding is used).', 'Optional Bedrock reranker model, paid.'],
            ['Chunking', 'Default, fixed-size or no chunking.', 'Also hierarchical, semantic and custom.'],
            ['New connectors', 'S3, SharePoint, Confluence, Google Drive, OneDrive, Web Crawler, Custom and more.', 'S3 and Custom only (for new ones).'],
            ['Query APIs', '`Retrieve` and `AgenticRetrieveStream`. **Not** `RetrieveAndGenerate`.', '`Retrieve` and `RetrieveAndGenerate`.'],
            ['Document-level access control', 'Yes: [[ACL]] filtering with `userContext.userId` (not for Web Crawler).', 'Your own metadata filters.']
          ],
          he: [
            ['`type` ב-API', '`MANAGED`', '`VECTOR`'],
            ['אתה מנהל', 'כלום. Bedrock מריץ ingestion, אחסון, אינדוקס ואחזור.', 'את ה-vector store, ה-parser, ה-chunking ומודל ה-embedding.'],
            ['Embedding', 'מודל מובנה ללא עלות נוספת, או מודל embedding מותאם של Bedrock (float32, 1024 dimensions).', 'בוחרים מתוך המודלים הנתמכים.'],
            ['חיפוש', 'תמיד hybrid.', 'אתה בוחר: semantic, או hybrid איפה שה-store תומך.'],
            ['Reranker', 'מובנה, ללא עלות נוספת (כשמשתמשים ב-embedding המובנה).', 'מודל reranker של Bedrock, אופציונלי ובתשלום.'],
            ['Chunking', 'Default, fixed-size או no chunking.', 'גם hierarchical, semantic ו-custom.'],
            ['Connectors חדשים', 'S3, SharePoint, Confluence, Google Drive, OneDrive, Web Crawler, Custom ועוד.', 'S3 ו-Custom בלבד (לחדשים).'],
            ['APIs לשאילתה', '`Retrieve` ו-`AgenticRetrieveStream`. **לא** `RetrieveAndGenerate`.', '`Retrieve` ו-`RetrieveAndGenerate`.'],
            ['בקרת גישה ברמת המסמך', 'כן: סינון [[ACL]] עם `userContext.userId` (לא ב-Web Crawler).', 'Metadata filters משלך.']
          ] } },
        { t: 'note', kind: 'warn', en: 'An important change for connectors: since **September 30, 2026** you can no longer create **new** Confluence, Microsoft SharePoint, Salesforce or Web Crawler connectors on customer-managed knowledge bases. Existing ones keep working. So a new customer-managed knowledge base reads from S3 or from a Custom source. If your documents live in SharePoint or Confluence, the managed type is the way to go. The docs give slightly different lists of managed connectors, so check the current list for the one you need.', he: 'שינוי חשוב ב-connectors: מאז **30 בספטמבר 2026** אי אפשר יותר ליצור connectors **חדשים** של Confluence, Microsoft SharePoint, Salesforce או Web Crawler ב-customer-managed knowledge bases. הקיימים ממשיכים לעבוד. כלומר customer-managed knowledge base חדש קורא מ-S3 או ממקור Custom. אם המסמכים שלך חיים ב-SharePoint או ב-Confluence, הסוג ה-managed הוא הדרך. התיעוד נותן רשימות מעט שונות של managed connectors, אז בדוק ברשימה העדכנית את זה שאתה צריך.' },
        { t: 'p', en: 'The API has two more build paths that you should know by name: `SQL` for a knowledge base connected to a structured data store (questions over tables, lesson 5), and `KENDRA` to reuse an Amazon Kendra GenAI index. [[GraphRAG]] is a `VECTOR` knowledge base whose storage is Neptune Analytics.', he: 'ל-API יש עוד שני מסלולי בנייה שכדאי להכיר בשם: `SQL` ל-knowledge base שמחובר ל-structured data store (שאלות על טבלאות, שיעור 5), ו-`KENDRA` לשימוש חוזר ב-Amazon Kendra GenAI index. [[GraphRAG]] הוא knowledge base מסוג `VECTOR` שהאחסון שלו הוא Neptune Analytics.' },
        { t: 'quiz', q: { en: 'A company wants a bot over its SharePoint site. Each employee must only get answers from documents they are allowed to open. No team to operate a database. Which type do you choose, and why?', he: 'חברה רוצה בוט על אתר ה-SharePoint שלה. כל עובד צריך לקבל תשובות רק ממסמכים שמותר לו לפתוח. אין צוות שיתפעל מסד נתונים. איזה סוג בוחרים, ולמה?' },
          options: { en: ['Customer-managed with S3 Vectors, because it is the cheapest', 'Customer-managed with a new SharePoint connector', 'Managed Knowledge Base: it has the SharePoint connector, ACL filtering by user and nothing to operate', 'A SQL knowledge base'], he: ['Customer-managed עם S3 Vectors, כי זה הכי זול', 'Customer-managed עם SharePoint connector חדש', 'Managed Knowledge Base: יש לו SharePoint connector, סינון ACL לפי משתמש ואין מה לתפעל', 'Knowledge base מסוג SQL'] },
          answer: 2, explain: { en: 'New SharePoint connectors cannot be created on customer-managed knowledge bases any more, and document-level ACL filtering with `userContext.userId` is a managed feature. S3 Vectors would force you to copy the files and to build permissions yourself.', he: 'אי אפשר יותר ליצור SharePoint connectors חדשים ב-customer-managed knowledge bases, וסינון ACL ברמת המסמך עם `userContext.userId` הוא פיצ׳ר של managed. S3 Vectors היה מכריח אותך להעתיק את הקבצים ולבנות הרשאות בעצמך.' } },
        { t: 'h', en: 'Console lab: create a Managed Knowledge Base', he: 'מעבדת קונסול: יצירת Managed Knowledge Base' },
        { t: 'p', en: 'The managed type is created from the AgentCore part of the console: **Amazon Bedrock AgentCore > Built-in tools > Knowledge Base**, then **Create Managed Knowledge Base**. Creation takes 2 to 5 minutes.', he: 'הסוג ה-managed נוצר מהחלק של AgentCore בקונסול: **Amazon Bedrock AgentCore > Built-in tools > Knowledge Base**, ואז **Create Managed Knowledge Base**. היצירה לוקחת 2 עד 5 דקות.' },
        { t: 'console', service: 'Amazon Bedrock AgentCore', nav: ['#Built-in tools', 'Knowledge Base'], active: 'Knowledge Base',
          crumbs: ['Amazon Bedrock AgentCore', 'Knowledge Base', 'Create Managed Knowledge Base'],
          task: { en: 'Create a managed knowledge base named `hr-policies` for the HR team. The policies live in SharePoint; name the data source `sharepoint-hr`. Each file is one short policy answer that must stay in one piece, so do not chunk. The files contain diagrams that should be searchable, but there is no audio or video.', he: 'צור managed knowledge base בשם `hr-policies` לצוות ה-HR. הנהלים נמצאים ב-SharePoint; קרא ל-data source בשם `sharepoint-hr`. כל קובץ הוא תשובת נוהל קצרה אחת שחייבת להישאר בחתיכה אחת, אז בלי chunking. הקבצים מכילים דיאגרמות שצריכות להיות ניתנות לחיפוש, אבל אין אודיו או וידאו.' },
          steps: [
            { heading: 'Knowledge Base details', panels: [
              { title: 'Knowledge Base details', fields: [
                { label: 'Name', type: 'input', value: '', expect: 'hr-policies', hint: { en: 'The name from the task: hr-policies', he: 'השם מהמשימה: hr-policies' } } ] },
              { title: 'Additional configurations', fields: [
                { label: 'Embedding model type', type: 'radio', options: ['Managed', 'Custom', 'Custom multimodal embedding model'], value: 'Managed', n: 1 },
                { label: 'IAM permissions', type: 'radio', options: ['Create and use a new service role', 'Use an existing service role'], value: 'Create and use a new service role', n: 2 } ] } ] },
            { heading: 'Data source', panels: [
              { title: 'Data source', fields: [
                { label: 'Data source name', type: 'input', value: '', expect: 'sharepoint-hr', hint: { en: 'The task names it sharepoint-hr', he: 'המשימה קוראת לו sharepoint-hr' } },
                { label: 'Data source type', type: 'select', options: ['Amazon S3', 'Confluence', 'Custom', 'Google Drive', 'OneDrive', 'SharePoint', 'Web Crawler'], value: 'Amazon S3', n: 3, expect: 'SharePoint', hint: { en: 'Where do the HR policies live?', he: 'איפה נמצאים נוהלי ה-HR?' } } ] } ] },
            { heading: 'Content parsing and chunking', panels: [
              { title: 'Content parsing and chunking', fields: [
                { label: 'Parsing strategy', type: 'text', value: 'Managed parser' },
                { label: 'Chunking strategy', type: 'radio', options: ['Default chunking', 'Fixed-size chunking', 'No chunking'], value: 'Default chunking', n: 4, expect: 'No chunking', hint: { en: 'Each file must stay in one piece', he: 'כל קובץ חייב להישאר בחתיכה אחת' } } ] },
              { title: 'Advanced configurations: Content indexing', n: 5, fields: [
                { label: 'Visual content in documents', type: 'toggle', value: false, expect: true, hint: { en: 'The files contain diagrams that should be searchable', he: 'הקבצים מכילים דיאגרמות שצריכות להיות ניתנות לחיפוש' } },
                { label: 'Audio files', type: 'toggle', value: false, expect: false, hint: { en: 'There is no audio', he: 'אין אודיו' } },
                { label: 'Video files', type: 'toggle', value: false, expect: false, hint: { en: 'There is no video', he: 'אין וידאו' } } ] } ] }
          ],
          primary: 'Create Knowledge Base',
          callouts: [
            { n: 1, en: 'Managed = the built-in embedding model at no extra cost, and it also unlocks the built-in reranker. The embedding type cannot be changed after creation.', he: 'Managed = מודל ה-embedding המובנה ללא עלות נוספת, והוא גם פותח את ה-reranker המובנה. אי אפשר לשנות את סוג ה-embedding אחרי היצירה.' },
            { n: 2, en: 'The service role that Bedrock uses to read your data. Letting the console create it is the recommended option.', he: 'ה-service role ש-Bedrock משתמש בו כדי לקרוא את המידע שלך. לתת לקונסול ליצור אותו זו האפשרות המומלצת.' },
            { n: 3, en: 'The managed type keeps the third-party connectors that customer-managed knowledge bases lost for new data sources.', he: 'הסוג ה-managed שומר על ה-connectors של צד שלישי, ש-customer-managed knowledge bases איבדו ל-data sources חדשים.' },
            { n: 4, en: 'Default chunking is the recommended option. A managed knowledge base does not offer hierarchical or semantic chunking.', he: 'Default chunking היא האפשרות המומלצת. Managed knowledge base לא מציע hierarchical או semantic chunking.' },
            { n: 5, en: 'Turn on extraction of images, audio and video only when you need it. Here you can also set a maximum file size and a document deletion safeguard.', he: 'מדליקים חילוץ של תמונות, אודיו ווידאו רק כשצריך. כאן אפשר גם לקבוע גודל קובץ מקסימלי ו-document deletion safeguard.' }
          ],
          success: { en: 'The knowledge base is being created. After 2 to 5 minutes it is ready, and the data source can be synced.', he: 'ה-knowledge base נוצר. אחרי 2 עד 5 דקות הוא מוכן, ואפשר לסנכרן את ה-data source.' },
          caption: { en: 'Simplified rebuild of Create Managed Knowledge Base. Section names and options follow the AWS docs of November 2026; the real page is one long form with more fields (description, KMS key, connection details, log delivery), and exact field captions may differ.', he: 'שחזור מפושט של Create Managed Knowledge Base. שמות האזורים והאפשרויות לפי תיעוד AWS מנובמבר 2026; הדף האמיתי הוא טופס ארוך אחד עם עוד שדות (תיאור, KMS key, פרטי חיבור, log delivery), והכיתוב המדויק של השדות עשוי להיות שונה.' } },
        { t: 'p', en: 'The same thing from the CLI is one command. The only required configuration is the type:', he: 'אותו דבר מה-CLI הוא פקודה אחת. הקונפיגורציה היחידה שחובה היא ה-type:' },
        { t: 'code', lang: 'bash', code: 'aws bedrock-agent create-knowledge-base --name my-managed-kb \\\n  --role-arn arn:aws:iam::123456789012:role/BedrockKBRole \\\n  --knowledge-base-configuration \'{"type":"MANAGED","managedKnowledgeBaseConfiguration":{"embeddingModelType":"MANAGED"}}\'', caption: { en: 'Creating a managed knowledge base with the AWS CLI. Build operations use the `bedrock-agent` service.', he: 'יצירת managed knowledge base עם ה-AWS CLI. פעולות בנייה משתמשות בשירות `bedrock-agent`.' } },
        { t: 'h', en: 'The customer-managed wizard', he: 'ה-wizard של customer-managed' },
        { t: 'p', en: 'A knowledge base with your own vector store is created in the Bedrock console: **Knowledge bases** in the left navigation, then the create button and the option for a knowledge base with a vector store. The wizard asks, in this order: name and description, IAM role, the data source, the data source settings (**Content parsing and chunking**), the **Embeddings model**, and the **Vector database**. After the review you press **Sync**. One rule to know: you cannot create a knowledge base as the root user.', he: 'Knowledge base עם vector store משלך נוצר בקונסול של Bedrock: **Knowledge bases** בניווט השמאלי, אחר כך כפתור היצירה והאפשרות ל-knowledge base עם vector store. ה-wizard שואל, בסדר הזה: שם ותיאור, IAM role, ה-data source, הגדרות ה-data source (**Content parsing and chunking**), ה-**Embeddings model**, וה-**Vector database**. אחרי ה-review לוחצים **Sync**. כלל אחד שכדאי לדעת: אי אפשר ליצור knowledge base כ-root user.' },
        { t: 'console', service: 'Amazon Bedrock', nav: ['Knowledge bases', 'Guardrails', 'Prompt management', 'Amazon Bedrock Flows'], active: 'Knowledge bases',
          crumbs: ['Amazon Bedrock', 'Knowledge bases', 'Create knowledge base'],
          heading: 'Select embeddings model and configure vector store',
          panels: [
            { title: 'Embeddings model', n: 1, fields: [
              { label: 'Embeddings model', type: 'text', value: 'Titan Text Embeddings V2' } ] },
            { title: 'Additional configurations', n: 2, fields: [
              { label: 'Embeddings type', type: 'text', value: 'Floating-point vector embeddings' },
              { label: 'Vector dimensions', type: 'text', value: '1024' } ] },
            { title: 'Vector database', n: 3, fields: [
              { label: 'Vector store creation method', type: 'radio', options: ['Quick create a new vector store', 'Choose a vector store you have created'], value: 'Quick create a new vector store' } ],
              table: { cols: ['Quick create options'], rows: [['Amazon OpenSearch Serverless'], ['Amazon Aurora PostgreSQL Serverless'], ['Amazon Neptune Analytics'], ['Amazon S3 Vectors']] } }
          ],
          buttons: ['Cancel', 'Previous', 'Next'],
          callouts: [
            { n: 1, en: 'The model that turns chunks and questions into vectors. It is fixed for the life of the knowledge base.', he: 'המודל שהופך chunks ושאלות לוקטורים. הוא קבוע לכל חיי ה-knowledge base.' },
            { n: 2, en: 'Embeddings type (float or binary) and Vector dimensions. Both must match what the vector index expects.', he: 'Embeddings type (float או binary) ו-Vector dimensions. שניהם חייבים להתאים למה שה-vector index מצפה לו.' },
            { n: 3, en: 'Quick create builds a new store with the right index for you. The other option connects a store that you created yourself.', he: 'Quick create בונה store חדש עם ה-index הנכון בשבילך. האפשרות האחרת מחברת store שיצרת בעצמך.' }
          ],
          caption: { en: 'Simplified rebuild of one step of the customer-managed wizard. The panel names, Embeddings type, Vector dimensions and the two vector store options are from the docs; the step title and the other captions are simplified.', he: 'שחזור מפושט של שלב אחד ב-wizard של customer-managed. שמות הפאנלים, Embeddings type, Vector dimensions ושתי אפשרויות ה-vector store הם מהתיעוד; כותרת השלב ושאר הכיתובים מפושטים.' } },
        { t: 'h', en: 'Sync: running ingestion', he: 'Sync: הרצת ingestion' },
        { t: 'p', en: 'Creating a knowledge base does not read any document. [[Ingestion]] runs when you press **Sync** in the console or call `StartIngestionJob`. A sync is **incremental**: unchanged files are skipped, changed files are ingested again, new files are added, and deleted files are removed from the store. Remember this sentence: **if you forget to sync, the bot answers from the old documents.**', he: 'יצירת knowledge base לא קוראת אף מסמך. [[Ingestion]] רץ כשלוחצים **Sync** בקונסול או קוראים ל-`StartIngestionJob`. Sync הוא **incremental**: קבצים שלא השתנו מדולגים, קבצים שהשתנו עוברים ingestion מחדש, קבצים חדשים מתווספים, וקבצים שנמחקו מוסרים מה-store. זכור את המשפט הזה: **אם שוכחים לעשות sync, הבוט עונה מהמסמכים הישנים.**' },
        { t: 'code', lang: 'python', code: 'import boto3\nagent = boto3.client("bedrock-agent")\njob = agent.start_ingestion_job(knowledgeBaseId="KB12345678", dataSourceId="DS12345678")["ingestionJob"]\nstatus = agent.get_ingestion_job(knowledgeBaseId="KB12345678", dataSourceId="DS12345678",\n                                 ingestionJobId=job["ingestionJobId"])["ingestionJob"]["status"]', caption: { en: 'Start a sync and read its status. Status values: STARTING, IN_PROGRESS, COMPLETE, FAILED, STOPPING, STOPPED.', he: 'התחלת sync וקריאת הסטטוס שלו. ערכי הסטטוס: STARTING, IN_PROGRESS, COMPLETE, FAILED, STOPPING, STOPPED.' } },
        { t: 'list', en: [
          'A job with status `COMPLETE` can still have skipped files. Read `statistics` and `failureReasons` in the response, or **Sync history** and **View warnings** in the console.',
          'For S3 and Custom sources there is also **direct ingestion**: `IngestKnowledgeBaseDocuments` adds or updates single documents without a full sync. Do not run it at the same time as an ingestion job. For S3, direct changes are overwritten by the next sync, so update the bucket too.',
          'A managed knowledge base can sync on a schedule (daily, weekly or monthly) and has a deletion safeguard: a sync skips the deletes if it would delete more than a set percent of the documents.',
          'The data deletion policy of a data source decides what happens to the vectors when the data source is deleted: `DELETE` (default) or `RETAIN`.'
        ], he: [
          'Job בסטטוס `COMPLETE` עדיין יכול להכיל קבצים שדולגו. קוראים את `statistics` ו-`failureReasons` בתשובה, או את **Sync history** ו-**View warnings** בקונסול.',
          'למקורות S3 ו-Custom יש גם **direct ingestion**: `IngestKnowledgeBaseDocuments` מוסיף או מעדכן מסמכים בודדים בלי sync מלא. לא מריצים אותו במקביל ל-ingestion job. ב-S3, שינויים ישירים נדרסים ב-sync הבא, אז מעדכנים גם את ה-bucket.',
          'Managed knowledge base יכול לעשות sync לפי לוח זמנים (יומי, שבועי או חודשי) ויש לו מנגנון הגנה ממחיקה: sync מדלג על המחיקות אם הוא היה מוחק יותר מאחוז מוגדר מהמסמכים.',
          'ה-data deletion policy של data source קובע מה קורה לוקטורים כשה-data source נמחק: `DELETE` (ברירת מחדל) או `RETAIN`.'
        ] },
        { t: 'fill', prompt: { en: 'A nightly job uploads new PDFs to S3. Complete the code that makes the knowledge base see them.', he: 'Job לילי מעלה קובצי PDF חדשים ל-S3. השלם את הקוד שגורם ל-knowledge base לראות אותם.' }, lang: 'python',
          code: 'agent = boto3.client("{{1}}")\njob = agent.{{2}}(\n    knowledgeBaseId="KB12345678",\n    {{3}}="DS12345678",\n)["ingestionJob"]\nprint(job["{{4}}"])   # STARTING, IN_PROGRESS, COMPLETE, FAILED ...',
          blanks: [
            { accept: ['bedrock-agent'], hint: { en: 'the build-time client, not the runtime one', he: 'לקוח זמן הבנייה, לא ה-runtime' } },
            { accept: ['start_ingestion_job'], hint: { en: 'snake_case of StartIngestionJob', he: 'snake_case של StartIngestionJob' } },
            { accept: ['dataSourceId'], hint: { en: 'a sync belongs to one data source', he: 'sync שייך ל-data source אחד' } },
            { accept: ['status'], hint: { en: 'the field with the job state', he: 'השדה עם מצב ה-job' } }
          ],
          explain: { en: 'Build and sync use `bedrock-agent`. Queries use `bedrock-agent-runtime`. A sync is always for one data source of one knowledge base.', he: 'בנייה ו-sync משתמשים ב-`bedrock-agent`. שאילתות משתמשות ב-`bedrock-agent-runtime`. Sync הוא תמיד ל-data source אחד של knowledge base אחד.' } },
        { t: 'quiz', q: { en: 'HR replaced the vacation policy PDF in S3 this morning. In the afternoon the bot still quotes the old policy. The knowledge base is customer-managed. What is the most likely cause?', he: 'HR החליפו הבוקר את ה-PDF של נוהל החופשות ב-S3. אחר הצהריים הבוט עדיין מצטט את הנוהל הישן. ה-knowledge base הוא customer-managed. מה הסיבה הכי סבירה?' },
          options: { en: ['No ingestion job ran after the upload', 'The model has an old knowledge cutoff', 'Prompt caching returned the old answer', 'The chunk overlap is too small'], he: ['לא רץ ingestion job אחרי ההעלאה', 'למודל יש knowledge cutoff ישן', 'Prompt caching החזיר את התשובה הישנה', 'ה-overlap של ה-chunks קטן מדי'] },
          answer: 0, explain: { en: 'The vector store still holds the chunks of the old file until a sync runs. Start an ingestion job after uploads (for example from an S3 event), or use direct ingestion. Prompt caching reuses prompt prefixes, not answers.', he: 'ה-vector store עדיין מחזיק את ה-chunks של הקובץ הישן עד שרץ sync. מתחילים ingestion job אחרי העלאות (למשל מ-S3 event), או משתמשים ב-direct ingestion. Prompt caching משתמש שוב ב-prefixes של פרומפט, לא בתשובות.' } },
        { t: 'reveal', q: { en: 'Interview: "Managed or customer-managed knowledge base: how do you decide?"', he: 'ראיון: "Managed או customer-managed knowledge base: איך מחליטים?"' },
          a: { en: 'My default is managed: no vector store to run, built-in embedding and reranker at no extra cost, hybrid search, third-party connectors, document-level ACL filtering and agentic retrieval. I pay per GB of raw data and per retrieval call. I choose customer-managed when I need something that managed does not give: a specific vector database or direct access to it, hierarchical or semantic or custom chunking, a specific parser, semantic-only search, or the one-call `RetrieveAndGenerate` API, which does not work with managed knowledge bases. I also check connectors: new SharePoint, Confluence, Salesforce and Web Crawler connectors are no longer possible on customer-managed.', he: 'ברירת המחדל שלי היא managed: אין vector store להריץ, embedding ו-reranker מובנים ללא עלות נוספת, hybrid search, connectors של צד שלישי, סינון ACL ברמת המסמך ו-agentic retrieval. משלמים לפי GB של מידע גולמי ולפי קריאת אחזור. אני בוחר customer-managed כשאני צריך משהו ש-managed לא נותן: vector database מסוים או גישה ישירה אליו, chunking מסוג hierarchical, semantic או custom, parser מסוים, חיפוש semantic בלבד, או ה-API של `RetrieveAndGenerate` בקריאה אחת, שלא עובד עם managed knowledge bases. אני בודק גם connectors: connectors חדשים של SharePoint, Confluence, Salesforce ו-Web Crawler כבר לא אפשריים ב-customer-managed.' } }
      ]
    },
    {
      id: 'm05l5', minutes: 15,
      title: { en: 'Querying a knowledge base', he: 'תשאול של knowledge base' },
      blocks: [
        { t: 'p', en: 'All queries go through the boto3 client `bedrock-agent-runtime`. There are two basic styles. With [[Retrieve]] you get the chunks and you do the rest. With [[RetrieveAndGenerate]] Bedrock does the whole query pipeline and gives you an answer with [[Citation|citations]].', he: 'כל השאילתות עוברות דרך לקוח ה-boto3‏ `bedrock-agent-runtime`. יש שני סגנונות בסיסיים. עם [[Retrieve]] מקבלים את ה-chunks ועושים את השאר לבד. עם [[RetrieveAndGenerate]], Bedrock מבצע את כל pipeline השאילתה ונותן לך תשובה עם [[Citation|citations]].' },
        { t: 'table', head: { en: ['API', 'Returns', 'Works with', 'Choose it when'], he: ['API', 'מחזיר', 'עובד עם', 'מתי בוחרים'] }, rows: {
          en: [
            ['`Retrieve`', '`retrievalResults[]`: content, location, metadata, score', 'All knowledge base types', 'You want control: your own prompt, your own model call, an agent tool, debugging.'],
            ['`RetrieveAndGenerate`', '`output.text`, `citations[]`, `sessionId`', 'Not managed knowledge bases', 'A quick, standard question-answer feature with citations.'],
            ['`RetrieveAndGenerateStream`', 'The same, as a stream', 'Like RetrieveAndGenerate', 'A chat UI where the user should see the answer as it is written.'],
            ['`AgenticRetrieveStream`', 'A stream: `traceEvent`, `responseEvent`, `result`', 'Managed knowledge bases only', 'Complex questions that need several searches.']
          ],
          he: [
            ['`Retrieve`', '`retrievalResults[]`: content, location, metadata, score', 'כל סוגי ה-knowledge base', 'רוצים שליטה: פרומפט משלך, קריאה למודל משלך, כלי של סוכן, דיבוג.'],
            ['`RetrieveAndGenerate`', '`output.text`, `citations[]`, `sessionId`', 'לא managed knowledge bases', 'פיצ׳ר שאלה-תשובה מהיר וסטנדרטי עם citations.'],
            ['`RetrieveAndGenerateStream`', 'אותו דבר, כ-stream', 'כמו RetrieveAndGenerate', 'ממשק צ׳אט שבו המשתמש צריך לראות את התשובה תוך כדי כתיבה.'],
            ['`AgenticRetrieveStream`', 'Stream: `traceEvent`, `responseEvent`, `result`', 'Managed knowledge bases בלבד', 'שאלות מורכבות שדורשות כמה חיפושים.']
          ] } },
        { t: 'h', en: 'Retrieve: search only', he: 'Retrieve: חיפוש בלבד' },
        { t: 'code', lang: 'python', code: 'import boto3\nrt = boto3.client("bedrock-agent-runtime")\nresp = rt.retrieve(\n    knowledgeBaseId="KB12345678",\n    retrievalQuery={"text": "What is our refund policy?"},\n    retrievalConfiguration={"vectorSearchConfiguration": {          # customer-managed KB\n        "numberOfResults": 5,                                       # 1-100, default 5\n        "overrideSearchType": "HYBRID",                             # HYBRID | SEMANTIC\n        "filter": {"andAll": [{"equals": {"key": "genre", "value": "policy"}},\n                              {"greaterThan": {"key": "year", "value": 2023}}]}}},\n)\nfor r in resp["retrievalResults"]:\n    print(r["score"], r["location"], r["content"]["text"][:80])', caption: { en: 'Retrieve on a customer-managed knowledge base. Each result has the chunk text, where it came from, and a similarity score.', he: 'Retrieve על customer-managed knowledge base. לכל תוצאה יש את טקסט ה-chunk, מאיפה הוא הגיע, וציון דמיון.' } },
        { t: 'list', en: [
          '`numberOfResults` is the [[Top-k]]: 1 to 100, default 5.',
          'For a **managed** knowledge base, the settings go into `retrievalConfiguration.managedSearchConfiguration` instead (`filter`, `numberOfResults`, `rerankingModelType`: `MANAGED` by default, `CUSTOM` or `NONE`). `vectorSearchConfiguration` is only for customer-managed. The smallest managed request is just the query text.',
          'For ACL filtering on a managed knowledge base, pass `userContext` with the `userId` of the person who asks.',
          'The `score` is useful for ordering and for a rough cut-off, but it is not a percent of correctness. Do not show it to users as "confidence".'
        ], he: [
          '`numberOfResults` הוא ה-[[Top-k]]: 1 עד 100, ברירת מחדל 5.',
          'ב-knowledge base מסוג **managed**, ההגדרות נכנסות במקום זה ל-`retrievalConfiguration.managedSearchConfiguration` (`filter`, `numberOfResults`, `rerankingModelType`: `MANAGED` כברירת מחדל, `CUSTOM` או `NONE`). `vectorSearchConfiguration` הוא רק ל-customer-managed. הבקשה הקטנה ביותר ל-managed היא רק טקסט השאילתה.',
          'לסינון ACL ב-managed knowledge base, מעבירים `userContext` עם ה-`userId` של האדם ששואל.',
          'ה-`score` שימושי לסידור ולחיתוך גס, אבל הוא לא אחוז של נכונות. לא מציגים אותו למשתמשים כ-"confidence".'
        ] },
        { t: 'fill', prompt: { en: 'Search a customer-managed knowledge base for the 8 best chunks, with hybrid search.', he: 'חפש ב-customer-managed knowledge base את 8 ה-chunks הטובים ביותר, עם hybrid search.' }, lang: 'python',
          code: 'rt = boto3.client("{{1}}")\nresp = rt.{{2}}(\n    knowledgeBaseId="KB12345678",\n    {{3}}={"text": "How do I reset my password?"},\n    retrievalConfiguration={"vectorSearchConfiguration": {\n        "{{4}}": 8,\n        "overrideSearchType": "{{5}}",\n    }},\n)\nfor r in resp["{{6}}"]:\n    print(r["score"], r["content"]["text"][:80])',
          blanks: [
            { accept: ['bedrock-agent-runtime'], hint: { en: 'the runtime client for knowledge bases', he: 'לקוח ה-runtime של knowledge bases' } },
            { accept: ['retrieve'], hint: { en: 'search only, no generation', he: 'חיפוש בלבד, בלי generation' } },
            { accept: ['retrievalQuery'], hint: { en: 'the field that holds the question', he: 'השדה שמחזיק את השאלה' } },
            { accept: ['numberOfResults'], hint: { en: 'the top-k field', he: 'שדה ה-top-k' } },
            { accept: ['HYBRID'], hint: { en: 'keyword + semantic', he: 'keyword + semantic' } },
            { accept: ['retrievalResults'], hint: { en: 'the list in the response', he: 'הרשימה בתשובה' } }
          ],
          explain: { en: 'Four clients to keep apart: `bedrock` (control plane), `bedrock-runtime` (models), `bedrock-agent` (build knowledge bases), `bedrock-agent-runtime` (query them).', he: 'ארבעה לקוחות שצריך להבדיל ביניהם: `bedrock` (control plane), `bedrock-runtime` (מודלים), `bedrock-agent` (בניית knowledge bases), `bedrock-agent-runtime` (תשאול שלהם).' } },
        { t: 'h', en: 'RetrieveAndGenerate: search and answer in one call', he: 'RetrieveAndGenerate: חיפוש ותשובה בקריאה אחת' },
        { t: 'code', lang: 'python', code: 'resp = rt.retrieve_and_generate(\n    input={"text": "What is our refund policy?"},\n    retrieveAndGenerateConfiguration={\n        "type": "KNOWLEDGE_BASE",\n        "knowledgeBaseConfiguration": {\n            "knowledgeBaseId": "KB12345678",\n            "modelArn": "<model ID or inference profile ARN>",\n            "retrievalConfiguration": {"vectorSearchConfiguration": {"numberOfResults": 5}},\n            "orchestrationConfiguration": {"queryTransformationConfiguration": {"type": "QUERY_DECOMPOSITION"}},\n            "generationConfiguration": {\n                "guardrailConfiguration": {"guardrailId": "gr-id", "guardrailVersion": "1"},\n                "inferenceConfig": {"textInferenceConfig": {"temperature": 0.2, "maxTokens": 1024}}}}},\n    # sessionId=resp_prev["sessionId"]  # only reuse a value Bedrock returned; you cannot invent one\n)\nprint(resp["output"]["text"])\nfor c in resp["citations"]:\n    span = c["generatedResponsePart"]["textResponsePart"]["span"]      # start / end\n    for ref in c["retrievedReferences"]:\n        print(span, ref["location"], ref["content"].get("text", "")[:60])', caption: { en: 'RetrieveAndGenerate on a customer-managed knowledge base, with query decomposition, a guardrail and inference settings.', he: 'RetrieveAndGenerate על customer-managed knowledge base, עם query decomposition, guardrail והגדרות inference.' } },
        { t: 'list', en: [
          '**[[Citation|Citations]].** Each citation ties a part of the answer (`span` with start and end positions) to the chunks it was based on (`retrievedReferences`, each with `location` and `content`). Show them to users: a link to the source is what makes people trust a RAG bot, and it lets them check.',
          '**Sessions.** The response has a `sessionId`. Send it back in the next call for a follow-up question. You can only reuse an ID that Bedrock returned; you cannot make one up.',
          '**The prompt.** You can replace the generation prompt (`promptTemplate.textPromptTemplate`). It uses placeholders: `$search_results$` (required), `$query$`, `$output_format_instructions$` (needed for citations) and `$current_time$`.',
          '**Guardrail.** `guardrailConfiguration` attaches a guardrail. Know its limit: the guardrail checks the user input and the generated answer, **not** the retrieved chunks.',
          '**Not for managed knowledge bases.** There you use `Retrieve` plus your own Converse call, or agentic retrieval.'
        ], he: [
          '**[[Citation|Citations]].** כל citation קושר חלק מהתשובה (`span` עם מיקום התחלה וסוף) ל-chunks שעליהם הוא התבסס (`retrievedReferences`, לכל אחד `location` ו-`content`). מציגים אותם למשתמשים: קישור למקור הוא מה שגורם לאנשים לסמוך על בוט RAG, והוא מאפשר להם לבדוק.',
          '**Sessions.** בתשובה יש `sessionId`. שולחים אותו בחזרה בקריאה הבאה בשביל שאלת המשך. אפשר להשתמש שוב רק ב-ID ש-Bedrock החזיר; אי אפשר להמציא אחד.',
          '**הפרומפט.** אפשר להחליף את פרומפט ה-generation‏ (`promptTemplate.textPromptTemplate`). הוא משתמש ב-placeholders: `$search_results$` (חובה), `$query$`, `$output_format_instructions$` (נדרש בשביל citations) ו-`$current_time$`.',
          '**Guardrail.** `guardrailConfiguration` מחבר guardrail. צריך להכיר את המגבלה שלו: ה-guardrail בודק את קלט המשתמש ואת התשובה שנוצרה, **לא** את ה-chunks שאוחזרו.',
          '**לא ל-managed knowledge bases.** שם משתמשים ב-`Retrieve` ועוד קריאת Converse משלך, או ב-agentic retrieval.'
        ] },
        { t: 'fill', prompt: { en: 'Ask a customer-managed knowledge base for a generated answer, then print the source of every citation.', he: 'בקש מ-customer-managed knowledge base תשובה מוכנה, ואז הדפס את המקור של כל citation.' }, lang: 'python',
          code: 'resp = rt.{{1}}(\n    input={"text": "How many vacation days do I get?"},\n    retrieveAndGenerateConfiguration={\n        "type": "{{2}}",\n        "knowledgeBaseConfiguration": {\n            "knowledgeBaseId": "KB12345678",\n            "{{3}}": MODEL_ARN,\n        }},\n)\nprint(resp["output"]["text"])\nfor c in resp["{{4}}"]:\n    for ref in c["{{5}}"]:\n        print(ref["location"])',
          blanks: [
            { accept: ['retrieve_and_generate'], hint: { en: 'snake_case of RetrieveAndGenerate', he: 'snake_case של RetrieveAndGenerate' } },
            { accept: ['KNOWLEDGE_BASE'], hint: { en: 'upper case with an underscore', he: 'אותיות גדולות עם קו תחתון' } },
            { accept: ['modelArn'], hint: { en: 'which model writes the answer', he: 'איזה מודל כותב את התשובה' } },
            { accept: ['citations'], hint: { en: 'the list that links answer parts to sources', he: 'הרשימה שמקשרת חלקי תשובה למקורות' } },
            { accept: ['retrievedReferences'], hint: { en: 'the chunks behind one citation', he: 'ה-chunks שמאחורי citation אחד' } }
          ],
          explain: { en: 'The knowledge base does the search, but you still choose the generation model with `modelArn`. The embedding model was fixed at creation; the generation model can change on every call.', he: 'ה-knowledge base עושה את החיפוש, אבל אתה עדיין בוחר את מודל ה-generation עם `modelArn`. מודל ה-embedding נקבע ביצירה; מודל ה-generation יכול להשתנות בכל קריאה.' } },
        { t: 'quiz', q: { en: 'You have a managed knowledge base and a chat app with a custom system prompt and tools. Which design works?', he: 'יש לך managed knowledge base ואפליקציית צ׳אט עם system prompt מותאם וכלים. איזה תכנון עובד?' },
          options: { en: ['Call RetrieveAndGenerate with the managed knowledge base ID', 'Call Retrieve, then put the chunks into your own Converse request', 'Call InvokeModel with the knowledge base ARN as modelId', 'Call StartIngestionJob on every question'], he: ['לקרוא ל-RetrieveAndGenerate עם ה-ID של ה-managed knowledge base', 'לקרוא ל-Retrieve, ואז לשים את ה-chunks בבקשת Converse משלך', 'לקרוא ל-InvokeModel עם ה-ARN של ה-knowledge base כ-modelId', 'לקרוא ל-StartIngestionJob בכל שאלה'] },
          answer: 1, explain: { en: '`RetrieveAndGenerate` cannot be used with managed knowledge bases. `Retrieve` works with every type and leaves the prompt, the model and the tools in your hands. This is also the pattern for giving an agent a "search the docs" tool.', he: 'אי אפשר להשתמש ב-`RetrieveAndGenerate` עם managed knowledge bases. `Retrieve` עובד עם כל סוג ומשאיר את הפרומפט, המודל והכלים בידיים שלך. זה גם הדפוס למתן כלי "חיפוש בתיעוד" לסוכן.' } },
        { t: 'h', en: 'Options that raise quality', he: 'אפשרויות שמעלות איכות' },
        { t: 'table', head: { en: ['Option', 'What it does', 'Cost'], he: ['אפשרות', 'מה היא עושה', 'מחיר'] }, rows: {
          en: [
            ['**Number of results**', 'More chunks raise the chance that the right one is included.', 'More input tokens, and more noise for the model.'],
            ['**[[Reranking]]**', 'A reranker model reads the question with each retrieved chunk and reorders them. Pattern: retrieve many, rerank, keep the best few. Models: Amazon Rerank 1.0 (`amazon.rerank-v1:0`) and Cohere Rerank 3.5 (`cohere.rerank-v3-5:0`). Managed knowledge bases have a built-in reranker.', 'A paid model call per query (for customer-managed) and some latency.'],
            ['**[[Query decomposition]]**', '"Compare the warranty of model A and model B" becomes two searches. Set `QUERY_DECOMPOSITION` in RetrieveAndGenerate.', 'An extra model call and more searches.'],
            ['**[[Metadata filter]]**', 'Limits the search to the right year, product, language or department.', 'Almost free. Needs good metadata at ingestion.'],
            ['**[[Hybrid search]]**', 'Adds exact word matching to meaning.', 'Needs a store that supports it.']
          ],
          he: [
            ['**Number of results**', 'יותר chunks מעלים את הסיכוי שהנכון נכלל.', 'יותר טוקני קלט, ויותר רעש למודל.'],
            ['**[[Reranking]]**', 'מודל reranker קורא את השאלה עם כל chunk שאוחזר ומסדר אותם מחדש. הדפוס: מאחזרים הרבה, עושים rerank, משאירים את המעטים הטובים. מודלים: Amazon Rerank 1.0‏ (`amazon.rerank-v1:0`) ו-Cohere Rerank 3.5‏ (`cohere.rerank-v3-5:0`). ל-managed knowledge bases יש reranker מובנה.', 'קריאה בתשלום למודל בכל שאילתה (ב-customer-managed) וקצת latency.'],
            ['**[[Query decomposition]]**', '"Compare the warranty of model A and model B" הופך לשני חיפושים. מגדירים `QUERY_DECOMPOSITION` ב-RetrieveAndGenerate.', 'קריאה נוספת למודל ויותר חיפושים.'],
            ['**[[Metadata filter]]**', 'מגביל את החיפוש לשנה, למוצר, לשפה או למחלקה הנכונים.', 'כמעט חינם. דורש metadata טוב ב-ingestion.'],
            ['**[[Hybrid search]]**', 'מוסיף התאמת מילים מדויקת למשמעות.', 'דורש store שתומך בזה.']
          ] } },
        { t: 'console', service: 'Amazon Bedrock', nav: ['Knowledge bases', 'Guardrails', 'Prompt management', 'Amazon Bedrock Flows'], active: 'Knowledge bases',
          crumbs: ['Amazon Bedrock', 'Knowledge bases', 'support-kb', 'Test knowledge base'],
          task: { en: 'An answer was wrong and you want to see if retrieval is the problem. Set the test window to return only the raw chunks (no generated answer), ask for 10 chunks, and turn on the override of the default search type.', he: 'תשובה הייתה שגויה ואתה רוצה לראות אם האחזור הוא הבעיה. הגדר את חלון הבדיקה כך שיחזיר רק את ה-chunks הגולמיים (בלי תשובה מוכנה), בקש 10 chunks, והדלק את העקיפה של סוג החיפוש ברירת המחדל.' },
          heading: 'Test knowledge base',
          panels: [
            { title: 'Test', fields: [
              { label: 'Generate responses', type: 'toggle', value: true, n: 1, expect: false, hint: { en: 'Off = retrieval only: you see the chunks, not an answer', he: 'כבוי = אחזור בלבד: רואים את ה-chunks, לא תשובה' } } ] },
            { title: 'Configurations', n: 2, fields: [
              { label: 'Source chunks', type: 'input', value: '5', n: 3, expect: '10', hint: { en: 'The task asks for 10 chunks', he: 'המשימה מבקשת 10 chunks' } },
              { label: 'Search type: Override default search', type: 'toggle', value: false, n: 4, expect: true, hint: { en: 'Turn it on to choose the search type yourself', he: 'מדליקים כדי לבחור את סוג החיפוש בעצמך' } },
              { label: 'Streaming preference: Stream response', type: 'toggle', value: false } ],
              text: 'Filters (+ Add Group) · Guardrails · Reranking · Inference parameters · Knowledge base prompt template' }
          ],
          buttons: ['Run'],
          callouts: [
            { n: 1, en: 'On: the console calls RetrieveAndGenerate. Off: it calls Retrieve and shows the chunks. Always debug with it off first.', he: 'דלוק: הקונסול קורא ל-RetrieveAndGenerate. כבוי: הוא קורא ל-Retrieve ומציג את ה-chunks. תמיד מדבגים קודם כשהוא כבוי.' },
            { n: 2, en: 'The Configurations pane holds every query option of this lesson, so you can try them before you write code.', he: 'חלונית ה-Configurations מחזיקה את כל אפשרויות השאילתה של השיעור הזה, כך שאפשר לנסות אותן לפני שכותבים קוד.' },
            { n: 3, en: 'The console name for numberOfResults.', he: 'השם בקונסול של numberOfResults.' },
            { n: 4, en: 'Lets you pick the search type for this test, like overrideSearchType in the API.', he: 'מאפשר לבחור את סוג החיפוש לבדיקה הזו, כמו overrideSearchType ב-API.' }
          ],
          success: { en: 'Now Run shows 10 raw chunks. Use Show source details to read each chunk and check if the answer is really there.', he: 'עכשיו Run מציג 10 chunks גולמיים. השתמש ב-Show source details כדי לקרוא כל chunk ולבדוק אם התשובה באמת שם.' },
          caption: { en: 'Simplified rebuild of the Test knowledge base window. The labels come from the AWS docs; the layout is simplified.', he: 'שחזור מפושט של חלון Test knowledge base. התוויות מתיעוד AWS; הפריסה מפושטת.' } },
        { t: 'h', en: 'Agentic retrieval', he: 'Agentic retrieval' },
        { t: 'p', en: 'Some questions cannot be answered with one search: "Which of our two magazines started first, and who was its first editor?" With [[Agentic retrieval]], a foundation model plans the work: it splits the question into sub-queries, retrieves in several rounds across up to 5 managed knowledge bases, can pull a full document, checks if the results are enough, and by default writes a cited answer. The API is `AgenticRetrieveStream`, and it works only with managed knowledge bases.', he: 'יש שאלות שאי אפשר לענות עליהן בחיפוש אחד: "איזה משני המגזינים שלנו התחיל קודם, ומי היה העורך הראשון שלו?" עם [[Agentic retrieval]], foundation model מתכנן את העבודה: הוא מפצל את השאלה לתת-שאילתות, מאחזר בכמה סבבים על פני עד 5 managed knowledge bases, יכול למשוך מסמך מלא, בודק אם התוצאות מספיקות, וכברירת מחדל כותב תשובה עם citations. ה-API הוא `AgenticRetrieveStream`, והוא עובד רק עם managed knowledge bases.' },
        { t: 'code', lang: 'json', code: '{\n  "messages": [{"role": "user", "content": {"text": "Which magazine started first, A or B?"}}],\n  "retrievers": [{\n    "description": "Company docs",\n    "configuration": {"knowledgeBase": {"knowledgeBaseId": "KB12345678"}}\n  }],\n  "agenticRetrieveConfiguration": {"foundationModelType": "MANAGED", "rerankingModelType": "MANAGED"}\n}', caption: { en: 'The request body of AgenticRetrieveStream (`POST /agenticRetrieveStream`). The stream returns `traceEvent` (the steps: planning, retrieval and so on), `responseEvent` (pieces of the answer) and a final `result` with citations. Check the boto3 docs for the exact method name.', he: 'גוף הבקשה של AgenticRetrieveStream‏ (`POST /agenticRetrieveStream`). ה-stream מחזיר `traceEvent` (השלבים: planning, retrieval וכן הלאה), `responseEvent` (חלקים של התשובה) ו-`result` סופי עם citations. את שם המתודה המדויק ב-boto3 בודקים בתיעוד.' } },
        { t: 'note', kind: 'tip', en: 'Agentic retrieval gives better answers on multi-part questions, and it costs more and takes longer: several model calls and several searches for one question. Use plain `Retrieve` for simple lookups, and keep agentic retrieval for the questions that really need it.', he: 'Agentic retrieval נותן תשובות טובות יותר בשאלות מרובות חלקים, והוא עולה יותר ולוקח יותר זמן: כמה קריאות למודל וכמה חיפושים לשאלה אחת. משתמשים ב-`Retrieve` רגיל לחיפושים פשוטים, ושומרים את agentic retrieval לשאלות שבאמת צריכות אותו.' },
        { t: 'h', en: 'Beyond text documents', he: 'מעבר למסמכי טקסט' },
        { t: 'list', en: [
          '**Structured data ([[NL2SQL]]).** A knowledge base can be connected to a structured data store. The query engine is Amazon Redshift, and the data sits in Redshift or in the AWS Glue Data Catalog. `Retrieve` and `RetrieveAndGenerate` turn the question into SQL and run it; `GenerateQuery` only returns the SQL. Chunking, filters and search type do not apply here. Give the database user SELECT permission only: the SQL is written by a model.',
          '**Multimodal.** A customer-managed knowledge base has two routes: Nova Multimodal Embeddings (search by visual similarity; it cannot read speech), or the Data Automation parser, which first turns speech and video into text. A managed knowledge base has switches for image, audio and video extraction.',
          '**[[GraphRAG]].** With Amazon Neptune Analytics as storage, the knowledge base also keeps the links between entities and documents, for answers that need connections across documents.'
        ], he: [
          '**מידע מובנה ([[NL2SQL]]).** אפשר לחבר knowledge base ל-structured data store. מנוע השאילתות הוא Amazon Redshift, והמידע יושב ב-Redshift או ב-AWS Glue Data Catalog. `Retrieve` ו-`RetrieveAndGenerate` הופכים את השאלה ל-SQL ומריצים אותה; `GenerateQuery` רק מחזיר את ה-SQL. Chunking, filters וסוג חיפוש לא רלוונטיים כאן. נותנים למשתמש מסד הנתונים הרשאת SELECT בלבד: את ה-SQL כותב מודל.',
          '**Multimodal.** ל-customer-managed knowledge base יש שני מסלולים: Nova Multimodal Embeddings (חיפוש לפי דמיון ויזואלי; הוא לא יכול לקרוא דיבור), או ה-parser של Data Automation, שקודם הופך דיבור ווידאו לטקסט. ל-managed knowledge base יש מתגים לחילוץ תמונות, אודיו ווידאו.',
          '**[[GraphRAG]].** עם Amazon Neptune Analytics כאחסון, ה-knowledge base שומר גם את הקשרים בין ישויות ומסמכים, לתשובות שדורשות חיבורים בין מסמכים.'
        ] },
        { t: 'quiz', q: { en: 'The CFO asks the bot: "What was the total revenue per region in Q3?" The numbers are in Redshift tables, not in documents. What do you build?', he: 'ה-CFO שואל את הבוט: "מה היה סך ההכנסות לכל region ב-Q3?" המספרים נמצאים בטבלאות Redshift, לא במסמכים. מה בונים?' },
          options: { en: ['Export the tables to PDF and chunk them', 'Raise numberOfResults to 100', 'Use hierarchical chunking on CSV files', 'A knowledge base connected to a structured data store, which turns the question into SQL'], he: ['לייצא את הטבלאות ל-PDF ולחתוך אותן ל-chunks', 'להעלות את numberOfResults ל-100', 'להשתמש ב-hierarchical chunking על קובצי CSV', 'Knowledge base שמחובר ל-structured data store, שהופך את השאלה ל-SQL'] },
          answer: 3, explain: { en: 'Sums and group-by are jobs for a database, not for similarity search. Vector search returns a few similar rows; it cannot add up a whole table. NL2SQL lets the database compute the exact number.', he: 'סכומים ו-group-by הם עבודה למסד נתונים, לא לחיפוש דמיון. חיפוש וקטורי מחזיר כמה שורות דומות; הוא לא יכול לסכם טבלה שלמה. NL2SQL נותן למסד הנתונים לחשב את המספר המדויק.' } },
        { t: 'reveal', q: { en: 'Interview: "When would you use Retrieve and write the generation step yourself, instead of RetrieveAndGenerate?"', he: 'ראיון: "מתי תשתמש ב-Retrieve ותכתוב את שלב ה-generation בעצמך, במקום RetrieveAndGenerate?"' },
          a: { en: 'RetrieveAndGenerate is the fastest way to a working question-answer feature with citations and sessions. I move to Retrieve plus my own Converse call when I need control: my own system prompt and output format, tools or structured output in the same call, prompt caching, mixing chunks from several sources, custom logic between search and generation (dropping low-score chunks, checking permissions), or when the knowledge base is managed, where RetrieveAndGenerate is not available. Retrieve is also what I give to an agent as a tool, and what I use to debug, because it shows the retrieval stage alone.', he: 'RetrieveAndGenerate היא הדרך המהירה ביותר לפיצ׳ר שאלה-תשובה עובד עם citations ו-sessions. אני עובר ל-Retrieve ועוד קריאת Converse משלי כשאני צריך שליטה: system prompt ופורמט פלט משלי, כלים או structured output באותה קריאה, prompt caching, ערבוב chunks מכמה מקורות, לוגיקה מותאמת בין החיפוש ל-generation (להפיל chunks עם score נמוך, לבדוק הרשאות), או כשה-knowledge base הוא managed, שם RetrieveAndGenerate לא זמין. Retrieve הוא גם מה שאני נותן לסוכן ככלי, ומה שאני משתמש בו לדיבוג, כי הוא מראה את שלב האחזור לבדו.' } }
      ]
    },
    {
      id: 'm05l6', minutes: 13,
      title: { en: 'Making RAG good: debugging, metrics, cost. Then the workout', he: 'לעשות RAG טוב: דיבוג, מדדים, עלות. ואז האימון' },
      blocks: [
        { t: 'p', en: 'A first RAG demo takes a day. A RAG system that people trust takes weeks, and most of that time is debugging. The good news: the method is always the same. Do not start by changing the prompt. Start by finding **which stage** is wrong.', he: 'דמו ראשון של RAG לוקח יום. מערכת RAG שאנשים סומכים עליה לוקחת שבועות, ורוב הזמן הזה הוא דיבוג. החדשות הטובות: השיטה תמיד זהה. לא מתחילים בשינוי הפרומפט. מתחילים במציאת **השלב** שהשתבש.' },
        { t: 'h', en: 'Debugging one bad answer', he: 'דיבוג של תשובה גרועה אחת' },
        { t: 'flow', steps: { en: ['Run Retrieve alone for the question', 'Is the answer in the chunks?', 'No → retrieval problem', 'Yes → generation problem'], he: ['מריצים Retrieve לבד על השאלה', 'האם התשובה נמצאת ב-chunks?', 'לא ← בעיית retrieval', 'כן ← בעיית generation'] }, caption: { en: 'The first question of every RAG debug session: is it retrieval or generation?', he: 'השאלה הראשונה בכל דיבוג של RAG: זה retrieval או generation?' } },
        { t: 'table', head: { en: ['If retrieval is wrong, check in this order', 'Fix'], he: ['אם ה-retrieval שגוי, בודקים בסדר הזה', 'תיקון'] }, rows: {
          en: [
            ['Is the document in the knowledge base at all? Did the last sync skip it?', 'Sync history and warnings. Fix the file or the format, sync again.'],
            ['Was it parsed correctly? Look at the chunk text.', 'Another parser for tables and scans.'],
            ['Does one chunk hold the whole answer?', 'Bigger chunks, more overlap, or hierarchical chunking (in a new data source).'],
            ['Is the right chunk just below the cut?', 'Raise the number of results and add reranking.'],
            ['Does the question use exact codes or other words than the document?', 'Hybrid search, or rewrite the query, or query decomposition.'],
            ['Do old or wrong-department documents win?', 'Metadata and filters.']
          ],
          he: [
            ['האם המסמך בכלל נמצא ב-knowledge base? האם ה-sync האחרון דילג עליו?', 'Sync history ו-warnings. מתקנים את הקובץ או הפורמט, עושים sync שוב.'],
            ['האם הוא עבר parsing נכון? מסתכלים על טקסט ה-chunk.', 'Parser אחר לטבלאות ולסריקות.'],
            ['האם chunk אחד מחזיק את כל התשובה?', 'Chunks גדולים יותר, יותר overlap, או hierarchical chunking (ב-data source חדש).'],
            ['האם ה-chunk הנכון נמצא ממש מתחת לחיתוך?', 'מעלים את מספר התוצאות ומוסיפים reranking.'],
            ['האם השאלה משתמשת בקודים מדויקים או במילים אחרות מהמסמך?', 'Hybrid search, או ניסוח מחדש של השאילתה, או query decomposition.'],
            ['האם מסמכים ישנים או של מחלקה אחרת מנצחים?', 'Metadata ו-filters.']
          ] } },
        { t: 'table', head: { en: ['If generation is wrong, check', 'Fix'], he: ['אם ה-generation שגוי, בודקים', 'תיקון'] }, rows: {
          en: [
            ['Does the prompt say "answer only from the context, otherwise say you do not know"?', 'Add the grounding rule (module 4, lesson 1).'],
            ['Are there too many chunks, so the right one is lost in noise?', 'Fewer, better chunks: rerank and keep the top few.'],
            ['Do the chunks contradict each other (old and new policy)?', 'Filter by date, or tell the model to prefer the newest source.'],
            ['Is the answer cut?', 'Check the stop reason and raise maxTokens.'],
            ['Is the model too weak for the reasoning that the question needs?', 'Try a stronger generation model.']
          ],
          he: [
            ['האם הפרומפט אומר "answer only from the context, otherwise say you do not know"?', 'מוסיפים את כלל ה-grounding (מודול 4, שיעור 1).'],
            ['האם יש יותר מדי chunks, כך שהנכון הולך לאיבוד ברעש?', 'פחות chunks וטובים יותר: rerank ולהשאיר את המעטים הראשונים.'],
            ['האם ה-chunks סותרים זה את זה (נוהל ישן וחדש)?', 'מסננים לפי תאריך, או אומרים למודל להעדיף את המקור החדש ביותר.'],
            ['האם התשובה חתוכה?', 'בודקים את ה-stop reason ומעלים maxTokens.'],
            ['האם המודל חלש מדי לחשיבה שהשאלה דורשת?', 'מנסים מודל generation חזק יותר.']
          ] } },
        { t: 'order', prompt: { en: 'A user reports a wrong answer. Put your debugging steps in order.', he: 'משתמש מדווח על תשובה שגויה. סדר את שלבי הדיבוג שלך.' },
          items: { en: ['Reproduce the question and save it in the test set', 'Run Retrieve alone and read the returned chunks', 'Decide: is the answer in the chunks or not?', 'Fix the stage that failed (ingestion/retrieval or prompt/model)', 'Run the whole test set again to see that nothing else broke'], he: ['לשחזר את השאלה ולשמור אותה בסט הבדיקות', 'להריץ Retrieve לבד ולקרוא את ה-chunks שחזרו', 'להחליט: התשובה נמצאת ב-chunks או לא?', 'לתקן את השלב שנכשל (ingestion/retrieval או פרומפט/מודל)', 'להריץ שוב את כל סט הבדיקות כדי לראות ששום דבר אחר לא נשבר'] },
          explain: { en: 'Look at the data before you change anything. And every bug becomes a test, so it cannot come back unnoticed.', he: 'מסתכלים על המידע לפני שמשנים משהו. וכל באג הופך לבדיקה, כך שהוא לא יכול לחזור בלי שישימו לב.' } },
        { t: 'h', en: 'Measuring: the metric names', he: 'מדידה: שמות המדדים' },
        { t: 'p', en: 'Fixing one answer is not enough. You need numbers over a whole test set. Bedrock has RAG evaluation jobs of two kinds, and they mirror the two stages. The evaluations module teaches how to run them; here you only need the names, because people use them in every RAG discussion.', he: 'לתקן תשובה אחת זה לא מספיק. צריך מספרים על סט בדיקות שלם. ל-Bedrock יש RAG evaluation jobs משני סוגים, והם משקפים את שני השלבים. מודול ה-evaluations מלמד איך להריץ אותם; כאן צריך רק את השמות, כי אנשים משתמשים בהם בכל דיון על RAG.' },
        { t: 'table', head: { en: ['Job type', 'Metric', 'The question it answers'], he: ['סוג ה-job', 'מדד', 'השאלה שהוא עונה עליה'] }, rows: {
          en: [
            ['Retrieve only', '**[[Context relevance]]**', 'Are the retrieved chunks relevant to the question?'],
            ['Retrieve only', '**Context coverage**', 'Do the chunks contain everything the correct answer needs? (needs ground truth)'],
            ['Retrieve and generate', '**[[Faithfulness]]**', 'Does the answer say only what the chunks support?'],
            ['Retrieve and generate', '**Correctness**, **Completeness**, **Helpfulness**, **Logical coherence**', 'Is the answer right, full, useful and consistent?'],
            ['Retrieve and generate', '**Citation precision**, **Citation coverage**', 'Do the citations point to the right chunks, and is every claim cited?'],
            ['Retrieve and generate', '**Harmfulness**, **Stereotyping**, **Refusal**', 'Responsible-AI checks on the answer.']
          ],
          he: [
            ['Retrieve only', '**[[Context relevance]]**', 'האם ה-chunks שאוחזרו רלוונטיים לשאלה?'],
            ['Retrieve only', '**Context coverage**', 'האם ה-chunks מכילים את כל מה שהתשובה הנכונה צריכה? (דורש ground truth)'],
            ['Retrieve and generate', '**[[Faithfulness]]**', 'האם התשובה אומרת רק מה שה-chunks תומכים בו?'],
            ['Retrieve and generate', '**Correctness**, **Completeness**, **Helpfulness**, **Logical coherence**', 'האם התשובה נכונה, מלאה, מועילה ועקבית?'],
            ['Retrieve and generate', '**Citation precision**, **Citation coverage**', 'האם ה-citations מצביעים על ה-chunks הנכונים, והאם כל טענה מגובה ב-citation?'],
            ['Retrieve and generate', '**Harmfulness**, **Stereotyping**, **Refusal**', 'בדיקות responsible AI על התשובה.']
          ] } },
        { t: 'note', kind: 'tip', en: 'The two metrics to remember first: **context relevance** tells you about retrieval, **faithfulness** tells you about generation. Low context relevance: fix chunks and search. High context relevance but low faithfulness: fix the prompt or the model. Guardrails also has a **contextual grounding check** that can block an ungrounded answer at run time; you will meet it in the guardrails module.', he: 'שני המדדים שצריך לזכור קודם: **context relevance** מספר על ה-retrieval, **faithfulness** מספר על ה-generation. Context relevance נמוך: מתקנים chunks וחיפוש. Context relevance גבוה אבל faithfulness נמוך: מתקנים את הפרומפט או את המודל. ל-Guardrails יש גם **contextual grounding check** שיכול לחסום תשובה לא מבוססת בזמן ריצה; תפגוש אותו במודול ה-guardrails.' },
        { t: 'h', en: 'Cost and latency levers', he: 'מנופי עלות ו-latency' },
        { t: 'table', head: { en: ['Where the money and time go', 'Levers'], he: ['לאן הולכים הכסף והזמן', 'מנופים'] }, rows: {
          en: [
            ['**Ingestion**: parsing and embedding every chunk', 'The default parser is free; model-based parsers are billed per page or per token. Semantic chunking calls a model. Incremental sync avoids paying again for unchanged files.'],
            ['**Storage**: the vector store', 'Choice of store, number of dimensions, binary embeddings, and not indexing documents that nobody needs.'],
            ['**Retrieval**: search calls, reranking, query decomposition', 'Turn on reranking and decomposition only where they raise quality. Use agentic retrieval only for complex questions.'],
            ['**Generation**: input tokens (chunks!) and output tokens', 'Fewer and smaller chunks, a smaller model for easy questions, short answers, streaming for a better feeling of speed.']
          ],
          he: [
            ['**Ingestion**: parsing ו-embedding לכל chunk', 'ה-parser ברירת המחדל חינם; parsers מבוססי מודל מחויבים לפי עמוד או לפי טוקן. Semantic chunking קורא למודל. Sync incremental חוסך תשלום חוזר על קבצים שלא השתנו.'],
            ['**אחסון**: ה-vector store', 'בחירת ה-store, מספר ה-dimensions, binary embeddings, ולא לאנדקס מסמכים שאף אחד לא צריך.'],
            ['**Retrieval**: קריאות חיפוש, reranking, query decomposition', 'מדליקים reranking ו-decomposition רק איפה שהם מעלים איכות. משתמשים ב-agentic retrieval רק לשאלות מורכבות.'],
            ['**Generation**: טוקני קלט (ה-chunks!) וטוקני פלט', 'פחות chunks וקטנים יותר, מודל קטן יותר לשאלות קלות, תשובות קצרות, streaming לתחושת מהירות טובה יותר.']
          ] } },
        { t: 'p', en: 'Pricing models to know (examples from the AWS pricing page, November 2026). A **managed** knowledge base: $5.00 per GB of raw data per month for the index, $1.00 per 1,000 Retrieve calls, and for agentic retrieval $4.00 per 1,000 calls plus the underlying Retrieve calls. Managed parsing, embedding and reranking cost $0. A **customer-managed** knowledge base has no knowledge base fee: you pay for embedding tokens, generation tokens, the parser, your vector store and the reranker.', he: 'מודלי תמחור שכדאי להכיר (דוגמאות מדף התמחור של AWS, נובמבר 2026). Knowledge base מסוג **managed**: $5.00 ל-GB של מידע גולמי לחודש על ה-index, $1.00 ל-1,000 קריאות Retrieve, וב-agentic retrieval $4.00 ל-1,000 קריאות ועוד קריאות ה-Retrieve שמתחת. Parsing, embedding ו-reranking מנוהלים עולים $0. ל-knowledge base מסוג **customer-managed** אין עמלת knowledge base: משלמים על טוקני embedding, טוקני generation, ה-parser, ה-vector store שלך וה-reranker.' },
        { t: 'quiz', q: { en: 'Each RAG request sends 20 chunks of 500 tokens to the model. Answers are good but slow and expensive. Which change usually keeps quality and cuts cost most?', he: 'כל בקשת RAG שולחת למודל 20 chunks של 500 טוקנים. התשובות טובות אבל איטיות ויקרות. איזה שינוי בדרך כלל שומר על האיכות ומקצץ הכי הרבה בעלות?' },
          options: { en: ['Raise the embedding dimensions', 'Retrieve 20, rerank, and send only the best 5 to the model', 'Switch to no chunking', 'Sync the data source more often'], he: ['להעלות את ה-dimensions של ה-embedding', 'לאחזר 20, לעשות rerank, ולשלוח למודל רק את 5 הטובים ביותר', 'לעבור ל-no chunking', 'לסנכרן את ה-data source לעיתים קרובות יותר'] },
          answer: 1, explain: { en: '20 × 500 = 10,000 input tokens per request. After reranking, the best 5 chunks are 2,500 tokens, and the model also reads less noise. A rerank call costs far less than 7,500 input tokens on a large model. No chunking would send whole files.', he: '20 × 500 = 10,000 טוקני קלט לבקשה. אחרי reranking, 5 ה-chunks הטובים הם 2,500 טוקנים, והמודל גם קורא פחות רעש. קריאת rerank עולה הרבה פחות מ-7,500 טוקני קלט במודל גדול. No chunking היה שולח קבצים שלמים.' } },
        { t: 'h', en: 'Jargon and scenarios workout', he: 'אימון ז׳רגון ותרחישים' },
        { t: 'match', prompt: { en: 'Match the term to its meaning.', he: 'התאם את המונח למשמעות שלו.' }, pairs: [
          { a: 'Reranking', b: { en: 'A second model reorders the retrieved chunks', he: 'מודל שני מסדר מחדש את ה-chunks שאוחזרו' } },
          { a: 'Hybrid search', b: { en: 'Keyword and semantic search together', he: 'Keyword ו-semantic search יחד' } },
          { a: 'Query decomposition', b: { en: 'One complex question becomes several searches', he: 'שאלה מורכבת אחת הופכת לכמה חיפושים' } },
          { a: 'Faithfulness', b: { en: 'The answer says only what the chunks support', he: 'התשובה אומרת רק מה שה-chunks תומכים בו' } },
          { a: 'Ingestion job', b: { en: 'The sync that parses, chunks, embeds and stores', he: 'ה-sync שעושה parsing, chunking, embedding ושמירה' } },
          { a: 'Citation', b: { en: 'Link from a part of the answer to its source chunk', he: 'קישור מחלק של התשובה ל-chunk המקור שלו' } }
        ] },
        { t: 'match', prompt: { en: 'Match the API to the client and the job.', he: 'התאם את ה-API ללקוח ולתפקיד.' }, pairs: [
          { a: 'start_ingestion_job', b: { en: 'bedrock-agent: sync a data source', he: 'bedrock-agent: סנכרון של data source' } },
          { a: 'retrieve', b: { en: 'bedrock-agent-runtime: chunks only, every knowledge base type', he: 'bedrock-agent-runtime: chunks בלבד, כל סוג knowledge base' } },
          { a: 'retrieve_and_generate', b: { en: 'bedrock-agent-runtime: answer with citations, not for managed', he: 'bedrock-agent-runtime: תשובה עם citations, לא ל-managed' } },
          { a: 'AgenticRetrieveStream', b: { en: 'Multi-round retrieval, managed only', he: 'אחזור בכמה סבבים, רק ל-managed' } },
          { a: 'converse', b: { en: 'bedrock-runtime: your own generation step', he: 'bedrock-runtime: שלב ה-generation משלך' } }
        ] },
        { t: 'quiz', q: { en: 'You asked for `numberOfResults: 10` and got 6 results. No error. The data source uses hierarchical chunking. What happened?', he: 'ביקשת `numberOfResults: 10` וקיבלת 6 תוצאות. בלי שגיאה. ה-data source משתמש ב-hierarchical chunking. מה קרה?' },
          options: { en: ['The knowledge base is throttled', 'The other 4 chunks were blocked by a guardrail', 'Several child chunks matched inside the same parent, and parents are returned once', 'The sync is still running'], he: ['ה-knowledge base ב-throttling', '4 ה-chunks האחרים נחסמו על ידי guardrail', 'כמה child chunks התאימו בתוך אותו parent, ו-parents מוחזרים פעם אחת', 'ה-sync עדיין רץ'] },
          answer: 2, explain: { en: 'With hierarchical chunking the search hits child chunks but returns parent chunks, so you can get fewer results than you asked for. This is documented behaviour, not a bug.', he: 'ב-hierarchical chunking החיפוש פוגע ב-child chunks אבל מחזיר parent chunks, אז אפשר לקבל פחות תוצאות ממה שביקשת. זו התנהגות מתועדת, לא באג.' } },
        { t: 'quiz', q: { en: 'A RetrieveAndGenerate bot has a guardrail that blocks personal data. A retrieved chunk contains a customer phone number. What should you know?', he: 'לבוט RetrieveAndGenerate יש guardrail שחוסם מידע אישי. Chunk שאוחזר מכיל מספר טלפון של לקוח. מה צריך לדעת?' },
          options: { en: ['The guardrail checks the input and the generated answer, not the retrieved references, so the raw chunk in the citations is not filtered', 'The guardrail removes the number from the vector store', 'The guardrail blocks the sync of that file', 'Guardrails cannot be used with knowledge bases'], he: ['ה-guardrail בודק את הקלט ואת התשובה שנוצרה, לא את ה-references שאוחזרו, אז ה-chunk הגולמי ב-citations לא מסונן', 'ה-guardrail מוחק את המספר מה-vector store', 'ה-guardrail חוסם את ה-sync של הקובץ הזה', 'אי אפשר להשתמש ב-guardrails עם knowledge bases'] },
          answer: 0, explain: { en: 'Guardrails apply to the user input and the generated answer only. If your UI shows the cited chunks, sensitive text in them is shown as it is. Clean the data before ingestion, or filter what the UI shows.', he: 'Guardrails חלים רק על קלט המשתמש ועל התשובה שנוצרה. אם הממשק שלך מציג את ה-chunks המצוטטים, טקסט רגיש בהם מוצג כמו שהוא. מנקים את המידע לפני ה-ingestion, או מסננים את מה שהממשק מציג.' } },
        { t: 'quiz', q: { en: 'On a test set, context relevance is high but faithfulness is low. Where do you work?', he: 'על סט בדיקות, context relevance גבוה אבל faithfulness נמוך. איפה עובדים?' },
          options: { en: ['On the chunking strategy', 'On the embedding model', 'On the vector store', 'On the generation prompt and model: the right chunks arrive, but the answer goes beyond them'], he: ['על אסטרטגיית ה-chunking', 'על מודל ה-embedding', 'על ה-vector store', 'על הפרומפט והמודל של ה-generation: ה-chunks הנכונים מגיעים, אבל התשובה חורגת מהם'] },
          answer: 3, explain: { en: 'Retrieval is doing its job. The model adds things that the chunks do not say. Strengthen the grounding rule, ask for quotes or citations, send fewer chunks, or try another model. Rebuilding the index would waste a week.', he: 'ה-retrieval עושה את העבודה שלו. המודל מוסיף דברים שה-chunks לא אומרים. מחזקים את כלל ה-grounding, מבקשים ציטוטים או citations, שולחים פחות chunks, או מנסים מודל אחר. לבנות מחדש את ה-index היה מבזבז שבוע.' } },
        { t: 'reveal', q: { en: 'Interview: "Design a RAG assistant for a company with 200,000 documents in Hebrew and English, with per-user permissions. What are your main decisions?"', he: 'ראיון: "תכנן עוזר RAG לחברה עם 200,000 מסמכים בעברית ובאנגלית, עם הרשאות לכל משתמש. מה ההחלטות העיקריות שלך?"' },
          a: { en: '(1) Type: I start from a managed knowledge base, because it gives connectors, hybrid search, a built-in reranker and document-level ACL filtering with `userContext.userId`. I go customer-managed only if I need a specific store or chunking strategy. (2) Language: a multilingual embedding model, verified on Hebrew, and a test set with Hebrew, English and mixed questions. (3) Chunking: start with the default, look at real chunks of Hebrew files, and adjust; test on a sample first because the strategy cannot be changed later. (4) Metadata: language, department, date and document type on every document, to filter. (5) Permissions: enforced in retrieval by user identity, never in the prompt. (6) Query: Retrieve plus my own Converse call with a strict grounding prompt and citations in the UI; agentic retrieval only for complex questions. (7) Freshness: scheduled sync and alerts on failed jobs. (8) Quality: a test set, context relevance and faithfulness tracked on every change. (9) Cost: watch tokens per request, rerank and send few chunks.', he: '(1) סוג: אני מתחיל מ-managed knowledge base, כי הוא נותן connectors, hybrid search, reranker מובנה וסינון ACL ברמת המסמך עם `userContext.userId`. אני עובר ל-customer-managed רק אם אני צריך store או אסטרטגיית chunking מסוימים. (2) שפה: מודל embedding רב-לשוני, שנבדק על עברית, וסט בדיקות עם שאלות בעברית, באנגלית ומעורבות. (3) Chunking: מתחילים עם ברירת המחדל, מסתכלים על chunks אמיתיים של קבצים בעברית, ומכווננים; בודקים קודם על מדגם כי אי אפשר לשנות את האסטרטגיה אחר כך. (4) Metadata: שפה, מחלקה, תאריך וסוג מסמך על כל מסמך, לצורך סינון. (5) הרשאות: נאכפות באחזור לפי זהות המשתמש, אף פעם לא בפרומפט. (6) שאילתה: Retrieve ועוד קריאת Converse משלי עם פרומפט grounding קשוח ו-citations בממשק; agentic retrieval רק לשאלות מורכבות. (7) עדכניות: sync מתוזמן והתראות על jobs שנכשלו. (8) איכות: סט בדיקות, מעקב אחרי context relevance ו-faithfulness בכל שינוי. (9) עלות: לעקוב אחרי טוקנים לבקשה, לעשות rerank ולשלוח מעט chunks.' } },
        { t: 'task', title: { en: 'After landing: build a real knowledge base', he: 'אחרי הנחיתה: לבנות knowledge base אמיתי' }, steps: {
          en: [
            'Put 10 to 20 of your own documents (some in Hebrew) in an S3 bucket and create a knowledge base over them. Try the managed type first.',
            'Sync, then open Sync history and check that no file was skipped.',
            'In Test knowledge base, turn off Generate responses and read the raw chunks for five real questions.',
            'Call `retrieve` from boto3 and print score, location and the first 80 characters of each chunk.',
            'Send the chunks to `converse` with a grounding prompt of your own, and compare with the console answer.',
            'Add a `.metadata.json` file to two documents, sync, and query with a filter (on a customer-managed knowledge base with an S3 data source).',
            'Write down 20 questions with the expected source document. This is the start of your RAG test set for the evaluations module.',
            'Delete the knowledge base and the vector store when you finish, so they do not keep costing money.'
          ],
          he: [
            'שים 10 עד 20 מסמכים משלך (חלקם בעברית) ב-S3 bucket וצור מעליהם knowledge base. נסה קודם את הסוג ה-managed.',
            'עשה sync, ואז פתח את Sync history ובדוק שאף קובץ לא דולג.',
            'ב-Test knowledge base, כבה את Generate responses וקרא את ה-chunks הגולמיים לחמש שאלות אמיתיות.',
            'קרא ל-`retrieve` מ-boto3 והדפס score, location ואת 80 התווים הראשונים של כל chunk.',
            'שלח את ה-chunks ל-`converse` עם פרומפט grounding משלך, והשווה לתשובה של הקונסול.',
            'הוסף קובץ `.metadata.json` לשני מסמכים, עשה sync, ותשאל עם filter (ב-customer-managed knowledge base עם S3 data source).',
            'רשום 20 שאלות עם מסמך המקור הצפוי. זו ההתחלה של סט בדיקות ה-RAG שלך למודול ה-evaluations.',
            'מחק את ה-knowledge base ואת ה-vector store כשאתה מסיים, כדי שלא ימשיכו לעלות כסף.'
          ] } }
      ]
    }
  ]
});
