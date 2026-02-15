// letter_m.js
const LETTER_M_WORD_LIST = ["man","summer","room","mnemonic"];
let LETTER_M_WORDS = [];
try { if (typeof WORDS !== "undefined" && Array.isArray(WORDS)) { LETTER_M_WORDS = WORDS.filter(w => w && w.word && LETTER_M_WORD_LIST.includes(w.word.toLowerCase())); } } catch (e) { console.warn("letter_m.js: could not filter WORDS", e); }

function playWordSoundM(word){ const w = LETTER_M_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase()); if (w) playSound(w.soundFile); }
function wordLinkM(word){ return `<span class="letter-word" onclick="playWordSoundM('${word}')" oncontextmenu="openWordM('${word}'); return false;">${word}</span>`; }

function LETTER_NOTES_M(letter) {
  return `
    <h3>M = Voiced Bilabial Nasal /m/</h3>
    <p><b>Phonics rule:</b> M usually makes the /m/ sound</p>
    <p><b>Examples:</b> ${wordLinkM("man")}, ${wordLinkM("summer")}, ${wordLinkM("room")}</p>

    <h3>Silent M (extremely rare / sight words)</h3>
    <p><b>Examples:</b> ${wordLinkM("mnemonic")}</p>
  `;
}

function openWordM(word) {
  const w = LETTER_M_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase());
  if (!w) return alert("Word not found: " + word);
  openInfo(typeof getWordInfoHtml === "function" ? getWordInfoHtml(w) : "<h2>" + w.word + "</h2><button onclick=\"playSound('" + w.soundFile + "')\">🔊</button><p>" + (state.phon==="IPA"?w.ipa:w.ce) + "</p><p>" + w.jpWord + "</p><p>" + (state.lang==="EN"?w.enDef:w.jpDef) + "</p>");
}
