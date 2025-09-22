// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'

export default [
  // Игнорируем стандартные папки
  { ignores: ['node_modules/', 'dist/', 'coverage/'] },

  // Рекомендуемые правила от ESLint
  js.configs.recommended,

  // Правила для всех JS-файлов проекта
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module', // у тебя "type": "module" в package.json
      globals: { ...globals.node },
    },
    rules: {
      // мягкие настройки по умолчанию — при необходимости меняй
      'no-console': 'warn', // чтобы CLI-скрипты не ломались — настроим ниже override
      'indent': ['error', 2],
      'quotes': ['error', 'single', { avoidEscape: true }],
      'semi': ['error', 'always'],
    },
  },

  // Для исполняемых bin-скриптов (разрешаем console)
  {
    files: ['bin/**', 'src/cli.js'],
    languageOptions: {
      globals: { ...globals.node },
    },
    rules: {
      'no-console': 'off',
    },
  },
]
