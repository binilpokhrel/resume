#!/bin/zsh
hackmyresume build in/resume.json to out/resume.html -t src/themes/lattice
node src/gen-pdf.js