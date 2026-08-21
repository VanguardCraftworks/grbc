GRACE REFORMED BAPTIST CHURCH — WEBSITE FILES
================================================
A guide for anyone updating this website. You do not need to
know how to code. If you can open a file, use Find, and save a
file, you can make most changes yourself.


WHAT THIS WEBSITE IS
--------------------
This website is a small number of plain files — no WordPress, no
login, no dashboard to sign into. Each page you see on the
website is one file on your computer:

  index.html            The homepage
  about.html             The "About" page
  sermons.html          The "Sermons" page
  what-we-believe.html  The "What We Believe" page
  confession-data.js    The full text of the church's confession
                         (this one is a bit different — see its
                         own section below)
  Pastor.jpg             The pastor's photo

To change anything on the site, you open the right file, make
your change, save it, and upload that file back to wherever the
website lives online, replacing the old version.


HOW TO MAKE A SIMPLE TEXT CHANGE
---------------------------------
1. Open the file (for example, index.html) in any plain text
   editor. Notepad (Windows) and TextEdit (Mac) both work. A free
   program called VS Code also works well if you'd like something
   a little nicer to look at.

2. Press Ctrl+F (Windows) or Cmd+F (Mac) to open a search box.
   Type a few words of the text you want to change — for example,
   part of a service time or an old phone number.

3. Type your new text in place of the old text. Be careful to
   leave everything else on that line exactly as it is — the
   symbols around your words (things like < and > and ") need to
   stay exactly where they are.

4. Save the file.

5. Upload the saved file to the website host, replacing the old
   version there.

If you are ever unsure whether a change is safe to make, stop
and ask before saving. It is always okay to ask for help — see
"If You Get Stuck" below.


HOW TO READ THE NOTES INSIDE EACH FILE
-----------------------------------------
Every file on this site has notes written directly inside it, to
explain what that part of the file does. These notes are never
seen by anyone visiting the website — they are only visible to
someone who opens the file to edit it.

In the four page files (the ones ending in .html), notes look
like this:

    <!-- This is a note. It explains what's below it. -->

Anything between <!-- and --> is a note, not something visitors
see. You'll often find a note just above the part of the page it
explains, telling you what to change and what not to touch.

In confession-data.js, notes look a little different — they
start with two forward slashes instead:

    // This is a note in this particular file.

Same idea, different symbol, because this file is built
differently (explained next).


THE ONE FILE THAT WORKS DIFFERENTLY: confession-data.js
-----------------------------------------------------------
This file holds the complete text of the church's confession of
faith — all 32 chapters. It is built more strictly than the
other files, because one small mistake in it can cause the whole
"What We Believe" page to stop working.

A few things worth knowing about this file:

- It is organized into 32 chapters, and each one has its own
  landmark note above it, like this:

      // --- CHAPTER #14 GOES HERE --- (Of Saving Faith)

  You can use Find (Ctrl+F or Cmd+F) and search "CHAPTER #14" to
  jump straight to any chapter.

- SAFE to do yourself: fixing an obvious small typo inside a
  sentence — for example, changing one misspelled word inside a
  paragraph's text. Use Find to locate the exact word, and change
  only that word, being careful not to touch the quotation marks
  or punctuation around it.

- NOT safe to do yourself: adding a new chapter, rewriting a
  whole paragraph, moving things around, or anything where you
  are not completely sure what you're looking at. This file uses
  a strict pattern of matching brackets, curly braces, and commas
  behind the scenes, and it is very easy to break something
  without realizing it until the page stops working.

For anything beyond a one-word fix, the safest approach is to
open an AI assistant (see below), paste in the part of the file
you want to change, and ask for the corrected version to paste
back in. Let the AI assistant handle the exact formatting — you
just copy and paste what it gives you.

This file must always stay in the same folder as
what-we-believe.html, with its name spelled exactly
"confession-data.js". If the "What We Believe" page ever shows
an error saying it can't find the confession text, this is the
first thing to check.


IF YOU GET STUCK
-------------------
Any AI assistant (such as Claude or ChatGPT) can help you make a
specific change. Open the assistant, paste in the file (or the
part of it you're working on), and describe in plain words what
you want changed — for example, "change the Sunday morning
service time to 10:30 AM." You don't need to know any technical
words. Just describe what you want, the way you'd describe it to
a person.


WHY THIS WEBSITE IS BUILT THIS WAY
-------------------------------------
This site was built as simple, plain files on purpose, instead of
a system like WordPress that needs a login and ongoing upkeep.
The goal was to make sure the website never depends on one
person's ongoing involvement, one company's special software, or
a password that could someday get lost. Anyone with basic
computer skills — opening a file, searching for text, saving a
file — can make updates directly, now or years from now.
