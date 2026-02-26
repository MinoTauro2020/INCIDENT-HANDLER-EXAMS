// =============================================
// ECIH v3 - PREGUNTAS BILINGÜES (ES/EN)
// =============================================

const bilingualQuestions = [
    // ==========================================
    // MÓDULO 1: Introduction to Incident Handling
    // ==========================================
    {
        module: 1,
        question_es: "¿Cuál de los siguientes términos se define como 'una medida de posible incapacidad para alcanzar un objetivo, objetivo o meta dentro de un plan definido de seguridad, costes y limitaciones técnicas que afecten negativamente a la operación y los ingresos de la organización'?",
        question_en: "Which of the following terms is defined as 'a measure of possible inability to achieve a goal, objective or target within a defined security plan, costs and technical limitations that negatively affect the operation and revenue of the organization'?",
        options_es: ["Riesgo", "Vulnerabilidad", "Amenaza", "Incidente"],
        options_en: ["Risk", "Vulnerability", "Threat", "Incident"],
        correct: 0,
        explanation_es: "El riesgo es la medida de la posibilidad de que una amenaza explote una vulnerabilidad y cause daño a un activo.",
        explanation_en: "Risk is the measure of the possibility that a threat will exploit a vulnerability and cause harm to an asset."
    },
    {
        module: 1,
        question_es: "¿Qué es un incidente de seguridad de la información?",
        question_en: "What is an information security incident?",
        options_es: [
            "Cualquier evento observable en un sistema",
            "Un evento que compromete la confidencialidad, integridad o disponibilidad de la información",
            "Un ataque de malware exitoso",
            "Una vulnerabilidad descubierta"
        ],
        options_en: [
            "Any observable event in a system",
            "An event that compromises the confidentiality, integrity or availability of information",
            "A successful malware attack",
            "A discovered vulnerability"
        ],
        correct: 1,
        explanation_es: "Un incidente de seguridad es un evento adverso que compromete la tríada CIA (Confidencialidad, Integridad, Disponibilidad).",
        explanation_en: "A security incident is an adverse event that compromises the CIA triad (Confidentiality, Integrity, Availability)."
    },
    {
        module: 1,
        question_es: "¿Cuál es la diferencia principal entre un evento y un incidente de seguridad?",
        question_en: "What is the main difference between a security event and an incident?",
        options_es: [
            "No hay diferencia",
            "Un evento es cualquier ocurrencia observable; un incidente tiene impacto negativo",
            "Un incidente es más pequeño que un evento",
            "Un evento siempre es malicioso"
        ],
        options_en: [
            "There is no difference",
            "An event is any observable occurrence; an incident has negative impact",
            "An incident is smaller than an event",
            "An event is always malicious"
        ],
        correct: 1,
        explanation_es: "Un evento es cualquier ocurrencia observable en un sistema. Un incidente es un evento que tiene impacto negativo en la seguridad.",
        explanation_en: "An event is any observable occurrence in a system. An incident is an event that has negative impact on security."
    },
    {
        module: 1,
        question_es: "¿Qué significa CSIRT?",
        question_en: "What does CSIRT stand for?",
        options_es: [
            "Computer Security Incident Response Team",
            "Cyber Security Intelligence Response Team",
            "Critical Security Incident Review Team",
            "Computer System Incident Recovery Team"
        ],
        options_en: [
            "Computer Security Incident Response Team",
            "Cyber Security Intelligence Response Team",
            "Critical Security Incident Review Team",
            "Computer System Incident Recovery Team"
        ],
        correct: 0,
        explanation_es: "CSIRT significa Computer Security Incident Response Team - Equipo de Respuesta a Incidentes de Seguridad Informática.",
        explanation_en: "CSIRT stands for Computer Security Incident Response Team."
    },
    {
        module: 1,
        question_es: "¿Cuál de los siguientes NO es un framework de Incident Response reconocido?",
        question_en: "Which of the following is NOT a recognized Incident Response framework?",
        options_es: ["NIST SP 800-61", "SANS Incident Handler's Handbook", "ISO 27035", "COBIT Incident Framework"],
        options_en: ["NIST SP 800-61", "SANS Incident Handler's Handbook", "ISO 27035", "COBIT Incident Framework"],
        correct: 3,
        explanation_es: "COBIT es un framework de gobierno de TI, no específicamente de incident response. Los frameworks reconocidos son NIST SP 800-61, SANS y ISO 27035.",
        explanation_en: "COBIT is an IT governance framework, not specifically for incident response. Recognized IR frameworks are NIST SP 800-61, SANS, and ISO 27035."
    },
    {
        module: 1,
        question_es: "¿Cuál es el objetivo principal del Incident Handling and Response?",
        question_en: "What is the main objective of Incident Handling and Response?",
        options_es: [
            "Castigar a los atacantes",
            "Minimizar el daño y reducir el tiempo de recuperación",
            "Eliminar todo el malware del mundo",
            "Reportar a las autoridades"
        ],
        options_en: [
            "Punish attackers",
            "Minimize damage and reduce recovery time",
            "Eliminate all malware in the world",
            "Report to authorities"
        ],
        correct: 1,
        explanation_es: "El objetivo principal es minimizar el impacto del incidente y reducir el tiempo y costo de recuperación.",
        explanation_en: "The main objective is to minimize the impact of the incident and reduce recovery time and cost."
    },
    {
        module: 1,
        question_es: "La tríada CIA en seguridad representa:",
        question_en: "The CIA triad in security represents:",
        options_es: [
            "Central Intelligence Agency",
            "Confidencialidad, Integridad, Disponibilidad",
            "Computer Incident Analysis",
            "Critical Infrastructure Assessment"
        ],
        options_en: [
            "Central Intelligence Agency",
            "Confidentiality, Integrity, Availability",
            "Computer Incident Analysis",
            "Critical Infrastructure Assessment"
        ],
        correct: 1,
        explanation_es: "CIA representa Confidentiality (Confidencialidad), Integrity (Integridad) y Availability (Disponibilidad).",
        explanation_en: "CIA represents Confidentiality, Integrity, and Availability."
    },

    // ==========================================
    // MÓDULO 2: IH&R Process
    // ==========================================
    {
        module: 2,
        question_es: "Según NIST, ¿cuáles son las 4 fases del proceso de Incident Handling and Response?",
        question_en: "According to NIST, what are the 4 phases of the Incident Handling and Response process?",
        options_es: [
            "Detección, Análisis, Eliminación, Documentación",
            "Preparación, Detección y Análisis, Contención/Erradicación/Recuperación, Post-Incidente",
            "Identificación, Protección, Detección, Respuesta",
            "Planificación, Implementación, Verificación, Mejora"
        ],
        options_en: [
            "Detection, Analysis, Elimination, Documentation",
            "Preparation, Detection and Analysis, Containment/Eradication/Recovery, Post-Incident",
            "Identify, Protect, Detect, Respond",
            "Plan, Implement, Verify, Improve"
        ],
        correct: 1,
        explanation_es: "Las 4 fases según NIST SP 800-61 son: 1) Preparation 2) Detection & Analysis 3) Containment, Eradication & Recovery 4) Post-Incident Activity.",
        explanation_en: "The 4 phases according to NIST SP 800-61 are: 1) Preparation 2) Detection & Analysis 3) Containment, Eradication & Recovery 4) Post-Incident Activity."
    },
    {
        module: 2,
        question_es: "Un ataque de denegación de servicio distribuido (DDoS) es un tipo más común de ataque DoS, en el que un único sistema es objetivo de un gran número de máquinas infectadas a través de Internet. En un ataque DDoS, los atacantes primero infectan múltiples sistemas conocidos como:",
        question_en: "A Distributed Denial of Service (DDoS) attack is a more common type of DoS attack, in which a single system is targeted by a large number of infected machines across the Internet. In a DDoS attack, attackers first infect multiple systems known as:",
        options_es: ["Troyanos", "Zombies", "Spyware", "Gusanos"],
        options_en: ["Trojans", "Zombies", "Spyware", "Worms"],
        correct: 1,
        explanation_es: "Los sistemas comprometidos en una botnet que participan en ataques DDoS se conocen como 'zombies' o 'bots'.",
        explanation_en: "Compromised systems in a botnet that participate in DDoS attacks are known as 'zombies' or 'bots'."
    },
    {
        module: 2,
        question_es: "¿Qué significa MTTD en métricas de respuesta a incidentes?",
        question_en: "What does MTTD mean in incident response metrics?",
        options_es: [
            "Maximum Time To Detect",
            "Mean Time To Detect",
            "Minimum Time To Deploy",
            "Mean Time To Document"
        ],
        options_en: [
            "Maximum Time To Detect",
            "Mean Time To Detect",
            "Minimum Time To Deploy",
            "Mean Time To Document"
        ],
        correct: 1,
        explanation_es: "MTTD (Mean Time To Detect) es el tiempo promedio para detectar un incidente de seguridad.",
        explanation_en: "MTTD (Mean Time To Detect) is the average time to detect a security incident."
    },
    {
        module: 2,
        question_es: "¿Qué es un playbook en el contexto de IH&R?",
        question_en: "What is a playbook in the context of IH&R?",
        options_es: [
            "Un manual de juegos de equipo",
            "Un documento que describe los pasos específicos para responder a un tipo particular de incidente",
            "Una lista de herramientas de seguridad",
            "Un registro de incidentes pasados"
        ],
        options_en: [
            "A team game manual",
            "A document describing specific steps to respond to a particular type of incident",
            "A list of security tools",
            "A log of past incidents"
        ],
        correct: 1,
        explanation_es: "Un playbook es una guía paso a paso para responder a tipos específicos de incidentes de seguridad.",
        explanation_en: "A playbook is a step-by-step guide for responding to specific types of security incidents."
    },
    {
        module: 2,
        question_es: "Los pasos de gestión y respuesta a incidentes te ayudan a detectar, identificar, responder y gestionar un caso. ¿Cuál de los siguientes pasos se centra en limitar el alcance y la extensión de un incidente?",
        question_en: "Incident handling and response steps help you detect, identify, respond and manage a case. Which of the following steps focuses on limiting the scope and extent of an incident?",
        options_es: ["Erradicación", "Contención", "Identificación", "Recogida de datos"],
        options_en: ["Eradication", "Containment", "Identification", "Data Collection"],
        correct: 1,
        explanation_es: "La contención se centra en limitar el alcance y la extensión del incidente para evitar que se propague.",
        explanation_en: "Containment focuses on limiting the scope and extent of the incident to prevent it from spreading."
    },
    {
        module: 2,
        question_es: "¿Qué se realiza en la fase de Post-Incident Activity?",
        question_en: "What is performed in the Post-Incident Activity phase?",
        options_es: [
            "Detección de nuevos incidentes",
            "Lessons Learned y creación del Incident Report",
            "Contención del malware",
            "Restauración de backups"
        ],
        options_en: [
            "Detection of new incidents",
            "Lessons Learned and Incident Report creation",
            "Malware containment",
            "Backup restoration"
        ],
        correct: 1,
        explanation_es: "En Post-Incident se documenta lo aprendido, se crea el informe final y se mejoran los procesos.",
        explanation_en: "In Post-Incident, lessons learned are documented, final report is created, and processes are improved."
    },
    {
        module: 2,
        question_es: "¿Qué herramienta se utiliza principalmente para correlacionar eventos de múltiples fuentes?",
        question_en: "What tool is primarily used to correlate events from multiple sources?",
        options_es: ["Antivirus", "SIEM", "Firewall", "VPN"],
        options_en: ["Antivirus", "SIEM", "Firewall", "VPN"],
        correct: 1,
        explanation_es: "SIEM (Security Information and Event Management) correlaciona eventos de múltiples fuentes para detectar incidentes.",
        explanation_en: "SIEM (Security Information and Event Management) correlates events from multiple sources to detect incidents."
    },

    // ==========================================
    // MÓDULO 3: First Response
    // ==========================================
    {
        module: 3,
        question_es: "¿Cuál es la regla de oro del First Responder?",
        question_en: "What is the golden rule of the First Responder?",
        options_es: [
            "Apagar el sistema inmediatamente",
            "Do no harm - No causar más daño",
            "Llamar a la policía primero",
            "Formatear el disco duro"
        ],
        options_en: [
            "Shut down the system immediately",
            "Do no harm - Don't cause more damage",
            "Call the police first",
            "Format the hard drive"
        ],
        correct: 1,
        explanation_es: "La regla de oro es 'Do no harm' - no causar más daño y preservar la integridad de la evidencia.",
        explanation_en: "The golden rule is 'Do no harm' - don't cause more damage and preserve evidence integrity."
    },
    {
        module: 3,
        question_es: "Según el orden de volatilidad, ¿qué se debe recolectar PRIMERO?",
        question_en: "According to the order of volatility, what should be collected FIRST?",
        options_es: ["Disco duro", "Memoria RAM", "Logs remotos", "Registros CPU y cache"],
        options_en: ["Hard drive", "RAM memory", "Remote logs", "CPU registers and cache"],
        correct: 3,
        explanation_es: "Los registros CPU y cache son los más volátiles y se pierden en microsegundos, seguidos de la RAM.",
        explanation_en: "CPU registers and cache are the most volatile and are lost in microseconds, followed by RAM."
    },
    {
        module: 3,
        question_es: "¿Por qué NO se debe apagar inmediatamente un sistema comprometido?",
        question_en: "Why should you NOT immediately shut down a compromised system?",
        options_es: [
            "Es más fácil analizarlo encendido",
            "Se perdería la evidencia volátil en RAM",
            "El atacante podría notarlo",
            "No hay razón para no apagarlo"
        ],
        options_en: [
            "It's easier to analyze it while on",
            "Volatile evidence in RAM would be lost",
            "The attacker might notice",
            "There's no reason not to shut it down"
        ],
        correct: 1,
        explanation_es: "Al apagar el sistema se pierde toda la evidencia volátil: RAM, procesos en ejecución, conexiones de red activas.",
        explanation_en: "Shutting down the system loses all volatile evidence: RAM, running processes, active network connections."
    },
    {
        module: 3,
        question_es: "¿Qué es la Chain of Custody?",
        question_en: "What is the Chain of Custody?",
        options_es: [
            "Una cadena de mando militar",
            "Un registro que documenta quién tuvo acceso a la evidencia",
            "Una técnica de cifrado",
            "Un tipo de malware"
        ],
        options_en: [
            "A military chain of command",
            "A record documenting who had access to evidence",
            "An encryption technique",
            "A type of malware"
        ],
        correct: 1,
        explanation_es: "La Chain of Custody documenta quién, qué, cuándo, dónde y cada transferencia de la evidencia.",
        explanation_en: "The Chain of Custody documents who, what, when, where, and every transfer of evidence."
    },
    {
        module: 3,
        question_es: "¿Qué herramienta se usa para análisis de memoria RAM?",
        question_en: "What tool is used for RAM memory analysis?",
        options_es: ["Wireshark", "Volatility", "Nmap", "Burp Suite"],
        options_en: ["Wireshark", "Volatility", "Nmap", "Burp Suite"],
        correct: 1,
        explanation_es: "Volatility es la herramienta estándar para análisis forense de memoria RAM.",
        explanation_en: "Volatility is the standard tool for RAM forensic analysis."
    },
    {
        module: 3,
        question_es: "¿Qué es una copia bit-stream?",
        question_en: "What is a bit-stream copy?",
        options_es: [
            "Una copia de archivos seleccionados",
            "Una copia forense exacta bit a bit del medio de almacenamiento",
            "Una copia comprimida",
            "Una copia en la nube"
        ],
        options_en: [
            "A copy of selected files",
            "An exact bit-by-bit forensic copy of the storage media",
            "A compressed copy",
            "A cloud copy"
        ],
        correct: 1,
        explanation_es: "Una bit-stream copy es una copia forense exacta bit a bit, incluyendo espacio no asignado y archivos eliminados.",
        explanation_en: "A bit-stream copy is an exact bit-by-bit forensic copy, including unallocated space and deleted files."
    },

    // ==========================================
    // MÓDULO 4: Malware Incidents
    // ==========================================
    {
        module: 4,
        question_es: "¿Qué tipo de malware se propaga automáticamente sin intervención del usuario?",
        question_en: "What type of malware spreads automatically without user intervention?",
        options_es: ["Virus", "Trojan", "Worm", "Spyware"],
        options_en: ["Virus", "Trojan", "Worm", "Spyware"],
        correct: 2,
        explanation_es: "Los worms se propagan automáticamente a través de la red sin requerir acción del usuario.",
        explanation_en: "Worms spread automatically through the network without requiring user action."
    },
    {
        module: 4,
        question_es: "¿Qué es fileless malware?",
        question_en: "What is fileless malware?",
        options_es: [
            "Malware muy pequeño",
            "Malware que opera en memoria sin escribir archivos al disco",
            "Malware sin código",
            "Malware que borra sus archivos"
        ],
        options_en: [
            "Very small malware",
            "Malware that operates in memory without writing files to disk",
            "Malware without code",
            "Malware that deletes its files"
        ],
        correct: 1,
        explanation_es: "Fileless malware opera completamente en memoria usando herramientas legítimas del sistema.",
        explanation_en: "Fileless malware operates entirely in memory using legitimate system tools."
    },
    {
        module: 4,
        question_es: "¿Cuál es la primera acción al confirmar una infección de malware?",
        question_en: "What is the first action when confirming a malware infection?",
        options_es: [
            "Formatear el sistema",
            "Aislar el sistema de la red",
            "Llamar a la policía",
            "Actualizar el antivirus"
        ],
        options_en: [
            "Format the system",
            "Isolate the system from the network",
            "Call the police",
            "Update the antivirus"
        ],
        correct: 1,
        explanation_es: "La primera acción de contención es aislar el sistema para evitar propagación y comunicación con servidores C2.",
        explanation_en: "The first containment action is to isolate the system to prevent spread and C2 server communication."
    },
    {
        module: 4,
        question_es: "¿Qué herramienta se usa para crear reglas de detección de malware?",
        question_en: "What tool is used to create malware detection rules?",
        options_es: ["YARA", "Python", "Excel", "Notepad"],
        options_en: ["YARA", "Python", "Excel", "Notepad"],
        correct: 0,
        explanation_es: "YARA es la herramienta estándar para crear reglas de detección de malware basadas en patrones.",
        explanation_en: "YARA is the standard tool for creating pattern-based malware detection rules."
    },
    {
        module: 4,
        question_es: "¿Qué es un servidor C2?",
        question_en: "What is a C2 server?",
        options_es: [
            "Servidor de backup",
            "Command and Control - servidor que controla malware",
            "Servidor de correo",
            "Cloud Computing server"
        ],
        options_en: [
            "Backup server",
            "Command and Control - server that controls malware",
            "Email server",
            "Cloud Computing server"
        ],
        correct: 1,
        explanation_es: "C2 (Command and Control) es el servidor que el atacante usa para controlar el malware y recibir datos robados.",
        explanation_en: "C2 (Command and Control) is the server the attacker uses to control malware and receive stolen data."
    },
    {
        module: 4,
        question_es: "El análisis dinámico de malware implica:",
        question_en: "Dynamic malware analysis involves:",
        options_es: [
            "Leer el código sin ejecutar",
            "Ejecutar el malware en un entorno controlado (sandbox)",
            "Enviar el malware a VirusTotal",
            "Eliminar el malware"
        ],
        options_en: [
            "Reading the code without executing",
            "Running the malware in a controlled environment (sandbox)",
            "Sending the malware to VirusTotal",
            "Deleting the malware"
        ],
        correct: 1,
        explanation_es: "El análisis dinámico ejecuta el malware en un sandbox controlado para observar su comportamiento real.",
        explanation_en: "Dynamic analysis runs the malware in a controlled sandbox to observe its actual behavior."
    },

    // ==========================================
    // MÓDULO 5: Email Security Incidents
    // ==========================================
    {
        module: 5,
        question_es: "¿Qué técnica de phishing está dirigida específicamente a ejecutivos?",
        question_en: "What phishing technique specifically targets executives?",
        options_es: ["Spear phishing", "Whaling", "Vishing", "Smishing"],
        options_en: ["Spear phishing", "Whaling", "Vishing", "Smishing"],
        correct: 1,
        explanation_es: "Whaling (caza de ballenas) es phishing dirigido específicamente a ejecutivos de alto nivel (C-level).",
        explanation_en: "Whaling is phishing specifically targeted at high-level executives (C-level)."
    },
    {
        module: 5,
        question_es: "¿Qué protocolo verifica que un servidor de correo está autorizado para enviar emails de un dominio?",
        question_en: "What protocol verifies that a mail server is authorized to send emails from a domain?",
        options_es: ["DKIM", "SPF", "DMARC", "TLS"],
        options_en: ["DKIM", "SPF", "DMARC", "TLS"],
        correct: 1,
        explanation_es: "SPF (Sender Policy Framework) verifica qué servidores IP están autorizados para enviar correo en nombre de un dominio.",
        explanation_en: "SPF (Sender Policy Framework) verifies which IP servers are authorized to send mail on behalf of a domain."
    },
    {
        module: 5,
        question_es: "¿Qué es BEC (Business Email Compromise)?",
        question_en: "What is BEC (Business Email Compromise)?",
        options_es: [
            "Un tipo de spam",
            "Fraude donde el atacante suplanta a ejecutivos para solicitar transferencias",
            "Un protocolo de email",
            "Un filtro de correo"
        ],
        options_en: [
            "A type of spam",
            "Fraud where the attacker impersonates executives to request transfers",
            "An email protocol",
            "A mail filter"
        ],
        correct: 1,
        explanation_es: "BEC es un fraude sofisticado donde el atacante suplanta la identidad de ejecutivos para realizar transferencias fraudulentas.",
        explanation_en: "BEC is a sophisticated fraud where the attacker impersonates executives to make fraudulent transfers."
    },
    {
        module: 5,
        question_es: "En los headers de email, ¿cómo se lee la ruta del mensaje?",
        question_en: "In email headers, how do you read the message route?",
        options_es: [
            "De arriba hacia abajo",
            "De abajo hacia arriba",
            "Alfabéticamente",
            "Por fecha"
        ],
        options_en: [
            "Top to bottom",
            "Bottom to top",
            "Alphabetically",
            "By date"
        ],
        correct: 1,
        explanation_es: "Los headers 'Received' se leen de abajo hacia arriba, donde el más inferior es el origen.",
        explanation_en: "The 'Received' headers are read bottom to top, where the lowest is the origin."
    },
    {
        module: 5,
        question_es: "DMARC especifica:",
        question_en: "DMARC specifies:",
        options_es: [
            "Cómo cifrar emails",
            "Qué hacer cuando SPF o DKIM fallan",
            "Cómo almacenar emails",
            "Cuánto tiempo retener emails"
        ],
        options_en: [
            "How to encrypt emails",
            "What to do when SPF or DKIM fail",
            "How to store emails",
            "How long to retain emails"
        ],
        correct: 1,
        explanation_es: "DMARC define la política de qué hacer cuando la autenticación SPF o DKIM falla (none, quarantine, reject).",
        explanation_en: "DMARC defines the policy for what to do when SPF or DKIM authentication fails (none, quarantine, reject)."
    },

    // ==========================================
    // MÓDULO 6: Network Security Incidents
    // ==========================================
    {
        module: 6,
        question_es: "¿Qué tipo de ataque DDoS consume el ancho de banda de la víctima?",
        question_en: "What type of DDoS attack consumes the victim's bandwidth?",
        options_es: ["Protocol attack", "Application layer attack", "Volumetric attack", "Reflection attack"],
        options_en: ["Protocol attack", "Application layer attack", "Volumetric attack", "Reflection attack"],
        correct: 2,
        explanation_es: "Los ataques volumétricos buscan saturar el ancho de banda de la víctima con gran cantidad de tráfico.",
        explanation_en: "Volumetric attacks aim to saturate the victim's bandwidth with large amounts of traffic."
    },
    {
        module: 6,
        question_es: "¿Qué es un ataque SYN flood?",
        question_en: "What is a SYN flood attack?",
        options_es: [
            "Ataque que envía muchos paquetes UDP",
            "Ataque que envía SYN TCP sin completar el handshake",
            "Ataque que modifica tablas ARP",
            "Ataque que intercepta DNS"
        ],
        options_en: [
            "Attack that sends many UDP packets",
            "Attack that sends TCP SYN without completing the handshake",
            "Attack that modifies ARP tables",
            "Attack that intercepts DNS"
        ],
        correct: 1,
        explanation_es: "SYN flood envía muchas solicitudes TCP SYN sin completar el three-way handshake, agotando recursos del servidor.",
        explanation_en: "SYN flood sends many TCP SYN requests without completing the three-way handshake, exhausting server resources."
    },
    {
        module: 6,
        question_es: "¿Qué es beaconing en el contexto de malware?",
        question_en: "What is beaconing in the context of malware?",
        options_es: [
            "Luz de advertencia",
            "Comunicación periódica del malware con su servidor C2",
            "Tipo de cifrado",
            "Técnica de backup"
        ],
        options_en: [
            "Warning light",
            "Periodic communication of malware with its C2 server",
            "Type of encryption",
            "Backup technique"
        ],
        correct: 1,
        explanation_es: "Beaconing es la comunicación periódica que el malware mantiene con su servidor de comando y control.",
        explanation_en: "Beaconing is the periodic communication that malware maintains with its command and control server."
    },
    {
        module: 6,
        question_es: "¿Cuál es la diferencia entre IDS e IPS?",
        question_en: "What is the difference between IDS and IPS?",
        options_es: [
            "Son lo mismo",
            "IDS detecta y alerta; IPS además puede bloquear",
            "IPS es más antiguo",
            "IDS bloquea; IPS solo detecta"
        ],
        options_en: [
            "They are the same",
            "IDS detects and alerts; IPS can also block",
            "IPS is older",
            "IDS blocks; IPS only detects"
        ],
        correct: 1,
        explanation_es: "IDS (Intrusion Detection System) detecta y alerta; IPS (Intrusion Prevention System) puede además bloquear.",
        explanation_en: "IDS (Intrusion Detection System) detects and alerts; IPS (Intrusion Prevention System) can also block."
    },
    {
        module: 6,
        question_es: "¿Qué herramienta es estándar para análisis de paquetes de red?",
        question_en: "What tool is standard for network packet analysis?",
        options_es: ["Nmap", "Wireshark", "Metasploit", "Nessus"],
        options_en: ["Nmap", "Wireshark", "Metasploit", "Nessus"],
        correct: 1,
        explanation_es: "Wireshark es el analizador de protocolos de red más utilizado para captura y análisis de paquetes.",
        explanation_en: "Wireshark is the most used network protocol analyzer for packet capture and analysis."
    },

    // ==========================================
    // MÓDULO 7: Web Application Security Incidents
    // ==========================================
    {
        module: 7,
        question_es: "¿Cuál es la mejor defensa contra SQL Injection?",
        question_en: "What is the best defense against SQL Injection?",
        options_es: ["Firewall", "Prepared statements/Consultas parametrizadas", "Antivirus", "VPN"],
        options_en: ["Firewall", "Prepared statements/Parameterized queries", "Antivirus", "VPN"],
        correct: 1,
        explanation_es: "Prepared statements (consultas parametrizadas) separan el código SQL de los datos, previniendo inyección.",
        explanation_en: "Prepared statements (parameterized queries) separate SQL code from data, preventing injection."
    },
    {
        module: 7,
        question_es: "¿Qué tipo de XSS almacena el payload en el servidor?",
        question_en: "What type of XSS stores the payload on the server?",
        options_es: ["Reflected XSS", "Stored XSS", "DOM-based XSS", "Blind XSS"],
        options_en: ["Reflected XSS", "Stored XSS", "DOM-based XSS", "Blind XSS"],
        correct: 1,
        explanation_es: "Stored (Persistent) XSS almacena el script malicioso en el servidor y afecta a todos los usuarios.",
        explanation_en: "Stored (Persistent) XSS stores the malicious script on the server and affects all users."
    },
    {
        module: 7,
        question_es: "¿Qué es SSRF?",
        question_en: "What is SSRF?",
        options_es: [
            "Un tipo de XSS",
            "Server-Side Request Forgery - hacer que el servidor realice requests no autorizados",
            "Un protocolo seguro",
            "Un tipo de certificado"
        ],
        options_en: [
            "A type of XSS",
            "Server-Side Request Forgery - making the server perform unauthorized requests",
            "A secure protocol",
            "A type of certificate"
        ],
        correct: 1,
        explanation_es: "SSRF engaña al servidor para que realice requests a recursos internos o externos no autorizados.",
        explanation_en: "SSRF tricks the server into making requests to unauthorized internal or external resources."
    },
    {
        module: 7,
        question_es: "¿Qué previene ataques CSRF?",
        question_en: "What prevents CSRF attacks?",
        options_es: ["Antivirus", "CSRF tokens y SameSite cookies", "Firewall de red", "Cambiar contraseñas"],
        options_en: ["Antivirus", "CSRF tokens and SameSite cookies", "Network firewall", "Changing passwords"],
        correct: 1,
        explanation_es: "Los CSRF tokens únicos por sesión y las cookies con atributo SameSite previenen ataques CSRF.",
        explanation_en: "Unique CSRF tokens per session and cookies with SameSite attribute prevent CSRF attacks."
    },
    {
        module: 7,
        question_es: "¿Qué es un WAF?",
        question_en: "What is a WAF?",
        options_es: [
            "Wide Area Firewall",
            "Web Application Firewall - filtra tráfico HTTP malicioso",
            "Wireless Access Firewall",
            "Windows Application Firewall"
        ],
        options_en: [
            "Wide Area Firewall",
            "Web Application Firewall - filters malicious HTTP traffic",
            "Wireless Access Firewall",
            "Windows Application Firewall"
        ],
        correct: 1,
        explanation_es: "WAF (Web Application Firewall) filtra, monitorea y bloquea tráfico HTTP malicioso hacia aplicaciones web.",
        explanation_en: "WAF (Web Application Firewall) filters, monitors and blocks malicious HTTP traffic to web applications."
    },

    // ==========================================
    // MÓDULO 8: Cloud Security Incidents
    // ==========================================
    {
        module: 8,
        question_es: "En el modelo de responsabilidad compartida, ¿quién es responsable de la configuración de security groups?",
        question_en: "In the shared responsibility model, who is responsible for security group configuration?",
        options_es: ["Solo el proveedor cloud", "Solo el cliente", "Ambos", "Ninguno"],
        options_en: ["Only the cloud provider", "Only the customer", "Both", "Neither"],
        correct: 1,
        explanation_es: "El cliente es responsable de la configuración de security groups (seguridad EN la nube).",
        explanation_en: "The customer is responsible for security group configuration (security IN the cloud)."
    },
    {
        module: 8,
        question_es: "¿Qué servicio de AWS registra todas las llamadas a API?",
        question_en: "What AWS service logs all API calls?",
        options_es: ["CloudWatch", "CloudTrail", "GuardDuty", "Inspector"],
        options_en: ["CloudWatch", "CloudTrail", "GuardDuty", "Inspector"],
        correct: 1,
        explanation_es: "AWS CloudTrail registra todas las llamadas a API de AWS para auditoría y análisis de seguridad.",
        explanation_en: "AWS CloudTrail logs all AWS API calls for auditing and security analysis."
    },
    {
        module: 8,
        question_es: "¿Qué es Shadow IT?",
        question_en: "What is Shadow IT?",
        options_es: [
            "Servidores de backup",
            "Servicios cloud no autorizados usados por empleados",
            "Computación en la sombra",
            "Sistemas legacy"
        ],
        options_en: [
            "Backup servers",
            "Unauthorized cloud services used by employees",
            "Shadow computing",
            "Legacy systems"
        ],
        correct: 1,
        explanation_es: "Shadow IT son servicios cloud o aplicaciones usadas por empleados sin aprobación de IT/Seguridad.",
        explanation_en: "Shadow IT refers to cloud services or applications used by employees without IT/Security approval."
    },
    {
        module: 8,
        question_es: "¿Cuál es la amenaza de seguridad cloud más común?",
        question_en: "What is the most common cloud security threat?",
        options_es: ["Hackers externos", "Misconfiguration (configuración incorrecta)", "Desastres naturales", "Falla de hardware"],
        options_en: ["External hackers", "Misconfiguration", "Natural disasters", "Hardware failure"],
        correct: 1,
        explanation_es: "La misconfiguration es la amenaza más común en cloud (S3 buckets públicos, puertos abiertos, etc.).",
        explanation_en: "Misconfiguration is the most common threat in cloud (public S3 buckets, open ports, etc.)."
    },
    {
        module: 8,
        question_es: "¿Qué es CASB?",
        question_en: "What is CASB?",
        options_es: [
            "Cloud Access Security Broker - intermediario de políticas de seguridad",
            "Central Authentication Security Base",
            "Cloud Application Security Browser",
            "Certified Access Security Badge"
        ],
        options_en: [
            "Cloud Access Security Broker - security policy intermediary",
            "Central Authentication Security Base",
            "Cloud Application Security Browser",
            "Certified Access Security Badge"
        ],
        correct: 0,
        explanation_es: "CASB es un punto de aplicación de políticas de seguridad entre usuarios y servicios cloud.",
        explanation_en: "CASB is a security policy enforcement point between users and cloud services."
    },

    // ==========================================
    // MÓDULO 9: Insider Threats
    // ==========================================
    {
        module: 9,
        question_es: "¿Cuál NO es un tipo de insider threat?",
        question_en: "Which is NOT a type of insider threat?",
        options_es: ["Malicious insider", "Negligent insider", "External hacker", "Compromised insider"],
        options_en: ["Malicious insider", "Negligent insider", "External hacker", "Compromised insider"],
        correct: 2,
        explanation_es: "External hacker no es un insider threat. Los insiders son: malicious, negligent y compromised.",
        explanation_en: "External hacker is not an insider threat. Insiders are: malicious, negligent and compromised."
    },
    {
        module: 9,
        question_es: "¿Qué tecnología detecta comportamiento anómalo de usuarios?",
        question_en: "What technology detects anomalous user behavior?",
        options_es: ["Antivirus", "UEBA (User and Entity Behavior Analytics)", "Firewall", "VPN"],
        options_en: ["Antivirus", "UEBA (User and Entity Behavior Analytics)", "Firewall", "VPN"],
        correct: 1,
        explanation_es: "UEBA analiza el comportamiento normal de usuarios y detecta anomalías que pueden indicar amenazas.",
        explanation_en: "UEBA analyzes normal user behavior and detects anomalies that may indicate threats."
    },
    {
        module: 9,
        question_es: "¿Cuál es un indicador de posible insider threat?",
        question_en: "What is an indicator of a possible insider threat?",
        options_es: [
            "Llegar temprano al trabajo",
            "Acceso a datos fuera del alcance de su rol",
            "Tomar vacaciones",
            "Completar proyectos a tiempo"
        ],
        options_en: [
            "Arriving early to work",
            "Accessing data outside the scope of their role",
            "Taking vacations",
            "Completing projects on time"
        ],
        correct: 1,
        explanation_es: "Acceder a datos que no corresponden a su rol es un red flag de insider threat.",
        explanation_en: "Accessing data that doesn't correspond to their role is a red flag for insider threat."
    },
    {
        module: 9,
        question_es: "¿Qué principio divide tareas críticas entre múltiples personas?",
        question_en: "What principle divides critical tasks among multiple people?",
        options_es: ["Least privilege", "Separation of duties", "Need to know", "Defense in depth"],
        options_en: ["Least privilege", "Separation of duties", "Need to know", "Defense in depth"],
        correct: 1,
        explanation_es: "Separation of duties divide las tareas críticas entre varias personas para prevenir fraude.",
        explanation_en: "Separation of duties divides critical tasks among several people to prevent fraud."
    },
    {
        module: 9,
        question_es: "Al investigar un insider threat, ¿con quién se debe coordinar?",
        question_en: "When investigating an insider threat, who should you coordinate with?",
        options_es: ["Solo con IT", "HR y Legal además de IT/Security", "Solo con el CEO", "Con la prensa"],
        options_en: ["Only IT", "HR and Legal in addition to IT/Security", "Only the CEO", "With the press"],
        correct: 1,
        explanation_es: "Las investigaciones de insider threat requieren coordinación con HR y Legal para proteger derechos.",
        explanation_en: "Insider threat investigations require coordination with HR and Legal to protect rights."
    },

    // ==========================================
    // MÓDULO 10: Endpoint Security Incidents
    // ==========================================
    {
        module: 10,
        question_es: "¿Qué es EDR?",
        question_en: "What is EDR?",
        options_es: [
            "Email Detection and Response",
            "Endpoint Detection and Response",
            "External Data Recovery",
            "Enterprise Data Replication"
        ],
        options_en: [
            "Email Detection and Response",
            "Endpoint Detection and Response",
            "External Data Recovery",
            "Enterprise Data Replication"
        ],
        correct: 1,
        explanation_es: "EDR (Endpoint Detection and Response) detecta, investiga y responde a amenazas en endpoints.",
        explanation_en: "EDR (Endpoint Detection and Response) detects, investigates and responds to endpoint threats."
    },
    {
        module: 10,
        question_es: "¿Qué son LOLBins?",
        question_en: "What are LOLBins?",
        options_es: [
            "Tipo de malware",
            "Living off the Land Binaries - herramientas legítimas usadas por atacantes",
            "Archivos de log",
            "Bibliotecas de Linux"
        ],
        options_en: [
            "Type of malware",
            "Living off the Land Binaries - legitimate tools used by attackers",
            "Log files",
            "Linux libraries"
        ],
        correct: 1,
        explanation_es: "LOLBins son binarios legítimos del sistema (PowerShell, cmd, wmic) que los atacantes usan para evitar detección.",
        explanation_en: "LOLBins are legitimate system binaries (PowerShell, cmd, wmic) that attackers use to evade detection."
    },
    {
        module: 10,
        question_es: "¿Qué técnica usa hashes NTLM robados para autenticarse?",
        question_en: "What technique uses stolen NTLM hashes to authenticate?",
        options_es: ["Pass-the-Ticket", "Pass-the-Hash", "Golden Ticket", "Silver Ticket"],
        options_en: ["Pass-the-Ticket", "Pass-the-Hash", "Golden Ticket", "Silver Ticket"],
        correct: 1,
        explanation_es: "Pass-the-Hash usa hashes NTLM robados para autenticarse sin necesidad de conocer la contraseña.",
        explanation_en: "Pass-the-Hash uses stolen NTLM hashes to authenticate without needing to know the password."
    },
    {
        module: 10,
        question_es: "¿Qué herramienta es conocida por extraer credenciales de memoria Windows?",
        question_en: "What tool is known for extracting credentials from Windows memory?",
        options_es: ["Nmap", "Wireshark", "Mimikatz", "Burp Suite"],
        options_en: ["Nmap", "Wireshark", "Mimikatz", "Burp Suite"],
        correct: 2,
        explanation_es: "Mimikatz es la herramienta más conocida para extraer credenciales de memoria Windows.",
        explanation_en: "Mimikatz is the most well-known tool for extracting credentials from Windows memory."
    },
    {
        module: 10,
        question_es: "¿Qué proporciona Sysmon en Windows?",
        question_en: "What does Sysmon provide in Windows?",
        options_es: ["Antivirus", "Logging detallado de actividad del sistema", "Firewall", "Backup automático"],
        options_en: ["Antivirus", "Detailed system activity logging", "Firewall", "Automatic backup"],
        correct: 1,
        explanation_es: "Sysmon proporciona logging detallado: creación de procesos, conexiones de red, cambios de archivos.",
        explanation_en: "Sysmon provides detailed logging: process creation, network connections, file changes."
    },
    {
        module: 10,
        question_es: "¿Cuál es la primera acción de contención para un endpoint comprometido?",
        question_en: "What is the first containment action for a compromised endpoint?",
        options_es: ["Formatear", "Aislar de la red (network containment)", "Apagar", "Actualizar antivirus"],
        options_en: ["Format", "Isolate from network (network containment)", "Shut down", "Update antivirus"],
        correct: 1,
        explanation_es: "La primera acción es aislar el endpoint de la red para evitar propagación, manteniendo el sistema encendido.",
        explanation_en: "The first action is to isolate the endpoint from the network to prevent spread, keeping the system on."
    }
];

// Exportar para uso en la aplicación
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { bilingualQuestions };
}
