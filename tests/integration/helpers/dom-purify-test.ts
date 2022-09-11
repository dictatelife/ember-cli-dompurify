import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | dom-purify', function (hooks) {
  setupRenderingTest(hooks);

  test('purifies input based upon app configuration if present', async function (assert) {
    await render(hbs`{{dom-purify "<p>p tag</p><span>span tag</span>"}}`);
    assert.equal(this?.element?.textContent?.trim(), '<p>p tag</p>span tag');
  });
});
