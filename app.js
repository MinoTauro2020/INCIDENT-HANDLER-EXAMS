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

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    loadModuleContent();
    loadFlashcards();
    loadPracticeQuestions();
    updateProgressDisplay();
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
    });
    event.target.classList.add('active');

    // Acciones específicas por sección
    if (sectionId === 'progreso') {
        updateProgressDisplay();
        renderModuleProgressBars();
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
        document.getElementById('flashcardQuestion').textContent = 'No hay flashcards para este módulo';
        document.getElementById('flashcardAnswer').textContent = '';
        document.getElementById('flashcardCounter').textContent = '0/0';
        return;
    }

    const card = currentFlashcards[currentFlashcardIndex];
    document.getElementById('flashcardQuestion').textContent = card.q;
    document.getElementById('flashcardAnswer').textContent = card.a;
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

function displayPracticeQuestion() {
    if (currentQuestions.length === 0) {
        document.getElementById('practiceContainer').innerHTML =
            '<p>No hay preguntas para este módulo</p>';
        document.getElementById('questionCounter').textContent = '0/0';
        return;
    }

    const q = currentQuestions[currentQuestionIndex];
    const letters = ['A', 'B', 'C', 'D'];

    let optionsHtml = q.options.map((opt, idx) => `
        <li class="option-item" onclick="selectPracticeAnswer(${idx}, this)">
            <span class="option-letter">${letters[idx]}</span>
            <span>${opt}</span>
        </li>
    `).join('');

    document.getElementById('practiceContainer').innerHTML = `
        <p class="question-text">${currentQuestionIndex + 1}. ${q.question}</p>
        <ul class="options-list">${optionsHtml}</ul>
        <div class="explanation" id="explanation">
            <strong>Explicación:</strong> ${q.explanation}
        </div>
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

    if (selectedIdx === q.correct) {
        practiceCorrect++;
        progress.practiceCorrect++;

        // Actualizar score por módulo
        const moduleKey = `module${q.module}`;
        if (!progress.moduleScores[moduleKey]) {
            progress.moduleScores[moduleKey] = { correct: 0, total: 0 };
        }
        progress.moduleScores[moduleKey].correct++;
        progress.moduleScores[moduleKey].total++;
    } else {
        const moduleKey = `module${q.module}`;
        if (!progress.moduleScores[moduleKey]) {
            progress.moduleScores[moduleKey] = { correct: 0, total: 0 };
        }
        progress.moduleScores[moduleKey].total++;
    }

    saveProgress();
    updatePracticeScore();
}

function updatePracticeScore() {
    document.getElementById('practiceScore').textContent =
        `Puntuación: ${practiceCorrect}/${practiceTotal}`;
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

    let optionsHtml = q.options.map((opt, idx) => `
        <li class="option-item ${examAnswers[examCurrentIndex] === idx ? 'selected' : ''}"
            onclick="selectExamAnswer(${idx}, this)">
            <span class="option-letter">${letters[idx]}</span>
            <span>${opt}</span>
        </li>
    `).join('');

    document.getElementById('examQuestion').innerHTML = `
        <p class="question-text">${examCurrentIndex + 1}. ${q.question}</p>
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
        <h2>${passed ? '¡APROBADO!' : 'NO APROBADO'}</h2>
        <div class="result-score ${passed ? 'pass' : 'fail'}">${percentage}%</div>
        <p>Respuestas correctas: ${correct}/${examQuestions.length}</p>
        <p>Puntuación mínima requerida: 70%</p>

        <div class="result-details">
            <div class="result-item">
                <h4>Tiempo usado</h4>
                <p>${formatTime(180 * 60 - examTimeRemaining)}</p>
            </div>
            <div class="result-item">
                <h4>Preguntas contestadas</h4>
                <p>${examAnswers.filter(a => a !== null).length}/${examQuestions.length}</p>
            </div>
            <div class="result-item">
                <h4>Precisión</h4>
                <p>${percentage}%</p>
            </div>
        </div>

        <h3>Resultados por Módulo</h3>
        <div class="result-details" style="grid-template-columns: repeat(5, 1fr);">
            ${moduleResultsHtml}
        </div>

        <button class="start-exam-btn" onclick="reviewExam()" style="margin: 20px 10px;">
            Revisar Respuestas
        </button>
        <button class="start-exam-btn" onclick="restartExam()" style="margin: 20px 10px;">
            Nuevo Simulacro
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

    let optionsHtml = q.options.map((opt, idx) => {
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
        <p class="question-text">${examCurrentIndex + 1}. ${q.question}</p>
        <ul class="options-list">${optionsHtml}</ul>
        <div class="explanation show">
            <strong>Explicación:</strong> ${q.explanation}
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

        container.innerHTML += `
            <div class="progress-bar-item">
                <span class="progress-bar-label">Módulo ${i}</span>
                <div class="progress-bar-track">
                    <div class="progress-bar-fill" style="width: ${percentage}%"></div>
                </div>
                <span class="progress-bar-value">${percentage}%</span>
            </div>
        `;
    }
}

function resetProgress() {
    if (confirm('¿Estás seguro de que quieres reiniciar todo tu progreso?')) {
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
