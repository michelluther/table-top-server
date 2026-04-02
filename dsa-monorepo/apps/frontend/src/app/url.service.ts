import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UrlService {
  private static productionHost =
    "dsa-server-dev.eu-central-1.elasticbeanstalk.com";
  // private static _baseHostProd = `${window.location.hostname}:${window.location.port}`
  private static _baseHostProd = `${UrlService.productionHost}`;
  private static _baseHostDev = `${window.location.hostname}:3000`;
  private static _isDev =
    window.location.hostname === "localhost" ||
    /^(((1?[1-9]?|10|2[0-4])\d|25[0-5])($|\.(?!$))){4}$/.test(
      window.location.hostname,
    )
      ? true
      : false;
  private static _baseURL = UrlService._isDev
    ? `${window.location.protocol}//${UrlService._baseHostDev}`
    : `${window.location.protocol}//${UrlService._baseHostProd}`;

  private static _protocolWebSockets =
    window.location.protocol === "http:" ? "ws:" : "wss:";
  private static _baseURLWS = UrlService._isDev
    ? `${UrlService._protocolWebSockets}//${UrlService._baseHostDev}`
    : `${UrlService._protocolWebSockets}//${UrlService._baseHostProd}`;
  constructor() {}

  static getBaseUrl(): string {
    return this._baseURL;
  }

  static getBaseURLWS(): string {
    return this._baseURLWS;
  }

  static getSocketIOUrl(): string {
    // Socket.IO client connects via HTTP/HTTPS, not WS/WSS
    return this._baseURL;
  }
}
