import Service from '@ember/service';
import domPurify from 'dompurify';
import { Config } from "dompurify"
import { getOwner } from "@ember/application"
import ApplicationInstance from "@ember/application/instance"

export default class DomPurify extends Service.extend({
  get appConfig(): Config {
    const reg = (getOwner(this) as ApplicationInstance).resolveRegistration(
      "config:environment"
    ) as Record<string, any>
    return reg["domPurify"] || {}
  },

  sanitize(text: string, config : Config | null = null) {
    const mergedConfig = Object.assign({}, config, this.appConfig)
    return domPurify.sanitize(text, mergedConfig);
    }
}) { }

declare module '@ember/service' {
  interface Registry {
    'dom-purify': DomPurify;
  }
}
