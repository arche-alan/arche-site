export class RequestModel {
  email = ""
  phone = ""
  name = ""
  description = ""
}

export class ResponseModel {
  success = ""
  error = new RequestModel()
}