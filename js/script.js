const TECHS = [
  { name:'IoT 物聯網', role:'收集數據', desc:'感測器偵測機台溫度、震動、庫存，即時回傳數據' },
  { name:'Big Data 大數據', role:'儲存與整理', desc:'將大量機台、庫存、訂單資料分類整合，供分析使用' },
  { name:'Cloud 雲端運算', role:'提供算力', desc:'無需高價伺服器，透過雲端跨部門共享與處理資料' },
  { name:'AI 人工智慧', role:'決策與預測', desc:'判斷機台何時會故障、預測需求波動、品質預警' },
];

const SC = [
  {
    title:'供應商 → 原料入庫', icon:'ti-ship',
    pain:'長鞭效應', painEng:'BULLWHIP EFFECT',
    scenario:'供應港口突然封鎖 72 小時，現有庫存能否撐住生產？',
    warnings:[
      { tag:'資訊孤島', text:'帳面庫存與實際庫存脫鉤，你看到的數字可能已是昨天的舊聞' },
      { tag:'長鞭效應', text:'憑靜態報表做補貨決策，容易過度補貨或嚴重缺貨，兩種結果都損失慘重' },
    ],
    ti:[
      { k:'庫存報表更新時間', v:'昨日 18:00（靜態）', c:'bad' },
      { k:'帳面庫存', v:'3,200 件', c:'wn' },
      { k:'今日實際已領用', v:'無從得知', c:'bad' },
      { k:'港口封鎖 72 小時', v:'無應對數據', c:'bad' },
    ],
    di:[
      { k:'IoT 即時庫存', v:'2,680 件', c:'ok' },
      { k:'Big Data 耗用速率', v:'210 件/天', c:'neu' },
      { k:'可撐天數', v:'12.8 天', c:'ok' },
      { k:'港口恢復後剩餘', v:'1,468 件（高於安全庫存）', c:'ok' },
    ],
    dp:'IoT 即時盤點確認庫存 2,680 件，Big Data 計算平均耗用 210 件/天，可撐 12.8 天。港口 72 小時後恢復，完全無需空運補貨，節省 NT$380 萬。',
    ch:[
      { tag:'A', t:'立刻空運補貨，確保不斷料', d:'空運費約 NT$380 萬——帳面 3,200 件看似岌岌可危' },
      { tag:'B', t:'查昨日報表，靜觀其變', d:'帳面 3,200 件看似安全——但今早已領走 520 件未登帳' },
    ],
    tTitle:'資訊孤島讓長鞭效應失控',
    tBody:'帳面 3,200 件，實際僅 2,680 件，差距 520 件全因資訊孤島。選 A 多花 NT$380 萬空運；選 B 因帳實不符，半天後停產，違約金 NT$150 萬起跳。',
    tCost:'損失：空運費 NT$380 萬，或停產違約金 NT$150 萬+',
    dTitle:'即時數據斬斷長鞭效應',
    dBody:'IoT 消除帳實差距，Big Data 精算耗用速率，確認庫存充裕，無需空運。雲端整合讓供應商、工廠、倉儲數據即時共享，長鞭效應源頭直接消除。',
    dCost:'節省空運費 NT$380 萬，生產零中斷',
  },
  {
    title:'工廠生產線', icon:'ti-settings',
    pain:'黑盒效應', painEng:'BLACK BOX EFFECT',
    scenario:'凌晨 2 點，生產線核心設備發出異常震動聲，訂單排滿，老師傅請假出國。',
    warnings:[
      { tag:'黑盒效應', text:'你無法得知設備目前的健康狀態，只能靠聲音和直覺判斷是否繼續運轉' },
      { tag:'經驗斷層', text:'老師傅請假出國，過去的維修經驗無法傳承，決策完全依賴個人主觀判斷' },
    ],
    ti:[
      { k:'設備狀態顯示', v:'🔴 異常燈號', c:'bad' },
      { k:'震動、溫度數值', v:'無感測器，無從量化', c:'bad' },
      { k:'歷史維修紀錄', v:'紙本，老師傅帶走了', c:'bad' },
      { k:'故障預測能力', v:'不可能', c:'bad' },
    ],
    di:[
      { k:'IoT 震動值（即時）', v:'8.2 mm/s（臨界值 8.0）', c:'wn' },
      { k:'IoT 溫度趨勢', v:'↑ 連續 4 小時上升', c:'wn' },
      { k:'AI 故障預測', v:'3.2 小時後，機率 87%', c:'bad' },
      { k:'AI 建議行動', v:'立即計畫性維修 30 分鐘', c:'ok' },
    ],
    dp:'IoT 偵測震動 8.2 mm/s 超過臨界值 8.0，AI 預測 3.2 小時後故障機率 87%，建議立即排程 30 分鐘計畫性維修，成本 NT$12 萬，避免燒毀損失 NT$500 萬。',
    ch:[
      { tag:'A', t:'繼續跑，訂單排滿先拚完', d:'賭設備撐得過去（實際上 70% 機率半小時內燒毀）' },
      { tag:'B', t:'預防性停機，拆機檢查', d:'安全優先——但完全不知道要停多久，整晚產值可能泡湯' },
    ],
    tTitle:'黑盒面前，任何選擇都是豪賭',
    tBody:'無感測器數據，選 A 有 70% 機率設備燒毀：維修費 NT$500 萬 + 停工一週。選 B 不知停機時間，可能整晚產值 NT$45 萬白白損失。',
    tCost:'損失：燒毀 NT$500 萬 + 停工一週，或過度停機 NT$45 萬',
    dTitle:'87% 預警，精準計畫維修',
    dBody:'IoT + AI 讓設備從黑盒變透明。提前 3.2 小時預警，執行 30 分鐘計畫性維修即可解決，生產排程完整保住。老師傅的維修知識同步數位化，不再依賴單一人才。',
    dCost:'計畫性維修 NT$12 萬（vs 故障損失 NT$500 萬），節省 97.6%',
  },
  {
    title:'品管 → 出貨', icon:'ti-checkbox',
    pain:'試錯成本過高', painEng:'HIGH TRIAL-AND-ERROR COST',
    scenario:'一批 5,000 件訂單準備出貨，品管人員抽檢發現不良品，但不確定問題範圍。',
    warnings:[
      { tag:'試錯成本', text:'你不知道問題出在哪台機器，全批扣留等於全面停產，追查 2-4 天期間完全無法出貨' },
      { tag:'資訊孤島', text:'各機台數據各自獨立，無法自動追溯批次，只能用人力逐一翻查紙本記錄' },
    ],
    ti:[
      { k:'不良品率（人工抽檢）', v:'約 3.2%', c:'wn' },
      { k:'問題批次追溯方式', v:'逐批翻紙本，需 2-4 天', c:'bad' },
      { k:'受影響機台', v:'未知', c:'bad' },
      { k:'客戶交期剩餘', v:'48 小時（已高度緊繃）', c:'bad' },
    ],
    di:[
      { k:'IoT 即時不良率偵測', v:'3.2%，機台 B-3 警示', c:'wn' },
      { k:'AI 根源分析', v:'B-3 刀具磨損（僅需 15 分鐘）', c:'ok' },
      { k:'Big Data 批次追溯', v:'受影響精確 162 件', c:'ok' },
      { k:'可正常出貨良品', v:'4,838 件，交期可達成', c:'ok' },
    ],
    dp:'IoT 即時偵測異常，AI 15 分鐘完成根源分析定位 B-3 刀具磨損，Big Data 精確追溯 162 件受影響品。其餘 4,838 件正常出貨，交期完全不受影響。',
    ch:[
      { tag:'A', t:'全批扣留，等查明原因再出', d:'安全——但追查需 2-4 天，48 小時交期已確定無法達成' },
      { tag:'B', t:'全批出貨，告知客戶大致正常', d:'趕上交期——但 3.2% 不良品（約 160 件）將流入客戶端' },
    ],
    tTitle:'無法追溯，陷入全扣或全出的兩難',
    tBody:'沒有數位追溯能力，你只能在「全扣等查明（違約）」或「全出賭品質（退貨）」之間二選一。無論哪個選項，都是最大代價。',
    tCost:'損失：違約金 NT$80 萬，或退貨損失 NT$200 萬 + 客戶信任受損',
    dTitle:'精準追溯，試錯成本歸零',
    dBody:'IoT + AI + Big Data 讓追溯從 2-4 天縮短至 15 分鐘，精確隔離 162 件問題品，其餘全數如期出貨，客戶完全無感知異常。',
    dCost:'零違約金、零退貨，問題追溯時間縮短 99%',
  },
  {
    title:'物流 → 交付客戶', icon:'ti-truck',
    pain:'供應鏈脆弱性', painEng:'SUPPLY CHAIN FRAGILITY',
    scenario:'主要物流路線因臨時施工受阻，司機聯繫不上，客戶要求準時到貨。',
    warnings:[
      { tag:'供應鏈脆弱性', text:'你現在沒有貨車的即時位置，不知道影響有多嚴重，也沒有備案數據可以評估' },
      { tag:'資訊孤島', text:'物流、客服、倉儲各部門數據無法整合，從發現問題到通知客戶，每一步都要靠人工電話協調' },
    ],
    ti:[
      { k:'貨車即時位置', v:'無 GPS 追蹤', c:'bad' },
      { k:'施工阻礙資訊', v:'司機發現才知道，且聯繫不上', c:'bad' },
      { k:'備用路線評估', v:'需人工查詢、電話協調', c:'bad' },
      { k:'客戶通知時機', v:'延誤確認後才能告知，至少 2 小時後', c:'bad' },
    ],
    di:[
      { k:'Cloud GPS 即時位置', v:'即時同步，距施工點 8.2 km', c:'ok' },
      { k:'AI 路況偵測', v:'自動偵測阻礙，提前預警', c:'ok' },
      { k:'AI 推薦備用路線', v:'方案 B，延誤 22 分鐘', c:'ok' },
      { k:'Cloud 自動通知客戶', v:'提前 45 分鐘推播，零人工介入', c:'ok' },
    ],
    dp:'Cloud 整合即時物流數據，AI 自動偵測施工阻礙並推薦最佳繞行路線，延誤僅 22 分鐘，同步自動通知客戶，全程零人工介入。',
    ch:[
      { tag:'A', t:'繼續等，希望施工快點結束', d:'無法預估等待時間，最終可能延誤 2-4 小時，客戶毫無預警' },
      { tag:'B', t:'打電話叫司機繞路，再打給客戶', d:'能解決問題——但從發現到通知客戶中間已延誤 1-2 小時' },
    ],
    tTitle:'資訊孤島讓突發事件應變失靈',
    tBody:'物流、倉儲、客服數據孤立，每一步協調都靠人工電話，從問題發現到客戶知情最少延誤 1-2 小時。客戶毫無預警等待，信任受損，延誤賠償難以避免。',
    tCost:'損失：延誤賠償 NT$15 萬 + 客戶信任受損，後續訂單流失風險',
    dTitle:'30 秒應變，主動告知客戶',
    dBody:'Cloud 打通資訊孤島，AI 即時計算最佳方案，從偵測到推播客戶通知僅需 30 秒，客戶提前 45 分鐘收到通知，主動應變取代被動賠償。',
    dCost:'零賠償，客戶滿意度提升，突發反應時間縮短 73%',
  },
];

let phase = 0, mode = 'trad', results = {};

function tryGo(idx) {
  if (idx === 0) { go(0); return; }
  const done = Object.keys(results).length;
  if (idx <= done + 1 || (idx === 5 && done >= 4)) go(idx);
}

function go(idx) {
  phase = idx; mode = 'trad';
  updateNav(); render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateNav() {
  const done = Object.keys(results).length;
  document.querySelectorAll('.pn-btn').forEach((b, i) => {
    b.classList.remove('active', 'done', 'locked');
    if (i === phase) b.classList.add('active');
    else if (i === 0 || i <= done) b.classList.add('done');
    else b.classList.add('locked');
  });
}

function render() {
  if (phase === 0) { rIntro(); return; }
  if (phase === 5) { rROI(); return; }
  rScene(phase - 1);
}

function rIntro() {
  const m = document.getElementById('main');
  m.innerHTML = `
    <div class="hero fa">
      <div class="hero-eyebrow">智慧工廠 對比 模擬器</div>
      <h1 class="hero-title">傳統工廠遇到突發狀況<br>您會怎麼應對？</h1>
      <p class="hero-sub">走過四個真實工廠場景，親身體驗「資訊不足時的決策困境」，再看看導入工業 4.0 後，同樣的危機如何被即時化解。</p>
    </div>

    <div class="card fa" style="animation-delay:.1s">
      <div class="card-label">工業 4.0 的四大核心技術</div>
      <div class="tech-grid">
        ${TECHS.map(t => `
          <div class="tech-card">
            <div class="tech-role">→ ${t.role}</div>
            <div class="tech-name">${t.name}</div>
            <div class="tech-desc">${t.desc}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <button class="btn primary fa" style="animation-delay:.2s" onclick="go(1)">
      開始模擬 → 流程 1：供應商入庫
    </button>
  `;
}

function rScene(idx) {
  const p = SC[idx];
  const chose = results[idx] !== undefined;
  const flowSteps = ['供應商','入庫','生產','品管','出貨','物流','交付'];
  const activeMap = [[0,1],[2],[3,4],[5,6]];
  const actives = activeMap[idx] || [];

  const flowHTML = flowSteps.map((s, i) => {
    const isA = actives.includes(i);
    const arr = i > 0 ? `<span class="flow-arrow">›</span>` : '';
    return `${arr}<div class="flow-step${isA ? ' cur' : ''}"><div class="flow-dot${isA ? ' cur' : ''}">${i+1}</div><span>${s}</span></div>`;
  }).join('');

  const scenarios = [
    '供應港口突然封鎖 72 小時，現有庫存能否撐住生產？',
    '凌晨 2 點，生產線核心設備發出異常震動聲，訂單排滿，老師傅請假出國。',
    '一批 5,000 件訂單準備出貨，品管人員抽檢發現不良品，但不確定問題範圍。',
    '主要物流路線因臨時施工受阻，司機聯繫不上，客戶要求準時到貨。',
  ];

  let tradContent = '';
  if (!chose) {
    tradContent = `
      <div class="warn-box fa">
        <div class="warn-title">⚠ 做決定前，你可能碰上的問題</div>
        <div class="warn-list">
          ${p.warnings.map(w => `
            <div class="warn-item">
              <span class="warn-tag">${w.tag}</span>
              <span>${w.text}</span>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="choices">
        ${p.ch.map((c, i) => `
          <button class="choice-btn" onclick="pick(${idx}, ${i})">
            <span class="choice-tag">${c.tag}</span>
            <div>
              <div class="choice-text">${c.t}</div>
              <div class="choice-desc">${c.d}</div>
            </div>
          </button>
        `).join('')}
      </div>
      <div class="choice-hint">了解風險後，您會怎麼決策？</div>
    `;
  } else {
    const pickedIdx = typeof results[idx] === 'number' ? results[idx] : -1;
    tradContent = `
      <div class="result-panel bad fa">
        <div class="result-title bad">❌ ${p.tTitle}</div>
        <div class="result-body">${p.tBody}</div>
        <div class="result-cost bad">${p.tCost}</div>
      </div>
      <div style="font-size:11px;color:var(--text3);font-family:var(--mono);margin-bottom:8px;text-align:center">↓ 想換個選項看看結果？</div>
      <div class="choices">
        ${p.ch.map((c, i) => `
          <button class="choice-btn${i === pickedIdx ? ' choice-picked' : ''}" onclick="pick(${idx}, ${i})">
            <span class="choice-tag">${c.tag}</span>
            <div>
              <div class="choice-text">${c.t}${i === pickedIdx ? ' <span style="font-size:10px;color:var(--danger)">(你的選擇)</span>' : ''}</div>
              <div class="choice-desc">${c.d}</div>
            </div>
          </button>
        `).join('')}
      </div>
      <button class="btn primary" onclick="sw('dt')">看數位孿生工廠如何應對 →</button>
    `;
  }

  const dtContent = `
    <div class="info-panel dt fa">
      <div class="info-panel-label">數位孿生工廠即時數據（工業 4.0 全技術整合）</div>
      ${p.di.map(r => `
        <div class="data-row">
          <span class="data-key">${r.k}</span>
          <span class="data-val ${r.c}">${r.v}</span>
        </div>
      `).join('')}
    </div>
    <div class="predict-box fa">
      <span style="font-size:18px">✦</span>
      <span>${p.dp}</span>
    </div>
    <div class="result-panel good fa">
      <div class="result-title good">✅ ${p.dTitle}</div>
      <div class="result-body">${p.dBody}</div>
      <div class="result-cost good">${p.dCost}</div>
    </div>
    ${idx < 3
      ? `<button class="btn primary" onclick="go(${idx+2})">進入下一流程 →</button>`
      : `<button class="btn primary" onclick="go(5)">查看整體成效總結 →</button>`
    }
  `;

  document.getElementById('main').innerHTML = `
    <div class="flow-track fa">${flowHTML}</div>

    <div class="scene-card fa" style="animation-delay:.05s">
      <div class="scene-meta">
        <i class="ti ${p.icon}"></i>
        <span>工廠流程 ${idx+1}：${p.title}</span>
        <span class="pill warn">${p.pain}</span>
      </div>
      <div class="scene-body">${scenarios[idx]}</div>
    </div>

    <div class="mode-tabs">
      <button class="mode-tab${mode==='trad'?' trad-a':''}" onclick="sw('trad')">
        ▣ 傳統工廠
      </button>
      <button class="mode-tab${mode==='dt'?' dt-a':''}" onclick="sw('dt')">
        ◈ 數位孿生工廠
      </button>
    </div>

    ${mode === 'trad' ? `
      <div class="info-panel trad fa">
        <div class="info-panel-label">傳統工廠管理者現有資訊</div>
        ${p.ti.map(r => `
          <div class="data-row">
            <span class="data-key">${r.k}</span>
            <span class="data-val ${r.c}">${r.v}</span>
          </div>
        `).join('')}
      </div>
      ${tradContent}
    ` : dtContent}
  `;

  if (mode === 'dt' && !results[idx]) { results[idx] = 'viewed'; updateNav(); }
}

function sw(m) { mode = m; render(); }
function pick(idx, i) { results[idx] = i; render(); }

function rROI() {
  const saves = [
    { l:'長鞭效應（庫存誤判）', v:380 },
    { l:'黑盒效應（設備故障預防）', v:488 },
    { l:'試錯成本（品質追溯）', v:280 },
    { l:'供應鏈脆弱性（物流延誤）', v:15 },
  ];
  const annSave = saves.reduce((s,x) => s+x.v, 0);
  const totalInvest = 748;
  const roiPct = Math.round((annSave - totalInvest) / totalInvest * 100);
  const pbM = Math.round(totalInvest / annSave * 12);

  document.getElementById('main').innerHTML = `
    <div class="card fa">
      <div class="card-label">整體成效總結</div>
      <div style="font-size:20px;font-weight:700;color:var(--success);font-family:var(--mono)">
        年省 NT$${annSave}萬
      </div>
      <div style="font-size:13px;color:var(--text2);margin-top:4px">
        工業 4.0 全技術導入 ／ ROI ${roiPct}% ／ ${pbM} 個月回本
      </div>
    </div>

    <div class="card fa" style="animation-delay:.05s">
      <div class="card-label">六大痛點解決對照</div>
      <div class="pain-grid">
        <div class="pain-item"><div class="pain-name">✅ 資訊孤島</div><div class="pain-how">Cloud 打通所有部門數據</div></div>
        <div class="pain-item"><div class="pain-name">✅ 長鞭效應</div><div class="pain-how">IoT 即時庫存 + Big Data</div></div>
        <div class="pain-item"><div class="pain-name">✅ 黑盒效應</div><div class="pain-how">IoT 感測器 + AI 故障預測</div></div>
        <div class="pain-item"><div class="pain-name">✅ 試錯成本</div><div class="pain-how">AI 根源分析 + Big Data 追溯</div></div>
        <div class="pain-item"><div class="pain-name">✅ 供應鏈脆弱性</div><div class="pain-how">Cloud 整合 + AI 路線優化</div></div>
        <div class="pain-item"><div class="pain-name">✅ 經驗斷層</div><div class="pain-how">Big Data 知識數位化</div></div>
      </div>
    </div>

    <div class="card fa" style="animation-delay:.1s">
      <div class="card-label">投資成本與效益拆解</div>
      <div class="roi-table">
        <div class="roi-row-item"><span class="roi-key">技術年費（IoT + Big Data + Cloud + AI）</span><span class="roi-val neg">NT$690萬/年</span></div>
        <div class="roi-row-item"><span class="roi-key">人員培訓費（27天）</span><span class="roi-val neg">NT$58萬</span></div>
        <div class="roi-row-item"><span class="roi-key">第一年總投入</span><span class="roi-val neg">NT$748萬</span></div>
        ${saves.map(s => `<div class="roi-row-item"><span class="roi-key">${s.l}</span><span class="roi-val pos">+NT$${s.v}萬</span></div>`).join('')}
        <div class="roi-row-item" style="border-top:1px solid var(--border2);margin-top:4px;padding-top:12px">
          <span class="roi-key" style="font-weight:700;color:var(--text)">年度淨效益</span>
          <span class="roi-val pos big">NT$${annSave - totalInvest}萬</span>
        </div>
        <div class="roi-row-item"><span class="roi-key">ROI</span><span class="roi-val pos">${roiPct}%</span></div>
        <div class="roi-row-item"><span class="roi-key">預估回本時間</span><span class="roi-val pos">${pbM} 個月</span></div>
      </div>
    </div>

    <div class="card fa" style="animation-delay:.15s">
      <div class="card-label">核心績效指標</div>
      ${[{k:'ef',l:'生產效率提升',v:85},{k:'co',l:'成本控制能力',v:93},{k:'es',l:'ESG 碳排改善',v:72}].map(m => `
        <div class="bar-wrap">
          <div class="bar-head"><span>${m.l}</span><span style="color:var(--success);font-family:var(--mono)">${m.v}%</span></div>
          <div class="bar-track"><div class="bar-fill ${m.k}" style="width:${m.v}%"></div></div>
        </div>
      `).join('')}
    </div>

    <div class="card fa" style="animation-delay:.2s">
      <div class="card-label">導入建議結論</div>
      <div class="recommend-box">
        ✅ <strong>強烈建議全面導入。</strong>ROI ${roiPct}%，${pbM} 個月回本，遠優於 IT 投資一般基準（ROI>15%，24個月）。每一分錢的投資都對應具體解決一項可量化的管理痛點。
      </div>
    </div>

    <button class="btn" onclick="resetGame()" style="margin-top:4px">↺ 重新體驗</button>
    <button class="btn primary" onclick="enterPart2()" style="margin-top:8px;background:var(--warn-dim);border-color:var(--warn-border);color:var(--warn)">
      🏭 接下來：診斷你的工廠痛點 →
    </button>
  `;
}

function resetGame() {
  results = {}; phase = 0; mode = 'trad';
  p2Active = false;
  const p2btn = document.getElementById('pb-p2');
  if (p2btn) { p2btn.classList.add('locked'); p2btn.classList.remove('active-p2'); }
  updateNav(); rIntro();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


// ══════════════════════════════════════════════
// PART 2 — 傳產智慧轉型顧問 AI
// ══════════════════════════════════════════════

let p2Active = false;

const P2State = {
  step: 0, industry: null, process: null,
  pains: [], _currentPains: [], customPain: '', finalInput: '',
  scale: {}, selectedChips: [], otherSelected: false,
};

const INDUSTRIES = [
  '金屬機械類（工具機、扣件、汽車零件、精密加工）',
  '塑橡膠與化工材料類',
  '紡織服飾與輕工業類（成衣、鞋類、機能布料）',
  '食品製造類',
  '木竹紙印刷與其他類',
];
const INDUSTRY_SHORT = ['金屬機械','塑橡膠化工','紡織服飾','食品製造','木竹紙印'];
const PROCESSES = ['供應商/供應鏈','生產線/製造過程','品管/品質控制','物流/出貨'];

const PAIN_MAP = {
  '1-供應商/供應鏈': ['原料價格波動大','供應商交期延誤','供商品質不一致','無法即時掌握庫存'],
  '1-生產線/製造過程': ['設備故障停機頻繁','生產排程依賴人工','稼動率低','換線試製時間長','人力短缺'],
  '1-品管/品質控制': ['表面瑕疵與尺寸精度不穩','重工率高','品質追溯困難','人工檢測誤判'],
  '1-物流/出貨': ['成品庫存積壓','交期準時率低','出貨錯誤率高','運輸成本高'],
  '2-供應商/供應鏈': ['原料價格劇烈波動','特定原料供應少','斷料風險高','無法有效預測需求'],
  '2-生產線/製造過程': ['製程參數不穩定','能源消耗高','設備故障','配方調整時間長'],
  '2-品管/品質控制': ['顏色/強度/密度一致性難控','成品缺陷多','環保安全檢測記錄不完整'],
  '2-物流/出貨': ['化學品運輸安全要求高','儲存條件嚴格','呆料多'],
  '3-供應商/供應鏈': ['布料顏色批次差異大','流行趨勢變化快','國際原料交期不穩'],
  '3-生產線/製造過程': ['人力短缺流動率高','快速換款困難','季節性訂單排程不穩'],
  '3-品管/品質控制': ['色差、尺寸、車縫瑕疵多','機能性測試不穩定','品質追溯困難'],
  '3-物流/出貨': ['季節性庫存壓力大','國際交期要求嚴','包裝人力耗費大','多款式出貨容易出錯'],
  '4-供應商/供應鏈': ['生鮮原料新鮮度不穩','價格季節性波動','農藥重金屬風險'],
  '4-生產線/製造過程': ['季節性排程困難','衛生清潔停機時間長','加工條件控制難'],
  '4-品管/品質控制': ['食品安全追溯困難','微生物異物檢測壓力大','口感保存期限一致性難控'],
  '4-物流/出貨': ['冷鏈物流成本高','保存期限短','退貨損耗大','多通路管理複雜'],
  '5-供應商/供應鏈': ['原木竹材品質差異大','環保認證原料不穩','客製化材料週期長'],
  '5-生產線/製造過程': ['材料切割浪費率高','客製化排程混亂','手工依賴度高'],
  '5-品管/品質控制': ['木紋顏色平整度不一致','尺寸精度誤差','印刷色差'],
  '5-物流/出貨': ['成品體積大重量重易損壞','庫存占用空間大','出貨錯誤率高'],
};

const SCALE_OPTIONS = [
  ['A. 3000萬以下','B. 3000萬~1億','C. 1億以上'],
  ['A. 30人以下','B. 30~100人','C. 100人以上'],
];

function tryGoPart2() {
  enterPart2();
}

function enterPart2() {
  p2Active = true;
  const p2btn = document.getElementById('pb-p2');
  if (p2btn) { p2btn.classList.remove('locked'); p2btn.classList.add('active-p2'); }
  document.querySelectorAll('.pn-btn:not(#pb-p2)').forEach(b => b.classList.remove('active'));
  Object.assign(P2State, { step:1, industry:null, process:null, pains:[], _currentPains:[], customPain:'', finalInput:'', scale:{}, selectedChips:[], otherSelected:false });
  renderPart2();
  window.scrollTo({ top:0, behavior:'smooth' });
}

function renderPart2() {
  const m = document.getElementById('main');
  m.innerHTML = `
    <div class="p2-bridge fa">
      <div class="p2-bridge-badge">PART 2 — 傳產智慧轉型顧問</div>
      <h2 class="p2-bridge-title">現在，換您的工廠登場</h2>
      <p class="p2-bridge-sub">透過幾個簡單問題，AI 顧問將為您的工廠診斷痛點，並給出具體的改善方案與效益試算。</p>
    </div>
    <div class="card fa" style="animation-delay:.05s;padding:0;overflow:hidden">
      <div style="background:linear-gradient(135deg,rgba(240,160,48,0.08),rgba(79,142,247,0.06));padding:1rem 1.5rem;border-bottom:1px solid var(--border)">
        <div id="stepTracker" class="step-tracker"></div>
      </div>
      <div style="padding:1.25rem 1.5rem">
        <div class="chat-wrap">
          <div class="chat-history" id="chatHistory"></div>
          <div class="chat-input-area" id="chatInputArea"></div>
        </div>
      </div>
    </div>
  `;
  updateStepTracker();
  setTimeout(() => startP2Step(), 200);
}

function updateStepTracker() {
  const steps = ['產業確認','問題流程','痛點選擇','工廠規模','顧問建議'];
  const cur = Math.min(P2State.step - 1, 4);
  const el = document.getElementById('stepTracker');
  if (!el) return;
  el.innerHTML = steps.map((s,i) => {
    const cls = i < cur ? 'done' : i === cur ? 'active' : '';
    const icon = i < cur ? '✓' : (i+1);
    const arr = i > 0 ? `<span class="st-arrow">›</span>` : '';
    return `${arr}<div class="st-step ${cls}"><div class="st-dot">${icon}</div><span>${s}</span></div>`;
  }).join('');
}

function startP2Step() {
  if (P2State.step === 1) p2AskIndustry();
  else if (P2State.step === 2) p2AskProcess();
  else if (P2State.step === 3) p2AskPains();
  else if (P2State.step === 4) p2AskScale();
  else if (P2State.step === 5) p2AskCustom();
}

function p2AskIndustry() {
  addAIMsg('您好！我是傳產智慧轉型顧問。<br><br>請先告訴我，您的工廠屬於哪個產業類型？',
    INDUSTRIES.map((label, i) => ({ label, value:i+1, type:'industry' })));
}

function p2AskProcess() {
  addAIMsg(`了解，您是 <strong>${INDUSTRY_SHORT[P2State.industry-1]}</strong> 業。<br><br>請問目前最讓您頭痛的是哪個環節？`,
    PROCESSES.map(p => ({ label:p, value:p, type:'process' })));
}

function p2AskPains() {
  const key = `${P2State.industry}-${P2State.process}`;
  const pains = PAIN_MAP[key] || [];
  P2State._currentPains = pains;
  P2State.selectedChips = [];
  // 加入「其他」佔位，index = pains.length
  const chips = [
    ...pains.map((p,i) => ({ label:`${i+1}. ${p}`, value:i, type:'pain' })),
    { label:`${pains.length+1}. 其他（請在下方說明）`, value:'other', type:'pain-other' }
  ];
  addAIMsg(`以下是 <strong>${INDUSTRY_SHORT[P2State.industry-1]}</strong> 在<strong>「${P2State.process}」</strong>常見的痛點，<br>請勾選您有的問題（可複選），選完後按「✓ 確認」：`,
    chips, true);
}

function p2AskScale() {
  addAIMsg('好的，已記錄您的痛點。<br><br>為了給您更精準的效益試算，請選擇：<br><span style="color:var(--text3);font-size:12px">年營收規模</span>',
    SCALE_OPTIONS[0].map((label,i) => ({ label, value:`rev-${i}`, type:'scale-rev' })));
}

function p2AskScale2() {
  addAIMsg(null,
    SCALE_OPTIONS[1].map((label,i) => ({ label, value:`emp-${i}`, type:'scale-emp' })), false, '員工人數');
}

function p2AskCustom() {
  addAIMsg('最後一步，請直接打字告訴我：<br><br><strong>① 這些痛點每月大約造成多少損失？</strong>（可估計，如：約50萬、不清楚）<br><strong>② 您最希望達成的改善目標是什麼？</strong><br><br>一起打字回覆，我馬上為您出具診斷報告。');
  renderInputArea('text', buildPlaceholder());
}

function buildPlaceholder() {
  // 依產業×流程×選中痛點，動態產生貼切的範例文字
  const ind = P2State.industry;   // 1-5
  const proc = P2State.process;   // 供應商/生產線/品管/物流
  const painLabels = P2State.pains.map(i => P2State._currentPains[i]);

  // 損失金額建議（依流程通則）
  const lossHints = {
    '供應商/供應鏈': '每月損失約30萬（緊急補料+停線損失）',
    '生產線/製造過程': '每月損失約50萬（停機+重工+工時浪費）',
    '品管/品質控制': '每月損失約20萬（退貨+重工+客訴賠償）',
    '物流/出貨': '每月損失約15萬（延誤賠償+庫存積壓）',
  };
  const lossHint = lossHints[proc] || '每月損失約30萬';

  // 改善目標依痛點動態選擇
  const goalMap = [
    // 1 金屬機械
    { match: ['設備故障','停機'],     goal: '希望設備停機率降低50%，提前預測異常' },
    { match: ['稼動率'],              goal: '希望整體稼動率提升至85%以上' },
    { match: ['換線','試製'],         goal: '希望換線時間從4小時縮短至1小時以內' },
    { match: ['排程','依賴人工'],     goal: '希望排程自動化，減少緊急插單的混亂' },
    { match: ['尺寸精度','瑕疵'],     goal: '希望不良率從3%降至0.5%以下' },
    { match: ['重工率'],              goal: '希望重工率降低60%，減少浪費工時' },
    { match: ['品質追溯'],            goal: '希望出問題時30分鐘內找到根源批次' },
    { match: ['人工檢測','誤判'],     goal: '希望以自動光學檢測取代人工，誤判歸零' },
    { match: ['庫存積壓'],            goal: '希望成品庫存天數從45天降至15天以內' },
    { match: ['交期準時'],            goal: '希望準時交貨率從75%提升至95%以上' },
    { match: ['原料價格','波動'],     goal: '希望建立採購預警，提前3個月鎖定原料價格' },
    { match: ['供應商交期','延誤'],   goal: '希望供應商到貨準時率提升至90%以上' },
    // 2 塑橡膠
    { match: ['製程參數','不穩'],     goal: '希望製程參數自動監控，減少批次不良' },
    { match: ['能源消耗'],            goal: '希望每月電費降低15%以上' },
    { match: ['配方調整'],            goal: '希望配方切換時間縮短50%' },
    { match: ['顏色','密度','一致'],  goal: '希望批次一致率達98%以上，減少客訴' },
    { match: ['環保','安全檢測'],     goal: '希望環保檢測記錄全數位化，隨時可調閱' },
    { match: ['斷料'],                goal: '希望建立安全庫存預警，不再有斷料停線' },
    // 3 紡織
    { match: ['色差'],                goal: '希望跨批次色差合格率達99%，零客退' },
    { match: ['換款','快速'],         goal: '希望換款準備時間從6小時縮短至2小時' },
    { match: ['人力短缺','流動'],     goal: '希望降低對熟練工依賴，新人上手時間縮短至1週' },
    { match: ['季節性','庫存'],       goal: '希望季末庫存消化率達90%以上' },
    { match: ['多款式','出貨'],       goal: '希望出貨錯誤率從1.5%降至0.1%以下' },
    // 4 食品
    { match: ['食品安全','追溯'],     goal: '希望問題批次追溯時間從3天縮短至2小時' },
    { match: ['微生物','異物'],       goal: '希望異物檢出率達100%，全自動記錄' },
    { match: ['保存期限','一致'],     goal: '希望成品保存期限達標率從90%提升至99%' },
    { match: ['冷鏈'],                goal: '希望冷鏈全程溫度監控，斷鏈事故歸零' },
    { match: ['衛生清潔','停機'],     goal: '希望清潔停機時間縮短30%，提高換線效率' },
    // 5 木竹紙
    { match: ['切割','浪費'],         goal: '希望材料浪費率從12%降至5%以下' },
    { match: ['客製化','排程'],       goal: '希望客製訂單交期準確率提升至90%以上' },
    { match: ['木紋','顏色','平整'],  goal: '希望外觀合格率達98%，降低退貨率' },
    { match: ['體積','庫存'],         goal: '希望倉儲空間利用率提升30%，降低庫存成本' },
  ];

  // 依痛點關鍵字比對
  let matchedGoal = null;
  for (const row of goalMap) {
    const hit = row.match.some(kw => painLabels.some(p => p.includes(kw)));
    if (hit) { matchedGoal = row.goal; break; }
  }

  // 找不到比對就用流程通用目標
  if (!matchedGoal) {
    const defaultGoals = {
      '供應商/供應鏈': '希望供應鏈可視化，異常提早預警',
      '生產線/製造過程': '希望生產效率提升30%，降低人力依賴',
      '品管/品質控制': '希望不良率大幅下降，品質追溯全自動',
      '物流/出貨': '希望準時交貨率提升至95%以上',
    };
    matchedGoal = defaultGoals[proc] || '希望整體營運效率提升，降低管理成本';
  }

  return `例如：${lossHint}，${matchedGoal}`;
}

function p2GenerateResult() {
  addAIMsg(null, null, false, null, true); // loading bubble
  renderInputArea('hidden');

  const painLabels = [
    ...P2State.pains.map(i => P2State._currentPains[i]),
    ...(P2State.otherSelected && P2State.customPain ? ['其他：' + P2State.customPain.split('\n')[0]] : [])
  ];
  const customText = P2State.customPain || '未填';

  const systemPrompt = `你是「傳產智慧轉型顧問AI」，專門協助台灣傳統製造業老闆解決痛點並引導數位轉型（含智慧孿生）。語氣務實、親切、專業，像有10年以上經驗的製造業顧問。全部使用繁體中文。

根據用戶提供的工廠資訊，輸出一份完整診斷建議報告。格式用簡潔段落+重點條列，總長度控制在700字以內，適合手機閱讀。不要使用emoji。

報告結構（每段前加粗標題）：
1.【診斷摘要】1-2句，點出核心問題與潛在影響
2.【效益試算】代入規模，給具體數字範圍，標註「參考值」
3.【主要轉型方案】具體技術（IoT/AI/數位孿生等）、預期效益、投資規模
4.【替代方案】較低成本的初步改善，適合預算有限的老闆
5.【政府補助資源】台灣相關補助計畫，引用具體計畫名稱
6.【立即可做的改善】1-2條，不需大投資即可本週開始`;

  const userMsg = `工廠資訊：
- 產業類型：${INDUSTRIES[P2State.industry-1]}
- 問題流程：${P2State.process}
- 主要痛點（勾選）：${painLabels.join('、') || '未選擇'}
- 痛點補充說明（老闆自行描述）：${P2State.customPain || '無'}
- 年營收規模：${P2State.scale.rev || '未填'}
- 員工人數：${P2State.scale.emp || '未填'}
- 損失估計與改善目標（老闆自述）：${P2State.finalInput || customText}

請根據以上完整資訊（特別是老闆自行描述的補充和目標）輸出個人化診斷報告。`;

  fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      system: systemPrompt,
      messages: [{ role: 'user', content: userMsg }]
    })
  })
  .then(r => {
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return r.json();
  })
  .then(data => {
    const text = (data.content || [])
      .filter(b => b.type === 'text')
      .map(b => b.text || '')
      .join('');
    removeLoadingMsg();
    addAIMsg(text || generateLocalReport());
    setTimeout(() => {
      addAIMsg('感謝您使用傳產智慧轉型顧問！如需重新診斷，請點下方按鈕。',
        [{label:'↺ 重新診斷', value:'restart', type:'restart'},{label:'← 回到模擬器', value:'sim', type:'sim'}]);
    }, 700);
  })
  .catch(err => {
    console.warn('[p2GenerateResult] fetch 失敗，使用本機報告:', err);
    removeLoadingMsg();
    addAIMsg(generateLocalReport());
    setTimeout(() => {
      addAIMsg('感謝您使用傳產智慧轉型顧問！如需重新診斷，請點下方按鈕。',
        [{label:'↺ 重新診斷', value:'restart', type:'restart'},{label:'← 回到模擬器', value:'sim', type:'sim'}]);
    }, 700);
  });
}

function generateLocalReport() {
  const ind  = P2State.industry;
  const proc = P2State.process;
  const painLabels = [
    ...P2State.pains.map(i => P2State._currentPains[i]),
    ...(P2State.otherSelected && P2State.customPain ? ['其他：' + P2State.customPain.split('\n')[0]] : [])
  ];
  const rev  = P2State.scale.rev  || 'B. 3000萬~1億';
  const emp  = P2State.scale.emp  || 'B. 30~100人';
  const custom = P2State.customPain || '';
  const indName = INDUSTRY_SHORT[ind-1];

  // ── 1. 效益試算基數（依規模）
  const revTier = rev.startsWith('A') ? 'small' : rev.startsWith('C') ? 'large' : 'mid';
  const empTier = emp.startsWith('A') ? 'small' : emp.startsWith('C') ? 'large' : 'mid';
  const lossMult = revTier === 'large' ? 3 : revTier === 'small' ? 0.5 : 1;

  // 基礎損失（依流程）
  const baseLoss = {
    '供應商/供應鏈':  { monthly: 30, saving: 60, invest: [80, 200] },
    '生產線/製造過程':{ monthly: 55, saving: 50, invest: [150, 400] },
    '品管/品質控制':  { monthly: 22, saving: 65, invest: [60, 180] },
    '物流/出貨':      { monthly: 18, saving: 55, invest: [50, 150] },
  }[proc] || { monthly: 30, saving: 55, invest: [80, 200] };

  const monthlyLoss = Math.round(baseLoss.monthly * lossMult);
  const annualSave  = Math.round(monthlyLoss * 12 * (baseLoss.saving / 100));
  const investLo    = Math.round(baseLoss.invest[0] * lossMult);
  const investHi    = Math.round(baseLoss.invest[1] * lossMult);
  const paybackMo   = Math.round((investLo * 10) / annualSave * 12 / 10);

  // ── 2. 主要方案（依產業×流程）
  const solutionMap = {
    '1-供應商/供應鏈':  { tech:'IoT 庫存感測 + ERP 雲端整合', effect:'庫存準確率提升至 98%，斷料風險降低 80%' },
    '1-生產線/製造過程':{ tech:'設備 IoT 監控 + AI 預測性維護', effect:'非計畫停機減少 60%，稼動率提升 15~25%' },
    '1-品管/品質控制':  { tech:'AOI 自動光學檢測 + SPC 統計製程管控', effect:'不良率下降 70%，人工檢測人力需求減半' },
    '1-物流/出貨':      { tech:'WMS 倉儲管理系統 + 條碼 / RFID 出貨驗核', effect:'出貨錯誤率降至 0.1% 以下，準時率提升至 95%' },
    '2-供應商/供應鏈':  { tech:'原料需求預測 AI + 供應商電子訂單平台', effect:'斷料事故減少 70%，採購成本降低 8~12%' },
    '2-生產線/製造過程':{ tech:'製程參數即時監控 + 能源管理系統 (EMS)', effect:'能源費用降低 15%，批次不良率下降 50%' },
    '2-品管/品質控制':  { tech:'線上量測感測器 + 批次數位履歷系統', effect:'批次一致率達 98%，環保報告自動生成' },
    '2-物流/出貨':      { tech:'危品倉儲 IoT 環境監控 + 呆料預警系統', effect:'儲存事故歸零，呆料金額減少 40%' },
    '3-供應商/供應鏈':  { tech:'布料 AI 色差辨識 + 國際供應商協同平台', effect:'色差退貨減少 80%，交期掌握率提升至 90%' },
    '3-生產線/製造過程':{ tech:'數位工單系統 + 換款標準作業數位化', effect:'換款時間縮短 50%，新人培訓周期減少 40%' },
    '3-品管/品質控制':  { tech:'電腦視覺瑕疵檢測 + 品質數位追溯系統', effect:'瑕疵漏檢率降至 0.2%，客訴處理時間縮短 60%' },
    '3-物流/出貨':      { tech:'多款式出貨驗核系統 + 季節性需求預測', effect:'出貨錯誤率降低 90%，滯銷庫存減少 35%' },
    '4-供應商/供應鏈':  { tech:'生鮮品質 IoT 監測 + 產地溯源區塊鏈', effect:'原料不良入廠率降低 60%，農藥殘留風險可視化' },
    '4-生產線/製造過程':{ tech:'自動清洗控制系統 + 生產排程 AI 優化', effect:'清潔停機縮短 30%，季節性產能利用率提升 20%' },
    '4-品管/品質控制':  { tech:'全程食安數位追溯 + AI 異物影像檢測', effect:'追溯時間從 3 天縮短至 2 小時，異物漏檢率歸零' },
    '4-物流/出貨':      { tech:'冷鏈全程溫控 IoT + 多通路庫存統一管理', effect:'冷鏈斷鏈事故歸零，退貨損耗減少 45%' },
    '5-供應商/供應鏈':  { tech:'原材 AI 分級辨識 + 環保認證採購平台', effect:'等外品使用率降低 50%，認證原料交期縮短 20%' },
    '5-生產線/製造過程':{ tech:'AI 排料優化系統 + 數位工單排程', effect:'材料浪費率從 12% 降至 5%，客製訂單準時率達 92%' },
    '5-品管/品質控制':  { tech:'木紋 AI 視覺檢測 + 尺寸自動量測', effect:'外觀合格率達 98%，人工檢測人力節省 60%' },
    '5-物流/出貨':      { tech:'大型件智慧倉儲 + RFID 出貨驗核', effect:'出貨錯誤率降至 0.1%，倉儲空間利用率提升 30%' },
  };
  const sol = solutionMap[`${ind}-${proc}`] || { tech:'IoT + 數據整合平台', effect:'整體效率提升 30% 以上' };

  // ── 3. 替代方案
  const altMap = {
    '供應商/供應鏈':  '先導入 Excel/雲端試算表統一庫存回報，每日一次盤點，成本極低，可在 1 個月內上線。',
    '生產線/製造過程':'先安裝 1~2 台低成本震動感測器在最關鍵設備，搭配免費 LINE 通知，即時掌握異常。',
    '品管/品質控制':  '先建立紙本/Excel 不良品記錄表，每週統計分析，找出前三大不良原因再針對性改善。',
    '物流/出貨':      '先導入免費或低成本條碼掃描 App，出貨前掃描驗核，錯誤率可立即降低 70% 以上。',
  };
  const alt = altMap[proc] || '先從 Excel 數位化記錄開始，建立基礎數據，再逐步導入自動化系統。';

  // ── 4. 政府補助
  const subsidies = [
    '• 經濟部「中小企業數位化轉型輔導計畫」：補助 50~70%，最高 200 萬元，適合 50~200 人企業。',
    '• 工業局「智慧機械產業推動方案」：低利貸款 + 技術輔導，特別針對機械、製造業。',
    '• 中小企業處「小型企業創新研發計畫 (SBIR)」：最高補助 100 萬，可用於 AI 品管、IoT 開發。',
  ];

  // ── 5. 即時可做
  const quickWins = {
    '供應商/供應鏈':  ['建立供應商交期 KPI 追蹤表（每週更新），超期立即電話確認', '盤點現有庫存，設定安全庫存天數底線，低於底線即觸發補貨'],
    '生產線/製造過程':['記錄近 3 個月設備故障時間與原因，找出最常壞的設備優先處理', '請老師傅口述維修 SOP，由年輕員工整理成文件，預防經驗斷層'],
    '品管/品質控制':  ['本週開始記錄每批不良品數量與原因，1 個月後就能看出規律', '設立退貨件分析會議（每月 1 次），逐一追查根本原因'],
    '物流/出貨':      ['製作出貨核對清單（品項、數量、客戶），每箱裝箱前逐項確認', '統計近 3 個月延誤原因，對症解決前 2 大問題'],
  };
  const qw = quickWins[proc] || ['建立問題記錄表，每週統計分析', '召開改善會議，設定明確責任人與完成時間'];

  // ── 組裝報告
  const painStr = painLabels.length ? painLabels.join('、') : '您描述的問題';

  return `<strong>【診斷摘要】</strong><br>
您的 ${indName} 工廠在「${proc}」環節面臨：${painStr}。這類問題在同規模工廠中相當普遍，但透過系統化改善，效益回收速度通常遠超預期。<hr>
<strong>【效益試算】</strong>（參考值）<br>
• 目前痛點每月損失估計：<span class="highlight">NT$${monthlyLoss} 萬</span><br>
• 導入後年省成本：<span class="highlight">NT$${annualSave} 萬／年</span><br>
• 建議投資規模：NT$${investLo}~${investHi} 萬<br>
• 預估回本時間：<span class="highlight">${paybackMo} 個月</span><hr>
<strong>【主要轉型方案】</strong><br>
建議導入：<strong>${sol.tech}</strong><br>
預期效益：${sol.effect}<br>
投資規模：NT$${investLo}~${investHi} 萬（含硬體、軟體、導入服務）<hr>
<strong>【替代方案（低成本起步）】</strong><br>
${alt}<hr>
<strong>【政府補助資源】</strong><br>
${subsidies[ind % 3 === 0 ? 2 : ind % 2 === 0 ? 1 : 0]}<br>
${subsidies[1]}<hr>
<strong>【立即可做的改善（零成本）】</strong><br>
① ${qw[0]}<br>
② ${qw[1]}`;
}

// ── Helpers ──

function addAIMsg(text, chips, multiSelect, chipLabel, loading) {
  const h = document.getElementById('chatHistory');
  if (!h) return;
  const div = document.createElement('div');
  div.className = 'msg ai fa';
  if (loading) div.id = 'loadingMsg';

  let inner = `<div class="msg-avatar">AI</div><div class="msg-bubble">`;
  if (loading) {
    inner += `<div class="typing-dots"><span></span><span></span><span></span></div>`;
  } else {
    if (text) inner += formatAIText(text);
    if (chipLabel) inner += `<div style="font-size:11px;color:var(--text3);margin:8px 0 4px;font-family:var(--mono)">${chipLabel}</div>`;
    if (chips && chips.length) {
      inner += `<div class="chip-row" id="cr-${Date.now()}">`;
      chips.forEach(c => {
        const pc = c.type==='pain' ? ' pain-chip' : c.type==='pain-other' ? ' pain-other-chip' : '';
        inner += `<button class="chip${pc}" onclick="p2ChipClick(this,'${c.type}','${escQ(String(c.value))}',${!!multiSelect})">${escHTML(c.label)}</button>`;
      });
      if (multiSelect) {
        inner += `<button class="chip confirm-chip" style="border-color:var(--success-border);color:var(--success);background:var(--success-dim)" onclick="p2ConfirmMulti()">✓ 確認選擇</button>`;
      }
      inner += `</div>`;
    }
  }
  inner += `</div>`;
  div.innerHTML = inner;
  h.appendChild(div);
  h.scrollTop = h.scrollHeight;

  if (!loading && !chips) renderInputArea('text');
  if (!loading && chips && !multiSelect) renderInputArea('hidden');
  if (!loading && chips && multiSelect) renderInputArea('text', '如選「其他」請在此說明您的問題；若無補充可直接按確認');
}

function addUserMsg(text) {
  const h = document.getElementById('chatHistory');
  if (!h) return;
  const div = document.createElement('div');
  div.className = 'msg user fa';
  div.innerHTML = `<div class="msg-avatar user-av">您</div><div class="msg-bubble">${escHTML(text)}</div>`;
  h.appendChild(div);
  h.scrollTop = h.scrollHeight;
}

function removeLoadingMsg() {
  const el = document.getElementById('loadingMsg');
  if (el) el.remove();
}

function formatAIText(t) {
  return t.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\n/g,'<br>');
}

function escHTML(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function escQ(s) { return s.replace(/\\/g,'\\\\').replace(/'/g,"\\'"); }

function renderInputArea(mode, placeholder) {
  const ia = document.getElementById('chatInputArea');
  if (!ia) return;
  if (mode === 'hidden') { ia.innerHTML = ''; return; }
  ia.innerHTML = `
    <div class="chat-input-row">
      <textarea class="chat-textarea" id="chatTA" rows="1"
        placeholder="${placeholder || '有其他補充說明嗎？（可跳過，直接選上方選項）'}"
        oninput="autoResize(this)"
        onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();p2SendText();}"></textarea>
      <button class="chat-send" onclick="p2SendText()" title="送出">
        <span>→</span>
      </button>
    </div>`;
}

function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 120) + 'px';
}

function p2ChipClick(btn, type, value, multi) {
  if (multi) {
    btn.classList.toggle('selected');
    if (type === 'pain-other') {
      // 「其他」chip：toggle選中狀態，並把輸入框placeholder改為提示
      const ta = document.getElementById('chatTA');
      if (ta) {
        if (btn.classList.contains('selected')) {
          ta.placeholder = '請描述您的其他問題…（必填）';
          ta.focus();
          ta.style.borderColor = 'var(--warn-border)';
        } else {
          ta.placeholder = '有其他補充說明嗎？（可跳過，直接選上方選項）';
          ta.style.borderColor = '';
        }
      }
      P2State.otherSelected = btn.classList.contains('selected');
    } else {
      const idx = parseInt(value);
      const pos = P2State.selectedChips.indexOf(idx);
      if (pos >= 0) P2State.selectedChips.splice(pos,1);
      else P2State.selectedChips.push(idx);
    }
    return;
  }

  // 單選：禁用同組
  const row = btn.closest('.chip-row');
  if (row) row.querySelectorAll('.chip').forEach(b => { b.disabled=true; b.style.opacity='.5'; });
  btn.style.opacity='1'; btn.classList.add('selected');

  if (type === 'industry') {
    P2State.industry = parseInt(value);
    addUserMsg(INDUSTRIES[P2State.industry-1]);
    P2State.step=2; updateStepTracker();
    setTimeout(() => p2AskProcess(), 450);
  } else if (type === 'process') {
    P2State.process = value;
    addUserMsg(value);
    P2State.step=3; updateStepTracker();
    setTimeout(() => p2AskPains(), 450);
  } else if (type === 'scale-rev') {
    P2State.scale.rev = SCALE_OPTIONS[0][parseInt(value.split('-')[1])];
    addUserMsg(P2State.scale.rev);
    setTimeout(() => p2AskScale2(), 450);
  } else if (type === 'scale-emp') {
    P2State.scale.emp = SCALE_OPTIONS[1][parseInt(value.split('-')[1])];
    addUserMsg(P2State.scale.emp);
    P2State.step=5; updateStepTracker();
    setTimeout(() => p2AskCustom(), 450);
  } else if (type === 'restart') {
    enterPart2();
  } else if (type === 'sim') {
    p2Active=false; resetGame();
  }
}

function p2ConfirmMulti() {
  const ta = document.getElementById('chatTA');
  const otherText = ta ? ta.value.trim() : '';

  // 如果勾選了「其他」但沒填文字
  if (P2State.otherSelected && !otherText) {
    if (ta) { ta.focus(); ta.style.borderColor='var(--warn-border)'; }
    ta.placeholder = '您勾選了「其他」，請在這裡描述您的問題';
    return;
  }

  // 沒有任何選擇
  if (P2State.selectedChips.length === 0 && !otherText) {
    alert('請至少選擇一個痛點，或在下方文字框輸入您的問題說明。');
    return;
  }

  P2State.pains = [...P2State.selectedChips];
  const labels = P2State.pains.map(i => P2State._currentPains[i]);

  // 加入「其他」文字
  if (otherText) {
    P2State.customPain = otherText;
    labels.push('其他：' + otherText);
  }

  addUserMsg('我的痛點：' + labels.join('、'));
  document.querySelectorAll('.chip').forEach(b => { b.disabled=true; b.style.opacity='.5'; });
  if (ta) { ta.value=''; ta.style.height='auto'; ta.style.borderColor=''; }
  P2State.otherSelected = false;
  P2State.step=4; updateStepTracker();
  setTimeout(() => p2AskScale(), 450);
}

function p2SendText() {
  const ta = document.getElementById('chatTA');
  if (!ta) return;
  // 若沒有輸入，把 placeholder 當作建議範本帶入送出
  if (!ta.value.trim() && ta.placeholder && ta.placeholder !== '有其他補充說明嗎？（可跳過，直接選上方選項）') {
    ta.value = ta.placeholder;
  }
  if (!ta.value.trim()) return;
  const txt = ta.value.trim();
  ta.value=''; ta.style.height='auto';

  addUserMsg(txt);

  if (P2State.step === 5) {
    // 把最後一步的輸入獨立存，不覆蓋痛點補充
    P2State.finalInput = txt;
    p2GenerateResult();
  } else if (P2State.step === 3) {
    P2State.customPain += (P2State.customPain ? '\n' : '') + txt;
    P2State.step=4; updateStepTracker();
    setTimeout(() => p2AskScale(), 450);
  } else {
    P2State.customPain += (P2State.customPain ? '\n' : '') + txt;
  }
}

render();

