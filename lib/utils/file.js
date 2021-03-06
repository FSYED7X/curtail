'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractFileInfo = extractFileInfo;

/**
 * Extract the name of the file and the file's extension from the provided file path.
 * 
 * @param {string} path The user provided path to the image file.
 * 
 * @returns {Object} Returns an object with the file name and extension as properties and the results as the values.
 */
function extractFileInfo(path) {
  var nameIndex = 0;
  var extIndex = 0;
  var fileInfo = {
    name: '',
    ext: ''
  };
  if (path.lastIndexOf('/') > -1) nameIndex = path.lastIndexOf('/');
  extIndex = path.lastIndexOf('.');
  fileInfo.name = path.slice(nameIndex + 1, extIndex);
  fileInfo.ext = path.slice(extIndex + 1);
  return fileInfo;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9maWxlLnRzIl0sIm5hbWVzIjpbImV4dHJhY3RGaWxlSW5mbyIsInBhdGgiLCJuYW1lSW5kZXgiLCJleHRJbmRleCIsImZpbGVJbmZvIiwibmFtZSIsImV4dCIsImxhc3RJbmRleE9mIiwic2xpY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBSUE7Ozs7Ozs7QUFPTyxTQUFTQSxlQUFULENBQXlCQyxJQUF6QixFQUFpRDtBQUV0RCxNQUFJQyxTQUFpQixHQUFHLENBQXhCO0FBQ0EsTUFBSUMsUUFBZ0IsR0FBRyxDQUF2QjtBQUVBLE1BQU1DLFFBQWtCLEdBQUc7QUFBRUMsSUFBQUEsSUFBSSxFQUFFLEVBQVI7QUFBWUMsSUFBQUEsR0FBRyxFQUFFO0FBQWpCLEdBQTNCO0FBRUEsTUFBSUwsSUFBSSxDQUFDTSxXQUFMLENBQWlCLEdBQWpCLElBQXdCLENBQUMsQ0FBN0IsRUFBZ0NMLFNBQVMsR0FBR0QsSUFBSSxDQUFDTSxXQUFMLENBQWlCLEdBQWpCLENBQVo7QUFFaENKLEVBQUFBLFFBQVEsR0FBR0YsSUFBSSxDQUFDTSxXQUFMLENBQWlCLEdBQWpCLENBQVg7QUFFQUgsRUFBQUEsUUFBUSxDQUFDQyxJQUFULEdBQWdCSixJQUFJLENBQUNPLEtBQUwsQ0FBV04sU0FBUyxHQUFHLENBQXZCLEVBQTBCQyxRQUExQixDQUFoQjtBQUNBQyxFQUFBQSxRQUFRLENBQUNFLEdBQVQsR0FBZUwsSUFBSSxDQUFDTyxLQUFMLENBQVdMLFFBQVEsR0FBRyxDQUF0QixDQUFmO0FBRUEsU0FBT0MsUUFBUDtBQUVEIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgRmlsZUluZm8gZnJvbSAnLi4vaW50ZXJmYWNlcy9GaWxlSW5mbyc7XHJcblxyXG4vKipcclxuICogRXh0cmFjdCB0aGUgbmFtZSBvZiB0aGUgZmlsZSBhbmQgdGhlIGZpbGUncyBleHRlbnNpb24gZnJvbSB0aGUgcHJvdmlkZWQgZmlsZSBwYXRoLlxyXG4gKiBcclxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHVzZXIgcHJvdmlkZWQgcGF0aCB0byB0aGUgaW1hZ2UgZmlsZS5cclxuICogXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhlIGZpbGUgbmFtZSBhbmQgZXh0ZW5zaW9uIGFzIHByb3BlcnRpZXMgYW5kIHRoZSByZXN1bHRzIGFzIHRoZSB2YWx1ZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEZpbGVJbmZvKHBhdGg6IHN0cmluZyk6IEZpbGVJbmZvIHtcclxuXHJcbiAgbGV0IG5hbWVJbmRleDogbnVtYmVyID0gMDtcclxuICBsZXQgZXh0SW5kZXg6IG51bWJlciA9IDA7XHJcblxyXG4gIGNvbnN0IGZpbGVJbmZvOiBGaWxlSW5mbyA9IHsgbmFtZTogJycsIGV4dDogJycgfTtcclxuXHJcbiAgaWYgKHBhdGgubGFzdEluZGV4T2YoJy8nKSA+IC0xKSBuYW1lSW5kZXggPSBwYXRoLmxhc3RJbmRleE9mKCcvJyk7XHJcblxyXG4gIGV4dEluZGV4ID0gcGF0aC5sYXN0SW5kZXhPZignLicpO1xyXG5cclxuICBmaWxlSW5mby5uYW1lID0gcGF0aC5zbGljZShuYW1lSW5kZXggKyAxLCBleHRJbmRleCk7XHJcbiAgZmlsZUluZm8uZXh0ID0gcGF0aC5zbGljZShleHRJbmRleCArIDEpO1xyXG5cclxuICByZXR1cm4gZmlsZUluZm87XHJcblxyXG59Il19