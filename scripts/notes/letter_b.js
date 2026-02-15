// letter_b.js

const LETTER_B_WORD_LIST = [
  "bat","ribbon","table",
  "lamb","comb","thumb",
  "debt","doubt","subtle",
  "rabbit","bubble"
];

let LETTER_B_WORDS = [];
try {
  if (typeof WORDS !== "undefined" && Array.isArray(WORDS)) {
    LETTER_B_WORDS = WORDS.filter(w => w && w.word && LETTER_B_WORD_LIST.includes(w.word.toLowerCase()));
  }
} catch (e) { console.warn("letter_b.js: could not filter WORDS", e); }

// Left-click: play sound. Right-click: open word info.
function playWordSoundB(word) {
  const w = LETTER_B_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase());
  if (w) playSound(w.soundFile);
}
// Helper: create clickable blue text for each word
function wordLinkB(word) {
  return `<span class="letter-word" onclick="playWordSoundB('${word}')" oncontextmenu="openWordB('${word}'); return false;">${word}</span>`;
}

// Letter B notes
function LETTER_NOTES_B(letter) {
  return `
    <h3>B = /b/</h3>
    <p><b>Phonics rule:</b> B usually makes the voiced /b/ sound when it appears at the beginning or within a syllable</p>
    <p><b>Examples:</b> ${wordLinkB("bat")}, ${wordLinkB("ribbon")}, ${wordLinkB("table")}</p>

    <h3>Silent B after M</h3>
    <p><b>Phonics rule:</b> When B follows M at the end of a word, the B is silent</p>
    <p><b>Examples:</b> ${wordLinkB("lamb")}, ${wordLinkB("comb")}, ${wordLinkB("thumb")}</p>

    <h3>Silent B before T</h3>
    <p><b>Phonics rule:</b> B is silent when it appears before T in the same syllable</p>
    <p><b>Examples:</b> ${wordLinkB("debt")}, ${wordLinkB("doubt")}, ${wordLinkB("subtle")}</p>

    <h3>B in Double Consonants (BB)</h3>
    <p><b>Phonics rule:</b> First B is silent</p>
    <p><b>Examples:</b> ${wordLinkB("rabbit")}, ${wordLinkB("bubble")}, ${wordLinkB("ribbon")}</p>
  `;
}

// Open word with full info (same as Dictionary/Reading: definition + examples)
function openWordB(word) {
  const w = LETTER_B_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase());
  if (!w) return alert("Word not found: " + word);
  openInfo(typeof getWordInfoHtml === "function" ? getWordInfoHtml(w) : "<h2>" + w.word + "</h2><button onclick=\"playSound('" + w.soundFile + "')\">🔊</button><p>" + (state.phon==="IPA"?w.ipa:w.ce) + "</p><p>" + w.jpWord + "</p><p>" + (state.lang==="EN"?w.enDef:w.jpDef) + "</p>");
}
