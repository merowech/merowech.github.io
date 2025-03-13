
docker build -t development .
docker run --rm -v $(pwd)/output:/app/build development npm run build

mkdir -p ../old
find .. -mindepth 1 -maxdepth 1 ! -name '.gitignore' ! -name '.gitattributes' ! -name 'development' -exec mv {} ../old/ \;
mv output/* ../.
