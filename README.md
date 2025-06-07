# David Fauzi Terminal Portfolio

**Live Website:** [https://davidf1000.github.io/terminal-portofolio/](https://davidf1000.github.io/terminal-portofolio/)

## Description
This is my personal website and portfolio, designed to look and feel like a terminal/command-line interface. My reason for creating this terminal-styled website is because I'm a backend software engineer and a lot of my time is spent on the terminal and as much as i hate it, I'm bad at designing cool looking frontend website. Hence, i want to create a unique experience that allows visitors to interact with the website using terminal commands.

## Features
- **Terminal-based portfolio website**: Interact with my portfolio as if you are in a real terminal.
- **Responsive design**: Fully tested and usable on both desktop and mobile devices.
- **Intellisense autocomplete**: Get inline command suggestions and press <kbd>Tab</kbd> or <kbd>Right Arrow</kbd> to accept.
- **Command history navigation**: Use <kbd>Up</kbd> and <kbd>Down</kbd> arrows to cycle through your previous commands, even after clearing the terminal.

## List of Commands
| Command      | Description                                                      |
| ------------ | ---------------------------------------------------------------- |
| `banner`     | Show the welcome banner.                                         |
| `help`       | List all available commands and their descriptions.              |
| `whoami`     | Display information about David Fauzi.                          |
| `aboutme`    | Show a short biography/about section.                           |
| `experience` | List work experience and relevant roles.                        |
| `education`  | Show education background.                                      |
| `honor`      | Display honors and awards.                                      |
| `contactme`  | Show contact information and social links.                      |
| `clear`      | Clear the terminal output (command history navigation persists).|

## Tech Stack
- **React** (with TypeScript)
- **Vite**
- **Tailwind CSS** (for styling)

## How to Run Locally
1. **Clone the repository:**
   ```zsh
   git clone https://github.com/davidf1000/terminal-portofolio.git
   cd terminal-portofolio
   ```
2. **Install dependencies:**
   ```zsh
   npm install
   # or
   yarn install
   ```
3. **Start the development server:**
   ```zsh
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser to view the site.

---

Feel free to explore the commands, try out autocomplete, and navigate the site as you would a real terminal!
