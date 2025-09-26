// ===== CODE PLAYGROUND - MAIN APPLICATION =====
// Modern VS Code-inspired web playground for HTML, CSS, and JavaScript

class CodePlayground {
  constructor() {
    this.state = {
      currentFile: null,
      openTabs: [],
      files: {},
      editors: {},
      settings: {
        theme: 'dark',
        editorTheme: 'monokai',
        fontSize: 14,
        wordWrap: true,
        lineNumbers: true,
        autoSave: true,
        autoRun: false,
        livePreview: true,
        codeFolding: true,
        errorLinting: true
      },
      ui: {
        sidebarCollapsed: false,
        consoleVisible: false,
        previewVisible: true,
        zenMode: false,
        splitEditor: false
      },
      libraries: [
        {
          name: 'Font Awesome',
          id: 'fontawesome',
          css: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
          active: true
        }
      ],
      templates: {}
    };

    this.elements = {};
    this.eventHandlers = new Map();
    
    this.init();
  }

  // ===== INITIALIZATION =====
  async init() {
    try {
      console.log('🚀 Starting Code Playground initialization...');
      
      console.log('📋 Initializing DOM elements...');
      this.initializeElements();
      
      console.log('🎬 Showing loading screen...');
      this.showLoading();
      
      console.log('⚙️ Loading settings...');
      this.loadSettings();
      
      console.log('📁 Loading project...');
      this.loadProject();
      
      console.log('🔗 Setting up event listeners...');
      this.setupEventListeners();
      
      console.log('📦 Initializing default project...');
      this.initializeDefaultProject();
      
      console.log('✅ Playground initialized successfully');
      this.hideLoading();
      this.showWelcomeScreen();
    } catch (error) {
      console.error('❌ Failed to initialize playground:', error);
      this.hideLoading();
      this.showToast('Failed to initialize playground: ' + error.message, 'error');
      // Show error screen instead of welcome screen
      this.showErrorScreen(error);
    }
  }

  initializeElements() {
    console.log('🔍 Caching DOM elements...');
    
    // Cache DOM elements
    this.elements = {
      // Main containers
      playground: document.querySelector('.playground'),
      activityBar: document.querySelector('.activity-bar'),
      sidebar: document.querySelector('.sidebar'),
      mainContent: document.querySelector('.main-content'),
      
      // File explorer
      fileList: document.getElementById('file-list'),
      
      // Editor area
      tabBar: document.getElementById('tab-bar'),
      editorWrapper: document.getElementById('editor-wrapper'),
      welcomeScreen: document.getElementById('welcome-screen'),
      
      // Preview
      previewPanel: document.getElementById('preview-panel'),
      previewFrame: document.getElementById('preview-frame'),
      
      // Console
      consolePanel: document.getElementById('console-panel'),
      consoleOutput: document.getElementById('console-output'),
      
      // Status bar
      statusBar: document.getElementById('status-bar'),
      lineColInfo: document.getElementById('line-col-info'),
      fileTypeInfo: document.getElementById('file-type'),
      wordCountInfo: document.getElementById('word-count'),
      charCountInfo: document.getElementById('char-count'),
      
      // Modals
      settingsModal: document.getElementById('settings-modal'),
      commandPaletteModal: document.getElementById('command-palette-modal'),
      libraryModal: document.getElementById('library-modal'),
      fileSearchModal: document.getElementById('file-search-modal'),
      templateModal: document.getElementById('template-modal'),
      contextMenu: document.getElementById('context-menu'),
      toast: document.getElementById('toast'),
      loadingScreen: document.getElementById('loading-screen'),
      
      // Enhanced UI elements
      breadcrumbs: document.getElementById('breadcrumbs'),
      breadcrumbFile: document.getElementById('breadcrumb-file'),
      toastContainer: document.getElementById('toast-container')
    };

    // Verify essential elements exist
    const required = ['playground', 'fileList', 'tabBar', 'editorWrapper', 'previewFrame', 'loadingScreen'];
    const missing = required.filter(key => {
      const exists = !!this.elements[key];
      if (!exists) {
        console.warn(`❌ Missing element: ${key}`);
      } else {
        console.log(`✅ Found element: ${key}`);
      }
      return !exists;
    });
    
    if (missing.length > 0) {
      throw new Error(`Missing required DOM elements: ${missing.join(', ')}`);
    }
    
    console.log('✅ All required DOM elements found');
  }

  // ===== SETTINGS MANAGEMENT =====
  loadSettings() {
    try {
      const saved = localStorage.getItem('codePlayground.settings');
      if (saved) {
        this.state.settings = { ...this.state.settings, ...JSON.parse(saved) };
      }
      this.applySettings();
    } catch (error) {
      console.warn('Failed to load settings:', error);
    }
  }

  saveSettings() {
    try {
      localStorage.setItem('codePlayground.settings', JSON.stringify(this.state.settings));
      this.applySettings();
      this.showToast('Settings saved successfully');
    } catch (error) {
      console.error('Failed to save settings:', error);
      this.showToast('Failed to save settings', 'error');
    }
  }

  applySettings() {
    // Apply theme
    document.body.className = `theme-${this.state.settings.theme}`;
    
    // Apply font size
    this.updateFontSize();
    
    // Apply editor settings
    Object.values(this.state.editors).forEach(editor => {
      if (editor) {
        editor.setOption('lineWrapping', this.state.settings.wordWrap);
        editor.setOption('lineNumbers', this.state.settings.lineNumbers);
        editor.refresh();
      }
    });
  }

  updateFontSize() {
    const style = document.createElement('style');
    style.id = 'dynamic-font-size';
    style.textContent = `
      .CodeMirror {
        font-size: ${this.state.settings.fontSize}px !important;
      }
    `;
    
    // Remove existing style
    const existing = document.getElementById('dynamic-font-size');
    if (existing) existing.remove();
    
    document.head.appendChild(style);
  }

  // ===== PROJECT MANAGEMENT =====
  loadProject() {
    try {
      console.log('📂 Loading saved project...');
      const savedFiles = localStorage.getItem('codePlayground.files');
      const savedTabs = localStorage.getItem('codePlayground.openTabs');
      const savedCurrent = localStorage.getItem('codePlayground.currentFile');

      if (savedFiles) {
        console.log('📄 Found saved files');
        this.state.files = JSON.parse(savedFiles);
      } else {
        console.log('📄 No saved files found');
      }

      if (savedTabs) {
        console.log('📑 Found saved tabs');
        this.state.openTabs = JSON.parse(savedTabs);
      } else {
        console.log('📑 No saved tabs found');
      }

      if (savedCurrent && this.state.files[savedCurrent]) {
        console.log(`📌 Setting current file: ${savedCurrent}`);
        this.state.currentFile = savedCurrent;
      }

      this.renderFileTree();
      this.renderTabs();
      console.log('✅ Project loaded successfully');
    } catch (error) {
      console.warn('⚠️ Failed to load project:', error);
      // Don't throw error, just continue with empty project
    }
  }

  saveProject() {
    try {
      // Save current editor content
      if (this.state.currentFile && this.state.editors[this.state.currentFile]) {
        this.state.files[this.state.currentFile].content = this.state.editors[this.state.currentFile].getValue();
      }

      localStorage.setItem('codePlayground.files', JSON.stringify(this.state.files));
      localStorage.setItem('codePlayground.openTabs', JSON.stringify(this.state.openTabs));
      localStorage.setItem('codePlayground.currentFile', this.state.currentFile || '');
      
      if (this.state.settings.livePreview) {
        this.updatePreview();
      }
    } catch (error) {
      console.error('Failed to save project:', error);
    }
  }

  initializeDefaultProject() {
    if (Object.keys(this.state.files).length === 0) {
      this.createDefaultFiles();
    }
  }

  createDefaultFiles() {
    this.state.files = {
      'index.html': {
        type: 'html',
        content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Web Project</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Welcome to Code Playground</h1>
            <p>Start building amazing web applications!</p>
        </header>
        
        <main>
            <section class="hero">
                <h2>Your creativity starts here</h2>
                <button id="demo-btn" class="btn">Click me!</button>
            </section>
            
            <section class="features">
                <div class="feature">
                    <h3>🎨 Beautiful Design</h3>
                    <p>Create stunning interfaces with modern CSS</p>
                </div>
                <div class="feature">
                    <h3>⚡ Interactive</h3>
                    <p>Add dynamic behavior with JavaScript</p>
                </div>
                <div class="feature">
                    <h3>📱 Responsive</h3>
                    <p>Works perfectly on all devices</p>
                </div>
            </section>
        </main>
    </div>
    
    <script src="script.js"></script>
</body>
</html>`,
        modified: false
      },
      'style.css': {
        type: 'css',
        content: `/* Modern CSS Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

header {
    text-align: center;
    color: white;
    margin-bottom: 3rem;
}

header h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

header p {
    font-size: 1.2rem;
    opacity: 0.9;
}

.hero {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 3rem;
    text-align: center;
    margin-bottom: 3rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.hero h2 {
    color: white;
    font-size: 2.5rem;
    margin-bottom: 2rem;
}

.btn {
    background: linear-gradient(45deg, #ff6b6b, #ee5a24);
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    background: linear-gradient(45deg, #ff5252, #d63031);
}

.features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.feature {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    padding: 2rem;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: transform 0.3s ease;
}

.feature:hover {
    transform: translateY(-5px);
}

.feature h3 {
    color: white;
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.feature p {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.6;
}

@media (max-width: 768px) {
    .container {
        padding: 1rem;
    }
    
    header h1 {
        font-size: 2rem;
    }
    
    .hero {
        padding: 2rem;
    }
    
    .hero h2 {
        font-size: 1.8rem;
    }
}`,
        modified: false
      },
      'script.js': {
        type: 'javascript',
        content: `// Welcome to JavaScript!
console.log('🚀 Code Playground is ready!');

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM loaded successfully');
    
    // Get button element
    const demoBtn = document.getElementById('demo-btn');
    
    if (demoBtn) {
        // Add click event listener
        demoBtn.addEventListener('click', function() {
            // Create some magic! ✨
            this.textContent = 'Clicked! 🎉';
            this.style.transform = 'scale(1.1)';
            
            // Show alert
            alert('Hello from Code Playground! 🎊\\n\\nYou can edit this JavaScript in the editor and see changes instantly!');
            
            // Reset button after 2 seconds
            setTimeout(() => {
                this.textContent = 'Click me again!';
                this.style.transform = 'scale(1)';
            }, 2000);
            
            // Log to console
            console.log('🎉 Button clicked! Event handled successfully.');
        });
        
        console.log('🔗 Event listeners attached');
    }
    
    // Demo of dynamic content
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        feature.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(255, 255, 255, 0.2)';
            console.log(\`🎯 Hovering over feature \${index + 1}\`);
        });
        
        feature.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255, 255, 255, 0.1)';
        });
    });
});

// Example function
function greetUser(name = 'Developer') {
    return \`Hello, \${name}! Welcome to your coding journey! 🚀\`;
}

// Call the function
console.log(greetUser());
console.log(greetUser('Awesome Coder'));

// Example of modern JavaScript features
const projectInfo = {
    name: 'Code Playground',
    version: '2.0.0',
    features: ['HTML5', 'CSS3', 'JavaScript ES6+'],
    isAwesome: true
};

console.log('📦 Project Info:', projectInfo);

// Destructuring example
const { name, features, isAwesome } = projectInfo;
console.log(\`📝 Project: \${name}\`);
console.log(\`🛠️ Features: \${features.join(', ')}\`);
console.log(\`⭐ Is awesome? \${isAwesome ? 'Yes!' : 'No'}\`);`,
        modified: false
      }
    };

    this.state.openTabs = ['index.html', 'style.css', 'script.js'];
    this.state.currentFile = 'index.html';

    this.saveProject();
    this.renderFileTree();
    this.renderTabs();
  }

  // ===== FILE MANAGEMENT =====
  createFile(filename, type = 'text') {
    if (this.state.files[filename]) {
      this.showToast(`File ${filename} already exists`, 'warning');
      return false;
    }

    const templates = {
      html: '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n</head>\n<body>\n    \n</body>\n</html>',
      css: '/* Add your CSS styles here */\n',
      javascript: '// Add your JavaScript code here\nconsole.log("Hello, World!");',
      text: ''
    };

    this.state.files[filename] = {
      type: type,
      content: templates[type] || templates.text,
      modified: false
    };

    this.renderFileTree();
    this.saveProject();
    this.showToast(`Created ${filename}`);
    return true;
  }

  deleteFile(filename) {
    if (!this.state.files[filename]) {
      return false;
    }

    // Close tab if open
    this.closeTab(filename);
    
    // Remove from files
    delete this.state.files[filename];
    
    // Clean up editor
    if (this.state.editors[filename]) {
      delete this.state.editors[filename];
    }

    this.renderFileTree();
    this.saveProject();
    this.showToast(`Deleted ${filename}`);
    return true;
  }

  renameFile(oldName, newName) {
    if (!this.state.files[oldName] || this.state.files[newName]) {
      return false;
    }

    // Copy file data
    this.state.files[newName] = { ...this.state.files[oldName] };
    delete this.state.files[oldName];

    // Update open tabs
    const tabIndex = this.state.openTabs.indexOf(oldName);
    if (tabIndex !== -1) {
      this.state.openTabs[tabIndex] = newName;
    }

    // Update current file
    if (this.state.currentFile === oldName) {
      this.state.currentFile = newName;
    }

    // Move editor
    if (this.state.editors[oldName]) {
      this.state.editors[newName] = this.state.editors[oldName];
      delete this.state.editors[oldName];
    }

    this.renderFileTree();
    this.renderTabs();
    this.saveProject();
    this.showToast(`Renamed ${oldName} to ${newName}`);
    return true;
  }

  openFile(filename) {
    if (!this.state.files[filename]) {
      this.showToast(`File ${filename} not found`, 'error');
      return;
    }

    // Hide welcome screen
    this.hideWelcomeScreen();

    // Add to open tabs if not already open
    if (!this.state.openTabs.includes(filename)) {
      this.state.openTabs.push(filename);
    }

    // Set as current file
    this.state.currentFile = filename;

    // Update breadcrumbs
    this.updateBreadcrumbs(filename);

    // Create editor if needed
    if (!this.state.editors[filename]) {
      this.createEditor(filename);
    }

    // Show current editor and hide others
    this.showEditor(filename);
    
    this.renderTabs();
    this.renderFileTree();
    
    // Update preview if it's an HTML file or if live preview is on
    if (this.state.settings.livePreview || filename.endsWith('.html')) {
      this.updatePreview();
    }

    this.saveProject();
  }

  closeTab(filename) {
    const tabIndex = this.state.openTabs.indexOf(filename);
    if (tabIndex === -1) return;

    // Remove from open tabs
    this.state.openTabs.splice(tabIndex, 1);

    // Clean up editor
    if (this.state.editors[filename]) {
      const editorElement = this.state.editors[filename].getWrapperElement();
      if (editorElement && editorElement.parentNode) {
        editorElement.parentNode.removeChild(editorElement);
      }
      delete this.state.editors[filename];
    }

    // Handle current file change
    if (this.state.currentFile === filename) {
      if (this.state.openTabs.length > 0) {
        // Open the last tab
        const lastTab = this.state.openTabs[this.state.openTabs.length - 1];
        this.openFile(lastTab);
      } else {
        // No tabs open, show welcome screen
        this.state.currentFile = null;
        this.showWelcomeScreen();
      }
    }

    this.renderTabs();
    this.saveProject();
  }

  // ===== EDITOR MANAGEMENT =====
  createEditor(filename) {
    const file = this.state.files[filename];
    if (!file) return null;

    try {
      console.log(`📝 Creating editor for ${filename}...`);

      // Check if CodeMirror is available
      if (typeof CodeMirror === 'undefined') {
        throw new Error('CodeMirror library not loaded');
      }

      // Create editor container
      const editorContainer = document.createElement('div');
      editorContainer.className = 'editor-instance';
      editorContainer.id = `editor-${filename.replace(/[^a-zA-Z0-9]/g, '-')}`;
      editorContainer.style.display = 'none';
      
      this.elements.editorWrapper.appendChild(editorContainer);

      // Determine CodeMirror mode
      const modeMap = {
        html: 'htmlmixed',
        css: 'css',
        javascript: 'javascript',
        js: 'javascript',
        json: 'application/json'
      };

      const mode = modeMap[file.type] || 'text/plain';
      console.log(`🎨 Using mode: ${mode} for type: ${file.type}`);

      // Create CodeMirror instance
      const editor = CodeMirror(editorContainer, {
        value: file.content,
        mode: mode,
        theme: this.state.settings.editorTheme,
        lineNumbers: this.state.settings.lineNumbers,
        lineWrapping: this.state.settings.wordWrap,
        autoCloseBrackets: true,
        autoCloseTags: true,
        matchBrackets: true,
        indentUnit: 2,
        tabSize: 2,
        foldGutter: this.state.settings.codeFolding,
        gutters: this.state.settings.codeFolding ? 
          ["CodeMirror-linenumbers", "CodeMirror-foldgutter"] : 
          ["CodeMirror-linenumbers"],
        extraKeys: {
          'Ctrl-Space': 'autocomplete',
          'Ctrl-/': 'toggleComment',
          'Ctrl-F': 'findPersistent',
          'Ctrl-H': 'replace',
          'F3': 'findNext',
          'Shift-F3': 'findPrev',
          'Alt-F': 'replace',
          'F11': () => this.toggleZenMode(),
          'Ctrl-S': (cm) => {
            cm.save();
            this.saveProject();
          }
        },
        hintOptions: {
          completeSingle: false,
          hint: this.getSmartHints.bind(this)
        }
      });

      // Add change listener
      editor.on('change', () => {
        // Mark file as modified
        file.modified = true;
        file.content = editor.getValue();
        
        // Update status bar
        this.updateStatusBar(editor);
        
        // Auto-save if enabled
        if (this.state.settings.autoSave) {
          this.saveProject();
        }

        // Auto-run if enabled
        if (this.state.settings.autoRun || this.state.settings.livePreview) {
          this.updatePreview();
        }
        
        // Update tab indicator
        this.renderTabs();
      });

      // Add cursor activity listener
      editor.on('cursorActivity', () => {
        this.updateStatusBar(editor);
      });

      // Add scroll listener for minimap
      editor.on('scroll', () => {
        this.updateMinimap();
      });

      // Add viewport change listener
      editor.on('viewportChange', () => {
        this.updateMinimap();
      });

      this.state.editors[filename] = editor;
      console.log(`✅ Editor created successfully for ${filename}`);
      return editor;
    } catch (error) {
      console.error(`❌ Failed to create editor for ${filename}:`, error);
      this.showToast(`Failed to create editor: ${error.message}`, 'error');
      return null;
    }
  }

  showEditor(filename) {
    // Hide all editors
    document.querySelectorAll('.editor-instance').forEach(el => {
      el.style.display = 'none';
    });

    // Show current editor
    const editor = this.state.editors[filename];
    if (editor) {
      const editorElement = editor.getWrapperElement().parentNode;
      editorElement.style.display = 'block';
      editor.refresh();
      editor.focus();
    }
  }

  // ===== PREVIEW MANAGEMENT =====
  updatePreview() {
    const htmlFile = this.state.files['index.html'];
    const cssFile = this.state.files['style.css'];
    const jsFile = this.state.files['script.js'] || this.state.files['main.js'];

    if (!htmlFile) return;

    let htmlContent = htmlFile.content;

    // Inject CSS if exists
    if (cssFile && cssFile.content.trim()) {
      const cssTag = `<style>${cssFile.content}</style>`;
      if (htmlContent.includes('</head>')) {
        htmlContent = htmlContent.replace('</head>', `${cssTag}</head>`);
      } else {
        htmlContent = `${cssTag}${htmlContent}`;
      }
    }

    // Inject JavaScript if exists
    if (jsFile && jsFile.content.trim()) {
      // Add console interception
      const consoleScript = `
        <script>
        (function() {
          const originalLog = console.log;
          const originalError = console.error;
          const originalWarn = console.warn;
          
          function sendToParent(type, args) {
            window.parent.postMessage({
              type: 'console',
              level: type,
              message: Array.from(args).map(arg => 
                typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
              ).join(' '),
              timestamp: Date.now()
            }, '*');
          }
          
          console.log = function() {
            sendToParent('log', arguments);
            originalLog.apply(console, arguments);
          };
          
          console.error = function() {
            sendToParent('error', arguments);
            originalError.apply(console, arguments);
          };
          
          console.warn = function() {
            sendToParent('warn', arguments);
            originalWarn.apply(console, arguments);
          };
          
          window.onerror = function(msg, url, line, col, error) {
            sendToParent('error', [msg + ' (Line: ' + line + ')']);
            return false;
          };
        })();
        </script>
      `;
      
      const jsTag = `${consoleScript}<script>${jsFile.content}</script>`;
      
      if (htmlContent.includes('</body>')) {
        htmlContent = htmlContent.replace('</body>', `${jsTag}</body>`);
      } else {
        htmlContent = `${htmlContent}${jsTag}`;
      }
    }

    // Create and load preview
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    this.elements.previewFrame.src = url;

    // Clean up previous URL
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  // ===== UI RENDERING =====
  renderFileTree() {
    if (!this.elements || !this.elements.fileList) {
      console.warn('⚠️ File list element not found');
      return;
    }

    this.elements.fileList.innerHTML = '';

    Object.keys(this.state.files).forEach(filename => {
      const file = this.state.files[filename];
      const fileItem = document.createElement('div');
      fileItem.className = 'file-item';
      fileItem.dataset.filename = filename;

      if (filename === this.state.currentFile) {
        fileItem.classList.add('active');
      }

      const icon = this.getFileIcon(filename);
      
      fileItem.innerHTML = `
        <div class="file-icon" style="color: ${icon.color}">
          <i class="${icon.class}"></i>
        </div>
        <div class="file-name">${filename}</div>
      `;

      fileItem.addEventListener('click', (e) => {
        e.preventDefault();
        this.openFile(filename);
      });

      fileItem.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        this.showContextMenu(e, filename);
      });

      this.elements.fileList.appendChild(fileItem);
    });
  }

  renderTabs() {
    if (!this.elements || !this.elements.tabBar) {
      console.warn('⚠️ Tab bar element not found');
      return;
    }

    this.elements.tabBar.innerHTML = '';

    this.state.openTabs.forEach(filename => {
      const file = this.state.files[filename];
      if (!file) return;

      const tab = document.createElement('div');
      tab.className = 'tab';
      tab.dataset.filename = filename;

      if (filename === this.state.currentFile) {
        tab.classList.add('active');
      }

      const icon = this.getFileIcon(filename);
      const modified = file.modified ? '●' : '';

      tab.innerHTML = `
        <div class="tab-icon" style="color: ${icon.color}">
          <i class="${icon.class}"></i>
        </div>
        <div class="tab-name">${filename}${modified}</div>
        <button class="tab-close" title="Close">
          <i class="fas fa-times"></i>
        </button>
      `;

      tab.addEventListener('click', (e) => {
        if (!e.target.closest('.tab-close')) {
          this.openFile(filename);
        }
      });

      tab.querySelector('.tab-close').addEventListener('click', (e) => {
        e.stopPropagation();
        this.closeTab(filename);
      });

      this.elements.tabBar.appendChild(tab);
    });
  }

  getFileIcon(filename) {
    const extension = filename.split('.').pop().toLowerCase();
    const iconMap = {
      html: { class: 'fab fa-html5', color: '#e34c26' },
      css: { class: 'fab fa-css3-alt', color: '#1572b6' },
      js: { class: 'fab fa-js-square', color: '#f7df1e' },
      javascript: { class: 'fab fa-js-square', color: '#f7df1e' },
      json: { class: 'fas fa-brackets-curly', color: '#cbcb41' },
      md: { class: 'fab fa-markdown', color: '#083fa1' },
      txt: { class: 'fas fa-file-alt', color: '#6c757d' }
    };

    return iconMap[extension] || { class: 'fas fa-file', color: '#6c757d' };
  }

  // ===== UI INTERACTIONS =====
  showWelcomeScreen() {
    if (this.elements && this.elements.welcomeScreen) {
      this.elements.welcomeScreen.style.display = 'flex';
    } else {
      console.warn('⚠️ Welcome screen element not found');
    }
  }

  hideWelcomeScreen() {
    if (this.elements && this.elements.welcomeScreen) {
      this.elements.welcomeScreen.style.display = 'none';
    } else {
      console.warn('⚠️ Welcome screen element not found');
    }
  }

  toggleSidebar() {
    this.state.ui.sidebarCollapsed = !this.state.ui.sidebarCollapsed;
    this.elements.sidebar.classList.toggle('collapsed', this.state.ui.sidebarCollapsed);
  }

  toggleConsole() {
    this.state.ui.consoleVisible = !this.state.ui.consoleVisible;
    this.elements.consolePanel.classList.toggle('visible', this.state.ui.consoleVisible);
  }

  toggleTheme() {
    this.state.settings.theme = this.state.settings.theme === 'dark' ? 'light' : 'dark';
    this.saveSettings();
    
    // Update theme icon
    const themeIcon = document.querySelector('[data-action="theme-toggle"] i');
    if (themeIcon) {
      themeIcon.className = this.state.settings.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      this.elements.playground.requestFullscreen().catch(err => {
        this.showToast(`Error attempting to enable fullscreen: ${err.message}`, 'error');
      });
    } else {
      document.exitFullscreen();
    }
  }

  // ===== CONTEXT MENU =====
  showContextMenu(event, filename = null) {
    this.elements.contextMenu.style.display = 'block';
    this.elements.contextMenu.style.left = `${event.pageX}px`;
    this.elements.contextMenu.style.top = `${event.pageY}px`;
    this.elements.contextMenu.dataset.filename = filename || '';
    this.elements.contextMenu.classList.add('visible');
  }

  hideContextMenu() {
    this.elements.contextMenu.classList.remove('visible');
    this.elements.contextMenu.style.display = 'none';
  }

  // ===== CONSOLE MANAGEMENT =====
  addConsoleMessage(level, message, timestamp = Date.now()) {
    const messageElement = document.createElement('div');
    messageElement.className = `console-message ${level}`;
    
    const time = new Date(timestamp).toLocaleTimeString();
    
    const icons = {
      log: 'fas fa-info-circle',
      warn: 'fas fa-exclamation-triangle',
      error: 'fas fa-times-circle'
    };

    messageElement.innerHTML = `
      <span class="console-icon"><i class="${icons[level] || icons.log}"></i></span>
      <span class="console-text">${message}</span>
      <span class="console-time">${time}</span>
    `;

    this.elements.consoleOutput.appendChild(messageElement);
    this.elements.consoleOutput.scrollTop = this.elements.consoleOutput.scrollHeight;

    // Update problems badge
    if (level === 'error') {
      const badge = document.querySelector('.console-tab .badge');
      if (badge) {
        const count = parseInt(badge.textContent) + 1;
        badge.textContent = count;
      }
    }
  }

  clearConsole() {
    this.elements.consoleOutput.innerHTML = '';
    
    // Reset problems badge
    const badge = document.querySelector('.console-tab .badge');
    if (badge) {
      badge.textContent = '0';
    }
  }

  // ===== EVENT HANDLING =====
  setupEventListeners() {
    // Activity bar
    document.querySelectorAll('.activity-item').forEach(item => {
      item.addEventListener('click', (e) => {
        const action = item.dataset.panel || item.dataset.action;
        this.handleActivityBarClick(action);
      });
    });

    // Menu buttons
    document.querySelectorAll('.menu-button, .sidebar-action, .preview-action, .console-action').forEach(button => {
      button.addEventListener('click', (e) => {
        const action = button.dataset.action;
        this.handleButtonClick(action);
      });
    });

    // Welcome screen buttons
    document.querySelectorAll('.welcome-button').forEach(button => {
      button.addEventListener('click', (e) => {
        const action = button.dataset.action;
        this.handleWelcomeAction(action);
      });
    });

    // Settings modal
    this.setupSettingsModal();

    // Context menu
    document.addEventListener('click', (e) => {
      if (!this.elements.contextMenu.contains(e.target)) {
        this.hideContextMenu();
      }
    });

    this.elements.contextMenu.addEventListener('click', (e) => {
      const action = e.target.closest('.context-item')?.dataset.action;
      const filename = this.elements.contextMenu.dataset.filename;
      
      if (action) {
        this.handleContextMenuAction(action, filename);
        this.hideContextMenu();
      }
    });

    // Global keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      this.handleKeyboardShortcut(e);
    });

    // Setup advanced keyboard shortcuts
    this.setupAdvancedKeyboardShortcuts();

    // Console messages from preview
    window.addEventListener('message', (e) => {
      if (e.data && e.data.type === 'console') {
        this.addConsoleMessage(e.data.level, e.data.message, e.data.timestamp);
      }
    });

    // Prevent context menu on main area
    this.elements.playground.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  }

  setupSettingsModal() {
    // Settings controls
    const themeSelect = document.getElementById('theme-select');
    if (themeSelect) {
      themeSelect.value = this.state.settings.theme;
      themeSelect.addEventListener('change', (e) => {
        this.state.settings.theme = e.target.value;
      });
    }

    // Font size controls
    document.querySelectorAll('.font-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const action = btn.dataset.action;
        if (action === 'increase-font') {
          this.state.settings.fontSize = Math.min(24, this.state.settings.fontSize + 1);
        } else if (action === 'decrease-font') {
          this.state.settings.fontSize = Math.max(10, this.state.settings.fontSize - 1);
        }
        
        document.getElementById('font-size-display').textContent = `${this.state.settings.fontSize}px`;
        this.updateFontSize();
      });
    });

    // Checkboxes
    ['word-wrap', 'line-numbers', 'auto-save', 'auto-run', 'live-preview'].forEach(setting => {
      const checkbox = document.getElementById(setting);
      if (checkbox) {
        const key = setting.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        checkbox.checked = this.state.settings[key];
        checkbox.addEventListener('change', (e) => {
          this.state.settings[key] = e.target.checked;
        });
      }
    });
  }

  // ===== ACTION HANDLERS =====
  handleActivityBarClick(action) {
    switch (action) {
      case 'explorer':
        this.toggleSidebar();
        break;
      case 'settings':
        this.showSettings();
        break;
      case 'theme-toggle':
        this.toggleTheme();
        break;
    }
  }

  handleButtonClick(action) {
    switch (action) {
      case 'run':
        this.updatePreview();
        this.showToast('Running code...');
        break;
      case 'save':
        this.saveProject();
        this.showToast('Project saved');
        break;
      case 'export':
        this.exportProject();
        break;
      case 'fullscreen':
        this.toggleFullscreen();
        break;
      case 'zen-mode':
        this.toggleZenMode();
        break;
      case 'split-editor':
        this.toggleSplitEditor();
        break;
      case 'command-palette':
        this.showCommandPalette();
        break;
      case 'search-files':
        this.showFileSearch();
        break;
      case 'library-manager':
        this.showLibraryManager();
        break;
      case 'new-file':
        this.promptNewFile();
        break;
      case 'new-folder':
        this.showToast('Folders coming soon!', 'info');
        break;
      case 'refresh':
        this.renderFileTree();
        this.showToast('Files refreshed');
        break;
      case 'refresh-preview':
        this.updatePreview();
        this.showToast('Preview refreshed');
        break;
      case 'open-preview':
        this.openPreviewInNewTab();
        break;
      case 'toggle-preview':
        this.togglePreview();
        break;
      case 'clear-console':
        this.clearConsole();
        break;
      case 'toggle-console':
        this.toggleConsole();
        break;
      case 'close-settings':
        this.hideSettings();
        break;
      case 'save-settings':
        this.saveSettings();
        this.hideSettings();
        break;
      case 'reset-settings':
        this.resetSettings();
        break;
      case 'close-library-modal':
        this.hideLibraryManager();
        break;
      case 'close-template-modal':
        this.hideTemplateModal();
        break;
    }
  }

  handleWelcomeAction(action) {
    switch (action) {
      case 'new-project':
        this.createDefaultFiles();
        this.openFile('index.html');
        break;
      case 'open-sample':
        this.createDefaultFiles();
        this.openFile('index.html');
        this.showToast('Sample project loaded');
        break;
    }
  }

  handleContextMenuAction(action, filename) {
    switch (action) {
      case 'new-file':
        this.promptNewFile();
        break;
      case 'new-folder':
        this.showToast('Folders coming soon!', 'info');
        break;
      case 'rename':
        if (filename) this.promptRename(filename);
        break;
      case 'delete':
        if (filename) this.confirmDelete(filename);
        break;
      case 'copy-path':
        if (filename) this.copyPath(filename);
        break;
    }
  }

  handleKeyboardShortcut(e) {
    // Run: Ctrl+F5
    if (e.ctrlKey && e.key === 'F5') {
      e.preventDefault();
      this.updatePreview();
    }
    
    // Save: Ctrl+S
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      this.saveProject();
    }
    
    // New File: Ctrl+N
    if (e.ctrlKey && e.key === 'n') {
      e.preventDefault();
      this.promptNewFile();
    }
    
    // Toggle Console: Ctrl+`
    if (e.ctrlKey && e.key === '`') {
      e.preventDefault();
      this.toggleConsole();
    }
    
    // Fullscreen: F11
    if (e.key === 'F11') {
      e.preventDefault();
      this.toggleFullscreen();
    }
  }

  // ===== UTILITY METHODS =====
  promptNewFile() {
    const filename = prompt('Enter file name:');
    if (!filename) return;

    const extension = filename.split('.').pop().toLowerCase();
    const typeMap = {
      html: 'html',
      css: 'css',
      js: 'javascript',
      javascript: 'javascript'
    };

    const type = typeMap[extension] || 'text';
    
    if (this.createFile(filename, type)) {
      this.openFile(filename);
    }
  }

  promptRename(filename) {
    const newName = prompt('Enter new name:', filename);
    if (newName && newName !== filename) {
      this.renameFile(filename, newName);
    }
  }

  confirmDelete(filename) {
    if (confirm(`Are you sure you want to delete ${filename}?`)) {
      this.deleteFile(filename);
    }
  }

  copyPath(filename) {
    navigator.clipboard.writeText(filename).then(() => {
      this.showToast('Path copied to clipboard');
    });
  }

  exportProject() {
    const htmlFile = this.state.files['index.html'];
    if (!htmlFile) {
      this.showToast('No index.html file found', 'error');
      return;
    }

    const cssFile = this.state.files['style.css'];
    const jsFile = this.state.files['script.js'];

    let htmlContent = htmlFile.content;

    // Embed CSS
    if (cssFile && cssFile.content.trim()) {
      const cssTag = `<style>\n${cssFile.content}\n</style>`;
      htmlContent = htmlContent.replace('</head>', `  ${cssTag}\n</head>`);
    }

    // Embed JavaScript
    if (jsFile && jsFile.content.trim()) {
      const jsTag = `<script>\n${jsFile.content}\n</script>`;
      htmlContent = htmlContent.replace('</body>', `  ${jsTag}\n</body>`);
    }

    // Download file
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'project.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    URL.revokeObjectURL(url);
    this.showToast('Project exported successfully');
  }

  openPreviewInNewTab() {
    const htmlFile = this.state.files['index.html'];
    if (!htmlFile) {
      this.showToast('No index.html file found', 'error');
      return;
    }

    const newWindow = window.open();
    newWindow.document.write(htmlFile.content);
    newWindow.document.close();
  }

  togglePreview() {
    this.state.ui.previewVisible = !this.state.ui.previewVisible;
    this.elements.previewPanel.style.display = this.state.ui.previewVisible ? 'flex' : 'none';
  }

  showSettings() {
    this.elements.settingsModal.classList.add('visible');
    
    // Update form values
    document.getElementById('theme-select').value = this.state.settings.theme;
    document.getElementById('font-size-display').textContent = `${this.state.settings.fontSize}px`;
  }

  hideSettings() {
    this.elements.settingsModal.classList.remove('visible');
  }

  resetSettings() {
    this.state.settings = {
      theme: 'dark',
      fontSize: 14,
      wordWrap: true,
      lineNumbers: true,
      autoSave: true,
      autoRun: false,
      livePreview: true
    };
    
    this.saveSettings();
    this.showSettings(); // Refresh the form
    this.showToast('Settings reset to defaults');
  }

  showToast(message, type = 'success') {
    // Remove any existing toasts of the same type to prevent spam
    const existingToasts = document.querySelectorAll(`.toast.toast-${type}`);
    existingToasts.forEach(toast => {
      if (toast.textContent.includes(message)) {
        toast.remove();
      }
    });

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const icon = {
      'info': 'fas fa-info-circle',
      'success': 'fas fa-check-circle', 
      'warning': 'fas fa-exclamation-triangle',
      'error': 'fas fa-times-circle'
    }[type] || 'fas fa-check-circle';
    
    toast.innerHTML = `
      <i class="${icon}"></i>
      <span>${message}</span>
    `;
    
    // Add to toast container or body
    const container = this.elements.toastContainer || document.body;
    container.appendChild(toast);
    
    // Animate in
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Remove after delay with smooth animation
    setTimeout(() => {
      toast.classList.add('hiding');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 400);
    }, 3000);
  }

  // Update breadcrumbs
  updateBreadcrumbs(filename) {
    if (!this.elements.breadcrumbs || !this.elements.breadcrumbFile) return;
    
    if (filename) {
      const fileIcon = this.getFileIcon(filename);
      const breadcrumbSpan = this.elements.breadcrumbFile.querySelector('span');
      const breadcrumbIcon = this.elements.breadcrumbFile.querySelector('i');
      
      if (breadcrumbSpan) breadcrumbSpan.textContent = filename;
      if (breadcrumbIcon) {
        breadcrumbIcon.className = fileIcon.class;
        breadcrumbIcon.style.color = fileIcon.color;
      }
      
      this.elements.breadcrumbs.style.display = 'flex';
    } else {
      this.elements.breadcrumbs.style.display = 'none';
    }
  }

  showLoading() {
    console.log('🎬 Showing loading screen...');
    if (this.elements && this.elements.loadingScreen) {
      this.elements.loadingScreen.style.display = 'flex';
    } else {
      console.warn('⚠️ Loading screen element not found');
    }
  }

  hideLoading() {
    console.log('⏳ Hiding loading screen...');
    if (this.elements && this.elements.loadingScreen) {
      setTimeout(() => {
        this.elements.loadingScreen.classList.add('hidden');
        setTimeout(() => {
          this.elements.loadingScreen.style.display = 'none';
          console.log('✅ Loading screen hidden');
        }, 300);
      }, 500); // Reduced from 1000ms to 500ms
    } else {
      console.warn('⚠️ Loading screen element not found');
    }
  }

  // ===== NEW ENHANCED FEATURES =====
  
  // Status Bar Updates
  updateStatusBar(editor) {
    if (!this.elements || !this.elements.statusBar) return;
    
    const cursor = editor.getCursor();
    const content = editor.getValue();
    const lines = content.split('\n');
    const words = content.split(/\s+/).filter(word => word.length > 0).length;
    const chars = content.length;
    
    // Update cursor position
    if (this.elements.lineColInfo) {
      this.elements.lineColInfo.textContent = `Ln ${cursor.line + 1}, Col ${cursor.ch + 1}`;
    }
    
    // Update file type
    if (this.elements.fileTypeInfo && this.state.currentFile) {
      const ext = this.state.currentFile.split('.').pop().toUpperCase();
      this.elements.fileTypeInfo.textContent = ext;
    }
    
    // Update word and character count
    if (this.elements.wordCountInfo) {
      this.elements.wordCountInfo.textContent = `${words} words`;
    }
    if (this.elements.charCountInfo) {
      this.elements.charCountInfo.textContent = `${chars} chars`;
    }
  }

  // Smart Hints for Code Completion
  getSmartHints(cm, option) {
    const cursor = cm.getCursor();
    const line = cm.getLine(cursor.line);
    const word = line.slice(0, cursor.ch);
    
    // HTML hints
    if (this.state.currentFile?.endsWith('.html')) {
      const htmlHints = [
        'div', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'a', 'img', 'ul', 'ol', 'li', 'table', 'tr', 'td', 'th',
        'form', 'input', 'button', 'select', 'option', 'textarea',
        'header', 'nav', 'main', 'section', 'article', 'aside', 'footer'
      ];
      return {
        list: htmlHints.filter(hint => hint.startsWith(word.toLowerCase())),
        from: CodeMirror.Pos(cursor.line, cursor.ch - word.length),
        to: cursor
      };
    }
    
    // CSS hints
    if (this.state.currentFile?.endsWith('.css')) {
      const cssHints = [
        'color', 'background', 'background-color', 'border', 'margin', 'padding',
        'width', 'height', 'display', 'position', 'top', 'left', 'right', 'bottom',
        'font-size', 'font-family', 'font-weight', 'text-align', 'text-decoration',
        'flex', 'grid', 'justify-content', 'align-items', 'transform', 'transition'
      ];
      return {
        list: cssHints.filter(hint => hint.startsWith(word.toLowerCase())),
        from: CodeMirror.Pos(cursor.line, cursor.ch - word.length),
        to: cursor
      };
    }
    
    // JavaScript hints
    if (this.state.currentFile?.endsWith('.js')) {
      const jsHints = [
        'console.log', 'document.getElementById', 'document.querySelector',
        'addEventListener', 'function', 'const', 'let', 'var', 'if', 'else',
        'for', 'while', 'return', 'true', 'false', 'null', 'undefined'
      ];
      return {
        list: jsHints.filter(hint => hint.startsWith(word.toLowerCase())),
        from: CodeMirror.Pos(cursor.line, cursor.ch - word.length),
        to: cursor
      };
    }
    
    return CodeMirror.hint.auto(cm, option);
  }

  // Command Palette
  showCommandPalette() {
    if (this.elements && this.elements.commandPaletteModal) {
      this.elements.commandPaletteModal.classList.add('visible');
      const input = document.getElementById('command-input');
      if (input) {
        input.focus();
        input.value = '';
      }
      this.setupCommandPaletteEvents();
    }
  }

  hideCommandPalette() {
    if (this.elements && this.elements.commandPaletteModal) {
      this.elements.commandPaletteModal.classList.remove('visible');
    }
  }

  setupCommandPaletteEvents() {
    const input = document.getElementById('command-input');
    const results = document.getElementById('command-results');
    
    if (!input || !results) return;
    
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.hideCommandPalette();
      } else if (e.key === 'Enter') {
        const selected = results.querySelector('.command-item:hover');
        if (selected) {
          this.executeCommand(selected.dataset.command);
          this.hideCommandPalette();
        }
      }
    });
    
    // Add click handlers to command items
    results.querySelectorAll('.command-item').forEach(item => {
      item.addEventListener('click', () => {
        this.executeCommand(item.dataset.command);
        this.hideCommandPalette();
      });
    });
  }

  executeCommand(command) {
    switch (command) {
      case 'new-file':
        this.promptNewFile();
        break;
      case 'save-project':
        this.saveProject();
        this.showToast('Project saved');
        break;
      case 'run-code':
        this.updatePreview();
        this.showToast('Running code...');
        break;
      case 'format-code':
        this.formatCurrentCode();
        break;
      case 'toggle-console':
        this.toggleConsole();
        break;
      case 'zen-mode':
        this.toggleZenMode();
        break;
    }
  }

  // File Search
  showFileSearch() {
    if (this.elements && this.elements.fileSearchModal) {
      this.elements.fileSearchModal.classList.add('visible');
      const input = document.getElementById('file-search-input');
      if (input) {
        input.focus();
        input.value = '';
      }
      this.updateFileSearchResults('');
      this.setupFileSearchEvents();
    }
  }

  hideFileSearch() {
    if (this.elements && this.elements.fileSearchModal) {
      this.elements.fileSearchModal.classList.remove('visible');
    }
  }

  setupFileSearchEvents() {
    const input = document.getElementById('file-search-input');
    if (!input) return;
    
    input.addEventListener('input', (e) => {
      this.updateFileSearchResults(e.target.value);
    });
    
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.hideFileSearch();
      } else if (e.key === 'Enter') {
        const results = document.getElementById('file-search-results');
        const selected = results.querySelector('.search-result:first-child');
        if (selected) {
          this.openFile(selected.dataset.filename);
          this.hideFileSearch();
        }
      }
    });
  }

  updateFileSearchResults(query) {
    const results = document.getElementById('file-search-results');
    if (!results) return;
    
    results.innerHTML = '';
    
    const filteredFiles = Object.keys(this.state.files).filter(filename =>
      filename.toLowerCase().includes(query.toLowerCase())
    );
    
    filteredFiles.forEach(filename => {
      const result = document.createElement('div');
      result.className = 'search-result';
      result.dataset.filename = filename;
      
      const icon = this.getFileIcon(filename);
      result.innerHTML = `
        <i class="${icon.class}" style="color: ${icon.color}"></i>
        <span>${filename}</span>
      `;
      
      result.addEventListener('click', () => {
        this.openFile(filename);
        this.hideFileSearch();
      });
      
      results.appendChild(result);
    });
    
    if (filteredFiles.length === 0) {
      results.innerHTML = '<div class="search-result">No files found</div>';
    }
  }

  // Library Manager
  showLibraryManager() {
    if (this.elements && this.elements.libraryModal) {
      this.elements.libraryModal.classList.add('visible');
      this.setupLibraryManagerEvents();
    }
  }

  hideLibraryManager() {
    if (this.elements && this.elements.libraryModal) {
      this.elements.libraryModal.classList.remove('visible');
    }
  }

  setupLibraryManagerEvents() {
    // Tab switching
    document.querySelectorAll('.library-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.library-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.library-panel').forEach(p => p.classList.remove('active'));
        
        tab.classList.add('active');
        const panel = document.getElementById(`${tab.dataset.tab}-libraries`);
        if (panel) panel.classList.add('active');
      });
    });
    
    // Library cards
    document.querySelectorAll('.library-card button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const card = e.target.closest('.library-card');
        const library = card.dataset.library;
        this.addLibrary(library, e.target.textContent.toLowerCase().includes('css'));
      });
    });
  }

  addLibrary(libraryId, isCss = false) {
    const libraries = {
      bootstrap: {
        name: 'Bootstrap 5',
        css: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
        js: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js'
      },
      jquery: {
        name: 'jQuery',
        js: 'https://code.jquery.com/jquery-3.6.0.min.js'
      },
      fontawesome: {
        name: 'Font Awesome',
        css: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
      }
    };
    
    const lib = libraries[libraryId];
    if (!lib) return;
    
    // Check if already added
    if (this.state.libraries.find(l => l.id === libraryId)) {
      this.showToast(`${lib.name} is already added`, 'warning');
      return;
    }
    
    // Add to state
    this.state.libraries.push({
      name: lib.name,
      id: libraryId,
      css: lib.css,
      js: lib.js,
      active: true
    });
    
    // Update preview
    this.updatePreview();
    this.showToast(`${lib.name} added successfully`);
  }

  removeLibrary(libraryId) {
    this.state.libraries = this.state.libraries.filter(lib => lib.id !== libraryId);
    this.updatePreview();
    this.showToast('Library removed');
  }

  // Zen Mode
  toggleZenMode() {
    this.state.ui.zenMode = !this.state.ui.zenMode;
    
    if (this.state.ui.zenMode) {
      document.body.classList.add('zen-mode');
      this.showToast('Zen mode enabled - Press F11 to exit', 'info');
    } else {
      document.body.classList.remove('zen-mode');
      this.showToast('Zen mode disabled', 'info');
    }
  }

  // Toggle Minimap
  toggleMinimap() {
    this.state.ui.showMinimap = !this.state.ui.showMinimap;
    
    const minimap = document.querySelector('.editor-minimap');
    if (this.state.ui.showMinimap) {
      if (minimap) {
        minimap.classList.add('visible');
      } else {
        this.createMinimap();
      }
      this.showToast('Minimap enabled', 'info');
    } else {
      if (minimap) {
        minimap.classList.remove('visible');
      }
      this.showToast('Minimap disabled', 'info');
    }
  }

  // Create Minimap
  createMinimap() {
    if (!this.state.currentEditor) return;
    
    const editorWrapper = this.elements.editorWrapper;
    const existingMinimap = editorWrapper.querySelector('.editor-minimap');
    
    if (existingMinimap) {
      existingMinimap.remove();
    }
    
    const minimap = document.createElement('div');
    minimap.className = 'editor-minimap visible';
    minimap.innerHTML = `
      <div class="minimap-content"></div>
      <div class="minimap-viewport"></div>
    `;
    
    editorWrapper.appendChild(minimap);
    this.updateMinimap();
    
    // Add click handler for navigation
    const minimapContent = minimap.querySelector('.minimap-content');
    minimapContent.addEventListener('click', (e) => {
      const rect = minimapContent.getBoundingClientRect();
      const clickY = e.clientY - rect.top;
      const percentage = clickY / rect.height;
      const totalLines = this.state.currentEditor.lineCount();
      const targetLine = Math.floor(totalLines * percentage);
      
      this.state.currentEditor.scrollIntoView({line: targetLine, ch: 0});
    });
  }

  // Update Minimap
  updateMinimap() {
    if (!this.state.ui.showMinimap || !this.state.currentEditor) return;
    
    const minimap = document.querySelector('.editor-minimap');
    if (!minimap) return;
    
    const minimapContent = minimap.querySelector('.minimap-content');
    const minimapViewport = minimap.querySelector('.minimap-viewport');
    
    if (minimapContent) {
      // Get editor content and create minimap version
      const content = this.state.currentEditor.getValue();
      const lines = content.split('\n');
      const minimapLines = lines.map(line => 
        line.length > 100 ? line.substring(0, 100) + '...' : line
      ).join('\n');
      
      minimapContent.textContent = minimapLines;
      
      // Update viewport position
      const scrollInfo = this.state.currentEditor.getScrollInfo();
      const viewportTop = (scrollInfo.top / scrollInfo.height) * minimapContent.offsetHeight;
      const viewportHeight = (scrollInfo.clientHeight / scrollInfo.height) * minimapContent.offsetHeight;
      
      if (minimapViewport) {
        minimapViewport.style.top = `${viewportTop}px`;
        minimapViewport.style.height = `${Math.max(viewportHeight, 20)}px`;
      }
    }
  }

  // Split Editor
  toggleSplitEditor() {
    this.state.ui.splitEditor = !this.state.ui.splitEditor;
    
    if (this.state.ui.splitEditor) {
      this.elements.editorWrapper.classList.add('editor-split');
      this.showToast('Split editor enabled');
    } else {
      this.elements.editorWrapper.classList.remove('editor-split');
      this.showToast('Split editor disabled');
    }
  }

  // Template System
  showTemplateModal() {
    if (this.elements && this.elements.templateModal) {
      this.elements.templateModal.classList.add('visible');
      this.setupTemplateEvents();
    }
  }

  hideTemplateModal() {
    if (this.elements && this.elements.templateModal) {
      this.elements.templateModal.classList.remove('visible');
    }
  }

  setupTemplateEvents() {
    document.querySelectorAll('.template-card button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const card = e.target.closest('.template-card');
        const template = card.dataset.template;
        this.loadTemplate(template);
        this.hideTemplateModal();
      });
    });
  }

  loadTemplate(templateId) {
    const templates = {
      blank: {
        'index.html': '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n    <link rel="stylesheet" href="style.css">\n</head>\n<body>\n    \n    <script src="script.js"></script>\n</body>\n</html>',
        'style.css': '/* Add your CSS styles here */\n',
        'script.js': '// Add your JavaScript code here\nconsole.log("Hello, World!");'
      },
      bootstrap: {
        'index.html': '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Bootstrap Project</title>\n    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">\n    <link rel="stylesheet" href="style.css">\n</head>\n<body>\n    <div class="container mt-5">\n        <h1 class="text-center">Bootstrap Project</h1>\n        <div class="row">\n            <div class="col-md-6">\n                <div class="card">\n                    <div class="card-body">\n                        <h5 class="card-title">Card Title</h5>\n                        <p class="card-text">Some quick example text.</p>\n                        <a href="#" class="btn btn-primary">Go somewhere</a>\n                    </div>\n                </div>\n            </div>\n            <div class="col-md-6">\n                <div class="card">\n                    <div class="card-body">\n                        <h5 class="card-title">Another Card</h5>\n                        <p class="card-text">Some more example text.</p>\n                        <a href="#" class="btn btn-success">Click here</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>\n    <script src="script.js"></script>\n</body>\n</html>',
        'style.css': '/* Custom styles */\nbody {\n    font-family: \'Arial\', sans-serif;\n}\n\n.card {\n    transition: transform 0.3s ease;\n}\n\n.card:hover {\n    transform: translateY(-5px);\n}',
        'script.js': '// Bootstrap project JavaScript\nconsole.log("Bootstrap project loaded!");\n\n// Add interactivity\ndocument.querySelectorAll(\'.card\').forEach(card => {\n    card.addEventListener(\'mouseenter\', function() {\n        this.style.boxShadow = \'0 4px 8px rgba(0,0,0,0.2)\';\n    });\n    \n    card.addEventListener(\'mouseleave\', function() {\n        this.style.boxShadow = \'\';\n    });\n});'
      }
    };
    
    const template = templates[templateId];
    if (template) {
      // Clear existing files
      this.state.files = {};
      this.state.openTabs = [];
      this.state.currentFile = null;
      
      // Load template files
      Object.keys(template).forEach(filename => {
        const ext = filename.split('.').pop();
        this.state.files[filename] = {
          type: ext === 'html' ? 'html' : ext === 'css' ? 'css' : 'javascript',
          content: template[filename],
          modified: false
        };
      });
      
      this.state.openTabs = Object.keys(this.state.files);
      this.state.currentFile = 'index.html';
      
      this.renderFileTree();
      this.renderTabs();
      this.openFile('index.html');
      this.saveProject();
      this.showToast(`${templateId} template loaded`);
    }
  }

  // ===== ENHANCED FILE OPERATIONS =====
  
  formatCurrentCode() {
    if (!this.state.currentEditor || !this.state.currentFile) {
      this.showToast('No file is currently open', 'warning');
      return;
    }
    
    const content = this.state.currentEditor.getValue();
    const ext = this.state.currentFile.split('.').pop();
    
    try {
      let formatted = content;
      
      if (ext === 'html') {
        formatted = this.formatHTML(content);
      } else if (ext === 'css') {
        formatted = this.formatCSS(content);
      } else if (ext === 'js') {
        formatted = this.formatJS(content);
      }
      
      this.state.currentEditor.setValue(formatted);
      this.showToast('Code formatted');
    } catch (error) {
      this.showToast('Error formatting code', 'error');
    }
  }

  formatHTML(html) {
    // Basic HTML formatting
    let indentLevel = 0;
    const lines = html.split('\n');
    const formatted = [];
    
    for (let line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;
      
      // Decrease indent for closing tags
      if (trimmed.startsWith('</')) {
        indentLevel = Math.max(0, indentLevel - 1);
      }
      
      // Add indented line
      formatted.push('  '.repeat(indentLevel) + trimmed);
      
      // Increase indent for opening tags (not self-closing)
      if (trimmed.startsWith('<') && !trimmed.startsWith('</') && !trimmed.endsWith('/>')) {
        indentLevel++;
      }
    }
    
    return formatted.join('\n');
  }

  formatCSS(css) {
    return css
      .replace(/\s*{\s*/g, ' {\n  ')
      .replace(/;\s*/g, ';\n  ')
      .replace(/\s*}\s*/g, '\n}\n\n')
      .replace(/,\s*/g, ',\n')
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .join('\n')
      .replace(/\n\s*\n/g, '\n\n');
  }

  formatJS(js) {
    return js
      .replace(/\s*{\s*/g, ' {\n  ')
      .replace(/;\s*(?!\s*$)/g, ';\n')
      .replace(/\s*}\s*/g, '\n}\n\n')
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .join('\n')
      .replace(/\n\s*\n/g, '\n\n');
  }

  // Enhanced keyboard shortcuts
  setupAdvancedKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Command palette: Ctrl+Shift+P
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        this.showCommandPalette();
      }
      
      // Quick file search: Ctrl+P
      else if (e.ctrlKey && e.key === 'p' && !e.shiftKey) {
        e.preventDefault();
        this.showFileSearch();
      }
      
      // Save project: Ctrl+S (when not in editor)
      else if (e.ctrlKey && e.key === 's' && !e.target.classList.contains('CodeMirror-code')) {
        e.preventDefault();
        this.saveProject();
        this.showToast('Project saved');
      }
      
      // Format code: Shift+Alt+F
      else if (e.shiftKey && e.altKey && e.key === 'F') {
        e.preventDefault();
        this.formatCurrentCode();
      }
      
      // Toggle console: Ctrl+`
      else if (e.ctrlKey && e.key === '`') {
        e.preventDefault();
        this.toggleConsole();
      }
      
      // Zen mode: F11
      else if (e.key === 'F11') {
        e.preventDefault();
        this.toggleZenMode();
      }
      
      // Close modals: Escape
      else if (e.key === 'Escape') {
        this.hideCommandPalette();
        this.hideFileSearch();
        this.hideLibraryManager();
        this.hideTemplateModal();
      }
    });
  }

  showErrorScreen(error) {
    console.log('❌ Showing error screen');
    if (this.elements && this.elements.welcomeScreen) {
      this.elements.welcomeScreen.innerHTML = `
        <div class="welcome-content">
          <h1><i class="fas fa-exclamation-triangle" style="color: var(--error);"></i> Initialization Error</h1>
          <p>The playground failed to initialize properly.</p>
          <div class="error-details">
            <h3>Error Details:</h3>
            <pre>${error.message}</pre>
          </div>
          <div class="welcome-actions">
            <button class="welcome-button primary" onclick="location.reload()">
              <i class="fas fa-sync"></i>
              Reload Page
            </button>
            <button class="welcome-button" onclick="localStorage.clear(); location.reload()">
              <i class="fas fa-trash"></i>
              Clear Data & Reload
            </button>
          </div>
        </div>
      `;
      this.elements.welcomeScreen.style.display = 'flex';
    } else {
      console.error('❌ Cannot show error screen - welcome screen element not found');
    }
  }
}

// Initialize the playground when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('🌐 DOM Content Loaded - Starting playground...');
  try {
    window.codePlayground = new CodePlayground();
  } catch (error) {
    console.error('💥 Critical error during playground creation:', error);
    // Show error message directly in the loading screen
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.innerHTML = `
        <div class="loading-content">
          <div style="color: var(--error); font-size: 3rem; margin-bottom: 1rem;">
            <i class="fas fa-exclamation-triangle"></i>
          </div>
          <h2 style="color: var(--error); margin-bottom: 1rem;">Initialization Failed</h2>
          <p style="margin-bottom: 2rem;">The playground failed to load properly.</p>
          <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin-bottom: 2rem; text-align: left;">
            <strong>Error:</strong><br>
            <code style="color: var(--error);">${error.message}</code>
          </div>
          <button onclick="location.reload()" class="btn primary" style="margin-right: 1rem;">
            <i class="fas fa-sync"></i> Reload
          </button>
          <button onclick="localStorage.clear(); location.reload()" class="btn secondary">
            <i class="fas fa-trash"></i> Clear Data & Reload
          </button>
        </div>
      `;
    }
  }
});