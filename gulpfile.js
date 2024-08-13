const gulp = require('gulp');

require('./gulp/dev.js');
require('./gulp/docs.js');

gulp.task('default', gulp.series(
    'clean',
    gulp.parallel('html', 'sass', 'images','icons', 'fonts', 'files', 'js'),
    gulp.parallel('server', 'watch')
));

gulp.task('prod', gulp.series(
    'clean:prod',
    gulp.parallel('html:prod', 'sass:prod', 'images:prod', 'icons:prod', 'fonts:prod', 'files:prod', 'js:prod'),
    gulp.parallel('server:prod')
));

