#!/usr/bin/env node
/**
 * Generator script: reads integrations.js, extracts all feature IDs and names,
 * then produces a complete feature-details.js with support-engineer-friendly content.
 *
 * Usage:  node generate-feature-details.js > config/feature-details.js
 */

const fs = require('fs');
const path = require('path');

// ── Read integrations.js ────────────────────────────────────────
const intSrc = fs.readFileSync(
    path.join(__dirname, 'config', 'integrations.js'), 'utf8'
);

// Extract all { name: '...', id: '...' } pairs
const featureRegex = /name:\s*'([^']+)'[\s\S]*?id:\s*'([^']+)'/g;
const features = new Map(); // id -> name (first occurrence wins)
let m;
while ((m = featureRegex.exec(intSrc)) !== null) {
    const name = m[1];
    const id   = m[2];
    if (!features.has(id)) features.set(id, name);
}

console.error(`Found ${features.size} unique feature IDs`);

// ── Product label map ───────────────────────────────────────────
const PRODUCTS = {
    'ec':  'Endpoint Central',
    'pmp': 'Patch Manager Plus',
    'rap': 'Remote Access Plus',
    'pcp': 'Patch Connect Plus',
    'vmp': 'Vulnerability Manager Plus',
    'mdm': 'Mobile Device Manager',
    'acp': 'Application Control Plus',
    'dcp': 'Device Control Plus',
    'bsp': 'Browser Security Plus',
};

const TARGETS = {
    'sdp':        'ServiceDesk Plus',
    'ae':         'Asset Explorer',
    'ap':         'Analytics Plus',
    'ela':        'Event Log Analyzer',
    'snow-basic': 'ServiceNow (Basic)',
    'snow-sgc':   'ServiceNow SGC',
    'jira':       'Jira',
    'zendesk':    'Zendesk',
    'freshservice':'Freshservice',
    'powerbi':    'PowerBI',
    'qradar':     'IBM QRadar',
    'splunk':     'Splunk',
    'syslog':     'Syslog/SIEM',
};

function parseProductFromId(id) {
    // Try to determine source product and target from ID
    for (const [key, label] of Object.entries(PRODUCTS)) {
        if (id.startsWith(key + '-') || id.startsWith(key + '-op-')) {
            return { productKey: key, productLabel: label };
        }
    }
    return { productKey: '', productLabel: '' };
}

function parseTargetFromId(id) {
    for (const [key, label] of Object.entries(TARGETS)) {
        if (id.includes('-' + key + '-') || id.endsWith('-' + key)) {
            return { targetKey: key, targetLabel: label };
        }
    }
    return { targetKey: '', targetLabel: '' };
}

function isOnPrem(id) {
    return id.includes('-op-');
}

function isBeta(id) {
    return id.includes('-beta');
}

// ── Feature content templates ───────────────────────────────────
// Each returns { title, description, content, links }

function makeInventorySync(id, name, product, target) {
    const srcDeploy = isOnPrem(id) ? 'On-Premise' : 'Cloud';
    return {
        title: `Inventory Asset Data Sync (${product.productLabel} → ${target.targetLabel})`,
        description: `Synchronizes hardware and software inventory data from ${product.productLabel} to ${target.targetLabel}, keeping asset records accurate and up to date.`,
        content: `
            <h3>Description</h3>
            <p>This feature automatically pushes hardware and software inventory details collected by ${product.productLabel} into ${target.targetLabel}. It ensures that helpdesk technicians and asset managers always have the latest, accurate asset information without needing to enter data manually.</p>

            <h3>How This Works</h3>
            <ol>
                <li><strong>Inventory scan runs</strong> on managed endpoints (scheduled or on-demand) via the ${product.productLabel} agent.</li>
                <li><strong>Differential data</strong> (only changes since the last scan) is identified and packaged.</li>
                <li><strong>Data is posted</strong> to ${target.targetLabel} via REST API, populating the asset database with hardware specs (Memory, OS, Manufacturer, MAC address, Service tag, etc.) and software details (installed applications, versions, vendor info).</li>
                <li><strong>Subsequent scans</strong> update existing records automatically — new hardware, upgraded RAM, newly installed software, etc.</li>
            </ol>

            <div class="feature-highlight">
                <h4>Data Synced</h4>
                <ul>
                    <li><strong>Hardware:</strong> Memory, OS details, manufacturer, device type, peripherals, machine name, MAC address, service tag</li>
                    <li><strong>Software:</strong> Installed applications, version numbers, vendor details, license grouping</li>
                    <li><strong>Changes:</strong> Hardware upgrades, new software installs, and asset modifications are reflected automatically</li>
                </ul>
            </div>

            <h3>Pre-requisites</h3>
            <ul>
                <li>Integration must be enabled and configured in ${product.productLabel} (Admin → Integrations)</li>
                <li>Valid API key / OAuth credentials for both products</li>
                <li>Network connectivity between ${product.productLabel} and ${target.targetLabel} servers (relevant ports must be open)</li>
                <li>Technician account with appropriate admin privileges in both products</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>If the network link between the two servers is down, sync will be queued and retried but may appear delayed</li>
                <li>Only machines within the Scope of Management (SOM) in ${product.productLabel} are synced</li>
                <li>Very large environments (10,000+ endpoints) may experience initial sync delays; subsequent differential syncs are faster</li>
                <li>Both products must use matching protocols (HTTP/HTTPS) for API communication</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>${product.productLabel}:</strong> Check <code>&lt;installation_dir&gt;/logs</code> for integration-related logs</li>
                <li>Look for entries mentioning "inventory post", "asset sync", or "SDP/AE data post" in the server logs</li>
                <li>If sync fails, verify the API key and test the connection from Admin → Integrations</li>
                <li>Check firewall rules if connection errors appear in logs</li>
            </ul>
        `,
        links: []
    };
}

function makeRemoteControl(id, name, product, target) {
    return {
        title: `Remote Control from ${target.targetLabel} Tickets`,
        description: `Allows technicians to initiate a remote desktop session on an endpoint directly from a ${target.targetLabel} ticket.`,
        content: `
            <h3>Description</h3>
            <p>This feature adds a "Remote Control" action inside ${target.targetLabel} tickets. When a technician is working on a ticket related to a specific computer, they can launch a remote session to that machine directly — without switching to ${product.productLabel} separately.</p>

            <h3>How This Works</h3>
            <ol>
                <li>A technician opens a ticket in ${target.targetLabel} that is associated with a managed endpoint.</li>
                <li>They click the <strong>Remote Control</strong> option (available as a button or action menu item).</li>
                <li>${target.targetLabel} sends a request to ${product.productLabel} with the asset/computer details.</li>
                <li>${product.productLabel} initiates a remote session to the endpoint using its agent.</li>
                <li>The remote desktop session opens, allowing the technician to troubleshoot the issue in real-time.</li>
            </ol>

            <div class="feature-highlight">
                <h4>Key Benefits</h4>
                <ul>
                    <li>No need to switch between applications — start remote sessions directly from tickets</li>
                    <li>Faster resolution times for end-user issues</li>
                    <li>Session details can be logged back to the ticket for audit purposes</li>
                </ul>
            </div>

            <h3>Pre-requisites</h3>
            <ul>
                <li>Integration between ${product.productLabel} and ${target.targetLabel} must be enabled</li>
                <li>${product.productLabel} agent must be installed and online on the target endpoint</li>
                <li>Technician must have remote control permissions in ${product.productLabel}</li>
                <li>The asset in ${target.targetLabel} must be mapped to a managed computer in ${product.productLabel}</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Remote control is only available for endpoints that are currently online and reachable</li>
                <li>Firewall or VPN restrictions may prevent remote sessions in certain network configurations</li>
                <li>The feature requires a browser that supports the remote viewer (pop-up blockers may need to be disabled)</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check ${product.productLabel} server logs for remote session initiation errors</li>
                <li>Verify the agent status on the target endpoint (Agent → Connection status)</li>
                <li>If the session fails to launch, check browser console for pop-up blocker issues</li>
                <li>Review ${target.targetLabel} integration logs for API communication errors</li>
            </ul>
        `,
        links: []
    };
}

function makeDeploySoftware(id, name, product, target) {
    return {
        title: `Deploy Software from ${target.targetLabel} Tickets`,
        description: `Enables technicians to push software installations to managed endpoints directly from ${target.targetLabel} tickets.`,
        content: `
            <h3>Description</h3>
            <p>This feature allows helpdesk technicians working in ${target.targetLabel} to deploy software to a managed endpoint without leaving the ticket interface. The software packages configured in ${product.productLabel} become available as deployment options within ${target.targetLabel} tickets.</p>

            <h3>How This Works</h3>
            <ol>
                <li>A technician opens a ticket in ${target.targetLabel} related to a software request or issue.</li>
                <li>They select the <strong>Deploy Software</strong> action from the integration menu.</li>
                <li>A list of available software packages (pre-configured in ${product.productLabel}) is shown.</li>
                <li>The technician selects the package and target computer, then initiates the deployment.</li>
                <li>${product.productLabel} pushes the software to the endpoint via its agent, and the deployment status is updated.</li>
            </ol>

            <div class="feature-highlight">
                <h4>Key Benefits</h4>
                <ul>
                    <li>Streamlined software deployment workflow from within the helpdesk</li>
                    <li>No need for separate access to ${product.productLabel} for routine software installs</li>
                    <li>Deployment status is tracked and can be logged against the ticket</li>
                </ul>
            </div>

            <h3>Pre-requisites</h3>
            <ul>
                <li>Integration between ${product.productLabel} and ${target.targetLabel} must be enabled</li>
                <li>Software packages must be pre-configured in ${product.productLabel} (Software Deployment module)</li>
                <li>Technician must have software deployment permissions in ${product.productLabel}</li>
                <li>The target endpoint must be online and within the Scope of Management</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Only pre-configured software packages from ${product.productLabel} are available for deployment</li>
                <li>The target endpoint must be reachable at the time of deployment</li>
                <li>Large software packages may take time to deploy depending on network bandwidth</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check ${product.productLabel} Software Deployment logs for deployment status and errors</li>
                <li>Verify the agent status on the target endpoint</li>
                <li>Review integration logs in ${product.productLabel} (Admin → Integrations) for API errors</li>
            </ul>
        `,
        links: []
    };
}

function makeToolsAction(id, name, product, target) {
    return {
        title: `Perform Tools Action from ${target.targetLabel}`,
        description: `Enables technicians to run system management tools (like command prompt, registry editor, task manager, etc.) on a remote endpoint from ${target.targetLabel}.`,
        content: `
            <h3>Description</h3>
            <p>This feature provides access to ${product.productLabel}'s system management tools directly from ${target.targetLabel}. Technicians can run tools such as Command Prompt, Registry Editor, Task Manager, Device Manager, and more on a remote endpoint without leaving the ticket interface.</p>

            <h3>How This Works</h3>
            <ol>
                <li>A technician opens a ticket in ${target.targetLabel} associated with a managed endpoint.</li>
                <li>They select the <strong>Tools</strong> action from the integration options.</li>
                <li>A list of available system tools is presented (e.g., Command Prompt, Task Manager, Registry Editor, System Manager, Disk Defragmenter, etc.).</li>
                <li>The technician selects the desired tool — ${product.productLabel} launches it on the remote endpoint.</li>
                <li>The tool opens in a remote viewer, giving the technician direct access to troubleshoot.</li>
            </ol>

            <div class="feature-highlight">
                <h4>Available Tools</h4>
                <ul>
                    <li>Command Prompt</li>
                    <li>Registry Editor</li>
                    <li>Task Manager</li>
                    <li>Device Manager</li>
                    <li>System Manager</li>
                    <li>Disk Defragmenter</li>
                    <li>And other Windows system tools</li>
                </ul>
            </div>

            <h3>Pre-requisites</h3>
            <ul>
                <li>Integration between ${product.productLabel} and ${target.targetLabel} must be enabled</li>
                <li>${product.productLabel} agent must be installed and online on the target endpoint</li>
                <li>Technician must have tools/remote access permissions in ${product.productLabel}</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Tools action is available only for Windows endpoints managed by ${product.productLabel}</li>
                <li>The endpoint must be online and reachable for the tool to launch</li>
                <li>Some tools may require admin privileges on the remote machine</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check the ${product.productLabel} tools action logs under the server logs directory</li>
                <li>Verify agent connectivity on the target endpoint</li>
                <li>Review integration logs for any API or authentication errors</li>
            </ul>
        `,
        links: []
    };
}

function makeIframe(id, name, product, target) {
    return {
        title: `Load ${product.productLabel} as iFrame within ${target.targetLabel}`,
        description: `Embeds the ${product.productLabel} console within ${target.targetLabel}'s interface, allowing technicians to access ${product.productLabel} features without switching applications.`,
        content: `
            <h3>Description</h3>
            <p>This feature loads the ${product.productLabel} web console as an embedded iFrame inside ${target.targetLabel}. Technicians can view and manage endpoints, deploy patches, run reports, and perform other ${product.productLabel} operations — all from within the ${target.targetLabel} interface.</p>

            <h3>How This Works</h3>
            <ol>
                <li>Once integration is configured, a new tab or section appears in ${target.targetLabel} for ${product.productLabel}.</li>
                <li>Clicking this tab loads the ${product.productLabel} web console as an embedded frame.</li>
                <li>The technician is automatically authenticated (single sign-on) and can use ${product.productLabel}'s full interface.</li>
                <li>This provides a unified experience without having to open a separate browser tab or window.</li>
            </ol>

            <div class="feature-highlight">
                <h4>Key Benefits</h4>
                <ul>
                    <li>Unified console experience — no need to switch between browser tabs</li>
                    <li>Access all ${product.productLabel} features from within ${target.targetLabel}</li>
                    <li>Automatic authentication via integration credentials</li>
                </ul>
            </div>

            <h3>Pre-requisites</h3>
            <ul>
                <li>Integration between ${product.productLabel} and ${target.targetLabel} must be enabled</li>
                <li>Both products must be accessible over the same network (or the browser must be able to reach both servers)</li>
                <li>HTTPS is recommended for both products to avoid mixed-content browser warnings</li>
                <li>Browser must allow iFrame embedding (X-Frame-Options must not block it)</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Some browsers may block iFrame loading due to security policies (mixed-content, CORS, X-Frame-Options)</li>
                <li>If ${product.productLabel} uses a self-signed SSL certificate, the browser may block the iFrame until the certificate is trusted</li>
                <li>Performance may vary based on network latency between the user's browser and both product servers</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>If the iFrame does not load, check the browser console (F12) for blocked content or CORS errors</li>
                <li>Verify both product URLs are correct in the integration settings</li>
                <li>Check ${product.productLabel} server logs for authentication or access errors</li>
            </ul>
        `,
        links: []
    };
}

function makeAssetRemoval(id, name, product, target) {
    const betaNote = isBeta(id) ? ' <strong>(Beta)</strong>' : '';
    const betaWarning = isBeta(id) ? '<li>This feature is currently in <strong>Beta</strong> — behavior may change in future releases. Report any issues to support.</li>' : '';
    return {
        title: `Asset Removal Action (${product.productLabel} → ${target.targetLabel})${isBeta(id) ? ' [Beta]' : ''}`,
        description: `Defines what happens to the asset record in ${target.targetLabel} when a device is removed from the Scope of Management (SOM) in ${product.productLabel}.`,
        content: `
            <h3>Description</h3>
            <p>When a device is removed from the Scope of Management (SOM) in ${product.productLabel}, this feature lets you control what happens to the corresponding asset in ${target.targetLabel}. You can choose to delete, archive, or retain the asset record based on your organization's policy.${betaNote}</p>

            <h3>How This Works</h3>
            <ol>
                <li>An admin removes a device from the Scope of Management in ${product.productLabel} (manually or via policy).</li>
                <li>${product.productLabel} triggers an event notification to ${target.targetLabel} via the integration API.</li>
                <li>Based on the configured action, the corresponding asset in ${target.targetLabel} is either <strong>deleted</strong>, <strong>marked inactive</strong>, or <strong>left unchanged</strong>.</li>
                <li>This ensures asset records stay in sync across both products.</li>
            </ol>

            <div class="feature-highlight">
                <h4>Available Actions</h4>
                <ul>
                    <li><strong>Delete the asset</strong> — Removes the asset record from ${target.targetLabel}</li>
                    <li><strong>Mark as inactive / retired</strong> — Retains the record but marks it as no longer active</li>
                    <li><strong>No action</strong> — Leaves the asset record unchanged in ${target.targetLabel}</li>
                </ul>
            </div>

            <h3>Pre-requisites</h3>
            <ul>
                <li>Integration between ${product.productLabel} and ${target.targetLabel} must be enabled</li>
                <li>Asset sync must be working (assets should already exist in ${target.targetLabel})</li>
                <li>Admin must configure the desired removal action in integration settings</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>If the asset was manually created in ${target.targetLabel} (not synced), the removal action may not find it</li>
                <li>Bulk removal of devices from SOM may cause a brief spike in API calls to ${target.targetLabel}</li>
                ${betaWarning}
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check ${product.productLabel} integration logs for asset removal events</li>
                <li>Verify the asset exists in ${target.targetLabel} before checking removal actions</li>
                <li>Review API response errors in integration server logs</li>
            </ul>
        `,
        links: []
    };
}

function makeTrayicon(id, name, product, target) {
    const betaNote = isBeta(id) ? ' <strong>(Beta)</strong>' : '';
    const betaWarning = isBeta(id) ? '<li>This feature is in <strong>Beta</strong> — behavior may change in future releases</li>' : '';
    return {
        title: `Tray Icon Requests as ${target.targetLabel} Tickets${isBeta(id) ? ' [Beta]' : ''}`,
        description: `End-user requests submitted via the ${product.productLabel} agent tray icon are automatically created as tickets in ${target.targetLabel}.`,
        content: `
            <h3>Description</h3>
            <p>The ${product.productLabel} agent displays a tray icon on managed endpoints. End users can submit requests (e.g., reporting hardware issues, requesting software, etc.) by right-clicking this icon. With this integration, those requests are automatically converted into tickets in ${target.targetLabel}.${betaNote}</p>

            <h3>How This Works</h3>
            <ol>
                <li>An end user right-clicks the ${product.productLabel} agent icon in the system tray.</li>
                <li>They submit a request (e.g., "My mouse is not working" or "I need VPN software installed").</li>
                <li>${product.productLabel} captures this request along with device details (computer name, user, OS, etc.).</li>
                <li>The request is automatically forwarded to ${target.targetLabel} and created as a new ticket.</li>
                <li>Helpdesk technicians can then triage and resolve the ticket with all the context already attached.</li>
            </ol>

            <div class="feature-highlight">
                <h4>Key Benefits</h4>
                <ul>
                    <li>End users do not need to open a browser or know the helpdesk URL — requests go directly from the tray icon</li>
                    <li>Device information is automatically included in the ticket (saves time for both users and technicians)</li>
                    <li>Reduces the volume of walk-up or phone-based support requests</li>
                </ul>
            </div>

            <h3>Pre-requisites</h3>
            <ul>
                <li>Integration between ${product.productLabel} and ${target.targetLabel} must be enabled</li>
                <li>${product.productLabel} agent must be installed on the endpoint with the tray icon enabled</li>
                <li>Tray icon request feature must be enabled in the agent configuration</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Tray icon is only available on Windows endpoints</li>
                <li>If the endpoint is offline, the request will be queued and sent when connectivity is restored</li>
                ${betaWarning}
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check ${product.productLabel} agent logs on the endpoint for tray icon request submission status</li>
                <li>Check server integration logs for ticket creation API calls to ${target.targetLabel}</li>
                <li>If tickets are not being created, verify the integration credentials and API connectivity</li>
            </ul>
        `,
        links: []
    };
}

function makeSSP(id, name, product, target) {
    const betaNote = isBeta(id) ? ' <strong>(Beta)</strong>' : '';
    const betaWarning = isBeta(id) ? '<li>This feature is in <strong>Beta</strong> — behavior may change in future releases</li>' : '';
    const autoInstall = id.includes('auto-install');
    return {
        title: `Self-Service Portal Requests as ${target.targetLabel} Tickets${isBeta(id) ? ' [Beta]' : ''}`,
        description: `Software requests submitted through the ${product.productLabel} Self-Service Portal (SSP) are automatically created as tickets in ${target.targetLabel}.${autoInstall ? ' Upon approval, the software is automatically installed.' : ''}`,
        content: `
            <h3>Description</h3>
            <p>The Self-Service Portal (SSP) in ${product.productLabel} allows end users to request software installations. With this integration, each SSP request is automatically created as a ticket in ${target.targetLabel}. ${autoInstall ? 'When the ticket is approved by a technician, the requested software is <strong>automatically installed</strong> on the user\'s machine — no further manual action needed.' : 'Technicians can then review, approve, and act on the request from within ' + target.targetLabel + '.'}${betaNote}</p>

            <h3>How This Works</h3>
            <ol>
                <li>End user logs into the ${product.productLabel} Self-Service Portal and selects a software package to request.</li>
                <li>A ticket is automatically created in ${target.targetLabel} with the request details (software name, requesting user, machine info).</li>
                <li>A helpdesk technician reviews and approves or rejects the ticket in ${target.targetLabel}.</li>
                ${autoInstall ? '<li>Upon approval, ${product.productLabel} automatically deploys the software to the user\'s endpoint.</li>' : '<li>If approved, the technician can initiate the deployment from ${product.productLabel}.</li>'}
            </ol>

            <div class="feature-highlight">
                <h4>Key Benefits</h4>
                <ul>
                    <li>Standardized software request workflow through the helpdesk</li>
                    <li>Approval process ensures only authorized software is installed</li>
                    ${autoInstall ? '<li>Fully automated deployment after approval — no manual intervention</li>' : '<li>Tickets provide an audit trail for all software requests</li>'}
                </ul>
            </div>

            <h3>Pre-requisites</h3>
            <ul>
                <li>Self-Service Portal must be enabled in ${product.productLabel}</li>
                <li>Integration between ${product.productLabel} and ${target.targetLabel} must be enabled</li>
                <li>Software packages must be published in the SSP catalog</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Only software packages available in the SSP catalog can be requested</li>
                <li>The endpoint must be reachable for deployment after approval</li>
                ${betaWarning}
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check SSP request logs in ${product.productLabel} under Software Deployment → Self-Service Portal</li>
                <li>Verify ticket creation in ${target.targetLabel} and check for integration API errors</li>
                ${autoInstall ? '<li>If software is not auto-installed after approval, check the deployment logs and agent connectivity</li>' : ''}
            </ul>
        `,
        links: []
    };
}

function makeAutoAssign(id, name, product, target) {
    return {
        title: `Auto-Assign Users (${product.productLabel} → ${target.targetLabel})`,
        description: `Automatically assigns the last logged-in user of an endpoint in ${product.productLabel} as the asset owner in ${target.targetLabel}.`,
        content: `
            <h3>Description</h3>
            <p>This feature maps the last logged-in user detected by the ${product.productLabel} agent to asset records in ${target.targetLabel}. It ensures that every asset in ${target.targetLabel} is automatically assigned to its actual user, eliminating the need for manual user-to-asset mapping.</p>

            <h3>How This Works</h3>
            <ol>
                <li>${product.productLabel} tracks user login activity on managed endpoints.</li>
                <li>When an inventory sync occurs, the last logged-in user information is included.</li>
                <li>${target.targetLabel} receives this data and updates the asset's assigned user/owner field.</li>
                <li>This mapping is updated automatically with every subsequent inventory sync.</li>
            </ol>

            <div class="feature-highlight">
                <h4>Key Benefits</h4>
                <ul>
                    <li>Eliminates manual user-to-asset assignment in ${target.targetLabel}</li>
                    <li>Always reflects the current primary user of each device</li>
                    <li>Improves accuracy of asset ownership reports and audits</li>
                </ul>
            </div>

            <h3>Pre-requisites</h3>
            <ul>
                <li>Inventory asset sync between ${product.productLabel} and ${target.targetLabel} must be enabled</li>
                <li>User accounts must exist in both products (or AD/LDAP integration should be configured)</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Shared machines (kiosks, labs) may show frequent user changes</li>
                <li>If a machine has multiple user profiles, only the last logged-in user is assigned</li>
                <li>User mapping depends on matching user identifiers (username/email) between both products</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check user mapping logs in ${product.productLabel} integration settings</li>
                <li>Verify that user accounts match between both products</li>
                <li>Review the inventory sync logs if user assignments are not updating</li>
            </ul>
        `,
        links: []
    };
}

function makeInventoryAlerts(id, name, product, target) {
    return {
        title: `Inventory Alerts as ${target.targetLabel} Tickets`,
        description: `Inventory-related alerts from ${product.productLabel} are automatically created as tickets in ${target.targetLabel} for technician action.`,
        content: `
            <h3>Description</h3>
            <p>When ${product.productLabel} detects inventory-related changes or threshold violations (such as low disk space, hardware changes, or unapproved software installations), an alert is generated. With this integration, these alerts are automatically converted into tickets in ${target.targetLabel}, ensuring they get assigned and resolved through the standard helpdesk workflow.</p>

            <h3>How This Works</h3>
            <ol>
                <li>${product.productLabel} monitors inventory data on managed endpoints.</li>
                <li>When an alert condition is triggered (e.g., disk space falls below threshold, unauthorized hardware detected), an alert is raised.</li>
                <li>The alert details (device name, alert type, description, severity) are posted to ${target.targetLabel} via the integration API.</li>
                <li>A new ticket is created in ${target.targetLabel} with all the alert context.</li>
                <li>Technicians can triage and resolve via the normal ticketing workflow.</li>
            </ol>

            <div class="feature-highlight">
                <h4>Alert Types</h4>
                <ul>
                    <li>Hardware changes (new devices, removed components)</li>
                    <li>Disk space threshold violations</li>
                    <li>Unauthorized software installations</li>
                    <li>Configuration drift alerts</li>
                </ul>
            </div>

            <h3>Pre-requisites</h3>
            <ul>
                <li>Integration between ${product.productLabel} and ${target.targetLabel} must be enabled</li>
                <li>Inventory alert rules must be configured in ${product.productLabel}</li>
                <li>Ticket creation permissions must be granted to the integration API user</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Alert thresholds must be configured manually in ${product.productLabel}; only configured alerts trigger ticket creation</li>
                <li>High-frequency alerts may generate a large number of tickets — use alert suppression rules to manage</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check inventory alert logs in ${product.productLabel} for alert trigger details</li>
                <li>Verify ticket creation in ${target.targetLabel} and check integration API logs for errors</li>
                <li>If tickets are duplicated, review alert suppression rules</li>
            </ul>
        `,
        links: []
    };
}

function makeProhibitedSoftware(id, name, product, target) {
    return {
        title: `Prohibited Software Requests as ${target.targetLabel} Tickets`,
        description: `When prohibited (blacklisted) software is detected on an endpoint by ${product.productLabel}, a ticket is automatically created in ${target.targetLabel}.`,
        content: `
            <h3>Description</h3>
            <p>Organizations can define a list of prohibited software in ${product.productLabel}. When such software is detected on any managed endpoint during an inventory scan, a ticket is automatically created in ${target.targetLabel} alerting the helpdesk. This ensures that policy violations are tracked and addressed promptly.</p>

            <h3>How This Works</h3>
            <ol>
                <li>Admin defines a prohibited software list in ${product.productLabel} (e.g., unauthorized VPNs, pirated software, unapproved browsers).</li>
                <li>${product.productLabel} scans managed endpoints and detects any installed prohibited software.</li>
                <li>A ticket is automatically created in ${target.targetLabel} with details — device name, user, software name, version, detection time.</li>
                <li>Technicians can then investigate, uninstall the software, or take action as per company policy.</li>
            </ol>

            <div class="feature-highlight">
                <h4>Key Benefits</h4>
                <ul>
                    <li>Automated compliance enforcement through the helpdesk</li>
                    <li>Complete audit trail of all prohibited software detections</li>
                    <li>Reduces the security risk of unapproved software running in the environment</li>
                </ul>
            </div>

            <h3>Pre-requisites</h3>
            <ul>
                <li>Prohibited software list must be configured in ${product.productLabel}</li>
                <li>Integration between ${product.productLabel} and ${target.targetLabel} must be enabled</li>
                <li>Inventory scans must be running on the managed endpoints</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Detection depends on inventory scans — newly installed prohibited software is caught at the next scan</li>
                <li>Software that changes its name or disguises itself may not be caught by name-based rules</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check the prohibited software detection logs in ${product.productLabel}</li>
                <li>Verify the software list configuration if expected detections are not occurring</li>
                <li>Review integration API logs for ticket creation errors</li>
            </ul>
        `,
        links: []
    };
}

function makeDeployPackages(id, name, product, target) {
    return {
        title: `Deploy Software Packages from ${target.targetLabel} Tickets`,
        description: `Allows technicians to deploy pre-configured software packages from ${product.productLabel} directly through ${target.targetLabel} tickets.`,
        content: `
            <h3>Description</h3>
            <p>This feature enables helpdesk technicians to deploy user-defined software packages configured in ${product.productLabel} directly from ${target.targetLabel} tickets. It streamlines the software installation workflow by integrating deployment capabilities into the helpdesk.</p>

            <h3>How This Works</h3>
            <ol>
                <li>Software packages are pre-configured in ${product.productLabel} (e.g., Office 365, Zoom, VPN clients).</li>
                <li>A technician working on a ${target.targetLabel} ticket can browse and select from these packages.</li>
                <li>They select the target computer(s) and initiate the deployment.</li>
                <li>${product.productLabel} pushes the software package to the endpoint(s) using its agent.</li>
                <li>Deployment status can be tracked via ${product.productLabel}.</li>
            </ol>

            <h3>Pre-requisites</h3>
            <ul>
                <li>Software packages must be created in ${product.productLabel} under Software Deployment</li>
                <li>Integration between ${product.productLabel} and ${target.targetLabel} must be enabled</li>
                <li>Target endpoints must be online and managed by ${product.productLabel}</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Only packages pre-defined in ${product.productLabel} are available — ad-hoc uploads from ${target.targetLabel} are not supported</li>
                <li>Deployment requires the ${product.productLabel} agent to be running on the target endpoint</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check ${product.productLabel} deployment logs for package push status</li>
                <li>Verify agent connectivity on the target endpoint</li>
                <li>Review integration logs for API communication errors</li>
            </ul>
        `,
        links: []
    };
}

function makeDeployTemplates(id, name, product, target) {
    return {
        title: `Deploy Templates from ${target.targetLabel} Tickets`,
        description: `Allows technicians to deploy user-defined configuration templates from ${product.productLabel} through ${target.targetLabel} tickets.`,
        content: `
            <h3>Description</h3>
            <p>User-defined templates in ${product.productLabel} (such as configuration profiles, scripts, or policies) can be deployed to managed endpoints directly from ${target.targetLabel} tickets. This is useful for standardizing configurations and automating routine setup tasks.</p>

            <h3>How This Works</h3>
            <ol>
                <li>Configuration templates are created in ${product.productLabel} (e.g., security policies, desktop settings, printers, network configurations).</li>
                <li>A technician working on a ticket in ${target.targetLabel} selects the "Deploy Template" action.</li>
                <li>They pick from available templates and select the target computer(s).</li>
                <li>${product.productLabel} applies the template to the selected endpoint(s).</li>
            </ol>

            <h3>Pre-requisites</h3>
            <ul>
                <li>Configuration templates must be created in ${product.productLabel}'s Configurations module</li>
                <li>Integration between ${product.productLabel} and ${target.targetLabel} must be enabled</li>
                <li>Target endpoints must be online and managed by ${product.productLabel}</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Only templates pre-defined in ${product.productLabel} can be deployed</li>
                <li>Template applicability depends on the endpoint's OS and configuration</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check ${product.productLabel} configuration deployment logs for template push status</li>
                <li>Verify agent connectivity on the target endpoint</li>
                <li>Review integration logs for API errors</li>
            </ul>
        `,
        links: []
    };
}

function makeSoftwareRemoval(id, name, product, target) {
    return {
        title: `Software Removal Sync (${product.productLabel} → ${target.targetLabel})`,
        description: `When commercial software is removed from ${product.productLabel}, the corresponding software record in ${target.targetLabel} is updated accordingly.`,
        content: `
            <h3>Description</h3>
            <p>This feature keeps software records in sync between ${product.productLabel} and ${target.targetLabel}. When a commercial software is removed or uninstalled from endpoints managed by ${product.productLabel}, the corresponding software asset record in ${target.targetLabel} is updated to reflect this change.</p>

            <h3>How This Works</h3>
            <ol>
                <li>A software application is removed from managed endpoint(s) in ${product.productLabel} (either manually or via uninstall policy).</li>
                <li>${product.productLabel} detects the change during the next inventory scan.</li>
                <li>The updated software information is synced to ${target.targetLabel} via the integration API.</li>
                <li>${target.targetLabel}'s software asset records are updated (the software is either marked as removed or the record is deleted based on configuration).</li>
            </ol>

            <h3>Pre-requisites</h3>
            <ul>
                <li>Inventory asset sync between ${product.productLabel} and ${target.targetLabel} must be enabled</li>
                <li>Software inventory sync must be active</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Sync occurs at the next inventory scan — real-time removal is not reflected instantly</li>
                <li>Only software originally synced from ${product.productLabel} can be updated via this feature</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check the inventory sync logs for software removal events</li>
                <li>Verify the software record still exists in ${target.targetLabel} if the update is not happening</li>
                <li>Review integration API logs for errors</li>
            </ul>
        `,
        links: []
    };
}

function makeAssetPost(id, name, product, target) {
    return {
        title: `Asset Data Post (${product.productLabel} → ${target.targetLabel})`,
        description: `Posts asset (hardware and software) inventory data from ${product.productLabel} to ${target.targetLabel}'s CMDB.`,
        content: `
            <h3>Description</h3>
            <p>This feature pushes endpoint inventory data from ${product.productLabel} into ${target.targetLabel}'s Configuration Management Database (CMDB). It populates computer records, software packages, network adapters, and other asset details automatically.</p>

            <h3>How This Works</h3>
            <ol>
                <li>${product.productLabel} collects inventory data from managed endpoints via its agent.</li>
                <li>Data is formatted and posted to ${target.targetLabel} using the import API.</li>
                <li>${target.targetLabel}'s CMDB tables are populated — <code>cmdb_ci_computer</code> (computers), <code>cmdb_ci_spkg</code> (software), <code>cmdb_software_instance</code> (installations), <code>cmdb_ci_network_adapter</code> (NICs).</li>
                <li>Subsequent syncs update existing records and add new assets.</li>
            </ol>

            <div class="feature-highlight">
                <h4>Data Posted</h4>
                <ul>
                    <li><strong>Computer details:</strong> Name, OS, RAM, CPU, disk, manufacturer, serial number, IP address, MAC address</li>
                    <li><strong>Software inventory:</strong> Installed applications, versions, vendors</li>
                    <li><strong>Network adapters:</strong> NIC details, IP addresses, MAC addresses</li>
                    <li><strong>Manufacturer info:</strong> Populated in the <code>core_company</code> table</li>
                </ul>
            </div>

            <h3>Pre-requisites</h3>
            <ul>
                <li>A valid ServiceNow instance with CMDB tables accessible</li>
                <li>${target.targetLabel.includes('SGC') ? 'The ManageEngine Service Graph Connector app must be installed in ServiceNow' : 'API access credentials (OAuth or Basic Auth) for ServiceNow'}</li>
                <li>Integration must be configured in ${product.productLabel} (Admin → Integrations → ServiceNow)</li>
                <li>Network connectivity between ${product.productLabel} server and the ServiceNow instance</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Very large environments may require batch processing for initial sync</li>
                <li>Custom CMDB fields need to be mapped separately</li>
                <li>Rate limits on the ServiceNow API may throttle sync for large data volumes</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check the ServiceNow integration logs in ${product.productLabel} — look for <code>SNOW_SYNC_LOGGER</code> entries</li>
                <li>Verify API credentials and test connectivity from Admin → Integrations → ServiceNow</li>
                <li>In ServiceNow, check the Import Set logs for data import errors</li>
            </ul>
        `,
        links: []
    };
}

function makeSnowAssetRemoval(id, name, product, target) {
    return {
        title: `Asset Removal from ${target.targetLabel} (${product.productLabel})`,
        description: `Controls whether to remove the asset record from ${target.targetLabel} when the device is removed from ${product.productLabel}'s Scope of Management (SOM).`,
        content: `
            <h3>Description</h3>
            <p>This feature allows administrators to choose what happens to asset records in ${target.targetLabel} when a device is removed from the Scope of Management in ${product.productLabel}. The asset can be deleted from the CMDB, marked as retired, or left as-is.</p>

            <h3>How This Works</h3>
            <ol>
                <li>A device is removed from ${product.productLabel}'s Scope of Management.</li>
                <li>${product.productLabel} checks the configured removal policy for this integration.</li>
                <li>Based on the policy, the corresponding CMDB record in ${target.targetLabel} is updated or deleted via the API.</li>
            </ol>

            <h3>Pre-requisites</h3>
            <ul>
                <li>Asset data post integration must be active (assets must already exist in ${target.targetLabel})</li>
                <li>Removal action must be configured in the integration settings</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Assets manually created in ${target.targetLabel} (not synced) will not be affected</li>
                <li>Bulk SOM removal may queue many API calls</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check ServiceNow integration logs for removal API calls</li>
                <li>Verify the asset's CI sys_id matches between the two products</li>
            </ul>
        `,
        links: []
    };
}

function makeOwnerAssign(id, name, product, target) {
    return {
        title: `Asset Owner Assignment in ${target.targetLabel} (${product.productLabel})`,
        description: `Assigns the last logged-in user on the endpoint as the asset owner in ${target.targetLabel}.`,
        content: `
            <h3>Description</h3>
            <p>This feature automatically maps the last logged-in user detected by ${product.productLabel}'s agent to the corresponding computer record in ${target.targetLabel}. The user is assigned as the asset owner in the CMDB, ensuring accurate ownership tracking.</p>

            <h3>How This Works</h3>
            <ol>
                <li>${product.productLabel} agents track user login activity on managed endpoints.</li>
                <li>During asset data sync, the last logged-in user information is included in the data posted to ${target.targetLabel}.</li>
                <li>The <code>assigned_to</code> field on the computer's CMDB record is updated with the matched user.</li>
            </ol>

            <h3>Pre-requisites</h3>
            <ul>
                <li>Asset data post to ${target.targetLabel} must be active</li>
                <li>User records must exist in ${target.targetLabel} and match ${product.productLabel}'s user data (by username, email, or employee ID)</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>If user records don't match between the two systems, the assignment will fail silently</li>
                <li>Shared/kiosk machines may show frequently changing owners</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check ServiceNow sync logs for user mapping errors</li>
                <li>Verify user records exist in both systems with matching identifiers</li>
            </ul>
        `,
        links: []
    };
}

function makeSnowSoftwareDeploy(id, name, product, target) {
    return {
        title: `Deploy Software from ${target.targetLabel} Tickets`,
        description: `Allows ServiceNow technicians to deploy software to managed endpoints via ${product.productLabel} directly from ServiceNow tickets.`,
        content: `
            <h3>Description</h3>
            <p>This feature enables ServiceNow technicians to trigger software deployments on managed endpoints through ${product.productLabel} without leaving the ServiceNow interface. It's available when the ${target.targetLabel.includes('SGC') ? 'Service Graph Connector' : 'basic integration'} is configured.</p>

            <h3>How This Works</h3>
            <ol>
                <li>A technician opens a ServiceNow incident or request related to a managed endpoint.</li>
                <li>They select the "Deploy Software" option provided by the ${product.productLabel} integration.</li>
                <li>Available software packages from ${product.productLabel} are listed.</li>
                <li>The technician selects the package and initiates deployment.</li>
                <li>${product.productLabel} executes the deployment via its agent on the target endpoint.</li>
            </ol>

            <h3>Pre-requisites</h3>
            <ul>
                <li>${target.targetLabel.includes('SGC') ? 'ManageEngine Service Graph Connector app must be installed in ServiceNow' : 'ServiceNow basic integration must be configured'}</li>
                <li>Software packages must be pre-configured in ${product.productLabel}</li>
                <li>Target endpoints must be online and managed</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Only pre-configured packages from ${product.productLabel} are available</li>
                <li>Deployment depends on agent connectivity</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check ${product.productLabel} deployment and ServiceNow integration logs</li>
                <li>Verify agent status on the target endpoint</li>
            </ul>
        `,
        links: []
    };
}

function makeSoftwareMetering(id, name, product, target) {
    return {
        title: `Software Metering Data to ${target.targetLabel} (${product.productLabel})`,
        description: `Posts software usage/metering data from ${product.productLabel} to ${target.targetLabel} for Software Asset Management (SAM).`,
        content: `
            <h3>Description</h3>
            <p>This feature syncs software metering (usage tracking) data from ${product.productLabel} to ${target.targetLabel}'s Software Asset Management (SAM) module. It provides visibility into which software is actively used, how frequently, and by whom — helping with license optimization and compliance.</p>

            <h3>How This Works</h3>
            <ol>
                <li>${product.productLabel} tracks software usage on managed endpoints — recording which applications are launched, how long they run, and by which users.</li>
                <li>This metering data is periodically posted to ${target.targetLabel}'s SAM module via the <code>/api/x_manen_sgec/software_usage/updateSoftwareUsage</code> API endpoint.</li>
                <li>ServiceNow's SAM module uses this data for license reclamation, compliance reporting, and cost optimization.</li>
            </ol>

            <div class="feature-highlight">
                <h4>Data Synced</h4>
                <ul>
                    <li>Application name, version, and vendor</li>
                    <li>Usage frequency and duration per endpoint</li>
                    <li>Last used timestamp</li>
                    <li>User who launched the application</li>
                </ul>
            </div>

            <h3>Pre-requisites</h3>
            <ul>
                <li>ServiceNow SGC (Service Graph Connector) app must be installed in ServiceNow</li>
                <li>SAM (Software Asset Management) must be enabled in ServiceNow</li>
                <li>Software metering must be enabled in ${product.productLabel}</li>
                <li>Integration must be configured and active</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Software metering data is only available for Windows endpoints</li>
                <li>SAM must be licensed in ServiceNow for this data to be actionable</li>
                <li>Metering data is posted periodically (not real-time)</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check the ServiceNow sync logs in ${product.productLabel} for metering data post status</li>
                <li>Verify SAM is enabled: check the <code>isSAMEnabled</code> API call in the logs</li>
                <li>Review ServiceNow import logs for data ingestion errors</li>
            </ul>
        `,
        links: []
    };
}

function makeDefaultSync(id, name, product, target, syncNum) {
    const syncDescriptions = {
        '1': {
            data: 'Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
            detail: 'organizational structure, user accounts, patch compliance, software usage tracking, USB device audit trails, and application-to-patch mappings'
        },
        '2': {
            data: 'Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
            detail: 'security posture data (antivirus, firewall, encryption status), patch compliance summaries, software inventories, group memberships, and computer-software relationships'
        },
        '3': {
            data: 'Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
            detail: 'computer inventory, patch catalog, patch development lifecycle status, alert history, digital certificate information, and technician-to-computer assignments'
        }
    };
    const sync = syncDescriptions[syncNum] || syncDescriptions['1'];
    return {
        title: `Default Data Sync Module ${syncNum} (${product.productLabel} → ${target.targetLabel})`,
        description: `Syncs default data set ${syncNum} from ${product.productLabel} to ${target.targetLabel}: ${sync.data}.`,
        content: `
            <h3>Description</h3>
            <p>This is one of the default data synchronization modules between ${product.productLabel} and ${target.targetLabel}. It automatically transfers ${sync.detail} to ${target.targetLabel} for analytics, BI reporting, and dashboarding.</p>

            <h3>How This Works</h3>
            <ol>
                <li>Once the integration is configured, ${product.productLabel} periodically exports the designated data modules.</li>
                <li>Data is sent to ${target.targetLabel} via a secure sync mechanism (API/stream sync).</li>
                <li>${target.targetLabel} ingests the data and makes it available for reports, dashboards, and custom analytics.</li>
                <li>Sync runs on a scheduled interval and can also be triggered manually.</li>
            </ol>

            <div class="feature-highlight">
                <h4>Data Included in This Sync</h4>
                <p>${sync.data}</p>
            </div>

            <h3>Pre-requisites</h3>
            <ul>
                <li>Integration between ${product.productLabel} and ${target.targetLabel} must be enabled</li>
                <li>${target.targetLabel} workspace/instance must be set up and accessible</li>
                <li>Default sync modules must be selected in the integration configuration</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Data volume for initial sync can be large — allow time for the first full sync to complete</li>
                <li>Sync frequency depends on the configured schedule; real-time data is not available</li>
                <li>Data is read-only in ${target.targetLabel} — changes must be made in ${product.productLabel}</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check ${product.productLabel} analytics/BI integration logs for sync status</li>
                <li>Verify the connection status in the integration settings page</li>
                <li>If data is missing, confirm the correct sync modules are selected</li>
            </ul>
        `,
        links: []
    };
}

function makeOptionalSync(id, name, product, target, syncNum) {
    const syncDescriptions = {
        '1': {
            data: 'Users, Groups, BIOS, CD ROM Drive, Monitor, Disk drives, Logical disk, Motherboard, Keyboard, Mouse, Physical memory',
            detail: 'detailed hardware component inventory including user/group data, BIOS details, peripheral devices, storage drives, display monitors, and input devices'
        },
        '2': {
            data: 'POTS modem, Processors, Serial port, Video controller, USB controller, Printers, Drivers, Share details, File details',
            detail: 'extended hardware details including processors, video and USB controllers, printer configurations, driver inventory, network shares, and file-level details'
        },
        '3': {
            data: 'User logon history, Scheduled tasks info, Software audit history, Hardware audit history, Computer and hardware mapping, Computer and group association, Custom groups and associated users',
            detail: 'audit and historical data including login history, scheduled tasks, software and hardware change history, and organization group memberships'
        },
        '4': {
            data: 'Trusted Platform Module (TPM)',
            detail: 'Trusted Platform Module (TPM) details including TPM version, status, and attestation data from managed endpoints'
        }
    };
    const sync = syncDescriptions[syncNum] || syncDescriptions['1'];
    return {
        title: `Optional Data Sync Module ${syncNum} (${product.productLabel} → ${target.targetLabel})`,
        description: `Syncs optional data set ${syncNum} from ${product.productLabel} to ${target.targetLabel}: ${sync.data}.`,
        content: `
            <h3>Description</h3>
            <p>This is an optional data synchronization module between ${product.productLabel} and ${target.targetLabel}. Unlike default sync modules which are enabled automatically, this module must be explicitly enabled. It transfers ${sync.detail} to ${target.targetLabel} for enhanced analytics and reporting.</p>

            <h3>How This Works</h3>
            <ol>
                <li>Enable this optional sync module in the ${product.productLabel} integration settings (Admin → Integrations → ${target.targetLabel} → Optional Modules).</li>
                <li>Once enabled, ${product.productLabel} begins collecting and exporting this additional data set.</li>
                <li>Data flows to ${target.targetLabel} on the regular sync schedule alongside the default modules.</li>
            </ol>

            <div class="feature-highlight">
                <h4>Data Included in This Sync</h4>
                <p>${sync.data}</p>
            </div>

            <h3>Pre-requisites</h3>
            <ul>
                <li>Default data sync must be enabled first</li>
                <li>This optional module must be explicitly selected in the integration settings</li>
                <li>Sufficient storage/licensing in ${target.targetLabel} for additional data</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Enabling additional modules increases data volume and may impact sync duration</li>
                <li>Some data (e.g., file details) can be very large for environments with many endpoints</li>
                <li>Optional modules may not be available for all product editions</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check ${product.productLabel} analytics integration logs for optional module sync status</li>
                <li>If data is not appearing, verify the module is enabled in integration settings</li>
                <li>Check for errors related to data volume or timeout during large syncs</li>
            </ul>
        `,
        links: []
    };
}

function makeComparators(id, name, product, target) {
    return {
        title: `ELA Comparators (${product.productLabel} → Event Log Analyzer)`,
        description: `Comparators from ${product.productLabel} can be created in Event Log Analyzer, enabling custom correlation rules and alert profiles.`,
        content: `
            <h3>Description</h3>
            <p>This feature allows data from ${product.productLabel} to be used as comparators in Event Log Analyzer (ELA). Comparators act as reference data sets that ELA uses to create custom correlation rules and alert profiles — for example, comparing logged events against your inventory data to detect anomalies.</p>

            <h3>How This Works</h3>
            <ol>
                <li>${product.productLabel} exports relevant data (e.g., managed computers, software lists, patch status) to ELA.</li>
                <li>In ELA, administrators can create comparators using this data.</li>
                <li>Custom correlation rules can reference these comparators — e.g., "Alert if a login event occurs on a machine NOT in the ${product.productLabel} inventory."</li>
                <li>Alert profiles can be created to trigger notifications based on comparator matches.</li>
            </ol>

            <div class="feature-highlight">
                <h4>Use Cases</h4>
                <ul>
                    <li>Detect login events on unmanaged machines</li>
                    <li>Alert on events from machines missing critical patches</li>
                    <li>Correlate security events with endpoint compliance status</li>
                </ul>
            </div>

            <h3>Pre-requisites</h3>
            <ul>
                <li>Integration between ${product.productLabel} and ELA must be enabled</li>
                <li>ELA must be licensed with correlation and alerting features</li>
                <li>Data sync must be active so that comparator data is current</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Comparators are only as accurate as the last sync — stale data may cause false positives</li>
                <li>Complex correlation rules may impact ELA performance</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check ELA integration logs for comparator data import status</li>
                <li>Verify data freshness in the comparator table within ELA</li>
                <li>Review ${product.productLabel} integration logs for export errors</li>
            </ul>
        `,
        links: []
    };
}

function makePatchData(id, name, product, target) {
    return {
        title: `Patch Data Sync to Event Log Analyzer (${product.productLabel})`,
        description: `Patch data from ${product.productLabel} is pulled into Event Log Analyzer (ELA), enabling incident-based patch approval and installation workflows.`,
        content: `
            <h3>Description</h3>
            <p>This feature syncs patch status and inventory data from ${product.productLabel} into Event Log Analyzer (ELA). With this data in ELA, administrators can approve and install patches directly through incident workflows — for example, when a security event correlates with a missing patch, the patch can be approved and deployed as part of the incident response.</p>

            <h3>How This Works</h3>
            <ol>
                <li>${product.productLabel} exports patch scan results (missing patches, installed patches, severity levels) to ELA.</li>
                <li>ELA correlates this patch data with security events and logs.</li>
                <li>When an incident is identified (e.g., a vulnerability exploit attempt on an unpatched machine), ELA can trigger a patch approval workflow.</li>
                <li>Approved patches are deployed via ${product.productLabel} as part of the incident response.</li>
            </ol>

            <div class="feature-highlight">
                <h4>Key Benefits</h4>
                <ul>
                    <li>Incident-driven patching — patches are prioritized based on actual threats</li>
                    <li>Reduced time from threat detection to remediation</li>
                    <li>Centralized visibility of endpoint patch status alongside security events</li>
                </ul>
            </div>

            <h3>Pre-requisites</h3>
            <ul>
                <li>Integration between ${product.productLabel} and ELA must be enabled</li>
                <li>Patch management module must be active in ${product.productLabel}</li>
                <li>ELA must have incident management capabilities configured</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Patch approval through ELA still requires appropriate permissions in ${product.productLabel}</li>
                <li>Patch deployment depends on the endpoint being online and reachable</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check patch sync logs in ${product.productLabel} for data export status</li>
                <li>Verify patch data visibility in ELA's dashboard</li>
                <li>Review incident workflow logs in ELA for patch approval actions</li>
            </ul>
        `,
        links: []
    };
}

function makeVulnerabilityData(id, name, product, target) {
    const targetName = target.targetLabel || 'Event Log Analyzer';
    return {
        title: `Vulnerability Data Sync (${product.productLabel} → ${targetName})`,
        description: `Sends vulnerability and system misconfiguration data from ${product.productLabel} to ${targetName} for security analysis and correlation.`,
        content: `
            <h3>Description</h3>
            <p>This feature syncs vulnerability scan results and system misconfiguration data from ${product.productLabel} to ${targetName}. It enables security teams to identify vulnerable devices, correlate vulnerabilities with security events, and create custom alerts for critical vulnerabilities.</p>

            <h3>How This Works</h3>
            <ol>
                <li>${product.productLabel} performs vulnerability scans on managed endpoints.</li>
                <li>Vulnerability data (CVE IDs, severity, affected software, affected machines) and system misconfiguration details are packaged.</li>
                <li>Data is sent to ${targetName} via the integration channel (API/syslog depending on the target).</li>
                <li>${targetName} ingests the data and makes it available for correlation rules, dashboards, and alert profiles.</li>
            </ol>

            <div class="feature-highlight">
                <h4>Data Synced</h4>
                <ul>
                    <li>Vulnerability details: CVE ID, severity rating, affected software and version</li>
                    <li>System misconfigurations: Security policy deviations, missing hardening settings</li>
                    <li>Affected machines: Hostname, IP address, OS version</li>
                    <li>Remediation status: Patched, pending, or ignored</li>
                </ul>
            </div>

            <h3>Pre-requisites</h3>
            <ul>
                <li>Vulnerability scanning must be enabled in ${product.productLabel}</li>
                <li>Integration between ${product.productLabel} and ${targetName} must be configured</li>
                <li>Network connectivity between ${ product.productLabel} and ${targetName} must be available</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Vulnerability data is synced periodically — not real-time</li>
                <li>Large environments with many vulnerabilities may experience sync delays</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check the vulnerability integration logs in ${product.productLabel}</li>
                <li>Verify data appears in ${targetName}'s vulnerability dashboard</li>
                <li>Review API/syslog connection logs for communication errors</li>
            </ul>
        `,
        links: []
    };
}

function makeAuditLogs(id, name, product, target) {
    let method = '';
    if (id.includes('rest')) method = 'REST API connector';
    else if (id.includes('syslog')) method = 'Syslog integration';
    else method = 'integration channel';

    return {
        title: `Audit Logs Sync (${product.productLabel} → ${target.targetLabel})${method !== 'integration channel' ? ' via ' + method : ''}`,
        description: `Syncs Action log viewer (audit log) data from ${product.productLabel} to ${target.targetLabel}${method !== 'integration channel' ? ' via ' + method : ''} for centralized security monitoring.`,
        content: `
            <h3>Description</h3>
            <p>This feature sends audit log data from ${product.productLabel}'s Action Log Viewer to ${target.targetLabel}. Audit logs capture all administrative actions performed in ${product.productLabel} — such as configuration changes, policy modifications, login events, and deployment actions. Sending these to ${target.targetLabel} enables centralized security monitoring, compliance auditing, and SIEM correlation.</p>

            <h3>How This Works</h3>
            <ol>
                <li>${product.productLabel} records all administrative actions in its Action Log Viewer.</li>
                <li>These audit log entries are forwarded to ${target.targetLabel} ${method !== 'integration channel' ? 'via <strong>' + method + '</strong>' : 'via the configured integration channel'}.</li>
                <li>${target.targetLabel} ingests the logs and makes them available for dashboards, alerts, correlation rules, and compliance reports.</li>
                <li>Logs are sent ${id.includes('syslog') ? 'in syslog format (CEF/LEEF) over UDP/TCP' : 'as structured data via the REST API'}.</li>
            </ol>

            <div class="feature-highlight">
                <h4>Audit Data Included</h4>
                <ul>
                    <li>Admin login/logout events</li>
                    <li>Configuration changes (policies, settings, templates)</li>
                    <li>Software deployment actions</li>
                    <li>Patch approval and deployment actions</li>
                    <li>User and permission changes</li>
                    <li>Remote control session initiation</li>
                </ul>
            </div>

            <h3>Pre-requisites</h3>
            <ul>
                <li>Integration between ${product.productLabel} and ${target.targetLabel} must be configured</li>
                ${id.includes('syslog') ? '<li>Syslog receiver must be configured in ' + target.targetLabel + ' to accept logs from ' + product.productLabel + '</li><li>Syslog port (typically UDP 514 or TCP 514) must be open between the servers</li>' : '<li>API credentials for ' + target.targetLabel + ' must be configured</li><li>Network connectivity and appropriate ports must be open</li>'}
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                ${id.includes('syslog') ? '<li>UDP syslog delivery is not guaranteed — some logs may be lost under heavy network load. Use TCP for reliability.</li>' : '<li>API rate limits on ' + target.targetLabel + ' may throttle log delivery during high activity periods</li>'}
                <li>Historical logs from before the integration was enabled are not retroactively sent</li>
                <li>Log format customization options may be limited</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check ${product.productLabel} SIEM integration logs for forwarding status and errors</li>
                ${id.includes('syslog') ? '<li>Verify syslog receiver is running and listening on the correct port in ' + target.targetLabel + '</li><li>Use a packet capture tool (tcpdump/Wireshark) to verify syslog traffic if logs are not arriving</li>' : '<li>Verify API connectivity by testing the connection from integration settings</li><li>Check ' + target.targetLabel + ' for data ingestion errors</li>'}
            </ul>
        `,
        links: []
    };
}

function makeJiraAssetData(id, name, product, target) {
    return {
        title: `Asset Data in Jira (${product.productLabel})`,
        description: `Pulls asset information from ${product.productLabel} into Jira, enabling technicians to view endpoint details directly within Jira issues.`,
        content: `
            <h3>Description</h3>
            <p>This feature brings asset data from ${product.productLabel} into Jira. When a Jira issue is associated with a managed endpoint, technicians can view the device's hardware specs, installed software, patch status, and other inventory details — right within the Jira interface.</p>

            <h3>How This Works</h3>
            <ol>
                <li>The ${product.productLabel} add-on/plugin for Jira must be installed.</li>
                <li>When a Jira issue is linked to a computer asset, the add-on fetches data from ${product.productLabel}.</li>
                <li>Asset details (hardware, software, OS, patch status) are displayed in a panel within the Jira issue.</li>
            </ol>

            <h3>Pre-requisites</h3>
            <ul>
                <li>${product.productLabel} Jira add-on must be installed and configured</li>
                <li>API access must be enabled in ${product.productLabel}</li>
                <li>Assets must be mapped between Jira and ${product.productLabel}</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Data is fetched on-demand — it reflects the last known state from ${product.productLabel}'s inventory</li>
                <li>Jira add-on compatibility depends on the Jira version (Cloud or Server/Data Center)</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check the ${product.productLabel} API logs for data fetch requests from Jira</li>
                <li>Verify the Jira add-on status in Jira Admin → Manage Apps</li>
                <li>Check browser console for errors if the asset panel doesn't load</li>
            </ul>
        `,
        links: []
    };
}

function makePowerOptions(id, name, product, target) {
    return {
        title: `Remote Power Options from ${target.targetLabel} (${product.productLabel})`,
        description: `Perform remote power actions (Lock, Hibernate, Shutdown, Wake on LAN) on managed endpoints from ${target.targetLabel} tickets.`,
        content: `
            <h3>Description</h3>
            <p>This feature allows helpdesk technicians to execute remote power management actions on endpoints directly from ${target.targetLabel} tickets. Supported actions include Lock, Hibernate, Shutdown, Restart, and Wake on LAN — enabling fast response to common end-user and maintenance scenarios.</p>

            <h3>How This Works</h3>
            <ol>
                <li>A technician opens a ${target.targetLabel} ticket associated with a managed endpoint.</li>
                <li>They select the "Power Options" action from the ${product.productLabel} integration menu.</li>
                <li>Available power actions are displayed — Lock, Hibernate, Shutdown, Restart, Wake on LAN.</li>
                <li>The selected action is sent to ${product.productLabel}, which executes it on the target endpoint.</li>
            </ol>

            <div class="feature-highlight">
                <h4>Available Power Actions</h4>
                <ul>
                    <li><strong>Lock</strong> — Locks the user session immediately</li>
                    <li><strong>Hibernate</strong> — Puts the machine into hibernation</li>
                    <li><strong>Shutdown</strong> — Gracefully shuts down the machine</li>
                    <li><strong>Restart</strong> — Restarts the machine</li>
                    <li><strong>Wake on LAN</strong> — Wakes a powered-off machine over the network</li>
                </ul>
            </div>

            <h3>Pre-requisites</h3>
            <ul>
                <li>Integration between ${product.productLabel} and ${target.targetLabel} must be enabled</li>
                <li>${product.productLabel} agent must be installed on the target endpoint</li>
                <li>For Wake on LAN, the machine's NIC must support WoL and it must be enabled in BIOS</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Wake on LAN only works within the same network segment (or with a relay agent)</li>
                <li>Power actions require the endpoint to be reachable (except Wake on LAN which works on powered-off machines)</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check ${product.productLabel} power management logs for action execution status</li>
                <li>Verify agent connectivity on the target endpoint</li>
                <li>For WoL failures, check that WoL is enabled in the endpoint's BIOS/UEFI and NIC driver</li>
            </ul>
        `,
        links: []
    };
}

function makeSystemTools(id, name, product, target) {
    return {
        title: `System Manager Tools from ${target.targetLabel} (${product.productLabel})`,
        description: `Access system management tools on a remote endpoint directly from ${target.targetLabel} tickets using ${product.productLabel}.`,
        content: `
            <h3>Description</h3>
            <p>This feature enables technicians to remotely access system management tools (such as Task Manager, Command Prompt, Registry Editor, etc.) on a managed endpoint directly from a ${target.targetLabel} ticket. The tools run on the remote machine via ${product.productLabel}'s agent.</p>

            <h3>How This Works</h3>
            <ol>
                <li>A technician opens a ${target.targetLabel} ticket linked to a managed endpoint.</li>
                <li>They click the "System Tools" option from the ${product.productLabel} integration.</li>
                <li>A list of available tools is presented (Task Manager, Command Prompt, Registry Editor, etc.).</li>
                <li>The selected tool launches on the remote endpoint via ${product.productLabel}'s agent, accessible through a remote viewer.</li>
            </ol>

            <h3>Pre-requisites</h3>
            <ul>
                <li>Integration between ${product.productLabel} and ${target.targetLabel} must be enabled</li>
                <li>${product.productLabel} agent must be installed and online on the target endpoint</li>
                <li>Pop-up blocker must be disabled for the remote viewer to open</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>System tools are primarily available for Windows endpoints</li>
                <li>The endpoint must be online for tools to be launched</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check ${product.productLabel} tools/remote access logs</li>
                <li>Verify agent status on the target endpoint</li>
                <li>Check browser console for pop-up/iframe related errors</li>
            </ul>
        `,
        links: []
    };
}

// MDM-specific features
function makeMDMGeoTracking(id, name, product, target) {
    return {
        title: `Geo-tracking from ${target.targetLabel} Tickets (${product.productLabel})`,
        description: `Identify the geographical location of a managed mobile device remotely from a ${target.targetLabel} ticket.`,
        content: `
            <h3>Description</h3>
            <p>This feature allows helpdesk technicians to identify the current geographical location of a managed mobile device directly from a ${target.targetLabel} ticket. This is useful for locating lost or stolen devices, verifying device locations for compliance, or assisting users who need location-based help.</p>

            <h3>How This Works</h3>
            <ol>
                <li>A technician opens a ${target.targetLabel} ticket associated with a managed mobile device.</li>
                <li>They select the "Geo-tracking" option from the ${product.productLabel} integration.</li>
                <li>${product.productLabel} queries the device for its current GPS/network location.</li>
                <li>The device's location is displayed on a map.</li>
            </ol>

            <h3>Pre-requisites</h3>
            <ul>
                <li>The device must be enrolled in ${product.productLabel}'s Mobile Device Management</li>
                <li>Location services must be enabled on the device</li>
                <li>The device must be powered on and have network connectivity</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Location accuracy depends on the device's GPS and network capabilities</li>
                <li>Devices that are powered off or in airplane mode cannot be located</li>
                <li>Privacy regulations in some regions may restrict location tracking</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check ${product.productLabel} geo-tracking logs for location query status</li>
                <li>Verify that location services are enabled on the device</li>
            </ul>
        `,
        links: []
    };
}

function makeMDMWipeRemove(id, name, product, target) {
    return {
        title: `Wipe & Remove Management from ${target.targetLabel} Tickets (${product.productLabel})`,
        description: `Remotely wipe or remove management from a mobile device directly from a ${target.targetLabel} ticket.`,
        content: `
            <h3>Description</h3>
            <p>This feature allows technicians to initiate a remote wipe or remove management (unenroll) from a mobile device directly from a ${target.targetLabel} ticket. This is critical for scenarios such as lost/stolen devices, employee offboarding, or compliance enforcement.</p>

            <h3>How This Works</h3>
            <ol>
                <li>A technician opens a ${target.targetLabel} ticket related to a mobile device security concern.</li>
                <li>They select "Wipe Device" or "Remove Management" from the ${product.productLabel} integration options.</li>
                <li><strong>Wipe:</strong> Erases all data on the device and resets to factory settings.</li>
                <li><strong>Remove Management:</strong> Unenrolls the device from ${product.productLabel} without erasing personal data (corporate data/profiles are removed).</li>
            </ol>

            <div class="feature-highlight">
                <h4>⚠️ Important</h4>
                <ul>
                    <li><strong>Full Wipe</strong> is irreversible — all data on the device will be permanently erased</li>
                    <li><strong>Corporate Wipe</strong> removes only organization-managed data, apps, and profiles</li>
                </ul>
            </div>

            <h3>Pre-requisites</h3>
            <ul>
                <li>Device must be enrolled in ${product.productLabel}'s MDM</li>
                <li>Technician must have wipe/retire permissions</li>
                <li>The device must be reachable over the network for the command to be delivered</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>If the device is offline, the wipe command is queued and executed when the device connects</li>
                <li>Some devices may require additional confirmation before executing wipe</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check ${product.productLabel} device action logs for wipe/remove command status</li>
                <li>Verify the device's enrollment status and connectivity</li>
            </ul>
        `,
        links: []
    };
}

function makeMDMAssignUsers(id, name, product, target) {
    return {
        title: `Assign Users to Devices from ${target.targetLabel} Tickets (${product.productLabel})`,
        description: `Assign users to managed mobile devices directly from ${target.targetLabel} tickets.`,
        content: `
            <h3>Description</h3>
            <p>This feature allows technicians to assign or change user ownership of a managed mobile device right from a ${target.targetLabel} ticket. This streamlines the onboarding process and ensures accurate device-to-user mapping.</p>

            <h3>How This Works</h3>
            <ol>
                <li>A technician opens a ${target.targetLabel} ticket related to device assignment (e.g., new employee onboarding).</li>
                <li>They select "Assign User" from the ${product.productLabel} integration options.</li>
                <li>They search for and select the user from the directory.</li>
                <li>${product.productLabel} updates the device record with the new owner.</li>
            </ol>

            <h3>Pre-requisites</h3>
            <ul>
                <li>Device must be enrolled in ${product.productLabel}'s MDM</li>
                <li>User accounts must exist in ${product.productLabel} (via AD/LDAP or manual creation)</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>User must exist in ${product.productLabel}'s user directory before assignment</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check ${product.productLabel} device management logs for user assignment actions</li>
            </ul>
        `,
        links: []
    };
}

function makeMDMConfigureProfiles(id, name, product, target) {
    return {
        title: `Configure Profiles from ${target.targetLabel} Tickets (${product.productLabel})`,
        description: `Associate and deploy configuration profiles to mobile devices remotely from ${target.targetLabel} tickets.`,
        content: `
            <h3>Description</h3>
            <p>This feature enables technicians to push configuration profiles (Wi-Fi, VPN, email, restrictions, etc.) to managed mobile devices directly from ${target.targetLabel} tickets. It eliminates the need to switch to ${product.productLabel} for routine profile assignments.</p>

            <h3>How This Works</h3>
            <ol>
                <li>A technician opens a ${target.targetLabel} ticket (e.g., "Configure VPN on my phone").</li>
                <li>They select "Configure Profile" from the ${product.productLabel} integration options.</li>
                <li>Available profiles (pre-configured in ${product.productLabel}) are listed.</li>
                <li>The technician selects a profile and pushes it to the device.</li>
                <li>${product.productLabel} deploys the profile over-the-air to the managed device.</li>
            </ol>

            <h3>Pre-requisites</h3>
            <ul>
                <li>Configuration profiles must be pre-created in ${product.productLabel}</li>
                <li>Device must be enrolled and reachable</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Only pre-existing profiles can be deployed — creating new profiles requires ${product.productLabel} access</li>
                <li>Some profile types may require the device to restart to take effect</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check ${product.productLabel} profile deployment logs</li>
                <li>Verify device enrollment and connectivity status</li>
            </ul>
        `,
        links: []
    };
}

function makeMDMInstallApps(id, name, product, target) {
    return {
        title: `Install Apps from ${target.targetLabel} Tickets (${product.productLabel})`,
        description: `Distribute and install apps on managed mobile devices remotely from ${target.targetLabel} tickets.`,
        content: `
            <h3>Description</h3>
            <p>This feature allows technicians to push app installations to managed mobile devices directly from ${target.targetLabel} tickets. Apps configured in ${product.productLabel}'s app catalog can be silently installed on the device without end-user action.</p>

            <h3>How This Works</h3>
            <ol>
                <li>A technician opens a ${target.targetLabel} ticket for an app installation request.</li>
                <li>They select "Install App" from the ${product.productLabel} integration.</li>
                <li>The app catalog from ${product.productLabel} is displayed.</li>
                <li>The technician selects the app and pushes the installation to the device.</li>
                <li>The app is silently installed on the managed device.</li>
            </ol>

            <h3>Pre-requisites</h3>
            <ul>
                <li>Apps must be published in ${product.productLabel}'s app catalog</li>
                <li>Device must be enrolled and reachable</li>
                <li>Sufficient storage on the device for the app</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Only apps in ${product.productLabel}'s catalog can be installed</li>
                <li>Some apps may require device restart or user consent</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check ${product.productLabel} app distribution logs</li>
                <li>Verify device connectivity and enrollment status</li>
            </ul>
        `,
        links: []
    };
}

function makeMDMAddToGroups(id, name, product, target) {
    return {
        title: `Add Devices to Groups from ${target.targetLabel} Tickets (${product.productLabel})`,
        description: `Add managed mobile devices to device groups in ${product.productLabel} directly from ${target.targetLabel} tickets.`,
        content: `
            <h3>Description</h3>
            <p>This feature allows technicians to add managed mobile devices to device groups in ${product.productLabel} from ${target.targetLabel} tickets. Device groups are used for simplified management — applying common policies, profiles, and app deployments to a set of devices.</p>

            <h3>How This Works</h3>
            <ol>
                <li>A technician opens a ${target.targetLabel} ticket related to device management.</li>
                <li>They select "Add to Group" from the ${product.productLabel} integration options.</li>
                <li>Available device groups from ${product.productLabel} are listed.</li>
                <li>The technician selects a group and the device is added.</li>
                <li>Any policies/profiles associated with that group are automatically applied to the device.</li>
            </ol>

            <h3>Pre-requisites</h3>
            <ul>
                <li>Device groups must be pre-created in ${product.productLabel}</li>
                <li>Device must be enrolled in ${product.productLabel}'s MDM</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Only existing groups can be selected — creating new groups requires ${product.productLabel} access</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check ${product.productLabel} device group management logs</li>
                <li>Verify the device's group membership in ${product.productLabel}</li>
            </ul>
        `,
        links: []
    };
}

// ── Categorize and generate ─────────────────────────────────────
function categorizeFeature(id, name) {
    // Order matters — more specific patterns first
    if (id.includes('-ssp-auto-install')) return 'ssp';
    if (id.includes('-ssp-beta')) return 'ssp';
    if (id.includes('-inventory-sync')) return 'inventory-sync';
    if (id.includes('-remote-control')) return 'remote-control';
    if (id.includes('-deploy-software')) return 'deploy-software';
    if (id.includes('-deploy-packages')) return 'deploy-packages';
    if (id.includes('-deploy-templates')) return 'deploy-templates';
    if (id.includes('-tools-action')) return 'tools-action';
    if (id.includes('-iframe')) return 'iframe';
    if (id.includes('-trayicon')) return 'trayicon';
    if (id.includes('-auto-assign')) return 'auto-assign';
    if (id.includes('-inventory-alerts')) return 'inventory-alerts';
    if (id.includes('-prohibited-software')) return 'prohibited-software';
    if (id.includes('-software-removal')) return 'software-removal';

    // ServiceNow features
    if (id.includes('-snow-') || id.includes('snow-')) {
        if (id.includes('-asset-post')) return 'asset-post';
        if (id.includes('-asset-removal')) return 'snow-asset-removal';
        if (id.includes('-owner-assign')) return 'owner-assign';
        if (id.includes('-software-deploy')) return 'snow-software-deploy';
        if (id.includes('-software-metering')) return 'software-metering';
    }
    // For SDP/AE asset removal
    if (id.includes('-asset-removal')) return 'asset-removal';

    // Analytics/PowerBI
    if (id.includes('-default-sync-')) return 'default-sync';
    if (id.includes('-optional-sync-')) return 'optional-sync';

    // ELA
    if (id.includes('-comparators')) return 'comparators';
    if (id.includes('-patch-data')) return 'patch-data';
    if (id.includes('-vulnerability-data')) return 'vulnerability-data';
    if (id.includes('-vuln-data')) return 'vulnerability-data';

    // Audit logs
    if (id.includes('-audit-logs')) return 'audit-logs';

    // Jira asset data
    if (id.includes('-asset-data') && (id.includes('jira'))) return 'jira-asset-data';

    // Generic fallbacks
    if (id.includes('-power-options')) return 'power-options';
    if (id.includes('-system-tools')) return 'system-tools';

    // MDM-specific
    if (id.includes('-geo-tracking')) return 'geo-tracking';
    if (id.includes('-wipe-remove')) return 'wipe-remove';
    if (id.includes('-assign-users')) return 'assign-users';
    if (id.includes('-configure-profiles')) return 'configure-profiles';
    if (id.includes('-install-apps')) return 'install-apps';
    if (id.includes('-add-to-groups')) return 'add-to-groups';

    // MDM SDP specific
    if (name && name.includes('removed from Mobile Device Manager')) return 'asset-removal';

    return 'unknown';
}

function getSyncNumber(id) {
    const m2 = id.match(/-sync-(\d)/);
    return m2 ? m2[1] : '1';
}

function generateEntry(id, name) {
    const product = parseProductFromId(id);
    const target  = parseTargetFromId(id);
    const cat     = categorizeFeature(id, name);

    switch (cat) {
        case 'inventory-sync':       return makeInventorySync(id, name, product, target);
        case 'remote-control':       return makeRemoteControl(id, name, product, target);
        case 'deploy-software':      return makeDeploySoftware(id, name, product, target);
        case 'tools-action':         return makeToolsAction(id, name, product, target);
        case 'iframe':               return makeIframe(id, name, product, target);
        case 'asset-removal':        return makeAssetRemoval(id, name, product, target);
        case 'trayicon':             return makeTrayicon(id, name, product, target);
        case 'ssp':                  return makeSSP(id, name, product, target);
        case 'auto-assign':          return makeAutoAssign(id, name, product, target);
        case 'inventory-alerts':     return makeInventoryAlerts(id, name, product, target);
        case 'prohibited-software':  return makeProhibitedSoftware(id, name, product, target);
        case 'deploy-packages':      return makeDeployPackages(id, name, product, target);
        case 'deploy-templates':     return makeDeployTemplates(id, name, product, target);
        case 'software-removal':     return makeSoftwareRemoval(id, name, product, target);
        case 'asset-post':           return makeAssetPost(id, name, product, target);
        case 'snow-asset-removal':   return makeSnowAssetRemoval(id, name, product, target);
        case 'owner-assign':         return makeOwnerAssign(id, name, product, target);
        case 'snow-software-deploy': return makeSnowSoftwareDeploy(id, name, product, target);
        case 'software-metering':    return makeSoftwareMetering(id, name, product, target);
        case 'default-sync':         return makeDefaultSync(id, name, product, target, getSyncNumber(id));
        case 'optional-sync':        return makeOptionalSync(id, name, product, target, getSyncNumber(id));
        case 'comparators':          return makeComparators(id, name, product, target);
        case 'patch-data':           return makePatchData(id, name, product, target);
        case 'vulnerability-data':   return makeVulnerabilityData(id, name, product, target);
        case 'audit-logs':           return makeAuditLogs(id, name, product, target);
        case 'jira-asset-data':      return makeJiraAssetData(id, name, product, target);
        case 'power-options':        return makePowerOptions(id, name, product, target);
        case 'system-tools':         return makeSystemTools(id, name, product, target);
        case 'geo-tracking':         return makeMDMGeoTracking(id, name, product, target);
        case 'wipe-remove':          return makeMDMWipeRemove(id, name, product, target);
        case 'assign-users':         return makeMDMAssignUsers(id, name, product, target);
        case 'configure-profiles':   return makeMDMConfigureProfiles(id, name, product, target);
        case 'install-apps':         return makeMDMInstallApps(id, name, product, target);
        case 'add-to-groups':        return makeMDMAddToGroups(id, name, product, target);
        default:
            console.error(`Unknown feature category for id=${id}, name=${name}`);
            return null;
    }
}

// ── Build full output ───────────────────────────────────────────
let output = `/**
 * ============================================================
 *  FEATURE DETAILS DATABASE
 * ============================================================
 *  Each key here must match a feature \`id\` used in
 *  config/integrations.js.  When a user clicks a feature
 *  in the results list, the app looks up that id here.
 *
 *  Each entry has:
 *    title       : Display title on the detail page
 *    description : Short summary shown under the title
 *    content     : HTML string with full explanation
 *    links       : [ { title: '...', url: '...' }, ... ]
 * ============================================================
 */

// Feature details database
const FEATURE_DETAILS = {\n`;

let count = 0;
let unknown = 0;
const entries = [];

for (const [id, name] of features) {
    const entry = generateEntry(id, name);
    if (!entry) {
        unknown++;
        continue;
    }
    // Escape backticks in content for template literal safety
    const content = entry.content;
    const linksStr = entry.links.length > 0
        ? `[\n${entry.links.map(l => `            { title: '${l.title.replace(/'/g, "\\'")}', url: '${l.url}' }`).join(',\n')}\n        ]`
        : '[]';

    entries.push(`    '${id}': {
        title: '${entry.title.replace(/'/g, "\\'")}',
        description: '${entry.description.replace(/'/g, "\\'")}',
        content: \`${content}\`,
        links: ${linksStr}
    }`);
    count++;
}

output += entries.join(',\n');
output += '\n};\n';

fs.writeFileSync(path.join(__dirname, 'config', 'feature-details.js'), output, 'utf8');
console.error(`Generated ${count} feature detail entries (${unknown} unknown/skipped)`);
