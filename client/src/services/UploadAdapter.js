export default class UploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }

  upload() {
    return this.loader.file.then(
      (file) =>
        new Promise((resolve, reject) => {
          var customFileReader = new FileReader();
          customFileReader.onloadend = (e) => {
            resolve({ default: customFileReader.result });
          };

          customFileReader.readAsDataURL(file);
        })
    );
  }
}
