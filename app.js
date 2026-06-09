const DISTRICTS = [
  "黄浦区",
  "徐汇区",
  "长宁区",
  "静安区",
  "普陀区",
  "虹口区",
  "杨浦区",
  "闵行区",
  "宝山区",
  "嘉定区",
  "浦东新区",
  "金山区",
  "松江区",
  "青浦区",
  "奉贤区",
  "崇明区",
];

const CONTROL_LINES_2025 = {
  autonomousHigh: 605,
  quota: 605,
  unifiedHigh: 513,
  zhongben: 513,
  vocationalFiveYear: 400,
  secondaryVocational: 350,
};

const SAMPLE_ROWS = [
  ["浦东新区", "042032", "上海市上海中学", "统一招生", 2025, 710, "市实验性示范性高中"],
  ["浦东新区", "102056", "上海交通大学附属中学", "统一招生", 2025, 709.5, "市实验性示范性高中"],
  ["浦东新区", "102057", "复旦大学附属中学", "统一招生", 2025, 710, "市实验性示范性高中"],
  ["浦东新区", "152003", "华东师范大学第二附属中学", "统一招生", 2025, 709.5, "市实验性示范性高中"],
  ["浦东新区", "155001", "上海市实验学校", "统一招生", 2025, 703, "市实验性示范性高中"],
  ["浦东新区", "152005", "上海市浦东复旦附中分校", "统一招生", 2025, 703.5, "市实验性示范性高中"],
  ["浦东新区", "152001", "上海市建平中学", "统一招生", 2025, 699.5, "市实验性示范性高中"],
  ["浦东新区", "152002", "上海市进才中学", "统一招生", 2025, 696.5, "市实验性示范性高中"],
  ["浦东新区", "152006", "上海师范大学附属中学", "统一招生", 2025, 695.5, "市实验性示范性高中"],
  ["浦东新区", "151078", "上海中学东校", "统一招生", 2025, 692, "市实验性示范性高中"],
  ["浦东新区", "153001", "上海市洋泾中学", "统一招生", 2025, 689.5, "市实验性示范性高中"],
  ["浦东新区", "153005", "上海市川沙中学", "统一招生", 2025, 686.5, "市实验性示范性高中"],
  ["浦东新区", "152007", "上海市建平中学筠溪分校", "统一招生", 2025, 678.5, "公办普通高中"],
  ["浦东新区", "152004", "上海南汇中学", "统一招生", 2025, 674, "市实验性示范性高中"],
  ["浦东新区", "153002", "华东师范大学附属东昌中学", "统一招生", 2025, 673, "区实验性示范性高中"],
  ["浦东新区", "153004", "上海市高桥中学", "统一招生", 2025, 672.5, "区实验性示范性高中"],
  ["浦东新区", "152008", "上海市进才中学根林分校", "统一招生", 2025, 670, "公办普通高中"],
  ["浦东新区", "152009", "上海市川沙中学友仁分校", "统一招生", 2025, 665, "公办普通高中"],
  ["浦东新区", "154013", "上海海事大学附属北蔡高级中学", "统一招生", 2025, 663, "公办普通高中"],
  ["浦东新区", "153009", "华东师范大学附属周浦中学", "统一招生", 2025, 654.5, "公办普通高中"],
  ["浦东新区", "153012", "华东理工大学附属浦东科技高级中学", "统一招生", 2025, 654.5, "公办普通高中"],
  ["浦东新区", "153003", "上海市上南中学", "统一招生", 2025, 647.5, "公办普通高中"],
  ["浦东新区", "153008", "上海市新川中学", "统一招生", 2025, 645.5, "公办普通高中"],
  ["浦东新区", "153013", "华东师范大学附属浦东临港高级中学", "统一招生", 2025, 640, "公办普通高中"],
  ["浦东新区", "154011", "上海市陆行中学", "统一招生", 2025, 635, "公办普通高中"],
  ["浦东新区", "153006", "上海市三林中学", "统一招生", 2025, 634.5, "公办普通高中"],
  ["浦东新区", "151087", "上海市浦东外国语学校东校", "统一招生", 2025, 634, "公办普通高中"],
  ["浦东新区", "154016", "上海立信会计金融学院附属高行中学", "统一招生", 2025, 627.5, "公办普通高中"],
  ["浦东新区", "153007", "上海市杨思高级中学", "统一招生", 2025, 626, "公办普通高中"],
  ["浦东新区", "154044", "上海市建平世纪中学", "统一招生", 2025, 619.5, "公办普通高中"],
  ["浦东新区", "154024", "华东师范大学张江实验中学", "统一招生", 2025, 616, "公办普通高中"],
  ["浦东新区", "154015", "上海市育民中学", "统一招生", 2025, 612, "公办普通高中"],
  ["浦东新区", "154050", "上海市南汇第一中学", "统一招生", 2025, 609.5, "公办普通高中"],
  ["浦东新区", "154009", "上海市香山中学", "统一招生", 2025, 603, "公办普通高中"],
  ["浦东新区", "154046", "上海交通大学附属中学浦东实验高中", "统一招生", 2025, 598, "公办普通高中"],
  ["浦东新区", "153010", "上海海洋大学附属大团高级中学", "统一招生", 2025, 596, "公办普通高中"],
  ["浦东新区", "154003", "上海市文建中学", "统一招生", 2025, 589, "公办普通高中"],
  ["浦东新区", "154012", "上海市浦东中学", "统一招生", 2025, 581, "公办普通高中"],
  ["浦东新区", "154017", "上海第二工业大学附属龚路中学", "统一招生", 2025, 578.5, "公办普通高中"],
  ["浦东新区", "154020", "上海市江镇中学", "统一招生", 2025, 572.5, "公办普通高中"],
  ["浦东新区", "154008", "上海市泾南中学", "统一招生", 2025, 569, "公办普通高中"],
  ["浦东新区", "154026", "上海市三林中学东校", "统一招生", 2025, 560.5, "公办普通高中"],
  ["浦东新区", "153011", "上海市新场中学", "统一招生", 2025, 564, "公办普通高中"],
  ["浦东新区", "154045", "上海市高东中学", "统一招生", 2025, 551, "公办普通高中"],
  ["浦东新区", "154010", "上海市沪新中学", "统一招生", 2025, 546, "公办普通高中"],
].map(([district, code, name, batch, year, cutoff, type]) => ({
  district,
  code,
  name,
  batch,
  year,
  cutoff,
  type,
  source: "2025浦东新区统一招生最低分数线",
}));

const RISK_PRESETS = [
  { label: "稳妥", sprintCeiling: 7, edgeBand: 5, stableGap: 14, safeGap: 28 },
  { label: "均衡", sprintCeiling: 12, edgeBand: 6, stableGap: 16, safeGap: 34 },
  { label: "进取", sprintCeiling: 18, edgeBand: 8, stableGap: 20, safeGap: 42 },
];

const DEFAULT_DISTRICT = "普陀区";
const ADMISSION_PLAN_2026 = window.PUTUO_2026_UNIFIED_PLAN || [];
const APPLICATION_NOTES_DATA = window.APPLICATION_NOTES || [];
const EMBEDDED_ROWS = normalizeRows([
  ...SAMPLE_ROWS,
  ...(window.PUTUO_HISTORY_ROWS || []),
]);

const els = {
  score: document.querySelector("#scoreInput"),
  bonus: document.querySelector("#bonusInput"),
  district: document.querySelector("#districtSelect"),
  risk: document.querySelector("#riskInput"),
  riskLabel: document.querySelector("#riskLabel"),
  analyze: document.querySelector("#analyzeButton"),
  reset: document.querySelector("#resetButton"),
  dataStatus: document.querySelector("#dataStatus"),
  headline: document.querySelector("#headline"),
  summary: document.querySelector("#summaryText"),
  metrics: document.querySelector("#metricRow"),
  groupGrid: document.querySelector("#groupGrid"),
  planBody: document.querySelector("#planBody"),
  admissionBody: document.querySelector("#admissionBody"),
  ruleGrid: document.querySelector("#ruleGrid"),
  dataBody: document.querySelector("#dataBody"),
  mainSubject: document.querySelector("#mainSubjectInput"),
  math: document.querySelector("#mathInput"),
  chinese: document.querySelector("#chineseInput"),
  science: document.querySelector("#scienceInput"),
};

const rows = [...EMBEDDED_ROWS];
let activeBatch = "统一招生";
let activeView = "groups";

function normalizeRows(inputRows) {
  return inputRows
    .map((row) => ({
      district: String(row.district || row["区"] || "").trim(),
      code: String(row.code || row["招生代码"] || row["代码"] || "").trim(),
      name: String(row.name || row["招生学校"] || row["学校"] || "").trim(),
      batch: String(row.batch || row["批次"] || "统一招生").trim(),
      year: Number(row.year || row["年份"] || 2025),
      cutoff: Number(row.cutoff || row["录取最低分"] || row["最低分"] || row["分数线"]),
      type: String(row.type || row["类型"] || row["备注"] || "普通高中").trim(),
      source: String(row.source || row["来源"] || "内置数据").trim(),
      mainSubject: nullableNumber(row.mainSubject || row["语数外"]),
      math: nullableNumber(row.math || row["数学"]),
      chinese: nullableNumber(row.chinese || row["语文"]),
      science: nullableNumber(row.science || row["综合测试"]),
      remark: String(row.remark || row["限制"] || row["备注说明"] || "").trim(),
    }))
    .filter((row) => row.district && row.name && Number.isFinite(row.cutoff));
}

function init() {
  DISTRICTS.forEach((district) => {
    const option = document.createElement("option");
    option.value = district;
    option.textContent = district;
    if (district === DEFAULT_DISTRICT) option.selected = true;
    els.district.append(option);
  });

  document.querySelectorAll(".segment").forEach((button) => {
    button.addEventListener("click", () => {
      activeBatch = button.dataset.batch;
      document.querySelectorAll(".segment").forEach((item) => {
        item.classList.toggle("active", item === button);
      });
      analyze();
    });
  });

  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => {
      activeView = button.dataset.view;
      document.querySelectorAll(".tab").forEach((item) => {
        item.classList.toggle("active", item === button);
      });
      document.querySelectorAll(".view").forEach((view) => {
        view.classList.toggle("active", view.id === `${activeView}View`);
      });
    });
  });

  [
    els.score,
    els.bonus,
    els.district,
    els.risk,
    els.mainSubject,
    els.math,
    els.chinese,
    els.science,
  ].forEach((control) => control.addEventListener("input", analyze));

  els.analyze.addEventListener("click", analyze);
  els.reset.addEventListener("click", resetForm);

  renderDataTable();
  renderAdmissionPlan();
  renderRules();
  updateDataStatus();
  analyze();
  if (window.lucide) window.lucide.createIcons();
}

function getInputs() {
  const rawScore = Number(els.score.value);
  const bonus = Number(els.bonus.value || 0);
  const score = Number.isFinite(rawScore) ? rawScore : 0;
  const effectiveScore = Math.max(0, Math.min(750, score + bonus));
  const risk = RISK_PRESETS[Number(els.risk.value)] || RISK_PRESETS[1];
  return {
    score,
    bonus,
    effectiveScore,
    district: els.district.value,
    risk,
    tie: {
      mainSubject: nullableNumber(els.mainSubject.value),
      math: nullableNumber(els.math.value),
      chinese: nullableNumber(els.chinese.value),
      science: nullableNumber(els.science.value),
    },
  };
}

function nullableNumber(value) {
  if (value === "") return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function analyze() {
  const input = getInputs();
  els.riskLabel.textContent = input.risk.label;

  if (!Number.isFinite(input.score) || input.score < 0 || input.score > 750) {
    renderInvalid();
    return;
  }

  if (activeBatch === "控制线") {
    renderControlLineOnly(input);
    return;
  }

  const controlLine =
    activeBatch === "名额分配到区"
      ? CONTROL_LINES_2025.quota
      : CONTROL_LINES_2025.unifiedHigh;
  const districtRows = buildAnalysisRows(input.district, activeBatch);

  const evaluated = districtRows.map((row) => ({
    ...row,
    gap: roundHalf(input.effectiveScore - row.cutoff),
    bucket: classifyGap(input.effectiveScore - row.cutoff, input.risk),
  }));

  const grouped = groupEvaluated(evaluated);
  const plan = buildVolunteerPlan(evaluated, input.risk);
  const conclusion = buildConclusion(input, controlLine, evaluated, plan);

  renderConclusion(conclusion, input, controlLine, evaluated, grouped, plan);
}

function buildAnalysisRows(district, batch) {
  const filtered = rows.filter((row) => row.district === district && row.batch === batch);
  const grouped = new Map();

  filtered.forEach((row) => {
    const key = row.code || row.name;
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key).push(row);
  });

  return [...grouped.values()]
    .map((historyRows) => {
      const history = historyRows
        .slice()
        .sort((a, b) => b.year - a.year || b.cutoff - a.cutoff);
      const latest = history[0];
      const previous = history[1];
      const average = roundHalf(
        history.reduce((sum, row) => sum + row.cutoff, 0) / history.length,
      );
      const admissionPlan = findAdmissionPlan(latest.code, latest.name);
      return {
        ...latest,
        history,
        average,
        trend: previous ? roundHalf(latest.cutoff - previous.cutoff) : null,
        admissionPlan,
        type: admissionPlan?.section || latest.type,
      };
    })
    .sort((a, b) => b.cutoff - a.cutoff || a.name.localeCompare(b.name, "zh-Hans-CN"));
}

function findAdmissionPlan(code, name) {
  return ADMISSION_PLAN_2026.find(
    (plan) => plan.code === code || normalizeSchoolName(plan.name) === normalizeSchoolName(name),
  );
}

function renderInvalid() {
  els.headline.textContent = "分数需要在 0 到 750 之间";
  els.summary.textContent = "请检查中考总分。";
  els.metrics.innerHTML = "";
  els.groupGrid.innerHTML = "";
  els.planBody.innerHTML = "";
}

function renderControlLineOnly(input) {
  const aboveUnified = roundHalf(input.effectiveScore - CONTROL_LINES_2025.unifiedHigh);
  const aboveQuota = roundHalf(input.effectiveScore - CONTROL_LINES_2025.quota);
  const headline =
    input.effectiveScore >= CONTROL_LINES_2025.quota
      ? `已达到 2025 自招/名额分配控制线，高出 ${aboveQuota} 分`
      : input.effectiveScore >= CONTROL_LINES_2025.unifiedHigh
        ? `已达到 2025 普高统招控制线，高出 ${aboveUnified} 分`
        : `低于 2025 普高统招控制线，差 ${Math.abs(aboveUnified)} 分`;

  els.headline.textContent = headline;
  els.summary.textContent = `有效分 ${formatScore(input.effectiveScore)}；2025 普高统招 ${CONTROL_LINES_2025.unifiedHigh}，自招/名额分配 ${CONTROL_LINES_2025.quota}，五年一贯制和中高职贯通 ${CONTROL_LINES_2025.vocationalFiveYear}。`;
  renderMetrics([
    ["有效分", formatScore(input.effectiveScore)],
    ["普高统招线差", formatSigned(aboveUnified)],
    ["名额/自招线差", formatSigned(aboveQuota)],
    ["数据年份", "2025"],
  ]);
  els.groupGrid.innerHTML = "";
  els.planBody.innerHTML = "";
}

function classifyGap(gap, risk) {
  if (gap < -risk.sprintCeiling) return "tooHigh";
  if (gap < -3) return "sprint";
  if (gap < risk.edgeBand) return "edge";
  if (gap < risk.stableGap) return "stable";
  if (gap < 65) return "safe";
  return "low";
}

function groupEvaluated(evaluated) {
  return {
    sprint: evaluated.filter((row) => row.bucket === "sprint").slice(0, 5),
    edge: evaluated.filter((row) => row.bucket === "edge").slice(0, 6),
    stable: evaluated.filter((row) => row.bucket === "stable").slice(0, 8),
    safe: evaluated.filter((row) => row.bucket === "safe").slice(0, 8),
  };
}

function buildVolunteerPlan(evaluated, risk) {
  const eligible = evaluated
    .filter((row) => row.gap >= -risk.sprintCeiling && row.gap <= 82)
    .sort((a, b) => b.cutoff - a.cutoff || a.name.localeCompare(b.name, "zh-Hans-CN"));

  if (eligible.length >= 15) return eligible.slice(0, 15);

  const extras = evaluated
    .filter((row) => !eligible.includes(row) && row.bucket !== "tooHigh")
    .sort((a, b) => b.cutoff - a.cutoff || a.name.localeCompare(b.name, "zh-Hans-CN"));

  return [...eligible, ...extras].slice(0, 15);
}

function buildConclusion(input, controlLine, evaluated, plan) {
  const lineGap = roundHalf(input.effectiveScore - controlLine);
  if (input.effectiveScore < controlLine) {
    return {
      tone: "risk",
      headline: `低于${activeBatch}控制线，先准备征求志愿和中职路径`,
      summary: `${activeBatch}参考控制线 ${controlLine}，当前有效分差 ${Math.abs(lineGap)} 分。`,
    };
  }

  if (!evaluated.length) {
    return {
      tone: "empty",
      headline: `${input.district}暂无${activeBatch}学校线数据`,
      summary: `有效分 ${formatScore(input.effectiveScore)} 已过参考控制线 ${controlLine}，当前网页未内置该区该批次的学校线数据。`,
    };
  }

  const reachable = evaluated.filter((row) => row.bucket !== "tooHigh");
  const edgeOrBetter = evaluated.filter((row) =>
    ["edge", "stable", "safe", "low"].includes(row.bucket),
  );
  const top = reachable[0];
  const safe = evaluated.find((row) => row.bucket === "safe");
  const stableCount = evaluated.filter((row) =>
    ["edge", "stable", "safe", "low"].includes(row.bucket),
  ).length;

  if (!reachable.length) {
    return {
      tone: "risk",
      headline: `${input.district}样例高中线整体偏高，需加入更低梯度志愿`,
      summary: `有效分 ${formatScore(input.effectiveScore)} 已过控制线 ${controlLine}，但当前样例学校没有进入可冲范围。`,
    };
  }

  const topText = top ? `最高可冲 ${top.name}` : "暂无可冲学校";
  const safeText = safe ? `保底可放 ${safe.name}` : "保底梯度不足";
  const planText = plan.length ? `已生成 ${plan.length} 个志愿位` : "暂无志愿位";
  const yearText = dataYearLabel(evaluated);
  const headline =
    edgeOrBetter.length > 0
      ? `${topText}，${safeText}`
      : `${topText}，需要补足稳保学校`;

  return {
    tone: stableCount >= 8 ? "good" : "warn",
    headline,
    summary: `有效分 ${formatScore(input.effectiveScore)}，高出${activeBatch}参考控制线 ${lineGap} 分；按 ${yearText} 历史线推算，${planText}。`,
  };
}

function renderConclusion(conclusion, input, controlLine, evaluated, grouped, plan) {
  els.headline.textContent = conclusion.headline;
  els.summary.textContent = conclusion.summary;

  const lineGap = roundHalf(input.effectiveScore - controlLine);
  const dataCount = evaluated.length;
  const recommended = evaluated.filter((row) => row.bucket !== "tooHigh").length;
  const stable = evaluated.filter((row) => ["edge", "stable", "safe", "low"].includes(row.bucket)).length;
  const yearText = dataYearLabel(evaluated);

  renderMetrics([
    ["有效分", formatScore(input.effectiveScore)],
    ["控制线差", formatSigned(lineGap)],
    ["可排志愿", String(recommended)],
    ["数据年份", yearText],
  ]);

  renderGroups(grouped, dataCount, input);
  renderPlan(plan);
}

function renderMetrics(metrics) {
  els.metrics.innerHTML = metrics
    .map(([label, value]) => `<div class="metric"><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</div>`)
    .join("");
}

function renderGroups(grouped, dataCount, input) {
  if (!dataCount) {
    els.groupGrid.innerHTML = `<div class="school-group"><div class="empty">当前区没有可用学校数据。</div></div>`;
    return;
  }

  const groups = [
    ["sprint", "冲", "历史线略高于当前分"],
    ["edge", "贴线", "线差接近"],
    ["stable", "稳", "历史线低于当前分"],
    ["safe", "保", "保底梯度"],
  ];

  els.groupGrid.innerHTML = groups
    .map(([key, title, subtitle]) => {
      const items = grouped[key];
      const body = items.length
        ? `<div class="school-list">${items.map((row) => renderSchoolRow(row, input)).join("")}</div>`
        : `<div class="empty">暂无${title}档学校</div>`;
      return `<article class="school-group">
        <header>
          <h3>${title}</h3>
          <span class="badge">${subtitle}</span>
        </header>
        ${body}
      </article>`;
    })
    .join("");
}

function renderSchoolRow(row, input) {
  const tieText = buildTieText(row, input.tie);
  const historyText = row.history?.length
    ? ` · 近三年 ${historySummary(row.history)}`
    : "";
  const planText = row.admissionPlan ? ` · 2026计划${row.admissionPlan.seats}人` : "";
  return `<div class="school-row">
    <div>
      <div class="school-name">${escapeHtml(row.name)}</div>
      <div class="school-meta">${escapeHtml(row.code)} · ${escapeHtml(row.type)} · ${row.year}线 ${formatScore(row.cutoff)}${historyText}${planText}${tieText}</div>
    </div>
    <span class="gap ${bucketClass(row.bucket)}">${formatSigned(row.gap)}</span>
  </div>`;
}

function buildTieText(row, tie) {
  const filled = Object.values(tie).some((value) => value !== null);
  if (!filled || Math.abs(row.gap) > 1) return "";
  return " · 贴近末位同分，需核对语数外/数学/语文/综合测试排序";
}

function renderPlan(plan) {
  if (!plan.length) {
    els.planBody.innerHTML = `<tr><td colspan="6">暂无可排志愿。</td></tr>`;
    return;
  }

  els.planBody.innerHTML = plan
    .map(
      (row, index) => `<tr>
        <td>${index + 1}</td>
        <td><strong>${escapeHtml(row.name)}</strong><div class="school-meta">${escapeHtml(row.code)} · ${escapeHtml(row.type)}${row.admissionPlan ? ` · 2026计划${row.admissionPlan.seats}人` : ""}</div></td>
        <td>${formatScore(row.cutoff)}</td>
        <td>${escapeHtml(historySummary(row.history || [row]))}</td>
        <td><span class="gap ${bucketClass(row.bucket)}">${formatSigned(row.gap)}</span></td>
        <td>${bucketLabel(row.bucket)}</td>
      </tr>`,
    )
    .join("");
}

function renderDataTable() {
  const displayRows = [...rows].sort(
    (a, b) =>
      a.district.localeCompare(b.district, "zh-Hans-CN") ||
      b.year - a.year ||
      b.cutoff - a.cutoff,
  );
  els.dataBody.innerHTML = displayRows
    .map(
      (row) => `<tr>
        <td>${escapeHtml(row.district)}</td>
        <td>${escapeHtml(row.code)}</td>
        <td><strong>${escapeHtml(row.name)}</strong></td>
        <td>${escapeHtml(row.batch)}</td>
        <td>${row.year}</td>
        <td>${formatScore(row.cutoff)}</td>
      </tr>`,
	    )
    .join("");
}

function renderAdmissionPlan() {
  if (!els.admissionBody) return;
  if (!ADMISSION_PLAN_2026.length) {
    els.admissionBody.innerHTML = `<tr><td colspan="7">暂无 2026 招生计划数据。</td></tr>`;
    return;
  }

  els.admissionBody.innerHTML = ADMISSION_PLAN_2026.map(
    (row) => `<tr>
      <td>${escapeHtml(row.code)}</td>
      <td><strong>${escapeHtml(row.name)}</strong><div class="school-meta">${escapeHtml(row.address)}</div></td>
      <td>${escapeHtml(row.section)}</td>
      <td>${row.seats}</td>
      <td>${formatMoney(row.fee)}</td>
      <td>${escapeHtml(row.dorm)}</td>
      <td>${escapeHtml(row.note || "")}</td>
    </tr>`,
  ).join("");
}

function renderRules() {
  if (!els.ruleGrid) return;
  els.ruleGrid.innerHTML = APPLICATION_NOTES_DATA.map(
    (note) => `<article class="rule-card">
      <h3>${escapeHtml(note.title)}</h3>
      <p>${escapeHtml(note.text)}</p>
    </article>`,
  ).join("");
}

function updateDataStatus() {
  const districts = new Set(rows.map((row) => row.district)).size;
  els.dataStatus.textContent = `内置 ${rows.length} 条 · ${districts} 区`;
}

function resetForm() {
  els.score.value = 660;
  els.bonus.value = 0;
  els.district.value = DEFAULT_DISTRICT;
  els.risk.value = 1;
  els.mainSubject.value = "";
  els.math.value = "";
  els.chinese.value = "";
  els.science.value = "";
  activeBatch = "统一招生";
  document.querySelectorAll(".segment").forEach((button) => {
    button.classList.toggle("active", button.dataset.batch === activeBatch);
  });
  analyze();
}

function bucketClass(bucket) {
  if (bucket === "tooHigh") return "too-high";
  if (bucket === "low") return "safe";
  return bucket;
}

function bucketLabel(bucket) {
  return {
    sprint: "冲",
    edge: "贴线",
    stable: "稳",
    safe: "保",
    low: "兜底",
    tooHigh: "超冲",
  }[bucket];
}

function formatScore(value) {
  return Number(value).toFixed(Number(value) % 1 === 0 ? 0 : 1);
}

function formatSigned(value) {
  const rounded = roundHalf(value);
  if (rounded > 0) return `+${formatScore(rounded)}`;
  return formatScore(rounded);
}

function dataYearLabel(evaluated) {
  const years = [
    ...new Set(
      evaluated.flatMap((row) => (row.history || [row]).map((item) => item.year)),
    ),
  ].sort((a, b) => a - b);
  if (!years.length) return "无";
  if (years.length === 1) return String(years[0]);
  return `${years[0]}-${years[years.length - 1]}`;
}

function historySummary(history) {
  return history
    .slice()
    .sort((a, b) => b.year - a.year)
    .map((row) => `${String(row.year).slice(2)}:${formatScore(row.cutoff)}`)
    .join(" / ");
}

function normalizeSchoolName(name) {
  return String(name)
    .replace(/[（）()]/g, "")
    .replace(/\s+/g, "")
    .replace("上海华东师范大学附属进华中学", "华东师范大学附属进华中学")
    .replace("华东师范大学第二附属中学普陀校区", "华东师范大学第二附属中学普陀校区");
}

function formatMoney(value) {
  return Number.isFinite(Number(value)) ? `${Number(value).toLocaleString("zh-CN")}元/学期` : "";
}

function roundHalf(value) {
  return Math.round(Number(value) * 2) / 2;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

document.addEventListener("DOMContentLoaded", init);
