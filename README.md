# Simple Web App - CI/CD Demo

A basic web application demonstrating automated CI/CD pipeline using GitHub Actions.

## 🚀 Features

- **Simple HTML/CSS/JS Application**: Interactive counter with responsive design
- **Automated Testing**: Jest-based unit tests for JavaScript functionality
- **Build Validation**: Custom validation script to ensure all files are ready
- **Continuous Deployment**: Automatic deployment to GitHub Pages on main branch updates
- **Multi-stage Pipeline**: Test → Build → Deploy workflow

## 📁 Project Structure

```
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript functionality
├── package.json        # Node.js dependencies and scripts
├── script.test.js      # Jest unit tests
├── test-setup.js       # Test environment setup
├── validate.js         # Build validation script
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Actions CI/CD pipeline
```

## 🔧 Local Development

### Prerequisites
- Node.js (v18 or higher)
- npm

### Setup
```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Build and validate
npm run build

# Serve locally (requires Python)
npm run serve
```

## 🚀 CI/CD Pipeline

The GitHub Actions pipeline includes 4 jobs:

### 1. **Test Job**
- Runs on every push and pull request
- Sets up Node.js environment
- Installs dependencies
- Executes Jest unit tests
- Uploads test results as artifacts

### 2. **Build Job**
- Runs after successful tests
- Validates application files
- Creates deployment package
- Uploads build artifacts

### 3. **Deploy Job**
- Runs only on main branch pushes
- Deploys to GitHub Pages
- Requires successful test and build jobs

### 4. **Notify Job**
- Runs after all other jobs
- Reports pipeline status
- Provides deployment feedback

## 📋 Pipeline Triggers

- **Push to main/master**: Full pipeline (test → build → deploy)
- **Pull Request**: Test and build only (no deployment)
- **Manual trigger**: Available through GitHub Actions UI

## 🔍 Testing Strategy

The application includes several types of tests:

- **Unit Tests**: JavaScript function testing
- **DOM Tests**: HTML element interaction testing
- **Integration Tests**: Button click and counter functionality
- **Build Validation**: File existence and content validation

## 🌐 Deployment

The application is automatically deployed to GitHub Pages when:
1. Code is pushed to the main branch
2. All tests pass
3. Build validation succeeds

### Manual Deployment

To deploy manually:
1. Go to Actions tab in GitHub repository
2. Select "CI/CD Pipeline - Deploy Web App"
3. Click "Run workflow"
4. Choose the branch and click "Run workflow"

## 📊 Monitoring

- **GitHub Actions**: View pipeline status and logs
- **GitHub Pages**: Monitor deployment status
- **Artifacts**: Download test results and build packages

## 🛠️ Customization

### Adding New Tests
1. Add test files with `.test.js` extension
2. Follow Jest testing patterns
3. Tests run automatically in pipeline

### Modifying Build Process
1. Update `validate.js` for custom validation rules
2. Modify `package.json` scripts as needed
3. Update GitHub Actions workflow if required

### Changing Deployment Target
1. Replace GitHub Pages deployment step
2. Add necessary secrets/environment variables
3. Update deployment job in `.github/workflows/deploy.yml`

## 📝 Notes

- This is a demonstration project for learning CI/CD concepts
- The application is intentionally simple to focus on pipeline setup
- Production applications would include additional security, testing, and monitoring

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes and add tests
4. Submit a pull request
5. Pipeline will automatically test your changes

---

**Live Demo**: [GitHub Pages URL will be available after first deployment]