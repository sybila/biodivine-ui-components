import { expect, test } from 'vitest';
import { bar } from './index';

test('bar passes', () => {
  expect(bar()).toBeTruthy();
});
