# Strategia commerciale e dogane

Mini-gioco per **IT'S YOUR FUTURE** (ITS La Spezia — Servizi alle imprese).

Repo a sé: Vite vanilla, nessuna dipendenza di rete a runtime. La cartella `dist/` si copia poi nella sottocartella Jekyll del sito.

## Avvio

```powershell
npm install
npm run dev
```

Apri l’indirizzo che stampa Vite (di solito http://localhost:5173/).

## Build per il sito

```powershell
npm run build
```

`vite.config.js` usa `base: "./"`: i percorsi in `dist/` sono relativi, pronti per una sottocartella Jekyll (stesso schema di lanterna, cyber-shield e campagna-digitale-smart).

## Gioco

- 6 stage sequenziali, una risposta alla volta; se sbagli puoi riprovare.
- A fine partita: da 1 a 5 stelle in base agli stage con almeno un errore (0 → 5, 1 → 4, 2 → 3, 3–4 → 2, 5–6 → 1). Calcolo in `src/stelle.js`, soglie in `SOGLIE_STELLE` (`src/main.js`) o in `gameConfig.punteggio.soglie`.
- Messaggio positivo se al massimo **1** stage ha avuto un errore (`MAX_MISTAKES_FOR_SUCCESS`), altrimenti messaggio «da rivedere».
- Niente timer, niente `localStorage`.
