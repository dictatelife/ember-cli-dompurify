import { module, test } from "qunit";
import { setupTest } from "ember-qunit";
import DomPurify from "ember-cli-dompurify/services/dom-purify";
import { htmlSafe } from "@ember/template";

module("Unit | Service | dom-purify", function (hooks) {
  setupTest(hooks);

  test("purifies input based upon app configuration if present", function (assert) {
    let service = this.owner.lookup("service:dom-purify") as DomPurify;
    assert.deepEqual(
      service.sanitize("<p>p tag</p><span>span tag</span>"),
      htmlSafe("<p>p tag</p>span tag")
    );
  });

  test("purifies input based upon app configuration and supplied args if both are present", function (assert) {
    let service = this.owner.lookup("service:dom-purify") as DomPurify;
    assert.deepEqual(
      service.sanitize("<p>p tag</p><span>span tag</span>", {
        FORBID_CONTENTS: ["span"],
      }),
      htmlSafe("<p>p tag</p>")
    );
  });
});
