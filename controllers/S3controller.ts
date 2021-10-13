import AWS = require('aws-sdk')
import {
  BASE64,
  BASE64URL,
  BUCKET_PLACEHOLDER,
  DESTINATION_PLACEHOLDER,
  FILENAME_PLACEHOLDER,
  PATH_INICIAL,
  PUBLIC_READ,
  SUCCESS_UPLOAD_FILE,
  URL_AWS_S3_PLACEHOLDER,
} from '../constants/constants'

export class S3Controller {
  private s3: AWS.S3
  private bucket: string

  constructor() {
    this.s3 = new AWS.S3()
    this.bucket = `${process.env.AWS_S3_BUCKET}`
  }

  public uploadFile(
    file: string | { [index: string]: Buffer },
    destination: string,
    fileName: string
  ): string {
    this.s3.upload(this.getFileParams(file, destination, fileName), (err) => {
      if (err) throw err
      console.log(
        SUCCESS_UPLOAD_FILE.replace(BUCKET_PLACEHOLDER, this.bucket)
          .replace(FILENAME_PLACEHOLDER, fileName)
          .replace(DESTINATION_PLACEHOLDER, destination)
      )
    })
    return this.getUrl(destination, fileName)
  }

  public getUrl(destination: string, fileName: string): string {
    return (
      URL_AWS_S3_PLACEHOLDER.replace(BUCKET_PLACEHOLDER, this.bucket) +
      this.getKey(destination, fileName)
    )
  }

  public fileToBase64(file:Express.Multer.File):string {
    return `data:${file.mimetype};${BASE64},${file.buffer.toString(BASE64)}`
  }

  private getFileParams(
    body: string | { [index: string]: Buffer },
    destination: string,
    fileName: string
  ) {
    const fileParams = {
      Key: this.getKey(destination, fileName),
      ACL: PUBLIC_READ,
      Bucket: this.bucket,
    }

    if (typeof body === 'string') {
      const BufferSettings = body.split(',')
      const type = BufferSettings[0].split(':')[1].split(';')[0]
      Object.assign(fileParams, {
        Body: this.normalizeBodyUpdates(BufferSettings[1]),
        ContentType: type,
      })
      return fileParams
    }

    if (typeof body === 'object') {
      Object.assign(fileParams, {
        Body: this.normalizeBodyUpdates(body),
        ContentType: body.type,
      })
      return fileParams
    }
    return fileParams
  }

  private normalizeBodyUpdates(
    body: string | { [index: string]: Buffer }
  ): Buffer {
    if (typeof body === 'string') {
      return Buffer.from(body, "base64")
    }
    return Buffer.from(body.buffer.toString(BASE64), BASE64)
  }

  private getKey(destination: string, fileName: string): string {
    return (
      destination.replace(/\s/g, '').toLowerCase() + PATH_INICIAL + fileName.replace(/\s/g, '')
    )
  }
}
