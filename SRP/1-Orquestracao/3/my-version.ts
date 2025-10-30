class CompressFile {
  compress(file: Buffer): Buffer {
    console.log("Comprimindo arquivo...");
    return file.slice(0, file.length / 2);
  }
}

class FileToCloud {
  upload(file: Buffer, destination: string): Buffer {
    console.log(`Enviando arquivo para ${destination}`);
  }
}

class ServiceFileUpload {
  constructor(
    private compressFile: CompressFile,
    private uploadFile: FileToCloud
  ) {}

  upload(file: Buffer, destination: string) {
    const compressedFile = this.compressFile.compress(file);
    this.uploadFile.upload(compressedFile, destination);
  }
}
