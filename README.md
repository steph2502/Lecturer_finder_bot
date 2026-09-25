# FindCU Lecturers 🎓

A Telegram bot that helps Covenant University students quickly find information about university lecturers.

🔗 **Try the bot:** [@FindCuLecturersbot](https://t.me/FindCuLecturersbot)

---

## Overview

Finding information about lecturers should not require searching through multiple pages, documents, or asking other students.

**FindCU Lecturers** is a Telegram bot built to make lecturer discovery faster and more accessible for Covenant University students.

The bot provides a simple conversational interface where students can search for lecturers and retrieve available lecturer information directly from Telegram.

The project started as a small utility for the Covenant University community and is open to improvements and contributions.

---

## Why I Built This

As a university student, there are often situations where you need to quickly find information about a lecturer:

* Who teaches a particular course?
* What is the lecturer's name?
* How do I find a lecturer I have heard about?
* Where can I get information about a lecturer?

These questions are simple, but finding the answer is not always convenient.

Instead of requiring students to search manually, I wanted to put the information into a tool that students already use every day.

**Open Telegram → Search → Find the lecturer.**

---

## Features

### 🔎 Lecturer Search

Search for Covenant University lecturers through Telegram rather than manually going through university resources.

### 👤 Lecturer Information

The bot returns the available information associated with a lecturer in its dataset.

### 💬 Telegram Interface

The entire experience happens inside Telegram, so users do not need to install another application.

### ⚡ Quick Access

The bot is designed around a simple search-and-response workflow, making it useful when students need lecturer information quickly.

---

## How It Works

The basic workflow is:

```text
             Student
                │
                ▼
        Telegram Bot
                │
                ▼
         Search Query
                │
                ▼
       Lecturer Search
                │
                ▼
       Lecturer Dataset
                │
                ▼
        Matching Results
                │
                ▼
             Student
```

A typical interaction can be thought of as:

```text
Student
   │
   │ "Find Dr. Smith"
   ▼
Telegram Bot
   │
   ▼
Search Lecturer Records
   │
   ▼
Matching Lecturer
   │
   ▼
Return Available Information
```

---

## Project Architecture

The application can be viewed as three main components:

```text
┌──────────────────────────────┐
│          Telegram            │
│            User              │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│        Telegram Bot          │
│                              │
│ • Receive messages           │
│ • Process commands           │
│ • Handle search requests     │
│ • Format responses           │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│       Lecturer Data          │
│                              │
│ • Lecturer records           │
│ • Searchable information     │
│ • Matching / filtering       │
└──────────────────────────────┘
```

---

## User Experience

The goal is to keep the interaction simple.

```text
Start Bot
   ↓
Search for Lecturer
   ↓
Enter Lecturer Name
   ↓
Bot Searches Records
   ↓
Display Matching Information
```

This makes the bot useful even for students who are not particularly technical.

---

## Example Use Cases

### Finding a Lecturer

A student wants to find information about a lecturer but does not remember where the lecturer's information is listed.

Instead of searching through multiple resources:

```text
Telegram
   ↓
FindCU Lecturers
   ↓
Search
   ↓
Lecturer Information
```

### Preparing for a Course

A student can use the bot while trying to identify lecturers associated with their courses or departments.

### Quick Reference

The bot can also serve as a lightweight reference tool when students need lecturer information while communicating with classmates or planning academic activities.

---

## Data

The bot depends on a lecturer dataset containing the information used for search and retrieval.

Because university information can change over time, maintaining the underlying data is an important part of keeping the bot useful.

Future contributors can therefore help not only by changing code, but also by improving:

* Lecturer records
* Search accuracy
* Data organisation
* Missing information
* Outdated information

---

## Technology

> Update this section to match the exact technologies used in the repository.

The project is built around the Telegram Bot API and a backend application responsible for processing user requests and searching lecturer information.

Potential components include:

* Telegram Bot API
* Backend application
* Lecturer dataset
* Search / filtering logic

---

## Project Structure

The repository structure should reflect the actual codebase.

A typical structure may look like:

```text
.
├── bot/
│   ├── handlers/
│   ├── services/
│   └── ...
│
├── data/
│   └── lecturers.*
│
├── utils/
│
├── main.*
├── requirements.txt / package.json
└── README.md
```

> Replace this with the exact structure of the repository before publishing.

---

## Running Locally

### 1. Clone the repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd <YOUR_REPOSITORY_NAME>
```

### 2. Install dependencies

Use the package manager associated with the project.

For Python:

```bash
pip install -r requirements.txt
```

For Node.js:

```bash
npm install
```

### 3. Configure the Telegram Bot

Create a Telegram bot using **BotFather** and obtain a bot token.

Store the token in an environment variable rather than committing it to the repository.

For example:

```env
TELEGRAM_BOT_TOKEN=your_bot_token
```

### 4. Start the bot

For Python:

```bash
python main.py
```

For Node.js:

```bash
npm start
```

> Update these commands and environment variable names to match the actual repository.

---

## Environment Variables

If the project requires environment variables, create a `.env` file locally.

Example:

```env
TELEGRAM_BOT_TOKEN=
```

Additional variables should be documented here if the application requires them.

**Never commit your Telegram bot token or other credentials to GitHub.**

---

# Contributing 🤝

Contributions are welcome!

The project was created to serve the Covenant University community, and there are many ways it can be improved.

You can contribute by:

* Adding missing lecturers
* Updating lecturer information
* Improving search
* Improving the Telegram interface
* Adding new search capabilities
* Improving error handling
* Improving the codebase
* Adding tests
* Improving documentation
* Suggesting new features

---

## Getting Started

### 1. Fork the repository

Create your own fork of the project on GitHub.

### 2. Clone your fork

```bash
git clone <YOUR_FORK_URL>
cd <PROJECT_NAME>
```

### 3. Create a branch

```bash
git checkout -b feature/improve-lecturer-search
```

### 4. Make your changes

Implement your improvement and test it locally.

### 5. Commit your changes

```bash
git add .
git commit -m "Improve lecturer search"
```

### 6. Push your branch

```bash
git push origin feature/improve-lecturer-search
```

### 7. Open a Pull Request

Describe:

* What you changed
* Why you changed it
* How you tested it
* Any additional considerations

---

# Ideas for Future Improvements 🚀

There are several directions the project could take.

### 🔍 Better Search

Support:

* Partial names
* Misspellings
* First-name searches
* Last-name searches
* Department filtering
* Faculty filtering

For example:

```text
"Onwu"
      ↓
Find matching lecturers
```

---

### 📚 Course-Based Search

Allow students to search by course:

```text
CSC 411
   ↓
Lecturer(s) associated with course
```

This would make the bot useful not only for finding people, but also for navigating academic information.

---

### 🏫 Department & Faculty Filtering

Allow searches such as:

```text
Computer Science
      ↓
Show lecturers
```

or:

```text
Engineering
      ↓
Show departments
      ↓
Show lecturers
```

---

### 🔎 Fuzzy Search

Introduce fuzzy matching so that small spelling differences do not prevent users from finding a lecturer.

For example:

```text
"Prof. Adeboy"
       ↓
Possible matches
       ↓
Prof. Adeboye
Prof. Adeboyejo
```

---

### 📱 Improved Telegram UI

The bot could make greater use of Telegram's interactive features, such as:

* Inline keyboards
* Search buttons
* Department menus
* Pagination
* Inline queries

---

### 📊 Usage Analytics

Anonymous usage statistics could help identify:

* Most searched lecturers
* Most searched departments
* Failed searches
* Common search terms

This could help guide future improvements without storing unnecessary personal information.

---

### 🛠️ Admin Data Management

An administrator interface could make it easier to:

* Add lecturers
* Edit lecturer information
* Remove outdated records
* Import lecturer data
* Manage departments

---

# Privacy & Data Considerations

The bot should only expose information that is appropriate for public academic reference.

Contributors should avoid adding sensitive personal information about lecturers.

When extending the project, consider:

* What information is actually necessary?
* Is the information publicly available?
* Does the bot need to store user information?
* Are search logs necessary?
* How long should any stored data be retained?

The goal is to make academic information easier to access without unnecessarily collecting personal data.

---

# Project Philosophy

FindCU Lecturers is intentionally simple.

It is an example of how a small piece of software can solve a very specific problem for a community.

The project follows a simple idea:

> **If students repeatedly need to search for the same information, make that information easier to access.**

---

# Project Status

The bot is available on Telegram and can be accessed here:

**[Launch FindCU Lecturers](https://t.me/FindCuLecturersbot)**

The project is open to contributions that improve its functionality, data quality, usability, and maintainability.

---

# Author

**Stephanie Onwuagbaizu**

Computer Science graduate and Software Engineer interested in backend systems, automation, optimization, and building practical software solutions.

* **GitHub:** `github.com/steph2502`
* **Portfolio:** `stephanie-s-portfolioo.vercel.app`
* **LinkedIn:** `linkedin.com/in/stephanieonwuagbaizu`

---

## Contributions

Have an idea that could make FindCU Lecturers more useful for Covenant University students?

**Fork the project, open an issue, or submit a pull request.**

Let's make it easier for students to find the information they need.
