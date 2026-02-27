// =============================================
// Incident Handler v3 - ENGLISH TRANSLATIONS
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
        <h2>Information Security Elements</h2>
        <ul>
            <li><span class="key-term">Confidentiality</span>: Only authorized persons can access the information. Controls: encryption, MFA, tokens, biometrics</li>
            <li><span class="key-term">Integrity</span>: Data is not altered without authorization. Controls: checksums, access control</li>
            <li><span class="key-term">Availability</span>: Systems are accessible when needed. Controls: redundancy, antivirus, DDoS protection</li>
            <li><span class="key-term">Authenticity</span>: Assurance that a communication is genuine. Controls: biometrics, smart cards, digital certificates</li>
            <li><span class="key-term">Non-Repudiation</span>: The sender cannot deny having sent a message. Controls: digital signatures</li>
        </ul>
        <p><strong>CIA Triad</strong> = Confidentiality + Integrity + Availability</p>

        <h2>Threats and Threat Actors</h2>
        <h3>Attack Formula</h3>
        <p><span class="key-term">Attack = Motive (Goal) + Method + Vulnerability</span></p>

        <h3>Threat Sources</h3>
        <ul>
            <li><strong>Natural:</strong> Fires, floods, power failures, earthquakes</li>
            <li><strong>Unintentional:</strong> Human errors, inexperienced administrators, negligent employees</li>
            <li><strong>Intentional - Internal:</strong> Disgruntled employees, revenge, lack of awareness</li>
            <li><strong>Intentional - Structured External:</strong> Technical attackers with tools (ICMP floods, spoofing)</li>
            <li><strong>Intentional - Unstructured External:</strong> Script kiddies, attacks out of curiosity</li>
        </ul>

        <h3>Types of Threat Actors</h3>
        <ul>
            <li><span class="key-term">Black Hats</span>: Malicious hackers (crackers)</li>
            <li><span class="key-term">White Hats</span>: Authorized pentesters, defensive</li>
            <li><span class="key-term">Gray Hats</span>: Work both offensively and defensively</li>
            <li><span class="key-term">Suicide Hackers</span>: Attack critical infrastructure regardless of consequences</li>
            <li><span class="key-term">Script Kiddies</span>: No technical skill, use others' tools</li>
            <li><span class="key-term">Cyber Terrorists</span>: Motivated by religious/political beliefs</li>
            <li><span class="key-term">State-sponsored Attackers</span>: Employed by governments for espionage</li>
            <li><span class="key-term">Hacktivists</span>: Political protest through hacking</li>
            <li><span class="key-term">Industrial Spies</span>: Corporate espionage, APTs</li>
            <li><span class="key-term">Insiders</span>: Employees with privileged access</li>
            <li><span class="key-term">Criminal Syndicates</span>: Organized crime, money laundering</li>
        </ul>

        <h3>Threat Actor Attributes</h3>
        <ul>
            <li><strong>Internal vs External</strong></li>
            <li><strong>Level of sophistication</strong></li>
            <li><strong>Resources/funding</strong></li>
            <li><strong>Intent/motivation</strong></li>
        </ul>

        <h2>Attack Vectors</h2>
        <ul>
            <li><span class="key-term">Direct access</span>: Physical access to the system</li>
            <li><span class="key-term">Removable media</span>: USB, external devices with malware</li>
            <li><span class="key-term">Wireless</span>: Insecure hotspots, Wi-Fi credential cracking</li>
            <li><span class="key-term">Email</span>: Phishing with malicious attachments</li>
            <li><span class="key-term">Cloud</span>: Malware injection in SaaS/PaaS/VM</li>
            <li><span class="key-term">Ransomware/Malware</span>: Exploitation of unpatched vulnerabilities</li>
            <li><span class="key-term">Supply chain</span>: Compromising third-party resources</li>
            <li><span class="key-term">Business partners</span>: Attacks through commercial partners</li>
        </ul>

        <h2>Attack Classification (IATF)</h2>
        <ul>
            <li><span class="key-term">Passive</span>: Interception without modifying data (footprinting, sniffing, eavesdropping, traffic analysis)</li>
            <li><span class="key-term">Active</span>: Modify data/services (DoS, malware, spoofing, replay, SQLi, XSS, privilege escalation)</li>
            <li><span class="key-term">Close-in</span>: Physical proximity (shoulder surfing, dumpster diving)</li>
            <li><span class="key-term">Insider</span>: Trusted persons with access (eavesdropping, pod slurping, keyloggers)</li>
            <li><span class="key-term">Distribution</span>: Manipulation of HW/SW before installation (factory backdoors)</li>
        </ul>

        <h2>Vulnerability Classification</h2>
        <ul>
            <li><strong>Misconfigurations:</strong> Insecure protocols, open ports, configuration errors, weak encryption, open permissions, insecure root accounts</li>
            <li><strong>Default Installations:</strong> Factory configurations not changed</li>
            <li><strong>Application Flaws:</strong> Buffer overflows, memory leaks, resource exhaustion, integer overflows, null pointer dereference, DLL injection, race conditions (TOC/TOU), improper input/error handling</li>
            <li><strong>Poor Patch Management:</strong> Unpatched servers, firmware, OS, and applications</li>
            <li><strong>Design Flaws:</strong> Incorrect encryption, poor data validation</li>
            <li><strong>OS Flaws:</strong> Operating system vulnerabilities</li>
            <li><strong>Default Passwords:</strong> Factory passwords not changed</li>
            <li><strong>Zero-day:</strong> Unknown vulnerabilities without a patch</li>
            <li><strong>Legacy Platform:</strong> Obsolete systems without support</li>
            <li><strong>System Sprawl:</strong> Undocumented assets</li>
            <li><strong>Improper Certificate/Key Management:</strong> Poorly stored keys</li>
            <li><strong>Third-party Risks:</strong> Vendor management, system integration, supply chain, outsourced code, data storage, cloud vs on-premises</li>
        </ul>

        <h2>Attack and Defense Frameworks</h2>
        <h3>EC-Council Hacking Methodology</h3>
        <ul>
            <li>Footprinting → Scanning → Enumeration → Vulnerability Analysis → System Hacking (Gaining Access → Escalating Privileges → Maintaining Access → Clearing Logs)</li>
        </ul>

        <h3>Cyber Kill Chain (Lockheed Martin) - 7 Phases</h3>
        <ul>
            <li><span class="key-term">1. Reconnaissance</span>: Gather information about the target</li>
            <li><span class="key-term">2. Weaponization</span>: Create malicious payload with exploit + backdoor</li>
            <li><span class="key-term">3. Delivery</span>: Deliver the weapon via email, USB, web</li>
            <li><span class="key-term">4. Exploitation</span>: Exploit a vulnerability on the target system</li>
            <li><span class="key-term">5. Installation</span>: Install malware/backdoor for persistence</li>
            <li><span class="key-term">6. Command and Control (C2)</span>: Bidirectional channel with attacker's server</li>
            <li><span class="key-term">7. Actions on Objectives</span>: Accomplish the objective (data theft, destruction)</li>
        </ul>

        <h3>MITRE ATT&CK Framework - 14 Enterprise Tactics</h3>
        <ul>
            <li>Reconnaissance, Resource Development, Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, Credential Access, Discovery, Lateral Movement, Collection, Command and Control, Exfiltration, Impact</li>
        </ul>

        <h3>MITRE D3FEND - Defensive Tactics</h3>
        <ul>
            <li><span class="key-term">Model</span> (26 techniques): Asset Inventory, Network Mapping, Operational Activity Mapping, System Mapping</li>
            <li><span class="key-term">Harden</span> (32 techniques): Application/Credential/Message/Platform Hardening</li>
            <li><span class="key-term">Detect</span> (74 techniques): File/Identifier/Message/Network Traffic Analysis, Platform Monitoring, Process Analysis, User Behavior Analysis</li>
            <li><span class="key-term">Isolate</span> (22 techniques): Execution Isolation, Network Isolation</li>
            <li><span class="key-term">Deceive</span> (11 techniques): Decoy Environment, Decoy Object</li>
            <li><span class="key-term">Evict</span> (5 techniques): Credential Eviction, Process Eviction</li>
        </ul>

        <h3>RE&CT Framework</h3>
        <ul>
            <li>Phases: Preparation → Identification → Containment → Eradication → Recovery → Lessons Learned</li>
            <li>Defines actionable techniques for each phase of the response cycle</li>
        </ul>

        <h3>TTPs (Tactics, Techniques, and Procedures)</h3>
        <ul>
            <li><span class="key-term">Tactics</span>: Guidelines on how the attacker operates in each phase</li>
            <li><span class="key-term">Techniques</span>: Technical methods for intermediate results</li>
            <li><span class="key-term">Procedures</span>: Sequence of actions in the attack cycle</li>
        </ul>

        <h2>Indicators of Compromise (IoCs)</h2>
        <ul>
            <li><span class="key-term">Email Indicators</span>: Sender address, subject, attachments, links</li>
            <li><span class="key-term">Network Indicators</span>: URLs, domains, IP addresses</li>
            <li><span class="key-term">Host-based Indicators</span>: Filenames, file hashes, registry keys, DLLs, mutexes</li>
            <li><span class="key-term">Behavioral Indicators</span>: Code injection in memory, PowerShell script execution, remote commands</li>
        </ul>

        <h2>Information Security Concepts</h2>
        <h3>Vulnerability Assessment</h3>
        <ul>
            <li>Examination of a system's ability to resist exploitation</li>
            <li>Scans against the <span class="key-term">CVE</span> index and vendor bulletins</li>
            <li>Tools: <span class="key-term">Nessus Professional, Qualys, GFI LanGuard, OpenVAS</span></li>
            <li>Limitations: Only a point in time, requires human judgment, does not cover social engineering</li>
        </ul>

        <h3>Risk Management - 4 Phases</h3>
        <ul>
            <li><span class="key-term">Risk Identification</span>: Identify sources, causes, and consequences of risks</li>
            <li><span class="key-term">Risk Assessment</span>: Evaluate probability and impact (quantitative/qualitative)</li>
            <li><span class="key-term">Risk Treatment</span>: Select and implement appropriate controls</li>
            <li><span class="key-term">Risk Tracking and Review</span>: Continuously monitor and review controls</li>
        </ul>

        <h3>NIST Risk Management Framework - 6 Stages</h3>
        <ul>
            <li>Categorize Information System → Select Security Controls → Implement → Assess → Authorize → Monitor Security State</li>
        </ul>

        <h3>Cyber Threat Intelligence (CTI) - 4 Types</h3>
        <ul>
            <li><span class="key-term">Strategic</span>: High level, for executives/CISO. Trends, financial impact, geopolitics</li>
            <li><span class="key-term">Tactical</span>: Attacker TTPs, for IT managers/NOC. Malware and campaign reports</li>
            <li><span class="key-term">Operational</span>: Specific threats, for IR/forensics. Actor capabilities and intentions</li>
            <li><span class="key-term">Technical</span>: Specific IoCs, for SOC/IR. IPs, domains, hashes. Short lifespan</li>
        </ul>

        <h3>Threat Modeling - 5 Steps</h3>
        <ul>
            <li>1. Identify Security Objectives → 2. Application Overview → 3. Decompose Application → 4. Identify Threats → 5. Identify Vulnerabilities</li>
        </ul>

        <h3>Threat Hunting - 5 Steps</h3>
        <ul>
            <li>1. Hypothesis → 2. Collect and Process Data → 3. Trigger → 4. Investigation → 5. Response/Resolution</li>
            <li>Tools: <span class="key-term">SIEM, EDR</span></li>
        </ul>

        <h2>Information Security Incidents</h2>
        <h3>Signs of an Incident</h3>
        <ul>
            <li><span class="key-term">Precursors</span>: Indicate the future possibility of an incident (vulnerability scanning, new exploit announcement)</li>
            <li><span class="key-term">Indicators</span>: Signal that the incident has occurred or is in progress (AV alerts, IDS/IPS alerts, multiple failed logins, unusual behavior)</li>
        </ul>

        <h3>Sources of Precursors/Indicators</h3>
        <ul>
            <li>IDPS, SIEM, Antivirus/Antispam, File Integrity Checking, Third-party Monitoring, OS/Service/Network/Application Logs, Network Flows, Internal/External People</li>
        </ul>

        <h3>Incident Cost</h3>
        <ul>
            <li><span class="key-term">Tangible</span>: Lost productive hours, investigation costs, business loss</li>
            <li><span class="key-term">Intangible</span>: Reputational damage, loss of goodwill, psychological damage, legal liability</li>
        </ul>

        <h2>Incident Management Process</h2>
        <h3>Incident Management includes:</h3>
        <ul>
            <li>Vulnerability analysis, Artifact analysis, Security awareness training, Intrusion detection, Public/technology monitoring</li>
        </ul>

        <h3>IH&R Process - 9 Steps</h3>
        <ul>
            <li>1. Preparation → 2. Incident Recording and Assignment → 3. Incident Triage → 4. Notification → 5. Containment → 6. Evidence Gathering and Forensic Analysis → 7. Eradication → 8. Recovery → 9. Post-Incident Activities</li>
        </ul>

        <h3>OODA Loop in IR</h3>
        <ul>
            <li><span class="key-term">Observe</span>: Collect data from monitoring tools, SIEM, traffic analysis</li>
            <li><span class="key-term">Orient</span>: Determine what is happening, root cause analysis</li>
            <li><span class="key-term">Decide</span>: Decide actions based on business objectives and timing</li>
            <li><span class="key-term">Act</span>: Implement decisions, remediate infected systems</li>
        </ul>

        <h2>IR Automation and Orchestration</h2>
        <ul>
            <li><span class="key-term">IR Automation</span>: Replace manual actions with automatic ones. Reduces analysis time</li>
            <li><span class="key-term">IR Orchestration</span>: Combines human response + processes + technologies. Organization-specific</li>
            <li><strong>Key difference:</strong> Automation converts manual to automatic; Orchestration combines automation with human/machine intelligence</li>
            <li>Tools mentioned: ServiceNow, BMC, Carbon Black, BigFix, Splunk, Rapid7, FireEye, X-Force, OpenDNS, Blue Coat</li>
        </ul>

        <h2>Best Practices for IH&R</h2>
        <h3>OWASP - 10 Practices</h3>
        <ul>
            <li>1. Audit and Due Diligence → 2. Create Response Team → 3. Documented IR Plan → 4. Identify Triggers/Indicators → 5. Investigate → 6. Triage and Mitigation → 7. Recovery → 8. Documentation/Reporting → 9. Process Review → 10. Practice (mock drills)</li>
        </ul>

        <h3>ENISA</h3>
        <ul>
            <li>Periodic workshops, simple model at the start, trained legal officer, incident verification, final classification, entry/exit procedures for CERT personnel</li>
        </ul>

        <h3>FTC</h3>
        <ul>
            <li><strong>Secure Operations:</strong> Quick response, secure physical areas, deploy response team, stop data loss, remove improperly posted info, secure evidence</li>
            <li><strong>Fix Vulnerabilities:</strong> Consider service providers, network segmentation, communicate with affected parties</li>
            <li><strong>Notify Appropriate Parties:</strong> Determine legal requirements, involve law enforcement</li>
        </ul>

        <h2>Standards Related to IH&R</h2>
        <h3>ISO/IEC 27000 Series</h3>
        <ul>
            <li><span class="key-term">ISO 27001</span>: Requirements for ISMS. Annex A.16 = Information Security Incident Management (A16.1.1-A16.1.7)</li>
            <li><span class="key-term">ISO 27002</span>: Control recommendations for ISMS</li>
            <li><span class="key-term">ISO 27035</span>: Security incident management (3 parts: principles, planning, operations)</li>
            <li><span class="key-term">ISO 27037</span>: Identification, collection, acquisition, and preservation of digital evidence</li>
            <li><span class="key-term">ISO 27041</span>: Investigation methods "fit for purpose"</li>
            <li><span class="key-term">ISO 27042</span>: Interpretation and analysis of digital evidence</li>
            <li><span class="key-term">ISO 27043</span>: Incident investigation processes</li>
            <li><span class="key-term">ISO 27050</span>: Electronic discovery (4 parts)</li>
            <li><span class="key-term">ISO 22320</span>: Emergency management</li>
        </ul>

        <h3>FFIEC</h3>
        <ul>
            <li>U.S. financial institution regulator. Requires: IoC identification, event analysis, classification, escalation, reporting (SAR)</li>
            <li>Tools: STIX/TAXII, IDS/IPS, endpoint visibility, DLP, log correlation, file integrity, malware detection</li>
        </ul>

        <h3>PCI DSS</h3>
        <ul>
            <li>Standard for payment card data handling</li>
            <li>IR Requirements: <span class="key-term">12.5.3</span> (escalation procedures), <span class="key-term">12.10</span> (IR plan), <span class="key-term">12.10.1</span> (plan content), <span class="key-term">12.10.2</span> (review/test annually), <span class="key-term">12.10.3-4</span> (24/7 staff), <span class="key-term">12.10.5</span> (alerts), <span class="key-term">12.10.6</span> (improve with lessons learned)</li>
            <li>Non-compliance = fines or termination of processing privileges</li>
        </ul>

        <h3>NERC 1300 Cyber Security</h3>
        <ul>
            <li>For electric sector entities. 8 standards (1301-1308)</li>
            <li><span class="key-term">NERC 1307</span>: Incident Reporting and Response Planning. Requires: incident classification, response actions, reporting to ES-ISAC. Record retention: 3 calendar years</li>
        </ul>

        <h2>Cybersecurity Frameworks</h2>
        <h3>NIST SP 800-61</h3>
        <ul>
            <li>Incident handling guide. Lifecycle: <span class="key-term">Preparation → Detection & Analysis → Containment, Eradication & Recovery → Post-Incident Activity</span></li>
        </ul>

        <h3>ITIL Incident Management</h3>
        <ul>
            <li>Objective: Restore normal services as quickly as possible with minimal impact</li>
            <li>Steps: Registration → Categorization (CTI) → Assignment → Diagnosis → Resolution → Closure (PIR)</li>
            <li>Refers to KEDB (Known Error Database)</li>
        </ul>

        <h3>COBIT Framework</h3>
        <ul>
            <li>IT governance framework by ISACA. Uses <span class="key-term">CMMI</span> to evaluate maturity</li>
            <li>6 principles: Provide stakeholder value, Holistic approach, Dynamic governance, Governance distinct from management, Tailored to enterprise needs, End-to-end governance</li>
        </ul>

        <h3>CIS Critical Security Controls v8 - 18 Controls</h3>
        <ul>
            <li>1. Inventory Enterprise Assets → 2. Inventory Software → 3. Data Protection → 4. Secure Configuration → 5. Account Management → 6. Access Control → 7. Vulnerability Management → 8. Audit Log Management → 9. Email/Web Browser Protections → 10. Malware Defenses → 11. Data Recovery → 12. Network Infrastructure Management → 13. Network Monitoring/Defense → 14. Security Awareness Training → 15. Service Provider Management → 16. Application Software Security → 17. Incident Response Management → 18. Penetration Testing</li>
        </ul>

        <h2>Laws and Legal Compliance</h2>
        <ul>
            <li>Federal law requires federal agencies to report incidents to the FCIRC</li>
            <li>Law enforcement levels: Federal (FBI, Secret Service), District attorney, State, Local</li>
            <li>Do not contact multiple agencies to avoid jurisdictional conflicts</li>
            <li>Reporting to law enforcement changes the nature of evidence handling (may be subpoenaed by courts)</li>
        </ul>

        <h3>Key Laws</h3>
        <ul>
            <li><span class="key-term">SOX (Sarbanes-Oxley)</span>: Investor protection, corporate records</li>
            <li><span class="key-term">HIPAA</span>: Protection of medical information</li>
            <li><span class="key-term">FISMA</span>: Federal information security</li>
            <li><span class="key-term">GLBA</span>: Protection of financial information</li>
            <li><span class="key-term">GDPR</span>: Personal data protection (EU)</li>
            <li><span class="key-term">DPA 2018</span>: Data Protection Act (UK)</li>
            <li><span class="key-term">DMCA</span>: Digital rights protection</li>
            <li><span class="key-term">CAN-SPAM</span>: Commercial email regulation</li>
        </ul>
    `;

    // Module 2
    moduleContent[2].title_en = "Incident Handling and Response Process";
    moduleContent[2].content_en = `
        <h2>IH&R Process - Overview</h2>
        <p>Objective: stop ongoing attacks, limit damage, maintain services, reduce recovery time and costs. Process initiated by: IH&R Development Project Team, Executive Manager, Head of InfoSec.</p>
        <h3>IH&R Process Flow - 9 Steps</h3>
        <ul>
            <li><span class="key-term">1. Preparation</span> → 2. Incident Recording and Assignment → 3. Incident Triage → 4. Notification → 5. Containment → 6. Evidence Gathering and Forensic Analysis → 7. Eradication → 8. Recovery → <span class="key-term">9. Post-Incident Activities</span></li>
        </ul>

        <h2>Step 1: Preparation</h2>
        <h3>IH&R Team - Roles</h3>
        <ul>
            <li><span class="key-term">Incident Manager (IM)</span>: Manages the entire process, communicates with management</li>
            <li><span class="key-term">Security Analysts</span>: Work with affected systems, investigate threats and vectors</li>
            <li><span class="key-term">Incident Coordinators</span>: Connect stakeholders (legal, HR, clients, vendors)</li>
            <li><span class="key-term">Forensic Investigators</span>: Investigate, preserve evidence, forensics readiness</li>
            <li><span class="key-term">Threat Researchers</span>: Threat intelligence, internal intel DB, awareness</li>
            <li><span class="key-term">IT Auditors</span>: Verify documented procedures, BCP, disaster recovery</li>
            <li><span class="key-term">System/Network Administrators</span>: Configure systems, sniffers, network logs, containment</li>
            <li><span class="key-term">Financial Auditors</span>: Incident costs, cyber insurance</li>
            <li><span class="key-term">HR</span>: Post-event counseling, hour tracking | <span class="key-term">Public Relations</span>: Media, website | <span class="key-term">Attorney</span>: Legal, law enforcement, compliance</li>
        </ul>
        <h3>IH&R Team Models</h3>
        <ul>
            <li><span class="key-term">Centralized</span>: One team, small orgs | <span class="key-term">Distributed</span>: By location, single authority | <span class="key-term">Coordination</span>: Advisory, logistical support</li>
            <li><strong>Staffing:</strong> Employees (in-house) | Partially Outsourced (based on cost/benefit) | Fully Outsourced (contractors on-site)</li>
            <li><strong>Factors:</strong> Availability 24/7, Resources, Full/Part-Time, Morale, Budget, Expertise, Structure</li>
        </ul>
        <h3>Forensic Readiness</h3>
        <ul>
            <li>Ability to use digital evidence with minimal investigation cost</li>
            <li><strong>Planning 8 steps:</strong> 1. Identify potential evidence → 2. Sources → 3. Legal extraction policy → 4. Secure storage → 5. Requires formal investigation? → 6. Documentation → 7. Legal advisory board → 8. IR team ready</li>
            <li><span class="key-term">Forensic Policy</span>: CISO responsible. Defines roles, monitoring, actions upon accidental exposure</li>
            <li><strong>IS Lifecycle:</strong> Regular backups, audit workstations/servers, DB file hashes, file integrity (Tripwire), data retention, IDS/IPS/honeypots</li>
            <li><strong>Host Monitoring:</strong> File integrity (HashMyFiles, Tripwire), event/security logging, secure hosts, backup data</li>
            <li><strong>Network Monitoring:</strong> Firewalls/IDS, ACLs. Tools: Capsa, MS Network Monitor, ManageEngine OpManager. Kerberos, IPsec, SSL, SSH</li>
        </ul>
        <h3>Playbooks vs Runbooks</h3>
        <ul>
            <li><span class="key-term">Playbooks</span>: Steps for a specific incident. Minimum: 1. Incident list, 2. Roles, 3. Workflows, 4. Templates/checklists, 5. Postmortem, 6. Lessons Learned. Approved by management</li>
            <li><span class="key-term">Runbooks</span>: Tactical, detailed, conditional. Knowledge/experience DB. Content: summary, escalation diagram, investigation/containment/eradication/recovery procedures, communication, revision history</li>
        </ul>
        <h3>IR Toolkit (NIST)</h3>
        <ul>
            <li><strong>Comms:</strong> Contact info, on-call, reporting, issue tracking, smartphones, encryption (FIPS for federal), war room, secure storage</li>
            <li><strong>Analysis HW/SW:</strong> Forensic workstations, laptops, spare equipment, portable printer, packet sniffers, forensic SW, evidence tools (cameras, recorders, CoC forms, bags/tags)</li>
            <li><strong>Resources:</strong> Port lists, documentation, network diagrams, baselines, cryptographic hashes, mitigation tools</li>
        </ul>
        <h3>Communication Plan</h3>
        <ul>
            <li>Components: Introduction, Purpose, Scope, Policies, Roles, POC, Internal/External Communication, Media Management, Messaging, Techniques, Review, Training, Testing</li>
            <li>External: Media (FAQs, templates), Law Enforcement (designated POC), Reporting Orgs (US-CERT)</li>
        </ul>
        <h3>IR Metrics</h3>
        <ul>
            <li><span class="key-term">MTBF</span>: Mean Time Between Failures | <span class="key-term">MTTA</span>: Mean Time to Acknowledge | <span class="key-term">MTTD</span>: Mean Time to Detect</li>
            <li><span class="key-term">MTTR</span>: Mean Time to Resolve (most useful) | <span class="key-term">MTTI</span>: Mean Time to Investigate | <span class="key-term">MTTC</span>: Mean Time to Contain</li>
            <li><span class="key-term">KRIs</span>: Key Result Indicators (post-incident) | <span class="key-term">KCIs</span>: Key Control Indicators | <span class="key-term">SLAs</span>: Service/Customer/Multilevel/Contact-based</li>
        </ul>

        <h2>Steps 2-4: Recording, Triage, Notification</h2>
        <ul>
            <li><strong>Recording:</strong> CISA Template: Priority, Type (Compromised System, Malware, DoS, Social Engineering, Policy Violation, Lost Equipment), Timeline, Scope, Systems/Users Affected, PII Breach Info, Handling Log</li>
            <li><strong>Triage:</strong> Prioritize by severity and impact, categorize incident type</li>
            <li><strong>Notification:</strong> Follow communication plan, notify management/technical/legal/stakeholders</li>
        </ul>

        <h2>Steps 5-8: Containment, Evidence, Eradication, Recovery</h2>
        <ul>
            <li><strong>Containment:</strong> Isolate systems, short-term and long-term. Preserve evidence BEFORE taking action</li>
            <li><strong>Evidence Gathering:</strong> Chain of custody, forensic analysis, root cause, attack vector</li>
            <li><strong>Eradication:</strong> Remove malware/backdoors, patch vulnerabilities, reset credentials</li>
            <li><strong>Recovery:</strong> Restore from verified backups, validate integrity, intensive monitoring, restore in stages</li>
        </ul>

        <h2>Step 9: Post-Incident Activities</h2>
        <h3>Postmortem, AAR, Lessons Learned</h3>
        <ul>
            <li><span class="key-term">Postmortem</span>: Severity, Priority, Impact, Timeline, Root Cause, Learnings. Blameless review, start with timeline, obtain MTTR</li>
            <li><span class="key-term">AAR (After-Action Report)</span>: Recap → Review → Analysis → Areas of Improvement</li>
            <li><span class="key-term">Lessons Learned</span>: Meeting with everyone. Questions about detection, cause, containment, sanitization, gaps, preventive measures</li>
        </ul>
        <h3>Documentation and Tools</h3>
        <ul>
            <li>Requirements: Concise/Clear, Standard Format, Reviewed by Editors. Include visualizations</li>
            <li><span class="key-term">MagicTree</span> (tree structure, XPath) | <span class="key-term">Dradis</span> (open-source, Nmap/Nessus) | Serpico, KeepNote, Faraday</li>
        </ul>
        <h3>Impact Assessment, Review, Disclosure</h3>
        <ul>
            <li><strong>Impact:</strong> Financial losses, legal costs, downtime, goodwill damage, recovery costs</li>
            <li><strong>Review/Revise:</strong> Evaluate response, update controls/baselines, replace obsolete systems, attack signatures</li>
            <li><strong>Training:</strong> Role-specific awareness, internal/external campaigns, testing procedures</li>
            <li><strong>Disclosure:</strong> Legal decides. Do NOT disclose: financial data, unpatched vulnerabilities, nation-state info. Entities: law enforcement, regulatory, media, vendors, customers, CERTs</li>
        </ul>

        <h2>Information Sharing (NIST)</h2>
        <ul>
            <li><span class="key-term">Team-to-Team</span>: IoCs, remediation steps, IR plans, lessons learned between IH&R teams</li>
            <li><span class="key-term">Team-to-Coordinating Team</span>: ISAC, tactical/technical/vulnerability info</li>
            <li><span class="key-term">Coordinating Team-to-Coordinating Team</span>: ISAC ↔ US-CERT, periodic summaries</li>
            <li><strong>Techniques:</strong> Ad hoc (calls/emails) | Partially automated (REST/RID over HTTPS)</li>
            <li><strong>Granular:</strong> Business Impact (high-level internal) vs Technical Info (IPs, malware samples - partners)</li>
            <li><strong>NIST Recommendations:</strong> Plan ahead, consult legal, share throughout lifecycle, automate, balance advantages vs risk</li>
        </ul>
    `;

    // Module 3
    moduleContent[3].title_en = "First Response";
    moduleContent[3].content_en = `
        <h2>First Response Concept</h2>
        <p><span class="key-term">First Response</span> = The first action taken after a security incident. Can prevent additional damage and facilitate suspect tracking.</p>
        <p><span class="key-term">First Responder</span> = The first person to arrive at the crime scene to assess the situation and alert management and IR teams. Can be: network/system administrator, law enforcement officer, or forensic investigator.</p>
        <p><strong>Required knowledge:</strong> Complete mastery of digital forensic investigation. Must preserve all evidence in a simple, protected, and forensically sound manner.</p>

        <h2>First Responder Roles</h2>
        <ul>
            <li><span class="key-term">Identify the Crime Scene</span>: Establish perimeter, list involved systems (area, room, building based on the network)</li>
            <li><span class="key-term">Protect the Scene</span>: A search warrant is required to search/seize digital evidence. Protect equipment and wait for the case officer</li>
            <li><span class="key-term">Preserve temporary and fragile evidence</span>: Information on screen or running programs - do NOT wait, take photographs immediately</li>
            <li><span class="key-term">Collect incident information</span>: Preliminary interviews with people present, details and circumstances</li>
            <li><span class="key-term">Document all findings</span>: On the chain of custody form (case, name, address, location, date/time, description)</li>
            <li><span class="key-term">Package and transport evidence</span>: Label, place in storage bags that block wireless signals and protect from sunlight/temperature</li>
            <li><span class="key-term">Collect preliminary information</span>: Incident type, reason, potential damage, scattered evidence, last system user, first to know about the incident</li>
        </ul>

        <h2>First Response: Different Situations</h2>
        <p>Three groups can act as first responders:</p>
        <ul>
            <li><span class="key-term">Non-forensic Personnel (Local Managers)</span>: Secure scene, take notes/photos, hand over to forensic team. Do NOT touch equipment</li>
            <li><span class="key-term">System/Network Administrators</span>: Record screen if PC is on, copy logs to clean media, request management approval before shutting down, isolate equipment, document everything. May have to testify in legal proceedings</li>
            <li><span class="key-term">Laboratory Forensic Personnel</span>: Complete 6-stage process (document, collect, plan search, identify/collect evidence, package, transport)</li>
        </ul>

        <h3>Common First Responder Mistakes</h3>
        <ul>
            <li>Shutting down or restarting the victim's PC (volatile data, MAC times, logs are lost)</li>
            <li>Assuming PC components are trustworthy (may trigger Trojans, malware, time bombs)</li>
            <li>Not having baseline documentation of the victim's PC</li>
            <li>Not documenting the data collection process</li>
        </ul>

        <h3>Basic First Responder Rules</h3>
        <ul>
            <li>ONLY qualified forensic analysts should attempt to collect/recover data</li>
            <li>Attempts by untrained persons can compromise file integrity or make them inadmissible</li>
            <li>All information on electronic devices is potential evidence</li>
            <li>The workplace must be secured to maintain scene integrity</li>
            <li><strong>Health and safety:</strong> Use protective latex gloves in all operations (protects personnel and preserves fingerprints)</li>
        </ul>

        <h2>Documenting the Electronic Crime Scene</h2>
        <ul>
            <li>Documentation is a <strong>continuous</strong> process throughout the entire investigation</li>
            <li>Label ALL available evidence: crime location, system state, network devices, storage, smartphones, Internet access</li>
            <li>Include: photographs, videos, notes, and sketches of the scene</li>
            <li>Document processes and activities on screens</li>
            <li>Note the site and state of computers, digital storage media, and electronic devices</li>
            <li>Record the power status of all devices</li>
        </ul>

        <h3>Photographing and Sketching the Scene</h3>
        <ul>
            <li>Upon arrival, the FIRST thing to do is photograph the scene</li>
            <li>Multiple photos to capture the entire scene (from general to the smallest detail)</li>
            <li>Photos of the back of the PC to show cable connections</li>
            <li>If onsite work is not possible: label ALL cables to reconnect in the lab</li>
            <li>Prepare sketches with details of objects and locations</li>
        </ul>

        <h2>Search and Seizure Planning</h2>
        <p>The plan must include:</p>
        <ul>
            <li>Incident description and case name</li>
            <li>Incident location and applicable jurisdiction</li>
            <li>Determine the extent of search authority</li>
            <li>Create a <span class="key-term">chain of custody</span> document</li>
            <li>Details of equipment to seize</li>
            <li>Type of search: <span class="key-term">overt or covert</span></li>
            <li>Local management approval</li>
            <li>Health and safety precautions (latex gloves)</li>
        </ul>

        <h3>Information to Collect from the Incident</h3>
        <ul>
            <li>Actual users of the electronic devices</li>
            <li>Webmail and social media account information</li>
            <li>Usernames, ISPs, and passwords for accessing resources</li>
            <li>System usage purpose and automated applications</li>
            <li>Offsite data storage</li>
            <li>Unique security schemes or destructive devices</li>
            <li>Installed hardware/software documentation</li>
        </ul>

        <h2>Evidence Search - 6 Steps</h2>
        <ul>
            <li>1. Inspect the scene for potential evidence sources (recorders, cameras, access cards, GPS)</li>
            <li>2. Protect physical evidence or hidden fingerprints on keyboards, mice, and other equipment</li>
            <li>3. Find cables connected to devices (modems, caller ID boxes)</li>
            <li>4. Observe the current situation and record observations</li>
            <li>5. Maintain a <span class="key-term">search and seizure log</span> documenting all devices</li>
            <li>6. Search for secondary storage media (hard drives, pen drives, etc.)</li>
        </ul>

        <h2>Securing and Assessing the Crime Scene</h2>
        <ul>
            <li>Follow standard legal authority procedures</li>
            <li>Ensure the scene is safe for responders</li>
            <li>Secure ALL electronic devices including laptops/personal devices</li>
            <li>Do not allow any individual to access the scene or devices</li>
            <li>Reject any offer of help or technical assistance</li>
            <li>Isolate other people present at the scene</li>
            <li>Establish a security perimeter to verify if attackers are still present</li>
            <li>Protect perishable data (e.g., caller ID boxes) physically and electronically</li>
            <li>Document, disconnect, and label telephone lines and network cables</li>
        </ul>

        <h2>Seizing Evidence at the Scene</h2>
        <ul>
            <li>Collect ALL electronic devices and storage media (hard drives, memory cards, removable media)</li>
            <li>Portable devices: browsing history, emails, chat logs, photos, financial records</li>
            <li>Peripherals are potential evidence: scanned/printed document info, phone/fax numbers</li>
            <li>Evidence must NOT be altered from the beginning to the end of the forensic process</li>
            <li>All seized items: identify, record, seize, and bag WITHOUT attempting to determine content</li>
            <li>Label all evidence with: date, time, and initials of the collecting person</li>
        </ul>

        <h2>Evidence Collection by Device Type</h2>
        <h3>Powered-ON Computers</h3>
        <ul>
            <li>If screen visible: photograph and document running programs, open files, data of evidential value</li>
            <li>If showing screensaver: move mouse slowly <strong>WITHOUT pressing any button</strong>, photograph and document</li>
            <li>If laptop wakes up: record date/time, photograph screen, document programs</li>
            <li><span class="key-term">DISCONNECT immediately</span> if: data is being overwritten/deleted, destructive processes are running, or typical Windows environment is visible</li>
            <li><span class="key-term">Do NOT disconnect</span> if: evidential data is visible on screen or active programs/files (chatrooms, financial documents, instant messages)</li>
            <li>Photograph and document all information on screen, collect volatile data</li>
            <li>After collecting volatile data: disconnect power cable from the BACK of the PC</li>
            <li>Laptops: remove battery and disconnect cable. If battery is non-removable: hold power button for 30 seconds</li>
        </ul>

        <h3>Powered-OFF Computers</h3>
        <ul>
            <li><span class="key-term">If it is off: LEAVE IT OFF</span></li>
            <li>Disassemble and package: remove power cable (from PC and wall), disconnect cables, check for removable media</li>
            <li>Clearly label evidence and note in search/seizure log</li>
            <li>Document chain of custody</li>
            <li>If monitor OFF and blank screen: turn on monitor, move mouse slightly, observe changes, photograph</li>
            <li>If monitor ON and blank screen: move mouse slightly, if no change do NOT press keys, photograph</li>
        </ul>

        <h3>Networked Computers</h3>
        <ul>
            <li>Disconnect network cable from router/modem (active connection = vulnerable to further attacks)</li>
            <li>Do NOT use the PC to search for evidence (alters integrity)</li>
            <li>Photograph all connected devices (router, modem) from different angles</li>
            <li>If there is a printer/scanner in the area: photograph as well</li>
            <li>If PC is off: follow powered-off procedure. If on: follow powered-on procedure</li>
            <li>Package evidence in <span class="key-term">anti-static (static-free)</span> bag</li>
            <li>Keep away from: magnets, high temperature, radio transmitters</li>
        </ul>

        <h3>Open Files and Startup Files</h3>
        <ul>
            <li>Malware creates files in <strong>startup folders (Windows)</strong> and in <strong>rc.local (Linux)</strong></li>
            <li>Open recent documents from startup or system32 (Windows) and rc.local (Linux)</li>
            <li>Document the date and time of files</li>
            <li>Examine open files looking for sensitive data (passwords, images)</li>
            <li>Look for unusual MAC times (Modified, Accessed, Changed) in vital folders</li>
            <li>Use <strong>dir</strong> (Windows) or <strong>ls</strong> (Linux) to locate actual access times</li>
        </ul>

        <h2>Shutdown Procedures by OS</h2>
        <h3>Windows</h3>
        <ul>
            <li>Photograph screen and document running programs</li>
            <li>Click Windows button → Power → Shut Down</li>
            <li>Wait until fully shut down and disconnect cable from the wall</li>
        </ul>
        <h3>macOS</h3>
        <ul>
            <li>Record time from the menu bar</li>
            <li>Click Apple icon (top left) → Shut Down</li>
            <li>Disconnect cable from the wall</li>
        </ul>
        <h3>UNIX/Linux</h3>
        <ul>
            <li>Right-click on Desktop → Console</li>
            <li>If root prompt (#): enter password and type <span class="key-term">sync;sync;halt</span></li>
            <li>If password not available: disconnect cable from the wall</li>
            <li>If user ID is not root: disconnect cable from the wall</li>
        </ul>

        <h3>Smartphones / Portable Devices</h3>
        <ul>
            <li><strong>If OFF:</strong> Do NOT turn it on, collect and label cables, check security features (patterns, passwords, biometrics), look for backups on PCs, label in log, document chain of custody</li>
            <li><strong>If ON:</strong> Leave it as is, keep it charged (evidence is lost if it turns off), photograph screen, use <span class="key-term">Faraday bag</span> to block signals</li>
        </ul>

        <h2>Evidence Preservation</h2>
        <p>Proper handling and documentation so that evidence is free from contamination. All seized evidence must be isolated, secured, transported, and preserved in its original state.</p>
        <ul>
            <li><span class="key-term">Project logbook</span>: Record observations related to evidence</li>
            <li><span class="key-term">Identification tag</span>: To uniquely identify each piece of evidence</li>
            <li><span class="key-term">Chain of custody record</span>: Upon transfer, sender and receiver provide date/time</li>
        </ul>

        <h2>Chain of Custody</h2>
        <p>A legal document that demonstrates the progression of evidence from the original location to the forensic laboratory. Shows how it was collected, analyzed, and preserved.</p>
        <h3>Chain of Custody Document Contents</h3>
        <ul>
            <li><span class="key-term">Case Number</span>: Unique number assigned by the laboratory/agency</li>
            <li><span class="key-term">Name and title</span> of the person from whom it was received</li>
            <li><span class="key-term">Address and phone</span> of individuals who handled the evidence</li>
            <li><span class="key-term">Evidence location</span>: Physical location during extraction/acquisition</li>
            <li><span class="key-term">Date/time of evidence</span></li>
            <li><span class="key-term">Reason and process</span> for obtaining it</li>
            <li><span class="key-term">Item number / quantity / description</span>: Name, color, manufacturer, packaging info</li>
        </ul>

        <h3>Chain of Custody Form</h3>
        <p>Must identify: sample collector, sample description/type/number, sampling data and location, sample custodians. Includes fields for: Package #, Date/Time, Released By, Received By (Name/Agency + Signature).</p>

        <h3>Evidence Bag Contents</h3>
        <ul>
            <li>Date and time of seizure</li>
            <li>Incident responder who seized the evidence</li>
            <li><span class="key-term">Exhibit number</span></li>
            <li>Seizure site and content details</li>
            <li>Presenting agency and its address</li>
        </ul>

        <h2>Evidence Packaging</h2>
        <ul>
            <li>Evidence properly documented, labeled, and listed BEFORE packaging</li>
            <li>Special attention to hidden or trace evidence</li>
            <li>Magnetic media in <span class="key-term">anti-static packaging</span></li>
            <li><strong>Do NOT use plastic bags</strong> (they produce static electricity)</li>
            <li>Do NOT fold or scratch storage devices</li>
            <li>Label all containers appropriately</li>
            <li>Use shock-absorbing material: <span class="key-term">bubble wrap, Styrofoam</span></li>
        </ul>

        <h2>Exhibit Numbering</h2>
        <p>Pre-agreed format: <span class="key-term">aaa/ddmmyy/nnnn/zz</span></p>
        <ul>
            <li><strong>aaa</strong> = Initials of the forensic analyst or seizing officer</li>
            <li><strong>dd/mm/yy</strong> = Date of seizure</li>
            <li><strong>nnnn</strong> = Sequential exhibit number (starting at 001)</li>
            <li><strong>zz</strong> = Sequence number for parts of the same exhibit (A=CPU, B=monitor, C=keyboard, etc.)</li>
        </ul>

        <h2>Evidence Transport and Storage</h2>
        <ul>
            <li>Digital evidence is sensitive to: extreme weather, physical impact, static electricity, humidity, and magnetic fields</li>
            <li>Do NOT flip the PC or place it on its side during transport</li>
            <li>Keep away from magnetic sources (radio transmitters, speaker magnets, heated seats)</li>
            <li>Store in a secure area, away from extreme heat/cold or humidity</li>
            <li>Do NOT store in vehicles for extended periods</li>
            <li>Maintain proper chain of custody</li>
            <li>Ensure wireless devices do not connect to networks: use <span class="key-term">signal-blocking containers</span></li>
        </ul>
    `;

    // Module 4
    moduleContent[4].title_en = "Handling and Responding to Malware Incidents";
    moduleContent[4].content_en = `
        <h2>Introduction to Malware Incident Handling</h2>
        <p>Malware is the most common threat and causes extensive damage due to its complex design and ability to spread among connected devices. Organizations need a robust and structured IR plan.</p>
        <p><strong>The IH&R team must:</strong> Detect, contain, and eradicate malware. Perform static and dynamic analysis of samples. Use third-party tools to identify purpose, C&C servers, and target systems.</p>

        <h2>Malware Propagation Techniques</h2>
        <ul>
            <li>Instant messaging applications</li>
            <li>Portable hardware / removable devices (USB)</li>
            <li>Browser and email software bugs</li>
            <li>Insecure patch management</li>
            <li>Rogue/decoy applications</li>
            <li>Untrusted websites and freeware</li>
            <li>Internet downloads and email attachments</li>
            <li>Network propagation: <span class="key-term">NetBIOS, FTP, SMB</span></li>
            <li>Installation by other malware</li>
            <li>Bluetooth and wireless networks</li>
            <li>Infected executables, DLLs, macros, JavaScript, documents</li>
        </ul>

        <h3>Web Distribution Techniques</h3>
        <ul>
            <li><span class="key-term">Black hat SEO</span>: Keyword stuffing, doorway pages, page swapping to rank malware pages</li>
            <li><span class="key-term">Click-jacking</span>: Injecting malware into sites that appear legitimate</li>
            <li><span class="key-term">Spear-phishing sites</span>: Mimicking legitimate institutions (banks) to steal credentials</li>
            <li><span class="key-term">Malvertising</span>: Malicious ads in legitimate advertising channels</li>
            <li><span class="key-term">Drive-by downloads</span>: Involuntary download when visiting a site (exploit browser flaws)</li>
            <li><span class="key-term">Spam emails</span>: Malicious attachments or malware embedded in the email body</li>
            <li><span class="key-term">RTF injection</span>: Exploiting Office RTF templates; malicious macros download from remote server when document is opened</li>
        </ul>

        <h2>Preparation: Safe Malware Handling</h2>
        <p>The IR team should include: vulnerability managers, information security managers, and penetration testers.</p>
        <ul>
            <li>Always use a <span class="key-term">VM or sandbox isolated</span> from the functional network</li>
            <li>Dedicated secure channels for transferring malware files</li>
            <li>Keep malware files <strong>compressed and password-protected</strong></li>
            <li>Modify extensions: e.g., sample.exe → <span class="key-term">sample.exe.vir</span></li>
            <li>Store in an isolated storage facility</li>
            <li>Exclude files with invalid extensions from antivirus scanning</li>
            <li>Create <span class="key-term">snapshots</span> for easy rollback after analysis</li>
            <li>Use hashing to fingerprint the sample</li>
            <li>Contain affected systems in <span class="key-term">restricted VLANs</span> with additional segmentation</li>
            <li>Implement robust application logging</li>
            <li>Upload suspicious files to <span class="key-term">VirusTotal</span> for safe scanning</li>
        </ul>

        <h2>Detection: Malware Incident Indicators</h2>
        <h3>General Indicators</h3>
        <ul>
            <li>Abnormal network traffic flows</li>
            <li>Unexplainable bounced emails</li>
            <li>Irrelevant alerts, ads, and popups</li>
            <li>Logs with port scanning attempts, unauthorized access</li>
            <li>File modification, deletion, or relocation</li>
            <li><span class="key-term">BSOD (Blue Screen of Death)</span></li>
            <li>Sudden system freeze, shutdown, and crash</li>
            <li>System slowdown, longer reboot times</li>
            <li>Inability to install updates</li>
            <li>Security programs automatically disabled</li>
            <li>Web browser configuration changes</li>
            <li>Suspicious startup processes / unapproved program installations</li>
            <li>Storage space consumption / unusual open ports</li>
            <li>Creation of unknown user accounts (guest or admin)</li>
            <li>Unknown file share access / use of unknown protocols</li>
            <li>Unauthorized sessions / multiple failed logins</li>
            <li>Anomalous DNS requests on the network</li>
            <li>Sudden loss of primary memory and hard drive space</li>
        </ul>

        <h3>Trojan Indicators</h3>
        <ul>
            <li>Screen flickers, flips, or inverts</li>
            <li>Background/wallpaper changes automatically</li>
            <li>Printers print automatically</li>
            <li>Web pages open without user input</li>
            <li>Mouse moves on its own / uncontrollable clicks</li>
            <li>Keyboard and mouse freeze</li>
            <li>Contacts receive emails the user did not send</li>
            <li>Task Manager disabled</li>
            <li>Devices/applications encrypt themselves</li>
            <li>Unusual network activity when user is not active</li>
        </ul>

        <h3>Virus Indicators</h3>
        <ul>
            <li>Processes use more resources and time (reduced performance)</li>
            <li>PC beeps without display / drive labels change</li>
            <li>Constant antivirus alerts / files and folders disappear</li>
            <li>Insufficient storage space / unexpected logout</li>
            <li>Files with multiple extensions (.exe, .vbs, .gif, .jpg)</li>
            <li>Duplicate or corrupt files</li>
        </ul>

        <h3>Fileless Malware Indicators</h3>
        <ul>
            <li>Unexpected modifications in RAM content</li>
            <li>Unusual network patterns and traces</li>
            <li>Unusual PC connections with remote server</li>
            <li>Malicious code in firmware (BIOS, network card)</li>
            <li>Unexpected changes in Windows registry files</li>
            <li>High volumes of data transfer</li>
            <li>High system usage without active processes</li>
            <li>Multiple privileged login attempts outside business hours</li>
            <li>Unusual Active Directory queries</li>
            <li>Denied access to Windows tools (WMI, PowerShell)</li>
            <li>Presence of malicious Microsoft Office Macro files</li>
        </ul>

        <h2>Detection with YARA Rules</h2>
        <p><span class="key-term">YARA</span> = Rule-based malware research tool. Cross-platform (Windows, macOS, Linux). Creates "rules" = descriptions of malware families using text or binary patterns.</p>
        <h3>YARA Rule Structure (3 parts)</h3>
        <ul>
            <li><span class="key-term">Condition</span>: Boolean expressions that define when a match is true</li>
            <li><span class="key-term">Strings</span>: Defines strings to search for (hexadecimal, text, regex)</li>
            <li><span class="key-term">Metadata</span>: General information to identify files (description, author, hash)</li>
        </ul>
        <p><strong>Example:</strong> rule silent_banker : banker { meta: description = "..." strings: $a = {6A 40 68...} $b = {8D 4D...} $c = "UVODFRY..." condition: $a or $b or $c }</p>
        <p><strong>YARA Tools:</strong> <span class="key-term">yarGen</span> (generates rules by eliminating goodware strings), Koodous, YaraRET, YARA Silly, Halogen, Yabin</p>

        <h2>Detection Tools</h2>
        <h3>Fileless Malware Detection</h3>
        <ul>
            <li><span class="key-term">SentinelOne XDR</span>: Analyzes process behavior in memory (not executable files). Agent collects: users, processes, CLI arguments, registry, files, and communication channels. Detects, analyzes, and mitigates automatically</li>
            <li><span class="key-term">AlienVault USM Anywhere</span>: Unified platform: asset discovery, vulnerability assessment, IDS, behavioral monitoring, SIEM, log management. Detects fileless attacks even without signatures/IoCs</li>
            <li>Others: Quick Heal Total Security, Apex One, Logsign, FortiGuard, CYNET EDR</li>
        </ul>

        <h3>RAT (Remote Access Trojan) Detection</h3>
        <ul>
            <li><span class="key-term">SolarWinds Security Event Manager (SEM)</span>: Behavioral RAT detection, built-in correlation rules, collects data from multiple log sources</li>
            <li>Others: Malwarebytes, <span class="key-term">Snort</span>, <span class="key-term">OSSEC</span>, <span class="key-term">Zeek</span>, <span class="key-term">Suricata</span></li>
        </ul>

        <h3>Malware Detection in Encrypted Traffic</h3>
        <ul>
            <li><span class="key-term">Flowmon</span>: Obtains traffic metadata in IPFIX format with TLS protocol info. Detects outdated SSL certificates, non-compliant ones, and obsolete TLS versions</li>
            <li><span class="key-term">Cisco Encrypted Traffic Analytics</span></li>
            <li>ThreatEye, Juniper ATP, Bitdefender NTA, ExtraHop Reveal(x) 360</li>
        </ul>

        <h2>Malware Incident Containment</h2>
        <p>Objective: Prevent propagation and minimize impact. Strategies vary based on malware nature.</p>
        <ul>
            <li>Separate compromised host from the operational network</li>
            <li>Analyze network logs to find propagation via shared files</li>
            <li>If multiple systems compromised: cut network services and <strong>prioritize by importance for business continuity</strong></li>
            <li>Use <span class="key-term">separate VLANs</span> for infected hosts</li>
            <li>Allow connections for non-compromised devices via ACL or VPN</li>
            <li>Initiate host analysis to find malware signatures, patterns, or behaviors</li>
            <li>Disable target services/applications/systems until vulnerabilities are patched</li>
            <li>Block unnecessary ports on host and firewall</li>
            <li>Run antivirus, firewall, and IDS at the host level</li>
            <li>Run registry monitoring tools to find malicious entries</li>
            <li>Review network traffic and <strong>block access to the C&C server</strong></li>
            <li>Reset all credentials, especially administrator ones</li>
            <li>Format systems and reinstall OS after taking a <span class="key-term">forensic image</span></li>
            <li>Add IoCs (hash values) to endpoint protection: configure to block and alert</li>
        </ul>
        <p><strong>Containment Tools:</strong> <span class="key-term">Infoblox</span> (containment via DNS and threat intelligence), <span class="key-term">Rubrik</span>, Microsoft Defender for Endpoint, Illumio, Comodo, Netwrix, ZoneAlarm</p>

        <h2>Malware Analysis</h2>
        <h3>Testbed Preparation (9 steps)</h3>
        <ul>
            <li>1. Assign a physical system for the analysis lab</li>
            <li>2. Install a virtual machine (VMware, Hyper-V)</li>
            <li>3. Install guest OS on the VM</li>
            <li>4. Isolate from the network: NIC card in <span class="key-term">"host only"</span> mode</li>
            <li>5. Simulate Internet services with <span class="key-term">INetSim</span></li>
            <li>6. Disable "shared folders" and "guest isolation"</li>
            <li>7. Install malware analysis tools</li>
            <li>8. Generate hash of each OS and tool</li>
            <li>9. Copy malware to the guest OS</li>
        </ul>

        <h3>Malware Toolkit Hardware</h3>
        <ul>
            <li>Jump kit with different connectors for acquisition and backup</li>
            <li>Storage media for backed up data</li>
            <li>Write-protected device to prevent data modification</li>
            <li>Laptop equipped with software tools</li>
            <li>Basic networking equipment and cables</li>
        </ul>

        <h3>Software Analysis Tools</h3>
        <ul>
            <li><strong>Imaging tool:</strong> For clean imaging for forensic purposes</li>
            <li><strong>File/data analysis:</strong> For static analysis of potentially malicious files</li>
            <li><strong>Registry/configuration tools:</strong> Identify last saved configurations</li>
            <li><strong>Sandbox:</strong> For manual dynamic analysis</li>
            <li><strong>Log analyzers:</strong> Extract log files from attacked devices</li>
            <li><strong>Network capture:</strong> Understand how malware leverages the network</li>
        </ul>

        <h2>Malware Incident Eradication</h2>
        <h3>Trojan Eradication</h3>
        <ul>
            <li>Do not open attachments from unknown senders</li>
            <li>Block unnecessary ports on host and firewall</li>
            <li>Monitor internal traffic for unusual ports or encrypted traffic</li>
            <li>Install patches and updates regularly</li>
            <li>Scan USB devices with antivirus before use</li>
            <li>Restrict desktop permissions to prevent malicious installation</li>
            <li>Disable suspicious startup programs and block background processes</li>
            <li>Change ALL account and network passwords to complex passwords</li>
            <li>Use spam filters to prevent malicious emails</li>
        </ul>

        <h3>Virus and Worm Eradication</h3>
        <ul>
            <li>Install and update antivirus for real-time detection and removal</li>
            <li>Develop an antivirus policy and distribute to all staff</li>
            <li>Regular backups of critical data</li>
            <li>Ensure executable code has been approved</li>
            <li>Do NOT boot with infected system disks</li>
            <li>Activate popup blockers and use Internet firewalls</li>
            <li>Close internal/external network channels to disconnect C&C virus communication</li>
            <li>Update firewall rules to block future similar attacks</li>
            <li>Quarantine infected systems + digital forensic analysis</li>
            <li>Remove temporary files to prevent virus execution on boot</li>
        </ul>

        <h3>Ransomware Eradication</h3>
        <ul>
            <li>Disconnect ALL internal and external connections to prevent propagation</li>
            <li>Regular scans with Internet security software</li>
            <li>Quarantine affected systems + relevant removal tools</li>
            <li>Use <span class="key-term">appropriate decryption tools</span> to access encrypted data</li>
            <li>Regular data backup to protect against encryption</li>
            <li>Monitor TCP ports: <span class="key-term">RDP, SMB</span> (used by ransomware)</li>
            <li>Ensure antivirus and ransomware protection solutions are up to date</li>
        </ul>

        <h3>Antivirus Tools</h3>
        <ul>
            <li><span class="key-term">TotalAV</span>: Real-time protection, scheduled scans, blocks cookies, ads/popups, monitors breaches</li>
            <li><span class="key-term">Bitdefender Antivirus Plus</span></li>
            <li><span class="key-term">Kaspersky Antivirus</span></li>
            <li><span class="key-term">McAfee Total Protection</span></li>
            <li><span class="key-term">Norton AntiVirus Plus</span></li>
            <li><span class="key-term">Avast Premium Security</span></li>
        </ul>

        <h3>Anti-Trojan Software</h3>
        <ul>
            <li><span class="key-term">Malwarebytes</span>: For Windows, macOS, ChromeOS, Android, iOS. Real-time protection: web, malware, ransomware, exploits</li>
            <li>Bitdefender Total Security, Norton 360, <span class="key-term">HitmanPro</span>, Plumbytes, AVG</li>
        </ul>

        <h2>Recovery after Malware Incidents</h2>
        <ul>
            <li>Reimage and rebuild infected systems from scratch, or remove temporary containment</li>
            <li>Wipe all data from compromised systems and wipe storage media</li>
            <li>Recover data with recovery tools, trusted backups, or cloud sync</li>
            <li>Scan hosts and file shares with updated antivirus signatures</li>
            <li>Full scans on backups before using them to restore servers/systems/databases</li>
            <li>Evaluate pre-production security risks before recovering services</li>
            <li>Restore email after blocking malicious senders at the server level</li>
            <li>ALL employees change passwords + enable <span class="key-term">2FA</span></li>
            <li>Disable automatic file sharing; enable with authentication if necessary</li>
            <li>Connect systems to a clean network to download, install, and update OS</li>
            <li>Implement <span class="key-term">3-2-1 backup strategy</span> (3 copies, 2 media, 1 offsite)</li>
            <li>Complete wipe including <span class="key-term">MBR (Master Boot Record)</span></li>
            <li>Use <span class="key-term">Windows System Restore</span> to recover data with point-in-time backups</li>
            <li>Rebuild BIOS, drivers from trusted software library and verify hashes</li>
        </ul>
        <p><strong>Recovery Tools:</strong> <span class="key-term">EaseUS Data Recovery Wizard</span>, Remo Recover, Stellar Data Recovery Professional, Trellix Ransomware Recover, NAKIVO</p>

        <h2>Case Study: Prestige Ransomware</h2>
        <p>Attack on transportation and logistics entities in <strong>Ukraine and Poland</strong>, deployed by Russian APT group <span class="key-term">IRIDIUM</span> on October 11, 2022.</p>
        <ul>
            <li><strong>Identification:</strong> Microsoft team performed attribution assessment based on forensic artifacts, IRIDIUM TTPs. Remote execution tools: <span class="key-term">RemoteExec and Impacket WMIexec</span>. Open-source escalation tools: winPEAS, comsvcs.dll, ntdsutil.exe</li>
            <li><strong>IoCs:</strong> 3 SHA-256 hashes of the ransomware payload + import hash (a32bbc5df...) + ransom note path: <span class="key-term">C:\\Users\\Public\\README</span></li>
            <li><strong>Triage:</strong> Destructive attack targeting companies supporting Ukraine in the war. Labeled as "Critical" for Eastern Europe</li>
            <li><strong>Containment:</strong> Notification to victims and other transportation entities</li>
            <li><strong>Forensics:</strong> Malware terminates MSSQL service (net.exe stop). Creates directory for ransom note. Encrypts files with hardcoded <span class="key-term">RSA X509</span> public key. Encrypted extensions: .enc. Custom handler via registry: HKCR\\.enc</li>
            <li><strong>Eradication:</strong> Disable process creation with PsExec and WMI. Activate tamper protection and cloud-delivered protection in Defender. Enable MFA for all remote assets (VPN). Remove suspicious files (wbadmin.exe, vssadmin.exe). Use <span class="key-term">Microsoft Sentinel</span> for threat hunting</li>
            <li><strong>Lessons:</strong> Importance of monitoring network activity on domains. Attackers can abuse proprietary services (WMI, PsExec)</li>
        </ul>

        <h2>Best Practices against Malware</h2>
        <ul>
            <li>Review and update prevention policies regularly</li>
            <li>Educate users about recent attacks and preventive actions</li>
            <li>Subscribe to antivirus bulletins</li>
            <li>Deploy network-based IDS/IPS and firewall systems</li>
            <li>Install host-based IDS on critical hosts</li>
            <li>Ensure all devices use the latest antivirus version</li>
            <li>Restrict use of removable devices unless necessary</li>
            <li>Verify firewalls are updated with signatures that block spyware</li>
            <li>Activate browser security features: disable JavaScript, enable popup blocking</li>
            <li>Use secure email clients with digital signatures and PGP encryption</li>
            <li>Do NOT open extensions: .bat, .com, .exe, .pif, .vbs</li>
            <li>Use MFA before allowing network access</li>
            <li>Only access authenticated HTTPS sites with valid URLs</li>
            <li>Whitelist required applications and block unauthorized programs</li>
            <li>Logically separate networks by department/operation</li>
            <li>Incorporate <span class="key-term">AI-powered SIEM</span> to automate identification and mitigation</li>
            <li>Remove inactive accounts and apply the <span class="key-term">least-privilege</span> principle</li>
        </ul>

        <h3>Best Practices against Fileless Malware</h3>
        <ul>
            <li>Terminate suspicious/unknown processes</li>
            <li>Monitor network traffic and activity logs regularly</li>
            <li>Use VPN to encrypt Internet traffic</li>
            <li>Disable <span class="key-term">PowerShell and WMI</span> when not in use</li>
            <li>Disable macros and avoid macros without digital signatures</li>
            <li>Monitor RAM regularly (fileless malware hides in memory)</li>
            <li>Avoid signature-based detection; use <span class="key-term">global threat feeds, pattern analysis, and fingerprinting</span></li>
            <li>Behavioral analysis via <span class="key-term">EDR</span> solutions</li>
            <li>Use GPOs or registry keys to implement policies on DDE and macros</li>
            <li>Configure <span class="key-term">ASR (Attack Surface Reduction)</span> rules</li>
        </ul>
        <p><strong>Fileless Malware Tools:</strong> Microsoft Defender for Endpoint, Kaspersky Endpoint Security, <span class="key-term">SentinelOne</span>, BlackBerry Spark Suites, Norton 360, Sophos EDR</p>
    `;

    // Module 5
    moduleContent[5].title_en = "Handling and Responding to Email Security Incidents";
    moduleContent[5].content_en = `
        <h2>Introduction to Email Security Incidents</h2>
        <p>Email = popular attack vector due to its massive use. Phishing and malicious attachments represent more than a quarter of all cybersecurity attacks.</p>
        <p><strong>Two categories of email crimes:</strong></p>
        <ul>
            <li><span class="key-term">Crimes committed by sending emails</span>: Spamming, Phishing, Mail bombing, Mail storms, Malware distribution</li>
            <li><span class="key-term">Crimes supported by emails</span>: Identity theft, Cyberstalking, Fraud</li>
        </ul>

        <h2>Types of Email Security Incidents</h2>
        <ul>
            <li><span class="key-term">Spamming</span>: Mass unsolicited email (crime in Washington State, not illegal in many others)</li>
            <li><span class="key-term">Phishing</span>: Impersonation to steal credentials/sensitive information</li>
            <li><span class="key-term">Mail Bombing</span>: Mass email sending to overwhelm server/mailbox</li>
            <li><span class="key-term">Mail Storms</span>: Email avalanche caused by mass chain replies</li>
            <li><span class="key-term">Malware Distribution</span>: Malicious attachments or links in emails</li>
            <li><span class="key-term">Identity Theft</span>: Identity impersonation using information obtained via email</li>
            <li><span class="key-term">Cyberstalking</span>: Systematic harassment using email as a vector</li>
        </ul>

        <h3>Types of Phishing</h3>
        <ul>
            <li><span class="key-term">Spear Phishing</span>: Targeted at specific individuals or groups</li>
            <li><span class="key-term">Whaling</span>: Phishing targeting high-level executives (CEO, CFO)</li>
            <li><span class="key-term">Pharming</span>: Redirecting traffic from legitimate site to fraudulent one (DNS poisoning)</li>
            <li><span class="key-term">Spimming</span>: Spam via instant messaging</li>
            <li><span class="key-term">BEC (Business Email Compromise)</span>: Corporate fraud impersonating corporate identity</li>
        </ul>

        <h2>Preparation for Handling Email Incidents</h2>
        <h3>Email Filtering</h3>
        <ul>
            <li>Filter incoming emails using predefined rules to block spam/malware</li>
            <li><strong>Tools:</strong> <span class="key-term">MailWasher PRO</span>, N-able Mail Assure, <span class="key-term">SpamBully</span></li>
        </ul>
        <h3>Email Monitoring</h3>
        <ul>
            <li>Monitor email activity to detect anomalous behavior</li>
            <li><strong>Tools:</strong> <span class="key-term">Teramind</span> (user activity monitoring), Inbound Shield, <span class="key-term">SolarWinds Mail Monitor</span></li>
        </ul>
        <h3>Email Log Analysis</h3>
        <ul>
            <li>Analyze logs to identify attack patterns and timeline</li>
            <li><strong>Tools:</strong> <span class="key-term">Tracemail</span>, Mailgun</li>
        </ul>

        <h2>Email Incident Detection</h2>
        <h3>Email Attack Indicators</h3>
        <ul>
            <li>Suspicious sender or similar domain (typosquatting)</li>
            <li>Urgency or pressure to act immediately</li>
            <li>Links to fake domains or shortened URLs</li>
            <li>Grammar or spelling errors</li>
            <li>Request for sensitive information (passwords, banking data)</li>
            <li>Unexpected attachments (.exe, .zip, macros)</li>
            <li>Inconsistencies in email headers</li>
            <li>Generic greetings ("Dear Customer" instead of the name)</li>
            <li>Offers too good to be true</li>
        </ul>

        <h3>Spear Phishing Detection (11 checks)</h3>
        <ul>
            <li>Verify sender address against internal database</li>
            <li>Verify sender domain (similar domains/typosquatting)</li>
            <li>Analyze message urgency and request for immediate action</li>
            <li>Verify attachments in sandbox before opening</li>
            <li>Examine URLs without clicking (hover to see actual destination)</li>
            <li>Verify consistency with previous communications from the sender</li>
            <li>Look for discrepancies in email signature</li>
            <li>Verify if it requests unusual sensitive information</li>
            <li>Check headers to verify authenticity</li>
            <li>Confirm with the alleged sender through another channel</li>
            <li>Report to the security team if anything seems suspicious</li>
        </ul>

        <h3>Spear Phishing Detection Tools</h3>
        <ul>
            <li><span class="key-term">Barracuda Impersonation Protection</span></li>
            <li><span class="key-term">Avanan</span> (Check Point)</li>
            <li><span class="key-term">BrandShield</span></li>
            <li><span class="key-term">Cofense</span></li>
            <li><span class="key-term">Mimecast</span></li>
            <li><span class="key-term">Proofpoint TAP</span> (Targeted Attack Protection)</li>
        </ul>

        <h2>Email Incident Containment</h2>
        <ul>
            <li>Isolate affected systems and conduct interviews with affected users</li>
            <li>Behavioral analysis of affected systems</li>
            <li>Block malicious IPs and URLs in firewalls and proxies</li>
            <li>Scan all systems with updated antivirus</li>
            <li>Enable <span class="key-term">MFA</span> on all compromised accounts</li>
            <li>Enable <span class="key-term">mailbox auditing</span> to track activity</li>
            <li>Block malicious sender and domain on the email server</li>
            <li>Delete malicious emails from all organization mailboxes</li>
            <li>Reset credentials of compromised accounts</li>
        </ul>

        <h2>Email Incident Analysis</h2>
        <h3>ThePhish - Automated Analysis Platform</h3>
        <ul>
            <li><span class="key-term">ThePhish</span>: Platform integrated with <span class="key-term">TheHive</span> (case management), <span class="key-term">MISP</span> (threat intelligence), and <span class="key-term">Cortex</span> (automated analysis)</li>
            <li>Automates analysis of suspicious emails reported by users</li>
            <li>Classifies emails as: Clean, Suspicious, or Malicious</li>
        </ul>

        <h3>Phishing Detection Tools</h3>
        <ul>
            <li><span class="key-term">Netcraft</span>: Detects phishing sites and provides anti-phishing protection</li>
            <li><span class="key-term">PhishTank</span>: Collaborative database of verified phishing URLs</li>
            <li><span class="key-term">ScanURL</span>: Verifies URL safety before accessing</li>
            <li><span class="key-term">VirusTotal</span>: Multi-engine analysis of files and URLs</li>
            <li><span class="key-term">AbuseIPDB</span>: Database of IPs reported as malicious</li>
            <li><span class="key-term">urlscan.io</span>: Safely scans and analyzes URLs</li>
        </ul>

        <h2>Email Header Analysis</h2>
        <p><strong>Key rule:</strong> <span class="key-term">Received</span> headers are read from <strong>BOTTOM to TOP</strong> to trace the message route.</p>
        <ul>
            <li><span class="key-term">From</span>: Can be easily spoofed</li>
            <li><span class="key-term">Return-Path</span>: Actual bounce address</li>
            <li><span class="key-term">Received</span>: Message route (each server adds one). Lowest header = origin</li>
            <li><span class="key-term">X-Originating-IP</span>: Actual origin IP of the sender</li>
            <li><span class="key-term">Message-ID</span>: Unique identifier generated by the sending server</li>
            <li><span class="key-term">X-Mailer</span>: Email client used</li>
        </ul>
        <p><strong>Forged headers:</strong> Attackers can forge most headers. The IH&R team must compare header info with server logs to detect inconsistencies.</p>

        <h3>Email Authentication: SPF, DKIM, DMARC</h3>
        <ul>
            <li><span class="key-term">SPF (Sender Policy Framework)</span>: Verifies that the sending server is authorized for the domain</li>
        </ul>
        <p><strong>SPF Results:</strong></p>
        <ul>
            <li><strong>None:</strong> Cannot verify (no SPF record)</li>
            <li><strong>Pass:</strong> Authorized server</li>
            <li><strong>Neutral:</strong> Domain owner cannot verify</li>
            <li><strong>Fail:</strong> Server NOT authorized (email should be rejected)</li>
            <li><strong>SoftFail:</strong> Probably not authorized (accept but flag)</li>
            <li><strong>TempError / PermError:</strong> Temporary or permanent verification error</li>
        </ul>
        <ul>
            <li><span class="key-term">DKIM (DomainKeys Identified Mail)</span>: Digital message signature that verifies integrity</li>
        </ul>
        <p><strong>DKIM Results:</strong></p>
        <ul>
            <li><strong>Pass:</strong> Valid signature</li>
            <li><strong>Neutral:</strong> Syntactically acceptable result but not verifiable</li>
            <li><strong>Fail:</strong> Invalid signature (message altered or forged)</li>
            <li><strong>Policy:</strong> Signature not verifiable by domain policy</li>
            <li><strong>TempError / PermError:</strong> Temporary or permanent error</li>
        </ul>
        <ul>
            <li><span class="key-term">DMARC (Domain-based Message Authentication, Reporting and Conformance)</span>: Policy that combines SPF + DKIM to decide what to do with emails that fail authentication (none/quarantine/reject)</li>
        </ul>

        <h3>Email Validity Verification</h3>
        <ul>
            <li><span class="key-term">Email Dossier</span>: Email address verification</li>
            <li><span class="key-term">Hunter's Email Verifier</span>: Verifies account existence and validity</li>
        </ul>

        <h3>Examine Origin IP</h3>
        <ul>
            <li>Use <span class="key-term">WHOIS lookup</span> to obtain geographic and organizational information about the IP</li>
            <li>Identify ISP, address, country of the original sender</li>
        </ul>

        <h3>Header Analysis Tools</h3>
        <ul>
            <li><span class="key-term">MxToolbox</span>: Complete email header analysis</li>
            <li><span class="key-term">Google Admin Toolbox</span>: Integrated header analyzer</li>
            <li>Email Header Analyzer (dnschecker.org)</li>
            <li>EmailSherlock</li>
        </ul>

        <h3>Email Tracking Tools</h3>
        <ul>
            <li><span class="key-term">eMailTrackerPro</span>: Traces email to origin location, analyzes headers, reveals geographic location and sender IP</li>
            <li>MailTracker, Zendio, Trace Email, Email Tracer, G-Lock Analytics</li>
        </ul>

        <h2>Email Log Analysis</h2>
        <h3>System Logs (IIS)</h3>
        <ul>
            <li>Default IIS log location: <span class="key-term">%SystemDrive%\\inetpub\\logs\\LogFiles</span></li>
            <li>Steps: Run "inetmgr" → Sites → Select site → Logging → view Directory</li>
        </ul>

        <h3>Microsoft Exchange Server Logs</h3>
        <ul>
            <li>Microsoft Exchange uses <span class="key-term">ESE (Extensible Storage Engine)</span> with <span class="key-term">MAPI</span></li>
            <li>Files to analyze: <strong>.edb</strong> (MAPI info), <strong>.stm</strong> (non-MAPI info), checkpoints, temporaries</li>
            <li>Checkpoint files: determine if data was lost since last backup</li>
            <li>Temporary files: info received by busy server, recoverable for investigation</li>
            <li>Transaction logs: preserve database modifications, determine if email was sent/received</li>
            <li>Use <span class="key-term">Windows Event Viewer</span> for tracking logs and diagnostic logs</li>
            <li>Use <span class="key-term">PAL (Performance Analysis of Logs)</span> for monitoring and analysis</li>
            <li>PowerShell command: <span class="key-term">Get-MessageTrackingLog</span> to trace email flow</li>
        </ul>

        <h3>Linux Server Logs</h3>
        <ul>
            <li>Emails sent with <span class="key-term">sendmail</span> which uses <span class="key-term">Syslog</span> for logs</li>
            <li>Config: <strong>/etc/syslog.conf</strong> → log location: <span class="key-term">/var/log/maillog</span></li>
            <li>Contains: source/destination IPs, timestamps, and metadata to validate headers</li>
        </ul>

        <h3>Network Logs (Pfsense Firewall)</h3>
        <ul>
            <li>Verify timeline and IPs by comparing header info with router/firewall logs</li>
            <li>Pfsense GUI: Status → System Logs → filter entries with Advance Log Filter</li>
        </ul>

        <h3>SMTP Logs</h3>
        <ul>
            <li>Location: <span class="key-term">C:\\WINDOWS\\system32\\LogFiles\\SMTPSVC1</span></li>
            <li>Steps: IIS Manager → SMTP Virtual Server → Properties → Enable Logging → Advanced tab</li>
            <li>Tool: <span class="key-term">EventLog Analyzer</span> (ManageEngine) for server-level email log analysis</li>
        </ul>

        <h3>Important SMTP Codes</h3>
        <ul>
            <li><strong>220:</strong> Service ready</li>
            <li><strong>250:</strong> Requested mail action OK, completed</li>
            <li><strong>354:</strong> Start mail input; end with "."</li>
            <li><strong>421:</strong> Service unavailable, closing channel</li>
            <li><strong>450:</strong> Mailbox unavailable</li>
            <li><strong>500:</strong> Syntax error, command unrecognized</li>
            <li><strong>550:</strong> Requested action not taken: mailbox unavailable</li>
            <li><strong>552:</strong> Exceeded storage allocation</li>
            <li><strong>553:</strong> Mailbox name not allowed</li>
        </ul>

        <h2>Email Incident Eradication</h2>
        <ul>
            <li>Collect incident details (URL, hostname, subject, sender, IP) via header analysis and <strong>block on servers, security tools, and network devices</strong></li>
            <li>Immediately alert employees and train them to diagnose</li>
            <li>Update anti-phishing/anti-spam tools with new signatures</li>
            <li>Identify common patterns and block on SMTP server</li>
            <li>Review SMTP logs to find similar emails sent to other employees and delete them</li>
            <li>Use <span class="key-term">DNS blackholing</span> to block IPs from malicious emails</li>
            <li>Seek help from government agencies and <span class="key-term">APWG</span> (Anti-Phishing Working Group)</li>
            <li>Block and remove impacted accounts, issue new accounts</li>
            <li>All employees change passwords + implement <span class="key-term">MFA</span></li>
            <li>Implement multi-verification policies for financial transactions</li>
            <li>Blacklist malicious sites and disable automatic downloads</li>
            <li>Scan affected systems with next-gen antivirus</li>
            <li>Install browser extensions that detect phishing/spam</li>
            <li>Use encryption or VPN for email communications</li>
            <li>Deploy tools: <span class="key-term">SPAMfighter, SpamTitan, MailWasher</span></li>
            <li>Inform organizations/banks whose email was spoofed</li>
            <li>Patch exploited vulnerabilities + root cause analysis</li>
            <li>Review DNS logs to find accounts that accessed malicious domains</li>
            <li>Restore affected systems with trusted backups</li>
        </ul>

        <h3>Reporting Phishing to Email Providers</h3>
        <ul>
            <li><strong>Gmail:</strong> Three dots → Report spam / Report phishing</li>
            <li><strong>Outlook:</strong> Three dots (More Actions) or Report button → Report junk / Report phishing</li>
            <li><strong>Yahoo Mail:</strong> Checkbox → Spam option in toolbar</li>
        </ul>

        <h2>Recovery after Email Incidents</h2>
        <ul>
            <li>Change passwords of affected accounts and related accounts. Permanently delete compromised accounts and issue new ones</li>
            <li>Inform banks and financial institutions → block compromised accounts</li>
            <li>Restore compromised systems using backups: scan, update, and patch</li>
            <li>Contact <span class="key-term">law enforcement</span> with details: attacker email, receiver email, organization name/location, banking data, SWIFT number, date/time, transaction amount</li>
            <li>File insurance claim in case of large financial loss</li>
            <li>Verify with bank if transactions can be reversed (CEO scam)</li>
            <li>File complaint with cybercrime department: date/time, amount lost, fraudulent IP/email, phishing history</li>
            <li>Complete system backup before remediation + update software with patches</li>
        </ul>

        <h3>Recovering Deleted Emails</h3>
        <ul>
            <li><strong>Gmail:</strong> Deleted emails go to Trash (not completely deleted). Go to Trash → select email → Move to inbox/folder</li>
            <li><strong>Outlook:</strong> Deleted Items → select → Restore. If Deleted Items is empty: Recover Items from Server</li>
            <li><strong>Yahoo:</strong> Trash → select → Move to desired folder</li>
        </ul>
    `;

    // Module 6
    moduleContent[6].title_en = "Handling and Responding to Network Security Incidents";
    moduleContent[6].content_en = `
        <h2>Network Security Incidents - Key Concepts</h2>
        <p>Organizational networks are systematically scanned and hijacked by attackers. The IH&R team must detect, contain, and eradicate network incidents to ensure business continuity.</p>

        <h3>Network Incident Categories (Table 6.1)</h3>
        <ul>
            <li><span class="key-term">Unauthorized Access Incidents</span>: Unauthorized access to systems/network
                <ul>
                    <li>Reconnaissance: Ping Sweeping, Port Scanning, DNS Footprinting</li>
                    <li>Sniffing and Spoofing, Eavesdropping, ARP/DNS Poisoning</li>
                    <li>Firewall/IDS evasion, Brute-force, Social Engineering</li>
                </ul>
            </li>
            <li><span class="key-term">Inappropriate Usage Incidents</span>: Acceptable use policy violations
                <ul>
                    <li>Downloading malware, pirated software, or pornography</li>
                    <li>Inappropriate email usage, data leakage</li>
                    <li>Providing credentials on spoofed sites</li>
                </ul>
            </li>
            <li><span class="key-term">Denial-of-Service (DoS/DDoS)</span>: Preventing access to resources
                <ul>
                    <li><strong>Volumetric:</strong> UDP flood, ICMP flood, Ping of Death, Smurf, Pulse wave, Zero-day, Spoofed IP packet flood</li>
                    <li><strong>Protocol:</strong> SYN flood, Fragmentation, SYN-ACK flood, ACK flood, TCP state exhaustion, RST attack, TCP SACK panic</li>
                    <li><strong>Application Layer:</strong> HTTP flood, Slowloris, UDP application layer flood, DDoS extortion</li>
                </ul>
            </li>
            <li><span class="key-term">Wireless Network Incidents</span>: Wireless network threats
                <ul>
                    <li><strong>Access control:</strong> War driving, Rogue APs, MAC spoofing, AP misconfiguration, Ad hoc associations</li>
                    <li><strong>Integrity:</strong> Data frame injection, WEP injection, Bit-flipping, RADIUS replay</li>
                    <li><strong>Confidentiality:</strong> Evil twin AP, Honeypot AP, Session hijacking, MitM, Traffic analysis, Cracking WEP</li>
                    <li><strong>Availability:</strong> Disassociation, De-authenticate flood, Beacon flood, DoS, AP theft</li>
                    <li><strong>Authentication:</strong> PSK cracking, LEAP cracking, VPN login cracking, Key reinstallation (KRACK), Identity theft</li>
                </ul>
            </li>
        </ul>

        <h2>Network Incident Preparation</h2>
        <ul>
            <li>Configure <span class="key-term">firewalls, IDS, IPS</span> to log all access attempts and send notifications</li>
            <li>Implement <span class="key-term">Syslog</span> or centralized logging for log backup in a single location</li>
            <li>Define clear roles and responsibilities for the IH&R team</li>
            <li>Prepare detection and containment tools (monitoring, traffic capture and analysis)</li>
            <li>Install <span class="key-term">network sniffers</span> and security solutions on all servers</li>
            <li>Maintain backups of important servers and keep them accessible</li>
            <li>Contact ISPs to learn about their IH&R processes</li>
            <li>Maintain contact with <span class="key-term">CERT</span> and the <span class="key-term">Internet Crime Complaint Center (IC3)</span></li>
            <li>Configure IDS/IPS to detect DoS traffic</li>
            <li>Define data collection strategies and capture types (limited vs full packet capture)</li>
            <li>Maintain cryptographic hashes of critical files</li>
            <li>Develop spare workstations, clean OS images, and sandbox environments</li>
        </ul>

        <h3>Network Analysis Toolkit</h3>
        <ul>
            <li><strong>Windows:</strong> <span class="key-term">Nmap, Wireshark, TCPView, NetFlow Traffic Analyzer, Stealthwatch, netstat, nbtstat, tracert, Zeek, Splunk, Capsa</span></li>
            <li><strong>Linux:</strong> <span class="key-term">Nmap, Wireshark, netstat, tcpdump, Nagios XI, NetHogs</span> + commands: traceroute, ARP, ifconfig, dig, ss, mtr, nslookup, lsof, dd, grep, ps aux, lastlog</li>
            <li><strong>Vulnerability Analysis:</strong> <span class="key-term">SanerNow, Nexpose, Tenable.io, Nessus, GFI LanGuard, OpenVAS, Intruder</span></li>
        </ul>

        <h2>Network Incident Detection and Validation</h2>
        <h3>General Indicators</h3>
        <ul>
            <li>Firewall, IDS, honeypot, DMZ, and antivirus alerts</li>
            <li>Multiple login failures (possible credential theft or DoS)</li>
            <li>Unauthorized privilege escalation</li>
            <li>Unknown/unregistered connections on the network</li>
            <li>Protocol violations (SSL, TLS)</li>
            <li>Increased traffic/bandwidth consumption</li>
            <li>Malformed packets, unexpected server restarts</li>
            <li>Use of unauthorized, idle, or open ports</li>
            <li>Network unavailable (sign of DoS/DDoS)</li>
            <li>Outbound traffic anomalies (large file uploads to personal cloud)</li>
            <li>Suspicious DNS activity or spikes in DNS queries</li>
        </ul>

        <h3>Windows Indicators</h3>
        <ul>
            <li>Slow performance, automatic restarts, system crashes</li>
            <li>Automatic download of malicious files</li>
            <li>Unauthorized changes to the Windows registry and <span class="key-term">run keys</span> or startup folder</li>
            <li>Legitimate process identified as malware by <span class="key-term">Microsoft Defender for Endpoint</span></li>
            <li>Unencrypted remote connections, abnormally high CPU on web server</li>
            <li>Creation of new accounts with high privileges</li>
        </ul>

        <h3>Linux Indicators</h3>
        <ul>
            <li>Sudden increase in server thread load</li>
            <li>Unauthorized connections from unknown IPs</li>
            <li>Excessive <span class="key-term">sudo</span> and <span class="key-term">SSH login</span> attempts</li>
            <li>Changes in log files or system configuration files</li>
            <li>Unauthorized SSH key creation, suspicious processes</li>
            <li>Presence of <span class="key-term">rogue DHCP servers</span> and guest accounts with escalated privileges</li>
        </ul>

        <h3>Detection Tools</h3>
        <ul>
            <li><span class="key-term">Flowmon ADS</span>: Detects network anomalies using NetFlow/IPFIX, traffic histograms, DNS metadata. Based on Suricata IDS</li>
            <li><span class="key-term">Wireshark</span>: Detect ARP poisoning (Preferences > Protocols > ARP/RARP > Detect ARP request storm). Analyze > Expert Information to see "ARP packet storm detected"</li>
            <li><span class="key-term">Capsa Portable Network Analyzer</span>: Quick detection of ARP poisoning and flooding</li>
            <li><span class="key-term">Zeek (BZAR package)</span>: Detect SMB/RPC indicators and lateral movement. Generates smb_mapping.log, smb_files.log, dce_rpc.log, notice.log</li>
            <li><span class="key-term">Cisco Stealthwatch</span>: Detect password spray via Brute Force Login events</li>
            <li><span class="key-term">Splunk Enterprise Security</span>: Investigate malware events, review infected hosts, generate CSV reports</li>
        </ul>

        <h3>Sniffing Detection Techniques</h3>
        <ul>
            <li><strong>Promiscuous Mode:</strong> Check for devices in promiscuous mode with Nmap</li>
            <li><strong>IDS:</strong> Check for MAC address changes (e.g., router MAC)</li>
            <li><strong>Ping Method:</strong> Send ping with correct IP but incorrect MAC - sniffer will respond</li>
            <li><strong>ARP Method:</strong> Send ARP request with invalid broadcast</li>
            <li><strong>DNS Method:</strong> Sniffers generate detectable DNS reverse lookups</li>
        </ul>

        <h2>Handling Unauthorized Access Incidents</h2>
        <h3>Indicators</h3>
        <ul>
            <li><strong>Physical Intrusion:</strong> Unauthorized hardware, displaced parts</li>
            <li><strong>Configuration Changes:</strong> Open ports, NIC in promiscuous mode, privilege escalation</li>
            <li><strong>Network Changes:</strong> Unusual traffic, NIDS/HIDS alerts</li>
            <li><strong>Admin Changes:</strong> Backdoors, unauthorized remote access</li>
        </ul>
        <h3>Containment</h3>
        <ul>
            <li>Isolate affected systems, disable compromised services</li>
            <li>Eliminate the attacker's route, disable compromised accounts</li>
            <li>Implement <span class="key-term">two-factor authentication</span>, block IPs at the firewall</li>
        </ul>

        <h2>Handling Inappropriate Usage Incidents</h2>
        <ul>
            <li>Detect through review of <span class="key-term">login log entries</span></li>
            <li>Use <span class="key-term">Kiwi Log Viewer</span> and <span class="key-term">Splunk</span> to detect failed login attempts</li>
            <li>Analyze <span class="key-term">Audit Logon Events</span> in Windows AD (Group Policy > Default Domain Controllers Policy)</li>
            <li><strong>Key Event IDs:</strong> 4625 (failed logon), 4624 (successful logon)</li>
        </ul>

        <h2>Handling DoS/DDoS Incidents</h2>
        <ul>
            <li><strong>Mitigation:</strong> <span class="key-term">Rate limiting, Blackholing/Sinkholing, Scrubbing centers</span></li>
            <li>Throttle vs deny rules to allow legitimate traffic</li>
            <li>Strong encryption: <span class="key-term">WPA3 and AES 256</span></li>
        </ul>

        <h2>Handling Wireless Incidents</h2>
        <h3>Detection</h3>
        <ul>
            <li><strong>AP Monitoring:</strong> Audit APs (MAC, SSID). Tools: <span class="key-term">WifiChannelMonitor, PRTG</span></li>
            <li><strong>Wireless Client Monitoring:</strong> Monitor clients, blacklist/whitelist by MAC</li>
            <li><strong>Traffic Monitoring:</strong> Detect DoS via de-auth/de-association. <span class="key-term">Wireshark, NetStumbler, Kismet</span></li>
        </ul>
        <h3>Containment</h3>
        <ul>
            <li>Disable SSID broadcasting, enable <span class="key-term">WPA3</span></li>
            <li>MAC address filtering, use <span class="key-term">WIPS</span></li>
        </ul>
        <h3>Eradication</h3>
        <ul>
            <li>Passphrase of at least <span class="key-term">20 characters</span>, always <span class="key-term">WPA3</span></li>
            <li>Implement <span class="key-term">NAC/NAP, MFA, EAP, IEEE 802.1X</span></li>
            <li>Disable <span class="key-term">UPnP</span>, implement <span class="key-term">VLAN isolation</span></li>
        </ul>
        <h3>Recovery</h3>
        <ul>
            <li><span class="key-term">WPA3-Enterprise</span>, <span class="key-term">SSID cloaking</span>, additional <span class="key-term">IPsec</span></li>
            <li>Disable <span class="key-term">WPS</span>, enable guest network</li>
            <li>Bluetooth: non-discoverable mode, encrypt connections, minimum range</li>
        </ul>

        <h2>Case Study: DDoS on Google Cloud (2022)</h2>
        <ul>
            <li>Layer 7 DDoS attack: peak of <span class="key-term">46 million rps</span></li>
            <li>Detected by <span class="key-term">Cloud Armor Adaptive Protection</span></li>
            <li>5,256 IPs across 132 countries, 1,169 Tor nodes. Method: <span class="key-term">HTTP Pipelining</span>, <span class="key-term">Meris</span> family</li>
            <li>Response: throttle instead of deny. Lesson: <span class="key-term">defense-in-depth</span></li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
            <li>Deploy <span class="key-term">DLP, CDR, ACLs, ZTNA, honeypots, NAT, TLS, VPN, NIPS</span></li>
            <li>Segment network with <span class="key-term">VLANs and subnets</span></li>
            <li>Install firewalls, anti-DDoS, load balancer, IDS, IPS</li>
            <li>Transparent proxy and domain whitelisting</li>
        </ul>

        <h2>Network Log Analysis Tools</h2>
        <ul>
            <li><span class="key-term">Kiwi Syslog Server</span>: Captures syslog, SNMP traps, Windows event logs</li>
            <li><span class="key-term">ManageEngine Log360, InsightOps (Rapid7), Splunk, Graylog, Logz.io</span></li>
        </ul>
    `;

    // Module 7
    moduleContent[7].title_en = "Handling and Responding to Web Application Security Incidents";
    moduleContent[7].content_en = `
        <h2>Introduction to Web Incident Handling</h2>
        <p>Web applications are an integral component of online businesses and have become an easy target for attacks such as defacement, injection, data breach, and zero-day attacks. Organizations must implement incident response plans to detect, remediate, contain, eradicate, and recover.</p>

        <h3>Causes of Web Incidents</h3>
        <ul>
            <li><span class="key-term">Insecure Coding</span>: Poor coding practices (unencrypted data in transit/storage, sensitive parameters in URLs, incorrect input sanitization)</li>
            <li><span class="key-term">Configuration Errors</span>: Incorrect timeouts, improper access controls, server misconfiguration</li>
            <li><span class="key-term">Platform Vulnerabilities</span>: Vulnerabilities across layers (UI, app logic, backend DB) - code execution, buffer overflows, race conditions</li>
            <li><span class="key-term">Logic Errors</span>: Coding flaws that cause performance issues and unintended output</li>
        </ul>

        <h2>OWASP Top 10 Application Security Risks (2021)</h2>
        <ul>
            <li><span class="key-term">A01 - Broken Access Control</span>: Poorly implemented restrictions. Attackers access unauthorized functionality/data, modify other users' data</li>
            <li><span class="key-term">A02 - Cryptographic Failures</span>: Sensitive data transmitted in cleartext over HTTP. Weak, old, or poorly managed cryptographic keys</li>
            <li><span class="key-term">A03 - Injection</span>: SQL, LDAP, OS command injection. Untrusted data sent to an interpreter as part of a command</li>
            <li><span class="key-term">A04 - Insecure Design</span>: Incorrect implementation of security controls during development. Allows session hijacking, credential theft, spoofing, MitM</li>
            <li><span class="key-term">A05 - Security Misconfiguration</span>: Manual/ad hoc configuration, insecure defaults, open S3 buckets, misconfigured HTTP headers, error messages with sensitive info. Includes XML External Entity (XXE) - billion laughs attack</li>
            <li><span class="key-term">A06 - Vulnerable and Outdated Components</span>: Unpatched libraries, frameworks, and modules running with the same privileges as the application</li>
            <li><span class="key-term">A07 - Identification and Authentication Failures</span>: Allows brute-forcing, password spraying, automated attacks to compromise passwords, keys, or session tokens</li>
            <li><span class="key-term">A08 - Software and Data Integrity Failures</span>: Auto-updates from unauthorized sources without integrity verification. Insecure deserialization</li>
            <li><span class="key-term">A09 - Security Logging and Monitoring Failures</span>: Insufficient logs, local storage only, inadequate alerting mechanisms</li>
            <li><span class="key-term">A10 - Server-Side Request Forgery (SSRF)</span>: App fetches remote resources without verifying user-supplied URL. Allows abusing server functionality to read/modify internal resources, even behind firewalls</li>
        </ul>

        <h2>Web Incident Preparation</h2>
        <ul>
            <li>Implement <span class="key-term">WAF (Web Application Firewall)</span> and configure detection rules</li>
            <li>Enable detailed logging on web servers and applications</li>
            <li>Implement <span class="key-term">SAST</span> (Static Application Security Testing) and <span class="key-term">DAST</span> (Dynamic Application Security Testing) in the CI/CD pipeline</li>
            <li>Use <span class="key-term">SCA</span> (Software Composition Analysis) to identify component vulnerabilities</li>
            <li>Configure file integrity monitoring</li>
            <li>Implement <span class="key-term">Content Security Policy (CSP)</span> headers</li>
        </ul>

        <h2>Web Incident Detection</h2>
        <h3>Attack Indicators</h3>
        <ul>
            <li>Unusual parameters in URLs (SQL characters: ' OR 1=1 --, UNION SELECT)</li>
            <li>Injection patterns in web server logs</li>
            <li>Multiple HTTP 4xx/5xx errors in rapid sequence</li>
            <li><span class="key-term">Directory traversal</span> attempts (../../etc/passwd)</li>
            <li>Suspicious User-Agent strings (sqlmap, Nikto, etc.)</li>
            <li>Access to sensitive files (web.config, .env, wp-config.php)</li>
            <li>Website defacement or modified content</li>
            <li>Unexpected increase in application errors</li>
        </ul>

        <h3>Web Log Analysis</h3>
        <ul>
            <li><span class="key-term">Access logs</span>: Record all HTTP requests (IP, timestamp, method, URI, status code, User-Agent)</li>
            <li><span class="key-term">Error logs</span>: Server and application errors</li>
            <li><span class="key-term">Application logs</span>: Application-specific logs (login attempts, database queries)</li>
            <li>Correlate events across multiple sources</li>
        </ul>

        <h2>Common Attacks and Response</h2>
        <h3>SQL Injection (SQLi)</h3>
        <ul>
            <li>Injection of malicious SQL code through inputs to manipulate the database</li>
            <li><strong>Detection:</strong> Patterns in logs such as ' OR, UNION SELECT, --comment</li>
            <li><strong>Prevention:</strong> <span class="key-term">Prepared statements/parameterized queries</span>, stored procedures with automated parameters</li>
            <li><strong>Recovery tools:</strong> <span class="key-term">ApexSQL Log</span> (recover DB tables), <span class="key-term">SysTools SQL Recovery</span> (recover corrupt MDF/NDF files)</li>
        </ul>

        <h3>Cross-Site Scripting (XSS)</h3>
        <ul>
            <li><span class="key-term">Stored XSS</span>: Script persistently stored on the server</li>
            <li><span class="key-term">Reflected XSS</span>: Non-persistent script reflected from URL</li>
            <li><span class="key-term">DOM-based XSS</span>: Client-side DOM manipulation</li>
            <li><strong>Prevention:</strong> <span class="key-term">Output encoding, CSP, input validation/sanitization</span></li>
            <li>Disable dangerous nodes like &lt;IFRAME&gt; and &lt;SCRIPT&gt;</li>
        </ul>

        <h3>Cross-Site Request Forgery (CSRF)</h3>
        <ul>
            <li>Force an authenticated user to execute unwanted actions</li>
            <li><strong>Prevention:</strong> <span class="key-term">CSRF tokens, SameSite cookies</span></li>
        </ul>

        <h2>Web Incident Containment</h2>
        <ul>
            <li>Block attacker IPs in WAF and firewall</li>
            <li>Implement additional WAF rules for the specific attack vector</li>
            <li>Temporarily disable vulnerable functionality</li>
            <li>Revoke compromised sessions</li>
            <li>Reset credentials for affected users</li>
        </ul>

        <h2>Eradication and Recovery</h2>
        <ul>
            <li>Patch vulnerabilities in source code</li>
            <li>Remove injected malicious code (webshells, backdoors)</li>
            <li>Restore compromised data from backups</li>
            <li>Verify system file integrity</li>
            <li>Review filesystems: <span class="key-term">wp-content/plugins</span> and <span class="key-term">wp-content/mu-plugins</span> for unknown plugins</li>
            <li>Use short-lived certificates to prevent persistence attacks</li>
        </ul>

        <h2>Web Coding Best Practices</h2>
        <ul>
            <li>Restrict input field length and character type in HTML/JS to prevent <span class="key-term">buffer overflow</span></li>
            <li>Implement <span class="key-term">Pragma: no-cache</span> and <span class="key-term">Cache-Control: no-cache, no-store</span> for sensitive pages</li>
            <li>Store encrypted cookies during data transfer</li>
            <li>Implement <span class="key-term">CAPTCHA</span> on comment forms</li>
            <li>Use stored procedures with parameters to prevent SQLi</li>
            <li>Move sensitive files (config, app files) to secure folders not accessible by URL</li>
            <li>Do not display debugging info to users in production</li>
            <li>Encrypt data <span class="key-term">at rest</span> and <span class="key-term">in transit</span></li>
            <li>Use <span class="key-term">semantic HTML elements</span> (&lt;header&gt;, &lt;footer&gt;) instead of &lt;div&gt;</li>
            <li>Session tokens with <span class="key-term">server-side timeout</span> (not client-side, which can be bypassed)</li>
            <li>Implement <span class="key-term">absolute timeout</span> that forces re-login</li>
            <li>Include <span class="key-term">SCA or DAST</span> in the CI/CD pipeline</li>
        </ul>

        <h2>Web Application Fuzz Testing</h2>
        <ul>
            <li>Testing technique that provides random/invalid data to the application</li>
            <li>Looks for crashes, memory leaks, and unexpected behaviors</li>
            <li>Tools: <span class="key-term">OWASP ZAP, Burp Suite, Peach Fuzzer</span></li>
        </ul>

        <h2>Case Study: GoDaddy Data Breach (2021)</h2>
        <ul>
            <li>Unauthorized access to WordPress hosting environment for <span class="key-term">70 days undetected</span></li>
            <li>sFTP credentials stored in <span class="key-term">plain text</span> without salt or public key authentication</li>
            <li>Affected up to <span class="key-term">1.2 million</span> WordPress customers (emails, customer numbers)</li>
            <li>Exposed: WordPress Admin passwords, sFTP/DB credentials, SSL private keys</li>
            <li>Affected services: 123Reg, Domain Factory, Heart Internet, Host Europe, Media Temple, tsoHost</li>
            <li><strong>Response:</strong> Block unauthorized access, reset sFTP/WordPress/DB passwords, issue new SSL certificates</li>
            <li><strong>Lesson:</strong> Importance of continuous monitoring, frequent password changes, short-lived certificates</li>
        </ul>

        <h2>Key Tools</h2>
        <ul>
            <li><span class="key-term">WAF</span>: ModSecurity, AWS WAF, Cloudflare WAF</li>
            <li><span class="key-term">DAST</span>: OWASP ZAP, Burp Suite</li>
            <li><span class="key-term">SAST</span>: SonarQube, Checkmarx</li>
            <li><span class="key-term">ApexSQL Log</span>: SQL Server database recovery</li>
            <li><span class="key-term">SysTools SQL Recovery</span>: Corrupt MDF/NDF file recovery</li>
            <li><span class="key-term">CrowdStrike Falcon Orchestrator</span>: Workflow automation, case management, forensics</li>
        </ul>
    `;

    // Module 8
    moduleContent[8].title_en = "Handling and Responding to Cloud Security Incidents";
    moduleContent[8].content_en = `
        <h2>Introduction to Cloud Computing</h2>
        <p>Cloud computing is the on-demand delivery of IT capabilities where infrastructures and applications are provided as metered services over networks. Examples: <span class="key-term">Microsoft Azure, Amazon AWS, Dropbox, Salesforce</span>.</p>

        <h3>Cloud Computing Characteristics</h3>
        <ul>
            <li><span class="key-term">On-demand Self-service</span>: Resource provisioning without human interaction with the provider</li>
            <li><span class="key-term">Distributed Storage</span>: Greater scalability, availability, and reliability (but compliance risks)</li>
            <li><span class="key-term">Rapid Elasticity</span>: Quick scaling up/down based on demand</li>
            <li><span class="key-term">Automated Management</span>: Minimizes human intervention, reduces cost and error</li>
            <li><span class="key-term">Broad Network Access</span>: Access via multiple platforms (laptops, mobile, PDAs)</li>
            <li><span class="key-term">Resource Pooling</span>: Multi-tenant with dynamically assigned resources</li>
            <li><span class="key-term">Measured Service</span>: "Pay-per-use" model with full transparency</li>
            <li><span class="key-term">Virtualization Technology</span>: Rapid scaling impossible in non-virtualized environments</li>
        </ul>

        <h3>Cloud Limitations</h3>
        <ul>
            <li>Limited control and flexibility, vulnerable to outages</li>
            <li>Security, privacy, and compliance concerns</li>
            <li>Contracts and lock-ins, network dependency</li>
            <li>Vulnerability from being fully online, difficulty migrating between providers</li>
        </ul>

        <h2>Service Models and Shared Responsibility</h2>
        <h3>Service Models</h3>
        <ul>
            <li><span class="key-term">IaaS</span>: CSP provides infrastructure (data centers, servers, storage). CC responsible for OS, middleware, apps, data, access control. Example: <span class="key-term">AWS EC2</span></li>
            <li><span class="key-term">PaaS</span>: CSP provides platform. CC responsible only for data, apps, and access control. Example: <span class="key-term">Azure App Service</span></li>
            <li><span class="key-term">SaaS</span>: CSP provides everything (software, storage, apps). CC only creates accounts and produces access control logs. Example: <span class="key-term">Office 365, Salesforce</span></li>
            <li><span class="key-term">SECaaS</span>: CC outsources security operations. CSP provides guaranteed response times</li>
            <li><span class="key-term">CaaS</span>: Container-based virtualization. CC can upload, organize, run, and scale containers</li>
            <li><span class="key-term">FaaS (Serverless)</span>: CC deploys functions that execute on-demand. CSP deploys applications without managing servers</li>
        </ul>

        <h3>Incident Responsibility by Model</h3>
        <ul>
            <li><strong>IaaS:</strong> CSP responsible for networking, storage, servers, virtualization. CC responsible for the rest</li>
            <li><strong>PaaS:</strong> CSP responsible for everything except data, apps, and access control</li>
            <li><strong>SaaS:</strong> CSP fully responsible for IH&R; CC produces access control logs</li>
        </ul>

        <h2>OWASP Top 10 Cloud Security Risks</h2>
        <ul>
            <li><span class="key-term">R1 - Accountability/Data Ownership</span>: Diffuse responsibility in multi-tenant cloud</li>
            <li><span class="key-term">R2 - User Identity Federation</span>: Identity management across multiple CSPs</li>
            <li><span class="key-term">R3 - Regulatory Compliance</span>: Complex regulatory compliance (data in multiple jurisdictions)</li>
            <li><span class="key-term">R4 - Business Continuity/Resiliency</span>: Business continuity in case of CSP failure</li>
            <li><span class="key-term">R5 - User Privacy/Secondary Use</span>: Secondary use of personal data by CSP</li>
            <li><span class="key-term">R6 - Service/Data Integration</span>: Secure integration between cloud services</li>
            <li><span class="key-term">R7 - Multi-tenancy/Physical Security</span>: Isolation between tenants</li>
            <li><span class="key-term">R8 - Incidence Analysis/Forensics</span>: Difficulty of forensics in the cloud</li>
            <li><span class="key-term">R9 - Infrastructure Security</span>: Port scanning, default passwords</li>
            <li><span class="key-term">R10 - Non-Production Environment Exposure</span>: Risk in development/test environments</li>
        </ul>

        <h2>Cloud IH&R Challenges (NIST Cloud Computing Forensic Science Challenges)</h2>
        <h3>Architecture & Identification</h3>
        <ul>
            <li>Deleted data difficult to recover (limited CSP backups)</li>
            <li>Data overwritten by other tenants in shared cloud</li>
            <li>Lack of interoperability between CSPs</li>
            <li>Single points of failure vs criminals with no single point of failure</li>
            <li>Malicious code can <span class="key-term">circumvent VM isolation</span></li>
            <li>Multiple venues and geolocations cause jurisdictional issues</li>
            <li>Cloud seizure can affect other tenants</li>
            <li>Segregation of potential evidence between tenants</li>
        </ul>
        <h3>Data Collection</h3>
        <ul>
            <li>Diminished data access and control for incident handlers</li>
            <li>Highly dynamic chain of dependencies between CSPs</li>
            <li>Data flexibly migrated between data centers and geolocations</li>
            <li>Data imaging and isolation challenging due to elasticity, auto-provisioning, multi-tenancy</li>
            <li>Live forensics difficult due to data volatility in cloud</li>
            <li>Ineffective <span class="key-term">cryptographic key management</span> prevents decrypting forensic data</li>
            <li>Ambiguous trust boundaries in multi-tenant environments</li>
        </ul>
        <h3>Logs</h3>
        <ul>
            <li>Logs may not be accessible to CC</li>
            <li>Timestamps not synchronized across distributed systems</li>
            <li>Log format not standardized between CSPs</li>
        </ul>

        <h2>Incident Handling by Platform</h2>
        <h3>Azure Security</h3>
        <ul>
            <li><span class="key-term">Azure Sentinel</span>: Cloud-native SIEM for threat detection</li>
            <li><span class="key-term">Azure Activity Log</span>: Records resource operations</li>
            <li><span class="key-term">Microsoft Defender for Cloud</span>: CSPM + workload protection</li>
            <li><span class="key-term">Azure Monitor</span>: Metrics, logs, and alerts</li>
            <li>Best practices: Use <span class="key-term">Azure AD MFA</span>, enable <span class="key-term">Azure Key Vault</span>, configure <span class="key-term">NSGs</span>, disable public storage access</li>
        </ul>

        <h3>AWS Security</h3>
        <ul>
            <li><span class="key-term">AWS CloudTrail</span>: Records ALL API calls for auditing</li>
            <li><span class="key-term">Amazon GuardDuty</span>: Intelligent threat detection</li>
            <li><span class="key-term">Amazon CloudWatch</span>: Metrics monitoring and alarms</li>
            <li><span class="key-term">AWS Security Hub</span>: Centralized security view</li>
            <li><span class="key-term">IAM Access Analyzer</span>: Detects excessive resource access</li>
            <li><span class="key-term">AWS Config</span>: Evaluates resource configurations</li>
            <li><span class="key-term">Amazon Macie</span>: Discovers and protects sensitive data in S3</li>
            <li>Best practices: <span class="key-term">Least privilege IAM</span>, encrypt S3 buckets, enable versioning, disable public access</li>
        </ul>

        <h3>GCP Security</h3>
        <ul>
            <li><span class="key-term">Security Command Center</span>: Centralized GCP security view</li>
            <li><span class="key-term">Cloud Audit Logs</span>: Records administrative and data access activity</li>
            <li><span class="key-term">Chronicle</span>: Google's SIEM for threat detection</li>
            <li><span class="key-term">Dynatrace</span>: Google Cloud monitoring with metrics, logs, and traces</li>
            <li>Additional tools: <span class="key-term">CrowdStrike Falcon, GCP Monitor, Datadog, ManageEngine</span></li>
            <li>Best practices: Use <span class="key-term">IAM frameworks</span>, disable public storage buckets, enforce data retention policies</li>
        </ul>

        <h2>Case Study: Kaseya VSA Ransomware (July 2021)</h2>
        <ul>
            <li><span class="key-term">Supply chain attack</span> via Kaseya VSA (remote monitoring product for MSPs)</li>
            <li><span class="key-term">REvil</span> ransomware delivered by exploiting <span class="key-term">zero-day vulnerabilities</span></li>
            <li>Payload in AGENT.CRT (Base-64 encoded) at C:\\KWORKING\\, decoded with certutil.exe</li>
            <li>Disabled Windows Defender with PowerShell (Set-MpPreference -DisableRealtimeMonitoring)</li>
            <li>Demanded <span class="key-term">$70 million in BTC</span> for universal decryptor</li>
            <li>Network IOCs: 35.226.94.113, 161.35.239.148, 162.253.124.162</li>
            <li>Endpoint IOCs: agent.crt, agent.exe, mpsvc.dll (ransomware payload)</li>
            <li>Web log indicators: POST /dl.asp, GET /done.asp, POST /cgi-bin/KUpload.dll</li>
            <li><strong>Containment:</strong> Shut down VSA SaaS servers, notify FBI and CISA</li>
            <li><strong>Recovery:</strong> Fix SaaS servers, distribute patches, universal decryption key</li>
            <li><strong>Lesson:</strong> Importance of timely patching, <span class="key-term">zero-trust</span> model</li>
        </ul>

        <h2>Cloud Best Practices (includes CSA Best Practices)</h2>
        <ul>
            <li>Enforce <span class="key-term">data protection, backup, and retention</span> mechanisms</li>
            <li>Enforce SLAs for patching and vulnerability remediation</li>
            <li>CSPs should undergo regular <span class="key-term">AICPA SAS 70 Type II</span> audits</li>
            <li>Implement robust <span class="key-term">MFA</span> authentication and <span class="key-term">least privilege</span></li>
            <li>Encrypt data at rest and in transit with <span class="key-term">SSL/TLS</span></li>
            <li>Implement <span class="key-term">CASB</span> (Cloud Access Security Broker)</li>
            <li>Use <span class="key-term">UBA</span> (User Behavior Analytics) to identify irregularities</li>
            <li>Employ <span class="key-term">EDR/EPP</span> for endpoint security on cloud workloads</li>
            <li>Audit <span class="key-term">IAM, network, and encryption</span> configurations</li>
            <li>Use VPNs for customer data and ensure complete deletion (including replicas) when disposing data</li>
            <li>Application whitelisting + <span class="key-term">memory exploit prevention</span></li>
            <li>24x7x365 physical security</li>
        </ul>

        <h3>CSA Cloud Security Domains</h3>
        <ul>
            <li><span class="key-term">Governance & Enterprise Risk Management</span>: Difference between governance and risk management in cloud</li>
            <li><span class="key-term">Legal Issues, Contracts, Electronic Discovery</span>: Legal implications of moving data to the cloud</li>
            <li><span class="key-term">Compliance & Audit Management</span>: Cloud interactions with the regulatory environment</li>
            <li><span class="key-term">Information Governance</span>: Re-examine information management when migrating</li>
            <li><span class="key-term">Business Continuity</span>: Risk-based approach to management plan access</li>
            <li><span class="key-term">Infrastructure Security</span>: Virtual network security considerations</li>
            <li><span class="key-term">Virtualization</span>: Effects of virtualization on architectural security</li>
            <li><span class="key-term">Incident Response</span>: Cloud gaps in IR</li>
            <li><span class="key-term">Application Security</span>: Shared security models change app security</li>
            <li><span class="key-term">Data Security & Encryption</span>: Risk-based approach to data encryption</li>
        </ul>

        <h2>Cloud Security Tools</h2>
        <ul>
            <li><span class="key-term">CSPM</span>: Cloud Security Posture Management - identifies misconfigurations</li>
            <li><span class="key-term">CASB</span>: Cloud Access Security Broker - security policy intermediary</li>
            <li><span class="key-term">CWPP</span>: Cloud Workload Protection Platform</li>
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
