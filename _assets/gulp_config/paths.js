// paths.js file

var paths = {};

// Directory locations.
paths.assetsDir = '_assets/';      // The files Gulp will handle.
paths.outputDir = 'assets/';        // The resulting static site.

// Folder naming conventions.
paths.fontFolderName   = 'fonts';
paths.imageFolderName  = 'img';
paths.scriptFolderName = 'js';
paths.stylesFolderName = 'styles';

// Asset files locations.
paths.sassFiles   = paths.assetsDir + paths.stylesFolderName;
paths.jsFiles     = paths.assetsDir + paths.scriptFolderName;
paths.imageFiles  = paths.assetsDir + paths.imageFolderName;
paths.fontFiles   = paths.assetsDir + paths.fontFolderName;

// Output files locations.
paths.siteCssFiles   = paths.outputDir + paths.stylesFolderName;
paths.siteJsFiles    = paths.outputDir + paths.scriptFolderName;
paths.siteImageFiles = paths.outputDir + paths.imageFolderName;
paths.siteFontFiles  = paths.outputDir + paths.fontFolderName;

// Glob patterns by file type.
paths.sassPattern     = '/**/*.scss';
paths.jsPattern       = '/**/*.js';
paths.imagePattern    = '/**/*.+(jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG|gif|GIF|webp|WEBP|tif|TIF)';

// Asset files globs
paths.sassFilesGlob  = paths.sassFiles  + paths.sassPattern;
paths.jsFilesGlob    = paths.jsFiles    + paths.jsPattern;
paths.imageFilesGlob = paths.imageFiles + paths.imagePattern;

module.exports = paths;