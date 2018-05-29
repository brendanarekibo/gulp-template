# Boilerplate for Jekyll and Gulp

## Process
- Clone repository
- run npm install
- run gulp serve

#paths
Paths located in _assets/gulp_config. Some are Jekyll specific. Can be re-jigged to be more generic for other templates

#Gulp tasks
- Complile Sass, uses PostCSS to auto prefix for up to last two browsers
- build CSS file
- Build and minify scripts into one JS file
- Uses imagemin (Options can be included i.e. make progressive)

## Tutorials followed
- https://www.taniarascia.com/make-a-static-website-with-jekyll/
- https://savaslabs.com/2016/10/19/optimizing-jekyll-with-gulp.html
- https://gomakethings.com/inlining-critical-css-for-better-web-performance/

## List of things included in critical sass:
- Normalize.css
- Grid system
- Typography basics
- Button styling
- SVG styles for icons
- Navigation styles
- Utility classes