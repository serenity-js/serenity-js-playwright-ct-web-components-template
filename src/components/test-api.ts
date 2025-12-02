import { test as componentTest } from '@sand4rt/experimental-ct-web';
import { useBase } from '@serenity-js/playwright-test';

export const {
    describe,
    it,
    test,
    beforeAll,
    beforeEach,
    afterEach,
    afterAll,
    expect,
} = useBase(componentTest)
