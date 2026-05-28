const records = [
  { date: "2026-04-01", workshop: "Assembly", line: "A1", product: "Electronic Expansion Valve", shift: "Day", planned: 1200, actual: 1168, defects: 22, rework: 14, downtime: 35, passRate: 0.981, alarms: 2, batch: "MB-240401-A" },
  { date: "2026-04-01", workshop: "Assembly", line: "A2", product: "Four-way Reversing Valve", shift: "Night", planned: 1000, actual: 932, defects: 48, rework: 31, downtime: 88, passRate: 0.948, alarms: 6, batch: "MB-240401-B" },
  { date: "2026-04-02", workshop: "Assembly", line: "A1", product: "Electronic Expansion Valve", shift: "Day", planned: 1200, actual: 1176, defects: 18, rework: 11, downtime: 28, passRate: 0.985, alarms: 1, batch: "MB-240402-A" },
  { date: "2026-04-02", workshop: "Assembly", line: "A2", product: "Four-way Reversing Valve", shift: "Night", planned: 1000, actual: 918, defects: 55, rework: 36, downtime: 96, passRate: 0.94, alarms: 7, batch: "MB-240401-B" },
  { date: "2026-04-03", workshop: "Machining", line: "M1", product: "Valve Body", shift: "Day", planned: 1500, actual: 1458, defects: 35, rework: 22, downtime: 46, passRate: 0.974, alarms: 3, batch: "MB-240403-C" },
  { date: "2026-04-03", workshop: "Machining", line: "M2", product: "Valve Body", shift: "Night", planned: 1500, actual: 1406, defects: 74, rework: 49, downtime: 110, passRate: 0.939, alarms: 8, batch: "MB-240403-D" },
  { date: "2026-04-04", workshop: "Brazing", line: "B1", product: "Heat Exchanger", shift: "Day", planned: 800, actual: 772, defects: 26, rework: 17, downtime: 58, passRate: 0.966, alarms: 4, batch: "MB-240404-E" },
  { date: "2026-04-04", workshop: "Brazing", line: "B2", product: "Heat Exchanger", shift: "Night", planned: 800, actual: 721, defects: 61, rework: 42, downtime: 132, passRate: 0.925, alarms: 9, batch: "MB-240404-F" },
  { date: "2026-04-05", workshop: "Assembly", line: "A1", product: "Electronic Expansion Valve", shift: "Day", planned: 1200, actual: 1182, defects: 16, rework: 9, downtime: 22, passRate: 0.987, alarms: 1, batch: "MB-240405-A" },
  { date: "2026-04-05", workshop: "Assembly", line: "A2", product: "Four-way Reversing Valve", shift: "Night", planned: 1000, actual: 936, defects: 45, rework: 29, downtime: 82, passRate: 0.952, alarms: 5, batch: "MB-240405-B" },
  { date: "2026-04-06", workshop: "Testing", line: "T1", product: "Thermal Management Module", shift: "Day", planned: 900, actual: 861, defects: 34, rework: 21, downtime: 65, passRate: 0.96, alarms: 4, batch: "MB-240406-G" },
  { date: "2026-04-06", workshop: "Testing", line: "T2", product: "Thermal Management Module", shift: "Night", planned: 900, actual: 806, defects: 70, rework: 47, downtime: 124, passRate: 0.927, alarms: 8, batch: "MB-240406-H" },
  { date: "2026-04-07", workshop: "Assembly", line: "A1", product: "Electronic Expansion Valve", shift: "Day", planned: 1200, actual: 1173, defects: 21, rework: 13, downtime: 31, passRate: 0.982, alarms: 2, batch: "MB-240407-A" },
  { date: "2026-04-07", workshop: "Assembly", line: "A2", product: "Four-way Reversing Valve", shift: "Night", planned: 1000, actual: 921, defects: 52, rework: 35, downtime: 101, passRate: 0.943, alarms: 7, batch: "MB-240401-B" },
  { date: "2026-04-08", workshop: "Machining", line: "M1", product: "Valve Body", shift: "Day", planned: 1500, actual: 1462, defects: 31, rework: 20, downtime: 42, passRate: 0.978, alarms: 3, batch: "MB-240408-C" },
  { date: "2026-04-08", workshop: "Machining", line: "M2", product: "Valve Body", shift: "Night", planned: 1500, actual: 1412, defects: 68, rework: 44, downtime: 104, passRate: 0.944, alarms: 7, batch: "MB-240408-D" },
  { date: "2026-04-09", workshop: "Brazing", line: "B1", product: "Heat Exchanger", shift: "Day", planned: 800, actual: 781, defects: 22, rework: 14, downtime: 44, passRate: 0.972, alarms: 3, batch: "MB-240409-E" },
  { date: "2026-04-09", workshop: "Brazing", line: "B2", product: "Heat Exchanger", shift: "Night", planned: 800, actual: 714, defects: 66, rework: 45, downtime: 138, passRate: 0.918, alarms: 10, batch: "MB-240404-F" },
  { date: "2026-04-10", workshop: "Testing", line: "T1", product: "Thermal Management Module", shift: "Day", planned: 900, actual: 872, defects: 29, rework: 18, downtime: 52, passRate: 0.967, alarms: 3, batch: "MB-240410-G" },
  { date: "2026-04-10", workshop: "Testing", line: "T2", product: "Thermal Management Module", shift: "Night", planned: 900, actual: 812, defects: 64, rework: 43, downtime: 118, passRate: 0.933, alarms: 8, batch: "MB-240410-H" },
  { date: "2026-04-11", workshop: "Assembly", line: "A1", product: "Electronic Expansion Valve", shift: "Day", planned: 1200, actual: 1185, defects: 14, rework: 8, downtime: 18, passRate: 0.989, alarms: 1, batch: "MB-240411-A" },
  { date: "2026-04-11", workshop: "Assembly", line: "A2", product: "Four-way Reversing Valve", shift: "Night", planned: 1000, actual: 946, defects: 39, rework: 25, downtime: 74, passRate: 0.958, alarms: 5, batch: "MB-240411-B" },
  { date: "2026-04-12", workshop: "Testing", line: "T1", product: "Thermal Management Module", shift: "Day", planned: 900, actual: 866, defects: 31, rework: 19, downtime: 57, passRate: 0.964, alarms: 4, batch: "MB-240412-G" },
  { date: "2026-04-12", workshop: "Testing", line: "T2", product: "Thermal Management Module", shift: "Night", planned: 900, actual: 798, defects: 78, rework: 51, downtime: 143, passRate: 0.92, alarms: 10, batch: "MB-240406-H" }
];

const $ = (selector) => document.querySelector(selector);
const ns = "http://www.w3.org/2000/svg";
const filters = {
  product: $("#productFilter"),
  line: $("#lineFilter"),
  shift: $("#shiftFilter")
};

function pct(value) {
  return `${(value * 100).toFixed(1)}%`;
}

function avg(values) {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}

function unique(key) {
  return [...new Set(records.map((record) => record[key]))].sort();
}

function addOptions(select, values, label) {
  select.innerHTML = "";
  const all = document.createElement("option");
  all.value = "all";
  all.textContent = `全部${label}`;
  select.appendChild(all);
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

function metrics(record) {
  const outputRate = record.actual / record.planned;
  const defectRate = record.defects / record.actual;
  const reworkRate = record.rework / record.actual;
  const availability = Math.max(0, (480 - record.downtime) / 480);
  const oee = availability * Math.min(1, outputRate) * (1 - defectRate);
  const risk = riskScore(record, defectRate, reworkRate, outputRate);
  return { outputRate, defectRate, reworkRate, oee, risk };
}

function materialCounts(data = records) {
  return data.reduce((counts, record) => {
    counts[record.batch] = (counts[record.batch] || 0) + 1;
    return counts;
  }, {});
}

function riskScore(record, defectRate, reworkRate, outputRate) {
  const counts = materialCounts();
  let score = 0;
  const reasons = [];

  if (defectRate > 0.06) {
    score += 30;
    reasons.push("高缺陷率");
  }
  if (reworkRate > 0.04) {
    score += 20;
    reasons.push("高返工率");
  }
  if (record.downtime >= 100) {
    score += 20;
    reasons.push("高停机");
  }
  if (record.alarms >= 8) {
    score += 15;
    reasons.push("设备告警频繁");
  }
  if (record.passRate < 0.94) {
    score += 15;
    reasons.push("检验通过率低");
  }
  if (outputRate < 0.92) {
    score += 10;
    reasons.push("产出不足");
  }
  if (counts[record.batch] >= 2 && defectRate > 0.05) {
    score += 10;
    reasons.push("物料批次重复异常");
  }

  let label = "normal";
  if (score >= 70) label = "high";
  else if (score >= 40) label = "medium";
  else if (score > 0) label = "low";

  return { score, label, reasons };
}

function filteredRecords() {
  return records.filter((record) => {
    const productOk = filters.product.value === "all" || record.product === filters.product.value;
    const lineOk = filters.line.value === "all" || record.line === filters.line.value;
    const shiftOk = filters.shift.value === "all" || record.shift === filters.shift.value;
    return productOk && lineOk && shiftOk;
  });
}

function summarize(data, key) {
  const groups = data.reduce((map, record) => {
    const group = record[key];
    if (!map[group]) map[group] = [];
    map[group].push(record);
    return map;
  }, {});

  return Object.entries(groups).map(([name, rows]) => {
    const enriched = rows.map((row) => ({ row, ...metrics(row) }));
    return {
      name,
      count: rows.length,
      outputRate: avg(enriched.map((item) => item.outputRate)),
      defectRate: avg(enriched.map((item) => item.defectRate)),
      reworkRate: avg(enriched.map((item) => item.reworkRate)),
      downtime: avg(rows.map((row) => row.downtime)),
      oee: avg(enriched.map((item) => item.oee)),
      defects: rows.reduce((sum, row) => sum + row.defects, 0),
      alarms: avg(rows.map((row) => row.alarms))
    };
  }).sort((a, b) => b.defectRate - a.defectRate || a.oee - b.oee);
}

function svg(width, height) {
  const element = document.createElementNS(ns, "svg");
  element.setAttribute("viewBox", `0 0 ${width} ${height}`);
  element.setAttribute("preserveAspectRatio", "xMidYMid meet");
  return element;
}

function text(x, y, content, className, anchor = "start") {
  const element = document.createElementNS(ns, "text");
  element.setAttribute("x", x);
  element.setAttribute("y", y);
  element.setAttribute("class", className);
  element.setAttribute("text-anchor", anchor);
  element.textContent = content;
  return element;
}

function rect(x, y, width, height, fill, radius = 4) {
  const element = document.createElementNS(ns, "rect");
  element.setAttribute("x", x);
  element.setAttribute("y", y);
  element.setAttribute("width", Math.max(0, width));
  element.setAttribute("height", Math.max(0, height));
  element.setAttribute("rx", radius);
  element.setAttribute("fill", fill);
  return element;
}

function line(x1, y1, x2, y2, stroke = "#d8e0dc") {
  const element = document.createElementNS(ns, "line");
  element.setAttribute("x1", x1);
  element.setAttribute("y1", y1);
  element.setAttribute("x2", x2);
  element.setAttribute("y2", y2);
  element.setAttribute("stroke", stroke);
  element.setAttribute("stroke-width", "1");
  return element;
}

function renderLineChart(container, data) {
  const chart = svg(860, 330);
  const margin = { top: 24, right: 40, bottom: 58, left: 70 };
  const width = 860 - margin.left - margin.right;
  const height = 330 - margin.top - margin.bottom;
  const maxDefect = Math.max(0.1, ...data.map((item) => item.defectRate));
  const maxDowntime = Math.max(150, ...data.map((item) => item.downtime));
  const barWidth = width / Math.max(1, data.length) * 0.38;
  const gap = width / Math.max(1, data.length);

  chart.appendChild(line(margin.left, margin.top + height, margin.left + width, margin.top + height));
  chart.appendChild(line(margin.left, margin.top, margin.left, margin.top + height));
  chart.appendChild(text(margin.left, 16, "缺陷率 / OEE / 停机", "chart-title"));
  chart.appendChild(text(margin.left + 170, 16, "缺陷率", "legend"));
  chart.appendChild(rect(margin.left + 145, 6, 16, 8, "#c94949", 2));
  chart.appendChild(text(margin.left + 250, 16, "OEE", "legend"));
  chart.appendChild(rect(margin.left + 225, 6, 16, 8, "#15816f", 2));
  chart.appendChild(text(margin.left + 330, 16, "停机分钟", "legend"));
  chart.appendChild(rect(margin.left + 305, 6, 16, 8, "#c78314", 2));

  data.forEach((item, index) => {
    const x = margin.left + index * gap + gap * 0.18;
    const defectHeight = (item.defectRate / maxDefect) * height;
    const oeeHeight = item.oee * height;
    const downtimeHeight = (item.downtime / maxDowntime) * height;
    const base = margin.top + height;

    chart.appendChild(rect(x, base - defectHeight, barWidth, defectHeight, "#c94949"));
    chart.appendChild(rect(x + barWidth + 5, base - oeeHeight, barWidth, oeeHeight, "#15816f"));
    chart.appendChild(rect(x + (barWidth + 5) * 2, base - downtimeHeight, barWidth, downtimeHeight, "#c78314"));
    chart.appendChild(text(x + barWidth, base + 24, item.name, "tick", "middle"));
    chart.appendChild(text(x + barWidth, base - Math.max(defectHeight, oeeHeight, downtimeHeight) - 8, pct(item.defectRate), "bar-label", "middle"));
  });

  container.replaceChildren(chart);
}

function renderMiniBars(container, data, valueKey, color, valueFormatter) {
  const chart = svg(420, 260);
  const margin = { top: 20, right: 28, bottom: 40, left: 150 };
  const width = 420 - margin.left - margin.right;
  const barHeight = 28;
  const maxValue = Math.max(0.01, ...data.map((item) => item[valueKey]));

  data.forEach((item, index) => {
    const y = margin.top + index * 46;
    const barWidth = (item[valueKey] / maxValue) * width;
    chart.appendChild(text(margin.left - 10, y + 19, shortName(item.name), "tick", "end"));
    chart.appendChild(rect(margin.left, y, width, barHeight, "#edf2ef"));
    chart.appendChild(rect(margin.left, y, barWidth, barHeight, color));
    chart.appendChild(text(margin.left + Math.min(width - 4, barWidth + 8), y + 19, valueFormatter(item[valueKey]), "bar-label"));
  });

  container.replaceChildren(chart);
}

function shortName(value) {
  const names = {
    "Electronic Expansion Valve": "Expansion Valve",
    "Four-way Reversing Valve": "Four-way Valve",
    "Thermal Management Module": "Thermal Module",
    "Heat Exchanger": "Heat Exchanger",
    "Valve Body": "Valve Body"
  };
  return names[value] || value;
}

function renderKpis(data) {
  const enriched = data.map((record) => metrics(record));
  const outputRate = avg(enriched.map((item) => item.outputRate));
  const defectRate = avg(enriched.map((item) => item.defectRate));
  const reworkRate = avg(enriched.map((item) => item.reworkRate));
  const oee = avg(enriched.map((item) => item.oee));

  $("#kpiOutput").textContent = pct(outputRate);
  $("#kpiDefect").textContent = pct(defectRate);
  $("#kpiRework").textContent = pct(reworkRate);
  $("#kpiOee").textContent = pct(oee);
  $("#kpiOutputNote").textContent = outputRate >= 0.95 ? "产出基本稳定" : "存在产出波动";
  $("#kpiDefectNote").textContent = defectRate > 0.05 ? "需要关注质量异常" : "缺陷水平可控";
  $("#kpiReworkNote").textContent = reworkRate > 0.035 ? "返工压力偏高" : "返工水平较低";
  $("#kpiOeeNote").textContent = oee >= 0.78 ? "设备效率较稳" : "设备效率存在改善空间";
  $("#recordCount").textContent = `${data.length} 条记录`;
}

function riskRows(data) {
  return data.map((record) => ({ ...record, ...metrics(record) }))
    .filter((record) => record.risk.score > 0)
    .sort((a, b) => b.risk.score - a.risk.score)
    .slice(0, 8);
}

function renderRiskTable(data) {
  const rows = riskRows(data);
  const tbody = $("#riskTable");
  $("#riskCount").textContent = `${rows.length} 条异常`;
  tbody.innerHTML = "";

  if (!rows.length) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 8;
    td.textContent = "当前筛选条件下暂无异常记录";
    tr.appendChild(td);
    tbody.appendChild(tr);
    return;
  }

  rows.forEach((record) => {
    const tr = document.createElement("tr");
    const labelClass = record.risk.label === "high" ? "risk-high" : record.risk.label === "medium" ? "risk-medium" : "risk-low";
    const cells = [
      record.date,
      record.line,
      record.product,
      record.shift === "Day" ? "日班" : "夜班",
      pct(record.defectRate),
      `${record.downtime} min`,
      `<span class="risk-pill ${labelClass}">${record.risk.score}</span>`,
      record.risk.reasons.join("、")
    ];

    cells.forEach((value, index) => {
      const td = document.createElement("td");
      if (index === 6) td.innerHTML = value;
      else td.textContent = value;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
}

function renderInsights(data) {
  const byLine = summarize(data, "line");
  const byShift = summarize(data, "shift");
  const byProduct = summarize(data, "product");
  const worstLine = byLine[0];
  const worstShift = byShift[0];
  const worstProduct = byProduct[0];
  const highRiskCount = data.map((record) => metrics(record)).filter((item) => item.risk.label === "high").length;

  const insights = [
    {
      title: "质量瓶颈",
      body: worstLine ? `${worstLine.name} 产线缺陷率最高，平均缺陷率 ${pct(worstLine.defectRate)}，平均 OEE ${pct(worstLine.oee)}。` : "暂无足够数据。"
    },
    {
      title: "班次差异",
      body: worstShift ? `${worstShift.name === "Day" ? "日班" : "夜班"}的缺陷率为 ${pct(worstShift.defectRate)}，平均停机 ${worstShift.downtime.toFixed(1)} 分钟。` : "暂无足够数据。"
    },
    {
      title: "产品关注",
      body: worstProduct ? `${worstProduct.name} 的缺陷和返工压力相对更高，可结合工艺参数、物料批次和设备告警复盘。` : "暂无足够数据。"
    },
    {
      title: "改进动作",
      body: highRiskCount ? `当前筛选下有 ${highRiskCount} 条高风险记录，建议优先检查设备点检、首件确认、夜班交接和物料批次追踪。` : "当前筛选下未出现高风险记录，可持续观察趋势变化。"
    }
  ];

  $("#insightList").innerHTML = insights.map((item) => `
    <div class="insight">
      <strong>${item.title}</strong>
      <span>${item.body}</span>
    </div>
  `).join("");
}

function render() {
  const data = filteredRecords();
  renderKpis(data);
  renderLineChart($("#lineChart"), summarize(data, "line"));
  renderMiniBars($("#shiftChart"), summarize(data, "shift"), "defectRate", "#356c9d", pct);
  renderMiniBars($("#productChart"), summarize(data, "product").slice(0, 5), "oee", "#15816f", pct);
  renderRiskTable(data);
  renderInsights(data);
}

function init() {
  addOptions(filters.product, unique("product"), "产品");
  addOptions(filters.line, unique("line"), "产线");
  addOptions(filters.shift, unique("shift").map((shift) => shift), "班次");
  filters.shift.querySelector('option[value="Day"]').textContent = "Day / 日班";
  filters.shift.querySelector('option[value="Night"]').textContent = "Night / 夜班";

  Object.values(filters).forEach((select) => select.addEventListener("change", render));
  $("#resetButton").addEventListener("click", () => {
    Object.values(filters).forEach((select) => {
      select.value = "all";
    });
    render();
  });

  render();
}

init();
