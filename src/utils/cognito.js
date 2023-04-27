import * as AmazonCognitoIdentity from "amazon-cognito-identity-js";
import { getenv } from "./getenv";

export const userPool = new AmazonCognitoIdentity.CognitoUserPool({
  UserPoolId: getenv("CognitoUserPoolId"),
  ClientId: getenv("CognitoClientId"),
});
