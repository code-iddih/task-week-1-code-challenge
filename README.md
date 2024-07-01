
!!==================PREREQUISITES==================!!

To run JavaScript code in Visual Studio Code (VS Code), you typically need a few prerequisites set up:

1. Install Visual Studio Code: First, ensure you have Visual Studio Code installed on your system. You can download it from the official Visual Studio Code website.

2. Install Node.js: Node.js is required if you want to run JavaScript code outside of a web browser environment, such as for server-side scripting or certain development tools. You can download Node.js from nodejs.org, and it's recommended to install the LTS (Long Term Support) version.

3. Install the VS Code Extension for JavaScript Development: Although VS Code supports JavaScript out of the box, installing extensions like ESLint, Prettier, and Debugger for Chrome can significantly enhance your development experience. You can install extensions from the Extensions view in VS Code (Ctrl+Shift+X or Cmd+Shift+X).

4. Fork and clone the code from github --> URL:: 

5. Set Up a Workspace: Open your JavaScript project folder in VS Code. You can do this by selecting File > Open Folder from the menu or by dragging your project folder into the VS Code window. OR you can Navigate to the cloned folder via the terminal then use comand "code ." to open it in Visual Studio Code.

!!==================RUNNING==================!!

1. Open the Terminal and run individual file as follows: Example , if you want to run speed-detector.js , Write 'node speed-detector.js' then press enter.

2. You will see an error that 'ReferenceError: prompt is not defined'

3. You will need to install prompt into the Environment by writing the following commands:

i) npm init -y then press ENTER

ii) npm install prompt-sync  then press ENTER

4. Repeat step 1.

5. You are Now good to go.

Hureeh!!! Enjoy the Program!!
