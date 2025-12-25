
docker build -t development .
docker run --rm -v $(pwd)/output:/app/build development sh -c "npx update-browserslist-db@latest && npm run build"

# Remove old files/directories (except .git, .gitignore, .gitattributes, and development)
find .. -mindepth 1 -maxdepth 1 ! -name '.gitignore' ! -name '.gitattributes' ! -name 'development' ! -name '.git' -exec rm -rf {} +

# Copy new build files to parent directory
cp -rf output/* ../.

# Clean up output directory
rm -rf output
