---
title: Card Customization
description: Change the appearance and content of all Jlab cards at once by editing the card template.
---

**Summary**: You can change the appearance and content of all cards at once by
editing the card template. For example, move the image to the back or hide the
roumaji (latin characters).

Everything you see on an Anki card comes from a note, which is a container that
holds different fields of information. Anki uses those fields in a card template
to create a card from a note. You can think of a template as a blueprint for
building a card. Each card type has a front and a back template, and editing
these templates updates all corresponding cards at once.

## Available Card Content

The note has multiple fields and you can freely arrange them on the cards. There
is, for example, a field called "image" that by default is on the card front. In
the following, we'll move it to the back.

### Which fields are available

- **Audio**: Audio of the card
- **Image**: Image on the card
- **RemarksBack**: Contains most explanations on the back, including the
  translation and the word
- **Jlab-Kanji**: Original subs from the anime without spaces or furigana
- **Jlab-KanjiSpaced**: Like Jlab-Kanji, but with spaces between word borders
- **Jlab-Hiragana**: Hiragana transcription with spaces between words
- **Jlab-KanjiCloze**: Like Jlab-Kanji, but updated by the Jlab addon (cloze
  hints)
- **Jlab-Lemma**: Dictionary forms of the words
- **Jlab-HiraganaCloze**: Like Jlab-KanjiCloze, but in Hiragana
- **Other-Front**: Used for kanji with furigana, updated by the Jlab addon
- **References**: Links to additional resources
- **Version**: Current version of the deck
- **RemarksFront**: Hints on the front (rarely used)
- **Sequence**: Determines the card order — do not touch this
- **Source**: Which anime the card is taken from
- **QuestionLink**: Link to the contact form to leave card-specific feedback
- **Jlab-DictionaryLookup**: Contains words looked up with the addon (irrelevant)
- **Jlab-Metadata**: Not used
- **Jlab-Remarks**: Not used
- **Jlab-Translation**: Not used by the beginner's course / intermediate decks,
  but by converted subs2srs decks

The following fields are updated & overwritten by the Jlab addon — do not touch
them:

- **Jlab-ListeningFront**: Listening card front content (per reading assistance)
- **Jlab-ListeningBack**: Listening card back content (per reading assistance)
- **Jlab-ClozeFront**: Cloze card front content (per reading assistance)
- **Jlab-ClozeBack**: Cloze card back content, including cloze hints in green

![Available card fields in Anki](/assets/FieldsDesktop.jpg)

## Editing the template

On the card template, a field is used by enclosing it in double curly braces,
e.g. `{{image}}`. This adds the content of that field to the card. Moving the
image from the front to the back is illustrated in desktop Anki. After adding the
image to the back, you can move it around by editing the template text. It's a
bit awkward but works well after a few tries.

- Remove image from front:

  ![Removing the image from the card front](/assets/RemoveImage.jpg)

- Add image to back:

  ![Adding the image to the card back](/assets/AddToBack.jpg)

## HTML

Customizing cards beyond shifting fields is beyond this short guide. Just to
mention it: cards in Anki are displayed in something like a web browser and you
can use full-featured HTML and CSS. Details are found in the
[Anki manual](https://docs.ankiweb.net/).
