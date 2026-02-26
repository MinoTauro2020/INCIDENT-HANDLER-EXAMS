// =============================================
// ECIH v3 - APLICACIÓN DE ESTUDIO
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

// Progreso (localStorage)
let progress = {
    flashcardsStudied: 0,
    practiceCorrect: 0,
    practiceTotal: 0,
    examsCompleted: 0,
    bestScore: 0,
    moduleScores: {}
};

// =============================================
// INTERNACIONALIZACIÓN (i18n)
// =============================================

let currentLang = localStorage.getItem('ecih_lang') || 'es';

const i18n = {
    es: {
        'dashboard.welcome': 'Bienvenido al Estudio ECIH v3',
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
        'exam.title': 'Examen ECIH v3',
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
        'flashcard.loading': 'Cargando...'
    },
    en: {
        'dashboard.welcome': 'Welcome to ECIH v3 Study Platform',
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
        'exam.title': 'ECIH v3 Exam',
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
        'flashcard.loading': 'Loading...'
    }
};

function t(key) {
    return (i18n[currentLang] && i18n[currentLang][key]) || (i18n['es'][key]) || key;
}

function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem('ecih_lang', currentLang);
    applyLanguage();
    // Re-render active view content
    loadFlashcards();
    loadPracticeQuestions();
    updateProgressDisplay();
    renderModuleProgressBars();
    updateWeakAreas();
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

            // Handle all formats: array, { questions: [] }, { additional_questions: [] }
            const rawList = Array.isArray(data) ? data : (data.questions || data.additional_questions || []);

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
        'questions_pro_m6_m10.json'
    ];
    for (const file of proFiles) {
        try {
            const resp = await fetch(file);
            if (!resp.ok) continue;
            const data = await resp.json();
            const rawList = Array.isArray(data) ? data : (data.questions || data.additional_questions || []);

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
    loadProgress();
    applyLanguage();
    loadModuleContent();
    loadFlashcards();
    loadPracticeQuestions();
    updateProgressDisplay();
    updateWeakAreas();

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
    }
    if (sectionId === 'dashboard') {
        updateWeakAreas();
    }
}

function showModule(moduleNum) {
    document.getElementById('moduleSelect').value = moduleNum;
    loadModuleContent();
    showSection('modulos');
    // Actualizar nav
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.textContent === 'Módulos') link.classList.add('active');
    });
}

// =============================================
// MÓDULOS
// =============================================

function loadModuleContent() {
    const moduleNum = document.getElementById('moduleSelect').value;
    const module = moduleContent[moduleNum];

    if (module) {
        document.getElementById('moduleContent').innerHTML = `
            <h2>${module.title}</h2>
            ${module.content}
        `;
    }
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

function loadPracticeQuestions() {
    const moduleFilter = document.getElementById('practiceModule').value;

    if (moduleFilter === 'all') {
        currentQuestions = [...practiceQuestions].sort(() => Math.random() - 0.5);
    } else {
        currentQuestions = practiceQuestions
            .filter(q => q.module == moduleFilter)
            .sort(() => Math.random() - 0.5);
    }

    currentQuestionIndex = 0;
    practiceCorrect = 0;
    practiceTotal = 0;
    updatePracticeScore();
    displayPracticeQuestion();
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

    document.getElementById('practiceContainer').innerHTML = `
        <p class="question-text">${currentQuestionIndex + 1}. ${questionText} ${diffBadge}</p>
        <ul class="options-list">${optionsHtml}</ul>
        <div class="explanation" id="explanation">
            <strong>${t('label.explanation')}:</strong> ${explanation}
        </div>
        <div class="answer-module-stats" id="answerModuleStats" style="display:none;"></div>
    `;

    document.getElementById('questionCounter').textContent =
        `${currentQuestionIndex + 1}/${currentQuestions.length}`;
}

function selectPracticeAnswer(selectedIdx, element) {
    const q = currentQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.option-item');

    // Deshabilitar más clics
    options.forEach(opt => opt.onclick = null);

    // Marcar respuestas
    options.forEach((opt, idx) => {
        if (idx === q.correct) {
            opt.classList.add('correct');
        } else if (idx === selectedIdx) {
            opt.classList.add('incorrect');
        }
    });

    // Mostrar explicación
    document.getElementById('explanation').classList.add('show');

    // Actualizar puntuación
    practiceTotal++;
    progress.practiceTotal++;

    const moduleKey = `module${q.module}`;
    if (!progress.moduleScores[moduleKey]) {
        progress.moduleScores[moduleKey] = { correct: 0, total: 0 };
    }

    if (selectedIdx === q.correct) {
        practiceCorrect++;
        progress.practiceCorrect++;
        progress.moduleScores[moduleKey].correct++;
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
        displayPracticeQuestion();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayPracticeQuestion();
    }
}

// =============================================
// SIMULACRO DE EXAMEN
// =============================================

function startExam() {
    // Generar preguntas del examen
    examQuestions = generateExamQuestions();
    examAnswers = new Array(examQuestions.length).fill(null);
    examCurrentIndex = 0;
    examTimeRemaining = 180 * 60; // 3 horas

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
        btn.classList.remove('current', 'answered');
        if (idx === examCurrentIndex) btn.classList.add('current');
        if (examAnswers[idx] !== null) btn.classList.add('answered');
    });
}

function displayExamQuestion() {
    const q = examQuestions[examCurrentIndex];
    const letters = ['A', 'B', 'C', 'D'];
    const questionText = getQuestionText(q);
    const options = getQuestionOptions(q);
    const diffBadge = getDifficultyBadgeHtml(questionText);

    let optionsHtml = options.map((opt, idx) => `
        <li class="option-item ${examAnswers[examCurrentIndex] === idx ? 'selected' : ''}"
            onclick="selectExamAnswer(${idx}, this)">
            <span class="option-letter">${letters[idx]}</span>
            <span>${opt}</span>
        </li>
    `).join('');

    document.getElementById('examQuestion').innerHTML = `
        <p class="question-text">${examCurrentIndex + 1}. ${questionText} ${diffBadge}</p>
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

function goToExamQuestion(index) {
    examCurrentIndex = index;
    displayExamQuestion();
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

    document.getElementById('examQuestion').innerHTML = `
        <p class="question-text">${examCurrentIndex + 1}. ${questionText} ${diffBadge}</p>
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
    const saved = localStorage.getItem('ecih_progress');
    if (saved) {
        progress = JSON.parse(saved);
    }
}

function saveProgress() {
    localStorage.setItem('ecih_progress', JSON.stringify(progress));
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
