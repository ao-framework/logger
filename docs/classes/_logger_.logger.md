[@ao-framework/logger](../README.md) > ["logger"](../modules/_logger_.md) > [Logger](../classes/_logger_.logger.md)

# Class: Logger

### @ao-framework > logger

Abstract class definition for the creating custom loggers where the developer only has to handle the implementation

## Hierarchy

**Logger**

## Index

### Methods

* [alert](_logger_.logger.md#alert)
* [critical](_logger_.logger.md#critical)
* [debug](_logger_.logger.md#debug)
* [emergency](_logger_.logger.md#emergency)
* [error](_logger_.logger.md#error)
* [implementation](_logger_.logger.md#implementation)
* [info](_logger_.logger.md#info)
* [interpolate](_logger_.logger.md#interpolate)
* [log](_logger_.logger.md#log)
* [notice](_logger_.logger.md#notice)
* [warning](_logger_.logger.md#warning)

---

## Methods

<a id="alert"></a>

###  alert

▸ **alert**(message: *`string`*, context?: *`object`*): `Promise`<`any`>

*Defined in [logger.ts:66](https://github.com/ao-framework/logger/blob/07c3b86/src/logger.ts#L66)*

### @ao-framework > logger > alert

Action must be taken immediately.

Example: Entire website down, database unavailable, etc. This should trigger the SMS alerts and wake you up.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `Promise`<`any`>

___
<a id="critical"></a>

###  critical

▸ **critical**(message: *`string`*, context?: *`object`*): `Promise`<`any`>

*Defined in [logger.ts:79](https://github.com/ao-framework/logger/blob/07c3b86/src/logger.ts#L79)*

### @ao-framework > logger > critical

Critical conditions.

Example: Application component unavailable, unexpected exception.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `Promise`<`any`>

___
<a id="debug"></a>

###  debug

▸ **debug**(message: *`string`*, context?: *`object`*): `Promise`<`any`>

*Defined in [logger.ts:140](https://github.com/ao-framework/logger/blob/07c3b86/src/logger.ts#L140)*

### @ao-framework > logger > debug

Detailed debug information.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `Promise`<`any`>

___
<a id="emergency"></a>

###  emergency

▸ **emergency**(message: *`string`*, context?: *`object`*): `Promise`<`any`>

*Defined in [logger.ts:52](https://github.com/ao-framework/logger/blob/07c3b86/src/logger.ts#L52)*

### @ao-framework > logger > emergency

System is unusable.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `Promise`<`any`>

___
<a id="error"></a>

###  error

▸ **error**(message: *`string`*, context?: *`object`*): `Promise`<`any`>

*Defined in [logger.ts:91](https://github.com/ao-framework/logger/blob/07c3b86/src/logger.ts#L91)*

### @ao-framework > logger > error

Runtime errors that do not require immediate action but should typically be logged and monitored.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `Promise`<`any`>

___
<a id="implementation"></a>

### `<Protected>` implementation

▸ **implementation**(level: *`string`*, message: *`string`*): `Promise`<`any`>

*Defined in [logger.ts:41](https://github.com/ao-framework/logger/blob/07c3b86/src/logger.ts#L41)*

### @ao-framework > logger > implementation

Manage the implementation

This is specific the logger the developer is trying to create.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| level | `string` |  The level of the log entry |
| message | `string` |  The message to log |

**Returns:** `Promise`<`any`>

___
<a id="info"></a>

###  info

▸ **info**(message: *`string`*, context?: *`object`*): `Promise`<`any`>

*Defined in [logger.ts:129](https://github.com/ao-framework/logger/blob/07c3b86/src/logger.ts#L129)*

### @ao-framework > logger > info

Interesting events.

Example: User logs in, SQL logs.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `Promise`<`any`>

___
<a id="interpolate"></a>

### `<Protected>` interpolate

▸ **interpolate**(message: *`string`*, context?: *`object`*): `string`

*Defined in [logger.ts:20](https://github.com/ao-framework/logger/blob/07c3b86/src/logger.ts#L20)*

### @ao-framework > logger > interpolate

Method to handle interpolation to recursively combine a context with a message. Usually this done directly in javascript. However, there maybe times when code would smell better using this interpolation

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to use in the interpolation |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `string`

___
<a id="log"></a>

###  log

▸ **log**(level: *`string`*, message: *`string`*, context?: *`object`*): `Promise`<`any`>

*Defined in [logger.ts:152](https://github.com/ao-framework/logger/blob/07c3b86/src/logger.ts#L152)*

### @ao-framework > logger > log

Logs with an arbitrary level.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| level | `string` |  The level of the log entry |
| message | `string` |  The message to log |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `Promise`<`any`>

___
<a id="notice"></a>

###  notice

▸ **notice**(message: *`string`*, context?: *`object`*): `Promise`<`any`>

*Defined in [logger.ts:116](https://github.com/ao-framework/logger/blob/07c3b86/src/logger.ts#L116)*

### @ao-framework > logger > notice

Normal but significant events.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `Promise`<`any`>

___
<a id="warning"></a>

###  warning

▸ **warning**(message: *`string`*, context?: *`object`*): `Promise`<`any`>

*Defined in [logger.ts:105](https://github.com/ao-framework/logger/blob/07c3b86/src/logger.ts#L105)*

### @ao-framework > logger > warning

Exceptional occurrences that are not errors.

Example: Use of deprecated APIs, poor use of an API, undesirable things that are not necessarily wrong.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `Promise`<`any`>

___

