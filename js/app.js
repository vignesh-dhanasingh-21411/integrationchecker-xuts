/**
 * ============================================================
 *  APP.JS — Product Integration Checker core logic
 * ============================================================
 *  This file reads data from the three config files
 *  (products.js, integrations.js, feature-details.js)
 *  and powers the UI.  You should NOT need to edit this file
 *  to add products, integrations, or feature details — those
 *  all live in config/.
 * ============================================================
 */

/* ── State ─────────────────────────────────────────────────── */
let selectedProducts = { '1': '', '2': '' };

/* ── Boot ──────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    buildDropdowns();
    initSearchSelects();
});

/* ── Build dropdowns from config/products.js ───────────────── */
function buildDropdowns() {
    const list1 = document.getElementById('options-list-1');
    const list2 = document.getElementById('options-list-2');

    PRODUCTS_CONFIG.product1Items.forEach(p => {
        const div = document.createElement('div');
        div.className = 'option-item';
        div.dataset.value = p.value;
        div.textContent = p.label;
        list1.appendChild(div);
    });

    PRODUCTS_CONFIG.product2Items.forEach(p => {
        const div = document.createElement('div');
        div.className = 'option-item';
        div.dataset.value = p.value;
        div.textContent = p.label;
        list2.appendChild(div);
    });
}

/* ── Searchable select widget ──────────────────────────────── */
function initSearchSelects() {
    document.querySelectorAll('.search-select').forEach(selectContainer => {
        const input = selectContainer.querySelector('.search-input');
        const optionsList = selectContainer.querySelector('.options-list');
        const productNum = input.dataset.product;

        input.addEventListener('click', e => {
            e.stopPropagation();
            closeAllSelects();
            selectContainer.classList.add('open');
            optionsList.classList.add('show');
        });

        input.addEventListener('input', e => {
            const term = e.target.value.toLowerCase();
            const options = optionsList.querySelectorAll('.option-item');
            let visible = false;

            options.forEach(opt => {
                const match = opt.textContent.toLowerCase().includes(term);
                opt.classList.toggle('hidden', !match);
                if (match) visible = true;
            });

            let noMsg = optionsList.querySelector('.no-results');
            if (!visible) {
                if (!noMsg) {
                    noMsg = document.createElement('div');
                    noMsg.className = 'no-results';
                    noMsg.textContent = 'No products found';
                    optionsList.appendChild(noMsg);
                }
            } else if (noMsg) {
                noMsg.remove();
            }
        });

        optionsList.addEventListener('click', e => {
            const option = e.target.closest('.option-item');
            if (!option) return;
            e.stopPropagation();

            selectedProducts[productNum] = option.dataset.value;
            input.value = option.textContent;

            optionsList.querySelectorAll('.option-item').forEach(o => o.classList.remove('selected'));
            option.classList.add('selected');

            selectContainer.classList.remove('open');
            optionsList.classList.remove('show');
        });
    });

    document.addEventListener('click', e => {
        if (!e.target.closest('.search-select')) closeAllSelects();
    });
}

function closeAllSelects() {
    document.querySelectorAll('.search-select').forEach(s => {
        s.classList.remove('open');
        s.querySelector('.options-list').classList.remove('show');
    });
}

/* ── Version buttons ───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.version-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const product = this.dataset.product;
            document.querySelectorAll(`[data-product="${product}"]`).forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

/* ── Check Integration ─────────────────────────────────────── */
function checkIntegration() {
    const p1 = selectedProducts['1'];
    const p2 = selectedProducts['2'];

    if (!p1 || !p2)      { alert('Please select both products'); return; }
    if (p1 === p2)        { alert('Please select different products'); return; }

    const v1 = document.querySelector('[data-product="1"].active').dataset.version;
    const v2 = document.querySelector('[data-product="2"].active').dataset.version;

    const key1 = `${p1}-${v1}_${p2}-${v2}`;
    const key2 = `${p2}-${v2}_${p1}-${v1}`;

    const integration = INTEGRATIONS[key1] || INTEGRATIONS[key2];
    displayResults(p1, p2, v1, v2, integration);
}

/* ── Render results ────────────────────────────────────────── */
function displayResults(product1, product2, version1, version2, integration) {
    const resultsDiv = document.getElementById('results');
    const names = PRODUCTS_CONFIG.productNames;
    const p1Name = names[product1];
    const p2Name = names[product2];
    const v1 = version1.charAt(0).toUpperCase() + version1.slice(1);
    const v2 = version2.charAt(0).toUpperCase() + version2.slice(1);

    if (integration && integration.supported) {
        const betaBadge = integration.betaRelease
            ? '<span class="status-badge" style="background:#fff3cd;color:#856404;margin-left:10px;">⚠️ Beta Release</span>'
            : '';

        const docHTML = integration.documentation ? `
            <div class="documentation-section">
                <h3>Documentation & Resources</h3>
                <div class="doc-links">
                    ${integration.documentation.map(d => `
                        <a href="${d.url}" class="doc-link" target="_blank" rel="noopener">
                            <span class="doc-link-text">${d.title}</span>
                        </a>`).join('')}
                </div>
            </div>` : '';

        resultsDiv.innerHTML = `
            <span class="status-badge status-supported">✓ Integration Supported</span>${betaBadge}
            <h2>Integration Available</h2>
            <p class="product-names">${p1Name} (${v1}) ↔ ${p2Name} (${v2})</p>
            <div class="features-section">
                <h3>Supported Integration Features</h3>
                <p style="color:#666;margin-bottom:15px;font-style:italic;">Click on any feature to learn more</p>
                <ul class="feature-list">
                    ${integration.features.map(f => `
                        <li class="feature-item" onclick="showFeatureDetail('${f.id}')" style="cursor:pointer;">
                            ${f.name}
                        </li>`).join('')}
                </ul>
            </div>
            ${docHTML}`;
    } else {
        resultsDiv.innerHTML = `
            <span class="status-badge status-not-supported">✗ Integration Not Supported</span>
            <h2>No Integration Available</h2>
            <p class="product-names">${p1Name} (${v1}) ↔ ${p2Name} (${v2})</p>
            <div class="no-integration">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="15" y1="9" x2="9" y2="15"/>
                    <line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
                <p>This integration is currently not supported. Please contact support for more information.</p>
            </div>`;
    }

    resultsDiv.classList.add('show');
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* ── Feature detail page ───────────────────────────────────── */
function showFeatureDetail(featureId) {
    const feature = FEATURE_DETAILS[featureId];
    if (!feature) { alert('Feature details not available yet.'); return; }

    const resourceHTML = feature.links ? `
        <div class="feature-resources">
            <h3>Related Resources & Documentation</h3>
            <div class="resource-links">
                ${feature.links.map(l => `
                    <a href="${l.url}" class="resource-link" target="_blank" rel="noopener">
                        ${l.title}
                    </a>`).join('')}
            </div>
        </div>` : '';

    const detailDiv = document.getElementById('featureDetail');
    const resultsDiv = document.getElementById('results');

    detailDiv.innerHTML = `
        <button class="back-button" onclick="goBackToResults()">Back to Integration</button>
        <span class="feature-badge">Feature Details</span>
        <h2>${feature.title}</h2>
        <p style="font-size:1.15rem;color:#666;margin-bottom:30px;">${feature.description}</p>
        <div class="feature-content">${feature.content}</div>
        ${resourceHTML}`;

    resultsDiv.classList.remove('show');
    detailDiv.classList.add('show');
    detailDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function goBackToResults() {
    document.getElementById('featureDetail').classList.remove('show');
    const r = document.getElementById('results');
    r.classList.add('show');
    r.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
