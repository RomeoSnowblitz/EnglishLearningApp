// letter_a.js

// List of words to include in Letter A notes (case-insensitive)
const LETTER_A_WORD_LIST = [
  "cat","map","apple","cake","late","game",
  "rain","day","break","prey",
  "car","father","palm","carry","marry",
  "about","sofa","ago",
  "all","walk","talk",
  "any","many","said",
  "author","cause","pause",
  "saw","draw","lawn",
  "train","paint",
  "village","bread","head","realm",
  "pal","shall"
];

// Filter WORDS safely so script always defines LETTER_NOTES_A even if WORDS is missing or malformed
let LETTER_A_WORDS = [];
try {
  if (typeof WORDS !== "undefined" && Array.isArray(WORDS)) {
    LETTER_A_WORDS = WORDS.filter(w => w && w.word && LETTER_A_WORD_LIST.includes(w.word.toLowerCase()));
  }
} catch (e) {
  console.warn("letter_a.js: could not filter WORDS", e);
}

// Left-click: play sound. Right-click: open word info.
function playWordSound(word) {
  const w = LETTER_A_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase());
  if (w) playSound(w.soundFile);
}
// Helper: create clickable blue text for each word
function wordLink(word) {
  return `<span class="letter-word" onclick="playWordSound('${word}')" oncontextmenu="openWord('${word}'); return false;">${word}</span>`;
}

// Letter A notes
function LETTER_NOTES_A(letter) {
  return `
    <h3>Short A /æ/</h3>
    <p><b>Phonics rule:</b> A in a closed syllable usually makes /æ/</p>
    <p><b>Examples:</b> ${wordLink("cat")}, ${wordLink("map")}, ${wordLink("apple")}</p>

    <h3>Long A /eɪ/</h3>
    <p><b>Examples:</b> ${wordLink("cake")}, ${wordLink("late")}, ${wordLink("game")}, ${wordLink("rain")}, ${wordLink("day")}, ${wordLink("break")}, ${wordLink("prey")}</p>

    <h3>Broad A /ɑː/ or /ɒ/</h3>
    <p><b>Examples:</b> ${wordLink("car")}, ${wordLink("father")}, ${wordLink("palm")}</p>
    <p><b>Exceptions:</b> ${wordLink("carry")}, ${wordLink("marry")}</p>

    <h3>Unstressed /ə/</h3>
    <p><b>Examples:</b> ${wordLink("about")}, ${wordLink("sofa")}, ${wordLink("ago")}</p>

    <h3>AW /ɔː/</h3>
    <p><b>Examples:</b> ${wordLink("all")}, ${wordLink("walk")}, ${wordLink("talk")}</p>
    <p><b>Exceptions:</b> ${wordLink("pal")}, ${wordLink("shall")}</p>

    <h3>Short E /e/</h3>
    <p><b>Examples:</b> ${wordLink("any")}, ${wordLink("many")}, ${wordLink("said")}</p>

    <h3>Diphthongs</h3>
    <p>${wordLink("author")}, ${wordLink("cause")}, ${wordLink("pause")}, ${wordLink("saw")}, ${wordLink("draw")}, ${wordLink("lawn")}, ${wordLink("train")}, ${wordLink("paint")}</p>

    <h3>Reduced /ɪ/</h3>
    <p>${wordLink("village")}</p>

    <h3>Silent A</h3>
    <p>${wordLink("bread")}, ${wordLink("head")}, ${wordLink("realm")}</p>
  `;
}

// Open word with full info (same as Dictionary/Reading: definition + examples)
function openWord(word) {
  const w = LETTER_A_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase());
  if (!w) return alert("Word not found: " + word);
  openInfo(typeof getWordInfoHtml === "function" ? getWordInfoHtml(w) : "<h2>" + w.word + "</h2><button onclick=\"playSound('" + w.soundFile + "')\">🔊</button><p>" + (state.phon==="IPA"?w.ipa:w.ce) + "</p><p>" + w.jpWord + "</p><p>" + (state.lang==="EN"?w.enDef:w.jpDef) + "</p>");
}
