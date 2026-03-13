/**
 * ApniPower Lab Reference – app.js
 * Interactive lab-test reference for MLT students.
 */

const LAB_TESTS = [
  /* ── Hematology ── */
  {
    id: 1,
    name: "Complete Blood Count (CBC)",
    category: "Hematology",
    icon: "🩸",
    normalRange: "RBC: 4.5–5.5 M/µL | WBC: 4,000–11,000/µL | Hgb: 12–17 g/dL | Plt: 150,000–400,000/µL",
    specimen: "EDTA whole blood",
    method: "Automated cell counter",
    significance: "Screens for anemia, infection, clotting disorders, and many blood diseases. One of the most commonly ordered panels in clinical practice.",
    increased: "Polycythemia, infection/inflammation (WBC), thrombocytosis",
    decreased: "Anemia, leukopenia, thrombocytopenia",
  },
  {
    id: 2,
    name: "Hemoglobin (Hgb)",
    category: "Hematology",
    icon: "🩸",
    normalRange: "Male: 13.5–17.5 g/dL | Female: 12.0–15.5 g/dL",
    specimen: "EDTA whole blood",
    method: "Cyanmethemoglobin method",
    significance: "Measures the oxygen-carrying protein in red blood cells. Key indicator of anemia and polycythemia.",
    increased: "Dehydration, polycythemia vera, high altitude",
    decreased: "Iron-deficiency anemia, thalassemia, blood loss",
  },
  {
    id: 3,
    name: "Erythrocyte Sedimentation Rate (ESR)",
    category: "Hematology",
    icon: "🧫",
    normalRange: "Male: 0–15 mm/hr | Female: 0–20 mm/hr",
    specimen: "Citrated whole blood",
    method: "Westergren method",
    significance: "Non-specific marker of inflammation. Elevated in infection, autoimmune disease, and malignancy.",
    increased: "Infection, rheumatoid arthritis, SLE, TB, malignancy",
    decreased: "Polycythemia, sickle cell disease, hypofibrinogenemia",
  },
  {
    id: 4,
    name: "Prothrombin Time (PT / INR)",
    category: "Hematology",
    icon: "⏱️",
    normalRange: "PT: 11–13.5 sec | INR: 0.8–1.1",
    specimen: "Citrated plasma (3.2 % sodium citrate)",
    method: "Coagulometric method",
    significance: "Evaluates the extrinsic coagulation pathway. Used to monitor warfarin therapy and assess liver function.",
    increased: "Warfarin therapy, Vitamin K deficiency, liver disease, DIC",
    decreased: "Hypercoagulable states (thrombosis risk)",
  },

  /* ── Clinical Chemistry ── */
  {
    id: 5,
    name: "Fasting Blood Glucose (FBG)",
    category: "Clinical Chemistry",
    icon: "🍬",
    normalRange: "70–100 mg/dL (3.9–5.6 mmol/L)",
    specimen: "Fasting serum or plasma",
    method: "Glucose oxidase / hexokinase",
    significance: "Primary test for diabetes and hypoglycemia. Fasting ≥ 126 mg/dL on two occasions = diabetes mellitus.",
    increased: "Diabetes mellitus, stress hyperglycemia, Cushing syndrome",
    decreased: "Insulinoma, Addison's disease, fasting, malnutrition",
  },
  {
    id: 6,
    name: "HbA1c (Glycated Hemoglobin)",
    category: "Clinical Chemistry",
    icon: "📊",
    normalRange: "< 5.7% (normal) | 5.7–6.4% (pre-diabetes) | ≥ 6.5% (diabetes)",
    specimen: "EDTA whole blood",
    method: "HPLC or immunoturbidimetry",
    significance: "Reflects average blood glucose over 2–3 months. Used for diabetes diagnosis and long-term monitoring.",
    increased: "Poorly controlled diabetes, hemolytic anemia (false low)",
    decreased: "Hemolytic anemia reduces HbA1c (shorter RBC lifespan)",
  },
  {
    id: 7,
    name: "Serum Creatinine",
    category: "Clinical Chemistry",
    icon: "🫘",
    normalRange: "Male: 0.74–1.35 mg/dL | Female: 0.59–1.04 mg/dL",
    specimen: "Serum",
    method: "Jaffe reaction (kinetic)",
    significance: "Waste product of muscle metabolism. Key indicator of glomerular filtration and kidney function.",
    increased: "Acute/chronic kidney disease, dehydration, rhabdomyolysis",
    decreased: "Low muscle mass, malnutrition, liver disease",
  },
  {
    id: 8,
    name: "Blood Urea Nitrogen (BUN)",
    category: "Clinical Chemistry",
    icon: "💧",
    normalRange: "7–20 mg/dL",
    specimen: "Serum",
    method: "Urease-GLDH enzymatic method",
    significance: "End product of protein metabolism. Elevated BUN suggests impaired renal excretion or increased protein catabolism.",
    increased: "Renal failure, dehydration, high protein diet, GI bleed",
    decreased: "Liver failure, malnutrition, overhydration",
  },
  {
    id: 9,
    name: "ALT (Alanine Aminotransferase)",
    category: "Clinical Chemistry",
    icon: "🫀",
    normalRange: "7–56 U/L",
    specimen: "Serum",
    method: "Enzymatic UV method",
    significance: "Liver-specific enzyme. Elevated in hepatocellular damage. More specific for liver disease than AST.",
    increased: "Viral hepatitis, drug-induced liver injury, fatty liver, cirrhosis",
    decreased: "Not clinically significant",
  },
  {
    id: 10,
    name: "Lipid Panel (Total Cholesterol)",
    category: "Clinical Chemistry",
    icon: "🫀",
    normalRange: "Desirable: < 200 mg/dL | Borderline: 200–239 | High: ≥ 240",
    specimen: "Fasting serum",
    method: "Cholesterol oxidase / CHOD-PAP",
    significance: "Elevated cholesterol is a major risk factor for cardiovascular disease, atherosclerosis, and stroke.",
    increased: "Familial hypercholesterolemia, hypothyroidism, nephrotic syndrome",
    decreased: "Malnutrition, hyperthyroidism, liver failure",
  },

  /* ── Urinalysis ── */
  {
    id: 11,
    name: "Routine Urine Analysis (R/E)",
    category: "Urinalysis",
    icon: "🟡",
    normalRange: "pH 4.5–8.0 | SG 1.001–1.035 | Glucose: negative | Protein: negative | WBC: 0–5/HPF",
    specimen: "Mid-stream clean-catch urine",
    method: "Dipstick + microscopy",
    significance: "Comprehensive screen for urinary tract infection, kidney disease, and metabolic disorders like diabetes.",
    increased: "Protein ↑: glomerulonephritis | Glucose ↑: diabetes | WBC ↑: UTI",
    decreased: "SG low: diabetes insipidus, overhydration",
  },
  {
    id: 12,
    name: "Urine Culture & Sensitivity",
    category: "Urinalysis",
    icon: "🧫",
    normalRange: "No growth (sterile) | Significant bacteriuria: ≥ 10⁵ CFU/mL",
    specimen: "Mid-stream clean-catch urine (sterile container)",
    method: "Culture on CLED / blood agar, antibiotic disk diffusion",
    significance: "Identifies causative organisms of UTI and guides antibiotic therapy. Gold standard for UTI diagnosis.",
    increased: "E. coli (most common), Klebsiella, Staphylococcus saprophyticus",
    decreased: "N/A",
  },

  /* ── Microbiology ── */
  {
    id: 13,
    name: "Gram Stain",
    category: "Microbiology",
    icon: "🔬",
    normalRange: "Result: Gram +ve (purple) or Gram –ve (pink/red)",
    specimen: "Clinical specimen (wound swab, sputum, CSF, etc.)",
    method: "Crystal violet, Gram's iodine, decolorizer, safranin",
    significance: "Rapid preliminary identification of bacteria. Distinguishes thick-walled (Gram +ve) from thin-walled (Gram –ve) organisms.",
    increased: "Gram +ve: Staphylococci, Streptococci, Pneumococci",
    decreased: "Gram –ve: E. coli, Klebsiella, Pseudomonas, Neisseria",
  },
  {
    id: 14,
    name: "Blood Culture",
    category: "Microbiology",
    icon: "🧪",
    normalRange: "No growth (sterile) within 5 days",
    specimen: "Venous blood (aseptic technique, aerobic + anaerobic bottles)",
    method: "Automated BACTEC system; followed by subculture",
    significance: "Gold standard for detecting bacteremia and septicemia. Two to three sets from different sites improve sensitivity.",
    increased: "Staphylococcus aureus, E. coli, Klebsiella, Streptococcus pneumoniae",
    decreased: "N/A",
  },
  {
    id: 15,
    name: "AFB Smear (Ziehl-Neelsen)",
    category: "Microbiology",
    icon: "🔬",
    normalRange: "Negative (no AFB seen)",
    specimen: "Sputum (early morning, 3 consecutive days)",
    method: "Ziehl-Neelsen stain – carbol fuchsin, decolorizer (H₂SO₄), methylene blue",
    significance: "Rapid screening for Mycobacterium tuberculosis. Positive = red acid-fast bacilli against blue background.",
    increased: "TB, non-tuberculous mycobacteria (NTM)",
    decreased: "N/A",
  },

  /* ── Immunology ── */
  {
    id: 16,
    name: "ABO & Rh Blood Grouping",
    category: "Immunology",
    icon: "🅰️",
    normalRange: "Groups: A, B, AB, O | Rh: Positive or Negative",
    specimen: "EDTA whole blood",
    method: "Tube agglutination (forward + reverse grouping)",
    significance: "Essential before blood transfusion and organ transplant. Mismatched transfusion can cause fatal hemolytic reaction.",
    increased: "N/A",
    decreased: "N/A",
  },
  {
    id: 17,
    name: "Widal Test",
    category: "Immunology",
    icon: "🦠",
    normalRange: "TO titre: < 1:80 | TH titre: < 1:160",
    specimen: "Serum",
    method: "Tube agglutination (Widal method)",
    significance: "Detects antibodies against Salmonella Typhi (typhoid fever). Rising titres in paired sera are diagnostic.",
    increased: "Typhoid fever | ≥ 1:160 TO or ≥ 1:320 TH suggestive in endemic areas",
    decreased: "Early infection, immunocompromised patients",
  },
  {
    id: 18,
    name: "CRP (C-Reactive Protein)",
    category: "Immunology",
    icon: "🔥",
    normalRange: "< 10 mg/L (standard) | hs-CRP < 1 mg/L (low CV risk)",
    specimen: "Serum",
    method: "Immunoturbidimetry / nephelometry",
    significance: "Acute-phase protein produced by the liver. A sensitive but non-specific marker of systemic inflammation and infection.",
    increased: "Bacterial infection, rheumatoid arthritis, MI, post-surgery, malignancy",
    decreased: "Not clinically significant",
  },
];

/* ───── Helpers ───── */
function categoryClass(cat) {
  return "cat-" + cat.toLowerCase().replace(/\s+/g, "-");
}

/* ───── Render cards ───── */
function renderCards(tests) {
  const grid = document.getElementById("cardsGrid");
  const empty = document.getElementById("emptyState");
  const countEl = document.getElementById("resultCount");

  grid.innerHTML = "";

  if (tests.length === 0) {
    empty.classList.remove("hidden");
    countEl.textContent = "0 tests found";
    return;
  }

  empty.classList.add("hidden");
  countEl.textContent = `Showing ${tests.length} of ${LAB_TESTS.length} tests`;

  tests.forEach((test) => {
    const card = document.createElement("div");
    card.className = "card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `View details for ${test.name}`);

    card.innerHTML = `
      <div class="card-header">
        <span class="card-icon">${test.icon}</span>
        <span class="card-name">${test.name}</span>
      </div>
      <span class="card-category ${categoryClass(test.category)}">${test.category}</span>
      <div class="card-range"><strong>Normal:</strong> ${test.normalRange.split("|")[0].trim()}</div>
      <div class="card-hint">Click for full details →</div>
    `;

    card.addEventListener("click", () => openModal(test));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(test);
      }
    });

    grid.appendChild(card);
  });
}

/* ───── Modal ───── */
function openModal(test) {
  document.getElementById("modalTitle").textContent = `${test.icon} ${test.name}`;

  const catEl = document.getElementById("modalCategory");
  catEl.textContent = test.category;
  catEl.className = `card-category ${categoryClass(test.category)}`;

  document.getElementById("modalBody").innerHTML = `
    <div class="modal-row">
      <label>Normal Range</label>
      <div class="value-box">${test.normalRange.replace(/\|/g, "<br>")}</div>
    </div>
    <div class="modal-row">
      <label>Specimen</label>
      <p>${test.specimen}</p>
    </div>
    <div class="modal-row">
      <label>Method</label>
      <p>${test.method}</p>
    </div>
    <div class="modal-row">
      <label>Clinical Significance</label>
      <p>${test.significance}</p>
    </div>
    <div class="modal-row">
      <label>Increased In</label>
      <p>${test.increased}</p>
    </div>
    <div class="modal-row">
      <label>Decreased In</label>
      <p>${test.decreased}</p>
    </div>
  `;

  document.getElementById("modalOverlay").classList.remove("hidden");
  document.getElementById("modalClose").focus();
}

function closeModal() {
  document.getElementById("modalOverlay").classList.add("hidden");
}

/* ───── Filter logic ───── */
function applyFilters() {
  const query = document.getElementById("searchInput").value.toLowerCase().trim();
  const cat = document.getElementById("categoryFilter").value;

  const filtered = LAB_TESTS.filter((t) => {
    const matchCat = !cat || t.category === cat;
    const matchQuery =
      !query ||
      t.name.toLowerCase().includes(query) ||
      t.category.toLowerCase().includes(query) ||
      t.significance.toLowerCase().includes(query);
    return matchCat && matchQuery;
  });

  renderCards(filtered);
}

/* ───── Event listeners ───── */
document.getElementById("searchInput").addEventListener("input", applyFilters);
document.getElementById("categoryFilter").addEventListener("change", applyFilters);

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", (e) => {
  if (e.target === document.getElementById("modalOverlay")) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* ───── Init ───── */
renderCards(LAB_TESTS);
