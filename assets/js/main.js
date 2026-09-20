/**
 * Blog de Eduardo Flores Yépez
 * JavaScript interactivo: Tema claro/oscuro, barra de lectura, tiempo estimado y utilidades.
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initReadingProgressBar();
  initReadingTime();
  initCodeCopyButtons();
  initShareButton();
  updateFooterYear();
});

// ============================================================================
// 1. CONTROL DE TEMA (DARK / LIGHT) CON LOCALSTORAGE
// ============================================================================
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(toggleBtn, currentTheme);

  toggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = activeTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(toggleBtn, newTheme);
  });
}

function updateThemeIcon(btn, theme) {
  if (theme === 'light') {
    btn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>`;
    btn.setAttribute('aria-label', 'Cambiar a modo oscuro');
    btn.setAttribute('title', 'Cambiar a modo oscuro');
  } else {
    btn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>`;
    btn.setAttribute('aria-label', 'Cambiar a modo claro');
    btn.setAttribute('title', 'Cambiar a modo claro');
  }
}

// ============================================================================
// 2. BARRA DE PROGRESO DE LECTURA
// ============================================================================
function initReadingProgressBar() {
  const progressBar = document.getElementById('reading-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }
  }, { passive: true });
}

// ============================================================================
// 3. CÁLCULO DINÁMICO DE TIEMPO DE LECTURA
// ============================================================================
function initReadingTime() {
  const articleContent = document.getElementById('article-content');
  const readingTimeEl = document.getElementById('reading-time');
  if (!articleContent || !readingTimeEl) return;

  const text = articleContent.innerText || articleContent.textContent;
  const wordCount = text.trim().split(/\s+/).length;
  const wordsPerMinute = 220;
  const minutes = Math.ceil(wordCount / wordsPerMinute);

  readingTimeEl.textContent = `${minutes} min de lectura (${wordCount.toLocaleString()} palabras)`;
}

// ============================================================================
// 4. BOTONES PARA COPIAR CÓDIGO
// ============================================================================
function initCodeCopyButtons() {
  const codeBlocks = document.querySelectorAll('pre');
  codeBlocks.forEach((block) => {
    const button = document.createElement('button');
    button.className = 'copy-code-btn';
    button.innerText = 'Copiar';
    button.style.position = 'absolute';
    button.style.top = '8px';
    button.style.right = '8px';
    button.style.padding = '4px 10px';
    button.style.fontSize = '12px';
    button.style.background = 'rgba(255, 255, 255, 0.1)';
    button.style.color = '#fff';
    button.style.border = '1px solid rgba(255, 255, 255, 0.2)';
    button.style.borderRadius = '4px';
    button.style.cursor = 'pointer';
    button.style.fontFamily = 'var(--font-mono)';

    block.style.position = 'relative';
    block.appendChild(button);

    button.addEventListener('click', () => {
      const code = block.querySelector('code');
      const textToCopy = code ? code.innerText : block.innerText;
      navigator.clipboard.writeText(textToCopy).then(() => {
        button.innerText = '¡Copiado!';
        button.style.borderColor = 'var(--accent-cyan)';
        button.style.color = 'var(--accent-cyan)';
        setTimeout(() => {
          button.innerText = 'Copiar';
          button.style.borderColor = 'rgba(255, 255, 255, 0.2)';
          button.style.color = '#fff';
        }, 2000);
      });
    });
  });
}

// ============================================================================
// 5. BOTÓN COPIAR ENLACE PERMANENTE / COMPARTIR
// ============================================================================
function initShareButton() {
  const shareBtn = document.getElementById('copy-permalink-btn');
  if (!shareBtn) return;

  shareBtn.addEventListener('click', () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      const originalText = shareBtn.innerHTML;
      shareBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg> ¡Enlace copiado!`;
      setTimeout(() => {
        shareBtn.innerHTML = originalText;
      }, 2500);
    });
  });
}

// ============================================================================
// 6. AÑO ACTUAL EN EL FOOTER
// ============================================================================
function updateFooterYear() {
  const yearEls = document.querySelectorAll('.current-year');
  const year = new Date().getFullYear();
  yearEls.forEach(el => el.textContent = year);
}
