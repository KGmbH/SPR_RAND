  // In this file you can specify the trial data for your experiment


const trial_info = {
    tryout: [// trial items - dienen nur der Übung
	{
	 sentence: "Die | Antworten | des | Jungen | überraschten | die | Erzieherin | im | Kindergarten.",
	 	question: "Was überraschte die Erzieherin?",
        option1: "Die Antworten",
        option2: "Die Behauptungen",
        correct_answer: "Die Antworten",
	itemname: "t1",
        participant_group: coin,
        participant_id: participantID,
        wordPos: 'same',
        underline: 'none'
    },
	{
	 sentence: "Der | Hund | der | Frauen | bellte | im | Park | sehr | laut.",
	    question: "Wie bellte der Hund?",
        option1: "häufig",
        option2: "laut",
        correct_answer: "laut",
	itemname: "t2",
        participant_group: coin,
        participant_id: participantID,
        wordPos: 'same',
        underline: 'none'
    }
	    ],
    spr: [{
// Item 1-8 von 15
	 sentence: " Die |  Mehrheit  | der | Schüler | ".concat(num.eins[coin]," | eine | Frage | in der | Vorlesung."),
	 	 question: "Wann wurden Fragen gestellt?",
        option1: "im Unterricht",
        option2: "nach dem Unterricht",
        correct_answer: "im Unterricht",
	itemname: "eins",
        participant_group: coin,
        participant_id: participantID,
        wordPos: 'same',
        underline: 'none'
    },
    	{
	 sentence: "Die | Mehrzahl | der | Studenten | ".concat(num.zwei[coin]," | ein | Problem | in der | Prüfung."),
	    question: "Wie ist die Prüfung?",
        option1: "schwer",
        option2: "leicht",
        correct_answer: "schwer",
	itemname: "zwei",
        participant_group: coin,
        participant_id: participantID,
        wordPos: 'same',
        underline: 'none'
    },
        {
	 sentence: "Der | Großteil | der | Kinder | ".concat(num.drei[coin]," | einen | Eistee | in der | Pause."),
	    question: "Was wurde gekauft?",
        option1: "Früchtetee",
        option2: "Eistee",
        correct_answer: "Eistee",
	itemname: "drei",
        participant_group: coin,
        participant_id: participantID,
        wordPos: 'same',
        underline: 'none'
    },
        {
	 sentence: "Die | Majorität | der | Politiker | ".concat(syn.vier[coin],"  | einen | Urlaub | im | Sommer."),
	    question: "Wann wurde Urlaub gemacht?",
        option1: "Im Sommer",
        option2: "In den Ferien",
        correct_answer: "Im Sommer",
	itemname: "vier",
        participant_group: coin,
        participant_id: participantID,
        wordPos: 'same',
        underline: 'none'
    },
         {
	 sentence: "Die | Häuser | der | Männer | standen  | in der | Dorfmitte | beim | Rathaus.",
	    question: "Wo steht das Rathaus?",
        option1: "In der Dorfmitte",
        option2: "Beim Einkaufszentrum",
        correct_answer: "In der Dorfmitte",
	itemname: "F1",
        participant_group: coin,
        participant_id: participantID,
        wordPos: 'same',
        underline: 'none'
    },
         {
	 sentence: "Die | Blätter | des | Baums | fielen  | im | Herbst | auf den | Boden.",
	    question: "Wo fielen die Blätter hin?",
        option1: "Auf den Boden",
        option2: "Auf die Straße",
        correct_answer: "Auf den Boden",
	itemname: "F2",
        participant_group: coin,
        participant_id: participantID,
        wordPos: 'same',
        underline: 'none'
    },
          {
	 sentence: "Die | Schlüssel | des | Jugendlichen | stürzten | in | einen | See | hinein.",
	    question: "Wohin stürtzten die Schlüssel?",
        option1: "Ins Meer",
        option2: "In einen See",
        correct_answer: "In einen See",
	itemname: "F3",
        participant_group: coin,
        participant_id: participantID,
        wordPos: 'same',
        underline: 'none'
    },
        {
	 sentence: "Die | Motivation | der | Arbeiter | sank | mit | jedem | Tag | weiter.",
	    question: "Wie war die Motivation?",
        option1: "Steigend",
        option2: "Sinkend",
        correct_answer: "Sinkend",
	itemname: "F4",
        participant_group: coin,
        participant_id: participantID,
        wordPos: 'same',
        underline: 'none'
    },
         {
	 sentence: "Die | Beschwerden | der | Bewohner | nervten | eine | Mitarbeiterin | jedes | Wochenende.",
	    question: "Welches Geschlecht hat der Mitarbeiter?",
        option1: "Männlich",
        option2: "Weiblich",
        correct_answer: "Weiblich",
	itemname: "F5",
        participant_group: coin,
        participant_id: participantID,
        wordPos: 'same',
        underline: 'none'
    },
          {
	 sentence: "Der | Blick | der | Verkäuferin | verfolgte | einen | Kunden | im | Schuhladen.",
	    question: "Was für ein Laden?",
        option1: "Kleidungsladen",
        option2: "Schuhladen",
        correct_answer: "Schuhladen",
	itemname: "F6",
        participant_group: coin,
        participant_id: participantID,
        wordPos: 'same',
        underline: 'none'
    },
         {
	 sentence: "Der | Lärm | der | Baustelle | störte | eine | Präsentation | im | Betrieb.",
	    question: "Woher kam der Lärm?",
        option1: "Vom Verkehr",
        option2: "Von der Baustelle",
        correct_answer: "Von der Baustelle",
	itemname: "F7",
        participant_group: coin,
        participant_id: participantID,
        wordPos: 'same',
        underline: 'none'
    },
         {
	 sentence: "Die | Ansichten | der | Priester | besorgten | eine | Familie | im | Dorf.",
	    question: "Wer besorgte die Familie?",
        option1: "Die Priester",
        option2: "Die Demonstranten",
        correct_answer: "Die Priester",
	itemname: "F8",
        participant_group: coin,
        participant_id: participantID,
        wordPos: 'same',
        underline: 'none'
    },

	]
};



 
       
