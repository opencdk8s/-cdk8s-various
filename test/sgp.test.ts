import { Chart, Testing } from 'cdk8s';
import { SecurityGroupPolicy } from '../src/index';

test('sgp', () => {

  const app = Testing.app();
  const chart = new Chart(app, 'test');

  new SecurityGroupPolicy(chart, 'test', {
    selector: {
      app: 'test',
    },
    securityGroupIds: ['sg-12345'],
  });


  expect(Testing.synth(chart)).toMatchSnapshot();
});
