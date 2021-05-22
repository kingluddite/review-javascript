# Environment and Tools
## Set Up Your Dev Environment
* In development, you will generally want to:
    - Avoid using spaces in `file` and `folder` names with spaces in them because they can cause issues
        + Some tools can malfunction when dealing with such `files` and `folders` because they are looking for a single-word name
        + This applies to your computer's user account as well
            * If your user account has a space in it, such as "Jane Doe", then create a new user account at this time to use for your course that does not have a space in it, such as "JaneDoe"
            * Make sure to set it up as an administrative account
            * This will prevent potential issues later in the course

## How do I create a new user account (in my current account name has a "space" in it)
* [Add macOS user](https://support.apple.com/guide/mac-help/set-up-other-users-on-your-mac-mtusr001/mac)
* [Create Windows 10 user](https://support.microsoft.com/en-us/windows/create-a-local-user-or-administrator-account-in-windows-10-20de74e0-ac7f-3502-a866-32915af2a34d)

## Install VS Code
* **note** This is a different application from the app known as the Microsoft Visual Studio IDE
    - VS Code is a relatively lightweight code editor ideal for web development
    - Visual Studio IDE is an integrated development environment with many more features

### Window VS Code Install Instructions
* Download and install
* Make sure these boxes are checked:
    - Add "Open with Code" action to Windows Explorer file context menu
    - Add "Open with Code" action to Window Explorer directory context menu
    - Register Code as an editor for supported file types
    - Add to PATH (requires shell restart)

### macOS VS Code Install Instructions 
* Download
* Drag into Applications folder
* `cmd` + `shift` + `p` and `shell command` in search to find `Command: Install 'code' command in PATH command`

## We will use the Chrome browser in class

## Nucamp Course Folders
* [Here is the path](https://learn.nucamp.co/pluginfile.php/18995/mod_book/chapter/3089/NucampFolder.zip)
* Extract it to Desktop
* The `git-test` folder will be used in the Bootstrap course to teach you how to use Git
* **note** these folders are empty - That is as intended
    + These folders will provide a consistent way for you to save and store course content throughout your bootcamp

## CLI (Command Line Interfaces)
* aka `shell` or `shell application`
* A GUI (graphical user interface) uses a mouse (or finger on touchscreen GUI)
* There are CLIs built into Windows 10 and macOS
    - With Mac you can use the Terminal app
    - Windows offers several options
        + Command Prompt (basic)
        + PowerShell (advanced)
        + For this class you will use the shell app called Git Bash (we will install it)

### macOS Terminal Video
#### Verify default Terminal shell
`$ echo $0`

* Will include `bash` or `zsh`
* If it contains `zsh` switch your default terminal to bash by [following these instructions](https://www.howtogeek.com/444596/how-to-change-the-default-shell-to-bash-in-macos-catalina/)
    - After making changes:
        + Close Terminal and open again
        + You will see `The default interactive shell is now zsh.` (this is normal)
        + Type `$ echo $0` again and verify your shell is now `bash`

## How to Use macOS Terminal
* [Video macOS How to use Terminal](https://www.youtube.com/watch?v=IGmfU6QU5dI)
    - tilda (home folder)
    - $ means prompt
    - cd
    - ls
    - ls -l
    - ls -la (d stands for directory (followed by permission))
    - autocomplete with tab
    - cd .. (back)
    - mv folder-one folder-two
    - history (up arrow)
    - ls folder-name
    - mv moves and renames
    - cp file ../
    - ls ..
    - rm -rf file (can't delete directories with just rm file)
    - removes gone forever
    - mkdir folder
    - mkdir -p folder/folder
    - man ls (manual page for ls)
        + q to quit out of manual page

### Windows Command Line Tutorial
* cmd
* cd
* cd ..
* cd Desktop\Videos
* cd ../..
* tab autocomplete
* dir (list all files and directories <DIR> is directory)
* dir /a (hidden directories)

## Code Playgrounds
* Codepen
    - Fork to create URL to share
