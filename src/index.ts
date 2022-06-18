import { ApiObject } from 'cdk8s';
import { Construct } from 'constructs';

export interface SecurityGroupPolicyOptions {
  readonly selector?: Record<string, string>;
  readonly securityGroupIds?: string[];
}


export class SecurityGroupPolicy extends Construct {
  constructor(scope: Construct, name: string, opts: SecurityGroupPolicyOptions) {
    super(scope, `${name}-sgp`);

    new ApiObject(this, name, {
      apiVersion: 'vpcresources.k8s.aws/v1beta1',
      kind: 'SecurityGroupPolicy',
      metadata: {
        name: name,
      },
      spec: {
        podSelector: {
          matchLabels: opts.selector,
        },
        securityGroups: {
          groupIds: opts.securityGroupIds,
        },
      },
    });
  }
}


export interface KongTcpOptions {
  readonly annotations?: Record<string, string>;
  readonly rules?: KongTcpRule[];
}

export interface KongTcpRule {
  readonly backend: KongTcpBackend;
  readonly port: number;
}

export interface KongTcpBackend {
  readonly serviceName: string;
  readonly servicePort: number;
}

export class KongTcpIngress extends Construct {
  constructor(scope: Construct, name: string, opts: KongTcpOptions) {
    super(scope, name);

    new ApiObject(this, 'ingress', {
      apiVersion: 'configuration.konghq.com/v1beta1',
      kind: 'TCPIngress',
      metadata: {
        name: name,
        annotations: opts.annotations,
      },
      spec: {
        rules: opts.rules,
      },
    });
  }
}
