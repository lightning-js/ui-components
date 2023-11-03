import { type TestRunnerConfig } from '@storybook/test-runner';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

const customSnapshotsDir = `${process.cwd()}/__snapshots__`;

const config: TestRunnerConfig = {
    setup() {
        expect.extend({ toMatchImageSnapshot });
    },
  async postRender(page, context) {
    // the #storybook-root element wraps each story
    const elementHandler = await page.$('#storybook-root');
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot({
        customSnapshotsDir,
        customSnapshotIdentifier: context.id,
    });
    const innerHTML = await elementHandler.innerHTML();
    expect(innerHTML).toMatchSnapshot();
  },
};

export default config;