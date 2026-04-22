# 🔗 Product Integration Checker

An interactive web app to check integration compatibility between ManageEngine products and third-party tools.

---

## Project Structure

```
integration-checker/
├── index.html                     ← Main page (rarely needs editing)
├── css/
│   └── styles.css                 ← All styling
├── js/
│   └── app.js                     ← App logic (no need to edit)
├── config/                        ← ✏️ EDIT THESE FILES
│   ├── products.js                ← Product dropdown lists & display names
│   ├── integrations.js            ← Integration mappings (the big one)
│   └── feature-details.js         ← Clickable feature detail pages
└── README.md                      ← This file
```

---

## Quick Start

Just open `index.html` in any browser. No server, no build step, no dependencies.

> **Note:** If you double-click `index.html` and dropdowns are empty, some browsers block local file loading. In that case, use a simple local server:
> ```bash
> # Python (any version)
> python3 -m http.server 8080
> # Then visit http://localhost:8080
> ```

---

## How to Edit — Cheat Sheet

### 1️⃣ Add a New Product to the Dropdowns

**File:** `config/products.js`

**Step A:** Add to the correct dropdown array:

```js
// For a Product 1 (left dropdown):
product1Items: [
    ...existing items...
    { value: 'my-new-product', label: 'My New Product (MNP)' }    // ← add here
],

// For a Product 2 (right dropdown):
product2Items: [
    ...existing items...
    { value: 'new-partner', label: 'New Partner Tool' }           // ← add here
],
```

**Step B:** Add the display name:

```js
productNames: {
    ...existing names...
    'my-new-product': 'My New Product (MNP)',
    'new-partner':    'New Partner Tool'
}
```

---

### 2️⃣ Add a New Integration

**File:** `config/integrations.js`

Add a new entry at the bottom, before the closing `};`

```js
// My New Product + New Partner
'my-new-product-cloud_new-partner-cloud': {
    supported: true,
    // betaRelease: true,                          // ← optional, shows Beta badge
    features: [
        { name: 'Asset data sync',        id: 'mnp-np-asset-sync' },
        { name: 'Remote control access',   id: 'mnp-np-remote' }
    ],
    documentation: [
        { title: 'Integration Guide', url: 'https://example.com/guide' },
        { title: 'API Reference',     url: 'https://example.com/api' }
    ]
},
```

**Key naming rule:**
```
product1-value  +  "-"  +  version  +  "_"  +  product2-value  +  "-"  +  version
   ↓                        ↓                      ↓                        ↓
'my-new-product'         'cloud'              'new-partner'            'onprem'
                    or   'onprem'                                  or  'cloud'
```

**Full example key:** `'my-new-product-cloud_new-partner-onprem'`

**Tip:** Any combination NOT listed will automatically show "No Integration Available".

---

### 3️⃣ Add a Feature Detail Page (Optional)

**File:** `config/feature-details.js`

When a user clicks a feature in the results, the app looks up its `id` in this file. Add an entry with the same key:

```js
'mnp-np-asset-sync': {
    title: 'Asset Data Synchronization',
    description: 'Sync inventory assets between MNP and New Partner.',
    content: `
        <h3>Overview</h3>
        <p>Description of how the feature works...</p>

        <div class="feature-highlight">
            <h4>Key Benefits</h4>
            <ul>
                <li>Benefit one</li>
                <li>Benefit two</li>
            </ul>
        </div>

        <h3>Configuration</h3>
        <p>Steps to set it up...</p>
    `,
    links: [
        { title: 'Setup Guide',  url: 'https://example.com/setup' },
        { title: 'API Docs',     url: 'https://example.com/api' }
    ]
},
```

> Features WITHOUT an entry here will show *"Feature details not available yet"* when clicked — this is fine for a work-in-progress.

---

### 4️⃣ Change Styling

**File:** `css/styles.css`

The purple gradient theme is defined in the `body` rule:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

---

## Common Tasks — Copy-Paste Templates

### Add all 4 version combos for a new integration at once:

```js
// ─── Product X + Product Y ─────────────────────────
'product-x-cloud_product-y-cloud': {
    supported: true,
    features: [
        { name: 'Feature A', id: 'px-py-feat-a' },
        { name: 'Feature B', id: 'px-py-feat-b' }
    ],
    documentation: [
        { title: 'Guide', url: 'https://...' }
    ]
},
'product-x-cloud_product-y-onprem': {
    supported: true,
    features: [
        { name: 'Feature A', id: 'px-py-op-feat-a' },
        { name: 'Feature B', id: 'px-py-op-feat-b' }
    ],
    documentation: [
        { title: 'Guide', url: 'https://...' }
    ]
},
'product-x-onprem_product-y-cloud': {
    supported: true,
    features: [
        { name: 'Feature A', id: 'px-op-py-feat-a' },
        { name: 'Feature B', id: 'px-op-py-feat-b' }
    ],
    documentation: [
        { title: 'Guide', url: 'https://...' }
    ]
},
'product-x-onprem_product-y-onprem': {
    supported: true,
    features: [
        { name: 'Feature A', id: 'px-op-py-op-feat-a' },
        { name: 'Feature B', id: 'px-op-py-op-feat-b' }
    ],
    documentation: [
        { title: 'Guide', url: 'https://...' }
    ]
},
```

### Mark an integration as unsupported (explicitly):

```js
'product-x-cloud_product-y-onprem': {
    supported: false
},
```

(Or simply don't add it — missing entries show "Not Supported" by default.)

---

## Feature ID Naming Convention

```
ec-sdp-inventory-sync          ← EC Cloud + SDP Cloud
ec-sdp-op-inventory-sync       ← EC Cloud + SDP On-Prem
ec-op-sdp-inventory-sync       ← EC On-Prem + SDP Cloud
ec-op-sdp-op-inventory-sync    ← EC On-Prem + SDP On-Prem
```

Pattern: `product1-abbrev` + `-op-` (if on-prem) + `product2-abbrev` + `-op-` (if on-prem) + `feature-slug`

---

## Files You Edit vs. Files You Don't

| File | Edit? | Purpose |
|------|-------|---------|
| `config/products.js` | ✅ YES | Add/rename products in dropdowns |
| `config/integrations.js` | ✅ YES | Add/edit integration mappings |
| `config/feature-details.js` | ✅ YES | Add clickable feature explanations |
| `css/styles.css` | ⚙️ Optional | Change look and feel |
| `js/app.js` | ❌ NO | Core logic, no changes needed |
| `index.html` | ❌ NO | Skeleton HTML, no changes needed |

---

## Current Progress

### Endpoint Central (EC) Integrations — Done ✅
| Partner | Combos |
|---------|--------|
| ServiceDesk Plus (SDP) | 4 |
| Asset Explorer (AE) | 4 |
| Event Log Analyzer (ELA) | 2 |
| Analytics Plus (AP) | 3 |
| ServiceNow Basic | 3 |
| ServiceNow SGC | 3 |
| Jira | 3 |
| Zendesk | 2 |
| Freshservice | 2 |
| PowerBI | 4 |
| IBM QRadar | 4 |
| Splunk | 4 |
| Syslog/SIEM | 2 |

### Still To Add
- EC: Tenable, Crowdstrike, Rapid7, CheckPoint, Zoho Flow
- PMP, RAP, PCP, VMP, MDM, ACP, DCP, BSP integrations
