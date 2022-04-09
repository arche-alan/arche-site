import type { NextApiRequest, NextApiResponse } from 'next'
import {RequestModel, ResponseModel} from '../../src/utils/Types'
import {AWSError} from "aws-sdk";
import {SendEmailResponse} from "aws-sdk/clients/sesv2";

const emailRegx: RegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
const phoneRegx: RegExp = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/

const AWS = require('aws-sdk');
AWS.config.region = process.env.APP_AWS_REGION
AWS.config.accessKeyId = process.env.APP_AWS_ACCESS_KEY_ID
AWS.config.secretAccessKey = process.env.APP_AWS_SECRET_ACCESS_KEY

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseModel>
) {
  const data: RequestModel = JSON.parse(req.body)
  let resp = new ResponseModel();

  if(payloadInvalid(data, resp)){
    return res.status(400).json(resp)
  }
  else {
    const ses = new AWS.SES()
    let params = {
      Destination: {
        BccAddresses: [],
        CcAddresses: [],
        ToAddresses: [
          "admin@arche.systems"
        ]
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: `
            <p><strong>${data.name}</strong> says:</p>
            <p>${data.description}</p>
            <p>Callback #: <strong>${data.phone}</strong></p>
          `
          }
        },
        Subject: {
          Charset: "UTF-8",
          Data: "New Form Submission -" + data.name
        }
      },
      ReplyToAddresses: [
        data.email
      ],
      Source: "admin@arche.systems",
    };

    ses.sendEmail(params, (err: AWSError, data: SendEmailResponse) => {
      if (err) {
        console.log(err.message)
        resp.error.description = err.message
        res.status(400)
      } else {
        resp.success = "Thank you for reaching out! We'll be in touch very soon."
        console.log(data);
        res.status(200)
      }

      return res.json(resp)
    });
  }
}

const payloadInvalid = (data: RequestModel, resp: ResponseModel) => {
  let failedValidation = false

  if(!emailRegx.test(data.email)){
    resp.error.email = "Please enter a valid email."
    failedValidation = true
  }
  if(!phoneRegx.test(data.phone)){
    resp.error.phone = "Please enter a valid phone number."
    failedValidation = true
  }
  if(!Boolean(data.name)){
    resp.error.name = "Please enter your name."
    failedValidation = true
  }
  if(!Boolean(data.description)){
    resp.error.description = "Please enter a description."
    failedValidation = true
  }
  return failedValidation
};