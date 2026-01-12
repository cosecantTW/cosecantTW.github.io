---
date: '2026-01-12T21:50:37+08:00'
draft: false
title: '用AI做了第一個小工具：多語言常用旅遊單字表 - Created My First Tool With AI'
---

## 前言

~~我最近在準備一個旅遊行程，需要準備一些常用的旅遊單字表。~~
~~我原本是打算用Excel來做這個事情，但是這樣子很不方便，所以我就想用AI來做這個事情。~~
~~我用ChatGPT來做這個事情，但是ChatGPT的API是需要付錢的，所以我就想用Hugging Face來做這個事情。~~
~~我用Hugging Face來做這個事情，但是Hugging Face的API是需要付錢的，所以我就想用Google Cloud來做這個事情。~~
~~我用Google Cloud來做這個事情，但是Google Cloud的API是需要付錢的，所以我就想用Google Colab來做這個事情。~~

*以上是AI自動幫我打的，根本沒這回事啦！*

## 事情是這樣的

在去了很多次日本之後，今年的寒假我們因為某個原因要改去韓國玩啦！我個人的英日語程度在旅行時是夠用的，但是韓語就一直停留在跟著老婆看韓劇學來的基礎上＋Duolingo過沒幾關的水準。相信很多人跟我一樣，很喜歡有機會學一些其他語言的基礎發音和單字，於是趁這機會，當然要稍微認真一點，再多學一些韓語。

（我知道現在大家都用ChatGPT翻譯了啦，但是自己學起來的感覺不一樣啊。）

但是我查了一下發現，網路上的單字表只有三種來源：
1. 圖檔或者PDF檔，用起來很麻煩而且很多根本沒發音（pdf我連下載來確認都不想）
2. 廣告用的文章，雖然是網頁形式也有發音，但是單字表上下都是廣告，還會附帶一堆很長的文章推薦你用他們家的app。
3. 完整的語言學習app，大部分是循序漸進，而且大概都要錢

結果最有用的，可能還是圖書館借來的實體書！
開什麼玩笑，這不是網路科技人工智慧爆發的時代嗎？

所以我就自己（跟AI一起）做了一個。

連結在[這裡](https://cosecanttw.github.io/travel_vocabulary_tts.html)。
Code放在[這裡](https://github.com/cosecantTW/travel_vocab_tts)。

全靜態網頁，沒有後端，TTS直接用瀏覽器內建的，程式的部分大概一小時就完成了，後面兩小時根本都在調單字資料庫（汗）。工具只有Google Antigravity + Gemini Pro，沒了，沒有ChatGPT也沒有Claude Code。

可以自由Fork去加語言或單字，然後deploy到自己的github pages上自用喔，就這樣，我們下次見。