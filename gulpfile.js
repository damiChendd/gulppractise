// glup 配置文件
const {src,dest,series }  = require('gulp');
const imagemin  = require('gulp-imagemin');

// 默认测试的任务
function defaultTast(cb) {
  cb()
}


// 图片压缩
function imgMin () {
  return src('src/static/img/*')
    .pipe(imagemin())
    .pipe(dest('dist/static/img'))
}


exports.default = defaultTast

exports.default = series(defaultTast,imgMin)
