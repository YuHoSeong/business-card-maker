class ImageUploader {
  async upload(file: File) {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'hxpa5n8c');
    const result = await fetch(
      'https://api.cloudinary.com/v1_1/djbwad60o/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    return result.json();
  }
}

export default ImageUploader;
