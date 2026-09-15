---
title: Card Management
description: How the Jlab addon manages the card lifecycle — activating, tagging, and removing old cards.
---

From addon version 1.11, card management is deactivated by default. If you want
to use it, please read this manual first. Card management is closely related to
the recommended approach for learning how to read Japanese: do a few sentences
by listening comprehension first, then try to read them. This is why Jlab decks
are split into a listening and a reading subdeck.

Without card management, both listening and reading/cloze cards are all
activated. With management, the cloze cards are deactivated/suspended. In a
nutshell, card management then takes care of two tasks:

- **Activate reading/cloze cards** if a listening card is remembered after a
  certain time. This is a convenience feature to make sure you don't do
  reading/cloze cards in advance.
- **Remove or tag old cards** (from 1.11 on, you can specify the action to
  take). If a listening card exceeds a certain interval, it is tagged or removed
  while the associated reading card is activated. If the reading card also
  exceeds a certain interval, both cards are tagged/removed and you won't see
  them again.

The second point (tagging/removing old cards) is **never done for the beginner's
course**. It is only relevant for advanced learners who want to do subs2srs decks
with the Jlab addon. Those deliver massive amounts of sentences, and keeping them
in Anki too long will slow you down a lot.

## Settings explained

- **Manage Jlab card life cycle**: Turn management on/off.
- **Ask before something is done**: Shows a popup with details on the actions
  taken and allows you to cancel the operation.
- **End action**: Tag (tags the cards only), suspend (tags & suspends the
  cards), or delete (permanently removes cards).
- **End interval listening cards**: If a listening card is remembered after this
  amount of days, the end action is applied and the reading card is activated.
- **End interval cloze cards**: Same as the end interval of reading cards.

## Tags created

- **jlabgc::retired-lc**: added to notes where the listening card reached the
  end of the life cycle.
- **jlabgc::retired-cloze**: added to notes where the reading card reached the
  end of the life cycle (unless the note is deleted).
