// =============================================
// Incident Handler v3 - APLICACIÓN DE ESTUDIO
// =============================================

// Estado de la aplicación
let currentFlashcardIndex = 0;
let currentFlashcards = [];
let currentQuestionIndex = 0;
let currentQuestions = [];
let practiceCorrect = 0;
let practiceTotal = 0;

// Examen
let examQuestions = [];
let examAnswers = [];
let examCurrentIndex = 0;
let examTimer = null;
let examTimeRemaining = 180 * 60; // 3 horas en segundos
let examFlagged = []; // Feature 3: flags/bookmarks
let examIsReviewing = false; // Feature 3: review mode flag
let examIsMiniExam = false; // Feature 5: mini-exam mode
let examMiniModule = null;  // Feature 5: which module

// Progreso (localStorage)
let progress = {
    flashcardsStudied: 0,
    practiceCorrect: 0,
    practiceTotal: 0,
    examsCompleted: 0,
    bestScore: 0,
    moduleScores: {}
};

// Feature 2: Failed Questions
let failedQuestions = JSON.parse(localStorage.getItem('ecih_failedQuestions') || '[]');

// Feature 4: Exam History
let examHistory = JSON.parse(localStorage.getItem('ecih_examHistory') || '[]');

// Feature 6: Leitner boxes for flashcards
let leitnerBoxes = JSON.parse(localStorage.getItem('ecih_leitnerBoxes') || '{}');
let leitnerSession = parseInt(localStorage.getItem('ecih_leitnerSession') || '0');

// Feature 7: Immediate explanation mode (always on for practice)
let practiceAnswered = false;

// =============================================
// INTERNACIONALIZACIÓN (i18n)
// =============================================

let currentLang = localStorage.getItem('incident-handler_lang') || 'es';

const i18n = {
    es: {
        'dashboard.welcome': 'Bienvenido al Estudio Incident Handler v3',
        'dashboard.modulesTitle': 'Módulos del Curso',
        'nav.dashboard': 'Dashboard',
        'nav.modules': 'Módulos',
        'nav.flashcards': 'Flashcards',
        'nav.practice': 'Práctica',
        'nav.exam': 'Simulacro',
        'nav.progress': 'Progreso',
        'dashboard.examQuestions': 'Preguntas en Examen',
        'dashboard.duration': 'Duración',
        'dashboard.minScore': 'Puntuación Mínima',
        'dashboard.availableQuestions': 'Preguntas Disponibles',
        'dashboard.weakAreas': 'Áreas Débiles (< 60%)',
        'section.practice': 'Preguntas de Práctica',
        'filter.allModules': 'Todos los módulos',
        'label.score': 'Puntuación',
        'label.explanation': 'Explicación',
        'label.module': 'Módulo',
        'label.accuracy': 'Precisión en este módulo',
        'label.noData': 'Sin datos aún',
        'badge.advanced': 'Avanzado',
        'badge.technical': 'Técnico',
        'badge.conceptual': 'Conceptual',
        'btn.shuffle': 'Mezclar',
        'btn.prev': '← Anterior',
        'btn.next': 'Siguiente →',
        'btn.startExam': 'Iniciar Simulacro',
        'btn.finish': 'Finalizar',
        'btn.review': 'Revisar Respuestas',
        'btn.newExam': 'Nuevo Simulacro',
        'btn.reset': 'Reiniciar Progreso',
        'exam.title': 'Examen Incident Handler v3',
        'exam.questions': '100 multiple choice',
        'exam.time': '3 horas (180 minutos)',
        'exam.passing': '70% (70 respuestas correctas)',
        'exam.questionsLabel': 'Preguntas:',
        'exam.timeLabel': 'Tiempo:',
        'exam.passingLabel': 'Aprobación:',
        'result.passed': '¡APROBADO!',
        'result.failed': 'NO APROBADO',
        'result.correct': 'Respuestas correctas',
        'result.minRequired': 'Puntuación mínima requerida',
        'result.timeUsed': 'Tiempo usado',
        'result.answered': 'Preguntas contestadas',
        'result.accuracy': 'Precisión',
        'result.byModule': 'Resultados por Módulo',
        'progress.flashcards': 'Flashcards estudiadas',
        'progress.accuracy': 'Precisión en práctica',
        'progress.exams': 'Simulacros completados',
        'progress.best': 'Mejor puntuación',
        'progress.byModule': 'Rendimiento por Módulo',
        'confirm.reset': '¿Estás seguro de que quieres reiniciar todo tu progreso?',
        'loading.questions': 'Cargando preguntas adicionales...',
        'loaded.questions': 'preguntas cargadas',
        'no.questions': 'No hay preguntas para este módulo',
        'no.flashcards': 'No hay flashcards para este módulo',
        'module.prefix': 'Módulo',
        'flashcard.loading': 'Cargando...',
        'section.modules': 'Resúmenes por Módulo',
        'section.flashcards': 'Flashcards',
        'select.allModules': 'Todos los módulos',
        'select.module': 'Módulo',
        'exam.weighted': 'Modo ponderado (blueprint)',
        'exam.random': 'Modo aleatorio',
        'exam.weightedToggle': 'Ponderado (blueprint real)',
        'exam.moduleSelect': 'Mini-examen por módulo:',
        'exam.allModules': 'Examen completo (todos los módulos)',
        'exam.flagged': 'Marcadas',
        'exam.nextFlagged': 'Ir a siguiente marcada',
        'btn.repeatFailed': 'Repetir falladas',
        'btn.studyPending': 'Estudiar pendientes (Leitner)',
        'btn.nextQuestion': 'Siguiente pregunta',
        'failed.badge': 'preguntas falladas pendientes',
        'failed.none': 'No hay preguntas falladas',
        'failed.cleared': 'Eliminada de falladas',
        'history.title': 'Historial de Exámenes',
        'history.date': 'Fecha',
        'history.score': 'Puntuación',
        'history.pct': '%',
        'history.time': 'Tiempo',
        'history.trend': 'Tendencia',
        'history.avg': 'Promedio',
        'history.none': 'No hay exámenes completados aún',
        'leitner.title': 'Sistema Leitner (Repetición Espaciada)',
        'leitner.box': 'Caja',
        'leitner.mastered': 'Dominadas',
        'leitner.session': 'Sesión',
        'leitner.correct': 'Correcto → subir caja',
        'leitner.wrong': 'Incorrecto → volver a caja 1',
        'miniexam.title': 'Mini-Examen Módulo',
        'miniexam.questions': 'preguntas',
        'miniexam.minutes': 'minutos',
        'practice.correct': 'Correcto',
        'practice.incorrect': 'Incorrecto',
        'practice.nextBtn': 'Siguiente pregunta →'
    },
    en: {
        'dashboard.welcome': 'Welcome to Incident Handler v3 Study Platform',
        'dashboard.modulesTitle': 'Course Modules',
        'nav.dashboard': 'Dashboard',
        'nav.modules': 'Modules',
        'nav.flashcards': 'Flashcards',
        'nav.practice': 'Practice',
        'nav.exam': 'Exam Sim',
        'nav.progress': 'Progress',
        'dashboard.examQuestions': 'Exam Questions',
        'dashboard.duration': 'Duration',
        'dashboard.minScore': 'Minimum Score',
        'dashboard.availableQuestions': 'Available Questions',
        'dashboard.weakAreas': 'Weak Areas (< 60%)',
        'section.practice': 'Practice Questions',
        'filter.allModules': 'All modules',
        'label.score': 'Score',
        'label.explanation': 'Explanation',
        'label.module': 'Module',
        'label.accuracy': 'Accuracy in this module',
        'label.noData': 'No data yet',
        'badge.advanced': 'Advanced',
        'badge.technical': 'Technical',
        'badge.conceptual': 'Conceptual',
        'btn.shuffle': 'Shuffle',
        'btn.prev': '← Previous',
        'btn.next': 'Next →',
        'btn.startExam': 'Start Exam',
        'btn.finish': 'Finish',
        'btn.review': 'Review Answers',
        'btn.newExam': 'New Exam',
        'btn.reset': 'Reset Progress',
        'exam.title': 'Incident Handler v3 Exam',
        'exam.questions': '100 multiple choice',
        'exam.time': '3 hours (180 minutes)',
        'exam.passing': '70% (70 correct answers)',
        'exam.questionsLabel': 'Questions:',
        'exam.timeLabel': 'Time:',
        'exam.passingLabel': 'Passing:',
        'result.passed': 'PASSED!',
        'result.failed': 'NOT PASSED',
        'result.correct': 'Correct answers',
        'result.minRequired': 'Minimum passing score',
        'result.timeUsed': 'Time used',
        'result.answered': 'Questions answered',
        'result.accuracy': 'Accuracy',
        'result.byModule': 'Results by Module',
        'progress.flashcards': 'Flashcards studied',
        'progress.accuracy': 'Practice accuracy',
        'progress.exams': 'Exams completed',
        'progress.best': 'Best score',
        'progress.byModule': 'Performance by Module',
        'confirm.reset': 'Are you sure you want to reset all your progress?',
        'loading.questions': 'Loading additional questions...',
        'loaded.questions': 'questions loaded',
        'no.questions': 'No questions for this module',
        'no.flashcards': 'No flashcards for this module',
        'module.prefix': 'Module',
        'flashcard.loading': 'Loading...',
        'section.modules': 'Module Summaries',
        'section.flashcards': 'Flashcards',
        'select.allModules': 'All modules',
        'select.module': 'Module',
        'exam.weighted': 'Weighted mode (blueprint)',
        'exam.random': 'Random mode',
        'exam.weightedToggle': 'Weighted (real blueprint)',
        'exam.moduleSelect': 'Mini-exam by module:',
        'exam.allModules': 'Full exam (all modules)',
        'exam.flagged': 'Flagged',
        'exam.nextFlagged': 'Go to next flagged',
        'btn.repeatFailed': 'Repeat failed',
        'btn.studyPending': 'Study pending (Leitner)',
        'btn.nextQuestion': 'Next question',
        'failed.badge': 'failed questions pending',
        'failed.none': 'No failed questions',
        'failed.cleared': 'Removed from failed',
        'history.title': 'Exam History',
        'history.date': 'Date',
        'history.score': 'Score',
        'history.pct': '%',
        'history.time': 'Time',
        'history.trend': 'Trend',
        'history.avg': 'Average',
        'history.none': 'No exams completed yet',
        'leitner.title': 'Leitner System (Spaced Repetition)',
        'leitner.box': 'Box',
        'leitner.mastered': 'Mastered',
        'leitner.session': 'Session',
        'leitner.correct': 'Correct → move up a box',
        'leitner.wrong': 'Wrong → back to box 1',
        'miniexam.title': 'Module Mini-Exam',
        'miniexam.questions': 'questions',
        'miniexam.minutes': 'minutes',
        'practice.correct': 'Correct',
        'practice.incorrect': 'Incorrect',
        'practice.nextBtn': 'Next question →'
    }
};

function t(key) {
    return (i18n[currentLang] && i18n[currentLang][key]) || (i18n['es'][key]) || key;
}

function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem('incident-handler_lang', currentLang);
    applyLanguage();
    // Re-render active view content
    loadModuleContent();
    loadFlashcards();
    loadPracticeQuestions();
    updateProgressDisplay();
    renderModuleProgressBars();
    updateWeakAreas();
    // Refresh exam question if exam is active
    if (examQuestions.length > 0 && document.getElementById('examContainer').style.display !== 'none') {
        displayExamQuestion();
    }
}

function applyLanguage() {
    const btnText = document.getElementById('langBtnText');
    if (btnText) {
        btnText.textContent = currentLang === 'es' ? 'EN' : 'ES';
    }
    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });

    // Update module select options
    const moduleNames = [
        '', 'Introduction to Incident Handling', 'IH&R Process', 'First Response',
        'Malware Incidents', 'Email Security', 'Network Security',
        'Web Application Security', 'Cloud Security', 'Insider Threats', 'Endpoint Security'
    ];
    ['moduleSelect', 'flashcardModule', 'practiceModule'].forEach(selectId => {
        const sel = document.getElementById(selectId);
        if (!sel) return;
        Array.from(sel.options).forEach(opt => {
            if (opt.value === 'all') {
                opt.textContent = t('select.allModules');
            } else {
                const num = parseInt(opt.value);
                if (num >= 1 && num <= 10) {
                    opt.textContent = `${t('select.module')} ${num}: ${moduleNames[num]}`;
                }
            }
        });
    });
}

// =============================================
// QUESTION LOADER (JSON files)
// =============================================

async function loadExternalQuestions() {
    const files = [
        'questions_bilingual.json',
        'questions_additional.json',
        'questions_similares.json',
        'questions_deep_m1_m4.json',
        'questions_deep_m5_m6.json',
        'questions_deep_m7_m10.json'
    ];

    let loaded = 0;
    const existingIds = new Set(practiceQuestions.map(q => q.id));

    for (const file of files) {
        try {
            const resp = await fetch(file);
            if (!resp.ok) continue;
            const data = await resp.json();

            // Handle all formats: array, { questions: [] }, { additional_questions: [] }, or any key with array
            let rawList;
            if (Array.isArray(data)) {
                rawList = data;
            } else {
                rawList = data.questions || data.additional_questions || [];
                if (rawList.length === 0) {
                    const arrayKey = Object.keys(data).find(k => Array.isArray(data[k]));
                    if (arrayKey) rawList = data[arrayKey];
                }
            }

            rawList.forEach(q => {
                if (existingIds.has(q.id)) return;
                existingIds.add(q.id);

                // Normalize to internal format (bilingual-aware)
                const normalized = {
                    id: q.id,
                    module: q.module,
                    question: q.question_es || q.question,
                    question_en: q.question_en || q.question,
                    question_es: q.question_es || q.question,
                    options: q.options_es || q.options || [],
                    options_en: q.options_en || q.options || [],
                    options_es: q.options_es || q.options || [],
                    correct: q.correct,
                    explanation: q.explanation_es || q.explanation || '',
                    explanation_en: q.explanation_en || q.explanation || '',
                    explanation_es: q.explanation_es || q.explanation || ''
                };

                practiceQuestions.push(normalized);

                // Also create a flashcard from it
                const qText = normalized.question_es || normalized.question;
                const aText = (normalized.options_es || normalized.options)[normalized.correct] || '';
                if (qText && aText) {
                    flashcards.push({
                        module: normalized.module,
                        q: qText,
                        q_en: normalized.question_en || qText,
                        a: aText,
                        a_en: (normalized.options_en || [])[normalized.correct] || aText
                    });
                }

                loaded++;
            });
        } catch (e) {
            console.warn('Could not load', file, e);
        }
    }

    // Also try pro question files if they exist
    const proFiles = [
        'questions_pro_m1_m5.json',
        'questions_pro_m6_m10.json',
        'questions_exam_m2.json',
        'questions_exam_m2_extra.json',
        'questions_exam_m1_m3_m4_m5.json',
        'questions_exam_m6_m7_m8_m9_m10.json'
    ];
    for (const file of proFiles) {
        try {
            const resp = await fetch(file);
            if (!resp.ok) continue;
            const data = await resp.json();
            // Handle all formats: array, or object with any key containing an array
            let rawList;
            if (Array.isArray(data)) {
                rawList = data;
            } else {
                rawList = data.questions || data.additional_questions || [];
                if (rawList.length === 0) {
                    // Try first key that contains an array (e.g. exam_questions_m2, exam_questions)
                    const arrayKey = Object.keys(data).find(k => Array.isArray(data[k]));
                    if (arrayKey) rawList = data[arrayKey];
                }
            }

            rawList.forEach(q => {
                if (existingIds.has(q.id)) return;
                existingIds.add(q.id);
                const normalized = {
                    id: q.id,
                    module: q.module,
                    question: q.question_es || q.question,
                    question_en: q.question_en || q.question,
                    question_es: q.question_es || q.question,
                    options: q.options_es || q.options || [],
                    options_en: q.options_en || q.options || [],
                    options_es: q.options_es || q.options || [],
                    correct: q.correct,
                    explanation: q.explanation_es || q.explanation || '',
                    explanation_en: q.explanation_en || q.explanation || '',
                    explanation_es: q.explanation_es || q.explanation || ''
                };
                practiceQuestions.push(normalized);
                loaded++;
            });
        } catch (e) {
            // Pro files may not exist yet, silently skip
        }
    }

    // Update total count display
    const countEl = document.getElementById('availableQuestionsCount');
    if (countEl) countEl.textContent = practiceQuestions.length;

    if (loaded > 0) {
        console.log(`Loaded ${loaded} external questions. Total: ${practiceQuestions.length}`);
        // Reload current view to reflect new questions
        loadPracticeQuestions();
        loadFlashcards();
    }
}

// =============================================
// DIFFICULTY CLASSIFICATION
// =============================================

const TECHNICAL_KEYWORDS = [
    'nmap', 'wireshark', 'metasploit', 'volatility', 'tcpdump', 'snort', 'splunk',
    'cmd', 'command', 'tool', 'herramienta', 'syntax', 'flag', 'parameter',
    'registry', 'registro', 'powershell', 'bash', 'script', 'log', 'hash',
    'sha', 'md5', 'hex', 'base64', 'port', 'puerto', 'ip address', 'subnet',
    'regex', 'yara', 'sigma', 'stix', 'taxii', 'mitre', 'att&ck', 'cve',
    'exploit', 'payload', 'shellcode', 'buffer overflow', 'sql injection',
    'xss', 'csrf', 'idor', 'ssrf', 'rce', 'lfi', 'rfi'
];

function classifyDifficulty(questionText) {
    const text = questionText.toLowerCase();
    const wordCount = questionText.split(/\s+/).length;

    // Scenario-based: long question (80+ words) or contains scenario indicators
    if (wordCount >= 80 ||
        text.includes('escenario') || text.includes('scenario') ||
        text.includes('acaba de recibir') || text.includes('has just received') ||
        text.includes('durante una investigación') || text.includes('during an investigation') ||
        text.includes('un analista') || text.includes('an analyst') ||
        text.includes('su organización') || text.includes('your organization')) {
        return 'advanced';
    }

    // Technical: contains tool names / commands / technical terms
    for (const kw of TECHNICAL_KEYWORDS) {
        if (text.includes(kw)) return 'technical';
    }

    return 'conceptual';
}

function getDifficultyBadgeHtml(questionText) {
    const diff = classifyDifficulty(questionText);
    const labels = {
        advanced: t('badge.advanced'),
        technical: t('badge.technical'),
        conceptual: t('badge.conceptual')
    };
    const classes = {
        advanced: 'difficulty-advanced',
        technical: 'difficulty-technical',
        conceptual: 'difficulty-conceptual'
    };
    return `<span class="difficulty-badge ${classes[diff]}">${labels[diff]}</span>`;
}

// =============================================
// WEAK AREAS
// =============================================

function updateWeakAreas() {
    const container = document.getElementById('weakAreasContainer');
    const list = document.getElementById('weakAreasList');
    if (!container || !list) return;

    const moduleNames = {
        1: 'Intro to IH', 2: 'IH&R Process', 3: 'First Response',
        4: 'Malware', 5: 'Email Security', 6: 'Network Security',
        7: 'Web App Security', 8: 'Cloud Security', 9: 'Insider Threats',
        10: 'Endpoint Security'
    };

    const weakModules = [];
    for (let i = 1; i <= 10; i++) {
        const key = `module${i}`;
        const data = progress.moduleScores[key];
        if (data && data.total >= 3) {
            const pct = Math.round((data.correct / data.total) * 100);
            if (pct < 60) {
                weakModules.push({ num: i, name: moduleNames[i], pct });
            }
        }
    }

    if (weakModules.length === 0) {
        container.style.display = 'none';
        return;
    }

    container.style.display = 'block';
    const title = container.querySelector('h2');
    if (title) title.textContent = t('dashboard.weakAreas');

    list.innerHTML = weakModules.map(m => `
        <div class="weak-area-tag">
            <span>${t('module.prefix')} ${m.num}: ${m.name}</span>
            <span class="pct">${m.pct}%</span>
        </div>
    `).join('');
}

// Inicialización
document.addEventListener('DOMContentLoaded', async () => {
    // Auth check — must come first
    const user = await checkAuthAndInit();
    if (!user) return; // redirect already triggered or network issue

    setupNavUserPanel(user);

    loadProgress();
    applyLanguage();
    loadModuleContent();
    loadFlashcards();
    loadPracticeQuestions();
    updateProgressDisplay();
    updateWeakAreas();
    updateFailedBadge(); // Feature 2

    // Set initial question count
    const countEl = document.getElementById('availableQuestionsCount');
    if (countEl) countEl.textContent = practiceQuestions.length;

    // Load external question files
    await loadExternalQuestions();
});

// =============================================
// NAVEGACIÓN
// =============================================

function showSection(sectionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Mostrar la sección seleccionada
    document.getElementById(sectionId).classList.add('active');

    // Actualizar navegación
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick') && link.getAttribute('onclick').includes(sectionId)) {
            link.classList.add('active');
        }
    });

    // Acciones específicas por sección
    if (sectionId === 'progreso') {
        updateProgressDisplay();
        renderModuleProgressBars();
        renderExamHistory(); // Feature 4
        renderLeitnerDistribution(); // Feature 6
    }
    if (sectionId === 'dashboard') {
        updateWeakAreas();
    }
}

function showModule(moduleNum) {
    document.getElementById('moduleSelect').value = moduleNum;
    loadModuleContent();
    showSection('modulos');
}

// =============================================
// MÓDULOS
// =============================================

function loadModuleContent() {
    const moduleNum = document.getElementById('moduleSelect').value;
    const module = moduleContent[moduleNum];

    if (module) {
        const title = (currentLang === 'en' && module.title_en) ? module.title_en : module.title;
        const content = (currentLang === 'en' && module.content_en) ? module.content_en : module.content;
        document.getElementById('moduleContent').innerHTML = `
            <h2>${title}</h2>
            ${content}
        `;

        // Append Lab Exercises section
        const labData = (typeof labExercises !== 'undefined') ? (labExercises[parseInt(moduleNum)] || null) : null;
        if (labData && labData.labs.length > 0) {
            const labTitle = currentLang === 'en'
                ? 'Hands-on Lab Exercises'
                : 'Ejercicios Prácticos de Laboratorio';
            const labHint = currentLang === 'en'
                ? 'From the official Incident Handler v3 CEI instructor material'
                : 'Del material oficial CEI del instructor Incident Handler v3';

            const labsHtml = labData.labs.map(lab => {
                const labName = (currentLang === 'en' && lab.name_en) ? lab.name_en : lab.name;
                const steps = (currentLang === 'en' && lab.steps_en) ? lab.steps_en : lab.steps;
                const toolsStr = lab.tools.map(t => `<span class="lab-tool">${t}</span>`).join(' ');
                const stepsStr = steps.map(s => `<li>${s}</li>`).join('');
                return `
                    <div class="lab-card">
                        <h3 class="lab-name">${labName}</h3>
                        <div class="lab-tools">${toolsStr}</div>
                        <ol class="lab-steps">${stepsStr}</ol>
                    </div>
                `;
            }).join('');

            document.getElementById('moduleContent').innerHTML += `
                <div class="labs-section">
                    <h2 class="labs-title">
                        <span class="labs-icon">&#128300;</span> ${labTitle}
                    </h2>
                    <p class="labs-hint">${labHint}</p>
                    ${labsHtml}
                </div>
            `;
        }

        // Append Visual Reference slides section
        const slides = (typeof slidesData !== 'undefined') ? (slidesData[parseInt(moduleNum)] || []) : [];
        if (slides.length > 0) {
            const sectionTitle = currentLang === 'en'
                ? 'Visual Reference - CEI Slides'
                : 'Referencia Visual - Slides CEI';

            const slidesHtml = slides.map((s, i) => `
                <div class="slide-thumb" onclick="openSlideViewer(${moduleNum}, ${i})" title="${s.caption}">
                    <img src="${s.file}" alt="${s.caption}" loading="lazy">
                    <div class="slide-thumb-caption">${s.caption}</div>
                </div>
            `).join('');

            document.getElementById('moduleContent').innerHTML += `
                <div class="visual-reference-section">
                    <h2 class="visual-reference-title">
                        <span class="vr-icon">&#128247;</span> ${sectionTitle}
                    </h2>
                    <p class="vr-hint">${currentLang === 'en' ? 'Click any slide to open fullscreen viewer' : 'Haz clic en cualquier slide para abrirlo en pantalla completa'}</p>
                    <div class="slides-grid">${slidesHtml}</div>
                </div>
            `;
        }
    }
}

// =============================================
// SLIDE VIEWER (LIGHTBOX)
// =============================================

// =============================================
// AUTH HELPERS
// =============================================

function escapeHtmlAuth(str) {
    if (!str) return '';
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#x27;' };
    return String(str).replace(/[&<>"']/g, (c) => map[c]);
}

async function checkAuthAndInit() {
    try {
        const res = await fetch('/api/auth/me', {
            credentials: 'include'
        });
        if (!res.ok) {
            window.location.href = '/login.html';
            return null;
        }
        const data = await res.json();
        return data.user || null;
    } catch (_) {
        return null;
    }
}

function setupNavUserPanel(user) {
    const panel     = document.getElementById('userInfoPanel');
    const emailEl   = document.getElementById('navUserEmail');
    const adminLink = document.getElementById('navAdminLink');
    const logoutBtn = document.getElementById('navLogoutBtn');

    if (!panel || !user) return;

    panel.style.display = '';
    if (emailEl) emailEl.textContent = escapeHtmlAuth(user.email || user.name || '');
    if (adminLink) {
        adminLink.style.display = user.role === 'admin' ? '' : 'none';
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
            try {
                await fetch('/api/auth/logout', {
                    method: 'POST',
                    credentials: 'include'
                });
            } catch (_) {}
            window.location.href = '/login.html';
        });
    }
}

let _slideViewerModule = 0;
let _slideViewerIndex = 0;

function openSlideViewer(moduleNum, index) {
    const slides = (typeof slidesData !== 'undefined') ? (slidesData[parseInt(moduleNum)] || []) : [];
    if (!slides.length) return;

    _slideViewerModule = parseInt(moduleNum);
    _slideViewerIndex = index;

    // Remove any existing modal
    const existing = document.getElementById('slideViewerModal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'slideViewerModal';
    modal.className = 'slide-modal';
    modal.innerHTML = `
        <div class="slide-modal-content">
            <span class="slide-close" onclick="document.getElementById('slideViewerModal').remove()" title="Close">&times;</span>
            <img id="slideViewerImg" src="${slides[index].file}" alt="${slides[index].caption}">
            <div class="slide-caption-bar" id="slideCaptionBar">${slides[index].caption}</div>
            <div class="slide-modal-nav">
                <button id="slidePrevBtn" onclick="changeSlide(-1)">&#8592; Prev</button>
                <span id="slideCounter">${index + 1} / ${slides.length}</span>
                <button id="slideNextBtn" onclick="changeSlide(1)">Next &#8594;</button>
            </div>
        </div>
    `;

    // Close on backdrop click (outside modal-content)
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });

    document.body.appendChild(modal);

    // Keyboard navigation while modal is open
    modal._keyHandler = (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); changeSlide(1); }
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); changeSlide(-1); }
        if (e.key === 'Escape') { modal.remove(); }
    };
    document.addEventListener('keydown', modal._keyHandler);

    // Clean up keyboard listener when modal is removed
    const observer = new MutationObserver(() => {
        if (!document.getElementById('slideViewerModal')) {
            document.removeEventListener('keydown', modal._keyHandler);
            observer.disconnect();
        }
    });
    observer.observe(document.body, { childList: true });
}

function changeSlide(delta) {
    const slides = (typeof slidesData !== 'undefined') ? (slidesData[_slideViewerModule] || []) : [];
    if (!slides.length) return;

    _slideViewerIndex = (_slideViewerIndex + delta + slides.length) % slides.length;

    const img = document.getElementById('slideViewerImg');
    const counter = document.getElementById('slideCounter');
    const caption = document.getElementById('slideCaptionBar');

    if (img) img.src = slides[_slideViewerIndex].file;
    if (img) img.alt = slides[_slideViewerIndex].caption;
    if (counter) counter.textContent = `${_slideViewerIndex + 1} / ${slides.length}`;
    if (caption) caption.textContent = slides[_slideViewerIndex].caption;
}

// =============================================
// FLASHCARDS
// =============================================

function loadFlashcards() {
    const moduleFilter = document.getElementById('flashcardModule').value;

    if (moduleFilter === 'all') {
        currentFlashcards = [...flashcards];
    } else {
        currentFlashcards = flashcards.filter(f => f.module == moduleFilter);
    }

    currentFlashcardIndex = 0;
    displayFlashcard();
    renderLeitnerDistribution(); // Feature 6
}

function shuffleFlashcards() {
    currentFlashcards = currentFlashcards.sort(() => Math.random() - 0.5);
    currentFlashcardIndex = 0;
    displayFlashcard();
}

function displayFlashcard() {
    if (currentFlashcards.length === 0) {
        document.getElementById('flashcardQuestion').textContent = t('no.flashcards');
        document.getElementById('flashcardAnswer').textContent = '';
        document.getElementById('flashcardCounter').textContent = '0/0';
        return;
    }

    const card = currentFlashcards[currentFlashcardIndex];
    // Bilingual support: use language-specific fields if available
    const question = (currentLang === 'en' && card.q_en) ? card.q_en : card.q;
    const answer = (currentLang === 'en' && card.a_en) ? card.a_en : card.a;

    document.getElementById('flashcardQuestion').textContent = question;
    document.getElementById('flashcardAnswer').textContent = answer;
    document.getElementById('flashcardCounter').textContent =
        `${currentFlashcardIndex + 1}/${currentFlashcards.length}`;

    // Reset flip state
    document.querySelector('.flashcard').classList.remove('flipped');
}

function flipCard(element) {
    element.classList.toggle('flipped');

    // Contar como estudiada si se voltea
    if (element.classList.contains('flipped')) {
        progress.flashcardsStudied++;
        saveProgress();
    }
}

function nextFlashcard() {
    if (currentFlashcardIndex < currentFlashcards.length - 1) {
        currentFlashcardIndex++;
        displayFlashcard();
    }
}

function prevFlashcard() {
    if (currentFlashcardIndex > 0) {
        currentFlashcardIndex--;
        displayFlashcard();
    }
}

// =============================================
// PRÁCTICA
// =============================================

function loadPracticeQuestions(useFailedPool) {
    if (useFailedPool) {
        // Feature 2: load only failed questions
        const failedIds = new Set(failedQuestions);
        currentQuestions = practiceQuestions
            .filter(q => failedIds.has(q.id))
            .sort(() => Math.random() - 0.5);
        if (currentQuestions.length === 0) {
            alert(t('failed.none'));
            return;
        }
    } else {
        const moduleFilter = document.getElementById('practiceModule').value;
        if (moduleFilter === 'all') {
            currentQuestions = [...practiceQuestions].sort(() => Math.random() - 0.5);
        } else {
            currentQuestions = practiceQuestions
                .filter(q => q.module == moduleFilter)
                .sort(() => Math.random() - 0.5);
        }
    }

    currentQuestionIndex = 0;
    practiceCorrect = 0;
    practiceTotal = 0;
    practiceAnswered = false;
    updatePracticeScore();
    displayPracticeQuestion();
    updateFailedBadge();
}

function getQuestionText(q) {
    if (currentLang === 'en') return q.question_en || q.question || '';
    return q.question_es || q.question || '';
}

function getQuestionOptions(q) {
    if (currentLang === 'en') return q.options_en || q.options || [];
    return q.options_es || q.options || [];
}

function getQuestionExplanation(q) {
    if (currentLang === 'en') return q.explanation_en || q.explanation || '';
    return q.explanation_es || q.explanation || '';
}

function displayPracticeQuestion() {
    if (currentQuestions.length === 0) {
        document.getElementById('practiceContainer').innerHTML =
            `<p>${t('no.questions')}</p>`;
        document.getElementById('questionCounter').textContent = '0/0';
        return;
    }

    practiceAnswered = false;
    const q = currentQuestions[currentQuestionIndex];
    const letters = ['A', 'B', 'C', 'D'];
    const questionText = getQuestionText(q);
    const options = getQuestionOptions(q);
    const explanation = getQuestionExplanation(q);
    const diffBadge = getDifficultyBadgeHtml(questionText);

    let optionsHtml = options.map((opt, idx) => `
        <li class="option-item" onclick="selectPracticeAnswer(${idx}, this)">
            <span class="option-letter">${letters[idx]}</span>
            <span>${opt}</span>
        </li>
    `).join('');

    // Feature 7: next button visible only after answering
    const nextBtnHtml = `
        <button id="practiceNextBtn" class="practice-next-btn" style="display:none;" onclick="nextQuestion()">
            ${t('practice.nextBtn')}
        </button>
    `;

    document.getElementById('practiceContainer').innerHTML = `
        <p class="question-text">${currentQuestionIndex + 1}. ${questionText} ${diffBadge}</p>
        <ul class="options-list">${optionsHtml}</ul>
        <div class="explanation" id="explanation">
            <strong>${t('label.explanation')}:</strong> ${explanation}
        </div>
        <div class="answer-module-stats" id="answerModuleStats" style="display:none;"></div>
        ${nextBtnHtml}
    `;

    document.getElementById('questionCounter').textContent =
        `${currentQuestionIndex + 1}/${currentQuestions.length}`;
}

function selectPracticeAnswer(selectedIdx, element) {
    if (practiceAnswered) return; // Feature 7: prevent double-answer
    practiceAnswered = true;

    const q = currentQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.option-item');

    // Deshabilitar más clics
    options.forEach(opt => opt.onclick = null);

    const isCorrect = selectedIdx === q.correct;

    // Feature 7: Immediate feedback - highlight correct/incorrect immediately
    options.forEach((opt, idx) => {
        if (idx === q.correct) {
            opt.classList.add('correct');
        } else if (idx === selectedIdx && !isCorrect) {
            opt.classList.add('incorrect');
        }
    });

    // Feature 7: Show explanation immediately with result banner
    const explanationEl = document.getElementById('explanation');
    if (explanationEl) {
        const resultLabel = isCorrect
            ? `<span class="practice-result-correct">✓ ${t('practice.correct')}</span>`
            : `<span class="practice-result-incorrect">✗ ${t('practice.incorrect')}</span>`;
        explanationEl.innerHTML = `${resultLabel}<br><strong>${t('label.explanation')}:</strong> ${getQuestionExplanation(q)}`;
        explanationEl.classList.add('show');
    }

    // Feature 7: Show "Siguiente" button after answering
    const nextBtn = document.getElementById('practiceNextBtn');
    if (nextBtn) nextBtn.style.display = 'inline-block';

    // Actualizar puntuación
    practiceTotal++;
    progress.practiceTotal++;

    const moduleKey = `module${q.module}`;
    if (!progress.moduleScores[moduleKey]) {
        progress.moduleScores[moduleKey] = { correct: 0, total: 0 };
    }

    if (isCorrect) {
        practiceCorrect++;
        progress.practiceCorrect++;
        progress.moduleScores[moduleKey].correct++;
        // Feature 2: Remove from failed pool if answered correctly
        const fIdx = failedQuestions.indexOf(q.id);
        if (fIdx !== -1) {
            failedQuestions.splice(fIdx, 1);
            localStorage.setItem('ecih_failedQuestions', JSON.stringify(failedQuestions));
            updateFailedBadge();
        }
    } else {
        // Feature 2: Track failed question
        if (q.id && !failedQuestions.includes(q.id)) {
            failedQuestions.push(q.id);
            localStorage.setItem('ecih_failedQuestions', JSON.stringify(failedQuestions));
            updateFailedBadge();
        }
    }
    progress.moduleScores[moduleKey].total++;

    saveProgress();
    updatePracticeScore();
    updateWeakAreas();

    // Show per-module stats after answering
    showAnswerModuleStats(q.module);
}

function updatePracticeScore() {
    document.getElementById('practiceScore').textContent =
        `${t('label.score')}: ${practiceCorrect}/${practiceTotal}`;
}

function showAnswerModuleStats(moduleNum) {
    const statsEl = document.getElementById('answerModuleStats');
    if (!statsEl) return;

    const moduleKey = `module${moduleNum}`;
    const data = progress.moduleScores[moduleKey] || { correct: 0, total: 0 };
    const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : null;

    const moduleNames = {
        1: 'Intro to IH', 2: 'IH&R Process', 3: 'First Response',
        4: 'Malware', 5: 'Email Security', 6: 'Network Security',
        7: 'Web App Security', 8: 'Cloud Security', 9: 'Insider Threats',
        10: 'Endpoint Security'
    };

    let accuracyHtml = '';
    if (pct !== null) {
        const cls = pct >= 70 ? 'accuracy-good' : pct >= 50 ? 'accuracy-warn' : 'accuracy-bad';
        accuracyHtml = `
            <span class="stat-label">${t('label.accuracy')}:</span>
            <span class="accuracy-indicator ${cls}">${pct}% (${data.correct}/${data.total})</span>
        `;
    } else {
        accuracyHtml = `<span class="stat-label">${t('label.noData')}</span>`;
    }

    statsEl.innerHTML = `
        <span class="module-tag">${t('label.module')} ${moduleNum}: ${moduleNames[moduleNum] || ''}</span>
        ${accuracyHtml}
    `;
    statsEl.style.display = 'flex';
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        practiceAnswered = false;
        displayPracticeQuestion();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        practiceAnswered = false;
        displayPracticeQuestion();
    }
}

// Feature 2: Helper to update failed badge
function updateFailedBadge() {
    const badge = document.getElementById('failedBadge');
    if (badge) {
        badge.textContent = failedQuestions.length > 0
            ? `${failedQuestions.length} ${t('failed.badge')}`
            : '';
        badge.style.display = failedQuestions.length > 0 ? 'inline-block' : 'none';
    }
}

// =============================================
// SIMULACRO DE EXAMEN
// =============================================

// Feature 1: Weighted exam blueprint
const EXAM_BLUEPRINT = { 1:5, 2:31, 3:15, 4:13, 5:10, 6:11, 7:8, 8:6, 9:4, 10:7 };

function generateWeightedExamQuestions() {
    const result = [];
    const existingIds = new Set();
    for (let mod = 1; mod <= 10; mod++) {
        const needed = EXAM_BLUEPRINT[mod] || 0;
        const pool = practiceQuestions
            .filter(q => q.module == mod)
            .sort(() => Math.random() - 0.5);
        let added = 0;
        for (const q of pool) {
            if (added >= needed) break;
            if (!existingIds.has(q.id)) {
                result.push(q);
                existingIds.add(q.id);
                added++;
            }
        }
        // If not enough questions for this module, fill from pool anyway
        if (added < needed) {
            const extra = pool.filter(q => !existingIds.has(q.id));
            extra.slice(0, needed - added).forEach(q => {
                result.push(q);
                existingIds.add(q.id);
            });
        }
    }
    return result.sort(() => Math.random() - 0.5);
}

// Feature 5: Mini-exam per module
function generateMiniExamQuestions(moduleNum) {
    const pool = practiceQuestions
        .filter(q => q.module == moduleNum)
        .sort(() => Math.random() - 0.5);
    const count = Math.min(30, pool.length);
    return pool.slice(0, count);
}

function startExam() {
    const weightedToggle = document.getElementById('weightedToggle');
    const moduleExamSelect = document.getElementById('moduleExamSelect');
    const selectedModule = moduleExamSelect ? moduleExamSelect.value : 'all';
    const useWeighted = weightedToggle ? weightedToggle.checked : false;

    examIsReviewing = false;

    // Feature 5: Mini-exam
    if (selectedModule !== 'all') {
        examIsMiniExam = true;
        examMiniModule = parseInt(selectedModule);
        examQuestions = generateMiniExamQuestions(examMiniModule);
        const miniMinutes = Math.round((examQuestions.length / 100) * 180);
        examTimeRemaining = miniMinutes * 60;
    } else {
        examIsMiniExam = false;
        examMiniModule = null;
        // Feature 1: Weighted or random
        if (useWeighted) {
            examQuestions = generateWeightedExamQuestions();
        } else {
            examQuestions = generateExamQuestions();
        }
        examTimeRemaining = 180 * 60;
    }

    examAnswers = new Array(examQuestions.length).fill(null);
    examFlagged = new Array(examQuestions.length).fill(false); // Feature 3
    examCurrentIndex = 0;

    // Ocultar intro, mostrar examen
    document.getElementById('examIntro').style.display = 'none';
    document.getElementById('examContainer').style.display = 'block';
    document.getElementById('examResults').style.display = 'none';

    // Iniciar timer
    startExamTimer();

    // Crear grid de preguntas
    createQuestionGrid();

    // Mostrar primera pregunta
    displayExamQuestion();
    updateFlaggedCount(); // Feature 3
}

function startExamTimer() {
    examTimer = setInterval(() => {
        examTimeRemaining--;

        const hours = Math.floor(examTimeRemaining / 3600);
        const minutes = Math.floor((examTimeRemaining % 3600) / 60);
        const seconds = examTimeRemaining % 60;

        document.getElementById('examTimer').textContent =
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (examTimeRemaining <= 0) {
            finishExam();
        }
    }, 1000);
}

function createQuestionGrid() {
    const grid = document.getElementById('questionGrid');
    grid.innerHTML = '';

    for (let i = 0; i < examQuestions.length; i++) {
        const btn = document.createElement('button');
        btn.className = 'q-btn';
        btn.textContent = i + 1;
        btn.onclick = () => goToExamQuestion(i);
        grid.appendChild(btn);
    }

    updateQuestionGrid();
}

function updateQuestionGrid() {
    const buttons = document.querySelectorAll('.q-btn');
    buttons.forEach((btn, idx) => {
        btn.classList.remove('current', 'answered', 'flagged-q');
        if (idx === examCurrentIndex) btn.classList.add('current');
        if (examAnswers[idx] !== null) btn.classList.add('answered');
        if (examFlagged[idx]) btn.classList.add('flagged-q'); // Feature 3
    });
}

function displayExamQuestion() {
    const q = examQuestions[examCurrentIndex];
    const letters = ['A', 'B', 'C', 'D'];
    const questionText = getQuestionText(q);
    const options = getQuestionOptions(q);
    const diffBadge = getDifficultyBadgeHtml(questionText);
    const isFlagged = examFlagged[examCurrentIndex]; // Feature 3

    let optionsHtml = options.map((opt, idx) => `
        <li class="option-item ${examAnswers[examCurrentIndex] === idx ? 'selected' : ''}"
            onclick="selectExamAnswer(${idx}, this)">
            <span class="option-letter">${letters[idx]}</span>
            <span>${opt}</span>
        </li>
    `).join('');

    // Feature 3: flag button
    const flagBtn = `<button class="flag-btn ${isFlagged ? 'flagged' : ''}" onclick="toggleExamFlag()" title="${t('exam.flagged')}">
        ${isFlagged ? '🚩' : '⚑'} ${isFlagged ? t('exam.flagged') : ''}
    </button>`;

    document.getElementById('examQuestion').innerHTML = `
        <div class="question-header-row">
            <p class="question-text">${examCurrentIndex + 1}. ${questionText} ${diffBadge}</p>
            ${flagBtn}
        </div>
        <ul class="options-list">${optionsHtml}</ul>
    `;

    document.getElementById('examProgress').textContent =
        `${examCurrentIndex + 1}/${examQuestions.length}`;

    updateQuestionGrid();
}

function selectExamAnswer(selectedIdx, element) {
    examAnswers[examCurrentIndex] = selectedIdx;

    // Actualizar UI
    document.querySelectorAll('#examQuestion .option-item').forEach((opt, idx) => {
        opt.classList.remove('selected');
        if (idx === selectedIdx) opt.classList.add('selected');
    });

    updateQuestionGrid();
}

// Feature 3: Flag functions
function toggleExamFlag() {
    examFlagged[examCurrentIndex] = !examFlagged[examCurrentIndex];
    displayExamQuestion();
    updateFlaggedCount();
    updateQuestionGrid();
}

function updateFlaggedCount() {
    const count = examFlagged.filter(Boolean).length;
    const el = document.getElementById('flaggedCount');
    if (el) el.textContent = count > 0 ? `🚩 ${count} ${t('exam.flagged')}` : '';
}

function goToNextFlagged() {
    const start = examCurrentIndex;
    for (let i = 1; i <= examFlagged.length; i++) {
        const idx = (start + i) % examFlagged.length;
        if (examFlagged[idx]) {
            goToExamQuestion(idx);
            return;
        }
    }
}

function goToExamQuestion(index) {
    examCurrentIndex = index;
    if (examIsReviewing) {
        displayExamReview();
    } else {
        displayExamQuestion();
    }
}

function nextExamQuestion() {
    if (examCurrentIndex < examQuestions.length - 1) {
        examCurrentIndex++;
        displayExamQuestion();
    }
}

function prevExamQuestion() {
    if (examCurrentIndex > 0) {
        examCurrentIndex--;
        displayExamQuestion();
    }
}

function finishExam() {
    // Detener timer
    if (examTimer) {
        clearInterval(examTimer);
        examTimer = null;
    }

    // Calcular resultados
    let correct = 0;
    let moduleResults = {};

    examQuestions.forEach((q, idx) => {
        if (examAnswers[idx] === q.correct) {
            correct++;
        }

        const moduleKey = `Module ${q.module}`;
        if (!moduleResults[moduleKey]) {
            moduleResults[moduleKey] = { correct: 0, total: 0 };
        }
        moduleResults[moduleKey].total++;
        if (examAnswers[idx] === q.correct) {
            moduleResults[moduleKey].correct++;
        }
    });

    const percentage = Math.round((correct / examQuestions.length) * 100);
    const passed = percentage >= 70;

    // Actualizar progreso
    progress.examsCompleted++;
    if (percentage > progress.bestScore) {
        progress.bestScore = percentage;
    }
    saveProgress();

    // Feature 4: Save exam history
    const perModule = {};
    Object.entries(moduleResults).forEach(([k, v]) => {
        perModule[k] = Math.round((v.correct / v.total) * 100);
    });
    const timeUsed = 180 * 60 - examTimeRemaining;
    examHistory.unshift({
        date: new Date().toLocaleDateString(),
        score: correct,
        total: examQuestions.length,
        percentage,
        perModule,
        timeUsed: formatTime(timeUsed),
        weighted: document.getElementById('weightedToggle') ? document.getElementById('weightedToggle').checked : false
    });
    if (examHistory.length > 10) examHistory = examHistory.slice(0, 10);
    localStorage.setItem('ecih_examHistory', JSON.stringify(examHistory));

    // Mostrar resultados
    document.getElementById('examContainer').style.display = 'none';
    document.getElementById('examResults').style.display = 'block';

    let moduleResultsHtml = Object.entries(moduleResults).map(([module, data]) => {
        const pct = Math.round((data.correct / data.total) * 100);
        return `<div class="result-item">
            <h4>${module}</h4>
            <p>${data.correct}/${data.total} (${pct}%)</p>
        </div>`;
    }).join('');

    document.getElementById('examResults').innerHTML = `
        <h2>${passed ? t('result.passed') : t('result.failed')}</h2>
        <div class="result-score ${passed ? 'pass' : 'fail'}">${percentage}%</div>
        <p>${t('result.correct')}: ${correct}/${examQuestions.length}</p>
        <p>${t('result.minRequired')}: 70%</p>

        <div class="result-details">
            <div class="result-item">
                <h4>${t('result.timeUsed')}</h4>
                <p>${formatTime(180 * 60 - examTimeRemaining)}</p>
            </div>
            <div class="result-item">
                <h4>${t('result.answered')}</h4>
                <p>${examAnswers.filter(a => a !== null).length}/${examQuestions.length}</p>
            </div>
            <div class="result-item">
                <h4>${t('result.accuracy')}</h4>
                <p>${percentage}%</p>
            </div>
        </div>

        <h3>${t('result.byModule')}</h3>
        <div class="result-details" style="grid-template-columns: repeat(5, 1fr);">
            ${moduleResultsHtml}
        </div>

        <button class="start-exam-btn" onclick="reviewExam()" style="margin: 20px 10px;">
            ${t('btn.review')}
        </button>
        <button class="start-exam-btn" onclick="restartExam()" style="margin: 20px 10px;">
            ${t('btn.newExam')}
        </button>
    `;
}

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
}

function reviewExam() {
    examIsReviewing = true;
    document.getElementById('examResults').style.display = 'none';
    document.getElementById('examContainer').style.display = 'block';

    // Mostrar todas las respuestas correctas/incorrectas
    displayExamReview();
}

function displayExamReview() {
    const q = examQuestions[examCurrentIndex];
    const letters = ['A', 'B', 'C', 'D'];
    const userAnswer = examAnswers[examCurrentIndex];
    const questionText = getQuestionText(q);
    const options = getQuestionOptions(q);
    const explanation = getQuestionExplanation(q);
    const diffBadge = getDifficultyBadgeHtml(questionText);

    let optionsHtml = options.map((opt, idx) => {
        let classes = 'option-item';
        if (idx === q.correct) classes += ' correct';
        else if (idx === userAnswer && userAnswer !== q.correct) classes += ' incorrect';

        return `
        <li class="${classes}">
            <span class="option-letter">${letters[idx]}</span>
            <span>${opt}</span>
        </li>`;
    }).join('');

    // Feature 3: flag indicator in review
    const isFlagged = examFlagged[examCurrentIndex];
    const flagIndicator = isFlagged ? `<span class="flag-indicator">🚩 ${t('exam.flagged')}</span>` : '';

    document.getElementById('examQuestion').innerHTML = `
        <div class="question-header-row">
            <p class="question-text">${examCurrentIndex + 1}. ${questionText} ${diffBadge} ${flagIndicator}</p>
        </div>
        <ul class="options-list">${optionsHtml}</ul>
        <div class="explanation show">
            <strong>${t('label.explanation')}:</strong> ${explanation}
        </div>
    `;

    document.getElementById('examProgress').textContent =
        `${examCurrentIndex + 1}/${examQuestions.length}`;

    // Actualizar grid con colores
    const buttons = document.querySelectorAll('.q-btn');
    buttons.forEach((btn, idx) => {
        btn.classList.remove('current');
        if (idx === examCurrentIndex) btn.classList.add('current');

        if (examAnswers[idx] === examQuestions[idx].correct) {
            btn.style.background = 'var(--success)';
        } else if (examAnswers[idx] !== null) {
            btn.style.background = 'var(--danger)';
        }
    });
}

function restartExam() {
    document.getElementById('examResults').style.display = 'none';
    document.getElementById('examIntro').style.display = 'flex';
    document.getElementById('examContainer').style.display = 'none';

    // Reset grid colors
    document.querySelectorAll('.q-btn').forEach(btn => {
        btn.style.background = '';
    });
}

// =============================================
// PROGRESO
// =============================================

function loadProgress() {
    const saved = localStorage.getItem('incident-handler_progress');
    if (saved) {
        progress = JSON.parse(saved);
    }
}

function saveProgress() {
    localStorage.setItem('incident-handler_progress', JSON.stringify(progress));
}

function updateProgressDisplay() {
    document.getElementById('totalStudied').textContent = progress.flashcardsStudied;

    const accuracy = progress.practiceTotal > 0
        ? Math.round((progress.practiceCorrect / progress.practiceTotal) * 100)
        : 0;
    document.getElementById('totalCorrect').textContent = accuracy + '%';

    document.getElementById('examsCompleted').textContent = progress.examsCompleted;
    document.getElementById('bestScore').textContent = progress.bestScore + '%';
}

function renderModuleProgressBars() {
    const container = document.getElementById('moduleProgress');
    container.innerHTML = '';

    for (let i = 1; i <= 10; i++) {
        const moduleKey = `module${i}`;
        const data = progress.moduleScores[moduleKey] || { correct: 0, total: 0 };
        const percentage = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
        const barColor = percentage < 60 && data.total > 0
            ? 'background: linear-gradient(90deg, var(--danger) 0%, #ff6b6b 100%);'
            : '';

        container.innerHTML += `
            <div class="progress-bar-item">
                <span class="progress-bar-label">${t('module.prefix')} ${i}</span>
                <div class="progress-bar-track">
                    <div class="progress-bar-fill" style="width: ${percentage}%; ${barColor}"></div>
                </div>
                <span class="progress-bar-value">${percentage}%</span>
            </div>
        `;
    }
}

function resetProgress() {
    if (confirm(t('confirm.reset'))) {
        progress = {
            flashcardsStudied: 0,
            practiceCorrect: 0,
            practiceTotal: 0,
            examsCompleted: 0,
            bestScore: 0,
            moduleScores: {}
        };
        saveProgress();
        updateProgressDisplay();
        renderModuleProgressBars();
    }
}

// Feature 4: Render exam history table
function renderExamHistory() {
    const container = document.getElementById('examHistoryContainer');
    if (!container) return;

    if (examHistory.length === 0) {
        container.innerHTML = `<p class="no-history">${t('history.none')}</p>`;
        return;
    }

    // Calculate average
    const avg = Math.round(examHistory.reduce((s, e) => s + e.percentage, 0) / examHistory.length);

    // Trend: compare last vs second-to-last
    let trendHtml = '';
    if (examHistory.length >= 2) {
        const diff = examHistory[0].percentage - examHistory[1].percentage;
        if (diff > 0) trendHtml = `<span class="trend-up">▲ +${diff}%</span>`;
        else if (diff < 0) trendHtml = `<span class="trend-down">▼ ${diff}%</span>`;
        else trendHtml = `<span class="trend-flat">→ 0%</span>`;
    }

    const rows = examHistory.map((e, i) => {
        const pctClass = e.percentage >= 70 ? 'pass' : 'fail';
        const trendIcon = i === 0 && examHistory.length >= 2
            ? (e.percentage >= examHistory[1].percentage ? '▲' : '▼')
            : '';
        return `<tr>
            <td>${e.date}</td>
            <td>${e.score}/${e.total}</td>
            <td class="history-pct ${pctClass}">${e.percentage}%</td>
            <td>${e.timeUsed}</td>
            <td>${trendIcon}</td>
        </tr>`;
    }).join('');

    container.innerHTML = `
        <h3>${t('history.title')} ${trendHtml} — ${t('history.avg')}: ${avg}%</h3>
        <table class="history-table">
            <thead><tr>
                <th>${t('history.date')}</th>
                <th>${t('history.score')}</th>
                <th>${t('history.pct')}</th>
                <th>${t('history.time')}</th>
                <th>${t('history.trend')}</th>
            </tr></thead>
            <tbody>${rows}</tbody>
        </table>
    `;
}

// Feature 6: Leitner Spaced Repetition
function getLeitnerBox(cardKey) {
    return leitnerBoxes[cardKey] || 1;
}

function setLeitnerBox(cardKey, box) {
    leitnerBoxes[cardKey] = Math.max(1, Math.min(5, box));
    localStorage.setItem('ecih_leitnerBoxes', JSON.stringify(leitnerBoxes));
}

function getCardKey(cardIndex) {
    const card = currentFlashcards[cardIndex];
    return card ? `fc_${card.module}_${card.q.substring(0, 30).replace(/\s/g, '_')}` : `fc_${cardIndex}`;
}

function leitnerCorrect() {
    const key = getCardKey(currentFlashcardIndex);
    const current = getLeitnerBox(key);
    setLeitnerBox(key, current + 1);
    renderLeitnerDistribution();
    nextFlashcard();
}

function leitnerWrong() {
    const key = getCardKey(currentFlashcardIndex);
    setLeitnerBox(key, 1);
    renderLeitnerDistribution();
    nextFlashcard();
}

function loadLeitnerPendingCards() {
    leitnerSession++;
    localStorage.setItem('ecih_leitnerSession', leitnerSession);

    // Due intervals per box: box1=every session, box2=every2, box3=every4, box4=every8, box5=mastered(skip)
    const intervals = [0, 1, 2, 4, 8, Infinity];

    const allCards = currentFlashcards.length > 0 ? currentFlashcards : [...flashcards];
    const pending = allCards.filter((card, idx) => {
        const key = `fc_${card.module}_${card.q.substring(0, 30).replace(/\s/g, '_')}`;
        const box = getLeitnerBox(key);
        if (box >= 5) return false; // mastered
        return leitnerSession % intervals[box] === 0;
    });

    if (pending.length === 0) {
        alert('No hay tarjetas pendientes para esta sesión (¡todas en caja alta!). Intenta en la siguiente sesión.');
        return;
    }

    currentFlashcards = pending.sort(() => Math.random() - 0.5);
    currentFlashcardIndex = 0;
    displayFlashcard();
    renderLeitnerDistribution();
}

function renderLeitnerDistribution() {
    const container = document.getElementById('leitnerDistribution');
    if (!container) return;

    const dist = [0, 0, 0, 0, 0, 0]; // index 1-5
    const allCards = [...flashcards];
    allCards.forEach(card => {
        const key = `fc_${card.module}_${card.q.substring(0, 30).replace(/\s/g, '_')}`;
        const box = getLeitnerBox(key);
        if (box >= 1 && box <= 5) dist[box]++;
    });

    const boxLabels = ['', t('leitner.box') + ' 1', t('leitner.box') + ' 2', t('leitner.box') + ' 3', t('leitner.box') + ' 4', t('leitner.mastered')];
    container.innerHTML = `<div class="leitner-dist">` +
        [1,2,3,4,5].map(b => `<span class="leitner-box leitner-box-${b}">${boxLabels[b]}: ${dist[b]}</span>`).join('') +
        `</div>`;
}

// =============================================
// UTILIDADES
// =============================================

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const activeSection = document.querySelector('.section.active');

    if (!activeSection) return;

    const sectionId = activeSection.id;

    if (sectionId === 'flashcards') {
        if (e.key === 'ArrowRight') nextFlashcard();
        if (e.key === 'ArrowLeft') prevFlashcard();
        if (e.key === ' ') {
            e.preventDefault();
            document.querySelector('.flashcard').click();
        }
    }

    if (sectionId === 'practica') {
        if (e.key === 'ArrowRight') nextQuestion();
        if (e.key === 'ArrowLeft') prevQuestion();
    }

    if (sectionId === 'simulacro' && document.getElementById('examContainer').style.display !== 'none') {
        if (e.key === 'ArrowRight') nextExamQuestion();
        if (e.key === 'ArrowLeft') prevExamQuestion();
    }
});
