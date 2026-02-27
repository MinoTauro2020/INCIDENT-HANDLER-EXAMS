// =============================================
// ECIH v3 - Lab Exercises from CEI Material
// Extracted from Instructor Presentation slides
// =============================================

const labExercises = {
    1: {
        title: "Módulo 01: Introducción a IH&R",
        title_en: "Module 01: Introduction to IH&R",
        labs: []  // "This module does not contain any hands-on exercise"
    },
    2: {
        title: "Módulo 02: Proceso de IH&R",
        title_en: "Module 02: IH&R Process",
        labs: [
            {
                name: "Lab 01: Realizar Triage de Incidentes con Cyber Triage",
                name_en: "Lab 01: Perform Incident Triage using Cyber Triage",
                tools: ["Cyber Triage"],
                steps: [
                    "Realizar triage automatizado de un endpoint comprometido",
                    "Analizar artefactos recopilados (procesos, conexiones, archivos)",
                    "Clasificar hallazgos por nivel de severidad"
                ],
                steps_en: [
                    "Perform automated triage of a compromised endpoint",
                    "Analyze collected artifacts (processes, connections, files)",
                    "Classify findings by severity level"
                ]
            },
            {
                name: "Lab 02: Generar Informe de Manejo de Incidentes con KeepNote",
                name_en: "Lab 02: Incident Handling Report Generation using KeepNote",
                tools: ["KeepNote"],
                steps: [
                    "Documentar hallazgos del incidente en KeepNote",
                    "Organizar notas por fases del incidente",
                    "Generar informe estructurado de manejo de incidentes"
                ],
                steps_en: [
                    "Document incident findings in KeepNote",
                    "Organize notes by incident phases",
                    "Generate structured incident handling report"
                ]
            },
            {
                name: "Lab 03: Trabajar con Tickets de Incidentes en OSSIM",
                name_en: "Lab 03: Working with Incident Tickets in OSSIM",
                tools: ["OSSIM (AlienVault)"],
                steps: [
                    "Crear y gestionar tickets de incidentes en OSSIM",
                    "Asignar prioridades y categorizar incidentes",
                    "Seguir el flujo de trabajo de resolución de incidentes"
                ],
                steps_en: [
                    "Create and manage incident tickets in OSSIM",
                    "Assign priorities and categorize incidents",
                    "Follow incident resolution workflow"
                ]
            }
        ]
    },
    3: {
        title: "Módulo 03: Primera Respuesta",
        title_en: "Module 03: First Response",
        labs: []  // "This module does not contain any hands-on exercise"
    },
    4: {
        title: "Módulo 04: Manejo de Incidentes de Malware",
        title_en: "Module 04: Handling Malware Incidents",
        labs: [
            {
                name: "Lab 01: Manejo y Respuesta a Incidentes de Seguridad por Malware",
                name_en: "Lab 01: Handling and Responding to Malware Security Incident",
                tools: ["Process Monitor", "WinPatrol", "VirusTotal", "BinText", "PE Explorer", "Dependency Walker", "IDA", "OllyDbg", "MalwareBytes"],
                steps: [
                    "1.1: Indicación de incidente de malware — Verificar comportamiento del sistema",
                    "1.2: Detectar incidente — Análisis dinámico con Process Monitor y WinPatrol",
                    "1.3: Análisis estático — VirusTotal, BinText, PE Explorer, Dependency Walker",
                    "1.3: Desensamblaje con IDA y OllyDbg",
                    "1.4: Erradicar incidente — Eliminar virus con MalwareBytes",
                    "1.5: Implementar mejores prácticas contra incidentes de malware"
                ],
                steps_en: [
                    "1.1: Indication of Malware Incident - Check System's Behavior",
                    "1.2: Detect Malware Incident - Perform Dynamic Analysis with Process Monitor and WinPatrol",
                    "1.3: Perform Static Analysis - Analyze with VirusTotal, BinText, PE Explorer, Dependency Walker",
                    "1.3: Perform Malware Disassembly using IDA and OllyDbg",
                    "1.4: Eradicate Malware Incident - Remove Virus using MalwareBytes",
                    "1.5: Implement Best Practices Against Malware Incidents"
                ]
            },
            {
                name: "Lab 02: Manejo y Respuesta a Ataques de Ransomware",
                name_en: "Lab 02: Handling and Responding to Ransomware Attack",
                tools: ["Wireshark", "ZoneAlarm Firewall", "Backup Server", "RanSim"],
                steps: [
                    "2.1: Preparar testbed y lanzar ataque de ransomware simulado",
                    "2.2: Detectar incidente — Monitorear tráfico con Wireshark, estimar pérdida de datos",
                    "2.3: Contener incidente — Bloquear IP del atacante con ZoneAlarm Firewall",
                    "2.4: Recuperación — Restaurar datos cifrados desde servidor de backup",
                    "2.5: Implementar mejores prácticas — Análisis de vulnerabilidades con RanSim"
                ],
                steps_en: [
                    "2.1: Prepare Malware Testbed and Launch Simulated Ransomware Attack",
                    "2.2: Indication of Incident - Monitor Network Traffic using Wireshark, Estimate Data Loss",
                    "2.3: Contain Malware Incident - Block Attacker's IP using ZoneAlarm Firewall",
                    "2.4: Recovery Post Malware Incident - Restore Encrypted Data using Backup Server",
                    "2.5: Implement Best Practices - Conduct Vulnerability Analysis using RanSim"
                ]
            }
        ]
    },
    5: {
        title: "Módulo 05: Manejo de Incidentes de Email",
        title_en: "Module 05: Handling Email Security Incidents",
        labs: [
            {
                name: "Lab 01: Manejo y Respuesta a Ataques de Phishing",
                name_en: "Lab 01: Handling and Responding to Phishing Attacks",
                tools: ["Netcraft", "PhishTank", "MxToolbox", "Email Tracking tools", "AbuseIPDB", "Email Dossier", "Hunter's Email Verifier", "Urlscan.io"],
                steps: [
                    "1.1: Indicación de ataque — Verificar indicadores de phishing",
                    "1.2: Detectar phishing/spam — Analizar enlaces con Netcraft y PhishTank",
                    "1.3: Contener el incidente de seguridad del email",
                    "1.4: Analizar email — Header analysis con MxToolbox, verificar IP origen con AbuseIPDB",
                    "1.4: Validar email con Email Dossier y Hunter's Email Verifier",
                    "1.4: Analizar sitio web embebido con Urlscan.io",
                    "1.5: Erradicar — Reportar emails de phishing en Outlook, Gmail y Yahoo",
                    "1.6: Implementar mejores prácticas — Usar herramienta de seguridad de email"
                ],
                steps_en: [
                    "1.1: Indication of Phishing Attack - Check Phishing Indicators",
                    "1.2: Detect Phishing/Spam Mail - Analyze Embedded Links using Netcraft and PhishTank",
                    "1.3: Contain the Email Security Incident",
                    "1.4: Analyze the Phishing Email - Header analysis using MxToolbox, check originating IP with AbuseIPDB",
                    "1.4: Check Email Validity using Email Dossier and Hunter's Email Verifier",
                    "1.4: Analyze the Website Embedded in the Email using Urlscan.io",
                    "1.5: Eradicate - Report Spam or Phishing Emails in Outlook, Gmail, and Yahoo Mail",
                    "1.6: Implement Best Practices - Use Email Security Tool to Protect Against Incidents"
                ]
            }
        ]
    },
    6: {
        title: "Módulo 06: Manejo de Incidentes de Red",
        title_en: "Module 06: Handling Network Security Incidents",
        labs: [
            {
                name: "Lab 03: Manejo y Respuesta a Ataques DoS",
                name_en: "Lab 03: Handling and Responding to DoS Attack",
                tools: ["Hping3", "pfSense Firewall"],
                steps: [
                    "3.1: Lanzar ataque DoS — Realizar ataque DoS con Hping3",
                    "3.2: Detectar ataque DoS — Capturar tráfico con pfSense Firewall",
                    "3.3: Contener y erradicar — Bloquear ataque creando reglas en pfSense",
                    "3.4: Implementar mejores prácticas — Listar herramientas de protección contra DoS"
                ],
                steps_en: [
                    "3.1: Launch DoS Attack - Perform DoS Attack using Hping3",
                    "3.2: Detect DoS Attack - Capture Traffic using pfSense Firewall",
                    "3.3: Contain and Eradicate - Block DoS Attack by Creating Rules in pfSense Firewall",
                    "3.4: Implement Best Practices - List Tools to Protect Against DoS Attacks"
                ]
            },
            {
                name: "Lab 04: Detección de Ataques de Reconocimiento y Evaluación de Vulnerabilidades (Auto-estudio)",
                name_en: "Lab 04: Detecting Reconnaissance Attacks and Performing Vulnerability Assessment (Self-study)",
                tools: ["Wireshark", "Nessus"],
                steps: [
                    "4.1: Detectar ataques de reconocimiento con Wireshark",
                    "4.2: Escanear máquina remota en busca de vulnerabilidades con Nessus",
                    "4.2: Detectar parches de seguridad faltantes"
                ],
                steps_en: [
                    "4.1: Detect Reconnaissance Attacks using Wireshark",
                    "4.2: Scan Remote Machine for Vulnerabilities using Nessus",
                    "4.2: Detect Missing Security Patches"
                ]
            }
        ]
    },
    7: {
        title: "Módulo 07: Manejo de Incidentes de Aplicaciones Web",
        title_en: "Module 07: Handling Web Application Security Incidents",
        labs: [
            {
                name: "Lab 02: Manejo y Respuesta a SQL Injection — Login en sitio web",
                name_en: "Lab 02: Handling and Responding to SQL Injection Attacks - Logging into a website using SQL Injection",
                tools: ["Wireshark", "dotDefender"],
                steps: [
                    "2.1: Lanzar ataque SQL Injection (Login usando 1' or 1=1 -- )",
                    "2.2: Detectar ataque — Analizar manualmente con Wireshark",
                    "2.3: Analizar logs de la aplicación web con dotDefender",
                    "2.4: Contener el ataque SQL Injection"
                ],
                steps_en: [
                    "2.1: Launch SQL Injection Attack (Login using 1' or 1=1 -- )",
                    "2.2: Detect SQL Injection Attack Manually using Wireshark",
                    "2.3: Analyze Web Application Logs using dotDefender",
                    "2.4: Contain SQL Injection Attack"
                ]
            },
            {
                name: "Lab 03: Manejo y Respuesta a SQL Injection — Añadir cuenta de usuario",
                name_en: "Lab 03: Handling and Responding to SQL Injection Attacks - Adding User Account using SQL Injection",
                tools: ["Wireshark", "dotDefender", "SQL Server Studio", "OWASP ZAP"],
                steps: [
                    "3.1: Lanzar ataque (usar Blah Code para añadir usuario)",
                    "3.2: Detectar ataque manualmente con Wireshark",
                    "3.3: Analizar logs con dotDefender",
                    "3.4: Contener — Gestionar ataque desde SQL Server Studio",
                    "3.5: Erradicar — Usar consultas parametrizadas",
                    "3.6: Implementar mejores prácticas — Escaneo de vulnerabilidades con OWASP ZAP"
                ],
                steps_en: [
                    "3.1: Launch SQL Injection Attack (Adding User and Login using Blah Code)",
                    "3.2: Detect SQL Injection Attack Manually using Wireshark",
                    "3.3: Analyze Logs using dotDefender",
                    "3.4: Contain SQL Injection Attack from SQL Server Studio",
                    "3.5: Eradicate SQL Injection Attacks using Parameterized Queries",
                    "3.6: Implement Best Practices - Vulnerability Scanning using OWASP ZAP"
                ]
            }
        ]
    },
    8: {
        title: "Módulo 08: Manejo de Incidentes de Cloud",
        title_en: "Module 08: Handling Cloud Security Incidents",
        labs: [
            {
                name: "Lab 01: Manejo y Respuesta a Incidentes de S3 Bucket",
                name_en: "Lab 01: Handling and Responding to S3 Bucket Related Security Incident",
                tools: ["AWS IAM", "CloudTrail", "Amazon Macie", "AWS Trusted Advisor"],
                steps: [
                    "1.1: Preparación — Crear IAM Group, User Account y S3 Bucket, habilitar CloudTrail",
                    "1.2: Ataque — Manipular S3 Bucket desde cuenta IAM, hacer buckets públicos",
                    "1.3: Detección — Detectar S3 públicos con Amazon Macie, detectar datos sensibles comprometidos",
                    "1.4: Análisis — Analizar logs con CloudTrail para S3 Bucket",
                    "1.5: Contención — Hacer S3 Buckets privados, revocar privilegios IAM",
                    "1.6: Mejores prácticas — Auditoría de seguridad con AWS Trusted Advisor"
                ],
                steps_en: [
                    "1.1: Preparation - Create IAM Group, User Account, and S3 Bucket, Enable CloudTrail",
                    "1.2: Attack - Manipulate S3 Bucket from IAM User Account, Make S3 Buckets Accessible to Public",
                    "1.3: Detection - Detect Public S3 Buckets with Amazon Macie, Detect Compromise of Sensitive Data",
                    "1.4: Analysis - Analyze Logs with AWS CloudTrail from S3 Bucket",
                    "1.5: Containment - Make S3 Buckets Private, Revoke IAM Privileges for IAM Users",
                    "1.6: Best Practice - Conduct Security Audit in AWS with AWS Trusted Advisor"
                ]
            },
            {
                name: "Lab 02: Manejo y Respuesta a Ataque de Fuerza Bruta en Azure VM (Auto-estudio)",
                name_en: "Lab 02: Handling and Responding to Brute-force Attack on Azure VM (Self-study)",
                tools: ["Azure Security Center", "Log Analytics Workspace", "Microsoft Sentinel"],
                steps: [
                    "2.1: Preparación — Crear Resource Group, habilitar Azure Security Center, crear VM y Log Analytics Workspace",
                    "2.1: Configurar Microsoft Sentinel y Data Collection Rules",
                    "2.2: Ataque — Realizar ataque de fuerza bruta sobre IP pública de la VM",
                    "2.3: Detección — Detectar ataque desde la pestaña Insights",
                    "2.4: Contener y erradicar — Bloquear puertos de gestión con Azure Security Center, habilitar JIT"
                ],
                steps_en: [
                    "2.1: Preparation - Create Resource Group, Enable Azure Security Center, Create VM and Log Analytics Workspace",
                    "2.1: Set Up Microsoft Sentinel and Data Collection Rules",
                    "2.2: Attack - Perform Brute-force Attack on Public IP of VM",
                    "2.3: Detection - Detect Brute-force Attack from Insights Tab",
                    "2.4: Contain and Eradicate - Block Management Ports with Azure Security Center, Enable JIT"
                ]
            }
        ]
    },
    9: {
        title: "Módulo 09: Manejo de Amenazas Internas",
        title_en: "Module 09: Handling Insider Threats",
        labs: [
            {
                name: "Lab 01: Manejo y Respuesta a Inyección de Malware y Manipulación de Archivos por Amenaza Interna",
                name_en: "Lab 01: Handling and Responding to Malware Injection and File Tampering through Insider Attack",
                tools: ["Wireshark", "OpenStego", "EaseUS Data Recovery", "VeraCrypt"],
                steps: [
                    "1.1: Preparación — Configurar PA File Sight para monitoreo de archivos, captura de paquetes con Wireshark",
                    "1.2: Realizar ataques como insider — Esteganografía con OpenStego, inyección FTP, manipulación vía RDP",
                    "1.3: Detectar incidente — Analizar transferencia de paquetes con Wireshark, detectar archivos ocultos con esteganografía",
                    "1.4: Contener ataque FTP — Deshabilitar RDP para usuario anónimo, bloquear FTP inbound",
                    "1.5: Erradicar — Bloquear conexión RDP",
                    "1.6: Recuperar archivos eliminados con EaseUS Data Recovery",
                    "1.7: Mejores prácticas — Cifrar archivos/drives con VeraCrypt"
                ],
                steps_en: [
                    "1.1: Preparation - Configure PA File Sight for File Monitoring, Perform Remote Packet Capturing using Wireshark",
                    "1.2: Perform Attacks as an Insider - Steganography with OpenStego, FTP Malicious File Injection, Confidential File Alteration via RDP",
                    "1.3: Detect Security Incident - Analyze Packet Transfer via FTP with Wireshark, Detect Hidden Malicious Files using Steganography",
                    "1.4: Contain FTP File Injection Attack - Disable RDP for Anonymous User, Block FTP Inbound Rule",
                    "1.5: Eradicate the Security Incident by Blocking Remote Desktop Connection",
                    "1.6: Recover Deleted Files using EaseUS Data Recovery",
                    "1.7: Best Practices - Encrypt Confidential File/Drive using VeraCrypt"
                ]
            }
        ]
    },
    10: {
        title: "Módulo 10: Manejo de Incidentes de Endpoint",
        title_en: "Module 10: Handling Endpoint Security Incidents",
        labs: [
            {
                name: "Lab 01: Manejo y Respuesta a Incidentes de Seguridad Móvil",
                name_en: "Lab 01: Handling and Responding to Mobile-based Security Incident",
                tools: ["PhoneSploit", "MalwareBytes", "Sixo Online APK Analyzer", "Avast Mobile Security"],
                steps: [
                    "1.1: Lanzar ataque — Acceder a máquina Android con PhoneSploit",
                    "1.2: Detectar incidente — Instalar apps maliciosas, detectar actividad sospechosa",
                    "1.3: Contener — Aislar dispositivo, escanear con MalwareBytes, encontrar .apk malicioso",
                    "1.4: Analizar — Analizar .apk malicioso con Sixo Online APK Analyzer",
                    "1.5: Erradicar — Eliminar archivos maliciosos con MalwareBytes",
                    "1.6: Mejores prácticas — Usar Avast Mobile Security para proteger el dispositivo"
                ],
                steps_en: [
                    "1.1: Launching Attack - Access Android Machine using PhoneSploit",
                    "1.2: Detect Security Incident - Install Malicious App, Open Screen Apps, and Detect Suspicious Activity",
                    "1.3: Contain - Isolate the Device, Scan using MalwareBytes and Find the Malicious .apk File",
                    "1.4: Analyze - Analyze Malicious .apk using Sixo Online APK Analyzer",
                    "1.5: Eradicate - Remove Malicious Files using MalwareBytes",
                    "1.6: Best Practices - Use Avast Mobile Security to Protect the Android Device"
                ]
            },
            {
                name: "Lab 02: Manejo y Respuesta a Incidentes de Seguridad IoT (DoS)",
                name_en: "Lab 02: Handling and Responding to DoS Security Incident",
                tools: ["HOIC", "pfSense Firewall"],
                steps: [
                    "2.1: Lanzar ataque DoS — Realizar ataque con HOIC",
                    "2.2: Detectar y analizar — Observar rendimiento del dispositivo, captura remota con pfSense",
                    "2.3: Contener y erradicar — Crear reglas en pfSense para bloquear IP del atacante",
                    "2.4: Mejores prácticas — Servicios de seguridad Android contra ataques DoS"
                ],
                steps_en: [
                    "2.1: Launching DoS Attack - Perform DoS Attack using HOIC",
                    "2.2: Detect and Analyze - Observe Device Performance, Remote Packet Capturing using pfSense",
                    "2.3: Contain and Eradicate - Create Rules in pfSense Firewall to Block Attacker's IP Address",
                    "2.4: Best Practices - List Various Android Security Services to Protect Against DoS Attacks"
                ]
            }
        ]
    }
};
