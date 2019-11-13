install:
	npm install
start:
	npx babel-node src/bin/brain-games.js
drypublish:
	npm publish --dry-run