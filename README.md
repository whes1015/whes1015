<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=220&color=0:1a1b27,100:70a5fd&text=YuYu1015&fontColor=ffffff&fontSize=64&fontAlignY=36&animation=fadeIn&desc=Full-Stack%20Developer%20%C2%B7%20Founder%20of%20ExpTech&descAlignY=58&descSize=18" width="100%" alt="YuYu1015"/>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=20&pause=1200&color=70A5FD&center=true&vCenter=true&width=560&lines=Full-Stack+Developer;Earthquake+Early+Warning+%C2%B7+TREM+%2F+DPIP;Go+%C2%B7+eBPF+%C2%B7+ESP32+%C2%B7+Flutter+%C2%B7+PyTorch;Speaker+%C2%B7+Teacher+%C2%B7+Hackathon+Winner" alt="Typing SVG"/>

<a href="https://github.com/ExpTechTW"><img src="https://img.shields.io/badge/ExpTech-1a1b27?style=for-the-badge&logo=github&logoColor=white" alt="ExpTech"/></a>
<a href="https://huggingface.co/YuYu1015"><img src="https://img.shields.io/badge/Hugging_Face-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black" alt="Hugging Face"/></a>
<a href="https://exptech.com.tw/dc"><img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"/></a>
<a href="https://www.instagram.com/whes1015"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram"/></a>
<a href="https://www.threads.net/@whes1015"><img src="https://img.shields.io/badge/Threads-000000?style=for-the-badge&logo=threads&logoColor=white" alt="Threads"/></a>

</div>

## 👋 關於我

我習慣把系統從頭做到尾，而且多半是唯一的作者：從 Go 寫的 eBPF/XDP 封包過濾器、橫跨五個城市的 Nginx／CoreDNS 節點群，到逐暫存器手寫的 ESP32 韌體、Flutter 與 TypeScript 用戶端，以及自己訓練、評估並量化的 PyTorch 模型。多數成果掛在我創辦的 **ExpTech（探索科技）** 之下 —— 29 人的志工工程組織，維運臺灣規模最大的獨立地震預警平台。

```go
package main

type Developer struct {
	Age       int
	Birthday  string
	School    string
	Interests []string
	Founder   string
	Currently string
	Goal      string
}

var YuYu1015 = Developer{
	Age:       23,
	Birthday:  "2003/10/15",
	School:    "國立高雄科技大學 (NKUST) · 電機工程系 ⚡",
	Interests: []string{"電子電路", "程式設計"},
	Founder:   "ExpTech | 探索科技",
	Goal:      "成為專業的全端工程師 💪",
}
```

<table>
  <tr>
    <td align="center" width="25%">🤝<br><b>中央氣象署 簽約合作</b><br><sub>2022 · CWA</sub></td>
    <td align="center" width="25%">📱<br><b>DPIP 10 萬+ 安裝</b><br><sub>App Store 4.2★ · 1,378 則評分</sub></td>
    <td align="center" width="25%">🖥️<br><b>TREM 328,542 次下載</b><br><sub>74 個發行版本</sub></td>
    <td align="center" width="25%">📡<br><b>ES-Net 200+ 節點</b><br><sub>全臺地震感測網路</sub></td>
  </tr>
  <tr>
    <td align="center" width="25%">👥<br><b>ExpTech 29 人團隊</b><br><sub>234 repos · 13,411 commits</sub></td>
    <td align="center" width="25%">🏆<br><b>黑客松 3 座獎項</b><br><sub>2025 – 2026 · 技職杯</sub></td>
    <td align="center" width="25%">🎤<br><b>研討會講者</b><br><sub>PyCon TW · DevFest · TOOCON</sub></td>
    <td align="center" width="25%">📰<br><b>14 家媒體報導</b><br><sub>天下雜誌 · 親子天下 · 中央社</sub></td>
  </tr>
</table>

## 📝 主要作品

<table>
  <tr>
    <td valign="top" width="50%">
      <h3><a href="https://github.com/ExpTechTW/TREM-Lite"><img src=".github/assets/trem-lite.png" width="32" height="32" align="absmiddle" alt="TREM-Lite icon"/> TREM-Lite</a></h3>
      <p>
        <img src="https://img.shields.io/github/stars/ExpTechTW/TREM-Lite?style=flat-square&logo=github&label=Stars&labelColor=1a1b27&color=70a5fd" alt="Stars"/>
        <img src="https://img.shields.io/github/languages/top/ExpTechTW/TREM-Lite?style=flat-square&labelColor=1a1b27&color=70a5fd" alt="Top language"/>
      </p>
      <p>📦 安裝檔累計 <b>328,542</b> 次下載 · 74 個發行版本<br>👤 最大貢獻者 · 448 / 847 commits</p>
      <p>臺灣即時地震監測桌面平台，整合 TREM-Net 與中央氣象署資料，並提供第三方外掛生態。</p>
      <details>
        <summary><b>技術細節</b></summary>
        <ul>
          <li><b>資料整合</b>：整合 TREM-Net（臺灣即時地震觀測網）和中央氣象署的資料，提供即時且準確的地震資訊。</li>
          <li><b>使用者介面設計</b>：設計直觀且易於使用的介面，提升使用者體驗。</li>
          <li><b>跨平台桌面用戶端</b>：以 Electron 開發，自 2023 年 1 月起持續發布。</li>
          <li><b>外掛生態</b>：設計供第三方擴充的外掛系統，並維護其註冊表 <a href="https://github.com/ExpTechTW/trem-plugins">trem-plugins</a>（417 commits）。</li>
          <li><b>健康監控</b>：以 Rust 開發監控服務 <code>trem-monitor</code>（105 / 150 commits）。</li>
        </ul>
      </details>
    </td>
    <td valign="top" width="50%">
      <h3><a href="https://github.com/ExpTechTW/DPIP"><img src=".github/assets/dpip.png" width="32" height="32" align="absmiddle" alt="DPIP icon"/> DPIP</a></h3>
      <p>
        <img src="https://img.shields.io/github/stars/ExpTechTW/DPIP?style=flat-square&logo=github&label=Stars&labelColor=1a1b27&color=70a5fd" alt="Stars"/>
        <img src="https://img.shields.io/github/languages/top/ExpTechTW/DPIP?style=flat-square&labelColor=1a1b27&color=70a5fd" alt="Top language"/>
      </p>
      <p>📱 Google Play <b>10 萬+</b> 安裝 · App Store <b>4.2★</b>（1,378 則評分）<br>👤 最大貢獻者 · 838 / 2,339 commits</p>
      <p>Disaster Prevention Information Platform — 由臺灣本土團隊設計的防災資訊整合平台，提供即時的地震速報與災害資訊，協助使用者在災害發生時迅速應對。</p>
      <details>
        <summary><b>技術細節</b></summary>
        <ul>
          <li><b>跨平台開發</b>：使用 Flutter 框架進行跨平台開發，確保應用程式在 iOS 和 Android 平台上的一致性和高效能表現。</li>
          <li><b>資料整合</b>：整合 TREM-Net（臺灣即時地震觀測網）和中央氣象署的資料，提供即時且準確的地震資訊。</li>
          <li><b>狀態管理</b>：採用 Provider 進行狀態管理，提升應用程式的可維護性和效能。</li>
          <li><b>即時通知</b>：實現即時推播功能，讓使用者在地震發生時能夠立即收到警報。</li>
          <li><b>使用者介面設計</b>：設計直觀且易於使用的介面，提升使用者體驗。</li>
          <li><b>地圖與在地化</b>：MapLibre 圖層，支援 10 種介面語言。</li>
          <li><b>品質工具</b>：獨力撰寫測試套件與自訂 commit 檢查工具鏈。</li>
          <li><b>後端服務</b>：完整開發 TypeScript 後端 <code>dpip-server-ts</code>（122 / 122 commits）。</li>
        </ul>
      </details>
    </td>
  </tr>
</table>

## 🔬 精選技術成果

<table>
  <tr>
    <td valign="top" width="50%">
      <h4>🛡️ 正式環境基礎設施</h4>
      <p><code>Go</code> <code>eBPF/XDP</code> <code>OpenResty</code> <code>CoreDNS</code></p>
      <ul>
        <li><a href="https://github.com/ExpTechTW/kekkai"><b>kekkai</b></a>：以 Go 搭配 <code>cilium/ebpf</code> 實作 XDP 入向／TC 出向封包過濾，提供單一 IP 速率限制、允許／封鎖名單與緊急卸載路徑</li>
        <li>跨臺北、高雄、臺南、東京、大阪共 <b>23 個 upstream</b> 的 Nginx/OpenResty 伺服器群，以及自製 Go <code>dnsstats</code> 外掛的分流式 CoreDNS</li>
      </ul>
    </td>
    <td valign="top" width="50%">
      <h4>📡 ES-Net 感測器韌體</h4>
      <p><code>C++</code> <code>ESP32</code> <code>FreeRTOS</code></p>
      <ul>
        <li>不依賴原廠函式庫，<b>逐暫存器手寫 LSM6DS3 加速度計驅動</b>；裝置端以 IIR 濾波器組與樹狀陣列即時維護振幅百分位</li>
        <li>SNTP 平滑校時、軟硬體看門狗、OTA 與 TOTP 驗證的自訂二進位協定；全臺 <b>200+ 節點</b>，第一代單台成本低於 NT$800</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td valign="top" width="50%">
      <h4>🧠 LLM 推論與模型壓縮</h4>
      <p><code>PyTorch</code> <code>vLLM</code> <code>TensorRT Model Optimizer</code></p>
      <ul>
        <li>於 <a href="https://huggingface.co/YuYu1015">Hugging Face</a> 發布 <b>27 個量化模型</b>（約 <b>73,000</b> 次下載）：NVFP4、INT4-AutoRound 與 GGUF，涵蓋至 35B MoE 架構</li>
        <li>實作拒答方向消融（refusal-direction ablation），發布 <i>Ornith-1.0</i> 9B / 35B 系列，含 DPO 微調版本</li>
      </ul>
    </td>
    <td valign="top" width="50%">
      <h4>🌊 地震機器學習</h4>
      <p><code>PyTorch</code> <code>SeisBench</code> <code>ONNX</code></p>
      <ul>
        <li>以中央氣象署 2000–2025 年 <b>45,398</b> 筆觀測重新校正<a href="https://huggingface.co/YuYu1015/YuYu1015-IntensityGMM-TW-45k-v1">震度迴歸模型</a>：完全命中 <b>62.0%</b>（原 39.7%）、MAE <b>0.400</b>（原 0.671）</li>
        <li>訓練 50 Hz <a href="https://huggingface.co/YuYu1015/YuYu1015-PhaseNet-50Hz-268k-v1">PhaseNet</a> 序列模型，建立 6,457 行完整流程（資料匯入、雜訊注入、評估、ONNX 匯出）</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td valign="top" width="50%">
      <h4>🛰️ QZSS L1S 衛星訊息解碼器</h4>
      <p><code>C++</code> <code>GNSS</code></p>
      <ul>
        <li>完整解碼 QZSS L1S 250 位元 SBAS 訊框：前導碼、訊息型別、212 位元酬載與 CRC-24Q</li>
        <li>支援型別 43 <b>DC Report</b>（日本氣象廳災防廣播，IS-QZSS-DCR）與型別 44 DCX；約 12,000 行、含單元測試</li>
      </ul>
    </td>
    <td valign="top" width="50%">
      <h4>🔐 資安 & 開源</h4>
      <p><code>Honeypot</code> <code>Incident Response</code> <code>Open Source</code></p>
      <ul>
        <li>架設蜜罐，於 <b>CVE-2025-55182</b>（React Server Components，CVSS 10.0）揭露後數日內捕獲在野攻擊，記錄 6 個惡意程式樣本雜湊值與 15 個攻擊來源 IP</li>
        <li>組織外累計 <b>12 個已合併 PR</b>：<a href="https://github.com/anyshake/spectrogram-js">AnyShake spectrogram-js</a> 繪製效能優化、<code>smc.peering.tw</code> Leaflet → MapLibre 遷移、<a href="https://github.com/NKUST-ITC/NKUST-AP-Flutter">NKUST-AP-Flutter</a> 工具鏈升級</li>
      </ul>
    </td>
  </tr>
</table>

> [!TIP]
> 🤗 在 Hugging Face 量化了不少模型，快來看看吧 → [YuYu1015](https://huggingface.co/YuYu1015)

## 🛠️ 技術能力

| 類別 | 技術 |
|:---:|:---|
| 💻 程式語言 | <img src="https://skillicons.dev/icons?i=ts,js,go,py,dart,c,cpp,rust,lua,bash,java,kotlin,swift,cs,php,html,css,sass,pug&perline=10" alt="Languages"/> |
| 🔧 框架 | <img src="https://skillicons.dev/icons?i=vue,react,flutter,nodejs,express,electron,flask,django" alt="Frameworks"/> |
| 🗄️ 資料庫 & DevOps | <img src="https://skillicons.dev/icons?i=mysql,redis,docker,nginx,ansible,prometheus,githubactions,git,linux" alt="Database & DevOps"/><br><sub>eBPF/XDP · OpenResty · CoreDNS · NTP/SNTP</sub> |
| ☁️ 雲端服務 | <img src="https://skillicons.dev/icons?i=gcp,aws,cloudflare,grafana" alt="Cloud"/> |
| 🔌 嵌入式 | <img src="https://skillicons.dev/icons?i=arduino,raspberrypi" alt="Arduino, Raspberry Pi"/><img src=".github/assets/esp32.svg" alt="ESP32 / ESP8266"/><br><sub>Arduino Uno · Nano｜ESP32 · ESP8266｜Raspberry Pi 4B · Pico</sub><br><sub>FreeRTOS · I²C/SPI · LSM6DS3 · GNSS（QZSS L1S）· LoRa/Meshtastic</sub> |
| 🤖 機器學習 | <img src="https://skillicons.dev/icons?i=pytorch,sklearn" alt="PyTorch, scikit-learn"/><br><sub>SeisBench · ONNX · vLLM · llm-compressor · TensorRT</sub> |
| 🎮 遊戲開發 | <img src="https://skillicons.dev/icons?i=unity" alt="Unity"/> |

## 🗺️ 里程碑

<details>
<summary><b>🌱 創立 & 合作</b> · 6</summary>

| 日期 | 成就 |
|:---|:---|
| `2020/10/15` | 建立 **[ExpTech \| 探索科技](https://github.com/ExpTechTW)** |
| `2022/05/31` | 首次與 **高中學校合作（臺南 大灣高中）** 部署自製 `加速度型地震儀` |
| `2022/12/12` | 與 **交通部中央氣象局（CWB）** 簽約合作，為地震測報中心第一組非公司組織的合作對象 |
| `2022/12/17` | 首次與 **國中學校合作（臺東 池上國中）** 部署自製 `加速度型地震儀` |
| `2023/02/07` | 至 **中央研究院（臺灣地震科學中心）** 分享 `TREM` 開發過程 |
| `2023/04/09` | 首次與 **大學學校合作（花蓮 東華大學）** 部署自製 `速度型地震儀` |

</details>

<details>
<summary><b>💼 工作經歷</b> · 5</summary>

| 期間 | 單位 | 職稱 |
|:---|:---|:---|
| `2026/03 ～ 現在` | **STAR 學生火箭團隊** | `網路支援組` |
| `2025/01 ～ 現在` | **國家衛生研究院** | `程式開發` |
| `2024/12 ～ 2025/06` | **中央研究院 資訊科學研究所** | `兼任助理` |
| `2023/11 ～ 2024/11` | **衛波科技股份有限公司** | `後端工程師` |
| `2020/10 ～ 現在` | **ExpTech（探索科技）** | `創辦人暨技術負責人` |

</details>

<details>
<summary><b>🏆 競賽 & 獲獎</b> · 7</summary>

| 日期 | 成就 |
|:---|:---|
| `2023/04/05` | `TREM` 在 `桃園市第63屆中小學科學展覽會` 獲得 `地球與行星科學科` **縣市第一名** |
| `2023/07/28` | `TREM` 在 `第63屆全國中小學科學展覽會` 獲得 `地球與行星科學科` **全國第二名** |
| `2024/07/10` | 參加 `2024 MAIC 行動應用創新競賽` |
| `2024/11/09` | DPIP 獲得 **防災傑出獎** |
| `2025/04/20` | `2025 技職杯 黑客松 南區賽` 獲得 **最佳技術獎** |
| `2025/05/26` | `2025 技職杯 黑客松 全國賽` 獲得 **最佳設計獎** |
| `2026/05/10` | `2026 技職杯 黑客松 南區賽` 獲得 **最佳創意獎** |

</details>

<details>
<summary><b>🎤 活動 & 演講</b> · 13</summary>

| 日期 | 成就 |
|:---|:---|
| `2023/11/07` | 以 **ExpTech - Team Leaders** 身份受邀參加 `中央氣象署(CWA) 112年合作推動地震資訊傳遞服務成果交流會` |
| `2024/01/25` | 參加 **中央研究院 2024 Earthquake Early Warning workshop** 並與 `京都大學 山田真澄 老師` 分享 TREM 開發過程 |
| `2024/10/26` | 參加 `OCF 秋季交流會` |
| `2024/11/14` | `臺灣教育科技展` 講者（受 `ViewSonic` 邀請） |
| `2024/11/14` | 全球數位人權大會 `RightsCon 25 Taipei` 前導介紹會 |
| `2024/11/23` | 參加 `g0v 第64次 黃金比例黑客松` |
| `2024/11/30` | `Google Developer Groups DevFest Taipei 2024` **講者** |
| `2025/03/04` | `TOOCON #27` **講者** |
| `2025/03/08` | 參加 `SITCON 2025` |
| `2025/08/09` | 參加 `COSCUP 2025` |
| `2025/11/30` | `Google Developer Groups DevFest Taipei 2025` 開發組 志工 |
| `2026/03/28` | 參加 `SITCON 2026` |
| `2026/10/17` | 參加 `PyCon TW 2026` **Young Inspires 講者** |

</details>

<details>
<summary><b>👨‍🏫 教學</b> · 4</summary>

| 日期 | 成就 |
|:---|:---|
| `2024/10/25`、`2024/11/01`、`2024/11/08` | 至 `國立雲林科技大學` 教授 `Arduino` |
| `2024/10/26` | 至 `高雄市立中正高級工業職業學校` 教授 `Arduino 循跡避障` |
| `2025/08/16` | 至 `高雄市立中正高級工業職業學校` 教授 `視覺辨識 自走車` |
| `2026/05/23` | 至 `高雄市立中正高級工業職業學校` 教授 `人工智慧` |

</details>

<details>
<summary><b>📰 媒體報導</b> · 15</summary>

| 日期 | 成就 |
|:---|:---|
| `2024/04/24` | DPIP 獲得 `三立新聞` 報導 |
| `2024/04/24` | DPIP 獲得 `民視新聞` 報導 |
| `2024/04/24` | DPIP 獲得 `華視新聞` 報導 |
| `2024/04/24` | DPIP 獲得 `奇摩新聞` 報導 |
| `2024/04/25` | DPIP 獲得 `ETtoday新聞雲` 報導 |
| `2024/04/25` | DPIP 獲得 `TVBS NEWS` 報導 |
| `2024/04/25` | DPIP 獲得 `今日新聞` 報導 |
| `2024/04/26` | DPIP 獲得 `聯合新聞網` 報導 |
| `2024/04/26` | DPIP 獲得 `中央社 CNA` 報導 |
| `2024/05/06` | DPIP 獲得 `Hami書城` 報導 |
| `2024/07/23` | DPIP 獲得 `親子天下` 報導 |
| `2024/07/29` | DPIP 獲得 `國立中央大學 新聞網` 報導 |
| `2024/08/15` | DPIP 獲得 `LINE TODAY` 報導 |
| `2024/08/23` | DPIP 獲得 `天下雜誌` 報導 |
| `2026/02` | 於 `天下雜誌` 中央氣象署地震測報中心人物專訪中具名受訪 |

</details>

## 📊 GitHub 統計

<div align="center">

<img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=whes1015&theme=tokyonight" width="100%" alt="Profile details"/>

<img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=whes1015&theme=tokyonight" width="49%" alt="Stats"/>
<img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=whes1015&theme=tokyonight" width="49%" alt="Most commit language"/>
<img src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=whes1015&theme=tokyonight&utcOffset=8" width="49%" alt="Productive time"/>
<img src="https://streak-stats.demolab.com?user=whes1015&theme=tokyonight&hide_border=true&card_width=340&card_height=200" width="49%" alt="GitHub streak"/>

</div>

<img src="https://capsule-render.vercel.app/api?type=waving&height=120&section=footer&color=0:70a5fd,100:1a1b27" width="100%" alt="footer"/>
