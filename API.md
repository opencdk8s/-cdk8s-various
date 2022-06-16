# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

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


## Structs <a name="Structs" id="Structs"></a>

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



