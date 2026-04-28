#!/usr/bin/env python3
"""
Generate feature-details.js from integrations.js

Reads all feature IDs and names from integrations.js,
builds detailed support-engineer-friendly content for each,
and writes the complete feature-details.js file.
"""

import re, textwrap, json, sys, os

INTEGRATIONS_FILE = os.path.join(os.path.dirname(__file__), '..', 'config', 'integrations.js')
OUTPUT_FILE = os.path.join(os.path.dirname(__file__), '..', 'config', 'feature-details.js')

# ─── Product name mappings ───────────────────────────────────────
PRODUCT_ABBR = {
    'ec': 'Endpoint Central',
    'acp': 'Application Control Plus',
    'bsp': 'Browser Security Plus',
    'dcp': 'Device Control Plus',
    'mdm': 'Mobile Device Manager Plus',
    'pcp': 'Patch Connect Plus',
    'pmp': 'Patch Manager Plus',
    'rap': 'Remote Access Plus',
    'vmp': 'Vulnerability Manager Plus',
    'sdp': 'ServiceDesk Plus',
    'ae': 'AssetExplorer',
    'snow': 'ServiceNow',
    'ela': 'EventLog Analyzer',
    'splunk': 'Splunk',
    'syslog': 'Syslog/SIEM',
    'qradar': 'IBM QRadar',
    'jira': 'Jira',
    'freshservice': 'FreshService',
    'zendesk': 'Zendesk',
    'ap': 'Analytics Plus',
    'powerbi': 'Power BI',
}

# ─── Read integrations.js and extract id-name pairs ──────────────
def read_integrations():
    with open(INTEGRATIONS_FILE, 'r') as f:
        content = f.read()
    pairs = re.findall(r"name:\s*'([^']+)'[^}]*?id:\s*'([^']+)'", content, re.DOTALL)
    id_to_name = {}
    for name, fid in pairs:
        if fid not in id_to_name:
            id_to_name[fid] = name
    return id_to_name


# ─── Detect deployment mode from ID ─────────────────────────────
def detect_deployment(fid):
    """Return a human-readable deployment string based on -op- segments in the ID."""
    # Patterns: cloud-cloud, cloud-onprem, onprem-cloud, onprem-onprem
    parts = fid.split('-')
    # Count 'op' tokens to guess deployment
    op_positions = [i for i, p in enumerate(parts) if p == 'op']
    if len(op_positions) >= 2:
        return 'On-Premise to On-Premise'
    elif len(op_positions) == 1:
        return 'Hybrid (Cloud + On-Premise)'
    else:
        return 'Cloud to Cloud'


def detect_source_product(fid):
    """Detect the source product abbreviation from the beginning of the feature ID."""
    for abbr in sorted(PRODUCT_ABBR.keys(), key=len, reverse=True):
        if fid.startswith(abbr + '-'):
            return abbr
    return None


def detect_target(fid, feature_name):
    """Detect the target integration from the feature ID."""
    # Check for known targets in the ID
    for target in ['sdp', 'ae', 'snow', 'ela', 'splunk', 'syslog', 'qradar', 'jira', 'freshservice', 'zendesk', 'ap', 'powerbi']:
        if f'-{target}-' in fid or fid.endswith(f'-{target}'):
            return target
    # Fallback: try from name
    name_lower = feature_name.lower()
    for target, fullname in PRODUCT_ABBR.items():
        if fullname.lower() in name_lower:
            return target
    return None


def is_beta(fid, feature_name):
    return 'beta' in fid.lower() or '(beta)' in feature_name.lower()


# ─── Feature content templates keyed on feature type ─────────────
def classify_and_generate(fid, feature_name):
    """Classify the feature by its name pattern and return (title, description, content, links)."""

    src_abbr = detect_source_product(fid)
    src_name = PRODUCT_ABBR.get(src_abbr, 'Source Product') if src_abbr else 'Source Product'
    tgt_abbr = detect_target(fid, feature_name)
    tgt_name = PRODUCT_ABBR.get(tgt_abbr, 'Target Product') if tgt_abbr else 'Target Product'
    deployment = detect_deployment(fid)
    beta_tag = ' (Beta)' if is_beta(fid, feature_name) else ''
    name_lower = feature_name.lower()

    # ── 1. Inventory Asset Sync ──────────────────────────────
    if 'inventory asset sync' in name_lower or 'inventory asset data sync' in name_lower:
        return (
            f'Inventory Asset Sync – {src_name} → {tgt_name}{beta_tag}',
            f'Synchronizes hardware and software inventory data from {src_name} to {tgt_name}, keeping asset records up to date.',
            f"""
            <h3>Description</h3>
            <p>This feature pushes comprehensive hardware and software inventory details from <strong>{src_name}</strong> to <strong>{tgt_name}</strong>. It eliminates manual data entry and ensures that technicians always see the latest asset information when handling tickets or performing audits.</p>

            <h3>How This Works</h3>
            <ol>
                <li>The {src_name} agent scans each managed endpoint and collects hardware details (OS, memory, disk, manufacturer, service tag, MAC address) and software details (installed applications, versions, vendors).</li>
                <li>After every scheduled or manual inventory scan, a <strong>differential sync</strong> is triggered — only the data that has changed since the last scan is transmitted.</li>
                <li>The data is posted to {tgt_name} via REST API. Devices are matched using machine name, MAC address, and service tag to avoid duplicates.</li>
                <li>New devices are created automatically in {tgt_name}; existing records are updated.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>{src_name} and {tgt_name} must be integrated (API key configured on both sides).</li>
                <li>Network connectivity between both servers on the configured ports.</li>
                <li>The API key must be associated with a technician having admin-level privileges.</li>
                <li>Deployment mode: <strong>{deployment}</strong>.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>If "Stop uploading scanned XMLs via non-login URL" is enabled in the target's advanced security settings, asset sync will fail.</li>
                <li>Network/firewall issues between servers will block synchronization.</li>
                <li>Both products should use the same protocol (HTTP or HTTPS) for successful communication.</li>
                <li>Sync is one-directional — data flows only from {src_name} to {tgt_name}.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} side:</strong> <code>&lt;{src_name}_Home&gt;/logs/sdpintegration.txt</code></li>
                <li><strong>{tgt_name} side:</strong> Check the integration module logs under the {tgt_name} logs directory.</li>
                <li>Look for HTTP error codes (401 = authentication failure, 403 = permission issue, 500 = server error).</li>
                <li>Verify the API key is active and not expired.</li>
            </ul>
            """,
            []
        )

    # ── 2. Remote Control from Tickets ───────────────────────
    if 'remote control' in name_lower:
        return (
            f'Remote Control from {tgt_name} Tickets{beta_tag}',
            f'Initiate a remote desktop session on a managed endpoint directly from a {tgt_name} ticket.',
            f"""
            <h3>Description</h3>
            <p>This feature allows technicians to launch a remote desktop connection to any managed endpoint directly from within <strong>{tgt_name}</strong>. Instead of switching between consoles, technicians can resolve issues faster by accessing the machine while viewing the ticket.</p>

            <h3>How This Works</h3>
            <ol>
                <li>When a technician opens a ticket in {tgt_name} that has an associated asset managed by {src_name}, a <strong>"Remote Control"</strong> action button appears.</li>
                <li>Clicking the button sends a request to the {src_name} server via API, which initiates a remote session to the endpoint's agent.</li>
                <li>The remote viewer opens in a new browser tab or the native remote tool, providing full desktop access.</li>
                <li>Session details (start time, duration, technician) are logged for audit purposes.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>The {src_name} agent must be installed and online on the target machine.</li>
                <li>{src_name} and {tgt_name} integration must be configured and active.</li>
                <li>The technician must have remote control permissions in {src_name}.</li>
                <li>Ports required for remote control (typically 8020, 8443) must be open between the technician's browser and the {src_name} server.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Only computers that have the {src_name} agent installed and reporting will be available for remote control.</li>
                <li>If the endpoint is offline or unreachable, the remote session cannot be established.</li>
                <li>Pop-up blockers may prevent the remote viewer from launching in a new tab.</li>
                <li>Some VPN configurations may block the required ports.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/remotecontrol.log</code></li>
                <li><strong>Agent side:</strong> <code>&lt;Agent_Dir&gt;/logs/rcgateway.log</code></li>
                <li>Check browser console for pop-up blocker errors.</li>
                <li>Verify the agent is online under {src_name} → Scope of Management.</li>
            </ul>
            """,
            []
        )

    # ── 3. Deploy Software from Tickets ──────────────────────
    if 'deploy software' in name_lower:
        return (
            f'Deploy Software from {tgt_name} Tickets{beta_tag}',
            f'Deploy pre-configured software packages to endpoints directly from {tgt_name} tickets.',
            f"""
            <h3>Description</h3>
            <p>Technicians can deploy software to one or more endpoints directly from a <strong>{tgt_name}</strong> ticket without switching to the {src_name} console. This speeds up ticket resolution for software-related requests.</p>

            <h3>How This Works</h3>
            <ol>
                <li>When viewing a ticket in {tgt_name} with an associated {src_name}-managed asset, a <strong>"Deploy Software"</strong> action is available.</li>
                <li>The technician selects from available software packages already configured in {src_name}.</li>
                <li>{tgt_name} sends the deployment request to {src_name} via API.</li>
                <li>{src_name} pushes the software to the target endpoint's agent, which installs it silently.</li>
                <li>The deployment status is updated back in the ticket for tracking.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>Software packages must be pre-created in {src_name} under Software Deployment.</li>
                <li>The {src_name} agent must be installed and online on the target endpoint.</li>
                <li>Integration between {src_name} and {tgt_name} must be active.</li>
                <li>Technician must have software deployment permissions in {src_name}.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Only software packages already configured in {src_name} can be deployed — ad-hoc installations are not supported.</li>
                <li>If the target agent is offline, the deployment will be queued and executed when the agent comes online.</li>
                <li>Large packages may take time depending on network bandwidth between the distribution server and endpoint.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/swdeploy.log</code></li>
                <li><strong>Agent side:</strong> <code>&lt;Agent_Dir&gt;/logs/dcswdeplog.txt</code></li>
                <li>Check the deployment status report in {src_name} → Software Deployment → Deployment Status.</li>
            </ul>
            """,
            []
        )

    # ── 4. Tools Action from Tickets ─────────────────────────
    if 'tools action' in name_lower or 'system manager tools' in name_lower or 'system tools' in name_lower:
        tool_label = "system manager tools" if 'system' in name_lower else "tools"
        return (
            f'Perform Tools Action from {tgt_name} Tickets{beta_tag}',
            f'Execute system management tools (shutdown, restart, command prompt, etc.) on an endpoint directly from {tgt_name} tickets.',
            f"""
            <h3>Description</h3>
            <p>This feature lets technicians perform commonly used system management actions on a managed endpoint — such as shutdown, restart, wake-on-LAN, command prompt, registry editor, and task manager — directly from within <strong>{tgt_name}</strong> tickets.</p>

            <h3>How This Works</h3>
            <ol>
                <li>Open a ticket in {tgt_name} that has an asset managed by {src_name}.</li>
                <li>Click the <strong>"Tools"</strong> action button to see available system {tool_label}.</li>
                <li>Select the desired tool (e.g., Shutdown, Restart, Wake-on-LAN, Registry Editor, Command Prompt).</li>
                <li>The request is sent to {src_name} via API, which executes the action via the agent on the target endpoint.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>The {src_name} agent must be installed and online on the target endpoint.</li>
                <li>Integration between {src_name} and {tgt_name} must be active.</li>
                <li>Technician must have the appropriate "Tools" permission in {src_name}.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Some tools (e.g., Wake-on-LAN) require the endpoint's network adapter to support the feature.</li>
                <li>If the agent is offline, real-time tools like Command Prompt or Task Manager will fail.</li>
                <li>Shutdown/restart actions are irreversible — a confirmation prompt will appear before execution.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/tools.log</code></li>
                <li><strong>Agent side:</strong> <code>&lt;Agent_Dir&gt;/logs/dcagentservicelog.txt</code></li>
                <li>Verify agent online status in {src_name} → Scope of Management.</li>
            </ul>
            """,
            []
        )

    # ── 5. iFrame Loading ────────────────────────────────────
    if 'iframe' in name_lower:
        return (
            f'Load {src_name} iFrame in {tgt_name}{beta_tag}',
            f'Embed the {src_name} console inside {tgt_name} for unified access without switching between consoles.',
            f"""
            <h3>Description</h3>
            <p>This feature embeds the full <strong>{src_name}</strong> web console inside <strong>{tgt_name}</strong> as an iFrame. Technicians can access {src_name} features without leaving the {tgt_name} interface, reducing context-switching and improving productivity.</p>

            <h3>How This Works</h3>
            <ol>
                <li>Once the integration is configured, the {src_name} module appears as a tab or section within the {tgt_name} console.</li>
                <li>Clicking the tab loads the {src_name} web interface inside an iFrame within the {tgt_name} page.</li>
                <li>Technicians can navigate {src_name} features, view reports, and perform actions — all within the {tgt_name} browser session.</li>
                <li>Authentication is handled via the integration's API key/token, so separate login is not required.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>Both {src_name} and {tgt_name} servers must be reachable from the technician's browser.</li>
                <li>Integration must be configured with valid API credentials.</li>
                <li>If using HTTPS, both products must have valid SSL certificates. Mixed content (HTTP inside HTTPS) will be blocked by browsers.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>If the {src_name} server has <code>X-Frame-Options</code> set to DENY or SAMEORIGIN, the iFrame will not load. This header may need to be adjusted.</li>
                <li>Browser security policies may block cross-origin iFrames if the domains differ significantly.</li>
                <li>Performance may be slightly slower than directly accessing the {src_name} console, as the page is loaded within another page.</li>
                <li>Some browser extensions (ad blockers, privacy tools) may interfere with iFrame loading.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li>Check the <strong>browser developer console</strong> (F12 → Console tab) for Content Security Policy (CSP) or X-Frame-Options errors.</li>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/serverout.txt</code> for access/authentication errors.</li>
                <li>Ensure both servers use the same protocol (both HTTP or both HTTPS).</li>
            </ul>
            """,
            []
        )

    # ── 6. Asset Removal Actions ─────────────────────────────
    if 'asset' in name_lower and ('removed' in name_lower or 'removal' in name_lower) and 'servicenow' not in name_lower and 'software' not in name_lower:
        return (
            f'Asset Removal Action – {src_name} → {tgt_name}{beta_tag}',
            f'Automatically perform actions on the {tgt_name} asset record when the device is removed from {src_name} Scope of Management.',
            f"""
            <h3>Description</h3>
            <p>When a device is removed from the Scope of Management (SoM) in <strong>{src_name}</strong>, this feature automatically updates or removes the corresponding asset record in <strong>{tgt_name}</strong>. This keeps asset records in sync and prevents stale entries in the helpdesk/CMDB.</p>

            <h3>How This Works</h3>
            <ol>
                <li>An administrator removes a device from {src_name}'s Scope of Management (e.g., decommissioning, OS reinstall, or device replacement).</li>
                <li>{src_name} sends a notification to {tgt_name} via the integration API.</li>
                <li>Based on the configured action, {tgt_name} will either:
                    <ul>
                        <li><strong>Delete</strong> the asset record, or</li>
                        <li><strong>Change the asset state</strong> (e.g., mark as retired/decommissioned), or</li>
                        <li><strong>Do nothing</strong> (if configured to ignore).</li>
                    </ul>
                </li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>Integration between {src_name} and {tgt_name} must be active.</li>
                <li>The asset must have been synced to {tgt_name} previously via inventory sync.</li>
                <li>The technician performing the removal must have appropriate permissions.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>If the integration is down at the time of removal, the action will not be retroactively applied when connectivity resumes.</li>
                <li>Bulk removals may take time to process depending on the number of assets.</li>
                <li>{"This feature is in <strong>Beta</strong> — behavior may change in future releases." if is_beta(fid, feature_name) else "Ensure the configured action matches your organization's asset lifecycle policy."}</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/sdpintegration.txt</code></li>
                <li>Look for "asset removal" or "SoM removal" entries in the integration log.</li>
                <li>Verify the asset existed in {tgt_name} before the removal was triggered.</li>
            </ul>
            """,
            []
        )

    # ── 7. Trayicon Requests ─────────────────────────────────
    if 'trayicon' in name_lower:
        return (
            f'Trayicon Requests as {tgt_name} Tickets{beta_tag}',
            f'End-user requests submitted via the {src_name} system tray icon are automatically created as tickets in {tgt_name}.',
            f"""
            <h3>Description</h3>
            <p>When an end user right-clicks the <strong>{src_name} agent tray icon</strong> on their desktop and submits a request (e.g., software installation, hardware issue), a ticket is automatically created in <strong>{tgt_name}</strong>. This bridges the gap between the endpoint agent and the helpdesk, ensuring end-user requests are captured without manual intervention.</p>

            <h3>How This Works</h3>
            <ol>
                <li>The end user clicks the {src_name} tray icon in the system tray and selects <strong>"Raise a Request"</strong>.</li>
                <li>They fill in details like subject, description, and priority.</li>
                <li>The request is sent to the {src_name} server, which forwards it to {tgt_name} via API.</li>
                <li>A new ticket is created in {tgt_name} with the user's details, machine information, and request description pre-populated.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>The {src_name} agent must be installed on the endpoint with the tray icon enabled.</li>
                <li>Integration between {src_name} and {tgt_name} must be configured under Admin → Integrations.</li>
                <li>The "Trayicon requests" feature must be enabled in the integration settings.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>The tray icon must be visible and enabled on the endpoint (it can be hidden via policy).</li>
                <li>If the agent cannot reach the {src_name} server, requests will be queued locally and sent when connectivity is restored.</li>
                <li>{"This feature is in <strong>Beta</strong> — some request fields may not map perfectly to {tgt_name} ticket fields." if is_beta(fid, feature_name) else "Attachment support depends on the configured maximum file size."}</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>Agent side:</strong> <code>&lt;Agent_Dir&gt;/logs/selfserviceportal.log</code></li>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/sdpintegration.txt</code></li>
                <li>Verify the tray icon is visible on the endpoint (check agent settings or group policy).</li>
            </ul>
            """,
            []
        )

    # ── 8. SSP (Self-Service Portal) Requests ────────────────
    if 'ssp requests' in name_lower:
        auto_install = 'automatically installed' in name_lower
        return (
            f'Self-Service Portal Requests as {tgt_name} Tickets{beta_tag}',
            f'Requests raised by end users via the {src_name} Self-Service Portal are created as {tgt_name} tickets{" and software is auto-installed upon approval" if auto_install else ""}.',
            f"""
            <h3>Description</h3>
            <p>End users can submit software and service requests through the <strong>{src_name} Self-Service Portal (SSP)</strong>. When this feature is enabled, these requests are automatically forwarded to <strong>{tgt_name}</strong> as tickets. {"Upon approval of the ticket in " + tgt_name + ", the requested software is <strong>automatically installed</strong> on the user's machine without technician intervention." if auto_install else "Technicians can then process the request through the standard " + tgt_name + " ticket workflow."}</p>

            <h3>How This Works</h3>
            <ol>
                <li>The end user accesses the Self-Service Portal (via browser or tray icon shortcut) and browses the software catalog.</li>
                <li>They select the required software and submit a request.</li>
                <li>The request is forwarded to {tgt_name} via API and a new ticket is created.</li>
                {"<li>When the technician <strong>approves</strong> the ticket in " + tgt_name + ", " + src_name + " automatically deploys the software to the user's endpoint.</li>" if auto_install else "<li>The technician reviews and processes the ticket in " + tgt_name + ".</li>"}
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>Self-Service Portal must be enabled in {src_name} under Admin → Self-Service Portal Settings.</li>
                <li>A software catalog must be configured with approved software packages.</li>
                <li>Integration between {src_name} and {tgt_name} must be active.</li>
                <li>SSP ticket creation feature must be enabled in the integration settings.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Only software packages published in the Self-Service Portal catalog can be requested.</li>
                {"<li>Auto-install requires the agent to be online at the time of approval; otherwise the install is queued.</li>" if auto_install else ""}
                <li>{"This feature is in <strong>Beta</strong> — some edge cases in ticket-to-deployment mapping may exist." if is_beta(fid, feature_name) else "Ensure the approval workflow in " + tgt_name + " is correctly configured."}</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/selfserviceportal.log</code></li>
                <li><strong>Integration log:</strong> <code>&lt;Install_Dir&gt;/logs/sdpintegration.txt</code></li>
                <li>Check ticket creation status in {tgt_name} for any API errors.</li>
            </ul>
            """,
            []
        )

    # ── 9. Auto-Assign Users ─────────────────────────────────
    if 'auto-assign' in name_lower or ('assign' in name_lower and 'last logged' in name_lower):
        return (
            f'Auto-Assign Last Logged-In User as Asset Owner{beta_tag}',
            f'Automatically assign the last logged-in user of a device as the asset owner in {tgt_name}.',
            f"""
            <h3>Description</h3>
            <p>This feature automatically maps the <strong>last logged-in user</strong> detected by the {src_name} agent to the corresponding asset in <strong>{tgt_name}</strong>, setting them as the asset owner. This helps keep the asset-owner mapping current without manual updates.</p>

            <h3>How This Works</h3>
            <ol>
                <li>The {src_name} agent detects the currently logged-in user on the endpoint during each scan.</li>
                <li>When the inventory data is synced to {tgt_name}, the "last logged-in user" field is included.</li>
                <li>If Auto-Assign is enabled, {tgt_name} automatically updates the asset owner to match this user.</li>
                <li>If the user is not found in {tgt_name}'s user directory, the mapping may be skipped or a new user record may be created (depending on configuration).</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>Inventory asset sync between {src_name} and {tgt_name} must be active.</li>
                <li>The "Auto-assign users" option must be enabled in the integration feature settings.</li>
                <li>User records should exist in {tgt_name} for the mapping to work correctly.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Only the <strong>last logged-in user</strong> is assigned — shared or multi-user machines may have frequently changing owners.</li>
                <li>Service accounts or system accounts that log in may be incorrectly mapped if not filtered out.</li>
                <li>The user must exist in {tgt_name}'s user database for the assignment to succeed.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/sdpintegration.txt</code></li>
                <li>Search for "auto-assign" or "owner" in the integration log.</li>
                <li>Verify the user record exists in {tgt_name} under User Management.</li>
            </ul>
            """,
            []
        )

    # ── 10. Inventory Alerts as Tickets ──────────────────────
    if 'inventory alerts' in name_lower:
        return (
            f'Inventory Alerts as {tgt_name} Tickets{beta_tag}',
            f'Inventory alerts from {src_name} are automatically created as tickets in {tgt_name} for follow-up.',
            f"""
            <h3>Description</h3>
            <p>When {src_name} detects an inventory change that triggers an alert (e.g., hardware modification, unauthorized software installation, low disk space), a ticket is automatically created in <strong>{tgt_name}</strong>. This ensures inventory anomalies are tracked and resolved through the helpdesk workflow.</p>

            <h3>How This Works</h3>
            <ol>
                <li>Inventory alert rules are configured in {src_name} (e.g., "alert when disk space drops below 10%").</li>
                <li>When a condition is met, {src_name} generates an alert.</li>
                <li>The alert is forwarded to {tgt_name} via the integration API, creating a new ticket with alert details.</li>
                <li>The ticket includes machine name, alert type, and relevant asset details for quick diagnosis.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>Inventory alert rules must be configured in {src_name} under Inventory → Alert Settings.</li>
                <li>Integration between {src_name} and {tgt_name} must be active with the "Inventory Alerts" feature enabled.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>High-frequency alerts (e.g., on large environments) may create a large number of tickets. Configure alert thresholds carefully.</li>
                <li>Duplicate tickets may be created if the same alert fires multiple times before resolution.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/sdpintegration.txt</code></li>
                <li>Check alert configuration under Inventory → Alert Settings in {src_name}.</li>
                <li>Verify ticket creation in {tgt_name} by searching for the machine name in recent tickets.</li>
            </ul>
            """,
            []
        )

    # ── 11. Prohibited Software ──────────────────────────────
    if 'prohibited software' in name_lower:
        return (
            f'Prohibited Software Alerts as {tgt_name} Tickets{beta_tag}',
            f'When prohibited software is detected on an endpoint, a ticket is automatically created in {tgt_name}.',
            f"""
            <h3>Description</h3>
            <p>When the {src_name} agent detects software marked as <strong>prohibited</strong> on a managed endpoint, a ticket is automatically generated in <strong>{tgt_name}</strong>. This helps enforce the organization's software compliance policy by routing violations directly to the helpdesk for action.</p>

            <h3>How This Works</h3>
            <ol>
                <li>An administrator defines a list of prohibited software in {src_name} under Inventory → Prohibited Software.</li>
                <li>During inventory scans, if any prohibited software is found installed on an endpoint, an alert is triggered.</li>
                <li>The alert is sent to {tgt_name} via the integration, creating a ticket with details about the software, the machine, and the logged-in user.</li>
                <li>The technician can then take action to uninstall the software or contact the user.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>Prohibited software list must be configured in {src_name}.</li>
                <li>Integration with {tgt_name} must be active with the prohibited software feature enabled.</li>
                <li>Inventory scans must be running regularly to detect violations.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Detection depends on the inventory scan schedule — newly installed prohibited software won't be detected until the next scan.</li>
                <li>Software name matching is exact — variations in display name may cause missed detections.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/sdpintegration.txt</code></li>
                <li>Verify prohibited software list under Inventory → Prohibited Software in {src_name}.</li>
            </ul>
            """,
            []
        )

    # ── 12. Deploy Packages from Tickets ─────────────────────
    if 'packages' in name_lower and 'deploy' in name_lower:
        return (
            f'Deploy Software Packages from {tgt_name} Tickets{beta_tag}',
            f'Deploy user-defined software packages to endpoints directly from {tgt_name} tickets.',
            f"""
            <h3>Description</h3>
            <p>Technicians can deploy custom software packages (created in {src_name}) to managed endpoints directly from within <strong>{tgt_name}</strong> tickets. This streamlines software provisioning without requiring access to the {src_name} console.</p>

            <h3>How This Works</h3>
            <ol>
                <li>Software packages are pre-configured in {src_name} under Software Deployment → Packages.</li>
                <li>From a {tgt_name} ticket, the technician selects the <strong>"Deploy Package"</strong> action for the associated asset.</li>
                <li>A list of available packages from {src_name} is shown. The technician selects and confirms.</li>
                <li>The package is pushed to the endpoint via the {src_name} agent and installed silently.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>Software packages must be created and approved in {src_name}.</li>
                <li>The endpoint agent must be online for immediate deployment; offline agents receive the deployment on next check-in.</li>
                <li>Integration must be active between {src_name} and {tgt_name}.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Only pre-configured packages in {src_name} are available — custom EXE/MSI files cannot be uploaded directly from {tgt_name}.</li>
                <li>Deployment to groups of machines is not supported from {tgt_name} — only per-ticket asset deployment.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/swdeploy.log</code></li>
                <li><strong>Agent side:</strong> <code>&lt;Agent_Dir&gt;/logs/dcswdeplog.txt</code></li>
            </ul>
            """,
            []
        )

    # ── 13. Deploy Templates from Tickets ────────────────────
    if 'templates' in name_lower and 'deploy' in name_lower:
        return (
            f'Deploy Configuration Templates from {tgt_name} Tickets{beta_tag}',
            f'Deploy user-defined configuration templates to endpoints directly from {tgt_name} tickets.',
            f"""
            <h3>Description</h3>
            <p>This feature allows technicians to push pre-defined <strong>configuration templates</strong> (e.g., wallpaper, browser settings, power settings, shortcuts) from <strong>{tgt_name}</strong> to managed endpoints. Templates are created in {src_name} and made available through the integration.</p>

            <h3>How This Works</h3>
            <ol>
                <li>Configuration templates are created in {src_name} under Configuration → Templates.</li>
                <li>From a {tgt_name} ticket, the technician selects <strong>"Deploy Template"</strong> for the associated asset.</li>
                <li>A list of available templates is fetched from {src_name}. The technician selects and deploys.</li>
                <li>The configuration is applied to the endpoint by the {src_name} agent.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>Configuration templates must be created in {src_name}.</li>
                <li>The endpoint agent must be online for immediate deployment.</li>
                <li>Integration between {src_name} and {tgt_name} must be active.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Only templates pre-configured in {src_name} are available.</li>
                <li>Some templates may require a reboot to take full effect.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/configdeploy.log</code></li>
                <li><strong>Agent side:</strong> <code>&lt;Agent_Dir&gt;/logs/dcconfig.log</code></li>
            </ul>
            """,
            []
        )

    # ── 14. Audit Logs to Splunk ─────────────────────────────
    if ('audit log' in name_lower or 'action log' in name_lower) and 'splunk' in name_lower:
        return (
            f'Audit Log Sync to Splunk – {src_name}{beta_tag}',
            f'Forwards action log/audit data from {src_name} to Splunk for centralized SIEM analysis.',
            f"""
            <h3>Description</h3>
            <p>This feature sends <strong>Action Log Viewer (audit log)</strong> data from <strong>{src_name}</strong> to <strong>Splunk</strong>. Security teams can use Splunk's correlation and alerting to monitor administrative actions, configuration changes, and user activities captured by {src_name}.</p>

            <h3>How This Works</h3>
            <ol>
                <li>Enable the Splunk integration in {src_name} under Admin → Integrations → Splunk.</li>
                <li>Configure the Splunk HTTP Event Collector (HEC) endpoint URL and token.</li>
                <li>{src_name} periodically forwards audit log entries to Splunk's HEC endpoint via HTTPS.</li>
                <li>In Splunk, the data is indexed and available for search, dashboards, and alerting.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>Splunk instance with HTTP Event Collector (HEC) enabled.</li>
                <li>A valid HEC token configured in Splunk.</li>
                <li>{src_name} server must have outbound HTTPS access to the Splunk HEC URL.</li>
                <li>The integration must be enabled in {src_name}'s admin settings.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Only action log viewer data (audit logs) is synced — operational data like inventory or patch status requires separate configuration.</li>
                <li>If the Splunk HEC endpoint is unreachable, logs may be queued and sent once connectivity is restored (depends on retry configuration).</li>
                <li>Large environments with high audit log volume may require Splunk indexing capacity planning.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/splunkintegration.log</code></li>
                <li>Verify HEC token and URL in {src_name} → Admin → Integrations → Splunk.</li>
                <li>In Splunk, search <code>index=* sourcetype="{src_name.lower().replace(' ', '_')}"</code> to verify data receipt.</li>
            </ul>
            """,
            []
        )

    # ── 15. Audit Logs to Syslog/SIEM ────────────────────────
    if ('audit log' in name_lower or 'action log' in name_lower) and ('syslog' in name_lower or 'siem' in name_lower):
        return (
            f'Audit Log Sync to Syslog/SIEM – {src_name}{beta_tag}',
            f'Forwards action log/audit data from {src_name} to a Syslog server or SIEM solution.',
            f"""
            <h3>Description</h3>
            <p>This feature exports <strong>Action Log Viewer data (audit logs)</strong> from <strong>{src_name}</strong> to a <strong>Syslog server or SIEM</strong> solution. This allows the security operations team to correlate endpoint management events with other security data sources in a centralized SIEM.</p>

            <h3>How This Works</h3>
            <ol>
                <li>Enable the Syslog integration in {src_name} under Admin → Integrations → Syslog/SIEM.</li>
                <li>Configure the Syslog server IP/hostname, port, and protocol (UDP/TCP/TLS).</li>
                <li>{src_name} sends audit log entries in syslog-compatible format (RFC 5424 or CEF) to the configured server.</li>
                <li>The SIEM/Syslog server ingests the data for correlation, alerting, and compliance reporting.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>A Syslog server or SIEM solution (e.g., EventLog Analyzer, Splunk, QRadar, ArcSight) that accepts syslog input.</li>
                <li>Network connectivity from {src_name} server to the Syslog server on the configured port.</li>
                <li>The integration must be enabled in {src_name}.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>UDP-based syslog does not guarantee delivery — use TCP/TLS for reliable transmission.</li>
                <li>Only audit log data is forwarded. Patch/vulnerability data requires separate integrations.</li>
                <li>Firewall rules must allow outbound traffic from {src_name} to the Syslog server.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/syslogintegration.log</code></li>
                <li>Verify syslog server IP, port, and protocol in {src_name} → Admin → Integrations.</li>
                <li>Test connectivity: <code>telnet &lt;syslog_server_ip&gt; &lt;port&gt;</code> from the {src_name} server.</li>
            </ul>
            """,
            []
        )

    # ── 16. Audit Logs to ELA ────────────────────────────────
    if ('audit log' in name_lower or 'action log' in name_lower) and 'ela' in name_lower:
        return (
            f'Audit Log Sync to EventLog Analyzer – {src_name}{beta_tag}',
            f'Forwards audit log data from {src_name} to EventLog Analyzer for log management and compliance.',
            f"""
            <h3>Description</h3>
            <p>This feature sends <strong>Action Log Viewer data (audit logs)</strong> from <strong>{src_name}</strong> to <strong>EventLog Analyzer (ELA)</strong>. ELA processes these logs for compliance reporting, security analysis, and real-time alerting on administrative actions.</p>

            <h3>How This Works</h3>
            <ol>
                <li>Enable the ELA integration in {src_name} under Admin → Integrations → EventLog Analyzer.</li>
                <li>Provide the ELA server URL and API key.</li>
                <li>{src_name} periodically pushes audit log entries to ELA via API.</li>
                <li>ELA indexes the data and makes it available for search, dashboards, and compliance reports.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>EventLog Analyzer must be installed and operational.</li>
                <li>API access must be configured in ELA.</li>
                <li>{src_name} server must have network connectivity to the ELA server.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Only audit log data is synced — other data types require separate feature enablement.</li>
                <li>If ELA is unreachable, logs will be retried but may be lost if the queue overflows.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/elaintegration.log</code></li>
                <li>Verify ELA URL and API key in {src_name} → Admin → Integrations → EventLog Analyzer.</li>
            </ul>
            """,
            []
        )

    # ── 17. Patch Data to ELA ────────────────────────────────
    if 'patch data' in name_lower and 'ela' in name_lower:
        return (
            f'Patch Data Sync to EventLog Analyzer – {src_name}{beta_tag}',
            f'Patch compliance data from {src_name} is pulled into EventLog Analyzer for incident workflows and alerting.',
            f"""
            <h3>Description</h3>
            <p>This feature pulls <strong>patch compliance data</strong> from <strong>{src_name}</strong> into <strong>EventLog Analyzer (ELA)</strong>. Security teams can create incident workflows, custom alerts, and correlation rules based on missing patches, failed deployments, and patch approval status.</p>

            <h3>How This Works</h3>
            <ol>
                <li>ELA connects to {src_name} via API and periodically pulls patch-related data.</li>
                <li>Data includes: missing patches, installed patches, failed deployments, and patch approval status.</li>
                <li>In ELA, administrators can create <strong>custom correlation rules</strong> (e.g., "alert if a critical patch is missing on 100+ machines") and <strong>incident workflows</strong> that trigger automatic responses.</li>
                <li>Patches can be <strong>approved and deployed</strong> directly from ELA's incident workflow interface.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>{src_name} and EventLog Analyzer must be integrated via API credentials.</li>
                <li>ELA must have the UEM (Unified Endpoint Management) plugin or compatible module enabled.</li>
                <li>Patch scanning must be active in {src_name} so patch data is available.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Data pull frequency depends on the configured sync interval in ELA — it is not real-time.</li>
                <li>Approving patches from ELA requires the API user to have patch approval permissions in {src_name}.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>ELA server:</strong> Check the UEM integration logs in ELA's log directory.</li>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/elaintegration.log</code></li>
                <li>Verify API credentials and connectivity between both servers.</li>
            </ul>
            """,
            []
        )

    # ── 18. Vulnerability Data to ELA ────────────────────────
    if 'vulnerability' in name_lower and 'ela' in name_lower:
        return (
            f'Vulnerability Data Sync to EventLog Analyzer – {src_name}{beta_tag}',
            f'Vulnerability and system misconfiguration data from {src_name} is pulled into ELA for custom correlation rules and alerts.',
            f"""
            <h3>Description</h3>
            <p>This feature pulls <strong>vulnerability and system misconfiguration data</strong> from <strong>{src_name}</strong> into <strong>EventLog Analyzer (ELA)</strong>. Security teams can create custom correlation rules and alert profiles to identify devices with critical vulnerabilities or misconfigurations.</p>

            <h3>How This Works</h3>
            <ol>
                <li>ELA connects to {src_name} via API and pulls vulnerability scan results and misconfiguration data.</li>
                <li>Data includes: CVE IDs, severity levels, affected machines, misconfiguration details, and remediation status.</li>
                <li>In ELA, admins create <strong>custom correlation rules</strong> (e.g., "alert if a high-severity CVE exists on a critical server") and <strong>alert profiles</strong>.</li>
                <li>Alerts can trigger automated incident responses or escalation workflows.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>{src_name} and ELA must be integrated with valid API credentials.</li>
                <li>Vulnerability scanning must be active in {src_name}.</li>
                <li>ELA must have the UEM plugin or compatible module enabled.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Data sync is periodic, not real-time. New vulnerabilities will appear in ELA after the next sync cycle.</li>
                <li>Large vulnerability datasets may take time to process on the ELA side.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>ELA server:</strong> Check UEM integration logs in ELA's log directory.</li>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/elaintegration.log</code></li>
            </ul>
            """,
            []
        )

    # ── 19. ELA Comparators ──────────────────────────────────
    if 'comparator' in name_lower:
        return (
            f'ELA Comparators for {src_name}{beta_tag}',
            f'Create comparators in EventLog Analyzer to build custom correlation rules and alert profiles using {src_name} data.',
            f"""
            <h3>Description</h3>
            <p><strong>Comparators</strong> in EventLog Analyzer allow you to define conditions that compare incoming data (from {src_name}) against predefined criteria. These comparators are used as building blocks for <strong>custom correlation rules</strong> and <strong>alert profiles</strong>, enabling powerful security monitoring tailored to your environment.</p>

            <h3>How This Works</h3>
            <ol>
                <li>In ELA, navigate to Correlation → Comparators and create a new comparator.</li>
                <li>Select {src_name} as the data source and define the condition (e.g., "vulnerability severity >= High").</li>
                <li>Use the comparator in a <strong>correlation rule</strong> (e.g., "if high-severity vulnerability on a server AND no patch deployed within 7 days, trigger alert").</li>
                <li>Attach an <strong>alert profile</strong> to the rule for email notifications, ticket creation, or automated scripts.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>{src_name} must be integrated with ELA and data sync must be active.</li>
                <li>Sufficient data must have been synced from {src_name} for comparators to evaluate against.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Complex correlation rules with multiple comparators may have a performance impact on ELA during evaluation.</li>
                <li>Comparators depend on the data fields available from {src_name} — not all fields may be exposed.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>ELA server:</strong> Check correlation engine logs in ELA's log directory.</li>
                <li>Verify that data from {src_name} is being received by checking the ELA data source status.</li>
            </ul>
            """,
            []
        )

    # ── 20. Vulnerability Data to Splunk ─────────────────────
    if 'vulnerability' in name_lower and 'splunk' in name_lower:
        return (
            f'Vulnerability Data Sync to Splunk – {src_name}{beta_tag}',
            f'Syncs vulnerability scan data from {src_name} to Splunk for SIEM analysis and dashboards.',
            f"""
            <h3>Description</h3>
            <p>This feature sends <strong>vulnerability scan results</strong> from <strong>{src_name}</strong> to <strong>Splunk</strong>, enabling security teams to build dashboards, alerts, and correlation rules based on endpoint vulnerability data.</p>

            <h3>How This Works</h3>
            <ol>
                <li>Enable Splunk integration in {src_name} under Admin → Integrations → Splunk.</li>
                <li>Configure the Splunk HEC endpoint URL and token, and enable "Vulnerability Data" in the sync options.</li>
                <li>{src_name} periodically sends vulnerability data (CVE IDs, severity, affected devices, remediation status) to Splunk.</li>
                <li>In Splunk, the data is available for search, dashboards, and alerting.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>Splunk with HTTP Event Collector (HEC) enabled and a valid token.</li>
                <li>Vulnerability scanning must be active in {src_name}.</li>
                <li>{src_name} server must have outbound HTTPS connectivity to Splunk.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Data is sent periodically, not in real-time.</li>
                <li>Environments with thousands of vulnerabilities may produce large data volumes — plan Splunk indexing capacity accordingly.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/splunkintegration.log</code></li>
                <li>Verify HEC token/URL and the "Vulnerability Data" option in integration settings.</li>
            </ul>
            """,
            []
        )

    # ── 21. QRadar Integration ───────────────────────────────
    if 'qradar' in name_lower:
        method = 'REST API' if 'rest' in name_lower else 'Syslog'
        return (
            f'Audit Log Sync to IBM QRadar ({method}) – {src_name}{beta_tag}',
            f'Forwards audit log data from {src_name} to IBM QRadar via {method} for SIEM correlation.',
            f"""
            <h3>Description</h3>
            <p>This feature sends <strong>Action Log Viewer (audit log)</strong> data from <strong>{src_name}</strong> to <strong>IBM QRadar</strong> via <strong>{method}</strong>. QRadar can then apply its offense detection, correlation rules, and reporting to track administrative events from {src_name}.</p>

            <h3>How This Works</h3>
            {"<ol><li>Enable the QRadar integration in " + src_name + " under Admin → Integrations → QRadar.</li><li>Configure the QRadar REST API endpoint URL and authentication token.</li><li>" + src_name + " sends audit log entries to QRadar's REST API at configured intervals.</li><li>QRadar ingests and correlates the data alongside other log sources.</li></ol>" if method == 'REST API' else "<ol><li>Enable the QRadar (Syslog) integration in " + src_name + " under Admin → Integrations → QRadar.</li><li>Configure the QRadar Syslog listener IP, port, and protocol.</li><li>" + src_name + " sends audit log entries in syslog format to QRadar's log source.</li><li>QRadar parses and correlates the data.</li></ol>"}

            <h3>Prerequisites</h3>
            <ul>
                <li>IBM QRadar instance with {"REST API access enabled and a valid authentication token." if method == 'REST API' else "a Syslog log source configured to accept data on the specified port."}</li>
                <li>{src_name} server must have network access to QRadar on the configured port.</li>
                <li>The integration must be enabled in {src_name}.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>{"REST API method may have rate limits depending on QRadar configuration." if method == 'REST API' else "Syslog over UDP does not guarantee delivery — consider TCP for reliability."}</li>
                <li>Only audit log data is forwarded via this feature.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/qradarintegration.log</code></li>
                <li>{"Verify REST API endpoint and token in integration settings." if method == 'REST API' else "Verify Syslog server IP and port. Test with: <code>telnet &lt;qradar_ip&gt; &lt;port&gt;</code>"}</li>
            </ul>
            """,
            []
        )

    # ── 22. ServiceNow Asset Data Post ───────────────────────
    if 'asset data post' in name_lower and 'servicenow' in name_lower:
        return (
            f'Asset Data Post to ServiceNow – {src_name}{beta_tag}',
            f'Posts hardware and software asset data from {src_name} to ServiceNow CMDB.',
            f"""
            <h3>Description</h3>
            <p>This feature posts <strong>asset inventory data</strong> (hardware and software) from <strong>{src_name}</strong> to <strong>ServiceNow's CMDB</strong>. It keeps the ServiceNow asset database accurate and current by syncing data discovered by the {src_name} agent.</p>

            <h3>How This Works</h3>
            <ol>
                <li>Configure the ServiceNow integration in {src_name} under Admin → Integrations → ServiceNow.</li>
                <li>Provide ServiceNow instance URL, credentials (or OAuth), and select the data types to sync.</li>
                <li>{src_name} pushes asset data (computer name, OS, hardware specs, installed software) to ServiceNow via REST API.</li>
                <li>Assets are matched in ServiceNow using serial number or computer name to prevent duplicates.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>ServiceNow instance with CMDB and REST API access.</li>
                <li>A ServiceNow service account with CMDB write permissions.</li>
                <li>{src_name} must have outbound HTTPS access to the ServiceNow instance.</li>
                <li>Install the ManageEngine app from the ServiceNow Store if required.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Custom CMDB fields in ServiceNow may not be automatically populated — field mapping may require configuration.</li>
                <li>Sync is one-directional (from {src_name} to ServiceNow).</li>
                <li>Rate limiting on ServiceNow REST API may slow bulk asset syncs.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/snowintegration.log</code></li>
                <li>Verify ServiceNow instance URL and credentials under integration settings.</li>
                <li>Check ServiceNow's System Logs → REST API for errors.</li>
            </ul>
            """,
            []
        )

    # ── 23. ServiceNow Asset Removal ─────────────────────────
    if ('servicenow' in name_lower or 'snow' in fid) and ('removed' in name_lower or 'removal' in name_lower or 'remove' in name_lower) and 'software' not in name_lower:
        return (
            f'Asset Removal Sync to ServiceNow – {src_name}{beta_tag}',
            f'When a device is removed from {src_name} SoM, the corresponding ServiceNow CI is updated or removed.',
            f"""
            <h3>Description</h3>
            <p>When a device is removed from the <strong>Scope of Management (SoM)</strong> in <strong>{src_name}</strong>, this feature updates or removes the corresponding <strong>Configuration Item (CI)</strong> in <strong>ServiceNow's CMDB</strong>. This keeps the CMDB clean by removing stale entries for decommissioned devices.</p>

            <h3>How This Works</h3>
            <ol>
                <li>A device is removed from {src_name}'s Scope of Management (via uninstall, decommission, etc.).</li>
                <li>{src_name} sends a removal notification to ServiceNow via REST API.</li>
                <li>Based on configuration, the CI in ServiceNow is either deleted, retired, or marked as decommissioned.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>ServiceNow integration must be configured and active in {src_name}.</li>
                <li>The asset must have been previously synced to ServiceNow.</li>
                <li>The ServiceNow service account must have CI write/delete permissions.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>If the integration is down at removal time, the action will not be retroactively sent.</li>
                <li>Bulk removals may be rate-limited by ServiceNow's API.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/snowintegration.log</code></li>
                <li>Search for "removal" or "delete" in the integration log.</li>
            </ul>
            """,
            []
        )

    # ── 24. ServiceNow Owner Assign ──────────────────────────
    if ('servicenow' in name_lower or 'snow' in fid) and ('owner' in name_lower or 'assign' in name_lower) and 'last logged' not in name_lower:
        return (
            f'Assign Asset Owner in ServiceNow – {src_name}{beta_tag}',
            f'Assigns the last logged-in user from {src_name} as the asset owner in ServiceNow CMDB.',
            f"""
            <h3>Description</h3>
            <p>This feature maps the <strong>last logged-in user</strong> of a managed device (as detected by the {src_name} agent) to the corresponding <strong>ServiceNow CI</strong> as the owner. This automated mapping keeps ServiceNow asset ownership records accurate.</p>

            <h3>How This Works</h3>
            <ol>
                <li>The {src_name} agent captures the last logged-in user during inventory scans.</li>
                <li>When asset data is synced to ServiceNow, the user information is included.</li>
                <li>ServiceNow CI's "Assigned to" or "Owner" field is updated to match this user.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>Asset sync from {src_name} to ServiceNow must be active.</li>
                <li>User records in ServiceNow must match the user names reported by {src_name}.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>If the user doesn't exist in ServiceNow, the owner field will not be updated.</li>
                <li>Shared machines may show rapidly changing ownership.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/snowintegration.log</code></li>
                <li>Verify user exists in ServiceNow User table.</li>
            </ul>
            """,
            []
        )

    # ── 25. ServiceNow Software Deploy ───────────────────────
    if ('servicenow' in name_lower or 'snow' in fid) and 'software' in name_lower and 'deploy' in name_lower:
        return (
            f'Deploy Software from ServiceNow – {src_name}{beta_tag}',
            f'Deploy software packages from {src_name} to endpoints directly from ServiceNow tickets.',
            f"""
            <h3>Description</h3>
            <p>Technicians can trigger software deployments on managed endpoints directly from <strong>ServiceNow</strong> tickets, using software packages configured in <strong>{src_name}</strong>.</p>

            <h3>How This Works</h3>
            <ol>
                <li>In ServiceNow, open a ticket associated with a {src_name}-managed asset.</li>
                <li>Use the "Deploy Software" action (available via the ManageEngine integration app).</li>
                <li>Select from available software packages in {src_name}.</li>
                <li>{src_name} pushes the package to the endpoint agent for installation.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>ManageEngine ServiceNow app/plugin installed in ServiceNow.</li>
                <li>Integration configured between {src_name} and ServiceNow.</li>
                <li>Software packages pre-configured in {src_name}.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Only pre-configured packages are available for deployment.</li>
                <li>Agent must be online for immediate deployment.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/snowintegration.log</code> and <code>swdeploy.log</code></li>
            </ul>
            """,
            []
        )

    # ── 26. ServiceNow Software Metering ─────────────────────
    if 'software metering' in name_lower:
        return (
            f'Software Metering Data to ServiceNow – {src_name}{beta_tag}',
            f'Posts software metering (usage) data from {src_name} to ServiceNow for license optimization.',
            f"""
            <h3>Description</h3>
            <p>This feature sends <strong>software metering data</strong> — which tracks how frequently and recently installed software is used — from <strong>{src_name}</strong> to <strong>ServiceNow</strong>. This data helps organizations optimize software licenses by identifying unused or underused software.</p>

            <h3>How This Works</h3>
            <ol>
                <li>The {src_name} agent monitors software usage on managed endpoints (launch frequency, last used date, total usage time).</li>
                <li>This metering data is aggregated at the {src_name} server.</li>
                <li>During sync, the software metering data is posted to ServiceNow via REST API.</li>
                <li>In ServiceNow, this data is available under Software Asset Management for license reclamation and optimization.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>Software metering must be enabled in {src_name}.</li>
                <li>ServiceNow integration must be active with the "Software Metering" option enabled.</li>
                <li>ServiceNow Software Asset Management module should be available.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Metering data accuracy depends on the agent being running and reporting regularly.</li>
                <li>Portable applications launched from USB drives may not be tracked.</li>
                <li>Only Windows endpoints support software metering; macOS/Linux support varies.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/snowintegration.log</code></li>
                <li>Verify software metering is enabled under Inventory → Software Metering in {src_name}.</li>
            </ul>
            """,
            []
        )

    # ── 27. Remote Control from ServiceNow ───────────────────
    if ('servicenow' in name_lower or 'snow' in fid) and 'remote control' in name_lower:
        return (
            f'Remote Control from ServiceNow – {src_name}{beta_tag}',
            f'Initiate a remote desktop session from ServiceNow to a {src_name}-managed endpoint.',
            f"""
            <h3>Description</h3>
            <p>Technicians can launch a remote desktop connection to a managed endpoint directly from <strong>ServiceNow</strong> using the {src_name} remote control capability.</p>

            <h3>How This Works</h3>
            <ol>
                <li>From a ServiceNow CI or incident record, click the "Remote Control" option.</li>
                <li>The request is routed to {src_name} via API.</li>
                <li>{src_name} establishes a remote session to the endpoint agent.</li>
                <li>The remote viewer opens in a new browser tab.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>ManageEngine ServiceNow app installed.</li>
                <li>The {src_name} agent must be installed and online on the target machine.</li>
                <li>Remote control permissions configured for the technician in {src_name}.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Agent must be online and reachable.</li>
                <li>Pop-up blockers may prevent the remote viewer from launching.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/remotecontrol.log</code></li>
            </ul>
            """,
            []
        )

    # ── 28. Analytics Plus / Power BI Default Sync ───────────
    if 'default data synchronization' in name_lower or ('default' in name_lower and 'sync' in fid):
        # Extract the sync description from the feature name
        sync_data = feature_name
        if ':' in sync_data:
            sync_data = sync_data.split(':', 1)[1].strip()
        target = 'Analytics Plus' if tgt_abbr == 'ap' else ('Power BI' if tgt_abbr == 'powerbi' else tgt_name)
        return (
            f'Default Data Sync to {target} – {src_name}{beta_tag}',
            f'Automatically syncs default data categories from {src_name} to {target} for reporting and analytics.',
            f"""
            <h3>Description</h3>
            <p>This feature enables <strong>default data synchronization</strong> from <strong>{src_name}</strong> to <strong>{target}</strong>. The following data categories are synced automatically once the integration is enabled:</p>
            <p><strong>Data synced:</strong> {sync_data}</p>

            <h3>How This Works</h3>
            <ol>
                <li>Enable the {target} integration in {src_name} under Admin → Integrations → {target}.</li>
                <li>Provide the {target} server URL and API credentials.</li>
                <li>{src_name} automatically pushes the default data categories to {target} on a scheduled basis.</li>
                <li>In {target}, the data is available for creating custom reports, dashboards, and analytics.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>{target} must be installed and accessible from the {src_name} server.</li>
                <li>API credentials must be configured.</li>
                <li>The default sync does not require additional feature selection — it is enabled automatically with the integration.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Default sync includes a fixed set of data categories. For additional data, enable Optional Data Synchronization.</li>
                <li>Sync frequency depends on the configured schedule — large datasets may take longer.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/analyticsintegration.log</code></li>
                <li>Verify {target} URL and credentials in {src_name} → Admin → Integrations.</li>
            </ul>
            """,
            []
        )

    # ── 29. Analytics Plus / Power BI Optional Sync ──────────
    if 'optional data synchronization' in name_lower or ('optional' in name_lower and 'sync' in fid):
        sync_data = feature_name
        if ':' in sync_data:
            sync_data = sync_data.split(':', 1)[1].strip()
        target = 'Analytics Plus' if tgt_abbr == 'ap' else ('Power BI' if tgt_abbr == 'powerbi' else tgt_name)
        return (
            f'Optional Data Sync to {target} – {src_name}{beta_tag}',
            f'Enables additional optional data categories to be synced from {src_name} to {target}.',
            f"""
            <h3>Description</h3>
            <p>In addition to default data sync, this feature allows you to enable <strong>optional data categories</strong> for synchronization from <strong>{src_name}</strong> to <strong>{target}</strong>:</p>
            <p><strong>Optional data:</strong> {sync_data}</p>

            <h3>How This Works</h3>
            <ol>
                <li>Navigate to {src_name} → Admin → Integrations → {target}.</li>
                <li>Under "Optional Data Synchronization," select the additional data categories you want to sync.</li>
                <li>The selected data is synced along with the default data on the next scheduled cycle.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>The {target} integration must already be configured and active (default sync should be working).</li>
                <li>The desired data must be available in {src_name} (e.g., hardware scans must be running for hardware data).</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Enabling many optional data categories increases the sync payload and may take longer to process.</li>
                <li>Some optional data (e.g., file details, user logon history) can be large and may impact {target} storage.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/analyticsintegration.log</code></li>
                <li>Verify the optional categories are checked in the integration settings.</li>
            </ul>
            """,
            []
        )

    # ── 30. Jira Asset Data ──────────────────────────────────
    if 'jira' in name_lower and 'asset' in name_lower:
        return (
            f'Asset Data Sync to Jira – {src_name}{beta_tag}',
            f'Pulls asset inventory data from {src_name} into Jira for issue tracking and asset context.',
            f"""
            <h3>Description</h3>
            <p>This feature makes <strong>asset inventory data</strong> from <strong>{src_name}</strong> available within <strong>Jira</strong>, allowing support teams to see device details (hardware, software, user) directly within Jira issues.</p>

            <h3>How This Works</h3>
            <ol>
                <li>Install the ManageEngine Jira plugin/app from the Atlassian Marketplace.</li>
                <li>Configure the {src_name} server URL and API key in the Jira plugin settings.</li>
                <li>When viewing a Jira issue linked to a managed asset, the plugin fetches and displays asset details from {src_name}.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>ManageEngine Jira integration plugin installed in Jira.</li>
                <li>API key configured in {src_name} for the Jira integration.</li>
                <li>Network access from Jira server to {src_name} server.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Asset data is fetched on-demand (not pre-synced) — response time depends on network latency.</li>
                <li>Only assets managed by {src_name} are available.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/jiraintegration.log</code></li>
                <li>Check Jira plugin settings for connectivity errors.</li>
            </ul>
            """,
            []
        )

    # ── 31. FreshService Power Options ───────────────────────
    if 'power options' in name_lower:
        return (
            f'Remote Power Options from {tgt_name} Tickets{beta_tag}',
            f'Perform remote power actions (lock, hibernate, shutdown, Wake-on-LAN) on endpoints from {tgt_name} tickets.',
            f"""
            <h3>Description</h3>
            <p>Technicians can remotely execute <strong>power management actions</strong> — such as lock, hibernate, shutdown, restart, and Wake-on-LAN — on managed endpoints directly from <strong>{tgt_name}</strong> tickets.</p>

            <h3>How This Works</h3>
            <ol>
                <li>Open a ticket in {tgt_name} that has an associated {src_name}-managed asset.</li>
                <li>Select the <strong>"Power Options"</strong> action.</li>
                <li>Choose the desired action (Lock, Hibernate, Shutdown, Restart, Wake-on-LAN).</li>
                <li>The command is sent to {src_name}, which executes it via the endpoint agent.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>The {src_name} agent must be installed and online on the endpoint.</li>
                <li>Integration between {src_name} and {tgt_name} must be active.</li>
                <li>Wake-on-LAN requires the endpoint's network adapter and BIOS to support WoL.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Wake-on-LAN only works if the endpoint is on the same subnet or if WoL relay/forwarding is configured on the router.</li>
                <li>Shutdown/restart actions are irreversible once triggered.</li>
                <li>Hibernate may not work on endpoints where hibernation is disabled by policy.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/tools.log</code></li>
                <li><strong>Agent side:</strong> <code>&lt;Agent_Dir&gt;/logs/dcagentservicelog.txt</code></li>
            </ul>
            """,
            []
        )

    # ── 32. MDM-specific: Wipe, Locate, Configure profiles, Install apps, Assign users, Add to groups, Geo-tracking ──
    if 'wipe' in name_lower and 'remove management' in name_lower:
        return (
            f'Wipe and Remove Management from {tgt_name}{beta_tag}',
            f'Remotely wipe and remove device management from mobile devices via {tgt_name} tickets.',
            f"""
            <h3>Description</h3>
            <p>This feature allows technicians to initiate a <strong>remote wipe</strong> and <strong>remove device management</strong> on mobile devices directly from <strong>{tgt_name}</strong> tickets. This is typically used for lost/stolen devices or when an employee leaves the organization.</p>

            <h3>How This Works</h3>
            <ol>
                <li>Open a ticket in {tgt_name} associated with a mobile device managed by {src_name}.</li>
                <li>Select <strong>"Wipe and Remove Management"</strong> from the available actions.</li>
                <li>Confirm the action (this is irreversible).</li>
                <li>{src_name} sends the wipe command to the device via the MDM profile. The device is factory-reset and removed from management.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>The mobile device must be enrolled and managed by {src_name} MDM.</li>
                <li>The device must be reachable (connected to network/internet) for the wipe command to execute.</li>
                <li>Technician must have "Wipe" permissions in {src_name}.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li><strong>This is an irreversible action</strong> — all data on the device will be permanently erased.</li>
                <li>If the device is offline, the wipe command will be queued and executed when the device comes online.</li>
                <li>Corporate-wipe (removing only corporate data) may be available as a separate action if supported.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/mdmcommands.log</code></li>
                <li>Check device status under {src_name} → Mobile Device Management → Devices.</li>
            </ul>
            """,
            []
        )

    if 'configure devices' in name_lower or 'associating profiles' in name_lower:
        return (
            f'Configure Devices via Profiles from {tgt_name}{beta_tag}',
            f'Associate and deploy configuration profiles to mobile devices from {tgt_name} tickets.',
            f"""
            <h3>Description</h3>
            <p>Technicians can associate and deploy <strong>configuration profiles</strong> (Wi-Fi, VPN, email, restrictions, etc.) to mobile devices directly from <strong>{tgt_name}</strong> tickets, without switching to the MDM console.</p>

            <h3>How This Works</h3>
            <ol>
                <li>Open a ticket in {tgt_name} for a mobile device managed by {src_name}.</li>
                <li>Select <strong>"Configure Device"</strong> and choose from available profiles in {src_name}.</li>
                <li>The profile is pushed to the device via the MDM channel.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>Configuration profiles must be pre-created in {src_name}.</li>
                <li>The device must be enrolled and reachable.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Only pre-existing profiles in {src_name} can be deployed — new profiles cannot be created from {tgt_name}.</li>
                <li>Profile compatibility depends on the device OS and version.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/mdmcommands.log</code></li>
            </ul>
            """,
            []
        )

    if 'install apps' in name_lower or 'distributing apps' in name_lower:
        return (
            f'Install Apps on Mobile Devices from {tgt_name}{beta_tag}',
            f'Remotely distribute and install applications on mobile devices from {tgt_name} tickets.',
            f"""
            <h3>Description</h3>
            <p>Technicians can remotely install applications on managed mobile devices by triggering app distribution from <strong>{tgt_name}</strong> tickets. Apps are sourced from the {src_name} app catalog.</p>

            <h3>How This Works</h3>
            <ol>
                <li>Open a ticket in {tgt_name} for a mobile device managed by {src_name}.</li>
                <li>Select <strong>"Install App"</strong> and browse the app catalog from {src_name}.</li>
                <li>The app installation command is sent to the device.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>Apps must be added to the {src_name} app catalog.</li>
                <li>The device must be enrolled and connected.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>App installation requires sufficient storage on the device.</li>
                <li>Some apps may require user acceptance on the device before installation completes.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/mdmcommands.log</code></li>
            </ul>
            """,
            []
        )

    if 'assign users' in name_lower and 'managed devices' in name_lower:
        return (
            f'Assign Users to Managed Devices from {tgt_name}{beta_tag}',
            f'Assign users to mobile devices from {tgt_name} tickets for ownership tracking.',
            f"""
            <h3>Description</h3>
            <p>Technicians can assign users to managed mobile devices directly from <strong>{tgt_name}</strong> tickets. This updates the device ownership record in {src_name}.</p>

            <h3>How This Works</h3>
            <ol>
                <li>Open a ticket in {tgt_name} for a mobile device managed by {src_name}.</li>
                <li>Select <strong>"Assign User"</strong> and choose the user from the directory.</li>
                <li>The device-user mapping is updated in {src_name}.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>User must exist in {src_name}'s user directory.</li>
                <li>Integration must be active.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Only one user can be assigned per device at a time.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/mdmcommands.log</code></li>
            </ul>
            """,
            []
        )

    if 'add devices to groups' in name_lower:
        return (
            f'Add Devices to Groups from {tgt_name}{beta_tag}',
            f'Add mobile devices to management groups from {tgt_name} tickets for simplified management.',
            f"""
            <h3>Description</h3>
            <p>Technicians can add managed mobile devices to specific <strong>device groups</strong> in {src_name} directly from <strong>{tgt_name}</strong> tickets. Group membership determines which policies and apps are applied to the device.</p>

            <h3>How This Works</h3>
            <ol>
                <li>Open a ticket in {tgt_name} for a mobile device managed by {src_name}.</li>
                <li>Select <strong>"Add to Group"</strong> and choose the target group.</li>
                <li>The device is added to the group in {src_name}, and associated policies/apps are applied.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>Groups must be pre-created in {src_name}.</li>
                <li>Integration must be active.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Only existing groups can be selected — new groups cannot be created from {tgt_name}.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/mdmcommands.log</code></li>
            </ul>
            """,
            []
        )

    if 'geo-tracking' in name_lower or 'device location' in name_lower:
        return (
            f'Geo-Tracking / Locate Device from {tgt_name}{beta_tag}',
            f'Identify the location of a mobile device remotely using geo-tracking from {tgt_name} tickets.',
            f"""
            <h3>Description</h3>
            <p>Technicians can remotely locate a managed mobile device using <strong>geo-tracking</strong> directly from <strong>{tgt_name}</strong> tickets. This is useful for tracking lost or stolen devices.</p>

            <h3>How This Works</h3>
            <ol>
                <li>Open a ticket in {tgt_name} for a mobile device managed by {src_name}.</li>
                <li>Select <strong>"Locate Device"</strong> or <strong>"Geo-Tracking"</strong>.</li>
                <li>{src_name} sends a location request to the device via the MDM profile.</li>
                <li>The device reports its GPS coordinates, which are displayed on a map.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>Location services must be enabled on the mobile device.</li>
                <li>The device must be powered on and connected to the internet.</li>
                <li>Geo-tracking must be enabled in the {src_name} MDM policy.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>GPS accuracy varies depending on the device's environment (indoor vs. outdoor).</li>
                <li>If location services are disabled on the device, tracking will fail.</li>
                <li>Some privacy regulations may restrict the use of device location tracking.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/mdmcommands.log</code></li>
            </ul>
            """,
            []
        )

    # ── 33. Software Removal (AE software) ───────────────────
    if 'software' in name_lower and ('removed' in name_lower or 'removal' in name_lower) and ('commercial' in name_lower or 'ae software' in name_lower):
        return (
            f'Software Removal Sync – {src_name} → {tgt_name}{beta_tag}',
            f'When commercial software is removed from {src_name}, the corresponding software entry is updated in {tgt_name}.',
            f"""
            <h3>Description</h3>
            <p>When <strong>commercial software</strong> is removed or uninstalled from {src_name}'s software catalog, this feature automatically updates the corresponding software record in <strong>{tgt_name}</strong>. This keeps the asset management software inventory accurate.</p>

            <h3>How This Works</h3>
            <ol>
                <li>An administrator removes a commercial software entry from {src_name}'s software inventory or catalog.</li>
                <li>{src_name} sends a removal notification to {tgt_name} via the integration API.</li>
                <li>{tgt_name} updates or removes the corresponding software record from its asset database.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>Integration between {src_name} and {tgt_name} must be active.</li>
                <li>The software must have been previously synced to {tgt_name}.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Only commercial software tracked in {src_name}'s inventory is affected.</li>
                <li>Freeware or untracked software removals are not synced.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> <code>&lt;Install_Dir&gt;/logs/sdpintegration.txt</code></li>
            </ul>
            """,
            []
        )

    # ── 34. SDP-specific: Action to be performed on SDP asset when the device is removed from MDM ──
    if 'sdp asset' in name_lower and 'device is removed' in name_lower and 'mobile' in name_lower:
        return (
            f'Mobile Device Removal – SDP Asset Action{beta_tag}',
            f'When a mobile device is removed from MDM management, the corresponding SDP asset is updated.',
            f"""
            <h3>Description</h3>
            <p>When a mobile device is removed from <strong>Mobile Device Manager Plus</strong> management, this feature automatically performs a configured action on the corresponding asset record in <strong>ServiceDesk Plus</strong>.</p>

            <h3>How This Works</h3>
            <ol>
                <li>A mobile device is unenrolled or removed from Mobile Device Manager Plus.</li>
                <li>MDM sends a notification to ServiceDesk Plus via the integration API.</li>
                <li>Based on configuration, the SDP asset is either removed, marked as retired, or left unchanged.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>MDM and SDP integration must be active.</li>
                <li>The mobile device asset must have been synced to SDP previously.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>If integration is down at unroll time, the action may not be retroactively applied.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>MDM server:</strong> <code>&lt;Install_Dir&gt;/logs/sdpintegration.txt</code></li>
            </ul>
            """,
            []
        )

    # ── FALLBACK: Generic feature detail ─────────────────────
    return (
        feature_name + beta_tag,
        f'{feature_name}.',
        f"""
            <h3>Description</h3>
            <p>{feature_name}. This integration feature connects <strong>{src_name}</strong> with <strong>{tgt_name}</strong> to streamline operations.</p>

            <h3>How This Works</h3>
            <ol>
                <li>Enable the integration in {src_name} under Admin → Integrations.</li>
                <li>Configure the target server URL and API credentials.</li>
                <li>The feature operates automatically once enabled, syncing data or enabling actions between the two products.</li>
            </ol>

            <h3>Prerequisites</h3>
            <ul>
                <li>Both {src_name} and {tgt_name} must be installed and accessible.</li>
                <li>Integration must be configured with valid API credentials.</li>
                <li>Network connectivity between servers on the required ports.</li>
            </ul>

            <h3>Known Limitations</h3>
            <ul>
                <li>Both products must be running and reachable for the integration to function.</li>
                <li>Deployment mode: <strong>{deployment}</strong>.</li>
            </ul>

            <h3>Logs for Troubleshooting</h3>
            <ul>
                <li><strong>{src_name} server:</strong> Check integration-related logs in <code>&lt;Install_Dir&gt;/logs/</code>.</li>
            </ul>
        """,
        []
    )


# ─── Main: generate JS file ─────────────────────────────────────
def main():
    id_to_name = read_integrations()
    print(f"Found {len(id_to_name)} unique feature IDs")

    entries = []
    for fid in sorted(id_to_name.keys()):
        name = id_to_name[fid]
        title, description, content, links = classify_and_generate(fid, name)
        # Escape backticks in content for JS template literal
        content = content.replace('`', '\\`')
        # Build links JS array
        if links:
            links_js = ',\n            '.join(
                f"{{ title: '{l['title']}', url: '{l['url']}' }}" for l in links
            )
            links_section = f"""[
            {links_js}
        ]"""
        else:
            links_section = '[]'

        escaped_title = title.replace("'", "\\'")
        escaped_desc = description.replace("'", "\\'")
        entry = (
            f"    '{fid}': {{\n"
            f"        title: '{escaped_title}',\n"
            f"        description: '{escaped_desc}',\n"
            f"        content: `{content}\n"
            f"        `,\n"
            f"        links: {links_section}\n"
            f"    }}"
        )
        entries.append(entry)

    js_content = f"""/**
 * ============================================================
 *  FEATURE DETAILS DATABASE
 * ============================================================
 *  Each key here must match a feature `id` used in
 *  config/integrations.js.  When a user clicks a feature
 *  in the results list, the app looks up that id here.
 *
 *  Each entry has:
 *    title       : Display title on the detail page
 *    description : Short summary shown under the title
 *    content     : HTML string with full explanation
 *    links       : [ {{ title: '...', url: '...' }}, ... ]
 *
 *  HOW TO ADD A FEATURE DETAIL PAGE:
 *  1. Copy an existing entry as a template.
 *  2. Set the key to match the feature id from integrations.js.
 *  3. Fill in the four fields above.
 *  4. Save and refresh.
 *
 *  Features WITHOUT a matching entry here will show
 *  "Feature details not available yet" when clicked.
 * ============================================================
 */

// Feature details database
const FEATURE_DETAILS = {{
{(','+chr(10)).join(entries)}
}};
"""

    with open(OUTPUT_FILE, 'w') as f:
        f.write(js_content)
    print(f"Written {len(entries)} feature entries to {OUTPUT_FILE}")


if __name__ == '__main__':
    main()
