# 📄 BTB Teams Portfolio

## 📚 Table of Contents
1. [Introduction](#1-introduction)
2. [Repository Structure](#2-repository-structure)
3. [Getting Started](#3-getting-started)
4. [Uploading Your Profile](#4-uploading-your-profile)
5. [Verification Process](#5-verification-process)
6. [Contact Information](#6-contact-information)
7. [License](#7-license)
8. [Additional Tips](#8-additional-tips)
9. [Next.js TypeScript Project Documentation](#9-nextjs-typescript-project-documentation)

---

## 1. Introduction

**Purpose:**
Provide an overview of the repository, its purpose, and what it aims to achieve.

# BTB Teams Portfolio

Welcome to the **BTB Teams Portfolio** repository! This centralized space showcases the profiles, projects, contributions, and achievements of BTB Finance's team members and interns. Our goal is to maintain a comprehensive record for future reference and verification, ensuring transparency and recognition of each individual's efforts.

---

## 2. Repository Structure

**Purpose:**
Explain how the repository is organized to help users navigate it easily.

### Repository Structure

The repository is organized into the following main directories:

- **Teams/**
  - Contains individual team member directories.
  - Each team member has their own folder with their profile, projects, and relevant documentation.

- **Assets/**
  - Images, logos, and other media used in the repository.

- **Documentation/**
  - Additional documentation and guidelines.

*Note:* Team members only need to create and manage their own profile directories within the `Teams/` folder. There is no need to modify or add files outside your own profile directory.

---

## 3. Getting Started

**Purpose:**
Provide instructions for new team members or interns on how to use the repository.

### Prerequisites

- A GitHub account
- Git installed on your local machine
- Basic knowledge of Git commands

### How to Contribute

1. **Fork the Repository:**
   - Click the "Fork" button at the top right of this page to create a copy under your GitHub account.

2. **Clone Your Forked Repository:**
   ```bash
   git clone https://github.com/yourusername/BTB-Teams-Portfolio.git
   ```
3. **Navigate to the Repository:**
   ```bash
   cd BTB-Teams-Portfolio/
   ```
4. **Create Your Profile Directory:**
   - Follow the instructions in [Uploading Your Profile](#4-uploading-your-profile) to set up your profile and projects.

5. **Commit and Push:**
   ```bash
   git add .
   git commit -m "Add profile for [Your Full Name]"
   git push origin main
   ```
6. **Submit a Pull Request:**
   - Go to your forked repository on GitHub.
   - Click on "Pull Requests" and then "New Pull Request".
   - Create a pull request to merge your changes into the main repository.

---

## 4. Uploading Your Profile

**Purpose:**
Provide a simple guide for team members to upload their profiles, ensuring they only need to modify files within their own profile directory.

### Steps to Upload Your Profile

1. **Create Your Profile Directory:**

   - Inside the `Teams/` directory, create a new folder named with your unique ID and name. Example:
     ```
     Teams/001-JohnDoe/
     ```
   - Use the following command to create the directory and necessary subdirectories:
     ```bash
     mkdir -p Teams/001-JohnDoe/{Projects,Certificates}
     ```

2. **Add Your `README.md`:**

   - Create a `README.md` file inside your profile directory (`Teams/001-JohnDoe/README.md`) with the following template:

     ```markdown
     # Profile: [Your Full Name]

     ## Personal Information

     - **Name:** [Your Full Name]
     - **Unique ID:** [Your Unique ID]
     - **Email:** [your.email@example.com]
     - **Role:** [Your Role, e.g., Backend Developer]
     - **Start Date:** [MM/YYYY]
     - **End Date:** [MM/YYYY]

     ## Skills

     - List your skills here

     ## Summary of Contributions

     Provide a brief summary of your contributions during your time with BTB Finance.

     ## Projects

     - [Project 1](Projects/Project1/)
     - [Project 2](Projects/Project2/)
     ```

   - You only need to edit this `README.md` within your own profile directory.

3. **Add Your Projects:**

   - Inside your `Projects/` folder (`Teams/001-JohnDoe/Projects/`), create a separate folder for each project:
     ```bash
     mkdir Teams/001-JohnDoe/Projects/Project1
     ```
   - Each project folder should contain:
     - Project files (code, documentation, etc.)
     - A `README.md` describing the project.

4. **Upload Certificates:**

   - Place digital copies of your certificates inside the `Certificates/` folder (`Teams/001-JohnDoe/Certificates/`).
   - Ensure each certificate file is named appropriately and includes your unique ID.

5. **Commit and Push Your Changes:**

   ```bash
   git add Teams/001-JohnDoe
   git commit -m "Add profile for [Your Full Name]"
   git push origin main
   ```

6. **Submit a Pull Request:**

   - Open a Pull Request in the main `BTB-Teams-Portfolio` repository to add your profile directory.
   - You don't need to modify or add any other files outside your own profile directory.

### Profile Template

To maintain consistency across all profiles, please use the following template for your `README.md`:

```markdown
# Profile: [Your Full Name]

## Personal Information

- **Name:** [Your Full Name]
- **Unique ID:** [Your Unique ID]
- **Email:** [your.email@example.com]
- **Role:** [Your Role, e.g., Backend Developer]
- **Start Date:** [MM/YYYY]
- **End Date:** [MM/YYYY]

## Skills

- List your skills here

## Summary of Contributions

Provide a brief summary of your contributions during your time with BTB Finance.

## Projects

- [Project 1](Projects/Project1/)
- [Project 2](Projects/Project2/)
```

**Example:**

```markdown
# Profile: Jane Doe

## Personal Information

- **Name:** Jane Doe
- **Unique ID:** 002-JaneDoe
- **Email:** jane.doe@example.com
- **Role:** Backend Developer
- **Start Date:** 06/2024
- **End Date:** 12/2024

## Skills

- API Development
- Rust
- Next.js
- TypeScript
- Crypto Expertise

## Summary of Contributions

During my time at BTB Finance, I developed and optimized backend services, collaborated with the frontend team to integrate APIs, and contributed to database schema design.

## Projects

- [API Development for User Authentication](Projects/API-User-Auth/)
- [Database Optimization](Projects/DB-Optimization/)
```

---

## 5. Verification Process

**Purpose:**
Explain how certificates and contributions can be verified for authenticity.

### Verification Process

To ensure the authenticity of certificates and contributions, we've implemented a verification system:

1. **Unique Identifier:**
   - Each certificate is assigned a unique ID, found in your `Certificates/` folder.

2. **Verification Page:**
   - Visit our [Verification Page](https://btbfinance.com/verify) and enter the unique ID to verify your certificate.

3. **GitHub Integration:**
   - Our front-end interface pulls data from this repository via GitHub's API, allowing seamless verification of profiles, projects, and contributions.

---

## 6. Contact Information

**Purpose:**
Provide ways for users to reach out for support or with questions.

### Contact Information

If you have any questions or need assistance, feel free to reach out:



- **General Support:** hello@btb.finance

For general inquiries, you can also join our [Discord](https://discord.gg/bqFEPA56Tc) or contact us via [X](https://x.com/btb_finance).

---

## 7. License

**Purpose:**
Specify the licensing terms for the repository.

### License

This project is licensed under the [MIT License](LICENSE).

---

## 8. Additional Tips

1. **Use the Provided Templates:**
   - Ensure you use the profile and project `README.md` templates to maintain consistency.

2. **No Need to Modify Other Files:**
   - You only need to create and modify files within your own profile directory inside `Teams/`.

3. **Keep Your Profile Updated:**
   - Feel free to update your profile and projects as you make new contributions.

4. **Include Assets Locally:**
   - If you include images or other media, place them within your own profile directory.

---

## 9. Next.js TypeScript Project Documentation

### Overview

A Next.js TypeScript project showcasing team members and their portfolios.

### Features

- 🚀 Built with Next.js and TypeScript
- 💅 Styled with TailwindCSS
- 📱 Fully Responsive Design
- ⚡ Fast Performance
- 🔍 SEO Optimized

### Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Project Structure

```
├── src/
│   ├── app/             # App router directory
│   ├── components/      # Reusable components
│   ├── types/          # TypeScript type definitions
│   └── styles/         # Global styles
├── public/             # Static assets
└── tailwind.config.js  # Tailwind CSS configuration
```

### Demo Data

The project currently includes demo data that can be replaced with real team member information. Demo data can be found in the respective component files.

### Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## Final Notes

- **Consistency:** Ensure that all internal links in your own `README.md` files are correct.
- **Placeholders:** Replace placeholders like `[Your Full Name]`, `[Your Unique ID]`, and `[your.email@example.com]` with your actual details.
- **Privacy:** Only include information and files that you are comfortable sharing publicly.
- **Email Addresses:** Since BTB Finance doesn't provide unique emails for each team member, please use your personal email addresses in your profiles.

By following these simplified steps, you can easily create your own profile within the repository without the need to change or add any other files outside your own profile directory. This approach ensures the portfolio remains organized and professional while making the process straightforward for all team members.
