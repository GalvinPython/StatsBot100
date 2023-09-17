@REM Yes because I'm lazy to type anything into the terminal
@echo off

git add .

set /p CommitMessage=Message: 
git commit -m "%CommitMessage%"

set /p CommitBranch=Branch: 
git push origin %CommitBranch%