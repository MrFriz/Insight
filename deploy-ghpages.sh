#!/bin/bash
set -e # exit with nonzero exit code if anything fails


echo $TRAVIS_BRANCH



[ $TRAVIS_BRANCH == "master" ] || exit 0

# clear and re-create the out directory

echo "clear previous build... "
rm -rf dist || exit 0;
mkdir dist;
echo "clear previous build... OK"

# run our compile script, discussed above
echo "run build..."
npm run quietbuild
echo "run build... OK"

# go to the dist directory and create a *new* Git repo
echo "commit dist dir..."
cd dist
git init

# inside this git repo we'll pretend to be a new user
git config user.name "Travis CI"
git config user.email "projects@gregoire-audoux.fr"

# The first and only commit to this new Git repo contains all the
# files present with the commit message "Deploy to GitHub Pages".
git add .
git commit -m "Deploy to GitHub Pages"

echo "commit dist dir... OK"

# Force push from the current repo's master branch to the remote
# repo's gh-pages branch. (All previous history on the gh-pages branch
# will be lost, since we are overwriting it.) We redirect any output to
# /dev/null to hide any sensitive credential data that might otherwise be exposed.
echo "push to gh-pages..."
git push --force --quiet "https://${GH_KEY}@github.com/genuinegreg/Stats" master:gh-pages > /dev/null 2>&1
echo "push to gh-pages... OK"
