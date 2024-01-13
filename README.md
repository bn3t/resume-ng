# Resume Builder with Astro, React and Puppeteer

This project is a sophisticated Resume Builder that harnesses the power of Astro to create a visually appealing website to showcase your resume and also uses Puppeteer and Chrome to generate a downloadable PDF version. The resume content is based on a YAML document which follows an improved version of the [JSONResume](https://jsonresume.org/) format.

## Features

- **Static Site Generation**: Built using Astro for fast loading and optimal performance.
- **ReactJS Integration**: Leverages React components within Astro.
- **TailwindCSS**: Utilizes TailwindCSS for elegant, responsive design with minimal effort.
- **PDF Resume Export**: Provides the ability to generate a PDF version of the resume using Puppeteer and Chrome headless browser.
- **YAML-based Configuration**: Easy to edit and maintain resume details using a YAML file that follows a customized JSONResume format.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (LTS version recommended)
- npm

## Installation

To install this project, follow these steps:

1. Clone this repository:

```bash
git clone https://github.com/bn3t/resume-ng.git
cd resume-ng
```

2. Install dependencies:

```bash
npm install
```

## Usage

After installation, you can start editing your resume by modifying the `resume.yaml` file located in the source directory. Follow the improved JSONResume format structure provided in the template.

To run the project locally and see your changes in real time, execute:

```bash
npm run dev
```

Your resume website will be available at `http://localhost:5173`.

To generate your resume as a PDF, run:

```bash
npm run build
```

The PDF will be saved in the `dist/` directory.

## Version Management and Changelog Generation

This project adheres to [Conventional Commits](https://www.conventionalcommits.org), a specification for adding human and machine-readable meaning to commit messages. This convention facilitates precise version management and changelog generation.

### Commit Message Structure

When committing changes to the repository, please follow the Conventional Commits format:

```plaintext
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

For example:

```plaintext
feat(profile): add ability to include social media links

- include links to Twitter and GitHub.
- ensure links are optional.

Closes #42
```

By using this structured format, automated tools can analyze the commit messages to determine the type of version increment (major, minor, or patch) required.

### Automated Releases with release-please

This project utilizes [release-please](https://github.com/google-github-actions/release-please-action), an automated release tool that creates version bumps and changelogs based on the commit history. Upon merging changes to the main branch, `release-please` analyzes the commits, calculates the next version number according to semantic versioning (semver), and generates or updates the CHANGELOG.md file with the relevant changes.

The `release-please` action is configured to propose a new GitHub release automatically. A pull request is created containing the version bump and updated changelog, and upon approval and merge of this pull request, an official GitHub release is made.

## Release Workflow

1. The repository maintainer merges pull requests with Conventional Commits formatted messages into the main branch.
2. The `release-please` GitHub action automatically attempts to create a new GitHub release pull request as changes are merged.
3. Maintainers review and merge the automatically created version bump/changelog pull request.
4. Upon merging, an official GitHub release is created, and the new version of the software is tagged in the repository.

By following this workflow, the project ensures well-organized release management, easy tracking of changes, and clear communication about updates to contributors and users.

# Publishing

The resume is published on Netlify and available at
[https://resume.smartobjects.be](https://resume.smartobjects.be)

## Netlify Deployment

This project is configured to be automatically deployed to Netlify, a hosting service that provides seamless deployment for static sites. In this setup, we've implemented continuous deployment for both the main branch, serving as the production site, and for individual feature branches, which will generate preview deployments. This allows for real-time testing and feedback for any changes made to the repository.

### Main Branch Deployment

The main branch is considered the production branch. Any commits made to this branch will trigger a deployment process on Netlify, resulting in updates to the live production website.

To enable continuous deployment for the main branch:

1. Log in to your Netlify account and select 'New site from Git'.
2. Choose your Git provider and authorize access to your repository.
3. Select the repository containing your project.
4. Configure your build settings:
   - Build command: `npm run build` or `yarn build`
   - Publish directory: `dist/` (or your designated build output directory)
5. Deploy your site.

In your Netlify dashboard, you can monitor the build process and access the deployment logs. Once the build is complete, your updated site will be available at your Netlify subdomain (`yoursite.netlify.app`) or your custom domain if you've set one up.

### Feature Branch Deployment (Preview deployments)

For feature branches, Netlify provides the ability to create preview deployments. Whenever a pull request is made against the main branch, Netlify will automatically build and deploy that particular branch, creating a unique URL where the changes can be viewed live.

The process for setting up feature branch deployment is as follows:

1. When you create a new pull request or push to a non-main branch, Netlify detects these changes.
2. A new deployment is initiated, separate from your production deployment.
3. Once the build is complete, Netlify provides a unique preview URL you can share with your team for review and testing.
4. Any subsequent commits to the same branch will update the corresponding preview deployment.

This preview URL is ideal for testing new features, bug fixes, and other changes without affecting the main deployed site. You can access this URL directly from your pull request checks in GitHub, making it easy to navigate to your preview site.

# Licensing

## Code

The source code for this project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Data Files

The data files in the `resume` directory are proprietary and are not part of the open-source licensing
of this project. Usage of these data files is subject to the terms outlined in the
[LICENSE_DATA](resume/LICENSE_DATA) file.
