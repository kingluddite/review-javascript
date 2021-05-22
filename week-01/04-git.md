# Git
## What is Git?
* Version control (DVCS - distributed version control system)
* Most popular (there are others)

## Why use Git?
1. History of "snapshots" of your project history (revert back to a point in time or create branches)
2. Share code online, work on the same project together at the same time

### Popular online Git repositories
* GitHub
* Bitbucket
* Sourceforge
* GitLab

**note** Git is the underlining technology for all of these

## History of Git
* CVCS (centralized) vs DVCS (distributed)
* Linus Torvaldes (Linuz creator) created Git in 2005
* Git is most popular verson control system today
* Git uses a system called "pull requests" where users can make changes then request that their code gets pulled into the central repository (projects in distributed VCS like Git can still have a centralized repo)
    - In this class we will create commits but we won't get into pull requests and branching

## Exercise: Initial Git Setup & Bash
* Windows - Download from site (Accept all default values) and Install
    - Check only Launch Git Bash (uncheck View Release Notes in "Completing the Git Setup Wizard")
    - Click `Finish`
    - It is essentially the same as the macOS Terminal app
    - Bash was default shell app for most unix bases operating systems (like Linux and macOS)
    - **note** In macOS the Terminal is an interface to the Bash shell 
        + So mac users don't need to install it as they are already using it
    - Bash is similar in features to Windows Powershell (with more advanced features than command prompt)
    - It is recommended that a windows user learn to use Bash
        + If you ever need to work in a Mac or Linux environment you will already know how to use their shells
        + And if you are in a Windows environment for work (and you are a Mac user you can use Git Bash because it works just like Terminal)
* How to access GitBash on windows?
    - Right click and choose `Git Bash Here`
* macOS - homebrew intall and `$ brew install git`
    - homebrew is package manager that simplifies software installation for macOS
    - Open with spotlight (spacebar + `Terminal`)

### What version of Git?
`$ git --version`

### Setup Git global configuration
`$ git config --global`

`$ git config --global user.name "John Doe"`

`$ git config --global user.email "john@doe.com`

`$ git config --list` (then you'll see your name email and other config settings for git)

* **note** If you see colon at end `:` Press spacebar to see more or `q` to quite and return to shell prompt

## Using Git
* In bash terminal navigate to `git-test` folder inside NucampFolder (on Desktop)
* git init
* local repo
    - ls vs ls -a (ls -la)
    - cd .git
* cd ..
* git status
* open in VS code `code .`
* new file index.html
* git status
* add code boilerplate
* git add . (autosave on in vs code)
* git status
* git commit -v 'first commit'
* git status
* modify code
* git add .
* git commit -m 'add more code'
* add more code
* git add .
* git commit -m 'Add even more code'
* git log --oneline
    - You will see 3 hashes
    - git checkout (use one of the hash values from one of your three commits) index.html
        + `git checkout asdfsdfbd4 index.html`
        + choose different hashes to see how your code changes
    - Rest back to HEAD (where your last commit was) with
    - `$ git reset HEAD index.html` and then `$ git checkout -- index.html`

## Exercise: Remote Git Repository
* Sign up for github
* create a new remote repo
* name it git-test
* create
* use bottom two commands and paste into terminal or git bash
    - **note** master vs main
    - Pushes your code to github
    - You will see your local repo is not on your remote repository
    - Now in the future I just use `$ git push` to push committed code

## Clone code from remote to local repo
* Create new folder outside of git-test
    - no repos inside repos
    - create folder
    - git clone and URL of remote repo to clone contents from remote to local
    - `$ git remote -v` shows remote link  
