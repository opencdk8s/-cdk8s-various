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
