/**
 * ============================================================
 *  PRODUCTS CONFIGURATION
 * ============================================================
 *  This file defines all products shown in the dropdowns.
 *
 *  HOW TO ADD A NEW PRODUCT:
 *  1. Add an entry to `product1Items` or `product2Items`
 *     with a unique `value` (kebab-case) and a `label`.
 *  2. Add the same `value` → display name to `productNames`.
 *  3. Save this file and refresh the page.
 * ============================================================
 */

const PRODUCTS_CONFIG = {

    // ── Product 1 dropdown (ManageEngine products) ─────────────
    product1Items: [
        { value: 'endpoint-central',          label: 'Endpoint Central (EC)' },
        { value: 'endpoint-central-msp',      label: 'Endpoint Central MSP' },
        { value: 'patch-manager-plus',         label: 'Patch Manager Plus (PMP)' },
        { value: 'vulnerability-manager-plus', label: 'Vulnerability Manager Plus (VMP)' },
        { value: 'remote-access-plus',         label: 'Remote Access Plus (RAP)' },
        { value: 'device-control-plus',        label: 'Device Control Plus (DCP)' },
        { value: 'application-control-plus',   label: 'Application Control Plus (ACP)' },
        { value: 'endpoint-dlp',               label: 'Endpoint DLP' },
        { value: 'summary-server',             label: 'Summary Server (SS)' },
        { value: 'probe',                      label: 'Probe' },
        { value: 'rpp',                        label: 'RPP' },
        { value: 'mpp',                        label: 'MPP' },
        { value: 'maa',                        label: 'MAA' },
        { value: 'browser-security-plus',      label: 'Browser Security Plus (BSP)' },
        { value: 'mobile-device-manager',      label: 'Mobile Device Manager (MDM)' }
    ],

    // ── Product 2 dropdown (integration partners) ──────────────
    product2Items: [
        { value: 'servicedesk-plus',       label: 'ServiceDesk Plus (SDP)' },
        { value: 'servicedesk-plus-msp',   label: 'ServiceDesk Plus MSP' },
        { value: 'asset-explorer',         label: 'Asset Explorer (AE)' },
        { value: 'analytics-plus',         label: 'Analytics Plus (AP)' },
        { value: 'log360',                 label: 'Log360 (ELA)' },
        { value: 'servicenow',             label: 'ServiceNow' },
        { value: 'jira',                   label: 'Jira' },
        { value: 'zendesk',                label: 'Zendesk' },
        { value: 'freshservice',           label: 'Freshservice' },
        { value: 'freshdesk',              label: 'Freshdesk' },
        { value: 'halopsa',                label: 'HaloPSA' },
        { value: 'connectwise',            label: 'ConnectWise (PSA)' },
        { value: 'powerbi',                label: 'Power BI' },
        { value: 'splunk',                 label: 'Splunk' },
        { value: 'syslog-siem',            label: 'Syslog / SIEM' },
        { value: 'crowdstrike',            label: 'CrowdStrike / Falcon Spotlight' },
        { value: 'qualys',                 label: 'Qualys' },
        { value: 'rapid7-insightvm',       label: 'Rapid7 InsightVM' },
        { value: 'tenable-sc',             label: 'Tenable Security Center' },
        { value: 'tenable-vm',             label: 'Tenable Vulnerability Management' },
        { value: 'pam360',                 label: 'PAM 360' },
        { value: 'zoho-flow',              label: 'Zoho Flow' }
    ],

    // ── Display names (used in results panel) ───────────────
    //    Must include EVERY value from both lists above.
    productNames: {
        // Product 1 (ManageEngine products)
        'endpoint-central':           'Endpoint Central (EC)',
        'endpoint-central-msp':       'Endpoint Central MSP',
        'patch-manager-plus':         'Patch Manager Plus (PMP)',
        'vulnerability-manager-plus': 'Vulnerability Manager Plus (VMP)',
        'remote-access-plus':         'Remote Access Plus (RAP)',
        'device-control-plus':        'Device Control Plus (DCP)',
        'application-control-plus':   'Application Control Plus (ACP)',
        'endpoint-dlp':               'Endpoint DLP',
        'summary-server':             'Summary Server (SS)',
        'probe':                      'Probe',
        'rpp':                        'RPP',
        'mpp':                        'MPP',
        'maa':                        'MAA',
        'browser-security-plus':      'Browser Security Plus (BSP)',
        'mobile-device-manager':      'Mobile Device Manager (MDM)',

        // Product 2 (integration partners)
        'servicedesk-plus':       'ServiceDesk Plus (SDP)',
        'servicedesk-plus-msp':   'ServiceDesk Plus MSP',
        'asset-explorer':         'Asset Explorer (AE)',
        'analytics-plus':         'Analytics Plus (AP)',
        'log360':                 'Log360 (ELA)',
        'servicenow':             'ServiceNow',
        'jira':                   'Jira',
        'zendesk':                'Zendesk',
        'freshservice':           'Freshservice',
        'freshdesk':              'Freshdesk',
        'halopsa':                'HaloPSA',
        'connectwise':            'ConnectWise (PSA)',
        'powerbi':                'Power BI',
        'splunk':                 'Splunk',
        'syslog-siem':            'Syslog / SIEM',
        'crowdstrike':            'CrowdStrike / Falcon Spotlight',
        'qualys':                 'Qualys',
        'rapid7-insightvm':       'Rapid7 InsightVM',
        'tenable-sc':             'Tenable Security Center',
        'tenable-vm':             'Tenable Vulnerability Management',
        'pam360':                 'PAM 360',
        'zoho-flow':              'Zoho Flow'
    }
};
