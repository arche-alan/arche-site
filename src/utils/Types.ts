export class RequestModel {
  email = ""
  phone = ""
  name = ""
  description = ""
}

export class ResponseModel {
  success = ""
  error = new RequestModel()

  constructor(success?: string, error?: RequestModel) {
    this.success = success || ""
    this.error = error || new RequestModel()
  }
}