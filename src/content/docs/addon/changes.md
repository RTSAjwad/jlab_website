---
title: Important Changes in the Anki Addon
description: Features moved to the Tools menu in the Jlab addon to improve stability across Anki updates.
---

There are a few features in the Jlab addon that used to break when Anki is
updated. This remained stable for about 2 years, but with version 2.1.55 things
started breaking again. Therefore, some operations were moved to
**Japanese like a breeze → Tools** instead of running them automatically.

This does not affect users of the Jlab decks, but those who want to use the addon
with subs2srs decks. Here's what changed and what you need to do:

- The addon no longer asks if you want to use a deck being imported with the
  Jlab addon. Instead, launch the deck converter manually from the tools menu.
- The cards are not bulk-updated after the import is completed. This is now also
  found in the tools menu.

Why no proper integration? Maintaining the addon along with creating the courses
takes a lot of time. The import behavior requires a proper hook in Anki's source
code, which currently isn't there. Since most users use the premade Jlab decks
(mainly on mobile), these changes save time.

**If you are a python programmer and want to add those hooks, drop a message
using the "?" button.**
