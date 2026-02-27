// =============================================
// ECIH v3 - Visual Reference: CEI Slide Data
// 100 curated slides (10 per module), selected
// by file size (largest = most visual content)
// =============================================

const slidesData = {
    1: [
        { file: "img/m01_slide_001.jpg", caption: "IH&R Overview - Key Concepts (p.122)" },
        { file: "img/m01_slide_002.jpg", caption: "Incident Handling Framework (p.129)" },
        { file: "img/m01_slide_003.jpg", caption: "IH&R Roles & Responsibilities (p.151)" },
        { file: "img/m01_slide_004.jpg", caption: "Incident Classification (p.171)" },
        { file: "img/m01_slide_005.jpg", caption: "Security Incident Categories (p.173)" },
        { file: "img/m01_slide_006.jpg", caption: "IH&R Team Structure (p.174)" },
        { file: "img/m01_slide_007.jpg", caption: "CSIRT Types & Models (p.175)" },
        { file: "img/m01_slide_008.jpg", caption: "Incident Handling Laws & Compliance (p.193)" },
        { file: "img/m01_slide_009.jpg", caption: "Legal Considerations in IH (p.194)" },
        { file: "img/m01_slide_010.jpg", caption: "Module 1 Summary - Key Takeaways (p.199)" }
    ],
    2: [
        { file: "img/m02_slide_001.jpg", caption: "IH&R Process Overview (p.208)" },
        { file: "img/m02_slide_002.jpg", caption: "Preparation Phase - Tools & Resources (p.213)" },
        { file: "img/m02_slide_003.jpg", caption: "Detection & Analysis Phase (p.231)" },
        { file: "img/m02_slide_004.jpg", caption: "Containment Strategies (p.240)" },
        { file: "img/m02_slide_005.jpg", caption: "Eradication & Recovery Steps (p.248)" },
        { file: "img/m02_slide_006.jpg", caption: "Post-Incident Activities (p.264)" },
        { file: "img/m02_slide_007.jpg", caption: "Incident Documentation & Reporting (p.274)" },
        { file: "img/m02_slide_008.jpg", caption: "Evidence Handling Procedures (p.290)" },
        { file: "img/m02_slide_009.jpg", caption: "Chain of Custody (p.291)" },
        { file: "img/m02_slide_010.jpg", caption: "IH&R Process Metrics (p.295)" }
    ],
    3: [
        { file: "img/m03_slide_001.jpg", caption: "First Response Overview (p.300)" },
        { file: "img/m03_slide_002.jpg", caption: "First Responder Checklist (p.303)" },
        { file: "img/m03_slide_003.jpg", caption: "Digital Evidence Collection (p.312)" },
        { file: "img/m03_slide_004.jpg", caption: "Volatile Data Acquisition (p.315)" },
        { file: "img/m03_slide_005.jpg", caption: "Non-Volatile Data Collection (p.316)" },
        { file: "img/m03_slide_006.jpg", caption: "Network Traffic Capture (p.318)" },
        { file: "img/m03_slide_007.jpg", caption: "System Imaging Techniques (p.338)" },
        { file: "img/m03_slide_008.jpg", caption: "Log Analysis & Correlation (p.339)" },
        { file: "img/m03_slide_009.jpg", caption: "Forensic Analysis Tools (p.344)" },
        { file: "img/m03_slide_010.jpg", caption: "Incident Scene Documentation (p.358)" }
    ],
    4: [
        { file: "img/m04_slide_001.jpg", caption: "Malware Types & Classification (p.370)" },
        { file: "img/m04_slide_002.jpg", caption: "Malware Attack Vectors (p.371)" },
        { file: "img/m04_slide_003.jpg", caption: "Ransomware Analysis & Response (p.377)" },
        { file: "img/m04_slide_004.jpg", caption: "Trojan & Backdoor Detection (p.381)" },
        { file: "img/m04_slide_005.jpg", caption: "Rootkit Detection Methods (p.383)" },
        { file: "img/m04_slide_006.jpg", caption: "Malware Analysis Tools (p.393)" },
        { file: "img/m04_slide_007.jpg", caption: "Static Malware Analysis (p.395)" },
        { file: "img/m04_slide_008.jpg", caption: "Dynamic Malware Analysis (p.396)" },
        { file: "img/m04_slide_009.jpg", caption: "Malware Containment & Eradication (p.402)" },
        { file: "img/m04_slide_010.jpg", caption: "Malware Incident Response Workflow (p.423)" }
    ],
    5: [
        { file: "img/m05_slide_001.jpg", caption: "Email Attack Landscape (p.487)" },
        { file: "img/m05_slide_002.jpg", caption: "Phishing Detection Techniques (p.508)" },
        { file: "img/m05_slide_003.jpg", caption: "Spear Phishing & BEC Analysis (p.509)" },
        { file: "img/m05_slide_004.jpg", caption: "Email Header Analysis (p.510)" },
        { file: "img/m05_slide_005.jpg", caption: "Email Forensics Tools (p.513)" },
        { file: "img/m05_slide_006.jpg", caption: "SPF / DKIM / DMARC (p.521)" },
        { file: "img/m05_slide_007.jpg", caption: "Malicious Attachment Analysis (p.530)" },
        { file: "img/m05_slide_008.jpg", caption: "Email Incident Containment (p.533)" },
        { file: "img/m05_slide_009.jpg", caption: "Anti-Phishing Countermeasures (p.539)" },
        { file: "img/m05_slide_010.jpg", caption: "Email Security Best Practices (p.540)" }
    ],
    6: [
        { file: "img/m06_slide_001.jpg", caption: "Network Security Incident Types (p.548)" },
        { file: "img/m06_slide_002.jpg", caption: "DDoS Attack Analysis (p.549)" },
        { file: "img/m06_slide_003.jpg", caption: "Network Intrusion Detection (p.550)" },
        { file: "img/m06_slide_004.jpg", caption: "Packet Capture & Analysis (p.551)" },
        { file: "img/m06_slide_005.jpg", caption: "Network Forensics Tools (p.557)" },
        { file: "img/m06_slide_006.jpg", caption: "Firewall & IDS/IPS Log Analysis (p.562)" },
        { file: "img/m06_slide_007.jpg", caption: "Lateral Movement Detection (p.578)" },
        { file: "img/m06_slide_008.jpg", caption: "Network Attack Kill Chain (p.582)" },
        { file: "img/m06_slide_009.jpg", caption: "Network Containment Strategies (p.588)" },
        { file: "img/m06_slide_010.jpg", caption: "Network Security Hardening (p.597)" }
    ],
    7: [
        { file: "img/m07_slide_001.jpg", caption: "Web Application Attack Types (p.606)" },
        { file: "img/m07_slide_002.jpg", caption: "SQL Injection Detection & Response (p.614)" },
        { file: "img/m07_slide_003.jpg", caption: "XSS Attack Analysis (p.615)" },
        { file: "img/m07_slide_004.jpg", caption: "CSRF & Injection Attacks (p.616)" },
        { file: "img/m07_slide_005.jpg", caption: "Web App Forensics Tools (p.617)" },
        { file: "img/m07_slide_006.jpg", caption: "Web Server Log Analysis (p.619)" },
        { file: "img/m07_slide_007.jpg", caption: "OWASP Top 10 Coverage (p.625)" },
        { file: "img/m07_slide_008.jpg", caption: "Web Application Attack Workflow (p.664)" },
        { file: "img/m07_slide_009.jpg", caption: "Web App Incident Containment (p.669)" },
        { file: "img/m07_slide_010.jpg", caption: "Web Security Countermeasures (p.670)" }
    ],
    8: [
        { file: "img/m08_slide_001.jpg", caption: "Cloud Security Incident Types (p.702)" },
        { file: "img/m08_slide_002.jpg", caption: "Cloud Shared Responsibility Model (p.707)" },
        { file: "img/m08_slide_003.jpg", caption: "Cloud Forensics Challenges (p.721)" },
        { file: "img/m08_slide_004.jpg", caption: "AWS / Azure / GCP Log Sources (p.736)" },
        { file: "img/m08_slide_005.jpg", caption: "Cloud Data Breach Response (p.738)" },
        { file: "img/m08_slide_006.jpg", caption: "Cloud Container Security (p.753)" },
        { file: "img/m08_slide_007.jpg", caption: "Cloud IAM Incident Analysis (p.759)" },
        { file: "img/m08_slide_008.jpg", caption: "Cloud Incident Response Workflow (p.764)" },
        { file: "img/m08_slide_009.jpg", caption: "Cloud Containment & Recovery (p.780)" },
        { file: "img/m08_slide_010.jpg", caption: "Cloud Security Best Practices (p.781)" }
    ],
    9: [
        { file: "img/m09_slide_001.jpg", caption: "Insider Threat Types & Motivations (p.786)" },
        { file: "img/m09_slide_002.jpg", caption: "Insider Threat Detection Indicators (p.790)" },
        { file: "img/m09_slide_003.jpg", caption: "User Behavior Analytics (UBA) (p.791)" },
        { file: "img/m09_slide_004.jpg", caption: "DLP & Data Exfiltration Detection (p.794)" },
        { file: "img/m09_slide_005.jpg", caption: "Privilege Abuse Analysis (p.796)" },
        { file: "img/m09_slide_006.jpg", caption: "Insider Threat Investigation Tools (p.798)" },
        { file: "img/m09_slide_007.jpg", caption: "HR & Legal Coordination (p.800)" },
        { file: "img/m09_slide_008.jpg", caption: "Insider Threat Containment (p.802)" },
        { file: "img/m09_slide_009.jpg", caption: "Insider Threat Prevention Controls (p.815)" },
        { file: "img/m09_slide_010.jpg", caption: "Insider Threat Response Framework (p.824)" }
    ],
    10: [
        { file: "img/m10_slide_001.jpg", caption: "Endpoint Security Incident Types (p.833)" },
        { file: "img/m10_slide_002.jpg", caption: "EDR Tools & Capabilities (p.836)" },
        { file: "img/m10_slide_003.jpg", caption: "Endpoint Forensics Process (p.837)" },
        { file: "img/m10_slide_004.jpg", caption: "Windows Event Log Analysis (p.838)" },
        { file: "img/m10_slide_005.jpg", caption: "Memory Forensics Techniques (p.839)" },
        { file: "img/m10_slide_006.jpg", caption: "Endpoint Artifact Collection (p.840)" },
        { file: "img/m10_slide_007.jpg", caption: "Endpoint Containment & Isolation (p.857)" },
        { file: "img/m10_slide_008.jpg", caption: "Endpoint Threat Hunting (p.872)" },
        { file: "img/m10_slide_009.jpg", caption: "Endpoint Hardening Measures (p.873)" },
        { file: "img/m10_slide_010.jpg", caption: "ECIH v3 Exam Key Topics Summary (p.886)" }
    ]
};
