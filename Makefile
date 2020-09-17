#production
start: install build
	npm run serve
install:
	npm install
build:
	npm run client-build
	npm run serve-build