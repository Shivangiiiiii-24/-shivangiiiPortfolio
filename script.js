// Theme toggle with localStorage
(function () {
  const root = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');

  const applyTheme = (mode) => {
    if (mode === 'dark') {
      root.classList.add('dark');
      icon.textContent = '☀';
    } else {
      root.classList.remove('dark');
      icon.textContent = '☾';
    }
  };

  const stored = window.localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = stored || (prefersDark ? 'dark' : 'light');
  applyTheme(initial);

  toggleBtn?.addEventListener('click', () => {
    const next = root.classList.contains('dark') ? 'light' : 'dark';
    window.localStorage.setItem('theme', next);
    applyTheme(next);
  });
})();

// Mobile nav
(function () {
  const navToggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  navToggle?.addEventListener('click', () => {
    mobileNav?.classList.toggle('hidden');
  });

  mobileNav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.add('hidden');
    });
  });
})();

// Smooth section reveal & skill bar animation
(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');

          // Activate skill bars
          entry.target.querySelectorAll('.skill-bar').forEach((bar) => {
            bar.setAttribute('data-active', 'true');
          });
        }
      });
    },
    {
      threshold: 0.16,
    }
  );

  document.querySelectorAll('section').forEach((section) => {
    section.classList.add('reveal');
    observer.observe(section);
  });
})();

// Project and certificate modal data
const PROJECT_DETAILS = {
  'ml-weather': {
    title: 'Intelligent Weather Insights',
    subtitle: 'ML · Time Series · Forecasting',
    problem:
      'Short-term weather forecasts are often difficult to interpret and compare across multiple days when working only with raw numeric data.',
    solution:
      'Built a Python-based pipeline that ingests historical weather data, engineers meaningful features, and trains regression models to predict short-term temperature and humidity.',
    features: [
      'Data cleaning and preprocessing with pandas',
      'Feature engineering for time-based patterns (lags, moving averages, etc.)',
      'Model experimentation with multiple regressors and evaluation metrics',
      'Interactive dashboard-like visualizations using Matplotlib/Seaborn',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
    challenges: [
      'Handling missing or inconsistent data from multiple weather sources',
      'Selecting the right set of time-based features for accurate predictions',
      'Balancing model complexity with interpretability for non-technical users',
    ],
    future: [
      'Deploy the model as an API backed by a lightweight web interface',
      'Incorporate live weather API data for continuous updates',
      'Experiment with advanced models such as LSTMs for sequence learning',
    ],
  },
  'student-performance': {
    title: 'Student Performance Analyzer',
    subtitle: 'Classification · Analytics · Education',
    problem:
      'Educators often struggle to identify students who might need help early, as signals are hidden inside multiple features like attendance, scores, and engagement.',
    solution:
      'Developed a classification model that predicts the likelihood of students under-performing based on academic and behavioral data, helping educators take proactive action.',
    features: [
      'Exploratory data analysis to uncover correlations and patterns',
      'Feature selection and engineering for student attributes',
      'Evaluation using accuracy, precision, recall, and confusion matrices',
      'Visual reports that highlight important features for decision-making',
    ],
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Seaborn', 'Jupyter Notebook'],
    challenges: [
      'Working with imbalanced datasets and ensuring fair evaluation',
      'Avoiding overfitting while keeping performance competitive',
      'Explaining model results in a simple and intuitive way for educators',
    ],
    future: [
      'Integrate into a dashboard for teachers and administrators',
      'Explore explainable AI techniques (e.g., SHAP values)',
      'Add temporal analysis to monitor student progress over time',
    ],
  },
  'portfolio-site': {
    title: 'Personal Portfolio Website',
    subtitle: 'Frontend · UI/UX · Branding',
    problem:
      'Needed a single place to present skills, projects, achievements, and contact details in a way that feels polished and professional.',
    solution:
      'Designed and developed a fully responsive portfolio website with smooth animations, dark/light theme toggle, and clearly structured sections.',
    features: [
      'Modern hero section with clear call-to-actions',
      'Structured sections for skills, projects, certificates, and education',
      'Mobile-first design with sticky navigation and smooth scrolling',
      'Dark/light theme toggle persisted with localStorage',
    ],
    technologies: ['HTML', 'CSS', 'Tailwind (CDN)', 'Vanilla JavaScript'],
    challenges: [
      'Balancing minimalism with enough visual personality',
      'Ensuring good readability and contrast in both themes',
      'Keeping the layout flexible for future sections and content',
    ],
    future: [
      'Integrate a simple blog or notes section for sharing learnings',
      'Add analytics to understand traffic and engagement',
      'Migrate to a component-based framework for easier expansion',
    ],
  },
  'dsa-visualizer': {
    title: 'Data Structures & Algorithms Visualizer',
    subtitle: 'Algorithms · Education · Visualization',
    problem:
      'Many learners struggle to understand how data structures and algorithms behave during operations, especially when reading only code.',
    solution:
      'Created interactive visualizations that show step-by-step operations for common data structures and algorithms.',
    features: [
      'Visual representation of arrays, stacks, queues, and linked lists',
      'Step-by-step playback for operations like insert, delete, and search',
      'Animations for sorting algorithms with highlighted comparisons and swaps',
      'Configurable speed controls to slow down or speed up execution',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'HTML5 Canvas'],
    challenges: [
      'Synchronizing algorithm logic with the visual animation timeline',
      'Keeping the UI intuitive while exposing enough controls',
      'Optimizing animations to run smoothly on lower-powered devices',
    ],
    future: [
      'Add support for graph algorithms and pathfinding visualizations',
      'Allow users to input their own datasets',
      'Turn it into an interactive learning platform with guided exercises',
    ],
  },
};

const CERTIFICATE_DETAILS = {
  'ml-specialization': {
    title: 'Machine Learning Specialization',
    org: 'Coursera / University / Platform',
    description:
      'Completed a structured sequence of courses covering supervised learning, unsupervised learning, model evaluation, and practical ML workflows.',
    highlights: [
      'Implemented algorithms such as linear/logistic regression, decision trees, and clustering',
      'Worked through multiple assignments focused on real-world datasets',
      'Strengthened understanding of bias-variance trade-off and regularization',
    ],
  },
  'python-dsa': {
    title: 'Python & Data Structures',
    org: 'Platform / Institute',
    description:
      'Focused on mastering Python fundamentals along with data structures and algorithmic problem solving.',
    highlights: [
      'Practiced implementing arrays, linked lists, stacks, queues, trees, and graphs',
      'Improved problem-solving speed and accuracy through regular challenges',
      'Applied concepts in mini-projects and coding competitions',
    ],
  },
  'ml-hackathon': {
    title: 'AI / ML Hackathon Participation',
    org: 'Hackathon Organizer',
    description:
      'Competed in an AI/ML hackathon, collaboratively building a solution under time constraints.',
    highlights: [
      'Collaborated with teammates to define the problem and approach quickly',
      'Worked on data preprocessing, model selection, and evaluation',
      'Presented the solution to judges and received constructive feedback',
    ],
  },
};

// Modal logic
(function () {
  const projectModal = document.getElementById('project-modal');
  const projectContent = document.getElementById('project-modal-content');
  const certificateModal = document.getElementById('certificate-modal');
  const certificateContent = document.getElementById('certificate-modal-content');

  const openModal = (modalEl) => {
    if (!modalEl) return;
    modalEl.classList.remove('hidden');
    modalEl.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = (modalEl) => {
    if (!modalEl) return;
    modalEl.classList.add('hidden');
    modalEl.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('[data-project-open]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-project-open');
      const data = PROJECT_DETAILS[id];
      if (!data || !projectContent) return;

      projectContent.innerHTML = `
        <p class="modal-subtitle">Project Detail</p>
        <h3>${data.title}</h3>
        <p style="margin-top:0.25rem;font-size:0.8rem;color:rgba(148,163,184,0.9)">${data.subtitle}</p>
        <div style="margin-top:0.9rem;font-size:0.85rem;color:rgba(209,213,219,0.9)">
          <p><strong>Problem:</strong> ${data.problem}</p>
          <p style="margin-top:0.35rem;"><strong>Solution:</strong> ${data.solution}</p>
        </div>
        <div style="margin-top:0.75rem;display:grid;gap:0.6rem;font-size:0.82rem;">
          <div>
            <p class="modal-section-title">Features</p>
            <ul class="modal-list">
              ${data.features.map((f) => `<li>${f}</li>`).join('')}
            </ul>
          </div>
          <div>
            <p class="modal-section-title">Technologies</p>
            <div style="display:flex;flex-wrap:wrap;gap:0.4rem;margin-top:0.3rem;">
              ${data.technologies.map((t) => `<span class="modal-tag">${t}</span>`).join('')}
            </div>
          </div>
          <div>
            <p class="modal-section-title">Challenges</p>
            <ul class="modal-list">
              ${data.challenges.map((c) => `<li>${c}</li>`).join('')}
            </ul>
          </div>
          <div>
            <p class="modal-section-title">Future Improvements</p>
            <ul class="modal-list">
              ${data.future.map((c) => `<li>${c}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;

      openModal(projectModal);
    });
  });

  document.querySelectorAll('[data-certificate-open]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-certificate-open');
      const data = CERTIFICATE_DETAILS[id];
      if (!data || !certificateContent) return;

      certificateContent.innerHTML = `
        <p class="modal-subtitle">Certificate</p>
        <h3>${data.title}</h3>
        <p style="margin-top:0.2rem;font-size:0.8rem;color:rgba(148,163,184,0.9)">${
          data.org
        }</p>
        <div style="margin-top:0.8rem;font-size:0.85rem;color:rgba(209,213,219,0.9)">
          <p>${data.description}</p>
        </div>
        <div style="margin-top:0.75rem;">
          <p class="modal-section-title">Highlights</p>
          <ul class="modal-list">
            ${data.highlights.map((h) => `<li>${h}</li>`).join('')}
          </ul>
        </div>
      `;

      openModal(certificateModal);
    });
  });

  document.querySelectorAll('[data-modal-close]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      closeModal(modal);
    });
  });

  document.querySelectorAll('.modal-backdrop').forEach((backdrop) => {
    backdrop.addEventListener('click', () => {
      const modal = backdrop.closest('.modal');
      closeModal(modal);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(projectModal);
      closeModal(certificateModal);
    }
  });
})();

// Set current year
(function () {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }
})();

