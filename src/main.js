import "./style.css";
import { gameConfig } from "./game-config.js";

/**
 * Quanti stage con almeno un errore si possono “perdonare”
 * per mostrare esito positivo e il codice locker.
 * Confermare con Davide: 1 = al massimo un stage sbagliato.
 */
const MAX_MISTAKES_FOR_SUCCESS = 1;

const app = document.getElementById("app");

const state = {
  screen: "intro",
  stageIndex: 0,
  /** Indici degli stage in cui c’è stato almeno un tentativo errato. */
  stagesWithMistake: new Set(),
  solved: false,
  optionOrder: [],
};

function shuffleIds(ids) {
  const copy = ids.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function mistakeCount() {
  return state.stagesWithMistake.size;
}

function isPositiveOutcome() {
  return mistakeCount() <= MAX_MISTAKES_FOR_SUCCESS;
}

function hasRealLocker() {
  const code = String(gameConfig.lockerCode || "").trim();
  return code !== "" && code !== "XXXX";
}

function currentStage() {
  return gameConfig.stages[state.stageIndex];
}

function resetGame() {
  state.screen = "intro";
  state.stageIndex = 0;
  state.stagesWithMistake = new Set();
  state.solved = false;
  state.optionOrder = [];
}

function startGame() {
  state.screen = "stage";
  state.stageIndex = 0;
  state.stagesWithMistake = new Set();
  state.solved = false;
  prepareStage();
}

function prepareStage() {
  const stage = currentStage();
  state.solved = false;
  state.optionOrder = shuffleIds(stage.options.map((o) => o.id));
}

function goNext() {
  if (state.stageIndex >= gameConfig.stages.length - 1) {
    state.screen = "outcome";
  } else {
    state.stageIndex += 1;
    prepareStage();
  }
}

function el(tag, attrs, ...children) {
  const node = document.createElement(tag);
  if (attrs) {
    Object.entries(attrs).forEach(([key, value]) => {
      if (value == null || value === false) return;
      if (key === "class") node.className = value;
      else if (key === "html") node.innerHTML = value;
      else if (key.startsWith("on") && typeof value === "function") {
        node.addEventListener(key.slice(2).toLowerCase(), value);
      } else if (key === "disabled") node.disabled = Boolean(value);
      else node.setAttribute(key, value);
    });
  }
  children.flat().forEach((child) => {
    if (child == null || child === false) return;
    node.append(typeof child === "string" ? document.createTextNode(child) : child);
  });
  return node;
}

function renderIntro() {
  return el(
    "main",
    { class: "panel panel--intro" },
    el("p", { class: "kicker" }, gameConfig.subtitle),
    el("h1", null, gameConfig.title),
    el("p", { class: "context" }, gameConfig.intro.context),
    el("button", { class: "btn btn--primary", type: "button", onClick: () => { startGame(); paint(); } }, "Chiudi la filiera"),
  );
}

function renderStage() {
  const stage = currentStage();
  const total = gameConfig.stages.length;
  const n = state.stageIndex + 1;
  const byId = Object.fromEntries(stage.options.map((o) => [o.id, o]));

  const feedback = state.solved
    ? el("p", { class: "feedback feedback--ok", role: "status" }, stage.feedback.correct)
    : state.stagesWithMistake.has(state.stageIndex) && !state.solved
      ? el("p", { class: "feedback feedback--bad", role: "status" }, stage.feedback.incorrect)
      : null;

  const options = el(
    "div",
    { class: "options", role: "group", "aria-label": "Opzioni" },
    ...state.optionOrder.map((id) => {
      const opt = byId[id];
      const classes = ["opt"];
      if (state.solved && opt.correct) classes.push("opt--ok");
      return el(
        "button",
        {
          class: classes.join(" "),
          type: "button",
          disabled: state.solved,
          onClick: () => onPick(opt),
        },
        opt.text,
      );
    }),
  );

  const nextLabel = n >= total ? "Vedi l’esito" : "Avanti";

  return el(
    "main",
    { class: "panel panel--stage" },
    el(
      "header",
      { class: "hud" },
      el("p", { class: "kicker" }, `${gameConfig.title} · ${gameConfig.subtitle}`),
      el("p", { class: "hud__step" }, `Tappa ${n} / ${total}`),
    ),
    el("div", { class: "lights", "aria-hidden": "true" },
      ...gameConfig.stages.map((_, i) =>
        el("span", {
          class: `light${i < state.stageIndex ? " light--done" : ""}${i === state.stageIndex ? " light--now" : ""}`,
        }),
      ),
    ),
    el("h1", null, stage.title),
    el("p", { class: "situation" }, stage.situation),
    el("p", { class: "question" }, stage.question),
    options,
    feedback,
    state.solved
      ? el("button", { class: "btn btn--primary", type: "button", onClick: () => { goNext(); paint(); } }, nextLabel)
      : null,
  );
}

function onPick(opt) {
  if (state.solved) return;
  if (opt.correct) {
    state.solved = true;
  } else {
    state.stagesWithMistake.add(state.stageIndex);
  }
  paint();
}

function renderOutcome() {
  const ok = isPositiveOutcome();
  const outcome = ok ? gameConfig.outcomes.positive : gameConfig.outcomes.negative;
  const showLocker = ok && hasRealLocker();

  return el(
    "main",
    { class: `panel panel--outcome${ok ? " panel--win" : " panel--fail"}` },
    el("p", { class: "kicker" }, ok ? "Filiera · chiusa" : "Filiera · da rivedere"),
    el("h1", null, outcome.title),
    el("p", { class: "context" }, outcome.message),
    showLocker
      ? el(
          "div",
          { class: "locker", "aria-label": `Codice locker ${gameConfig.lockerCode}` },
          el("p", { class: "locker__label" }, "Codice locker"),
          el("p", { class: "locker__code" }, gameConfig.lockerCode),
        )
      : null,
    el("button", { class: "btn btn--ghost", type: "button", onClick: () => { resetGame(); paint(); } }, "Ricomincia"),
  );
}

function paint() {
  app.replaceChildren(
    state.screen === "intro"
      ? renderIntro()
      : state.screen === "outcome"
        ? renderOutcome()
        : renderStage(),
  );
}

paint();
