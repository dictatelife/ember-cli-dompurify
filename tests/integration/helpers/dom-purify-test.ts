import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | dom-purify', function (hooks) {
  setupRenderingTest(hooks);

  test('purifies input based upon app configuration if present', async function (assert) {
    await render(hbs`{{dom-purify "<p>p tag</p><span>span tag</span>"}}`);
    assert.strictEqual(find('p')?.innerText, 'p tag');
    assert.strictEqual(find('p')?.parentElement?.innerText, 'p tag\n\nspan tag');
  });
});
