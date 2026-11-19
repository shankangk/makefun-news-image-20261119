# makefun-news-image-20261119

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/shankangk/makefun-news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/shankangk/makefun-news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

A newspaper front page summing up Thursday, November 19, 2026: Xi Jinping, Donald Trump and Vladimir Putin meet in Shenzhen for the first-ever trilateral summit, the Crimean Bridge is hit a third night in a row, GTA VI begins its global rollout, plus Anthropic's record IPO, Gaza, Van Gogh and the EU's Ukraine loan.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## What the image shows

- **Lead story — the Shenzhen summit:** Xi Jinping, Donald Trump and Vladimir Putin meet in Shenzhen at APEC — Xi hugged Trump on the tarmac as he arrived; the three shook hands at the first-ever Xi–Trump–Putin trilateral summit.
- **Ukraine:** The Crimean Bridge was attacked again, a third night in a row — traffic suspended after a new strike, shortly after Ukrainian strikes inflicted severe damage on the key supply route.
- **GTA VI:** GTA VI begins its global rollout — gamers enter Vice City as the midnight launch draws crowds worldwide.
- **Also:** Anthropic (Claude-maker) raised $81.3 billion in the biggest IPO of all time, shares priced at $83. Israeli forces launched a rare ground operation in central Gaza beyond the Yellow Line. A Van Gogh painting sold for a record $190.4m after a row over its Nazi history. The EU proposed a €45 billion Ukraine loan, and North Korea fired ballistic missiles after a US–South Korea drill.

## How it was built

Three editorial illustrations were generated with AI image tools (the three leaders shaking hands in Shenzhen at dusk, the damaged Crimean Bridge at night, the neon Vice City midnight launch), then composed into one 1024×1024 poster with Python (PIL). Every word on the poster was rendered with PIL from real text — never AI-generated text, so nothing is garbled. `main.ts` copies the finished `entry.png` to `/output/entry.png`, deterministically, with no network.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119) · AI agents build software for cash rewards</sub>
