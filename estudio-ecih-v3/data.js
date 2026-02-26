// =============================================
// ECIH v3 - BASE DE DATOS DE ESTUDIO
// =============================================

// RESÚMENES DE MÓDULOS
const moduleContent = {
    1: {
        title: "Introduction to Incident Handling and Response",
        content: `
        <h2>Conceptos Fundamentales</h2>
        <h3>¿Qué es un Incidente de Seguridad?</h3>
        <ul>
            <li>Un <span class="key-term">incidente de seguridad</span> es un evento que compromete la confidencialidad, integridad o disponibilidad (CIA) de los activos de información</li>
            <li>Diferencia entre <span class="key-term">evento</span> (ocurrencia observable) e <span class="key-term">incidente</span> (evento con impacto negativo)</li>
            <li>Los incidentes pueden ser intencionales (ataques) o no intencionales (errores)</li>
        </ul>

        <h3>Tipos de Incidentes</h3>
        <ul>
            <li><strong>Malware:</strong> Virus, worms, trojans, ransomware, spyware</li>
            <li><strong>Phishing/Social Engineering:</strong> Ataques de ingeniería social</li>
            <li><strong>DoS/DDoS:</strong> Denegación de servicio</li>
            <li><strong>Unauthorized Access:</strong> Acceso no autorizado</li>
            <li><strong>Data Breach:</strong> Fuga de datos</li>
            <li><strong>Insider Threats:</strong> Amenazas internas</li>
        </ul>

        <h2>Incident Handling and Response (IH&R)</h2>
        <h3>Definición</h3>
        <ul>
            <li><span class="key-term">Incident Handling</span>: Proceso de detectar, analizar, contener y recuperarse de incidentes</li>
            <li><span class="key-term">Incident Response</span>: Enfoque organizado para gestionar las consecuencias de un incidente</li>
            <li>Objetivo: Minimizar daño y reducir tiempo/costo de recuperación</li>
        </ul>

        <h3>Incident Response Team (IRT/CSIRT/CERT)</h3>
        <ul>
            <li><span class="key-term">CSIRT</span>: Computer Security Incident Response Team</li>
            <li><span class="key-term">CERT</span>: Computer Emergency Response Team</li>
            <li><span class="key-term">SOC</span>: Security Operations Center</li>
            <li>Roles: Incident Manager, Triage Analyst, Forensic Analyst, Threat Researcher</li>
        </ul>

        <h2>Frameworks y Estándares</h2>
        <ul>
            <li><span class="key-term">NIST SP 800-61</span>: Computer Security Incident Handling Guide</li>
            <li><span class="key-term">SANS</span>: Incident Handler's Handbook</li>
            <li><span class="key-term">ISO 27035</span>: Information Security Incident Management</li>
            <li><span class="key-term">ITIL</span>: Incident Management Process</li>
        </ul>

        <h2>Importancia del IH&R</h2>
        <ul>
            <li>Reduce el impacto financiero de los incidentes</li>
            <li>Protege la reputación de la organización</li>
            <li>Cumplimiento regulatorio (GDPR, HIPAA, PCI-DSS)</li>
            <li>Mejora continua de la postura de seguridad</li>
            <li>Preservación de evidencia para acciones legales</li>
        </ul>
        `
    },
    2: {
        title: "Incident Handling and Response Process",
        content: `
        <h2>Fases del Proceso IH&R (NIST)</h2>

        <h3>1. Preparation (Preparación)</h3>
        <ul>
            <li>Desarrollar <span class="key-term">políticas y procedimientos</span> de respuesta a incidentes</li>
            <li>Crear y entrenar al <span class="key-term">Incident Response Team</span></li>
            <li>Implementar herramientas y tecnologías necesarias</li>
            <li>Establecer <span class="key-term">comunicación</span> y escalamiento</li>
            <li>Crear <span class="key-term">playbooks</span> y runbooks</li>
            <li>Realizar ejercicios de simulación (<span class="key-term">tabletop exercises</span>)</li>
        </ul>

        <h3>2. Detection & Analysis (Detección y Análisis)</h3>
        <ul>
            <li><span class="key-term">Detección</span>: Identificar posibles incidentes mediante alertas, logs, reportes</li>
            <li><span class="key-term">Triage</span>: Priorizar incidentes según severidad e impacto</li>
            <li>Análisis de <span class="key-term">Indicadores de Compromiso (IoCs)</span></li>
            <li>Correlación de eventos usando <span class="key-term">SIEM</span></li>
            <li>Documentar hallazgos iniciales</li>
            <li>Clasificación y categorización del incidente</li>
        </ul>

        <h3>3. Containment, Eradication & Recovery</h3>
        <ul>
            <li><strong>Containment (Contención):</strong>
                <ul>
                    <li>Short-term: Aislar sistemas afectados inmediatamente</li>
                    <li>Long-term: Implementar soluciones temporales</li>
                </ul>
            </li>
            <li><strong>Eradication (Erradicación):</strong>
                <ul>
                    <li>Eliminar malware y artefactos maliciosos</li>
                    <li>Identificar y cerrar vulnerabilidades</li>
                    <li>Remover accesos no autorizados</li>
                </ul>
            </li>
            <li><strong>Recovery (Recuperación):</strong>
                <ul>
                    <li>Restaurar sistemas desde backups limpios</li>
                    <li>Validar integridad de sistemas</li>
                    <li>Monitoreo intensivo post-recuperación</li>
                </ul>
            </li>
        </ul>

        <h3>4. Post-Incident Activity (Actividad Post-Incidente)</h3>
        <ul>
            <li><span class="key-term">Lessons Learned</span>: Reunión de lecciones aprendidas</li>
            <li>Crear <span class="key-term">Incident Report</span> detallado</li>
            <li>Actualizar políticas y procedimientos</li>
            <li>Mejorar controles de seguridad</li>
            <li>Retención de evidencia según políticas</li>
        </ul>

        <h2>Documentación del Incidente</h2>
        <ul>
            <li><span class="key-term">Chain of Custody</span>: Cadena de custodia de evidencia</li>
            <li>Timeline del incidente</li>
            <li>Acciones tomadas y por quién</li>
            <li>Sistemas afectados</li>
            <li>Impacto del incidente</li>
        </ul>

        <h2>Métricas de IH&R</h2>
        <ul>
            <li><span class="key-term">MTTD</span>: Mean Time to Detect</li>
            <li><span class="key-term">MTTR</span>: Mean Time to Respond/Recover</li>
            <li><span class="key-term">MTTC</span>: Mean Time to Contain</li>
            <li>Número de incidentes por categoría</li>
            <li>Costo por incidente</li>
        </ul>
        `
    },
    3: {
        title: "First Response",
        content: `
        <h2>Rol del First Responder</h2>
        <ul>
            <li>Primera persona en llegar a la escena del incidente</li>
            <li>Responsable de <span class="key-term">preservar evidencia</span></li>
            <li>Documentar el estado inicial del sistema</li>
            <li>No contaminar la escena</li>
        </ul>

        <h2>Principios de First Response</h2>
        <h3>Regla de Oro</h3>
        <ul>
            <li><span class="key-term">"Do no harm"</span> - No causar más daño</li>
            <li>Preservar la integridad de la evidencia</li>
            <li>Documentar TODO lo que se hace</li>
            <li>Mantener la cadena de custodia</li>
        </ul>

        <h3>Orden de Volatilidad</h3>
        <p>Recolectar evidencia del más al menos volátil:</p>
        <ul>
            <li>1. <span class="key-term">Registros CPU, Cache</span></li>
            <li>2. <span class="key-term">Memoria RAM</span></li>
            <li>3. <span class="key-term">Estado de red</span> (conexiones activas)</li>
            <li>4. <span class="key-term">Procesos en ejecución</span></li>
            <li>5. <span class="key-term">Disco duro</span></li>
            <li>6. <span class="key-term">Medios removibles</span></li>
            <li>7. <span class="key-term">Logs remotos</span></li>
        </ul>

        <h2>Acciones del First Responder</h2>
        <h3>Qué HACER</h3>
        <ul>
            <li>Documentar fecha, hora y zona horaria</li>
            <li>Fotografiar la escena y pantallas</li>
            <li>Anotar personas presentes</li>
            <li>Identificar y asegurar el perímetro</li>
            <li>Recolectar evidencia volátil primero</li>
            <li>Crear <span class="key-term">hashes criptográficos</span> (MD5, SHA-256) de evidencia</li>
        </ul>

        <h3>Qué NO HACER</h3>
        <ul>
            <li>NO apagar el sistema (perderás RAM)</li>
            <li>NO ejecutar programas en el sistema afectado</li>
            <li>NO confiar en herramientas del sistema comprometido</li>
            <li>NO modificar timestamps de archivos</li>
            <li>NO trabajar sin documentar</li>
        </ul>

        <h2>Herramientas de First Response</h2>
        <ul>
            <li><span class="key-term">FTK Imager</span>: Adquisición de imágenes forenses</li>
            <li><span class="key-term">Volatility</span>: Análisis de memoria RAM</li>
            <li><span class="key-term">WinPMEM/LiME</span>: Captura de memoria</li>
            <li><span class="key-term">Sysinternals Suite</span>: Herramientas de análisis Windows</li>
            <li><span class="key-term">netstat, ps, lsof</span>: Comandos de sistema</li>
        </ul>

        <h2>Adquisición de Evidencia</h2>
        <h3>Tipos de Adquisición</h3>
        <ul>
            <li><span class="key-term">Bit-stream copy</span>: Copia exacta bit a bit</li>
            <li><span class="key-term">Logical copy</span>: Copia de archivos y carpetas</li>
            <li><span class="key-term">Sparse copy</span>: Solo datos relevantes</li>
        </ul>

        <h3>Chain of Custody</h3>
        <ul>
            <li>Documentar quién, qué, cuándo, dónde, por qué</li>
            <li>Registro de cada transferencia de evidencia</li>
            <li>Almacenamiento seguro y controlado</li>
            <li>Integridad verificable mediante hashes</li>
        </ul>

        <h2>Manejo de Computadoras</h2>
        <h3>Si está ENCENDIDA</h3>
        <ul>
            <li>Fotografiar pantalla y documentar programas en ejecución</li>
            <li>Si muestra screensaver: mover mouse <strong>sin</strong> presionar botones</li>
            <li><span class="key-term">Desconectar inmediatamente</span> si hay procesos destructivos</li>
            <li><span class="key-term">NO desconectar</span> si hay datos evidenciales visibles</li>
            <li>Recolectar datos volátiles ANTES de apagar</li>
        </ul>

        <h3>Si está APAGADA</h3>
        <ul>
            <li><span class="key-term">NO encenderla</span> - podría alterar evidencia</li>
            <li>Desensamblar y empaquetar con cuidado</li>
            <li>Desconectar todos los cables y etiquetarlos</li>
            <li>Verificar y asegurar medios removibles</li>
        </ul>

        <h3>Smartphones/Dispositivos Móviles</h3>
        <ul>
            <li>Si está <strong>OFF</strong>: NO encender, recolectar cables, buscar backups</li>
            <li>Si está <strong>ON</strong>: mantenerlo cargado, fotografiar pantalla</li>
            <li>Usar bolsa Faraday para bloquear señales remotas</li>
        </ul>

        <h2>Procedimientos de Apagado por SO</h2>
        <ul>
            <li><strong>Windows:</strong> Start → Power → Shut down</li>
            <li><strong>Linux (root):</strong> sync;sync;halt</li>
            <li><strong>macOS:</strong> Apple menu → Shut Down</li>
        </ul>
        `
    },
    4: {
        title: "Handling and Responding to Malware Incidents",
        content: `
        <h2>Tipos de Malware</h2>
        <ul>
            <li><span class="key-term">Virus</span>: Se adjunta a archivos legítimos, requiere acción del usuario</li>
            <li><span class="key-term">Worm</span>: Se propaga automáticamente por la red</li>
            <li><span class="key-term">Trojan</span>: Se disfraza de software legítimo</li>
            <li><span class="key-term">Ransomware</span>: Cifra archivos y pide rescate</li>
            <li><span class="key-term">Spyware</span>: Recolecta información sin consentimiento</li>
            <li><span class="key-term">Rootkit</span>: Oculta su presencia en el sistema</li>
            <li><span class="key-term">Botnet</span>: Red de sistemas comprometidos</li>
            <li><span class="key-term">RAT</span>: Remote Access Trojan</li>
            <li><span class="key-term">Fileless Malware</span>: Opera en memoria sin archivos</li>
        </ul>

        <h2>Indicadores de Infección (IoCs)</h2>
        <ul>
            <li>Rendimiento lento del sistema</li>
            <li>Conexiones de red inusuales</li>
            <li>Procesos desconocidos</li>
            <li>Archivos modificados o nuevos sospechosos</li>
            <li>Cambios en el registro de Windows</li>
            <li>Alertas de antivirus/EDR</li>
            <li>Tráfico a IPs/dominios maliciosos conocidos</li>
        </ul>

        <h2>Proceso de Respuesta a Malware</h2>
        <h3>1. Identificación</h3>
        <ul>
            <li>Analizar alertas de seguridad</li>
            <li>Identificar sistemas afectados</li>
            <li>Determinar tipo de malware</li>
            <li>Buscar <span class="key-term">IoCs</span> en otros sistemas</li>
        </ul>

        <h3>2. Contención</h3>
        <ul>
            <li>Aislar sistemas infectados de la red</li>
            <li>Bloquear IPs/dominios C2</li>
            <li>Deshabilitar cuentas comprometidas</li>
            <li>Preservar evidencia antes de limpiar</li>
        </ul>

        <h3>3. Erradicación</h3>
        <ul>
            <li>Eliminar malware de todos los sistemas</li>
            <li>Limpiar mecanismos de persistencia</li>
            <li>Parchear vulnerabilidades explotadas</li>
            <li>Cambiar credenciales comprometidas</li>
        </ul>

        <h3>4. Recuperación</h3>
        <ul>
            <li>Restaurar desde backups verificados</li>
            <li>Reinstalar sistemas si es necesario</li>
            <li>Validar integridad</li>
            <li>Monitoreo intensivo</li>
        </ul>

        <h2>Análisis de Malware</h2>
        <h3>Análisis Estático</h3>
        <ul>
            <li>Examinar código sin ejecutar</li>
            <li>Strings, imports, exports</li>
            <li>Herramientas: <span class="key-term">PEiD, PEview, strings, IDA Pro</span></li>
        </ul>

        <h3>Análisis Dinámico</h3>
        <ul>
            <li>Ejecutar en entorno controlado (sandbox)</li>
            <li>Observar comportamiento</li>
            <li>Herramientas: <span class="key-term">Cuckoo Sandbox, Any.run, Process Monitor</span></li>
        </ul>

        <h2>Herramientas Anti-Malware</h2>
        <ul>
            <li><span class="key-term">VirusTotal</span>: Análisis multi-motor</li>
            <li><span class="key-term">YARA</span>: Reglas de detección de malware</li>
            <li><span class="key-term">Malwarebytes</span>: Eliminación de malware</li>
            <li><span class="key-term">EDR Solutions</span>: CrowdStrike, Carbon Black, SentinelOne</li>
        </ul>
        `
    },
    5: {
        title: "Handling and Responding to Email Security Incidents",
        content: `
        <h2>Tipos de Amenazas por Email</h2>
        <ul>
            <li><span class="key-term">Phishing</span>: Suplantación para robar credenciales</li>
            <li><span class="key-term">Spear Phishing</span>: Phishing dirigido a individuos específicos</li>
            <li><span class="key-term">Whaling</span>: Phishing dirigido a ejecutivos</li>
            <li><span class="key-term">BEC</span> (Business Email Compromise): Fraude empresarial</li>
            <li><span class="key-term">Spam</span>: Correo no solicitado masivo</li>
            <li><span class="key-term">Malspam</span>: Spam con malware adjunto</li>
            <li><span class="key-term">Email Spoofing</span>: Falsificación de remitente</li>
        </ul>

        <h2>Indicadores de Phishing</h2>
        <ul>
            <li>Remitente sospechoso o dominio similar</li>
            <li>Urgencia o presión para actuar</li>
            <li>Enlaces a dominios falsos</li>
            <li>Errores gramaticales u ortográficos</li>
            <li>Solicitud de información sensible</li>
            <li>Adjuntos inesperados</li>
            <li>Inconsistencias en headers del email</li>
        </ul>

        <h2>Análisis de Email Headers</h2>
        <ul>
            <li><span class="key-term">From</span>: Puede ser falsificado fácilmente</li>
            <li><span class="key-term">Return-Path</span>: Dirección real de rebote</li>
            <li><span class="key-term">Received</span>: Ruta del mensaje (leer de abajo hacia arriba)</li>
            <li><span class="key-term">X-Originating-IP</span>: IP de origen</li>
            <li><span class="key-term">Message-ID</span>: Identificador único</li>
        </ul>

        <h2>Tecnologías de Protección</h2>
        <h3>Autenticación de Email</h3>
        <ul>
            <li><span class="key-term">SPF</span> (Sender Policy Framework): Verifica servidores autorizados</li>
            <li><span class="key-term">DKIM</span> (DomainKeys Identified Mail): Firma digital del mensaje</li>
            <li><span class="key-term">DMARC</span> (Domain-based Message Authentication): Política de autenticación</li>
        </ul>

        <h3>Soluciones de Seguridad</h3>
        <ul>
            <li><span class="key-term">Email Gateway</span>: Filtrado de correo</li>
            <li><span class="key-term">Sandboxing</span>: Análisis de adjuntos</li>
            <li><span class="key-term">URL Rewriting</span>: Verificación de enlaces</li>
            <li><span class="key-term">Anti-spam filters</span></li>
        </ul>

        <h2>Proceso de Respuesta</h2>
        <h3>1. Detección</h3>
        <ul>
            <li>Reportes de usuarios</li>
            <li>Alertas de gateway de email</li>
            <li>Detección de IoCs</li>
        </ul>

        <h3>2. Análisis</h3>
        <ul>
            <li>Examinar headers completos</li>
            <li>Analizar URLs (sin hacer clic)</li>
            <li>Analizar adjuntos en sandbox</li>
            <li>Identificar víctimas potenciales</li>
        </ul>

        <h3>3. Contención</h3>
        <ul>
            <li>Bloquear remitente/dominio</li>
            <li>Eliminar emails de buzones</li>
            <li>Bloquear URLs maliciosas</li>
            <li>Restablecer credenciales comprometidas</li>
        </ul>

        <h3>4. Recuperación</h3>
        <ul>
            <li>Comunicar a usuarios afectados</li>
            <li>Actualizar filtros de email</li>
            <li>Reforzar awareness training</li>
        </ul>

        <h2>Herramientas de Análisis</h2>
        <ul>
            <li><span class="key-term">MXToolbox</span>: Análisis de headers</li>
            <li><span class="key-term">PhishTool</span>: Análisis de phishing</li>
            <li><span class="key-term">URLscan.io</span>: Análisis de URLs</li>
            <li><span class="key-term">VirusTotal</span>: Análisis de adjuntos</li>
        </ul>
        `
    },
    6: {
        title: "Handling and Responding to Network Security Incidents",
        content: `
        <h2>Tipos de Incidentes de Red</h2>
        <ul>
            <li><span class="key-term">DoS/DDoS</span>: Denegación de servicio</li>
            <li><span class="key-term">Man-in-the-Middle (MitM)</span>: Interceptación de tráfico</li>
            <li><span class="key-term">ARP Spoofing/Poisoning</span>: Manipulación de tablas ARP</li>
            <li><span class="key-term">DNS Spoofing</span>: Respuestas DNS falsas</li>
            <li><span class="key-term">Session Hijacking</span>: Robo de sesión</li>
            <li><span class="key-term">Unauthorized Access</span>: Intrusión no autorizada</li>
            <li><span class="key-term">Data Exfiltration</span>: Robo de datos</li>
            <li><span class="key-term">Lateral Movement</span>: Movimiento dentro de la red</li>
        </ul>

        <h2>DoS y DDoS</h2>
        <h3>Tipos de Ataques</h3>
        <ul>
            <li><span class="key-term">Volumetric</span>: UDP flood, ICMP flood, amplification</li>
            <li><span class="key-term">Protocol</span>: SYN flood, Ping of Death, Smurf</li>
            <li><span class="key-term">Application Layer</span>: HTTP flood, Slowloris</li>
        </ul>

        <h3>Mitigación DDoS</h3>
        <ul>
            <li>Rate limiting</li>
            <li>Blackholing/Sinkholing</li>
            <li>Scrubbing centers</li>
            <li>CDN con protección DDoS</li>
            <li>Geo-blocking</li>
        </ul>

        <h2>Detección de Incidentes de Red</h2>
        <h3>Herramientas de Monitoreo</h3>
        <ul>
            <li><span class="key-term">IDS/IPS</span>: Snort, Suricata</li>
            <li><span class="key-term">SIEM</span>: Splunk, QRadar, ELK</li>
            <li><span class="key-term">Network TAP</span>: Captura de tráfico</li>
            <li><span class="key-term">NetFlow/sFlow</span>: Análisis de flujos</li>
            <li><span class="key-term">Wireshark</span>: Análisis de paquetes</li>
        </ul>

        <h3>Indicadores de Compromiso</h3>
        <ul>
            <li>Tráfico inusual a horas anormales</li>
            <li>Conexiones a IPs/dominios maliciosos</li>
            <li>Picos de tráfico anormales</li>
            <li>Escaneo de puertos</li>
            <li>Beaconing (comunicación periódica C2)</li>
            <li>Transferencias de datos grandes</li>
        </ul>

        <h2>Análisis de Tráfico</h2>
        <ul>
            <li><span class="key-term">Packet Capture (PCAP)</span>: Captura completa de paquetes</li>
            <li><span class="key-term">Deep Packet Inspection</span>: Análisis de contenido</li>
            <li><span class="key-term">Protocol Analysis</span>: Análisis por protocolo</li>
            <li><span class="key-term">Behavioral Analysis</span>: Detección de anomalías</li>
        </ul>

        <h2>Proceso de Respuesta</h2>
        <h3>Contención</h3>
        <ul>
            <li>Bloquear IPs maliciosas en firewall</li>
            <li>Aislar segmentos de red afectados</li>
            <li>Revocar accesos comprometidos</li>
            <li>Implementar ACLs temporales</li>
        </ul>

        <h3>Erradicación</h3>
        <ul>
            <li>Eliminar herramientas del atacante</li>
            <li>Cerrar puertas traseras</li>
            <li>Parchear vulnerabilidades</li>
        </ul>

        <h3>Recuperación</h3>
        <ul>
            <li>Restaurar configuraciones seguras</li>
            <li>Verificar integridad de sistemas</li>
            <li>Monitoreo intensivo post-incidente</li>
        </ul>

        <h2>Herramientas Clave</h2>
        <ul>
            <li><span class="key-term">Wireshark</span>: Análisis de paquetes</li>
            <li><span class="key-term">tcpdump</span>: Captura de línea de comandos</li>
            <li><span class="key-term">Zeek (Bro)</span>: Monitoreo de red</li>
            <li><span class="key-term">NetworkMiner</span>: Análisis forense de red</li>
            <li><span class="key-term">nmap</span>: Escaneo de red</li>
        </ul>
        `
    },
    7: {
        title: "Handling and Responding to Web Application Security Incidents",
        content: `
        <h2>OWASP Top 10</h2>
        <ul>
            <li><span class="key-term">A01: Broken Access Control</span>: Control de acceso deficiente</li>
            <li><span class="key-term">A02: Cryptographic Failures</span>: Fallos criptográficos</li>
            <li><span class="key-term">A03: Injection</span>: SQL, NoSQL, OS, LDAP injection</li>
            <li><span class="key-term">A04: Insecure Design</span>: Diseño inseguro</li>
            <li><span class="key-term">A05: Security Misconfiguration</span>: Configuración incorrecta</li>
            <li><span class="key-term">A06: Vulnerable Components</span>: Componentes vulnerables</li>
            <li><span class="key-term">A07: Authentication Failures</span>: Fallos de autenticación</li>
            <li><span class="key-term">A08: Software and Data Integrity</span>: Fallos de integridad</li>
            <li><span class="key-term">A09: Security Logging Failures</span>: Fallos en logs</li>
            <li><span class="key-term">A10: SSRF</span>: Server-Side Request Forgery</li>
        </ul>

        <h2>Ataques Comunes</h2>
        <h3>SQL Injection</h3>
        <ul>
            <li>Inyección de código SQL malicioso</li>
            <li>Permite acceso no autorizado a BD</li>
            <li>Prevención: <span class="key-term">Prepared statements, input validation</span></li>
        </ul>

        <h3>Cross-Site Scripting (XSS)</h3>
        <ul>
            <li><span class="key-term">Stored XSS</span>: Script almacenado en servidor</li>
            <li><span class="key-term">Reflected XSS</span>: Script en URL reflejado</li>
            <li><span class="key-term">DOM-based XSS</span>: Manipulación del DOM</li>
            <li>Prevención: <span class="key-term">Output encoding, CSP, input validation</span></li>
        </ul>

        <h3>Cross-Site Request Forgery (CSRF)</h3>
        <ul>
            <li>Forzar acciones no autorizadas</li>
            <li>Prevención: <span class="key-term">CSRF tokens, SameSite cookies</span></li>
        </ul>

        <h2>Indicadores de Ataque Web</h2>
        <ul>
            <li>Parámetros inusuales en URLs</li>
            <li>Patrones de SQL injection en logs</li>
            <li>Múltiples errores 4xx/5xx</li>
            <li>Acceso a archivos sensibles</li>
            <li>Directory traversal attempts (../)</li>
            <li>User-Agent strings sospechosos</li>
        </ul>

        <h2>Análisis de Logs Web</h2>
        <ul>
            <li><span class="key-term">Access logs</span>: Requests HTTP</li>
            <li><span class="key-term">Error logs</span>: Errores del servidor</li>
            <li><span class="key-term">Application logs</span>: Logs de la aplicación</li>
            <li>Buscar patrones de ataque conocidos</li>
            <li>Correlacionar con otros eventos</li>
        </ul>

        <h2>Proceso de Respuesta</h2>
        <h3>Detección</h3>
        <ul>
            <li>WAF alerts</li>
            <li>Análisis de logs</li>
            <li>Reportes de usuarios</li>
            <li>Monitoreo de integridad</li>
        </ul>

        <h3>Contención</h3>
        <ul>
            <li>Bloquear IPs atacantes</li>
            <li>Implementar reglas WAF</li>
            <li>Deshabilitar funcionalidad vulnerable</li>
            <li>Revocar sesiones comprometidas</li>
        </ul>

        <h3>Erradicación</h3>
        <ul>
            <li>Parchear vulnerabilidades</li>
            <li>Eliminar código malicioso inyectado</li>
            <li>Limpiar datos comprometidos</li>
        </ul>

        <h2>Herramientas</h2>
        <ul>
            <li><span class="key-term">WAF</span>: ModSecurity, AWS WAF, Cloudflare</li>
            <li><span class="key-term">DAST</span>: OWASP ZAP, Burp Suite</li>
            <li><span class="key-term">SAST</span>: SonarQube, Checkmarx</li>
            <li><span class="key-term">Log Analysis</span>: GoAccess, AWStats</li>
        </ul>
        `
    },
    8: {
        title: "Handling and Responding to Cloud Security Incidents",
        content: `
        <h2>Modelos de Servicio Cloud</h2>
        <ul>
            <li><span class="key-term">IaaS</span> (Infrastructure as a Service): AWS EC2, Azure VMs</li>
            <li><span class="key-term">PaaS</span> (Platform as a Service): Heroku, Azure App Service</li>
            <li><span class="key-term">SaaS</span> (Software as a Service): Office 365, Salesforce</li>
        </ul>

        <h2>Modelo de Responsabilidad Compartida</h2>
        <ul>
            <li><span class="key-term">Cloud Provider</span>: Seguridad DE la nube (infraestructura)</li>
            <li><span class="key-term">Cliente</span>: Seguridad EN la nube (datos, acceso, configuración)</li>
            <li>La responsabilidad varía según el modelo (IaaS, PaaS, SaaS)</li>
        </ul>

        <h2>Amenazas Cloud Específicas</h2>
        <ul>
            <li><span class="key-term">Misconfiguration</span>: S3 buckets públicos, puertos abiertos</li>
            <li><span class="key-term">Insecure APIs</span>: APIs mal protegidas</li>
            <li><span class="key-term">Account Hijacking</span>: Robo de credenciales cloud</li>
            <li><span class="key-term">Insider Threats</span>: Amenazas internas</li>
            <li><span class="key-term">Data Breach</span>: Fuga de datos</li>
            <li><span class="key-term">Shadow IT</span>: Servicios cloud no autorizados</li>
            <li><span class="key-term">Cryptojacking</span>: Minería no autorizada</li>
        </ul>

        <h2>Detección en Cloud</h2>
        <h3>Logs y Monitoreo</h3>
        <ul>
            <li><span class="key-term">AWS CloudTrail</span>: Logs de API AWS</li>
            <li><span class="key-term">Azure Activity Log</span>: Eventos de Azure</li>
            <li><span class="key-term">GCP Cloud Audit Logs</span>: Logs de GCP</li>
            <li><span class="key-term">CloudWatch/Azure Monitor</span>: Métricas y alertas</li>
        </ul>

        <h3>Herramientas de Seguridad Cloud</h3>
        <ul>
            <li><span class="key-term">CSPM</span>: Cloud Security Posture Management</li>
            <li><span class="key-term">CASB</span>: Cloud Access Security Broker</li>
            <li><span class="key-term">CWPP</span>: Cloud Workload Protection Platform</li>
            <li><span class="key-term">AWS GuardDuty</span>: Detección de amenazas AWS</li>
            <li><span class="key-term">Azure Sentinel</span>: SIEM cloud de Azure</li>
        </ul>

        <h2>Proceso de Respuesta Cloud</h2>
        <h3>Desafíos Específicos</h3>
        <ul>
            <li>Recursos efímeros (auto-scaling)</li>
            <li>Acceso limitado a infraestructura</li>
            <li>Múltiples regiones/zonas</li>
            <li>Datos distribuidos</li>
        </ul>

        <h3>Contención</h3>
        <ul>
            <li>Revocar credenciales comprometidas (API keys, access keys)</li>
            <li>Modificar security groups/NSGs</li>
            <li>Aislar recursos afectados</li>
            <li>Deshabilitar servicios comprometidos</li>
        </ul>

        <h3>Evidencia Forense</h3>
        <ul>
            <li>Snapshots de VMs antes de terminar</li>
            <li>Exportar logs de CloudTrail/Activity Log</li>
            <li>Preservar configuraciones</li>
            <li>Documentar estado de recursos</li>
        </ul>

        <h2>Mejores Prácticas</h2>
        <ul>
            <li><span class="key-term">MFA</span> en todas las cuentas</li>
            <li><span class="key-term">Least Privilege</span>: Mínimo privilegio</li>
            <li><span class="key-term">Encryption</span>: Datos en reposo y tránsito</li>
            <li><span class="key-term">Logging</span>: Habilitar todos los logs</li>
            <li><span class="key-term">Regular Audits</span>: Auditorías de configuración</li>
        </ul>

        <h2>Herramientas por Proveedor</h2>
        <h3>AWS</h3>
        <ul>
            <li><span class="key-term">GuardDuty</span>: Detección de amenazas</li>
            <li><span class="key-term">CloudTrail</span>: Auditoría de API calls</li>
            <li><span class="key-term">CloudWatch</span>: Monitoreo y métricas</li>
            <li><span class="key-term">Security Hub</span>: Vista centralizada de seguridad</li>
            <li><span class="key-term">IAM Access Analyzer</span>: Detecta accesos excesivos</li>
        </ul>
        <h3>Azure</h3>
        <ul>
            <li><span class="key-term">Azure Sentinel</span>: SIEM nativo cloud</li>
            <li><span class="key-term">Activity Log</span>: Logs de operaciones</li>
            <li><span class="key-term">Defender for Cloud</span>: CSPM y protección</li>
        </ul>
        <h3>GCP</h3>
        <ul>
            <li><span class="key-term">Chronicle</span>: SIEM de Google</li>
            <li><span class="key-term">Cloud Audit Logs</span>: Auditoría</li>
            <li><span class="key-term">Security Command Center</span>: Vista de seguridad</li>
        </ul>

        <h2>Caso de Estudio: Kaseya VSA (2021)</h2>
        <ul>
            <li>Ataque ransomware via producto VSA de gestión remota</li>
            <li>Impactó a MSPs y sus clientes downstream</li>
            <li>Atacantes demandaron $70M en Bitcoin</li>
            <li><strong>Respuesta:</strong> Apagar servidores SaaS, notificar FBI/CISA, identificar IOCs</li>
            <li><strong>Lección:</strong> Supply chain attacks afectan múltiples organizaciones</li>
        </ul>
        `
    },
    9: {
        title: "Handling and Responding to Insider Threats",
        content: `
        <h2>Tipos de Insider Threats</h2>
        <ul>
            <li><span class="key-term">Malicious Insider</span>: Empleado con intención dañina</li>
            <li><span class="key-term">Negligent Insider</span>: Empleado descuidado/ignorante</li>
            <li><span class="key-term">Compromised Insider</span>: Credenciales robadas</li>
            <li><span class="key-term">Third-party Insider</span>: Contratistas, proveedores</li>
        </ul>

        <h2>Motivaciones</h2>
        <ul>
            <li><span class="key-term">Financial gain</span>: Beneficio económico</li>
            <li><span class="key-term">Revenge</span>: Venganza contra la organización</li>
            <li><span class="key-term">Espionage</span>: Espionaje corporativo/estatal</li>
            <li><span class="key-term">Ideology</span>: Motivación ideológica</li>
            <li><span class="key-term">Coercion</span>: Presión externa</li>
        </ul>

        <h2>Indicadores de Comportamiento (Red Flags)</h2>
        <ul>
            <li>Acceso a datos fuera del alcance de su rol</li>
            <li>Descarga masiva de archivos</li>
            <li>Acceso en horarios inusuales</li>
            <li>Uso de dispositivos USB no autorizados</li>
            <li>Intentos de bypass de controles</li>
            <li>Comportamiento anómalo reportado</li>
            <li>Empleado descontento o con problemas financieros</li>
            <li>Próxima salida de la empresa</li>
        </ul>

        <h2>Detección</h2>
        <h3>Controles Técnicos</h3>
        <ul>
            <li><span class="key-term">DLP</span> (Data Loss Prevention): Prevención de fuga de datos</li>
            <li><span class="key-term">UEBA</span> (User and Entity Behavior Analytics): Análisis de comportamiento</li>
            <li><span class="key-term">PAM</span> (Privileged Access Management): Gestión de accesos privilegiados</li>
            <li><span class="key-term">Logging & Monitoring</span>: Monitoreo de actividad</li>
            <li><span class="key-term">Access Controls</span>: Controles de acceso estrictos</li>
        </ul>

        <h3>Indicadores Técnicos</h3>
        <ul>
            <li>Volumen inusual de datos transferidos</li>
            <li>Acceso a sistemas sensibles sin justificación</li>
            <li>Uso de herramientas de hacking</li>
            <li>Intentos de escalar privilegios</li>
            <li>Conexiones a servicios de almacenamiento externo</li>
        </ul>

        <h2>Proceso de Respuesta</h2>
        <h3>Consideraciones Especiales</h3>
        <ul>
            <li>Coordinación con HR y Legal</li>
            <li>Preservar evidencia para posibles acciones legales</li>
            <li>Discreción durante la investigación</li>
            <li>Proteger derechos del empleado</li>
        </ul>

        <h3>Contención</h3>
        <ul>
            <li>Revocar accesos si hay riesgo inmediato</li>
            <li>Aumentar monitoreo de la cuenta</li>
            <li>Preservar evidencia</li>
            <li>Aislar sistemas si es necesario</li>
        </ul>

        <h3>Investigación</h3>
        <ul>
            <li>Analizar logs de acceso</li>
            <li>Revisar emails y comunicaciones (con aprobación legal)</li>
            <li>Examinar actividad de endpoint</li>
            <li>Entrevistar a testigos si aplica</li>
        </ul>

        <h2>Prevención</h2>
        <ul>
            <li><span class="key-term">Background checks</span>: Verificación de antecedentes</li>
            <li><span class="key-term">Least privilege</span>: Mínimo privilegio necesario</li>
            <li><span class="key-term">Separation of duties</span>: Separación de funciones</li>
            <li><span class="key-term">Security awareness</span>: Concientización</li>
            <li><span class="key-term">Exit procedures</span>: Procedimientos de salida</li>
            <li><span class="key-term">Regular access reviews</span>: Revisión periódica de accesos</li>
        </ul>
        `
    },
    10: {
        title: "Handling and Responding to Endpoint Security Incidents",
        content: `
        <h2>Tipos de Endpoints</h2>
        <ul>
            <li>Workstations (Windows, macOS, Linux)</li>
            <li>Laptops</li>
            <li>Servidores</li>
            <li>Dispositivos móviles</li>
            <li>IoT devices</li>
            <li>Virtual machines</li>
        </ul>

        <h2>Amenazas a Endpoints</h2>
        <ul>
            <li><span class="key-term">Malware</span>: Virus, ransomware, trojans</li>
            <li><span class="key-term">Fileless attacks</span>: Ataques sin archivos (PowerShell, WMI)</li>
            <li><span class="key-term">Credential theft</span>: Robo de credenciales</li>
            <li><span class="key-term">Privilege escalation</span>: Escalada de privilegios</li>
            <li><span class="key-term">Lateral movement</span>: Movimiento lateral</li>
            <li><span class="key-term">Data exfiltration</span>: Exfiltración de datos</li>
            <li><span class="key-term">Physical threats</span>: Robo, pérdida de dispositivo</li>
        </ul>

        <h2>Soluciones de Seguridad Endpoint</h2>
        <ul>
            <li><span class="key-term">Antivirus/Anti-malware</span>: Protección básica</li>
            <li><span class="key-term">EDR</span> (Endpoint Detection and Response): Detección avanzada</li>
            <li><span class="key-term">XDR</span> (Extended Detection and Response): Detección extendida</li>
            <li><span class="key-term">HIPS/HIDS</span>: Sistema de prevención/detección de intrusiones</li>
            <li><span class="key-term">DLP</span>: Prevención de pérdida de datos</li>
            <li><span class="key-term">FDE</span>: Full Disk Encryption</li>
        </ul>

        <h2>Detección en Endpoints</h2>
        <h3>Fuentes de Telemetría</h3>
        <ul>
            <li><span class="key-term">Windows Event Logs</span>: Security, System, Application</li>
            <li><span class="key-term">Sysmon</span>: Logging avanzado de Windows</li>
            <li><span class="key-term">EDR telemetry</span>: Datos de agentes EDR</li>
            <li><span class="key-term">Process execution</span>: Logs de ejecución</li>
            <li><span class="key-term">Network connections</span>: Conexiones de red</li>
        </ul>

        <h3>Indicadores de Compromiso</h3>
        <ul>
            <li>Procesos sospechosos (PowerShell encoded, cmd.exe spawn)</li>
            <li>Modificaciones al registro</li>
            <li>Nuevos servicios/tareas programadas</li>
            <li>Conexiones a C2 conocidos</li>
            <li>Acceso a LSASS (credential dumping)</li>
            <li>Lateral movement indicators</li>
        </ul>

        <h2>Técnicas de Ataque Comunes</h2>
        <ul>
            <li><span class="key-term">Living off the Land (LOLBins)</span>: Uso de herramientas legítimas</li>
            <li><span class="key-term">Credential Dumping</span>: Mimikatz, comsvcs.dll</li>
            <li><span class="key-term">Pass-the-Hash</span>: Reutilización de hashes NTLM</li>
            <li><span class="key-term">Pass-the-Ticket</span>: Reutilización de tickets Kerberos</li>
            <li><span class="key-term">DLL Injection/Hijacking</span>: Inyección de código</li>
        </ul>

        <h2>Proceso de Respuesta</h2>
        <h3>Recolección de Evidencia</h3>
        <ul>
            <li>Captura de memoria RAM</li>
            <li>Imagen forense del disco</li>
            <li>Exportar Event Logs</li>
            <li>Recopilar artefactos (prefetch, MFT, registry hives)</li>
        </ul>

        <h3>Contención</h3>
        <ul>
            <li>Aislar endpoint de la red (network containment)</li>
            <li>Deshabilitar cuenta de usuario</li>
            <li>Bloquear hashes maliciosos</li>
            <li>Quarantine del EDR</li>
        </ul>

        <h3>Erradicación</h3>
        <ul>
            <li>Eliminar malware y persistencia</li>
            <li>Restablecer credenciales</li>
            <li>Parchear vulnerabilidades</li>
        </ul>

        <h2>Herramientas</h2>
        <ul>
            <li><span class="key-term">Velociraptor</span>: Recolección forense</li>
            <li><span class="key-term">KAPE</span>: Triage forense</li>
            <li><span class="key-term">Autoruns</span>: Análisis de persistencia</li>
            <li><span class="key-term">Process Monitor</span>: Monitoreo de procesos</li>
            <li><span class="key-term">OSQuery</span>: Consultas de endpoint</li>
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
