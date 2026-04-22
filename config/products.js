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

    // ── Product 1 dropdown (left side) ──────────────────────
    product1Items: [
        { value: 'endpoint-central',          label: 'Endpoint Central (EC)' },
        { value: 'patch-manager-plus',         label: 'Patch Manager Plus (PMP)' },
        { value: 'remote-access-plus',         label: 'Remote Access Plus (RAP)' },
        { value: 'patch-connect-plus',         label: 'Patch Connect Plus (PCP)' },
        { value: 'vulnerability-manager-plus', label: 'Vulnerability Manager Plus (VMP)' },
        { value: 'mobile-device-manager',      label: 'Mobile Device Manager (MDM)' },
        { value: 'application-control-plus',   label: 'Application Control Plus (ACP)' },
        { value: 'device-control-plus',        label: 'Device Control Plus (DCP)' },
        { value: 'browser-security-plus',      label: 'Browser Security Plus (BSP)' }
    ],

    // ── Product 2 dropdown (right side) ─────────────────────
    product2Items: [
        { value: 'servicedesk-plus',   label: 'ServiceDesk Plus (SDP)' },
        { value: 'asset-explorer',     label: 'Asset Explorer (AE)' },
        { value: 'event-log-analyzer', label: 'Event log analyzer / Log 360 (ELA)' },
        { value: 'analytics-plus',     label: 'Analytics Plus (AP)' },
        { value: 'servicenow-basic',   label: 'ServiceNow (Basic)' },
        { value: 'servicenow-sgc',     label: 'ServiceNow SGC' },
        { value: 'jira',               label: 'Jira' },
        { value: 'zendesk',            label: 'Zendesk' },
        { value: 'freshservice',       label: 'Freshservice' },
        { value: 'powerbi',            label: 'PowerBI' },
        { value: 'ibm-qradar',        label: 'IBM QRadar' },
        { value: 'splunk',             label: 'Splunk' },
        { value: 'syslog-siem',        label: 'Syslog / SIEM' }
//        { value: 'tenable',            label: 'Tenable' },
//        { value: 'crowdstrike',        label: 'Crowdstrike' },
//        { value: 'rapid7',             label: 'Rapid7' },
//        { value: 'checkpoint',         label: 'CheckPoint' },
//        { value: 'zoho-flow',          label: 'Zoho Flow' }
    ],

    // ── Display names (used in results panel) ───────────────
    //    Must include EVERY value from both lists above.
    productNames: {
        // Product 1
        'endpoint-central':          'Endpoint Central (EC)',
        'patch-manager-plus':        'Patch Manager Plus (PMP)',
        'remote-access-plus':        'Remote Access Plus (RAP)',
        'patch-connect-plus':        'Patch Connect Plus (PCP)',
        'vulnerability-manager-plus':'Vulnerability Manager Plus (VMP)',
        'mobile-device-manager':     'Mobile Device Manager (MDM)',
        'application-control-plus':  'Application Control Plus (ACP)',
        'device-control-plus':       'Device Control Plus (DCP)',
        'browser-security-plus':     'Browser Security Plus (BSP)',

        // Product 2
        'servicedesk-plus':   'ServiceDesk Plus (SDP)',
        'asset-explorer':     'Asset Explorer (AE)',
        'event-log-analyzer': 'Event log analyzer / Log 360 (ELA)',
        'analytics-plus':     'Analytics Plus (AP)',
        'servicenow-basic':   'ServiceNow (Basic)',
        'servicenow-sgc':     'ServiceNow SGC',
        'jira':               'Jira',
        'zendesk':            'Zendesk',
        'freshservice':       'Freshservice',
        'powerbi':            'PowerBI',
        'ibm-qradar':        'IBM QRadar',
        'splunk':             'Splunk',
        'syslog-siem':        'Syslog / SIEM'
//        'tenable':            'Tenable',
//        'crowdstrike':        'Crowdstrike',
//        'rapid7':             'Rapid7',
//        'checkpoint':         'CheckPoint',
//        'zoho-flow':          'Zoho Flow'
    }
};
