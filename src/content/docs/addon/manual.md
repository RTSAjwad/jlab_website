---
title: Anki Addon Manual
description: What the Jlab Anki addon does and how to use it, including reading assistance, trainers, and best practices.
---

Addon ID for installation: **2110939339** (Tools → Addons, or `Ctrl+Shift+A` in
desktop Anki).

- [Summary on YouTube](https://www.youtube.com/watch?v=GHFcHfvgX5c)
- [Addon on Ankiweb](https://ankiweb.net/shared/info/2110939339)

![The addon's kana and kanji trainers](/jlab_website/assets/Trainers.gif)

## Most important

- It can happen that the addon doesn't update or uninstall. To manually
  uninstall, go to Anki → Tools → Addons → View Files, then close Anki and
  delete the folder "2110939339". Sorry for that!
- Doesn't work on decks already in Anki — you need to import an apkg.
- Start with the listening comprehension deck.
- Tools are triggered by selecting text on the card.
- For suggestions and bug reports (include full error message):
  japaneselikeabreeze@gmail.com

## Key Features

### Reading Assistance

The addon offers four levels of reading assistance. Reading assistance can be
individually configured for each card type and the built-in dictionary.

### Intuitive Reading Practice

You can decide when and which characters should appear on the cards, which makes
learning the writing systems convenient and intuitive.

### Quick Sentence Analysis

Several tools allow you to quickly analyze unknown sentences. They work on all
levels of reading assistance. Open them by selecting text on a card. Note that
the dictionary/cloze generation often works on word parts too (e.g. on "natsu"
and "yasumi" for "natsuyasumi").

### Focus on Listening Comprehension

Importing an apkg (Anki deck) creates two decks: one for listening comprehension
and one for reading practice. Start with the listening deck — reading cards are
deactivated in the beginning. Looking up words adds their meaning to the back of
the card and creates cloze deletions for subsequent reading practice in the
second deck.

### Continue with Reading Practice

If you remember a listening card after 10 days, it is suspended and the
associated reading card is activated in the reading / cloze deck. These cards are
perfect for reading practice, because you're guaranteed to know the words. Mix
in new characters at your own pace and focus on reading them. You'll also repeat
words looked up before via cloze deletion (the dictionary definition is used as
a hint).

### Automatic card deletion

Similar to the listening cards, reading cards are automatically deleted. This way
the reviews do not pile up and you can focus on new sentences instead of boring
old ones.

## Best practices for using the addon

- Don't be afraid of deleting cards. Make card deletion your habit.
- Delete every new card that's too difficult. If you can't figure out a sentence
  within 30 seconds, it is too difficult.
- Delete every sentence that has more than 1 unknown word.
- Delete every new card you understand immediately.
- Delete everything that bores you.
- Keep sentences with at most 1 unknown word.
- Keep sentences without unknown words that you don't understand by listening
  comprehension right away.
- Understanding of a card's words is bound to the card's context. Every
  flashcard should be deleted after a while to make room for new content.
- Use roumaji on your listening comprehension cards to progress quickly. Don't
  use roumaji on your reading cards.
- Use headphones — they boost listening comprehension.
- Never worry about your Japanese skills being bad, just keep going.
- If you'd like to study with anime, start with slice of life series. Avoid any
  fighting genre at least in the beginning.
- Make spotting errors in the addon's text conversion a habit.
- Did we mention card deletion? It's the most important one.

## Kana and Kanji Trainer

The **kana trainer** helps you take the first step from the latin transcription
(roumaji) to native Japanese. Simply select the kana characters you want to see
on your cards to replace the roumaji (Jlab's romanization can be mapped to kana
1:1).

The **kanji trainer** works similarly, but selection of the learned kanji is
different. A Japanese kanji character has multiple readings and a unique meaning
associated. First, learn radicals, stroke order and meaning of a kanji using
Heisig's "Remembering the Kanji (RtK)". A deck for this book is found
[here](https://ankiweb.net/shared/info/1654787298). In the kanji trainer, you can then
specify the number of your current RtK-kanji and the way kanji should be
displayed. If you use furigana, the kanji trainer will always display all kanji
with furigana and hide the readings for those kanji you already learned. If you
use the Jlab representation, the addon displays everything in plain kana and
mixes in the kanji you already learned.

## Romanization Rules

It is often discussed whether Japanese should be learned using roumaji / latin
characters at all. This works very well, but to avoid pitfalls, the addon uses
special romanization rules. Most of the romanization is traditional Hepburn as
displayed in the kana trainer. The following special rules allow a 1:1 mapping to
kana:

- は is always spelled **ha** (although sometimes pronounced **wa**)
- を is always spelled **wo** (although usually pronounced **o**)
- ん is spelled **n'** in ambiguous cases
- じ/ぢ are both pronounced ji, but represented as **ji/dji**
- ず/づ are both pronounced zu, but represented as **zu/dzu**

Although part of traditional Hepburn, keep these rules in mind:

- っ (small tsu) before a consonant-based character stretches pronunciation of
  the following consonant. In roumaji this is a double consonant, e.g. ろく/roku
  (normal k) vs ろっく/rokku (prolonged k).
- If a consonant-based i-character such as き/ki is combined with + ゃ/ゅ/ょ
  (small ya/yu/yo), the "i" is not pronounced and omitted: きゃ becomes **kya**
  instead of **kiya**.

## Known Issues

- Addon settings do not respect profiles (same for all users).
- Deck conversion / import currently does not work if the deck contains multiple
  note types.
- Deck conversion / import currently does not work if the deck contains only the
  default deck.
- Some decks have incorrect sort fields; the card order is then determined by
  the "due" field. Conversion could yield wrong card order.
- Script transliteration and word spacing are not always correct.

## Text conversion / Transliteration

Analysis of the Japanese text is often prone to errors. Things that happen often
include wrong word borders and wrong reading (especially with slang). This is not
a big issue if you use audio on the cards. Therefore it's not recommended to use
this addon with decks that don't have audio.

## Acknowledgements

The transliteration and parsing is based on jisho's code — thank you Kim for
sharing this.
