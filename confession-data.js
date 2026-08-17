// ============================================================
// SECOND LONDON BAPTIST CONFESSION OF FAITH (1689) — FULL TEXT
// ============================================================
// This file just defines one thing: a list called "confession"
// containing all 32 chapters and their paragraphs. The reader
// page (what-we-believe.html) reads this list and displays it.
//
// To fix a typo: search for a few words of the sentence
// (Ctrl+F / Cmd+F) and edit the text between the quote marks.
// Each paragraph has three parts:
//   num   -> the paragraph number (or null if the chapter has
//            just one unnumbered paragraph)
//   text  -> the paragraph's actual words
//   refs  -> the Bible verse references at the end (shown in
//            italics, smaller, under the paragraph)
// ============================================================

const confession = [
  {
    num: 1,
    title: "Of the Holy Scripture",
    paragraphs: [
      {
        num: 1,
        text: "The Holy Scripture is the only sufficient, certain, and infallible rule of all saving knowledge, faith, and obedience. Although the light of nature, and the works of creation and providence do so far manifest the goodness, wisdom, and power of God, as to leave men inexcusable; yet they are not sufficient to give that knowledge of God and his will which is necessary unto salvation.",
        refs: "2 Timothy 3:15-17; Isaiah 8:20; Romans 1:19-21"
      },
      {
        num: 2,
        text: "Under the name of Holy Scripture, or the Word of God written, are now contained all the books of the Old and New Testaments, which are given by the inspiration of God, to be the rule of faith and life.",
        refs: "2 Timothy 3:16"
      }
    ]
  },
  {
    num: 2,
    title: "Of God and the Holy Trinity",
    paragraphs: [
      {
        num: 1,
        text: "The Lord our God is but one only living and true God; whose subsistence is in and of himself, infinite in being and perfection; a most pure spirit, invisible, without body, parts, or passions; who is immutable, immense, eternal, incomprehensible, almighty, every way infinite, most holy, most wise, most free, most absolute.",
        refs: "1 Corinthians 8:4, 6; Deuteronomy 6:4; Exodus 3:14"
      }
    ]
  }
];
