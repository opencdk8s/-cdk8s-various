const { cdk8s } = require('projen');
const project = new cdk8s.ConstructLibraryCdk8s({
  author: 'Hunter-Thompson',
  authorAddress: 'aatman@auroville.org.in',
  cdk8sVersion: '2.2.74',
  constructsVersion: '10.0.5',
  defaultReleaseBranch: 'main',
  name: 'cdk8s-various',
  repositoryUrl: 'https://github.com/opencdk8s/cdk8s-various.git',
  keywords: ['cdk8s', 'cdk'],
  npmAccess: 'public',
  publishToGo: {
    gitUserName: 'Hunter-Thompson',
    gitUserEmail: 'aatman@auroville.org.in',
    moduleName: 'github.com/opencdk8s/cdk8s-various-go',
  },

  depsUpgrade: false,
  dependabot: false,
  pullRequestTemplate: false,
  codeCov: true,
  clobber: false,
  readme: true,
  mergify: true,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
