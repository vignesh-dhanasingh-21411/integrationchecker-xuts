/**
 * ============================================================
 *  INTEGRATIONS DATABASE
 * ============================================================
 *  Each key follows the pattern:
 *      'product1-version_product2-version'
 *
 *  Example key:
 *      'endpoint-central-cloud_servicedesk-plus-onprem'
 *
 *  Each entry has:
 *    supported    : true/false
 *    betaRelease  : true  (optional — shows a Beta badge)
 *    features     : [ { name: '...', id: '...' }, ... ]
 *    documentation: [ { title: '...', url: '...' }, ... ]
 *
 *  HOW TO ADD A NEW INTEGRATION:
 *  1. Add a new key using the naming pattern above.
 *  2. Fill in supported, features, and documentation.
 *  3. If the feature id needs a detail page, also add it
 *     to config/feature-details.js.
 *  4. Save and refresh.
 *
 *  Combinations NOT listed here will show
 *  "No Integration Available" automatically.
 * ============================================================
 */

const INTEGRATIONS = {

    // ── Application Control Plus Integrations ──────────────────────────────────────
    'application-control-plus-cloud_analytics-plus-cloud': {
        supported: false,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'acp-ap-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'acp-ap-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'acp-ap-default-sync-3'
            },
            { 
                name: 'Optional data synchronization: Users, Groups, BIOS, CD ROM DRIVE, Monitor, Disk drives, Logical disk, Motherboard, Keyboard, Mouse, Physical memory',
                id: 'acp-ap-optional-sync-1'
            },
            { 
                name: 'Optional data synchronization: POTS modem, Processors, Serial port, Video controller, USB controller, Printers, Drivers, Share details, File details',
                id: 'acp-ap-optional-sync-2'
            },
            { 
                name: 'Optional data synchronization: User logon history, Scheduled tasks info, Software audit history, Hardware audit history, Computer and hardware mapping, Computer and group association, Custom groups and associated users',
                id: 'acp-ap-optional-sync-3'
            },
            { 
                name: 'Optional data synchronization: Trusted Platform Module',
                id: 'acp-ap-optional-sync-4'
            }
        ],
        documentation: [
            { title: 'ACP-Analytics Plus Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/analytics-plus-integration.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-analytics.html' },
            { title: 'Custom Reports Configuration', url: 'https://www.manageengine.com/products/desktop-central/custom-reports.html' },
            { title: 'Analytics Dashboard Guide', url: 'https://www.manageengine.com/products/desktop-central/analytics-dashboard.html' }
        ]
    },
    'application-control-plus-cloud_asset-explorer-cloud': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset sync from ACP to AE',
                id: 'acp-ae-inventory-sync'
            },
            { 
                name: 'Remote control asset from AE tickets',
                id: 'acp-ae-remote-control'
            },
            { 
                name: 'Deploy software from AE tickets',
                id: 'acp-ae-deploy-software'
            },
            { 
                name: 'Perform tools action from AE tickets',
                id: 'acp-ae-tools-action'
            },
            { 
                name: 'Loading iFrame of ACP within AE',
                id: 'acp-ae-iframe'
            },
            { 
                name: 'Action to be performed on AE asset when the asset is removed from SOM in Application Control Plus (Beta)',
                id: 'acp-ae-asset-removal-beta'
            },
            { 
                name: 'Trayicon requests are created as AE tickets (Beta)',
                id: 'acp-ae-trayicon-beta'
            },
            { 
                name: 'SSP requests are created as AE tickets (Beta)',
                id: 'acp-ae-ssp-beta'
            }
        ],
        documentation: [
            { title: 'ACP-AE Cloud Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ae-cloud-integration.html' },
            { title: 'Asset Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/asset-sync-setup.html' },
            { title: 'Remote Control Setup', url: 'https://www.manageengine.com/products/desktop-central/remote-control-ae.html' },
            { title: 'iFrame Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/iframe-integration.html' }
        ]
    },
    'application-control-plus-cloud_asset-explorer-onprem': {
        supported: true,
 //       betaRelease: true,
        features: [
            { 
                name: 'Inventory asset sync from ACP to AE',
                id: 'acp-ae-op-inventory-sync'
            },
            { 
                name: 'Load Application Control Plus as iFrame within AE',
                id: 'acp-op-ae-op-iframe'
            }            
        ],
        documentation: [
            { title: 'ACP Cloud to AE On-Premise Integration', url: 'https://www.manageengine.com/products/desktop-central/ae-onprem-integration.html' },
            { title: 'Beta Release Notes', url: 'https://www.manageengine.com/products/desktop-central/beta-release-notes.html' },
            { title: 'Hybrid Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/hybrid-setup.html' }
        ]
    },
    'application-control-plus-cloud_connectwise-cloud': {
        supported: true
    },
    'application-control-plus-cloud_crowdstrike-cloud': {
        supported: false
    },
    'application-control-plus-cloud_freshdesk-cloud': {
        supported: true
    },
    'application-control-plus-cloud_freshservice-cloud': {
        supported: true,
        features: [
            { 
                name: 'Deploy software packages from FreshService tickets',
                id: 'acp-freshservice-deploy-software'
            },
            { 
                name: 'Remote control assets from FreshService tickets',
                id: 'acp-freshservice-remote-control'
            },
            { 
                name: 'System manager tools of a machine can be remotely accessed from FreshService tickets',
                id: 'acp-freshservice-system-tools'
            },
            { 
                name: 'Remote power options such as lock, hibernate, shutdown, Wake on LAN from FreshService tickets',
                id: 'acp-freshservice-power-options'
            }
        ],
        documentation: [
            { title: 'ACP-Freshservice Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/freshservice-integration.html' },
            { title: 'Software Deployment from Tickets', url: 'https://www.manageengine.com/products/desktop-central/freshservice-software-deploy.html' },
            { title: 'Remote Control Configuration', url: 'https://www.manageengine.com/products/desktop-central/freshservice-remote-control.html' },
            { title: 'Freshservice API Documentation', url: 'https://api.freshservice.com/' }
        ]
    },
    'application-control-plus-cloud_halopsa-cloud': {
        supported: true
    },
    'application-control-plus-cloud_jira-cloud': {
        supported: true,
        features: [
            { 
                name: 'Load iFrame from Jira',
                id: 'acp-jira-iframe'
            },
            { 
                name: 'Remote control asset from Jira',
                id: 'acp-jira-remote-control'
            },
            { 
                name: 'Asset data are pulled into Jira from EC',
                id: 'acp-jira-asset-data'
            },
            { 
                name: 'Perform tools action from Jira',
                id: 'acp-jira-tools-action'
            }
        ],
        documentation: [
            { title: 'ACP-Jira Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/jira-integration.html' },
            { title: 'iFrame Configuration', url: 'https://www.manageengine.com/products/desktop-central/jira-iframe-setup.html' },
            { title: 'Remote Control from Jira', url: 'https://www.manageengine.com/products/desktop-central/jira-remote-control.html' },
            { title: 'Jira API Documentation', url: 'https://developer.atlassian.com/cloud/jira/' }
        ]
    },
    'application-control-plus-cloud_log360-onprem': {
        supported: false,
        features: [
            { 
                name: 'Patch data are pulled into ELA from ACP - Approve and install patches directly through incident workflows',
                id: 'acp-ela-patch-data'
            },
            { 
                name: 'Vulnerability and system misconfiguration data are pulled into ELA from ACP - Identify devices with vulnerabilities or misconfigurations using custom correlation rules and alerts',
                id: 'acp-ela-vulnerability-data'
            },
            { 
                name: 'Comparators can be created in ELA and custom correlation rules and custom alert profiles can be created for those comparators',
                id: 'acp-ela-comparators'
            }
        ],
        documentation: [
            { title: 'ACP-ELA Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ela-integration.html' },
            { title: 'Patch Workflow Configuration', url: 'https://www.manageengine.com/products/desktop-central/patch-workflow-ela.html' },
            { title: 'Custom Correlation Rules', url: 'https://www.manageengine.com/products/desktop-central/correlation-rules.html' },
            { title: 'Alert Profile Setup', url: 'https://www.manageengine.com/products/desktop-central/alert-profiles.html' }
        ]
    },
    'application-control-plus-cloud_pam360-cloud': {
        supported: true
    },
    'application-control-plus-cloud_pam360-onprem': {
        supported: true
    },
    'application-control-plus-cloud_powerbi-cloud': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'acp-powerbi-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'acp-powerbi-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'acp-powerbi-default-sync-3'
            }
        ],
        documentation: [
            { title: 'ACP-PowerBI Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/powerbi-integration.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-powerbi.html' },
            { title: 'PowerBI Dashboard Configuration', url: 'https://www.manageengine.com/products/desktop-central/powerbi-dashboard.html' },
            { title: 'PowerBI Documentation', url: 'https://docs.microsoft.com/en-us/power-bi/' }
        ]
    },
    'application-control-plus-cloud_powerbi-onprem': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'acp-powerbi-op-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'acp-powerbi-op-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'acp-powerbi-op-default-sync-3'
            }
        ],
        documentation: [
            { title: 'ACP Cloud to PowerBI On-Premise Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-cloud-powerbi-onprem.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-powerbi.html' },
            { title: 'PowerBI Report Server Setup', url: 'https://www.manageengine.com/products/desktop-central/powerbi-report-server.html' },
            { title: 'PowerBI Documentation', url: 'https://docs.microsoft.com/en-us/power-bi/' }
        ]
    },
    'application-control-plus-cloud_qualys-cloud': {
        supported: false
    },
    'application-control-plus-cloud_rapid7-insightvm-cloud': {
        supported: false
    },
    'application-control-plus-cloud_rapid7-insightvm-onprem': {
        supported: false
    },
    'application-control-plus-cloud_servicedesk-plus-cloud': {
        supported: false,
        features: [
            { 
                name: 'Inventory asset sync from ACP to SDP',
                id: 'acp-sdp-inventory-sync'
            },
            { 
                name: 'Remote control asset from SDP tickets',
                id: 'acp-sdp-remote-control'
            },
            { 
                name: 'Deploy software from SDP tickets',
                id: 'acp-sdp-deploy-software'
            },
            { 
                name: 'Perform tools action from SDP tickets',
                id: 'acp-sdp-tools-action'
            },
            { 
                name: 'Loading iFrame of ACP within SDP',
                id: 'acp-sdp-iframe'
            },
            { 
                name: 'Action to be performed on SDP asset when the asset is removed from SOM in Application Control Plus (Beta)',
                id: 'acp-sdp-asset-removal-beta'
            },
            { 
                name: 'Trayicon requests are created as SDP tickets (Beta)',
                id: 'acp-sdp-trayicon-beta'
            },
            { 
                name: 'SSP requests are created as SDP tickets (Beta)',
                id: 'acp-sdp-ssp-beta'
            }
        ],
        documentation: [
            { title: 'ACP-SDP Cloud Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/help/configuring_desktop_central/integrating-with-servicedesk-plus-cloud.html' },
            { title: 'Configuring EC extension for SDP Cloud', url: 'https://help.sdpondemand.com/endpoint-central-extension' },
            { title: 'Troubleshooting errors while enabling integration', url: 'https://www.manageengine.com/products/desktop-central/kb/sdp-on-demand.html' },
            { title: 'Troubleshooting asset sync between ECOD-SDPOD', url: 'https://zask.pali.io/zask/EMSTechAsk/questions/8639642606' }
        ]
    },
    'application-control-plus-cloud_servicedesk-plus-msp-cloud': {
        supported: false
    },
    'application-control-plus-cloud_servicedesk-plus-msp-onprem': {
        supported: false
    },
    'application-control-plus-cloud_servicedesk-plus-onprem': {
        supported: false,
        betaRelease: true,
        features: [
            { 
                name: 'Inventory asset sync from ACP to SDP',
                id: 'acp-sdp-op-inventory-sync'
            }
        ],
        documentation: [
            { title: 'ACP Cloud to SDP On-Premise Integration', url: 'https://www.manageengine.com/products/desktop-central/sdp-onprem-integration.html' },
            { title: 'Beta Release Notes', url: 'https://www.manageengine.com/products/desktop-central/beta-release-notes.html' },
            { title: 'Hybrid Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/hybrid-setup.html' }
        ]
    },
    'application-control-plus-cloud_servicenow-cloud': {
        supported: true,
        features: [
            { 
                name: 'Asset data post from ACP to ServiceNow',
                id: 'acp-snow-basic-asset-post'
            },
            { 
                name: 'Choose whether to remove an asset from ServiceNow if it is removed from Application Control Plus SoM',
                id: 'acp-snow-basic-asset-removal'
            },
            { 
                name: 'Assign last logged as the asset\'s owner in ServiceNow',
                id: 'acp-snow-basic-owner-assign'
            }
        ],
        documentation: [
            { title: 'ACP-ServiceNow Basic Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/servicenow-integration.html' },
            { title: 'Asset Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/servicenow-asset-sync.html' },
            { title: 'CMDB Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/servicenow-cmdb.html' },
            { title: 'ServiceNow API Guide', url: 'https://docs.servicenow.com/' }
        ]
    },
    'application-control-plus-cloud_servicenow-onprem': {
        supported: false
    },
    'application-control-plus-cloud_splunk-cloud': {
        supported: false,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from ACP to Splunk',
                id: 'acp-splunk-audit-logs'
            },
            { 
                name: 'Vulnerability data is synced from ACP to Splunk',
                id: 'acp-splunk-vuln-data'
            }
        ],
        documentation: [
            { title: 'ACP-Splunk Cloud Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/splunk-cloud-integration.html' },
            { title: 'Audit Log Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/splunk-audit-sync.html' },
            { title: 'Vulnerability Data Export Setup', url: 'https://www.manageengine.com/products/desktop-central/splunk-vulnerability-sync.html' },
            { title: 'Splunk Documentation', url: 'https://docs.splunk.com/' }
        ]
    },
    'application-control-plus-cloud_splunk-onprem': {
        supported: false,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from ACP to Splunk',
                id: 'acp-splunk-op-audit-logs'
            },
            { 
                name: 'Vulnerability data is synced from ACP to Splunk',
                id: 'acp-splunk-op-vuln-data'
            }
        ],
        documentation: [
            { title: 'ACP Cloud to Splunk On-Premise Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-cloud-splunk-onprem.html' },
            { title: 'Audit Log Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/splunk-audit-sync.html' },
            { title: 'Vulnerability Data Export Setup', url: 'https://www.manageengine.com/products/desktop-central/splunk-vulnerability-sync.html' },
            { title: 'Splunk Enterprise Documentation', url: 'https://docs.splunk.com/Documentation/Splunk' }
        ]
    },
    'application-control-plus-cloud_tenable-sc-onprem': {
        supported: false
    },
    'application-control-plus-cloud_tenable-vm-cloud': {
        supported: false
    },
    'application-control-plus-cloud_zendesk-cloud': {
        supported: true,
        features: [
            { 
                name: 'Deploy software packages from Zendesk tickets',
                id: 'acp-zendesk-deploy-software'
            },
            { 
                name: 'Remote control assets from Zendesk tickets',
                id: 'acp-zendesk-remote-control'
            },
            { 
                name: 'System manager tools of a machine can be remotely accessed from Zendesk tickets',
                id: 'acp-zendesk-system-tools'
            },
            { 
                name: 'Remote power options such as lock, hibernate, shutdown, Wake on LAN from Zendesk tickets',
                id: 'acp-zendesk-power-options'
            }
        ],
        documentation: [
            { title: 'ACP-Zendesk Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/zendesk-integration.html' },
            { title: 'Software Deployment from Tickets', url: 'https://www.manageengine.com/products/desktop-central/zendesk-software-deploy.html' },
            { title: 'Remote Control Configuration', url: 'https://www.manageengine.com/products/desktop-central/zendesk-remote-control.html' },
            { title: 'Zendesk API Documentation', url: 'https://developer.zendesk.com/api-reference/' }
        ]
    },
    'application-control-plus-cloud_zoho-flow-cloud': {
        supported: true
    },
    'application-control-plus-onprem_analytics-plus-cloud': {
        supported: false,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'acp-op-ap-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'acp-op-ap-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'acp-op-ap-default-sync-3'
            },
            { 
                name: 'Optional data synchronization: Users, Groups, BIOS, CD ROM DRIVE, Monitor, Disk drives, Logical disk, Motherboard, Keyboard, Mouse, Physical memory',
                id: 'acp-op-ap-optional-sync-1'
            },
            { 
                name: 'Optional data synchronization: POTS modem, Processors, Serial port, Video controller, USB controller, Printers, Drivers, Share details, File details',
                id: 'acp-op-ap-optional-sync-2'
            },
            { 
                name: 'Optional data synchronization: User logon history, Scheduled tasks info, Software audit history, Hardware audit history, Computer and hardware mapping, Computer and group association, Custom groups and associated users',
                id: 'acp-op-ap-optional-sync-3'
            },
            { 
                name: 'Optional data synchronization: Trusted Platform Module',
                id: 'acp-op-ap-optional-sync-4'
            }
        ],
        documentation: [
            { title: 'ACP On-Premise to Analytics Plus Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-analytics-cloud.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-analytics.html' },
            { title: 'Custom Reports Configuration', url: 'https://www.manageengine.com/products/desktop-central/custom-reports.html' },
            { title: 'Analytics Dashboard Guide', url: 'https://www.manageengine.com/products/desktop-central/analytics-dashboard.html' }
        ]
    },
    'application-control-plus-onprem_analytics-plus-onprem': {
        supported: false,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'acp-op-ap-op-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'acp-op-ap-op-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'acp-op-ap-op-default-sync-3'
            },
            { 
                name: 'Optional data synchronization: Users, Groups, BIOS, CD ROM DRIVE, Monitor, Disk drives, Logical disk, Motherboard, Keyboard, Mouse, Physical memory',
                id: 'acp-op-ap-op-optional-sync-1'
            },
            { 
                name: 'Optional data synchronization: POTS modem, Processors, Serial port, Video controller, USB controller, Printers, Drivers, Share details, File details',
                id: 'acp-op-ap-op-optional-sync-2'
            },
            { 
                name: 'Optional data synchronization: User logon history, Scheduled tasks info, Software audit history, Hardware audit history, Computer and hardware mapping, Computer and group association, Custom groups and associated users',
                id: 'acp-op-ap-op-optional-sync-3'
            },
            { 
                name: 'Optional data synchronization: Trusted Platform Module',
                id: 'acp-op-ap-op-optional-sync-4'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-analytics-onprem-integration.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-analytics.html' },
            { title: 'Custom Reports Configuration', url: 'https://www.manageengine.com/products/desktop-central/custom-reports.html' },
            { title: 'Analytics Dashboard Guide', url: 'https://www.manageengine.com/products/desktop-central/analytics-dashboard.html' }
        ]
    },
    
    // Application Control Plus + ServiceNow (Basic) Integrations,
    'application-control-plus-onprem_asset-explorer-cloud': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset sync from ACP to AE',
                id: 'acp-op-ae-inventory-sync'
            },
            { 
                name: 'Auto-assign users',
                id: 'acp-op-ae-auto-assign'
            },
            { 
                name: 'Action to be performed on AE asset when the asset is removed from SOM in Application Control Plus (Beta)',
                id: 'acp-op-ae-asset-removal-beta'
            },
            { 
                name: 'Action to be performed on AE software, when the commercial software is removed from EC',
                id: 'acp-op-ae-software-removal'
            },
            { 
                name: 'Inventory alerts are created as AE tickets',
                id: 'acp-op-ae-inventory-alerts'
            },
            { 
                name: 'Trayicon requests are created as AE tickets',
                id: 'acp-op-ae-trayicon'
            }
        ],
        documentation: [
            { title: 'ACP On-Premise to AE Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-ae-cloud.html' },
            { title: 'Auto-assign Configuration', url: 'https://www.manageengine.com/products/desktop-central/auto-assign-users.html' },
            { title: 'Alert Ticketing Setup', url: 'https://www.manageengine.com/products/desktop-central/alert-ticketing.html' }
        ]
    },
    'application-control-plus-onprem_asset-explorer-onprem': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset data sync',
                id: 'acp-op-ae-op-inventory-sync'
            },
            { 
                name: 'Auto-assign users',
                id: 'acp-op-ae-op-auto-assign'
            },
            { 
                name: 'Action to be performed on AE asset when the asset is removed from SOM in Application Control Plus',
                id: 'acp-op-ae-op-asset-removal'
            },
            { 
                name: 'User-defined templates can be deployed from AE tickets',
                id: 'acp-op-ae-op-deploy-templates'
            },
            { 
                name: 'User-defined software packages can be deployed from AE tickets',
                id: 'acp-op-ae-op-deploy-packages'
            },
            { 
                name: 'SSP requests are created as AE tickets and software will be automatically installed upon approval',
                id: 'acp-op-ae-op-ssp-auto-install'
            },
            { 
                name: 'Request for prohibited software are created as AE tickets',
                id: 'acp-op-ae-op-prohibited-software'
            },
            { 
                name: 'Inventory alerts are created as AE tickets',
                id: 'acp-op-ae-op-inventory-alerts'
            },
            { 
                name: 'Trayicon requests are created as AE tickets',
                id: 'acp-op-ae-op-trayicon'
            },
            { 
                name: 'Remote control assets from AE',
                id: 'acp-op-ae-op-remote-control'
            },
            { 
                name: 'Perform tools action from AE',
                id: 'acp-op-ae-op-tools-action'
            },
            { 
                name: 'Load Application Control Plus as iFrame within AE',
                id: 'acp-op-ae-op-iframe'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-ae-onprem-integration.html' },
            { title: 'Template Deployment Setup', url: 'https://www.manageengine.com/products/desktop-central/template-deployment.html' },
            { title: 'SSP Auto-Install Configuration', url: 'https://www.manageengine.com/products/desktop-central/ssp-auto-install.html' },
            { title: 'Prohibited Software Management', url: 'https://www.manageengine.com/products/desktop-central/prohibited-software.html' }
        ]
    },
    
    // Application Control Plus + Event Log Analyzer / Log 360 Integrations,
    'application-control-plus-onprem_connectwise-cloud': {
        supported: true
    },
    'application-control-plus-onprem_crowdstrike-cloud': {
        supported: false
    },
    'application-control-plus-onprem_freshdesk-cloud': {
        supported: true
    },
    'application-control-plus-onprem_freshservice-cloud': {
        supported: true,
        features: [
            { 
                name: 'Deploy software packages from FreshService tickets',
                id: 'acp-op-freshservice-deploy-software'
            },
            { 
                name: 'Remote control assets from FreshService tickets',
                id: 'acp-op-freshservice-remote-control'
            },
            { 
                name: 'System manager tools of a machine can be remotely accessed from FreshService tickets',
                id: 'acp-op-freshservice-system-tools'
            },
            { 
                name: 'Remote power options such as lock, hibernate, shutdown, Wake on LAN from FreshService tickets',
                id: 'acp-op-freshservice-power-options'
            }
        ],
        documentation: [
            { title: 'ACP On-Premise to Freshservice Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-freshservice-cloud.html' },
            { title: 'Software Deployment from Tickets', url: 'https://www.manageengine.com/products/desktop-central/freshservice-software-deploy.html' },
            { title: 'Remote Control Configuration', url: 'https://www.manageengine.com/products/desktop-central/freshservice-remote-control.html' },
            { title: 'Freshservice API Documentation', url: 'https://api.freshservice.com/' }
        ]
    },
    
    // Application Control Plus + PowerBI Integrations,
    'application-control-plus-onprem_halopsa-cloud': {
        supported: true
    },
    'application-control-plus-onprem_jira-cloud': {
        supported: true,
        features: [
            { 
                name: 'Load iFrame from Jira',
                id: 'acp-op-jira-iframe'
            },
            { 
                name: 'Remote control asset from Jira',
                id: 'acp-op-jira-remote-control'
            },
            { 
                name: 'Asset data are pulled into Jira from EC',
                id: 'acp-op-jira-asset-data'
            },
            { 
                name: 'Perform tools action from Jira',
                id: 'acp-op-jira-tools-action'
            }
        ],
        documentation: [
            { title: 'ACP On-Premise to Jira Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-jira-cloud.html' },
            { title: 'iFrame Configuration', url: 'https://www.manageengine.com/products/desktop-central/jira-iframe-setup.html' },
            { title: 'Remote Control from Jira', url: 'https://www.manageengine.com/products/desktop-central/jira-remote-control.html' },
            { title: 'Jira API Documentation', url: 'https://developer.atlassian.com/cloud/jira/' }
        ]
    },
    'application-control-plus-onprem_jira-onprem': {
        supported: false,
        features: [
            { 
                name: 'Load iFrame from Jira',
                id: 'acp-op-jira-op-iframe'
            },
            { 
                name: 'Remote control asset from Jira',
                id: 'acp-op-jira-op-remote-control'
            },
            { 
                name: 'Asset data are pulled into Jira from EC',
                id: 'acp-op-jira-op-asset-data'
            },
            { 
                name: 'Perform tools action from Jira',
                id: 'acp-op-jira-op-tools-action'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-jira-onprem-integration.html' },
            { title: 'iFrame Configuration', url: 'https://www.manageengine.com/products/desktop-central/jira-iframe-setup.html' },
            { title: 'Remote Control from Jira', url: 'https://www.manageengine.com/products/desktop-central/jira-remote-control.html' },
            { title: 'Jira Server Documentation', url: 'https://confluence.atlassian.com/jiraserver/' }
        ]
    },
    
    // Application Control Plus + Zendesk Integrations,
    'application-control-plus-onprem_log360-onprem': {
        supported: true,
        features: [
            { 
                name: 'Patch data are pulled into ELA from ACP - Approve and install patches directly through incident workflows',
                id: 'acp-op-ela-op-patch-data'
            },
            { 
                name: 'Vulnerability and system misconfiguration data are pulled into ELA from ACP - Identify devices with vulnerabilities or misconfigurations using custom correlation rules and alerts',
                id: 'acp-op-ela-op-vulnerability-data'
            },
            { 
                name: 'Comparators can be created in ELA and custom correlation rules and custom alert profiles can be created for those comparators',
                id: 'acp-op-ela-op-comparators'
            },
            { 
                name: 'Audit logs in Action log viewer will be posted from ACP to ELA',
                id: 'acp-op-ela-op-audit-logs'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-ela-onprem-integration.html' },
            { title: 'Audit Log Configuration', url: 'https://www.manageengine.com/products/desktop-central/audit-logs-ela.html' },
            { title: 'Patch Workflow Configuration', url: 'https://www.manageengine.com/products/desktop-central/patch-workflow-ela.html' },
            { title: 'Custom Correlation Rules', url: 'https://www.manageengine.com/products/desktop-central/correlation-rules.html' }
        ]
    },
    
    // Application Control Plus + Analytics Plus Integrations,
    'application-control-plus-onprem_pam360-cloud': {
        supported: true
    },
    'application-control-plus-onprem_pam360-onprem': {
        supported: true
    },
    'application-control-plus-onprem_powerbi-cloud': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'acp-op-powerbi-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'acp-op-powerbi-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'acp-op-powerbi-default-sync-3'
            }
        ],
        documentation: [
            { title: 'ACP On-Premise to PowerBI Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-powerbi-cloud.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-powerbi.html' },
            { title: 'PowerBI Dashboard Configuration', url: 'https://www.manageengine.com/products/desktop-central/powerbi-dashboard.html' },
            { title: 'PowerBI Documentation', url: 'https://docs.microsoft.com/en-us/power-bi/' }
        ]
    },
    'application-control-plus-onprem_powerbi-onprem': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'acp-op-powerbi-op-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'acp-op-powerbi-op-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'acp-op-powerbi-op-default-sync-3'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-powerbi-onprem-integration.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-powerbi.html' },
            { title: 'PowerBI Report Server Setup', url: 'https://www.manageengine.com/products/desktop-central/powerbi-report-server.html' },
            { title: 'PowerBI Documentation', url: 'https://docs.microsoft.com/en-us/power-bi/' }
        ]
    },
    
    // Application Control Plus + IBM QRadar Integrations,
    'application-control-plus-onprem_qualys-cloud': {
        supported: false
    },
    'application-control-plus-onprem_rapid7-insightvm-cloud': {
        supported: false
    },
    'application-control-plus-onprem_rapid7-insightvm-onprem': {
        supported: false
    },
    'application-control-plus-onprem_servicedesk-plus-cloud': {
        supported: false,
        features: [
            { 
                name: 'Inventory asset sync from ACP to SDP',
                id: 'acp-op-sdp-inventory-sync'
            },
            { 
                name: 'Auto-assign users',
                id: 'acp-op-sdp-auto-assign'
            },
            { 
                name: 'Action to be performed on SDP asset when the asset is removed from SOM in Application Control Plus (Beta)',
                id: 'acp-op-sdp-asset-removal-beta'
            },
            { 
                name: 'Action to be performed on SDP software, when the commercial software is removed from EC',
                id: 'acp-op-sdp-software-removal'
            },
            { 
                name: 'Inventory alerts are created as SDP tickets',
                id: 'acp-op-sdp-inventory-alerts'
            },
            { 
                name: 'Trayicon requests are created as SDP tickets',
                id: 'acp-op-sdp-trayicon'
            }
        ],
        documentation: [
            { title: 'ACP On-Premise to SDP Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-sdp-cloud.html' },
            { title: 'Auto-assign Configuration', url: 'https://www.manageengine.com/products/desktop-central/auto-assign-users.html' },
            { title: 'Alert Ticketing Setup', url: 'https://www.manageengine.com/products/desktop-central/alert-ticketing.html' }
        ]
    },
    'application-control-plus-onprem_servicedesk-plus-msp-cloud': {
        supported: false
    },
    'application-control-plus-onprem_servicedesk-plus-msp-onprem': {
        supported: false
    },
    'application-control-plus-onprem_servicedesk-plus-onprem': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset data sync',
                id: 'acp-op-sdp-op-inventory-sync'
            },
            // { 
            //     name: 'Auto-assign users',
            //     id: 'acp-op-sdp-op-auto-assign'
            // },
            // { 
            //     name: 'Action to be performed on SDP asset when the asset is removed from SOM in Application Control Plus',
            //     id: 'acp-op-sdp-op-asset-removal'
            // },
            // { 
            //     name: 'User-defined templates can be deployed from SDP tickets',
            //     id: 'acp-op-sdp-op-deploy-templates'
            // },
            // { 
            //     name: 'User-defined software packages can be deployed from SDP tickets',
            //     id: 'acp-op-sdp-op-deploy-packages'
            // },
            // { 
            //     name: 'SSP requests are created as SDP tickets and software will be automatically installed upon approval',
            //     id: 'acp-op-sdp-op-ssp-auto-install'
            // },
            // { 
            //     name: 'Request for prohibited software are created as SDP tickets',
            //     id: 'acp-op-sdp-op-prohibited-software'
            // },
            // { 
            //     name: 'Inventory alerts are created as SDP tickets',
            //     id: 'acp-op-sdp-op-inventory-alerts'
            // },
            // { 
            //     name: 'Trayicon requests are created as SDP tickets',
            //     id: 'acp-op-sdp-op-trayicon'
            // },
            // { 
            //     name: 'Remote control assets from SDP',
            //     id: 'acp-op-sdp-op-remote-control'
            // },
            // { 
            //     name: 'Perform tools action from SDP',
            //     id: 'acp-op-sdp-op-tools-action'
            // },
            { 
                name: 'Load Application Control Plus as iFrame within SDP',
                id: 'acp-op-sdp-op-iframe'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-sdp-onprem-integration.html' },
            { title: 'Template Deployment Setup', url: 'https://www.manageengine.com/products/desktop-central/template-deployment.html' },
            { title: 'SSP Auto-Install Configuration', url: 'https://www.manageengine.com/products/desktop-central/ssp-auto-install.html' },
            { title: 'Prohibited Software Management', url: 'https://www.manageengine.com/products/desktop-central/prohibited-software.html' }
        ]
    },
    
    // Application Control Plus + Asset Explorer Integrations,
    'application-control-plus-onprem_servicenow-cloud': {
        supported: true,
        features: [
            { 
                name: 'Asset data post from ACP to ServiceNow',
                id: 'acp-op-snow-basic-asset-post'
            },
            { 
                name: 'Choose whether to remove an asset from ServiceNow if it is removed from Application Control Plus SoM',
                id: 'acp-op-snow-basic-asset-removal'
            },
            { 
                name: 'Assign last logged as the asset\'s owner in ServiceNow',
                id: 'acp-op-snow-basic-owner-assign'
            }
        ],
        documentation: [
            { title: 'ACP On-Premise to ServiceNow Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-servicenow-cloud.html' },
            { title: 'Asset Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/servicenow-asset-sync.html' },
            { title: 'CMDB Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/servicenow-cmdb.html' },
            { title: 'ServiceNow API Guide', url: 'https://docs.servicenow.com/' }
        ]
    },
    'application-control-plus-onprem_servicenow-onprem': {
        supported: false,
        features: [
            { 
                name: 'Asset data post from ACP to ServiceNow',
                id: 'acp-op-snow-basic-op-asset-post'
            },
            { 
                name: 'Choose whether to remove an asset from ServiceNow if it is removed from Application Control Plus SoM',
                id: 'acp-op-snow-basic-op-asset-removal'
            },
            { 
                name: 'Assign last logged as the asset\'s owner in ServiceNow',
                id: 'acp-op-snow-basic-op-owner-assign'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-servicenow-onprem-integration.html' },
            { title: 'Asset Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/servicenow-asset-sync.html' },
            { title: 'CMDB Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/servicenow-cmdb.html' },
            { title: 'ServiceNow API Guide', url: 'https://docs.servicenow.com/' }
        ]
    },
    
    // Application Control Plus + ServiceNow SGC Integrations,
    'application-control-plus-onprem_splunk-cloud': {
        supported: true,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from ACP to Splunk',
                id: 'acp-op-splunk-audit-logs'
            },
            { 
                name: 'Vulnerability data is synced from ACP to Splunk',
                id: 'acp-op-splunk-vuln-data'
            }
        ],
        documentation: [
            { title: 'ACP On-Premise to Splunk Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-splunk-cloud.html' },
            { title: 'Audit Log Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/splunk-audit-sync.html' },
            { title: 'Vulnerability Data Export Setup', url: 'https://www.manageengine.com/products/desktop-central/splunk-vulnerability-sync.html' },
            { title: 'Splunk Documentation', url: 'https://docs.splunk.com/' }
        ]
    },
    'application-control-plus-onprem_splunk-onprem': {
        supported: true,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from ACP to Splunk',
                id: 'acp-op-splunk-op-audit-logs'
            },
            { 
                name: 'Vulnerability data is synced from ACP to Splunk',
                id: 'acp-op-splunk-op-vuln-data'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-splunk-onprem-integration.html' },
            { title: 'Syslog Configuration for Splunk', url: 'https://www.manageengine.com/products/desktop-central/splunk-syslog-setup.html' },
            { title: 'Vulnerability Data Export Setup', url: 'https://www.manageengine.com/products/desktop-central/splunk-vulnerability-sync.html' },
            { title: 'Splunk Enterprise Documentation', url: 'https://docs.splunk.com/Documentation/Splunk' }
        ]
    },
    
    // Application Control Plus + Syslog / SIEM Integrations (On-Prem only),
    'application-control-plus-onprem_syslog-siem-cloud': {
        supported: false,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from ACP to Syslog/SIEM',
                id: 'acp-op-syslog-cloud-audit-logs'
            }
        ],
        documentation: [
            { title: 'ACP-Syslog Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/syslog-integration.html' },
            { title: 'Audit Log Forwarding Setup', url: 'https://www.manageengine.com/products/desktop-central/audit-log-forwarding.html' },
            { title: 'Syslog Configuration', url: 'https://www.manageengine.com/products/desktop-central/syslog-setup.html' },
            { title: 'SIEM Integration Best Practices', url: 'https://www.manageengine.com/products/desktop-central/siem-best-practices.html' }
        ]
    },
    'application-control-plus-onprem_syslog-siem-onprem': {
        supported: true,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from ACP to Syslog/SIEM',
                id: 'acp-op-syslog-op-audit-logs'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Syslog Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-syslog-onprem-integration.html' },
            { title: 'Audit Log Forwarding Setup', url: 'https://www.manageengine.com/products/desktop-central/audit-log-forwarding.html' },
            { title: 'Syslog Configuration', url: 'https://www.manageengine.com/products/desktop-central/syslog-setup.html' },
            { title: 'SIEM Integration Best Practices', url: 'https://www.manageengine.com/products/desktop-central/siem-best-practices.html' }
        ]
    },

    // ════════════════════════════════════════════════════════════
    // Device Control Plus (DCP) Integrations
    // ════════════════════════════════════════════════════════════


    // Device Control Plus + ServiceDesk Plus Integrations,
    'application-control-plus-onprem_tenable-sc-onprem': {
        supported: false
    },
    'application-control-plus-onprem_tenable-vm-cloud': {
        supported: false
    },
    'application-control-plus-onprem_zendesk-cloud': {
        supported: true,
        features: [
            { 
                name: 'Deploy software packages from Zendesk tickets',
                id: 'acp-op-zendesk-deploy-software'
            },
            { 
                name: 'Remote control assets from Zendesk tickets',
                id: 'acp-op-zendesk-remote-control'
            },
            { 
                name: 'System manager tools of a machine can be remotely accessed from Zendesk tickets',
                id: 'acp-op-zendesk-system-tools'
            },
            { 
                name: 'Remote power options such as lock, hibernate, shutdown, Wake on LAN from Zendesk tickets',
                id: 'acp-op-zendesk-power-options'
            }
        ],
        documentation: [
            { title: 'ACP On-Premise to Zendesk Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-zendesk-cloud.html' },
            { title: 'Software Deployment from Tickets', url: 'https://www.manageengine.com/products/desktop-central/zendesk-software-deploy.html' },
            { title: 'Remote Control Configuration', url: 'https://www.manageengine.com/products/desktop-central/zendesk-remote-control.html' },
            { title: 'Zendesk API Documentation', url: 'https://developer.zendesk.com/api-reference/' }
        ]
    },
    
    // Application Control Plus + Freshservice Integrations,
    'application-control-plus-onprem_zoho-flow-cloud': {
        supported: false
    },

    // ── Browser Security Plus Integrations ──────────────────────────────────────
    'browser-security-plus-cloud_analytics-plus-cloud': {
        supported: false,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'bsp-ap-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'bsp-ap-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'bsp-ap-default-sync-3'
            },
            { 
                name: 'Optional data synchronization: Users, Groups, BIOS, CD ROM DRIVE, Monitor, Disk drives, Logical disk, Motherboard, Keyboard, Mouse, Physical memory',
                id: 'bsp-ap-optional-sync-1'
            },
            { 
                name: 'Optional data synchronization: POTS modem, Processors, Serial port, Video controller, USB controller, Printers, Drivers, Share details, File details',
                id: 'bsp-ap-optional-sync-2'
            },
            { 
                name: 'Optional data synchronization: User logon history, Scheduled tasks info, Software audit history, Hardware audit history, Computer and hardware mapping, Computer and group association, Custom groups and associated users',
                id: 'bsp-ap-optional-sync-3'
            },
            { 
                name: 'Optional data synchronization: Trusted Platform Module',
                id: 'bsp-ap-optional-sync-4'
            }
        ],
        documentation: [
            { title: 'BSP-Analytics Plus Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/analytics-plus-integration.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-analytics.html' },
            { title: 'Custom Reports Configuration', url: 'https://www.manageengine.com/products/desktop-central/custom-reports.html' },
            { title: 'Analytics Dashboard Guide', url: 'https://www.manageengine.com/products/desktop-central/analytics-dashboard.html' }
        ]
    },
    'browser-security-plus-cloud_asset-explorer-cloud': {
        supported: false,
        features: [
            { 
                name: 'Inventory asset sync from BSP to AE',
                id: 'bsp-ae-inventory-sync'
            },
            { 
                name: 'Remote control asset from AE tickets',
                id: 'bsp-ae-remote-control'
            },
            { 
                name: 'Deploy software from AE tickets',
                id: 'bsp-ae-deploy-software'
            },
            { 
                name: 'Perform tools action from AE tickets',
                id: 'bsp-ae-tools-action'
            },
            { 
                name: 'Loading iFrame of BSP within AE',
                id: 'bsp-ae-iframe'
            },
            { 
                name: 'Action to be performed on AE asset when the asset is removed from SOM in Browser Security Plus (Beta)',
                id: 'bsp-ae-asset-removal-beta'
            },
            { 
                name: 'Trayicon requests are created as AE tickets (Beta)',
                id: 'bsp-ae-trayicon-beta'
            },
            { 
                name: 'SSP requests are created as AE tickets (Beta)',
                id: 'bsp-ae-ssp-beta'
            }
        ],
        documentation: [
            { title: 'BSP-AE Cloud Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ae-cloud-integration.html' },
            { title: 'Asset Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/asset-sync-setup.html' },
            { title: 'Remote Control Setup', url: 'https://www.manageengine.com/products/desktop-central/remote-control-ae.html' },
            { title: 'iFrame Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/iframe-integration.html' }
        ]
    },
    'browser-security-plus-cloud_asset-explorer-onprem': {
        supported: false,
        betaRelease: true,
        features: [
            { 
                name: 'Inventory asset sync from BSP to AE',
                id: 'bsp-ae-op-inventory-sync'
            }
        ],
        documentation: [
            { title: 'BSP Cloud to AE On-Premise Integration', url: 'https://www.manageengine.com/products/desktop-central/ae-onprem-integration.html' },
            { title: 'Beta Release Notes', url: 'https://www.manageengine.com/products/desktop-central/beta-release-notes.html' },
            { title: 'Hybrid Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/hybrid-setup.html' }
        ]
    },
    'browser-security-plus-cloud_freshservice-cloud': {
        supported: false,
        features: [
            { 
                name: 'Deploy software packages from FreshService tickets',
                id: 'bsp-freshservice-deploy-software'
            },
            { 
                name: 'Remote control assets from FreshService tickets',
                id: 'bsp-freshservice-remote-control'
            },
            { 
                name: 'System manager tools of a machine can be remotely accessed from FreshService tickets',
                id: 'bsp-freshservice-system-tools'
            },
            { 
                name: 'Remote power options such as lock, hibernate, shutdown, Wake on LAN from FreshService tickets',
                id: 'bsp-freshservice-power-options'
            }
        ],
        documentation: [
            { title: 'BSP-Freshservice Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/freshservice-integration.html' },
            { title: 'Software Deployment from Tickets', url: 'https://www.manageengine.com/products/desktop-central/freshservice-software-deploy.html' },
            { title: 'Remote Control Configuration', url: 'https://www.manageengine.com/products/desktop-central/freshservice-remote-control.html' },
            { title: 'Freshservice API Documentation', url: 'https://api.freshservice.com/' }
        ]
    },
    'browser-security-plus-cloud_jira-cloud': {
        supported: false,
        features: [
            { 
                name: 'Load iFrame from Jira',
                id: 'bsp-jira-iframe'
            },
            { 
                name: 'Remote control asset from Jira',
                id: 'bsp-jira-remote-control'
            },
            { 
                name: 'Asset data are pulled into Jira from EC',
                id: 'bsp-jira-asset-data'
            },
            { 
                name: 'Perform tools action from Jira',
                id: 'bsp-jira-tools-action'
            }
        ],
        documentation: [
            { title: 'BSP-Jira Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/jira-integration.html' },
            { title: 'iFrame Configuration', url: 'https://www.manageengine.com/products/desktop-central/jira-iframe-setup.html' },
            { title: 'Remote Control from Jira', url: 'https://www.manageengine.com/products/desktop-central/jira-remote-control.html' },
            { title: 'Jira API Documentation', url: 'https://developer.atlassian.com/cloud/jira/' }
        ]
    },
    'browser-security-plus-cloud_log360-onprem': {
        supported: false,
        features: [
            { 
                name: 'Patch data are pulled into ELA from BSP - Approve and install patches directly through incident workflows',
                id: 'bsp-ela-patch-data'
            },
            { 
                name: 'Vulnerability and system misconfiguration data are pulled into ELA from BSP - Identify devices with vulnerabilities or misconfigurations using custom correlation rules and alerts',
                id: 'bsp-ela-vulnerability-data'
            },
            { 
                name: 'Comparators can be created in ELA and custom correlation rules and custom alert profiles can be created for those comparators',
                id: 'bsp-ela-comparators'
            }
        ],
        documentation: [
            { title: 'BSP-ELA Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ela-integration.html' },
            { title: 'Patch Workflow Configuration', url: 'https://www.manageengine.com/products/desktop-central/patch-workflow-ela.html' },
            { title: 'Custom Correlation Rules', url: 'https://www.manageengine.com/products/desktop-central/correlation-rules.html' },
            { title: 'Alert Profile Setup', url: 'https://www.manageengine.com/products/desktop-central/alert-profiles.html' }
        ]
    },
    'browser-security-plus-cloud_powerbi-cloud': {
        supported: false,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'bsp-powerbi-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'bsp-powerbi-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'bsp-powerbi-default-sync-3'
            }
        ],
        documentation: [
            { title: 'BSP-PowerBI Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/powerbi-integration.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-powerbi.html' },
            { title: 'PowerBI Dashboard Configuration', url: 'https://www.manageengine.com/products/desktop-central/powerbi-dashboard.html' },
            { title: 'PowerBI Documentation', url: 'https://docs.microsoft.com/en-us/power-bi/' }
        ]
    },
    'browser-security-plus-cloud_powerbi-onprem': {
        supported: false,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'bsp-powerbi-op-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'bsp-powerbi-op-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'bsp-powerbi-op-default-sync-3'
            }
        ],
        documentation: [
            { title: 'BSP Cloud to PowerBI On-Premise Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-cloud-powerbi-onprem.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-powerbi.html' },
            { title: 'PowerBI Report Server Setup', url: 'https://www.manageengine.com/products/desktop-central/powerbi-report-server.html' },
            { title: 'PowerBI Documentation', url: 'https://docs.microsoft.com/en-us/power-bi/' }
        ]
    },
    'browser-security-plus-cloud_servicedesk-plus-cloud': {
        supported: false,
        features: [
            { 
                name: 'Inventory asset sync from BSP to SDP',
                id: 'bsp-sdp-inventory-sync'
            },
            { 
                name: 'Remote control asset from SDP tickets',
                id: 'bsp-sdp-remote-control'
            },
            { 
                name: 'Deploy software from SDP tickets',
                id: 'bsp-sdp-deploy-software'
            },
            { 
                name: 'Perform tools action from SDP tickets',
                id: 'bsp-sdp-tools-action'
            },
            { 
                name: 'Loading iFrame of BSP within SDP',
                id: 'bsp-sdp-iframe'
            },
            { 
                name: 'Action to be performed on SDP asset when the asset is removed from SOM in Browser Security Plus (Beta)',
                id: 'bsp-sdp-asset-removal-beta'
            },
            { 
                name: 'Trayicon requests are created as SDP tickets (Beta)',
                id: 'bsp-sdp-trayicon-beta'
            },
            { 
                name: 'SSP requests are created as SDP tickets (Beta)',
                id: 'bsp-sdp-ssp-beta'
            }
        ],
        documentation: [
            { title: 'BSP-SDP Cloud Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/help/configuring_desktop_central/integrating-with-servicedesk-plus-cloud.html' },
            { title: 'Configuring EC extension for SDP Cloud', url: 'https://help.sdpondemand.com/endpoint-central-extension' },
            { title: 'Troubleshooting errors while enabling integration', url: 'https://www.manageengine.com/products/desktop-central/kb/sdp-on-demand.html' },
            { title: 'Troubleshooting asset sync between ECOD-SDPOD', url: 'https://zask.pali.io/zask/EMSTechAsk/questions/8639642606' }
        ]
    },
    'browser-security-plus-cloud_servicedesk-plus-onprem': {
        supported: false,
        betaRelease: true,
        features: [
            { 
                name: 'Inventory asset sync from BSP to SDP',
                id: 'bsp-sdp-op-inventory-sync'
            }
        ],
        documentation: [
            { title: 'BSP Cloud to SDP On-Premise Integration', url: 'https://www.manageengine.com/products/desktop-central/sdp-onprem-integration.html' },
            { title: 'Beta Release Notes', url: 'https://www.manageengine.com/products/desktop-central/beta-release-notes.html' },
            { title: 'Hybrid Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/hybrid-setup.html' }
        ]
    },
    'browser-security-plus-cloud_servicenow-cloud': {
        supported: false,
        features: [
            { 
                name: 'Asset data post from BSP to ServiceNow',
                id: 'bsp-snow-basic-asset-post'
            },
            { 
                name: 'Choose whether to remove an asset from ServiceNow if it is removed from Browser Security Plus SoM',
                id: 'bsp-snow-basic-asset-removal'
            },
            { 
                name: 'Assign last logged as the asset\'s owner in ServiceNow',
                id: 'bsp-snow-basic-owner-assign'
            }
        ],
        documentation: [
            { title: 'BSP-ServiceNow Basic Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/servicenow-integration.html' },
            { title: 'Asset Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/servicenow-asset-sync.html' },
            { title: 'CMDB Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/servicenow-cmdb.html' },
            { title: 'ServiceNow API Guide', url: 'https://docs.servicenow.com/' }
        ]
    },
    'browser-security-plus-cloud_splunk-cloud': {
        supported: false,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from BSP to Splunk',
                id: 'bsp-splunk-audit-logs'
            },
            { 
                name: 'Vulnerability data is synced from BSP to Splunk',
                id: 'bsp-splunk-vuln-data'
            }
        ],
        documentation: [
            { title: 'BSP-Splunk Cloud Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/splunk-cloud-integration.html' },
            { title: 'Audit Log Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/splunk-audit-sync.html' },
            { title: 'Vulnerability Data Export Setup', url: 'https://www.manageengine.com/products/desktop-central/splunk-vulnerability-sync.html' },
            { title: 'Splunk Documentation', url: 'https://docs.splunk.com/' }
        ]
    },
    'browser-security-plus-cloud_splunk-onprem': {
        supported: false,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from BSP to Splunk',
                id: 'bsp-splunk-op-audit-logs'
            },
            { 
                name: 'Vulnerability data is synced from BSP to Splunk',
                id: 'bsp-splunk-op-vuln-data'
            }
        ],
        documentation: [
            { title: 'BSP Cloud to Splunk On-Premise Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-cloud-splunk-onprem.html' },
            { title: 'Audit Log Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/splunk-audit-sync.html' },
            { title: 'Vulnerability Data Export Setup', url: 'https://www.manageengine.com/products/desktop-central/splunk-vulnerability-sync.html' },
            { title: 'Splunk Enterprise Documentation', url: 'https://docs.splunk.com/Documentation/Splunk' }
        ]
    },
    'browser-security-plus-cloud_zendesk-cloud': {
        supported: false,
        features: [
            { 
                name: 'Deploy software packages from Zendesk tickets',
                id: 'bsp-zendesk-deploy-software'
            },
            { 
                name: 'Remote control assets from Zendesk tickets',
                id: 'bsp-zendesk-remote-control'
            },
            { 
                name: 'System manager tools of a machine can be remotely accessed from Zendesk tickets',
                id: 'bsp-zendesk-system-tools'
            },
            { 
                name: 'Remote power options such as lock, hibernate, shutdown, Wake on LAN from Zendesk tickets',
                id: 'bsp-zendesk-power-options'
            }
        ],
        documentation: [
            { title: 'BSP-Zendesk Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/zendesk-integration.html' },
            { title: 'Software Deployment from Tickets', url: 'https://www.manageengine.com/products/desktop-central/zendesk-software-deploy.html' },
            { title: 'Remote Control Configuration', url: 'https://www.manageengine.com/products/desktop-central/zendesk-remote-control.html' },
            { title: 'Zendesk API Documentation', url: 'https://developer.zendesk.com/api-reference/' }
        ]
    },
    'browser-security-plus-onprem_analytics-plus-cloud': {
        supported: false,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'bsp-op-ap-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'bsp-op-ap-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'bsp-op-ap-default-sync-3'
            },
            { 
                name: 'Optional data synchronization: Users, Groups, BIOS, CD ROM DRIVE, Monitor, Disk drives, Logical disk, Motherboard, Keyboard, Mouse, Physical memory',
                id: 'bsp-op-ap-optional-sync-1'
            },
            { 
                name: 'Optional data synchronization: POTS modem, Processors, Serial port, Video controller, USB controller, Printers, Drivers, Share details, File details',
                id: 'bsp-op-ap-optional-sync-2'
            },
            { 
                name: 'Optional data synchronization: User logon history, Scheduled tasks info, Software audit history, Hardware audit history, Computer and hardware mapping, Computer and group association, Custom groups and associated users',
                id: 'bsp-op-ap-optional-sync-3'
            },
            { 
                name: 'Optional data synchronization: Trusted Platform Module',
                id: 'bsp-op-ap-optional-sync-4'
            }
        ],
        documentation: [
            { title: 'BSP On-Premise to Analytics Plus Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-analytics-cloud.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-analytics.html' },
            { title: 'Custom Reports Configuration', url: 'https://www.manageengine.com/products/desktop-central/custom-reports.html' },
            { title: 'Analytics Dashboard Guide', url: 'https://www.manageengine.com/products/desktop-central/analytics-dashboard.html' }
        ]
    },
    'browser-security-plus-onprem_analytics-plus-onprem': {
        supported: false,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'bsp-op-ap-op-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'bsp-op-ap-op-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'bsp-op-ap-op-default-sync-3'
            },
            { 
                name: 'Optional data synchronization: Users, Groups, BIOS, CD ROM DRIVE, Monitor, Disk drives, Logical disk, Motherboard, Keyboard, Mouse, Physical memory',
                id: 'bsp-op-ap-op-optional-sync-1'
            },
            { 
                name: 'Optional data synchronization: POTS modem, Processors, Serial port, Video controller, USB controller, Printers, Drivers, Share details, File details',
                id: 'bsp-op-ap-op-optional-sync-2'
            },
            { 
                name: 'Optional data synchronization: User logon history, Scheduled tasks info, Software audit history, Hardware audit history, Computer and hardware mapping, Computer and group association, Custom groups and associated users',
                id: 'bsp-op-ap-op-optional-sync-3'
            },
            { 
                name: 'Optional data synchronization: Trusted Platform Module',
                id: 'bsp-op-ap-op-optional-sync-4'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-analytics-onprem-integration.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-analytics.html' },
            { title: 'Custom Reports Configuration', url: 'https://www.manageengine.com/products/desktop-central/custom-reports.html' },
            { title: 'Analytics Dashboard Guide', url: 'https://www.manageengine.com/products/desktop-central/analytics-dashboard.html' }
        ]
    },
    
    // Browser Security Plus + ServiceNow (Basic) Integrations,
    'browser-security-plus-onprem_asset-explorer-cloud': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset sync from BSP to AE',
                id: 'bsp-op-ae-inventory-sync'
            },
            { 
                name: 'Auto-assign users',
                id: 'bsp-op-ae-auto-assign'
            },
            { 
                name: 'Action to be performed on AE asset when the asset is removed from SOM in Browser Security Plus (Beta)',
                id: 'bsp-op-ae-asset-removal-beta'
            },
            { 
                name: 'Action to be performed on AE software, when the commercial software is removed from EC',
                id: 'bsp-op-ae-software-removal'
            },
            { 
                name: 'Inventory alerts are created as AE tickets',
                id: 'bsp-op-ae-inventory-alerts'
            },
            { 
                name: 'Trayicon requests are created as AE tickets',
                id: 'bsp-op-ae-trayicon'
            }
        ],
        documentation: [
            { title: 'BSP On-Premise to AE Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-ae-cloud.html' },
            { title: 'Auto-assign Configuration', url: 'https://www.manageengine.com/products/desktop-central/auto-assign-users.html' },
            { title: 'Alert Ticketing Setup', url: 'https://www.manageengine.com/products/desktop-central/alert-ticketing.html' }
        ]
    },
    'browser-security-plus-onprem_asset-explorer-onprem': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset data sync',
                id: 'bsp-op-ae-op-inventory-sync'
            },
            { 
                name: 'Auto-assign users',
                id: 'bsp-op-ae-op-auto-assign'
            },
            { 
                name: 'Action to be performed on AE asset when the asset is removed from SOM in Browser Security Plus',
                id: 'bsp-op-ae-op-asset-removal'
            },
            { 
                name: 'User-defined templates can be deployed from AE tickets',
                id: 'bsp-op-ae-op-deploy-templates'
            },
            { 
                name: 'User-defined software packages can be deployed from AE tickets',
                id: 'bsp-op-ae-op-deploy-packages'
            },
            { 
                name: 'SSP requests are created as AE tickets and software will be automatically installed upon approval',
                id: 'bsp-op-ae-op-ssp-auto-install'
            },
            { 
                name: 'Request for prohibited software are created as AE tickets',
                id: 'bsp-op-ae-op-prohibited-software'
            },
            { 
                name: 'Inventory alerts are created as AE tickets',
                id: 'bsp-op-ae-op-inventory-alerts'
            },
            { 
                name: 'Trayicon requests are created as AE tickets',
                id: 'bsp-op-ae-op-trayicon'
            },
            { 
                name: 'Remote control assets from AE',
                id: 'bsp-op-ae-op-remote-control'
            },
            { 
                name: 'Perform tools action from AE',
                id: 'bsp-op-ae-op-tools-action'
            },
            { 
                name: 'Load Browser Security Plus as iFrame within AE',
                id: 'bsp-op-ae-op-iframe'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-ae-onprem-integration.html' },
            { title: 'Template Deployment Setup', url: 'https://www.manageengine.com/products/desktop-central/template-deployment.html' },
            { title: 'SSP Auto-Install Configuration', url: 'https://www.manageengine.com/products/desktop-central/ssp-auto-install.html' },
            { title: 'Prohibited Software Management', url: 'https://www.manageengine.com/products/desktop-central/prohibited-software.html' }
        ]
    },
    
    // Browser Security Plus + Event Log Analyzer / Log 360 Integrations,
    'browser-security-plus-onprem_connectwise-cloud': {
        supported: false
    },
    'browser-security-plus-onprem_crowdstrike-cloud': {
        supported: false
    },
    'browser-security-plus-onprem_freshdesk-cloud': {
        supported: true
    },
    'browser-security-plus-onprem_freshservice-cloud': {
        supported: true,
        features: [
            { 
                name: 'Deploy software packages from FreshService tickets',
                id: 'bsp-op-freshservice-deploy-software'
            },
            { 
                name: 'Remote control assets from FreshService tickets',
                id: 'bsp-op-freshservice-remote-control'
            },
            { 
                name: 'System manager tools of a machine can be remotely accessed from FreshService tickets',
                id: 'bsp-op-freshservice-system-tools'
            },
            { 
                name: 'Remote power options such as lock, hibernate, shutdown, Wake on LAN from FreshService tickets',
                id: 'bsp-op-freshservice-power-options'
            }
        ],
        documentation: [
            { title: 'BSP On-Premise to Freshservice Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-freshservice-cloud.html' },
            { title: 'Software Deployment from Tickets', url: 'https://www.manageengine.com/products/desktop-central/freshservice-software-deploy.html' },
            { title: 'Remote Control Configuration', url: 'https://www.manageengine.com/products/desktop-central/freshservice-remote-control.html' },
            { title: 'Freshservice API Documentation', url: 'https://api.freshservice.com/' }
        ]
    },
    
    // Browser Security Plus + PowerBI Integrations,
    'browser-security-plus-onprem_halopsa-cloud': {
        supported: false
    },
    'browser-security-plus-onprem_jira-cloud': {
        supported: true,
        features: [
            { 
                name: 'Load iFrame from Jira',
                id: 'bsp-op-jira-iframe'
            },
            { 
                name: 'Remote control asset from Jira',
                id: 'bsp-op-jira-remote-control'
            },
            { 
                name: 'Asset data are pulled into Jira from EC',
                id: 'bsp-op-jira-asset-data'
            },
            { 
                name: 'Perform tools action from Jira',
                id: 'bsp-op-jira-tools-action'
            }
        ],
        documentation: [
            { title: 'BSP On-Premise to Jira Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-jira-cloud.html' },
            { title: 'iFrame Configuration', url: 'https://www.manageengine.com/products/desktop-central/jira-iframe-setup.html' },
            { title: 'Remote Control from Jira', url: 'https://www.manageengine.com/products/desktop-central/jira-remote-control.html' },
            { title: 'Jira API Documentation', url: 'https://developer.atlassian.com/cloud/jira/' }
        ]
    },
    'browser-security-plus-onprem_jira-onprem': {
        supported: false,
        features: [
            { 
                name: 'Load iFrame from Jira',
                id: 'bsp-op-jira-op-iframe'
            },
            { 
                name: 'Remote control asset from Jira',
                id: 'bsp-op-jira-op-remote-control'
            },
            { 
                name: 'Asset data are pulled into Jira from EC',
                id: 'bsp-op-jira-op-asset-data'
            },
            { 
                name: 'Perform tools action from Jira',
                id: 'bsp-op-jira-op-tools-action'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-jira-onprem-integration.html' },
            { title: 'iFrame Configuration', url: 'https://www.manageengine.com/products/desktop-central/jira-iframe-setup.html' },
            { title: 'Remote Control from Jira', url: 'https://www.manageengine.com/products/desktop-central/jira-remote-control.html' },
            { title: 'Jira Server Documentation', url: 'https://confluence.atlassian.com/jiraserver/' }
        ]
    },
    
    // Browser Security Plus + Zendesk Integrations,
    'browser-security-plus-onprem_log360-onprem': {
        supported: true,
        features: [
            { 
                name: 'Patch data are pulled into ELA from BSP - Approve and install patches directly through incident workflows',
                id: 'bsp-op-ela-op-patch-data'
            },
            { 
                name: 'Vulnerability and system misconfiguration data are pulled into ELA from BSP - Identify devices with vulnerabilities or misconfigurations using custom correlation rules and alerts',
                id: 'bsp-op-ela-op-vulnerability-data'
            },
            { 
                name: 'Comparators can be created in ELA and custom correlation rules and custom alert profiles can be created for those comparators',
                id: 'bsp-op-ela-op-comparators'
            },
            { 
                name: 'Audit logs in Action log viewer will be posted from BSP to ELA',
                id: 'bsp-op-ela-op-audit-logs'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-ela-onprem-integration.html' },
            { title: 'Audit Log Configuration', url: 'https://www.manageengine.com/products/desktop-central/audit-logs-ela.html' },
            { title: 'Patch Workflow Configuration', url: 'https://www.manageengine.com/products/desktop-central/patch-workflow-ela.html' },
            { title: 'Custom Correlation Rules', url: 'https://www.manageengine.com/products/desktop-central/correlation-rules.html' }
        ]
    },
    
    // Browser Security Plus + Analytics Plus Integrations,
    'browser-security-plus-onprem_pam360-cloud': {
        supported: false
    },
    'browser-security-plus-onprem_pam360-onprem': {
        supported: false
    },
    'browser-security-plus-onprem_powerbi-cloud': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'bsp-op-powerbi-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'bsp-op-powerbi-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'bsp-op-powerbi-default-sync-3'
            }
        ],
        documentation: [
            { title: 'BSP On-Premise to PowerBI Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-powerbi-cloud.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-powerbi.html' },
            { title: 'PowerBI Dashboard Configuration', url: 'https://www.manageengine.com/products/desktop-central/powerbi-dashboard.html' },
            { title: 'PowerBI Documentation', url: 'https://docs.microsoft.com/en-us/power-bi/' }
        ]
    },
    'browser-security-plus-onprem_powerbi-onprem': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'bsp-op-powerbi-op-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'bsp-op-powerbi-op-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'bsp-op-powerbi-op-default-sync-3'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-powerbi-onprem-integration.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-powerbi.html' },
            { title: 'PowerBI Report Server Setup', url: 'https://www.manageengine.com/products/desktop-central/powerbi-report-server.html' },
            { title: 'PowerBI Documentation', url: 'https://docs.microsoft.com/en-us/power-bi/' }
        ]
    },
    
    // Browser Security Plus + IBM QRadar Integrations,
    'browser-security-plus-onprem_qualys-cloud': {
        supported: false
    },
    'browser-security-plus-onprem_rapid7-insightvm-cloud': {
        supported: false
    },
    'browser-security-plus-onprem_rapid7-insightvm-onprem': {
        supported: false
    },
    'browser-security-plus-onprem_servicedesk-plus-cloud': {
        supported: false,
        features: [
            { 
                name: 'Inventory asset sync from BSP to SDP',
                id: 'bsp-op-sdp-inventory-sync'
            },
            { 
                name: 'Auto-assign users',
                id: 'bsp-op-sdp-auto-assign'
            },
            { 
                name: 'Action to be performed on SDP asset when the asset is removed from SOM in Browser Security Plus (Beta)',
                id: 'bsp-op-sdp-asset-removal-beta'
            },
            { 
                name: 'Action to be performed on SDP software, when the commercial software is removed from EC',
                id: 'bsp-op-sdp-software-removal'
            },
            { 
                name: 'Inventory alerts are created as SDP tickets',
                id: 'bsp-op-sdp-inventory-alerts'
            },
            { 
                name: 'Trayicon requests are created as SDP tickets',
                id: 'bsp-op-sdp-trayicon'
            }
        ],
        documentation: [
            { title: 'BSP On-Premise to SDP Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-sdp-cloud.html' },
            { title: 'Auto-assign Configuration', url: 'https://www.manageengine.com/products/desktop-central/auto-assign-users.html' },
            { title: 'Alert Ticketing Setup', url: 'https://www.manageengine.com/products/desktop-central/alert-ticketing.html' }
        ]
    },
    'browser-security-plus-onprem_servicedesk-plus-msp-cloud': {
        supported: false
    },
    'browser-security-plus-onprem_servicedesk-plus-msp-onprem': {
        supported: false
    },
    'browser-security-plus-onprem_servicedesk-plus-onprem': {
        supported: false,
        features: [
            { 
                name: 'Inventory asset data sync',
                id: 'bsp-op-sdp-op-inventory-sync'
            },
            { 
                name: 'Auto-assign users',
                id: 'bsp-op-sdp-op-auto-assign'
            },
            { 
                name: 'Action to be performed on SDP asset when the asset is removed from SOM in Browser Security Plus',
                id: 'bsp-op-sdp-op-asset-removal'
            },
            { 
                name: 'User-defined templates can be deployed from SDP tickets',
                id: 'bsp-op-sdp-op-deploy-templates'
            },
            { 
                name: 'User-defined software packages can be deployed from SDP tickets',
                id: 'bsp-op-sdp-op-deploy-packages'
            },
            { 
                name: 'SSP requests are created as SDP tickets and software will be automatically installed upon approval',
                id: 'bsp-op-sdp-op-ssp-auto-install'
            },
            { 
                name: 'Request for prohibited software are created as SDP tickets',
                id: 'bsp-op-sdp-op-prohibited-software'
            },
            { 
                name: 'Inventory alerts are created as SDP tickets',
                id: 'bsp-op-sdp-op-inventory-alerts'
            },
            { 
                name: 'Trayicon requests are created as SDP tickets',
                id: 'bsp-op-sdp-op-trayicon'
            },
            { 
                name: 'Remote control assets from SDP',
                id: 'bsp-op-sdp-op-remote-control'
            },
            { 
                name: 'Perform tools action from SDP',
                id: 'bsp-op-sdp-op-tools-action'
            },
            { 
                name: 'Load Browser Security Plus as iFrame within SDP',
                id: 'bsp-op-sdp-op-iframe'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-sdp-onprem-integration.html' },
            { title: 'Template Deployment Setup', url: 'https://www.manageengine.com/products/desktop-central/template-deployment.html' },
            { title: 'SSP Auto-Install Configuration', url: 'https://www.manageengine.com/products/desktop-central/ssp-auto-install.html' },
            { title: 'Prohibited Software Management', url: 'https://www.manageengine.com/products/desktop-central/prohibited-software.html' }
        ]
    },
    
    // Browser Security Plus + Asset Explorer Integrations,
    'browser-security-plus-onprem_servicenow-cloud': {
        supported: true,
        features: [
            { 
                name: 'Asset data post from BSP to ServiceNow',
                id: 'bsp-op-snow-basic-asset-post'
            },
            { 
                name: 'Choose whether to remove an asset from ServiceNow if it is removed from Browser Security Plus SoM',
                id: 'bsp-op-snow-basic-asset-removal'
            },
            { 
                name: 'Assign last logged as the asset\'s owner in ServiceNow',
                id: 'bsp-op-snow-basic-owner-assign'
            }
        ],
        documentation: [
            { title: 'BSP On-Premise to ServiceNow Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-servicenow-cloud.html' },
            { title: 'Asset Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/servicenow-asset-sync.html' },
            { title: 'CMDB Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/servicenow-cmdb.html' },
            { title: 'ServiceNow API Guide', url: 'https://docs.servicenow.com/' }
        ]
    },
    'browser-security-plus-onprem_servicenow-onprem': {
        supported: false,
        features: [
            { 
                name: 'Asset data post from BSP to ServiceNow',
                id: 'bsp-op-snow-basic-op-asset-post'
            },
            { 
                name: 'Choose whether to remove an asset from ServiceNow if it is removed from Browser Security Plus SoM',
                id: 'bsp-op-snow-basic-op-asset-removal'
            },
            { 
                name: 'Assign last logged as the asset\'s owner in ServiceNow',
                id: 'bsp-op-snow-basic-op-owner-assign'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-servicenow-onprem-integration.html' },
            { title: 'Asset Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/servicenow-asset-sync.html' },
            { title: 'CMDB Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/servicenow-cmdb.html' },
            { title: 'ServiceNow API Guide', url: 'https://docs.servicenow.com/' }
        ]
    },
    
    // Browser Security Plus + ServiceNow SGC Integrations,
    'browser-security-plus-onprem_splunk-cloud': {
        supported: true,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from BSP to Splunk',
                id: 'bsp-op-splunk-audit-logs'
            },
            { 
                name: 'Vulnerability data is synced from BSP to Splunk',
                id: 'bsp-op-splunk-vuln-data'
            }
        ],
        documentation: [
            { title: 'BSP On-Premise to Splunk Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-splunk-cloud.html' },
            { title: 'Audit Log Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/splunk-audit-sync.html' },
            { title: 'Vulnerability Data Export Setup', url: 'https://www.manageengine.com/products/desktop-central/splunk-vulnerability-sync.html' },
            { title: 'Splunk Documentation', url: 'https://docs.splunk.com/' }
        ]
    },
    'browser-security-plus-onprem_splunk-onprem': {
        supported: true,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from BSP to Splunk',
                id: 'bsp-op-splunk-op-audit-logs'
            },
            { 
                name: 'Vulnerability data is synced from BSP to Splunk',
                id: 'bsp-op-splunk-op-vuln-data'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-splunk-onprem-integration.html' },
            { title: 'Syslog Configuration for Splunk', url: 'https://www.manageengine.com/products/desktop-central/splunk-syslog-setup.html' },
            { title: 'Vulnerability Data Export Setup', url: 'https://www.manageengine.com/products/desktop-central/splunk-vulnerability-sync.html' },
            { title: 'Splunk Enterprise Documentation', url: 'https://docs.splunk.com/Documentation/Splunk' }
        ]
    },
    
    // Browser Security Plus + Syslog / SIEM Integrations (On-Prem only),
    'browser-security-plus-onprem_syslog-siem-cloud': {
        supported: false,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from BSP to Syslog/SIEM',
                id: 'bsp-op-syslog-cloud-audit-logs'
            }
        ],
        documentation: [
            { title: 'BSP-Syslog Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/syslog-integration.html' },
            { title: 'Audit Log Forwarding Setup', url: 'https://www.manageengine.com/products/desktop-central/audit-log-forwarding.html' },
            { title: 'Syslog Configuration', url: 'https://www.manageengine.com/products/desktop-central/syslog-setup.html' },
            { title: 'SIEM Integration Best Practices', url: 'https://www.manageengine.com/products/desktop-central/siem-best-practices.html' }
        ]
    },
    'browser-security-plus-onprem_syslog-siem-onprem': {
        supported: true,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from BSP to Syslog/SIEM',
                id: 'bsp-op-syslog-op-audit-logs'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Syslog Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-syslog-onprem-integration.html' },
            { title: 'Audit Log Forwarding Setup', url: 'https://www.manageengine.com/products/desktop-central/audit-log-forwarding.html' },
            { title: 'Syslog Configuration', url: 'https://www.manageengine.com/products/desktop-central/syslog-setup.html' },
            { title: 'SIEM Integration Best Practices', url: 'https://www.manageengine.com/products/desktop-central/siem-best-practices.html' }
        ]
    },
    'browser-security-plus-onprem_tenable-sc-onprem': {
        supported: false
    },
    'browser-security-plus-onprem_tenable-vm-cloud': {
        supported: false
    },
    'browser-security-plus-onprem_zendesk-cloud': {
        supported: true,
        features: [
            { 
                name: 'Deploy software packages from Zendesk tickets',
                id: 'bsp-op-zendesk-deploy-software'
            },
            { 
                name: 'Remote control assets from Zendesk tickets',
                id: 'bsp-op-zendesk-remote-control'
            },
            { 
                name: 'System manager tools of a machine can be remotely accessed from Zendesk tickets',
                id: 'bsp-op-zendesk-system-tools'
            },
            { 
                name: 'Remote power options such as lock, hibernate, shutdown, Wake on LAN from Zendesk tickets',
                id: 'bsp-op-zendesk-power-options'
            }
        ],
        documentation: [
            { title: 'BSP On-Premise to Zendesk Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-zendesk-cloud.html' },
            { title: 'Software Deployment from Tickets', url: 'https://www.manageengine.com/products/desktop-central/zendesk-software-deploy.html' },
            { title: 'Remote Control Configuration', url: 'https://www.manageengine.com/products/desktop-central/zendesk-remote-control.html' },
            { title: 'Zendesk API Documentation', url: 'https://developer.zendesk.com/api-reference/' }
        ]
    },
    
    // Browser Security Plus + Freshservice Integrations,
    'browser-security-plus-onprem_zoho-flow-cloud': {
        supported: false
    },

    // ── Device Control Plus Integrations ──────────────────────────────────────
    'device-control-plus-cloud_analytics-plus-cloud': {
        supported: false,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'dcp-ap-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'dcp-ap-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'dcp-ap-default-sync-3'
            },
            { 
                name: 'Optional data synchronization: Users, Groups, BIOS, CD ROM DRIVE, Monitor, Disk drives, Logical disk, Motherboard, Keyboard, Mouse, Physical memory',
                id: 'dcp-ap-optional-sync-1'
            },
            { 
                name: 'Optional data synchronization: POTS modem, Processors, Serial port, Video controller, USB controller, Printers, Drivers, Share details, File details',
                id: 'dcp-ap-optional-sync-2'
            },
            { 
                name: 'Optional data synchronization: User logon history, Scheduled tasks info, Software audit history, Hardware audit history, Computer and hardware mapping, Computer and group association, Custom groups and associated users',
                id: 'dcp-ap-optional-sync-3'
            },
            { 
                name: 'Optional data synchronization: Trusted Platform Module',
                id: 'dcp-ap-optional-sync-4'
            }
        ],
        documentation: [
            { title: 'DCP-Analytics Plus Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/analytics-plus-integration.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-analytics.html' },
            { title: 'Custom Reports Configuration', url: 'https://www.manageengine.com/products/desktop-central/custom-reports.html' },
            { title: 'Analytics Dashboard Guide', url: 'https://www.manageengine.com/products/desktop-central/analytics-dashboard.html' }
        ]
    },
    'device-control-plus-cloud_asset-explorer-cloud': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset sync from DCP to AE',
                id: 'dcp-ae-inventory-sync'
            },
            { 
                name: 'Remote control asset from AE tickets',
                id: 'dcp-ae-remote-control'
            },
            { 
                name: 'Deploy software from AE tickets',
                id: 'dcp-ae-deploy-software'
            },
            { 
                name: 'Perform tools action from AE tickets',
                id: 'dcp-ae-tools-action'
            },
            { 
                name: 'Loading iFrame of DCP within AE',
                id: 'dcp-ae-iframe'
            },
            { 
                name: 'Action to be performed on AE asset when the asset is removed from SOM in Device Control Plus (Beta)',
                id: 'dcp-ae-asset-removal-beta'
            },
            { 
                name: 'Trayicon requests are created as AE tickets (Beta)',
                id: 'dcp-ae-trayicon-beta'
            },
            { 
                name: 'SSP requests are created as AE tickets (Beta)',
                id: 'dcp-ae-ssp-beta'
            }
        ],
        documentation: [
            { title: 'DCP-AE Cloud Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ae-cloud-integration.html' },
            { title: 'Asset Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/asset-sync-setup.html' },
            { title: 'Remote Control Setup', url: 'https://www.manageengine.com/products/desktop-central/remote-control-ae.html' },
            { title: 'iFrame Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/iframe-integration.html' }
        ]
    },
    'device-control-plus-cloud_asset-explorer-onprem': {
        supported: true,
        betaRelease: true,
        features: [
            { 
                name: 'Inventory asset sync from DCP to AE',
                id: 'dcp-ae-op-inventory-sync'
            }
        ],
        documentation: [
            { title: 'DCP Cloud to AE On-Premise Integration', url: 'https://www.manageengine.com/products/desktop-central/ae-onprem-integration.html' },
            { title: 'Beta Release Notes', url: 'https://www.manageengine.com/products/desktop-central/beta-release-notes.html' },
            { title: 'Hybrid Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/hybrid-setup.html' }
        ]
    },
    'device-control-plus-cloud_connectwise-cloud': {
        supported: true
    },
    'device-control-plus-cloud_crowdstrike-cloud': {
        supported: false
    },
    'device-control-plus-cloud_freshdesk-cloud': {
        supported: true
    },
    'device-control-plus-cloud_freshservice-cloud': {
        supported: true,
        features: [
            { 
                name: 'Deploy software packages from FreshService tickets',
                id: 'dcp-freshservice-deploy-software'
            },
            { 
                name: 'Remote control assets from FreshService tickets',
                id: 'dcp-freshservice-remote-control'
            },
            { 
                name: 'System manager tools of a machine can be remotely accessed from FreshService tickets',
                id: 'dcp-freshservice-system-tools'
            },
            { 
                name: 'Remote power options such as lock, hibernate, shutdown, Wake on LAN from FreshService tickets',
                id: 'dcp-freshservice-power-options'
            }
        ],
        documentation: [
            { title: 'DCP-Freshservice Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/freshservice-integration.html' },
            { title: 'Software Deployment from Tickets', url: 'https://www.manageengine.com/products/desktop-central/freshservice-software-deploy.html' },
            { title: 'Remote Control Configuration', url: 'https://www.manageengine.com/products/desktop-central/freshservice-remote-control.html' },
            { title: 'Freshservice API Documentation', url: 'https://api.freshservice.com/' }
        ]
    },
    'device-control-plus-cloud_halopsa-cloud': {
        supported: true
    },
    'device-control-plus-cloud_jira-cloud': {
        supported: true,
        features: [
            { 
                name: 'Load iFrame from Jira',
                id: 'dcp-jira-iframe'
            },
            { 
                name: 'Remote control asset from Jira',
                id: 'dcp-jira-remote-control'
            },
            { 
                name: 'Asset data are pulled into Jira from EC',
                id: 'dcp-jira-asset-data'
            },
            { 
                name: 'Perform tools action from Jira',
                id: 'dcp-jira-tools-action'
            }
        ],
        documentation: [
            { title: 'DCP-Jira Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/jira-integration.html' },
            { title: 'iFrame Configuration', url: 'https://www.manageengine.com/products/desktop-central/jira-iframe-setup.html' },
            { title: 'Remote Control from Jira', url: 'https://www.manageengine.com/products/desktop-central/jira-remote-control.html' },
            { title: 'Jira API Documentation', url: 'https://developer.atlassian.com/cloud/jira/' }
        ]
    },
    'device-control-plus-cloud_log360-onprem': {
        supported: false,
        features: [
            { 
                name: 'Patch data are pulled into ELA from DCP - Approve and install patches directly through incident workflows',
                id: 'dcp-ela-patch-data'
            },
            { 
                name: 'Vulnerability and system misconfiguration data are pulled into ELA from DCP - Identify devices with vulnerabilities or misconfigurations using custom correlation rules and alerts',
                id: 'dcp-ela-vulnerability-data'
            },
            { 
                name: 'Comparators can be created in ELA and custom correlation rules and custom alert profiles can be created for those comparators',
                id: 'dcp-ela-comparators'
            }
        ],
        documentation: [
            { title: 'DCP-ELA Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ela-integration.html' },
            { title: 'Patch Workflow Configuration', url: 'https://www.manageengine.com/products/desktop-central/patch-workflow-ela.html' },
            { title: 'Custom Correlation Rules', url: 'https://www.manageengine.com/products/desktop-central/correlation-rules.html' },
            { title: 'Alert Profile Setup', url: 'https://www.manageengine.com/products/desktop-central/alert-profiles.html' }
        ]
    },
    'device-control-plus-cloud_pam360-cloud': {
        supported: true
    },
    'device-control-plus-cloud_pam360-onprem': {
        supported: true
    },
    'device-control-plus-cloud_powerbi-cloud': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'dcp-powerbi-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'dcp-powerbi-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'dcp-powerbi-default-sync-3'
            }
        ],
        documentation: [
            { title: 'DCP-PowerBI Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/powerbi-integration.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-powerbi.html' },
            { title: 'PowerBI Dashboard Configuration', url: 'https://www.manageengine.com/products/desktop-central/powerbi-dashboard.html' },
            { title: 'PowerBI Documentation', url: 'https://docs.microsoft.com/en-us/power-bi/' }
        ]
    },
    'device-control-plus-cloud_powerbi-onprem': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'dcp-powerbi-op-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'dcp-powerbi-op-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'dcp-powerbi-op-default-sync-3'
            }
        ],
        documentation: [
            { title: 'DCP Cloud to PowerBI On-Premise Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-cloud-powerbi-onprem.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-powerbi.html' },
            { title: 'PowerBI Report Server Setup', url: 'https://www.manageengine.com/products/desktop-central/powerbi-report-server.html' },
            { title: 'PowerBI Documentation', url: 'https://docs.microsoft.com/en-us/power-bi/' }
        ]
    },
    'device-control-plus-cloud_qualys-cloud': {
        supported: false
    },
    'device-control-plus-cloud_rapid7-insightvm-cloud': {
        supported: false
    },
    'device-control-plus-cloud_rapid7-insightvm-onprem': {
        supported: false
    },
    'device-control-plus-cloud_servicedesk-plus-cloud': {
        supported: false,
        features: [
            { 
                name: 'Inventory asset sync from DCP to SDP',
                id: 'dcp-sdp-inventory-sync'
            },
            { 
                name: 'Remote control asset from SDP tickets',
                id: 'dcp-sdp-remote-control'
            },
            { 
                name: 'Deploy software from SDP tickets',
                id: 'dcp-sdp-deploy-software'
            },
            { 
                name: 'Perform tools action from SDP tickets',
                id: 'dcp-sdp-tools-action'
            },
            { 
                name: 'Loading iFrame of DCP within SDP',
                id: 'dcp-sdp-iframe'
            },
            { 
                name: 'Action to be performed on SDP asset when the asset is removed from SOM in Device Control Plus (Beta)',
                id: 'dcp-sdp-asset-removal-beta'
            },
            { 
                name: 'Trayicon requests are created as SDP tickets (Beta)',
                id: 'dcp-sdp-trayicon-beta'
            },
            { 
                name: 'SSP requests are created as SDP tickets (Beta)',
                id: 'dcp-sdp-ssp-beta'
            }
        ],
        documentation: [
            { title: 'DCP-SDP Cloud Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/help/configuring_desktop_central/integrating-with-servicedesk-plus-cloud.html' },
            { title: 'Configuring EC extension for SDP Cloud', url: 'https://help.sdpondemand.com/endpoint-central-extension' },
            { title: 'Troubleshooting errors while enabling integration', url: 'https://www.manageengine.com/products/desktop-central/kb/sdp-on-demand.html' },
            { title: 'Troubleshooting asset sync between ECOD-SDPOD', url: 'https://zask.pali.io/zask/EMSTechAsk/questions/8639642606' }
        ]
    },
    'device-control-plus-cloud_servicedesk-plus-msp-cloud': {
        supported: false
    },
    'device-control-plus-cloud_servicedesk-plus-msp-onprem': {
        supported: false
    },
    'device-control-plus-cloud_servicedesk-plus-onprem': {
        supported: false,
        betaRelease: true,
        features: [
            { 
                name: 'Inventory asset sync from DCP to SDP',
                id: 'dcp-sdp-op-inventory-sync'
            }
        ],
        documentation: [
            { title: 'DCP Cloud to SDP On-Premise Integration', url: 'https://www.manageengine.com/products/desktop-central/sdp-onprem-integration.html' },
            { title: 'Beta Release Notes', url: 'https://www.manageengine.com/products/desktop-central/beta-release-notes.html' },
            { title: 'Hybrid Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/hybrid-setup.html' }
        ]
    },
    'device-control-plus-cloud_servicenow-cloud': {
        supported: true,
        features: [
            { 
                name: 'Asset data post from DCP to ServiceNow',
                id: 'dcp-snow-basic-asset-post'
            },
            { 
                name: 'Choose whether to remove an asset from ServiceNow if it is removed from Device Control Plus SoM',
                id: 'dcp-snow-basic-asset-removal'
            },
            { 
                name: 'Assign last logged as the asset\'s owner in ServiceNow',
                id: 'dcp-snow-basic-owner-assign'
            }
        ],
        documentation: [
            { title: 'DCP-ServiceNow Basic Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/servicenow-integration.html' },
            { title: 'Asset Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/servicenow-asset-sync.html' },
            { title: 'CMDB Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/servicenow-cmdb.html' },
            { title: 'ServiceNow API Guide', url: 'https://docs.servicenow.com/' }
        ]
    },
    'device-control-plus-cloud_servicenow-onprem': {
        supported: false
    },
    'device-control-plus-cloud_splunk-cloud': {
        supported: false,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from DCP to Splunk',
                id: 'dcp-splunk-audit-logs'
            },
            { 
                name: 'Vulnerability data is synced from DCP to Splunk',
                id: 'dcp-splunk-vuln-data'
            }
        ],
        documentation: [
            { title: 'DCP-Splunk Cloud Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/splunk-cloud-integration.html' },
            { title: 'Audit Log Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/splunk-audit-sync.html' },
            { title: 'Vulnerability Data Export Setup', url: 'https://www.manageengine.com/products/desktop-central/splunk-vulnerability-sync.html' },
            { title: 'Splunk Documentation', url: 'https://docs.splunk.com/' }
        ]
    },
    'device-control-plus-cloud_splunk-onprem': {
        supported: false,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from DCP to Splunk',
                id: 'dcp-splunk-op-audit-logs'
            },
            { 
                name: 'Vulnerability data is synced from DCP to Splunk',
                id: 'dcp-splunk-op-vuln-data'
            }
        ],
        documentation: [
            { title: 'DCP Cloud to Splunk On-Premise Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-cloud-splunk-onprem.html' },
            { title: 'Audit Log Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/splunk-audit-sync.html' },
            { title: 'Vulnerability Data Export Setup', url: 'https://www.manageengine.com/products/desktop-central/splunk-vulnerability-sync.html' },
            { title: 'Splunk Enterprise Documentation', url: 'https://docs.splunk.com/Documentation/Splunk' }
        ]
    },
    'device-control-plus-cloud_tenable-sc-onprem': {
        supported: false
    },
    'device-control-plus-cloud_tenable-vm-cloud': {
        supported: false
    },
    'device-control-plus-cloud_zendesk-cloud': {
        supported: true,
        features: [
            { 
                name: 'Deploy software packages from Zendesk tickets',
                id: 'dcp-zendesk-deploy-software'
            },
            { 
                name: 'Remote control assets from Zendesk tickets',
                id: 'dcp-zendesk-remote-control'
            },
            { 
                name: 'System manager tools of a machine can be remotely accessed from Zendesk tickets',
                id: 'dcp-zendesk-system-tools'
            },
            { 
                name: 'Remote power options such as lock, hibernate, shutdown, Wake on LAN from Zendesk tickets',
                id: 'dcp-zendesk-power-options'
            }
        ],
        documentation: [
            { title: 'DCP-Zendesk Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/zendesk-integration.html' },
            { title: 'Software Deployment from Tickets', url: 'https://www.manageengine.com/products/desktop-central/zendesk-software-deploy.html' },
            { title: 'Remote Control Configuration', url: 'https://www.manageengine.com/products/desktop-central/zendesk-remote-control.html' },
            { title: 'Zendesk API Documentation', url: 'https://developer.zendesk.com/api-reference/' }
        ]
    },
    'device-control-plus-cloud_zoho-flow-cloud': {
        supported: true
    },
    'device-control-plus-onprem_analytics-plus-cloud': {
        supported: false,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'dcp-op-ap-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'dcp-op-ap-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'dcp-op-ap-default-sync-3'
            },
            { 
                name: 'Optional data synchronization: Users, Groups, BIOS, CD ROM DRIVE, Monitor, Disk drives, Logical disk, Motherboard, Keyboard, Mouse, Physical memory',
                id: 'dcp-op-ap-optional-sync-1'
            },
            { 
                name: 'Optional data synchronization: POTS modem, Processors, Serial port, Video controller, USB controller, Printers, Drivers, Share details, File details',
                id: 'dcp-op-ap-optional-sync-2'
            },
            { 
                name: 'Optional data synchronization: User logon history, Scheduled tasks info, Software audit history, Hardware audit history, Computer and hardware mapping, Computer and group association, Custom groups and associated users',
                id: 'dcp-op-ap-optional-sync-3'
            },
            { 
                name: 'Optional data synchronization: Trusted Platform Module',
                id: 'dcp-op-ap-optional-sync-4'
            }
        ],
        documentation: [
            { title: 'DCP On-Premise to Analytics Plus Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-analytics-cloud.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-analytics.html' },
            { title: 'Custom Reports Configuration', url: 'https://www.manageengine.com/products/desktop-central/custom-reports.html' },
            { title: 'Analytics Dashboard Guide', url: 'https://www.manageengine.com/products/desktop-central/analytics-dashboard.html' }
        ]
    },
    'device-control-plus-onprem_analytics-plus-onprem': {
        supported: false,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'dcp-op-ap-op-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'dcp-op-ap-op-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'dcp-op-ap-op-default-sync-3'
            },
            { 
                name: 'Optional data synchronization: Users, Groups, BIOS, CD ROM DRIVE, Monitor, Disk drives, Logical disk, Motherboard, Keyboard, Mouse, Physical memory',
                id: 'dcp-op-ap-op-optional-sync-1'
            },
            { 
                name: 'Optional data synchronization: POTS modem, Processors, Serial port, Video controller, USB controller, Printers, Drivers, Share details, File details',
                id: 'dcp-op-ap-op-optional-sync-2'
            },
            { 
                name: 'Optional data synchronization: User logon history, Scheduled tasks info, Software audit history, Hardware audit history, Computer and hardware mapping, Computer and group association, Custom groups and associated users',
                id: 'dcp-op-ap-op-optional-sync-3'
            },
            { 
                name: 'Optional data synchronization: Trusted Platform Module',
                id: 'dcp-op-ap-op-optional-sync-4'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-analytics-onprem-integration.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-analytics.html' },
            { title: 'Custom Reports Configuration', url: 'https://www.manageengine.com/products/desktop-central/custom-reports.html' },
            { title: 'Analytics Dashboard Guide', url: 'https://www.manageengine.com/products/desktop-central/analytics-dashboard.html' }
        ]
    },
    
    // Device Control Plus + ServiceNow (Basic) Integrations,
    'device-control-plus-onprem_asset-explorer-cloud': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset sync from DCP to AE',
                id: 'dcp-op-ae-inventory-sync'
            },
            { 
                name: 'Auto-assign users',
                id: 'dcp-op-ae-auto-assign'
            },
            { 
                name: 'Action to be performed on AE asset when the asset is removed from SOM in Device Control Plus (Beta)',
                id: 'dcp-op-ae-asset-removal-beta'
            },
            { 
                name: 'Action to be performed on AE software, when the commercial software is removed from EC',
                id: 'dcp-op-ae-software-removal'
            },
            { 
                name: 'Inventory alerts are created as AE tickets',
                id: 'dcp-op-ae-inventory-alerts'
            },
            { 
                name: 'Trayicon requests are created as AE tickets',
                id: 'dcp-op-ae-trayicon'
            }
        ],
        documentation: [
            { title: 'DCP On-Premise to AE Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-ae-cloud.html' },
            { title: 'Auto-assign Configuration', url: 'https://www.manageengine.com/products/desktop-central/auto-assign-users.html' },
            { title: 'Alert Ticketing Setup', url: 'https://www.manageengine.com/products/desktop-central/alert-ticketing.html' }
        ]
    },
    'device-control-plus-onprem_asset-explorer-onprem': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset data sync',
                id: 'dcp-op-ae-op-inventory-sync'
            },
            { 
                name: 'Auto-assign users',
                id: 'dcp-op-ae-op-auto-assign'
            },
            { 
                name: 'Action to be performed on AE asset when the asset is removed from SOM in Device Control Plus',
                id: 'dcp-op-ae-op-asset-removal'
            },
            { 
                name: 'User-defined templates can be deployed from AE tickets',
                id: 'dcp-op-ae-op-deploy-templates'
            },
            { 
                name: 'User-defined software packages can be deployed from AE tickets',
                id: 'dcp-op-ae-op-deploy-packages'
            },
            { 
                name: 'SSP requests are created as AE tickets and software will be automatically installed upon approval',
                id: 'dcp-op-ae-op-ssp-auto-install'
            },
            { 
                name: 'Request for prohibited software are created as AE tickets',
                id: 'dcp-op-ae-op-prohibited-software'
            },
            { 
                name: 'Inventory alerts are created as AE tickets',
                id: 'dcp-op-ae-op-inventory-alerts'
            },
            { 
                name: 'Trayicon requests are created as AE tickets',
                id: 'dcp-op-ae-op-trayicon'
            },
            { 
                name: 'Remote control assets from AE',
                id: 'dcp-op-ae-op-remote-control'
            },
            { 
                name: 'Perform tools action from AE',
                id: 'dcp-op-ae-op-tools-action'
            },
            { 
                name: 'Load Device Control Plus as iFrame within AE',
                id: 'dcp-op-ae-op-iframe'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-ae-onprem-integration.html' },
            { title: 'Template Deployment Setup', url: 'https://www.manageengine.com/products/desktop-central/template-deployment.html' },
            { title: 'SSP Auto-Install Configuration', url: 'https://www.manageengine.com/products/desktop-central/ssp-auto-install.html' },
            { title: 'Prohibited Software Management', url: 'https://www.manageengine.com/products/desktop-central/prohibited-software.html' }
        ]
    },
    
    // Device Control Plus + Event Log Analyzer / Log 360 Integrations,
    'device-control-plus-onprem_connectwise-cloud': {
        supported: true
    },
    'device-control-plus-onprem_crowdstrike-cloud': {
        supported: false
    },
    'device-control-plus-onprem_freshdesk-cloud': {
        supported: true
    },
    'device-control-plus-onprem_freshservice-cloud': {
        supported: true,
        features: [
            { 
                name: 'Deploy software packages from FreshService tickets',
                id: 'dcp-op-freshservice-deploy-software'
            },
            { 
                name: 'Remote control assets from FreshService tickets',
                id: 'dcp-op-freshservice-remote-control'
            },
            { 
                name: 'System manager tools of a machine can be remotely accessed from FreshService tickets',
                id: 'dcp-op-freshservice-system-tools'
            },
            { 
                name: 'Remote power options such as lock, hibernate, shutdown, Wake on LAN from FreshService tickets',
                id: 'dcp-op-freshservice-power-options'
            }
        ],
        documentation: [
            { title: 'DCP On-Premise to Freshservice Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-freshservice-cloud.html' },
            { title: 'Software Deployment from Tickets', url: 'https://www.manageengine.com/products/desktop-central/freshservice-software-deploy.html' },
            { title: 'Remote Control Configuration', url: 'https://www.manageengine.com/products/desktop-central/freshservice-remote-control.html' },
            { title: 'Freshservice API Documentation', url: 'https://api.freshservice.com/' }
        ]
    },
    
    // Device Control Plus + PowerBI Integrations,
    'device-control-plus-onprem_halopsa-cloud': {
        supported: true
    },
    'device-control-plus-onprem_jira-cloud': {
        supported: true,
        features: [
            { 
                name: 'Load iFrame from Jira',
                id: 'dcp-op-jira-iframe'
            },
            { 
                name: 'Remote control asset from Jira',
                id: 'dcp-op-jira-remote-control'
            },
            { 
                name: 'Asset data are pulled into Jira from EC',
                id: 'dcp-op-jira-asset-data'
            },
            { 
                name: 'Perform tools action from Jira',
                id: 'dcp-op-jira-tools-action'
            }
        ],
        documentation: [
            { title: 'DCP On-Premise to Jira Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-jira-cloud.html' },
            { title: 'iFrame Configuration', url: 'https://www.manageengine.com/products/desktop-central/jira-iframe-setup.html' },
            { title: 'Remote Control from Jira', url: 'https://www.manageengine.com/products/desktop-central/jira-remote-control.html' },
            { title: 'Jira API Documentation', url: 'https://developer.atlassian.com/cloud/jira/' }
        ]
    },
    'device-control-plus-onprem_jira-onprem': {
        supported: false,
        features: [
            { 
                name: 'Load iFrame from Jira',
                id: 'dcp-op-jira-op-iframe'
            },
            { 
                name: 'Remote control asset from Jira',
                id: 'dcp-op-jira-op-remote-control'
            },
            { 
                name: 'Asset data are pulled into Jira from EC',
                id: 'dcp-op-jira-op-asset-data'
            },
            { 
                name: 'Perform tools action from Jira',
                id: 'dcp-op-jira-op-tools-action'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-jira-onprem-integration.html' },
            { title: 'iFrame Configuration', url: 'https://www.manageengine.com/products/desktop-central/jira-iframe-setup.html' },
            { title: 'Remote Control from Jira', url: 'https://www.manageengine.com/products/desktop-central/jira-remote-control.html' },
            { title: 'Jira Server Documentation', url: 'https://confluence.atlassian.com/jiraserver/' }
        ]
    },
    
    // Device Control Plus + Zendesk Integrations,
    'device-control-plus-onprem_log360-onprem': {
        supported: true,
        features: [
            { 
                name: 'Patch data are pulled into ELA from DCP - Approve and install patches directly through incident workflows',
                id: 'dcp-op-ela-op-patch-data'
            },
            { 
                name: 'Vulnerability and system misconfiguration data are pulled into ELA from DCP - Identify devices with vulnerabilities or misconfigurations using custom correlation rules and alerts',
                id: 'dcp-op-ela-op-vulnerability-data'
            },
            { 
                name: 'Comparators can be created in ELA and custom correlation rules and custom alert profiles can be created for those comparators',
                id: 'dcp-op-ela-op-comparators'
            },
            { 
                name: 'Audit logs in Action log viewer will be posted from DCP to ELA',
                id: 'dcp-op-ela-op-audit-logs'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-ela-onprem-integration.html' },
            { title: 'Audit Log Configuration', url: 'https://www.manageengine.com/products/desktop-central/audit-logs-ela.html' },
            { title: 'Patch Workflow Configuration', url: 'https://www.manageengine.com/products/desktop-central/patch-workflow-ela.html' },
            { title: 'Custom Correlation Rules', url: 'https://www.manageengine.com/products/desktop-central/correlation-rules.html' }
        ]
    },
    
    // Device Control Plus + Analytics Plus Integrations,
    'device-control-plus-onprem_pam360-cloud': {
        supported: true
    },
    'device-control-plus-onprem_pam360-onprem': {
        supported: true
    },
    'device-control-plus-onprem_powerbi-cloud': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'dcp-op-powerbi-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'dcp-op-powerbi-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'dcp-op-powerbi-default-sync-3'
            }
        ],
        documentation: [
            { title: 'DCP On-Premise to PowerBI Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-powerbi-cloud.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-powerbi.html' },
            { title: 'PowerBI Dashboard Configuration', url: 'https://www.manageengine.com/products/desktop-central/powerbi-dashboard.html' },
            { title: 'PowerBI Documentation', url: 'https://docs.microsoft.com/en-us/power-bi/' }
        ]
    },
    'device-control-plus-onprem_powerbi-onprem': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'dcp-op-powerbi-op-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'dcp-op-powerbi-op-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'dcp-op-powerbi-op-default-sync-3'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-powerbi-onprem-integration.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-powerbi.html' },
            { title: 'PowerBI Report Server Setup', url: 'https://www.manageengine.com/products/desktop-central/powerbi-report-server.html' },
            { title: 'PowerBI Documentation', url: 'https://docs.microsoft.com/en-us/power-bi/' }
        ]
    },
    
    // Device Control Plus + IBM QRadar Integrations,
    'device-control-plus-onprem_qualys-cloud': {
        supported: false
    },
    'device-control-plus-onprem_rapid7-insightvm-cloud': {
        supported: false
    },
    'device-control-plus-onprem_rapid7-insightvm-onprem': {
        supported: false
    },
    'device-control-plus-onprem_servicedesk-plus-cloud': {
        supported: false,
        features: [
            { 
                name: 'Inventory asset sync from DCP to SDP',
                id: 'dcp-op-sdp-inventory-sync'
            },
            { 
                name: 'Auto-assign users',
                id: 'dcp-op-sdp-auto-assign'
            },
            { 
                name: 'Action to be performed on SDP asset when the asset is removed from SOM in Device Control Plus (Beta)',
                id: 'dcp-op-sdp-asset-removal-beta'
            },
            { 
                name: 'Action to be performed on SDP software, when the commercial software is removed from EC',
                id: 'dcp-op-sdp-software-removal'
            },
            { 
                name: 'Inventory alerts are created as SDP tickets',
                id: 'dcp-op-sdp-inventory-alerts'
            },
            { 
                name: 'Trayicon requests are created as SDP tickets',
                id: 'dcp-op-sdp-trayicon'
            }
        ],
        documentation: [
            { title: 'DCP On-Premise to SDP Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-sdp-cloud.html' },
            { title: 'Auto-assign Configuration', url: 'https://www.manageengine.com/products/desktop-central/auto-assign-users.html' },
            { title: 'Alert Ticketing Setup', url: 'https://www.manageengine.com/products/desktop-central/alert-ticketing.html' }
        ]
    },
    'device-control-plus-onprem_servicedesk-plus-msp-cloud': {
        supported: false
    },
    'device-control-plus-onprem_servicedesk-plus-msp-onprem': {
        supported: false
    },
    'device-control-plus-onprem_servicedesk-plus-onprem': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset data sync',
                id: 'dcp-op-sdp-op-inventory-sync'
            },
            { 
                name: 'Auto-assign users',
                id: 'dcp-op-sdp-op-auto-assign'
            },
            { 
                name: 'Action to be performed on SDP asset when the asset is removed from SOM in Device Control Plus',
                id: 'dcp-op-sdp-op-asset-removal'
            },
            { 
                name: 'User-defined templates can be deployed from SDP tickets',
                id: 'dcp-op-sdp-op-deploy-templates'
            },
            { 
                name: 'User-defined software packages can be deployed from SDP tickets',
                id: 'dcp-op-sdp-op-deploy-packages'
            },
            { 
                name: 'SSP requests are created as SDP tickets and software will be automatically installed upon approval',
                id: 'dcp-op-sdp-op-ssp-auto-install'
            },
            { 
                name: 'Request for prohibited software are created as SDP tickets',
                id: 'dcp-op-sdp-op-prohibited-software'
            },
            { 
                name: 'Inventory alerts are created as SDP tickets',
                id: 'dcp-op-sdp-op-inventory-alerts'
            },
            { 
                name: 'Trayicon requests are created as SDP tickets',
                id: 'dcp-op-sdp-op-trayicon'
            },
            { 
                name: 'Remote control assets from SDP',
                id: 'dcp-op-sdp-op-remote-control'
            },
            { 
                name: 'Perform tools action from SDP',
                id: 'dcp-op-sdp-op-tools-action'
            },
            { 
                name: 'Load Device Control Plus as iFrame within SDP',
                id: 'dcp-op-sdp-op-iframe'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-sdp-onprem-integration.html' },
            { title: 'Template Deployment Setup', url: 'https://www.manageengine.com/products/desktop-central/template-deployment.html' },
            { title: 'SSP Auto-Install Configuration', url: 'https://www.manageengine.com/products/desktop-central/ssp-auto-install.html' },
            { title: 'Prohibited Software Management', url: 'https://www.manageengine.com/products/desktop-central/prohibited-software.html' }
        ]
    },
    
    // Device Control Plus + Asset Explorer Integrations,
    'device-control-plus-onprem_servicenow-cloud': {
        supported: true,
        features: [
            { 
                name: 'Asset data post from DCP to ServiceNow',
                id: 'dcp-op-snow-basic-asset-post'
            },
            { 
                name: 'Choose whether to remove an asset from ServiceNow if it is removed from Device Control Plus SoM',
                id: 'dcp-op-snow-basic-asset-removal'
            },
            { 
                name: 'Assign last logged as the asset\'s owner in ServiceNow',
                id: 'dcp-op-snow-basic-owner-assign'
            }
        ],
        documentation: [
            { title: 'DCP On-Premise to ServiceNow Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-servicenow-cloud.html' },
            { title: 'Asset Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/servicenow-asset-sync.html' },
            { title: 'CMDB Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/servicenow-cmdb.html' },
            { title: 'ServiceNow API Guide', url: 'https://docs.servicenow.com/' }
        ]
    },
    'device-control-plus-onprem_servicenow-onprem': {
        supported: false,
        features: [
            { 
                name: 'Asset data post from DCP to ServiceNow',
                id: 'dcp-op-snow-basic-op-asset-post'
            },
            { 
                name: 'Choose whether to remove an asset from ServiceNow if it is removed from Device Control Plus SoM',
                id: 'dcp-op-snow-basic-op-asset-removal'
            },
            { 
                name: 'Assign last logged as the asset\'s owner in ServiceNow',
                id: 'dcp-op-snow-basic-op-owner-assign'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-servicenow-onprem-integration.html' },
            { title: 'Asset Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/servicenow-asset-sync.html' },
            { title: 'CMDB Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/servicenow-cmdb.html' },
            { title: 'ServiceNow API Guide', url: 'https://docs.servicenow.com/' }
        ]
    },
    
    // Device Control Plus + ServiceNow SGC Integrations,
    'device-control-plus-onprem_splunk-cloud': {
        supported: true,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from DCP to Splunk',
                id: 'dcp-op-splunk-audit-logs'
            },
            { 
                name: 'Vulnerability data is synced from DCP to Splunk',
                id: 'dcp-op-splunk-vuln-data'
            }
        ],
        documentation: [
            { title: 'DCP On-Premise to Splunk Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-splunk-cloud.html' },
            { title: 'Audit Log Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/splunk-audit-sync.html' },
            { title: 'Vulnerability Data Export Setup', url: 'https://www.manageengine.com/products/desktop-central/splunk-vulnerability-sync.html' },
            { title: 'Splunk Documentation', url: 'https://docs.splunk.com/' }
        ]
    },
    'device-control-plus-onprem_splunk-onprem': {
        supported: true,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from DCP to Splunk',
                id: 'dcp-op-splunk-op-audit-logs'
            },
            { 
                name: 'Vulnerability data is synced from DCP to Splunk',
                id: 'dcp-op-splunk-op-vuln-data'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-splunk-onprem-integration.html' },
            { title: 'Syslog Configuration for Splunk', url: 'https://www.manageengine.com/products/desktop-central/splunk-syslog-setup.html' },
            { title: 'Vulnerability Data Export Setup', url: 'https://www.manageengine.com/products/desktop-central/splunk-vulnerability-sync.html' },
            { title: 'Splunk Enterprise Documentation', url: 'https://docs.splunk.com/Documentation/Splunk' }
        ]
    },
    
    // Device Control Plus + Syslog / SIEM Integrations (On-Prem only),
    'device-control-plus-onprem_syslog-siem-cloud': {
        supported: false,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from DCP to Syslog/SIEM',
                id: 'dcp-op-syslog-cloud-audit-logs'
            }
        ],
        documentation: [
            { title: 'DCP-Syslog Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/syslog-integration.html' },
            { title: 'Audit Log Forwarding Setup', url: 'https://www.manageengine.com/products/desktop-central/audit-log-forwarding.html' },
            { title: 'Syslog Configuration', url: 'https://www.manageengine.com/products/desktop-central/syslog-setup.html' },
            { title: 'SIEM Integration Best Practices', url: 'https://www.manageengine.com/products/desktop-central/siem-best-practices.html' }
        ]
    },
    'device-control-plus-onprem_syslog-siem-onprem': {
        supported: true,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from DCP to Syslog/SIEM',
                id: 'dcp-op-syslog-op-audit-logs'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Syslog Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-syslog-onprem-integration.html' },
            { title: 'Audit Log Forwarding Setup', url: 'https://www.manageengine.com/products/desktop-central/audit-log-forwarding.html' },
            { title: 'Syslog Configuration', url: 'https://www.manageengine.com/products/desktop-central/syslog-setup.html' },
            { title: 'SIEM Integration Best Practices', url: 'https://www.manageengine.com/products/desktop-central/siem-best-practices.html' }
        ]
    },

    // ════════════════════════════════════════════════════════════
    // Browser Security Plus (BSP) Integrations
    // ════════════════════════════════════════════════════════════


    // Browser Security Plus + ServiceDesk Plus Integrations,
    'device-control-plus-onprem_tenable-sc-onprem': {
        supported: false
    },
    'device-control-plus-onprem_tenable-vm-cloud': {
        supported: false
    },
    'device-control-plus-onprem_zendesk-cloud': {
        supported: true,
        features: [
            { 
                name: 'Deploy software packages from Zendesk tickets',
                id: 'dcp-op-zendesk-deploy-software'
            },
            { 
                name: 'Remote control assets from Zendesk tickets',
                id: 'dcp-op-zendesk-remote-control'
            },
            { 
                name: 'System manager tools of a machine can be remotely accessed from Zendesk tickets',
                id: 'dcp-op-zendesk-system-tools'
            },
            { 
                name: 'Remote power options such as lock, hibernate, shutdown, Wake on LAN from Zendesk tickets',
                id: 'dcp-op-zendesk-power-options'
            }
        ],
        documentation: [
            { title: 'DCP On-Premise to Zendesk Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-zendesk-cloud.html' },
            { title: 'Software Deployment from Tickets', url: 'https://www.manageengine.com/products/desktop-central/zendesk-software-deploy.html' },
            { title: 'Remote Control Configuration', url: 'https://www.manageengine.com/products/desktop-central/zendesk-remote-control.html' },
            { title: 'Zendesk API Documentation', url: 'https://developer.zendesk.com/api-reference/' }
        ]
    },
    
    // Device Control Plus + Freshservice Integrations,
    'device-control-plus-onprem_zoho-flow-cloud': {
        supported: false
    },

    // ── Endpoint Central Integrations ──────────────────────────────────────
    'endpoint-central-cloud_analytics-plus-cloud': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'ec-ap-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'ec-ap-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'ec-ap-default-sync-3'
            },
            { 
                name: 'Optional data synchronization: Users, Groups, BIOS, CD ROM DRIVE, Monitor, Disk drives, Logical disk, Motherboard, Keyboard, Mouse, Physical memory',
                id: 'ec-ap-optional-sync-1'
            },
            { 
                name: 'Optional data synchronization: POTS modem, Processors, Serial port, Video controller, USB controller, Printers, Drivers, Share details, File details',
                id: 'ec-ap-optional-sync-2'
            },
            { 
                name: 'Optional data synchronization: User logon history, Scheduled tasks info, Software audit history, Hardware audit history, Computer and hardware mapping, Computer and group association, Custom groups and associated users',
                id: 'ec-ap-optional-sync-3'
            },
            { 
                name: 'Optional data synchronization: Trusted Platform Module',
                id: 'ec-ap-optional-sync-4'
            }
        ],
        documentation: [
            { title: 'EC-Analytics Plus Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/analytics-plus-integration.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-analytics.html' },
            { title: 'Custom Reports Configuration', url: 'https://www.manageengine.com/products/desktop-central/custom-reports.html' },
            { title: 'Analytics Dashboard Guide', url: 'https://www.manageengine.com/products/desktop-central/analytics-dashboard.html' }
        ]
    },
    'endpoint-central-cloud_asset-explorer-cloud': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset sync from EC to AE',
                id: 'ec-ae-inventory-sync'
            },
            { 
                name: 'Remote control asset from AE tickets',
                id: 'ec-ae-remote-control'
            },
            { 
                name: 'Deploy software from AE tickets',
                id: 'ec-ae-deploy-software'
            },
            { 
                name: 'Perform tools action from AE tickets',
                id: 'ec-ae-tools-action'
            },
            { 
                name: 'Loading iFrame of EC within AE',
                id: 'ec-ae-iframe'
            },
            { 
                name: 'Action to be performed on AE asset when the asset is removed from SOM in Endpoint Central (Beta)',
                id: 'ec-ae-asset-removal-beta'
            },
            { 
                name: 'Trayicon requests are created as AE tickets (Beta)',
                id: 'ec-ae-trayicon-beta'
            },
            { 
                name: 'SSP requests are created as AE tickets (Beta)',
                id: 'ec-ae-ssp-beta'
            }
        ],
        documentation: [
            { title: 'EC-AE Cloud Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ae-cloud-integration.html' },
            { title: 'Asset Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/asset-sync-setup.html' },
            { title: 'Remote Control Setup', url: 'https://www.manageengine.com/products/desktop-central/remote-control-ae.html' },
            { title: 'iFrame Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/iframe-integration.html' }
        ]
    },
    'endpoint-central-cloud_asset-explorer-onprem': {
        supported: true,
        betaRelease: true,
        features: [
            { 
                name: 'Inventory asset sync from EC to AE',
                id: 'ec-ae-op-inventory-sync'
            }
        ],
        documentation: [
            { title: 'EC Cloud to AE On-Premise Integration', url: 'https://www.manageengine.com/products/desktop-central/ae-onprem-integration.html' },
            { title: 'Beta Release Notes', url: 'https://www.manageengine.com/products/desktop-central/beta-release-notes.html' },
            { title: 'Hybrid Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/hybrid-setup.html' }
        ]
    },
    'endpoint-central-cloud_connectwise-cloud': {
        supported: true
    },
    'endpoint-central-cloud_crowdstrike-cloud': {
        supported: true
    },
    'endpoint-central-cloud_freshdesk-cloud': {
        supported: true
    },
    'endpoint-central-cloud_freshservice-cloud': {
        supported: true,
        features: [
            { 
                name: 'Deploy software packages from FreshService tickets',
                id: 'ec-freshservice-deploy-software'
            },
            { 
                name: 'Remote control assets from FreshService tickets',
                id: 'ec-freshservice-remote-control'
            },
            { 
                name: 'System manager tools of a machine can be remotely accessed from FreshService tickets',
                id: 'ec-freshservice-system-tools'
            },
            { 
                name: 'Remote power options such as lock, hibernate, shutdown, Wake on LAN from FreshService tickets',
                id: 'ec-freshservice-power-options'
            }
        ],
        documentation: [
            { title: 'EC-Freshservice Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/freshservice-integration.html' },
            { title: 'Software Deployment from Tickets', url: 'https://www.manageengine.com/products/desktop-central/freshservice-software-deploy.html' },
            { title: 'Remote Control Configuration', url: 'https://www.manageengine.com/products/desktop-central/freshservice-remote-control.html' },
            { title: 'Freshservice API Documentation', url: 'https://api.freshservice.com/' }
        ]
    },
    'endpoint-central-cloud_halopsa-cloud': {
        supported: true
    },
    'endpoint-central-cloud_jira-cloud': {
        supported: true,
        features: [
            { 
                name: 'Load iFrame from Jira',
                id: 'ec-jira-iframe'
            },
            { 
                name: 'Remote control asset from Jira',
                id: 'ec-jira-remote-control'
            },
            { 
                name: 'Asset data are pulled into Jira from EC',
                id: 'ec-jira-asset-data'
            },
            { 
                name: 'Perform tools action from Jira',
                id: 'ec-jira-tools-action'
            }
        ],
        documentation: [
            { title: 'EC-Jira Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/jira-integration.html' },
            { title: 'iFrame Configuration', url: 'https://www.manageengine.com/products/desktop-central/jira-iframe-setup.html' },
            { title: 'Remote Control from Jira', url: 'https://www.manageengine.com/products/desktop-central/jira-remote-control.html' },
            { title: 'Jira API Documentation', url: 'https://developer.atlassian.com/cloud/jira/' }
        ]
    },
    'endpoint-central-cloud_log360-onprem': {
        supported: true,
        features: [
            { 
                name: 'Patch data are pulled into ELA from EC - Approve and install patches directly through incident workflows',
                id: 'ec-ela-patch-data'
            },
            { 
                name: 'Vulnerability and system misconfiguration data are pulled into ELA from EC - Identify devices with vulnerabilities or misconfigurations using custom correlation rules and alerts',
                id: 'ec-ela-vulnerability-data'
            },
            { 
                name: 'Comparators can be created in ELA and custom correlation rules and custom alert profiles can be created for those comparators',
                id: 'ec-ela-comparators'
            }
        ],
        documentation: [
            { title: 'EC-ELA Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ela-integration.html' },
            { title: 'Patch Workflow Configuration', url: 'https://www.manageengine.com/products/desktop-central/patch-workflow-ela.html' },
            { title: 'Custom Correlation Rules', url: 'https://www.manageengine.com/products/desktop-central/correlation-rules.html' },
            { title: 'Alert Profile Setup', url: 'https://www.manageengine.com/products/desktop-central/alert-profiles.html' }
        ]
    },
    'endpoint-central-cloud_pam360-cloud': {
        supported: true
    },
    'endpoint-central-cloud_pam360-onprem': {
        supported: true
    },
    'endpoint-central-cloud_powerbi-cloud': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'ec-powerbi-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'ec-powerbi-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'ec-powerbi-default-sync-3'
            }
        ],
        documentation: [
            { title: 'EC-PowerBI Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/powerbi-integration.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-powerbi.html' },
            { title: 'PowerBI Dashboard Configuration', url: 'https://www.manageengine.com/products/desktop-central/powerbi-dashboard.html' },
            { title: 'PowerBI Documentation', url: 'https://docs.microsoft.com/en-us/power-bi/' }
        ]
    },
    'endpoint-central-cloud_powerbi-onprem': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'ec-powerbi-op-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'ec-powerbi-op-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'ec-powerbi-op-default-sync-3'
            }
        ],
        documentation: [
            { title: 'EC Cloud to PowerBI On-Premise Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-cloud-powerbi-onprem.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-powerbi.html' },
            { title: 'PowerBI Report Server Setup', url: 'https://www.manageengine.com/products/desktop-central/powerbi-report-server.html' },
            { title: 'PowerBI Documentation', url: 'https://docs.microsoft.com/en-us/power-bi/' }
        ]
    },
    'endpoint-central-cloud_qualys-cloud': {
        supported: false
    },
    'endpoint-central-cloud_rapid7-insightvm-cloud': {
        supported: false
    },
    'endpoint-central-cloud_rapid7-insightvm-onprem': {
        supported: false
    },
    'endpoint-central-cloud_servicedesk-plus-cloud': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset sync from EC to SDP',
                id: 'ec-sdp-inventory-sync'
            },
            { 
                name: 'Remote control asset from SDP tickets',
                id: 'ec-sdp-remote-control'
            },
            { 
                name: 'Deploy software from SDP tickets',
                id: 'ec-sdp-deploy-software'
            },
            { 
                name: 'Perform tools action from SDP tickets',
                id: 'ec-sdp-tools-action'
            },
            { 
                name: 'Loading iFrame of EC within SDP',
                id: 'ec-sdp-iframe'
            },
            { 
                name: 'Action to be performed on SDP asset when the asset is removed from SOM in Endpoint Central (Beta)',
                id: 'ec-sdp-asset-removal-beta'
            },
            { 
                name: 'Trayicon requests are created as SDP tickets (Beta)',
                id: 'ec-sdp-trayicon-beta'
            },
            { 
                name: 'SSP requests are created as SDP tickets (Beta)',
                id: 'ec-sdp-ssp-beta'
            },
            {
                name: 'Mobile devices sync from EC to SDP',
                id: 'ec-sdp-mobile-sync-cloud'
            },
            {
                name: 'Action to be performed on ServiceDesk Plus when a device is removed in MDM',
                id: 'ec-sdp-mobile-remove-action-cloud'
            },
            {
                name: 'Perform MDM actions such as Profile association, App distribution, Deprovision device and Locate device from SDP',
                id: 'ec-sdp-mobile-action-cloud'
            }
        ],
        documentation: [
            { title: 'EC-SDP Cloud Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/help/configuring_desktop_central/integrating-with-servicedesk-plus-cloud.html' },
            { title: 'Enable MDM device sync', url: 'https://help.sdpondemand.com/mdm-cloud' },
            { title: 'Configuring EC extension for SDP Cloud', url: 'https://help.sdpondemand.com/endpoint-central-extension' },
            { title: 'Troubleshooting errors while enabling integration', url: 'https://www.manageengine.com/products/desktop-central/kb/sdp-on-demand.html' },
            { title: 'Troubleshooting asset sync between ECOD-SDPOD', url: 'https://zask.pali.io/zask/EMSTechAsk/questions/8639642606' }
        ]
    },
    'endpoint-central-cloud_servicedesk-plus-msp-cloud': {
        supported: false
    },
    'endpoint-central-cloud_servicedesk-plus-msp-onprem': {
        supported: false
    },
    'endpoint-central-cloud_servicedesk-plus-onprem': {
        supported: true,
        betaRelease: true,
        features: [
            { 
                name: 'Inventory asset sync from EC to SDP',
                id: 'ec-sdp-op-inventory-sync'
            }
        ],
        documentation: [
//            { title: 'EC Cloud to SDP On-Premise Integration', url: 'https://www.manageengine.com/products/desktop-central/sdp-onprem-integration.html' },
//            { title: 'Beta Release Notes', url: 'https://www.manageengine.com/products/desktop-central/beta-release-notes.html' },
//            { title: 'Hybrid Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/hybrid-setup.html' }
        ]
    },
    'endpoint-central-cloud_servicenow-cloud': {
        supported: true,
        features: [
            { 
                name: 'Asset data post from EC to ServiceNow',
                id: 'ec-snow-basic-asset-post'
            },
            { 
                name: 'Choose whether to remove an asset from ServiceNow if it is removed from Endpoint Central SoM',
                id: 'ec-snow-basic-asset-removal'
            },
            { 
                name: 'Assign last logged as the asset\'s owner in ServiceNow',
                id: 'ec-snow-basic-owner-assign'
            }
        ],
        documentation: [
            { title: 'EC-ServiceNow Basic Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/servicenow-integration.html' },
            { title: 'Asset Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/servicenow-asset-sync.html' },
            { title: 'CMDB Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/servicenow-cmdb.html' },
            { title: 'ServiceNow API Guide', url: 'https://docs.servicenow.com/' }
        ]
    },
    'endpoint-central-cloud_servicenow-onprem': {
        supported: false
    },
    'endpoint-central-cloud_splunk-cloud': {
        supported: true,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from EC to Splunk',
                id: 'ec-splunk-audit-logs'
            },
            { 
                name: 'Vulnerability data is synced from EC to Splunk',
                id: 'ec-splunk-vuln-data'
            }
        ],
        documentation: [
            { title: 'EC-Splunk Cloud Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/splunk-cloud-integration.html' },
            { title: 'Audit Log Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/splunk-audit-sync.html' },
            { title: 'Vulnerability Data Export Setup', url: 'https://www.manageengine.com/products/desktop-central/splunk-vulnerability-sync.html' },
            { title: 'Splunk Documentation', url: 'https://docs.splunk.com/' }
        ]
    },
    'endpoint-central-cloud_splunk-onprem': {
        supported: true,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from EC to Splunk',
                id: 'ec-splunk-op-audit-logs'
            },
            { 
                name: 'Vulnerability data is synced from EC to Splunk',
                id: 'ec-splunk-op-vuln-data'
            }
        ],
        documentation: [
            { title: 'EC Cloud to Splunk On-Premise Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-cloud-splunk-onprem.html' },
            { title: 'Audit Log Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/splunk-audit-sync.html' },
            { title: 'Vulnerability Data Export Setup', url: 'https://www.manageengine.com/products/desktop-central/splunk-vulnerability-sync.html' },
            { title: 'Splunk Enterprise Documentation', url: 'https://docs.splunk.com/Documentation/Splunk' }
        ]
    },
    'endpoint-central-cloud_tenable-sc-onprem': {
        supported: false
    },
    'endpoint-central-cloud_tenable-vm-cloud': {
        supported: false
    },
    'endpoint-central-cloud_zendesk-cloud': {
        supported: true,
        features: [
            { 
                name: 'Deploy software packages from Zendesk tickets',
                id: 'ec-zendesk-deploy-software'
            },
            { 
                name: 'Remote control assets from Zendesk tickets',
                id: 'ec-zendesk-remote-control'
            },
            { 
                name: 'System manager tools of a machine can be remotely accessed from Zendesk tickets',
                id: 'ec-zendesk-system-tools'
            },
            { 
                name: 'Remote power options such as lock, hibernate, shutdown, Wake on LAN from Zendesk tickets',
                id: 'ec-zendesk-power-options'
            }
        ],
        documentation: [
            { title: 'EC-Zendesk Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/zendesk-integration.html' },
            { title: 'Software Deployment from Tickets', url: 'https://www.manageengine.com/products/desktop-central/zendesk-software-deploy.html' },
            { title: 'Remote Control Configuration', url: 'https://www.manageengine.com/products/desktop-central/zendesk-remote-control.html' },
            { title: 'Zendesk API Documentation', url: 'https://developer.zendesk.com/api-reference/' }
        ]
    },
    'endpoint-central-cloud_zoho-flow-cloud': {
        supported: true
    },

    // ── Endpoint Central Msp Integrations ──────────────────────────────────────
    'endpoint-central-msp-cloud_analytics-plus-cloud': {
        supported: true
    },
    'endpoint-central-msp-cloud_analytics-plus-onprem': {
        supported: false
    },
    'endpoint-central-msp-cloud_asset-explorer-cloud': {
        supported: false
    },
    'endpoint-central-msp-cloud_asset-explorer-onprem': {
        supported: false
    },
    'endpoint-central-msp-cloud_connectwise-cloud': {
        supported: false
    },
    'endpoint-central-msp-cloud_crowdstrike-cloud': {
        supported: true
    },
    'endpoint-central-msp-cloud_freshdesk-cloud': {
        supported: false
    },
    'endpoint-central-msp-cloud_freshservice-cloud': {
        supported: false
    },
    'endpoint-central-msp-cloud_halopsa-cloud': {
        supported: false
    },
    'endpoint-central-msp-cloud_jira-cloud': {
        supported: false
    },
    'endpoint-central-msp-cloud_jira-onprem': {
        supported: false
    },
    'endpoint-central-msp-cloud_log360-onprem': {
        supported: false
    },
    'endpoint-central-msp-cloud_pam360-cloud': {
        supported: true
    },
    'endpoint-central-msp-cloud_pam360-onprem': {
        supported: true
    },
    'endpoint-central-msp-cloud_powerbi-cloud': {
        supported: false
    },
    'endpoint-central-msp-cloud_powerbi-onprem': {
        supported: false
    },
    'endpoint-central-msp-cloud_qualys-cloud': {
        supported: false
    },
    'endpoint-central-msp-cloud_rapid7-insightvm-cloud': {
        supported: false
    },
    'endpoint-central-msp-cloud_rapid7-insightvm-onprem': {
        supported: false
    },
    'endpoint-central-msp-cloud_servicedesk-plus-cloud': {
        supported: false
    },
    'endpoint-central-msp-cloud_servicedesk-plus-msp-cloud': {
        supported: true
    },
    'endpoint-central-msp-cloud_servicedesk-plus-msp-onprem': {
        supported: true
    },
    'endpoint-central-msp-cloud_servicedesk-plus-onprem': {
        supported: false
    },
    'endpoint-central-msp-cloud_servicenow-cloud': {
        supported: false
    },
    'endpoint-central-msp-cloud_servicenow-onprem': {
        supported: false
    },
    'endpoint-central-msp-cloud_splunk-cloud': {
        supported: false
    },
    'endpoint-central-msp-cloud_splunk-onprem': {
        supported: false
    },
    'endpoint-central-msp-cloud_syslog-siem-onprem': {
        supported: false
    },
    'endpoint-central-msp-cloud_tenable-sc-onprem': {
        supported: false
    },
    'endpoint-central-msp-cloud_tenable-vm-cloud': {
        supported: false
    },
    'endpoint-central-msp-cloud_zendesk-cloud': {
        supported: false
    },
    'endpoint-central-msp-cloud_zoho-flow-cloud': {
        supported: true
    },
    'endpoint-central-msp-onprem_analytics-plus-cloud': {
        supported: true
    },
    'endpoint-central-msp-onprem_analytics-plus-onprem': {
        supported: false
    },
    'endpoint-central-msp-onprem_asset-explorer-cloud': {
        supported: false
    },
    'endpoint-central-msp-onprem_asset-explorer-onprem': {
        supported: false
    },
    'endpoint-central-msp-onprem_connectwise-cloud': {
        supported: false
    },
    'endpoint-central-msp-onprem_crowdstrike-cloud': {
        supported: true
    },
    'endpoint-central-msp-onprem_freshdesk-cloud': {
        supported: false
    },
    'endpoint-central-msp-onprem_freshservice-cloud': {
        supported: false
    },
    'endpoint-central-msp-onprem_halopsa-cloud': {
        supported: false
    },
    'endpoint-central-msp-onprem_jira-cloud': {
        supported: false
    },
    'endpoint-central-msp-onprem_jira-onprem': {
        supported: false
    },
    'endpoint-central-msp-onprem_log360-onprem': {
        supported: false
    },
    'endpoint-central-msp-onprem_pam360-cloud': {
        supported: true
    },
    'endpoint-central-msp-onprem_pam360-onprem': {
        supported: true
    },
    'endpoint-central-msp-onprem_powerbi-cloud': {
        supported: false
    },
    'endpoint-central-msp-onprem_powerbi-onprem': {
        supported: false
    },
    'endpoint-central-msp-onprem_qualys-cloud': {
        supported: false
    },
    'endpoint-central-msp-onprem_rapid7-insightvm-cloud': {
        supported: false
    },
    'endpoint-central-msp-onprem_rapid7-insightvm-onprem': {
        supported: false
    },
    'endpoint-central-msp-onprem_servicedesk-plus-cloud': {
        supported: false
    },
    'endpoint-central-msp-onprem_servicedesk-plus-msp-cloud': {
        supported: true
    },
    'endpoint-central-msp-onprem_servicedesk-plus-msp-onprem': {
        supported: true
    },
    'endpoint-central-msp-onprem_servicedesk-plus-onprem': {
        supported: false
    },
    'endpoint-central-msp-onprem_servicenow-cloud': {
        supported: false
    },
    'endpoint-central-msp-onprem_servicenow-onprem': {
        supported: false
    },
    'endpoint-central-msp-onprem_splunk-cloud': {
        supported: false
    },
    'endpoint-central-msp-onprem_splunk-onprem': {
        supported: false
    },
    'endpoint-central-msp-onprem_syslog-siem-onprem': {
        supported: false
    },
    'endpoint-central-msp-onprem_tenable-sc-onprem': {
        supported: false
    },
    'endpoint-central-msp-onprem_tenable-vm-cloud': {
        supported: false
    },
    'endpoint-central-msp-onprem_zendesk-cloud': {
        supported: false
    },
    'endpoint-central-msp-onprem_zoho-flow-cloud': {
        supported: false
    },

    // ── Endpoint Central Integrations ──────────────────────────────────────
    'endpoint-central-onprem_analytics-plus-cloud': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'ec-op-ap-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'ec-op-ap-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'ec-op-ap-default-sync-3'
            },
            { 
                name: 'Optional data synchronization: Users, Groups, BIOS, CD ROM DRIVE, Monitor, Disk drives, Logical disk, Motherboard, Keyboard, Mouse, Physical memory',
                id: 'ec-op-ap-optional-sync-1'
            },
            { 
                name: 'Optional data synchronization: POTS modem, Processors, Serial port, Video controller, USB controller, Printers, Drivers, Share details, File details',
                id: 'ec-op-ap-optional-sync-2'
            },
            { 
                name: 'Optional data synchronization: User logon history, Scheduled tasks info, Software audit history, Hardware audit history, Computer and hardware mapping, Computer and group association, Custom groups and associated users',
                id: 'ec-op-ap-optional-sync-3'
            },
            { 
                name: 'Optional data synchronization: Trusted Platform Module',
                id: 'ec-op-ap-optional-sync-4'
            }
        ],
        documentation: [
            { title: 'EC On-Premise to Analytics Plus Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-analytics-cloud.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-analytics.html' },
            { title: 'Custom Reports Configuration', url: 'https://www.manageengine.com/products/desktop-central/custom-reports.html' },
            { title: 'Analytics Dashboard Guide', url: 'https://www.manageengine.com/products/desktop-central/analytics-dashboard.html' }
        ]
    },
    'endpoint-central-onprem_analytics-plus-onprem': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'ec-op-ap-op-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'ec-op-ap-op-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'ec-op-ap-op-default-sync-3'
            },
            { 
                name: 'Optional data synchronization: Users, Groups, BIOS, CD ROM DRIVE, Monitor, Disk drives, Logical disk, Motherboard, Keyboard, Mouse, Physical memory',
                id: 'ec-op-ap-op-optional-sync-1'
            },
            { 
                name: 'Optional data synchronization: POTS modem, Processors, Serial port, Video controller, USB controller, Printers, Drivers, Share details, File details',
                id: 'ec-op-ap-op-optional-sync-2'
            },
            { 
                name: 'Optional data synchronization: User logon history, Scheduled tasks info, Software audit history, Hardware audit history, Computer and hardware mapping, Computer and group association, Custom groups and associated users',
                id: 'ec-op-ap-op-optional-sync-3'
            },
            { 
                name: 'Optional data synchronization: Trusted Platform Module',
                id: 'ec-op-ap-op-optional-sync-4'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-analytics-onprem-integration.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-analytics.html' },
            { title: 'Custom Reports Configuration', url: 'https://www.manageengine.com/products/desktop-central/custom-reports.html' },
            { title: 'Analytics Dashboard Guide', url: 'https://www.manageengine.com/products/desktop-central/analytics-dashboard.html' }
        ]
    },
    
    // Endpoint Central + ServiceNow (Basic) Integrations,
    'endpoint-central-onprem_asset-explorer-cloud': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset sync from EC to AE',
                id: 'ec-op-ae-inventory-sync'
            },
            { 
                name: 'Auto-assign users',
                id: 'ec-op-ae-auto-assign'
            },
            { 
                name: 'Action to be performed on AE asset when the asset is removed from SOM in Endpoint Central (Beta)',
                id: 'ec-op-ae-asset-removal-beta'
            },
            { 
                name: 'Action to be performed on AE software, when the commercial software is removed from EC',
                id: 'ec-op-ae-software-removal'
            },
            { 
                name: 'Inventory alerts are created as AE tickets',
                id: 'ec-op-ae-inventory-alerts'
            },
            { 
                name: 'Trayicon requests are created as AE tickets',
                id: 'ec-op-ae-trayicon'
            }
        ],
        documentation: [
            { title: 'EC On-Premise to AE Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-ae-cloud.html' },
            { title: 'Auto-assign Configuration', url: 'https://www.manageengine.com/products/desktop-central/auto-assign-users.html' },
            { title: 'Alert Ticketing Setup', url: 'https://www.manageengine.com/products/desktop-central/alert-ticketing.html' }
        ]
    },
    'endpoint-central-onprem_asset-explorer-onprem': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset data sync',
                id: 'ec-op-ae-op-inventory-sync'
            },
            { 
                name: 'Auto-assign users',
                id: 'ec-op-ae-op-auto-assign'
            },
            { 
                name: 'Action to be performed on AE asset when the asset is removed from SOM in Endpoint Central',
                id: 'ec-op-ae-op-asset-removal'
            },
            { 
                name: 'User-defined templates can be deployed from AE tickets',
                id: 'ec-op-ae-op-deploy-templates'
            },
            { 
                name: 'User-defined software packages can be deployed from AE tickets',
                id: 'ec-op-ae-op-deploy-packages'
            },
            { 
                name: 'SSP requests are created as AE tickets and software will be automatically installed upon approval',
                id: 'ec-op-ae-op-ssp-auto-install'
            },
            { 
                name: 'Request for prohibited software are created as AE tickets',
                id: 'ec-op-ae-op-prohibited-software'
            },
            { 
                name: 'Inventory alerts are created as AE tickets',
                id: 'ec-op-ae-op-inventory-alerts'
            },
            { 
                name: 'Trayicon requests are created as AE tickets',
                id: 'ec-op-ae-op-trayicon'
            },
            { 
                name: 'Remote control assets from AE',
                id: 'ec-op-ae-op-remote-control'
            },
            { 
                name: 'Perform tools action from AE',
                id: 'ec-op-ae-op-tools-action'
            },
            { 
                name: 'Load Endpoint Central as iFrame within AE',
                id: 'ec-op-ae-op-iframe'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-ae-onprem-integration.html' },
            { title: 'Template Deployment Setup', url: 'https://www.manageengine.com/products/desktop-central/template-deployment.html' },
            { title: 'SSP Auto-Install Configuration', url: 'https://www.manageengine.com/products/desktop-central/ssp-auto-install.html' },
            { title: 'Prohibited Software Management', url: 'https://www.manageengine.com/products/desktop-central/prohibited-software.html' }
        ]
    },
    
    // Endpoint Central + Event Log Analyzer / Log 360 Integrations,
    'endpoint-central-onprem_connectwise-cloud': {
        supported: true
    },
    'endpoint-central-onprem_crowdstrike-cloud': {
        supported: true
    },
    'endpoint-central-onprem_freshdesk-cloud': {
        supported: true
    },
    'endpoint-central-onprem_freshservice-cloud': {
        supported: true,
        features: [
            { 
                name: 'Deploy software packages from FreshService tickets',
                id: 'ec-op-freshservice-deploy-software'
            },
            { 
                name: 'Remote control assets from FreshService tickets',
                id: 'ec-op-freshservice-remote-control'
            },
            { 
                name: 'System manager tools of a machine can be remotely accessed from FreshService tickets',
                id: 'ec-op-freshservice-system-tools'
            },
            { 
                name: 'Remote power options such as lock, hibernate, shutdown, Wake on LAN from FreshService tickets',
                id: 'ec-op-freshservice-power-options'
            }
        ],
        documentation: [
            { title: 'EC On-Premise to Freshservice Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-freshservice-cloud.html' },
            { title: 'Software Deployment from Tickets', url: 'https://www.manageengine.com/products/desktop-central/freshservice-software-deploy.html' },
            { title: 'Remote Control Configuration', url: 'https://www.manageengine.com/products/desktop-central/freshservice-remote-control.html' },
            { title: 'Freshservice API Documentation', url: 'https://api.freshservice.com/' }
        ]
    },
    
    // Endpoint Central + PowerBI Integrations,
    'endpoint-central-onprem_halopsa-cloud': {
        supported: true
    },
    'endpoint-central-onprem_jira-cloud': {
        supported: true,
        features: [
            { 
                name: 'Load iFrame from Jira',
                id: 'ec-op-jira-iframe'
            },
            { 
                name: 'Remote control asset from Jira',
                id: 'ec-op-jira-remote-control'
            },
            { 
                name: 'Asset data are pulled into Jira from EC',
                id: 'ec-op-jira-asset-data'
            },
            { 
                name: 'Perform tools action from Jira',
                id: 'ec-op-jira-tools-action'
            }
        ],
        documentation: [
            { title: 'EC On-Premise to Jira Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-jira-cloud.html' },
            { title: 'iFrame Configuration', url: 'https://www.manageengine.com/products/desktop-central/jira-iframe-setup.html' },
            { title: 'Remote Control from Jira', url: 'https://www.manageengine.com/products/desktop-central/jira-remote-control.html' },
            { title: 'Jira API Documentation', url: 'https://developer.atlassian.com/cloud/jira/' }
        ]
    },
    'endpoint-central-onprem_jira-onprem': {
        supported: true,
        features: [
            { 
                name: 'Load iFrame from Jira',
                id: 'ec-op-jira-op-iframe'
            },
            { 
                name: 'Remote control asset from Jira',
                id: 'ec-op-jira-op-remote-control'
            },
            { 
                name: 'Asset data are pulled into Jira from EC',
                id: 'ec-op-jira-op-asset-data'
            },
            { 
                name: 'Perform tools action from Jira',
                id: 'ec-op-jira-op-tools-action'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-jira-onprem-integration.html' },
            { title: 'iFrame Configuration', url: 'https://www.manageengine.com/products/desktop-central/jira-iframe-setup.html' },
            { title: 'Remote Control from Jira', url: 'https://www.manageengine.com/products/desktop-central/jira-remote-control.html' },
            { title: 'Jira Server Documentation', url: 'https://confluence.atlassian.com/jiraserver/' }
        ]
    },
    
    // Endpoint Central + Zendesk Integrations,
    'endpoint-central-onprem_log360-onprem': {
        supported: true,
        features: [
            { 
                name: 'Patch data are pulled into ELA from EC - Approve and install patches directly through incident workflows',
                id: 'ec-op-ela-op-patch-data'
            },
            { 
                name: 'Vulnerability and system misconfiguration data are pulled into ELA from EC - Identify devices with vulnerabilities or misconfigurations using custom correlation rules and alerts',
                id: 'ec-op-ela-op-vulnerability-data'
            },
            { 
                name: 'Comparators can be created in ELA and custom correlation rules and custom alert profiles can be created for those comparators',
                id: 'ec-op-ela-op-comparators'
            },
            { 
                name: 'Audit logs in Action log viewer will be posted from EC to ELA',
                id: 'ec-op-ela-op-audit-logs'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-ela-onprem-integration.html' },
            { title: 'Audit Log Configuration', url: 'https://www.manageengine.com/products/desktop-central/audit-logs-ela.html' },
            { title: 'Patch Workflow Configuration', url: 'https://www.manageengine.com/products/desktop-central/patch-workflow-ela.html' },
            { title: 'Custom Correlation Rules', url: 'https://www.manageengine.com/products/desktop-central/correlation-rules.html' }
        ]
    },
    
    // Endpoint Central + Analytics Plus Integrations,
    'endpoint-central-onprem_pam360-cloud': {
        supported: true
    },
    'endpoint-central-onprem_pam360-onprem': {
        supported: true
    },
    'endpoint-central-onprem_powerbi-cloud': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'ec-op-powerbi-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'ec-op-powerbi-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'ec-op-powerbi-default-sync-3'
            }
        ],
        documentation: [
            { title: 'EC On-Premise to PowerBI Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-powerbi-cloud.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-powerbi.html' },
            { title: 'PowerBI Dashboard Configuration', url: 'https://www.manageengine.com/products/desktop-central/powerbi-dashboard.html' },
            { title: 'PowerBI Documentation', url: 'https://docs.microsoft.com/en-us/power-bi/' }
        ]
    },
    'endpoint-central-onprem_powerbi-onprem': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'ec-op-powerbi-op-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'ec-op-powerbi-op-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'ec-op-powerbi-op-default-sync-3'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-powerbi-onprem-integration.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-powerbi.html' },
            { title: 'PowerBI Report Server Setup', url: 'https://www.manageengine.com/products/desktop-central/powerbi-report-server.html' },
            { title: 'PowerBI Documentation', url: 'https://docs.microsoft.com/en-us/power-bi/' }
        ]
    },
    
    // Endpoint Central + IBM QRadar Integrations,
    'endpoint-central-onprem_qualys-cloud': {
        supported: false
    },
    'endpoint-central-onprem_rapid7-insightvm-cloud': {
        supported: false
    },
    'endpoint-central-onprem_rapid7-insightvm-onprem': {
        supported: false
    },
    'endpoint-central-onprem_servicedesk-plus-cloud': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset sync from EC to SDP',
                id: 'ec-op-sdp-inventory-sync'
            },
            { 
                name: 'Auto-assign users',
                id: 'ec-op-sdp-auto-assign'
            },
            { 
                name: 'Action to be performed on SDP asset when the asset is removed from SOM in Endpoint Central ',
                id: 'ec-op-sdp-asset-removal-beta'
            },
            { 
                name: 'Action to be performed on SDP software, when the commercial software is removed from EC',
                id: 'ec-op-sdp-software-removal'
            },
            { 
                name: 'Inventory alerts are created as SDP tickets',
                id: 'ec-op-sdp-inventory-alerts'
            },
            { 
                name: 'Trayicon requests are created as SDP tickets',
                id: 'ec-op-sdp-trayicon'
            }
        ],
        documentation: [
            { title: 'EC On-Premise to SDP Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/help/configuring_desktop_central/integrating_with_servicedesk_plus_on_demand.html' },
 //           { title: 'Auto-assign Configuration', url: 'https://www.manageengine.com/products/desktop-central/auto-assign-users.html' },
 //           { title: 'Alert Ticketing Setup', url: 'https://www.manageengine.com/products/desktop-central/alert-ticketing.html' }
        ]
    },
    'endpoint-central-onprem_servicedesk-plus-msp-cloud': {
        supported: false
    },
    'endpoint-central-onprem_servicedesk-plus-msp-onprem': {
        supported: false
    },
    'endpoint-central-onprem_servicedesk-plus-onprem': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset data sync',
                id: 'ec-op-sdp-op-inventory-sync'
            },
            { 
                name: 'Auto-assign users for workstations',
                id: 'ec-op-sdp-op-auto-assign'
            },
            { 
                name: 'Action to be performed on SDP asset when the asset is removed from SOM in Endpoint Central',
                id: 'ec-op-sdp-op-asset-removal'
            },
            {
                name: 'Mobile devices sync',
                id: 'ec-op-sdp-op-mobile-device-sync'
            },
            {
                name: 'Auto-assign owners for mobile devices',
                id: 'ec-op-sdp-op-auto-assign-mobile'
            },
            {
                name: 'Action to be performed on SDP asset when the mobile device is removed/deprovisioned from EC MDM',
                id: 'ec-op-sdp-op-mobile-device-removal-action'
            },
            { 
                name: 'User-defined templates can be deployed from SDP tickets',
                id: 'ec-op-sdp-op-deploy-templates'
            },
            { 
                name: 'User-defined software packages can be deployed from SDP tickets',
                id: 'ec-op-sdp-op-deploy-packages'
            },
            { 
                name: 'SSP requests are created as SDP tickets and software will be automatically installed upon approval',
                id: 'ec-op-sdp-op-ssp-auto-install'
            },
            { 
                name: 'Request for prohibited software are created as SDP tickets',
                id: 'ec-op-sdp-op-prohibited-software'
            },
            { 
                name: 'Inventory alerts are created as SDP tickets',
                id: 'ec-op-sdp-op-inventory-alerts'
            },
            { 
                name: 'Trayicon requests are created as SDP tickets',
                id: 'ec-op-sdp-op-trayicon'
            },
            { 
                name: 'Remote control assets from SDP',
                id: 'ec-op-sdp-op-remote-control'
            },
            {
                name: 'Worklogs, resolutions and notes can be added to SDP ticket after remote control',
                id: 'ec-op-sdp-op-worklog'
            },
            { 
                name: 'Perform tools action from SDP',
                id: 'ec-op-sdp-op-tools-action'
            },
            { 
                name: 'Load Endpoint Central as iFrame within SDP',
                id: 'ec-op-sdp-op-iframe'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/help/configuring_desktop_central/dc-sdp-integration-steps.html' },
            { title: 'Benefits of integration', url: 'https://www.manageengine.com/products/desktop-central/help/configuring_desktop_central/dc_sdp_integration.html' },
            { title: 'Features of integration', url: 'https://www.manageengine.com/products/desktop-central/help/configuring_desktop_central/dc-sdp-integration-features.html' }
//            { title: 'Prohibited Software Management', url: 'https://www.manageengine.com/products/desktop-central/prohibited-software.html' }
        ]
    },
    
    // Endpoint Central + Asset Explorer Integrations,
    'endpoint-central-onprem_servicenow-cloud': {
        supported: true,
        features: [
            { 
                name: 'Asset data post from EC to ServiceNow',
                id: 'ec-op-snow-basic-asset-post'
            },
            { 
                name: 'Choose whether to remove an asset from ServiceNow if it is removed from Endpoint Central SoM',
                id: 'ec-op-snow-basic-asset-removal'
            },
            { 
                name: 'Assign last logged as the asset\'s owner in ServiceNow',
                id: 'ec-op-snow-basic-owner-assign'
            }
        ],
        documentation: [
            { title: 'EC On-Premise to ServiceNow Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-servicenow-cloud.html' },
            { title: 'Asset Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/servicenow-asset-sync.html' },
            { title: 'CMDB Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/servicenow-cmdb.html' },
            { title: 'ServiceNow API Guide', url: 'https://docs.servicenow.com/' }
        ]
    },
    'endpoint-central-onprem_servicenow-onprem': {
        supported: true,
        features: [
            { 
                name: 'Asset data post from EC to ServiceNow',
                id: 'ec-op-snow-basic-op-asset-post'
            },
            { 
                name: 'Choose whether to remove an asset from ServiceNow if it is removed from Endpoint Central SoM',
                id: 'ec-op-snow-basic-op-asset-removal'
            },
            { 
                name: 'Assign last logged as the asset\'s owner in ServiceNow',
                id: 'ec-op-snow-basic-op-owner-assign'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-servicenow-onprem-integration.html' },
            { title: 'Asset Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/servicenow-asset-sync.html' },
            { title: 'CMDB Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/servicenow-cmdb.html' },
            { title: 'ServiceNow API Guide', url: 'https://docs.servicenow.com/' }
        ]
    },
    
    // Endpoint Central + ServiceNow SGC Integrations,
    'endpoint-central-onprem_splunk-cloud': {
        supported: true,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from EC to Splunk',
                id: 'ec-op-splunk-audit-logs'
            },
            { 
                name: 'Vulnerability data is synced from EC to Splunk',
                id: 'ec-op-splunk-vuln-data'
            }
        ],
        documentation: [
            { title: 'EC On-Premise to Splunk Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-splunk-cloud.html' },
            { title: 'Audit Log Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/splunk-audit-sync.html' },
            { title: 'Vulnerability Data Export Setup', url: 'https://www.manageengine.com/products/desktop-central/splunk-vulnerability-sync.html' },
            { title: 'Splunk Documentation', url: 'https://docs.splunk.com/' }
        ]
    },
    'endpoint-central-onprem_splunk-onprem': {
        supported: true,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from EC to Splunk',
                id: 'ec-op-splunk-op-audit-logs'
            },
            { 
                name: 'Vulnerability data is synced from EC to Splunk',
                id: 'ec-op-splunk-op-vuln-data'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-splunk-onprem-integration.html' },
            { title: 'Syslog Configuration for Splunk', url: 'https://www.manageengine.com/products/desktop-central/splunk-syslog-setup.html' },
            { title: 'Vulnerability Data Export Setup', url: 'https://www.manageengine.com/products/desktop-central/splunk-vulnerability-sync.html' },
            { title: 'Splunk Enterprise Documentation', url: 'https://docs.splunk.com/Documentation/Splunk' }
        ]
    },
    
    // Endpoint Central + Syslog / SIEM Integrations (On-Prem only),
    'endpoint-central-onprem_syslog-siem-cloud': {
        supported: false,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from EC to Syslog/SIEM',
                id: 'ec-op-syslog-cloud-audit-logs'
            }
        ],
        documentation: [
            { title: 'EC-Syslog Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/syslog-integration.html' },
            { title: 'Audit Log Forwarding Setup', url: 'https://www.manageengine.com/products/desktop-central/audit-log-forwarding.html' },
            { title: 'Syslog Configuration', url: 'https://www.manageengine.com/products/desktop-central/syslog-setup.html' },
            { title: 'SIEM Integration Best Practices', url: 'https://www.manageengine.com/products/desktop-central/siem-best-practices.html' }
        ]
    },
    'endpoint-central-onprem_syslog-siem-onprem': {
        supported: true,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from EC to Syslog/SIEM',
                id: 'ec-op-syslog-op-audit-logs'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Syslog Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-syslog-onprem-integration.html' },
            { title: 'Audit Log Forwarding Setup', url: 'https://www.manageengine.com/products/desktop-central/audit-log-forwarding.html' },
            { title: 'Syslog Configuration', url: 'https://www.manageengine.com/products/desktop-central/syslog-setup.html' },
            { title: 'SIEM Integration Best Practices', url: 'https://www.manageengine.com/products/desktop-central/siem-best-practices.html' }
        ]
    },

    // ════════════════════════════════════════════════════════════
    // Patch Manager Plus (PMP) Integrations
    // ════════════════════════════════════════════════════════════


    // Patch Manager Plus + ServiceDesk Plus Integrations,
    'endpoint-central-onprem_tenable-sc-onprem': {
        supported: false
    },
    'endpoint-central-onprem_tenable-vm-cloud': {
        supported: false
    },
    'endpoint-central-onprem_zendesk-cloud': {
        supported: true,
        features: [
            { 
                name: 'Deploy software packages from Zendesk tickets',
                id: 'ec-op-zendesk-deploy-software'
            },
            { 
                name: 'Remote control assets from Zendesk tickets',
                id: 'ec-op-zendesk-remote-control'
            },
            { 
                name: 'System manager tools of a machine can be remotely accessed from Zendesk tickets',
                id: 'ec-op-zendesk-system-tools'
            },
            { 
                name: 'Remote power options such as lock, hibernate, shutdown, Wake on LAN from Zendesk tickets',
                id: 'ec-op-zendesk-power-options'
            }
        ],
        documentation: [
            { title: 'EC On-Premise to Zendesk Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-zendesk-cloud.html' },
            { title: 'Software Deployment from Tickets', url: 'https://www.manageengine.com/products/desktop-central/zendesk-software-deploy.html' },
            { title: 'Remote Control Configuration', url: 'https://www.manageengine.com/products/desktop-central/zendesk-remote-control.html' },
            { title: 'Zendesk API Documentation', url: 'https://developer.zendesk.com/api-reference/' }
        ]
    },
    
    // Endpoint Central + Freshservice Integrations,
    'endpoint-central-onprem_zoho-flow-cloud': {
        supported: false
    },

    // ── Endpoint Dlp Integrations ──────────────────────────────────────
    'endpoint-dlp-onprem_analytics-plus-cloud': {
        supported: false
    },
    'endpoint-dlp-onprem_analytics-plus-onprem': {
        supported: false
    },
    'endpoint-dlp-onprem_asset-explorer-cloud': {
        supported: false
    },
    'endpoint-dlp-onprem_asset-explorer-onprem': {
        supported: false
    },
    'endpoint-dlp-onprem_connectwise-cloud': {
        supported: false
    },
    'endpoint-dlp-onprem_crowdstrike-cloud': {
        supported: false
    },
    'endpoint-dlp-onprem_freshdesk-cloud': {
        supported: false
    },
    'endpoint-dlp-onprem_freshservice-cloud': {
        supported: false
    },
    'endpoint-dlp-onprem_halopsa-cloud': {
        supported: false
    },
    'endpoint-dlp-onprem_jira-cloud': {
        supported: false
    },
    'endpoint-dlp-onprem_jira-onprem': {
        supported: false
    },
    'endpoint-dlp-onprem_log360-onprem': {
        supported: true
    },
    'endpoint-dlp-onprem_pam360-cloud': {
        supported: false
    },
    'endpoint-dlp-onprem_pam360-onprem': {
        supported: false
    },
    'endpoint-dlp-onprem_powerbi-cloud': {
        supported: false
    },
    'endpoint-dlp-onprem_powerbi-onprem': {
        supported: false
    },
    'endpoint-dlp-onprem_qualys-cloud': {
        supported: false
    },
    'endpoint-dlp-onprem_rapid7-insightvm-cloud': {
        supported: false
    },
    'endpoint-dlp-onprem_rapid7-insightvm-onprem': {
        supported: false
    },
    'endpoint-dlp-onprem_servicedesk-plus-cloud': {
        supported: false
    },
    'endpoint-dlp-onprem_servicedesk-plus-msp-cloud': {
        supported: false
    },
    'endpoint-dlp-onprem_servicedesk-plus-msp-onprem': {
        supported: false
    },
    'endpoint-dlp-onprem_servicedesk-plus-onprem': {
        supported: false
    },
    'endpoint-dlp-onprem_servicenow-cloud': {
        supported: false
    },
    'endpoint-dlp-onprem_servicenow-onprem': {
        supported: false
    },
    'endpoint-dlp-onprem_splunk-cloud': {
        supported: false
    },
    'endpoint-dlp-onprem_splunk-onprem': {
        supported: false
    },
    'endpoint-dlp-onprem_syslog-siem-onprem': {
        supported: true
    },
    'endpoint-dlp-onprem_tenable-sc-onprem': {
        supported: false
    },
    'endpoint-dlp-onprem_tenable-vm-cloud': {
        supported: false
    },
    'endpoint-dlp-onprem_zendesk-cloud': {
        supported: false
    },
    'endpoint-dlp-onprem_zoho-flow-cloud': {
        supported: false
    },

    // ── Maa Integrations ──────────────────────────────────────
    'maa-cloud_analytics-plus-cloud': {
        supported: false
    },
    'maa-cloud_analytics-plus-onprem': {
        supported: false
    },
    'maa-cloud_asset-explorer-cloud': {
        supported: false
    },
    'maa-cloud_asset-explorer-onprem': {
        supported: false
    },
    'maa-cloud_connectwise-cloud': {
        supported: false
    },
    'maa-cloud_crowdstrike-cloud': {
        supported: false
    },
    'maa-cloud_freshdesk-cloud': {
        supported: false
    },
    'maa-cloud_freshservice-cloud': {
        supported: false
    },
    'maa-cloud_halopsa-cloud': {
        supported: false
    },
    'maa-cloud_jira-cloud': {
        supported: false
    },
    'maa-cloud_jira-onprem': {
        supported: false
    },
    'maa-cloud_log360-onprem': {
        supported: false
    },
    'maa-cloud_pam360-cloud': {
        supported: false
    },
    'maa-cloud_pam360-onprem': {
        supported: false
    },
    'maa-cloud_powerbi-cloud': {
        supported: false
    },
    'maa-cloud_powerbi-onprem': {
        supported: false
    },
    'maa-cloud_qualys-cloud': {
        supported: false
    },
    'maa-cloud_rapid7-insightvm-cloud': {
        supported: false
    },
    'maa-cloud_rapid7-insightvm-onprem': {
        supported: false
    },
    'maa-cloud_servicedesk-plus-cloud': {
        supported: false
    },
    'maa-cloud_servicedesk-plus-msp-cloud': {
        supported: false
    },
    'maa-cloud_servicedesk-plus-msp-onprem': {
        supported: false
    },
    'maa-cloud_servicedesk-plus-onprem': {
        supported: false
    },
    'maa-cloud_servicenow-cloud': {
        supported: false
    },
    'maa-cloud_servicenow-onprem': {
        supported: false
    },
    'maa-cloud_splunk-cloud': {
        supported: false
    },
    'maa-cloud_splunk-onprem': {
        supported: false
    },
    'maa-cloud_syslog-siem-onprem': {
        supported: false
    },
    'maa-cloud_tenable-sc-onprem': {
        supported: false
    },
    'maa-cloud_tenable-vm-cloud': {
        supported: false
    },
    'maa-cloud_zendesk-cloud': {
        supported: false
    },
    'maa-cloud_zoho-flow-cloud': {
        supported: false
    },

    // ── Mobile Device Manager Integrations ──────────────────────────────────────
    'mobile-device-manager-cloud_analytics-plus-cloud': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'mdm-ap-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'mdm-ap-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'mdm-ap-default-sync-3'
            },
            { 
                name: 'Optional data synchronization: Users, Groups, BIOS, CD ROM DRIVE, Monitor, Disk drives, Logical disk, Motherboard, Keyboard, Mouse, Physical memory',
                id: 'mdm-ap-optional-sync-1'
            },
            { 
                name: 'Optional data synchronization: POTS modem, Processors, Serial port, Video controller, USB controller, Printers, Drivers, Share details, File details',
                id: 'mdm-ap-optional-sync-2'
            },
            { 
                name: 'Optional data synchronization: User logon history, Scheduled tasks info, Software audit history, Hardware audit history, Computer and hardware mapping, Computer and group association, Custom groups and associated users',
                id: 'mdm-ap-optional-sync-3'
            },
            { 
                name: 'Optional data synchronization: Trusted Platform Module',
                id: 'mdm-ap-optional-sync-4'
            }
        ],
        documentation: [
            { title: 'MDM-Analytics Plus Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/analytics-plus-integration.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-analytics.html' },
            { title: 'Custom Reports Configuration', url: 'https://www.manageengine.com/products/desktop-central/custom-reports.html' },
            { title: 'Analytics Dashboard Guide', url: 'https://www.manageengine.com/products/desktop-central/analytics-dashboard.html' }
        ]
    },
    'mobile-device-manager-cloud_asset-explorer-cloud': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset sync from MDM to AE',
                id: 'mdm-ae-inventory-sync'
            },
            { 
                name: 'Remote control asset from AE tickets',
                id: 'mdm-ae-remote-control'
            },
            { 
                name: 'Deploy software from AE tickets',
                id: 'mdm-ae-deploy-software'
            },
            { 
                name: 'Perform tools action from AE tickets',
                id: 'mdm-ae-tools-action'
            },
            { 
                name: 'Loading iFrame of MDM within AE',
                id: 'mdm-ae-iframe'
            },
            { 
                name: 'Action to be performed on AE asset when the asset is removed from SOM in Mobile Device Manager (Beta)',
                id: 'mdm-ae-asset-removal-beta'
            },
            { 
                name: 'Trayicon requests are created as AE tickets (Beta)',
                id: 'mdm-ae-trayicon-beta'
            },
            { 
                name: 'SSP requests are created as AE tickets (Beta)',
                id: 'mdm-ae-ssp-beta'
            }
        ],
        documentation: [
            { title: 'MDM-AE Cloud Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ae-cloud-integration.html' },
            { title: 'Asset Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/asset-sync-setup.html' },
            { title: 'Remote Control Setup', url: 'https://www.manageengine.com/products/desktop-central/remote-control-ae.html' },
            { title: 'iFrame Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/iframe-integration.html' }
        ]
    },
    'mobile-device-manager-cloud_asset-explorer-onprem': {
        supported: true,
        betaRelease: true,
        features: [
            { 
                name: 'Inventory asset sync from MDM to AE',
                id: 'mdm-ae-op-inventory-sync'
            }
        ],
        documentation: [
            { title: 'MDM Cloud to AE On-Premise Integration', url: 'https://www.manageengine.com/products/desktop-central/ae-onprem-integration.html' },
            { title: 'Beta Release Notes', url: 'https://www.manageengine.com/products/desktop-central/beta-release-notes.html' },
            { title: 'Hybrid Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/hybrid-setup.html' }
        ]
    },
    'mobile-device-manager-cloud_connectwise-cloud': {
        supported: false
    },
    'mobile-device-manager-cloud_crowdstrike-cloud': {
        supported: false
    },
    'mobile-device-manager-cloud_freshdesk-cloud': {
        supported: false
    },
    'mobile-device-manager-cloud_freshservice-cloud': {
        supported: false,
        features: [
            { 
                name: 'Deploy software packages from FreshService tickets',
                id: 'mdm-freshservice-deploy-software'
            },
            { 
                name: 'Remote control assets from FreshService tickets',
                id: 'mdm-freshservice-remote-control'
            },
            { 
                name: 'System manager tools of a machine can be remotely accessed from FreshService tickets',
                id: 'mdm-freshservice-system-tools'
            },
            { 
                name: 'Remote power options such as lock, hibernate, shutdown, Wake on LAN from FreshService tickets',
                id: 'mdm-freshservice-power-options'
            }
        ],
        documentation: [
            { title: 'MDM-Freshservice Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/freshservice-integration.html' },
            { title: 'Software Deployment from Tickets', url: 'https://www.manageengine.com/products/desktop-central/freshservice-software-deploy.html' },
            { title: 'Remote Control Configuration', url: 'https://www.manageengine.com/products/desktop-central/freshservice-remote-control.html' },
            { title: 'Freshservice API Documentation', url: 'https://api.freshservice.com/' }
        ]
    },
    'mobile-device-manager-cloud_halopsa-cloud': {
        supported: false
    },
    'mobile-device-manager-cloud_jira-cloud': {
        supported: false,
        features: [
            { 
                name: 'Load iFrame from Jira',
                id: 'mdm-jira-iframe'
            },
            { 
                name: 'Remote control asset from Jira',
                id: 'mdm-jira-remote-control'
            },
            { 
                name: 'Asset data are pulled into Jira from EC',
                id: 'mdm-jira-asset-data'
            },
            { 
                name: 'Perform tools action from Jira',
                id: 'mdm-jira-tools-action'
            }
        ],
        documentation: [
            { title: 'MDM-Jira Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/jira-integration.html' },
            { title: 'iFrame Configuration', url: 'https://www.manageengine.com/products/desktop-central/jira-iframe-setup.html' },
            { title: 'Remote Control from Jira', url: 'https://www.manageengine.com/products/desktop-central/jira-remote-control.html' },
            { title: 'Jira API Documentation', url: 'https://developer.atlassian.com/cloud/jira/' }
        ]
    },
    'mobile-device-manager-cloud_log360-onprem': {
        supported: false,
        features: [
            { 
                name: 'Patch data are pulled into ELA from MDM - Approve and install patches directly through incident workflows',
                id: 'mdm-ela-patch-data'
            },
            { 
                name: 'Vulnerability and system misconfiguration data are pulled into ELA from MDM - Identify devices with vulnerabilities or misconfigurations using custom correlation rules and alerts',
                id: 'mdm-ela-vulnerability-data'
            },
            { 
                name: 'Comparators can be created in ELA and custom correlation rules and custom alert profiles can be created for those comparators',
                id: 'mdm-ela-comparators'
            }
        ],
        documentation: [
            { title: 'MDM-ELA Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ela-integration.html' },
            { title: 'Patch Workflow Configuration', url: 'https://www.manageengine.com/products/desktop-central/patch-workflow-ela.html' },
            { title: 'Custom Correlation Rules', url: 'https://www.manageengine.com/products/desktop-central/correlation-rules.html' },
            { title: 'Alert Profile Setup', url: 'https://www.manageengine.com/products/desktop-central/alert-profiles.html' }
        ]
    },
    'mobile-device-manager-cloud_pam360-cloud': {
        supported: false
    },
    'mobile-device-manager-cloud_pam360-onprem': {
        supported: false
    },
    'mobile-device-manager-cloud_powerbi-cloud': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'mdm-powerbi-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'mdm-powerbi-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'mdm-powerbi-default-sync-3'
            }
        ],
        documentation: [
            { title: 'MDM-PowerBI Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/powerbi-integration.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-powerbi.html' },
            { title: 'PowerBI Dashboard Configuration', url: 'https://www.manageengine.com/products/desktop-central/powerbi-dashboard.html' },
            { title: 'PowerBI Documentation', url: 'https://docs.microsoft.com/en-us/power-bi/' }
        ]
    },
    'mobile-device-manager-cloud_powerbi-onprem': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'mdm-powerbi-op-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'mdm-powerbi-op-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'mdm-powerbi-op-default-sync-3'
            }
        ],
        documentation: [
            { title: 'MDM Cloud to PowerBI On-Premise Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-cloud-powerbi-onprem.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-powerbi.html' },
            { title: 'PowerBI Report Server Setup', url: 'https://www.manageengine.com/products/desktop-central/powerbi-report-server.html' },
            { title: 'PowerBI Documentation', url: 'https://docs.microsoft.com/en-us/power-bi/' }
        ]
    },
    'mobile-device-manager-cloud_qualys-cloud': {
        supported: false
    },
    'mobile-device-manager-cloud_rapid7-insightvm-cloud': {
        supported: false
    },
    'mobile-device-manager-cloud_rapid7-insightvm-onprem': {
        supported: false
    },
    'mobile-device-manager-cloud_servicedesk-plus-cloud': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset sync from MDM to SDP',
                id: 'mdm-sdp-inventory-sync'
            },
            // { 
            //     name: 'Remote control asset from SDP tickets',
            //     id: 'mdm-sdp-remote-control'
            // },
            // { 
            //     name: 'Deploy software from SDP tickets',
            //     id: 'mdm-sdp-deploy-software'
            // },
            // { 
            //     name: 'Perform tools action from SDP tickets',
            //     id: 'mdm-sdp-tools-action'
            // },
            // { 
            //     name: 'Loading iFrame of MDM within SDP',
            //     id: 'mdm-sdp-iframe'
            // },
            { 
                name: 'Action to be performed on SDP asset when the device is removed from Mobile Device Manager ',
                id: 'mdm-sdp-asset-removal'
            },
            // { 
            //     name: 'Trayicon requests are created as SDP tickets (Beta)',
            //     id: 'mdm-sdp-trayicon-beta'
            // },
            // { 
            //     name: 'SSP requests are created as SDP tickets (Beta)',
            //     id: 'mdm-sdp-ssp-beta'
            // }
        ],
        documentation: [
            { title: 'MDM-SDP Cloud Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/help/configuring_desktop_central/integrating-with-servicedesk-plus-cloud.html' },
            { title: 'Configuring EC extension for SDP Cloud', url: 'https://help.sdpondemand.com/endpoint-central-extension' },
            { title: 'Troubleshooting errors while enabling integration', url: 'https://www.manageengine.com/products/desktop-central/kb/sdp-on-demand.html' },
            { title: 'Troubleshooting asset sync between ECOD-SDPOD', url: 'https://zask.pali.io/zask/EMSTechAsk/questions/8639642606' }
        ]
    },
    'mobile-device-manager-cloud_servicedesk-plus-msp-cloud': {
        supported: false
    },
    'mobile-device-manager-cloud_servicedesk-plus-msp-onprem': {
        supported: false
    },
    'mobile-device-manager-cloud_servicedesk-plus-onprem': {
        supported: true,
        betaRelease: true,
        features: [
            { 
                name: 'Inventory asset sync from MDM to SDP',
                id: 'mdm-sdp-op-inventory-sync'
            }
        ],
        documentation: [
            { title: 'MDM Cloud to SDP On-Premise Integration', url: 'https://www.manageengine.com/products/desktop-central/sdp-onprem-integration.html' },
            { title: 'Beta Release Notes', url: 'https://www.manageengine.com/products/desktop-central/beta-release-notes.html' },
            { title: 'Hybrid Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/hybrid-setup.html' }
        ]
    },
    'mobile-device-manager-cloud_servicenow-cloud': {
        supported: false,
        features: [
            { 
                name: 'Asset data post from MDM to ServiceNow',
                id: 'mdm-snow-basic-asset-post'
            },
            { 
                name: 'Choose whether to remove an asset from ServiceNow if it is removed from Mobile Device Manager SoM',
                id: 'mdm-snow-basic-asset-removal'
            },
            { 
                name: 'Assign last logged as the asset\'s owner in ServiceNow',
                id: 'mdm-snow-basic-owner-assign'
            }
        ],
        documentation: [
            { title: 'MDM-ServiceNow Basic Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/servicenow-integration.html' },
            { title: 'Asset Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/servicenow-asset-sync.html' },
            { title: 'CMDB Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/servicenow-cmdb.html' },
            { title: 'ServiceNow API Guide', url: 'https://docs.servicenow.com/' }
        ]
    },
    'mobile-device-manager-cloud_servicenow-onprem': {
        supported: false
    },
    'mobile-device-manager-cloud_splunk-cloud': {
        supported: false,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from MDM to Splunk',
                id: 'mdm-splunk-audit-logs'
            },
            { 
                name: 'Vulnerability data is synced from MDM to Splunk',
                id: 'mdm-splunk-vuln-data'
            }
        ],
        documentation: [
            { title: 'MDM-Splunk Cloud Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/splunk-cloud-integration.html' },
            { title: 'Audit Log Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/splunk-audit-sync.html' },
            { title: 'Vulnerability Data Export Setup', url: 'https://www.manageengine.com/products/desktop-central/splunk-vulnerability-sync.html' },
            { title: 'Splunk Documentation', url: 'https://docs.splunk.com/' }
        ]
    },
    'mobile-device-manager-cloud_splunk-onprem': {
        supported: false,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from MDM to Splunk',
                id: 'mdm-splunk-op-audit-logs'
            },
            { 
                name: 'Vulnerability data is synced from MDM to Splunk',
                id: 'mdm-splunk-op-vuln-data'
            }
        ],
        documentation: [
            { title: 'MDM Cloud to Splunk On-Premise Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-cloud-splunk-onprem.html' },
            { title: 'Audit Log Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/splunk-audit-sync.html' },
            { title: 'Vulnerability Data Export Setup', url: 'https://www.manageengine.com/products/desktop-central/splunk-vulnerability-sync.html' },
            { title: 'Splunk Enterprise Documentation', url: 'https://docs.splunk.com/Documentation/Splunk' }
        ]
    },
    'mobile-device-manager-cloud_tenable-sc-onprem': {
        supported: false
    },
    'mobile-device-manager-cloud_tenable-vm-cloud': {
        supported: false
    },
    'mobile-device-manager-cloud_zendesk-cloud': {
        supported: false,
        features: [
            { 
                name: 'Deploy software packages from Zendesk tickets',
                id: 'mdm-zendesk-deploy-software'
            },
            { 
                name: 'Remote control assets from Zendesk tickets',
                id: 'mdm-zendesk-remote-control'
            },
            { 
                name: 'System manager tools of a machine can be remotely accessed from Zendesk tickets',
                id: 'mdm-zendesk-system-tools'
            },
            { 
                name: 'Remote power options such as lock, hibernate, shutdown, Wake on LAN from Zendesk tickets',
                id: 'mdm-zendesk-power-options'
            }
        ],
        documentation: [
            { title: 'MDM-Zendesk Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/zendesk-integration.html' },
            { title: 'Software Deployment from Tickets', url: 'https://www.manageengine.com/products/desktop-central/zendesk-software-deploy.html' },
            { title: 'Remote Control Configuration', url: 'https://www.manageengine.com/products/desktop-central/zendesk-remote-control.html' },
            { title: 'Zendesk API Documentation', url: 'https://developer.zendesk.com/api-reference/' }
        ]
    },
    'mobile-device-manager-cloud_zoho-flow-cloud': {
        supported: false
    },
    'mobile-device-manager-onprem_analytics-plus-cloud': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'mdm-op-ap-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'mdm-op-ap-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'mdm-op-ap-default-sync-3'
            },
            { 
                name: 'Optional data synchronization: Users, Groups, BIOS, CD ROM DRIVE, Monitor, Disk drives, Logical disk, Motherboard, Keyboard, Mouse, Physical memory',
                id: 'mdm-op-ap-optional-sync-1'
            },
            { 
                name: 'Optional data synchronization: POTS modem, Processors, Serial port, Video controller, USB controller, Printers, Drivers, Share details, File details',
                id: 'mdm-op-ap-optional-sync-2'
            },
            { 
                name: 'Optional data synchronization: User logon history, Scheduled tasks info, Software audit history, Hardware audit history, Computer and hardware mapping, Computer and group association, Custom groups and associated users',
                id: 'mdm-op-ap-optional-sync-3'
            },
            { 
                name: 'Optional data synchronization: Trusted Platform Module',
                id: 'mdm-op-ap-optional-sync-4'
            }
        ],
        documentation: [
            { title: 'MDM On-Premise to Analytics Plus Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-analytics-cloud.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-analytics.html' },
            { title: 'Custom Reports Configuration', url: 'https://www.manageengine.com/products/desktop-central/custom-reports.html' },
            { title: 'Analytics Dashboard Guide', url: 'https://www.manageengine.com/products/desktop-central/analytics-dashboard.html' }
        ]
    },
    'mobile-device-manager-onprem_analytics-plus-onprem': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'mdm-op-ap-op-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'mdm-op-ap-op-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'mdm-op-ap-op-default-sync-3'
            },
            { 
                name: 'Optional data synchronization: Users, Groups, BIOS, CD ROM DRIVE, Monitor, Disk drives, Logical disk, Motherboard, Keyboard, Mouse, Physical memory',
                id: 'mdm-op-ap-op-optional-sync-1'
            },
            { 
                name: 'Optional data synchronization: POTS modem, Processors, Serial port, Video controller, USB controller, Printers, Drivers, Share details, File details',
                id: 'mdm-op-ap-op-optional-sync-2'
            },
            { 
                name: 'Optional data synchronization: User logon history, Scheduled tasks info, Software audit history, Hardware audit history, Computer and hardware mapping, Computer and group association, Custom groups and associated users',
                id: 'mdm-op-ap-op-optional-sync-3'
            },
            { 
                name: 'Optional data synchronization: Trusted Platform Module',
                id: 'mdm-op-ap-op-optional-sync-4'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-analytics-onprem-integration.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-analytics.html' },
            { title: 'Custom Reports Configuration', url: 'https://www.manageengine.com/products/desktop-central/custom-reports.html' },
            { title: 'Analytics Dashboard Guide', url: 'https://www.manageengine.com/products/desktop-central/analytics-dashboard.html' }
        ]
    },
    
    // Mobile Device Manager + ServiceNow (Basic) Integrations,
    'mobile-device-manager-onprem_asset-explorer-cloud': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset sync from MDM to AE',
                id: 'mdm-op-ae-inventory-sync'
            },
            { 
                name: 'Auto-assign users',
                id: 'mdm-op-ae-auto-assign'
            },
            { 
                name: 'Action to be performed on AE asset when the asset is removed from SOM in Mobile Device Manager (Beta)',
                id: 'mdm-op-ae-asset-removal-beta'
            },
            { 
                name: 'Action to be performed on AE software, when the commercial software is removed from EC',
                id: 'mdm-op-ae-software-removal'
            },
            { 
                name: 'Inventory alerts are created as AE tickets',
                id: 'mdm-op-ae-inventory-alerts'
            },
            { 
                name: 'Trayicon requests are created as AE tickets',
                id: 'mdm-op-ae-trayicon'
            }
        ],
        documentation: [
            { title: 'MDM On-Premise to AE Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-ae-cloud.html' },
            { title: 'Auto-assign Configuration', url: 'https://www.manageengine.com/products/desktop-central/auto-assign-users.html' },
            { title: 'Alert Ticketing Setup', url: 'https://www.manageengine.com/products/desktop-central/alert-ticketing.html' }
        ]
    },
    'mobile-device-manager-onprem_asset-explorer-onprem': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset data sync',
                id: 'mdm-op-ae-op-inventory-sync'
            },
            { 
                name: 'Auto-assign users',
                id: 'mdm-op-ae-op-auto-assign'
            },
            { 
                name: 'Action to be performed on AE asset when the asset is removed from SOM in Mobile Device Manager',
                id: 'mdm-op-ae-op-asset-removal'
            },
            { 
                name: 'User-defined templates can be deployed from AE tickets',
                id: 'mdm-op-ae-op-deploy-templates'
            },
            { 
                name: 'User-defined software packages can be deployed from AE tickets',
                id: 'mdm-op-ae-op-deploy-packages'
            },
            { 
                name: 'SSP requests are created as AE tickets and software will be automatically installed upon approval',
                id: 'mdm-op-ae-op-ssp-auto-install'
            },
            { 
                name: 'Request for prohibited software are created as AE tickets',
                id: 'mdm-op-ae-op-prohibited-software'
            },
            { 
                name: 'Inventory alerts are created as AE tickets',
                id: 'mdm-op-ae-op-inventory-alerts'
            },
            { 
                name: 'Trayicon requests are created as AE tickets',
                id: 'mdm-op-ae-op-trayicon'
            },
            { 
                name: 'Remote control assets from AE',
                id: 'mdm-op-ae-op-remote-control'
            },
            { 
                name: 'Perform tools action from AE',
                id: 'mdm-op-ae-op-tools-action'
            },
            { 
                name: 'Load Mobile Device Manager as iFrame within AE',
                id: 'mdm-op-ae-op-iframe'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-ae-onprem-integration.html' },
            { title: 'Template Deployment Setup', url: 'https://www.manageengine.com/products/desktop-central/template-deployment.html' },
            { title: 'SSP Auto-Install Configuration', url: 'https://www.manageengine.com/products/desktop-central/ssp-auto-install.html' },
            { title: 'Prohibited Software Management', url: 'https://www.manageengine.com/products/desktop-central/prohibited-software.html' }
        ]
    },
    
    // Mobile Device Manager + Event Log Analyzer / Log 360 Integrations,
    'mobile-device-manager-onprem_connectwise-cloud': {
        supported: false
    },
    'mobile-device-manager-onprem_crowdstrike-cloud': {
        supported: false
    },
    'mobile-device-manager-onprem_freshdesk-cloud': {
        supported: false
    },
    'mobile-device-manager-onprem_freshservice-cloud': {
        supported: false,
        features: [
            { 
                name: 'Deploy software packages from FreshService tickets',
                id: 'mdm-op-freshservice-deploy-software'
            },
            { 
                name: 'Remote control assets from FreshService tickets',
                id: 'mdm-op-freshservice-remote-control'
            },
            { 
                name: 'System manager tools of a machine can be remotely accessed from FreshService tickets',
                id: 'mdm-op-freshservice-system-tools'
            },
            { 
                name: 'Remote power options such as lock, hibernate, shutdown, Wake on LAN from FreshService tickets',
                id: 'mdm-op-freshservice-power-options'
            }
        ],
        documentation: [
            { title: 'MDM On-Premise to Freshservice Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-freshservice-cloud.html' },
            { title: 'Software Deployment from Tickets', url: 'https://www.manageengine.com/products/desktop-central/freshservice-software-deploy.html' },
            { title: 'Remote Control Configuration', url: 'https://www.manageengine.com/products/desktop-central/freshservice-remote-control.html' },
            { title: 'Freshservice API Documentation', url: 'https://api.freshservice.com/' }
        ]
    },
    
    // Mobile Device Manager + PowerBI Integrations,
    'mobile-device-manager-onprem_halopsa-cloud': {
        supported: false
    },
    'mobile-device-manager-onprem_jira-cloud': {
        supported: false,
        features: [
            { 
                name: 'Load iFrame from Jira',
                id: 'mdm-op-jira-iframe'
            },
            { 
                name: 'Remote control asset from Jira',
                id: 'mdm-op-jira-remote-control'
            },
            { 
                name: 'Asset data are pulled into Jira from EC',
                id: 'mdm-op-jira-asset-data'
            },
            { 
                name: 'Perform tools action from Jira',
                id: 'mdm-op-jira-tools-action'
            }
        ],
        documentation: [
            { title: 'MDM On-Premise to Jira Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-jira-cloud.html' },
            { title: 'iFrame Configuration', url: 'https://www.manageengine.com/products/desktop-central/jira-iframe-setup.html' },
            { title: 'Remote Control from Jira', url: 'https://www.manageengine.com/products/desktop-central/jira-remote-control.html' },
            { title: 'Jira API Documentation', url: 'https://developer.atlassian.com/cloud/jira/' }
        ]
    },
    'mobile-device-manager-onprem_jira-onprem': {
        supported: false,
        features: [
            { 
                name: 'Load iFrame from Jira',
                id: 'mdm-op-jira-op-iframe'
            },
            { 
                name: 'Remote control asset from Jira',
                id: 'mdm-op-jira-op-remote-control'
            },
            { 
                name: 'Asset data are pulled into Jira from EC',
                id: 'mdm-op-jira-op-asset-data'
            },
            { 
                name: 'Perform tools action from Jira',
                id: 'mdm-op-jira-op-tools-action'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-jira-onprem-integration.html' },
            { title: 'iFrame Configuration', url: 'https://www.manageengine.com/products/desktop-central/jira-iframe-setup.html' },
            { title: 'Remote Control from Jira', url: 'https://www.manageengine.com/products/desktop-central/jira-remote-control.html' },
            { title: 'Jira Server Documentation', url: 'https://confluence.atlassian.com/jiraserver/' }
        ]
    },
    
    // Mobile Device Manager + Zendesk Integrations,
    'mobile-device-manager-onprem_log360-onprem': {
        supported: true,
        features: [
            { 
                name: 'Patch data are pulled into ELA from MDM - Approve and install patches directly through incident workflows',
                id: 'mdm-op-ela-op-patch-data'
            },
            { 
                name: 'Vulnerability and system misconfiguration data are pulled into ELA from MDM - Identify devices with vulnerabilities or misconfigurations using custom correlation rules and alerts',
                id: 'mdm-op-ela-op-vulnerability-data'
            },
            { 
                name: 'Comparators can be created in ELA and custom correlation rules and custom alert profiles can be created for those comparators',
                id: 'mdm-op-ela-op-comparators'
            },
            { 
                name: 'Audit logs in Action log viewer will be posted from MDM to ELA',
                id: 'mdm-op-ela-op-audit-logs'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-ela-onprem-integration.html' },
            { title: 'Audit Log Configuration', url: 'https://www.manageengine.com/products/desktop-central/audit-logs-ela.html' },
            { title: 'Patch Workflow Configuration', url: 'https://www.manageengine.com/products/desktop-central/patch-workflow-ela.html' },
            { title: 'Custom Correlation Rules', url: 'https://www.manageengine.com/products/desktop-central/correlation-rules.html' }
        ]
    },
    
    // Mobile Device Manager + Analytics Plus Integrations,
    'mobile-device-manager-onprem_pam360-cloud': {
        supported: false
    },
    'mobile-device-manager-onprem_pam360-onprem': {
        supported: false
    },
    'mobile-device-manager-onprem_powerbi-cloud': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'mdm-op-powerbi-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'mdm-op-powerbi-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'mdm-op-powerbi-default-sync-3'
            }
        ],
        documentation: [
            { title: 'MDM On-Premise to PowerBI Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-powerbi-cloud.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-powerbi.html' },
            { title: 'PowerBI Dashboard Configuration', url: 'https://www.manageengine.com/products/desktop-central/powerbi-dashboard.html' },
            { title: 'PowerBI Documentation', url: 'https://docs.microsoft.com/en-us/power-bi/' }
        ]
    },
    'mobile-device-manager-onprem_powerbi-onprem': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'mdm-op-powerbi-op-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'mdm-op-powerbi-op-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'mdm-op-powerbi-op-default-sync-3'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-powerbi-onprem-integration.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-powerbi.html' },
            { title: 'PowerBI Report Server Setup', url: 'https://www.manageengine.com/products/desktop-central/powerbi-report-server.html' },
            { title: 'PowerBI Documentation', url: 'https://docs.microsoft.com/en-us/power-bi/' }
        ]
    },
    
    // Mobile Device Manager + IBM QRadar Integrations,
    'mobile-device-manager-onprem_qualys-cloud': {
        supported: false
    },
    'mobile-device-manager-onprem_rapid7-insightvm-cloud': {
        supported: false
    },
    'mobile-device-manager-onprem_rapid7-insightvm-onprem': {
        supported: false
    },
    'mobile-device-manager-onprem_servicedesk-plus-cloud': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset sync from MDM to SDP',
                id: 'mdm-op-sdp-inventory-sync'
            },
            { 
                name: 'Auto-assign users',
                id: 'mdm-op-sdp-auto-assign'
            },
            { 
                name: 'Action to be performed on SDP asset when the asset is removed from SOM in Mobile Device Manager (Beta)',
                id: 'mdm-op-sdp-asset-removal-beta'
            },
            { 
                name: 'Action to be performed on SDP software, when the commercial software is removed from EC',
                id: 'mdm-op-sdp-software-removal'
            },
            { 
                name: 'Inventory alerts are created as SDP tickets',
                id: 'mdm-op-sdp-inventory-alerts'
            },
            { 
                name: 'Trayicon requests are created as SDP tickets',
                id: 'mdm-op-sdp-trayicon'
            }
        ],
        documentation: [
            { title: 'MDM On-Premise to SDP Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-sdp-cloud.html' },
            { title: 'Auto-assign Configuration', url: 'https://www.manageengine.com/products/desktop-central/auto-assign-users.html' },
            { title: 'Alert Ticketing Setup', url: 'https://www.manageengine.com/products/desktop-central/alert-ticketing.html' }
        ]
    },
    'mobile-device-manager-onprem_servicedesk-plus-msp-cloud': {
        supported: false
    },
    'mobile-device-manager-onprem_servicedesk-plus-msp-onprem': {
        supported: false
    },
    'mobile-device-manager-onprem_servicedesk-plus-onprem': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset data sync',
                id: 'mdm-op-sdp-op-inventory-sync'
            },
            { 
                name: 'Auto-assign users',
                id: 'mdm-op-sdp-op-auto-assign'
            },
            { 
                name: 'Action to be performed on SDP asset when the asset is removed from SOM in Mobile Device Manager',
                id: 'mdm-op-sdp-op-asset-removal'
            },
            { 
                name: 'User-defined templates can be deployed from SDP tickets',
                id: 'mdm-op-sdp-op-deploy-templates'
            },
            { 
                name: 'User-defined software packages can be deployed from SDP tickets',
                id: 'mdm-op-sdp-op-deploy-packages'
            },
            { 
                name: 'SSP requests are created as SDP tickets and software will be automatically installed upon approval',
                id: 'mdm-op-sdp-op-ssp-auto-install'
            },
            { 
                name: 'Request for prohibited software are created as SDP tickets',
                id: 'mdm-op-sdp-op-prohibited-software'
            },
            { 
                name: 'Inventory alerts are created as SDP tickets',
                id: 'mdm-op-sdp-op-inventory-alerts'
            },
            { 
                name: 'Trayicon requests are created as SDP tickets',
                id: 'mdm-op-sdp-op-trayicon'
            },
            { 
                name: 'Remote control assets from SDP',
                id: 'mdm-op-sdp-op-remote-control'
            },
            { 
                name: 'Perform tools action from SDP',
                id: 'mdm-op-sdp-op-tools-action'
            },
            { 
                name: 'Load Mobile Device Manager as iFrame within SDP',
                id: 'mdm-op-sdp-op-iframe'
            },
            { 
                name: 'Assign users to managed devices from SDP tickets',
                id: 'mdm-op-sdp-op-assign-users'
            },
            { 
                name: 'Add devices to groups for simplified management from SDP tickets',
                id: 'mdm-op-sdp-op-add-to-groups'
            },
            { 
                name: 'Configure devices by associating profiles remotely from SDP tickets',
                id: 'mdm-op-sdp-op-configure-profiles'
            },
            { 
                name: 'Wipe and remove management from devices from SDP tickets',
                id: 'mdm-op-sdp-op-wipe-remove'
            },
            { 
                name: 'Install apps by distributing apps remotely from SDP tickets',
                id: 'mdm-op-sdp-op-install-apps'
            },
            { 
                name: 'Identify device location remotely using Geo-tracking from SDP tickets',
                id: 'mdm-op-sdp-op-geo-tracking'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-sdp-onprem-integration.html' },
            { title: 'Template Deployment Setup', url: 'https://www.manageengine.com/products/desktop-central/template-deployment.html' },
            { title: 'SSP Auto-Install Configuration', url: 'https://www.manageengine.com/products/desktop-central/ssp-auto-install.html' },
            { title: 'Prohibited Software Management', url: 'https://www.manageengine.com/products/desktop-central/prohibited-software.html' }
        ]
    },
    
    // Mobile Device Manager + Asset Explorer Integrations,
    'mobile-device-manager-onprem_servicenow-cloud': {
        supported: false,
        features: [
            { 
                name: 'Asset data post from MDM to ServiceNow',
                id: 'mdm-op-snow-basic-asset-post'
            },
            { 
                name: 'Choose whether to remove an asset from ServiceNow if it is removed from Mobile Device Manager SoM',
                id: 'mdm-op-snow-basic-asset-removal'
            },
            { 
                name: 'Assign last logged as the asset\'s owner in ServiceNow',
                id: 'mdm-op-snow-basic-owner-assign'
            }
        ],
        documentation: [
            { title: 'MDM On-Premise to ServiceNow Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-servicenow-cloud.html' },
            { title: 'Asset Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/servicenow-asset-sync.html' },
            { title: 'CMDB Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/servicenow-cmdb.html' },
            { title: 'ServiceNow API Guide', url: 'https://docs.servicenow.com/' }
        ]
    },
    'mobile-device-manager-onprem_servicenow-onprem': {
        supported: false,
        features: [
            { 
                name: 'Asset data post from MDM to ServiceNow',
                id: 'mdm-op-snow-basic-op-asset-post'
            },
            { 
                name: 'Choose whether to remove an asset from ServiceNow if it is removed from Mobile Device Manager SoM',
                id: 'mdm-op-snow-basic-op-asset-removal'
            },
            { 
                name: 'Assign last logged as the asset\'s owner in ServiceNow',
                id: 'mdm-op-snow-basic-op-owner-assign'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-servicenow-onprem-integration.html' },
            { title: 'Asset Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/servicenow-asset-sync.html' },
            { title: 'CMDB Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/servicenow-cmdb.html' },
            { title: 'ServiceNow API Guide', url: 'https://docs.servicenow.com/' }
        ]
    },
    
    // Mobile Device Manager + ServiceNow SGC Integrations,
    'mobile-device-manager-onprem_splunk-cloud': {
        supported: true,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from MDM to Splunk',
                id: 'mdm-op-splunk-audit-logs'
            },
            { 
                name: 'Vulnerability data is synced from MDM to Splunk',
                id: 'mdm-op-splunk-vuln-data'
            }
        ],
        documentation: [
            { title: 'MDM On-Premise to Splunk Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-splunk-cloud.html' },
            { title: 'Audit Log Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/splunk-audit-sync.html' },
            { title: 'Vulnerability Data Export Setup', url: 'https://www.manageengine.com/products/desktop-central/splunk-vulnerability-sync.html' },
            { title: 'Splunk Documentation', url: 'https://docs.splunk.com/' }
        ]
    },
    'mobile-device-manager-onprem_splunk-onprem': {
        supported: true,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from MDM to Splunk',
                id: 'mdm-op-splunk-op-audit-logs'
            },
            { 
                name: 'Vulnerability data is synced from MDM to Splunk',
                id: 'mdm-op-splunk-op-vuln-data'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-splunk-onprem-integration.html' },
            { title: 'Syslog Configuration for Splunk', url: 'https://www.manageengine.com/products/desktop-central/splunk-syslog-setup.html' },
            { title: 'Vulnerability Data Export Setup', url: 'https://www.manageengine.com/products/desktop-central/splunk-vulnerability-sync.html' },
            { title: 'Splunk Enterprise Documentation', url: 'https://docs.splunk.com/Documentation/Splunk' }
        ]
    },
    
    // Mobile Device Manager + Syslog / SIEM Integrations (On-Prem only),
    'mobile-device-manager-onprem_syslog-siem-cloud': {
        supported: false,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from MDM to Syslog/SIEM',
                id: 'mdm-op-syslog-cloud-audit-logs'
            }
        ],
        documentation: [
            { title: 'MDM-Syslog Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/syslog-integration.html' },
            { title: 'Audit Log Forwarding Setup', url: 'https://www.manageengine.com/products/desktop-central/audit-log-forwarding.html' },
            { title: 'Syslog Configuration', url: 'https://www.manageengine.com/products/desktop-central/syslog-setup.html' },
            { title: 'SIEM Integration Best Practices', url: 'https://www.manageengine.com/products/desktop-central/siem-best-practices.html' }
        ]
    },
    'mobile-device-manager-onprem_syslog-siem-onprem': {
        supported: true,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from MDM to Syslog/SIEM',
                id: 'mdm-op-syslog-op-audit-logs'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Syslog Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-syslog-onprem-integration.html' },
            { title: 'Audit Log Forwarding Setup', url: 'https://www.manageengine.com/products/desktop-central/audit-log-forwarding.html' },
            { title: 'Syslog Configuration', url: 'https://www.manageengine.com/products/desktop-central/syslog-setup.html' },
            { title: 'SIEM Integration Best Practices', url: 'https://www.manageengine.com/products/desktop-central/siem-best-practices.html' }
        ]
    },

    // ════════════════════════════════════════════════════════════
    // Application Control Plus (ACP) Integrations
    // ════════════════════════════════════════════════════════════


    // Application Control Plus + ServiceDesk Plus Integrations,
    'mobile-device-manager-onprem_tenable-sc-onprem': {
        supported: false
    },
    'mobile-device-manager-onprem_tenable-vm-cloud': {
        supported: false
    },
    'mobile-device-manager-onprem_zendesk-cloud': {
        supported: false,
        features: [
            { 
                name: 'Deploy software packages from Zendesk tickets',
                id: 'mdm-op-zendesk-deploy-software'
            },
            { 
                name: 'Remote control assets from Zendesk tickets',
                id: 'mdm-op-zendesk-remote-control'
            },
            { 
                name: 'System manager tools of a machine can be remotely accessed from Zendesk tickets',
                id: 'mdm-op-zendesk-system-tools'
            },
            { 
                name: 'Remote power options such as lock, hibernate, shutdown, Wake on LAN from Zendesk tickets',
                id: 'mdm-op-zendesk-power-options'
            }
        ],
        documentation: [
            { title: 'MDM On-Premise to Zendesk Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-zendesk-cloud.html' },
            { title: 'Software Deployment from Tickets', url: 'https://www.manageengine.com/products/desktop-central/zendesk-software-deploy.html' },
            { title: 'Remote Control Configuration', url: 'https://www.manageengine.com/products/desktop-central/zendesk-remote-control.html' },
            { title: 'Zendesk API Documentation', url: 'https://developer.zendesk.com/api-reference/' }
        ]
    },
    
    // Mobile Device Manager + Freshservice Integrations,
    'mobile-device-manager-onprem_zoho-flow-cloud': {
        supported: false
    },

    // ── Mpp Integrations ──────────────────────────────────────
    'mpp-onprem_analytics-plus-cloud': {
        supported: false
    },
    'mpp-onprem_analytics-plus-onprem': {
        supported: false
    },
    'mpp-onprem_asset-explorer-cloud': {
        supported: false
    },
    'mpp-onprem_asset-explorer-onprem': {
        supported: false
    },
    'mpp-onprem_connectwise-cloud': {
        supported: false
    },
    'mpp-onprem_crowdstrike-cloud': {
        supported: false
    },
    'mpp-onprem_freshdesk-cloud': {
        supported: false
    },
    'mpp-onprem_freshservice-cloud': {
        supported: false
    },
    'mpp-onprem_halopsa-cloud': {
        supported: false
    },
    'mpp-onprem_jira-cloud': {
        supported: false
    },
    'mpp-onprem_jira-onprem': {
        supported: false
    },
    'mpp-onprem_log360-onprem': {
        supported: false
    },
    'mpp-onprem_pam360-cloud': {
        supported: false
    },
    'mpp-onprem_pam360-onprem': {
        supported: false
    },
    'mpp-onprem_powerbi-cloud': {
        supported: false
    },
    'mpp-onprem_powerbi-onprem': {
        supported: false
    },
    'mpp-onprem_qualys-cloud': {
        supported: false
    },
    'mpp-onprem_rapid7-insightvm-cloud': {
        supported: false
    },
    'mpp-onprem_rapid7-insightvm-onprem': {
        supported: false
    },
    'mpp-onprem_servicedesk-plus-cloud': {
        supported: false
    },
    'mpp-onprem_servicedesk-plus-msp-cloud': {
        supported: false
    },
    'mpp-onprem_servicedesk-plus-msp-onprem': {
        supported: false
    },
    'mpp-onprem_servicedesk-plus-onprem': {
        supported: false
    },
    'mpp-onprem_servicenow-cloud': {
        supported: false
    },
    'mpp-onprem_servicenow-onprem': {
        supported: false
    },
    'mpp-onprem_splunk-cloud': {
        supported: false
    },
    'mpp-onprem_splunk-onprem': {
        supported: false
    },
    'mpp-onprem_syslog-siem-onprem': {
        supported: false
    },
    'mpp-onprem_tenable-sc-onprem': {
        supported: false
    },
    'mpp-onprem_tenable-vm-cloud': {
        supported: false
    },
    'mpp-onprem_zendesk-cloud': {
        supported: false
    },
    'mpp-onprem_zoho-flow-cloud': {
        supported: false
    },

    // ── Patch Manager Plus Integrations ──────────────────────────────────────
    'patch-manager-plus-cloud_analytics-plus-cloud': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'pmp-ap-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'pmp-ap-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'pmp-ap-default-sync-3'
            },
            { 
                name: 'Optional data synchronization: Users, Groups, BIOS, CD ROM DRIVE, Monitor, Disk drives, Logical disk, Motherboard, Keyboard, Mouse, Physical memory',
                id: 'pmp-ap-optional-sync-1'
            },
            { 
                name: 'Optional data synchronization: POTS modem, Processors, Serial port, Video controller, USB controller, Printers, Drivers, Share details, File details',
                id: 'pmp-ap-optional-sync-2'
            },
            { 
                name: 'Optional data synchronization: User logon history, Scheduled tasks info, Software audit history, Hardware audit history, Computer and hardware mapping, Computer and group association, Custom groups and associated users',
                id: 'pmp-ap-optional-sync-3'
            },
            { 
                name: 'Optional data synchronization: Trusted Platform Module',
                id: 'pmp-ap-optional-sync-4'
            }
        ],
        documentation: [
            { title: 'PMP-Analytics Plus Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/analytics-plus-integration.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-analytics.html' },
            { title: 'Custom Reports Configuration', url: 'https://www.manageengine.com/products/desktop-central/custom-reports.html' },
            { title: 'Analytics Dashboard Guide', url: 'https://www.manageengine.com/products/desktop-central/analytics-dashboard.html' }
        ]
    },
    'patch-manager-plus-cloud_asset-explorer-cloud': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset sync from PMP to AE',
                id: 'pmp-ae-inventory-sync'
            },
            { 
                name: 'Remote control asset from AE tickets',
                id: 'pmp-ae-remote-control'
            },
            { 
                name: 'Deploy software from AE tickets',
                id: 'pmp-ae-deploy-software'
            },
            { 
                name: 'Perform tools action from AE tickets',
                id: 'pmp-ae-tools-action'
            },
            { 
                name: 'Loading iFrame of PMP within AE',
                id: 'pmp-ae-iframe'
            },
            { 
                name: 'Action to be performed on AE asset when the asset is removed from SOM in Patch Manager Plus (Beta)',
                id: 'pmp-ae-asset-removal-beta'
            },
            { 
                name: 'Trayicon requests are created as AE tickets (Beta)',
                id: 'pmp-ae-trayicon-beta'
            },
            { 
                name: 'SSP requests are created as AE tickets (Beta)',
                id: 'pmp-ae-ssp-beta'
            }
        ],
        documentation: [
            { title: 'PMP-AE Cloud Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ae-cloud-integration.html' },
            { title: 'Asset Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/asset-sync-setup.html' },
            { title: 'Remote Control Setup', url: 'https://www.manageengine.com/products/desktop-central/remote-control-ae.html' },
            { title: 'iFrame Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/iframe-integration.html' }
        ]
    },
    'patch-manager-plus-cloud_asset-explorer-onprem': {
        supported: true,
        betaRelease: true,
        features: [
            { 
                name: 'Inventory asset sync from PMP to AE',
                id: 'pmp-ae-op-inventory-sync'
            }
        ],
        documentation: [
            { title: 'PMP Cloud to AE On-Premise Integration', url: 'https://www.manageengine.com/products/desktop-central/ae-onprem-integration.html' },
            { title: 'Beta Release Notes', url: 'https://www.manageengine.com/products/desktop-central/beta-release-notes.html' },
            { title: 'Hybrid Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/hybrid-setup.html' }
        ]
    },
    'patch-manager-plus-cloud_connectwise-cloud': {
        supported: true
    },
    'patch-manager-plus-cloud_crowdstrike-cloud': {
        supported: false
    },
    'patch-manager-plus-cloud_freshdesk-cloud': {
        supported: true
    },
    'patch-manager-plus-cloud_freshservice-cloud': {
        supported: true,
        features: [
            { 
                name: 'Deploy software packages from FreshService tickets',
                id: 'pmp-freshservice-deploy-software'
            },
            { 
                name: 'Remote control assets from FreshService tickets',
                id: 'pmp-freshservice-remote-control'
            },
            { 
                name: 'System manager tools of a machine can be remotely accessed from FreshService tickets',
                id: 'pmp-freshservice-system-tools'
            },
            { 
                name: 'Remote power options such as lock, hibernate, shutdown, Wake on LAN from FreshService tickets',
                id: 'pmp-freshservice-power-options'
            }
        ],
        documentation: [
            { title: 'PMP-Freshservice Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/freshservice-integration.html' },
            { title: 'Software Deployment from Tickets', url: 'https://www.manageengine.com/products/desktop-central/freshservice-software-deploy.html' },
            { title: 'Remote Control Configuration', url: 'https://www.manageengine.com/products/desktop-central/freshservice-remote-control.html' },
            { title: 'Freshservice API Documentation', url: 'https://api.freshservice.com/' }
        ]
    },
    'patch-manager-plus-cloud_halopsa-cloud': {
        supported: true
    },
    'patch-manager-plus-cloud_jira-cloud': {
        supported: true,
        features: [
            { 
                name: 'Load iFrame from Jira',
                id: 'pmp-jira-iframe'
            },
            { 
                name: 'Remote control asset from Jira',
                id: 'pmp-jira-remote-control'
            },
            { 
                name: 'Asset data are pulled into Jira from EC',
                id: 'pmp-jira-asset-data'
            },
            { 
                name: 'Perform tools action from Jira',
                id: 'pmp-jira-tools-action'
            }
        ],
        documentation: [
            { title: 'PMP-Jira Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/jira-integration.html' },
            { title: 'iFrame Configuration', url: 'https://www.manageengine.com/products/desktop-central/jira-iframe-setup.html' },
            { title: 'Remote Control from Jira', url: 'https://www.manageengine.com/products/desktop-central/jira-remote-control.html' },
            { title: 'Jira API Documentation', url: 'https://developer.atlassian.com/cloud/jira/' }
        ]
    },
    'patch-manager-plus-cloud_log360-onprem': {
        supported: true,
        features: [
            { 
                name: 'Patch data are pulled into ELA from PMP - Approve and install patches directly through incident workflows',
                id: 'pmp-ela-patch-data'
            },
            { 
                name: 'Vulnerability and system misconfiguration data are pulled into ELA from PMP - Identify devices with vulnerabilities or misconfigurations using custom correlation rules and alerts',
                id: 'pmp-ela-vulnerability-data'
            },
            { 
                name: 'Comparators can be created in ELA and custom correlation rules and custom alert profiles can be created for those comparators',
                id: 'pmp-ela-comparators'
            }
        ],
        documentation: [
            { title: 'PMP-ELA Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ela-integration.html' },
            { title: 'Patch Workflow Configuration', url: 'https://www.manageengine.com/products/desktop-central/patch-workflow-ela.html' },
            { title: 'Custom Correlation Rules', url: 'https://www.manageengine.com/products/desktop-central/correlation-rules.html' },
            { title: 'Alert Profile Setup', url: 'https://www.manageengine.com/products/desktop-central/alert-profiles.html' }
        ]
    },
    'patch-manager-plus-cloud_pam360-cloud': {
        supported: false
    },
    'patch-manager-plus-cloud_pam360-onprem': {
        supported: false
    },
    'patch-manager-plus-cloud_powerbi-cloud': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'pmp-powerbi-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'pmp-powerbi-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'pmp-powerbi-default-sync-3'
            }
        ],
        documentation: [
            { title: 'PMP-PowerBI Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/powerbi-integration.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-powerbi.html' },
            { title: 'PowerBI Dashboard Configuration', url: 'https://www.manageengine.com/products/desktop-central/powerbi-dashboard.html' },
            { title: 'PowerBI Documentation', url: 'https://docs.microsoft.com/en-us/power-bi/' }
        ]
    },
    'patch-manager-plus-cloud_powerbi-onprem': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'pmp-powerbi-op-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'pmp-powerbi-op-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'pmp-powerbi-op-default-sync-3'
            }
        ],
        documentation: [
            { title: 'PMP Cloud to PowerBI On-Premise Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-cloud-powerbi-onprem.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-powerbi.html' },
            { title: 'PowerBI Report Server Setup', url: 'https://www.manageengine.com/products/desktop-central/powerbi-report-server.html' },
            { title: 'PowerBI Documentation', url: 'https://docs.microsoft.com/en-us/power-bi/' }
        ]
    },
    'patch-manager-plus-cloud_qualys-cloud': {
        supported: false
    },
    'patch-manager-plus-cloud_rapid7-insightvm-cloud': {
        supported: false
    },
    'patch-manager-plus-cloud_rapid7-insightvm-onprem': {
        supported: false
    },
    'patch-manager-plus-cloud_servicedesk-plus-cloud': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset sync from PMP to SDP',
                id: 'pmp-sdp-inventory-sync'
            },
            { 
                name: 'Remote control asset from SDP tickets',
                id: 'pmp-sdp-remote-control'
            },
            { 
                name: 'Deploy software from SDP tickets',
                id: 'pmp-sdp-deploy-software'
            },
            { 
                name: 'Perform tools action from SDP tickets',
                id: 'pmp-sdp-tools-action'
            },
            { 
                name: 'Loading iFrame of PMP within SDP',
                id: 'pmp-sdp-iframe'
            },
            { 
                name: 'Action to be performed on SDP asset when the asset is removed from SOM in Patch Manager Plus (Beta)',
                id: 'pmp-sdp-asset-removal-beta'
            },
            { 
                name: 'Trayicon requests are created as SDP tickets (Beta)',
                id: 'pmp-sdp-trayicon-beta'
            },
            { 
                name: 'SSP requests are created as SDP tickets (Beta)',
                id: 'pmp-sdp-ssp-beta'
            }
        ],
        documentation: [
            { title: 'PMP-SDP Cloud Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/help/configuring_desktop_central/integrating-with-servicedesk-plus-cloud.html' },
            { title: 'Configuring EC extension for SDP Cloud', url: 'https://help.sdpondemand.com/endpoint-central-extension' },
            { title: 'Troubleshooting errors while enabling integration', url: 'https://www.manageengine.com/products/desktop-central/kb/sdp-on-demand.html' },
            { title: 'Troubleshooting asset sync between ECOD-SDPOD', url: 'https://zask.pali.io/zask/EMSTechAsk/questions/8639642606' }
        ]
    },
    'patch-manager-plus-cloud_servicedesk-plus-msp-cloud': {
        supported: true
    },
    'patch-manager-plus-cloud_servicedesk-plus-msp-onprem': {
        supported: false
    },
    'patch-manager-plus-cloud_servicedesk-plus-onprem': {
        supported: true,
        betaRelease: true,
        features: [
            { 
                name: 'Inventory asset sync from PMP to SDP',
                id: 'pmp-sdp-op-inventory-sync'
            }
        ],
        documentation: [
            { title: 'PMP Cloud to SDP On-Premise Integration', url: 'https://www.manageengine.com/products/desktop-central/sdp-onprem-integration.html' },
            { title: 'Beta Release Notes', url: 'https://www.manageengine.com/products/desktop-central/beta-release-notes.html' },
            { title: 'Hybrid Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/hybrid-setup.html' }
        ]
    },
    'patch-manager-plus-cloud_servicenow-cloud': {
        supported: true,
        features: [
            { 
                name: 'Asset data post from PMP to ServiceNow',
                id: 'pmp-snow-basic-asset-post'
            },
            { 
                name: 'Choose whether to remove an asset from ServiceNow if it is removed from Patch Manager Plus SoM',
                id: 'pmp-snow-basic-asset-removal'
            },
            { 
                name: 'Assign last logged as the asset\'s owner in ServiceNow',
                id: 'pmp-snow-basic-owner-assign'
            }
        ],
        documentation: [
            { title: 'PMP-ServiceNow Basic Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/servicenow-integration.html' },
            { title: 'Asset Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/servicenow-asset-sync.html' },
            { title: 'CMDB Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/servicenow-cmdb.html' },
            { title: 'ServiceNow API Guide', url: 'https://docs.servicenow.com/' }
        ]
    },
    'patch-manager-plus-cloud_servicenow-onprem': {
        supported: false
    },
    'patch-manager-plus-cloud_splunk-cloud': {
        supported: true,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from PMP to Splunk',
                id: 'pmp-splunk-audit-logs'
            },
            { 
                name: 'Vulnerability data is synced from PMP to Splunk',
                id: 'pmp-splunk-vuln-data'
            }
        ],
        documentation: [
            { title: 'PMP-Splunk Cloud Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/splunk-cloud-integration.html' },
            { title: 'Audit Log Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/splunk-audit-sync.html' },
            { title: 'Vulnerability Data Export Setup', url: 'https://www.manageengine.com/products/desktop-central/splunk-vulnerability-sync.html' },
            { title: 'Splunk Documentation', url: 'https://docs.splunk.com/' }
        ]
    },
    'patch-manager-plus-cloud_splunk-onprem': {
        supported: true,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from PMP to Splunk',
                id: 'pmp-splunk-op-audit-logs'
            },
            { 
                name: 'Vulnerability data is synced from PMP to Splunk',
                id: 'pmp-splunk-op-vuln-data'
            }
        ],
        documentation: [
            { title: 'PMP Cloud to Splunk On-Premise Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-cloud-splunk-onprem.html' },
            { title: 'Audit Log Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/splunk-audit-sync.html' },
            { title: 'Vulnerability Data Export Setup', url: 'https://www.manageengine.com/products/desktop-central/splunk-vulnerability-sync.html' },
            { title: 'Splunk Enterprise Documentation', url: 'https://docs.splunk.com/Documentation/Splunk' }
        ]
    },
    'patch-manager-plus-cloud_tenable-sc-onprem': {
        supported: false
    },
    'patch-manager-plus-cloud_tenable-vm-cloud': {
        supported: false
    },
    'patch-manager-plus-cloud_zendesk-cloud': {
        supported: true,
        features: [
            { 
                name: 'Deploy software packages from Zendesk tickets',
                id: 'pmp-zendesk-deploy-software'
            },
            { 
                name: 'Remote control assets from Zendesk tickets',
                id: 'pmp-zendesk-remote-control'
            },
            { 
                name: 'System manager tools of a machine can be remotely accessed from Zendesk tickets',
                id: 'pmp-zendesk-system-tools'
            },
            { 
                name: 'Remote power options such as lock, hibernate, shutdown, Wake on LAN from Zendesk tickets',
                id: 'pmp-zendesk-power-options'
            }
        ],
        documentation: [
            { title: 'PMP-Zendesk Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/zendesk-integration.html' },
            { title: 'Software Deployment from Tickets', url: 'https://www.manageengine.com/products/desktop-central/zendesk-software-deploy.html' },
            { title: 'Remote Control Configuration', url: 'https://www.manageengine.com/products/desktop-central/zendesk-remote-control.html' },
            { title: 'Zendesk API Documentation', url: 'https://developer.zendesk.com/api-reference/' }
        ]
    },
    'patch-manager-plus-cloud_zoho-flow-cloud': {
        supported: true
    },
    'patch-manager-plus-onprem_analytics-plus-cloud': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'pmp-op-ap-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'pmp-op-ap-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'pmp-op-ap-default-sync-3'
            },
            { 
                name: 'Optional data synchronization: Users, Groups, BIOS, CD ROM DRIVE, Monitor, Disk drives, Logical disk, Motherboard, Keyboard, Mouse, Physical memory',
                id: 'pmp-op-ap-optional-sync-1'
            },
            { 
                name: 'Optional data synchronization: POTS modem, Processors, Serial port, Video controller, USB controller, Printers, Drivers, Share details, File details',
                id: 'pmp-op-ap-optional-sync-2'
            },
            { 
                name: 'Optional data synchronization: User logon history, Scheduled tasks info, Software audit history, Hardware audit history, Computer and hardware mapping, Computer and group association, Custom groups and associated users',
                id: 'pmp-op-ap-optional-sync-3'
            },
            { 
                name: 'Optional data synchronization: Trusted Platform Module',
                id: 'pmp-op-ap-optional-sync-4'
            }
        ],
        documentation: [
            { title: 'PMP On-Premise to Analytics Plus Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-analytics-cloud.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-analytics.html' },
            { title: 'Custom Reports Configuration', url: 'https://www.manageengine.com/products/desktop-central/custom-reports.html' },
            { title: 'Analytics Dashboard Guide', url: 'https://www.manageengine.com/products/desktop-central/analytics-dashboard.html' }
        ]
    },
    'patch-manager-plus-onprem_analytics-plus-onprem': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'pmp-op-ap-op-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'pmp-op-ap-op-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'pmp-op-ap-op-default-sync-3'
            },
            { 
                name: 'Optional data synchronization: Users, Groups, BIOS, CD ROM DRIVE, Monitor, Disk drives, Logical disk, Motherboard, Keyboard, Mouse, Physical memory',
                id: 'pmp-op-ap-op-optional-sync-1'
            },
            { 
                name: 'Optional data synchronization: POTS modem, Processors, Serial port, Video controller, USB controller, Printers, Drivers, Share details, File details',
                id: 'pmp-op-ap-op-optional-sync-2'
            },
            { 
                name: 'Optional data synchronization: User logon history, Scheduled tasks info, Software audit history, Hardware audit history, Computer and hardware mapping, Computer and group association, Custom groups and associated users',
                id: 'pmp-op-ap-op-optional-sync-3'
            },
            { 
                name: 'Optional data synchronization: Trusted Platform Module',
                id: 'pmp-op-ap-op-optional-sync-4'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-analytics-onprem-integration.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-analytics.html' },
            { title: 'Custom Reports Configuration', url: 'https://www.manageengine.com/products/desktop-central/custom-reports.html' },
            { title: 'Analytics Dashboard Guide', url: 'https://www.manageengine.com/products/desktop-central/analytics-dashboard.html' }
        ]
    },
    
    // Patch Manager Plus + ServiceNow (Basic) Integrations,
    'patch-manager-plus-onprem_asset-explorer-cloud': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset sync from PMP to AE',
                id: 'pmp-op-ae-inventory-sync'
            },
            { 
                name: 'Auto-assign users',
                id: 'pmp-op-ae-auto-assign'
            },
            { 
                name: 'Action to be performed on AE asset when the asset is removed from SOM in Patch Manager Plus (Beta)',
                id: 'pmp-op-ae-asset-removal-beta'
            },
            { 
                name: 'Action to be performed on AE software, when the commercial software is removed from EC',
                id: 'pmp-op-ae-software-removal'
            },
            { 
                name: 'Inventory alerts are created as AE tickets',
                id: 'pmp-op-ae-inventory-alerts'
            },
            { 
                name: 'Trayicon requests are created as AE tickets',
                id: 'pmp-op-ae-trayicon'
            }
        ],
        documentation: [
            { title: 'PMP On-Premise to AE Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-ae-cloud.html' },
            { title: 'Auto-assign Configuration', url: 'https://www.manageengine.com/products/desktop-central/auto-assign-users.html' },
            { title: 'Alert Ticketing Setup', url: 'https://www.manageengine.com/products/desktop-central/alert-ticketing.html' }
        ]
    },
    'patch-manager-plus-onprem_asset-explorer-onprem': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset data sync',
                id: 'pmp-op-ae-op-inventory-sync'
            },
            // { 
            //     name: 'Auto-assign users',
            //     id: 'pmp-op-ae-op-auto-assign'
            // },
            // { 
            //     name: 'Action to be performed on AE asset when the asset is removed from SOM in Patch Manager Plus',
            //     id: 'pmp-op-ae-op-asset-removal'
            // },
            // { 
            //     name: 'User-defined templates can be deployed from AE tickets',
            //     id: 'pmp-op-ae-op-deploy-templates'
            // },
            // { 
            //     name: 'User-defined software packages can be deployed from AE tickets',
            //     id: 'pmp-op-ae-op-deploy-packages'
            // },
            // { 
            //     name: 'SSP requests are created as AE tickets and software will be automatically installed upon approval',
            //     id: 'pmp-op-ae-op-ssp-auto-install'
            // },
            // { 
            //     name: 'Request for prohibited software are created as AE tickets',
            //     id: 'pmp-op-ae-op-prohibited-software'
            // },
            // { 
            //     name: 'Inventory alerts are created as AE tickets',
            //     id: 'pmp-op-ae-op-inventory-alerts'
            // },
            // { 
            //     name: 'Trayicon requests are created as AE tickets',
            //     id: 'pmp-op-ae-op-trayicon'
            // },
            // { 
            //     name: 'Remote control assets from AE',
            //     id: 'pmp-op-ae-op-remote-control'
            // },
            // { 
            //     name: 'Perform tools action from AE',
            //     id: 'pmp-op-ae-op-tools-action'
            // },
            { 
                name: 'Load Patch Manager Plus as iFrame within AE',
                id: 'pmp-op-ae-op-iframe'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-ae-onprem-integration.html' },
            { title: 'Template Deployment Setup', url: 'https://www.manageengine.com/products/desktop-central/template-deployment.html' },
            { title: 'SSP Auto-Install Configuration', url: 'https://www.manageengine.com/products/desktop-central/ssp-auto-install.html' },
            { title: 'Prohibited Software Management', url: 'https://www.manageengine.com/products/desktop-central/prohibited-software.html' }
        ]
    },
    
    // Patch Manager Plus + Event Log Analyzer / Log 360 Integrations,
    'patch-manager-plus-onprem_connectwise-cloud': {
        supported: true
    },
    'patch-manager-plus-onprem_crowdstrike-cloud': {
        supported: false
    },
    'patch-manager-plus-onprem_freshdesk-cloud': {
        supported: true
    },
    'patch-manager-plus-onprem_freshservice-cloud': {
        supported: true,
        features: [
            { 
                name: 'Deploy software packages from FreshService tickets',
                id: 'pmp-op-freshservice-deploy-software'
            },
            { 
                name: 'Remote control assets from FreshService tickets',
                id: 'pmp-op-freshservice-remote-control'
            },
            { 
                name: 'System manager tools of a machine can be remotely accessed from FreshService tickets',
                id: 'pmp-op-freshservice-system-tools'
            },
            { 
                name: 'Remote power options such as lock, hibernate, shutdown, Wake on LAN from FreshService tickets',
                id: 'pmp-op-freshservice-power-options'
            }
        ],
        documentation: [
            { title: 'PMP On-Premise to Freshservice Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-freshservice-cloud.html' },
            { title: 'Software Deployment from Tickets', url: 'https://www.manageengine.com/products/desktop-central/freshservice-software-deploy.html' },
            { title: 'Remote Control Configuration', url: 'https://www.manageengine.com/products/desktop-central/freshservice-remote-control.html' },
            { title: 'Freshservice API Documentation', url: 'https://api.freshservice.com/' }
        ]
    },
    
    // Patch Manager Plus + PowerBI Integrations,
    'patch-manager-plus-onprem_halopsa-cloud': {
        supported: true
    },
    'patch-manager-plus-onprem_jira-cloud': {
        supported: true,
        features: [
            { 
                name: 'Load iFrame from Jira',
                id: 'pmp-op-jira-iframe'
            },
            { 
                name: 'Remote control asset from Jira',
                id: 'pmp-op-jira-remote-control'
            },
            { 
                name: 'Asset data are pulled into Jira from EC',
                id: 'pmp-op-jira-asset-data'
            },
            { 
                name: 'Perform tools action from Jira',
                id: 'pmp-op-jira-tools-action'
            }
        ],
        documentation: [
            { title: 'PMP On-Premise to Jira Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-jira-cloud.html' },
            { title: 'iFrame Configuration', url: 'https://www.manageengine.com/products/desktop-central/jira-iframe-setup.html' },
            { title: 'Remote Control from Jira', url: 'https://www.manageengine.com/products/desktop-central/jira-remote-control.html' },
            { title: 'Jira API Documentation', url: 'https://developer.atlassian.com/cloud/jira/' }
        ]
    },
    'patch-manager-plus-onprem_jira-onprem': {
        supported: true,
        features: [
            { 
                name: 'Load iFrame from Jira',
                id: 'pmp-op-jira-op-iframe'
            },
            { 
                name: 'Remote control asset from Jira',
                id: 'pmp-op-jira-op-remote-control'
            },
            { 
                name: 'Asset data are pulled into Jira from EC',
                id: 'pmp-op-jira-op-asset-data'
            },
            { 
                name: 'Perform tools action from Jira',
                id: 'pmp-op-jira-op-tools-action'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-jira-onprem-integration.html' },
            { title: 'iFrame Configuration', url: 'https://www.manageengine.com/products/desktop-central/jira-iframe-setup.html' },
            { title: 'Remote Control from Jira', url: 'https://www.manageengine.com/products/desktop-central/jira-remote-control.html' },
            { title: 'Jira Server Documentation', url: 'https://confluence.atlassian.com/jiraserver/' }
        ]
    },
    
    // Patch Manager Plus + Zendesk Integrations,
    'patch-manager-plus-onprem_log360-onprem': {
        supported: true,
        features: [
            // { 
            //     name: 'Patch data are pulled into ELA from PMP - Approve and install patches directly through incident workflows',
            //     id: 'pmp-op-ela-op-patch-data'
            // },
            // { 
            //     name: 'Vulnerability and system misconfiguration data are pulled into ELA from PMP - Identify devices with vulnerabilities or misconfigurations using custom correlation rules and alerts',
            //     id: 'pmp-op-ela-op-vulnerability-data'
            // },
            // { 
            //     name: 'Comparators can be created in ELA and custom correlation rules and custom alert profiles can be created for those comparators',
            //     id: 'pmp-op-ela-op-comparators'
            // },
            { 
                name: 'Audit logs in Action log viewer will be posted from PMP to ELA',
                id: 'pmp-op-ela-op-audit-logs'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-ela-onprem-integration.html' },
            { title: 'Audit Log Configuration', url: 'https://www.manageengine.com/products/desktop-central/audit-logs-ela.html' },
            { title: 'Patch Workflow Configuration', url: 'https://www.manageengine.com/products/desktop-central/patch-workflow-ela.html' },
            { title: 'Custom Correlation Rules', url: 'https://www.manageengine.com/products/desktop-central/correlation-rules.html' }
        ]
    },
    
    // Patch Manager Plus + Analytics Plus Integrations,
    'patch-manager-plus-onprem_pam360-cloud': {
        supported: false
    },
    'patch-manager-plus-onprem_pam360-onprem': {
        supported: false
    },
    'patch-manager-plus-onprem_powerbi-cloud': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'pmp-op-powerbi-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'pmp-op-powerbi-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'pmp-op-powerbi-default-sync-3'
            }
        ],
        documentation: [
            { title: 'PMP On-Premise to PowerBI Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-powerbi-cloud.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-powerbi.html' },
            { title: 'PowerBI Dashboard Configuration', url: 'https://www.manageengine.com/products/desktop-central/powerbi-dashboard.html' },
            { title: 'PowerBI Documentation', url: 'https://docs.microsoft.com/en-us/power-bi/' }
        ]
    },
    'patch-manager-plus-onprem_powerbi-onprem': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'pmp-op-powerbi-op-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'pmp-op-powerbi-op-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'pmp-op-powerbi-op-default-sync-3'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-powerbi-onprem-integration.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-powerbi.html' },
            { title: 'PowerBI Report Server Setup', url: 'https://www.manageengine.com/products/desktop-central/powerbi-report-server.html' },
            { title: 'PowerBI Documentation', url: 'https://docs.microsoft.com/en-us/power-bi/' }
        ]
    },
    
    // Patch Manager Plus + IBM QRadar Integrations,
    'patch-manager-plus-onprem_qualys-cloud': {
        supported: false
    },
    'patch-manager-plus-onprem_rapid7-insightvm-cloud': {
        supported: false
    },
    'patch-manager-plus-onprem_rapid7-insightvm-onprem': {
        supported: false
    },
    'patch-manager-plus-onprem_servicedesk-plus-cloud': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset sync from PMP to SDP',
                id: 'pmp-op-sdp-inventory-sync'
            },
            { 
                name: 'Auto-assign users',
                id: 'pmp-op-sdp-auto-assign'
            },
            { 
                name: 'Action to be performed on SDP asset when the asset is removed from SOM in Patch Manager Plus (Beta)',
                id: 'pmp-op-sdp-asset-removal-beta'
            },
            { 
                name: 'Action to be performed on SDP software, when the commercial software is removed from EC',
                id: 'pmp-op-sdp-software-removal'
            },
            { 
                name: 'Inventory alerts are created as SDP tickets',
                id: 'pmp-op-sdp-inventory-alerts'
            },
            { 
                name: 'Trayicon requests are created as SDP tickets',
                id: 'pmp-op-sdp-trayicon'
            }
        ],
        documentation: [
            { title: 'PMP On-Premise to SDP Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-sdp-cloud.html' },
            { title: 'Auto-assign Configuration', url: 'https://www.manageengine.com/products/desktop-central/auto-assign-users.html' },
            { title: 'Alert Ticketing Setup', url: 'https://www.manageengine.com/products/desktop-central/alert-ticketing.html' }
        ]
    },
    'patch-manager-plus-onprem_servicedesk-plus-msp-cloud': {
        supported: false
    },
    'patch-manager-plus-onprem_servicedesk-plus-msp-onprem': {
        supported: true
    },
    'patch-manager-plus-onprem_servicedesk-plus-onprem': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset data sync',
                id: 'pmp-op-sdp-op-inventory-sync'
            },
            // { 
            //     name: 'Auto-assign users',
            //     id: 'pmp-op-sdp-op-auto-assign'
            // },
            // { 
            //     name: 'Action to be performed on SDP asset when the asset is removed from SOM in Patch Manager Plus',
            //     id: 'pmp-op-sdp-op-asset-removal'
            // },
            // { 
            //     name: 'User-defined templates can be deployed from SDP tickets',
            //     id: 'pmp-op-sdp-op-deploy-templates'
            // },
            // { 
            //     name: 'User-defined software packages can be deployed from SDP tickets',
            //     id: 'pmp-op-sdp-op-deploy-packages'
            // },
            // { 
            //     name: 'SSP requests are created as SDP tickets and software will be automatically installed upon approval',
            //     id: 'pmp-op-sdp-op-ssp-auto-install'
            // },
            // { 
            //     name: 'Request for prohibited software are created as SDP tickets',
            //     id: 'pmp-op-sdp-op-prohibited-software'
            // },
            // { 
            //     name: 'Inventory alerts are created as SDP tickets',
            //     id: 'pmp-op-sdp-op-inventory-alerts'
            // },
            // { 
            //     name: 'Trayicon requests are created as SDP tickets',
            //     id: 'pmp-op-sdp-op-trayicon'
            // },
            // { 
            //     name: 'Remote control assets from SDP',
            //     id: 'pmp-op-sdp-op-remote-control'
            // },
            // { 
            //     name: 'Perform tools action from SDP',
            //     id: 'pmp-op-sdp-op-tools-action'
            // },
            { 
                name: 'Load Patch Manager Plus as iFrame within SDP',
                id: 'pmp-op-sdp-op-iframe'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-sdp-onprem-integration.html' },
            { title: 'Template Deployment Setup', url: 'https://www.manageengine.com/products/desktop-central/template-deployment.html' },
            { title: 'SSP Auto-Install Configuration', url: 'https://www.manageengine.com/products/desktop-central/ssp-auto-install.html' },
            { title: 'Prohibited Software Management', url: 'https://www.manageengine.com/products/desktop-central/prohibited-software.html' }
        ]
    },
    
    // Patch Manager Plus + Asset Explorer Integrations,
    'patch-manager-plus-onprem_servicenow-cloud': {
        supported: true,
        features: [
            { 
                name: 'Asset data post from PMP to ServiceNow',
                id: 'pmp-op-snow-basic-asset-post'
            },
            { 
                name: 'Choose whether to remove an asset from ServiceNow if it is removed from Patch Manager Plus SoM',
                id: 'pmp-op-snow-basic-asset-removal'
            },
            { 
                name: 'Assign last logged as the asset\'s owner in ServiceNow',
                id: 'pmp-op-snow-basic-owner-assign'
            }
        ],
        documentation: [
            { title: 'PMP On-Premise to ServiceNow Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-servicenow-cloud.html' },
            { title: 'Asset Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/servicenow-asset-sync.html' },
            { title: 'CMDB Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/servicenow-cmdb.html' },
            { title: 'ServiceNow API Guide', url: 'https://docs.servicenow.com/' }
        ]
    },
    'patch-manager-plus-onprem_servicenow-onprem': {
        supported: true,
        features: [
            { 
                name: 'Asset data post from PMP to ServiceNow',
                id: 'pmp-op-snow-basic-op-asset-post'
            },
            { 
                name: 'Choose whether to remove an asset from ServiceNow if it is removed from Patch Manager Plus SoM',
                id: 'pmp-op-snow-basic-op-asset-removal'
            },
            { 
                name: 'Assign last logged as the asset\'s owner in ServiceNow',
                id: 'pmp-op-snow-basic-op-owner-assign'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-servicenow-onprem-integration.html' },
            { title: 'Asset Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/servicenow-asset-sync.html' },
            { title: 'CMDB Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/servicenow-cmdb.html' },
            { title: 'ServiceNow API Guide', url: 'https://docs.servicenow.com/' }
        ]
    },
    
    // Patch Manager Plus + ServiceNow SGC Integrations,
    'patch-manager-plus-onprem_splunk-cloud': {
        supported: true,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from PMP to Splunk',
                id: 'pmp-op-splunk-audit-logs'
            },
            { 
                name: 'Vulnerability data is synced from PMP to Splunk',
                id: 'pmp-op-splunk-vuln-data'
            }
        ],
        documentation: [
            { title: 'PMP On-Premise to Splunk Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-splunk-cloud.html' },
            { title: 'Audit Log Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/splunk-audit-sync.html' },
            { title: 'Vulnerability Data Export Setup', url: 'https://www.manageengine.com/products/desktop-central/splunk-vulnerability-sync.html' },
            { title: 'Splunk Documentation', url: 'https://docs.splunk.com/' }
        ]
    },
    'patch-manager-plus-onprem_splunk-onprem': {
        supported: true,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from PMP to Splunk',
                id: 'pmp-op-splunk-op-audit-logs'
            },
            { 
                name: 'Vulnerability data is synced from PMP to Splunk',
                id: 'pmp-op-splunk-op-vuln-data'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-splunk-onprem-integration.html' },
            { title: 'Syslog Configuration for Splunk', url: 'https://www.manageengine.com/products/desktop-central/splunk-syslog-setup.html' },
            { title: 'Vulnerability Data Export Setup', url: 'https://www.manageengine.com/products/desktop-central/splunk-vulnerability-sync.html' },
            { title: 'Splunk Enterprise Documentation', url: 'https://docs.splunk.com/Documentation/Splunk' }
        ]
    },
    
    // Patch Manager Plus + Syslog / SIEM Integrations (On-Prem only),
    'patch-manager-plus-onprem_syslog-siem-cloud': {
        supported: false,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from PMP to Syslog/SIEM',
                id: 'pmp-op-syslog-cloud-audit-logs'
            }
        ],
        documentation: [
            { title: 'PMP-Syslog Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/syslog-integration.html' },
            { title: 'Audit Log Forwarding Setup', url: 'https://www.manageengine.com/products/desktop-central/audit-log-forwarding.html' },
            { title: 'Syslog Configuration', url: 'https://www.manageengine.com/products/desktop-central/syslog-setup.html' },
            { title: 'SIEM Integration Best Practices', url: 'https://www.manageengine.com/products/desktop-central/siem-best-practices.html' }
        ]
    },
    'patch-manager-plus-onprem_syslog-siem-onprem': {
        supported: true,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from PMP to Syslog/SIEM',
                id: 'pmp-op-syslog-op-audit-logs'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Syslog Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-syslog-onprem-integration.html' },
            { title: 'Audit Log Forwarding Setup', url: 'https://www.manageengine.com/products/desktop-central/audit-log-forwarding.html' },
            { title: 'Syslog Configuration', url: 'https://www.manageengine.com/products/desktop-central/syslog-setup.html' },
            { title: 'SIEM Integration Best Practices', url: 'https://www.manageengine.com/products/desktop-central/siem-best-practices.html' }
        ]
    },

    // ════════════════════════════════════════════════════════════
    // Remote Access Plus (RAP) Integrations
    // ════════════════════════════════════════════════════════════


    // Remote Access Plus + ServiceDesk Plus Integrations,
    'patch-manager-plus-onprem_tenable-sc-onprem': {
        supported: false
    },
    'patch-manager-plus-onprem_tenable-vm-cloud': {
        supported: false
    },
    'patch-manager-plus-onprem_zendesk-cloud': {
        supported: true,
        features: [
            { 
                name: 'Deploy software packages from Zendesk tickets',
                id: 'pmp-op-zendesk-deploy-software'
            },
            { 
                name: 'Remote control assets from Zendesk tickets',
                id: 'pmp-op-zendesk-remote-control'
            },
            { 
                name: 'System manager tools of a machine can be remotely accessed from Zendesk tickets',
                id: 'pmp-op-zendesk-system-tools'
            },
            { 
                name: 'Remote power options such as lock, hibernate, shutdown, Wake on LAN from Zendesk tickets',
                id: 'pmp-op-zendesk-power-options'
            }
        ],
        documentation: [
            { title: 'PMP On-Premise to Zendesk Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-zendesk-cloud.html' },
            { title: 'Software Deployment from Tickets', url: 'https://www.manageengine.com/products/desktop-central/zendesk-software-deploy.html' },
            { title: 'Remote Control Configuration', url: 'https://www.manageengine.com/products/desktop-central/zendesk-remote-control.html' },
            { title: 'Zendesk API Documentation', url: 'https://developer.zendesk.com/api-reference/' }
        ]
    },
    
    // Patch Manager Plus + Freshservice Integrations,
    'patch-manager-plus-onprem_zoho-flow-cloud': {
        supported: false
    },

    // ── Probe Integrations ──────────────────────────────────────
    'probe-cloud_analytics-plus-cloud': {
        supported: false
    },
    'probe-cloud_analytics-plus-onprem': {
        supported: false
    },
    'probe-cloud_asset-explorer-cloud': {
        supported: false
    },
    'probe-cloud_asset-explorer-onprem': {
        supported: false
    },
    'probe-cloud_connectwise-cloud': {
        supported: false
    },
    'probe-cloud_crowdstrike-cloud': {
        supported: false
    },
    'probe-cloud_freshdesk-cloud': {
        supported: false
    },
    'probe-cloud_freshservice-cloud': {
        supported: false
    },
    'probe-cloud_halopsa-cloud': {
        supported: false
    },
    'probe-cloud_jira-cloud': {
        supported: false
    },
    'probe-cloud_jira-onprem': {
        supported: false
    },
    'probe-cloud_log360-onprem': {
        supported: false
    },
    'probe-cloud_pam360-cloud': {
        supported: false
    },
    'probe-cloud_pam360-onprem': {
        supported: false
    },
    'probe-cloud_powerbi-cloud': {
        supported: false
    },
    'probe-cloud_powerbi-onprem': {
        supported: false
    },
    'probe-cloud_qualys-cloud': {
        supported: false
    },
    'probe-cloud_rapid7-insightvm-cloud': {
        supported: false
    },
    'probe-cloud_rapid7-insightvm-onprem': {
        supported: false
    },
    'probe-cloud_servicedesk-plus-cloud': {
        supported: false
    },
    'probe-cloud_servicedesk-plus-msp-cloud': {
        supported: false
    },
    'probe-cloud_servicedesk-plus-msp-onprem': {
        supported: false
    },
    'probe-cloud_servicedesk-plus-onprem': {
        supported: false
    },
    'probe-cloud_servicenow-cloud': {
        supported: false
    },
    'probe-cloud_servicenow-onprem': {
        supported: false
    },
    'probe-cloud_splunk-cloud': {
        supported: false
    },
    'probe-cloud_splunk-onprem': {
        supported: false
    },
    'probe-cloud_syslog-siem-onprem': {
        supported: false
    },
    'probe-cloud_tenable-sc-onprem': {
        supported: false
    },
    'probe-cloud_tenable-vm-cloud': {
        supported: false
    },
    'probe-cloud_zendesk-cloud': {
        supported: false
    },
    'probe-cloud_zoho-flow-cloud': {
        supported: false
    },
    'probe-onprem_analytics-plus-cloud': {
        supported: false
    },
    'probe-onprem_analytics-plus-onprem': {
        supported: false
    },
    'probe-onprem_asset-explorer-cloud': {
        supported: false
    },
    'probe-onprem_asset-explorer-onprem': {
        supported: false
    },
    'probe-onprem_connectwise-cloud': {
        supported: false
    },
    'probe-onprem_crowdstrike-cloud': {
        supported: false
    },
    'probe-onprem_freshdesk-cloud': {
        supported: false
    },
    'probe-onprem_freshservice-cloud': {
        supported: false
    },
    'probe-onprem_halopsa-cloud': {
        supported: false
    },
    'probe-onprem_jira-cloud': {
        supported: false
    },
    'probe-onprem_jira-onprem': {
        supported: false
    },
    'probe-onprem_log360-onprem': {
        supported: false
    },
    'probe-onprem_pam360-cloud': {
        supported: false
    },
    'probe-onprem_pam360-onprem': {
        supported: false
    },
    'probe-onprem_powerbi-cloud': {
        supported: false
    },
    'probe-onprem_powerbi-onprem': {
        supported: false
    },
    'probe-onprem_qualys-cloud': {
        supported: false
    },
    'probe-onprem_rapid7-insightvm-cloud': {
        supported: false
    },
    'probe-onprem_rapid7-insightvm-onprem': {
        supported: false
    },
    'probe-onprem_servicedesk-plus-cloud': {
        supported: false
    },
    'probe-onprem_servicedesk-plus-msp-cloud': {
        supported: false
    },
    'probe-onprem_servicedesk-plus-msp-onprem': {
        supported: false
    },
    'probe-onprem_servicedesk-plus-onprem': {
        supported: false
    },
    'probe-onprem_servicenow-cloud': {
        supported: false
    },
    'probe-onprem_servicenow-onprem': {
        supported: false
    },
    'probe-onprem_splunk-cloud': {
        supported: false
    },
    'probe-onprem_splunk-onprem': {
        supported: false
    },
    'probe-onprem_syslog-siem-onprem': {
        supported: false
    },
    'probe-onprem_tenable-sc-onprem': {
        supported: false
    },
    'probe-onprem_tenable-vm-cloud': {
        supported: false
    },
    'probe-onprem_zendesk-cloud': {
        supported: false
    },
    'probe-onprem_zoho-flow-cloud': {
        supported: false
    },

    // ── Remote Access Plus Integrations ──────────────────────────────────────
    'remote-access-plus-cloud_analytics-plus-cloud': {
        supported: false,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'rap-ap-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'rap-ap-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'rap-ap-default-sync-3'
            },
            { 
                name: 'Optional data synchronization: Users, Groups, BIOS, CD ROM DRIVE, Monitor, Disk drives, Logical disk, Motherboard, Keyboard, Mouse, Physical memory',
                id: 'rap-ap-optional-sync-1'
            },
            { 
                name: 'Optional data synchronization: POTS modem, Processors, Serial port, Video controller, USB controller, Printers, Drivers, Share details, File details',
                id: 'rap-ap-optional-sync-2'
            },
            { 
                name: 'Optional data synchronization: User logon history, Scheduled tasks info, Software audit history, Hardware audit history, Computer and hardware mapping, Computer and group association, Custom groups and associated users',
                id: 'rap-ap-optional-sync-3'
            },
            { 
                name: 'Optional data synchronization: Trusted Platform Module',
                id: 'rap-ap-optional-sync-4'
            }
        ],
        documentation: [
            { title: 'RAP-Analytics Plus Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/analytics-plus-integration.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-analytics.html' },
            { title: 'Custom Reports Configuration', url: 'https://www.manageengine.com/products/desktop-central/custom-reports.html' },
            { title: 'Analytics Dashboard Guide', url: 'https://www.manageengine.com/products/desktop-central/analytics-dashboard.html' }
        ]
    },
    'remote-access-plus-cloud_asset-explorer-cloud': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset sync from RAP to AE',
                id: 'rap-ae-inventory-sync'
            },
            { 
                name: 'Remote control asset from AE tickets',
                id: 'rap-ae-remote-control'
            },
            { 
                name: 'Deploy software from AE tickets',
                id: 'rap-ae-deploy-software'
            },
            { 
                name: 'Perform tools action from AE tickets',
                id: 'rap-ae-tools-action'
            },
            { 
                name: 'Loading iFrame of RAP within AE',
                id: 'rap-ae-iframe'
            },
            { 
                name: 'Action to be performed on AE asset when the asset is removed from SOM in Remote Access Plus (Beta)',
                id: 'rap-ae-asset-removal-beta'
            },
            { 
                name: 'Trayicon requests are created as AE tickets (Beta)',
                id: 'rap-ae-trayicon-beta'
            },
            { 
                name: 'SSP requests are created as AE tickets (Beta)',
                id: 'rap-ae-ssp-beta'
            }
        ],
        documentation: [
            { title: 'RAP-AE Cloud Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ae-cloud-integration.html' },
            { title: 'Asset Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/asset-sync-setup.html' },
            { title: 'Remote Control Setup', url: 'https://www.manageengine.com/products/desktop-central/remote-control-ae.html' },
            { title: 'iFrame Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/iframe-integration.html' }
        ]
    },
    'remote-access-plus-cloud_asset-explorer-onprem': {
        supported: true,
        betaRelease: true,
        features: [
            { 
                name: 'Inventory asset sync from RAP to AE',
                id: 'rap-ae-op-inventory-sync'
            }
        ],
        documentation: [
            { title: 'RAP Cloud to AE On-Premise Integration', url: 'https://www.manageengine.com/products/desktop-central/ae-onprem-integration.html' },
            { title: 'Beta Release Notes', url: 'https://www.manageengine.com/products/desktop-central/beta-release-notes.html' },
            { title: 'Hybrid Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/hybrid-setup.html' }
        ]
    },
    'remote-access-plus-cloud_connectwise-cloud': {
        supported: true
    },
    'remote-access-plus-cloud_crowdstrike-cloud': {
        supported: false
    },
    'remote-access-plus-cloud_freshdesk-cloud': {
        supported: true
    },
    'remote-access-plus-cloud_freshservice-cloud': {
        supported: true,
        features: [
            { 
                name: 'Deploy software packages from FreshService tickets',
                id: 'rap-freshservice-deploy-software'
            },
            { 
                name: 'Remote control assets from FreshService tickets',
                id: 'rap-freshservice-remote-control'
            },
            { 
                name: 'System manager tools of a machine can be remotely accessed from FreshService tickets',
                id: 'rap-freshservice-system-tools'
            },
            { 
                name: 'Remote power options such as lock, hibernate, shutdown, Wake on LAN from FreshService tickets',
                id: 'rap-freshservice-power-options'
            }
        ],
        documentation: [
            { title: 'RAP-Freshservice Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/freshservice-integration.html' },
            { title: 'Software Deployment from Tickets', url: 'https://www.manageengine.com/products/desktop-central/freshservice-software-deploy.html' },
            { title: 'Remote Control Configuration', url: 'https://www.manageengine.com/products/desktop-central/freshservice-remote-control.html' },
            { title: 'Freshservice API Documentation', url: 'https://api.freshservice.com/' }
        ]
    },
    'remote-access-plus-cloud_halopsa-cloud': {
        supported: true
    },
    'remote-access-plus-cloud_jira-cloud': {
        supported: true,
        features: [
            { 
                name: 'Load iFrame from Jira',
                id: 'rap-jira-iframe'
            },
            { 
                name: 'Remote control asset from Jira',
                id: 'rap-jira-remote-control'
            },
            { 
                name: 'Asset data are pulled into Jira from EC',
                id: 'rap-jira-asset-data'
            },
            { 
                name: 'Perform tools action from Jira',
                id: 'rap-jira-tools-action'
            }
        ],
        documentation: [
            { title: 'RAP-Jira Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/jira-integration.html' },
            { title: 'iFrame Configuration', url: 'https://www.manageengine.com/products/desktop-central/jira-iframe-setup.html' },
            { title: 'Remote Control from Jira', url: 'https://www.manageengine.com/products/desktop-central/jira-remote-control.html' },
            { title: 'Jira API Documentation', url: 'https://developer.atlassian.com/cloud/jira/' }
        ]
    },
    'remote-access-plus-cloud_log360-onprem': {
        supported: false,
        features: [
            { 
                name: 'Patch data are pulled into ELA from RAP - Approve and install patches directly through incident workflows',
                id: 'rap-ela-patch-data'
            },
            { 
                name: 'Vulnerability and system misconfiguration data are pulled into ELA from RAP - Identify devices with vulnerabilities or misconfigurations using custom correlation rules and alerts',
                id: 'rap-ela-vulnerability-data'
            },
            { 
                name: 'Comparators can be created in ELA and custom correlation rules and custom alert profiles can be created for those comparators',
                id: 'rap-ela-comparators'
            }
        ],
        documentation: [
            { title: 'RAP-ELA Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ela-integration.html' },
            { title: 'Patch Workflow Configuration', url: 'https://www.manageengine.com/products/desktop-central/patch-workflow-ela.html' },
            { title: 'Custom Correlation Rules', url: 'https://www.manageengine.com/products/desktop-central/correlation-rules.html' },
            { title: 'Alert Profile Setup', url: 'https://www.manageengine.com/products/desktop-central/alert-profiles.html' }
        ]
    },
    'remote-access-plus-cloud_pam360-cloud': {
        supported: false
    },
    'remote-access-plus-cloud_pam360-onprem': {
        supported: false
    },
    'remote-access-plus-cloud_powerbi-cloud': {
        supported: false,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'rap-powerbi-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'rap-powerbi-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'rap-powerbi-default-sync-3'
            }
        ],
        documentation: [
            { title: 'RAP-PowerBI Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/powerbi-integration.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-powerbi.html' },
            { title: 'PowerBI Dashboard Configuration', url: 'https://www.manageengine.com/products/desktop-central/powerbi-dashboard.html' },
            { title: 'PowerBI Documentation', url: 'https://docs.microsoft.com/en-us/power-bi/' }
        ]
    },
    'remote-access-plus-cloud_powerbi-onprem': {
        supported: false,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'rap-powerbi-op-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'rap-powerbi-op-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'rap-powerbi-op-default-sync-3'
            }
        ],
        documentation: [
            { title: 'RAP Cloud to PowerBI On-Premise Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-cloud-powerbi-onprem.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-powerbi.html' },
            { title: 'PowerBI Report Server Setup', url: 'https://www.manageengine.com/products/desktop-central/powerbi-report-server.html' },
            { title: 'PowerBI Documentation', url: 'https://docs.microsoft.com/en-us/power-bi/' }
        ]
    },
    'remote-access-plus-cloud_qualys-cloud': {
        supported: false
    },
    'remote-access-plus-cloud_rapid7-insightvm-cloud': {
        supported: false
    },
    'remote-access-plus-cloud_rapid7-insightvm-onprem': {
        supported: false
    },
    'remote-access-plus-cloud_servicedesk-plus-cloud': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset sync from RAP to SDP',
                id: 'rap-sdp-inventory-sync'
            },
            { 
                name: 'Remote control asset from SDP tickets',
                id: 'rap-sdp-remote-control'
            },
            { 
                name: 'Deploy software from SDP tickets',
                id: 'rap-sdp-deploy-software'
            },
            { 
                name: 'Perform tools action from SDP tickets',
                id: 'rap-sdp-tools-action'
            },
            { 
                name: 'Loading iFrame of RAP within SDP',
                id: 'rap-sdp-iframe'
            },
            { 
                name: 'Action to be performed on SDP asset when the asset is removed from SOM in Remote Access Plus (Beta)',
                id: 'rap-sdp-asset-removal-beta'
            },
            { 
                name: 'Trayicon requests are created as SDP tickets (Beta)',
                id: 'rap-sdp-trayicon-beta'
            },
            { 
                name: 'SSP requests are created as SDP tickets (Beta)',
                id: 'rap-sdp-ssp-beta'
            }
        ],
        documentation: [
            { title: 'RAP-SDP Cloud Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/help/configuring_desktop_central/integrating-with-servicedesk-plus-cloud.html' },
            { title: 'Configuring EC extension for SDP Cloud', url: 'https://help.sdpondemand.com/endpoint-central-extension' },
            { title: 'Troubleshooting errors while enabling integration', url: 'https://www.manageengine.com/products/desktop-central/kb/sdp-on-demand.html' },
            { title: 'Troubleshooting asset sync between ECOD-SDPOD', url: 'https://zask.pali.io/zask/EMSTechAsk/questions/8639642606' }
        ]
    },
    'remote-access-plus-cloud_servicedesk-plus-msp-cloud': {
        supported: false
    },
    'remote-access-plus-cloud_servicedesk-plus-msp-onprem': {
        supported: false
    },
    'remote-access-plus-cloud_servicedesk-plus-onprem': {
        supported: true,
        betaRelease: true,
        features: [
            { 
                name: 'Inventory asset sync from RAP to SDP',
                id: 'rap-sdp-op-inventory-sync'
            }
        ],
        documentation: [
            { title: 'RAP Cloud to SDP On-Premise Integration', url: 'https://www.manageengine.com/products/desktop-central/sdp-onprem-integration.html' },
            { title: 'Beta Release Notes', url: 'https://www.manageengine.com/products/desktop-central/beta-release-notes.html' },
            { title: 'Hybrid Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/hybrid-setup.html' }
        ]
    },
    'remote-access-plus-cloud_servicenow-cloud': {
        supported: true,
        features: [
            { 
                name: 'Asset data post from RAP to ServiceNow',
                id: 'rap-snow-basic-asset-post'
            },
            { 
                name: 'Choose whether to remove an asset from ServiceNow if it is removed from Remote Access Plus SoM',
                id: 'rap-snow-basic-asset-removal'
            },
            { 
                name: 'Assign last logged as the asset\'s owner in ServiceNow',
                id: 'rap-snow-basic-owner-assign'
            }
        ],
        documentation: [
            { title: 'RAP-ServiceNow Basic Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/servicenow-integration.html' },
            { title: 'Asset Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/servicenow-asset-sync.html' },
            { title: 'CMDB Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/servicenow-cmdb.html' },
            { title: 'ServiceNow API Guide', url: 'https://docs.servicenow.com/' }
        ]
    },
    'remote-access-plus-cloud_servicenow-onprem': {
        supported: false
    },
    'remote-access-plus-cloud_splunk-cloud': {
        supported: false,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from RAP to Splunk',
                id: 'rap-splunk-audit-logs'
            },
            { 
                name: 'Vulnerability data is synced from RAP to Splunk',
                id: 'rap-splunk-vuln-data'
            }
        ],
        documentation: [
            { title: 'RAP-Splunk Cloud Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/splunk-cloud-integration.html' },
            { title: 'Audit Log Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/splunk-audit-sync.html' },
            { title: 'Vulnerability Data Export Setup', url: 'https://www.manageengine.com/products/desktop-central/splunk-vulnerability-sync.html' },
            { title: 'Splunk Documentation', url: 'https://docs.splunk.com/' }
        ]
    },
    'remote-access-plus-cloud_splunk-onprem': {
        supported: false,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from RAP to Splunk',
                id: 'rap-splunk-op-audit-logs'
            },
            { 
                name: 'Vulnerability data is synced from RAP to Splunk',
                id: 'rap-splunk-op-vuln-data'
            }
        ],
        documentation: [
            { title: 'RAP Cloud to Splunk On-Premise Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-cloud-splunk-onprem.html' },
            { title: 'Audit Log Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/splunk-audit-sync.html' },
            { title: 'Vulnerability Data Export Setup', url: 'https://www.manageengine.com/products/desktop-central/splunk-vulnerability-sync.html' },
            { title: 'Splunk Enterprise Documentation', url: 'https://docs.splunk.com/Documentation/Splunk' }
        ]
    },
    'remote-access-plus-cloud_tenable-sc-onprem': {
        supported: false
    },
    'remote-access-plus-cloud_tenable-vm-cloud': {
        supported: false
    },
    'remote-access-plus-cloud_zendesk-cloud': {
        supported: true,
        features: [
            { 
                name: 'Deploy software packages from Zendesk tickets',
                id: 'rap-zendesk-deploy-software'
            },
            { 
                name: 'Remote control assets from Zendesk tickets',
                id: 'rap-zendesk-remote-control'
            },
            { 
                name: 'System manager tools of a machine can be remotely accessed from Zendesk tickets',
                id: 'rap-zendesk-system-tools'
            },
            { 
                name: 'Remote power options such as lock, hibernate, shutdown, Wake on LAN from Zendesk tickets',
                id: 'rap-zendesk-power-options'
            }
        ],
        documentation: [
            { title: 'RAP-Zendesk Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/zendesk-integration.html' },
            { title: 'Software Deployment from Tickets', url: 'https://www.manageengine.com/products/desktop-central/zendesk-software-deploy.html' },
            { title: 'Remote Control Configuration', url: 'https://www.manageengine.com/products/desktop-central/zendesk-remote-control.html' },
            { title: 'Zendesk API Documentation', url: 'https://developer.zendesk.com/api-reference/' }
        ]
    },
    'remote-access-plus-cloud_zoho-flow-cloud': {
        supported: true
    },
    'remote-access-plus-onprem_analytics-plus-cloud': {
        supported: false,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'rap-op-ap-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'rap-op-ap-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'rap-op-ap-default-sync-3'
            },
            { 
                name: 'Optional data synchronization: Users, Groups, BIOS, CD ROM DRIVE, Monitor, Disk drives, Logical disk, Motherboard, Keyboard, Mouse, Physical memory',
                id: 'rap-op-ap-optional-sync-1'
            },
            { 
                name: 'Optional data synchronization: POTS modem, Processors, Serial port, Video controller, USB controller, Printers, Drivers, Share details, File details',
                id: 'rap-op-ap-optional-sync-2'
            },
            { 
                name: 'Optional data synchronization: User logon history, Scheduled tasks info, Software audit history, Hardware audit history, Computer and hardware mapping, Computer and group association, Custom groups and associated users',
                id: 'rap-op-ap-optional-sync-3'
            },
            { 
                name: 'Optional data synchronization: Trusted Platform Module',
                id: 'rap-op-ap-optional-sync-4'
            }
        ],
        documentation: [
            { title: 'RAP On-Premise to Analytics Plus Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-analytics-cloud.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-analytics.html' },
            { title: 'Custom Reports Configuration', url: 'https://www.manageengine.com/products/desktop-central/custom-reports.html' },
            { title: 'Analytics Dashboard Guide', url: 'https://www.manageengine.com/products/desktop-central/analytics-dashboard.html' }
        ]
    },
    'remote-access-plus-onprem_analytics-plus-onprem': {
        supported: false,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'rap-op-ap-op-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'rap-op-ap-op-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'rap-op-ap-op-default-sync-3'
            },
            { 
                name: 'Optional data synchronization: Users, Groups, BIOS, CD ROM DRIVE, Monitor, Disk drives, Logical disk, Motherboard, Keyboard, Mouse, Physical memory',
                id: 'rap-op-ap-op-optional-sync-1'
            },
            { 
                name: 'Optional data synchronization: POTS modem, Processors, Serial port, Video controller, USB controller, Printers, Drivers, Share details, File details',
                id: 'rap-op-ap-op-optional-sync-2'
            },
            { 
                name: 'Optional data synchronization: User logon history, Scheduled tasks info, Software audit history, Hardware audit history, Computer and hardware mapping, Computer and group association, Custom groups and associated users',
                id: 'rap-op-ap-op-optional-sync-3'
            },
            { 
                name: 'Optional data synchronization: Trusted Platform Module',
                id: 'rap-op-ap-op-optional-sync-4'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-analytics-onprem-integration.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-analytics.html' },
            { title: 'Custom Reports Configuration', url: 'https://www.manageengine.com/products/desktop-central/custom-reports.html' },
            { title: 'Analytics Dashboard Guide', url: 'https://www.manageengine.com/products/desktop-central/analytics-dashboard.html' }
        ]
    },
    
    // Remote Access Plus + ServiceNow (Basic) Integrations,
    'remote-access-plus-onprem_asset-explorer-cloud': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset sync from RAP to AE',
                id: 'rap-op-ae-inventory-sync'
            },
            { 
                name: 'Auto-assign users',
                id: 'rap-op-ae-auto-assign'
            },
            { 
                name: 'Action to be performed on AE asset when the asset is removed from SOM in Remote Access Plus (Beta)',
                id: 'rap-op-ae-asset-removal-beta'
            },
            { 
                name: 'Action to be performed on AE software, when the commercial software is removed from EC',
                id: 'rap-op-ae-software-removal'
            },
            { 
                name: 'Inventory alerts are created as AE tickets',
                id: 'rap-op-ae-inventory-alerts'
            },
            { 
                name: 'Trayicon requests are created as AE tickets',
                id: 'rap-op-ae-trayicon'
            }
        ],
        documentation: [
            { title: 'RAP On-Premise to AE Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-ae-cloud.html' },
            { title: 'Auto-assign Configuration', url: 'https://www.manageengine.com/products/desktop-central/auto-assign-users.html' },
            { title: 'Alert Ticketing Setup', url: 'https://www.manageengine.com/products/desktop-central/alert-ticketing.html' }
        ]
    },
    'remote-access-plus-onprem_asset-explorer-onprem': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset data sync',
                id: 'rap-op-ae-op-inventory-sync'
            },
            // { 
            //     name: 'Auto-assign users',
            //     id: 'rap-op-ae-op-auto-assign'
            // },
            // { 
            //     name: 'Action to be performed on AE asset when the asset is removed from SOM in Remote Access Plus',
            //     id: 'rap-op-ae-op-asset-removal'
            // },
            // { 
            //     name: 'User-defined templates can be deployed from AE tickets',
            //     id: 'rap-op-ae-op-deploy-templates'
            // },
            // { 
            //     name: 'User-defined software packages can be deployed from AE tickets',
            //     id: 'rap-op-ae-op-deploy-packages'
            // },
            // { 
            //     name: 'SSP requests are created as AE tickets and software will be automatically installed upon approval',
            //     id: 'rap-op-ae-op-ssp-auto-install'
            // },
            // { 
            //     name: 'Request for prohibited software are created as AE tickets',
            //     id: 'rap-op-ae-op-prohibited-software'
            // },
            // { 
            //     name: 'Inventory alerts are created as AE tickets',
            //     id: 'rap-op-ae-op-inventory-alerts'
            // },
            // { 
            //     name: 'Trayicon requests are created as AE tickets',
            //     id: 'rap-op-ae-op-trayicon'
            // },
            { 
                name: 'Remote control assets from AE',
                id: 'rap-op-ae-op-remote-control'
            },
            { 
                name: 'Perform tools action from AE',
                id: 'rap-op-ae-op-tools-action'
            },
            { 
                name: 'Load Remote Access Plus as iFrame within AE',
                id: 'rap-op-ae-op-iframe'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-ae-onprem-integration.html' },
            { title: 'Template Deployment Setup', url: 'https://www.manageengine.com/products/desktop-central/template-deployment.html' },
            { title: 'SSP Auto-Install Configuration', url: 'https://www.manageengine.com/products/desktop-central/ssp-auto-install.html' },
            { title: 'Prohibited Software Management', url: 'https://www.manageengine.com/products/desktop-central/prohibited-software.html' }
        ]
    },
    
    // Remote Access Plus + Event Log Analyzer / Log 360 Integrations,
    'remote-access-plus-onprem_connectwise-cloud': {
        supported: true
    },
    'remote-access-plus-onprem_crowdstrike-cloud': {
        supported: false
    },
    'remote-access-plus-onprem_freshdesk-cloud': {
        supported: true
    },
    'remote-access-plus-onprem_freshservice-cloud': {
        supported: true,
        features: [
            { 
                name: 'Deploy software packages from FreshService tickets',
                id: 'rap-op-freshservice-deploy-software'
            },
            { 
                name: 'Remote control assets from FreshService tickets',
                id: 'rap-op-freshservice-remote-control'
            },
            { 
                name: 'System manager tools of a machine can be remotely accessed from FreshService tickets',
                id: 'rap-op-freshservice-system-tools'
            },
            { 
                name: 'Remote power options such as lock, hibernate, shutdown, Wake on LAN from FreshService tickets',
                id: 'rap-op-freshservice-power-options'
            }
        ],
        documentation: [
            { title: 'RAP On-Premise to Freshservice Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-freshservice-cloud.html' },
            { title: 'Software Deployment from Tickets', url: 'https://www.manageengine.com/products/desktop-central/freshservice-software-deploy.html' },
            { title: 'Remote Control Configuration', url: 'https://www.manageengine.com/products/desktop-central/freshservice-remote-control.html' },
            { title: 'Freshservice API Documentation', url: 'https://api.freshservice.com/' }
        ]
    },
    
    // Remote Access Plus + PowerBI Integrations,
    'remote-access-plus-onprem_halopsa-cloud': {
        supported: true
    },
    'remote-access-plus-onprem_jira-cloud': {
        supported: true,
        features: [
            { 
                name: 'Load iFrame from Jira',
                id: 'rap-op-jira-iframe'
            },
            { 
                name: 'Remote control asset from Jira',
                id: 'rap-op-jira-remote-control'
            },
            { 
                name: 'Asset data are pulled into Jira from EC',
                id: 'rap-op-jira-asset-data'
            },
            { 
                name: 'Perform tools action from Jira',
                id: 'rap-op-jira-tools-action'
            }
        ],
        documentation: [
            { title: 'RAP On-Premise to Jira Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-jira-cloud.html' },
            { title: 'iFrame Configuration', url: 'https://www.manageengine.com/products/desktop-central/jira-iframe-setup.html' },
            { title: 'Remote Control from Jira', url: 'https://www.manageengine.com/products/desktop-central/jira-remote-control.html' },
            { title: 'Jira API Documentation', url: 'https://developer.atlassian.com/cloud/jira/' }
        ]
    },
    'remote-access-plus-onprem_jira-onprem': {
        supported: true,
        features: [
            { 
                name: 'Load iFrame from Jira',
                id: 'rap-op-jira-op-iframe'
            },
            { 
                name: 'Remote control asset from Jira',
                id: 'rap-op-jira-op-remote-control'
            },
            { 
                name: 'Asset data are pulled into Jira from EC',
                id: 'rap-op-jira-op-asset-data'
            },
            { 
                name: 'Perform tools action from Jira',
                id: 'rap-op-jira-op-tools-action'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-jira-onprem-integration.html' },
            { title: 'iFrame Configuration', url: 'https://www.manageengine.com/products/desktop-central/jira-iframe-setup.html' },
            { title: 'Remote Control from Jira', url: 'https://www.manageengine.com/products/desktop-central/jira-remote-control.html' },
            { title: 'Jira Server Documentation', url: 'https://confluence.atlassian.com/jiraserver/' }
        ]
    },
    
    // Remote Access Plus + Zendesk Integrations,
    'remote-access-plus-onprem_log360-onprem': {
        supported: true,
        features: [
            // { 
            //     name: 'Patch data are pulled into ELA from RAP - Approve and install patches directly through incident workflows',
            //     id: 'rap-op-ela-op-patch-data'
            // },
            // { 
            //     name: 'Vulnerability and system misconfiguration data are pulled into ELA from RAP - Identify devices with vulnerabilities or misconfigurations using custom correlation rules and alerts',
            //     id: 'rap-op-ela-op-vulnerability-data'
            // },
            // { 
            //     name: 'Comparators can be created in ELA and custom correlation rules and custom alert profiles can be created for those comparators',
            //     id: 'rap-op-ela-op-comparators'
            // },
            { 
                name: 'Audit logs in Action log viewer will be posted from RAP to ELA',
                id: 'rap-op-ela-op-audit-logs'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-ela-onprem-integration.html' },
            { title: 'Audit Log Configuration', url: 'https://www.manageengine.com/products/desktop-central/audit-logs-ela.html' },
            { title: 'Patch Workflow Configuration', url: 'https://www.manageengine.com/products/desktop-central/patch-workflow-ela.html' },
            { title: 'Custom Correlation Rules', url: 'https://www.manageengine.com/products/desktop-central/correlation-rules.html' }
        ]
    },
    
    // Remote Access Plus + Analytics Plus Integrations,
    'remote-access-plus-onprem_pam360-cloud': {
        supported: false
    },
    'remote-access-plus-onprem_pam360-onprem': {
        supported: false
    },
    'remote-access-plus-onprem_powerbi-cloud': {
        supported: false,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'rap-op-powerbi-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'rap-op-powerbi-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'rap-op-powerbi-default-sync-3'
            }
        ],
        documentation: [
            { title: 'RAP On-Premise to PowerBI Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-powerbi-cloud.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-powerbi.html' },
            { title: 'PowerBI Dashboard Configuration', url: 'https://www.manageengine.com/products/desktop-central/powerbi-dashboard.html' },
            { title: 'PowerBI Documentation', url: 'https://docs.microsoft.com/en-us/power-bi/' }
        ]
    },
    'remote-access-plus-onprem_powerbi-onprem': {
        supported: false,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'rap-op-powerbi-op-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'rap-op-powerbi-op-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'rap-op-powerbi-op-default-sync-3'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-powerbi-onprem-integration.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-powerbi.html' },
            { title: 'PowerBI Report Server Setup', url: 'https://www.manageengine.com/products/desktop-central/powerbi-report-server.html' },
            { title: 'PowerBI Documentation', url: 'https://docs.microsoft.com/en-us/power-bi/' }
        ]
    },
    
    // Remote Access Plus + IBM QRadar Integrations,
    'remote-access-plus-onprem_qualys-cloud': {
        supported: false
    },
    'remote-access-plus-onprem_rapid7-insightvm-cloud': {
        supported: false
    },
    'remote-access-plus-onprem_rapid7-insightvm-onprem': {
        supported: false
    },
    'remote-access-plus-onprem_servicedesk-plus-cloud': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset sync from RAP to SDP',
                id: 'rap-op-sdp-inventory-sync'
            },
            { 
                name: 'Auto-assign users',
                id: 'rap-op-sdp-auto-assign'
            },
            { 
                name: 'Action to be performed on SDP asset when the asset is removed from SOM in Remote Access Plus (Beta)',
                id: 'rap-op-sdp-asset-removal-beta'
            },
            { 
                name: 'Action to be performed on SDP software, when the commercial software is removed from EC',
                id: 'rap-op-sdp-software-removal'
            },
            { 
                name: 'Inventory alerts are created as SDP tickets',
                id: 'rap-op-sdp-inventory-alerts'
            },
            { 
                name: 'Trayicon requests are created as SDP tickets',
                id: 'rap-op-sdp-trayicon'
            }
        ],
        documentation: [
            { title: 'RAP On-Premise to SDP Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-sdp-cloud.html' },
            { title: 'Auto-assign Configuration', url: 'https://www.manageengine.com/products/desktop-central/auto-assign-users.html' },
            { title: 'Alert Ticketing Setup', url: 'https://www.manageengine.com/products/desktop-central/alert-ticketing.html' }
        ]
    },
    'remote-access-plus-onprem_servicedesk-plus-msp-cloud': {
        supported: false
    },
    'remote-access-plus-onprem_servicedesk-plus-msp-onprem': {
        supported: false
    },
    'remote-access-plus-onprem_servicedesk-plus-onprem': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset data sync',
                id: 'rap-op-sdp-op-inventory-sync'
            },
            { 
                name: 'Auto-assign users',
                id: 'rap-op-sdp-op-auto-assign'
            },
            // { 
            //     name: 'Action to be performed on SDP asset when the asset is removed from SOM in Remote Access Plus',
            //     id: 'rap-op-sdp-op-asset-removal'
            // },
            // { 
            //     name: 'User-defined templates can be deployed from SDP tickets',
            //     id: 'rap-op-sdp-op-deploy-templates'
            // },
            // { 
            //     name: 'User-defined software packages can be deployed from SDP tickets',
            //     id: 'rap-op-sdp-op-deploy-packages'
            // },
            // { 
            //     name: 'SSP requests are created as SDP tickets and software will be automatically installed upon approval',
            //     id: 'rap-op-sdp-op-ssp-auto-install'
            // },
            // { 
            //     name: 'Request for prohibited software are created as SDP tickets',
            //     id: 'rap-op-sdp-op-prohibited-software'
            // },
            // { 
            //     name: 'Inventory alerts are created as SDP tickets',
            //     id: 'rap-op-sdp-op-inventory-alerts'
            // },
            // { 
            //     name: 'Trayicon requests are created as SDP tickets',
            //     id: 'rap-op-sdp-op-trayicon'
            // },
            // { 
            //     name: 'Remote control assets from SDP',
            //     id: 'rap-op-sdp-op-remote-control'
            // },
            { 
                name: 'Perform tools action from SDP',
                id: 'rap-op-sdp-op-tools-action'
            },
            { 
                name: 'Load Remote Access Plus as iFrame within SDP',
                id: 'rap-op-sdp-op-iframe'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-sdp-onprem-integration.html' },
            { title: 'Template Deployment Setup', url: 'https://www.manageengine.com/products/desktop-central/template-deployment.html' },
            { title: 'SSP Auto-Install Configuration', url: 'https://www.manageengine.com/products/desktop-central/ssp-auto-install.html' },
            { title: 'Prohibited Software Management', url: 'https://www.manageengine.com/products/desktop-central/prohibited-software.html' }
        ]
    },
    
    // Remote Access Plus + Asset Explorer Integrations,
    'remote-access-plus-onprem_servicenow-cloud': {
        supported: true,
        features: [
            { 
                name: 'Asset data post from RAP to ServiceNow',
                id: 'rap-op-snow-basic-asset-post'
            },
            { 
                name: 'Choose whether to remove an asset from ServiceNow if it is removed from Remote Access Plus SoM',
                id: 'rap-op-snow-basic-asset-removal'
            },
            { 
                name: 'Assign last logged as the asset\'s owner in ServiceNow',
                id: 'rap-op-snow-basic-owner-assign'
            }
        ],
        documentation: [
            { title: 'RAP On-Premise to ServiceNow Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-servicenow-cloud.html' },
            { title: 'Asset Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/servicenow-asset-sync.html' },
            { title: 'CMDB Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/servicenow-cmdb.html' },
            { title: 'ServiceNow API Guide', url: 'https://docs.servicenow.com/' }
        ]
    },
    'remote-access-plus-onprem_servicenow-onprem': {
        supported: true,
        features: [
            { 
                name: 'Remote control asset from ServiceNow',
                id: 'rap-op-snow-basic-op-remote-control'
            },
            // { 
            //     name: 'Choose whether to remove an asset from ServiceNow if it is removed from Remote Access Plus SoM',
            //     id: 'rap-op-snow-basic-op-asset-removal'
            // },
            // { 
            //     name: 'Assign last logged as the asset\'s owner in ServiceNow',
            //     id: 'rap-op-snow-basic-op-owner-assign'
//            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-servicenow-onprem-integration.html' },
            { title: 'Asset Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/servicenow-asset-sync.html' },
            { title: 'CMDB Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/servicenow-cmdb.html' },
            { title: 'ServiceNow API Guide', url: 'https://docs.servicenow.com/' }
        ]
    },
    
    // Remote Access Plus + ServiceNow SGC Integrations,
    'remote-access-plus-onprem_splunk-cloud': {
        supported: true,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from RAP to Splunk via syslog integration',
                id: 'rap-op-splunk-audit-logs'
            }
            // { 
            //     name: 'Vulnerability data is synced from RAP to Splunk',
            //     id: 'rap-op-splunk-vuln-data'
            // }
        ],
        documentation: [
            { title: 'RAP On-Premise to Splunk Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-splunk-cloud.html' },
            { title: 'Audit Log Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/splunk-audit-sync.html' },
            { title: 'Vulnerability Data Export Setup', url: 'https://www.manageengine.com/products/desktop-central/splunk-vulnerability-sync.html' },
            { title: 'Splunk Documentation', url: 'https://docs.splunk.com/' }
        ]
    },
    'remote-access-plus-onprem_splunk-onprem': {
        supported: true,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from RAP to Splunk via syslog integration',
                id: 'rap-op-splunk-audit-logs'
            }
            // { 
            //     name: 'Vulnerability data is synced from RAP to Splunk',
            //     id: 'rap-op-splunk-op-vuln-data'
            // }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-splunk-onprem-integration.html' },
            { title: 'Syslog Configuration for Splunk', url: 'https://www.manageengine.com/products/desktop-central/splunk-syslog-setup.html' },
            { title: 'Vulnerability Data Export Setup', url: 'https://www.manageengine.com/products/desktop-central/splunk-vulnerability-sync.html' },
            { title: 'Splunk Enterprise Documentation', url: 'https://docs.splunk.com/Documentation/Splunk' }
        ]
    },
    
    // Remote Access Plus + Syslog / SIEM Integrations (On-Prem only),
    'remote-access-plus-onprem_syslog-siem-cloud': {
        supported: false,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from RAP to Syslog/SIEM',
                id: 'rap-op-syslog-cloud-audit-logs'
            }
        ],
        documentation: [
            { title: 'RAP-Syslog Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/syslog-integration.html' },
            { title: 'Audit Log Forwarding Setup', url: 'https://www.manageengine.com/products/desktop-central/audit-log-forwarding.html' },
            { title: 'Syslog Configuration', url: 'https://www.manageengine.com/products/desktop-central/syslog-setup.html' },
            { title: 'SIEM Integration Best Practices', url: 'https://www.manageengine.com/products/desktop-central/siem-best-practices.html' }
        ]
    },
    'remote-access-plus-onprem_syslog-siem-onprem': {
        supported: false,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from RAP to Syslog/SIEM',
                id: 'rap-op-syslog-op-audit-logs'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Syslog Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-syslog-onprem-integration.html' },
            { title: 'Audit Log Forwarding Setup', url: 'https://www.manageengine.com/products/desktop-central/audit-log-forwarding.html' },
            { title: 'Syslog Configuration', url: 'https://www.manageengine.com/products/desktop-central/syslog-setup.html' },
            { title: 'SIEM Integration Best Practices', url: 'https://www.manageengine.com/products/desktop-central/siem-best-practices.html' }
        ]
    },

    // ════════════════════════════════════════════════════════════
    // Patch Connect Plus (PCP) Integrations
    // ════════════════════════════════════════════════════════════


    // Patch Connect Plus + ServiceDesk Plus Integrations,
    'remote-access-plus-onprem_tenable-sc-onprem': {
        supported: false
    },
    'remote-access-plus-onprem_tenable-vm-cloud': {
        supported: false
    },
    'remote-access-plus-onprem_zendesk-cloud': {
        supported: true,
        features: [
            { 
                name: 'Deploy software packages from Zendesk tickets',
                id: 'rap-op-zendesk-deploy-software'
            },
            { 
                name: 'Remote control assets from Zendesk tickets',
                id: 'rap-op-zendesk-remote-control'
            },
            { 
                name: 'System manager tools of a machine can be remotely accessed from Zendesk tickets',
                id: 'rap-op-zendesk-system-tools'
            },
            { 
                name: 'Remote power options such as lock, hibernate, shutdown, Wake on LAN from Zendesk tickets',
                id: 'rap-op-zendesk-power-options'
            }
        ],
        documentation: [
            { title: 'RAP On-Premise to Zendesk Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-zendesk-cloud.html' },
            { title: 'Software Deployment from Tickets', url: 'https://www.manageengine.com/products/desktop-central/zendesk-software-deploy.html' },
            { title: 'Remote Control Configuration', url: 'https://www.manageengine.com/products/desktop-central/zendesk-remote-control.html' },
            { title: 'Zendesk API Documentation', url: 'https://developer.zendesk.com/api-reference/' }
        ]
    },
    
    // Remote Access Plus + Freshservice Integrations,
    'remote-access-plus-onprem_zoho-flow-cloud': {
        supported: false
    },

    // ── Rpp Integrations ──────────────────────────────────────
    'rpp-onprem_analytics-plus-cloud': {
        supported: false
    },
    'rpp-onprem_analytics-plus-onprem': {
        supported: false
    },
    'rpp-onprem_asset-explorer-cloud': {
        supported: false
    },
    'rpp-onprem_asset-explorer-onprem': {
        supported: false
    },
    'rpp-onprem_connectwise-cloud': {
        supported: false
    },
    'rpp-onprem_crowdstrike-cloud': {
        supported: false
    },
    'rpp-onprem_freshdesk-cloud': {
        supported: false
    },
    'rpp-onprem_freshservice-cloud': {
        supported: false
    },
    'rpp-onprem_halopsa-cloud': {
        supported: false
    },
    'rpp-onprem_jira-cloud': {
        supported: false
    },
    'rpp-onprem_jira-onprem': {
        supported: false
    },
    'rpp-onprem_log360-onprem': {
        supported: false
    },
    'rpp-onprem_pam360-cloud': {
        supported: false
    },
    'rpp-onprem_pam360-onprem': {
        supported: false
    },
    'rpp-onprem_powerbi-cloud': {
        supported: false
    },
    'rpp-onprem_powerbi-onprem': {
        supported: false
    },
    'rpp-onprem_qualys-cloud': {
        supported: false
    },
    'rpp-onprem_rapid7-insightvm-cloud': {
        supported: false
    },
    'rpp-onprem_rapid7-insightvm-onprem': {
        supported: false
    },
    'rpp-onprem_servicedesk-plus-cloud': {
        supported: false
    },
    'rpp-onprem_servicedesk-plus-msp-cloud': {
        supported: false
    },
    'rpp-onprem_servicedesk-plus-msp-onprem': {
        supported: false
    },
    'rpp-onprem_servicedesk-plus-onprem': {
        supported: false
    },
    'rpp-onprem_servicenow-cloud': {
        supported: false
    },
    'rpp-onprem_servicenow-onprem': {
        supported: false
    },
    'rpp-onprem_splunk-cloud': {
        supported: false
    },
    'rpp-onprem_splunk-onprem': {
        supported: false
    },
    'rpp-onprem_syslog-siem-onprem': {
        supported: false
    },
    'rpp-onprem_tenable-sc-onprem': {
        supported: false
    },
    'rpp-onprem_tenable-vm-cloud': {
        supported: false
    },
    'rpp-onprem_zendesk-cloud': {
        supported: false
    },
    'rpp-onprem_zoho-flow-cloud': {
        supported: false
    },

    // ── Summary Server Integrations ──────────────────────────────────────
    'summary-server-cloud_analytics-plus-cloud': {
        supported: false
    },
    'summary-server-cloud_analytics-plus-onprem': {
        supported: false
    },
    'summary-server-cloud_asset-explorer-cloud': {
        supported: false
    },
    'summary-server-cloud_asset-explorer-onprem': {
        supported: false
    },
    'summary-server-cloud_connectwise-cloud': {
        supported: false
    },
    'summary-server-cloud_crowdstrike-cloud': {
        supported: false
    },
    'summary-server-cloud_freshdesk-cloud': {
        supported: false
    },
    'summary-server-cloud_freshservice-cloud': {
        supported: false
    },
    'summary-server-cloud_halopsa-cloud': {
        supported: false
    },
    'summary-server-cloud_jira-cloud': {
        supported: false
    },
    'summary-server-cloud_jira-onprem': {
        supported: false
    },
    'summary-server-cloud_log360-onprem': {
        supported: false
    },
    'summary-server-cloud_pam360-cloud': {
        supported: false
    },
    'summary-server-cloud_pam360-onprem': {
        supported: false
    },
    'summary-server-cloud_powerbi-cloud': {
        supported: false
    },
    'summary-server-cloud_powerbi-onprem': {
        supported: false
    },
    'summary-server-cloud_qualys-cloud': {
        supported: false
    },
    'summary-server-cloud_rapid7-insightvm-cloud': {
        supported: false
    },
    'summary-server-cloud_rapid7-insightvm-onprem': {
        supported: false
    },
    'summary-server-cloud_servicedesk-plus-cloud': {
        supported: false
    },
    'summary-server-cloud_servicedesk-plus-msp-cloud': {
        supported: false
    },
    'summary-server-cloud_servicedesk-plus-msp-onprem': {
        supported: false
    },
    'summary-server-cloud_servicedesk-plus-onprem': {
        supported: false
    },
    'summary-server-cloud_servicenow-cloud': {
        supported: false
    },
    'summary-server-cloud_servicenow-onprem': {
        supported: false
    },
    'summary-server-cloud_splunk-cloud': {
        supported: false
    },
    'summary-server-cloud_splunk-onprem': {
        supported: false
    },
    'summary-server-cloud_syslog-siem-onprem': {
        supported: false
    },
    'summary-server-cloud_tenable-sc-onprem': {
        supported: false
    },
    'summary-server-cloud_tenable-vm-cloud': {
        supported: false
    },
    'summary-server-cloud_zendesk-cloud': {
        supported: false
    },
    'summary-server-cloud_zoho-flow-cloud': {
        supported: false
    },
    'summary-server-onprem_analytics-plus-cloud': {
        supported: false
    },
    'summary-server-onprem_analytics-plus-onprem': {
        supported: false
    },
    'summary-server-onprem_asset-explorer-cloud': {
        supported: false
    },
    'summary-server-onprem_asset-explorer-onprem': {
        supported: false
    },
    'summary-server-onprem_connectwise-cloud': {
        supported: false
    },
    'summary-server-onprem_crowdstrike-cloud': {
        supported: false
    },
    'summary-server-onprem_freshdesk-cloud': {
        supported: false
    },
    'summary-server-onprem_freshservice-cloud': {
        supported: false
    },
    'summary-server-onprem_halopsa-cloud': {
        supported: false
    },
    'summary-server-onprem_jira-cloud': {
        supported: false
    },
    'summary-server-onprem_jira-onprem': {
        supported: false
    },
    'summary-server-onprem_log360-onprem': {
        supported: false
    },
    'summary-server-onprem_pam360-cloud': {
        supported: false
    },
    'summary-server-onprem_pam360-onprem': {
        supported: false
    },
    'summary-server-onprem_powerbi-cloud': {
        supported: false
    },
    'summary-server-onprem_powerbi-onprem': {
        supported: false
    },
    'summary-server-onprem_qualys-cloud': {
        supported: false
    },
    'summary-server-onprem_rapid7-insightvm-cloud': {
        supported: false
    },
    'summary-server-onprem_rapid7-insightvm-onprem': {
        supported: false
    },
    'summary-server-onprem_servicedesk-plus-cloud': {
        supported: false
    },
    'summary-server-onprem_servicedesk-plus-msp-cloud': {
        supported: false
    },
    'summary-server-onprem_servicedesk-plus-msp-onprem': {
        supported: false
    },
    'summary-server-onprem_servicedesk-plus-onprem': {
        supported: false
    },
    'summary-server-onprem_servicenow-cloud': {
        supported: false
    },
    'summary-server-onprem_servicenow-onprem': {
        supported: false
    },
    'summary-server-onprem_splunk-cloud': {
        supported: false
    },
    'summary-server-onprem_splunk-onprem': {
        supported: false
    },
    'summary-server-onprem_syslog-siem-onprem': {
        supported: false
    },
    'summary-server-onprem_tenable-sc-onprem': {
        supported: false
    },
    'summary-server-onprem_tenable-vm-cloud': {
        supported: false
    },
    'summary-server-onprem_zendesk-cloud': {
        supported: false
    },
    'summary-server-onprem_zoho-flow-cloud': {
        supported: false
    },

    // ── Vulnerability Manager Plus Integrations ──────────────────────────────────────
    'vulnerability-manager-plus-cloud_analytics-plus-cloud': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'vmp-ap-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'vmp-ap-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'vmp-ap-default-sync-3'
            },
            { 
                name: 'Optional data synchronization: Users, Groups, BIOS, CD ROM DRIVE, Monitor, Disk drives, Logical disk, Motherboard, Keyboard, Mouse, Physical memory',
                id: 'vmp-ap-optional-sync-1'
            },
            { 
                name: 'Optional data synchronization: POTS modem, Processors, Serial port, Video controller, USB controller, Printers, Drivers, Share details, File details',
                id: 'vmp-ap-optional-sync-2'
            },
            { 
                name: 'Optional data synchronization: User logon history, Scheduled tasks info, Software audit history, Hardware audit history, Computer and hardware mapping, Computer and group association, Custom groups and associated users',
                id: 'vmp-ap-optional-sync-3'
            },
            { 
                name: 'Optional data synchronization: Trusted Platform Module',
                id: 'vmp-ap-optional-sync-4'
            }
        ],
        documentation: [
            { title: 'VMP-Analytics Plus Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/analytics-plus-integration.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-analytics.html' },
            { title: 'Custom Reports Configuration', url: 'https://www.manageengine.com/products/desktop-central/custom-reports.html' },
            { title: 'Analytics Dashboard Guide', url: 'https://www.manageengine.com/products/desktop-central/analytics-dashboard.html' }
        ]
    },
    'vulnerability-manager-plus-cloud_asset-explorer-cloud': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset sync from VMP to AE',
                id: 'vmp-ae-inventory-sync'
            },
            { 
                name: 'Remote control asset from AE tickets',
                id: 'vmp-ae-remote-control'
            },
            { 
                name: 'Deploy software from AE tickets',
                id: 'vmp-ae-deploy-software'
            },
            { 
                name: 'Perform tools action from AE tickets',
                id: 'vmp-ae-tools-action'
            },
            { 
                name: 'Loading iFrame of VMP within AE',
                id: 'vmp-ae-iframe'
            },
            { 
                name: 'Action to be performed on AE asset when the asset is removed from SOM in Vulnerability Manager Plus (Beta)',
                id: 'vmp-ae-asset-removal-beta'
            },
            { 
                name: 'Trayicon requests are created as AE tickets (Beta)',
                id: 'vmp-ae-trayicon-beta'
            },
            { 
                name: 'SSP requests are created as AE tickets (Beta)',
                id: 'vmp-ae-ssp-beta'
            }
        ],
        documentation: [
            { title: 'VMP-AE Cloud Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ae-cloud-integration.html' },
            { title: 'Asset Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/asset-sync-setup.html' },
            { title: 'Remote Control Setup', url: 'https://www.manageengine.com/products/desktop-central/remote-control-ae.html' },
            { title: 'iFrame Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/iframe-integration.html' }
        ]
    },
    'vulnerability-manager-plus-cloud_asset-explorer-onprem': {
        supported: true,
        betaRelease: true,
        features: [
            { 
                name: 'Inventory asset sync from VMP to AE',
                id: 'vmp-ae-op-inventory-sync'
            }
        ],
        documentation: [
            { title: 'VMP Cloud to AE On-Premise Integration', url: 'https://www.manageengine.com/products/desktop-central/ae-onprem-integration.html' },
            { title: 'Beta Release Notes', url: 'https://www.manageengine.com/products/desktop-central/beta-release-notes.html' },
            { title: 'Hybrid Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/hybrid-setup.html' }
        ]
    },
    'vulnerability-manager-plus-cloud_connectwise-cloud': {
        supported: true
    },
    'vulnerability-manager-plus-cloud_crowdstrike-cloud': {
        supported: true
    },
    'vulnerability-manager-plus-cloud_freshdesk-cloud': {
        supported: true
    },
    'vulnerability-manager-plus-cloud_freshservice-cloud': {
        supported: true,
        features: [
            { 
                name: 'Deploy software packages from FreshService tickets',
                id: 'vmp-freshservice-deploy-software'
            },
            { 
                name: 'Remote control assets from FreshService tickets',
                id: 'vmp-freshservice-remote-control'
            },
            { 
                name: 'System manager tools of a machine can be remotely accessed from FreshService tickets',
                id: 'vmp-freshservice-system-tools'
            },
            { 
                name: 'Remote power options such as lock, hibernate, shutdown, Wake on LAN from FreshService tickets',
                id: 'vmp-freshservice-power-options'
            }
        ],
        documentation: [
            { title: 'VMP-Freshservice Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/freshservice-integration.html' },
            { title: 'Software Deployment from Tickets', url: 'https://www.manageengine.com/products/desktop-central/freshservice-software-deploy.html' },
            { title: 'Remote Control Configuration', url: 'https://www.manageengine.com/products/desktop-central/freshservice-remote-control.html' },
            { title: 'Freshservice API Documentation', url: 'https://api.freshservice.com/' }
        ]
    },
    'vulnerability-manager-plus-cloud_halopsa-cloud': {
        supported: true
    },
    'vulnerability-manager-plus-cloud_jira-cloud': {
        supported: true,
        features: [
            { 
                name: 'Load iFrame from Jira',
                id: 'vmp-jira-iframe'
            },
            { 
                name: 'Remote control asset from Jira',
                id: 'vmp-jira-remote-control'
            },
            { 
                name: 'Asset data are pulled into Jira from EC',
                id: 'vmp-jira-asset-data'
            },
            { 
                name: 'Perform tools action from Jira',
                id: 'vmp-jira-tools-action'
            }
        ],
        documentation: [
            { title: 'VMP-Jira Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/jira-integration.html' },
            { title: 'iFrame Configuration', url: 'https://www.manageengine.com/products/desktop-central/jira-iframe-setup.html' },
            { title: 'Remote Control from Jira', url: 'https://www.manageengine.com/products/desktop-central/jira-remote-control.html' },
            { title: 'Jira API Documentation', url: 'https://developer.atlassian.com/cloud/jira/' }
        ]
    },
    'vulnerability-manager-plus-cloud_log360-onprem': {
        supported: false,
        features: [
            { 
                name: 'Patch data are pulled into ELA from VMP - Approve and install patches directly through incident workflows',
                id: 'vmp-ela-patch-data'
            },
            { 
                name: 'Vulnerability and system misconfiguration data are pulled into ELA from VMP - Identify devices with vulnerabilities or misconfigurations using custom correlation rules and alerts',
                id: 'vmp-ela-vulnerability-data'
            },
            { 
                name: 'Comparators can be created in ELA and custom correlation rules and custom alert profiles can be created for those comparators',
                id: 'vmp-ela-comparators'
            }
        ],
        documentation: [
            { title: 'VMP-ELA Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ela-integration.html' },
            { title: 'Patch Workflow Configuration', url: 'https://www.manageengine.com/products/desktop-central/patch-workflow-ela.html' },
            { title: 'Custom Correlation Rules', url: 'https://www.manageengine.com/products/desktop-central/correlation-rules.html' },
            { title: 'Alert Profile Setup', url: 'https://www.manageengine.com/products/desktop-central/alert-profiles.html' }
        ]
    },
    'vulnerability-manager-plus-cloud_pam360-cloud': {
        supported: true
    },
    'vulnerability-manager-plus-cloud_pam360-onprem': {
        supported: true
    },
    'vulnerability-manager-plus-cloud_powerbi-cloud': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'vmp-powerbi-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'vmp-powerbi-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'vmp-powerbi-default-sync-3'
            }
        ],
        documentation: [
            { title: 'VMP-PowerBI Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/powerbi-integration.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-powerbi.html' },
            { title: 'PowerBI Dashboard Configuration', url: 'https://www.manageengine.com/products/desktop-central/powerbi-dashboard.html' },
            { title: 'PowerBI Documentation', url: 'https://docs.microsoft.com/en-us/power-bi/' }
        ]
    },
    'vulnerability-manager-plus-cloud_powerbi-onprem': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'vmp-powerbi-op-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'vmp-powerbi-op-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'vmp-powerbi-op-default-sync-3'
            }
        ],
        documentation: [
            { title: 'VMP Cloud to PowerBI On-Premise Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-cloud-powerbi-onprem.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-powerbi.html' },
            { title: 'PowerBI Report Server Setup', url: 'https://www.manageengine.com/products/desktop-central/powerbi-report-server.html' },
            { title: 'PowerBI Documentation', url: 'https://docs.microsoft.com/en-us/power-bi/' }
        ]
    },
    'vulnerability-manager-plus-cloud_qualys-cloud': {
        supported: true
    },
    'vulnerability-manager-plus-cloud_rapid7-insightvm-cloud': {
        supported: true
    },
    'vulnerability-manager-plus-cloud_rapid7-insightvm-onprem': {
        supported: true
    },
    'vulnerability-manager-plus-cloud_servicedesk-plus-cloud': {
        supported: false,
        features: [
            { 
                name: 'Inventory asset sync from VMP to SDP',
                id: 'vmp-sdp-inventory-sync'
            },
            { 
                name: 'Remote control asset from SDP tickets',
                id: 'vmp-sdp-remote-control'
            },
            { 
                name: 'Deploy software from SDP tickets',
                id: 'vmp-sdp-deploy-software'
            },
            { 
                name: 'Perform tools action from SDP tickets',
                id: 'vmp-sdp-tools-action'
            },
            { 
                name: 'Loading iFrame of VMP within SDP',
                id: 'vmp-sdp-iframe'
            },
            { 
                name: 'Action to be performed on SDP asset when the asset is removed from SOM in Vulnerability Manager Plus (Beta)',
                id: 'vmp-sdp-asset-removal-beta'
            },
            { 
                name: 'Trayicon requests are created as SDP tickets (Beta)',
                id: 'vmp-sdp-trayicon-beta'
            },
            { 
                name: 'SSP requests are created as SDP tickets (Beta)',
                id: 'vmp-sdp-ssp-beta'
            }
        ],
        documentation: [
            { title: 'VMP-SDP Cloud Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/help/configuring_desktop_central/integrating-with-servicedesk-plus-cloud.html' },
            { title: 'Configuring EC extension for SDP Cloud', url: 'https://help.sdpondemand.com/endpoint-central-extension' },
            { title: 'Troubleshooting errors while enabling integration', url: 'https://www.manageengine.com/products/desktop-central/kb/sdp-on-demand.html' },
            { title: 'Troubleshooting asset sync between ECOD-SDPOD', url: 'https://zask.pali.io/zask/EMSTechAsk/questions/8639642606' }
        ]
    },
    'vulnerability-manager-plus-cloud_servicedesk-plus-msp-cloud': {
        supported: false
    },
    'vulnerability-manager-plus-cloud_servicedesk-plus-msp-onprem': {
        supported: false
    },
    'vulnerability-manager-plus-cloud_servicedesk-plus-onprem': {
        supported: false,
        betaRelease: true,
        features: [
            { 
                name: 'Inventory asset sync from VMP to SDP',
                id: 'vmp-sdp-op-inventory-sync'
            }
        ],
        documentation: [
            { title: 'VMP Cloud to SDP On-Premise Integration', url: 'https://www.manageengine.com/products/desktop-central/sdp-onprem-integration.html' },
            { title: 'Beta Release Notes', url: 'https://www.manageengine.com/products/desktop-central/beta-release-notes.html' },
            { title: 'Hybrid Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/hybrid-setup.html' }
        ]
    },
    'vulnerability-manager-plus-cloud_servicenow-cloud': {
        supported: true,
        features: [
            { 
                name: 'Asset data post from VMP to ServiceNow',
                id: 'vmp-snow-basic-asset-post'
            },
            { 
                name: 'Choose whether to remove an asset from ServiceNow if it is removed from Vulnerability Manager Plus SoM',
                id: 'vmp-snow-basic-asset-removal'
            },
            { 
                name: 'Assign last logged as the asset\'s owner in ServiceNow',
                id: 'vmp-snow-basic-owner-assign'
            }
        ],
        documentation: [
            { title: 'VMP-ServiceNow Basic Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/servicenow-integration.html' },
            { title: 'Asset Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/servicenow-asset-sync.html' },
            { title: 'CMDB Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/servicenow-cmdb.html' },
            { title: 'ServiceNow API Guide', url: 'https://docs.servicenow.com/' }
        ]
    },
    'vulnerability-manager-plus-cloud_servicenow-onprem': {
        supported: false
    },
    'vulnerability-manager-plus-cloud_splunk-cloud': {
        supported: true,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from VMP to Splunk',
                id: 'vmp-splunk-audit-logs'
            },
            { 
                name: 'Vulnerability data is synced from VMP to Splunk',
                id: 'vmp-splunk-vuln-data'
            }
        ],
        documentation: [
            { title: 'VMP-Splunk Cloud Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/splunk-cloud-integration.html' },
            { title: 'Audit Log Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/splunk-audit-sync.html' },
            { title: 'Vulnerability Data Export Setup', url: 'https://www.manageengine.com/products/desktop-central/splunk-vulnerability-sync.html' },
            { title: 'Splunk Documentation', url: 'https://docs.splunk.com/' }
        ]
    },
    'vulnerability-manager-plus-cloud_splunk-onprem': {
        supported: true,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from VMP to Splunk',
                id: 'vmp-splunk-op-audit-logs'
            },
            { 
                name: 'Vulnerability data is synced from VMP to Splunk',
                id: 'vmp-splunk-op-vuln-data'
            }
        ],
        documentation: [
            { title: 'VMP Cloud to Splunk On-Premise Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-cloud-splunk-onprem.html' },
            { title: 'Audit Log Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/splunk-audit-sync.html' },
            { title: 'Vulnerability Data Export Setup', url: 'https://www.manageengine.com/products/desktop-central/splunk-vulnerability-sync.html' },
            { title: 'Splunk Enterprise Documentation', url: 'https://docs.splunk.com/Documentation/Splunk' }
        ]
    },
    'vulnerability-manager-plus-cloud_tenable-sc-onprem': {
        supported: true
    },
    'vulnerability-manager-plus-cloud_tenable-vm-cloud': {
        supported: true
    },
    'vulnerability-manager-plus-cloud_zendesk-cloud': {
        supported: true,
        features: [
            { 
                name: 'Deploy software packages from Zendesk tickets',
                id: 'vmp-zendesk-deploy-software'
            },
            { 
                name: 'Remote control assets from Zendesk tickets',
                id: 'vmp-zendesk-remote-control'
            },
            { 
                name: 'System manager tools of a machine can be remotely accessed from Zendesk tickets',
                id: 'vmp-zendesk-system-tools'
            },
            { 
                name: 'Remote power options such as lock, hibernate, shutdown, Wake on LAN from Zendesk tickets',
                id: 'vmp-zendesk-power-options'
            }
        ],
        documentation: [
            { title: 'VMP-Zendesk Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/zendesk-integration.html' },
            { title: 'Software Deployment from Tickets', url: 'https://www.manageengine.com/products/desktop-central/zendesk-software-deploy.html' },
            { title: 'Remote Control Configuration', url: 'https://www.manageengine.com/products/desktop-central/zendesk-remote-control.html' },
            { title: 'Zendesk API Documentation', url: 'https://developer.zendesk.com/api-reference/' }
        ]
    },
    'vulnerability-manager-plus-cloud_zoho-flow-cloud': {
        supported: true
    },
    'vulnerability-manager-plus-onprem_analytics-plus-cloud': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'vmp-op-ap-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'vmp-op-ap-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'vmp-op-ap-default-sync-3'
            },
            { 
                name: 'Optional data synchronization: Users, Groups, BIOS, CD ROM DRIVE, Monitor, Disk drives, Logical disk, Motherboard, Keyboard, Mouse, Physical memory',
                id: 'vmp-op-ap-optional-sync-1'
            },
            { 
                name: 'Optional data synchronization: POTS modem, Processors, Serial port, Video controller, USB controller, Printers, Drivers, Share details, File details',
                id: 'vmp-op-ap-optional-sync-2'
            },
            { 
                name: 'Optional data synchronization: User logon history, Scheduled tasks info, Software audit history, Hardware audit history, Computer and hardware mapping, Computer and group association, Custom groups and associated users',
                id: 'vmp-op-ap-optional-sync-3'
            },
            { 
                name: 'Optional data synchronization: Trusted Platform Module',
                id: 'vmp-op-ap-optional-sync-4'
            }
        ],
        documentation: [
            { title: 'VMP On-Premise to Analytics Plus Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-analytics-cloud.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-analytics.html' },
            { title: 'Custom Reports Configuration', url: 'https://www.manageengine.com/products/desktop-central/custom-reports.html' },
            { title: 'Analytics Dashboard Guide', url: 'https://www.manageengine.com/products/desktop-central/analytics-dashboard.html' }
        ]
    },
    'vulnerability-manager-plus-onprem_analytics-plus-onprem': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'vmp-op-ap-op-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'vmp-op-ap-op-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'vmp-op-ap-op-default-sync-3'
            },
            { 
                name: 'Optional data synchronization: Users, Groups, BIOS, CD ROM DRIVE, Monitor, Disk drives, Logical disk, Motherboard, Keyboard, Mouse, Physical memory',
                id: 'vmp-op-ap-op-optional-sync-1'
            },
            { 
                name: 'Optional data synchronization: POTS modem, Processors, Serial port, Video controller, USB controller, Printers, Drivers, Share details, File details',
                id: 'vmp-op-ap-op-optional-sync-2'
            },
            { 
                name: 'Optional data synchronization: User logon history, Scheduled tasks info, Software audit history, Hardware audit history, Computer and hardware mapping, Computer and group association, Custom groups and associated users',
                id: 'vmp-op-ap-op-optional-sync-3'
            },
            { 
                name: 'Optional data synchronization: Trusted Platform Module',
                id: 'vmp-op-ap-op-optional-sync-4'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-analytics-onprem-integration.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-analytics.html' },
            { title: 'Custom Reports Configuration', url: 'https://www.manageengine.com/products/desktop-central/custom-reports.html' },
            { title: 'Analytics Dashboard Guide', url: 'https://www.manageengine.com/products/desktop-central/analytics-dashboard.html' }
        ]
    },
    
    // Vulnerability Manager Plus + ServiceNow (Basic) Integrations,
    'vulnerability-manager-plus-onprem_asset-explorer-cloud': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset sync from VMP to AE',
                id: 'vmp-op-ae-inventory-sync'
            },
            { 
                name: 'Auto-assign users',
                id: 'vmp-op-ae-auto-assign'
            },
            { 
                name: 'Action to be performed on AE asset when the asset is removed from SOM in Vulnerability Manager Plus (Beta)',
                id: 'vmp-op-ae-asset-removal-beta'
            },
            { 
                name: 'Action to be performed on AE software, when the commercial software is removed from EC',
                id: 'vmp-op-ae-software-removal'
            },
            { 
                name: 'Inventory alerts are created as AE tickets',
                id: 'vmp-op-ae-inventory-alerts'
            },
            { 
                name: 'Trayicon requests are created as AE tickets',
                id: 'vmp-op-ae-trayicon'
            }
        ],
        documentation: [
            { title: 'VMP On-Premise to AE Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-ae-cloud.html' },
            { title: 'Auto-assign Configuration', url: 'https://www.manageengine.com/products/desktop-central/auto-assign-users.html' },
            { title: 'Alert Ticketing Setup', url: 'https://www.manageengine.com/products/desktop-central/alert-ticketing.html' }
        ]
    },
    'vulnerability-manager-plus-onprem_asset-explorer-onprem': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset data sync',
                id: 'vmp-op-ae-op-inventory-sync'
            },
            { 
                name: 'Load Vulnerability Manager Plus as iFrame within AE',
                id: 'vmp-op-ae-op-iframe'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-ae-onprem-integration.html' },
            { title: 'Template Deployment Setup', url: 'https://www.manageengine.com/products/desktop-central/template-deployment.html' },
            { title: 'SSP Auto-Install Configuration', url: 'https://www.manageengine.com/products/desktop-central/ssp-auto-install.html' },
            { title: 'Prohibited Software Management', url: 'https://www.manageengine.com/products/desktop-central/prohibited-software.html' }
        ]
    },
    
    // Vulnerability Manager Plus + Event Log Analyzer / Log 360 Integrations,
    'vulnerability-manager-plus-onprem_connectwise-cloud': {
        supported: true
    },
    'vulnerability-manager-plus-onprem_crowdstrike-cloud': {
        supported: true
    },
    'vulnerability-manager-plus-onprem_freshdesk-cloud': {
        supported: true
    },
    'vulnerability-manager-plus-onprem_freshservice-cloud': {
        supported: true,
        features: [
            { 
                name: 'Deploy software packages from FreshService tickets',
                id: 'vmp-op-freshservice-deploy-software'
            },
            { 
                name: 'Remote control assets from FreshService tickets',
                id: 'vmp-op-freshservice-remote-control'
            },
            { 
                name: 'System manager tools of a machine can be remotely accessed from FreshService tickets',
                id: 'vmp-op-freshservice-system-tools'
            },
            { 
                name: 'Remote power options such as lock, hibernate, shutdown, Wake on LAN from FreshService tickets',
                id: 'vmp-op-freshservice-power-options'
            }
        ],
        documentation: [
            { title: 'VMP On-Premise to Freshservice Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-freshservice-cloud.html' },
            { title: 'Software Deployment from Tickets', url: 'https://www.manageengine.com/products/desktop-central/freshservice-software-deploy.html' },
            { title: 'Remote Control Configuration', url: 'https://www.manageengine.com/products/desktop-central/freshservice-remote-control.html' },
            { title: 'Freshservice API Documentation', url: 'https://api.freshservice.com/' }
        ]
    },
    
    // Vulnerability Manager Plus + PowerBI Integrations,
    'vulnerability-manager-plus-onprem_halopsa-cloud': {
        supported: true
    },
    'vulnerability-manager-plus-onprem_jira-cloud': {
        supported: true,
        features: [
            { 
                name: 'Load iFrame from Jira',
                id: 'vmp-op-jira-iframe'
            },
            { 
                name: 'Remote control asset from Jira',
                id: 'vmp-op-jira-remote-control'
            },
            { 
                name: 'Asset data are pulled into Jira from EC',
                id: 'vmp-op-jira-asset-data'
            },
            { 
                name: 'Perform tools action from Jira',
                id: 'vmp-op-jira-tools-action'
            }
        ],
        documentation: [
            { title: 'VMP On-Premise to Jira Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-jira-cloud.html' },
            { title: 'iFrame Configuration', url: 'https://www.manageengine.com/products/desktop-central/jira-iframe-setup.html' },
            { title: 'Remote Control from Jira', url: 'https://www.manageengine.com/products/desktop-central/jira-remote-control.html' },
            { title: 'Jira API Documentation', url: 'https://developer.atlassian.com/cloud/jira/' }
        ]
    },
    'vulnerability-manager-plus-onprem_jira-onprem': {
        supported: true,
        features: [
            { 
                name: 'Load iFrame from Jira',
                id: 'vmp-op-jira-op-iframe'
            },
            { 
                name: 'Remote control asset from Jira',
                id: 'vmp-op-jira-op-remote-control'
            },
            { 
                name: 'Asset data are pulled into Jira from EC',
                id: 'vmp-op-jira-op-asset-data'
            },
            { 
                name: 'Perform tools action from Jira',
                id: 'vmp-op-jira-op-tools-action'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-jira-onprem-integration.html' },
            { title: 'iFrame Configuration', url: 'https://www.manageengine.com/products/desktop-central/jira-iframe-setup.html' },
            { title: 'Remote Control from Jira', url: 'https://www.manageengine.com/products/desktop-central/jira-remote-control.html' },
            { title: 'Jira Server Documentation', url: 'https://confluence.atlassian.com/jiraserver/' }
        ]
    },
    
    // Vulnerability Manager Plus + Zendesk Integrations,
    'vulnerability-manager-plus-onprem_log360-onprem': {
        supported: true,
        features: [
            { 
                name: 'Audit logs in Action log viewer will be posted from VMP to ELA',
                id: 'vmp-op-ela-op-audit-logs'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-ela-onprem-integration.html' },
            { title: 'Audit Log Configuration', url: 'https://www.manageengine.com/products/desktop-central/audit-logs-ela.html' },
            { title: 'Patch Workflow Configuration', url: 'https://www.manageengine.com/products/desktop-central/patch-workflow-ela.html' },
            { title: 'Custom Correlation Rules', url: 'https://www.manageengine.com/products/desktop-central/correlation-rules.html' }
        ]
    },
    
    // Vulnerability Manager Plus + Analytics Plus Integrations,
    'vulnerability-manager-plus-onprem_pam360-cloud': {
        supported: true
    },
    'vulnerability-manager-plus-onprem_pam360-onprem': {
        supported: true
    },
    'vulnerability-manager-plus-onprem_powerbi-cloud': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'vmp-op-powerbi-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'vmp-op-powerbi-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'vmp-op-powerbi-default-sync-3'
            }
        ],
        documentation: [
            { title: 'VMP On-Premise to PowerBI Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-powerbi-cloud.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-powerbi.html' },
            { title: 'PowerBI Dashboard Configuration', url: 'https://www.manageengine.com/products/desktop-central/powerbi-dashboard.html' },
            { title: 'PowerBI Documentation', url: 'https://docs.microsoft.com/en-us/power-bi/' }
        ]
    },
    'vulnerability-manager-plus-onprem_powerbi-onprem': {
        supported: true,
        features: [
            { 
                name: 'Default data synchronization: Custom groups, Technicians, User accounts, Patch scan summary, Software usage, USB audit, Applications and associated patches',
                id: 'vmp-op-powerbi-op-default-sync-1'
            },
            { 
                name: 'Default data synchronization: Antivirus, Firewall, Computer patch summary, Software details, Encryption, Custom groups and associated computers, Computer and software association',
                id: 'vmp-op-powerbi-op-default-sync-2'
            },
            { 
                name: 'Default data synchronization: Computers, Patches, Patch development status, Alerts, Certificate information, Technicians and associated computers',
                id: 'vmp-op-powerbi-op-default-sync-3'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-powerbi-onprem-integration.html' },
            { title: 'Data Synchronization Setup', url: 'https://www.manageengine.com/products/desktop-central/data-sync-powerbi.html' },
            { title: 'PowerBI Report Server Setup', url: 'https://www.manageengine.com/products/desktop-central/powerbi-report-server.html' },
            { title: 'PowerBI Documentation', url: 'https://docs.microsoft.com/en-us/power-bi/' }
        ]
    },
    
    // Vulnerability Manager Plus + IBM QRadar Integrations,
    'vulnerability-manager-plus-onprem_qualys-cloud': {
        supported: true
    },
    'vulnerability-manager-plus-onprem_rapid7-insightvm-cloud': {
        supported: true
    },
    'vulnerability-manager-plus-onprem_rapid7-insightvm-onprem': {
        supported: true
    },
    'vulnerability-manager-plus-onprem_servicedesk-plus-cloud': {
        supported: false,
        features: [
            { 
                name: 'Inventory asset sync from VMP to SDP',
                id: 'vmp-op-sdp-inventory-sync'
            },
            { 
                name: 'Auto-assign users',
                id: 'vmp-op-sdp-auto-assign'
            },
            { 
                name: 'Action to be performed on SDP asset when the asset is removed from SOM in Vulnerability Manager Plus (Beta)',
                id: 'vmp-op-sdp-asset-removal-beta'
            },
            { 
                name: 'Action to be performed on SDP software, when the commercial software is removed from EC',
                id: 'vmp-op-sdp-software-removal'
            },
            { 
                name: 'Inventory alerts are created as SDP tickets',
                id: 'vmp-op-sdp-inventory-alerts'
            },
            { 
                name: 'Trayicon requests are created as SDP tickets',
                id: 'vmp-op-sdp-trayicon'
            }
        ],
        documentation: [
            { title: 'VMP On-Premise to SDP Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-sdp-cloud.html' },
            { title: 'Auto-assign Configuration', url: 'https://www.manageengine.com/products/desktop-central/auto-assign-users.html' },
            { title: 'Alert Ticketing Setup', url: 'https://www.manageengine.com/products/desktop-central/alert-ticketing.html' }
        ]
    },
    'vulnerability-manager-plus-onprem_servicedesk-plus-msp-cloud': {
        supported: false
    },
    'vulnerability-manager-plus-onprem_servicedesk-plus-msp-onprem': {
        supported: false
    },
    'vulnerability-manager-plus-onprem_servicedesk-plus-onprem': {
        supported: true,
        features: [
            { 
                name: 'Inventory asset data sync',
                id: 'vmp-op-sdp-op-inventory-sync'
            },
            { 
                name: 'Load Vulnerability Manager Plus as iFrame within SDP',
                id: 'vmp-op-sdp-op-iframe'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-sdp-onprem-integration.html' },
            { title: 'Template Deployment Setup', url: 'https://www.manageengine.com/products/desktop-central/template-deployment.html' },
            { title: 'SSP Auto-Install Configuration', url: 'https://www.manageengine.com/products/desktop-central/ssp-auto-install.html' },
            { title: 'Prohibited Software Management', url: 'https://www.manageengine.com/products/desktop-central/prohibited-software.html' }
        ]
    },
    
    // Vulnerability Manager Plus + Asset Explorer Integrations,
    'vulnerability-manager-plus-onprem_servicenow-cloud': {
        supported: true,
        features: [
            { 
                name: 'Asset data post from VMP to ServiceNow',
                id: 'vmp-op-snow-basic-asset-post'
            },
            { 
                name: 'Choose whether to remove an asset from ServiceNow if it is removed from Vulnerability Manager Plus SoM',
                id: 'vmp-op-snow-basic-asset-removal'
            },
            { 
                name: 'Assign last logged as the asset\'s owner in ServiceNow',
                id: 'vmp-op-snow-basic-owner-assign'
            }
        ],
        documentation: [
            { title: 'VMP On-Premise to ServiceNow Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-servicenow-cloud.html' },
            { title: 'Asset Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/servicenow-asset-sync.html' },
            { title: 'CMDB Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/servicenow-cmdb.html' },
            { title: 'ServiceNow API Guide', url: 'https://docs.servicenow.com/' }
        ]
    },
    'vulnerability-manager-plus-onprem_servicenow-onprem': {
        supported: true,
        features: [
            { 
                name: 'Asset data post from VMP to ServiceNow',
                id: 'vmp-op-snow-basic-op-asset-post'
            },
            { 
                name: 'Choose whether to remove an asset from ServiceNow if it is removed from Vulnerability Manager Plus SoM',
                id: 'vmp-op-snow-basic-op-asset-removal'
            },
            { 
                name: 'Assign last logged as the asset\'s owner in ServiceNow',
                id: 'vmp-op-snow-basic-op-owner-assign'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-servicenow-onprem-integration.html' },
            { title: 'Asset Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/servicenow-asset-sync.html' },
            { title: 'CMDB Integration Setup', url: 'https://www.manageengine.com/products/desktop-central/servicenow-cmdb.html' },
            { title: 'ServiceNow API Guide', url: 'https://docs.servicenow.com/' }
        ]
    },
    
    // Vulnerability Manager Plus + ServiceNow SGC Integrations,
    'vulnerability-manager-plus-onprem_splunk-cloud': {
        supported: true,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from VMP to Splunk',
                id: 'vmp-op-splunk-audit-logs'
            },
            { 
                name: 'Vulnerability data is synced from VMP to Splunk',
                id: 'vmp-op-splunk-vuln-data'
            }
        ],
        documentation: [
            { title: 'VMP On-Premise to Splunk Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-splunk-cloud.html' },
            { title: 'Audit Log Sync Configuration', url: 'https://www.manageengine.com/products/desktop-central/splunk-audit-sync.html' },
            { title: 'Vulnerability Data Export Setup', url: 'https://www.manageengine.com/products/desktop-central/splunk-vulnerability-sync.html' },
            { title: 'Splunk Documentation', url: 'https://docs.splunk.com/' }
        ]
    },
    'vulnerability-manager-plus-onprem_splunk-onprem': {
        supported: true,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from VMP to Splunk',
                id: 'vmp-op-splunk-op-audit-logs'
            },
            { 
                name: 'Vulnerability data is synced from VMP to Splunk',
                id: 'vmp-op-splunk-op-vuln-data'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-splunk-onprem-integration.html' },
            { title: 'Syslog Configuration for Splunk', url: 'https://www.manageengine.com/products/desktop-central/splunk-syslog-setup.html' },
            { title: 'Vulnerability Data Export Setup', url: 'https://www.manageengine.com/products/desktop-central/splunk-vulnerability-sync.html' },
            { title: 'Splunk Enterprise Documentation', url: 'https://docs.splunk.com/Documentation/Splunk' }
        ]
    },
    
    // Vulnerability Manager Plus + Syslog / SIEM Integrations (On-Prem only),
    'vulnerability-manager-plus-onprem_syslog-siem-cloud': {
        supported: false,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from VMP to Syslog/SIEM',
                id: 'vmp-op-syslog-cloud-audit-logs'
            }
        ],
        documentation: [
            { title: 'VMP-Syslog Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/syslog-integration.html' },
            { title: 'Audit Log Forwarding Setup', url: 'https://www.manageengine.com/products/desktop-central/audit-log-forwarding.html' },
            { title: 'Syslog Configuration', url: 'https://www.manageengine.com/products/desktop-central/syslog-setup.html' },
            { title: 'SIEM Integration Best Practices', url: 'https://www.manageengine.com/products/desktop-central/siem-best-practices.html' }
        ]
    },
    'vulnerability-manager-plus-onprem_syslog-siem-onprem': {
        supported: true,
        features: [
            { 
                name: 'Action log viewer data (Audit logs) is synced from VMP to Syslog/SIEM',
                id: 'vmp-op-syslog-op-audit-logs'
            }
        ],
        documentation: [
            { title: 'Complete On-Premise Syslog Integration Guide', url: 'https://www.manageengine.com/products/desktop-central/ec-syslog-onprem-integration.html' },
            { title: 'Audit Log Forwarding Setup', url: 'https://www.manageengine.com/products/desktop-central/audit-log-forwarding.html' },
            { title: 'Syslog Configuration', url: 'https://www.manageengine.com/products/desktop-central/syslog-setup.html' },
            { title: 'SIEM Integration Best Practices', url: 'https://www.manageengine.com/products/desktop-central/siem-best-practices.html' }
        ]
    },

    // ════════════════════════════════════════════════════════════
    // Mobile Device Manager (MDM) Integrations
    // ════════════════════════════════════════════════════════════


    // Mobile Device Manager + ServiceDesk Plus Integrations,
    'vulnerability-manager-plus-onprem_tenable-sc-onprem': {
        supported: true
    },
    'vulnerability-manager-plus-onprem_tenable-vm-cloud': {
        supported: true
    },
    'vulnerability-manager-plus-onprem_zendesk-cloud': {
        supported: true,
        features: [
            { 
                name: 'Deploy software packages from Zendesk tickets',
                id: 'vmp-op-zendesk-deploy-software'
            },
            { 
                name: 'Remote control assets from Zendesk tickets',
                id: 'vmp-op-zendesk-remote-control'
            },
            { 
                name: 'System manager tools of a machine can be remotely accessed from Zendesk tickets',
                id: 'vmp-op-zendesk-system-tools'
            },
            { 
                name: 'Remote power options such as lock, hibernate, shutdown, Wake on LAN from Zendesk tickets',
                id: 'vmp-op-zendesk-power-options'
            }
        ],
        documentation: [
            { title: 'VMP On-Premise to Zendesk Cloud Integration', url: 'https://www.manageengine.com/products/desktop-central/ec-onprem-zendesk-cloud.html' },
            { title: 'Software Deployment from Tickets', url: 'https://www.manageengine.com/products/desktop-central/zendesk-software-deploy.html' },
            { title: 'Remote Control Configuration', url: 'https://www.manageengine.com/products/desktop-central/zendesk-remote-control.html' },
            { title: 'Zendesk API Documentation', url: 'https://developer.zendesk.com/api-reference/' }
        ]
    },
    
    // Vulnerability Manager Plus + Freshservice Integrations,
    'vulnerability-manager-plus-onprem_zoho-flow-cloud': {
        supported: false
    },

};
