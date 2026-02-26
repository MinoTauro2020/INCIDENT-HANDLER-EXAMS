# ECIH v3 Questions QA Report

**Date:** 2026-02-26
**Reviewer:** Claude Opus 4.6 (Automated QA)
**Source of Truth:** extracted_ocr.txt (ECIH v3 Official Courseware OCR, 64K lines)

## Summary
- Total questions reviewed: 60 (IDs 201-260)
- **Passed: 59**
- **Issues found: 1**
- **Critical (wrong answer): 1**

---

## Issues Found

### Question ID 225 (Module 5) - CRITICAL: Wrong Answer
- **Problem**: The scenario describes an email sent TO a regular employee, impersonating the CEO, requesting a wire transfer. According to the ECIH v3 courseware, **whaling** targets high-profile executives (CEO, CFO, politicians), while **spear phishing** targets specific employees using personalized content. In this scenario, the VICTIM is the regular employee (not the CEO), making this spear phishing, not whaling.
- **Current correct**: 2 (Whaling)
- **Should be**: 1 (Spear phishing)
- **Evidence from courseware (lines 22673-22700)**:
  - "Spear Phishing: Instead of sending thousands of emails, some attackers opt for 'spear phishing' and use specialized social engineering content directed at a **specific employee** or small group of employees in an organization to steal sensitive data"
  - "Whaling: A whaling attack is a type of phishing attack that **targets high-profile executives** such as CEO, CFO, politicians, and celebrities possessing complete access to confidential and highly valuable information"
- **Fix**: Change `"correct": 2` to `"correct": 1` in questions_pro_m1_m5.json

---

## Minor Notes (Not Errors)

### Question ID 206 (Module 1)
- **Note**: The Paranoid/Prudent/Permissive/Promiscuous security policy classification is standard EC-Council terminology (CEH) but is not explicitly found in the ECIH v3 courseware OCR. The answer (Permissive = allows all, blocks known dangerous) is technically correct per EC-Council standards. No change needed, but the topic may be less likely to appear on the actual ECIH exam.

### Question ID 239 (Module 7)
- **Note**: The correct answer (option 2) uses a comprehensive SQL keyword regex that is not from the courseware text. The courseware shows simpler regexes (options 0 and 1 are closer to courseware examples). However, the question asks for the "most effective" regex to detect the specific attack pattern shown (`SELECT * FROM patients WHERE id=1 OR 1=1; --`), and option 2 is the best match for that particular detection. Answer is acceptable.

### Question ID 246 (Module 8)
- **Note**: Falco is not explicitly mentioned in the ECIH v3 courseware. However, the question tests container security concepts that are valid for the exam scope. The answer (interactive shell with elevated privileges is a high-priority alert) is technically correct.

---

## All Questions Verified

| ID  | Module | Status | Notes |
|-----|--------|--------|-------|
| 201 | 1 | PASS | COBIT 2019 six principles, CMMI levels - confirmed lines 5894-5911 |
| 202 | 1 | PASS | Cyber Kill Chain Installation phase - confirmed lines 2124-2138 |
| 203 | 1 | PASS | Distribution attack (firmware tampering before delivery) - confirmed lines 1212-1218 |
| 204 | 1 | PASS | HIPAA protects health information - confirmed lines 6221-6227 |
| 205 | 1 | PASS | MITRE ATT&CK Credential Access (brute force, AitM, input capture) - confirmed lines 2341-2353 |
| 206 | 1 | PASS | Permissive policy allows all, blocks known dangerous - standard EC-Council terminology |
| 207 | 2 | PASS | Lessons learned meeting - confirmed lines 12525-12574 |
| 208 | 2 | PASS | AAR (Recap, Review, Analysis, Areas of Improvement) - confirmed lines 12497-12523 |
| 209 | 2 | PASS | MagicTree uses tree structure and XPath expressions - confirmed lines 12660-12683 |
| 210 | 2 | PASS | ITIL Categorization (CTI) after Registration - confirmed lines 5858-5866 |
| 211 | 2 | PASS | "Total attack attempts blocked" is NOT an impact assessment category - confirmed lines 12817-12841 |
| 212 | 2 | PASS | "Always conduct a blameless review" is postmortem guideline - confirmed line 12477 |
| 213 | 3 | PASS | Move mouse slowly without pressing button on screensaver - confirmed lines 14091-14093 |
| 214 | 3 | PASS | Storing evidence in vehicle for extended periods is INCORRECT - confirmed line 14633 |
| 215 | 3 | PASS | Exhibit numbering format aaa/ddmmyy/nnnn/zz = AMT/150326/003/B - confirmed lines 14585-14599 |
| 216 | 3 | PASS | Linux shutdown: sync;sync;halt - confirmed lines 14276-14281 |
| 217 | 3 | PASS | Typical Windows environment: pull power cord from back - confirmed lines 14106-14108 |
| 218 | 3 | PASS | Pack magnetic media in antistatic packaging - confirmed line 14561 |
| 219 | 4 | PASS | Disconnect network to contain ransomware spread - confirmed lines 15591-15592 |
| 220 | 4 | PASS | Prestige ransomware: credential extraction and privilege escalation - confirmed lines 21859-21865 |
| 221 | 4 | PASS | EDR behavioral analysis for fileless malware - confirmed line 22240 |
| 222 | 4 | PASS | Recovery order: reimage > scan > assess pre-production > restore in stages - confirmed lines 21700-21724 |
| 223 | 4 | PASS | NOT recommended: allowing IM programs execution (should prevent) - confirmed line 21467 |
| 224 | 4 | PASS | Disable macros + GPOs for DDE/macros - confirmed lines 22234, 22243 |
| 225 | 5 | **FAIL** | **Wrong answer: Should be Spear phishing (1), not Whaling (2). Target is regular employee.** |
| 226 | 5 | PASS | Pharming (DNS poisoning redirects to fake site) - confirmed lines 22718-22721 |
| 227 | 5 | PASS | Spimming (SPIM) - spam over instant messaging - confirmed lines 22723-22732 |
| 228 | 5 | PASS | Mail bombing - massive emails to one address causing DoS - confirmed lines 22753-22780 |
| 229 | 5 | PASS | Received: fields read bottom to top for route tracing - confirmed lines 24311-24318 |
| 230 | 5 | PASS | SPF validates authorized sending servers via DNS - confirmed lines 24446-24452 |
| 231 | 6 | PASS | DDoS volumetric attack (5000+ IPs, 132 countries, Tor exit nodes) - correct classification |
| 232 | 6 | PASS | Wireshark filter for SYN flood detection - confirmed lines 29184-29187 |
| 233 | 6 | PASS | MAC flooding fills CAM table, switch enters fail-open/hub mode - confirmed lines 29331-29338 |
| 234 | 6 | PASS | Slowloris is application layer attack - confirmed lines 27556-27562 |
| 235 | 6 | PASS | NetFlow collects IP traffic flow metadata - confirmed lines 17624-17648 |
| 236 | 6 | PASS | ARP spoofing response: isolate by MAC, static ARP entries - standard practice |
| 237 | 7 | PASS | UNION SELECT in URL = SQL Injection with UNION technique - correct |
| 238 | 7 | PASS | Stored/Persistent XSS (comments stored in DB, rendered unsanitized) - confirmed lines 37225-37232 |
| 239 | 7 | PASS | SQL keyword regex pattern for detection - acceptable (see minor note) |
| 240 | 7 | PASS | A10:2021 = Server-Side Request Forgery (SSRF) - confirmed lines 35593-35600 |
| 241 | 7 | PASS | Immediate containment: block IP, isolate server, reset credentials - correct IR procedure |
| 242 | 7 | PASS | WAF operates at Layer 7 (HTTP/HTTPS), IDS/IPS at Layers 3-4 - confirmed lines 36078-36084 |
| 243 | 8 | PASS | Kaseya VSA: shut down all VSA servers, notify customers - confirmed lines 49868-49874 |
| 244 | 8 | PASS | SaaS shared responsibility: CC manages users/access - confirmed general principle |
| 245 | 8 | PASS | S3 breach response: make private > CloudTrail analysis > IAM review > notify - correct order |
| 246 | 8 | PASS | Interactive shell in container with root = high-priority Falco alert - correct (see minor note) |
| 247 | 8 | PASS | IaaS: cloud consumer responsible for OS, apps, data forensics - confirmed lines 40618-40622 |
| 248 | 8 | PASS | CASB discovers/controls unauthorized cloud services - confirmed lines 43171-43172, 50134 |
| 249 | 9 | PASS | Malicious insider threat: revoke access, preserve evidence, legal coordination - confirmed lines 50729-50733 |
| 250 | 9 | PASS | UEBA extends UBA to entities (devices, apps, servers) - confirmed lines 51395-51399 |
| 251 | 9 | PASS | Separation of Duties prevents single-person fraud - confirmed lines 40564-40567 |
| 252 | 9 | PASS | Accidental/negligent insider: no malicious intent but policy violation - correct classification |
| 253 | 9 | PASS | Whistleblower program with anonymous reporting - referenced in SOX Title VIII |
| 254 | 9 | PASS | SysTools SQL Log Analyzer for .LDF transaction files - confirmed lines 52894-52902 |
| 255 | 10 | PASS | Fileless attack (living off the land) with EDR behavioral analysis - confirmed lines 22234-22241 |
| 256 | 10 | PASS | IoT containment: segment network, isolate devices - confirmed lines 57252-57265 |
| 257 | 10 | PASS | Jailbroken devices: revoke access via MDM, forensic analysis, enforce policies - correct |
| 258 | 10 | PASS | EDR: continuous visibility + behavioral analysis vs AV signature-based - confirmed lines 15391-15394 |
| 259 | 10 | PASS | OT/PLC incident: stop production for safety, disconnect, preserve logs - correct OT practice |
| 260 | 10 | PASS | netstat -ano + tasklist + Get-WinEvent for Windows investigation - confirmed lines 16016-16025, 18230-18233 |

---

## Exam Style Assessment

All 60 questions follow the scenario-based format consistent with similares.txt (real ECIH v3 exam questions). Each question:
- Provides a realistic business context with named professionals and specific organizations
- Tests knowledge application rather than rote memorization
- Has plausible but clearly distinguishable distractors
- Covers appropriate difficulty level for the 212-89 certification exam

**Overall Quality Rating: Excellent (98.3% accuracy - 59/60 questions correct)**
