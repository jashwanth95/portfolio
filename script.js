const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">contact</span>',
  about:
    "Hi this is Jashwanth Kumar. So here's the thing, I am very enthusiastic person and love facing challenges. I take up things very challenging if I like it. Always won any challenges that came to me. I'm a straight forward person and try to complete things on time. ",
  skills:
    '<span class="code">Languages:</span> Python, HTML, CSS, JavaScript, Angular JS<br><span class="code">Technologies:</span> Git, MySQL<br><span class="code">Frameworks:</span> React.js, Vue.js, Django',
  education:
    "Currently : Cleveland State University , Ohio<br>Major — Information Systems",
  resume: "<a href='https://drive.google.com/file/d/1qnh6dMfU_WC7pgDaVWwjlufn4afYhRp-/view?usp=sharing' class='success link'>resume.pdf</a>",
  experience: "Experience in Web and Windows applications development.",
  contact:
    "You can contact me on any of following links:<br> <a href='www.linkedin.com/in/jashwanth-muddapuram-26294a115'>Linkedin</a> ,<a href='https://github.com/jashwanth95' class='success link'>Github</a>"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
