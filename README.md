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
- Esito positivo se al massimo **1** stage ha avuto un tentativo errato.
- Esito negativo da **2** errori in su.
- Il codice locker compare solo se `lockerCode` non è più il placeholder `XXXX`.
- Niente timer, niente `localStorage`.

## Note

- `lockerCode` in `src/game-config.js` è ancora **XXXX**: da allineare al registro locker (lettera **M** + 4 cifre, non riusare codici già assegnati).
- La soglia errori (`MAX_MISTAKES_FOR_SUCCESS` in `src/main.js`) è un’assunzione da confermare.
