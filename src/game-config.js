// Strategia commerciale e dogane
// ITS La Spezia — Servizi alle imprese
// Corso: Strategia commerciale — Marketing logistico e pratiche doganali
// Obiettivo didattico: mostrare come il tecnico superiore collega vendita,
// logistica, magazzino digitalizzato e dogane in un'unica filiera.
export const gameConfig = {
  id: "strategia-commerciale",
  title: "Strategia commerciale e dogane",
  subtitle: "Marketing logistico e pratiche doganali",
  intro: {
    context:
      "Siete nel team commerciale-logistico di una PMI ligure. Un cliente estero ha appena accettato l'ordine: ora bisogna chiudere la filiera, dal piano di vendita alla dogana, prima che la merce si fermi al confine.",
  },
  stages: [
    {
      id: 1,
      title: "Piano commerciale",
      situation:
        "L'ordine è appena arrivato, ma prima di muovere qualsiasi cosa serve un piano di vendita solido per il mercato estero.",
      question: "Da dove si parte per vendere all'estero?",
      options: [
        {
          id: "a",
          text: "Analizzare mercato, target, concorrenza e obiettivi di vendita",
          correct: true,
        },
        {
          id: "b",
          text: "Prenotare subito un camion per la spedizione",
          correct: false,
        },
        {
          id: "c",
          text: "Aspettare che sia il cliente a indicare come organizzarsi",
          correct: false,
        },
      ],
      feedback: {
        correct:
          "Esatto: la strategia commerciale viene prima del mezzo di trasporto. Solo capendo mercato e obiettivi si può poi scegliere la logistica giusta.",
        incorrect:
          "Non ancora: la strategia commerciale viene prima del mezzo di trasporto. Serve prima analizzare mercato, target, concorrenza e obiettivi di vendita.",
      },
    },
    {
      id: 2,
      title: "Documenti di trasporto",
      situation: "Il camion è pronto in piazzale, ma manca la carta giusta per farlo partire.",
      question: "Cosa serve prima di far muovere la merce?",
      options: [
        {
          id: "a",
          text: "Preparare i documenti di trasporto del ciclo logistico",
          correct: true,
        },
        {
          id: "b",
          text: "Far partire il camion e regolarizzare i documenti dopo",
          correct: false,
        },
        {
          id: "c",
          text: "Chiedere al cliente estero di occuparsene lui",
          correct: false,
        },
      ],
      feedback: {
        correct:
          "Corretto: senza documenti la merce non si muove. Il ciclo logistico parte sempre dalla documentazione di trasporto.",
        incorrect:
          "Attenzione: senza documenti la merce non si muove. Vanno preparati prima i documenti del ciclo logistico.",
      },
    },
    {
      id: 3,
      title: "Modo di trasporto",
      situation:
        "La merce deve arrivare dall'Italia al cliente estero: bisogna bilanciare tempi, costi e rischi.",
      question: "Come si sceglie il modo di trasporto giusto?",
      options: [
        {
          id: "a",
          text: "Scegliere e combinare i modi di trasporto in base a tempi, costi e rischi",
          correct: true,
        },
        {
          id: "b",
          text: "Usare sempre il trasporto più veloce disponibile",
          correct: false,
        },
        {
          id: "c",
          text: "Usare sempre il trasporto più economico disponibile",
          correct: false,
        },
      ],
      feedback: {
        correct:
          "Esatto: il trasporto intermodale coordina più mezzi (nave, gomma, ferro) per ottimizzare tempi, costi e rischi insieme.",
        incorrect:
          "Non è la scelta migliore: bisogna combinare i modi di trasporto valutando insieme tempi, costi e rischi, non un solo fattore.",
      },
    },
    {
      id: 4,
      title: "Pratica doganale",
      situation: "La spedizione sta per attraversare una frontiera extra-UE.",
      question: "Cosa bisogna preparare per il passaggio in dogana?",
      options: [
        {
          id: "a",
          text: "Classificazione, origine, documenti e dichiarazione doganale",
          correct: true,
        },
        {
          id: "b",
          text: "Nulla, ci pensa direttamente lo spedizioniere senza indicazioni",
          correct: false,
        },
        {
          id: "c",
          text: "Solo la fattura commerciale, il resto non serve",
          correct: false,
        },
      ],
      feedback: {
        correct:
          "Corretto: le pratiche doganali sono parte del mestiere, non un dettaglio. Classificazione, origine, documenti e dichiarazione vanno preparati insieme.",
        incorrect:
          "Rischioso: le pratiche doganali sono parte del mestiere, non un dettaglio. Servono classificazione, origine, documenti e dichiarazione doganale.",
      },
    },
    {
      id: 5,
      title: "Magazzino e tracking",
      situation: "Il cliente estero scrive: 'dov'è il mio lotto adesso?'",
      question: "Come si risponde a una richiesta di tracciabilità?",
      options: [
        {
          id: "a",
          text: "Usare magazzino digitalizzato, tracking o TMS/WMS",
          correct: true,
        },
        {
          id: "b",
          text: "Chiamare il corriere e chiedere a voce ogni volta",
          correct: false,
        },
        {
          id: "c",
          text: "Rispondere che l'informazione non è disponibile",
          correct: false,
        },
      ],
      feedback: {
        correct:
          "Esatto: la logistica digitale (magazzino digitalizzato, tracking, TMS/WMS) rende visibili scorte e consegne in tempo reale.",
        incorrect:
          "Non basta: senza magazzino digitalizzato, tracking o TMS/WMS non si può dare visibilità reale su scorte e consegne.",
      },
    },
    {
      id: 6,
      title: "Scorte e consegne",
      situation: "Gli ordini vanno bene, ma il magazzino è in tilt e le consegne slittano.",
      question: "Cosa manca per far reggere la filiera?",
      options: [
        {
          id: "a",
          text: "Pianificare assortimenti, scorte e finestre di consegna",
          correct: true,
        },
        {
          id: "b",
          text: "Accettare tutti gli ordini e gestire i problemi dopo",
          correct: false,
        },
        {
          id: "c",
          text: "Ridurre gli ordini finché il magazzino non si stabilizza da solo",
          correct: false,
        },
      ],
      feedback: {
        correct:
          "Corretto: vendita e logistica si tengono insieme. Pianificare assortimenti, scorte e finestre di consegna evita il collasso del magazzino.",
        incorrect:
          "Non regge: vendita e logistica si tengono insieme. Serve pianificare assortimenti, scorte e finestre di consegna.",
      },
    },
  ],
  outcomes: {
    positive: {
      title: "Filiera chiusa",
      message:
        "Filiera chiusa: vendita, trasporto e documenti sono allineati. La merce arriva a destinazione senza intoppi.",
    },
    negative: {
      title: "Spedizione da rivedere",
      message:
        "Spedizione da rivedere: mancano pezzi su mercato, documenti o tracking. Rivedete i passaggi della filiera prima di riprovare.",
    },
  },
};
