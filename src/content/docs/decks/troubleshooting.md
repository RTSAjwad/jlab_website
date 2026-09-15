---
title: Troubleshooting Deck Errors
description: Fix common errors with the Jlab Anki deck — card order, renamed decks, empty cards, and more.
---

## Check your database

Some errors that happen after update are fixed by running **Tools → Check
database** in Anki before updating.

## Wrong card order (fix 1)

If your card order is messed up after an initial import of the deck, the culprit
is most likely the insertion order of the default deck options versus the current
deck options. Try changing this from "random" to "sequential". This often fixes
the problem. If not, see the next step.

### Wrong card order (fix 2)

If changing the insertion order to "Sequential" didn't fix the random order, you
can change the current card order in the card browser. Open the card browser and
follow the steps illustrated below:

![Card insertion order, step 1](/assets/Card-insertion-order-00.jpg)

![Card insertion order, step 2](/assets/Card-insertion-order-01.jpg)

## Deck was renamed or moved, 2nd deck appears

Internally, the Jlab deck is always called "Jlab's beginner course" — even though
there's a typo in the name ;). If you rename the deck to e.g. "wafawffwa", you
will get a second deck with the original name after import. The "old" cards are
now in "wafawffwa", the new cards are in "Jlab's beginner course". The same
happens if you move the Jlab deck into a new parent deck to organize it.

To fix this, move the cards around in the deck browser. **Afterwards, you need to
update the card order (see "Wrong card order (fix 2)")!**

![Renamed deck](/assets/Renamed-deck.jpg)

## Back of the card is empty

Most of the time, this means that a reading card is displayed instead of the
associated listening card. The cards are organized in two subdecks, which
sometimes are not shown by default. If you click the parent deck on the topmost
level, both card types are displayed. Try uncollapsing the deck:

![Uncollapsing the deck](/assets/Uncollapse.jpg)

If this does not solve the problem, send an email using the contact form.

## Wrong cards appear in my deck

If you delete the reading deck, the template for its cards still exists.
Occasionally, Anki will use it to re-create the cards and they end up in the
listening deck. That's why it's not recommended to delete the deck — just leave
it untouched. To fix this:

1. Re-create the original deck structure with the original names (this also
   prevents trouble when updating). The names are: "Jlab's beginner course::Part
   1: Listening comprehension" and "Jlab's beginner course::Part 2: Reading
   practice" without the quotation marks.
2. Go to the card browser and type `card:Jlab-ClozeCard` into the search bar.
   This displays all listening cards. Note: if you have multiple decks, this
   displays all listening cards from all decks. So if you have multiple decks,
   click the one with the wrong cards first, then add the previous query. The
   result looks like this:
   `deck:Jlab intermediate 1::Part 1: Listening comprehension" card:Jlab-ClozeCard`
3. Click a card and hit `Ctrl+A` to select all of them.
4. Right-click → Change deck.

If you need help, [contact Joe](/contact/).

## WTF! The roumaji do not go away!!1

You need to change the reading assistance level from latin to something else in
**Japanese like a breeze → Settings**:

![Reading assistance settings](/assets/Readingassistance.jpg)

Otherwise the settings from the kana trainer do not have any effect. Note that
the addon updates cards on the fly, i.e. just before they are shown in the
reviewer. If this does not work, go to **Tools → Update all cards**.

## Anki automatically plays my audio

Change this in the deck options (not the general settings): it's called "don't
play audio automatically".

## Addon problems on Linux/Mac

Only the core features of the addon work on Linux/Mac (dictionary, card
management, etc.). The deck converter that converts existing decks to the Jlab
format is a Windows executable. See [this page](/addon/linux-mac/) for details.
