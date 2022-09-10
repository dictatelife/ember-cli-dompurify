import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | dom-purify', function (hooks) {
  setupRenderingTest(hooks);

  test('purifies input using default arguments with no configuration present', async function (assert) {
    await render(hbs`{{dom-purify "<option><iframe></select><b><script>alert(1)</script>"}}`);
    assert.equal(this?.element?.textContent?.trim(), '<option></option>');
  });

  test('supports app configuration', async function (assert) {
    await render(hbs`{{dom-purify "<p>p tag</p><span>span tag</span>"}}`);
    assert.equal(this?.element?.textContent?.trim(), '<p>p tag</p>span tag');
  });
});
