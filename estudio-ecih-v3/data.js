// =============================================
// ECIH v3 - BASE DE DATOS DE ESTUDIO
// =============================================

// RESÚMENES DE MÓDULOS
const moduleContent = {
    1: {
        title: "Introduction to Incident Handling and Response",
        content: `
        <h2>Elementos de Seguridad de la Información</h2>
        <ul>
            <li><span class="key-term">Confidencialidad</span>: Solo personas autorizadas acceden a la información. Controles: cifrado, MFA, tokens, biometría</li>
            <li><span class="key-term">Integridad</span>: Datos no alterados sin autorización. Controles: checksums, control de acceso</li>
            <li><span class="key-term">Disponibilidad</span>: Sistemas accesibles cuando se requieren. Controles: redundancia, antivirus, protección DDoS</li>
            <li><span class="key-term">Autenticidad</span>: Garantía de que la comunicación es genuina. Controles: biometría, smart cards, certificados digitales</li>
            <li><span class="key-term">No Repudio</span>: El emisor no puede negar haber enviado un mensaje. Controles: firmas digitales</li>
        </ul>
        <p><strong>CIA Triad</strong> = Confidencialidad + Integridad + Disponibilidad</p>

        <h2>Amenazas y Actores de Amenazas</h2>
        <h3>Fórmula de Ataque</h3>
        <p><span class="key-term">Ataque = Motivo (Goal) + Método + Vulnerabilidad</span></p>

        <h3>Fuentes de Amenazas</h3>
        <ul>
            <li><strong>Naturales:</strong> Incendios, inundaciones, fallos de energía, terremotos</li>
            <li><strong>No intencionales:</strong> Errores humanos, administradores inexpertos, empleados negligentes</li>
            <li><strong>Intencionales - Internas:</strong> Empleados descontentos, venganza, falta de awareness</li>
            <li><strong>Intencionales - Externas Estructuradas:</strong> Atacantes técnicos con herramientas (ICMP floods, spoofing)</li>
            <li><strong>Intencionales - Externas No Estructuradas:</strong> Script kiddies, ataques por curiosidad</li>
        </ul>

        <h3>Tipos de Threat Actors</h3>
        <ul>
            <li><span class="key-term">Black Hats</span>: Hackers maliciosos (crackers)</li>
            <li><span class="key-term">White Hats</span>: Pentesters autorizados, defensivos</li>
            <li><span class="key-term">Gray Hats</span>: Trabajan ofensiva y defensivamente</li>
            <li><span class="key-term">Suicide Hackers</span>: Atacan infraestructura crítica sin importar consecuencias</li>
            <li><span class="key-term">Script Kiddies</span>: Sin habilidad técnica, usan herramientas de otros</li>
            <li><span class="key-term">Cyber Terrorists</span>: Motivados por creencias religiosas/políticas</li>
            <li><span class="key-term">State-sponsored Attackers</span>: Empleados por gobiernos para espionaje</li>
            <li><span class="key-term">Hacktivists</span>: Protesta política mediante hacking</li>
            <li><span class="key-term">Industrial Spies</span>: Espionaje corporativo, APTs</li>
            <li><span class="key-term">Insiders</span>: Empleados con acceso privilegiado</li>
            <li><span class="key-term">Criminal Syndicates</span>: Crimen organizado, lavado de dinero</li>
        </ul>

        <h3>Atributos de los Threat Actors</h3>
        <ul>
            <li><strong>Interno vs Externo</strong></li>
            <li><strong>Nivel de sofisticación</strong></li>
            <li><strong>Recursos/financiación</strong></li>
            <li><strong>Intención/motivación</strong></li>
        </ul>

        <h2>Vectores de Ataque</h2>
        <ul>
            <li><span class="key-term">Acceso directo</span>: Acceso físico al sistema</li>
            <li><span class="key-term">Medios removibles</span>: USB, dispositivos externos con malware</li>
            <li><span class="key-term">Wireless</span>: Hotspots inseguros, cracking de credenciales Wi-Fi</li>
            <li><span class="key-term">Email</span>: Phishing con adjuntos maliciosos</li>
            <li><span class="key-term">Cloud</span>: Inyección de malware en SaaS/PaaS/VM</li>
            <li><span class="key-term">Ransomware/Malware</span>: Explotación de vulnerabilidades sin parchear</li>
            <li><span class="key-term">Supply chain</span>: Comprometer recursos de terceros</li>
            <li><span class="key-term">Business partners</span>: Ataques mediante socios comerciales</li>
        </ul>

        <h2>Clasificación de Ataques (IATF)</h2>
        <ul>
            <li><span class="key-term">Pasivos</span>: Interceptación sin modificar datos (footprinting, sniffing, eavesdropping, análisis de tráfico)</li>
            <li><span class="key-term">Activos</span>: Modifican datos/servicios (DoS, malware, spoofing, replay, SQLi, XSS, privilege escalation)</li>
            <li><span class="key-term">Close-in</span>: Proximidad física (shoulder surfing, dumpster diving)</li>
            <li><span class="key-term">Insider</span>: Personas de confianza con acceso (eavesdropping, pod slurping, keyloggers)</li>
            <li><span class="key-term">Distribution</span>: Manipulación de HW/SW antes de instalación (backdoors de fábrica)</li>
        </ul>

        <h2>Clasificación de Vulnerabilidades</h2>
        <ul>
            <li><strong>Misconfigurations:</strong> Protocolos inseguros, puertos abiertos, errores de configuración, cifrado débil, permisos abiertos, cuentas root inseguras</li>
            <li><strong>Default Installations:</strong> Configuraciones de fábrica no cambiadas</li>
            <li><strong>Application Flaws:</strong> Buffer overflows, memory leaks, resource exhaustion, integer overflows, null pointer dereference, DLL injection, race conditions (TOC/TOU), improper input/error handling</li>
            <li><strong>Poor Patch Management:</strong> Servidores, firmware, OS y aplicaciones sin parchear</li>
            <li><strong>Design Flaws:</strong> Cifrado incorrecto, validación pobre de datos</li>
            <li><strong>OS Flaws:</strong> Vulnerabilidades del sistema operativo</li>
            <li><strong>Default Passwords:</strong> Contraseñas de fábrica no cambiadas</li>
            <li><strong>Zero-day:</strong> Vulnerabilidades desconocidas sin parche</li>
            <li><strong>Legacy Platform:</strong> Sistemas obsoletos sin soporte</li>
            <li><strong>System Sprawl:</strong> Activos sin documentar</li>
            <li><strong>Improper Certificate/Key Management:</strong> Claves mal almacenadas</li>
            <li><strong>Third-party Risks:</strong> Vendor management, system integration, supply chain, outsourced code, data storage, cloud vs on-premises</li>
        </ul>

        <h2>Frameworks de Ataque y Defensa</h2>
        <h3>EC-Council Hacking Methodology</h3>
        <ul>
            <li>Footprinting → Scanning → Enumeration → Vulnerability Analysis → System Hacking (Gaining Access → Escalating Privileges → Maintaining Access → Clearing Logs)</li>
        </ul>

        <h3>Cyber Kill Chain (Lockheed Martin) - 7 Fases</h3>
        <ul>
            <li><span class="key-term">1. Reconnaissance</span>: Recopilar información del objetivo</li>
            <li><span class="key-term">2. Weaponization</span>: Crear payload malicioso con exploit + backdoor</li>
            <li><span class="key-term">3. Delivery</span>: Enviar arma vía email, USB, web</li>
            <li><span class="key-term">4. Exploitation</span>: Explotar vulnerabilidad en el sistema objetivo</li>
            <li><span class="key-term">5. Installation</span>: Instalar malware/backdoor para persistencia</li>
            <li><span class="key-term">6. Command and Control (C2)</span>: Canal bidireccional con servidor del atacante</li>
            <li><span class="key-term">7. Actions on Objectives</span>: Cumplir el objetivo (robo de datos, destrucción)</li>
        </ul>

        <h3>MITRE ATT&CK Framework - 14 Tácticas Enterprise</h3>
        <ul>
            <li>Reconnaissance, Resource Development, Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, Credential Access, Discovery, Lateral Movement, Collection, Command and Control, Exfiltration, Impact</li>
        </ul>

        <h3>MITRE D3FEND - Tácticas Defensivas</h3>
        <ul>
            <li><span class="key-term">Model</span> (26 técnicas): Asset Inventory, Network Mapping, Operational Activity Mapping, System Mapping</li>
            <li><span class="key-term">Harden</span> (32 técnicas): Application/Credential/Message/Platform Hardening</li>
            <li><span class="key-term">Detect</span> (74 técnicas): File/Identifier/Message/Network Traffic Analysis, Platform Monitoring, Process Analysis, User Behavior Analysis</li>
            <li><span class="key-term">Isolate</span> (22 técnicas): Execution Isolation, Network Isolation</li>
            <li><span class="key-term">Deceive</span> (11 técnicas): Decoy Environment, Decoy Object</li>
            <li><span class="key-term">Evict</span> (5 técnicas): Credential Eviction, Process Eviction</li>
        </ul>

        <h3>RE&CT Framework</h3>
        <ul>
            <li>Fases: Preparation → Identification → Containment → Eradication → Recovery → Lessons Learned</li>
            <li>Define técnicas accionables para cada fase del ciclo de respuesta</li>
        </ul>

        <h3>TTPs (Tactics, Techniques, and Procedures)</h3>
        <ul>
            <li><span class="key-term">Tactics</span>: Directrices de cómo el atacante opera en cada fase</li>
            <li><span class="key-term">Techniques</span>: Métodos técnicos para resultados intermedios</li>
            <li><span class="key-term">Procedures</span>: Secuencia de acciones del ciclo de ataque</li>
        </ul>

        <h2>Indicadores de Compromiso (IoCs)</h2>
        <ul>
            <li><span class="key-term">Email Indicators</span>: Dirección del remitente, asunto, adjuntos, enlaces</li>
            <li><span class="key-term">Network Indicators</span>: URLs, dominios, direcciones IP</li>
            <li><span class="key-term">Host-based Indicators</span>: Filenames, file hashes, registry keys, DLLs, mutexes</li>
            <li><span class="key-term">Behavioral Indicators</span>: Inyección de código en memoria, ejecución de scripts PowerShell, comandos remotos</li>
        </ul>

        <h2>Conceptos de Seguridad de la Información</h2>
        <h3>Vulnerability Assessment</h3>
        <ul>
            <li>Examen de la capacidad del sistema para resistir explotación</li>
            <li>Escanea contra el índice <span class="key-term">CVE</span> y boletines del fabricante</li>
            <li>Herramientas: <span class="key-term">Nessus Professional, Qualys, GFI LanGuard, OpenVAS</span></li>
            <li>Limitaciones: Solo un punto en el tiempo, requiere juicio humano, no cubre ingeniería social</li>
        </ul>

        <h3>Risk Management - 4 Fases</h3>
        <ul>
            <li><span class="key-term">Risk Identification</span>: Identificar fuentes, causas y consecuencias de riesgos</li>
            <li><span class="key-term">Risk Assessment</span>: Evaluar probabilidad e impacto (cuantitativo/cualitativo)</li>
            <li><span class="key-term">Risk Treatment</span>: Seleccionar e implementar controles apropiados</li>
            <li><span class="key-term">Risk Tracking and Review</span>: Monitorear y revisar controles continuamente</li>
        </ul>

        <h3>NIST Risk Management Framework - 6 Etapas</h3>
        <ul>
            <li>Categorize Information System → Select Security Controls → Implement → Assess → Authorize → Monitor Security State</li>
        </ul>

        <h3>Cyber Threat Intelligence (CTI) - 4 Tipos</h3>
        <ul>
            <li><span class="key-term">Strategic</span>: Alto nivel, para ejecutivos/CISO. Tendencias, impacto financiero, geopolítica</li>
            <li><span class="key-term">Tactical</span>: TTPs de atacantes, para IT managers/NOC. Informes de malware y campañas</li>
            <li><span class="key-term">Operational</span>: Amenazas específicas, para IR/forensics. Capacidades e intenciones de actores</li>
            <li><span class="key-term">Technical</span>: IoCs específicos, para SOC/IR. IPs, dominios, hashes. Vida útil corta</li>
        </ul>

        <h3>Threat Modeling - 5 Pasos</h3>
        <ul>
            <li>1. Identify Security Objectives → 2. Application Overview → 3. Decompose Application → 4. Identify Threats → 5. Identify Vulnerabilities</li>
        </ul>

        <h3>Threat Hunting - 5 Pasos</h3>
        <ul>
            <li>1. Hypothesis → 2. Collect and Process Data → 3. Trigger → 4. Investigation → 5. Response/Resolution</li>
            <li>Herramientas: <span class="key-term">SIEM, EDR</span></li>
        </ul>

        <h2>Incidentes de Seguridad de la Información</h2>
        <h3>Señales de un Incidente</h3>
        <ul>
            <li><span class="key-term">Precursores</span>: Indican posibilidad futura de incidente (escaneo de vulnerabilidades, anuncio de nuevo exploit)</li>
            <li><span class="key-term">Indicadores</span>: Señal de que el incidente ha ocurrido o está en curso (alertas AV, alertas IDS/IPS, múltiples login fallidos, comportamiento inusual)</li>
        </ul>

        <h3>Fuentes de Precursores/Indicadores</h3>
        <ul>
            <li>IDPS, SIEM, Antivirus/Antispam, File Integrity Checking, Third-party Monitoring, OS/Service/Network/Application Logs, Network Flows, Personas internas/externas</li>
        </ul>

        <h3>Costo del Incidente</h3>
        <ul>
            <li><span class="key-term">Tangible</span>: Horas productivas perdidas, costos de investigación, pérdida de negocio</li>
            <li><span class="key-term">Intangible</span>: Daño reputacional, pérdida de goodwill, daño psicológico, responsabilidad legal</li>
        </ul>

        <h2>Proceso de Gestión de Incidentes</h2>
        <h3>Incident Management incluye:</h3>
        <ul>
            <li>Vulnerability analysis, Artifact analysis, Security awareness training, Intrusion detection, Public/technology monitoring</li>
        </ul>

        <h3>IH&R Process - 9 Pasos</h3>
        <ul>
            <li>1. Preparation → 2. Incident Recording and Assignment → 3. Incident Triage → 4. Notification → 5. Containment → 6. Evidence Gathering and Forensic Analysis → 7. Eradication → 8. Recovery → 9. Post-Incident Activities</li>
        </ul>

        <h3>OODA Loop en IR</h3>
        <ul>
            <li><span class="key-term">Observe</span>: Recopilar datos de herramientas de monitoreo, SIEM, análisis de tráfico</li>
            <li><span class="key-term">Orient</span>: Determinar qué está ocurriendo, análisis de causa raíz</li>
            <li><span class="key-term">Decide</span>: Decidir acciones basadas en objetivos de negocio y timing</li>
            <li><span class="key-term">Act</span>: Implementar decisiones, remediar sistemas infectados</li>
        </ul>

        <h2>IR Automation y Orchestration</h2>
        <ul>
            <li><span class="key-term">IR Automation</span>: Reemplazar acciones manuales con automáticas. Reduce tiempo de análisis</li>
            <li><span class="key-term">IR Orchestration</span>: Combina respuesta humana + procesos + tecnologías. Específica por organización</li>
            <li><strong>Diferencia clave:</strong> Automation convierte manual→automático; Orchestration combina automatización con inteligencia humana/máquina</li>
            <li>Herramientas mencionadas: ServiceNow, BMC, Carbon Black, BigFix, Splunk, Rapid7, FireEye, X-Force, OpenDNS, Blue Coat</li>
        </ul>

        <h2>Best Practices para IH&R</h2>
        <h3>OWASP - 10 Prácticas</h3>
        <ul>
            <li>1. Audit and Due Diligence → 2. Create Response Team → 3. Documented IR Plan → 4. Identify Triggers/Indicators → 5. Investigate → 6. Triage and Mitigation → 7. Recovery → 8. Documentation/Reporting → 9. Process Review → 10. Practice (mock drills)</li>
        </ul>

        <h3>ENISA</h3>
        <ul>
            <li>Workshops periódicos, modelo simple al inicio, legal officer entrenado, verificación de incidentes, clasificación final, entry/exit procedures para personal CERT</li>
        </ul>

        <h3>FTC</h3>
        <ul>
            <li><strong>Secure Operations:</strong> Quick response, secure physical areas, deploy response team, stop data loss, remove improperly posted info, secure evidence</li>
            <li><strong>Fix Vulnerabilities:</strong> Consider service providers, network segmentation, communicate with affected parties</li>
            <li><strong>Notify Appropriate Parties:</strong> Determine legal requirements, involve law enforcement</li>
        </ul>

        <h2>Estándares Relacionados con IH&R</h2>
        <h3>ISO/IEC 27000 Series</h3>
        <ul>
            <li><span class="key-term">ISO 27001</span>: Requisitos para ISMS. Annex A.16 = Information Security Incident Management (A16.1.1-A16.1.7)</li>
            <li><span class="key-term">ISO 27002</span>: Recomendaciones de controles para ISMS</li>
            <li><span class="key-term">ISO 27035</span>: Gestión de incidentes de seguridad (3 partes: principios, planificación, operaciones)</li>
            <li><span class="key-term">ISO 27037</span>: Identificación, recolección, adquisición y preservación de evidencia digital</li>
            <li><span class="key-term">ISO 27041</span>: Métodos de investigación "fit for purpose"</li>
            <li><span class="key-term">ISO 27042</span>: Interpretación y análisis de evidencia digital</li>
            <li><span class="key-term">ISO 27043</span>: Procesos de investigación de incidentes</li>
            <li><span class="key-term">ISO 27050</span>: Electronic discovery (4 partes)</li>
            <li><span class="key-term">ISO 22320</span>: Gestión de emergencias</li>
        </ul>

        <h3>FFIEC</h3>
        <ul>
            <li>Regulador de instituciones financieras de EE.UU. Requiere: identificación IoCs, análisis de eventos, clasificación, escalamiento, reporte (SAR)</li>
            <li>Herramientas: STIX/TAXII, IDS/IPS, endpoint visibility, DLP, log correlation, file integrity, malware detection</li>
        </ul>

        <h3>PCI DSS</h3>
        <ul>
            <li>Estándar para manejo de datos de tarjetas de pago</li>
            <li>Requisitos IR: <span class="key-term">12.5.3</span> (procedimientos de escalamiento), <span class="key-term">12.10</span> (plan IR), <span class="key-term">12.10.1</span> (contenido del plan), <span class="key-term">12.10.2</span> (revisar/probar anualmente), <span class="key-term">12.10.3-4</span> (personal 24/7), <span class="key-term">12.10.5</span> (alertas), <span class="key-term">12.10.6</span> (mejorar con lessons learned)</li>
            <li>Incumplimiento = multas o terminación de privilegios de procesamiento</li>
        </ul>

        <h3>NERC 1300 Cyber Security</h3>
        <ul>
            <li>Para entidades del sector eléctrico. 8 estándares (1301-1308)</li>
            <li><span class="key-term">NERC 1307</span>: Incident Reporting and Response Planning. Requiere: clasificación de incidentes, acciones de respuesta, reporte a ES-ISAC. Retención de registros: 3 años calendario</li>
        </ul>

        <h2>Frameworks de Ciberseguridad</h2>
        <h3>NIST SP 800-61</h3>
        <ul>
            <li>Guía de manejo de incidentes. Ciclo de vida: <span class="key-term">Preparation → Detection & Analysis → Containment, Eradication & Recovery → Post-Incident Activity</span></li>
        </ul>

        <h3>ITIL Incident Management</h3>
        <ul>
            <li>Objetivo: Restaurar servicios normales lo antes posible con mínimo impacto</li>
            <li>Pasos: Registration → Categorization (CTI) → Assignment → Diagnosis → Resolution → Closure (PIR)</li>
            <li>Se refiere a KEDB (Known Error Database)</li>
        </ul>

        <h3>COBIT Framework</h3>
        <ul>
            <li>Framework de governance IT de ISACA. Usa <span class="key-term">CMMI</span> para evaluar madurez</li>
            <li>6 principios: Provide stakeholder value, Holistic approach, Dynamic governance, Governance distinct from management, Tailored to enterprise needs, End-to-end governance</li>
        </ul>

        <h3>CIS Critical Security Controls v8 - 18 Controles</h3>
        <ul>
            <li>1. Inventory Enterprise Assets → 2. Inventory Software → 3. Data Protection → 4. Secure Configuration → 5. Account Management → 6. Access Control → 7. Vulnerability Management → 8. Audit Log Management → 9. Email/Web Browser Protections → 10. Malware Defenses → 11. Data Recovery → 12. Network Infrastructure Management → 13. Network Monitoring/Defense → 14. Security Awareness Training → 15. Service Provider Management → 16. Application Software Security → 17. Incident Response Management → 18. Penetration Testing</li>
        </ul>

        <h2>Leyes y Cumplimiento Legal</h2>
        <ul>
            <li>Federal law requiere que agencias federales reporten incidentes al FCIRC</li>
            <li>Niveles de law enforcement: Federal (FBI, Secret Service), District attorney, State, Local</li>
            <li>No contactar múltiples agencias para evitar conflictos jurisdiccionales</li>
            <li>Reportar a law enforcement cambia el carácter del manejo de evidencia (puede ser citada por tribunales)</li>
        </ul>

        <h3>Leyes Clave</h3>
        <ul>
            <li><span class="key-term">SOX (Sarbanes-Oxley)</span>: Protección de inversores, registros corporativos</li>
            <li><span class="key-term">HIPAA</span>: Protección de información médica</li>
            <li><span class="key-term">FISMA</span>: Seguridad de información federal</li>
            <li><span class="key-term">GLBA</span>: Protección de información financiera</li>
            <li><span class="key-term">GDPR</span>: Protección de datos personales (UE)</li>
            <li><span class="key-term">DPA 2018</span>: Data Protection Act (UK)</li>
            <li><span class="key-term">DMCA</span>: Protección de derechos digitales</li>
            <li><span class="key-term">CAN-SPAM</span>: Regulación de email comercial</li>
        </ul>
        `
    },
    2: {
        title: "Incident Handling and Response Process",
        content: `
        <h2>Proceso IH&R - Visión General</h2>
        <p>Objetivo: detener ataques en curso, limitar daño, mantener servicios, reducir tiempo de recuperación y costos. Proceso iniciado por: IH&R Development Project Team, Executive Manager, Head of InfoSec.</p>
        <h3>IH&R Process Flow - 9 Pasos</h3>
        <ul>
            <li><span class="key-term">1. Preparation</span> → 2. Incident Recording and Assignment → 3. Incident Triage → 4. Notification → 5. Containment → 6. Evidence Gathering and Forensic Analysis → 7. Eradication → 8. Recovery → <span class="key-term">9. Post-Incident Activities</span></li>
        </ul>

        <h2>Step 1: Preparation</h2>
        <h3>IH&R Team - Roles</h3>
        <ul>
            <li><span class="key-term">Incident Manager (IM)</span>: Gestiona proceso completo, comunica con management</li>
            <li><span class="key-term">Security Analysts</span>: Trabajan con sistemas afectados, investigan amenazas y vectores</li>
            <li><span class="key-term">Incident Coordinators</span>: Conectan stakeholders (legal, HR, clientes, vendors)</li>
            <li><span class="key-term">Forensic Investigators</span>: Investigan, preservan evidencia, forensics readiness</li>
            <li><span class="key-term">Threat Researchers</span>: Threat intelligence, DB intel interna, awareness</li>
            <li><span class="key-term">IT Auditors</span>: Verifican procedimientos documentados, BCP, disaster recovery</li>
            <li><span class="key-term">System/Network Administrators</span>: Config sistemas, sniffers, logs de red, containment</li>
            <li><span class="key-term">Financial Auditors</span>: Costos del incidente, cyber insurance</li>
            <li><span class="key-term">HR</span>: Post-event counseling, tracking horas | <span class="key-term">Public Relations</span>: Medios, website | <span class="key-term">Attorney</span>: Legal, law enforcement, compliance</li>
        </ul>
        <h3>IH&R Team Models</h3>
        <ul>
            <li><span class="key-term">Centralized</span>: Un equipo, orgs pequeñas | <span class="key-term">Distributed</span>: Por ubicación, autoridad única | <span class="key-term">Coordination</span>: Advisory, soporte logístico</li>
            <li><strong>Staffing:</strong> Employees (in-house) | Partially Outsourced (según cost/benefit) | Fully Outsourced (contractors on-site)</li>
            <li><strong>Factores:</strong> Availability 24/7, Resources, Full/Part-Time, Morale, Budget, Expertise, Structure</li>
        </ul>
        <h3>Forensic Readiness</h3>
        <ul>
            <li>Capacidad de usar evidencia digital con mínimo costo de investigación</li>
            <li><strong>Planning 8 pasos:</strong> 1. Identificar evidencia potencial → 2. Fuentes → 3. Política extracción legal → 4. Almacenamiento seguro → 5. Requiere investigación formal? → 6. Documentación → 7. Legal advisory board → 8. IR team listo</li>
            <li><span class="key-term">Forensic Policy</span>: CISO responsable. Define roles, monitoreo, acciones ante exposición accidental</li>
            <li><strong>IS Lifecycle:</strong> Backups regulares, audit workstations/servers, DB file hashes, file integrity (Tripwire), data retention, IDS/IPS/honeypots</li>
            <li><strong>Host Monitoring:</strong> File integrity (HashMyFiles, Tripwire), event/security logging, secure hosts, backup data</li>
            <li><strong>Network Monitoring:</strong> Firewalls/IDS, ACLs. Tools: Capsa, MS Network Monitor, ManageEngine OpManager. Kerberos, IPsec, SSL, SSH</li>
        </ul>
        <h3>Playbooks vs Runbooks</h3>
        <ul>
            <li><span class="key-term">Playbooks</span>: Pasos para incidente específico. Min: 1. Lista incidentes, 2. Roles, 3. Workflows, 4. Templates/checklists, 5. Postmortem, 6. Lessons Learned. Aprobados por management</li>
            <li><span class="key-term">Runbooks</span>: Tácticos, detallados, condicionales. DB conocimiento/experiencia. Contenido: summary, escalation diagram, investigation/containment/eradication/recovery procedures, communication, revision history</li>
        </ul>
        <h3>IR Toolkit (NIST)</h3>
        <ul>
            <li><strong>Comms:</strong> Contact info, on-call, reporting, issue tracking, smartphones, encryption (FIPS para federal), war room, secure storage</li>
            <li><strong>Analysis HW/SW:</strong> Forensic workstations, laptops, spare equipment, portable printer, packet sniffers, forensic SW, evidence tools (cameras, recorders, CoC forms, bags/tags)</li>
            <li><strong>Resources:</strong> Port lists, documentation, network diagrams, baselines, cryptographic hashes, mitigation tools</li>
        </ul>
        <h3>Communication Plan</h3>
        <ul>
            <li>Componentes: Introduction, Purpose, Scope, Policies, Roles, POC, Internal/External Communication, Media Management, Messaging, Techniques, Review, Training, Testing</li>
            <li>External: Media (FAQs, templates), Law Enforcement (POC designado), Reporting Orgs (US-CERT)</li>
        </ul>
        <h3>Métricas IR</h3>
        <ul>
            <li><span class="key-term">MTBF</span>: Mean Time Between Failures | <span class="key-term">MTTA</span>: Mean Time to Acknowledge | <span class="key-term">MTTD</span>: Mean Time to Detect</li>
            <li><span class="key-term">MTTR</span>: Mean Time to Resolve (el más útil) | <span class="key-term">MTTI</span>: Mean Time to Investigate | <span class="key-term">MTTC</span>: Mean Time to Contain</li>
            <li><span class="key-term">KRIs</span>: Key Result Indicators (post-incidente) | <span class="key-term">KCIs</span>: Key Control Indicators | <span class="key-term">SLAs</span>: Service/Customer/Multilevel/Contact-based</li>
        </ul>

        <h2>Steps 2-4: Recording, Triage, Notification</h2>
        <ul>
            <li><strong>Recording:</strong> Template CISA: Priority, Type (Compromised System, Malware, DoS, Social Engineering, Policy Violation, Lost Equipment), Timeline, Scope, Systems/Users Affected, PII Breach Info, Handling Log</li>
            <li><strong>Triage:</strong> Priorizar por severidad e impacto, categorizar tipo de incidente</li>
            <li><strong>Notification:</strong> Seguir communication plan, notificar management/técnicos/legal/stakeholders</li>
        </ul>

        <h2>Steps 5-8: Containment, Evidence, Eradication, Recovery</h2>
        <ul>
            <li><strong>Containment:</strong> Aislar sistemas, short-term y long-term. Preservar evidencia ANTES de acciones</li>
            <li><strong>Evidence Gathering:</strong> Cadena de custodia, análisis forense, causa raíz, vector de ataque</li>
            <li><strong>Eradication:</strong> Eliminar malware/backdoors, parchear vulnerabilidades, resetear credenciales</li>
            <li><strong>Recovery:</strong> Restaurar desde backups verificados, validar integridad, monitoreo intensivo, restaurar en etapas</li>
        </ul>

        <h2>Step 9: Post-Incident Activities</h2>
        <h3>Postmortem, AAR, Lessons Learned</h3>
        <ul>
            <li><span class="key-term">Postmortem</span>: Severity, Priority, Impact, Timeline, Root Cause, Learnings. Blameless review, empezar con timeline, obtener MTTR</li>
            <li><span class="key-term">AAR (After-Action Report)</span>: Recap → Review → Analysis → Areas of Improvement</li>
            <li><span class="key-term">Lessons Learned</span>: Reunión con todos. Preguntas sobre detección, causa, contención, sanitización, gaps, medidas preventivas</li>
        </ul>
        <h3>Documentation y Tools</h3>
        <ul>
            <li>Requisitos: Concise/Clear, Standard Format, Reviewed by Editors. Incluir visualizaciones</li>
            <li><span class="key-term">MagicTree</span> (tree structure, XPath) | <span class="key-term">Dradis</span> (open-source, Nmap/Nessus) | Serpico, KeepNote, Faraday</li>
        </ul>
        <h3>Impact Assessment, Review, Disclosure</h3>
        <ul>
            <li><strong>Impact:</strong> Financial losses, legal costs, downtime, goodwill damage, recovery costs</li>
            <li><strong>Review/Revise:</strong> Evaluar respuesta, actualizar controles/baselines, reemplazar sistemas obsoletos, firmas de ataque</li>
            <li><strong>Training:</strong> Role-specific awareness, campañas internas/externas, testing procedures</li>
            <li><strong>Disclosure:</strong> Legal decide. NO divulgar: datos financieros, vulns sin parchear, info nation-state. Entidades: law enforcement, regulatory, media, vendors, customers, CERTs</li>
        </ul>

        <h2>Information Sharing (NIST)</h2>
        <ul>
            <li><span class="key-term">Team-to-Team</span>: IoCs, remediation steps, IR plans, lessons learned entre IH&R teams</li>
            <li><span class="key-term">Team-to-Coordinating Team</span>: ISAC, info táctica/técnica/vulnerabilidades</li>
            <li><span class="key-term">Coordinating Team-to-Coordinating Team</span>: ISAC ↔ US-CERT, summarios periódicos</li>
            <li><strong>Técnicas:</strong> Ad hoc (llamadas/emails) | Partially automated (REST/RID over HTTPS)</li>
            <li><strong>Granular:</strong> Business Impact (alto nivel interno) vs Technical Info (IPs, malware samples - partners)</li>
            <li><strong>NIST Recommendations:</strong> Planificar antes, consultar legal, compartir durante todo lifecycle, automatizar, balancear ventajas vs riesgo</li>
        </ul>
        `
    },
    3: {
        title: "First Response",
        content: `
        <h2>Concepto de First Response</h2>
        <p><span class="key-term">First Response</span> = Primera accion realizada tras un incidente de seguridad. Puede prevenir dano adicional y facilitar el rastreo del sospechoso.</p>
        <p><span class="key-term">First Responder</span> = Primera persona en llegar a la escena del crimen para evaluar la situacion y alertar a la direccion y equipos de IR. Puede ser: administrador de red/sistema, oficial de ley, o investigador forense.</p>
        <p><strong>Conocimiento requerido:</strong> Completo dominio de investigacion forense digital. Debe preservar toda evidencia de forma simple, protegida y forensicamente solida.</p>

        <h2>Roles del First Responder</h2>
        <ul>
            <li><span class="key-term">Identificar la Escena del Crimen</span>: Establecer perimetro, listar sistemas involucrados (area, sala, edificio segun la red)</li>
            <li><span class="key-term">Proteger la Escena</span>: Se requiere orden de registro (search warrant) para buscar/confiscar evidencia digital. Proteger equipos y esperar al oficial del caso</li>
            <li><span class="key-term">Preservar evidencia temporal y fragil</span>: Informacion en pantalla o programas en ejecucion - NO esperar, tomar fotografias inmediatamente</li>
            <li><span class="key-term">Recopilar informacion del incidente</span>: Entrevistas preliminares a personas presentes, detalles y circunstancias</li>
            <li><span class="key-term">Documentar todos los hallazgos</span>: En la hoja de cadena de custodia (caso, nombre, direccion, ubicacion, fecha/hora, descripcion)</li>
            <li><span class="key-term">Empaquetar y transportar evidencia</span>: Etiquetar, colocar en bolsas de almacenamiento que bloquean senales inalambricas y protegen del sol/temperatura</li>
            <li><span class="key-term">Recopilar informacion preliminar</span>: Tipo de incidente, razon, dano potencial, evidencia dispersa, ultimo usuario del sistema, primeros en conocer el incidente</li>
        </ul>

        <h2>First Response: Diferentes Situaciones</h2>
        <p>Tres grupos pueden actuar como first responders:</p>
        <ul>
            <li><span class="key-term">Personal no forense (Local Managers)</span>: Asegurar escena, tomar notas/fotos, entregar al equipo forense. NO tocar equipos</li>
            <li><span class="key-term">Administradores de Sistema/Red</span>: Registrar pantalla si PC esta encendido, copiar logs a medio limpio, pedir aprobacion de direccion antes de apagar, aislar equipos, documentar todo. Puede tener que testificar en procedimientos legales</li>
            <li><span class="key-term">Personal Forense de Laboratorio</span>: Proceso de 6 etapas completo (documentar, recopilar, planificar busqueda, identificar/recopilar evidencia, empaquetar, transportar)</li>
        </ul>

        <h3>Errores Comunes del First Responder</h3>
        <ul>
            <li>Apagar o reiniciar el PC de la victima (se pierde datos volatiles, MAC times, logs)</li>
            <li>Asumir que componentes del PC son confiables (puede activar Trojans, malware, time bombs)</li>
            <li>No tener documentacion baseline del PC de la victima</li>
            <li>No documentar el proceso de recoleccion de datos</li>
        </ul>

        <h3>Reglas Basicas del First Responder</h3>
        <ul>
            <li>SOLO analistas forenses cualificados deben intentar recopilar/recuperar datos</li>
            <li>Intentos de personas no entrenadas pueden comprometer integridad de archivos o hacerlos inadmisibles</li>
            <li>Toda informacion en dispositivos electronicos es evidencia potencial</li>
            <li>El lugar de trabajo debe ser asegurado para mantener integridad de la escena</li>
            <li><strong>Salud y seguridad:</strong> Usar guantes de latex protectores en toda operacion (protege al personal y preserva huellas dactilares)</li>
        </ul>

        <h2>Documentar la Escena del Crimen Electronico</h2>
        <ul>
            <li>Documentacion es proceso <strong>continuo</strong> durante toda la investigacion</li>
            <li>Etiquetar TODA la evidencia disponible: ubicacion del crimen, estado del sistema, dispositivos de red, storage, smartphones, acceso a Internet</li>
            <li>Incluir: fotografias, videos, notas y bocetos de la escena</li>
            <li>Documentar procesos y actividades en pantallas</li>
            <li>Anotar el sitio y estado de computadoras, medios de almacenamiento digital y dispositivos electronicos</li>
            <li>Registrar estado de energia (power status) de todos los dispositivos</li>
        </ul>

        <h3>Fotografiar y Dibujar la Escena</h3>
        <ul>
            <li>Al llegar, lo PRIMERO es fotografiar la escena</li>
            <li>Multiples fotos para capturar toda la escena (de lo general a lo mas pequeno)</li>
            <li>Fotos de la parte trasera del PC para mostrar conexion de cables</li>
            <li>Si no se puede hacer onsite: etiquetar TODOS los cables para reconectar en laboratorio</li>
            <li>Preparar bocetos con detalles de objetos y ubicaciones</li>
        </ul>

        <h2>Planificacion de Busqueda y Confiscacion</h2>
        <p>El plan debe incluir:</p>
        <ul>
            <li>Descripcion del incidente y nombre del caso</li>
            <li>Ubicacion del incidente y jurisdiccion aplicable</li>
            <li>Determinar extension de la autoridad para buscar</li>
            <li>Crear documento de <span class="key-term">cadena de custodia</span></li>
            <li>Detalles del equipo a confiscar</li>
            <li>Tipo de busqueda: <span class="key-term">overt (abierta) o covert (encubierta)</span></li>
            <li>Aprobacion de la direccion local</li>
            <li>Precauciones de salud y seguridad (guantes de latex)</li>
        </ul>

        <h3>Informacion a Recopilar del Incidente</h3>
        <ul>
            <li>Usuarios reales de los dispositivos electronicos</li>
            <li>Informacion de cuentas de webmail y redes sociales</li>
            <li>Usernames, ISPs y passwords para acceder a recursos</li>
            <li>Proposito de uso del sistema y aplicaciones automaticas</li>
            <li>Almacenamiento offsite de datos</li>
            <li>Esquemas de seguridad o dispositivos destructivos unicos</li>
            <li>Documentacion de hardware/software instalado</li>
        </ul>

        <h2>Busqueda de Evidencia - 6 Pasos</h2>
        <ul>
            <li>1. Inspeccionar la escena para fuentes potenciales de evidencia (grabadoras, camaras, tarjetas de acceso, GPS)</li>
            <li>2. Proteger evidencia fisica o huellas ocultas en teclados, ratones y otros equipos</li>
            <li>3. Encontrar cables conectados a dispositivos (modems, caller ID boxes)</li>
            <li>4. Observar la situacion actual y registrar observaciones</li>
            <li>5. Mantener un <span class="key-term">log de busqueda y confiscacion</span> documentando todos los dispositivos</li>
            <li>6. Buscar medios secundarios de almacenamiento (discos duros, pen drives, etc.)</li>
        </ul>

        <h2>Asegurar y Evaluar la Escena del Crimen</h2>
        <ul>
            <li>Seguir procedimientos estandar de la autoridad legal</li>
            <li>Asegurar que la escena es segura para los respondedores</li>
            <li>Asegurar TODOS los dispositivos electronicos incluyendo portatiles/personales</li>
            <li>No permitir que ningun individuo acceda a la escena o dispositivos</li>
            <li>Rechazar cualquier oferta de ayuda o asistencia tecnica</li>
            <li>Aislar a otras personas presentes en la escena</li>
            <li>Establecer perimetro de seguridad para verificar si los atacantes siguen presentes</li>
            <li>Proteger datos perecederos (ej. caller ID boxes) fisica y electronicamente</li>
            <li>Documentar, desconectar y etiquetar lineas telefonicas y cables de red</li>
        </ul>

        <h2>Confiscar Evidencia en la Escena</h2>
        <ul>
            <li>Recoger TODOS los dispositivos electronicos y medios de almacenamiento (discos duros, tarjetas de memoria, medios removibles)</li>
            <li>Dispositivos portatiles: historial de navegacion, emails, chat logs, fotos, registros financieros</li>
            <li>Perifericos son evidencia potencial: info de documentos escaneados/impresos, numeros de telefono/fax</li>
            <li>Evidencia NO debe ser alterada desde el inicio hasta el final del proceso forense</li>
            <li>Todos los items confiscados: identificar, registrar, confiscar y embolsar SIN intentar determinar contenido</li>
            <li>Etiquetar toda evidencia con: fecha, hora y iniciales de la persona que recolecta</li>
        </ul>

        <h2>Recoleccion de Evidencia por Tipo de Dispositivo</h2>
        <h3>Computadoras ENCENDIDAS (Powered-ON)</h3>
        <ul>
            <li>Si pantalla visible: fotografiar y documentar programas en ejecucion, archivos abiertos, datos de valor evidencial</li>
            <li>Si muestra screensaver: mover mouse lentamente <strong>SIN presionar ningun boton</strong>, fotografiar y documentar</li>
            <li>Si laptop se despierta: registrar fecha/hora, fotografiar pantalla, documentar programas</li>
            <li><span class="key-term">DESCONECTAR inmediatamente</span> si: datos estan siendo sobrescritos/eliminados, procesos destructivos en ejecucion, o entorno Windows tipico visible</li>
            <li><span class="key-term">NO desconectar</span> si: datos evidenciales visibles en pantalla o programas/archivos activos (chatrooms, documentos financieros, mensajes instantaneos)</li>
            <li>Fotografiar y documentar toda informacion en pantalla, recolectar datos volatiles</li>
            <li>Despues de recolectar datos volatiles: desconectar cable de alimentacion desde la PARTE TRASERA del PC</li>
            <li>Portatiles: remover bateria y desconectar cable. Si bateria no es removible: mantener boton de encendido 30 segundos</li>
        </ul>

        <h3>Computadoras APAGADAS (Powered-OFF)</h3>
        <ul>
            <li><span class="key-term">Si esta apagada: DEJARLA APAGADA</span></li>
            <li>Desensamblar y empaquetar: remover cable de alimentacion (del PC y de la pared), desconectar cables, verificar medios removibles</li>
            <li>Etiquetar evidencia claramente y anotar en log de busqueda/confiscacion</li>
            <li>Documentar cadena de custodia</li>
            <li>Si monitor OFF y pantalla en blanco: encender monitor, mover mouse ligeramente, observar cambios, fotografiar</li>
            <li>Si monitor ON y pantalla en blanco: mover mouse ligeramente, si no cambia NO presionar teclas, fotografiar</li>
        </ul>

        <h3>Computadoras en RED (Networked)</h3>
        <ul>
            <li>Desconectar cable de red del router/modem (conexion activa = vulnerable a mas ataques)</li>
            <li>NO usar el PC para buscar evidencia (altera integridad)</li>
            <li>Fotografiar todos los dispositivos conectados (router, modem) desde diferentes angulos</li>
            <li>Si hay impresora/scanner en el area: fotografiar tambien</li>
            <li>Si PC apagado: seguir procedimiento de powered-off. Si encendido: seguir powered-on</li>
            <li>Empaquetar evidencia en bolsa <span class="key-term">antistatica (static-free)</span></li>
            <li>Mantener alejado de: magnetos, alta temperatura, transmisores de radio</li>
        </ul>

        <h3>Archivos Abiertos y Archivos de Inicio (Startup)</h3>
        <ul>
            <li>Malware crea archivos en <strong>carpetas de startup (Windows)</strong> y en <strong>rc.local (Linux)</strong></li>
            <li>Abrir documentos recientes de startup o system32 (Windows) y rc.local (Linux)</li>
            <li>Documentar fecha y hora de los archivos</li>
            <li>Examinar archivos abiertos buscando datos sensibles (passwords, imagenes)</li>
            <li>Buscar tiempos MAC (Modified, Accessed, Changed) inusuales en carpetas vitales</li>
            <li>Usar <strong>dir</strong> (Windows) o <strong>ls</strong> (Linux) para localizar tiempos reales de acceso</li>
        </ul>

        <h2>Procedimientos de Apagado por SO</h2>
        <h3>Windows</h3>
        <ul>
            <li>Fotografiar pantalla y documentar programas en ejecucion</li>
            <li>Click en boton Windows → Power → Shut Down</li>
            <li>Esperar hasta que se apague completamente y desconectar cable de la pared</li>
        </ul>
        <h3>macOS</h3>
        <ul>
            <li>Registrar hora de la barra de menu</li>
            <li>Click en icono Apple (arriba izquierda) → Shut Down</li>
            <li>Desconectar cable de la pared</li>
        </ul>
        <h3>UNIX/Linux</h3>
        <ul>
            <li>Click derecho en Desktop → Console</li>
            <li>Si prompt de root (#): introducir password y escribir <span class="key-term">sync;sync;halt</span></li>
            <li>Si password no disponible: desconectar cable de la pared</li>
            <li>Si user ID no es root: desconectar cable de la pared</li>
        </ul>

        <h3>Smartphones / Dispositivos Portatiles</h3>
        <ul>
            <li><strong>Si esta OFF:</strong> NO encenderlo, recolectar y etiquetar cables, verificar funciones de seguridad (patrones, passwords, biometria), buscar backups en PCs, etiquetar en log, documentar cadena de custodia</li>
            <li><strong>Si esta ON:</strong> Dejarlo como esta, mantenerlo cargado (evidencia se pierde si se apaga), fotografiar pantalla, usar <span class="key-term">bolsa Faraday</span> para bloquear senales</li>
        </ul>

        <h2>Preservacion de Evidencia</h2>
        <p>Manejo y documentacion adecuada para que la evidencia sea libre de contaminacion. Toda evidencia confiscada debe ser aislada, asegurada, transportada y preservada en su estado original.</p>
        <ul>
            <li><span class="key-term">Logbook del proyecto</span>: Registrar observaciones relacionadas con la evidencia</li>
            <li><span class="key-term">Tag de identificacion</span>: Para identificar unicamente cada pieza de evidencia</li>
            <li><span class="key-term">Registro de cadena de custodia</span>: Al transferir, emisor y receptor proporcionan fecha/hora</li>
        </ul>

        <h2>Cadena de Custodia (Chain of Custody)</h2>
        <p>Documento legal que demuestra la progresion de la evidencia desde la ubicacion original hasta el laboratorio forense. Muestra como se recolecto, analizo y preservo.</p>
        <h3>Contenido del Documento de Cadena de Custodia</h3>
        <ul>
            <li><span class="key-term">Case Number</span>: Numero unico asignado por laboratorio/agencia</li>
            <li><span class="key-term">Nombre y titulo</span> de quien se recibio</li>
            <li><span class="key-term">Direccion y telefono</span> de individuos que manejaron la evidencia</li>
            <li><span class="key-term">Ubicacion de la evidencia</span>: Lugar fisico durante extraccion/adquisicion</li>
            <li><span class="key-term">Fecha/hora de la evidencia</span></li>
            <li><span class="key-term">Razon y proceso</span> de obtencion</li>
            <li><span class="key-term">Numero de item / cantidad / descripcion</span>: Nombre, color, fabricante, info de embalaje</li>
        </ul>

        <h3>Formulario de Cadena de Custodia</h3>
        <p>Debe identificar: recolector de muestra, descripcion/tipo/numero de muestra, datos de muestreo y ubicacion, custodios de la muestra. Incluye campos para: Package #, Fecha/Hora, Released By, Received By (Name/Agency + Signature).</p>

        <h3>Contenido de la Bolsa de Evidencia</h3>
        <ul>
            <li>Fecha y hora de confiscacion</li>
            <li>Incident responder que confisco la evidencia</li>
            <li><span class="key-term">Numero de exhibit</span></li>
            <li>Sitio de confiscacion y detalles del contenido</li>
            <li>Agencia que presenta y su direccion</li>
        </ul>

        <h2>Empaquetado de Evidencia</h2>
        <ul>
            <li>Evidencia correctamente documentada, etiquetada y listada ANTES de empaquetar</li>
            <li>Atencion especial a evidencia oculta o traza</li>
            <li>Medios magneticos en <span class="key-term">empaquetado antistatico</span></li>
            <li><strong>NO usar bolsas plasticas</strong> (producen electricidad estatica)</li>
            <li>NO doblar ni rayar dispositivos de almacenamiento</li>
            <li>Etiquetar todos los contenedores apropiadamente</li>
            <li>Usar material anti-impacto: <span class="key-term">bubble wrap, Styrofoam</span></li>
        </ul>

        <h2>Numeracion de Exhibits</h2>
        <p>Formato pre-acordado: <span class="key-term">aaa/ddmmyy/nnnn/zz</span></p>
        <ul>
            <li><strong>aaa</strong> = Iniciales del analista forense u oficial que confisca</li>
            <li><strong>dd/mm/yy</strong> = Fecha de confiscacion</li>
            <li><strong>nnnn</strong> = Numero secuencial de exhibits (empezando en 001)</li>
            <li><strong>zz</strong> = Numero de secuencia para partes del mismo exhibit (A=CPU, B=monitor, C=teclado, etc.)</li>
        </ul>

        <h2>Transporte y Almacenamiento de Evidencia</h2>
        <ul>
            <li>Evidencia digital sensible a: clima extremo, impacto fisico, electricidad estatica, humedad y campos magneticos</li>
            <li>NO voltear el PC ni ponerlo de lado durante el transporte</li>
            <li>Mantener alejada de fuentes magneticas (transmisores de radio, magnetos de altavoces, asientos calefactados)</li>
            <li>Almacenar en area segura, lejos de calor/frio extremo o humedad</li>
            <li>NO almacenar en vehiculos por periodos prolongados</li>
            <li>Mantener cadena de custodia adecuada</li>
            <li>Asegurar que dispositivos inalambricos no se conecten a redes: usar <span class="key-term">contenedores bloqueadores de senal</span></li>
        </ul>
        `
    },
    4: {
        title: "Handling and Responding to Malware Incidents",
        content: `
        <h2>Introduccion al Manejo de Incidentes de Malware</h2>
        <p>Malware es la amenaza mas comun y causa dano extenso por su diseno complejo y capacidad de propagarse entre dispositivos conectados. Las organizaciones necesitan un plan de IR robusto y estructurado.</p>
        <p><strong>El equipo IH&R debe:</strong> Detectar, contener y erradicar malware. Realizar analisis estatico y dinamico de muestras. Usar herramientas de terceros para identificar proposito, servidores C&C y sistemas objetivo.</p>

        <h2>Tecnicas de Propagacion de Malware</h2>
        <ul>
            <li>Aplicaciones de mensajeria instantanea</li>
            <li>Hardware portatil / dispositivos removibles (USB)</li>
            <li>Bugs de navegador y software de email</li>
            <li>Gestion de parches insegura</li>
            <li>Aplicaciones rogue/decoy</li>
            <li>Sitios no confiables y freeware</li>
            <li>Descargas de Internet y adjuntos de email</li>
            <li>Propagacion por red: <span class="key-term">NetBIOS, FTP, SMB</span></li>
            <li>Instalacion por otro malware</li>
            <li>Bluetooth y redes inalambricas</li>
            <li>Ejecutables infectados, DLLs, macros, JavaScript, documentos</li>
        </ul>

        <h3>Tecnicas de Distribucion en la Web</h3>
        <ul>
            <li><span class="key-term">Black hat SEO</span>: Keyword stuffing, doorway pages, page swapping para posicionar paginas de malware</li>
            <li><span class="key-term">Click-jacking</span>: Inyectar malware en sitios que parecen legitimos</li>
            <li><span class="key-term">Spear-phishing sites</span>: Imitar instituciones legitimas (bancos) para robar credenciales</li>
            <li><span class="key-term">Malvertising</span>: Anuncios maliciosos en canales de publicidad legitimos</li>
            <li><span class="key-term">Drive-by downloads</span>: Descarga involuntaria al visitar un sitio (explotan fallos de navegador)</li>
            <li><span class="key-term">Spam emails</span>: Adjuntos maliciosos o malware embebido en el cuerpo del email</li>
            <li><span class="key-term">RTF injection</span>: Explotar templates RTF de Office; macros maliciosas se descargan de servidor remoto al abrir documento</li>
        </ul>

        <h2>Preparacion: Manejo Seguro de Malware</h2>
        <p>El equipo IR debe incluir: vulnerability managers, information security managers y penetration testers.</p>
        <ul>
            <li>Usar siempre <span class="key-term">VM o sandbox aislado</span> del network funcional</li>
            <li>Canales seguros dedicados para transferir archivos de malware</li>
            <li>Mantener archivos de malware <strong>comprimidos y protegidos con password</strong></li>
            <li>Modificar extensiones: ej. sample.exe → <span class="key-term">sample.exe.vir</span></li>
            <li>Almacenar en instalacion de almacenamiento aislada</li>
            <li>Excluir archivos con extensiones invalidas del escaneo antivirus</li>
            <li>Crear <span class="key-term">snapshots</span> para rollback facil tras analisis</li>
            <li>Usar hashing para fingerprint de la muestra</li>
            <li>Contener sistemas afectados en <span class="key-term">VLANs restringidas</span> con segmentacion adicional</li>
            <li>Implementar logging robusto de aplicaciones</li>
            <li>Subir archivos sospechosos a <span class="key-term">VirusTotal</span> para escaneo seguro</li>
        </ul>

        <h2>Deteccion: Indicadores de Incidentes de Malware</h2>
        <h3>Indicadores Generales</h3>
        <ul>
            <li>Flujos de trafico de red anormales</li>
            <li>Emails rebotados inexplicables</li>
            <li>Alertas, ads y popups irrelevantes</li>
            <li>Logs con intentos de port scanning, acceso no autorizado</li>
            <li>Modificacion, eliminacion o reubicacion de archivos</li>
            <li><span class="key-term">BSOD (Blue Screen of Death)</span></li>
            <li>Freeze, shutdown y crash repentinos del sistema</li>
            <li>Ralentizacion del sistema, tiempos de reboot mas largos</li>
            <li>Incapacidad de instalar actualizaciones</li>
            <li>Programas de seguridad automaticamente deshabilitados</li>
            <li>Cambios en configuracion del navegador web</li>
            <li>Procesos sospechosos en startup / instalacion de programas no aprobados</li>
            <li>Consumo de espacio de almacenamiento / puertos inusuales abiertos</li>
            <li>Creacion de cuentas de usuario desconocidas (guest o admin)</li>
            <li>Acceso a file shares desconocido / uso de protocolos desconocidos</li>
            <li>Sesiones no autorizadas / multiples failed logins</li>
            <li>Solicitudes DNS anomalas en la red</li>
            <li>Perdida subita de memoria primaria y disco duro</li>
        </ul>

        <h3>Indicadores de Trojans</h3>
        <ul>
            <li>Pantalla parpadea, se voltea, se invierte</li>
            <li>Background/wallpaper cambia automaticamente</li>
            <li>Impresoras imprimen automaticamente</li>
            <li>Paginas web se abren sin input del usuario</li>
            <li>Mouse se mueve solo / clicks incontrolables</li>
            <li>Teclado y mouse se congelan</li>
            <li>Contactos reciben emails que el usuario no envio</li>
            <li>Task Manager deshabilitado</li>
            <li>Dispositivos/aplicaciones se cifran solos</li>
            <li>Actividad de red inusual cuando usuario no esta activo</li>
        </ul>

        <h3>Indicadores de Virus</h3>
        <ul>
            <li>Procesos usan mas recursos y tiempo (rendimiento reducido)</li>
            <li>PC emite beeps sin display / etiquetas de drives cambian</li>
            <li>Alertas constantes de antivirus / archivos y carpetas desaparecen</li>
            <li>Espacio de almacenamiento insuficiente / logout inesperado</li>
            <li>Archivos con multiples extensiones (.exe, .vbs, .gif, .jpg)</li>
            <li>Archivos duplicados o corruptos</li>
        </ul>

        <h3>Indicadores de Fileless Malware</h3>
        <ul>
            <li>Modificaciones inesperadas en contenido de RAM</li>
            <li>Patrones y trazas de red inusuales</li>
            <li>Conexiones inusuales del PC con servidor remoto</li>
            <li>Codigo malicioso en firmware (BIOS, tarjeta de red)</li>
            <li>Cambios inesperados en archivos del registro de Windows</li>
            <li>Altos volumenes de transferencia de datos</li>
            <li>Uso alto del sistema sin procesos activos</li>
            <li>Multiples intentos de login privilegiado fuera de horario</li>
            <li>Consultas inusuales a Active Directory</li>
            <li>Acceso denegado a herramientas Windows (WMI, PowerShell)</li>
            <li>Presencia de archivos Macro de Microsoft Office maliciosos</li>
        </ul>

        <h2>Deteccion con Reglas YARA</h2>
        <p><span class="key-term">YARA</span> = Herramienta de investigacion de malware basada en reglas. Multiplataforma (Windows, macOS, Linux). Crea "reglas" = descripciones de familias de malware usando patrones de texto o binarios.</p>
        <h3>Estructura de una Regla YARA (3 partes)</h3>
        <ul>
            <li><span class="key-term">Condition</span>: Expresiones booleanas que definen cuando un match es verdadero</li>
            <li><span class="key-term">Strings</span>: Define strings a buscar (hexadecimales, texto, regex)</li>
            <li><span class="key-term">Metadata</span>: Informacion general para identificar archivos (descripcion, autor, hash)</li>
        </ul>
        <p><strong>Ejemplo:</strong> rule silent_banker : banker { meta: description = "..." strings: $a = {6A 40 68...} $b = {8D 4D...} $c = "UVODFRY..." condition: $a or $b or $c }</p>
        <p><strong>Herramientas YARA:</strong> <span class="key-term">yarGen</span> (genera reglas eliminando strings de goodware), Koodous, YaraRET, YARA Silly, Halogen, Yabin</p>

        <h2>Herramientas de Deteccion</h2>
        <h3>Deteccion de Fileless Malware</h3>
        <ul>
            <li><span class="key-term">SentinelOne XDR</span>: Analiza comportamiento de procesos en memoria (no archivos ejecutables). Agente recolecta: users, procesos, argumentos CLI, registros, archivos y canales de comunicacion. Detecta, analiza y mitiga automaticamente</li>
            <li><span class="key-term">AlienVault USM Anywhere</span>: Plataforma unificada: asset discovery, vulnerability assessment, IDS, behavioral monitoring, SIEM, log management. Detecta fileless attacks incluso sin firmas/IoCs</li>
            <li>Otros: Quick Heal Total Security, Apex One, Logsign, FortiGuard, CYNET EDR</li>
        </ul>

        <h3>Deteccion de RATs (Remote Access Trojans)</h3>
        <ul>
            <li><span class="key-term">SolarWinds Security Event Manager (SEM)</span>: Deteccion comportamental de RATs, reglas de correlacion integradas, recolecta datos de multiples fuentes de logs</li>
            <li>Otros: Malwarebytes, <span class="key-term">Snort</span>, <span class="key-term">OSSEC</span>, <span class="key-term">Zeek</span>, <span class="key-term">Suricata</span></li>
        </ul>

        <h3>Deteccion de Malware en Trafico Cifrado</h3>
        <ul>
            <li><span class="key-term">Flowmon</span>: Obtiene metadata de trafico en formato IPFIX con info de protocolo TLS. Detecta certificados SSL antiguos, no conformes, y versiones TLS obsoletas</li>
            <li><span class="key-term">Cisco Encrypted Traffic Analytics</span></li>
            <li>ThreatEye, Juniper ATP, Bitdefender NTA, ExtraHop Reveal(x) 360</li>
        </ul>

        <h2>Contencion de Incidentes de Malware</h2>
        <p>Objetivo: Prevenir propagacion y minimizar impacto. Estrategias varian segun naturaleza del malware.</p>
        <ul>
            <li>Separar host comprometido de la red operacional</li>
            <li>Analizar logs de red para encontrar propagacion via archivos compartidos</li>
            <li>Si multiples sistemas comprometidos: cortar servicios de red y <strong>priorizar por importancia para continuidad de negocio</strong></li>
            <li>Usar <span class="key-term">VLANs separadas</span> para hosts infectados</li>
            <li>Permitir conexiones para dispositivos no comprometidos via ACL o VPN</li>
            <li>Iniciar analisis del host para encontrar firmas, patrones o comportamientos del malware</li>
            <li>Deshabilitar servicios/aplicaciones/sistemas objetivo hasta parchear vulnerabilidades</li>
            <li>Bloquear puertos innecesarios en host y firewall</li>
            <li>Ejecutar antivirus, firewall e IDS a nivel de host</li>
            <li>Ejecutar herramientas de monitoreo de registro para encontrar entradas maliciosas</li>
            <li>Revisar trafico de red y <strong>bloquear acceso al servidor C&C</strong></li>
            <li>Resetear todas las credenciales, especialmente de administrador</li>
            <li>Formatear sistemas y reinstalar OS despues de tomar <span class="key-term">imagen forense</span></li>
            <li>Agregar IoCs (hash value) a endpoint protection: configurar para bloquear y alertar</li>
        </ul>
        <p><strong>Herramientas de Contencion:</strong> <span class="key-term">Infoblox</span> (contencion via DNS e inteligencia de amenazas), <span class="key-term">Rubrik</span>, Microsoft Defender for Endpoint, Illumio, Comodo, Netwrix, ZoneAlarm</p>

        <h2>Analisis de Malware</h2>
        <h3>Preparacion del Testbed (9 pasos)</h3>
        <ul>
            <li>1. Asignar sistema fisico para el laboratorio de analisis</li>
            <li>2. Instalar maquina virtual (VMware, Hyper-V)</li>
            <li>3. Instalar OS guest en la VM</li>
            <li>4. Aislar del network: NIC card en modo <span class="key-term">"host only"</span></li>
            <li>5. Simular servicios de Internet con <span class="key-term">INetSim</span></li>
            <li>6. Deshabilitar "shared folders" y "guest isolation"</li>
            <li>7. Instalar herramientas de analisis de malware</li>
            <li>8. Generar hash de cada OS y herramienta</li>
            <li>9. Copiar malware al OS guest</li>
        </ul>

        <h3>Hardware del Toolkit de Malware</h3>
        <ul>
            <li>Jump kit con diferentes conectores para adquirir y hacer backup</li>
            <li>Medios de almacenamiento para datos respaldados</li>
            <li>Dispositivo write-protected para prevenir modificacion de datos</li>
            <li>Laptop equipado con herramientas de software</li>
            <li>Equipamiento y cables de networking basico</li>
        </ul>

        <h3>Herramientas de Software para Analisis</h3>
        <ul>
            <li><strong>Imaging tool:</strong> Para imagen limpia con fines forenses</li>
            <li><strong>File/data analysis:</strong> Para analisis estatico de archivos potencialmente maliciosos</li>
            <li><strong>Registry/configuration tools:</strong> Identificar ultimas configuraciones guardadas</li>
            <li><strong>Sandbox:</strong> Para analisis dinamico manual</li>
            <li><strong>Log analyzers:</strong> Extraer archivos de log de dispositivos atacados</li>
            <li><strong>Network capture:</strong> Entender como malware aprovecha la red</li>
        </ul>

        <h2>Erradicacion de Incidentes de Malware</h2>
        <h3>Erradicacion de Trojans</h3>
        <ul>
            <li>No abrir adjuntos de emails de remitentes desconocidos</li>
            <li>Bloquear puertos innecesarios en host y firewall</li>
            <li>Monitorear trafico interno para puertos raros o trafico cifrado</li>
            <li>Instalar parches y actualizaciones regularmente</li>
            <li>Escanear dispositivos USB con antivirus antes de usar</li>
            <li>Restringir permisos de desktop para prevenir instalacion maliciosa</li>
            <li>Deshabilitar programas de startup sospechosos y bloquear procesos en background</li>
            <li>Cambiar TODAS las passwords de cuenta y red a passwords complejas</li>
            <li>Usar spam filter para prevenir emails maliciosos</li>
        </ul>

        <h3>Erradicacion de Virus y Worms</h3>
        <ul>
            <li>Instalar y actualizar antivirus para deteccion y eliminacion en tiempo real</li>
            <li>Desarrollar politica antivirus y distribuir a todo el staff</li>
            <li>Backups regulares de datos criticos</li>
            <li>Asegurar que codigo ejecutable ha sido aprobado</li>
            <li>NO bootear con discos de sistema infectados</li>
            <li>Activar popup blockers y usar firewalls de Internet</li>
            <li>Cerrar canales de red interna/externa para desconectar comunicacion C&C del virus</li>
            <li>Actualizar reglas de firewall para bloquear futuros ataques similares</li>
            <li>Cuarentena de sistemas infectados + analisis forense digital</li>
            <li>Eliminar archivos temporales para prevenir ejecucion de virus al bootear</li>
        </ul>

        <h3>Erradicacion de Ransomware</h3>
        <ul>
            <li>Desconectar TODAS las conexiones internas y externas para prevenir propagacion</li>
            <li>Escaneos regulares con software de seguridad de Internet</li>
            <li>Cuarentena de sistemas afectados + herramientas de eliminacion relevantes</li>
            <li>Usar <span class="key-term">herramientas de descifrado apropiadas</span> para acceder a datos cifrados</li>
            <li>Backup regular de datos para proteger contra cifrado</li>
            <li>Monitorear puertos TCP: <span class="key-term">RDP, SMB</span> (usados por ransomware)</li>
            <li>Asegurar que antivirus y soluciones de proteccion contra ransomware estan actualizados</li>
        </ul>

        <h3>Herramientas Antivirus</h3>
        <ul>
            <li><span class="key-term">TotalAV</span>: Proteccion real-time, escaneos programados, bloquea cookies, ads/popups, monitorea breaches</li>
            <li><span class="key-term">Bitdefender Antivirus Plus</span></li>
            <li><span class="key-term">Kaspersky Antivirus</span></li>
            <li><span class="key-term">McAfee Total Protection</span></li>
            <li><span class="key-term">Norton AntiVirus Plus</span></li>
            <li><span class="key-term">Avast Premium Security</span></li>
        </ul>

        <h3>Anti-Trojan Software</h3>
        <ul>
            <li><span class="key-term">Malwarebytes</span>: Para Windows, macOS, ChromeOS, Android, iOS. Proteccion real-time: web, malware, ransomware, exploits</li>
            <li>Bitdefender Total Security, Norton 360, <span class="key-term">HitmanPro</span>, Plumbytes, AVG</li>
        </ul>

        <h2>Recuperacion tras Incidentes de Malware</h2>
        <ul>
            <li>Reimaginar y reconstruir sistemas infectados desde cero, o eliminar contencion temporal</li>
            <li>Borrar todos los datos de sistemas comprometidos y wipe de medios de almacenamiento</li>
            <li>Recuperar datos con herramientas de recuperacion, backups confiables o cloud sync</li>
            <li>Escanear hosts y file shares con firmas antivirus actualizadas</li>
            <li>Full scans en backups antes de usarlos para restaurar servidores/sistemas/BDs</li>
            <li>Evaluar riesgos de seguridad pre-produccion antes de recuperar servicios</li>
            <li>Restaurar email tras bloquear remitentes maliciosos a nivel de servidor</li>
            <li>TODOS los empleados cambian passwords + habilitar <span class="key-term">2FA</span></li>
            <li>Deshabilitar file sharing automatico; habilitar con autenticacion si necesario</li>
            <li>Conectar sistemas a red limpia para descargar, instalar y actualizar OS</li>
            <li>Implementar <span class="key-term">estrategia de backup 3-2-1</span> (3 copias, 2 medios, 1 offsite)</li>
            <li>Wipe completo incluyendo <span class="key-term">MBR (Master Boot Record)</span></li>
            <li>Usar <span class="key-term">Windows System Restore</span> para recuperar datos con point-in-time backups</li>
            <li>Reconstruir BIOS, drivers desde libreria de software confiable y verificar hashes</li>
        </ul>
        <p><strong>Herramientas de Recuperacion:</strong> <span class="key-term">EaseUS Data Recovery Wizard</span>, Remo Recover, Stellar Data Recovery Professional, Trellix Ransomware Recover, NAKIVO</p>

        <h2>Caso de Estudio: Ransomware Prestige</h2>
        <p>Ataque a entidades de transporte y logistica en <strong>Ucrania y Polonia</strong>, desplegado por APT group ruso <span class="key-term">IRIDIUM</span> el 11 octubre 2022.</p>
        <ul>
            <li><strong>Identificacion:</strong> Equipo Microsoft realizo attribution assessment basado en artefactos forenses, TTPs de IRIDIUM. Herramientas de ejecucion remota: <span class="key-term">RemoteExec e Impacket WMIexec</span>. Herramientas open-source para escalada: winPEAS, comsvcs.dll, ntdsutil.exe</li>
            <li><strong>IoCs:</strong> 3 SHA-256 hashes del payload del ransomware + import hash (a32bbc5df...) + ruta del ransom note: <span class="key-term">C:\Users\Public\README</span></li>
            <li><strong>Triage:</strong> Ataque destructivo orientado a companias que apoyaban a Ucrania en guerra. Etiquetado como "Critico" para Europa del Este</li>
            <li><strong>Contencion:</strong> Notificacion a victimas y otras entidades de transporte</li>
            <li><strong>Forense:</strong> Malware termina servicio MSSQL (net.exe stop). Crea directorio para ransom note. Cifra archivos con clave publica <span class="key-term">RSA X509</span> hardcoded. Extensiones cifradas: .enc. Handler personalizado via registro: HKCR\.enc</li>
            <li><strong>Erradicacion:</strong> Deshabilitar creacion de procesos con PsExec y WMI. Activar tamper protection y cloud-delivered protection en Defender. Habilitar MFA para todos los activos remotos (VPN). Eliminar archivos sospechosos (wbadmin.exe, vssadmin.exe). Usar <span class="key-term">Microsoft Sentinel</span> para threat hunting</li>
            <li><strong>Lecciones:</strong> Importancia de monitorear actividad de red en dominios. Atacantes pueden abusar servicios propietarios (WMI, PsExec)</li>
        </ul>

        <h2>Mejores Practicas contra Malware</h2>
        <ul>
            <li>Revisar y actualizar politicas de prevencion regularmente</li>
            <li>Educar usuarios sobre ataques recientes y acciones preventivas</li>
            <li>Suscribirse a boletines antivirus</li>
            <li>Desplegar IDS/IPS basados en red y sistemas de firewall</li>
            <li>Instalar IDS basados en host en hosts criticos</li>
            <li>Asegurar que todos los dispositivos usan la ultima version de antivirus</li>
            <li>Restringir uso de dispositivos removibles salvo que sea necesario</li>
            <li>Verificar firewalls actualizados con firmas que bloqueen spyware</li>
            <li>Activar funciones de seguridad del navegador: deshabilitar JavaScript, habilitar popup blocking</li>
            <li>Usar clientes de email seguros con firmas digitales y cifrado PGP</li>
            <li>NO abrir extensiones: .bat, .com, .exe, .pif, .vbs</li>
            <li>Usar MFA antes de permitir acceso a red</li>
            <li>Solo acceder a sitios HTTPS autenticados con URL valida</li>
            <li>Whitelist de aplicaciones requeridas y bloquear programas no autorizados</li>
            <li>Separar redes logicamente por departamento/operacion</li>
            <li>Incorporar <span class="key-term">SIEM con IA</span> para automatizar identificacion y mitigacion</li>
            <li>Eliminar cuentas inactivas y aplicar principio de <span class="key-term">least-privilege</span></li>
        </ul>

        <h3>Mejores Practicas contra Fileless Malware</h3>
        <ul>
            <li>Terminar procesos sospechosos/desconocidos</li>
            <li>Monitorear trafico de red y activity logs regularmente</li>
            <li>Usar VPN para cifrar trafico de Internet</li>
            <li>Deshabilitar <span class="key-term">PowerShell y WMI</span> cuando no se usen</li>
            <li>Deshabilitar macros y evitar macros sin firma digital</li>
            <li>Monitorear RAM regularmente (fileless malware se oculta en memoria)</li>
            <li>Evitar deteccion basada en firmas; usar <span class="key-term">global threat feeds, pattern analysis y fingerprinting</span></li>
            <li>Analisis comportamental via soluciones <span class="key-term">EDR</span></li>
            <li>Usar GPOs o registry keys para implementar politicas sobre DDE y macros</li>
            <li>Configurar reglas <span class="key-term">ASR (Attack Surface Reduction)</span></li>
        </ul>
        <p><strong>Herramientas Fileless Malware:</strong> Microsoft Defender for Endpoint, Kaspersky Endpoint Security, <span class="key-term">SentinelOne</span>, BlackBerry Spark Suites, Norton 360, Sophos EDR</p>
        `
    },
    5: {
        title: "Handling and Responding to Email Security Incidents",
        content: `
        <h2>Introduccion a Incidentes de Seguridad de Email</h2>
        <p>Email = vector de ataque popular por su uso masivo. Phishing y adjuntos maliciosos representan mas de un cuarto de todos los ataques de ciberseguridad.</p>
        <p><strong>Dos categorias de crimenes por email:</strong></p>
        <ul>
            <li><span class="key-term">Crimenes cometidos enviando emails</span>: Spamming, Phishing, Mail bombing, Mail storms, Distribucion de malware</li>
            <li><span class="key-term">Crimenes soportados por emails</span>: Robo de identidad, Cyberstalking, Fraude</li>
        </ul>

        <h2>Tipos de Incidentes de Seguridad de Email</h2>
        <ul>
            <li><span class="key-term">Spamming</span>: Correo masivo no solicitado (crimen en Estado de Washington, no ilegal en muchos otros)</li>
            <li><span class="key-term">Phishing</span>: Suplantacion para robar credenciales/informacion sensible</li>
            <li><span class="key-term">Mail Bombing</span>: Envio masivo de emails para saturar servidor/buzon</li>
            <li><span class="key-term">Mail Storms</span>: Avalancha de emails causada por respuestas masivas en cadena</li>
            <li><span class="key-term">Distribucion de Malware</span>: Adjuntos o enlaces maliciosos en emails</li>
            <li><span class="key-term">Robo de Identidad</span>: Suplantacion de identidad usando informacion obtenida por email</li>
            <li><span class="key-term">Cyberstalking</span>: Acoso sistematico usando email como vector</li>
        </ul>

        <h3>Tipos de Phishing</h3>
        <ul>
            <li><span class="key-term">Spear Phishing</span>: Dirigido a individuos o grupos especificos</li>
            <li><span class="key-term">Whaling</span>: Phishing dirigido a ejecutivos de alto nivel (CEO, CFO)</li>
            <li><span class="key-term">Pharming</span>: Redirigir trafico de sitio legitimo a uno fraudulento (DNS poisoning)</li>
            <li><span class="key-term">Spimming</span>: Spam a traves de mensajeria instantanea</li>
            <li><span class="key-term">BEC (Business Email Compromise)</span>: Fraude empresarial suplantando identidad corporativa</li>
        </ul>

        <h2>Preparacion para Manejar Incidentes de Email</h2>
        <h3>Email Filtering</h3>
        <ul>
            <li>Filtrar emails entrantes usando reglas predefinidas para bloquear spam/malware</li>
            <li><strong>Herramientas:</strong> <span class="key-term">MailWasher PRO</span>, N-able Mail Assure, <span class="key-term">SpamBully</span></li>
        </ul>
        <h3>Email Monitoring</h3>
        <ul>
            <li>Monitorear actividad de email para detectar comportamiento anomalo</li>
            <li><strong>Herramientas:</strong> <span class="key-term">Teramind</span> (monitoreo de actividad de usuario), Inbound Shield, <span class="key-term">SolarWinds Mail Monitor</span></li>
        </ul>
        <h3>Email Log Analysis</h3>
        <ul>
            <li>Analizar logs para identificar patrones de ataque y timeline</li>
            <li><strong>Herramientas:</strong> <span class="key-term">Tracemail</span>, Mailgun</li>
        </ul>

        <h2>Deteccion de Incidentes de Email</h2>
        <h3>Indicadores de Ataque por Email</h3>
        <ul>
            <li>Remitente sospechoso o dominio similar (typosquatting)</li>
            <li>Urgencia o presion para actuar inmediatamente</li>
            <li>Enlaces a dominios falsos o URLs acortadas</li>
            <li>Errores gramaticales u ortograficos</li>
            <li>Solicitud de informacion sensible (passwords, datos bancarios)</li>
            <li>Adjuntos inesperados (.exe, .zip, macros)</li>
            <li>Inconsistencias en headers del email</li>
            <li>Saludos genericos ("Dear Customer" en vez del nombre)</li>
            <li>Ofertas demasiado buenas para ser ciertas</li>
        </ul>

        <h3>Deteccion de Spear Phishing (11 verificaciones)</h3>
        <ul>
            <li>Verificar direccion del remitente contra base de datos interna</li>
            <li>Verificar dominio del remitente (dominios similares/typosquatting)</li>
            <li>Analizar urgencia del mensaje y solicitud de accion inmediata</li>
            <li>Verificar adjuntos en sandbox antes de abrir</li>
            <li>Examinar URLs sin hacer click (hover para ver destino real)</li>
            <li>Verificar coherencia con comunicaciones previas del remitente</li>
            <li>Buscar discrepancias en firma del email</li>
            <li>Verificar si solicita informacion sensible inusual</li>
            <li>Comprobar headers para verificar autenticidad</li>
            <li>Consultar con el supuesto remitente por otro canal</li>
            <li>Reportar al equipo de seguridad si algo parece sospechoso</li>
        </ul>

        <h3>Herramientas de Deteccion de Spear Phishing</h3>
        <ul>
            <li><span class="key-term">Barracuda Impersonation Protection</span></li>
            <li><span class="key-term">Avanan</span> (Check Point)</li>
            <li><span class="key-term">BrandShield</span></li>
            <li><span class="key-term">Cofense</span></li>
            <li><span class="key-term">Mimecast</span></li>
            <li><span class="key-term">Proofpoint TAP</span> (Targeted Attack Protection)</li>
        </ul>

        <h2>Contencion de Incidentes de Email</h2>
        <ul>
            <li>Aislar sistemas afectados y realizar entrevistas a usuarios afectados</li>
            <li>Analisis comportamental de sistemas afectados</li>
            <li>Bloquear IPs y URLs maliciosas en firewalls y proxies</li>
            <li>Escanear todos los sistemas con antivirus actualizado</li>
            <li>Habilitar <span class="key-term">MFA</span> en todas las cuentas comprometidas</li>
            <li>Habilitar <span class="key-term">mailbox auditing</span> para rastrear actividad</li>
            <li>Bloquear remitente y dominio malicioso en el servidor de email</li>
            <li>Eliminar emails maliciosos de todos los buzones de la organizacion</li>
            <li>Resetear credenciales de cuentas comprometidas</li>
        </ul>

        <h2>Analisis de Incidentes de Email</h2>
        <h3>ThePhish - Plataforma de Analisis Automatizado</h3>
        <ul>
            <li><span class="key-term">ThePhish</span>: Plataforma integrada con <span class="key-term">TheHive</span> (gestion de casos), <span class="key-term">MISP</span> (threat intelligence) y <span class="key-term">Cortex</span> (analisis automatizado)</li>
            <li>Automatiza analisis de emails sospechosos reportados por usuarios</li>
            <li>Clasifica emails como: Clean, Suspicious o Malicious</li>
        </ul>

        <h3>Herramientas de Deteccion de Phishing</h3>
        <ul>
            <li><span class="key-term">Netcraft</span>: Detecta sitios de phishing y proporciona proteccion anti-phishing</li>
            <li><span class="key-term">PhishTank</span>: Base de datos colaborativa de URLs de phishing verificadas</li>
            <li><span class="key-term">ScanURL</span>: Verifica seguridad de URLs antes de acceder</li>
            <li><span class="key-term">VirusTotal</span>: Analisis multi-motor de archivos y URLs</li>
            <li><span class="key-term">AbuseIPDB</span>: Base de datos de IPs reportadas como maliciosas</li>
            <li><span class="key-term">urlscan.io</span>: Escanea y analiza URLs de forma segura</li>
        </ul>

        <h2>Analisis de Email Headers</h2>
        <p><strong>Regla clave:</strong> Los headers <span class="key-term">Received</span> se leen de <strong>ABAJO hacia ARRIBA</strong> para trazar la ruta del mensaje.</p>
        <ul>
            <li><span class="key-term">From</span>: Puede ser falsificado facilmente</li>
            <li><span class="key-term">Return-Path</span>: Direccion real de rebote</li>
            <li><span class="key-term">Received</span>: Ruta del mensaje (cada servidor anade uno). Header mas bajo = origen</li>
            <li><span class="key-term">X-Originating-IP</span>: IP de origen real del remitente</li>
            <li><span class="key-term">Message-ID</span>: Identificador unico generado por el servidor de envio</li>
            <li><span class="key-term">X-Mailer</span>: Cliente de email utilizado</li>
        </ul>
        <p><strong>Headers forjados:</strong> Los atacantes pueden falsificar la mayoria de headers. El equipo IH&R debe comparar info de headers con logs del servidor para detectar inconsistencias.</p>

        <h3>Autenticacion de Email: SPF, DKIM, DMARC</h3>
        <ul>
            <li><span class="key-term">SPF (Sender Policy Framework)</span>: Verifica que el servidor de envio esta autorizado para el dominio</li>
        </ul>
        <p><strong>Resultados SPF:</strong></p>
        <ul>
            <li><strong>None:</strong> No se puede verificar (sin registro SPF)</li>
            <li><strong>Pass:</strong> Servidor autorizado</li>
            <li><strong>Neutral:</strong> El propietario del dominio no puede verificar</li>
            <li><strong>Fail:</strong> Servidor NO autorizado (email debe ser rechazado)</li>
            <li><strong>SoftFail:</strong> Probablemente no autorizado (aceptar pero marcar)</li>
            <li><strong>TempError / PermError:</strong> Error temporal o permanente en verificacion</li>
        </ul>
        <ul>
            <li><span class="key-term">DKIM (DomainKeys Identified Mail)</span>: Firma digital del mensaje que verifica integridad</li>
        </ul>
        <p><strong>Resultados DKIM:</strong></p>
        <ul>
            <li><strong>Pass:</strong> Firma valida</li>
            <li><strong>Neutral:</strong> Resultado aceptable sintacticamente pero no verificable</li>
            <li><strong>Fail:</strong> Firma invalida (mensaje alterado o forjado)</li>
            <li><strong>Policy:</strong> Firma no verificable por politica del dominio</li>
            <li><strong>TempError / PermError:</strong> Error temporal o permanente</li>
        </ul>
        <ul>
            <li><span class="key-term">DMARC (Domain-based Message Authentication, Reporting and Conformance)</span>: Politica que combina SPF + DKIM para decidir que hacer con emails que fallan autenticacion (none/quarantine/reject)</li>
        </ul>

        <h3>Verificacion de Validez de Email</h3>
        <ul>
            <li><span class="key-term">Email Dossier</span>: Verificacion de direcciones de email</li>
            <li><span class="key-term">Hunter's Email Verifier</span>: Verifica existencia y validez de cuentas</li>
        </ul>

        <h3>Examinar IP de Origen</h3>
        <ul>
            <li>Usar <span class="key-term">WHOIS lookup</span> para obtener informacion geografica y organizacional de la IP</li>
            <li>Identificar ISP, direccion, pais del remitente original</li>
        </ul>

        <h3>Herramientas de Analisis de Headers</h3>
        <ul>
            <li><span class="key-term">MxToolbox</span>: Analisis completo de headers de email</li>
            <li><span class="key-term">Google Admin Toolbox</span>: Analizador de headers integrado</li>
            <li>Email Header Analyzer (dnschecker.org)</li>
            <li>EmailSherlock</li>
        </ul>

        <h3>Herramientas de Tracking de Email</h3>
        <ul>
            <li><span class="key-term">eMailTrackerPro</span>: Traza email hasta ubicacion de origen, analiza headers, revela ubicacion geografica e IP del remitente</li>
            <li>MailTracker, Zendio, Trace Email, Email Tracer, G-Lock Analytics</li>
        </ul>

        <h2>Analisis de Logs de Email</h2>
        <h3>Logs de Sistema (IIS)</h3>
        <ul>
            <li>Ubicacion default de logs IIS: <span class="key-term">%SystemDrive%\inetpub\logs\LogFiles</span></li>
            <li>Pasos: Ejecutar "inetmgr" → Sites → Seleccionar sitio → Logging → ver Directory</li>
        </ul>

        <h3>Logs de Microsoft Exchange Server</h3>
        <ul>
            <li>Microsoft Exchange usa <span class="key-term">ESE (Extensible Storage Engine)</span> con <span class="key-term">MAPI</span></li>
            <li>Archivos a analizar: <strong>.edb</strong> (info MAPI), <strong>.stm</strong> (info no-MAPI), checkpoints, temporales</li>
            <li>Checkpoint files: determinan si datos se perdieron tras ultimo backup</li>
            <li>Temporary files: info recibida por servidor ocupado, recuperable para investigacion</li>
            <li>Transaction logs: preservan modificaciones en BD, determinan si email fue enviado/recibido</li>
            <li>Usar <span class="key-term">Windows Event Viewer</span> para tracking logs y diagnostic logs</li>
            <li>Usar <span class="key-term">PAL (Performance Analysis of Logs)</span> para monitorear y analizar</li>
            <li>Comando PowerShell: <span class="key-term">Get-MessageTrackingLog</span> para trazar flujo de email</li>
        </ul>

        <h3>Logs de Servidor Linux</h3>
        <ul>
            <li>Emails enviados con <span class="key-term">sendmail</span> que usa <span class="key-term">Syslog</span> para logs</li>
            <li>Config: <strong>/etc/syslog.conf</strong> → ubicacion de log: <span class="key-term">/var/log/maillog</span></li>
            <li>Contiene: IPs origen/destino, timestamps y metadata para validar headers</li>
        </ul>

        <h3>Logs de Red (Pfsense Firewall)</h3>
        <ul>
            <li>Verificar timeline e IPs comparando info de headers con logs de routers/firewalls</li>
            <li>Pfsense GUI: Status → System Logs → filtrar entradas con Advance Log Filter</li>
        </ul>

        <h3>Logs SMTP</h3>
        <ul>
            <li>Ubicacion: <span class="key-term">C:\WINDOWS\system32\LogFiles\SMTPSVC1</span></li>
            <li>Pasos: IIS Manager → SMTP Virtual Server → Properties → Enable Logging → Advanced tab</li>
            <li>Herramienta: <span class="key-term">EventLog Analyzer</span> (ManageEngine) para analisis de logs de email a nivel servidor</li>
        </ul>

        <h3>Codigos SMTP Importantes</h3>
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

        <h2>Erradicacion de Incidentes de Email</h2>
        <ul>
            <li>Recopilar detalles del incidente (URL, hostname, subject, sender, IP) via analisis de headers y <strong>bloquear en servidores, herramientas de seguridad y dispositivos de red</strong></li>
            <li>Alertar inmediatamente a empleados y entrenarlos para diagnosticar</li>
            <li>Actualizar herramientas antiphishing/antispam con nuevas firmas</li>
            <li>Identificar patrones comunes y bloquear en servidor SMTP</li>
            <li>Revisar logs SMTP para encontrar emails similares enviados a otros empleados y eliminarlos</li>
            <li>Usar <span class="key-term">DNS blackholing</span> para bloquear IPs de emails maliciosos</li>
            <li>Buscar ayuda de agencias gubernamentales y <span class="key-term">APWG</span> (Anti-Phishing Working Group)</li>
            <li>Bloquear y eliminar cuentas impactadas, emitir nuevas cuentas</li>
            <li>Todos los empleados cambian passwords + implementar <span class="key-term">MFA</span></li>
            <li>Implementar politicas de verificacion multiple para transacciones financieras</li>
            <li>Blacklist sitios maliciosos y deshabilitar descargas automaticas</li>
            <li>Escanear sistemas afectados con antivirus next-gen</li>
            <li>Instalar extensiones de navegador que detecten phishing/spam</li>
            <li>Usar cifrado o VPN para comunicaciones por email</li>
            <li>Desplegar herramientas: <span class="key-term">SPAMfighter, SpamTitan, MailWasher</span></li>
            <li>Informar a organizaciones/bancos cuyo email fue suplantado</li>
            <li>Parchear vulnerabilidades explotadas + root cause analysis</li>
            <li>Revisar DNS logs para encontrar cuentas que accedieron a dominios maliciosos</li>
            <li>Restaurar sistemas afectados con backup confiable</li>
        </ul>

        <h3>Reportar Phishing a Proveedores de Email</h3>
        <ul>
            <li><strong>Gmail:</strong> Tres puntos → Report spam / Report phishing</li>
            <li><strong>Outlook:</strong> Tres puntos (More Actions) o boton Report → Report junk / Report phishing</li>
            <li><strong>Yahoo Mail:</strong> Checkbox → opcion Spam en toolbar</li>
        </ul>

        <h2>Recuperacion tras Incidentes de Email</h2>
        <ul>
            <li>Cambiar password de cuentas afectadas y cuentas relacionadas. Eliminar permanentemente cuentas comprometidas y emitir nuevas</li>
            <li>Informar a bancos e instituciones financieras → bloquear cuentas comprometidas</li>
            <li>Restaurar sistemas comprometidos usando backups: escanear, actualizar y parchear</li>
            <li>Contactar <span class="key-term">law enforcement</span> con detalles: email del atacante, email del receptor, nombre/ubicacion de organizacion, datos bancarios, numero SWIFT, fecha/hora, monto de transaccion</li>
            <li>Reclamar seguro en caso de gran perdida financiera</li>
            <li>Verificar con banco si transacciones pueden ser revertidas (CEO scam)</li>
            <li>Presentar denuncia en departamento de cibercrimen: fecha/hora, monto perdido, IP/email fraudulento, historial de phishing</li>
            <li>Backup completo del sistema antes de remediacion + actualizar software con parches</li>
        </ul>

        <h3>Recuperacion de Emails Eliminados</h3>
        <ul>
            <li><strong>Gmail:</strong> Emails eliminados van a Trash (no se borran completamente). Ir a Trash → seleccionar email → Move to inbox/carpeta</li>
            <li><strong>Outlook:</strong> Deleted Items → seleccionar → Restore. Si Deleted Items esta vacio: Recover Items from Server</li>
            <li><strong>Yahoo:</strong> Trash → seleccionar → Mover a carpeta deseada</li>
        </ul>
        `
    },
    6: {
        title: "Handling and Responding to Network Security Incidents",
        content: `
        <h2>Incidentes de Seguridad de Red - Conceptos Clave</h2>
        <p>Las redes organizacionales son sistemáticamente rastreadas y secuestradas por atacantes. El equipo IH&R debe detectar, contener y erradicar incidentes de red para asegurar la continuidad del negocio.</p>

        <h3>Categorías de Incidentes de Red (Tabla 6.1)</h3>
        <ul>
            <li><span class="key-term">Unauthorized Access Incidents</span>: Acceso no autorizado a sistemas/red
                <ul>
                    <li>Reconocimiento: Ping Sweeping, Port Scanning, DNS Footprinting</li>
                    <li>Sniffing y Spoofing, Eavesdropping, ARP/DNS Poisoning</li>
                    <li>Firewall/IDS evasion, Brute-force, Social Engineering</li>
                </ul>
            </li>
            <li><span class="key-term">Inappropriate Usage Incidents</span>: Violación de políticas de uso aceptable
                <ul>
                    <li>Descarga de malware, software pirata o pornografía</li>
                    <li>Uso inapropiado del correo, data leakage</li>
                    <li>Proveer credenciales en sitios spoofed</li>
                </ul>
            </li>
            <li><span class="key-term">Denial-of-Service (DoS/DDoS)</span>: Impedir acceso a recursos
                <ul>
                    <li><strong>Volumétricos:</strong> UDP flood, ICMP flood, Ping of Death, Smurf, Pulse wave, Zero-day, Spoofed IP packet flood</li>
                    <li><strong>Protocolo:</strong> SYN flood, Fragmentation, SYN-ACK flood, ACK flood, TCP state exhaustion, RST attack, TCP SACK panic</li>
                    <li><strong>Capa Aplicación:</strong> HTTP flood, Slowloris, UDP application layer flood, DDoS extortion</li>
                </ul>
            </li>
            <li><span class="key-term">Wireless Network Incidents</span>: Amenazas en redes inalámbricas
                <ul>
                    <li><strong>Access control:</strong> War driving, Rogue APs, MAC spoofing, AP misconfiguration, Ad hoc associations</li>
                    <li><strong>Integridad:</strong> Data frame injection, WEP injection, Bit-flipping, RADIUS replay</li>
                    <li><strong>Confidencialidad:</strong> Evil twin AP, Honeypot AP, Session hijacking, MitM, Traffic analysis, Cracking WEP</li>
                    <li><strong>Disponibilidad:</strong> Disassociation, De-authenticate flood, Beacon flood, DoS, AP theft</li>
                    <li><strong>Autenticación:</strong> PSK cracking, LEAP cracking, VPN login cracking, Key reinstallation (KRACK), Identity theft</li>
                </ul>
            </li>
        </ul>

        <h2>Preparación para Incidentes de Red</h2>
        <ul>
            <li>Configurar <span class="key-term">firewalls, IDS, IPS</span> para loguear todos los intentos de acceso y enviar notificaciones</li>
            <li>Implementar <span class="key-term">Syslog</span> o logging centralizado para respaldo de logs en ubicación única</li>
            <li>Definir roles y responsabilidades claros para el equipo IH&R</li>
            <li>Preparar herramientas de detección y contención (monitoreo, captura y análisis de tráfico)</li>
            <li>Instalar <span class="key-term">network sniffers</span> y soluciones de seguridad en todos los servidores</li>
            <li>Mantener backups de servidores importantes y accesibles</li>
            <li>Contactar ISPs para conocer sus procesos IH&R</li>
            <li>Mantener contacto con <span class="key-term">CERT</span> y el <span class="key-term">Internet Crime Complaint Center (IC3)</span></li>
            <li>Configurar IDS/IPS para detectar tráfico DoS</li>
            <li>Definir estrategias de recolección de datos y tipos de captura (limitada vs full packet capture)</li>
            <li>Mantener hashes criptográficos de archivos críticos</li>
            <li>Desarrollar workstations de repuesto, OS limpios y entornos sandbox</li>
        </ul>

        <h3>Toolkit de Análisis de Red</h3>
        <ul>
            <li><strong>Windows:</strong> <span class="key-term">Nmap, Wireshark, TCPView, NetFlow Traffic Analyzer, Stealthwatch, netstat, nbtstat, tracert, Zeek, Splunk, Capsa</span></li>
            <li><strong>Linux:</strong> <span class="key-term">Nmap, Wireshark, netstat, tcpdump, Nagios XI, NetHogs</span> + comandos: traceroute, ARP, ifconfig, dig, ss, mtr, nslookup, lsof, dd, grep, ps aux, lastlog</li>
            <li><strong>Vulnerability Analysis:</strong> <span class="key-term">SanerNow, Nexpose, Tenable.io, Nessus, GFI LanGuard, OpenVAS, Intruder</span></li>
        </ul>

        <h2>Detección y Validación de Incidentes de Red</h2>
        <h3>Indicadores Generales</h3>
        <ul>
            <li>Alertas de firewall, IDS, honeypot, DMZ y antivirus</li>
            <li>Múltiples fallos de login (posible robo de credenciales o DoS)</li>
            <li>Escalamiento no autorizado de privilegios</li>
            <li>Conexiones desconocidas/no registradas en la red</li>
            <li>Violaciones de protocolo (SSL, TLS)</li>
            <li>Aumento de tráfico/consumo de ancho de banda</li>
            <li>Paquetes malformados, reinicios inesperados de servidores</li>
            <li>Uso de puertos no autorizados, idle o abiertos</li>
            <li>Red no disponible (señal de DoS/DDoS)</li>
            <li>Anomalías en tráfico outbound (subida de archivos grandes a cloud personal)</li>
            <li>Actividad DNS sospechosa o picos en peticiones DNS</li>
        </ul>

        <h3>Indicadores Windows</h3>
        <ul>
            <li>Rendimiento lento, reinicios automáticos, crash del sistema</li>
            <li>Descarga automática de archivos maliciosos</li>
            <li>Cambios no autorizados en el registro de Windows y <span class="key-term">run keys</span> o startup folder</li>
            <li>Proceso genuino identificado como malware por <span class="key-term">Microsoft Defender for Endpoint</span></li>
            <li>Conexiones remotas sin cifrar, CPU anormalmente alta en web server</li>
            <li>Creación de nuevas cuentas con privilegios altos</li>
        </ul>

        <h3>Indicadores Linux</h3>
        <ul>
            <li>Aumento repentino en carga de threads en servidor</li>
            <li>Conexiones no autorizadas desde IPs desconocidas</li>
            <li>Excesivos intentos de <span class="key-term">sudo</span> y <span class="key-term">SSH login</span></li>
            <li>Cambios en log files o archivos de configuración del sistema</li>
            <li>Creación no autorizada de SSH key, procesos sospechosos</li>
            <li>Presencia de <span class="key-term">rogue DHCP servers</span> y cuentas guest con privilegios escalados</li>
        </ul>

        <h3>Herramientas de Detección</h3>
        <ul>
            <li><span class="key-term">Flowmon ADS</span>: Detecta anomalías de red usando NetFlow/IPFIX, histogramas de tráfico, metadatos DNS. Basado en Suricata IDS</li>
            <li><span class="key-term">Wireshark</span>: Detectar ARP poisoning (Preferences > Protocols > ARP/RARP > Detect ARP request storm). Analyze > Expert Information para ver "ARP packet storm detected"</li>
            <li><span class="key-term">Capsa Portable Network Analyzer</span>: Detección rápida de ARP poisoning y flooding</li>
            <li><span class="key-term">Zeek (BZAR package)</span>: Detectar indicadores SMB/RPC y lateral movement. Genera smb_mapping.log, smb_files.log, dce_rpc.log, notice.log</li>
            <li><span class="key-term">Cisco Stealthwatch</span>: Detectar password spray via Brute Force Login events</li>
            <li><span class="key-term">Splunk Enterprise Security</span>: Investigar eventos de malware, revisar hosts infectados, generar reportes CSV</li>
        </ul>

        <h3>Técnicas de Detección de Sniffing</h3>
        <ul>
            <li><strong>Promiscuous Mode:</strong> Verificar dispositivos en modo promiscuo con Nmap</li>
            <li><strong>IDS:</strong> Verificar cambios de MAC address (ej: MAC del router)</li>
            <li><strong>Ping Method:</strong> Enviar ping con IP correcta pero MAC incorrecta - sniffer responderá</li>
            <li><strong>ARP Method:</strong> Enviar ARP request con broadcast no válido</li>
            <li><strong>DNS Method:</strong> Sniffers generan DNS reverse lookups detectables</li>
        </ul>

        <h2>Manejo de Incidentes de Acceso No Autorizado</h2>
        <h3>Indicadores</h3>
        <ul>
            <li><strong>Intrusión Física:</strong> Hardware no autorizado, partes desplazadas</li>
            <li><strong>Cambios en Configuración:</strong> Puertos abiertos, NIC en modo promiscuo, escalamiento de privilegios</li>
            <li><strong>Cambios en Red:</strong> Tráfico inusual, alertas NIDS/HIDS</li>
            <li><strong>Cambios en Admin:</strong> Backdoors, acceso remoto no autorizado</li>
        </ul>
        <h3>Contención</h3>
        <ul>
            <li>Aislar sistemas afectados, deshabilitar servicios comprometidos</li>
            <li>Eliminar ruta del atacante, deshabilitar cuentas comprometidas</li>
            <li>Implementar <span class="key-term">two-factor authentication</span>, bloquear IPs en firewall</li>
        </ul>

        <h2>Manejo de Incidentes de Uso Inapropiado</h2>
        <ul>
            <li>Detectar mediante revisión de <span class="key-term">log entries de logins</span></li>
            <li>Usar <span class="key-term">Kiwi Log Viewer</span> y <span class="key-term">Splunk</span> para detectar intentos de login fallidos</li>
            <li>Analizar <span class="key-term">Audit Logon Events</span> en Windows AD (Group Policy > Default Domain Controllers Policy)</li>
            <li><strong>Event IDs clave:</strong> 4625 (failed logon), 4624 (successful logon)</li>
        </ul>

        <h2>Manejo de Incidentes DoS/DDoS</h2>
        <ul>
            <li><strong>Mitigación:</strong> <span class="key-term">Rate limiting, Blackholing/Sinkholing, Scrubbing centers</span></li>
            <li>Reglas de throttle vs deny para permitir tráfico legítimo</li>
            <li>Cifrado fuerte: <span class="key-term">WPA3 y AES 256</span></li>
        </ul>

        <h2>Manejo de Incidentes Wireless</h2>
        <h3>Detección</h3>
        <ul>
            <li><strong>AP Monitoring:</strong> Auditar APs (MAC, SSID). Herramientas: <span class="key-term">WifiChannelMonitor, PRTG</span></li>
            <li><strong>Wireless Client Monitoring:</strong> Monitorear clientes, blacklist/whitelist por MAC</li>
            <li><strong>Traffic Monitoring:</strong> Detectar DoS por de-auth/de-association. <span class="key-term">Wireshark, NetStumbler, Kismet</span></li>
        </ul>
        <h3>Contención</h3>
        <ul>
            <li>Deshabilitar SSID broadcasting, habilitar <span class="key-term">WPA3</span></li>
            <li>MAC address filtering, usar <span class="key-term">WIPS</span></li>
        </ul>
        <h3>Erradicación</h3>
        <ul>
            <li>Passphrase de al menos <span class="key-term">20 caracteres</span>, siempre <span class="key-term">WPA3</span></li>
            <li>Implementar <span class="key-term">NAC/NAP, MFA, EAP, IEEE 802.1X</span></li>
            <li>Deshabilitar <span class="key-term">UPnP</span>, implementar <span class="key-term">VLAN isolation</span></li>
        </ul>
        <h3>Recuperación</h3>
        <ul>
            <li><span class="key-term">WPA3-Enterprise</span>, <span class="key-term">SSID cloaking</span>, <span class="key-term">IPsec</span> adicional</li>
            <li>Deshabilitar <span class="key-term">WPS</span>, habilitar guest network</li>
            <li>Bluetooth: modo no-discoverable, cifrar conexiones, rango mínimo</li>
        </ul>

        <h2>Caso de Estudio: DDoS en Google Cloud (2022)</h2>
        <ul>
            <li>Ataque Layer 7 DDoS: pico de <span class="key-term">46 millones rps</span></li>
            <li>Detectado por <span class="key-term">Cloud Armor Adaptive Protection</span></li>
            <li>5,256 IPs en 132 países, 1,169 nodos Tor. Método: <span class="key-term">HTTP Pipelining</span>, familia <span class="key-term">Meris</span></li>
            <li>Respuesta: throttle en lugar de deny. Lección: <span class="key-term">defense-in-depth</span></li>
        </ul>

        <h2>Mejores Prácticas</h2>
        <ul>
            <li>Desplegar <span class="key-term">DLP, CDR, ACLs, ZTNA, honeypots, NAT, TLS, VPN, NIPS</span></li>
            <li>Segmentar red con <span class="key-term">VLANs y subnets</span></li>
            <li>Instalar firewalls, anti-DDoS, load balancer, IDS, IPS</li>
            <li>Proxy transparente y whitelist de dominios</li>
        </ul>

        <h2>Network Log Analysis Tools</h2>
        <ul>
            <li><span class="key-term">Kiwi Syslog Server</span>: Captura syslog, SNMP traps, Windows event logs</li>
            <li><span class="key-term">ManageEngine Log360, InsightOps (Rapid7), Splunk, Graylog, Logz.io</span></li>
        </ul>
        `
    },
    7: {
        title: "Handling and Responding to Web Application Security Incidents",
        content: `
        <h2>Introducción al Manejo de Incidentes Web</h2>
        <p>Las aplicaciones web son un componente integral de negocios online y se han convertido en un objetivo fácil para ataques como defacement, injection, data breach y zero-day attacks. Las organizaciones deben implementar planes de respuesta a incidentes para detectar, remediar, contener, erradicar y recuperarse.</p>

        <h3>Causas de Incidentes Web</h3>
        <ul>
            <li><span class="key-term">Insecure Coding</span>: Prácticas pobres de codificación (datos sin cifrar en tránsito/almacenamiento, parámetros sensibles en URLs, sanitización incorrecta de inputs)</li>
            <li><span class="key-term">Configuration Errors</span>: Timeouts incorrectos, controles de acceso improperios, server misconfiguration</li>
            <li><span class="key-term">Platform Vulnerabilities</span>: Vulnerabilidades en capas (UI, lógica de app, backend DB) - code execution, buffer overflows, race conditions</li>
            <li><span class="key-term">Logic Errors</span>: Fallos de codificación que causan problemas de rendimiento y output no deseado</li>
        </ul>

        <h2>OWASP Top 10 Application Security Risks (2021)</h2>
        <ul>
            <li><span class="key-term">A01 - Broken Access Control</span>: Restricciones mal implementadas. Atacantes acceden a funcionalidad/datos no autorizados, modifican datos de otros usuarios</li>
            <li><span class="key-term">A02 - Cryptographic Failures</span>: Datos sensibles transmitidos en cleartext por HTTP. Claves criptográficas débiles, viejas, o mal gestionadas</li>
            <li><span class="key-term">A03 - Injection</span>: SQL, LDAP, OS command injection. Datos no confiables enviados a un intérprete como parte de un comando</li>
            <li><span class="key-term">A04 - Insecure Design</span>: Implementación incorrecta de controles de seguridad durante desarrollo. Permite session hijacking, credential theft, spoofing, MitM</li>
            <li><span class="key-term">A05 - Security Misconfiguration</span>: Configuración manual/ad hoc, defaults inseguros, S3 buckets abiertos, HTTP headers mal configurados, error messages con info sensible. Incluye XML External Entity (XXE) - billion laughs attack</li>
            <li><span class="key-term">A06 - Vulnerable and Outdated Components</span>: Librerías, frameworks y módulos sin actualizar que corren con los mismos privilegios que la aplicación</li>
            <li><span class="key-term">A07 - Identification and Authentication Failures</span>: Permite brute-forcing, password spraying, ataques automatizados para comprometer passwords, keys o session tokens</li>
            <li><span class="key-term">A08 - Software and Data Integrity Failures</span>: Auto-updates desde fuentes no autorizadas sin verificación de integridad. Insecure deserialization</li>
            <li><span class="key-term">A09 - Security Logging and Monitoring Failures</span>: Logs insuficientes, almacenamiento local, mecanismos de alerta inadecuados</li>
            <li><span class="key-term">A10 - Server-Side Request Forgery (SSRF)</span>: App obtiene recursos remotos sin verificar URL del usuario. Permite abusar funcionalidades del servidor para leer/modificar recursos internos, incluso detrás de firewalls</li>
        </ul>

        <h2>Preparación para Incidentes Web</h2>
        <ul>
            <li>Implementar <span class="key-term">WAF (Web Application Firewall)</span> y configurar reglas de detección</li>
            <li>Habilitar logging detallado en servidores web y aplicaciones</li>
            <li>Implementar <span class="key-term">SAST</span> (Static Application Security Testing) y <span class="key-term">DAST</span> (Dynamic Application Security Testing) en el pipeline CI/CD</li>
            <li>Usar <span class="key-term">SCA</span> (Software Composition Analysis) para identificar vulnerabilidades en componentes</li>
            <li>Configurar monitoreo de integridad de archivos</li>
            <li>Implementar <span class="key-term">Content Security Policy (CSP)</span> headers</li>
        </ul>

        <h2>Detección de Incidentes Web</h2>
        <h3>Indicadores de Ataque</h3>
        <ul>
            <li>Parámetros inusuales en URLs (caracteres de SQL: ' OR 1=1 --, UNION SELECT)</li>
            <li>Patrones de injection en logs del servidor web</li>
            <li>Múltiples errores HTTP 4xx/5xx en secuencia rápida</li>
            <li>Intentos de <span class="key-term">directory traversal</span> (../../etc/passwd)</li>
            <li>User-Agent strings sospechosos (sqlmap, Nikto, etc.)</li>
            <li>Acceso a archivos sensibles (web.config, .env, wp-config.php)</li>
            <li>Defacement del sitio web o contenido modificado</li>
            <li>Aumento inesperado en errores de aplicación</li>
        </ul>

        <h3>Análisis de Logs Web</h3>
        <ul>
            <li><span class="key-term">Access logs</span>: Registran todas las solicitudes HTTP (IP, timestamp, método, URI, status code, User-Agent)</li>
            <li><span class="key-term">Error logs</span>: Errores del servidor y la aplicación</li>
            <li><span class="key-term">Application logs</span>: Logs específicos de la aplicación (login attempts, database queries)</li>
            <li>Correlacionar eventos entre múltiples fuentes</li>
        </ul>

        <h2>Ataques Comunes y Respuesta</h2>
        <h3>SQL Injection (SQLi)</h3>
        <ul>
            <li>Inyección de código SQL malicioso a través de inputs para manipular la base de datos</li>
            <li><strong>Detección:</strong> Patrones en logs como ' OR, UNION SELECT, --comment</li>
            <li><strong>Prevención:</strong> <span class="key-term">Prepared statements/parameterized queries</span>, stored procedures con parámetros automatizados</li>
            <li><strong>Herramientas de recuperación:</strong> <span class="key-term">ApexSQL Log</span> (recuperar tablas de BD), <span class="key-term">SysTools SQL Recovery</span> (recuperar archivos MDF/NDF corruptos)</li>
        </ul>

        <h3>Cross-Site Scripting (XSS)</h3>
        <ul>
            <li><span class="key-term">Stored XSS</span>: Script almacenado persistentemente en servidor</li>
            <li><span class="key-term">Reflected XSS</span>: Script reflejado desde URL no persistente</li>
            <li><span class="key-term">DOM-based XSS</span>: Manipulación del DOM del lado del cliente</li>
            <li><strong>Prevención:</strong> <span class="key-term">Output encoding, CSP, input validation/sanitization</span></li>
            <li>Deshabilitar nodos peligrosos como &lt;IFRAME&gt; y &lt;SCRIPT&gt;</li>
        </ul>

        <h3>Cross-Site Request Forgery (CSRF)</h3>
        <ul>
            <li>Forzar al usuario autenticado a ejecutar acciones no deseadas</li>
            <li><strong>Prevención:</strong> <span class="key-term">CSRF tokens, SameSite cookies</span></li>
        </ul>

        <h2>Contención de Incidentes Web</h2>
        <ul>
            <li>Bloquear IPs atacantes en WAF y firewall</li>
            <li>Implementar reglas WAF adicionales para el vector de ataque específico</li>
            <li>Deshabilitar funcionalidad vulnerable temporalmente</li>
            <li>Revocar sesiones comprometidas</li>
            <li>Restablecer credenciales de usuarios afectados</li>
        </ul>

        <h2>Erradicación y Recuperación</h2>
        <ul>
            <li>Parchear vulnerabilidades en código fuente</li>
            <li>Eliminar código malicioso inyectado (webshells, backdoors)</li>
            <li>Restaurar datos comprometidos desde backups</li>
            <li>Verificar integridad de archivos del sistema</li>
            <li>Revisar filesystems: <span class="key-term">wp-content/plugins</span> y <span class="key-term">wp-content/mu-plugins</span> para plugins desconocidos</li>
            <li>Usar certificados de corta duración para evitar ataques de persistencia</li>
        </ul>

        <h2>Best Practices de Codificación Web</h2>
        <ul>
            <li>Restringir longitud y tipo de char de input fields en HTML/JS para prevenir <span class="key-term">buffer overflow</span></li>
            <li>Implementar <span class="key-term">Pragma: no-cache</span> y <span class="key-term">Cache-Control: no-cache, no-store</span> para páginas sensibles</li>
            <li>Almacenar cookies cifradas durante transferencia de datos</li>
            <li>Implementar <span class="key-term">CAPTCHA</span> en formularios de comentarios</li>
            <li>Usar stored procedures con parámetros para prevenir SQLi</li>
            <li>Mover archivos sensibles (config, app files) a carpetas seguras no accesibles por URL</li>
            <li>No mostrar debugging info a usuarios en producción</li>
            <li>Cifrar datos <span class="key-term">at rest</span> y <span class="key-term">in transit</span></li>
            <li>Usar <span class="key-term">semantic HTML elements</span> (&lt;header&gt;, &lt;footer&gt;) en lugar de &lt;div&gt;</li>
            <li>Session tokens con <span class="key-term">timeout server-side</span> (no client-side, que puede ser bypassed)</li>
            <li>Implementar <span class="key-term">absolute timeout</span> que fuerza re-login</li>
            <li>Incluir <span class="key-term">SCA o DAST</span> en el pipeline CI/CD</li>
        </ul>

        <h2>Web Application Fuzz Testing</h2>
        <ul>
            <li>Técnica de testing que proporciona datos aleatorios/inválidos a la aplicación</li>
            <li>Busca crashes, memory leaks y comportamientos inesperados</li>
            <li>Herramientas: <span class="key-term">OWASP ZAP, Burp Suite, Peach Fuzzer</span></li>
        </ul>

        <h2>Caso de Estudio: GoDaddy Data Breach (2021)</h2>
        <ul>
            <li>Acceso no autorizado al entorno WordPress hosting por <span class="key-term">70 días sin detectar</span></li>
            <li>Credenciales sFTP almacenadas en <span class="key-term">plain text</span> sin salt ni public key authentication</li>
            <li>Afectó hasta <span class="key-term">1.2 millones</span> de clientes WordPress (emails, customer numbers)</li>
            <li>Expuestos: WordPress Admin passwords, credenciales sFTP/BD, SSL private keys</li>
            <li>Servicios afectados: 123Reg, Domain Factory, Heart Internet, Host Europe, Media Temple, tsoHost</li>
            <li><strong>Respuesta:</strong> Bloquear acceso no autorizado, resetear passwords sFTP/WordPress/BD, emitir nuevos certificados SSL</li>
            <li><strong>Lección:</strong> Importancia de monitoreo continuo, cambio frecuente de passwords, certificados de corta duración</li>
        </ul>

        <h2>Herramientas Clave</h2>
        <ul>
            <li><span class="key-term">WAF</span>: ModSecurity, AWS WAF, Cloudflare WAF</li>
            <li><span class="key-term">DAST</span>: OWASP ZAP, Burp Suite</li>
            <li><span class="key-term">SAST</span>: SonarQube, Checkmarx</li>
            <li><span class="key-term">ApexSQL Log</span>: Recuperación de bases de datos SQL Server</li>
            <li><span class="key-term">SysTools SQL Recovery</span>: Recuperación de archivos MDF/NDF corruptos</li>
            <li><span class="key-term">CrowdStrike Falcon Orchestrator</span>: Workflow automation, case management, forensics</li>
        </ul>
        `
    },
    8: {
        title: "Handling and Responding to Cloud Security Incidents",
        content: `
        <h2>Introducción a Cloud Computing</h2>
        <p>Cloud computing es la entrega on-demand de capacidades IT donde infraestructuras y aplicaciones se proporcionan como servicios medidos sobre redes. Ejemplos: <span class="key-term">Microsoft Azure, Amazon AWS, Dropbox, Salesforce</span>.</p>

        <h3>Características del Cloud Computing</h3>
        <ul>
            <li><span class="key-term">On-demand Self-service</span>: Provisión de recursos sin interacción humana con el proveedor</li>
            <li><span class="key-term">Distributed Storage</span>: Mayor escalabilidad, disponibilidad y fiabilidad (pero riesgos de compliance)</li>
            <li><span class="key-term">Rapid Elasticity</span>: Escalado rápido up/down según demanda</li>
            <li><span class="key-term">Automated Management</span>: Minimiza intervención humana, reduce costo y error</li>
            <li><span class="key-term">Broad Network Access</span>: Acceso vía múltiples plataformas (laptops, móviles, PDAs)</li>
            <li><span class="key-term">Resource Pooling</span>: Multi-tenant con recursos asignados dinámicamente</li>
            <li><span class="key-term">Measured Service</span>: Modelo "pay-per-use" con transparencia completa</li>
            <li><span class="key-term">Virtualization Technology</span>: Escalado rápido imposible en entornos no virtualizados</li>
        </ul>

        <h3>Limitaciones del Cloud</h3>
        <ul>
            <li>Control y flexibilidad limitados, vulnerable a outages</li>
            <li>Problemas de seguridad, privacidad y compliance</li>
            <li>Contratos y lock-ins, dependencia de red</li>
            <li>Vulnerabilidad por estar todo online, dificultad de migración entre proveedores</li>
        </ul>

        <h2>Modelos de Servicio y Responsabilidad Compartida</h2>
        <h3>Modelos de Servicio</h3>
        <ul>
            <li><span class="key-term">IaaS</span>: CSP provee infraestructura (data centers, servers, storage). CC responsable de OS, middleware, apps, datos, access control. Ejemplo: <span class="key-term">AWS EC2</span></li>
            <li><span class="key-term">PaaS</span>: CSP provee plataforma. CC responsable solo de datos, apps y access control. Ejemplo: <span class="key-term">Azure App Service</span></li>
            <li><span class="key-term">SaaS</span>: CSP provee todo (software, storage, apps). CC solo crea cuentas y produce access control logs. Ejemplo: <span class="key-term">Office 365, Salesforce</span></li>
            <li><span class="key-term">SECaaS</span>: CC outsourcea operaciones de seguridad. CSP provee tiempos de respuesta garantizados</li>
            <li><span class="key-term">CaaS</span>: Container-based virtualization. CC puede subir, organizar, ejecutar y escalar containers</li>
            <li><span class="key-term">FaaS (Serverless)</span>: CC despliega funciones que se ejecutan on-demand. CSP despliega aplicaciones sin gestionar servidores</li>
        </ul>

        <h3>Responsabilidad de Incidentes por Modelo</h3>
        <ul>
            <li><strong>IaaS:</strong> CSP responsable de networking, storage, servers, virtualization. CC responsable del resto</li>
            <li><strong>PaaS:</strong> CSP responsable de todo excepto datos, apps y access control</li>
            <li><strong>SaaS:</strong> CSP completamente responsable de IH&R; CC produce access control logs</li>
        </ul>

        <h2>OWASP Top 10 Cloud Security Risks</h2>
        <ul>
            <li><span class="key-term">R1 - Accountability/Data Ownership</span>: Responsabilidad difusa en cloud multi-tenant</li>
            <li><span class="key-term">R2 - User Identity Federation</span>: Gestión de identidades entre múltiples CSPs</li>
            <li><span class="key-term">R3 - Regulatory Compliance</span>: Cumplimiento regulatorio complejo (datos en múltiples jurisdicciones)</li>
            <li><span class="key-term">R4 - Business Continuity/Resiliency</span>: Continuidad de negocio ante fallos del CSP</li>
            <li><span class="key-term">R5 - User Privacy/Secondary Use</span>: Uso secundario de datos personales por CSP</li>
            <li><span class="key-term">R6 - Service/Data Integration</span>: Integración segura entre servicios cloud</li>
            <li><span class="key-term">R7 - Multi-tenancy/Physical Security</span>: Aislamiento entre tenants</li>
            <li><span class="key-term">R8 - Incidence Analysis/Forensics</span>: Dificultad de forensics en cloud</li>
            <li><span class="key-term">R9 - Infrastructure Security</span>: Scanning de puertos, passwords por defecto</li>
            <li><span class="key-term">R10 - Non-Production Environment Exposure</span>: Riesgo en entornos de desarrollo/test</li>
        </ul>

        <h2>Desafíos en Cloud IH&R (NIST Cloud Computing Forensic Science Challenges)</h2>
        <h3>Architecture & Identification</h3>
        <ul>
            <li>Datos eliminados difíciles de recuperar (backups limitados del CSP)</li>
            <li>Datos overwritten por otros tenants en cloud compartido</li>
            <li>Falta de interoperabilidad entre CSPs</li>
            <li>Single points of failure vs criminales sin single point of failure</li>
            <li>Código malicioso puede <span class="key-term">circumvent VM isolation</span></li>
            <li>Múltiples venues y geolocalizaciones causan problemas jurisdiccionales</li>
            <li>Confiscación de cloud puede afectar a otros tenants</li>
            <li>Segregación de evidencia potencial entre tenants</li>
        </ul>
        <h3>Data Collection</h3>
        <ul>
            <li>Acceso y control de datos disminuidos para incident handlers</li>
            <li>Chain of dependencies entre CSPs altamente dinámica</li>
            <li>Datos migrados flexiblemente entre data centers y geolocalizaciones</li>
            <li>Imaging y aislamiento de datos desafiante por elasticidad, auto-provisioning, multi-tenancy</li>
            <li>Live forensics difícil por volatilidad de datos en cloud</li>
            <li><span class="key-term">Cryptographic key management</span> ineficaz impide descifrar datos forenses</li>
            <li>Ambiguous trust boundaries en entornos multi-tenant</li>
        </ul>
        <h3>Logs</h3>
        <ul>
            <li>Logs pueden no estar accesibles para CC</li>
            <li>Timestamps no sincronizados entre sistemas distribuidos</li>
            <li>Formato de logs no estandarizado entre CSPs</li>
        </ul>

        <h2>Manejo de Incidentes por Plataforma</h2>
        <h3>Azure Security</h3>
        <ul>
            <li><span class="key-term">Azure Sentinel</span>: SIEM nativo cloud para detección de amenazas</li>
            <li><span class="key-term">Azure Activity Log</span>: Registra operaciones de recursos</li>
            <li><span class="key-term">Microsoft Defender for Cloud</span>: CSPM + protección de workloads</li>
            <li><span class="key-term">Azure Monitor</span>: Métricas, logs y alertas</li>
            <li>Best practices: Usar <span class="key-term">Azure AD MFA</span>, habilitar <span class="key-term">Azure Key Vault</span>, configurar <span class="key-term">NSGs</span>, deshabilitar acceso público a storage</li>
        </ul>

        <h3>AWS Security</h3>
        <ul>
            <li><span class="key-term">AWS CloudTrail</span>: Registra TODAS las llamadas API para auditoría</li>
            <li><span class="key-term">Amazon GuardDuty</span>: Detección de amenazas inteligente</li>
            <li><span class="key-term">Amazon CloudWatch</span>: Monitoreo de métricas y alarmas</li>
            <li><span class="key-term">AWS Security Hub</span>: Vista centralizada de seguridad</li>
            <li><span class="key-term">IAM Access Analyzer</span>: Detecta accesos excesivos a recursos</li>
            <li><span class="key-term">AWS Config</span>: Evalúa configuraciones de recursos</li>
            <li><span class="key-term">Amazon Macie</span>: Descubre y protege datos sensibles en S3</li>
            <li>Best practices: <span class="key-term">Least privilege IAM</span>, cifrar S3 buckets, habilitar versioning, deshabilitar acceso público</li>
        </ul>

        <h3>GCP Security</h3>
        <ul>
            <li><span class="key-term">Security Command Center</span>: Vista centralizada de seguridad GCP</li>
            <li><span class="key-term">Cloud Audit Logs</span>: Registra actividad administrativa y de acceso a datos</li>
            <li><span class="key-term">Chronicle</span>: SIEM de Google para detección de amenazas</li>
            <li><span class="key-term">Dynatrace</span>: Monitoreo de Google Cloud con métricas, logs y traces</li>
            <li>Herramientas adicionales: <span class="key-term">CrowdStrike Falcon, GCP Monitor, Datadog, ManageEngine</span></li>
            <li>Best practices: Usar <span class="key-term">IAM frameworks</span>, deshabilitar storage buckets públicos, enforcer data retention policies</li>
        </ul>

        <h2>Caso de Estudio: Kaseya VSA Ransomware (Julio 2021)</h2>
        <ul>
            <li><span class="key-term">Supply chain attack</span> via Kaseya VSA (producto de remote monitoring para MSPs)</li>
            <li>Ransomware <span class="key-term">REvil</span> entregado explotando <span class="key-term">zero-day vulnerabilities</span></li>
            <li>Payload en AGENT.CRT (Base-64 encoded) en C:\\KWORKING\\, decodificado con certutil.exe</li>
            <li>Deshabilitaron Windows Defender con PowerShell (Set-MpPreference -DisableRealtimeMonitoring)</li>
            <li>Demandaron <span class="key-term">$70 millones en BTC</span> por decryptor universal</li>
            <li>IOCs de red: 35.226.94.113, 161.35.239.148, 162.253.124.162</li>
            <li>IOCs endpoint: agent.crt, agent.exe, mpsvc.dll (ransomware payload)</li>
            <li>Web log indicators: POST /dl.asp, GET /done.asp, POST /cgi-bin/KUpload.dll</li>
            <li><strong>Contención:</strong> Apagar servidores VSA SaaS, informar FBI y CISA</li>
            <li><strong>Recuperación:</strong> Fix a SaaS servers, parches distribuidos, decryption key universal</li>
            <li><strong>Lección:</strong> Importancia del patching oportuno, modelo <span class="key-term">zero-trust</span></li>
        </ul>

        <h2>Mejores Prácticas Cloud (incluye CSA Best Practices)</h2>
        <ul>
            <li>Enforcer mecanismos de <span class="key-term">data protection, backup y retention</span></li>
            <li>Enforcer SLAs para patching y remediación de vulnerabilidades</li>
            <li>CSPs deben someterse a auditorías <span class="key-term">AICPA SAS 70 Type II</span> regulares</li>
            <li>Implementar autenticación <span class="key-term">MFA</span> robusta y <span class="key-term">least privilege</span></li>
            <li>Cifrar datos at rest y in transit con <span class="key-term">SSL/TLS</span></li>
            <li>Implementar <span class="key-term">CASB</span> (Cloud Access Security Broker)</li>
            <li>Utilizar <span class="key-term">UBA</span> (User Behavior Analytics) para identificar irregularidades</li>
            <li>Emplear <span class="key-term">EDR/EPP</span> para endpoint security en cloud workloads</li>
            <li>Auditar configuraciones de <span class="key-term">IAM, network y encryption</span></li>
            <li>Usar VPNs para datos de clientes y asegurar eliminación completa (con réplicas) al disponer datos</li>
            <li>Whitelist de aplicaciones + <span class="key-term">memory exploit prevention</span></li>
            <li>Seguridad física 24x7x365</li>
        </ul>

        <h3>CSA Cloud Security Domains</h3>
        <ul>
            <li><span class="key-term">Governance & Enterprise Risk Management</span>: Diferencia entre governance y risk management en cloud</li>
            <li><span class="key-term">Legal Issues, Contracts, Electronic Discovery</span>: Implicaciones legales de mover datos a cloud</li>
            <li><span class="key-term">Compliance & Audit Management</span>: Interacciones cloud con entorno regulatorio</li>
            <li><span class="key-term">Information Governance</span>: Re-examinar gestión de información al migrar</li>
            <li><span class="key-term">Business Continuity</span>: Approach risk-based para acceso al plan de gestión</li>
            <li><span class="key-term">Infrastructure Security</span>: Consideraciones de seguridad de red virtual</li>
            <li><span class="key-term">Virtualization</span>: Efectos de virtualización en seguridad arquitectónica</li>
            <li><span class="key-term">Incident Response</span>: Gaps de cloud en IR</li>
            <li><span class="key-term">Application Security</span>: Shared security models cambian app security</li>
            <li><span class="key-term">Data Security & Encryption</span>: Risk-based approach para cifrado de datos</li>
        </ul>

        <h2>Herramientas de Seguridad Cloud</h2>
        <ul>
            <li><span class="key-term">CSPM</span>: Cloud Security Posture Management - identifica misconfiguraciones</li>
            <li><span class="key-term">CASB</span>: Cloud Access Security Broker - intermediario de políticas de seguridad</li>
            <li><span class="key-term">CWPP</span>: Cloud Workload Protection Platform</li>
        </ul>
        `
    },
    9: {
        title: "Handling and Responding to Insider Threats",
        content: `
        <h2>Concepto de Insider Threats</h2>
        <p>Un <span class="key-term">insider</span> es cualquier empleado (persona de confianza) con acceso a activos críticos. Los ataques insider usan acceso privilegiado para violar reglas o amenazar sistemas de información. Son fáciles de lanzar pero difíciles de detectar, y pueden pasar desapercibidos durante años.</p>

        <h3>Quiénes Realizan Ataques Insider</h3>
        <ul>
            <li><span class="key-term">Privileged Users</span>: Managers y sysadmins con acceso a datos confidenciales</li>
            <li><span class="key-term">Disgruntled Employees</span>: Empleados descontentos que esperan el momento adecuado para atacar</li>
            <li><span class="key-term">Terminated Employees</span>: Usan backdoors, malware o credenciales antiguas no deshabilitadas</li>
            <li><span class="key-term">Accident-prone Employees</span>: Pierden dispositivos, envían emails a destinatarios incorrectos</li>
            <li><span class="key-term">Third Parties</span>: Empleados remotos, partners, vendors con acceso a información</li>
            <li><span class="key-term">Undertrained Staff</span>: Fallan en adherirse a políticas de ciberseguridad por falta de formación</li>
        </ul>

        <h3>Tipos de Insider Threats</h3>
        <ul>
            <li><span class="key-term">Malicious Insider</span>: Empleados descontentos/terminados que roban datos o destruyen redes intencionalmente</li>
            <li><span class="key-term">Negligent Insider</span>: No educados en amenazas o que bypasan procedimientos de seguridad por eficiencia</li>
            <li><span class="key-term">Professional Insider</span>: Los más dañinos - usan conocimiento técnico para encontrar vulnerabilidades y vender info a competidores o black market</li>
            <li><span class="key-term">Compromised Insider</span>: Un outsider compromete a un insider con acceso. Más difícil de detectar (se enmascara como insider genuino)</li>
            <li><span class="key-term">Accidental Insider</span>: Exposición inadvertida (email a persona equivocada, click en link malicioso, disposición incorrecta de documentos)</li>
        </ul>

        <h3>Por qué los Ataques Insider son Efectivos</h3>
        <ul>
            <li>Pueden pasar desapercibidos durante años y la remediación es costosa</li>
            <li>Fáciles de lanzar y difíciles de prevenir</li>
            <li>Difícil identificar si un empleado está realizando actividades maliciosas</li>
            <li>Empleados pueden negar responsabilidad y alegar error no intencional</li>
            <li>Pueden cubrir sus acciones editando o eliminando logs</li>
        </ul>

        <h2>Driving Forces (Motivaciones)</h2>
        <ul>
            <li><span class="key-term">Work-related Emotional Grievance</span>: Ambiente hostil, presión laboral, trato injusto</li>
            <li><span class="key-term">Corporate Espionage</span>: Competidores que seducen empleados para corromper datos</li>
            <li><span class="key-term">Challenge</span>: Probar habilidades contra métodos de seguridad</li>
            <li><span class="key-term">Curiosity</span>: Estudiantes probando capacidades de hacking</li>
            <li><span class="key-term">Hacktivism</span>: Declaraciones políticas o publicar info sensible para avergonzar a la empresa</li>
            <li><span class="key-term">Financial Gains</span>: Vender info a competidores, crear backdoors, extorsión</li>
            <li><span class="key-term">Steal Confidential Data</span>: Competidores que infiltran empleados</li>
            <li><span class="key-term">Taking Revenge</span>: Empleados descontentos buscando venganza</li>
        </ul>
        <p><strong>Nota:</strong> Disgruntled employees pueden usar <span class="key-term">esteganografía</span> para ocultar secretos empresariales en imágenes y enviarlos a competidores.</p>

        <h2>Impacto de Ataques Insider</h2>
        <ul>
            <li>Indisponibilidad de redes y sistemas</li>
            <li>Incapacidad de realizar actividades de negocio</li>
            <li>Daño reputacional, pérdida de información personal</li>
            <li>Defacement de sitios web, publicación de info confidencial</li>
        </ul>

        <h2>Detección de Insider Threats</h2>
        <h3>Controles Técnicos</h3>
        <ul>
            <li><span class="key-term">DLP</span> (Data Loss Prevention): Prevenir fuga de datos sensibles</li>
            <li><span class="key-term">UEBA</span> (User and Entity Behavior Analytics): Detectar anomalías de comportamiento antes de que el insider gane acceso a información sensible</li>
            <li><span class="key-term">PAM</span> (Privileged Access Management): Gestionar y auditar accesos privilegiados</li>
            <li><span class="key-term">DCAP</span> (Data Centric Audit and Protection): Monitorear privilegios de usuario y detectar cambios no autorizados en permisos</li>
            <li>Herramientas: <span class="key-term">SysTools SQL Log Analyzer</span> (analizar .LDF files de SQL Server para transacciones sospechosas)</li>
        </ul>

        <h3>Análisis de Seguridad Física</h3>
        <ul>
            <li>Verificar empleados no autorizados en reuniones de directivos</li>
            <li>Buscar dispositivos espía en salas de reuniones (luces parpadeantes, sonidos débiles)</li>
            <li>Verificar acceso a servidores y bases de datos</li>
            <li>Usar grabaciones de cámaras de vigilancia sincronizadas con el tiempo del ataque</li>
            <li>Detectar dispositivos espía con: <span class="key-term">RF/bug detectors</span>, cámaras digitales (infrared/polarized), apps como <span class="key-term">EMF Detector</span></li>
        </ul>

        <h2>Erradicación de Insider Threats</h2>
        <h3>Técnicas Generales</h3>
        <ul>
            <li><span class="key-term">Access Control</span>: Limitar acceso al mínimo necesario (least privilege). Si necesitan más, deben solicitarlo al supervisor</li>
            <li><span class="key-term">Data Encryption</span>: Cifrar datos at rest, in motion, in use. Claves de al menos <span class="key-term">256 bits</span></li>
            <li><span class="key-term">Isolate Storage</span>: Nunca almacenar info sensible en computador conectado a la red regular</li>
            <li><span class="key-term">Change Passwords Regularly</span>: Política fuerte de contraseñas, prohibir intercambio/guardado de passwords</li>
            <li><span class="key-term">DCAP</span>: Automatizar gestión de cuentas y monitoreo de patrones de uso</li>
            <li><span class="key-term">Segregation of Duties</span>: Segregar roles para minimizar actividades fraudulentas</li>
            <li><span class="key-term">UEBA</span>: Monitorear constantemente para detectar comportamiento inusual</li>
        </ul>

        <h3>Erradicación: Recursos Humanos</h3>
        <ul>
            <li>Crear políticas de comportamiento y uso ético de información</li>
            <li>Requerir firma de <span class="key-term">acuerdo de confidencialidad y NDA</span></li>
            <li>Permitir a empleados expresar preocupaciones (entrevistas, encuestas, feedback)</li>
            <li>Rastrear gastos e ingresos de empleados (cambios financieros inesperados = posible ingreso externo)</li>
            <li>Background check exhaustivo en nuevos empleados y posiciones sensibles</li>
            <li>Monitorear actividades de empleados temporales/terceros con cámaras</li>
            <li>Política de <span class="key-term">terminación de empleado</span>: entregar equipo, notificar a colegas/vendors, desactivar acceso a apps móviles</li>
            <li>Revisar actividad de red ANTES de la partida del empleado</li>
        </ul>

        <h3>Erradicación: Network Security</h3>
        <ul>
            <li>Configurar firewalls y monitorear tráfico outbound a HTTP/HTTPS</li>
            <li>Crear reglas para reducir transferencia outbound de archivos a usuarios autorizados</li>
            <li>Prevenir file sharing e instant messaging no autorizados</li>
            <li>Escanear todos los emails entrantes/salientes para info sensible y código malicioso</li>
            <li>Implementar <span class="key-term">MFA</span> y políticas estrictas de contraseñas</li>
            <li>Implementar <span class="key-term">ZTNA</span> (Zero Trust Network Access)</li>
        </ul>

        <h3>Erradicación: Access Controls</h3>
        <ul>
            <li>Habilitar privilegios basados en el rol (job-based)</li>
            <li>Deshabilitar capacidad de descargar contenido, instalar apps, habilitar acceso remoto, modificar logs</li>
            <li>Instalar herramientas de alerta de modificación en sistemas de usuario</li>
            <li>Auditar derechos de acceso regularmente y revocar acceso innecesario</li>
            <li>Deshabilitar TODOS los privilegios tras terminación (premises, apps, cuentas, network devices)</li>
            <li>Restringir logins concurrentes para prevenir problemas de repudio</li>
            <li>Implementar <span class="key-term">DLP tools</span> para restringir exfiltración</li>
            <li>Desplegar <span class="key-term">identity security solutions</span> para rastrear cuentas y accesos</li>
        </ul>

        <h3>Erradicación: Privileged Users</h3>
        <ul>
            <li>Implementar técnicas de <span class="key-term">non-repudiation</span> para ver acciones de admins</li>
            <li>Deshabilitar cuentas administrativas por defecto</li>
            <li>Usar cifrado para prevenir que admins accedan a backup tapes</li>
            <li>Implementar <span class="key-term">JIT PAM</span> (Just-In-Time Privileged Access Management) para evitar acceso persistente</li>
            <li>Usar <span class="key-term">privileged password managers</span> para evitar que admins vean passwords en plain text</li>
        </ul>

        <h3>Erradicación: Audit Trails y Log Monitoring</h3>
        <ul>
            <li>Enforcer políticas de passwords con herramientas de gestión y Active Directory</li>
            <li>Considerar implicaciones legales ANTES de usar controles de monitoreo</li>
            <li>Notificar a empleados que la organización logueará todas las actividades</li>
            <li>Configurar audit trails para network devices, OS, software comercial y custom apps</li>
            <li>Proteger archivos de auditoría con permisos de archivo y almacenar en host server central</li>
            <li>Mantener <span class="key-term">chain of custody</span> para log files</li>
            <li>Implementar <span class="key-term">intrusion detection</span> y <span class="key-term">file integrity software</span></li>
        </ul>

        <h2>Herramientas de Detección de Insider Threats</h2>
        <ul>
            <li><span class="key-term">SysTools SQL Log Analyzer</span>: Analizar .LDF files para transacciones de BD sospechosas</li>
            <li><span class="key-term">dbForge Transaction Log, Stellar SQL Log Analyzer, Aryson SQL Log Analyzer</span></li>
            <li>Database forensic analysis tools adicionales</li>
        </ul>
        `
    },
    10: {
        title: "Handling and Responding to Endpoint Security Incidents",
        content: `
        <h2>Introducción a Endpoint Security Incidents</h2>
        <p>Un <span class="key-term">endpoint</span> es cualquier dispositivo conectado remotamente a la red organizacional: móvil, laptop, desktop, tablet, servidor, entorno virtual, dispositivo <span class="key-term">IoT</span> y dispositivo <span class="key-term">OT</span> (Operational Technology). Son la puerta de entrada potencial a la red y los activos críticos.</p>
        <p>Los incidentes de endpoint se clasifican en tres grandes categorías:</p>
        <ul>
            <li><span class="key-term">Mobile-based Security Incidents</span>: Ataques a dispositivos móviles (BYOD)</li>
            <li><span class="key-term">IoT-based Security Incidents</span>: Ataques a dispositivos IoT con seguridad limitada</li>
            <li><span class="key-term">OT-based Security Incidents</span>: Ataques a sistemas industriales (ICS/SCADA)</li>
        </ul>

        <h2>Incidentes de Seguridad Basados en Móviles</h2>
        <h3>Tipos de Ataques Móviles</h3>
        <ul>
            <li><span class="key-term">Browser-based attacks</span>: Phishing, Framing, Clickjacking, Man-in-the-mobile, Buffer overflow, Data caching</li>
            <li><span class="key-term">Phone/SMS-based attacks</span>: Baseband attacks, <span class="key-term">SMiShing</span> (SMS phishing)</li>
            <li><span class="key-term">Application-based attacks</span>: Sensitive data storage, No/weak encryption, Improper SSL validation, Configuration manipulation, Dynamic runtime injection, Unintended permissions, Escalated privileges</li>
            <li><span class="key-term">OS-based attacks</span>: No passcode/weak passcode, <span class="key-term">iOS jailbreaking</span>, <span class="key-term">Android rooting</span>, OS data caching, Carrier-loaded software</li>
            <li><span class="key-term">Network-based attacks</span>: Wi-Fi weak/no encryption, Rogue access points, Packet sniffing, MITM, Session hijacking, DNS poisoning, SSLStrip, Fake SSL certificates</li>
        </ul>
        <h3>OWASP Top 10 Mobile Risks</h3>
        <ul>
            <li><span class="key-term">M1 - Improper Platform Usage</span>: Mal uso de features de plataforma (Android intents, permisos, Touch ID, Keychain)</li>
            <li><span class="key-term">M2 - Insecure Data Storage</span>: Almacenamiento inseguro, data leakage por URL caching, cookies, HTML5 storage</li>
            <li><span class="key-term">M3 - Insecure Communication</span>: Poor handshaking, incorrect SSL versions, cleartext communication, facilita MITM</li>
            <li><span class="key-term">M4 - Insecure Authentication</span>: Fallo en identificar usuarios, mantener identidad, gestión de sesiones</li>
            <li><span class="key-term">M5 - Insufficient Cryptography</span>: Criptografía débil, permite recuperar datos sensibles del dispositivo</li>
            <li><span class="key-term">M6 - Insecure Authorization</span>: Decisiones de autorización en cliente, forced browsing</li>
            <li><span class="key-term">M7 - Client Code Quality</span>: Buffer overflows, format string vulnerabilities en código móvil</li>
            <li><span class="key-term">M8 - Code Tampering</span>: Binary patching, method hooking/swizzling, dynamic memory modification</li>
            <li><span class="key-term">M9 - Reverse Engineering</span>: Análisis de binarios con IDA, Hopper, otool para descubrir vulnerabilidades</li>
            <li><span class="key-term">M10 - Extraneous Functionality</span>: Backdoors ocultos, controles de desarrollo no eliminados en producción</li>
        </ul>
        <h3>Preparación para Incidentes Móviles</h3>
        <ul>
            <li>Implementar política estricta de seguridad de dispositivos móviles</li>
            <li>Incorporar <span class="key-term">mobile asset management</span> (OS, versiones, apps instaladas)</li>
            <li>Desplegar <span class="key-term">MDM</span> (Mobile Device Management) e <span class="key-term">IAM</span> para detección</li>
            <li>Desplegar <span class="key-term">MAM</span> (Mobile Application Management) para gestión de dispositivos</li>
            <li>Configurar <span class="key-term">remote wiping</span> capabilities para prevenir data leakage</li>
            <li>Prevenir dispositivos jailbroken/rooted de acceder a recursos corporativos</li>
            <li>Definir estrategias de <span class="key-term">data acquisition</span> para mobile forensics</li>
        </ul>
        <h3>Toolkit de Incidentes Móviles</h3>
        <ul>
            <li><strong>Device Monitoring</strong>: <span class="key-term">Kandji</span>, <span class="key-term">Citrix Endpoint Management</span>, <span class="key-term">Scalefusion MDM</span>, <span class="key-term">IBM MaaS360</span>, <span class="key-term">VMware Workspace ONE</span></li>
            <li><strong>Network Traffic Analysis</strong>: <span class="key-term">Wireshark</span>, <span class="key-term">tcpdump</span>, <span class="key-term">FaceNiff</span>, <span class="key-term">PCAPdroid</span>, <span class="key-term">Network Analyzer Pro</span></li>
            <li><strong>Android Malware Analysis</strong>: <span class="key-term">DeGuard</span>, <span class="key-term">ClassyShark</span>, <span class="key-term">Argus-SAF</span>, <span class="key-term">AppMon</span>, <span class="key-term">Quark</span></li>
            <li><strong>Reverse Engineering</strong>: <span class="key-term">Frida</span>, <span class="key-term">Radare2</span>, <span class="key-term">Apktool</span>, <span class="key-term">JADX</span>, <span class="key-term">GDA</span></li>
            <li><strong>Mobile Data Acquisition</strong>: <span class="key-term">Cellebrite UFED</span>, <span class="key-term">XRY</span>, <span class="key-term">Oxygen Forensics</span>, <span class="key-term">Belkasoft</span>, <span class="key-term">MOBILedit Forensic</span></li>
            <li><strong>Log Analysis</strong>: <span class="key-term">SolarWinds Loggly</span>, <span class="key-term">pCloudy</span>, <span class="key-term">NXLog</span>, <span class="key-term">LogRabbit</span></li>
        </ul>
        <h3>Detección de Incidentes Móviles</h3>
        <p><strong>Indicadores:</strong> Popups frecuentes, llamadas/SMS inusuales, cambios en temperatura, degradación de rendimiento, disminución rápida de batería, aumento de factura, apps no deseadas ejecutándose, alto consumo de datos, cambios en configuración, crashes repetidos, múltiples prompts de password incorrectos.</p>
        <h3>Investigación con Mobile Verification Toolkit (MVT)</h3>
        <p><span class="key-term">MVT</span> permite adquisición forense en iOS y Android para detectar signos de incidentes.</p>
        <ul>
            <li><strong>iOS</strong>: Backup con iTunes > <code>mvt-ios decrypt-backup</code> > <code>mvt-ios check-backup</code> > analizar JSON logs</li>
            <li><strong>Android</strong>: <code>mvt-android check-adb</code> > <code>mvt-android download-apks</code> (verificar con VirusTotal y Koodous) > <code>mvt-android check-backup</code></li>
            <li><strong>Android Network Traffic</strong>: <span class="key-term">PCAP Remote</span> + <span class="key-term">Wireshark</span> via SSH tunnel (puerto 15432)</li>
            <li><strong>iOS Network Traffic</strong>: Xcode > UDID > <code>rvictl -s &lt;UUID&gt;</code> > Wireshark en interfaz rvi0</li>
            <li><strong>Android Logs</strong>: <code>adb logcat</code>, <code>adb logcat -v threadtime</code>. Tools: <span class="key-term">LogRabbit</span>, <span class="key-term">Google Admin Toolbox</span></li>
            <li><strong>iOS Logs</strong>: <span class="key-term">Logentries</span>, <span class="key-term">Datadog</span>, <span class="key-term">3uTools</span>, <span class="key-term">iDevice Panic Log Analyzer</span></li>
        </ul>
        <h3>Contención, Erradicación y Recuperación Móvil</h3>
        <ul>
            <li><strong>Contención:</strong> Aislar dispositivo, resetear passwords con MFA, contactar proveedor para desactivar SIM, <span class="key-term">remote wipe</span>, reiniciar en <span class="key-term">safe mode</span></li>
            <li><strong>Erradicación:</strong> Escaneos repetidos, parchear vulnerabilidades, instalar antivirus (<span class="key-term">Norton</span>, <span class="key-term">McAfee</span>, <span class="key-term">Kaspersky</span>), <span class="key-term">safe/emergency mode</span>, reinstalar OS si persistente</li>
            <li><strong>Recuperación:</strong> Reconstruir con backup confiable, <span class="key-term">recovery mode</span>/<span class="key-term">DFU mode</span>, MFA con <span class="key-term">Google Authenticator</span>/<span class="key-term">Authy</span> (no SMS), instalar <span class="key-term">Harmony Mobile</span></li>
        </ul>
        <h3>Best Practices - Seguridad Móvil</h3>
        <ul>
            <li>Apps solo desde stores oficiales, deshabilitar Wi-Fi/Bluetooth cuando no estén en uso</li>
            <li>Passcode <span class="key-term">8+ caracteres complejos</span>, idle timeout, lockout/wipe tras intentos fallidos</li>
            <li>Implementar <span class="key-term">MDM</span>, <span class="key-term">EMM</span>, o <span class="key-term">UEM</span>; no permitir <span class="key-term">rooting/jailbreaking</span></li>
            <li>Cifrar almacenamiento y backups, <span class="key-term">geofencing</span> en dispositivos corporativos</li>
            <li><strong>Android</strong>: Google Play Protect, safe browsing, Lockdown Mode, VPN, two-step verification</li>
            <li><strong>iOS</strong>: Cambiar default root password (alpine), Erase Data (10 intentos), Lockdown Mode, Safety Check, passkeys</li>
        </ul>
        <h3>Herramientas de Seguridad Móvil</h3>
        <ul>
            <li><strong>Android</strong>: <span class="key-term">ESET Mobile Security</span>, <span class="key-term">Avast</span>, <span class="key-term">Bitdefender</span>, <span class="key-term">Kaspersky</span>, <span class="key-term">Trend Micro</span></li>
            <li><strong>iOS</strong>: <span class="key-term">Avira Mobile Security</span>, <span class="key-term">McAfee Total Protection</span>, <span class="key-term">Norton 360</span>, <span class="key-term">LogDog</span></li>
        </ul>

        <h2>Incidentes de Seguridad Basados en IoT</h2>
        <h3>Ataques Comunes a IoT</h3>
        <ul>
            <li><span class="key-term">DDoS attack</span>, <span class="key-term">HVAC system attacks</span>, <span class="key-term">Rolling code attack</span></li>
            <li><span class="key-term">BlueBorne attack</span> (Bluetooth), <span class="key-term">Jamming attack</span>, <span class="key-term">Sybil attack</span></li>
            <li><span class="key-term">Replay attack</span>, <span class="key-term">SDR-based attack</span>, <span class="key-term">Side-channel attack</span></li>
            <li><span class="key-term">Remote access via backdoor/Telnet</span>, <span class="key-term">Forged malicious device</span></li>
            <li><span class="key-term">Fault injection attack</span>, <span class="key-term">Ransomware attack</span></li>
        </ul>
        <h3>OWASP Top 10 IoT Threats</h3>
        <ul>
            <li><span class="key-term">Weak/Guessable/Hardcoded Passwords</span>: Credenciales débiles, backdoors en firmware</li>
            <li><span class="key-term">Insecure Network Services</span>: Buffer overflow, puertos abiertos explotables</li>
            <li><span class="key-term">Insecure Ecosystem Interfaces</span>: Web, API, mobile, cloud sin autenticación adecuada</li>
            <li><span class="key-term">Lack of Secure Update Mechanisms</span>: Sin validación de firmware, sin anti-rollback</li>
            <li><span class="key-term">Use of Insecure/Outdated Components</span>: Software legacy comprometido</li>
            <li><span class="key-term">Insufficient Privacy Protection</span>: Datos personales comprometidos</li>
            <li><span class="key-term">Insecure Data Transfer and Storage</span>: Sin cifrado en tránsito o at rest</li>
            <li><span class="key-term">Lack of Device Management</span>: Sin asset/update management</li>
            <li><span class="key-term">Insecure Default Settings</span>: Configuraciones insuficientes</li>
            <li><span class="key-term">Lack of Physical Hardening</span>: Permite control local del dispositivo</li>
        </ul>
        <h3>Preparación para Incidentes IoT</h3>
        <ul>
            <li>Inventario de dispositivos IoT para identificar <span class="key-term">shadow IT</span></li>
            <li>Implementar <span class="key-term">network segmentation</span>: separar red IT de red IoT</li>
            <li>Desplegar <span class="key-term">network sniffing tools</span> y controles multicapa</li>
            <li>Asegurar que todos los dispositivos estén provisionados y autenticados</li>
        </ul>
        <h3>Toolkit IoT</h3>
        <ul>
            <li><strong>Incident Management</strong>: <span class="key-term">PagerDuty</span>, <span class="key-term">Asimily</span>, <span class="key-term">Microsoft Defender for IoT</span></li>
            <li><strong>Monitoring</strong>: <span class="key-term">Domotz</span>, <span class="key-term">AWS IoT Device Management</span>, <span class="key-term">Datadog IoT</span></li>
            <li><strong>Traffic Analysis</strong>: <span class="key-term">Wireshark</span>, <span class="key-term">IoT Inspector</span>, <span class="key-term">IoTShark</span></li>
            <li><strong>Log Analysis</strong>: <span class="key-term">Datadog</span>, <span class="key-term">Sematext Logs</span>, <span class="key-term">Coralogix</span></li>
        </ul>
        <h3>Detección IoT</h3>
        <p><strong>Indicadores:</strong> Aumento en uso de Internet/datos, dispositivo no responde, DNS queries outbound inusuales, <span class="key-term">rogue devices</span>, puertos abiertos no utilizados, IPs desconocidas, monitoreo deshabilitado.</p>
        <p><strong><span class="key-term">Microsoft Sentinel</span></strong>: Integrar Defender for IoT > filtrar incidentes > ver entidades/MITRE ATT&CK > Entity behavior.</p>
        <p><strong><span class="key-term">Foren6</span></strong>: Análisis no intrusivo de redes <span class="key-term">6LoWPAN</span>, captura tráfico <span class="key-term">RPL</span>, detecta routing problems.</p>
        <h3>Contención, Erradicación y Recuperación IoT</h3>
        <ul>
            <li><strong>Contención:</strong> Desconectar/aislar dispositivos, cambiar passwords de TODOS los IoT, bloquear IPs de ataque, aislar sub-redes con <span class="key-term">VLANs</span>, deshabilitar <span class="key-term">UPnP</span>, usar <span class="key-term">Nmap/Shodan/Masscan</span>, mover a <span class="key-term">sandbox</span></li>
            <li><strong>Erradicación:</strong> Cambiar credenciales por defecto, habilitar <span class="key-term">MFA</span>, <span class="key-term">IDS/IPS</span>, <span class="key-term">factory reset</span>, remover <span class="key-term">Telnet</span> backdoors, cerrar puertos inseguros</li>
            <li><strong>Recuperación:</strong> Parchear firmware, reconfigurar firewalls, <span class="key-term">fault tolerance</span>, herramientas <span class="key-term">EmSPARK</span>/<span class="key-term">InnoOSR</span>, habilitar VPN para backup</li>
        </ul>
        <h3>Best Practices IoT</h3>
        <ul>
            <li>Deshabilitar <span class="key-term">Telnet (puerto 23)</span> y <span class="key-term">UPnP</span>; monitorear <span class="key-term">puerto 48101</span></li>
            <li>Cifrado end-to-end con <span class="key-term">PKI</span>, <span class="key-term">VPN</span>, <span class="key-term">secure boot</span> con code signing OEM</li>
            <li>Autenticación bidireccional: <span class="key-term">SHA con HMAC</span> (simétrico) y <span class="key-term">ECDSA</span> (asimétrico)</li>
            <li><span class="key-term">TEE</span> (Trusted Execution Environment) / <span class="key-term">TrustZone</span> para ARM</li>
            <li>Claves en <span class="key-term">SAM</span>, <span class="key-term">TPM</span>, <span class="key-term">HSM</span>; certificado <span class="key-term">X.509</span> por dispositivo</li>
            <li>Deshabilitar <span class="key-term">WebRTC</span>, usar <span class="key-term">dnswall</span> contra DNS rebinding, <span class="key-term">CDNs</span> anti-DDoS</li>
            <li><strong>Hardware:</strong> Limitar entry points, <span class="key-term">tamper protection</span>, <span class="key-term">Root-on-Trust</span>, proteger contra <span class="key-term">rowhammer</span></li>
        </ul>
        <h3>Herramientas IoT Security</h3>
        <ul>
            <li><span class="key-term">SeaCat.io</span>, <span class="key-term">Check Point Quantum IoT Protect</span>, <span class="key-term">Palo Alto IoT Security</span></li>
            <li><span class="key-term">DigiCert ONE</span>, <span class="key-term">Bosch IoT Insights</span>, <span class="key-term">Cisco Industrial Threat Defense</span></li>
        </ul>

        <h2>Incidentes de Seguridad Basados en OT</h2>
        <h3>Introducción a OT Security</h3>
        <p><span class="key-term">OT</span> (Operational Technology): plantas eléctricas, manufactura, petroquímica. Sistemas: <span class="key-term">PLCs</span>, <span class="key-term">HMIs</span>, <span class="key-term">DCS</span>. La convergencia <span class="key-term">IT/OT</span> aumenta vulnerabilidades.</p>
        <h3>Ataques Comunes a OT</h3>
        <ul>
            <li><span class="key-term">ICS resource destruction</span>, <span class="key-term">HMI-based attacks</span>, <span class="key-term">Protocol abuse</span> (Modbus, CIP, S7Comm)</li>
            <li><span class="key-term">DoS attacks</span>, <span class="key-term">SCADA exploits</span>, <span class="key-term">Data leakage</span></li>
            <li><span class="key-term">Malware attacks</span>, <span class="key-term">Exploiting unpatched vulnerabilities</span>, <span class="key-term">RF remote controller exploits</span></li>
        </ul>
        <h3>Preparación OT</h3>
        <ul>
            <li>Planes de respuesta específicos <span class="key-term">OT/ICS</span>, equipo entrenado en ICS/OT</li>
            <li>Mapas de red actualizados, herramientas de discovery pasivo/activo</li>
            <li><span class="key-term">Crown jewel analysis</span>, <span class="key-term">C2M2</span> (Cybersecurity Capability Maturity Model) assessments</li>
            <li>Simulacros rutinarios con evidencia real</li>
        </ul>
        <h3>Toolkit OT</h3>
        <ul>
            <li><strong>Incident Management</strong>: <span class="key-term">ServiceNow OT</span>, <span class="key-term">ETAP ADMS</span>, <span class="key-term">Flowmon</span>, <span class="key-term">LogRhythm</span></li>
            <li><strong>Network Monitoring</strong>: <span class="key-term">SCADAfence</span>, <span class="key-term">Microsoft Defender for IoT</span>, <span class="key-term">OPSWAT</span>, <span class="key-term">Rhebo</span>, <span class="key-term">Forescout</span></li>
            <li><strong>Malware Analysis</strong>: <span class="key-term">CyberX ICS Sandbox</span>, <span class="key-term">FortiGuard Sandbox</span>, <span class="key-term">IDA Pro</span></li>
            <li><strong>Evidence</strong>: <span class="key-term">Belkasoft Live RAM Capturer</span>, <span class="key-term">Registry Recon</span>, <span class="key-term">MAGNET RAM Capture</span></li>
        </ul>
        <h3>Detección OT</h3>
        <p><strong><span class="key-term">MITRE ATT&CK for ICS</span>:</strong> Framework de tácticas y técnicas adversarias ICS. Tools: <span class="key-term">Armis</span>, <span class="key-term">Forescout eyeInspect</span>, <span class="key-term">Dragos</span>, <span class="key-term">SCADAfence</span>.</p>
        <p><strong>Indicadores OT:</strong> Falta de segmentación/visibilidad, tráfico no autorizado, downtime forzado, USB desconocidos, fallo MFA, conexiones ICS interrumpidas, conexiones directas a Internet, <span class="key-term">rogue master/devices</span>, <span class="key-term">RDP/VNC</span> inseguros activos.</p>
        <h3>Análisis de Tráfico ICS</h3>
        <ul>
            <li><span class="key-term">Flowmon</span>: Monitoreo continuo, detección de anomalías en redes industriales</li>
            <li><span class="key-term">LogRhythm NDR</span>: Passive discovery, categoriza protocolos OT (<span class="key-term">Modbus</span>, <span class="key-term">CIP</span>, <span class="key-term">S7Comm</span>)</li>
            <li><span class="key-term">NetworkMiner</span>: Sniffer pasivo, analiza PCAP/PcapNG/ETL de IIoT traffic</li>
            <li><span class="key-term">Wireshark</span> para <span class="key-term">Modbus/TCP</span>: <span class="key-term">Puerto 502</span>, Modbus NO tiene cifrado built-in</li>
            <li><span class="key-term">Malcolm</span>, <span class="key-term">Forescout eyeInspect</span>, <span class="key-term">Industrial Defender</span>, <span class="key-term">Dragos Platform</span>, <span class="key-term">Nozomi Networks</span></li>
        </ul>

        <h2>Resumen de Puertos y Protocolos Clave</h2>
        <ul>
            <li><span class="key-term">Puerto 23</span>: Telnet (deshabilitar en IoT)</li>
            <li><span class="key-term">Puerto 502</span>: Modbus/TCP (protocolo ICS sin cifrado)</li>
            <li><span class="key-term">Puerto 15432</span>: PCAP Remote SSH tunnel para Wireshark</li>
            <li><span class="key-term">Puerto 48101</span>: Dispositivos IoT infectados propagan malware</li>
            <li><span class="key-term">Modbus</span>, <span class="key-term">CIP</span>, <span class="key-term">S7Comm</span>: Protocolos OT/ICS principales</li>
            <li><span class="key-term">6LoWPAN</span>: IPv6 over Low-Power Wireless Personal Area Networks</li>
            <li><span class="key-term">RPL</span>: Routing Protocol for Low-Power and Lossy Networks (IETF)</li>
        </ul>

        <h2>Frameworks y Estándares</h2>
        <ul>
            <li><span class="key-term">OWASP Top 10 Mobile Risks</span>: M1-M10</li>
            <li><span class="key-term">OWASP Top 10 IoT Threats</span>: Passwords, Network Services, Interfaces, Updates, Components, Privacy, Data, Device Management, Defaults, Physical Hardening</li>
            <li><span class="key-term">MITRE ATT&CK for ICS</span>: Knowledge base de tácticas adversarias ICS</li>
            <li><span class="key-term">C2M2</span>: Cybersecurity Capability Maturity Model para OT</li>
        </ul>
        `
    }
};

// FLASHCARDS
const flashcards = [
    // Módulo 1
    { module: 1, q: "¿Qué es un incidente de seguridad?", a: "Un evento que compromete la confidencialidad, integridad o disponibilidad (CIA) de los activos de información" },
    { module: 1, q: "¿Cuál es la diferencia entre un evento y un incidente?", a: "Un evento es cualquier ocurrencia observable; un incidente es un evento con impacto negativo en la seguridad" },
    { module: 1, q: "¿Qué significa CSIRT?", a: "Computer Security Incident Response Team - Equipo de respuesta a incidentes de seguridad informática" },
    { module: 1, q: "¿Qué es NIST SP 800-61?", a: "Computer Security Incident Handling Guide - Guía de NIST para el manejo de incidentes de seguridad" },
    { module: 1, q: "¿Qué es un SOC?", a: "Security Operations Center - Centro de operaciones de seguridad que monitorea y responde a incidentes 24/7" },

    // Módulo 2
    { module: 2, q: "¿Cuáles son las 4 fases del proceso IH&R según NIST?", a: "1. Preparation 2. Detection & Analysis 3. Containment, Eradication & Recovery 4. Post-Incident Activity" },
    { module: 2, q: "¿Qué es un playbook en IH&R?", a: "Documento que describe los pasos específicos a seguir para responder a un tipo particular de incidente" },
    { module: 2, q: "¿Qué significa MTTD?", a: "Mean Time to Detect - Tiempo promedio para detectar un incidente" },
    { module: 2, q: "¿Qué significa MTTR?", a: "Mean Time to Respond/Recover - Tiempo promedio para responder o recuperarse de un incidente" },
    { module: 2, q: "¿Qué son los IoCs?", a: "Indicators of Compromise - Indicadores de compromiso que sugieren una posible intrusión" },
    { module: 2, q: "¿Qué es el triage en IH&R?", a: "Proceso de priorizar incidentes según su severidad e impacto para determinar el orden de respuesta" },
    { module: 2, q: "¿Qué es la fase de Lessons Learned?", a: "Reunión post-incidente para documentar qué funcionó, qué no, y cómo mejorar los procesos" },

    // Módulo 3
    { module: 3, q: "¿Cuál es la regla de oro del First Response?", a: "Do no harm - No causar más daño y preservar la integridad de la evidencia" },
    { module: 3, q: "¿Cuál es el orden de volatilidad correcto?", a: "1. Registros/Cache CPU 2. RAM 3. Estado de red 4. Procesos 5. Disco 6. Medios removibles 7. Logs remotos" },
    { module: 3, q: "¿Qué es una bit-stream copy?", a: "Copia forense exacta bit a bit de un medio de almacenamiento, incluyendo espacio no asignado" },
    { module: 3, q: "¿Qué es la Chain of Custody?", a: "Documentación que registra quién tuvo acceso a la evidencia, cuándo y qué se hizo con ella" },
    { module: 3, q: "¿Por qué NO se debe apagar un sistema comprometido?", a: "Porque se perdería la evidencia volátil en RAM, incluyendo procesos, conexiones de red y malware en memoria" },
    { module: 3, q: "¿Qué herramienta se usa para capturar memoria RAM en Windows?", a: "WinPMEM, FTK Imager, o DumpIt" },

    // Módulo 4
    { module: 4, q: "¿Cuál es la diferencia entre virus y worm?", a: "Un virus requiere acción del usuario y se adjunta a archivos; un worm se propaga automáticamente por la red" },
    { module: 4, q: "¿Qué es un RAT?", a: "Remote Access Trojan - Malware que permite control remoto del sistema infectado" },
    { module: 4, q: "¿Qué es fileless malware?", a: "Malware que opera en memoria sin escribir archivos al disco, usando herramientas legítimas del sistema" },
    { module: 4, q: "¿Qué es análisis estático de malware?", a: "Examinar el código del malware sin ejecutarlo, analizando strings, imports, exports, etc." },
    { module: 4, q: "¿Qué es análisis dinámico de malware?", a: "Ejecutar el malware en un entorno controlado (sandbox) para observar su comportamiento" },
    { module: 4, q: "¿Qué es YARA?", a: "Herramienta para crear reglas de detección de malware basadas en patrones de texto o binarios" },
    { module: 4, q: "¿Qué es un C2 server?", a: "Command and Control server - Servidor que controla sistemas infectados y recibe datos exfiltrados" },

    // Módulo 5
    { module: 5, q: "¿Cuál es la diferencia entre phishing y spear phishing?", a: "Phishing es masivo e indiscriminado; spear phishing es dirigido a individuos u organizaciones específicas" },
    { module: 5, q: "¿Qué es BEC?", a: "Business Email Compromise - Fraude donde el atacante suplanta a ejecutivos para solicitar transferencias de dinero" },
    { module: 5, q: "¿Qué es SPF?", a: "Sender Policy Framework - Protocolo que verifica qué servidores pueden enviar email en nombre de un dominio" },
    { module: 5, q: "¿Qué es DKIM?", a: "DomainKeys Identified Mail - Sistema de firma digital que verifica que el email no fue modificado" },
    { module: 5, q: "¿Qué es DMARC?", a: "Domain-based Message Authentication, Reporting & Conformance - Política que define qué hacer si SPF/DKIM fallan" },
    { module: 5, q: "¿Qué header de email muestra la ruta real del mensaje?", a: "Received headers - Se leen de abajo hacia arriba para ver la ruta completa" },
    { module: 5, q: "¿Qué es whaling?", a: "Tipo de spear phishing dirigido específicamente a ejecutivos de alto nivel (C-level)" },

    // Módulo 6
    { module: 6, q: "¿Cuáles son los tres tipos de ataques DDoS?", a: "1. Volumetric (bandwidth) 2. Protocol (TCP/UDP) 3. Application Layer (HTTP)" },
    { module: 6, q: "¿Qué es un ataque SYN flood?", a: "Ataque que envía muchas solicitudes TCP SYN sin completar el handshake, agotando recursos del servidor" },
    { module: 6, q: "¿Qué es ARP spoofing?", a: "Ataque que asocia la MAC del atacante con la IP de otro host para interceptar tráfico" },
    { module: 6, q: "¿Qué es beaconing?", a: "Comunicación periódica de malware con su servidor C2, típicamente a intervalos regulares" },
    { module: 6, q: "¿Qué es un IDS vs IPS?", a: "IDS (Intrusion Detection System) detecta y alerta; IPS (Intrusion Prevention System) además bloquea" },
    { module: 6, q: "¿Qué es NetFlow?", a: "Protocolo de Cisco para recolectar información sobre flujos de tráfico IP en la red" },
    { module: 6, q: "¿Qué herramienta se usa para análisis de paquetes?", a: "Wireshark - Analizador de protocolos de red y paquetes" },

    // Módulo 7
    { module: 7, q: "¿Qué es SQL Injection?", a: "Ataque que inyecta código SQL malicioso a través de inputs para manipular la base de datos" },
    { module: 7, q: "¿Cuáles son los 3 tipos de XSS?", a: "1. Stored (persistente) 2. Reflected (no persistente) 3. DOM-based" },
    { module: 7, q: "¿Qué es CSRF?", a: "Cross-Site Request Forgery - Ataque que fuerza al usuario a ejecutar acciones no deseadas en una web autenticada" },
    { module: 7, q: "¿Cómo se previene SQL Injection?", a: "Usando prepared statements/parameterized queries y validación de input" },
    { module: 7, q: "¿Qué es un WAF?", a: "Web Application Firewall - Firewall que filtra tráfico HTTP malicioso hacia aplicaciones web" },
    { module: 7, q: "¿Qué es SSRF?", a: "Server-Side Request Forgery - Ataque que hace que el servidor realice requests a recursos internos" },
    { module: 7, q: "¿Qué es directory traversal?", a: "Ataque que usa ../ para acceder a archivos fuera del directorio web permitido" },

    // Módulo 8
    { module: 8, q: "¿Qué es el modelo de responsabilidad compartida?", a: "El proveedor cloud asegura la infraestructura (DE la nube); el cliente asegura sus datos y configuración (EN la nube)" },
    { module: 8, q: "¿Qué es CSPM?", a: "Cloud Security Posture Management - Herramienta que identifica misconfiguraciones en entornos cloud" },
    { module: 8, q: "¿Qué es CASB?", a: "Cloud Access Security Broker - Intermediario que aplica políticas de seguridad entre usuarios y servicios cloud" },
    { module: 8, q: "¿Qué es AWS CloudTrail?", a: "Servicio de AWS que registra todas las llamadas a API para auditoría y compliance" },
    { module: 8, q: "¿Qué es Shadow IT?", a: "Uso de servicios cloud no autorizados por empleados sin conocimiento de IT/Seguridad" },
    { module: 8, q: "¿Cuál es la amenaza #1 en cloud según reportes?", a: "Misconfiguration - Configuración incorrecta de recursos cloud (ej: S3 buckets públicos)" },

    // Módulo 9
    { module: 9, q: "¿Cuáles son los 3 tipos de insider threats?", a: "1. Malicious (intencional) 2. Negligent (descuido) 3. Compromised (credenciales robadas)" },
    { module: 9, q: "¿Qué es UEBA?", a: "User and Entity Behavior Analytics - Sistema que detecta anomalías en el comportamiento de usuarios" },
    { module: 9, q: "¿Qué es DLP?", a: "Data Loss Prevention - Tecnología que previene la fuga de datos sensibles" },
    { module: 9, q: "¿Cuáles son indicadores de un insider malicioso?", a: "Acceso fuera de horario, descarga masiva de datos, acceso a información fuera de su rol, próxima salida de la empresa" },
    { module: 9, q: "¿Qué es separation of duties?", a: "Principio que divide tareas críticas entre múltiples personas para prevenir fraude" },
    { module: 9, q: "¿Qué es PAM?", a: "Privileged Access Management - Sistema para controlar y auditar accesos privilegiados" },

    // Módulo 10
    { module: 10, q: "¿Qué es EDR?", a: "Endpoint Detection and Response - Solución que detecta, investiga y responde a amenazas en endpoints" },
    { module: 10, q: "¿Qué es XDR?", a: "Extended Detection and Response - EDR extendido que integra datos de múltiples fuentes (red, email, cloud)" },
    { module: 10, q: "¿Qué son LOLBins?", a: "Living off the Land Binaries - Herramientas legítimas del sistema usadas por atacantes (PowerShell, cmd, wmic)" },
    { module: 10, q: "¿Qué es Pass-the-Hash?", a: "Técnica que usa hashes NTLM robados para autenticarse sin conocer la contraseña" },
    { module: 10, q: "¿Qué es Mimikatz?", a: "Herramienta para extraer credenciales de memoria Windows (hashes, tickets Kerberos, passwords)" },
    { module: 10, q: "¿Qué es Sysmon?", a: "System Monitor de Windows que proporciona logging detallado de actividad del sistema" },
    { module: 10, q: "¿Qué artefactos Windows son útiles en forense?", a: "Prefetch, MFT, Registry hives, Event logs, NTUSER.DAT, ShimCache" },
    { module: 10, q: "¿Qué es KAPE?", a: "Kroll Artifact Parser and Extractor - Herramienta para recolección rápida de artefactos forenses" },

    // Módulo 1 - Adicionales
    { module: 1, q: "¿Cuál es la fórmula de ataques según el temario?", a: "Ataques = Motivo (Goal) + Método + Vulnerabilidad" },
    { module: 1, q: "¿Qué es la Triada CIA?", a: "Confidencialidad, Integridad y Disponibilidad - Los tres pilares fundamentales de la seguridad de la información" },
    { module: 1, q: "¿Qué es Autenticidad en seguridad?", a: "Garantía de que la comunicación, documento o dato es genuino y el origen es verificable" },
    { module: 1, q: "¿Qué es No Repudio?", a: "Garantía de que el emisor no puede negar haber enviado un mensaje y el receptor no puede negar haberlo recibido" },
    { module: 1, q: "¿Qué es un Threat Actor?", a: "Persona o entidad responsable de incidentes dañinos con potencial de impactar la seguridad de una organización" },
    { module: 1, q: "¿Qué es Hacktivism?", a: "Forma de activismo donde hackers irrumpen en sistemas gubernamentales o corporativos como acto de protesta" },
    { module: 1, q: "¿Qué son los Script Kiddies?", a: "Atacantes sin habilidades técnicas que usan herramientas y scripts creados por otros" },
    { module: 1, q: "¿Qué es un APT?", a: "Advanced Persistent Threat - Ataque sofisticado, prolongado y dirigido, típicamente patrocinado por estados" },
    { module: 1, q: "¿Qué es el Cyber Kill Chain?", a: "Framework de Lockheed Martin que describe las 7 fases de un ciberataque: Reconnaissance, Weaponization, Delivery, Exploitation, Installation, C2, Actions" },
    { module: 1, q: "¿Qué es MITRE ATT&CK?", a: "Base de conocimiento de tácticas, técnicas y procedimientos (TTPs) usados por adversarios" },
    { module: 1, q: "¿Cuáles son las fuentes de amenazas?", a: "Natural (desastres), Unintentional (errores humanos), Intentional (ataques maliciosos)" },
    { module: 1, q: "¿Qué es Misconfiguration?", a: "La vulnerabilidad más común, causada principalmente por error humano en la configuración de sistemas" },
    { module: 1, q: "¿Qué es un Gray Hat?", a: "Hacker que puede violar leyes sin intención maliciosa, opera entre lo ético y no ético" },

    // Módulo 2 - Adicionales
    { module: 2, q: "¿Qué es ITIL Incident Management?", a: "Proceso de ITIL para restaurar servicios de negocio lo antes posible con mínimo impacto" },
    { module: 2, q: "¿Cuáles son los pasos de ITIL para incidentes?", a: "Registration, Categorization, Assignment, Diagnosis, Resolution, Closure" },
    { module: 2, q: "¿Qué es COBIT?", a: "Framework de gobierno IT que define controles y procesos para gestión de incidentes con niveles de madurez CMMI" },
    { module: 2, q: "¿Qué son los CIS Controls?", a: "Conjunto prioritario de acciones de defensa en profundidad desarrolladas por Center for Internet Security" },
    { module: 2, q: "¿Qué es un AAR (After-Action Report)?", a: "Informe estratégico post-incidente que documenta qué funcionó, áreas de mejora y estrategias futuras" },
    { module: 2, q: "¿Qué incluye un Incident Postmortem?", a: "Severidad, impacto, timeline, root cause analysis, incidents relacionados, lessons learned" },
    { module: 2, q: "¿Qué es Mean Time to Resolution?", a: "MTTR - Tiempo promedio desde detección hasta resolución completa del incidente" },
    { module: 2, q: "¿Qué es un Runbook?", a: "Documento con procedimientos paso a paso para tareas operativas rutinarias o respuesta a incidentes" },
    { module: 2, q: "¿Qué preguntas responde Lessons Learned?", a: "¿Qué causó el incidente? ¿Cómo se contuvo? ¿Qué funcionó bien? ¿Qué requiere mejora?" },
    { module: 2, q: "¿Qué es ISO 27035?", a: "Estándar internacional para Gestión de Incidentes de Seguridad de la Información" },
    { module: 2, q: "¿Qué es ISO 27037?", a: "Estándar para identificación, recolección, adquisición y preservación de evidencia digital" },
    { module: 2, q: "¿Según NERC 1307, cuánto tiempo se retienen registros?", a: "Tres años calendario para registros de incidentes de ciberseguridad" },

    // Módulo 3 - Adicionales
    { module: 3, q: "¿Qué hacer si el computador está APAGADO en la escena?", a: "NO encenderlo - podría alterar evidencia o disparar procesos destructivos" },
    { module: 3, q: "¿Qué hacer si el computador está ENCENDIDO?", a: "Fotografiar la pantalla, documentar programas en ejecución, recolectar datos volátiles antes de apagar" },
    { module: 3, q: "¿Cuándo DESCONECTAR inmediatamente la energía?", a: "Si se observan procesos destructivos borrando datos o sobrescribiendo información" },
    { module: 3, q: "¿Cuándo NO desconectar la energía?", a: "Cuando hay datos de valor evidencial visibles, archivos activos, chatrooms, documentos financieros abiertos" },
    { module: 3, q: "¿Qué dispositivos buscar además de computadoras?", a: "Grabadoras audio/video, cámaras, GPS, tarjetas de acceso, smartphones, caller ID boxes" },
    { module: 3, q: "¿Cómo manejar smartphones encontrados?", a: "Si está OFF: no encender. Si está ON: mantenerlo cargado, fotografiar pantalla, no manipular" },
    { module: 3, q: "¿Qué son archivos de startup maliciosos?", a: "Archivos creados por malware en carpetas de inicio (Windows: startup/system32, Linux: rc.local)" },
    { module: 3, q: "¿Qué es MAC time en forense?", a: "Modified, Accessed, Changed times - timestamps de archivos útiles para reconstruir timeline" },
    { module: 3, q: "¿Cómo apagar correctamente un sistema Windows?", a: "Fotografiar pantalla, documentar programas, Start > Power > Shut down, esperar y desconectar" },
    { module: 3, q: "¿Cómo apagar Linux como root?", a: "Comando sync;sync;halt para apagado seguro preservando integridad" },

    // Módulo 4 - Adicionales
    { module: 4, q: "¿Qué es un Trojan?", a: "Malware disfrazado de software legítimo que ejecuta acciones maliciosas cuando se instala" },
    { module: 4, q: "¿Qué es Ransomware?", a: "Malware que cifra archivos de la víctima y exige pago (ransom) para proporcionar la clave de descifrado" },
    { module: 4, q: "¿Qué es Spyware?", a: "Malware que monitorea secretamente la actividad del usuario y recolecta información sin consentimiento" },
    { module: 4, q: "¿Qué es Adware?", a: "Software que muestra anuncios no deseados, frecuentemente bundled con software gratuito" },
    { module: 4, q: "¿Qué es un Rootkit?", a: "Malware diseñado para ocultar su presencia y mantener acceso privilegiado persistente al sistema" },
    { module: 4, q: "¿Qué es un Keylogger?", a: "Malware que registra pulsaciones de teclas para capturar credenciales, contraseñas y datos sensibles" },
    { module: 4, q: "¿Qué es una Botnet?", a: "Red de computadoras infectadas (bots/zombies) controladas remotamente para actividades maliciosas como DDoS" },
    { module: 4, q: "¿Qué es un PUP?", a: "Potentially Unwanted Program - Software potencialmente no deseado, frecuentemente bundled con otros programas" },
    { module: 4, q: "¿Qué es IOC?", a: "Indicator of Compromise - Evidencia forense que sugiere una brecha de seguridad (hashes, IPs, dominios)" },
    { module: 4, q: "¿Qué es la estrategia 3-2-1 de backup?", a: "3 copias de datos, en 2 tipos de medios diferentes, con 1 copia offsite/fuera del sitio" },
    { module: 4, q: "¿Primer paso al detectar ransomware?", a: "Desconectar sistemas infectados de la red inmediatamente para prevenir propagación" },
    { module: 4, q: "¿Qué puertos monitorear para ransomware?", a: "RDP (3389) y SMB (445) - puertos comúnmente usados por ransomware para propagarse" },
    { module: 4, q: "¿Qué es Malwarebytes?", a: "Software anti-malware que proporciona protección en tiempo real contra virus, ransomware, spyware y exploits" },

    // Módulo 5 - Adicionales
    { module: 5, q: "¿Qué es Vishing?", a: "Voice Phishing - Ataques de ingeniería social realizados via llamadas telefónicas" },
    { module: 5, q: "¿Qué es Smishing?", a: "SMS Phishing - Ataques de phishing realizados via mensajes de texto SMS" },
    { module: 5, q: "¿Qué es Pharming?", a: "Ataque que redirige tráfico de sitios web legítimos a fraudulentos via DNS poisoning o modificación de hosts" },
    { module: 5, q: "¿Qué es Clone Phishing?", a: "Ataque que crea copia casi idéntica de email legítimo pero con enlaces/adjuntos maliciosos" },
    { module: 5, q: "¿Qué header muestra IP del remitente?", a: "X-Originating-IP - Revela la IP del computador que envió el email, útil en análisis forense" },
    { module: 5, q: "¿Qué es Outlook PST?", a: "Personal Storage Table - Archivo donde Outlook almacena emails, contactos y calendario localmente" },
    { module: 5, q: "¿Diferencia entre Soft y Hard delete en Outlook?", a: "Soft: mueve a Deleted Items. Hard (Shift+Delete): elimina permanentemente del mailbox" },
    { module: 5, q: "¿Cómo leer los Received headers?", a: "De abajo hacia arriba - El más bajo es el origen, el más alto es el destino final" },
    { module: 5, q: "¿Qué herramienta recupera emails de Outlook?", a: "EaseUS Email Recovery Wizard, Stellar Undelete, SysTools Outlook Recovery" },

    // Módulo 6 - Adicionales
    { module: 6, q: "¿Qué es un ataque Amplification?", a: "Ataque DDoS que usa servidores intermediarios para amplificar el volumen del tráfico hacia la víctima" },
    { module: 6, q: "¿Qué es DNS Amplification?", a: "Ataque que usa servidores DNS recursivos para amplificar tráfico hacia la víctima con respuestas grandes" },
    { module: 6, q: "¿Qué es SIEM?", a: "Security Information and Event Management - Sistema que correlaciona logs y eventos para detectar amenazas" },
    { module: 6, q: "¿Qué es un honeypot?", a: "Sistema señuelo diseñado para atraer atacantes y estudiar sus técnicas sin riesgo a sistemas reales" },
    { module: 6, q: "¿Qué es man-in-the-middle?", a: "Ataque donde el atacante intercepta comunicaciones entre dos partes sin que lo sepan" },
    { module: 6, q: "¿Qué es session hijacking?", a: "Ataque que roba o predice tokens de sesión para tomar control de una sesión autenticada" },

    // Módulo 7 - Adicionales
    { module: 7, q: "¿Qué es Stored XSS?", a: "XSS donde el script malicioso se almacena permanentemente en el servidor (ej: en base de datos)" },
    { module: 7, q: "¿Qué es Reflected XSS?", a: "XSS donde el payload se refleja inmediatamente del servidor en la respuesta HTTP" },
    { module: 7, q: "¿Qué es DOM-based XSS?", a: "XSS donde la vulnerabilidad existe en scripts del lado cliente que modifican el DOM" },
    { module: 7, q: "¿Qué es OWASP Top 10?", a: "Lista de las 10 vulnerabilidades de seguridad más críticas en aplicaciones web según OWASP" },
    { module: 7, q: "¿Qué es Command Injection?", a: "Ataque que ejecuta comandos del sistema operativo a través de inputs de la aplicación vulnerable" },
    { module: 7, q: "¿Qué es Broken Authentication?", a: "Vulnerabilidad en gestión de sesiones/autenticación que permite acceso no autorizado a cuentas" },
    { module: 7, q: "¿Qué es Insecure Direct Object Reference?", a: "Vulnerabilidad que permite acceder a objetos (archivos, registros) cambiando parámetros en la URL" },

    // Módulo 8 - Adicionales
    { module: 8, q: "¿Cuáles son los 4 modelos de despliegue cloud?", a: "Public, Private, Hybrid, Community" },
    { module: 8, q: "¿Qué es IaaS?", a: "Infrastructure as a Service - Proveedor ofrece infraestructura (VMs, storage, networking)" },
    { module: 8, q: "¿Qué es PaaS?", a: "Platform as a Service - Proveedor ofrece plataforma para desarrollar y desplegar aplicaciones" },
    { module: 8, q: "¿Qué es SaaS?", a: "Software as a Service - Proveedor ofrece aplicaciones listas para usar via web (ej: Gmail, Office 365)" },
    { module: 8, q: "¿Qué es AWS GuardDuty?", a: "Servicio de detección de amenazas de AWS que monitorea actividad maliciosa y comportamiento no autorizado" },
    { module: 8, q: "¿Qué es Azure Activity Log?", a: "Servicio de Azure equivalente a CloudTrail - registra operaciones en recursos para auditoría" },
    { module: 8, q: "¿Qué es una VPC?", a: "Virtual Private Cloud - Red lógicamente aislada dentro de la infraestructura del proveedor cloud" },
    { module: 8, q: "¿Qué causa la mayoría de brechas en cloud?", a: "Misconfiguration - especialmente S3 buckets públicos y permisos excesivos" },
    { module: 8, q: "¿Qué es CWPP?", a: "Cloud Workload Protection Platform - Seguridad para cargas de trabajo de servidores en cloud" },
    { module: 8, q: "¿Qué es container security?", a: "Protección de aplicaciones containerizadas (Docker, Kubernetes) de vulnerabilidades y amenazas" },
    { module: 8, q: "¿Qué es Dynatrace?", a: "Herramienta de monitoreo de Google Cloud que proporciona métricas, logs y traces para visibilidad completa" },

    // Módulo 9 - Adicionales
    { module: 9, q: "¿Qué es un Malicious Insider?", a: "Empleado que intencionalmente causa daño por venganza, beneficio financiero u otros motivos" },
    { module: 9, q: "¿Qué es un Negligent Insider?", a: "Empleado que causa daño por descuido, error o falta de conciencia de seguridad" },
    { module: 9, q: "¿Qué es un Compromised Insider?", a: "Empleado cuyas credenciales han sido robadas y son usadas por atacantes externos" },
    { module: 9, q: "¿Qué es least privilege?", a: "Principio de dar a usuarios solo los permisos mínimos necesarios para realizar su trabajo" },
    { module: 9, q: "¿Qué indicadores detectan insiders maliciosos?", a: "Acceso fuera de horario, descarga masiva, acceso a datos fuera de su rol, próxima salida de empresa" },
    { module: 9, q: "¿Qué es mandatory vacation?", a: "Control que requiere vacaciones obligatorias para detectar fraudes que requieren presencia continua" },

    // Módulo 10 - Adicionales
    { module: 10, q: "¿Qué es Pass-the-Ticket?", a: "Técnica que usa tickets Kerberos robados para autenticarse sin necesidad de la contraseña" },
    { module: 10, q: "¿Qué es Golden Ticket?", a: "TGT de Kerberos falsificado que otorga acceso a cualquier recurso del dominio por tiempo indefinido" },
    { module: 10, q: "¿Qué es Silver Ticket?", a: "TGS de Kerberos falsificado para acceder a un servicio específico sin contactar el DC" },
    { module: 10, q: "¿Qué es Velociraptor?", a: "Herramienta de recolección forense y respuesta a incidentes para endpoints" },
    { module: 10, q: "¿Qué es Autoruns?", a: "Herramienta de Sysinternals que muestra programas configurados para ejecutarse durante startup" },
    { module: 10, q: "¿Qué es Process Monitor?", a: "Herramienta de Sysinternals para monitoreo en tiempo real de actividad de procesos, registro y filesystem" },
    { module: 10, q: "¿Qué son los Event Logs críticos en Windows?", a: "Security (4624, 4625, 4648), System, Application, PowerShell, Sysmon" },
    { module: 10, q: "¿Qué es ShimCache?", a: "Artefacto de Windows que registra aplicaciones ejecutadas, útil para detectar malware" },
    { module: 10, q: "¿Qué es Prefetch?", a: "Artefacto de Windows que almacena info de aplicaciones ejecutadas para acelerar su inicio" },
    { module: 10, q: "¿Qué es $MFT?", a: "Master File Table - Base de datos del sistema de archivos NTFS que contiene metadata de todos los archivos" }
];

// PREGUNTAS DE PRÁCTICA
const practiceQuestions = [
    {
        module: 1,
        question: "La seguridad de la informacion se basa en cinco elementos principales. Cual de los siguientes NO es uno de ellos?",
        options: [
            "Confidencialidad",
            "Integridad",
            "Disponibilidad",
            "Responsabilidad"
        ],
        correct: 3,
        explanation: "Los cinco elementos son: confidencialidad, integridad, disponibilidad, autenticidad y no repudio."
    },
    {
        module: 1,
        question: "Confidencialidad, Integridad y Disponibilidad se conocen colectivamente como:",
        options: [
            "El Triangulo de Seguridad",
            "La Triada CIA",
            "El Modelo de Seguridad de la Informacion",
            "El Marco de Defensa"
        ],
        correct: 1,
        explanation: "Triada CIA es el termino estandar para Confidencialidad, Integridad y Disponibilidad."
    },
    {
        module: 1,
        question: "Segun el temario, cual es la formula para los ataques de seguridad?",
        options: [
            "Ataques = Amenaza + Exploit + Objetivo",
            "Ataques = Motivo + Metodo + Vulnerabilidad",
            "Ataques = Hacker + Herramientas + Sistema",
            "Ataques = Riesgo + Impacto + Probabilidad"
        ],
        correct: 1,
        explanation: "El temario indica: Ataques = Motivo (Objetivo) + Metodo + Vulnerabilidad"
    },
    {
        module: 1,
        question: "Que es un actor de amenaza?",
        options: [
            "Un software que realiza acciones maliciosas",
            "Una persona o entidad responsable de incidentes daninos",
            "Un tipo de malware",
            "Un sistema de ataque automatizado"
        ],
        correct: 1,
        explanation: "Un actor de amenaza es una persona o entidad responsable de incidentes daninos o con potencial de impactar la seguridad."
    },
    {
        module: 1,
        question: "Las fuentes de amenazas se clasifican ampliamente en cuales tres categorias?",
        options: [
            "Internas, Externas, Fisicas",
            "Naturales, No Intencionales, Intencionales",
            "Tecnicas, Humanas, Ambientales",
            "Activas, Pasivas, Hibridas"
        ],
        correct: 1,
        explanation: "Las fuentes de amenazas se clasifican en: Naturales, No Intencionales e Intencionales."
    },
    {
        module: 1,
        question: "Que tipo de actor de amenaza usa habilidades de hacking con propositos defensivos?",
        options: [
            "Black Hats",
            "White Hats",
            "Gray Hats",
            "Script Kiddies"
        ],
        correct: 1,
        explanation: "Los white hats o pentesters usan sus habilidades de hacking con propositos defensivos."
    },
    {
        module: 1,
        question: "Que son los 'Script Kiddies'?",
        options: [
            "Hackers altamente capacitados",
            "Atacantes patrocinados por el gobierno",
            "Atacantes no capacitados usando herramientas gratuitas",
            "Especialistas en espionaje corporativo"
        ],
        correct: 2,
        explanation: "Los script kiddies son atacantes no capacitados que usan herramientas disponibles en linea."
    },
    {
        module: 1,
        question: "Por que los ataques internos son mas peligrosos que los externos?",
        options: [
            "Los insiders tienen herramientas mas poderosas",
            "Los insiders conocen la arquitectura de red y politicas de seguridad",
            "Los ataques externos siempre son detectados",
            "Los insiders tienen recursos ilimitados"
        ],
        correct: 1,
        explanation: "Los insiders conocen la arquitectura de red, politicas de seguridad y regulaciones organizacionales."
    },
    {
        module: 1,
        question: "Que es No Repudio?",
        options: [
            "Garantia de que la informacion es accesible solo para usuarios autorizados",
            "Confiabilidad de datos previniendo cambios no autorizados",
            "Garantia de que el emisor no puede negar enviar y el receptor no puede negar recibir",
            "Autenticidad de comunicaciones y documentos"
        ],
        correct: 2,
        explanation: "No repudio garantiza que el emisor no puede negar enviar y el receptor no puede negar recibir."
    },
    {
        module: 1,
        question: "El ataque de ransomware de 2023 mencionado en el temario ECIH involucro a que grupo atacando una aseguradora dental?",
        options: [
            "WannaCry",
            "LockBit atacando MCNA",
            "NotPetya",
            "REvil"
        ],
        correct: 1,
        explanation: "LockBit ataco a la aseguradora dental MCNA comprometiendo 8.9 millones de registros en 2023."
    },
    {
        module: 2,
        question: "Segun NIST SP 800-61, cuales son las cuatro fases de respuesta a incidentes?",
        options: [
            "Deteccion, Analisis, Eliminacion, Documentacion",
            "Preparacion, Deteccion/Analisis, Contencion/Erradicacion/Recuperacion, Post-Incidente",
            "Identificar, Proteger, Detectar, Responder",
            "Planificar, Implementar, Verificar, Mejorar"
        ],
        correct: 1,
        explanation: "Fases NIST: 1) Preparacion 2) Deteccion y Analisis 3) Contencion, Erradicacion y Recuperacion 4) Actividad Post-Incidente"
    },
    {
        module: 2,
        question: "Cual es el objetivo principal de la Gestion de Incidentes ITIL?",
        options: [
            "Castigar atacantes",
            "Restaurar servicios normales lo antes posible con minimo impacto",
            "Documentar todos los incidentes",
            "Identificar todas las vulnerabilidades"
        ],
        correct: 1,
        explanation: "ITIL busca restaurar los servicios y operaciones normales o SLAs lo antes posible con minimo impacto."
    },
    {
        module: 2,
        question: "Cuales son los pasos del proceso de Gestion de Incidentes ITIL?",
        options: [
            "Detectar, Analizar, Contener, Recuperar",
            "Registro, Categorizacion, Asignacion, Diagnostico, Resolucion, Cierre",
            "Planificar, Hacer, Verificar, Actuar",
            "Identificar, Proteger, Detectar, Responder, Recuperar"
        ],
        correct: 1,
        explanation: "Pasos ITIL: Registro, Categorizacion, Asignacion, Diagnostico, Resolucion, Cierre."
    },
    {
        module: 2,
        question: "COBIT 2019 presenta cuantos principios de gobierno de TI?",
        options: [
            "4",
            "5",
            "6",
            "7"
        ],
        correct: 2,
        explanation: "COBIT 2019 presenta seis principios de gobierno de TI."
    },
    {
        module: 2,
        question: "Cuantos Controles Criticos de Seguridad CIS se incluyen en la version 8?",
        options: [
            "10",
            "15",
            "18",
            "20"
        ],
        correct: 2,
        explanation: "CIS Controls version 8 incluye 18 controles criticos de seguridad."
    },
    {
        module: 2,
        question: "Que significa MTTD en metricas de respuesta a incidentes?",
        options: [
            "Tiempo Maximo para Detectar",
            "Tiempo Medio para Detectar",
            "Tiempo Minimo para Desplegar",
            "Tiempo Medio para Documentar"
        ],
        correct: 1,
        explanation: "MTTD = Tiempo Medio para Detectar - tiempo promedio para detectar un incidente de seguridad."
    },
    {
        module: 2,
        question: "Cual Control CIS es especificamente para Gestion de Respuesta a Incidentes?",
        options: [
            "Control 10",
            "Control 15",
            "Control 17",
            "Control 18"
        ],
        correct: 2,
        explanation: "El Control CIS 17 es para Gestion de Respuesta a Incidentes."
    },
    {
        module: 2,
        question: "En que fase se crean los playbooks y runbooks?",
        options: [
            "Deteccion y Analisis",
            "Contencion",
            "Preparacion",
            "Post-Incidente"
        ],
        correct: 2,
        explanation: "Los playbooks y runbooks se crean durante la fase de Preparacion."
    },
    {
        module: 2,
        question: "Que se realiza durante la fase de Actividad Post-Incidente?",
        options: [
            "Deteccion de nuevos incidentes",
            "Lecciones Aprendidas y creacion de Informe de Incidente",
            "Contencion de malware",
            "Restauracion de backups"
        ],
        correct: 1,
        explanation: "Post-Incidente incluye reuniones de Lecciones Aprendidas y crear el Informe de Incidente final."
    },
    {
        module: 2,
        question: "Segun el requisito PCI DSS 12.10.2, con que frecuencia se debe revisar y probar el plan de respuesta a incidentes?",
        options: [
            "Mensualmente",
            "Trimestralmente",
            "Al menos una vez al ano",
            "Cada dos anos"
        ],
        correct: 2,
        explanation: "PCI DSS 12.10.2 requiere revisar y probar el plan de respuesta a incidentes al menos una vez al ano."
    },
    {
        module: 3,
        question: "Cual es la regla de oro del Primer Respondedor?",
        options: [
            "Apagar el sistema inmediatamente",
            "No causar dano - No causar mas dano",
            "Llamar a la policia primero",
            "Formatear el disco duro"
        ],
        correct: 1,
        explanation: "La regla de oro es 'No causar dano' - preservar la integridad de la evidencia y no causar mas dano."
    },
    {
        module: 3,
        question: "Segun el orden de volatilidad, que se debe recolectar PRIMERO?",
        options: [
            "Disco duro",
            "Memoria RAM",
            "Logs remotos",
            "Registros de CPU y cache"
        ],
        correct: 3,
        explanation: "Los registros de CPU y cache son los mas volatiles (se pierden en microsegundos), seguidos de la RAM."
    },
    {
        module: 3,
        question: "Por que NO se debe apagar inmediatamente un sistema comprometido?",
        options: [
            "Es mas facil analizarlo encendido",
            "Se perderia la evidencia volatil en RAM",
            "El atacante podria notarlo",
            "No hay razon para no apagarlo"
        ],
        correct: 1,
        explanation: "Apagar pierde toda la evidencia volatil: RAM, procesos en ejecucion, conexiones de red activas."
    },
    {
        module: 3,
        question: "Que es la Cadena de Custodia?",
        options: [
            "Una cadena de mando militar",
            "Un registro que documenta quien tuvo acceso a la evidencia",
            "Una tecnica de cifrado",
            "Un tipo de malware"
        ],
        correct: 1,
        explanation: "La Cadena de Custodia documenta quien, que, cuando, donde y cada transferencia de evidencia."
    },
    {
        module: 3,
        question: "Que herramienta se usa para analisis forense de memoria RAM?",
        options: [
            "Wireshark",
            "Volatility",
            "Nmap",
            "Burp Suite"
        ],
        correct: 1,
        explanation: "Volatility es la herramienta estandar para analisis forense de RAM."
    },
    {
        module: 3,
        question: "Que es una copia bit-stream?",
        options: [
            "Una copia de archivos seleccionados",
            "Una copia forense exacta bit a bit del medio de almacenamiento",
            "Una copia comprimida",
            "Un backup en la nube"
        ],
        correct: 1,
        explanation: "Una copia bit-stream es una copia forense exacta bit a bit incluyendo espacio no asignado y archivos eliminados."
    },
    {
        module: 4,
        question: "Que tipo de malware se propaga automaticamente sin intervencion del usuario?",
        options: [
            "Virus",
            "Troyano",
            "Gusano",
            "Spyware"
        ],
        correct: 2,
        explanation: "Los gusanos se propagan automaticamente a traves de la red sin requerir accion del usuario."
    },
    {
        module: 4,
        question: "Que es malware sin archivos (fileless)?",
        options: [
            "Malware muy pequeno",
            "Malware que opera en memoria sin escribir archivos al disco",
            "Malware sin codigo",
            "Malware que borra sus archivos"
        ],
        correct: 1,
        explanation: "El malware fileless opera completamente en memoria usando herramientas legitimas del sistema."
    },
    {
        module: 4,
        question: "Cual es la primera accion al confirmar una infeccion de malware?",
        options: [
            "Formatear el sistema",
            "Aislar el sistema de la red",
            "Llamar a la policia",
            "Actualizar el antivirus"
        ],
        correct: 1,
        explanation: "La primera accion de contencion es aislar el sistema para prevenir propagacion y comunicacion C2."
    },
    {
        module: 4,
        question: "Que herramienta se usa para crear reglas de deteccion de malware?",
        options: [
            "YARA",
            "Python",
            "Excel",
            "Notepad"
        ],
        correct: 0,
        explanation: "YARA es la herramienta estandar para crear reglas de deteccion de malware basadas en patrones."
    },
    {
        module: 4,
        question: "Que es un servidor C2?",
        options: [
            "Servidor de backup",
            "Servidor de Comando y Control que controla malware",
            "Servidor de correo",
            "Servidor de Cloud Computing"
        ],
        correct: 1,
        explanation: "C2 (Comando y Control) es el servidor que los atacantes usan para controlar malware y recibir datos robados."
    },
    {
        module: 4,
        question: "El analisis dinamico de malware implica:",
        options: [
            "Leer el codigo sin ejecutar",
            "Ejecutar malware en un entorno sandbox controlado",
            "Enviar el malware a VirusTotal",
            "Eliminar el malware"
        ],
        correct: 1,
        explanation: "El analisis dinamico ejecuta malware en un sandbox controlado para observar su comportamiento real."
    },
    {
        module: 5,
        question: "Que tecnica de phishing se dirige especificamente a ejecutivos?",
        options: [
            "Spear phishing",
            "Whaling",
            "Vishing",
            "Smishing"
        ],
        correct: 1,
        explanation: "Whaling es phishing dirigido especificamente a ejecutivos de alto nivel (C-level)."
    },
    {
        module: 5,
        question: "Que protocolo verifica que un servidor de correo esta autorizado para enviar emails de un dominio?",
        options: [
            "DKIM",
            "SPF",
            "DMARC",
            "TLS"
        ],
        correct: 1,
        explanation: "SPF (Sender Policy Framework) verifica que servidores IP estan autorizados a enviar correo de un dominio."
    },
    {
        module: 5,
        question: "Que es BEC (Business Email Compromise)?",
        options: [
            "Un tipo de spam",
            "Fraude donde el atacante suplanta ejecutivos para solicitar transferencias",
            "Un protocolo de email",
            "Un filtro de correo"
        ],
        correct: 1,
        explanation: "BEC es un fraude sofisticado donde el atacante suplanta ejecutivos para realizar transferencias fraudulentas."
    },
    {
        module: 5,
        question: "En las cabeceras de email, como se lee la ruta del mensaje?",
        options: [
            "De arriba hacia abajo",
            "De abajo hacia arriba",
            "Alfabeticamente",
            "Por fecha"
        ],
        correct: 1,
        explanation: "Las cabeceras 'Received' se leen de abajo hacia arriba, donde la mas inferior es el origen."
    },
    {
        module: 5,
        question: "DMARC especifica:",
        options: [
            "Como cifrar emails",
            "Que hacer cuando SPF o DKIM fallan",
            "Como almacenar emails",
            "Cuanto tiempo retener emails"
        ],
        correct: 1,
        explanation: "DMARC define la politica de que hacer cuando la autenticacion SPF o DKIM falla (none, quarantine, reject)."
    },
    {
        module: 6,
        question: "Que tipo de ataque DDoS consume el ancho de banda de la victima?",
        options: [
            "Ataque de protocolo",
            "Ataque de capa de aplicacion",
            "Ataque volumetrico",
            "Ataque de reflexion"
        ],
        correct: 2,
        explanation: "Los ataques volumetricos buscan saturar el ancho de banda de la victima con grandes cantidades de trafico."
    },
    {
        module: 6,
        question: "Que es un ataque SYN flood?",
        options: [
            "Ataque enviando muchos paquetes UDP",
            "Ataque enviando SYN TCP sin completar el handshake",
            "Ataque modificando tablas ARP",
            "Ataque interceptando DNS"
        ],
        correct: 1,
        explanation: "SYN flood envia muchas solicitudes TCP SYN sin completar el handshake de tres vias."
    },
    {
        module: 6,
        question: "Que es beaconing en el contexto de malware?",
        options: [
            "Luz de advertencia",
            "Comunicacion periodica del malware con su servidor C2",
            "Tipo de cifrado",
            "Tecnica de backup"
        ],
        correct: 1,
        explanation: "Beaconing es la comunicacion periodica que el malware mantiene con su servidor C2."
    },
    {
        module: 6,
        question: "Cual es la diferencia entre IDS e IPS?",
        options: [
            "Son lo mismo",
            "IDS detecta y alerta; IPS ademas puede bloquear",
            "IPS es mas antiguo",
            "IDS bloquea; IPS solo detecta"
        ],
        correct: 1,
        explanation: "IDS (Deteccion de Intrusiones) detecta y alerta; IPS (Prevencion de Intrusiones) ademas puede bloquear."
    },
    {
        module: 6,
        question: "Que herramienta es estandar para analisis de paquetes de red?",
        options: [
            "Nmap",
            "Wireshark",
            "Metasploit",
            "Nessus"
        ],
        correct: 1,
        explanation: "Wireshark es el analizador de protocolos de red mas usado para captura y analisis de paquetes."
    },
    {
        module: 7,
        question: "Cual es la mejor defensa contra SQL Injection?",
        options: [
            "Firewall",
            "Prepared statements/Consultas parametrizadas",
            "Antivirus",
            "VPN"
        ],
        correct: 1,
        explanation: "Prepared statements (consultas parametrizadas) separan el codigo SQL de los datos, previniendo inyeccion."
    },
    {
        module: 7,
        question: "Que tipo de XSS almacena el payload en el servidor?",
        options: [
            "Reflected XSS",
            "Stored XSS",
            "DOM-based XSS",
            "Blind XSS"
        ],
        correct: 1,
        explanation: "Stored (Persistente) XSS almacena el script malicioso en el servidor y afecta a todos los usuarios."
    },
    {
        module: 7,
        question: "Que es SSRF?",
        options: [
            "Un tipo de XSS",
            "Server-Side Request Forgery - hacer que el servidor realice requests no autorizados",
            "Un protocolo seguro",
            "Un tipo de certificado"
        ],
        correct: 1,
        explanation: "SSRF engana al servidor para que realice requests a recursos internos o externos no autorizados."
    },
    {
        module: 7,
        question: "Que previene los ataques CSRF?",
        options: [
            "Antivirus",
            "Tokens CSRF y cookies SameSite",
            "Firewall de red",
            "Cambiar contrasenas"
        ],
        correct: 1,
        explanation: "Los tokens CSRF y cookies con atributo SameSite previenen ataques CSRF."
    },
    {
        module: 7,
        question: "Que es un WAF?",
        options: [
            "Wide Area Firewall",
            "Web Application Firewall - filtra trafico HTTP malicioso",
            "Wireless Access Firewall",
            "Windows Application Firewall"
        ],
        correct: 1,
        explanation: "WAF (Web Application Firewall) filtra, monitorea y bloquea trafico HTTP malicioso."
    },
    {
        module: 8,
        question: "En el modelo de responsabilidad compartida, quien es responsable de la configuracion de security groups?",
        options: [
            "Solo el proveedor cloud",
            "Solo el cliente",
            "Ambos",
            "Ninguno"
        ],
        correct: 1,
        explanation: "El cliente es responsable de la configuracion de security groups (seguridad EN la nube)."
    },
    {
        module: 8,
        question: "Que servicio de AWS registra todas las llamadas a API?",
        options: [
            "CloudWatch",
            "CloudTrail",
            "GuardDuty",
            "Inspector"
        ],
        correct: 1,
        explanation: "AWS CloudTrail registra todas las llamadas a API de AWS para auditoria y analisis de seguridad."
    },
    {
        module: 8,
        question: "Que es Shadow IT?",
        options: [
            "Servidores de backup",
            "Servicios cloud no autorizados usados por empleados",
            "Computacion en la sombra",
            "Sistemas legacy"
        ],
        correct: 1,
        explanation: "Shadow IT se refiere a servicios cloud o aplicaciones usadas sin aprobacion de IT/Seguridad."
    },
    {
        module: 8,
        question: "Cual es la amenaza de seguridad cloud mas comun?",
        options: [
            "Hackers externos",
            "Misconfiguration (configuracion incorrecta)",
            "Desastres naturales",
            "Falla de hardware"
        ],
        correct: 1,
        explanation: "Misconfiguration es la amenaza mas comun en cloud (S3 buckets publicos, puertos abiertos, etc.)."
    },
    {
        module: 8,
        question: "Que es CASB?",
        options: [
            "Cloud Access Security Broker - intermediario de politicas de seguridad",
            "Central Authentication Security Base",
            "Cloud Application Security Browser",
            "Certified Access Security Badge"
        ],
        correct: 0,
        explanation: "CASB es un punto de aplicacion de politicas de seguridad entre usuarios y servicios cloud."
    },
    {
        module: 9,
        question: "Cual NO es un tipo de amenaza interna?",
        options: [
            "Insider malicioso",
            "Insider negligente",
            "Hacker externo",
            "Insider comprometido"
        ],
        correct: 2,
        explanation: "Hacker externo no es una amenaza interna. Los insiders son: malicioso, negligente y comprometido."
    },
    {
        module: 9,
        question: "Que tecnologia detecta comportamiento anomalo de usuarios?",
        options: [
            "Antivirus",
            "UEBA (User and Entity Behavior Analytics)",
            "Firewall",
            "VPN"
        ],
        correct: 1,
        explanation: "UEBA analiza el comportamiento normal de usuarios y detecta anomalias que pueden indicar amenazas."
    },
    {
        module: 9,
        question: "Cual es un indicador de posible amenaza interna?",
        options: [
            "Llegar temprano al trabajo",
            "Acceder a datos fuera del alcance de su rol",
            "Tomar vacaciones",
            "Completar proyectos a tiempo"
        ],
        correct: 1,
        explanation: "Acceder a datos que no corresponden a su rol es una senal de alerta de amenaza interna."
    },
    {
        module: 9,
        question: "Que principio divide tareas criticas entre multiples personas?",
        options: [
            "Minimo privilegio",
            "Separacion de funciones",
            "Necesidad de saber",
            "Defensa en profundidad"
        ],
        correct: 1,
        explanation: "Separacion de funciones divide las tareas criticas entre varias personas para prevenir fraude."
    },
    {
        module: 9,
        question: "Al investigar una amenaza interna, con quien se debe coordinar?",
        options: [
            "Solo con IT",
            "HR y Legal ademas de IT/Seguridad",
            "Solo con el CEO",
            "Con la prensa"
        ],
        correct: 1,
        explanation: "Las investigaciones de amenazas internas requieren coordinacion con HR y Legal para proteger derechos."
    },
    {
        module: 10,
        question: "Que es EDR?",
        options: [
            "Email Detection and Response",
            "Endpoint Detection and Response",
            "External Data Recovery",
            "Enterprise Data Replication"
        ],
        correct: 1,
        explanation: "EDR (Endpoint Detection and Response) detecta, investiga y responde a amenazas en endpoints."
    },
    {
        module: 10,
        question: "Que son LOLBins?",
        options: [
            "Tipo de malware",
            "Living off the Land Binaries - herramientas legitimas usadas por atacantes",
            "Archivos de log",
            "Bibliotecas de Linux"
        ],
        correct: 1,
        explanation: "LOLBins son binarios legitimos del sistema (PowerShell, cmd, wmic) que los atacantes usan para evadir deteccion."
    },
    {
        module: 10,
        question: "Que tecnica usa hashes NTLM robados para autenticarse?",
        options: [
            "Pass-the-Ticket",
            "Pass-the-Hash",
            "Golden Ticket",
            "Silver Ticket"
        ],
        correct: 1,
        explanation: "Pass-the-Hash usa hashes NTLM robados para autenticarse sin conocer la contrasena."
    },
    {
        module: 10,
        question: "Que herramienta es conocida por extraer credenciales de memoria Windows?",
        options: [
            "Nmap",
            "Wireshark",
            "Mimikatz",
            "Burp Suite"
        ],
        correct: 2,
        explanation: "Mimikatz es la herramienta mas conocida para extraer credenciales de memoria Windows."
    },
    {
        module: 10,
        question: "Que proporciona Sysmon en Windows?",
        options: [
            "Antivirus",
            "Logging detallado de actividad del sistema",
            "Firewall",
            "Backup automatico"
        ],
        correct: 1,
        explanation: "Sysmon proporciona logging detallado: creacion de procesos, conexiones de red, cambios de archivos."
    },
    {
        module: 10,
        question: "Cual es la primera accion de contencion para un endpoint comprometido?",
        options: [
            "Formatear",
            "Aislar de la red (contencion de red)",
            "Apagar",
            "Actualizar antivirus"
        ],
        correct: 1,
        explanation: "La primera accion es aislar el endpoint de la red para evitar propagacion, manteniendo el sistema encendido."
    },
    {
        module: 1,
        question: "Cual es la definicion de Disponibilidad en seguridad de la informacion?",
        options: [
            "Garantia de que la informacion es accesible solo para usuarios autorizados",
            "Garantia de que los sistemas estan accesibles cuando los usuarios autorizados lo requieren",
            "Prevencion de cambios no autorizados",
            "Autenticidad de comunicacion"
        ],
        correct: 1,
        explanation: "Disponibilidad es la garantia de que los sistemas responsables de entregar, almacenar y procesar informacion estan accesibles cuando se requieren."
    },
    {
        module: 1,
        question: "Que medidas pueden mantener la disponibilidad de datos?",
        options: [
            "Solo cifrado",
            "Sistemas redundantes, antivirus y prevencion de DDoS",
            "Solo contrasenas",
            "Cerraduras fisicas"
        ],
        correct: 1,
        explanation: "Las medidas de disponibilidad incluyen arrays de discos redundantes, maquinas en cluster, software antivirus y sistemas de prevencion de DDoS."
    },
    {
        module: 1,
        question: "Que son los Gray Hats?",
        options: [
            "Hackers puramente maliciosos",
            "Profesionales de seguridad",
            "Hackers que pueden violar leyes pero sin intencion maliciosa",
            "Agentes del gobierno"
        ],
        correct: 2,
        explanation: "Los gray hats trabajan tanto ofensiva como defensivamente, a veces violando leyes sin intencion maliciosa."
    },
    {
        module: 1,
        question: "Que es el Hacktivismo?",
        options: [
            "Hacking por beneficio economico",
            "Forma de activismo donde hackers irrumpen en sistemas como acto de protesta",
            "Pruebas de penetracion legales",
            "Hacking gubernamental"
        ],
        correct: 1,
        explanation: "Hacktivismo es una forma de activismo donde hackers irrumpen en sistemas gubernamentales o corporativos como acto de protesta."
    },
    {
        module: 1,
        question: "Que es un vector de ataque?",
        options: [
            "Un tipo de malware",
            "Medio a traves del cual un atacante obtiene acceso explotando vulnerabilidades",
            "Un mecanismo de defensa",
            "Un informe de incidente"
        ],
        correct: 1,
        explanation: "Un vector de ataque es un medio a traves del cual un atacante obtiene acceso a un sistema explotando vulnerabilidades identificadas."
    },
    {
        module: 1,
        question: "Que es Misconfiguration segun el temario?",
        options: [
            "Un tipo de malware",
            "La vulnerabilidad mas comun causada principalmente por error humano",
            "Una tecnica de ataque",
            "Un control de seguridad"
        ],
        correct: 1,
        explanation: "Misconfiguration es la vulnerabilidad mas comun y es causada principalmente por error humano."
    },
    {
        module: 2,
        question: "Que significa MTTR?",
        options: [
            "Tiempo Maximo para Responder",
            "Tiempo Medio para Responder/Recuperar",
            "Tiempo Minimo para Reportar",
            "Tiempo Medio para Restaurar"
        ],
        correct: 1,
        explanation: "MTTR = Tiempo Medio para Responder/Recuperar - tiempo promedio para responder y recuperarse de un incidente."
    },
    {
        module: 2,
        question: "Cual es el proposito de los ejercicios de mesa (tabletop)?",
        options: [
            "Reemplazar la respuesta real a incidentes",
            "Simular escenarios de incidentes para probar planes de respuesta",
            "Documentar incidentes",
            "Entrenar nuevos empleados en TI basica"
        ],
        correct: 1,
        explanation: "Los ejercicios de mesa simulan escenarios de incidentes para probar y mejorar planes de respuesta sin impacto real."
    },
    {
        module: 2,
        question: "Segun NERC 1307, por cuanto tiempo se deben retener los registros de incidentes?",
        options: [
            "Un ano",
            "Dos anos",
            "Tres anos calendario",
            "Cinco anos"
        ],
        correct: 2,
        explanation: "NERC 1307 requiere retener registros de incidentes y incidentes de ciberseguridad por tres anos calendario."
    },
    {
        module: 2,
        question: "Que es ISO/IEC 27035?",
        options: [
            "Estandar general de gobierno de TI",
            "Estandar para Gestion de Incidentes de Seguridad de la Informacion",
            "Estandar de cifrado",
            "Estandar de seguridad de red"
        ],
        correct: 1,
        explanation: "ISO/IEC 27035 es un estandar para Gestion de Incidentes de Seguridad de la Informacion que define recomendaciones y mejores practicas."
    },
    {
        module: 2,
        question: "Que es ISO/IEC 27037?",
        options: [
            "Estandar de seguridad en la nube",
            "Estandar para identificacion, recoleccion, adquisicion y preservacion de evidencia digital",
            "Estandar de gestion de incidentes",
            "Estandar de gestion de riesgos"
        ],
        correct: 1,
        explanation: "ISO/IEC 27037 proporciona guias para manejar evidencia digital manteniendo integridad aceptable por tribunales."
    },
    {
        module: 3,
        question: "Que debe hacer si una computadora esta APAGADA en la escena del crimen?",
        options: [
            "Encenderla para verificar contenidos",
            "No encenderla",
            "Remover el disco duro inmediatamente",
            "Llamar al fabricante"
        ],
        correct: 1,
        explanation: "Si una computadora esta APAGADA, no la encienda - esto podria alterar evidencia o disparar procesos destructivos."
    },
    {
        module: 3,
        question: "Que debe hacer si una computadora esta ENCENDIDA en la escena del crimen?",
        options: [
            "Apagarla inmediatamente",
            "Tomar foto de la pantalla y documentar",
            "Desenchufarla",
            "Empezar a usarla para investigar"
        ],
        correct: 1,
        explanation: "Si la computadora esta ENCENDIDA, tome foto de la pantalla del monitor y documente lo que observa."
    },
    {
        module: 3,
        question: "Que dispositivos deben considerar los primeros respondedores como fuentes de evidencia ademas de computadoras?",
        options: [
            "Solo discos duros",
            "Grabadoras de audio/video, camaras, GPS, tarjetas de acceso",
            "Solo telefonos moviles",
            "Solo memorias USB"
        ],
        correct: 1,
        explanation: "Las fuentes de evidencia incluyen grabadoras de audio/video, camaras, camaras de vigilancia, tarjetas de acceso y dispositivos GPS."
    },
    {
        module: 3,
        question: "Cual es el orden correcto de volatilidad de MAS a MENOS volatil?",
        options: [
            "Disco duro, RAM, cache de CPU",
            "Registros/cache de CPU, RAM, Disco duro",
            "RAM, cache de CPU, Disco duro",
            "Logs de red, RAM, cache de CPU"
        ],
        correct: 1,
        explanation: "Orden: Registros/cache de CPU (mas volatil), RAM, Disco duro (menos volatil entre estos)."
    },
    {
        module: 4,
        question: "Cual es la diferencia entre un virus y un gusano?",
        options: [
            "No hay diferencia",
            "Los virus necesitan archivos host; los gusanos se propagan independientemente",
            "Los gusanos necesitan archivos host; los virus se propagan independientemente",
            "Los virus son mas peligrosos"
        ],
        correct: 1,
        explanation: "Los virus requieren archivos host para propagarse; los gusanos pueden propagarse independientemente a traves de redes."
    },
    {
        module: 4,
        question: "Que es un Troyano?",
        options: [
            "Malware auto-replicante",
            "Malware disfrazado de software legitimo",
            "Ataque de red",
            "Herramienta de cifrado"
        ],
        correct: 1,
        explanation: "Un Troyano es malware disfrazado de software legitimo que realiza acciones maliciosas cuando se ejecuta."
    },
    {
        module: 4,
        question: "Que es ransomware?",
        options: [
            "Software para backups",
            "Malware que cifra archivos y exige pago para descifrarlos",
            "Herramienta de administracion remota",
            "Software de firewall"
        ],
        correct: 1,
        explanation: "Ransomware cifra los archivos de la victima y exige un rescate para proporcionar la clave de descifrado."
    },
    {
        module: 4,
        question: "Que es el analisis estatico de malware?",
        options: [
            "Ejecutar malware en un sandbox",
            "Analizar codigo del malware sin ejecutarlo",
            "Enviar a VirusTotal",
            "Eliminar el malware"
        ],
        correct: 1,
        explanation: "El analisis estatico examina el codigo, estructura y caracteristicas del malware sin ejecutarlo."
    },
    {
        module: 4,
        question: "Que puertos TCP deben monitorearse para ransomware segun el temario?",
        options: [
            "Solo HTTP (80)",
            "Puertos RDP y SMB",
            "Solo FTP (21)",
            "Solo DNS (53)"
        ],
        correct: 1,
        explanation: "Monitorear puertos TCP como RDP (Remote Desktop Protocol) y SMB que el ransomware usa para infectar sistemas."
    },
    {
        module: 5,
        question: "Que es Vishing?",
        options: [
            "Phishing por email",
            "Phishing por voz/telefono",
            "Phishing por SMS",
            "Phishing por redes sociales"
        ],
        correct: 1,
        explanation: "Vishing es phishing por voz - ataques de ingenieria social realizados via llamadas telefonicas."
    },
    {
        module: 5,
        question: "Que es Smishing?",
        options: [
            "Phishing por email",
            "Phishing por voz",
            "Phishing por SMS/mensajes de texto",
            "Phishing por redes sociales"
        ],
        correct: 2,
        explanation: "Smishing es phishing por SMS - ataques de phishing realizados via mensajes de texto."
    },
    {
        module: 5,
        question: "Que es Spear Phishing?",
        options: [
            "Phishing masivo por email",
            "Phishing dirigido a individuos u organizaciones especificas",
            "Phishing por telefono",
            "Phishing por SMS"
        ],
        correct: 1,
        explanation: "Spear phishing es phishing altamente dirigido a individuos u organizaciones especificas."
    },
    {
        module: 5,
        question: "Que verifica DKIM?",
        options: [
            "Direccion IP del remitente",
            "Que el contenido del email no ha sido alterado usando firmas digitales",
            "Identidad del destinatario",
            "Cifrado del email"
        ],
        correct: 1,
        explanation: "DKIM (DomainKeys Identified Mail) usa firmas digitales para verificar que el contenido del email no ha sido alterado."
    },
    {
        module: 6,
        question: "Cuales son los tres tipos de ataques DDoS?",
        options: [
            "Interno, Externo, Hibrido",
            "Volumetrico, Protocolo, Capa de Aplicacion",
            "Rapido, Lento, Medio",
            "Simple, Complejo, Avanzado"
        ],
        correct: 1,
        explanation: "Tres tipos: Volumetrico (ancho de banda), Protocolo (TCP/UDP), Capa de Aplicacion (HTTP)."
    },
    {
        module: 6,
        question: "Que es ARP Spoofing?",
        options: [
            "Ataque DNS",
            "Ataque que asocia la MAC del atacante con la IP de otro host para interceptar trafico",
            "Ataque de email",
            "Ataque web"
        ],
        correct: 1,
        explanation: "ARP Spoofing asocia la direccion MAC del atacante con la IP de otro host para interceptar trafico de red."
    },
    {
        module: 6,
        question: "Que es NetFlow?",
        options: [
            "Software antivirus",
            "Protocolo de Cisco para recolectar informacion de flujos de trafico IP",
            "Firewall",
            "Protocolo VPN"
        ],
        correct: 1,
        explanation: "NetFlow es un protocolo de Cisco para recolectar informacion sobre flujos de trafico IP en la red."
    },
    {
        module: 7,
        question: "Que es el OWASP Top 10?",
        options: [
            "Lista de los mejores firewalls",
            "Documento estandar de concientizacion sobre riesgos de seguridad de aplicaciones web",
            "Lista de herramientas antivirus",
            "Protocolos de red"
        ],
        correct: 1,
        explanation: "OWASP Top 10 es un documento estandar de concientizacion que representa los riesgos de seguridad de aplicaciones web mas criticos."
    },
    {
        module: 7,
        question: "Que es Reflected XSS?",
        options: [
            "XSS almacenado en servidor",
            "XSS donde el payload se refleja del servidor web en la respuesta",
            "XSS solo en DOM",
            "XSS via email"
        ],
        correct: 1,
        explanation: "Reflected XSS ocurre cuando el script malicioso se refleja del servidor web en la respuesta inmediata."
    },
    {
        module: 7,
        question: "Que es DOM-based XSS?",
        options: [
            "XSS almacenado en servidor",
            "XSS reflejado del servidor",
            "XSS donde la vulnerabilidad existe en scripts del lado cliente que modifican el DOM",
            "XSS via base de datos"
        ],
        correct: 2,
        explanation: "DOM-based XSS ocurre cuando la vulnerabilidad existe en scripts del lado cliente que modifican el DOM de la pagina."
    },
    {
        module: 7,
        question: "Que es un ataque de Directory Traversal?",
        options: [
            "Variante de SQL Injection",
            "Ataque usando ../ para acceder a archivos fuera del directorio web permitido",
            "Variante de XSS",
            "Ataque DDoS"
        ],
        correct: 1,
        explanation: "Directory Traversal usa secuencias ../ para acceder a archivos fuera del directorio web permitido."
    },
    {
        module: 8,
        question: "Cuales son los tres modelos de servicio en la nube?",
        options: [
            "Publica, Privada, Hibrida",
            "IaaS, PaaS, SaaS",
            "Pequena, Mediana, Grande",
            "Gratis, Basico, Premium"
        ],
        correct: 1,
        explanation: "Tres modelos de servicio: IaaS (Infraestructura), PaaS (Plataforma), SaaS (Software) como Servicio."
    },
    {
        module: 8,
        question: "Que es CSPM?",
        options: [
            "Cloud Security Protocol Manager",
            "Cloud Security Posture Management - identifica misconfiguraciones",
            "Cloud Service Provider Manager",
            "Cloud System Performance Monitor"
        ],
        correct: 1,
        explanation: "CSPM (Cloud Security Posture Management) identifica misconfiguraciones en entornos de nube."
    },
    {
        module: 8,
        question: "En AWS, cual es la diferencia entre CloudWatch y CloudTrail?",
        options: [
            "Son lo mismo",
            "CloudWatch monitorea rendimiento; CloudTrail registra llamadas a API",
            "CloudTrail monitorea rendimiento; CloudWatch registra llamadas a API",
            "Ambos registran llamadas a API"
        ],
        correct: 1,
        explanation: "CloudWatch monitorea metricas de rendimiento; CloudTrail registra todas las llamadas a API de AWS para auditoria."
    },
    {
        module: 9,
        question: "Que es un Insider Comprometido?",
        options: [
            "Empleado que intencionalmente causa dano",
            "Empleado cuyas credenciales han sido robadas por un atacante externo",
            "Empleado descuidado",
            "Ex empleado"
        ],
        correct: 1,
        explanation: "Un Insider Comprometido es alguien cuyas credenciales han sido robadas y usadas por atacantes externos."
    },
    {
        module: 9,
        question: "Que es DLP?",
        options: [
            "Digital Log Processing",
            "Data Loss Prevention - tecnologia que previene fuga de datos",
            "Distributed Load Protocol",
            "Dynamic Link Protection"
        ],
        correct: 1,
        explanation: "DLP (Data Loss Prevention) es tecnologia que previene que datos sensibles sean filtrados."
    },
    {
        module: 9,
        question: "Que es PAM?",
        options: [
            "Protocol Access Manager",
            "Privileged Access Management - controla y audita acceso privilegiado",
            "Password Authentication Module",
            "Private Access Method"
        ],
        correct: 1,
        explanation: "PAM (Privileged Access Management) es un sistema para controlar y auditar acceso privilegiado."
    },
    {
        module: 10,
        question: "Que es XDR?",
        options: [
            "External Data Recovery",
            "Extended Detection and Response - integra datos de multiples fuentes",
            "Extra Drive Replication",
            "Exchange Data Repository"
        ],
        correct: 1,
        explanation: "XDR (Extended Detection and Response) extiende EDR integrando datos de red, email, nube, etc."
    },
    {
        module: 10,
        question: "Que es un ataque Pass-the-Ticket?",
        options: [
            "Usar hashes NTLM robados",
            "Usar tickets Kerberos robados para autenticarse",
            "Ataque de phishing",
            "Ataque DDoS"
        ],
        correct: 1,
        explanation: "Pass-the-Ticket usa tickets Kerberos robados para autenticarse sin necesitar la contrasena."
    },
    {
        module: 10,
        question: "Que artefactos de Windows son utiles en investigaciones forenses?",
        options: [
            "Solo logs de eventos",
            "Prefetch, MFT, Registry hives, Event logs, NTUSER.DAT",
            "Solo registro",
            "Solo historial del navegador"
        ],
        correct: 1,
        explanation: "Artefactos utiles: Prefetch, MFT, Registry hives, Event logs, NTUSER.DAT, ShimCache."
    },
    {
        module: 10,
        question: "Que es KAPE?",
        options: [
            "Herramienta antivirus",
            "Kroll Artifact Parser and Extractor - recoleccion rapida de artefactos forenses",
            "Kernel Access Protection Engine",
            "Key Authentication Protocol Engine"
        ],
        correct: 1,
        explanation: "KAPE (Kroll Artifact Parser and Extractor) es una herramienta para recoleccion rapida de artefactos forenses."
    },
    {
        module: 10,
        question: "Que es un ataque Golden Ticket?",
        options: [
            "Variante de Pass-the-Hash",
            "TGT de Kerberos falsificado que otorga acceso a cualquier recurso del dominio",
            "Ataque de phishing",
            "Variante de ransomware"
        ],
        correct: 1,
        explanation: "Golden Ticket es un TGT de Kerberos falsificado que otorga acceso a cualquier recurso del dominio."
    },
    {
        module: 4,
        question: "Cual es la estrategia de backup 3-2-1 mencionada para recuperacion de ransomware?",
        options: [
            "3 backups, 2 ubicaciones, 1 nube",
            "3 copias, 2 tipos de medios diferentes, 1 fuera del sitio",
            "3 dias, 2 semanas, 1 mes retencion",
            "3 servidores, 2 bases de datos, 1 archivo"
        ],
        correct: 1,
        explanation: "La estrategia de backup 3-2-1: 3 copias de datos, en 2 tipos de medios diferentes, con 1 copia fuera del sitio."
    },
    {
        module: 4,
        question: "Que es un malware sin archivos (fileless)?",
        options: [
            "Malware almacenado en USB",
            "Malware que opera en memoria sin escribir a disco",
            "Malware en archivos adjuntos de email",
            "Malware que se elimina a si mismo"
        ],
        correct: 1,
        explanation: "El malware sin archivos opera completamente en memoria, haciendolo mas dificil de detectar con escaneo tradicional basado en archivos."
    },
    {
        module: 4,
        question: "Que es el analisis dinamico de malware?",
        options: [
            "Analizar codigo sin ejecutarlo",
            "Ejecutar malware en entorno aislado para observar comportamiento",
            "Verificar firmas de archivos",
            "Leer documentacion del malware"
        ],
        correct: 1,
        explanation: "El analisis dinamico involucra ejecutar el malware en un entorno controlado (sandbox) para observar su comportamiento."
    },
    {
        module: 4,
        question: "Que es un rootkit?",
        options: [
            "Software antivirus",
            "Malware disenado para ocultar su presencia y mantener acceso privilegiado",
            "Protocolo de red",
            "Herramienta de backup"
        ],
        correct: 1,
        explanation: "Un rootkit es malware disenado para ocultar su presencia y proporcionar acceso privilegiado continuo a un sistema."
    },
    {
        module: 4,
        question: "Que es un keylogger?",
        options: [
            "Gestor de contrasenas",
            "Malware que registra pulsaciones de teclas para capturar credenciales",
            "Herramienta de cifrado",
            "Software de firewall"
        ],
        correct: 1,
        explanation: "Un keylogger registra pulsaciones de teclas para capturar informacion sensible como contrasenas y numeros de tarjetas de credito."
    },
    {
        module: 4,
        question: "Que es spyware?",
        options: [
            "Herramienta de monitoreo de seguridad",
            "Malware que monitorea secretamente la actividad del usuario y recolecta informacion",
            "Analizador de red",
            "Componente antivirus"
        ],
        correct: 1,
        explanation: "El spyware monitorea secretamente la actividad del usuario y recolecta informacion personal sin consentimiento."
    },
    {
        module: 4,
        question: "Que es adware?",
        options: [
            "Plataforma de publicidad",
            "Software que muestra anuncios no deseados, frecuentemente incluido con software gratuito",
            "Cliente de email",
            "Navegador web"
        ],
        correct: 1,
        explanation: "El adware muestra anuncios no deseados y frecuentemente viene incluido con descargas de software gratuito."
    },
    {
        module: 4,
        question: "Que es una botnet?",
        options: [
            "Bot de motor de busqueda",
            "Red de computadoras comprometidas controladas remotamente por un atacante",
            "Herramienta de pruebas automatizadas",
            "Aplicacion de chat"
        ],
        correct: 1,
        explanation: "Una botnet es una red de computadoras infectadas (bots/zombies) controladas por un atacante para propositos maliciosos como DDoS."
    },
    {
        module: 4,
        question: "Que es C2 (Command and Control) en el contexto de malware?",
        options: [
            "Lenguaje de programacion",
            "Servidor/infraestructura usada por atacantes para comunicarse con sistemas comprometidos",
            "Sistema de backup",
            "Protocolo antivirus"
        ],
        correct: 1,
        explanation: "C2 (Command and Control) es la infraestructura que los atacantes usan para enviar comandos y recibir datos de sistemas comprometidos."
    },
    {
        module: 4,
        question: "Cual deberia ser el primer paso cuando se detecta ransomware?",
        options: [
            "Pagar el rescate inmediatamente",
            "Desconectar sistemas infectados de la red para prevenir propagacion",
            "Formatear todos los discos",
            "Contactar al atacante"
        ],
        correct: 1,
        explanation: "El primer paso es desconectar sistemas infectados de la red para prevenir que el ransomware se propague a otros sistemas."
    },
    {
        module: 5,
        question: "Que es Whaling?",
        options: [
            "Phishing masivo por email",
            "Ataque de phishing dirigido contra ejecutivos de alto perfil",
            "Phishing por SMS",
            "Phishing por voz"
        ],
        correct: 1,
        explanation: "Whaling es spear phishing que se dirige especificamente a individuos de alto perfil como ejecutivos, CEOs o CFOs."
    },
    {
        module: 5,
        question: "Que es SPF (Sender Policy Framework)?",
        options: [
            "Protocolo de cifrado",
            "Registro DNS que especifica que servidores pueden enviar email para un dominio",
            "Software antivirus",
            "Politica de contrasenas"
        ],
        correct: 1,
        explanation: "SPF es un registro TXT de DNS que especifica que servidores de correo estan autorizados para enviar email en nombre de tu dominio."
    },
    {
        module: 5,
        question: "Que es DMARC?",
        options: [
            "Escaner de malware",
            "Protocolo de autenticacion de email que se construye sobre SPF y DKIM",
            "Firewall de red",
            "Protocolo VPN"
        ],
        correct: 1,
        explanation: "DMARC (Domain-based Message Authentication, Reporting and Conformance) se construye sobre SPF y DKIM para proteger contra spoofing de email."
    },
    {
        module: 5,
        question: "Que es BEC (Business Email Compromise)?",
        options: [
            "Sistema de backup de email",
            "Estafa que apunta a empresas usando cuentas de email ejecutivas comprometidas o falsificadas",
            "Cifrado de email",
            "Filtro de spam"
        ],
        correct: 1,
        explanation: "BEC es una estafa donde atacantes se hacen pasar por ejecutivos via email para engañar a empleados a transferir dinero o datos."
    },
    {
        module: 5,
        question: "Que encabezado de email debe analizarse para rastrear la ruta del email?",
        options: [
            "Encabezado Subject",
            "Encabezados Received (leer de abajo hacia arriba)",
            "Solo encabezado From",
            "Encabezado Date"
        ],
        correct: 1,
        explanation: "Los encabezados Received muestran la ruta que tomo el email; leer de abajo (origen) hacia arriba (destino) para rastrear la ruta."
    },
    {
        module: 5,
        question: "Que es Pharming?",
        options: [
            "Phishing por email",
            "Ataque que redirige trafico de sitios web a sitios fraudulentos via envenenamiento DNS",
            "Ataque por SMS",
            "Ataque por llamada de voz"
        ],
        correct: 1,
        explanation: "Pharming redirige usuarios a sitios web fraudulentos comprometiendo servidores DNS o modificando archivos hosts."
    },
    {
        module: 5,
        question: "Que es clone phishing?",
        options: [
            "Phishing masivo aleatorio",
            "Ataque usando copia de email legitimo con enlaces/adjuntos maliciosos",
            "Phishing por redes sociales",
            "Phishing por codigo QR"
        ],
        correct: 1,
        explanation: "Clone phishing crea una copia casi identica de un email legitimo pero reemplaza enlaces o adjuntos con maliciosos."
    },
    {
        module: 8,
        question: "Cuales son los cuatro modelos de despliegue en la nube?",
        options: [
            "Pequena, Mediana, Grande, Empresa",
            "Publica, Privada, Hibrida, Comunitaria",
            "Gratis, Basico, Premium, Empresa",
            "Local, Regional, Nacional, Global"
        ],
        correct: 1,
        explanation: "Cuatro modelos de despliegue: Publica (compartida), Privada (dedicada), Hibrida (mezcla), Comunitaria (compartida entre organizaciones)."
    },
    {
        module: 8,
        question: "Que es CASB?",
        options: [
            "Servicio de backup en la nube",
            "Cloud Access Security Broker - aplica politicas de seguridad entre usuarios y servicios en la nube",
            "Antivirus en la nube",
            "Bucket de almacenamiento en la nube"
        ],
        correct: 1,
        explanation: "CASB se situa entre usuarios y servicios en la nube para aplicar politicas de seguridad, proporcionar visibilidad y asegurar cumplimiento."
    },
    {
        module: 8,
        question: "En Azure, que es equivalente a AWS CloudTrail?",
        options: [
            "Azure Monitor",
            "Azure Activity Log",
            "Azure Firewall",
            "Azure Sentinel"
        ],
        correct: 1,
        explanation: "Azure Activity Log proporciona logs de operaciones realizadas en recursos, similar a AWS CloudTrail."
    },
    {
        module: 8,
        question: "Que es el modelo de responsabilidad compartida en la nube?",
        options: [
            "El proveedor de nube maneja todo",
            "El cliente maneja todo",
            "Las responsabilidades de seguridad se dividen entre proveedor de nube y cliente",
            "Un tercero maneja la seguridad"
        ],
        correct: 2,
        explanation: "Modelo de responsabilidad compartida: El proveedor de nube asegura la infraestructura; el cliente asegura datos, acceso y configuraciones."
    },
    {
        module: 8,
        question: "Que es AWS GuardDuty?",
        options: [
            "Servicio de firewall",
            "Servicio de deteccion de amenazas que monitorea actividad maliciosa",
            "Servicio de backup",
            "Balanceador de carga"
        ],
        correct: 1,
        explanation: "AWS GuardDuty es un servicio de deteccion de amenazas que monitorea continuamente actividad maliciosa y comportamiento no autorizado."
    },
    {
        module: 8,
        question: "Que es una VPC en computacion en la nube?",
        options: [
            "Virtual Private Cloud - red aislada dentro de la nube",
            "Centro de Proteccion de Virus",
            "Nube de Procesamiento de Video",
            "Configuracion de Protocolo Virtual"
        ],
        correct: 0,
        explanation: "VPC (Virtual Private Cloud) es una seccion de red logicamente aislada dentro de la infraestructura del proveedor de nube."
    },
    {
        module: 8,
        question: "De que es causa comun la mala configuracion de buckets S3?",
        options: [
            "Mejor rendimiento",
            "Brechas de datos en la nube por exposicion publica",
            "Reduccion de costos",
            "Mejor disponibilidad"
        ],
        correct: 1,
        explanation: "Buckets S3 mal configurados con acceso publico son una causa principal de brechas de datos en la nube y exposicion de datos."
    },
    {
        module: 8,
        question: "Que es CWPP?",
        options: [
            "Cloud Web Processing Platform",
            "Cloud Workload Protection Platform - protege cargas de trabajo de servidores",
            "Cloud Wireless Protection Protocol",
            "Cloud Web Proxy Protocol"
        ],
        correct: 1,
        explanation: "CWPP (Cloud Workload Protection Platform) proporciona seguridad para cargas de trabajo de servidores en entornos de nube."
    },
    {
        module: 4,
        question: "Que herramienta se menciona para anti-malware que proporciona proteccion contra ransomware?",
        options: [
            "Notepad",
            "Malwarebytes",
            "Calculadora",
            "WordPad"
        ],
        correct: 1,
        explanation: "Malwarebytes proporciona proteccion en tiempo real incluyendo web, malware, ransomware y proteccion contra exploits."
    },
    {
        module: 4,
        question: "Que es un PUP en terminologia de malware?",
        options: [
            "Powerful Upload Protocol",
            "Programa Potencialmente No Deseado",
            "Perfil de Usuario Protegido",
            "Contrasena de Usuario Privada"
        ],
        correct: 1,
        explanation: "PUP (Programa Potencialmente No Deseado) es software que puede ser no deseado a pesar del consentimiento del usuario, frecuentemente incluido con otro software."
    },
    {
        module: 5,
        question: "Para que se usa el encabezado X-Originating-IP?",
        options: [
            "Cifrado de email",
            "Muestra la direccion IP del computador del remitente",
            "Filtrado de spam",
            "Enrutamiento de email"
        ],
        correct: 1,
        explanation: "El encabezado X-Originating-IP revela la direccion IP del computador que envio el email, util en analisis forense."
    },
    {
        module: 8,
        question: "Que es la seguridad de contenedores en entornos de nube?",
        options: [
            "Seguridad de almacenamiento fisico",
            "Proteger aplicaciones en contenedores (Docker, Kubernetes) de vulnerabilidades",
            "Rastreo de contenedores de envio",
            "Seguridad de compresion de archivos"
        ],
        correct: 1,
        explanation: "La seguridad de contenedores involucra proteger aplicaciones en contenedores y sus plataformas de orquestacion de vulnerabilidades."
    },
    {
        module: 4,
        question: "Que significa IOC en respuesta a incidentes?",
        options: [
            "Centro de Operaciones Internas",
            "Indicador de Compromiso",
            "Comite de Operaciones de Internet",
            "Consejo de Supervision de Incidentes"
        ],
        correct: 1,
        explanation: "IOC (Indicador de Compromiso) es evidencia forense que sugiere una brecha de seguridad, como hashes de archivos o direcciones IP."
    },

    // =============================================
    // PREGUNTAS REALES DE EXAMEN (similares.txt)
    // =============================================

    // -- MÓDULO 1: Fundamentos --
    {
        module: 1,
        question: "¿Cuál de los siguientes términos se define como 'una medida de la posible incapacidad de alcanzar un objetivo dentro de limitaciones de seguridad, costo y técnicas que afecta adversamente las operaciones e ingresos de la organización'?",
        options: ["Riesgo", "Vulnerabilidad", "Amenaza", "Respuesta a Incidentes"],
        correct: 0,
        explanation: "El Riesgo se define como la medida de la posible incapacidad de alcanzar un objetivo, considerando limitaciones de seguridad, costo y técnicas que afectan las operaciones."
    },
    {
        module: 1,
        question: "En un ataque DDoS, los atacantes primero infectan múltiples sistemas que se conocen como:",
        options: ["Troyanos", "Zombies", "Spyware", "Gusanos"],
        correct: 1,
        explanation: "En un ataque DDoS, los atacantes infectan múltiples sistemas que se convierten en 'zombies' o 'bots', controlados remotamente para atacar el objetivo."
    },
    {
        module: 1,
        question: "¿Cuál de los siguientes NO constituye un objetivo de la respuesta a incidentes?",
        options: [
            "Tratar con el departamento de RRHH y comportamientos conflictivos de empleados",
            "Usar información de incidentes para prepararse para futuros incidentes",
            "Ayudar al personal a recuperarse rápidamente minimizando pérdidas y perturbaciones",
            "Tratar adecuadamente los asuntos legales durante los incidentes"
        ],
        correct: 0,
        explanation: "La respuesta a incidentes NO gestiona conflictos de RRHH. Sus objetivos son: proteger sistemas, recuperación rápida, aprendizaje para futuros incidentes y gestión legal."
    },
    {
        module: 1,
        question: "Una organización enfrenta un incidente donde un empleado descontento pasó información de control de acceso a un competidor. Debe manejarse en pocas horas para mantener la continuidad del negocio. ¿Cómo se categoriza?",
        options: ["Incidente de alto nivel", "Incidente de nivel medio", "Incidente de nivel ultra-alto", "Incidente de bajo nivel"],
        correct: 0,
        explanation: "Un incidente de alto nivel debe manejarse el mismo día (en horas) porque tiene impacto directo en la continuidad del negocio y competitividad."
    },
    {
        module: 1,
        question: "La continuidad del negocio se logra mediante hardware/software redundante y sistemas tolerantes a fallos. ¿Qué plan es parte OBLIGATORIA de un BCP?",
        options: ["Plan de Procedimientos Forenses", "Plan de Recuperación del Negocio", "Plan de Ventas y Marketing", "Plan de Nueva Estrategia de Negocio"],
        correct: 1,
        explanation: "El Plan de Recuperación del Negocio (Business Recovery Plan) es un componente obligatorio del BCP ya que define cómo restaurar las operaciones críticas."
    },
    {
        module: 1,
        question: "¿Cuál es el flujo apropiado de los pasos de recuperación de incidentes?",
        options: [
            "System Restoration → System Validation → System Operations → System Monitoring",
            "System Monitoring → System Validation → System Restoration → System Operations",
            "System Validation → System Restoration → System Monitoring → System Operations",
            "System Operations → System Monitoring → System Restoration → System Validation"
        ],
        correct: 0,
        explanation: "El flujo correcto es: System Restoration → System Validation → System Operations → System Monitoring."
    },
    {
        module: 1,
        question: "¿Cuál de los siguientes NO es parte de la Política de Riesgo Informático?",
        options: [
            "Procedimiento para formación continua de empleados autorizados a acceder al sistema",
            "Procedimiento de respuesta a incidentes de seguridad",
            "Definición de roles y responsabilidades de seguridad",
            "Procedimientos de backup y recuperación"
        ],
        correct: 0,
        explanation: "La formación continua de empleados es parte de la política de formación, no de la política de riesgo informático."
    },
    {
        module: 1,
        question: "Incidente de seguridad de red donde usuarios legítimos son impedidos de usar sistemas mediante inundación con alto volumen de tráfico que consume todos los recursos:",
        options: ["Ataque Man-in-the-Middle", "Ataque de Denegación de Servicio", "Ataque de Fuerza Bruta", "Ataque de Phishing"],
        correct: 1,
        explanation: "El Ataque de Denegación de Servicio (DoS) impide a usuarios legítimos acceder a sistemas al consumir todos los recursos de red con tráfico masivo."
    },
    {
        module: 1,
        question: "¿Qué paso del proceso IH&R se enfoca en limitar el alcance y extensión de un incidente?",
        options: ["Identificación", "Contención", "Erradicación", "Recuperación"],
        correct: 1,
        explanation: "La Contención limita el alcance y extensión del incidente, evitando que se propague a otros sistemas."
    },
    {
        module: 1,
        question: "Programa malicioso enmascarado como programa genuino e inofensivo que da al atacante acceso no restringido y puede borrar discos o enviar información a extraños:",
        options: ["Gusano", "Troyano", "Virus", "Rootkit"],
        correct: 1,
        explanation: "Un Troyano es malware disfrazado de software legítimo que da acceso no restringido al atacante y puede realizar acciones destructivas sin conocimiento del usuario."
    },
    {
        module: 1,
        question: "El riesgo cuantitativo es la determinación numérica de la probabilidad de un evento adverso. ¿Cómo se calcula el riesgo cuantitativo?",
        options: [
            "Probabilidad de Pérdida + Pérdida",
            "(Probabilidad de Pérdida) × (Pérdida)",
            "Impacto × Frecuencia / Tiempo",
            "Amenaza × Vulnerabilidad / Control"
        ],
        correct: 1,
        explanation: "El riesgo cuantitativo se calcula como: (Probabilidad de Pérdida) × (Pérdida)."
    },
    {
        module: 1,
        question: "¿Cuál de los siguientes NO es un objetivo del plan de recuperación de incidentes?",
        options: [
            "Restaurar operaciones normales rápidamente",
            "Crear nuevos procesos de negocio para mantener rentabilidad tras el incidente",
            "Minimizar el impacto del incidente en la organización",
            "Preservar evidencia para acciones legales"
        ],
        correct: 1,
        explanation: "Un plan de recuperación de incidentes no tiene como objetivo crear nuevos procesos de negocio, sino restaurar los procesos existentes."
    },
    {
        module: 1,
        question: "¿Cuál de las siguientes afirmaciones NO es verdadera sobre una política de pistas de auditoría (audit trail)?",
        options: [
            "Registra eventos sobre el sistema operativo, aplicación y actividades de usuario",
            "Ayuda a calcular pérdidas intangibles de la organización debido a incidentes",
            "Puede reconstruir eventos que ocurrieron en el sistema",
            "Es esencial para investigaciones forenses y cumplimiento"
        ],
        correct: 1,
        explanation: "Las pistas de auditoría NO son herramientas para calcular pérdidas intangibles. Registran eventos para reconstruir incidentes."
    },
    {
        module: 1,
        question: "¿Cuál es el flujo apropiado de pasos en el proceso forense informático?",
        options: [
            "Recolección → Preparación → Examinación → Análisis → Reporte",
            "Preparación → Recolección → Examinación → Análisis → Reporte",
            "Análisis → Recolección → Preparación → Examinación → Reporte",
            "Preparación → Análisis → Recolección → Examinación → Reporte"
        ],
        correct: 1,
        explanation: "El flujo forense correcto es: Preparación → Recolección → Examinación → Análisis → Reporte."
    },
    {
        module: 1,
        question: "Los incidentes de múltiples componentes consisten en una combinación de dos o más ataques. ¿Cuál de los siguientes NO es un incidente de múltiples componentes?",
        options: [
            "Ataque de malware combinado con exfiltración de datos",
            "Un insider eliminando intencionalmente archivos de una estación de trabajo",
            "DDoS combinado con ataque de ransomware",
            "Phishing seguido de instalación de backdoor"
        ],
        correct: 1,
        explanation: "Un insider eliminando archivos es un incidente de componente único. Los de múltiples componentes combinan dos o más tipos de ataque simultáneamente."
    },
    {
        module: 1,
        question: "En Informática Forense, ¿quién es responsable de examinar la evidencia adquirida y separar la evidencia útil?",
        options: ["First Responder", "Examinador de Evidencia / Investigador", "Gestor Forense", "Asesor Legal"],
        correct: 1,
        explanation: "El Examinador de Evidencia/Investigador es responsable de analizar la evidencia adquirida e identificar la relevante para el caso."
    },
    {
        module: 1,
        question: "Henry, un hacker malicioso, descubrió vulnerabilidades usando herramientas sofisticadas y robó datos confidenciales de redes privadas. ¿Qué tipo de actor de amenaza es?",
        options: ["Script Kiddie", "White Hat", "Black Hat", "Gray Hat"],
        correct: 2,
        explanation: "Los Black Hats son hackers maliciosos que usan herramientas sofisticadas para explotar vulnerabilidades y robar datos con intención criminal."
    },
    {
        module: 1,
        question: "Chris, un insider malicioso, conectó un USB con malware al servidor de base de datos manipulando datos del producto. ¿Qué vector de ataque se discute?",
        options: ["Email", "Nube", "Medios Extraíbles", "Red Interna"],
        correct: 2,
        explanation: "Los Medios Extraíbles (Removable Media) como USB son vectores de ataque físicos que permiten introducir malware sin conexión a internet."
    },
    {
        module: 1,
        question: "¿A través de qué vector de ataque intenta un atacante engañar a la víctima con enlaces o adjuntos maliciosos para comprometer el sistema?",
        options: ["Red", "Email", "Web", "USB"],
        correct: 1,
        explanation: "El Email es el vector más común para phishing, spear phishing y distribución de malware mediante enlaces o adjuntos maliciosos."
    },
    {
        module: 1,
        question: "¿Qué vector de ataque permite comprometer un objetivo explotando vulnerabilidades en recursos de un proveedor externo de confianza?",
        options: ["Credenciales Robadas", "Fuerza Bruta", "Cadena de Suministro", "Ingeniería Social"],
        correct: 2,
        explanation: "La Cadena de Suministro (Supply Chain) permite comprometer objetivos mediante proveedores o socios que tienen acceso a sus sistemas."
    },
    {
        module: 1,
        question: "¿Qué tipo de ataque involucra a un atacante que altera hardware o software ANTES de instalarlos en el sistema objetivo?",
        options: ["Ataque de Día Cero", "Ataque de Distribución", "Ataque Man-in-the-Middle", "Ataque de Rootkit"],
        correct: 1,
        explanation: "Los Ataques de Distribución ocurren cuando el atacante altera hardware o software durante el proceso de fabricación o distribución, antes de que llegue al usuario."
    },
    {
        module: 1,
        question: "Alice, navegando en un sitio de publicidad, vio un mensaje revelando información interna de la base de datos. ¿Qué vulnerabilidad identificó Alice?",
        options: ["Inyección SQL", "Desbordamiento de Buffer", "Errores (mensajes de error informativos)", "Permisos Abiertos"],
        correct: 2,
        explanation: "Los mensajes de Error que revelan información interna (rutas, tecnologías, estructura de BD) son vulnerabilidades explotables que los atacantes usan para obtener información."
    },
    {
        module: 1,
        question: "Stella, nueva empleada, accedió a sitios no autorizados porque el administrador olvidó imponer restricciones de acceso. ¿Qué vulnerabilidad se demuestra?",
        options: ["Misconfiguration", "Buffer Overflow", "Permisos Abiertos", "Inyección SQL"],
        correct: 2,
        explanation: "Los Permisos Abiertos (Open Permissions) ocurren cuando los usuarios tienen más derechos de acceso de los necesarios, pudiendo acceder a recursos no autorizados."
    },
    {
        module: 1,
        question: "¿Qué vulnerabilidad surge cuando el administrador aumenta el número de sistemas o conexiones de servidor sin considerar la complejidad de red?",
        options: ["Race Conditions", "Buffer Overflow", "System Sprawl", "Misconfiguration"],
        correct: 2,
        explanation: "El System Sprawl ocurre cuando se añaden sistemas sin documentación o mantenimiento adecuado, creando puntos ciegos de seguridad."
    },
    {
        module: 1,
        question: "¿Qué vulnerabilidades emergen mediante errores de codificación que permiten a atacantes escribir contenido más allá del tamaño de memoria asignado?",
        options: ["Race Conditions", "Inyección SQL", "Desbordamientos de Buffer", "Misconfiguration"],
        correct: 2,
        explanation: "Los Desbordamientos de Buffer (Buffer Overflows) ocurren cuando se escribe más datos de los que el buffer puede contener, permitiendo ejecutar código arbitrario."
    },
    {
        module: 1,
        question: "Steve, pentester, inserta consultas maliciosas en campos de entrada de un formulario web y accede a la base de datos. ¿Qué falla encontró?",
        options: ["XSS", "CSRF", "Manejo Inapropiado de Entrada", "Inyección de Comandos"],
        correct: 2,
        explanation: "El Manejo Inapropiado de Entrada (Improper Input Handling) permite ataques de inyección cuando la aplicación no valida/sanitiza los datos de entrada."
    },
    {
        module: 1,
        question: "George descubrió un fallo de seguridad en software recién lanzado y lo explotó ANTES de que los desarrolladores lo identificaran y parchearan. ¿Qué tipo de fallo explotó?",
        options: ["Exploit Conocido", "Backdoor", "Ataque de Día Cero", "Rootkit"],
        correct: 2,
        explanation: "Un Ataque de Día Cero (Zero-Day) explota vulnerabilidades desconocidas por el fabricante, antes de que exista un parche disponible."
    },
    {
        module: 1,
        question: "¿Qué vulnerabilidad puede surgir cuando un sistema que maneja eventos secuencialmente es forzado a realizar múltiples operaciones simultáneamente?",
        options: ["Buffer Overflow", "Race Conditions", "SQL Injection", "Path Traversal"],
        correct: 1,
        explanation: "Las Race Conditions ocurren cuando múltiples procesos acceden a recursos compartidos simultáneamente de forma no sincronizada, creando resultados impredecibles."
    },
    {
        module: 1,
        question: "¿Qué problema surge cuando una empresa adquiere y usa hardware o software mal configurados de un tercero?",
        options: ["Zero-Day Attack", "Insider Threat", "Supply-chain risks", "Social Engineering"],
        correct: 2,
        explanation: "Los riesgos de cadena de suministro (Supply-chain risks) surgen cuando se usan recursos de terceros sin verificar su seguridad y configuración."
    },
    {
        module: 1,
        question: "Jack usa un recurso online para recopilar información sobre un objetivo ANTES de lanzar un ataque activo. ¿En qué fase del hacking se encuentra?",
        options: ["Escaneo", "Footprinting (Reconocimiento)", "Explotación", "Mantenimiento de Acceso"],
        correct: 1,
        explanation: "El Footprinting/Reconocimiento es la primera fase del hacking donde el atacante recopila información pasiva sobre el objetivo antes de intentar acceder."
    },
    {
        module: 1,
        question: "Dado el orden de fases del hacking: 1-Escalar privilegios, 2-Mantener acceso, 3-Limpiar logs, 4-Ganar acceso. ¿Cuál es el orden correcto?",
        options: ["1→2→3→4", "4→1→2→3", "4→2→1→3", "1→4→2→3"],
        correct: 1,
        explanation: "El orden correcto es: Ganar Acceso (4) → Escalar Privilegios (1) → Mantener Acceso (2) → Limpiar Logs (3)."
    },
    {
        module: 1,
        question: "Jude obtuvo acceso a la cuenta de un empleado y gradualmente aumentó su acceso al nivel de administrador. ¿En qué fase del hacking de sistemas se encuentra?",
        options: ["Ganando Acceso", "Escalando Privilegios", "Manteniendo Acceso", "Limpiando Logs"],
        correct: 1,
        explanation: "Escalar Privilegios es la fase donde el atacante aumenta sus permisos de usuario normal a niveles más altos (administrador/root)."
    },
    {
        module: 1,
        question: "Williams usa una herramienta sofisticada de fuerza bruta contra un servidor para descifrar sus credenciales y obtener control. ¿Qué fase del hacking de sistemas es?",
        options: ["Escalando Privilegios", "Manteniendo Acceso", "Ganando Acceso", "Reconocimiento"],
        correct: 2,
        explanation: "Ganar Acceso es la fase donde el atacante explota vulnerabilidades (como contraseñas débiles) para entrar en el sistema objetivo."
    },
    {
        module: 1,
        question: "Jacob inyectó malware en una aplicación comprometida que se carga al iniciar, enviando datos sin ser detectado. Retiene el control sin que nadie lo sepa. ¿Qué fase es?",
        options: ["Ganando Acceso", "Escalando Privilegios", "Limpiando Logs", "Manteniendo Acceso"],
        correct: 3,
        explanation: "Mantener Acceso es la fase donde el atacante instala backdoors, rootkits o malware persistente para mantener el control sin ser detectado."
    },
    {
        module: 1,
        question: "¿Qué fase de la Cyber Kill Chain involucra la transmisión del payload a la víctima como adjunto de email para comprometer el sistema?",
        options: ["Reconocimiento", "Armamento", "Entrega", "Explotación"],
        correct: 2,
        explanation: "La fase de Entrega (Delivery) en la Cyber Kill Chain es cuando el atacante transmite el payload al objetivo, comúnmente a través de email, web o USB."
    },
    {
        module: 1,
        question: "Según el framework MITRE ATT&CK, ¿en qué fase recopilan los atacantes información activa y pasivamente sobre el sistema o red objetivo?",
        options: ["Initial Access", "Ejecución", "Reconocimiento", "Descubrimiento"],
        correct: 2,
        explanation: "El Reconocimiento en MITRE ATT&CK cubre la recopilación de información tanto activa (escaneo) como pasiva (OSINT) sobre el objetivo."
    },
    {
        module: 1,
        question: "Gerard capturó pulsaciones de teclado mediante shoulder surfing del desarrollador que inició sesión en su email. Con esos datos, accedió a la cuenta y robó datos. ¿Qué fase MITRE ATT&CK?",
        options: ["Initial Access", "Credential Access", "Ejecución", "Escalada de Privilegios"],
        correct: 1,
        explanation: "Credential Access en MITRE ATT&CK incluye técnicas para obtener credenciales, como shoulder surfing, keylogging y credential dumping."
    },
    {
        module: 1,
        question: "Según el framework MITRE ATT&CK, ¿en qué fase ganan los atacantes control primario sobre la red explotando vulnerabilidades?",
        options: ["Reconocimiento", "Initial Access", "Persistencia", "Ejecución"],
        correct: 1,
        explanation: "Initial Access en MITRE ATT&CK cubre las técnicas que los atacantes usan para ganar acceso inicial a la red."
    },
    {
        module: 1,
        question: "Vincent instaló malware especialmente diseñado que transfiere automáticamente detalles sobre cambios realizados por el administrador en la base de datos. ¿Qué fase MITRE ATT&CK?",
        options: ["Persistencia", "Reconocimiento", "Ejecución", "Recolección"],
        correct: 2,
        explanation: "Execution en MITRE ATT&CK cubre técnicas donde el código controlado por el adversario se ejecuta en el sistema local o remoto."
    },
    {
        module: 1,
        question: "¿Qué táctica MITRE D3FEND involucra la identificación de acceso no autorizado y actividades inusuales en un sistema o red?",
        options: ["Harden", "Detect", "Isolate", "Deceive"],
        correct: 1,
        explanation: "La táctica Detect de MITRE D3FEND cubre la identificación de comportamientos anómalos, acceso no autorizado y actividades maliciosas."
    },
    {
        module: 1,
        question: "¿Qué táctica MITRE D3FEND crea barreras físicas en un sistema informático para prevenir que atacantes accedan a la red?",
        options: ["Detect", "Deceive", "Isolate", "Evict"],
        correct: 2,
        explanation: "Isolate en MITRE D3FEND incluye técnicas para crear barreras entre sistemas comprometidos y el resto de la red, como segmentación y cuarentena."
    },
    {
        module: 1,
        question: "¿Qué táctica MITRE D3FEND es empleada para engañar a los atacantes evitando que accedan a un entorno observado o controlado?",
        options: ["Detect", "Harden", "Isolate", "Deceive"],
        correct: 3,
        explanation: "Deceive en MITRE D3FEND usa técnicas como honeypots y tecnología de deception para engañar a los atacantes y desviarlos del entorno real."
    },
    {
        module: 1,
        question: "¿Qué táctica MITRE D3FEND erradica completamente la persistencia de un atacante en un sistema o red?",
        options: ["Detect", "Isolate", "Evict", "Harden"],
        correct: 2,
        explanation: "Evict en MITRE D3FEND cubre técnicas para eliminar completamente la presencia del atacante, incluyendo eliminar malware y revocar credenciales comprometidas."
    },

    // -- MÓDULO 2: IH&R Process y Risk Management --
    {
        module: 2,
        question: "¿En qué fase del proceso RE&CT el respondedor de incidentes ensaya el manejo de incidentes mediante simulacros, formación y mapeo de comunicaciones?",
        options: ["Identificación", "Preparación", "Contención", "Recuperación"],
        correct: 1,
        explanation: "La fase de Preparación del RE&CT framework incluye simulacros, ejercicios de tabletop y formación para que el equipo esté listo para responder."
    },
    {
        module: 2,
        question: "¿En qué fase del RE&CT framework los respondedores de incidentes proporcionan concienciación a los empleados sobre políticas de seguridad y objetivos de los activos organizacionales?",
        options: ["Identificación", "Preparación", "Contención", "Recuperación"],
        correct: 1,
        explanation: "La Preparación incluye la concienciación y formación del equipo sobre procedimientos, herramientas y políticas de seguridad antes de que ocurra un incidente."
    },
    {
        module: 2,
        question: "¿En qué fase del RE&CT framework restauran los respondedores los sistemas o dispositivos infectados a su estado pre-incidente?",
        options: ["Erradicación", "Contención", "Recuperación", "Lecciones Aprendidas"],
        correct: 2,
        explanation: "La fase de Recuperación en RE&CT involucra restaurar los sistemas a su estado operacional normal después de que la amenaza ha sido eliminada."
    },
    {
        module: 2,
        question: "¿En qué fase del RE&CT framework parchean los respondedores vulnerabilidades y ponen en cuarentena sistemas infectados para detener la propagación del ataque?",
        options: ["Identificación", "Erradicación", "Contención", "Preparación"],
        correct: 2,
        explanation: "La Contención en RE&CT busca limitar el impacto del incidente, incluyendo aislar sistemas comprometidos y bloquear vectores de propagación."
    },
    {
        module: 2,
        question: "¿En qué fase del RE&CT framework intentan los respondedores eliminar completamente las infecciones del incidente antes de restaurar los sistemas?",
        options: ["Contención", "Identificación", "Erradicación", "Recuperación"],
        correct: 2,
        explanation: "La Erradicación involucra eliminar completamente el malware, cerrar puertas traseras y parchear vulnerabilidades para limpiar el sistema comprometido."
    },
    {
        module: 2,
        question: "¿En qué fase del RE&CT framework evalúan los respondedores las partes individuales de la investigación para identificar oportunidades de mejora futura?",
        options: ["Recuperación", "Identificación", "Lecciones Aprendidas", "Erradicación"],
        correct: 2,
        explanation: "Lessons Learned (Lecciones Aprendidas) es donde el equipo analiza qué ocurrió, qué funcionó bien y qué mejorar para futuros incidentes."
    },
    {
        module: 2,
        question: "El equipo IH&R de una empresa realizó sesión de formación sobre procedimientos de manejo de incidentes para nuevos miembros, enseñando incidentes conocidos y políticas. ¿Qué fase RE&CT?",
        options: ["Identificación", "Preparación", "Contención", "Recuperación"],
        correct: 1,
        explanation: "La Preparación incluye la formación y concienciación del equipo sobre procedimientos, herramientas y políticas de seguridad antes de que ocurra un incidente."
    },
    {
        module: 2,
        question: "Margret, miembro del equipo IH&R, identificó inmediatamente la IP maliciosa desde la que se realizaron actividades no autorizadas en la red. ¿Qué fase RE&CT ejecutó?",
        options: ["Preparación", "Identificación", "Contención", "Erradicación"],
        correct: 1,
        explanation: "La Identificación en RE&CT involucra detectar y confirmar que un incidente ha ocurrido, incluyendo identificar los sistemas afectados y el vector de ataque."
    },
    {
        module: 2,
        question: "Alex eliminó completamente el archivo malicioso y cambió las credenciales del servidor para sanear el sistema antes de restaurarlo. ¿Qué fase RE&CT realizó?",
        options: ["Contención", "Identificación", "Erradicación", "Recuperación"],
        correct: 2,
        explanation: "La Erradicación involucra eliminar el malware, cerrar backdoors y parchear vulnerabilidades para limpiar el sistema comprometido."
    },
    {
        module: 2,
        question: "Roselyn preparó documentación de un incidente, discutió procesos de investigación con su equipo y preparó documentación resumiendo conclusiones. ¿Qué fase RE&CT realizó?",
        options: ["Recuperación", "Erradicación", "Contención", "Lecciones Aprendidas"],
        correct: 3,
        explanation: "Lecciones Aprendidas documenta el incidente completo, incluyendo cronología, causa raíz, acciones tomadas y recomendaciones para prevenir futuros incidentes."
    },
    {
        module: 2,
        question: "¿En qué paso de gestión de riesgos analiza el profesional de seguridad los impactos de los riesgos identificados y los prioriza según su nivel de severidad?",
        options: ["Identificación de Riesgos", "Evaluación de Riesgos", "Mitigación de Riesgos", "Monitoreo de Riesgos"],
        correct: 1,
        explanation: "La Evaluación de Riesgos analiza la probabilidad e impacto de cada riesgo identificado para priorizarlos y determinar el tratamiento apropiado."
    },
    {
        module: 2,
        question: "Peter, auditor de seguridad, analizó un incidente que habría causado daño grave si no se hubiera contenido a tiempo. ¿Qué etapa de gestión de riesgos ejecutó?",
        options: ["Identificación de Riesgos", "Evaluación de Riesgos", "Mitigación de Riesgos", "Monitoreo de Riesgos"],
        correct: 1,
        explanation: "La Evaluación de Riesgos incluye analizar los impactos potenciales de los incidentes identificados para determinar su severidad y prioridad de respuesta."
    },
    {
        module: 2,
        question: "¿En qué fase del NIST Risk Management Framework seleccionan los analistas de seguridad controles apropiados para mitigar riesgos en sistemas de información?",
        options: ["Categorizar Sistema", "Seleccionar Controles de Seguridad", "Implementar Controles", "Evaluar Controles"],
        correct: 1,
        explanation: "Seleccionar Controles de Seguridad es la fase del NIST RMF donde se eligen los controles apropiados basándose en la categorización del sistema y el nivel de riesgo."
    },
    {
        module: 2,
        question: "¿Cuál es el orden correcto de las fases del NIST RMF? (1-Autorizar, 2-Seleccionar, 3-Monitorear, 4-Categorizar, 5-Evaluar, 6-Implementar)",
        options: [
            "4→2→6→5→1→3",
            "1→2→3→4→5→6",
            "4→6→2→5→1→3",
            "2→4→6→5→3→1"
        ],
        correct: 0,
        explanation: "El orden NIST RMF es: Categorizar (4) → Seleccionar (2) → Implementar (6) → Evaluar (5) → Autorizar (1) → Monitorear (3)."
    },
    {
        module: 2,
        question: "El perímetro de red debe denegar todo tráfico no requerido. ¿Qué servicio, si se bloquea, ayuda a prevenir el ataque de Denegación de Servicio?",
        options: ["Servicio HTTP", "Servicio FTP", "Servicio Echo", "Servicio SMTP"],
        correct: 2,
        explanation: "El servicio Echo (puerto 7) puede ser explotado en ataques de amplificación DoS (ej. Smurf attack). Bloquearlo en el perímetro previene estos ataques."
    },
    {
        module: 2,
        question: "Una agencia federal de EEUU sufrió un DoS que impidió la funcionalidad normal y sigue en curso sin poderse mitigar. Según las directrices federales, ¿a qué categoría pertenece?",
        options: ["CAT 1", "CAT 2", "CAT 3", "CAT 4"],
        correct: 1,
        explanation: "CAT 2 corresponde a ataques DoS exitosos contra agencias federales que estén en curso y no puedan mitigarse, requiriendo reporte en máximo 2 horas."
    },
    {
        module: 2,
        question: "US-CERT y las agencias civiles federales usan criterios de tiempo de reporte. ¿Cuál es el plazo requerido para reportar un incidente bajo la categoría CAT 4?",
        options: ["Dentro de 1 hora", "Dentro de 24 horas", "Mensualmente", "Semanalmente"],
        correct: 3,
        explanation: "Los incidentes CAT 4 (actividad anómala/maliciosa de bajo nivel) se reportan semanalmente según los criterios de US-CERT y agencias civiles federales."
    },
    {
        module: 2,
        question: "¿Qué proceso estándar nacional establece actividades, tareas generales y estructura de gestión para certificar y acreditar sistemas manteniendo la postura de seguridad de la información?",
        options: ["FISMA", "NIACAP", "ISO 27001", "COBIT"],
        correct: 1,
        explanation: "NIACAP (National Information Assurance Certification and Accreditation Process) es el proceso nacional estándar de EEUU para certificar y acreditar sistemas que manejan información clasificada."
    },
    {
        module: 2,
        question: "¿Qué política autoriza a un grupo de usuarios a realizar un conjunto de acciones sobre un conjunto de recursos organizacionales?",
        options: ["Política de Uso Aceptable", "Política de Control de Acceso", "Política de Firewall", "Política de Seguridad de la Información"],
        correct: 1,
        explanation: "La Política de Control de Acceso define quién puede acceder a qué recursos y qué acciones puede realizar, implementando el principio de mínimo privilegio."
    },
    {
        module: 2,
        question: "Cuando un empleado es despedido, ¿cuál debe ser el SIGUIENTE paso INMEDIATO de la organización?",
        options: [
            "Enviar el cheque final al empleado",
            "Deshabilitar todos los derechos de acceso a ubicaciones físicas, redes, sistemas, aplicaciones y datos",
            "Conducir la entrevista de salida",
            "Archivar los archivos del empleado"
        ],
        correct: 1,
        explanation: "La deshabilitación inmediata de TODOS los accesos es crítica para prevenir que el empleado descontento cause daño a sistemas o datos de la organización."
    },
    {
        module: 2,
        question: "Una fuente de amenaza no presenta riesgo si NO hay vulnerabilidad explotable. ¿En qué paso del NIST se definen las diferentes fuentes de amenaza?",
        options: ["Evaluación de Riesgos", "Caracterización del Sistema", "Identificación de Amenazas", "Evaluación de Vulnerabilidades"],
        correct: 2,
        explanation: "La Identificación de Amenazas es el paso donde se documentan todas las posibles fuentes de amenaza (naturales, humanas, ambientales) que podrían afectar al sistema."
    },
    {
        module: 2,
        question: "En la etapa de Análisis de Controles del NIST, los métodos de control técnicos y no técnicos se clasifican en dos categorías. ¿Cuáles son?",
        options: [
            "Controles Activos y Pasivos",
            "Controles Técnicos y No Técnicos",
            "Controles Preventivos y Detectivos",
            "Controles Administrativos y Físicos"
        ],
        correct: 2,
        explanation: "El NIST clasifica los controles en Preventivos (evitan que ocurra el incidente) y Detectivos (identifican cuando el incidente ha ocurrido o está ocurriendo)."
    },
    {
        module: 2,
        question: "¿Qué método de prueba de recuperación de incidentes funciona creando un desastre simulado, como un incendio, para identificar la reacción de los procedimientos implementados?",
        options: ["Ejercicio de Tabletop", "Prueba en Paralelo", "Prueba de Procedimientos", "Prueba de Interrupción Total"],
        correct: 2,
        explanation: "La Prueba de Procedimientos (Procedure Testing) simula situaciones de desastre reales para verificar que los procedimientos de respuesta funcionan correctamente."
    },
    {
        module: 2,
        question: "Un incidente se analiza por su naturaleza, intensidad y efectos en la red. ¿Qué etapa del proceso IH&R involucra la auditoría de archivos de log del sistema y la red?",
        options: ["Preparación", "Identificación", "Contención", "Recuperación"],
        correct: 1,
        explanation: "La Identificación involucra el análisis de logs del sistema, red y aplicaciones para confirmar el incidente, determinar su alcance y recopilar evidencias."
    },
    {
        module: 2,
        question: "¿Cuál de los siguientes CERT es proveedor de internet para instituciones de educación superior e instituciones de investigación en los Países Bajos?",
        options: ["US-CERT", "ENISA-CERT", "SURFnet-CERT", "JANET-CERT"],
        correct: 2,
        explanation: "SURFnet-CERT es el CERT de Países Bajos especializado en incidentes de ciberseguridad para instituciones educativas y de investigación, actuando cuando un cliente es víctima o sospechoso."
    },
    {
        module: 2,
        question: "Según el proceso de gestión de incidentes de CERT, ¿qué etapa se enfoca en implementar mejoras de infraestructura resultantes de revisiones post-mortem u otros mecanismos de mejora?",
        options: ["Detección", "Triage", "Protección", "Erradicación"],
        correct: 2,
        explanation: "La etapa de Protección en el proceso CERT se centra en implementar mejoras preventivas basadas en las lecciones aprendidas de incidentes anteriores."
    },
    {
        module: 2,
        question: "La evaluación de riesgos determina la extensión de la amenaza potencial y el riesgo en un sistema IT. ¿Cuántos pasos primarios involucra la metodología de evaluación de riesgos del NIST?",
        options: ["Cinco", "Siete", "Nueve", "Doce"],
        correct: 2,
        explanation: "La metodología de evaluación de riesgos del NIST SP 800-30 involucra nueve pasos primarios: desde la caracterización del sistema hasta la documentación de resultados."
    },
    {
        module: 2,
        question: "Las amenazas internas se detectan observando comportamientos concernientes como conflictos con supervisores o decline en rendimiento. ¿Qué técnica ayuda a detectar amenazas internas?",
        options: [
            "Monitorear todo el tráfico de internet de los empleados",
            "Correlacionar patrones conocidos de comportamiento sospechoso y malicioso",
            "Instalar cámaras de vigilancia en todas las áreas",
            "Restringir el acceso físico a todas las áreas de la empresa"
        ],
        correct: 1,
        explanation: "Correlacionar patrones conocidos de comportamiento sospechoso y malicioso (como acceso inusual a datos, cambios en horarios) ayuda a identificar insiders maliciosos."
    },
    {
        module: 2,
        question: "¿Cuál es el propósito PRINCIPAL del plan de reconstitución en un plan de contingencia IT?",
        options: [
            "Crear copias de seguridad de todos los datos de la organización",
            "Notificar a las partes interesadas del incidente ocurrido",
            "Restaurar el sitio original, probar sistemas para prevenir el incidente y terminar operaciones de contingencia",
            "Desarrollar nuevos sistemas IT para reemplazar los dañados"
        ],
        correct: 2,
        explanation: "El plan de reconstitución restaura el sitio original a su estado previo, verifica que los sistemas funcionan correctamente y termina con las operaciones de contingencia."
    },
    {
        module: 2,
        question: "La matriz de riesgo insider considera la alfabetización técnica y el conocimiento de procesos de negocio. Si el insider tiene ALTA alfabetización técnica Y ALTO conocimiento de procesos:",
        options: [
            "El riesgo planteado por la amenaza será bajo",
            "El riesgo planteado por la amenaza será medio",
            "El riesgo planteado por la amenaza será alto",
            "El riesgo es negligible porque el insider es un empleado de confianza"
        ],
        correct: 2,
        explanation: "Cuando un insider tiene alta capacitación técnica Y alto conocimiento del negocio, puede causar el mayor daño posible, por lo que el riesgo es máximo."
    },
    {
        module: 2,
        question: "¿Qué política recomienda controles para proteger y rastrear los recursos organizacionales?",
        options: ["Política de Control de Acceso", "Política de Control de Activos", "Política de Seguridad de la Información", "Política de Uso Aceptable"],
        correct: 1,
        explanation: "La Política de Control de Activos (Asset Control Policy) establece controles para proteger, rastrear e inventariar todos los activos de la organización."
    },
    {
        module: 2,
        question: "¿Cuál es la secuencia correcta y completa del flujo de las etapas en una respuesta a incidentes?",
        options: [
            "Identificación → Preparación → Contención → Erradicación → Recuperación → Seguimiento",
            "Preparación → Identificación → Contención → Erradicación → Recuperación → Seguimiento",
            "Preparación → Contención → Identificación → Erradicación → Recuperación → Seguimiento",
            "Identificación → Contención → Preparación → Recuperación → Erradicación → Seguimiento"
        ],
        correct: 1,
        explanation: "La secuencia estándar NIST/PICERL es: Preparación → Identificación → Contención → Erradicación → Recuperación → Seguimiento (Follow-up)."
    },
    {
        module: 2,
        question: "Las organizaciones necesitan proteger la evidencia para futuras acciones legales. ¿Cuál de los siguientes documentos ayuda a proteger la evidencia del daño físico o lógico?",
        options: ["Registro de Evidencia", "Cadena de Custodia", "Informe de Incidente", "Informe de Análisis Forense"],
        correct: 1,
        explanation: "La Cadena de Custodia (Chain-of-Custody) documenta cada vez que la evidencia es accedida, trasladada o modificada, protegiendo su integridad para uso legal."
    },
    {
        module: 2,
        question: "Los roles en un IRT son distintos para cada organización. ¿Cuál es el rol que juega el Coordinador de Incidentes en un IRT?",
        options: [
            "Realiza análisis técnico de los sistemas comprometidos",
            "Conduce investigaciones forenses en equipos infectados",
            "Vincula a los grupos afectados por el incidente: legal, RRHH, áreas de negocio y dirección",
            "Gestiona las comunicaciones con los medios de comunicación externos"
        ],
        correct: 2,
        explanation: "El Coordinador de Incidentes actúa como enlace entre los diferentes grupos afectados por el incidente, coordinando la respuesta entre legal, RRHH, negocio y dirección."
    },
    {
        module: 2,
        question: "Los datos del sistema afectado deben copiarse para su recuperación o investigación. ¿En qué etapa del proceso IH&R se realiza el backup COMPLETO del sistema infectado?",
        options: ["Identificación", "Contención", "Erradicación", "Recuperación"],
        correct: 1,
        explanation: "Durante la Contención, además de aislar el sistema, se realiza una copia forense completa del sistema infectado para preservar evidencias y permitir investigación posterior."
    }
];

// Generar 100 preguntas para el simulacro
function generateExamQuestions() {
    const allQuestions = [...practiceQuestions];
    // Mezclar y tomar 100 (o todas si hay menos)
    const shuffled = allQuestions.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(100, shuffled.length));
}
