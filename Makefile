install:
	npm install
even:
	npx node bin/brain-even.js
calc:
	npx node bin/brain-calc.js
gcd:
	npx node bin/brain-gcd.js
prog:
	npx node bin/brain-progression.js
prime:
	npx node bin/brain-prime.js
publish:
	npm publish --dry-run
lint:
	npx eslint .