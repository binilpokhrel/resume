#!/bin/zsh
version=resume
term=3A
label=resume
while getopts "v:l:t:" option; do
    case "${option}" in
        v) version=${OPTARG};;
        l) label=${OPTARG};;
        t) term=${OPTARG};;
    esac
done
hackmyresume build in/${version}.json to src/build/${label}.html -t src/themes/lattice
node src/gen-pdf.js --label=${label} --term=${term}