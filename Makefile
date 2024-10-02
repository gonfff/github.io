build-css-dev:
	npm run build:css-dev

build-css:
	npm run build:css

build-gh-pages: build-css
	mkdir -p dist/dist
	mkdir -p dist/images

	mv dist/output.css dist/dist/output.css
	cp src/index.html dist/index.html
	cp src/cards.json dist/cards.json
	cp src/script.js dist/script.js
	cp images/* dist/images/

build-container:
	docker build -t gonfff.github.io:latest .

run-container:
	docker run -p 8080:80 gonfff.github.io:latest

build-run-container: build-container run-container