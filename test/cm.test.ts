import { Chart, Testing } from 'cdk8s';
import { UntypedConfigMap } from '../src/index';

test('untyped cm', () => {

  const app = Testing.app();
  const chart = new Chart(app, 'test');

  new UntypedConfigMap(chart, 'test', {
    metadata: {
      name: 'asd',
    },
    data: 'lalskdoasnd',
  });


  expect(Testing.synth(chart)).toMatchSnapshot();
});
