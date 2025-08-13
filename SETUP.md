# CI/CD Pipeline Setup Guide

This document provides step-by-step instructions for setting up the CI/CD pipeline for the simple web application.

## 📋 Prerequisites

Before setting up the pipeline, ensure you have:

- GitHub account
- Git installed locally
- Node.js (v18+) and npm installed
- Basic understanding of Git workflows

## 🚀 Initial Setup

### 1. Repository Setup

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: Simple web app with CI/CD pipeline"

# Add remote repository (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/simple-web-app-cicd.git

# Push to GitHub
git push -u origin main
```

### 2. GitHub Pages Configuration

1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The pipeline will automatically deploy to Pages on the next push to main

### 3. Local Development Setup

```bash
# Install dependencies
npm install

# Run tests to verify setup
npm test

# Validate build process
npm run build

# Test locally (optional)
npm run serve
```

## 🔧 Pipeline Configuration

### GitHub Actions Workflow

The pipeline is defined in `.github/workflows/deploy.yml` and includes:

#### **Triggers**
- Push to `main` or `master` branch
- Pull requests to `main` or `master` branch
- Manual workflow dispatch

#### **Jobs Overview**

1. **Test Job** (`test`)
   - Runs Jest unit tests
   - Uploads test results as artifacts
   - Required for all subsequent jobs

2. **Build Job** (`build`)
   - Validates application files
   - Creates deployment package
   - Uploads build artifacts
   - Depends on successful test job

3. **Deploy Job** (`deploy`)
   - Deploys to GitHub Pages
   - Only runs on main branch pushes
   - Requires both test and build jobs to succeed

4. **Notify Job** (`notify`)
   - Reports pipeline status
   - Runs regardless of other job outcomes

### Required Permissions

The workflow requires these GitHub token permissions:
- `pages: write` - Deploy to GitHub Pages
- `id-token: write` - OIDC token for Pages deployment
- `contents: read` - Read repository contents

These are automatically configured in the workflow file.

## 🧪 Testing the Pipeline

### First Deployment

1. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Setup CI/CD pipeline"
   git push origin main
   ```

2. **Monitor the pipeline**:
   - Go to **Actions** tab in GitHub repository
   - Watch the "CI/CD Pipeline - Deploy Web App" workflow
   - Check each job's progress and logs

3. **Verify deployment**:
   - After successful deployment, visit the GitHub Pages URL
   - URL format: `https://yourusername.github.io/repository-name`

### Testing Changes

1. **Make a change** to any file (e.g., update `index.html`)
2. **Commit and push**:
   ```bash
   git add .
   git commit -m "Update application content"
   git push origin main
   ```
3. **Watch automatic deployment** in Actions tab

### Testing Pull Requests

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/new-feature
   ```

2. **Make changes and push**:
   ```bash
   git add .
   git commit -m "Add new feature"
   git push origin feature/new-feature
   ```

3. **Create pull request** on GitHub
4. **Observe** that tests and build run, but deployment is skipped

## 🔍 Troubleshooting

### Common Issues

#### **Tests Failing**
- Check test output in Actions logs
- Run `npm test` locally to debug
- Ensure all dependencies are installed

#### **Build Validation Failing**
- Run `npm run build` locally
- Check `validate.js` script requirements
- Verify all required files exist and have correct content

#### **Deployment Failing**
- Ensure GitHub Pages is enabled in repository settings
- Check that workflow has required permissions
- Verify branch protection rules don't block deployment

#### **Dependencies Issues**
- Delete `node_modules` and run `npm install`
- Check Node.js version compatibility
- Verify `package.json` syntax

### Debugging Steps

1. **Check Actions logs**:
   - Go to Actions tab → Select failed workflow
   - Click on failed job to see detailed logs
   - Look for error messages and stack traces

2. **Test locally**:
   ```bash
   # Run the same commands as the pipeline
   npm ci
   npm test
   npm run build
   ```

3. **Validate files**:
   ```bash
   # Check file structure
   ls -la
   
   # Validate specific files
   node validate.js
   ```

## 📊 Monitoring and Maintenance

### Regular Checks

- **Monitor pipeline success rate** in Actions tab
- **Review test coverage** and add tests for new features
- **Update dependencies** regularly for security

### Updating the Pipeline

1. **Modify workflow file**: `.github/workflows/deploy.yml`
2. **Test changes** on a feature branch first
3. **Update documentation** if workflow changes significantly

### Adding New Features

1. **Write tests first** (TDD approach)
2. **Implement feature**
3. **Update validation rules** if needed
4. **Test pipeline** with feature branch

## 🔐 Security Considerations

- **Secrets management**: Use GitHub Secrets for sensitive data
- **Dependency scanning**: Consider adding security scanning jobs
- **Branch protection**: Enable branch protection rules for main branch
- **Review process**: Require pull request reviews for main branch

## 📈 Scaling the Pipeline

For larger applications, consider adding:

- **Code quality checks** (ESLint, Prettier)
- **Security scanning** (npm audit, Snyk)
- **Performance testing**
- **Multiple deployment environments** (staging, production)
- **Database migrations**
- **Integration tests**
- **Monitoring and alerting**

---

## 🎯 Next Steps

1. **Enable branch protection** on main branch
2. **Add code quality tools** (ESLint, Prettier)
3. **Set up monitoring** for the deployed application
4. **Add more comprehensive tests**
5. **Consider adding staging environment**

This setup provides a solid foundation for CI/CD practices that can be extended as your application grows!