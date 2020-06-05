install:
	npm install
start:
	npx node bin/brain-games.js
even:
	npx node bin/brain-even.js
calc:
	npx node bin/brain-calc.js
gkd:
	npx node bin/brain-gkd.js
prog:
	npx node bin/brain-progression.js
publish:
	npm publish --dry-run
lint:
	npx eslint .