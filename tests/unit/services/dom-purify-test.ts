import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import DomPurify from 'ember-cli-dompurify/services/dom-purify';

module('Unit | Service | dom-purify', function(hooks) {
  setupTest(hooks);

  test('purifies input based upon app configuration if present', function(assert) {
    let service = this.owner.lookup('service:dom-purify');
    assert.strictEqual((service as DomPurify).sanitize("<p>p tag</p><span>span tag</span>"), ('<p>p tag</p>span tag' as unknown) )
  });

  test('purifies input based upon app configuration and supplied args if both are present', function(assert) {
    let service = this.owner.lookup('service:dom-purify');
    assert.strictEqual((service as DomPurify).sanitize("<p>p tag</p><span>span tag</span>", {FORBID_CONTENTS: ['span']}), ('<p>p tag</p>' as unknown))
  });

});

