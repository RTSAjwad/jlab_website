---
title: Computing a word frequency list based on anime
description: How the word frequency list was computed from anime subtitles using mecab and a Jisho.org parser port.
date: 2020-09-03
author: joe
tags: [data, frequency-list]
---

For a dev project, a word frequency list derived from anime was needed. Since the
project builds upon the Anki decks found on
[japanesedecks.blogspot.com](https://japanesedecks.blogspot.com/), the list was
computed from the content of these decks. For computing the individual words in
their dictionary form, mecab + ipadic and a C++ port of Jisho.org's parser were
used.

The list is found in a spreadsheet.

## Bias and error sources

- The data source is limited — only ~2 million sentences were used. Since the
  interest is mostly in the top 2k words, that's sufficient for now.
- Parsing errors often yield wrong words. They usually occur when text expresses
  slang & sloppy pronunciation instead of proper high Japanese (e.g. "く" on #54,
  mostly from "ったく").
- The parser operates on dictionary entries (ipadic and jmdict), so many
  expressions appear as standalone entries (e.g. ような instead of よう な).
- Names are not parsed correctly (not in the dictionaries), resulting in
  individual "dangling" kanji with strange frequencies.
- Ambiguous spelling can result in separate entries (kana & kanji counted
  separately).
- Verb stems used as nouns are often counted separately.
- The passive form of a verb sometimes has its own dictionary entry.
- Compound nouns are counted separately: nakigao = naku + kao; natsuyasumi =
  natsu + yasumi; ekiben = eki + bento.
