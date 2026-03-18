# ECIH v3 - Analysis Modules 6-10: Key Testable Concepts

---

## MODULE 6: Handling and Responding to Network Security Incidents

### Key Topics Covered
- Preparation for network security incidents
- Detection and validation of network security incidents
- Handling unauthorized access incidents
- Handling inappropriate usage incidents
- Handling denial-of-service (DoS/DDoS) incidents
- Handling wireless network security incidents
- Best practices against network security incidents
- Case Study: DigitalOcean Mailchimp Security Incident

### Types of Network Security Incidents
1. **Unauthorized Access Incidents** - Use of unauthorized, idle, or open ports by attackers to access systems and network devices
2. **Inappropriate Usage Incidents** - User violates acceptable computing usage policies (e.g., using proxy servers to download illegal material through encrypted connections)
3. **Denial-of-Service (DoS/DDoS) Incidents** - Attacks that make systems/services unavailable
4. **Wireless Network Security Incidents** - Attacks targeting wireless infrastructure

### Network Incident Subtypes
- Reconnaissance attacks
- DNS and ARP poisoning
- Firewall and IDS evasion attacks
- Downloading and dissemination of malicious content
- Man-in-the-middle attacks
- Session hijacking
- Wireless network viruses

### Key Definitions
- **Packet sniffer**: A tool that can intercept and log the traffic passing through a network
- **Inappropriate usage**: Incidents where a user violates acceptable computing usage policies
- **Sweep Attempts / Ping sweep (ICMP sweep)**: Basic network scanning technique used to determine IP addresses that map to live hosts
- **Packet Traceback**: Tracing back the attack traffic to its source
- **Ingress Filtering**: Packet filtering technique used by ISPs to prevent source address spoofing in Internet traffic
- **TCP Intercept**: Traffic-filtering feature in routers to protect TCP servers from TCP SYN-flooding attacks (a type of DoS attack)
- **Rate Limiting**: Technique used to control the rate of outbound or inbound traffic in a network interface controller
- **RFC 3704 Filtering**: Basic access-control list (ACL) filter that limits the impact of DDoS attacks by blocking traffic with spoofed source addresses

### Indicators of DoS/DDoS Attacks
- **Host targeting OS**: User reports of system/application inaccessibility, IDS/IPS alerts, firewall alerts, OS-generated logs, data packets with abnormal source addresses
- **Network-level indicators**: Unusual bandwidth consumption, increased traffic patterns, SYN flooding signatures

### DoS/DDoS Containment Techniques
1. Packet Traceback
2. Ingress Filtering
3. TCP Intercept
4. Rate Limiting
5. RFC 3704 Filtering
6. Configure IDS and IPS to detect DoS traffic
7. Discuss intrusion detection methods with ISPs

### Preparation Steps for Network Security Incidents
- Define roles and responsibilities of all users, administrators, and IH&R team
- Implement standard network usage protocols
- Provide IH&R team members with training and practice
- Prepare tools for detection and containment
- Train employees to respond and communicate incidents
- Install network sniffing tools, security solutions, and logging tools across all systems
- Take backups from all important servers
- Use employee monitoring applications (if allowed under legal/policy frameworks)
- Contact ISPs and their second-tier agents
- Maintain secure storage for evidence
- Maintain cryptographic hashes of critical files
- Develop spare workstations, hosts, clean OS, networking equipment, and virtualized environments

### Wireless Network Incident Handling
- **Access Point Monitoring**: Audit all AP devices, obtain MAC address, SSID, network transmission info to create baseline
- **Wi-Fi monitoring tools**: WifiChannelMonitor, PRTG Professional Wi-Fi Analyzer
- **Wireless Client Monitoring**: Monitor all clients connected to AP, track network performance, connection history, usage statistics
- **Log Analysis**: Analyze AP logs for brute force and password cracking attempts
- Enable WPA3 on wireless devices, change keys at regular intervals
- Disable wireless access/SSID broadcasting until intrusion is detected

### Inappropriate Usage - Recovery Steps
- Communicate situation to legal department
- Use VPN and secure network channels only
- Register and monitor user activity logs regularly
- Store sensitive data in remote servers with restricted access
- Enable authentication for file sharing
- Enforce latest data protection and Internet usage policies
- Patch systems with latest security updates
- Uninstall unauthorized software
- Disable USB debugging and disallow untrusted sources
- Configure alerts for suspicious/malicious system activities
- Implement strong authentication for critical resources

### Tools - Module 6

#### Network Security Incident Handling Toolkit
| Tool | URL | Purpose |
|------|-----|---------|
| Nmap | nmap.org | Network scanning, promiscuous detection |
| Wireshark | wireshark.org | Packet capture and analysis |
| TCPView | microsoft.com | TCP/UDP endpoint viewer |
| NetFlow Traffic Analyzer | solarwinds.com | Network traffic analysis |
| Stealthwatch | cisco.com | Network visibility and security |
| netstat | netstat.net | Network statistics |
| nbtstat | microsoft.com | NetBIOS over TCP/IP statistics |
| NetScanTools Pro | netscantools.com | Network scanning/packet capture |
| ManageEngine NetFlow Analyzer | manageengine.com | NetFlow analysis |
| ntopng | ntop.org | Network traffic monitoring |
| Capsa Portable Network Analyzer | colasoft.com | Packet capture/analysis with easy UI |
| Kiwi Syslog Server | solarwinds.com | Syslog collection |
| Kiwi Log Viewer | solarwinds.com | Log viewing |
| SolarWinds Loggly | solarwinds.com | Linux syslog analysis |
| Snort | snort.org | Intrusion detection |
| AIDA64 Extreme | aida64.com | System diagnostics |
| KFSensor | kfsensor.net | Honeypot IDS |
| Suricata | suricata.io | IDS/IPS |

### Acronyms - Module 6
| Acronym | Meaning |
|---------|---------|
| DoS | Denial of Service |
| DDoS | Distributed Denial of Service |
| AP | Access Point |
| SSID | Service Set Identifier |
| MAC | Media Access Control |
| IDS | Intrusion Detection System |
| IPS | Intrusion Prevention System |
| ISP | Internet Service Provider |
| ACL | Access Control List |
| WPA3 | Wi-Fi Protected Access 3 |
| ARP | Address Resolution Protocol |
| DNS | Domain Name System |
| VPN | Virtual Private Network |
| ICMP | Internet Control Message Protocol |
| SYN | Synchronize (TCP flag) |

### Case Study: DigitalOcean Mailchimp Security Incident
- DigitalOcean (cloud/VPN service provider) suffered security breach through Mailchimp (third-party email marketing platform)
- IH&R team contacted Mailchimp authorities
- Demonstrates supply chain/third-party risk

---

## MODULE 7: Handling and Responding to Web Application Security Incidents

### Key Topics Covered
- OWASP Top 10 Application Security Risks (2021)
- Handling web application attacks (SQL injection, XSS, directory traversal, etc.)
- Detection using log analysis and regex patterns
- Containment, eradication, and recovery for web attacks
- Website defacement handling
- Best practices against web application incidents

### OWASP Top 10 Application Security Risks - 2021
1. **A01 - Broken Access Control**
2. **A02 - Cryptographic Failures**
3. **A03 - Injection** (SQL injection, XSS, command injection)
4. **A04 - Insecure Design**
5. **A05 - Security Misconfiguration**
6. **A06 - Vulnerable and Outdated Components**
7. **A07 - Identification and Authentication Failures**
8. **A08 - Software and Data Integrity Failures** (insecure deserialization)
9. **A09 - Security Logging and Monitoring Failures**
10. **A10 - Server-Side Request Forgery (SSRF)**

### Types of Web Application Attacks
- **SQL Injection (SQLi)**: Injecting malicious SQL queries into web application inputs
- **Cross-Site Scripting (XSS)**: Input validation attack targeting flawed input validation mechanisms
  - **Stored XSS**: Malicious code injected into input sections permanently stored by the application (targets cookie values, harder to identify)
  - **Reflected XSS**: Script reflected off web server in error messages, search results
- **Cross-Site Request Forgery (CSRF)**: Forces authenticated user to submit forged requests
- **Command Injection**: Injecting OS commands through application inputs
- **Directory Traversal (Path Traversal)**: Exploiting HTTP to gain access to restricted directories and execute commands outside web server's root directory
- **Session Hijacking**: Stealing/predicting session tokens for unauthorized access
- **Credential Theft/Spoofing**: Exploiting authentication flaws
- **Insecure Deserialization**: Altering serialized data in understandable format
- **SSRF (Server-Side Request Forgery)**: Web security vulnerability where remote server sends malicious requests to internal systems
- **Website Defacement**: Altering visual appearance of website
- **Brute Force and Password Cracking**: Systematic password guessing
- **HTML Injection**: Targeting forums, message boards, guestbooks

### Detection Techniques

#### Manual Analysis using Regex - SQL Injection
- Analyze captured network traffic for SQL-specific metacharacters
- Hex equivalents for SQL metacharacters (Table 7.2)
- Check web server logs for SQL patterns

#### Manual Analysis using Regex - XSS Attacks
- Detect XSS-specific metacharacters: single-quote ('), double-dash (--)
- Hex equivalents for XSS-specific metacharacters (Table 7.3)
- Sample XSS strings with regex detection patterns

#### Manual Analysis - Directory Traversal Attacks
- Detect metacharacters indicating path traversal
- Regular expressions to find directory traversal patterns in logs

### Eradication Techniques
- **XSS**: HTML Encoding on output sent to users (converts `<script>` to `&lt;script&gt;`)
- **SQL Injection**: Hex Encoding to prevent SQLi attacks on web servers
- **Directory Traversal**: Input validation, restrict access to web root, disable directory listing
- **Command Injection**: Use typesafe variables/functions (e.g., `IsNumeric()`), language-specific libraries without OS shell interpreter, use stored procedures with parameters
- **General**: Use Java sandbox in J2EE, avoid running as root or accessing databases as DBADMIN, implement input validation and sanitization, whitelisting/blacklisting

### Recovery Steps
- Restart any service terminated during containment
- Use ApexSQL Recovery tool for database recovery:
  - Step 1: Open tool, click "Data from Backup"
  - Step 2: In backup files window, click "Add file"
  - Step 3: Browse backup, select tables to recover

### Tools - Module 7

| Tool | URL | Purpose |
|------|-----|---------|
| Anti DDoS Guardian | beethink.com | DDoS protection |
| SolarWinds Security Event Manager | solarwinds.com | Security event management |
| ArcSight Enterprise Security Manager | microfocus.com | SIEM |
| IllusionBLACK | smokescreen.io | Deception technology |
| Alert Logic MDR | alertlogic.com | Managed detection and response |
| ManageEngine Application Control Plus | manageengine.com | Application control |
| BrowseControl | currentware.com | Web filtering |
| Proxy Switcher | proxyswitcher.com | Proxy management |
| Apache Logs Viewer | apacheviewer.com | Log analysis |
| ClamAV | clamav.net | Antivirus |
| Atomic OSSEC | atomicorp.com | Host-based IDS |
| ApexSQL Log | apexsql.com | SQL Server log analysis |
| Burp Suite | portswigger.net | Web vulnerability scanner |
| OWASP Tools | owasp.org | Web security testing framework |
| Dependency-Check / OWASP CycloneDX | owasp.org | Component vulnerability scanning |

### Key Definitions
- **XSS**: A type of input validation attack that targets the flawed input validation mechanism of web applications
- **Directory Traversal**: Enables attackers to exploit HTTP, gain access to restricted directories, and execute commands outside the web server's root directory
- **SSRF**: A web security vulnerability that arises when remote server processes can send malicious requests to internal systems

### Acronyms - Module 7
| Acronym | Meaning |
|---------|---------|
| OWASP | Open Web Application Security Project |
| XSS | Cross-Site Scripting |
| SQLi | SQL Injection |
| CSRF | Cross-Site Request Forgery |
| SSRF | Server-Side Request Forgery |
| XXE | XML External Entity |
| MDR | Managed Detection and Response |
| SIEM | Security Information and Event Management |
| WAF | Web Application Firewall |
| J2EE | Java 2 Platform Enterprise Edition |
| DBADMIN | Database Administrator |

---

## MODULE 8: Handling and Responding to Cloud Security Incidents

### Key Topics Covered
- Cloud service models and shared responsibility
- Cloud security threats and incidents
- Handling Azure security incidents
- Handling AWS security incidents
- Handling Google Cloud security incidents
- Best practices against cloud security incidents
- Case Study: GoDaddy Data Breach, Kaseya VSA Supply Chain Attack

### Cloud Service Models
| Model | CSP Responsibility | CC (Customer) Responsibility |
|-------|-------------------|------------------------------|
| **IaaS** | Infrastructure (network, storage, servers, virtualization) | OS, middleware, runtime, data, applications |
| **PaaS** | Platform for customers to install/manage applications | Applications and data |
| **SaaS** | Software, storage, applications, and data | End-user usage only |

### Incident Handling by Service Model
- **IaaS**: Shared responsibility between CC and CSP
- **PaaS**: CSPs handle most incident handling activities; CCs responsible for development
- **SaaS**: CSPs are responsible for most activities; client team must request CSP for data
- In PaaS and SaaS models, CSPs acquire data from virtual platforms
- In SaaS model, CC must request CSP for incident data
- In IaaS and PaaS models, CCs responsible for development and incident response

### Cloud Deployment Models
- **Public Cloud**: Organizations use for hosting business services; can jeopardize data recoverability
- **Private Cloud**: Dedicated infrastructure for single organization
- **Hybrid Cloud**: Combination of public and private
- **Community Cloud**: Shared by organizations with common concerns

### Issues Faced by CCs During Cloud Security Incident Handling (Table 8.4)
- Inability to add security-specific event sources (affects SaaS)
- Difficulty deploying identity services through internet (DaaS, SaaS, PaaS)
- Time synchronization complications (data on multiple physical machines/locations) - affects IaaS, PaaS, SaaS
- Network segmentation issues (DaaS, SaaS)
- Deleted data recovery challenges in IaaS or PaaS model

### Cloud Providers and Their Services
| Provider | URL | Services |
|----------|-----|----------|
| **Amazon AWS** | aws.amazon.com | IaaS, PaaS, SaaS - EC2, S3, Lambda, etc. |
| **Microsoft Azure** | azure.microsoft.com | IaaS, PaaS, SaaS through public/private/hybrid |
| **Google Cloud Platform (GCP)** | cloud.google.com | IaaS, PaaS, serverless computing |
| **IBM Cloud** | ibm.com | IaaS, SaaS, PaaS through public/private/hybrid |

### AWS Security Practices
- **AWS Infrastructure Security**: Customize Security Hub insights
- **AWS Financial Services Security**: Penetration testing on EC2, NAT gateways
- **AWS Auditing**: Operate CloudTrail and CloudWatch for auditing/monitoring
- **AWS Threat Detection**: GuardDuty, Amazon Inspector
- **AWS Config**: Enable CIS Foundations standards for all accounts/regions
- **AWS Incident Response Playbooks**: Amazon CloudWatch events + Systems Manager automation + Step Functions
- **AWS Security Groups**: Implement VPC Flow Logs for IP traffic detection
- **AWS Backup**: Data backup practices
- **AWS Trusted Advisor**: Avoid security misconfigurations

### Azure Security
- Validate shared responsibilities across IaaS, PaaS, SaaS environments
- Azure Security Center / Microsoft Sentinel for monitoring
- Orca Security for Azure security tools

### Google Cloud Security
- Use IAM frameworks to access Google Cloud resources
- Disable publicly accessible cloud storage buckets
- Enforce proper data retention policies
- **Google Workspace**: Analyze and monitor events, integration with Cloud Logging
- **Logs Explorer**: Centralized log analysis tool

### Google Cloud Security Tools
| Tool | Purpose |
|------|---------|
| Dynatrace | Cloud monitoring, metrics/logs/traces, end-to-end visibility |
| Chronicle | Security analytics |
| CrowdStrike Falcon | Endpoint protection |
| GCP Monitor | Cloud monitoring |

### Cloud Threat Indicators
- Misconfiguration of infrastructure enabling network scanning
- Alteration and misconfiguration of access control policies (Google Cloud)
- Suspicious behavior across AWS environment
- Unauthorized access to cloud resources

### Tools - Module 8

| Tool | URL | Purpose |
|------|-----|---------|
| CrowdStrike Orchestrator | crowdstrike.com | Security orchestration |
| SysTools SQL Recovery | systoolsgroup.com | SQL data recovery |
| Acunetix | acunetix.com | Web vulnerability scanner |
| N-Stalker | nstalker.com | Web app security scanner |
| Browser Exploitation Framework (BeEF) | beefproject.com | Browser exploitation |
| OWASP Top 10 Cloud Security Risks | owasp.org | Cloud risk framework |
| Falco | falco.org | Cloud security incident detection |
| Datadog | datadoghq.com | Cloud monitoring |
| Orca Security | orca.security | Azure security tools |
| Amazon CloudWatch | aws.amazon.com | AWS log analysis |
| Qualys | qualys.com | AWS security/compliance scanning |
| ExtraHop Reveal(x) 360 | extrahop.com | Cloud threat detection and response |

### Case Studies
1. **GoDaddy Data Breach**: Web-hosting giant suffered massive data breach
2. **Kaseya VSA Supply Chain Attack**:
   - Incident severity classified as "Critical"
   - After initial analysis, IR team updated management about severity and impact
   - Two steps taken to contain spread
   - Kaseya recommended customers use VSA Detection Tool
   - AGENT.CRT file was encoded to bypass detection by Microsoft Defender

### Acronyms - Module 8
| Acronym | Meaning |
|---------|---------|
| CSP | Cloud Service Provider |
| CC | Cloud Customer/Consumer |
| IaaS | Infrastructure as a Service |
| PaaS | Platform as a Service |
| SaaS | Software as a Service |
| DaaS | Desktop as a Service |
| GCP | Google Cloud Platform |
| IAM | Identity and Access Management |
| VPC | Virtual Private Cloud |
| CIS | Center for Internet Security |
| EDR | Endpoint Detection and Response |
| EPP | Endpoint Protection Platform |

---

## MODULE 9: Handling and Responding to Insider Threats

### Key Topics Covered
- Types of insider threats
- Driving forces behind insider attacks
- Importance of handling insider attacks
- Indicators of insider threats
- Detection methods (mole detection, profiling, behavioral analysis)
- Preparation steps for handling insider threats
- Containment, eradication, and recovery
- Best practices against insider threats
- Case Study: Kaseya VSA incident analysis (continued)

### Types of Insider Threats
1. **Malicious Insider Threats**: Come from disgruntled or terminated employees who steal data
   - **Terminated Employees**: Former employees who retain access
   - **Disgruntled Employees**: Become disgruntled due to perceived unfair treatment or work pressure
2. **Negligent Insider**: Employees with lax security awareness, fall for social engineering
3. **Professional Insider**: **Most harmful type** - use their technical knowledge for malicious purposes
4. **Accidental Insider Threats**: Inadvertent exposure of confidential details

### Driving Forces Behind Insider Attacks
- **Financial needs** (most common motivation)
- **Corporate Espionage**
- **Curiosity** (students of security programs)
- **Revenge** (disgruntled employees)
- **Privilege Escalation**
- **Data Exfiltration** (using electronic devices, taking advantage of negligent staff)
- **IT Sabotage** (data theft, modification)

### Indicators of Insider Threats
- Abnormal user activities deviating from regular behavior patterns
- Most common indicator: behavior deviation from established baseline
- Attempts to escalate privileges
- Unusual login attempts
- Accessing databases and resources beyond normal scope
- Employees leaving the company suddenly

### Detection Methods

#### Mole Detection
- Identifying insiders who act as spies or informants within the organization

#### Profiling
- **Individual profiling**: Observing behavior of an individual when alone
- **Group profiling**: Observing a person's behavior in a group

#### Behavioral Analysis
- Uses SIEM, DLP, and UEBA technologies
- Major challenge: building appropriate user behavioral profiles
- Defining baselines for normal behavior
- Advanced analytics tools detect known, unknown, and hidden cyberattacks and insider threats

### Preparation Steps to Handle Insider Threats
- Document, frame, and enforce policies to mitigate insider threats (data theft, modification, IT sabotage)
- Train employees on how to identify and report policy violations or suspicious espionage
- Deploy data loss prevention, log management, IDS, SIEM, and behavior analysis tools
- Continuously monitor employees, contractors, third-party vendors, outsiders
- Ensure terminated employees don't have access to physical space or systems
- Establish effective defense strategies
- Define various processes for managing insider threats

### Containment of Insider Threats
- Primary focus after detection
- Main goal: minimize damages caused by insider attacks
- Can deploy automated or human-involved responses
- Steps: check attack vectors used by insider, isolate affected systems, focus on containment
- Enable employee fraud detection and third-party service provider monitoring

### Eradication of Insider Threats
- Key component of incident response
- Prevent malicious insiders from launching new attacks
- Use network security measures (firewalls, IDS, file integrity software)
- Implement intrusion detection and file integrity monitoring

### Recovery After Insider Attacks
- Recovery of exfiltrated data is **unattainable** unless data theft is discovered before completion
- Implement recovery processes and backups
- Continue business operations after incident
- Work with forensics team to identify IOCs

### Tools - Module 9

| Tool | URL | Purpose |
|------|-----|---------|
| Splunk User Behavior Analytics | splunk.com | UEBA for insider threat detection |
| Dynatrace | dynatrace.com | Application monitoring |
| Fidelis CloudPassage Halo | fidelissecurity.com | Cloud workload protection |
| ManageEngine Firewall Analyzer | manageengine.com | Firewall log analysis for insider detection |
| DataRobot | datarobot.com | AI/ML analytics for threat detection |
| Ekran System | ekransystem.com | Insider threat monitoring |
| Wireshark | wireshark.org | Detecting malicious Telnet connections |
| Nuix | nuix.com | Detecting data exfiltration |
| DriveLetterView | nirsoft.net | USB drive letter viewer |
| SysTools SQL Log Analyzer | systoolsgroup.com | SQL .LDF file analysis and recovery |

### Data Exfiltration Detection
- Attackers transform data locally to exfiltrate without detection
- Monitor for unusual data transfers
- Nuix tool for detecting data exfiltration patterns
- Monitor FTP commands, web requests, email transactions

### Best Practices Against Insider Threats
- Log user activities (FTP commands, web requests, email)
- Form legal department with IH&R team for liability issues
- Establish processes for interviewing perpetrators with legal authorities
- Organizations should use DLP, SIEM, and behavioral analysis tools

### Acronyms - Module 9
| Acronym | Meaning |
|---------|---------|
| UEBA | User and Entity Behavior Analytics |
| DLP | Data Loss Prevention |
| SIEM | Security Information and Event Management |
| IOC | Indicator of Compromise |
| IDS | Intrusion Detection System |
| LDF | Log Data File (SQL Server) |

---

## MODULE 10: Handling and Responding to Endpoint Security Incidents

### Key Topics Covered
- Endpoint security concepts
- IoT-based security incidents
- OT/ICS/SCADA security incidents
- Mobile-based security incidents
- Best practices for endpoint, IoT, OT, and mobile security

### Endpoint Types
- Laptop, desktop, tablet, server, virtual environment, IoT device, and operational technology (OT)

### IoT Security

#### OWASP Top 10 IoT Threats
1. Weak, guessable, or hardcoded passwords
2. Insecure network services
3. Insecure ecosystem interfaces (web, backend API, mobile, cloud)
4. Lack of secure update mechanism
5. Use of insecure or outdated components
6. Insufficient privacy protection
7. Insecure data transfer and storage
8. Lack of device management
9. Insecure default settings
10. Lack of physical hardening

#### Major IoT Attacks
- DDoS attacks
- HVAC exploits
- Jamming attacks
- Botnets
- Software vulnerability exploitation

#### Preparation Steps for IoT-based Security Incidents
- Store IoT device vendor contact information (vendor name, contact number)
- Create inventory list of IoT devices in organizational infrastructure
- Conduct common IoT attack simulations and test response plan
- Define business continuity plans and understand IoT network architectural designs
- Build IH&R team skilled with IoT technologies and tools

#### Recovery After IoT-based Security Incidents
- Patch outdated software and firmware in IoT devices
- Reconfigure firewall solutions with new rules
- Change privacy and security settings after recovery
- Replace outdated IoT assets with modern devices (end-to-end security)
- Follow proven data recovery methods and compliance guidelines
- Implement automatic failure recovery for IoT-edge applications
- Maintain remote and cloud-based replicas of IoT resources
- Implement fault tolerance for constant availability
- Use device failure recovery tools: **EmSPARK** and **InnoOSR**
- Enable VPN services while recovering backup data from secondary zone
- Establish, enforce, and update disaster recovery plans
- Assess entry point of incident and implement strict access controls

#### Best Practices Against IoT-based Security Incidents
- Proper security mechanisms for confidential information transmission
- Regular firmware updates
- Network segmentation for IoT devices

#### IoT Security Tools
| Tool | Purpose |
|------|---------|
| SeaCat.io | IoT network monitoring, bug fixing, compliance |
| Check Point Quantum IoT Protect | IoT security |
| Palo Alto IoT Security | IoT security |
| Bosch IoT Insights | IoT analytics |

### OT/ICS/SCADA Security

#### Key Definitions
- **OT (Operational Technology)**: Networks evolving through adaptation of Industrial IoT; important part of critical infrastructures (power plants, manufacturing)
- **ICS (Industrial Control Systems)**: Engineering systems including PLCs, HMIs, and DCS
- **SCADA**: Supervisory Control and Data Acquisition systems
- **PLC**: Programmable Logic Controller
- **HMI**: Human-Machine Interface
- **DCS**: Distributed Control System

#### OT Protocols
- **Modbus/TCP**: Does NOT have in-built encryption or authentication
- **CIP** (Common Industrial Protocol)
- **S7Comm** (Siemens S7 Communication)

#### Modbus/TCP Traffic Analysis
- Use Wireshark to analyze Modbus/TCP traffic on ICS networks
- Search for Modbus packets containing diagnostic codes (can represent ICS attacks)
- Monitor traffic transmitted between network and Modbus port on devices

#### OT Security Incident Handling
- Establish OT and ICS-specific incident response plans
- Handle security incidents associated with ICS and SCADA
- OT environments increasingly prone to security incidents due to modern connectivity integration
- Attackers can cause response failure in OT components, take control of ICS or SCADA devices

#### OT Security Tools
| Tool | URL | Purpose |
|------|-----|---------|
| SCADAfence | scadafence.com | ICS/SCADA security monitoring |
| Dragos | dragos.com | OT threat detection |
| Nozomi Networks | nozominetworks.com | OT/IoT security |
| ServiceNow OT Management | servicenow.com | OT management |
| Claroty | claroty.com | ICS security |
| Wireshark | wireshark.org | Modbus/TCP traffic analysis |

- Dragos and SCADAfence provide comprehensive coverage for **ATT&CK for ICS**
- Tools monitor different OT protocols (Modbus, CIP, S7Comm) to identify suspicious activity

### Mobile-Based Security Incidents

#### Best Practices Against Mobile-based Security Incidents
- Do not load too many applications; avoid auto-upload of photos to social networks
- Do not share information within GPS-enabled apps unless necessary
- Disable wireless access (Wi-Fi, Bluetooth) if not in use
- Set idle timeout to automatically lock phone
- **In enterprise: use MDM software** to secure, monitor, manage, and support mobile devices
- **Do Not Allow Rooting or Jailbreaking**: Ensure MDM solutions prevent/detect rooting/jailbreaking; include in mobile security policy
- Configure mobile device to encrypt its storage with hardware encryption
- Continuously monitor mobile operations for abnormal behavior

#### Mobile Recovery Steps
- Remove any affected or suspicious mobile applications
- Restore mobile data from cloud or local trusted backup
- Check functionalities of all restored mobile devices

### Endpoint Security Tools
| Tool | Purpose |
|------|---------|
| NetworkMiner | Packet capture and analysis |
| Wireshark | Network protocol analyzer |
| Various EDR solutions | Endpoint detection and response |

### Acronyms - Module 10
| Acronym | Meaning |
|---------|---------|
| IoT | Internet of Things |
| OT | Operational Technology |
| ICS | Industrial Control System |
| SCADA | Supervisory Control and Data Acquisition |
| PLC | Programmable Logic Controller |
| HMI | Human-Machine Interface |
| DCS | Distributed Control System |
| MDM | Mobile Device Management |
| BYOD | Bring Your Own Device |
| EDR | Endpoint Detection and Response |
| CIP | Common Industrial Protocol |
| S7Comm | Siemens S7 Communication Protocol |

---

## CROSS-MODULE TESTABLE FACTS

### High-Priority Exam Questions

1. **Professional insiders** are the MOST harmful type of insider (Module 9)
2. **Financial needs** are the most common motivation for insider attacks (Module 9)
3. Recovery of exfiltrated data is **unattainable** once theft is completed (Module 9)
4. **Modbus/TCP** does NOT have in-built encryption or authentication (Module 10)
5. **RFC 3704** is a basic ACL filter to limit DDoS by blocking spoofed source addresses (Module 6)
6. **TCP Intercept** protects TCP servers specifically from SYN-flooding attacks (Module 6)
7. **Ingress Filtering** prevents source address spoofing in Internet traffic (Module 6)
8. **OWASP Top 10 (2021)**: A01=Broken Access Control, A02=Cryptographic Failures, A03=Injection (Module 7)
9. **In SaaS model**, CC must request CSP for incident data (Module 8)
10. **In IaaS model**, CC and CSP share incident handling responsibility (Module 8)
11. **HTML Encoding** is the eradication technique for XSS attacks (Module 7)
12. **Hex Encoding** is the eradication technique for SQL Injection attacks (Module 7)
13. **Individual profiling** = observing behavior when alone; **Group profiling** = in a group (Module 9)
14. **EmSPARK and InnoOSR** are device failure recovery tools for IoT (Module 10)
15. **Kaseya VSA**: AGENT.CRT encoded to bypass Microsoft Defender (Module 8)
16. **WPA3** is the recommended wireless security protocol (Module 6)
17. **Dragos and SCADAfence** provide coverage for ATT&CK for ICS (Module 10)
18. **Stored XSS** targets cookie values and is harder to identify than reflected XSS (Module 7)
19. **Ping sweep (ICMP sweep)** determines IP addresses mapping to live hosts (Module 6)
20. **ApexSQL Recovery** tool used for database recovery after web application incidents (Module 7)

### Common IH&R Process Across All Modules
1. **Preparation** (policies, tools, training, backups)
2. **Detection and Validation** (indicators, monitoring, log analysis)
3. **Containment** (isolate, minimize damage, preserve evidence)
4. **Eradication** (remove threat, patch vulnerabilities)
5. **Recovery** (restore systems, verify functionality)
6. **Lessons Learned** (post-incident review, documentation)

### Tools That Appear Across Multiple Modules
- **Wireshark**: Network analysis (M6), Telnet detection (M9), Modbus/TCP analysis (M10)
- **SolarWinds**: Security Event Manager (M7), Syslog/Log tools (M6)
- **ManageEngine**: Firewall Analyzer (M9), Application Control Plus (M7)
- **OWASP**: Web App Top 10 (M7), Cloud Top 10 (M8), IoT Top 10 (M10)
- **Splunk**: UEBA (M9), general SIEM across modules
- **CrowdStrike**: Falcon (M8), Orchestrator (M8)
- **Qualys**: AWS security scanning (M8)
