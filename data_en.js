// =============================================
// ECIH v3 - ENGLISH TRANSLATIONS
// Auto-patches flashcards and moduleContent with EN fields
// =============================================

(function() {
    // ========== FLASHCARD TRANSLATIONS ==========
    const fcEN = [
        // Module 1 (indices 0-4)
        { q_en: "What is a security incident?", a_en: "An event that compromises the confidentiality, integrity, or availability (CIA) of information assets" },
        { q_en: "What is the difference between an event and an incident?", a_en: "An event is any observable occurrence; an incident is an event with a negative impact on security" },
        { q_en: "What does CSIRT stand for?", a_en: "Computer Security Incident Response Team - A team responsible for responding to computer security incidents" },
        { q_en: "What is NIST SP 800-61?", a_en: "Computer Security Incident Handling Guide - NIST's guide for handling security incidents" },
        { q_en: "What is a SOC?", a_en: "Security Operations Center - A facility that monitors and responds to security incidents 24/7" },

        // Module 2 (indices 5-11)
        { q_en: "What are the 4 phases of the IH&R process according to NIST?", a_en: "1. Preparation 2. Detection & Analysis 3. Containment, Eradication & Recovery 4. Post-Incident Activity" },
        { q_en: "What is a playbook in IH&R?", a_en: "A document that describes the specific steps to follow when responding to a particular type of incident" },
        { q_en: "What does MTTD stand for?", a_en: "Mean Time to Detect - The average time to detect an incident" },
        { q_en: "What does MTTR stand for?", a_en: "Mean Time to Respond/Recover - The average time to respond to or recover from an incident" },
        { q_en: "What are IoCs?", a_en: "Indicators of Compromise - Artifacts that suggest a possible intrusion or security breach" },
        { q_en: "What is triage in IH&R?", a_en: "The process of prioritizing incidents based on their severity and impact to determine the response order" },
        { q_en: "What is the Lessons Learned phase?", a_en: "A post-incident meeting to document what worked, what didn't, and how to improve processes" },

        // Module 3 (indices 12-17)
        { q_en: "What is the golden rule of First Response?", a_en: "Do no harm - Do not cause further damage and preserve the integrity of the evidence" },
        { q_en: "What is the correct order of volatility?", a_en: "1. CPU Registers/Cache 2. RAM 3. Network state 4. Running processes 5. Hard disk 6. Removable media 7. Remote logs" },
        { q_en: "What is a bit-stream copy?", a_en: "An exact bit-for-bit forensic copy of a storage medium, including unallocated space" },
        { q_en: "What is the Chain of Custody?", a_en: "Documentation that records who had access to the evidence, when, and what was done with it" },
        { q_en: "Why should you NOT power off a compromised system?", a_en: "Because volatile evidence in RAM would be lost, including running processes, network connections, and in-memory malware" },
        { q_en: "What tool is used to capture RAM memory on Windows?", a_en: "WinPMEM, FTK Imager, or DumpIt" },

        // Module 4 (indices 18-24)
        { q_en: "What is the difference between a virus and a worm?", a_en: "A virus requires user action and attaches to files; a worm propagates automatically through the network" },
        { q_en: "What is a RAT?", a_en: "Remote Access Trojan - Malware that allows remote control of the infected system" },
        { q_en: "What is fileless malware?", a_en: "Malware that operates in memory without writing files to disk, using legitimate system tools" },
        { q_en: "What is static malware analysis?", a_en: "Examining the malware code without executing it, analyzing strings, imports, exports, etc." },
        { q_en: "What is dynamic malware analysis?", a_en: "Executing the malware in a controlled environment (sandbox) to observe its behavior" },
        { q_en: "What is YARA?", a_en: "A tool for creating malware detection rules based on text or binary patterns" },
        { q_en: "What is a C2 server?", a_en: "Command and Control server - A server that controls infected systems and receives exfiltrated data" },

        // Module 5 (indices 25-31)
        { q_en: "What is the difference between phishing and spear phishing?", a_en: "Phishing is mass and indiscriminate; spear phishing is targeted at specific individuals or organizations" },
        { q_en: "What is BEC?", a_en: "Business Email Compromise - Fraud where the attacker impersonates executives to request money transfers" },
        { q_en: "What is SPF?", a_en: "Sender Policy Framework - A protocol that verifies which servers are authorized to send email on behalf of a domain" },
        { q_en: "What is DKIM?", a_en: "DomainKeys Identified Mail - A digital signature system that verifies the email was not modified in transit" },
        { q_en: "What is DMARC?", a_en: "Domain-based Message Authentication, Reporting & Conformance - A policy that defines what to do if SPF/DKIM checks fail" },
        { q_en: "Which email header shows the actual message route?", a_en: "Received headers - Read from bottom to top to see the complete route" },
        { q_en: "What is whaling?", a_en: "A type of spear phishing specifically targeting high-level executives (C-level)" },

        // Module 6 (indices 32-38)
        { q_en: "What are the three types of DDoS attacks?", a_en: "1. Volumetric (bandwidth) 2. Protocol (TCP/UDP) 3. Application Layer (HTTP)" },
        { q_en: "What is a SYN flood attack?", a_en: "An attack that sends many TCP SYN requests without completing the handshake, exhausting server resources" },
        { q_en: "What is ARP spoofing?", a_en: "An attack that associates the attacker's MAC address with the IP of another host to intercept traffic" },
        { q_en: "What is beaconing?", a_en: "Periodic communication from malware to its C2 server, typically at regular intervals" },
        { q_en: "What is IDS vs IPS?", a_en: "IDS (Intrusion Detection System) detects and alerts; IPS (Intrusion Prevention System) also blocks threats" },
        { q_en: "What is NetFlow?", a_en: "A Cisco protocol for collecting information about IP traffic flows on the network" },
        { q_en: "What tool is used for packet analysis?", a_en: "Wireshark - A network protocol and packet analyzer" },

        // Module 7 (indices 39-45)
        { q_en: "What is SQL Injection?", a_en: "An attack that injects malicious SQL code through inputs to manipulate the database" },
        { q_en: "What are the 3 types of XSS?", a_en: "1. Stored (persistent) 2. Reflected (non-persistent) 3. DOM-based" },
        { q_en: "What is CSRF?", a_en: "Cross-Site Request Forgery - An attack that forces the user to execute unwanted actions on an authenticated web application" },
        { q_en: "How is SQL Injection prevented?", a_en: "Using prepared statements/parameterized queries and input validation" },
        { q_en: "What is a WAF?", a_en: "Web Application Firewall - A firewall that filters malicious HTTP traffic directed at web applications" },
        { q_en: "What is SSRF?", a_en: "Server-Side Request Forgery - An attack that makes the server perform requests to internal resources" },
        { q_en: "What is directory traversal?", a_en: "An attack that uses ../ to access files outside the allowed web directory" },

        // Module 8 (indices 46-51)
        { q_en: "What is the shared responsibility model?", a_en: "The cloud provider secures the infrastructure (OF the cloud); the customer secures their data and configuration (IN the cloud)" },
        { q_en: "What is CSPM?", a_en: "Cloud Security Posture Management - A tool that identifies misconfigurations in cloud environments" },
        { q_en: "What is CASB?", a_en: "Cloud Access Security Broker - An intermediary that enforces security policies between users and cloud services" },
        { q_en: "What is AWS CloudTrail?", a_en: "An AWS service that logs all API calls for auditing and compliance" },
        { q_en: "What is Shadow IT?", a_en: "The use of unauthorized cloud services by employees without IT/Security knowledge or approval" },
        { q_en: "What is the #1 threat in cloud according to reports?", a_en: "Misconfiguration - Incorrect configuration of cloud resources (e.g., public S3 buckets)" },

        // Module 9 (indices 52-57)
        { q_en: "What are the 3 types of insider threats?", a_en: "1. Malicious (intentional) 2. Negligent (careless) 3. Compromised (stolen credentials)" },
        { q_en: "What is UEBA?", a_en: "User and Entity Behavior Analytics - A system that detects anomalies in user behavior" },
        { q_en: "What is DLP?", a_en: "Data Loss Prevention - Technology that prevents the leakage of sensitive data" },
        { q_en: "What are indicators of a malicious insider?", a_en: "After-hours access, mass data downloads, accessing information outside their role, upcoming departure from the company" },
        { q_en: "What is separation of duties?", a_en: "A principle that divides critical tasks among multiple people to prevent fraud" },
        { q_en: "What is PAM?", a_en: "Privileged Access Management - A system for controlling and auditing privileged access" },

        // Module 10 (indices 58-66)
        { q_en: "What is EDR?", a_en: "Endpoint Detection and Response - A solution that detects, investigates, and responds to threats on endpoints" },
        { q_en: "What is XDR?", a_en: "Extended Detection and Response - EDR extended to integrate data from multiple sources (network, email, cloud)" },
        { q_en: "What are LOLBins?", a_en: "Living off the Land Binaries - Legitimate system tools used by attackers (PowerShell, cmd, wmic)" },
        { q_en: "What is Pass-the-Hash?", a_en: "A technique that uses stolen NTLM hashes to authenticate without knowing the password" },
        { q_en: "What is Mimikatz?", a_en: "A tool for extracting credentials from Windows memory (hashes, Kerberos tickets, passwords)" },
        { q_en: "What is Sysmon?", a_en: "Windows System Monitor that provides detailed logging of system activity" },
        { q_en: "What Windows artifacts are useful in forensics?", a_en: "Prefetch, MFT, Registry hives, Event logs, NTUSER.DAT, ShimCache" },
        { q_en: "What is KAPE?", a_en: "Kroll Artifact Parser and Extractor - A tool for rapid forensic artifact collection" },

        // Module 1 - Additional (indices 67-79)
        { q_en: "What is the attack formula according to the syllabus?", a_en: "Attacks = Motive (Goal) + Method + Vulnerability" },
        { q_en: "What is the CIA Triad?", a_en: "Confidentiality, Integrity, and Availability - The three fundamental pillars of information security" },
        { q_en: "What is Authenticity in security?", a_en: "The assurance that a communication, document, or data is genuine and its origin is verifiable" },
        { q_en: "What is Non-Repudiation?", a_en: "The assurance that the sender cannot deny having sent a message and the receiver cannot deny having received it" },
        { q_en: "What is a Threat Actor?", a_en: "A person or entity responsible for harmful incidents with the potential to impact an organization's security" },
        { q_en: "What is Hacktivism?", a_en: "A form of activism where hackers break into government or corporate systems as an act of protest" },
        { q_en: "What are Script Kiddies?", a_en: "Attackers without technical skills who use tools and scripts created by others" },
        { q_en: "What is an APT?", a_en: "Advanced Persistent Threat - A sophisticated, prolonged, and targeted attack, typically state-sponsored" },
        { q_en: "What is the Cyber Kill Chain?", a_en: "A Lockheed Martin framework describing the 7 phases of a cyberattack: Reconnaissance, Weaponization, Delivery, Exploitation, Installation, C2, Actions" },
        { q_en: "What is MITRE ATT&CK?", a_en: "A knowledge base of tactics, techniques, and procedures (TTPs) used by adversaries" },
        { q_en: "What are the sources of threats?", a_en: "Natural (disasters), Unintentional (human errors), Intentional (malicious attacks)" },
        { q_en: "What is Misconfiguration?", a_en: "The most common vulnerability, primarily caused by human error in system configuration" },
        { q_en: "What is a Gray Hat?", a_en: "A hacker who may violate laws without malicious intent, operating between ethical and unethical boundaries" },

        // Module 2 - Additional (indices 80-90)
        { q_en: "What is ITIL Incident Management?", a_en: "An ITIL process for restoring business services as quickly as possible with minimal impact" },
        { q_en: "What are the ITIL incident steps?", a_en: "Registration, Categorization, Assignment, Diagnosis, Resolution, Closure" },
        { q_en: "What is COBIT?", a_en: "An IT governance framework that defines controls and processes for incident management with CMMI maturity levels" },
        { q_en: "What are the CIS Controls?", a_en: "A prioritized set of defense-in-depth actions developed by the Center for Internet Security" },
        { q_en: "What is an AAR (After-Action Report)?", a_en: "A strategic post-incident report that documents what worked, areas for improvement, and future strategies" },
        { q_en: "What does an Incident Postmortem include?", a_en: "Severity, impact, timeline, root cause analysis, related incidents, lessons learned" },
        { q_en: "What is Mean Time to Resolution?", a_en: "MTTR - The average time from detection to complete resolution of an incident" },
        { q_en: "What is a Runbook?", a_en: "A document with step-by-step procedures for routine operational tasks or incident response" },
        { q_en: "What questions does Lessons Learned answer?", a_en: "What caused the incident? How was it contained? What worked well? What needs improvement?" },
        { q_en: "What is ISO 27035?", a_en: "International standard for Information Security Incident Management" },
        { q_en: "What is ISO 27037?", a_en: "Standard for identification, collection, acquisition, and preservation of digital evidence" },
        { q_en: "According to NERC 1307, how long are records retained?", a_en: "Three calendar years for cybersecurity incident records" },

        // Module 3 - Additional (indices 91-101)
        { q_en: "What should you do if the computer is OFF at the scene?", a_en: "Do NOT turn it on - it could alter evidence or trigger destructive processes" },
        { q_en: "What should you do if the computer is ON?", a_en: "Photograph the screen, document running programs, collect volatile data before shutting down" },
        { q_en: "When should you IMMEDIATELY disconnect power?", a_en: "If destructive processes are observed deleting data or overwriting information" },
        { q_en: "When should you NOT disconnect power?", a_en: "When evidential data is visible, such as active files, chatrooms, or open financial documents" },
        { q_en: "What devices should you look for besides computers?", a_en: "Audio/video recorders, cameras, GPS devices, access cards, smartphones, caller ID boxes" },
        { q_en: "How should you handle smartphones found at the scene?", a_en: "If OFF: do not turn on. If ON: keep it charged, photograph the screen, do not manipulate" },
        { q_en: "What are malicious startup files?", a_en: "Files created by malware in startup folders (Windows: startup/system32, Linux: rc.local)" },
        { q_en: "What is MAC time in forensics?", a_en: "Modified, Accessed, Changed times - File timestamps useful for reconstructing a timeline" },
        { q_en: "How do you properly shut down a Windows system?", a_en: "Photograph screen, document programs, Start > Power > Shut down, wait, then disconnect" },
        { q_en: "How do you shut down Linux as root?", a_en: "Command sync;sync;halt for a safe shutdown preserving integrity" },

        // Module 4 - Additional (indices 101-114)
        { q_en: "What is a Trojan?", a_en: "Malware disguised as legitimate software that performs malicious actions when installed" },
        { q_en: "What is Ransomware?", a_en: "Malware that encrypts the victim's files and demands payment (ransom) to provide the decryption key" },
        { q_en: "What is Spyware?", a_en: "Malware that secretly monitors user activity and collects information without consent" },
        { q_en: "What is Adware?", a_en: "Software that displays unwanted advertisements, frequently bundled with free software" },
        { q_en: "What is a Rootkit?", a_en: "Malware designed to conceal its presence and maintain persistent privileged access to the system" },
        { q_en: "What is a Keylogger?", a_en: "Malware that records keystrokes to capture credentials, passwords, and sensitive data" },
        { q_en: "What is a Botnet?", a_en: "A network of infected computers (bots/zombies) remotely controlled for malicious activities such as DDoS" },
        { q_en: "What is a PUP?", a_en: "Potentially Unwanted Program - Software that may be unwanted, frequently bundled with other programs" },
        { q_en: "What is an IOC?", a_en: "Indicator of Compromise - Forensic evidence suggesting a security breach (hashes, IPs, domains)" },
        { q_en: "What is the 3-2-1 backup strategy?", a_en: "3 copies of data, on 2 different types of media, with 1 copy offsite" },
        { q_en: "What is the first step when ransomware is detected?", a_en: "Disconnect infected systems from the network immediately to prevent propagation" },
        { q_en: "What ports should you monitor for ransomware?", a_en: "RDP (3389) and SMB (445) - ports commonly used by ransomware to spread" },
        { q_en: "What is Malwarebytes?", a_en: "Anti-malware software that provides real-time protection against viruses, ransomware, spyware, and exploits" },

        // Module 5 - Additional (indices 115-123)
        { q_en: "What is Vishing?", a_en: "Voice Phishing - Social engineering attacks conducted via phone calls" },
        { q_en: "What is Smishing?", a_en: "SMS Phishing - Phishing attacks conducted via SMS text messages" },
        { q_en: "What is Pharming?", a_en: "An attack that redirects traffic from legitimate websites to fraudulent ones via DNS poisoning or hosts file modification" },
        { q_en: "What is Clone Phishing?", a_en: "An attack that creates a near-identical copy of a legitimate email but with malicious links/attachments" },
        { q_en: "Which header shows the sender's IP address?", a_en: "X-Originating-IP - Reveals the IP of the computer that sent the email, useful in forensic analysis" },
        { q_en: "What is an Outlook PST?", a_en: "Personal Storage Table - A file where Outlook stores emails, contacts, and calendar data locally" },
        { q_en: "What is the difference between Soft and Hard delete in Outlook?", a_en: "Soft: moves to Deleted Items. Hard (Shift+Delete): permanently removes from the mailbox" },
        { q_en: "How do you read Received headers?", a_en: "From bottom to top - The lowest is the origin, the highest is the final destination" },
        { q_en: "What tool recovers Outlook emails?", a_en: "EaseUS Email Recovery Wizard, Stellar Undelete, SysTools Outlook Recovery" },

        // Module 6 - Additional (indices 124-129)
        { q_en: "What is an Amplification attack?", a_en: "A DDoS attack that uses intermediary servers to amplify the traffic volume directed at the victim" },
        { q_en: "What is DNS Amplification?", a_en: "An attack that uses recursive DNS servers to amplify traffic toward the victim with large responses" },
        { q_en: "What is SIEM?", a_en: "Security Information and Event Management - A system that correlates logs and events to detect threats" },
        { q_en: "What is a honeypot?", a_en: "A decoy system designed to attract attackers and study their techniques without risk to real systems" },
        { q_en: "What is man-in-the-middle?", a_en: "An attack where the attacker intercepts communications between two parties without their knowledge" },
        { q_en: "What is session hijacking?", a_en: "An attack that steals or predicts session tokens to take control of an authenticated session" },

        // Module 7 - Additional (indices 130-136)
        { q_en: "What is Stored XSS?", a_en: "XSS where the malicious script is permanently stored on the server (e.g., in a database)" },
        { q_en: "What is Reflected XSS?", a_en: "XSS where the payload is immediately reflected from the server in the HTTP response" },
        { q_en: "What is DOM-based XSS?", a_en: "XSS where the vulnerability exists in client-side scripts that modify the DOM" },
        { q_en: "What is the OWASP Top 10?", a_en: "A list of the 10 most critical security vulnerabilities in web applications according to OWASP" },
        { q_en: "What is Command Injection?", a_en: "An attack that executes operating system commands through inputs of a vulnerable application" },
        { q_en: "What is Broken Authentication?", a_en: "A vulnerability in session/authentication management that allows unauthorized access to accounts" },
        { q_en: "What is Insecure Direct Object Reference?", a_en: "A vulnerability that allows accessing objects (files, records) by changing parameters in the URL" },

        // Module 8 - Additional (indices 137-147)
        { q_en: "What are the 4 cloud deployment models?", a_en: "Public, Private, Hybrid, Community" },
        { q_en: "What is IaaS?", a_en: "Infrastructure as a Service - The provider offers infrastructure (VMs, storage, networking)" },
        { q_en: "What is PaaS?", a_en: "Platform as a Service - The provider offers a platform for developing and deploying applications" },
        { q_en: "What is SaaS?", a_en: "Software as a Service - The provider offers ready-to-use applications via web (e.g., Gmail, Office 365)" },
        { q_en: "What is AWS GuardDuty?", a_en: "An AWS threat detection service that monitors for malicious activity and unauthorized behavior" },
        { q_en: "What is Azure Activity Log?", a_en: "Azure's equivalent to CloudTrail - logs resource operations for auditing" },
        { q_en: "What is a VPC?", a_en: "Virtual Private Cloud - A logically isolated network within the cloud provider's infrastructure" },
        { q_en: "What causes most cloud breaches?", a_en: "Misconfiguration - especially public S3 buckets and excessive permissions" },
        { q_en: "What is CWPP?", a_en: "Cloud Workload Protection Platform - Security for server workloads in the cloud" },
        { q_en: "What is container security?", a_en: "Protection of containerized applications (Docker, Kubernetes) from vulnerabilities and threats" },
        { q_en: "What is Dynatrace?", a_en: "A Google Cloud monitoring tool that provides metrics, logs, and traces for complete visibility" },

        // Module 9 - Additional (indices 148-153)
        { q_en: "What is a Malicious Insider?", a_en: "An employee who intentionally causes harm due to revenge, financial gain, or other motives" },
        { q_en: "What is a Negligent Insider?", a_en: "An employee who causes harm through carelessness, error, or lack of security awareness" },
        { q_en: "What is a Compromised Insider?", a_en: "An employee whose credentials have been stolen and are being used by external attackers" },
        { q_en: "What is least privilege?", a_en: "The principle of giving users only the minimum permissions necessary to perform their job" },
        { q_en: "What indicators detect malicious insiders?", a_en: "After-hours access, mass downloads, accessing data outside their role, upcoming departure from the company" },
        { q_en: "What is mandatory vacation?", a_en: "A control that requires mandatory time off to detect fraud that requires continuous presence" },

        // Module 10 - Additional (indices 154-162)
        { q_en: "What is Pass-the-Ticket?", a_en: "A technique that uses stolen Kerberos tickets to authenticate without needing the password" },
        { q_en: "What is a Golden Ticket?", a_en: "A forged Kerberos TGT that grants access to any resource in the domain for an indefinite period" },
        { q_en: "What is a Silver Ticket?", a_en: "A forged Kerberos TGS to access a specific service without contacting the DC" },
        { q_en: "What is Velociraptor?", a_en: "A forensic collection and incident response tool for endpoints" },
        { q_en: "What is Autoruns?", a_en: "A Sysinternals tool that shows programs configured to run during system startup" },
        { q_en: "What is Process Monitor?", a_en: "A Sysinternals tool for real-time monitoring of process, registry, and filesystem activity" },
        { q_en: "What are the critical Windows Event Logs?", a_en: "Security (4624, 4625, 4648), System, Application, PowerShell, Sysmon" },
        { q_en: "What is ShimCache?", a_en: "A Windows artifact that records executed applications, useful for detecting malware" },
        { q_en: "What is Prefetch?", a_en: "A Windows artifact that stores information about executed applications to speed up their launch" },
        { q_en: "What is $MFT?", a_en: "Master File Table - The NTFS file system database that contains metadata for all files" }
    ];

    // Patch each flashcard
    fcEN.forEach(function(trans, idx) {
        if (idx < flashcards.length) {
            flashcards[idx].q_en = trans.q_en;
            flashcards[idx].a_en = trans.a_en;
        }
    });

    // ========== MODULE CONTENT TRANSLATIONS ==========

    // Module 1
    moduleContent[1].title_en = "Introduction to Incident Handling and Response";
    moduleContent[1].content_en = `
        <h2>Fundamental Concepts</h2>
        <h3>What is a Security Incident?</h3>
        <ul>
            <li>A <span class="key-term">security incident</span> is an event that compromises the confidentiality, integrity, or availability (CIA) of information assets</li>
            <li>Difference between an <span class="key-term">event</span> (observable occurrence) and an <span class="key-term">incident</span> (event with negative impact)</li>
            <li>Incidents can be intentional (attacks) or unintentional (errors)</li>
        </ul>

        <h3>Types of Incidents</h3>
        <ul>
            <li><strong>Malware:</strong> Viruses, worms, trojans, ransomware, spyware</li>
            <li><strong>Phishing/Social Engineering:</strong> Social engineering attacks</li>
            <li><strong>DoS/DDoS:</strong> Denial of Service</li>
            <li><strong>Unauthorized Access:</strong> Unauthorized system access</li>
            <li><strong>Data Breach:</strong> Data leakage or exposure</li>
            <li><strong>Insider Threats:</strong> Internal threats from employees or contractors</li>
        </ul>

        <h2>Incident Handling and Response (IH&R)</h2>
        <h3>Definition</h3>
        <ul>
            <li><span class="key-term">Incident Handling</span>: The process of detecting, analyzing, containing, and recovering from incidents</li>
            <li><span class="key-term">Incident Response</span>: An organized approach to managing the aftermath of an incident</li>
            <li>Objective: Minimize damage and reduce recovery time and cost</li>
        </ul>

        <h3>Incident Response Team (IRT/CSIRT/CERT)</h3>
        <ul>
            <li><span class="key-term">CSIRT</span>: Computer Security Incident Response Team</li>
            <li><span class="key-term">CERT</span>: Computer Emergency Response Team</li>
            <li><span class="key-term">SOC</span>: Security Operations Center</li>
            <li>Roles: Incident Manager, Triage Analyst, Forensic Analyst, Threat Researcher</li>
        </ul>

        <h2>Frameworks and Standards</h2>
        <ul>
            <li><span class="key-term">NIST SP 800-61</span>: Computer Security Incident Handling Guide</li>
            <li><span class="key-term">SANS</span>: Incident Handler's Handbook</li>
            <li><span class="key-term">ISO 27035</span>: Information Security Incident Management</li>
            <li><span class="key-term">ITIL</span>: Incident Management Process</li>
        </ul>

        <h2>Importance of IH&R</h2>
        <ul>
            <li>Reduces the financial impact of incidents</li>
            <li>Protects the organization's reputation</li>
            <li>Regulatory compliance (GDPR, HIPAA, PCI-DSS)</li>
            <li>Continuous improvement of security posture</li>
            <li>Evidence preservation for legal actions</li>
        </ul>
    `;

    // Module 2
    moduleContent[2].title_en = "Incident Handling and Response Process";
    moduleContent[2].content_en = `
        <h2>IH&R Process Phases (NIST)</h2>

        <h3>1. Preparation</h3>
        <ul>
            <li>Develop incident response <span class="key-term">policies and procedures</span></li>
            <li>Create and train the <span class="key-term">Incident Response Team</span></li>
            <li>Implement necessary tools and technologies</li>
            <li>Establish <span class="key-term">communication</span> and escalation paths</li>
            <li>Create <span class="key-term">playbooks</span> and runbooks</li>
            <li>Conduct simulation exercises (<span class="key-term">tabletop exercises</span>)</li>
        </ul>

        <h3>2. Detection & Analysis</h3>
        <ul>
            <li><span class="key-term">Detection</span>: Identify potential incidents through alerts, logs, and reports</li>
            <li><span class="key-term">Triage</span>: Prioritize incidents by severity and impact</li>
            <li>Analysis of <span class="key-term">Indicators of Compromise (IoCs)</span></li>
            <li>Event correlation using <span class="key-term">SIEM</span></li>
            <li>Document initial findings</li>
            <li>Classify and categorize the incident</li>
        </ul>

        <h3>3. Containment, Eradication & Recovery</h3>
        <ul>
            <li><strong>Containment:</strong>
                <ul>
                    <li>Short-term: Isolate affected systems immediately</li>
                    <li>Long-term: Implement temporary solutions</li>
                </ul>
            </li>
            <li><strong>Eradication:</strong>
                <ul>
                    <li>Remove malware and malicious artifacts</li>
                    <li>Identify and close vulnerabilities</li>
                    <li>Remove unauthorized access</li>
                </ul>
            </li>
            <li><strong>Recovery:</strong>
                <ul>
                    <li>Restore systems from clean backups</li>
                    <li>Validate system integrity</li>
                    <li>Intensive post-recovery monitoring</li>
                </ul>
            </li>
        </ul>

        <h3>4. Post-Incident Activity</h3>
        <ul>
            <li><span class="key-term">Lessons Learned</span>: Post-incident review meeting</li>
            <li>Create a detailed <span class="key-term">Incident Report</span></li>
            <li>Update policies and procedures</li>
            <li>Improve security controls</li>
            <li>Evidence retention per policy</li>
        </ul>

        <h2>Incident Documentation</h2>
        <ul>
            <li><span class="key-term">Chain of Custody</span>: Evidence chain of custody documentation</li>
            <li>Incident timeline</li>
            <li>Actions taken and by whom</li>
            <li>Affected systems</li>
            <li>Incident impact</li>
        </ul>

        <h2>IH&R Metrics</h2>
        <ul>
            <li><span class="key-term">MTTD</span>: Mean Time to Detect</li>
            <li><span class="key-term">MTTR</span>: Mean Time to Respond/Recover</li>
            <li><span class="key-term">MTTC</span>: Mean Time to Contain</li>
            <li>Number of incidents per category</li>
            <li>Cost per incident</li>
        </ul>
    `;

    // Module 3
    moduleContent[3].title_en = "First Response";
    moduleContent[3].content_en = `
        <h2>Role of the First Responder</h2>
        <ul>
            <li>First person to arrive at the incident scene</li>
            <li>Responsible for <span class="key-term">preserving evidence</span></li>
            <li>Document the initial state of the system</li>
            <li>Do not contaminate the scene</li>
        </ul>

        <h2>First Response Principles</h2>
        <h3>Golden Rule</h3>
        <ul>
            <li><span class="key-term">"Do no harm"</span> - Do not cause further damage</li>
            <li>Preserve the integrity of the evidence</li>
            <li>Document EVERYTHING you do</li>
            <li>Maintain the chain of custody</li>
        </ul>

        <h3>Order of Volatility</h3>
        <p>Collect evidence from most to least volatile:</p>
        <ul>
            <li>1. <span class="key-term">CPU Registers, Cache</span></li>
            <li>2. <span class="key-term">RAM Memory</span></li>
            <li>3. <span class="key-term">Network State</span> (active connections)</li>
            <li>4. <span class="key-term">Running Processes</span></li>
            <li>5. <span class="key-term">Hard Disk</span></li>
            <li>6. <span class="key-term">Removable Media</span></li>
            <li>7. <span class="key-term">Remote Logs</span></li>
        </ul>

        <h2>First Responder Actions</h2>
        <h3>What TO DO</h3>
        <ul>
            <li>Document date, time, and time zone</li>
            <li>Photograph the scene and screens</li>
            <li>Note people present</li>
            <li>Identify and secure the perimeter</li>
            <li>Collect volatile evidence first</li>
            <li>Create <span class="key-term">cryptographic hashes</span> (MD5, SHA-256) of evidence</li>
        </ul>

        <h3>What NOT TO DO</h3>
        <ul>
            <li>Do NOT power off the system (you will lose RAM)</li>
            <li>Do NOT run programs on the affected system</li>
            <li>Do NOT trust tools on the compromised system</li>
            <li>Do NOT modify file timestamps</li>
            <li>Do NOT work without documenting</li>
        </ul>

        <h2>First Response Tools</h2>
        <ul>
            <li><span class="key-term">FTK Imager</span>: Forensic image acquisition</li>
            <li><span class="key-term">Volatility</span>: RAM memory analysis</li>
            <li><span class="key-term">WinPMEM/LiME</span>: Memory capture</li>
            <li><span class="key-term">Sysinternals Suite</span>: Windows analysis tools</li>
            <li><span class="key-term">netstat, ps, lsof</span>: System commands</li>
        </ul>

        <h2>Evidence Acquisition</h2>
        <h3>Types of Acquisition</h3>
        <ul>
            <li><span class="key-term">Bit-stream copy</span>: Exact bit-for-bit copy</li>
            <li><span class="key-term">Logical copy</span>: Copy of files and folders</li>
            <li><span class="key-term">Sparse copy</span>: Only relevant data</li>
        </ul>

        <h3>Chain of Custody</h3>
        <ul>
            <li>Document who, what, when, where, why</li>
            <li>Record every evidence transfer</li>
            <li>Secure and controlled storage</li>
            <li>Verifiable integrity through hashes</li>
        </ul>

        <h2>Computer Handling</h2>
        <h3>If it is ON</h3>
        <ul>
            <li>Photograph the screen and document running programs</li>
            <li>If showing screensaver: move mouse <strong>without</strong> pressing buttons</li>
            <li><span class="key-term">Disconnect immediately</span> if destructive processes are running</li>
            <li><span class="key-term">Do NOT disconnect</span> if evidential data is visible</li>
            <li>Collect volatile data BEFORE shutting down</li>
        </ul>

        <h3>If it is OFF</h3>
        <ul>
            <li><span class="key-term">Do NOT turn it on</span> - it could alter evidence</li>
            <li>Disassemble and package carefully</li>
            <li>Disconnect all cables and label them</li>
            <li>Check and secure removable media</li>
        </ul>

        <h3>Smartphones/Mobile Devices</h3>
        <ul>
            <li>If <strong>OFF</strong>: Do NOT turn on, collect cables, look for backups</li>
            <li>If <strong>ON</strong>: keep it charged, photograph the screen</li>
            <li>Use a Faraday bag to block remote signals</li>
        </ul>

        <h2>Shutdown Procedures by OS</h2>
        <ul>
            <li><strong>Windows:</strong> Start > Power > Shut down</li>
            <li><strong>Linux (root):</strong> sync;sync;halt</li>
            <li><strong>macOS:</strong> Apple menu > Shut Down</li>
        </ul>
    `;

    // Module 4
    moduleContent[4].title_en = "Handling and Responding to Malware Incidents";
    moduleContent[4].content_en = `
        <h2>Types of Malware</h2>
        <ul>
            <li><span class="key-term">Virus</span>: Attaches to legitimate files, requires user action</li>
            <li><span class="key-term">Worm</span>: Propagates automatically through the network</li>
            <li><span class="key-term">Trojan</span>: Disguises itself as legitimate software</li>
            <li><span class="key-term">Ransomware</span>: Encrypts files and demands a ransom</li>
            <li><span class="key-term">Spyware</span>: Collects information without consent</li>
            <li><span class="key-term">Rootkit</span>: Conceals its presence in the system</li>
            <li><span class="key-term">Botnet</span>: Network of compromised systems</li>
            <li><span class="key-term">RAT</span>: Remote Access Trojan</li>
            <li><span class="key-term">Fileless Malware</span>: Operates in memory without files on disk</li>
        </ul>

        <h2>Infection Indicators (IoCs)</h2>
        <ul>
            <li>Slow system performance</li>
            <li>Unusual network connections</li>
            <li>Unknown processes</li>
            <li>Modified or suspicious new files</li>
            <li>Changes to the Windows registry</li>
            <li>Antivirus/EDR alerts</li>
            <li>Traffic to known malicious IPs/domains</li>
        </ul>

        <h2>Malware Response Process</h2>
        <h3>1. Identification</h3>
        <ul>
            <li>Analyze security alerts</li>
            <li>Identify affected systems</li>
            <li>Determine the type of malware</li>
            <li>Search for <span class="key-term">IoCs</span> on other systems</li>
        </ul>

        <h3>2. Containment</h3>
        <ul>
            <li>Isolate infected systems from the network</li>
            <li>Block C2 IPs/domains</li>
            <li>Disable compromised accounts</li>
            <li>Preserve evidence before cleaning</li>
        </ul>

        <h3>3. Eradication</h3>
        <ul>
            <li>Remove malware from all systems</li>
            <li>Clean persistence mechanisms</li>
            <li>Patch exploited vulnerabilities</li>
            <li>Change compromised credentials</li>
        </ul>

        <h3>4. Recovery</h3>
        <ul>
            <li>Restore from verified backups</li>
            <li>Reinstall systems if necessary</li>
            <li>Validate integrity</li>
            <li>Intensive monitoring</li>
        </ul>

        <h2>Malware Analysis</h2>
        <h3>Static Analysis</h3>
        <ul>
            <li>Examine code without executing it</li>
            <li>Strings, imports, exports</li>
            <li>Tools: <span class="key-term">PEiD, PEview, strings, IDA Pro</span></li>
        </ul>

        <h3>Dynamic Analysis</h3>
        <ul>
            <li>Execute in a controlled environment (sandbox)</li>
            <li>Observe behavior</li>
            <li>Tools: <span class="key-term">Cuckoo Sandbox, Any.run, Process Monitor</span></li>
        </ul>

        <h2>Anti-Malware Tools</h2>
        <ul>
            <li><span class="key-term">VirusTotal</span>: Multi-engine analysis</li>
            <li><span class="key-term">YARA</span>: Malware detection rules</li>
            <li><span class="key-term">Malwarebytes</span>: Malware removal</li>
            <li><span class="key-term">EDR Solutions</span>: CrowdStrike, Carbon Black, SentinelOne</li>
        </ul>
    `;

    // Module 5
    moduleContent[5].title_en = "Handling and Responding to Email Security Incidents";
    moduleContent[5].content_en = `
        <h2>Types of Email Threats</h2>
        <ul>
            <li><span class="key-term">Phishing</span>: Impersonation to steal credentials</li>
            <li><span class="key-term">Spear Phishing</span>: Phishing targeted at specific individuals</li>
            <li><span class="key-term">Whaling</span>: Phishing targeting executives</li>
            <li><span class="key-term">BEC</span> (Business Email Compromise): Corporate fraud</li>
            <li><span class="key-term">Spam</span>: Mass unsolicited email</li>
            <li><span class="key-term">Malspam</span>: Spam with malware attachments</li>
            <li><span class="key-term">Email Spoofing</span>: Sender address forgery</li>
        </ul>

        <h2>Phishing Indicators</h2>
        <ul>
            <li>Suspicious sender or look-alike domain</li>
            <li>Urgency or pressure to act</li>
            <li>Links to fake domains</li>
            <li>Grammar or spelling errors</li>
            <li>Request for sensitive information</li>
            <li>Unexpected attachments</li>
            <li>Inconsistencies in email headers</li>
        </ul>

        <h2>Email Header Analysis</h2>
        <ul>
            <li><span class="key-term">From</span>: Can be easily spoofed</li>
            <li><span class="key-term">Return-Path</span>: Actual bounce address</li>
            <li><span class="key-term">Received</span>: Message route (read from bottom to top)</li>
            <li><span class="key-term">X-Originating-IP</span>: Source IP address</li>
            <li><span class="key-term">Message-ID</span>: Unique identifier</li>
        </ul>

        <h2>Protection Technologies</h2>
        <h3>Email Authentication</h3>
        <ul>
            <li><span class="key-term">SPF</span> (Sender Policy Framework): Verifies authorized sending servers</li>
            <li><span class="key-term">DKIM</span> (DomainKeys Identified Mail): Digital message signature</li>
            <li><span class="key-term">DMARC</span> (Domain-based Message Authentication): Authentication policy</li>
        </ul>

        <h3>Security Solutions</h3>
        <ul>
            <li><span class="key-term">Email Gateway</span>: Email filtering</li>
            <li><span class="key-term">Sandboxing</span>: Attachment analysis</li>
            <li><span class="key-term">URL Rewriting</span>: Link verification</li>
            <li><span class="key-term">Anti-spam filters</span></li>
        </ul>

        <h2>Response Process</h2>
        <h3>1. Detection</h3>
        <ul>
            <li>User reports</li>
            <li>Email gateway alerts</li>
            <li>IoC detection</li>
        </ul>

        <h3>2. Analysis</h3>
        <ul>
            <li>Examine full headers</li>
            <li>Analyze URLs (without clicking)</li>
            <li>Analyze attachments in a sandbox</li>
            <li>Identify potential victims</li>
        </ul>

        <h3>3. Containment</h3>
        <ul>
            <li>Block sender/domain</li>
            <li>Delete emails from mailboxes</li>
            <li>Block malicious URLs</li>
            <li>Reset compromised credentials</li>
        </ul>

        <h3>4. Recovery</h3>
        <ul>
            <li>Notify affected users</li>
            <li>Update email filters</li>
            <li>Reinforce awareness training</li>
        </ul>

        <h2>Analysis Tools</h2>
        <ul>
            <li><span class="key-term">MXToolbox</span>: Header analysis</li>
            <li><span class="key-term">PhishTool</span>: Phishing analysis</li>
            <li><span class="key-term">URLscan.io</span>: URL analysis</li>
            <li><span class="key-term">VirusTotal</span>: Attachment analysis</li>
        </ul>
    `;

    // Module 6
    moduleContent[6].title_en = "Handling and Responding to Network Security Incidents";
    moduleContent[6].content_en = `
        <h2>Types of Network Incidents</h2>
        <ul>
            <li><span class="key-term">DoS/DDoS</span>: Denial of Service</li>
            <li><span class="key-term">Man-in-the-Middle (MitM)</span>: Traffic interception</li>
            <li><span class="key-term">ARP Spoofing/Poisoning</span>: ARP table manipulation</li>
            <li><span class="key-term">DNS Spoofing</span>: Fake DNS responses</li>
            <li><span class="key-term">Session Hijacking</span>: Session theft</li>
            <li><span class="key-term">Unauthorized Access</span>: Unauthorized intrusion</li>
            <li><span class="key-term">Data Exfiltration</span>: Data theft</li>
            <li><span class="key-term">Lateral Movement</span>: Movement within the network</li>
        </ul>

        <h2>DoS and DDoS</h2>
        <h3>Attack Types</h3>
        <ul>
            <li><span class="key-term">Volumetric</span>: UDP flood, ICMP flood, amplification</li>
            <li><span class="key-term">Protocol</span>: SYN flood, Ping of Death, Smurf</li>
            <li><span class="key-term">Application Layer</span>: HTTP flood, Slowloris</li>
        </ul>

        <h3>DDoS Mitigation</h3>
        <ul>
            <li>Rate limiting</li>
            <li>Blackholing/Sinkholing</li>
            <li>Scrubbing centers</li>
            <li>CDN with DDoS protection</li>
            <li>Geo-blocking</li>
        </ul>

        <h2>Network Incident Detection</h2>
        <h3>Monitoring Tools</h3>
        <ul>
            <li><span class="key-term">IDS/IPS</span>: Snort, Suricata</li>
            <li><span class="key-term">SIEM</span>: Splunk, QRadar, ELK</li>
            <li><span class="key-term">Network TAP</span>: Traffic capture</li>
            <li><span class="key-term">NetFlow/sFlow</span>: Flow analysis</li>
            <li><span class="key-term">Wireshark</span>: Packet analysis</li>
        </ul>

        <h3>Indicators of Compromise</h3>
        <ul>
            <li>Unusual traffic at abnormal hours</li>
            <li>Connections to malicious IPs/domains</li>
            <li>Abnormal traffic spikes</li>
            <li>Port scanning</li>
            <li>Beaconing (periodic C2 communication)</li>
            <li>Large data transfers</li>
        </ul>

        <h2>Traffic Analysis</h2>
        <ul>
            <li><span class="key-term">Packet Capture (PCAP)</span>: Full packet capture</li>
            <li><span class="key-term">Deep Packet Inspection</span>: Content analysis</li>
            <li><span class="key-term">Protocol Analysis</span>: Per-protocol analysis</li>
            <li><span class="key-term">Behavioral Analysis</span>: Anomaly detection</li>
        </ul>

        <h2>Response Process</h2>
        <h3>Containment</h3>
        <ul>
            <li>Block malicious IPs at the firewall</li>
            <li>Isolate affected network segments</li>
            <li>Revoke compromised access</li>
            <li>Implement temporary ACLs</li>
        </ul>

        <h3>Eradication</h3>
        <ul>
            <li>Remove attacker tools</li>
            <li>Close backdoors</li>
            <li>Patch vulnerabilities</li>
        </ul>

        <h3>Recovery</h3>
        <ul>
            <li>Restore secure configurations</li>
            <li>Verify system integrity</li>
            <li>Intensive post-incident monitoring</li>
        </ul>

        <h2>Key Tools</h2>
        <ul>
            <li><span class="key-term">Wireshark</span>: Packet analysis</li>
            <li><span class="key-term">tcpdump</span>: Command-line capture</li>
            <li><span class="key-term">Zeek (Bro)</span>: Network monitoring</li>
            <li><span class="key-term">NetworkMiner</span>: Network forensic analysis</li>
            <li><span class="key-term">nmap</span>: Network scanning</li>
        </ul>
    `;

    // Module 7
    moduleContent[7].title_en = "Handling and Responding to Web Application Security Incidents";
    moduleContent[7].content_en = `
        <h2>OWASP Top 10</h2>
        <ul>
            <li><span class="key-term">A01: Broken Access Control</span>: Inadequate access control</li>
            <li><span class="key-term">A02: Cryptographic Failures</span>: Cryptographic weaknesses</li>
            <li><span class="key-term">A03: Injection</span>: SQL, NoSQL, OS, LDAP injection</li>
            <li><span class="key-term">A04: Insecure Design</span>: Insecure architecture and design</li>
            <li><span class="key-term">A05: Security Misconfiguration</span>: Incorrect configuration</li>
            <li><span class="key-term">A06: Vulnerable Components</span>: Vulnerable and outdated components</li>
            <li><span class="key-term">A07: Authentication Failures</span>: Identification and authentication failures</li>
            <li><span class="key-term">A08: Software and Data Integrity</span>: Integrity failures</li>
            <li><span class="key-term">A09: Security Logging Failures</span>: Logging and monitoring failures</li>
            <li><span class="key-term">A10: SSRF</span>: Server-Side Request Forgery</li>
        </ul>

        <h2>Common Attacks</h2>
        <h3>SQL Injection</h3>
        <ul>
            <li>Injection of malicious SQL code</li>
            <li>Allows unauthorized access to the database</li>
            <li>Prevention: <span class="key-term">Prepared statements, input validation</span></li>
        </ul>

        <h3>Cross-Site Scripting (XSS)</h3>
        <ul>
            <li><span class="key-term">Stored XSS</span>: Script stored on the server</li>
            <li><span class="key-term">Reflected XSS</span>: Script in URL reflected back</li>
            <li><span class="key-term">DOM-based XSS</span>: DOM manipulation</li>
            <li>Prevention: <span class="key-term">Output encoding, CSP, input validation</span></li>
        </ul>

        <h3>Cross-Site Request Forgery (CSRF)</h3>
        <ul>
            <li>Forces unauthorized actions on behalf of the user</li>
            <li>Prevention: <span class="key-term">CSRF tokens, SameSite cookies</span></li>
        </ul>

        <h2>Web Attack Indicators</h2>
        <ul>
            <li>Unusual parameters in URLs</li>
            <li>SQL injection patterns in logs</li>
            <li>Multiple 4xx/5xx errors</li>
            <li>Access to sensitive files</li>
            <li>Directory traversal attempts (../)</li>
            <li>Suspicious User-Agent strings</li>
        </ul>

        <h2>Web Log Analysis</h2>
        <ul>
            <li><span class="key-term">Access logs</span>: HTTP requests</li>
            <li><span class="key-term">Error logs</span>: Server errors</li>
            <li><span class="key-term">Application logs</span>: Application-level logs</li>
            <li>Search for known attack patterns</li>
            <li>Correlate with other events</li>
        </ul>

        <h2>Response Process</h2>
        <h3>Detection</h3>
        <ul>
            <li>WAF alerts</li>
            <li>Log analysis</li>
            <li>User reports</li>
            <li>Integrity monitoring</li>
        </ul>

        <h3>Containment</h3>
        <ul>
            <li>Block attacker IPs</li>
            <li>Implement WAF rules</li>
            <li>Disable vulnerable functionality</li>
            <li>Revoke compromised sessions</li>
        </ul>

        <h3>Eradication</h3>
        <ul>
            <li>Patch vulnerabilities</li>
            <li>Remove injected malicious code</li>
            <li>Clean compromised data</li>
        </ul>

        <h2>Tools</h2>
        <ul>
            <li><span class="key-term">WAF</span>: ModSecurity, AWS WAF, Cloudflare</li>
            <li><span class="key-term">DAST</span>: OWASP ZAP, Burp Suite</li>
            <li><span class="key-term">SAST</span>: SonarQube, Checkmarx</li>
            <li><span class="key-term">Log Analysis</span>: GoAccess, AWStats</li>
        </ul>
    `;

    // Module 8
    moduleContent[8].title_en = "Handling and Responding to Cloud Security Incidents";
    moduleContent[8].content_en = `
        <h2>Cloud Service Models</h2>
        <ul>
            <li><span class="key-term">IaaS</span> (Infrastructure as a Service): AWS EC2, Azure VMs</li>
            <li><span class="key-term">PaaS</span> (Platform as a Service): Heroku, Azure App Service</li>
            <li><span class="key-term">SaaS</span> (Software as a Service): Office 365, Salesforce</li>
        </ul>

        <h2>Shared Responsibility Model</h2>
        <ul>
            <li><span class="key-term">Cloud Provider</span>: Security OF the cloud (infrastructure)</li>
            <li><span class="key-term">Customer</span>: Security IN the cloud (data, access, configuration)</li>
            <li>Responsibility varies by model (IaaS, PaaS, SaaS)</li>
        </ul>

        <h2>Cloud-Specific Threats</h2>
        <ul>
            <li><span class="key-term">Misconfiguration</span>: Public S3 buckets, open ports</li>
            <li><span class="key-term">Insecure APIs</span>: Poorly protected APIs</li>
            <li><span class="key-term">Account Hijacking</span>: Cloud credential theft</li>
            <li><span class="key-term">Insider Threats</span>: Internal threats</li>
            <li><span class="key-term">Data Breach</span>: Data leakage</li>
            <li><span class="key-term">Shadow IT</span>: Unauthorized cloud services</li>
            <li><span class="key-term">Cryptojacking</span>: Unauthorized cryptocurrency mining</li>
        </ul>

        <h2>Cloud Detection</h2>
        <h3>Logs and Monitoring</h3>
        <ul>
            <li><span class="key-term">AWS CloudTrail</span>: AWS API logs</li>
            <li><span class="key-term">Azure Activity Log</span>: Azure events</li>
            <li><span class="key-term">GCP Cloud Audit Logs</span>: GCP logs</li>
            <li><span class="key-term">CloudWatch/Azure Monitor</span>: Metrics and alerts</li>
        </ul>

        <h3>Cloud Security Tools</h3>
        <ul>
            <li><span class="key-term">CSPM</span>: Cloud Security Posture Management</li>
            <li><span class="key-term">CASB</span>: Cloud Access Security Broker</li>
            <li><span class="key-term">CWPP</span>: Cloud Workload Protection Platform</li>
            <li><span class="key-term">AWS GuardDuty</span>: AWS threat detection</li>
            <li><span class="key-term">Azure Sentinel</span>: Azure cloud SIEM</li>
        </ul>

        <h2>Cloud Response Process</h2>
        <h3>Specific Challenges</h3>
        <ul>
            <li>Ephemeral resources (auto-scaling)</li>
            <li>Limited access to infrastructure</li>
            <li>Multiple regions/zones</li>
            <li>Distributed data</li>
        </ul>

        <h3>Containment</h3>
        <ul>
            <li>Revoke compromised credentials (API keys, access keys)</li>
            <li>Modify security groups/NSGs</li>
            <li>Isolate affected resources</li>
            <li>Disable compromised services</li>
        </ul>

        <h3>Forensic Evidence</h3>
        <ul>
            <li>VM snapshots before termination</li>
            <li>Export CloudTrail/Activity Log entries</li>
            <li>Preserve configurations</li>
            <li>Document resource state</li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
            <li><span class="key-term">MFA</span> on all accounts</li>
            <li><span class="key-term">Least Privilege</span>: Minimum necessary privilege</li>
            <li><span class="key-term">Encryption</span>: Data at rest and in transit</li>
            <li><span class="key-term">Logging</span>: Enable all logs</li>
            <li><span class="key-term">Regular Audits</span>: Configuration audits</li>
        </ul>

        <h2>Tools by Provider</h2>
        <h3>AWS</h3>
        <ul>
            <li><span class="key-term">GuardDuty</span>: Threat detection</li>
            <li><span class="key-term">CloudTrail</span>: API call auditing</li>
            <li><span class="key-term">CloudWatch</span>: Monitoring and metrics</li>
            <li><span class="key-term">Security Hub</span>: Centralized security view</li>
            <li><span class="key-term">IAM Access Analyzer</span>: Detects excessive access</li>
        </ul>
        <h3>Azure</h3>
        <ul>
            <li><span class="key-term">Azure Sentinel</span>: Cloud-native SIEM</li>
            <li><span class="key-term">Activity Log</span>: Operations logs</li>
            <li><span class="key-term">Defender for Cloud</span>: CSPM and protection</li>
        </ul>
        <h3>GCP</h3>
        <ul>
            <li><span class="key-term">Chronicle</span>: Google SIEM</li>
            <li><span class="key-term">Cloud Audit Logs</span>: Auditing</li>
            <li><span class="key-term">Security Command Center</span>: Security view</li>
        </ul>

        <h2>Case Study: Kaseya VSA (2021)</h2>
        <ul>
            <li>Ransomware attack via VSA remote management product</li>
            <li>Impacted MSPs and their downstream clients</li>
            <li>Attackers demanded $70M in Bitcoin</li>
            <li><strong>Response:</strong> Shut down SaaS servers, notify FBI/CISA, identify IOCs</li>
            <li><strong>Lesson:</strong> Supply chain attacks affect multiple organizations</li>
        </ul>
    `;

    // Module 9
    moduleContent[9].title_en = "Handling and Responding to Insider Threats";
    moduleContent[9].content_en = `
        <h2>Types of Insider Threats</h2>
        <ul>
            <li><span class="key-term">Malicious Insider</span>: Employee with harmful intent</li>
            <li><span class="key-term">Negligent Insider</span>: Careless or uninformed employee</li>
            <li><span class="key-term">Compromised Insider</span>: Stolen credentials</li>
            <li><span class="key-term">Third-party Insider</span>: Contractors, vendors</li>
        </ul>

        <h2>Motivations</h2>
        <ul>
            <li><span class="key-term">Financial gain</span>: Economic benefit</li>
            <li><span class="key-term">Revenge</span>: Retaliation against the organization</li>
            <li><span class="key-term">Espionage</span>: Corporate or state espionage</li>
            <li><span class="key-term">Ideology</span>: Ideological motivation</li>
            <li><span class="key-term">Coercion</span>: External pressure</li>
        </ul>

        <h2>Behavioral Indicators (Red Flags)</h2>
        <ul>
            <li>Accessing data outside the scope of their role</li>
            <li>Mass file downloads</li>
            <li>Access at unusual hours</li>
            <li>Use of unauthorized USB devices</li>
            <li>Attempts to bypass controls</li>
            <li>Reported anomalous behavior</li>
            <li>Disgruntled employee or employee with financial problems</li>
            <li>Upcoming departure from the company</li>
        </ul>

        <h2>Detection</h2>
        <h3>Technical Controls</h3>
        <ul>
            <li><span class="key-term">DLP</span> (Data Loss Prevention): Data leakage prevention</li>
            <li><span class="key-term">UEBA</span> (User and Entity Behavior Analytics): Behavior analysis</li>
            <li><span class="key-term">PAM</span> (Privileged Access Management): Privileged access management</li>
            <li><span class="key-term">Logging & Monitoring</span>: Activity monitoring</li>
            <li><span class="key-term">Access Controls</span>: Strict access controls</li>
        </ul>

        <h3>Technical Indicators</h3>
        <ul>
            <li>Unusual volume of data transferred</li>
            <li>Access to sensitive systems without justification</li>
            <li>Use of hacking tools</li>
            <li>Privilege escalation attempts</li>
            <li>Connections to external storage services</li>
        </ul>

        <h2>Response Process</h2>
        <h3>Special Considerations</h3>
        <ul>
            <li>Coordination with HR and Legal</li>
            <li>Preserve evidence for potential legal actions</li>
            <li>Discretion during the investigation</li>
            <li>Protect the employee's rights</li>
        </ul>

        <h3>Containment</h3>
        <ul>
            <li>Revoke access if there is immediate risk</li>
            <li>Increase account monitoring</li>
            <li>Preserve evidence</li>
            <li>Isolate systems if necessary</li>
        </ul>

        <h3>Investigation</h3>
        <ul>
            <li>Analyze access logs</li>
            <li>Review emails and communications (with legal approval)</li>
            <li>Examine endpoint activity</li>
            <li>Interview witnesses if applicable</li>
        </ul>

        <h2>Prevention</h2>
        <ul>
            <li><span class="key-term">Background checks</span>: Background verification</li>
            <li><span class="key-term">Least privilege</span>: Minimum necessary privilege</li>
            <li><span class="key-term">Separation of duties</span>: Segregation of functions</li>
            <li><span class="key-term">Security awareness</span>: Security awareness training</li>
            <li><span class="key-term">Exit procedures</span>: Offboarding procedures</li>
            <li><span class="key-term">Regular access reviews</span>: Periodic access reviews</li>
        </ul>
    `;

    // Module 10
    moduleContent[10].title_en = "Handling and Responding to Endpoint Security Incidents";
    moduleContent[10].content_en = `
        <h2>Types of Endpoints</h2>
        <ul>
            <li>Workstations (Windows, macOS, Linux)</li>
            <li>Laptops</li>
            <li>Servers</li>
            <li>Mobile devices</li>
            <li>IoT devices</li>
            <li>Virtual machines</li>
        </ul>

        <h2>Endpoint Threats</h2>
        <ul>
            <li><span class="key-term">Malware</span>: Viruses, ransomware, trojans</li>
            <li><span class="key-term">Fileless attacks</span>: Fileless attacks (PowerShell, WMI)</li>
            <li><span class="key-term">Credential theft</span>: Credential stealing</li>
            <li><span class="key-term">Privilege escalation</span>: Privilege elevation</li>
            <li><span class="key-term">Lateral movement</span>: Lateral movement within the network</li>
            <li><span class="key-term">Data exfiltration</span>: Data exfiltration</li>
            <li><span class="key-term">Physical threats</span>: Device theft or loss</li>
        </ul>

        <h2>Endpoint Security Solutions</h2>
        <ul>
            <li><span class="key-term">Antivirus/Anti-malware</span>: Basic protection</li>
            <li><span class="key-term">EDR</span> (Endpoint Detection and Response): Advanced detection</li>
            <li><span class="key-term">XDR</span> (Extended Detection and Response): Extended detection</li>
            <li><span class="key-term">HIPS/HIDS</span>: Host intrusion prevention/detection system</li>
            <li><span class="key-term">DLP</span>: Data loss prevention</li>
            <li><span class="key-term">FDE</span>: Full Disk Encryption</li>
        </ul>

        <h2>Endpoint Detection</h2>
        <h3>Telemetry Sources</h3>
        <ul>
            <li><span class="key-term">Windows Event Logs</span>: Security, System, Application</li>
            <li><span class="key-term">Sysmon</span>: Advanced Windows logging</li>
            <li><span class="key-term">EDR telemetry</span>: EDR agent data</li>
            <li><span class="key-term">Process execution</span>: Execution logs</li>
            <li><span class="key-term">Network connections</span>: Network connections</li>
        </ul>

        <h3>Indicators of Compromise</h3>
        <ul>
            <li>Suspicious processes (encoded PowerShell, cmd.exe spawn)</li>
            <li>Registry modifications</li>
            <li>New services/scheduled tasks</li>
            <li>Connections to known C2 servers</li>
            <li>LSASS access (credential dumping)</li>
            <li>Lateral movement indicators</li>
        </ul>

        <h2>Common Attack Techniques</h2>
        <ul>
            <li><span class="key-term">Living off the Land (LOLBins)</span>: Using legitimate tools</li>
            <li><span class="key-term">Credential Dumping</span>: Mimikatz, comsvcs.dll</li>
            <li><span class="key-term">Pass-the-Hash</span>: Reusing NTLM hashes</li>
            <li><span class="key-term">Pass-the-Ticket</span>: Reusing Kerberos tickets</li>
            <li><span class="key-term">DLL Injection/Hijacking</span>: Code injection</li>
        </ul>

        <h2>Response Process</h2>
        <h3>Evidence Collection</h3>
        <ul>
            <li>RAM memory capture</li>
            <li>Forensic disk image</li>
            <li>Export Event Logs</li>
            <li>Collect artifacts (prefetch, MFT, registry hives)</li>
        </ul>

        <h3>Containment</h3>
        <ul>
            <li>Isolate endpoint from the network (network containment)</li>
            <li>Disable user account</li>
            <li>Block malicious hashes</li>
            <li>EDR quarantine</li>
        </ul>

        <h3>Eradication</h3>
        <ul>
            <li>Remove malware and persistence mechanisms</li>
            <li>Reset credentials</li>
            <li>Patch vulnerabilities</li>
        </ul>

        <h2>Tools</h2>
        <ul>
            <li><span class="key-term">Velociraptor</span>: Forensic collection</li>
            <li><span class="key-term">KAPE</span>: Forensic triage</li>
            <li><span class="key-term">Autoruns</span>: Persistence analysis</li>
            <li><span class="key-term">Process Monitor</span>: Process monitoring</li>
            <li><span class="key-term">OSQuery</span>: Endpoint queries</li>
        </ul>
    `;

})();
