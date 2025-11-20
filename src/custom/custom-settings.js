const settings = {
  // --- Core Workbench & Window Settings ---

  // Telemetry & Updates
  "redhat.telemetry.enabled": true,
  "update.mode": "none",
  "workbench.tips.enabled": false,

  // Window & UI Layout
  "security.workspace.trust.untrustedFiles": "open",
  "window.commandCenter": false,
  "window.newWindowProfile": "Default",
  "window.autoDetectColorScheme": true,
  "workbench.startupEditor": "none",
  "workbench.editor.showTabs": "multiple",
  "workbench.statusBar.visible": false,
  "workbench.panel.showLabels": false,
  "workbench.navigationControl.enabled": false,
  "workbench.activityBar.location": "hidden",

  // --- Theme & Icon Settings ---

  "workbench.colorTheme": "poimandres",
  "workbench.preferredDarkColorTheme": "eight8may",
  "workbench.iconTheme": "rose-pine-icons",
  "workbench.productIconTheme": "a-file-icon-vscode-product-icon-theme",
  "a-file-icon-vscode.saturation": 0.1,

  // Custom VS Code CSS/JS Imports
  "vscode_custom_css.imports": [
    "file:///C:/custom-vscode/custom-vscode.css",
    "file:///C:/custom-vscode/vscode-script.js",
    "file:///c:/Users/dell/.vscode/extensions/brandonkirbyson.vscode-animations-2.0.7/dist/updateHandler.js"
  ],

  // Color Customizations (commented out examples)
  "workbench.colorCustomizations": {
    // "editor.background": "#101012",
    // "sideBar.background": "#101012",
    // "editorCursor.foreground": "#0ee6b0",
    // "terminal.background": "#101014"
  },

  // Token Color Customizations (TextMate Rules)
  "editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        "scope": ["comment", "comment.block", "comment.line"],
        "settings": {
          "fontStyle": "",
          "foreground": "#3a3a3aec"
          // "foreground": "#374c59ec"
        }
      }
      // {
      //   "scope": "variable",
      //   "settings": {
      //     "fontStyle": "bold",
      //     "foreground": "#6893d9"
      //   }
      // },
      // {
      //   "scope": "keyword.control",
      //   "settings": {
      //     "fontStyle": "bold",
      //     "foreground": "#85aaac"
      //   }
      // },
      // {
      //   "scope": ["string", "string.quoted"],
      //   "settings": {
      //     // "foreground": "#58776e",
      //     "foreground": "#93b69a",
      //     "fontStyle": ""
      //   }
      // },
      // {
      //   "scope": "constant",
      //   "settings": {
      //     "foreground": "#dfd294"
      //   }
      // },
      // {
      //   "scope": "constant.numeric",
      //   "settings": {
      //     "foreground": "#91bdc1",
      //     "fontStyle": "bold"
      //   }
      // },
      // {
      //   "scope": "entity.name",
      //   "settings": {
      //     "fontStyle": "bold",
      //     "foreground": "#97c5c1"
      //   }
      // },
      // {
      //"scope": "variable.parameter",
      //   "settings": {
      //     "foreground": "#9ec4bf",
      //     "fontStyle": "bold"
      //   }
      // },
      // {
      //   "scope": "invalid",
      //   "settings": {
      //     "foreground": "#c9123d"
      //   }
      // },
      // {
      //   "scope": "",
      //   "settings": {
      //     "foreground": "#f4d5d5",
      //     "fontStyle": "underline"
      //   }
      // }
    ]
  },

  // --- Editor & Text Settings ---

  // Font & Appearance
  "editor.fontSize": 11.5,
  "editor.fontFamily": "Fira Code,monospace, 'Courier New'",
  "editor.fontWeight": "500",
  "editor.fontLigatures": true,
  "editor.lineHeight": 20,
  "editor.suggestFontSize": 11,
  "editor.suggestLineHeight": 20,

  // Formatting & Display
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "editor.wordWrap": "wordWrapColumn",
  "editor.wordWrapColumn": 100,
  "editor.lineNumbers": "interval",
  "editor.renderLineHighlight": "none",
  "editor.renderWhitespace": "none",
  "editor.overviewRulerBorder": false,
  "editor.hideCursorInOverviewRuler": true,
  "editor.occurrencesHighlight": "off",
  "editor.bracketPairColorization.enabled": false,
  "editor.guides.indentation": false,

  // Scrolling & Cursor
  "editor.stickyScroll.enabled": false,
  "editor.smoothScrolling": true,
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.cursorBlinking": "expand",
  "editor.cursorStyle": "line-thin",

  // Minimap & Other Features
  "editor.minimap.enabled": false,
  "editor.minimap.renderCharacters": false,
  "editor.hover.delay": 2000,
  "editor.snippetSuggestions": "top",
  "editor.showFoldingControls": "mouseover",
  "editor.foldingHighlight": false,
  "breadcrumbs.enabled": false,

  // --- Explorer & File Management ---

  "files.autoSave": "afterDelay",
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "explorer.sortOrder": "type",
  "explorer.autoReveal": false,
  "explorer.decorations.badges": false,
  "explorer.decorations.colors": false,
  "workbench.tree.indent": 16,
  "workbench.tree.renderIndentGuides": "none",

  // --- Git & SCM Settings ---

  "git.enableSmartCommit": true,
  "git.confirmSync": false,
  "git.decorations.enabled": false,
  "scm.diffDecorations": "none",

  // --- Terminal Settings ---

  "terminal.integrated.lineHeight": 1,
  "terminal.integrated.fontSize": 11,
  "terminal.integrated.fontWeight": "500",
  "terminal.integrated.defaultProfile.windows": "Git Bash",

  // --- Extension Specific Settings ---

  // Code Runner
  "code-runner.saveFileBeforeRun": true,

  // Animations
  "animations.Enabled": true,

  // Tailwind Fold
  "tailwind-fold.autoFold": false,

  // Console Ninja
  "console-ninja.featureSet": "Community",
  "console-ninja.allowConsoleLogToTriggerPredictions": true,

  // GitHub Copilot
  "github.copilot.enable": {
    "*": true,
    "plaintext": false,
    "markdown": false,
    "scminput": false
  },
  "github.copilot.selectedCompletionModel": "gpt-4o-copilot",

  // Biome
  "biome.suggestInstallingGlobally": false,

  // Accessibility
  "accessibility.signals.format": {
    "sound": "userGesture"
  },

  // Language Specific Formatters
  "javascript.updateImportsOnFileMove.enabled": "always",
  "[css]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "ms-vsliveshare.vsliveshare"
  },
  "[javascript]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  }
};
