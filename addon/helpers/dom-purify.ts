import Helper from "@ember/component/helper"
import * as dompurify from "dompurify"
import { Config } from "dompurify"
import { assert } from "@ember/debug"
import { getOwner } from "@ember/application"
import ApplicationInstance from "@ember/application/instance"

export default class DomPurify extends Helper {
  get config(): Config {
    const reg = (getOwner(this) as ApplicationInstance).resolveRegistration(
      "config:environment"
    ) as Record<string, any>
    return reg["domPurify"] || null
  }

  compute(positional: unknown[]) {
    const text = positional[0]

    assert(
      "the dom-purify helper accepts one positional argument of type string.",
      typeof text == "string"
    )

    if (this.config) {
      return dompurify.sanitize(text, this.config)
    } else {
      return dompurify.sanitize(text)
    }
  }
}
