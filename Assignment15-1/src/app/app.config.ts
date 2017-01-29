/**
 * Created by maddie on 1/28/17.
 */
import { OpaqueToken } from "@angular/core";

export let APP_CONFIG = new OpaqueToken("app.config");

export interface IAppConfig {
    apiEndpoint: string;
    companiesUrl: string;
    universitiesUrl: string;
}

export const AppConfig: IAppConfig = {
    apiEndpoint: "https://api.myjson.com/bins/",
    companiesUrl: "1ca6xt",
    universitiesUrl: "w7hlt"
};