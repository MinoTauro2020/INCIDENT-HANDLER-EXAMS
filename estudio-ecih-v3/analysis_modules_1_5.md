# ECIH v3 - Analysis of Modules 1-5: Key Testable Concepts

> Extracted from EC-Council Certified Incident Handler (ECIH) v3 Courseware
> Exam: 212-89
> Focus: Specific facts, definitions, tools, processes, and classifications for exam preparation

---

## MODULE 1: Introduction to Incident Handling and Response

### 1.1 Key Definitions

- **Information Security**: Defined as a "state of well-being of information and infrastructure in which the possibility of theft, tampering, and disruption of information and services is kept low or tolerable"
- **Incident Handling and Response (IH&R)**: The process of taking organized and careful steps when reacting to a security incident or a cyberattack. It is a set of procedures, actions, and measures taken against an unexpected event occurrence
- **Threat**: A potential occurrence of an undesirable event that can damage and disrupt the operational and functional activities of an organization
- **Vulnerability**: A weakness in the design, implementation, operation, or internal control of a system
- **Risk**: The degree of uncertainty or expectation of potential damage that an adverse event can cause
- **Incident Response Automation**: The process of superseding manual IR actions with automatic IR actions by using machines and tools
- **Incident Response Orchestration**: A process of combining human responses, processes, and technologies to obtain better results
- **Threat Hunting**: The process of recognizing or discovering any "unknown threats" that an organization may face, so that necessary defense mechanisms can be applied

### 1.2 Elements of Information Security (CIA + Additional)

- **Confidentiality**
- **Integrity**
- **Availability**
- **Authenticity**
- **Non-repudiation**

### 1.3 Classification of Threat Sources

- **Natural Threats**: Fires, floods, power failures, lightning, meteors, earthquakes
- **Unintentional Threats**: Negligence, human errors, misconfigurations
- **Intentional Threats**: Deliberate attacks by insiders or outsiders

### 1.4 Classification of Attacks (IATF - 5 Categories)

According to **IATF (Information Assurance Technical Framework)**, security attacks are classified into **five categories**:

1. **Passive Attacks**: Intercepting and monitoring network traffic and data flow on the target network (e.g., sniffing, eavesdropping). Do NOT tamper with data.
2. **Active Attacks**: Tampering with data in transit or disrupting communication/services (e.g., DoS, session hijacking, SQL injection, MitM)
3. **Close-in Attacks**: Performed when attacker is in close physical proximity to the target (e.g., social engineering, shoulder surfing, dumpster diving, eavesdropping)
4. **Insider Attacks**: Performed by trusted insiders. More dangerous than external attacks because insiders are familiar with network architecture, security policies. Causes: revenge, disrespect, frustration, lack of security awareness
5. **Distribution Attacks**: Tampering with hardware or software prior to installation/delivery (e.g., modification of software/hardware during production or distribution, firmware tampering before delivery)

### 1.5 Attack Frameworks

#### Cyber Kill Chain (Lockheed Martin) - 7 Phases
1. **Reconnaissance**: Collect as much information as possible about the target
2. **Weaponization**: Create a deliverable malicious payload using an exploit and a backdoor
3. **Delivery**: Send the weaponized bundle to the victim
4. **Exploitation**: Exploit a vulnerability by executing code on the victim's system
5. **Installation**: Install malware on the target system
6. **Command and Control (C2)**: Create a command and control channel to communicate and pass data back and forth
7. **Actions on Objectives**: Perform actions to achieve intended objectives/goals

#### MITRE ATT&CK Framework
- **Globally accessible knowledge base** for adversary tactics and techniques based on **real-world observations**
- Used as foundation for development of specific threat models and methodologies
- Comprises **three collections**: Enterprise, Mobile, and PRE-ATT&CK matrices
- **ATT&CK for Enterprise contains 14 categories of tactics** derived from the later stages (exploit, control, maintain, execute) of the Cyber Kill Chain

**14 Enterprise ATT&CK Tactics:**
1. Reconnaissance
2. Resource Development
3. Initial Access
4. Execution
5. Persistence
6. Privilege Escalation
7. Defense Evasion
8. Credential Access
9. Discovery
10. Lateral Movement
11. Collection
12. Command and Control
13. Exfiltration
14. Impact

#### MITRE D3FEND
- Knowledge base defined by MITRE serving as a **library of cybersecurity countermeasures**
- Provides countermeasure information from a **defensive perspective**
- Maps relationship between ATT&CK's adversary TTPs and defensive countermeasures

#### Diamond Model of Intrusion Analysis
- Four core features: **Adversary, Infrastructure, Victim, Capability**

### 1.6 EC-Council's Hacking Methodology
- References: EC-Council hacking methodology, cyber kill chain methodology, MITRE ATT&CK, MITRE D3FEND, and **RE&CT**

### 1.7 Incident Management Process

#### NIST Incident Response Life Cycle (SP 800-61) - 4 Phases:
1. **Preparation**
2. **Detection & Analysis**
3. **Containment, Eradication & Recovery**
4. **Post-Incident Activity**

#### ITIL Incident Management Process Steps:
1. **Registration**: Log details into ITSM solution, check KEDB (Known Error Database)
2. **Categorization**: Provide CTI (Category, Type, and Item) to assign appropriately
3. **Assignment**: Allocate ticket based on categorization
4. **Diagnosis**: Investigate - examine system logs, user errors, network configuration
5. **Resolution**: Fix root cause, notify affected users
6. **Closure**: Close the ticket after resolution

### 1.8 Incident Costs

#### Tangible Costs (directly quantifiable):
- Direct financial losses, hardware/software replacement, legal fees, regulatory fines

#### Intangible Costs (difficult to quantify):
- Loss of reputation, customer trust, competitive advantage, brand damage

### 1.9 SOAR and SIEM

- **SIEM (Security Information and Event Management)**: Track historical events and activities in a network; threat hunters analyze collected data using threat intelligence
- **SOAR (Security Orchestration, Automation, and Response)**: Provides functionality for responders to provide instructions and automate response actions

### 1.10 Policy Types (EXAM CRITICAL)

| Policy | Description |
|--------|-------------|
| **Promiscuous** | No restrictions; all traffic allowed |
| **Permissive** | Wide open; only known dangerous services/attacks/behaviors are blocked |
| **Prudent** | Maximum security; all services blocked; only safe/necessary services enabled individually |
| **Paranoid** | Forbids everything; no Internet connection or severely limited |

> **Exam tip**: Permissive = "wide open, only known dangerous blocked"; Prudent = "maximum security, only necessary enabled"

### 1.11 Laws and Legal Compliance

| Law/Standard | Key Details |
|---|---|
| **SOX (Sarbanes-Oxley Act)** | Financial reporting, corporate governance |
| **HIPAA** | Protects health information |
| **FISMA** | Federal information security management |
| **GLBA (Gramm-Leach-Bliley Act)** | Financial institutions, consumer financial privacy |
| **GDPR** | EU data protection regulation |
| **DPA 2018** | UK Data Protection Act |
| **DMCA** | Digital copyright protection |
| **CAN-SPAM** | Email spam regulation |
| **PCI DSS** | Payment card data security; applies to all entities that store, process, or transmit cardholder data; maintained by PCI Security Standards Council |

**PCI DSS IH&R Requirements:**
- **12.5.3**: Establish, document, and distribute security incident response and escalation procedures
- Failure to meet PCI DSS requirements may result in **fines or termination of payment card processing privileges**

### 1.12 Standards and Frameworks

| Standard | Description |
|---|---|
| **NIST SP 800-61** | Computer Security Incident Handling Guide |
| **ISO/IEC 27000 Series** | Information security management |
| **ISO/IEC 27050** | Electronic discovery activities (identifying, preserving, collecting, processing) |
| **ITIL** | IT service management framework |
| **COBIT Framework** | IT governance and management |
| **CIS Critical Security Controls** | 18 prioritized security controls |
| **FFIEC** | Financial institutions examination |
| **NERC 1300** | Energy sector cybersecurity |

### 1.13 CIS Critical Security Controls (Selected)

| # | Control | Purpose |
|---|---------|---------|
| 17 | Incident Response Management | Devise strategy for detecting and responding to incidents |
| 18 | Penetration Testing | Check efficiency and resiliency of organizational assets |

### 1.14 Acronyms - Module 1

| Acronym | Meaning |
|---------|---------|
| IH&R | Incident Handling and Response |
| IATF | Information Assurance Technical Framework |
| NIST | National Institute of Standards and Technology |
| ITIL | Information Technology Infrastructure Library |
| ITSM | IT Service Management |
| KEDB | Known Error Database |
| CTI | Category, Type, and Item (ITIL categorization) |
| SIEM | Security Information and Event Management |
| SOAR | Security Orchestration, Automation, and Response |
| ATT&CK | Adversarial Tactics, Techniques, and Common Knowledge |
| D3FEND | Detection, Denial, and Disruption Framework Empowering Network Defense |
| RE&CT | Response & Countermeasure Toolkit |
| PCI DSS | Payment Card Industry Data Security Standard |
| HIPAA | Health Insurance Portability and Accountability Act |
| FISMA | Federal Information Security Management Act |
| GLBA | Gramm-Leach-Bliley Act |
| GDPR | General Data Protection Regulation |
| DMCA | Digital Millennium Copyright Act |
| SOX | Sarbanes-Oxley Act |
| FTC | Federal Trade Commission |
| COBIT | Control Objectives for Information and Related Technologies |
| CIS | Center for Internet Security |
| FFIEC | Federal Financial Institutions Examination Council |
| NERC | North American Electric Reliability Corporation |
| APT | Advanced Persistent Threat |

---

## MODULE 2: Incident Handling and Response Process

### 2.1 IH&R Process - 9 Steps (EC-Council)

1. **Step 1: Preparation for IH&R**
2. **Step 2: Incident Recording and Assignment**
3. **Step 3: Incident Triage** (Classification, Documentation, Prioritization, Impact Assessment)
4. **Step 4: Notification**
5. **Step 5: Containment** (occurs at same time as notification phase)
6. **Step 6: Evidence Gathering and Forensic Analysis**
7. **Step 7: Eradication**
8. **Step 8: Recovery**
9. **Step 9: Post-Incident Activities**

### 2.2 The Golden Hour of Incident Response

- The **golden hour** refers to the critical time immediately after the occurrence of any security incident
- The response of the IH&R team during this period will determine the overall impact and outcome

### 2.3 Step 1: Preparation

#### IH&R Policy Components:
- Statement of management's commitment including IH&R vision and mission statements
- Purpose and objectives of the policy
- Definition of computer security incidents and their consequences
- Reporting guidelines with preferred formatting
- IH&R policy covers scope and applicability

#### IH&R Procedures (SOPs):
- Also referred to as standard operating procedures
- Detail the process lifecycle: detection, containment, eradication, and reporting
- Should detail the techniques involved, tools required, persons to contact in emergency

#### IR Readiness:
- Organizations must define IR readiness procedures and be equipped with necessary toolkits
- Create IR plans to accomplish goals

### 2.4 Step 2: Incident Recording and Assignment

- Use **issue tracking systems or ticketing systems** to simplify IH&R process
- Help desk receives ticket, determines if it's a security incident
- If security incident: forward ticket to IR team along with concerned authorities
- Tools: **SolarWinds Web Help Desk (WHD)**, **AlienVault OSSIM**

### 2.5 Step 3: Incident Triage

#### Triage Sub-processes:
1. **Incident Analysis and Validation**: Analyze compromised systems, network, databases
2. **Incident Classification**: Categorize by type (endpoint, network, malware, application, browser)
3. **Incident Documentation**: Record all details
4. **Incident Prioritization**: High, Medium, or Low risk level

#### Process Flow of Incident Triage:
- Assess incident details and correlate indicators with logs
- Classify as endpoint, network, malware, application, or browser incident
- Prioritize based on risk level (high, medium, low)
- Factors: severity of impact, effect on business, legal/regulatory requirements

#### NIST Prioritization Factors:
- **Functional Impact** of the incident (effect on business continuity)
- **Information Impact** (sensitivity of compromised data)
- **Recoverability** from the incident

#### Incident Priority Tools:
- ServiceNow, IBM Resilient Incident Response Platform, Trouble Ticket Software (Freshworks)
- PagerDuty, Cyber Triage, BigPanda's Automatic Incident Triage

### 2.6 Step 5: Containment

#### Key Containment Activities:
- Prepare containment procedure with technical and managerial personnel
- Check type of response required
- If containment fails: escalate to advanced stage, review and update procedure
- If contained: close containment task, move to next level

#### Common Containment Techniques:
- Disconnect compromised system from network (if exploited through unknown vulnerability)
- Disable compromised accounts and change passwords
- Block malicious IP addresses and domains

### 2.7 Step 6: Evidence Gathering and Forensic Analysis

- Occurs **after the containment phase**
- Collect crucial evidence and simultaneously create a **chain of custody document**
- After collection and protection, investigators analyze evidence to identify cause and nature
- Trace the perpetrators of the crime
- Create detailed report on findings

### 2.8 Step 7: Eradication

- Involves removing or eliminating the **root cause** of an incident
- Closing all attack vectors used by the threat actor

### 2.9 Step 8: Recovery

- Recover compromised devices, applications, systems, or terminals ASAP
- Either replacing them or quickly fixing the issue

### 2.10 Step 9: Post-Incident Activities

#### Post-Incident Sub-activities:
1. **Defining Gaps and Improvements** for incident management strategy
2. **Incident Postmortem**
3. **Creating the After-Action Report (AAR)**
4. **Lessons Learned**
5. **Incident Documentation**
6. **Incident Impact Assessment**
7. **Policy Review and Revision**
8. **Incident Disclosure**

#### Incident Postmortem Report Contains:
- Incident Summary
- Incident Severity
- Incident Priority
- Impact of Incident
- Impact on Other Involved Parties
- Incident Timeline
- Investigation and Response Timeline
- Root Cause Analysis
- Related Incidents
- Learnings and Next Steps
- Follow-Up Tasks

#### Postmortem Guidelines (EXAM CRITICAL):
- **Build a consistent template** to maintain focus
- **Always conduct a blameless review**
- Commence with an incident timeline
- Conduct meeting with internal personnel impacted
- Classify roles and owners
- Specify rules to prioritize incidents that need postmortem
- Obtain key details with metrics such as **Mean Time to Resolution (MTTR)**
- Share postmortem reports internally

#### After-Action Report (AAR):
- Strategic planning report to accumulate all related information after an incident
- Outlines what worked effectively, areas of improvement, strategies for enhancement
- **AAR Sections**: Summary, Review, Analysis, Areas of Improvement

#### Lessons Learned Meeting Questions:
- When and who detected the incident?
- What happened exactly?
- What caused the incident?
- To whom was the incident reported?
- Does the organization prepare adequately?
- How is the incident handled?
- What went well? What went wrong?

#### Incident Impact Assessment Categories:
- Financial impact
- Operational impact
- Reputational impact

### 2.11 Preparation Resources

#### Incident Analysis and Mitigation Resources:
- Network diagrams, system inventories, protocols, intrusion detection and antivirus products

#### IH&R Documentation Requirements:
- Include model number, serial number, and description of all equipment
- Use access control lists on routers, firewalls, and IDSs

#### Record Retention:
- Step 1: Create a Record Retention Schedule

### 2.12 Report Writing Tools

- **MagicTree**: Uses **tree structure and XPath expressions** for data management and reporting

### 2.13 Information Sharing

- Organizations must consult legal department before sharing information with external entities
- Sharing information and proper coordination between organizations helps respond more quickly
- Relevant to ISAC (Information Sharing and Analysis Centers)

### 2.14 Acronyms - Module 2

| Acronym | Meaning |
|---------|---------|
| AAR | After-Action Report |
| MTTR | Mean Time to Resolution |
| SOP | Standard Operating Procedure |
| WHD | Web Help Desk (SolarWinds) |
| OSSIM | Open Source Security Information Management |
| ISAC | Information Sharing and Analysis Center |

---

## MODULE 3: First Response

### 3.1 First Responder Definition

- A person who comes from the **forensics laboratory or particular agency** at the crime scene for initial investigation
- Must have complete knowledge of computer forensics investigation
- Must preserve all discovered evidence in a **simple, protected, and forensically sound manner**
- Investigate the crime scene in a **lawful manner** so obtained evidence is admissible in court

### 3.2 First Responder Responsibilities

1. Identify, protect, and preserve evidence
2. Document the crime scene
3. Collect incident information
4. Report to the case officer in charge
5. Take photographs of all evidence

### 3.3 Searching for Evidence - Steps

1. **Survey the crime scene** to recognize potential sources of evidence (computing systems, audio/video recorders, surveillance cameras, access cards, GPS)
2. **Protect physical evidence** or hidden fingerprints on keyboards, mice, equipment
3. **Find cables** connected to devices (modems, caller ID boxes)
4. **Observe** current situation and record observations
5. **Maintain a search and seizure evidence log** documenting all electronic devices/media
6. **Search for secondary storage media** (hard disks, pen drives, etc.)

### 3.4 Securing and Evaluating the Crime Scene

Best practices:
- Follow standard procedures and policies of legal authority
- Ensure scene is safe
- Identify victim's devices, networks, mark a perimeter
- Prevent unauthorized access

### 3.5 Chain of Custody

#### Chain of Custody Document Contains:
- Case number
- Name of person who reported the case
- Address and telephone number
- Location of evidence
- Date/time of evidence collection
- Description of evidence

#### Chain of Custody Purpose:
- Keep track of all forensics processes applied
- Maintain strict chain to ensure evidence admissibility

### 3.6 Crime Scene Documentation

- Take photographs, videos, notes, and sketches
- Document processes and activities running on display screens
- Comprehensive details of: location of crime, status of system, connected network devices, storage media, smartphones, Internet and network access

### 3.7 Photographing and Sketching the Scene

- **On arrival, first step = photograph the scene**
- Make multiple sketches showing measurement relationship between crime scene and evidence
- Sketch explains data in documented photos/videos
- Portrays positions of camera and photographer

### 3.8 Evidence Handling Best Practices

- Label containers holding evidence appropriately
- Avoid folding and scratching storage devices
- Use storage bags to protect from sunlight and high temperature

### 3.9 Transporting Electronic Evidence

- Proper transport procedures for maintaining evidence integrity
- Anti-static bags for electronic components
- Faraday bags for mobile devices (block wireless signals)

### 3.10 Volatile vs Non-Volatile Data

- **Volatile data**: Lost when system shuts down (MAC times, log files, running processes, RAM contents)
- System loses all volatile data when shutting down and rebooting
- **Order of Volatility (RFC 3227)**: Collect most volatile data first

### 3.11 First Responder Common Mistakes

- Not having access to baseline documentation about victim's computer
- Triggering malware and time bombs that delete vital volatile data
- Not maintaining strict chain of custody

### 3.12 Computer Turned On - Procedures (EXAM CRITICAL)

- If **screensaver is on**: Move mouse slowly **without pressing any button**
- Document processes and activities on display screens
- If computer is networked: document network connections before disconnecting

### 3.13 Different Situations for First Response

- Computer turned on
- Computer turned off
- Network devices
- Mobile devices
- Laptop computers

### 3.14 System Administrator's Role

- May need to hand over systems and storage media to incident responder/investigator
- Might appear for legal proceedings to explain measures taken during first response

### 3.15 Digital Evidence Rules

- Persons engaged in inspection of digital evidence should work according to rules and policies of the agency
- Evidence must be forensically sound

### 3.16 Search and Seizure Planning

- Creating a chain of custody document
- Details of equipment to be seized
- Search and seizure type: **overt or covert**

### 3.17 Acronyms - Module 3

| Acronym | Meaning |
|---------|---------|
| MAC | Modified, Accessed, Changed (timestamps) |
| GPS | Global Positioning System |
| RFC 3227 | Guidelines for Evidence Collection and Archiving |
| PDA | Personal Digital Assistant |

---

## MODULE 4: Handling and Responding to Malware Incidents (Forensics Focus)

### 4.1 Malware Analysis Preparation

#### Required Malware Analysis Lab Tools:
- **Forensic image extraction**: FTK Imager, X-Ways Forensics, Autopsy, The Sleuth Kit (TSK)
- **PE analysis**: PEView, PeStudio, PEiD, FileAlyzer
- **Snapshot tools**: Regshot, Total Commander
- **Memory dumping**: Belkasoft Live RAM Capturer, Volatility Framework
- **Network sniffing**: Wireshark, tcpdump
- **Network simulation**: INetSim
- **Sandbox**: For dynamic analysis

#### Tool Categories for Malware Analysis:
- Registry/configuration tools
- Sandbox environments
- Log analyzers

### 4.2 Malware Indicators of Intrusion

Signs of malware presence:
- Unknown registry entries
- Unusual off-hour usages
- Unexpected changes in Windows registry files
- High volumes of data transfer from the network

### 4.3 YARA Rules (EXAM CRITICAL)

- **YARA**: Malware research tool for detecting and classifying malware through a **rule-based approach**
- **Multi-platform**: Runs on Windows, macOS, and Linux
- Creates "rules" or descriptions with Boolean expressions and strings
- Each rule starts with the word **"rule"**

#### YARA Rule Structure:
1. **Strings**: Defines all strings to search within files (hexadecimal strings, text strings, regular expressions)
2. **Metadata**: General information about the rule
3. **Condition**: Boolean expression establishing the logic

### 4.4 Malware Analysis Techniques

#### 1. Static Analysis (Code Analysis)
- Analyzing WITHOUT executing the malware
- Examining PE headers, strings, imports, exports
- Tools: PEiD, PEView, PeStudio, strings utility

#### 2. Dynamic Analysis (Behavioral Analysis)
- Also called **"behavioral analysis"**
- Analyzing **live systems in operation** for malware presence
- Detects malware based on its **malicious behavior or functioning**
- Requires safe environment (virtual machines, sandboxes)
- Tools: Process Monitor, Process Explorer, Regshot, Wireshark

#### 3. Memory Dump/Static Analysis
- Analyzing memory dumps or binary codes for traces of malware

### 4.5 PEiD Tool

- **Free tool** providing details about Windows executable files
- Can identify signatures associated with **over 600 different packers and compilers**
- Displays type of packers used for packing the program
- Other packer detection tools: MacroPack, UPX

### 4.6 Process Monitor (Sysinternals)

- Combines features of two legacy Sysinternals utilities: **Filemon and Regmon**
- Monitors file system, registry, and process/thread activity
- Rich and non-destructive filtering
- Comprehensive event properties (session IDs)

### 4.7 Autoruns (Sysinternals)

- Shows programs configured to start during boot or login

### 4.8 TCPView (Sysinternals)

- Network monitoring tool showing TCP/UDP connections

### 4.9 OLE Analysis Tools (Office Document Forensics)

#### oleid
- Python-based tool to examine **OLE files**
- Reviews all components labeled as suspicious/malicious
- Command: `oleid '<path to suspect document>'`
- Detects VBA macros in Office documents

#### oledump
- Parses malicious Office documents to identify streams with macros
- Command: `python oledump.py '<path to suspect document>'`
- Shows structure including all streams
- **Uppercase M** beside stream = contains macros
- Extract macro: `python oledump.py -s <stream number> <path>`

#### olevba
- Extracts and analyzes VBA macros

### 4.10 Volatility Framework

- **Memory forensic tool** for analyzing volatile memory
- Helps incident handlers analyze volatile memory on infected machine
- After acquiring RAM dumps from target machine, analyze with Volatility
- Source: volatilityfoundation.org

### 4.11 Command History Monitoring

- Malware uses command prompt to escalate privileges, access restricted resources
- Command prompt retains command history, automatically deletes when closed
- Monitor for execution of unauthorized commands

### 4.12 Eradication Steps for Malware

- Run registry monitoring tools to find malicious registry entries
- Remove malicious registry entries added by malware
- Delete malicious backdoor, Trojan, or virus-related files
- Safely format systems and reinstall OS **after taking a forensic image**

### 4.13 Forensic Image Extraction Tools

| Tool | Purpose |
|------|---------|
| FTK Imager | Forensic image extraction, data acquisition |
| X-Ways Forensics | Forensic analysis suite |
| Autopsy | Open-source digital forensics platform |
| The Sleuth Kit (TSK) | Collection of command-line tools for forensic analysis |
| EnCase | Commercial forensic suite |

### 4.14 Sandbox Tools

| Tool | URL |
|------|-----|
| Cuckoo Sandbox | cuckoosandbox.org |
| Jotti | virusscan.jotti.org |
| Valkyrie Sandbox | valkyrie.comodo.com |

### 4.15 Acronyms - Module 4

| Acronym | Meaning |
|---------|---------|
| PE | Portable Executable |
| OLE | Object Linking and Embedding |
| VBA | Visual Basic for Applications |
| FTK | Forensic Toolkit |
| TSK | The Sleuth Kit |
| RAM | Random Access Memory |
| IDS | Intrusion Detection System |

---

## MODULE 5: Handling and Responding to Malware and Email Security Incidents

### 5.1 Malware Eradication Procedures

#### Trojan Eradication Steps:
- Avoid opening email attachments from unknown senders
- Block all unnecessary host and firewall ports
- Prevent executing programs transferred by instant messaging
- Strengthen weak default configuration settings
- Monitor internal network traffic for odd ports or encrypted traffic
- Regularly install patches and security updates
- Scan external devices (USB) with antivirus before use
- Restrict desktop-environment permissions
- Manage local workstation file integrity through checksums, auditing, port scanning
- Run host-based antivirus, firewall, and IDS software
- Disable suspicious startup programs
- Block malicious background processes from task manager
- Change all account and network passwords
- Use spam filter

#### Virus and Worm Eradication:
- Install and update antivirus software for real-time detection

#### Ransomware Eradication Steps:
1. **Disconnect** all internal and external connections to prevent spreading
2. **Perform regular scans** using Internet security software
3. **Quarantine** affected systems using relevant removal tools
4. Use appropriate **decryption tools** to decrypt ransomware-infected systems

### 5.2 Fileless Malware Countermeasures

- Disable macros when not in use; avoid macros without digital signatures
- Monitor RAM regularly (fileless malware hides in system memory)
- Use GPOs or registry keys to implement policies over DDE and macros
- Configure **Attack Surface Reduction (ASR) rules** to detect and prevent fileless malware

### 5.3 Anti-Trojan Software

- Designed to identify and prevent malicious Trojans
- May employ scanning strategies and freeware/licensed tools
- Detects Trojans, **rootkits, backdoors**, and other damaging software

### 5.4 Antivirus Tools for Malware Eradication

| Tool | Key Feature |
|------|-------------|
| **TotalAV** | Real-time protection, scheduled scans, blocks tracking cookies, ads/popups, monitors data breaches, defends against phishing/spoofing |
| Bitdefender | Comprehensive endpoint protection |
| Norton | Consumer and enterprise antivirus |
| Kaspersky | Advanced threat detection |
| McAfee | Enterprise endpoint security |
| Malwarebytes | Anti-malware scanning |

### 5.5 Email Security Incidents

#### Types of Email Attacks:

| Attack Type | Definition |
|-------------|------------|
| **Phishing** | Mass emails impersonating legitimate entities to steal credentials/data |
| **Spear Phishing** | Specialized social engineering directed at a **specific employee or small group** using personalized content |
| **Whaling** | Targets **high-profile executives** (CEO, CFO, politicians, celebrities) with complete access to confidential information |
| **Vishing** | Voice phishing via phone calls |
| **Smishing** | SMS phishing |
| **SPIM** | Spam over Instant Messaging - spammers use **bots** to harvest IM IDs |

> **EXAM CRITICAL**: Spear phishing targets **specific employees**. Whaling targets **high-profile executives**. The distinction is about WHO the victim is, not who is being impersonated.

#### Business Email Compromise (BEC):
- Attackers impersonate executives to trick employees
- Common goal: unauthorized wire transfers
- Email services are "lucrative target" for attackers

### 5.6 Email Spam

- Spammers hide identity by **forging the email header**
- Provide misleading information in **FROM and REPLY-TO** fields
- Regular emails bounce back when server exceeds capacity

### 5.7 Email Header Analysis (EXAM CRITICAL)

#### Key Email Header Fields:
| Field | Purpose |
|-------|---------|
| **Received:** | Shows path of email; read from **bottom (first received) to top (last received)** |
| **From:** | Sender's email address (can be forged) |
| **Reply-To:** | Address for replies (can be forged) |
| **Return-Path:** | Bounce address |
| **X-Mailer:** | Email client used |
| **SPF** | Sender Policy Framework - email authentication |
| **DKIM** | DomainKeys Identified Mail - email authentication |
| **DMARC** | Domain-based Message Authentication, Reporting & Conformance |

> **EXAM TIP**: Received fields are read from **bottom to top** to trace the email path. Be aware of **forged headers** fabricated by attackers.

#### Email Investigation Steps:
1. Analyze email headers
2. Check sender's IP address
3. Verify SPF, DKIM, and DMARC credentials to verify authenticity
4. Trace email back to source

### 5.8 Email Header Analysis Tools

| Tool | Purpose |
|------|---------|
| **MxToolbox** | Email header analysis, DNS lookups |
| **eMailTrackerPro** | Trace email back to source location, analyzes headers, reveals sender's geographic info |
| **Email Header Analyzer** (dnschecker.org) | Header analysis |
| **Google Admin Toolbox** | Header analysis |
| **EmailSherlock** | Email investigation |
| **Social Catfish** | Email tracing |

### 5.9 Email Tracking Tools

- Automatically send notification when recipients open mail
- Provide status information about delivery

### 5.10 Email Incident Response

- IH&R team should quickly respond because email/phishing attacks start spreading **immediately after a single click**
- Implement security controls and email services for effective email incident handling

### 5.11 Phishing Attack Chain:
1. Email contains a link or attachment (typically JavaScript file or macro)
2. User clicks on link/attachment
3. Macro is executed or PowerShell is automatically downloaded
4. Payload executes

### 5.12 Acronyms - Module 5

| Acronym | Meaning |
|---------|---------|
| BEC | Business Email Compromise |
| SPF | Sender Policy Framework |
| DKIM | DomainKeys Identified Mail |
| DMARC | Domain-based Message Authentication, Reporting & Conformance |
| SPIM | Spam over Instant Messaging |
| ASR | Attack Surface Reduction |
| DDE | Dynamic Data Exchange |
| GPO | Group Policy Object |
| IoC | Indicator of Compromise |
| RAT | Remote Access Trojan |
| C2/C&C | Command and Control |

---

## CROSS-MODULE EXAM TIPS

### Most Testable Facts:

1. **IATF classifies attacks into 5 categories**: Passive, Active, Close-in, Insider, Distribution
2. **MITRE ATT&CK has 14 Enterprise tactics**
3. **Cyber Kill Chain has 7 phases** (Lockheed Martin)
4. **NIST IR Lifecycle has 4 phases**; EC-Council IH&R has **9 steps**
5. **ITIL starts with Registration**, then Categorization with **CTI (Category, Type, Item)**
6. **Permissive policy** = wide open, only known dangerous blocked
7. **Prudent policy** = maximum security, only necessary services enabled
8. **PEiD identifies 600+ packers and compilers**
9. **oledump marks macros with uppercase M**
10. **YARA rules start with the word "rule"** and have Strings, Metadata, Condition sections
11. **Received: headers read bottom to top**
12. **Spear phishing = specific employee; Whaling = high-profile executives**
13. **Golden hour** = critical time immediately after incident
14. **Postmortem: always conduct a blameless review**
15. **AAR sections: Summary, Review, Analysis, Areas of Improvement**
16. **Containment occurs at same time as notification phase**
17. **Evidence gathering occurs after containment phase**
18. **Chain of custody must be created simultaneously with evidence collection**
19. **First thing on arrival at crime scene = photograph the scene**
20. **Screensaver on = move mouse slowly WITHOUT pressing any button**
21. **Process Monitor = Filemon + Regmon combined**
22. **Volatility Framework = memory forensic tool for volatile memory analysis**
23. **NIST prioritization factors: Functional Impact, Information Impact, Recoverability**
24. **MagicTree uses tree structure and XPath expressions**
25. **PCI DSS maintained by PCI Security Standards Council**
26. **Ransomware first step: disconnect all connections to prevent spreading**
27. **Dynamic analysis = behavioral analysis (live systems)**
28. **Static analysis = code analysis (without execution)**
29. **Fileless malware hides in system memory (RAM)**
30. **Check SPF, DKIM, DMARC to verify email authenticity**
