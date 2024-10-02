# gonfff.github.io

---
Just a simple personal page to show my projects and some information about me. May be make it a [hugo](https://gohugo.io) blog in the future. 

This page is built with [Tailwind CSS](https://tailwindcss.com/) because I wanted to try it out.

-----
## Development
- I am using [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) extension in VS Code to see the changes in real time.

- To build the css file for development run the following command
```bash
make build-css-dev
```
- To build the css file with minification run the following command
```bash
make build-css
```
- To build docker image
```bash
make build-container
```
- To run the docker image
```bash
make run-container
```