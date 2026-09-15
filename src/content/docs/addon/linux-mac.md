---
title: Linux and Mac Users
description: How to use the deck converter on Linux and Mac, since it is a Windows executable.
---

The addon uses a special deck format and only works for decks having this format.
Unfortunately, the tool for converting a deck into this format is a Windows
executable. This has historical reasons and won't change — there simply isn't
enough time to port everything to python. The remainder of the addon works on
other operating systems, too.

For importing a deck and using the addon, you have the following options:

1. **Import a deck on Windows** and sync everything using Ankiweb. This will
   automatically launch the deck converter.
2. **Run the deck converter with an emulator** such as wine. The app is called
   `apkgConverter.exe` and is located in the addon's "apps" folder. To get
   there, go to Anki → Tools → Addons → Jlab and click "view files", then go to
   `Apps/apkgConverter.exe`. After conversion, import the converted deck — the
   addon should work on this deck now.

Note that conversion with an emulator hasn't been tested personally, but the
addon itself has been tested on Linux. Sorry for the inconvenience!
