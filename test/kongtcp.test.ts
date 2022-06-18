import { Chart, Testing } from 'cdk8s';
import { KongTcpIngress } from '../src/index';

test('sgp', () => {

  const app = Testing.app();
  const chart = new Chart(app, 'test');

  new KongTcpIngress(chart, 'test', {
    annotations: {
      'kubernetes.io/ingress.class': 'kong',
    },
    rules: [{
      port: 9000,
      backend: {
        servicePort: 8080,
        serviceName: 'test',
      },
    }],
  });


  expect(Testing.synth(chart)).toMatchSnapshot();
});
