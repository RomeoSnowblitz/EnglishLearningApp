// letter_q.js
const LETTER_Q_WORD_LIST = ["queen","quick","quiet","unique","antique","critique"];
let LETTER_Q_WORDS = [];
try { if (typeof WORDS !== "undefined" && Array.isArray(WORDS)) { LETTER_Q_WORDS = WORDS.filter(w => w && w.word && LETTER_Q_WORD_LIST.includes(w.word.toLowerCase())); } } catch (e) { console.warn("letter_q.js: could not filter WORDS", e); }

function playWordSoundQ(word){ const w = LETTER_Q_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase()); if (w) playSound(w.soundFile); }
function wordLinkQ(word){ return `<span class="letter-word" onclick="playWordSoundQ('${word}')" oncontextmenu="openWordQ('${word}'); return false;">${word}</span>`; }

function LETTER_NOTES_Q(letter) {
  return `
    <h3>Q = QU rule /kw/</h3>
    <p><b>Phonics rule:</b> Q is almost always followed by U and together they make the /kw/ sound</p>
    <p><b>Examples:</b> ${wordLinkQ("queen")}, ${wordLinkQ("quick")}, ${wordLinkQ("quiet")}</p>

    <h3>Q = QU reduction /k/ (French origin)</h3>
    <p><b>Phonics rule:</b> In some words, QU produces only the /k/ sound and the U is silent</p>
    <p><b>Examples:</b> ${wordLinkQ("unique")}, ${wordLinkQ("antique")}, ${wordLinkQ("critique")}</p>
  `;
}

function openWordQ(word) {
  const w = LETTER_Q_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase());
  if (!w) return alert("Word not found: " + word);
  openInfo(typeof getWordInfoHtml === "function" ? getWordInfoHtml(w) : "<h2>" + w.word + "</h2><button onclick=\"playSound('" + w.soundFile + "')\">🔊</button><p>" + (state.phon==="IPA"?w.ipa:w.ce) + "</p><p>" + w.jpWord + "</p><p>" + (state.lang==="EN"?w.enDef:w.jpDef) + "</p>");
}
