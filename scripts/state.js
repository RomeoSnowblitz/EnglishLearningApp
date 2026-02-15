var stateAudio = new Audio();
// Log when audio fails so we can see the real cause (open DevTools > Console)
stateAudio.addEventListener("error", function () {
  var err = stateAudio.error;
  console.error("[Audio] Failed to play. src:", stateAudio.src, "code:", err ? err.code : "-", "message:", err ? err.message : "");
  if (window.location.protocol === "file:" && typeof showAudioBlockedHint === "function") showAudioBlockedHint();
});

const state={
  lang:"EN", phon:"IPA",
  practiceFrom:null, practiceMode:null,
  practice:{queue:[],current:null},
  autoReading:false, autoIndex:0,
  colorMode:false,
  audio: stateAudio,
  cefrFilter:new Set(["A1","A2","B1","B2","C1","Unlisted","Undefined"]),
  readingCefrFilter:new Set(["A1","A2","B1","B2","C1"]),
  fullDictOnlyMissingAudio:false,
  currentStoryIndex:null
};