# cdk8s-various

Holds many useful fully typed cdk8s objects..

## Available objects:

1. SecurityGroupPolicy
2. Untyped ConfigMap

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KongTcpIngress <a name="KongTcpIngress" id="cdk8s-various.KongTcpIngress"></a>

#### Initializers <a name="Initializers" id="cdk8s-various.KongTcpIngress.Initializer"></a>

```typescript
import { KongTcpIngress } from 'cdk8s-various'

new KongTcpIngress(scope: Construct, name: string, opts: KongTcpOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-various.KongTcpIngress.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-various.KongTcpIngress.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-various.KongTcpIngress.Initializer.parameter.opts">opts</a></code> | <code><a href="#cdk8s-various.KongTcpOptions">KongTcpOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-various.KongTcpIngress.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-various.KongTcpIngress.Initializer.parameter.name"></a>

- *Type:* string

---

##### `opts`<sup>Required</sup> <a name="opts" id="cdk8s-various.KongTcpIngress.Initializer.parameter.opts"></a>

- *Type:* <a href="#cdk8s-various.KongTcpOptions">KongTcpOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-various.KongTcpIngress.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-various.KongTcpIngress.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-various.KongTcpIngress.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk8s-various.KongTcpIngress.isConstruct"></a>

```typescript
import { KongTcpIngress } from 'cdk8s-various'

KongTcpIngress.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-various.KongTcpIngress.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-various.KongTcpIngress.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-various.KongTcpIngress.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### SecurityGroupPolicy <a name="SecurityGroupPolicy" id="cdk8s-various.SecurityGroupPolicy"></a>

#### Initializers <a name="Initializers" id="cdk8s-various.SecurityGroupPolicy.Initializer"></a>

```typescript
import { SecurityGroupPolicy } from 'cdk8s-various'

new SecurityGroupPolicy(scope: Construct, name: string, opts: SecurityGroupPolicyOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-various.SecurityGroupPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-various.SecurityGroupPolicy.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-various.SecurityGroupPolicy.Initializer.parameter.opts">opts</a></code> | <code><a href="#cdk8s-various.SecurityGroupPolicyOptions">SecurityGroupPolicyOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-various.SecurityGroupPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-various.SecurityGroupPolicy.Initializer.parameter.name"></a>

- *Type:* string

---

##### `opts`<sup>Required</sup> <a name="opts" id="cdk8s-various.SecurityGroupPolicy.Initializer.parameter.opts"></a>

- *Type:* <a href="#cdk8s-various.SecurityGroupPolicyOptions">SecurityGroupPolicyOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-various.SecurityGroupPolicy.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-various.SecurityGroupPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-various.SecurityGroupPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk8s-various.SecurityGroupPolicy.isConstruct"></a>

```typescript
import { SecurityGroupPolicy } from 'cdk8s-various'

SecurityGroupPolicy.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-various.SecurityGroupPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-various.SecurityGroupPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-various.SecurityGroupPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### UntypedConfigMap <a name="UntypedConfigMap" id="cdk8s-various.UntypedConfigMap"></a>

#### Initializers <a name="Initializers" id="cdk8s-various.UntypedConfigMap.Initializer"></a>

```typescript
import { UntypedConfigMap } from 'cdk8s-various'

new UntypedConfigMap(scope: Construct, name: string, opts: UntypedConfigMapOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-various.UntypedConfigMap.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-various.UntypedConfigMap.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-various.UntypedConfigMap.Initializer.parameter.opts">opts</a></code> | <code><a href="#cdk8s-various.UntypedConfigMapOptions">UntypedConfigMapOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-various.UntypedConfigMap.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-various.UntypedConfigMap.Initializer.parameter.name"></a>

- *Type:* string

---

##### `opts`<sup>Required</sup> <a name="opts" id="cdk8s-various.UntypedConfigMap.Initializer.parameter.opts"></a>

- *Type:* <a href="#cdk8s-various.UntypedConfigMapOptions">UntypedConfigMapOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-various.UntypedConfigMap.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-various.UntypedConfigMap.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-various.UntypedConfigMap.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk8s-various.UntypedConfigMap.isConstruct"></a>

```typescript
import { UntypedConfigMap } from 'cdk8s-various'

UntypedConfigMap.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-various.UntypedConfigMap.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-various.UntypedConfigMap.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-various.UntypedConfigMap.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### KongTcpBackend <a name="KongTcpBackend" id="cdk8s-various.KongTcpBackend"></a>

#### Initializer <a name="Initializer" id="cdk8s-various.KongTcpBackend.Initializer"></a>

```typescript
import { KongTcpBackend } from 'cdk8s-various'

const kongTcpBackend: KongTcpBackend = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-various.KongTcpBackend.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-various.KongTcpBackend.property.servicePort">servicePort</a></code> | <code>number</code> | *No description.* |

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="cdk8s-various.KongTcpBackend.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `servicePort`<sup>Required</sup> <a name="servicePort" id="cdk8s-various.KongTcpBackend.property.servicePort"></a>

```typescript
public readonly servicePort: number;
```

- *Type:* number

---

### KongTcpOptions <a name="KongTcpOptions" id="cdk8s-various.KongTcpOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-various.KongTcpOptions.Initializer"></a>

```typescript
import { KongTcpOptions } from 'cdk8s-various'

const kongTcpOptions: KongTcpOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-various.KongTcpOptions.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#cdk8s-various.KongTcpOptions.property.rules">rules</a></code> | <code><a href="#cdk8s-various.KongTcpRule">KongTcpRule</a>[]</code> | *No description.* |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="cdk8s-various.KongTcpOptions.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="cdk8s-various.KongTcpOptions.property.rules"></a>

```typescript
public readonly rules: KongTcpRule[];
```

- *Type:* <a href="#cdk8s-various.KongTcpRule">KongTcpRule</a>[]

---

### KongTcpRule <a name="KongTcpRule" id="cdk8s-various.KongTcpRule"></a>

#### Initializer <a name="Initializer" id="cdk8s-various.KongTcpRule.Initializer"></a>

```typescript
import { KongTcpRule } from 'cdk8s-various'

const kongTcpRule: KongTcpRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-various.KongTcpRule.property.backend">backend</a></code> | <code><a href="#cdk8s-various.KongTcpBackend">KongTcpBackend</a></code> | *No description.* |
| <code><a href="#cdk8s-various.KongTcpRule.property.port">port</a></code> | <code>number</code> | *No description.* |

---

##### `backend`<sup>Required</sup> <a name="backend" id="cdk8s-various.KongTcpRule.property.backend"></a>

```typescript
public readonly backend: KongTcpBackend;
```

- *Type:* <a href="#cdk8s-various.KongTcpBackend">KongTcpBackend</a>

---

##### `port`<sup>Required</sup> <a name="port" id="cdk8s-various.KongTcpRule.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

### SecurityGroupPolicyOptions <a name="SecurityGroupPolicyOptions" id="cdk8s-various.SecurityGroupPolicyOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-various.SecurityGroupPolicyOptions.Initializer"></a>

```typescript
import { SecurityGroupPolicyOptions } from 'cdk8s-various'

const securityGroupPolicyOptions: SecurityGroupPolicyOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-various.SecurityGroupPolicyOptions.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk8s-various.SecurityGroupPolicyOptions.property.selector">selector</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="cdk8s-various.SecurityGroupPolicyOptions.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `selector`<sup>Optional</sup> <a name="selector" id="cdk8s-various.SecurityGroupPolicyOptions.property.selector"></a>

```typescript
public readonly selector: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

### UntypedConfigMapOptions <a name="UntypedConfigMapOptions" id="cdk8s-various.UntypedConfigMapOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-various.UntypedConfigMapOptions.Initializer"></a>

```typescript
import { UntypedConfigMapOptions } from 'cdk8s-various'

const untypedConfigMapOptions: UntypedConfigMapOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-various.UntypedConfigMapOptions.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-various.UntypedConfigMapOptions.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadata</code> | *No description.* |

---

##### `data`<sup>Required</sup> <a name="data" id="cdk8s-various.UntypedConfigMapOptions.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s-various.UntypedConfigMapOptions.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* cdk8s.ApiObjectMetadata

---



