# My Demo App - Jenkins CI/CD Demo

This is a simple web application that demonstrates automated deployment using Jenkins CI/CD pipeline.

## 🚀 Features

- Automated deployment on every Git push
- Build information tracking
- Simple and clean UI
- Responsive design

## 📋 Pipeline Stages

1. **Checkout** - Gets the latest code from GitHub
2. **Build** - Prepares the application and creates build info
3. **Test** - Validates all required files exist
4. **Deploy** - Copies files to the web server

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript
- Jenkins CI/CD
- Nginx Web Server

## 📦 Files

- `index.html` - Main webpage
- `style.css` - Styling
- `app.js` - JavaScript functionality
- `Jenkinsfile` - Jenkins pipeline configuration
- `README.md` - This file

## 🔄 How it Works

1. Developer pushes code to GitHub
2. Jenkins automatically detects the change (webhook or polling)
3. Jenkins runs the pipeline:
   - Checks out code
   - Builds the application
   - Runs tests
   - Deploys to `/var/www/my-demo-app`
4. Application is live at `http://10.20.3.16/`

## 📝 Making Changes

To test the pipeline:

1. Edit any file (e.g., change the text in `index.html`)
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update application"
   git push origin main
   ```
3. Watch Jenkins automatically deploy your changes!

## 🌐 Access

- **Application URL**: http://10.20.3.16/
- **Jenkins Dashboard**: http://10.20.3.16:8080/

## 👥 Team Demo

This project demonstrates:
- Automated CI/CD pipeline
- Infrastructure as Code (Jenkinsfile)
- Automated testing
- Continuous deployment
- Build tracking

---

**Built with ❤️ for Jenkins CI/CD Demo**
