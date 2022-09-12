import Service from "@ember/service";
import domPurify from "dompurify";
import { Config } from "dompurify";
declare const DomPurify_base: Readonly<typeof Service> & (new (properties?: object | undefined) => {
    readonly appConfig: domPurify.Config;
    sanitize(text: string, config?: Config | null): import("@ember/template/-private/handlebars").SafeString;
} & Service) & (new (...args: any[]) => {
    readonly appConfig: domPurify.Config;
    sanitize(text: string, config?: Config | null): import("@ember/template/-private/handlebars").SafeString;
} & Service);
export default class DomPurify extends DomPurify_base {
}
declare module "@ember/service" {
    interface Registry {
        "dom-purify": DomPurify;
    }
}
export {};
//# sourceMappingURL=dom-purify.d.ts.map