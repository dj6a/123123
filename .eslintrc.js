module.exports = {
  extends: ['react-app', 'react-app/jest'],
  plugins: ['jest'],
  overrides: [
    {
      files: ['**/*.test.js', '**/*.test.jsx', '**/*.spec.js', '**/*.spec.jsx'],
      env: {
        'jest': true
      }
    }
  ],
  rules: {
    // 这里可以添加自定义规则
  }
}; 