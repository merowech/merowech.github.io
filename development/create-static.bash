#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

docker build -t merowech-site .
docker run --rm -v "$(pwd)/output:/app/build" merowech-site npm run build

# Remove old root build files (keep .git, .gitignore, .gitattributes, and development)
find .. -mindepth 1 -maxdepth 1 \
  ! -name '.git' \
  ! -name '.gitignore' \
  ! -name '.gitattributes' \
  ! -name 'development' \
  -exec rm -rf {} +

# Copy new build files (including hidden files like .nojekyll) to repository root
cp -rf output/. ../.

# Clean up temporary output directory
rm -rf output
