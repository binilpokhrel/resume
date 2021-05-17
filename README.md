# Streamlined Resume

A fancy way of building my resume.

"Traditional" resume building using LaTeX and Overleaf led to a lot of difficulties in developing the content and style of the resume separately, as well as versioning. This project allows me to decouple the content from design, and provides much more flexibility in development.

## How It Works

`resume.json ---hackmyresume---> resume.html ---puppeteer---> resume.pdf`

The JSON/FRESH resume lives in the `in` directory. Then `build.sh` uses `hackmyresume` to create an HTML version of the resume with my custom-built theme `lattice` applied, and then captures a PDF using Puppeteer. Final PDF resume lives in `out`.

`Lattice` is built using HTML/CSS, with Handlebars for templating. This makes it easy to tweak to suit different styles.

![Usage](/src/assets/readme-console.png)

### Installing

Clone this project, then create a `out/${TERM}/` path from the project root to store your resumes for `$TERM`. run `npm i` to install `puppeteer`, `yargs`, and `colors`. Install `hackmyresume` with NPM as well: `[sudo] npm install hackmyresume -g`. Optionally, build your own theme or modify the existing one under `src/themes/`.

### Usage

```
./build.sh [-t term] [-v version] [-l label]
    *   -t: [DEFAULT=3A] dictates which subdirectory within /out/ to save PDF
    *   -v: [DEFAULT=resume] which json resume file to use as input
    *   -l: [DEFAULT=resume] desired filename of the captured PDF   
```

![Sample Resume, Alternative Format](/src/assets/readme-resume.png)

Updating formats becomes trivial: the HTML & CSS just has to be tweaked accordingly and then the script rerun.

![Sample Resume, Primary Format](/src/assets/readme-resume-3.png)

## Built With

* [HackMyResume](https://github.com/hacksalot/HackMyResume) - Convert JSON resume to HTML
* [Handlebars](https://handlebarsjs.com/) - Templating language with effortless markup
* [Puppeteer](https://github.com/puppeteer/puppeteer) - Headless browser to capture PDF
* [Yargs](https://github.com/yargs/yargs) - Passing arguments to node script
* [Colors](https://www.npmjs.com/package/colors) - Beautifying logging

## Acknowledgments

* [This Medium article](https://medium.com/@colinwren/automating-my-resume-with-hackmyresume-fresh-6b99d655b1a) for inspiration and laying the groundwork
* [HackMyResume](https://github.com/hacksalot/HackMyResume) for being the true Swiss Army knife for resume building
* [FRESH Themes](https://github.com/fresh-standard/fresh-themes) for providing a starter theme
* [FRESH Schema](https://github.com/fresh-standard/fresh-resume-schema/blob/master/schema/fresh-resume-schema_1.0.0-beta.json) for providing detailed specs for building my `resume.json`

