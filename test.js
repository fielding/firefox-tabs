import test from 'ava';
import m from './';

function asserter(t, result) {
  t.is(typeof result, 'object');
  t.is(typeof result.deviceName, 'string');
  t.is(typeof result.modified, 'object');
  t.is(typeof result.tabCount, 'number');
  t.is(typeof result.tabs, 'object');
}

test('Asynchronously return Firefox tabs', t => {
  return m().then(data => {
    asserter(t, data);
  });
});

test('Synchronously return Firefox tabs', t => {
  asserter(t, m.sync());
});
