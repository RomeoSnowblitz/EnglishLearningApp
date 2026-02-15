// letter_t.js
const LETTER_T_WORD_LIST = ["top","take","cat","water","better","city","nation","motion","relation","nature","picture","future","castle","listen","think","this","mother","walked","jumped","laughed"];
let LETTER_T_WORDS = [];
try { if (typeof WORDS !== "undefined" && Array.isArray(WORDS)) { LETTER_T_WORDS = WORDS.filter(w => w && w.word && LETTER_T_WORD_LIST.includes(w.word.toLowerCase())); } } catch (e) { console.warn("letter_t.js: could not filter WORDS", e); }

function playWordSoundT(word){ const w = LETTER_T_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase()); if (w) playSound(w.soundFile); }
function wordLinkT(word){ return `<span class="letter-word" onclick="playWordSoundT('${word}')" oncontextmenu="openWordT('${word}'); return false;">${word}</span>`; }

function LETTER_NOTES_T(letter) {
  return `
    <h3>T = Voiceless Alveolar Stop /t/</h3>
    <p><b>Phonics rule:</b> T usually makes the /t/ sound</p>
    <p><b>Examples:</b> ${wordLinkT("top")}, ${wordLinkT("take")}, ${wordLinkT("cat")}</p>

    <h3>T = Flapped /ɾ/ ("soft D")</h3>
    <p><b>Phonics rule:</b> T becomes a flap between two vowels when the second vowel is unstressed</p>
    <p><b>Examples:</b> ${wordLinkT("water")}, ${wordLinkT("better")}, ${wordLinkT("city")}</p>

    <h3>T = /ʃ/ ("sh" sound)</h3>
    <p><b>Phonics rule:</b> T followed by ion often produces /ʃ/</p>
    <p><b>Examples:</b> ${wordLinkT("nation")}, ${wordLinkT("motion")}, ${wordLinkT("relation")}</p>

    <h3>T = /tʃ/ ("ch" sound)</h3>
    <p><b>Phonics rule:</b> T followed by u or i may produce /tʃ/</p>
    <p><b>Examples:</b> ${wordLinkT("nature")}, ${wordLinkT("picture")}, ${wordLinkT("future")}</p>

    <h3>ST = /s/ (T is silent)</h3>
    <p><b>Examples:</b> ${wordLinkT("castle")}, ${wordLinkT("listen")}</p>

    <h3>T in TH = /θ/ or /ð/</h3>
    <p><b>Phonics rule:</b> TH forms a digraph with its own sounds</p>
    <p><b>Examples:</b> ${wordLinkT("think")} (/θ/), ${wordLinkT("this")} (/ð/), ${wordLinkT("mother")} (/ð/)</p>

    <h3>T in -ED endings (past tense)</h3>
    <p><b>Phonics rule:</b> -ed is pronounced /t/ after voiceless consonants (except T)</p>
    <p><b>Examples:</b> ${wordLinkT("walked")}, ${wordLinkT("jumped")}, ${wordLinkT("laughed")}</p>
  `;
}

function openWordT(word) {
  const w = LETTER_T_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase());
  if (!w) return alert("Word not found: " + word);
  openInfo(typeof getWordInfoHtml === "function" ? getWordInfoHtml(w) : "<h2>" + w.word + "</h2><button onclick=\"playSound('" + w.soundFile + "')\">🔊</button><p>" + (state.phon==="IPA"?w.ipa:w.ce) + "</p><p>" + w.jpWord + "</p><p>" + (state.lang==="EN"?w.enDef:w.jpDef) + "</p>");
}
