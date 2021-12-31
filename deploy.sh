#!/bin/bash

echo -e "\033[0;32mPushing generated website...\033[0m"

# Commit changes.
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi

# echo -e "\033[0;32mRemove 'public' and push to 'blog'...\033[0m"

# Remove the generated 'public' folder before pushing to 'blog'
# rm -rf public

# # Push the code to the 'blog' repo
# git add .
# git commit -m "$msg"

# # Push source and build repos.
# git push origin master

# echo -e "\033[0;32mCompile the website...\033[0m"
# Build the project.
bundle exec jekyll build

# echo -e "\033[0;32mPush 'public' to '<username>.github.io'...\033[0m"
# Go To Public folder
cd _site
# Add changes to git.
git add .

git commit -m "$msg"

# Push source and build repos.
git push origin master -f

echo -e "\033[0;32mPushing source code...\033[0m"
# Come Back up to the Project Root
cd ..
git add .
git commit -m "$msg"
git push origin master -f
