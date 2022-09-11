import Helper from "@ember/component/helper"
import dompurify from "dompurify"
import { Config } from "dompurify"
import { assert } from "@ember/debug"
import { getOwner } from "@ember/application"
import ApplicationInstance from "@ember/application/instance"
import { htmlSafe } from '@ember/template';

export default class DomPurify extends Helper {
  get appConfig(): Config {
    const reg = (getOwner(this) as ApplicationInstance).resolveRegistration(
      "config:environment"
    ) as Record<string, any>
    return reg["domPurify"] || null
  }

  compute(positional: unknown[]) {
    const text = positional[0];
    let sanitized;

    assert(
      "the dom-purify helper accepts one positional argument of type string.",
      typeof text == "string"
    )

    if (this.appConfig) {
      sanitized = dompurify.sanitize(text, this.appConfig)
    } else {
      sanitized = dompurify.sanitize(text)
    }

    return htmlSafe(sanitized as string);
  }
}
