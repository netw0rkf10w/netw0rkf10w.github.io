#!/bin/bash

# exit when any command fails
set -e

public_repo=netw0rkf10w.github.io
public_branch=master
private_repo=blog-jekyll
private_branch=master


# Commit changes.
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi

# echo -e "\033[0;32mPushing source code...\033[0m"
# git add .
# git commit -m "$msg"
# git push origin ${private_repo} -f


# Build the project.
rm -r _site/*
bundle exec jekyll build

# echo -e "\033[0;32mPush 'public' to '<username>.github.io'...\033[0m"
# Go To Public folder
# cd _site
# Add changes to git.

echo -e "\033[0;32mCopy generated website to ../${public_repo} ...\033[0m"

cd ../${public_repo}/
rm -r ./*
cp -r ../${private_repo}/_site/* ./

echo -e "\033[0;32mPushing generated website...\033[0m"
git add .
git commit -m "$msg"
git push origin ${public_branch} -f
