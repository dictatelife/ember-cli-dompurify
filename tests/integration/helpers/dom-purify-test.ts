import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | dom-purify', function (hooks) {
  setupRenderingTest(hooks);

  test('purifies input based upon app configuration if present', async function (assert) {
    this.set('textValue', "<p>p tag</p><span>span tag</span>");

    await render(hbs`{{dom-purify this.textValue}}`);
    assert.strictEqual(find('p')?.innerText, 'p tag');
    assert.strictEqual(this.element?.textContent?.trim(), 'p tagspan tag');
  });

  test('gracefully handles non-string values', async function (assert) {
    await render(hbs`{{dom-purify}}`);
    assert.strictEqual(this.element?.textContent?.trim(), '');

    this.set('textValue', 12345);
    await render(hbs`{{dom-purify this.textValue}}`);
    assert.strictEqual(this.element?.textContent?.trim(), '12345');
  });

});
