[@ao-framework/logger](../README.md) > ["logger"](../modules/_logger_.md) > [Logger](../classes/_logger_.logger.md)

# Class: Logger

Abstract class definition for the creating custom loggers where the developer only has to handle the implementation

Inspired by PSR-3 created by the PHP-FIG team. Thanks!!

## Hierarchy

 [LoggerSync](_logger_sync_.loggersync.md)

**↳ Logger**

## Index

### Methods

* [alert](_logger_.logger.md#alert)
* [alertSync](_logger_.logger.md#alertsync)
* [critical](_logger_.logger.md#critical)
* [criticalSync](_logger_.logger.md#criticalsync)
* [debug](_logger_.logger.md#debug)
* [debugSync](_logger_.logger.md#debugsync)
* [emergency](_logger_.logger.md#emergency)
* [emergencySync](_logger_.logger.md#emergencysync)
* [error](_logger_.logger.md#error)
* [errorSync](_logger_.logger.md#errorsync)
* [implementation](_logger_.logger.md#implementation)
* [implementationSync](_logger_.logger.md#implementationsync)
* [info](_logger_.logger.md#info)
* [infoSync](_logger_.logger.md#infosync)
* [interpolate](_logger_.logger.md#interpolate)
* [log](_logger_.logger.md#log)
* [logSync](_logger_.logger.md#logsync)
* [notice](_logger_.logger.md#notice)
* [noticeSync](_logger_.logger.md#noticesync)
* [warning](_logger_.logger.md#warning)
* [warningSync](_logger_.logger.md#warningsync)

---

## Methods

<a id="alert"></a>

###  alert

▸ **alert**(message: *`string`*, context?: *`object`*): `Promise`<`any`>

*Defined in [logger.ts:62](https://github.com/ao-framework/logger/blob/a389378/src/logger.ts#L62)*

Action must be taken immediately.

Example: Entire website down, database unavailable, etc. This should trigger the SMS alerts and wake you up.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `Promise`<`any`>

___
<a id="alertsync"></a>

###  alertSync

▸ **alertSync**(message: *`string`*, context?: *`object`*): `any`

*Inherited from [LoggerSync](_logger_sync_.loggersync.md).[alertSync](_logger_sync_.loggersync.md#alertsync)*

*Defined in [logger.sync.ts:58](https://github.com/ao-framework/logger/blob/a389378/src/logger.sync.ts#L58)*

Action must be taken immediately.

Example: Entire website down, database unavailable, etc. This should trigger the SMS alerts and wake you up.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `any`

___
<a id="critical"></a>

###  critical

▸ **critical**(message: *`string`*, context?: *`object`*): `Promise`<`any`>

*Defined in [logger.ts:74](https://github.com/ao-framework/logger/blob/a389378/src/logger.ts#L74)*

Critical conditions.

Example: Application component unavailable, unexpected exception.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `Promise`<`any`>

___
<a id="criticalsync"></a>

###  criticalSync

▸ **criticalSync**(message: *`string`*, context?: *`object`*): `any`

*Inherited from [LoggerSync](_logger_sync_.loggersync.md).[criticalSync](_logger_sync_.loggersync.md#criticalsync)*

*Defined in [logger.sync.ts:70](https://github.com/ao-framework/logger/blob/a389378/src/logger.sync.ts#L70)*

Critical conditions.

Example: Application component unavailable, unexpected exception.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `any`

___
<a id="debug"></a>

###  debug

▸ **debug**(message: *`string`*, context?: *`object`*): `Promise`<`any`>

*Defined in [logger.ts:130](https://github.com/ao-framework/logger/blob/a389378/src/logger.ts#L130)*

Detailed debug information.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `Promise`<`any`>

___
<a id="debugsync"></a>

###  debugSync

▸ **debugSync**(message: *`string`*, context?: *`object`*): `any`

*Inherited from [LoggerSync](_logger_sync_.loggersync.md).[debugSync](_logger_sync_.loggersync.md#debugsync)*

*Defined in [logger.sync.ts:126](https://github.com/ao-framework/logger/blob/a389378/src/logger.sync.ts#L126)*

Detailed debug information.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `any`

___
<a id="emergency"></a>

###  emergency

▸ **emergency**(message: *`string`*, context?: *`object`*): `Promise`<`any`>

*Defined in [logger.ts:49](https://github.com/ao-framework/logger/blob/a389378/src/logger.ts#L49)*

System is unusable.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `Promise`<`any`>

___
<a id="emergencysync"></a>

###  emergencySync

▸ **emergencySync**(message: *`string`*, context?: *`object`*): `any`

*Inherited from [LoggerSync](_logger_sync_.loggersync.md).[emergencySync](_logger_sync_.loggersync.md#emergencysync)*

*Defined in [logger.sync.ts:45](https://github.com/ao-framework/logger/blob/a389378/src/logger.sync.ts#L45)*

System is unusable.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `any`

___
<a id="error"></a>

###  error

▸ **error**(message: *`string`*, context?: *`object`*): `Promise`<`any`>

*Defined in [logger.ts:85](https://github.com/ao-framework/logger/blob/a389378/src/logger.ts#L85)*

Runtime errors that do not require immediate action but should typically be logged and monitored.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `Promise`<`any`>

___
<a id="errorsync"></a>

###  errorSync

▸ **errorSync**(message: *`string`*, context?: *`object`*): `any`

*Inherited from [LoggerSync](_logger_sync_.loggersync.md).[errorSync](_logger_sync_.loggersync.md#errorsync)*

*Defined in [logger.sync.ts:81](https://github.com/ao-framework/logger/blob/a389378/src/logger.sync.ts#L81)*

Runtime errors that do not require immediate action but should typically be logged and monitored.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `any`

___
<a id="implementation"></a>

### `<Protected>` implementation

▸ **implementation**(level: *`string`*, message: *`string`*): `Promise`<`any`>

*Defined in [logger.ts:39](https://github.com/ao-framework/logger/blob/a389378/src/logger.ts#L39)*

Create the implementation of this specific logger

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| level | `string` |  The level of the log entry |
| message | `string` |  The message to log |

**Returns:** `Promise`<`any`>

___
<a id="implementationsync"></a>

### `<Protected>` implementationSync

▸ **implementationSync**(level: *`string`*, message: *`string`*): `any`

*Inherited from [LoggerSync](_logger_sync_.loggersync.md).[implementationSync](_logger_sync_.loggersync.md#implementationsync)*

*Defined in [logger.sync.ts:37](https://github.com/ao-framework/logger/blob/a389378/src/logger.sync.ts#L37)*

Create the implementation of this specific logger

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| level | `string` |  The level of the log entry |
| message | `string` |  The message to log |

**Returns:** `any`

___
<a id="info"></a>

###  info

▸ **info**(message: *`string`*, context?: *`object`*): `Promise`<`any`>

*Defined in [logger.ts:120](https://github.com/ao-framework/logger/blob/a389378/src/logger.ts#L120)*

Interesting events.

Example: User logs in, SQL logs.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `Promise`<`any`>

___
<a id="infosync"></a>

###  infoSync

▸ **infoSync**(message: *`string`*, context?: *`object`*): `any`

*Inherited from [LoggerSync](_logger_sync_.loggersync.md).[infoSync](_logger_sync_.loggersync.md#infosync)*

*Defined in [logger.sync.ts:116](https://github.com/ao-framework/logger/blob/a389378/src/logger.sync.ts#L116)*

Interesting events.

Example: User logs in, SQL logs.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `any`

___
<a id="interpolate"></a>

### `<Protected>` interpolate

▸ **interpolate**(message: *`string`*, context?: *`object`*): `string`

*Overrides [LoggerSync](_logger_sync_.loggersync.md).[interpolate](_logger_sync_.loggersync.md#interpolate)*

*Defined in [logger.ts:22](https://github.com/ao-framework/logger/blob/a389378/src/logger.ts#L22)*

Method to handle interpolation to recursively combine a context with a message. Usually this is done directly with javascript. However, there maybe times when a piece of code would smell better using this version of interpolation.

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

*Defined in [logger.ts:141](https://github.com/ao-framework/logger/blob/a389378/src/logger.ts#L141)*

Logs with an arbitrary level.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| level | `string` |  The level of the log entry |
| message | `string` |  The message to log |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `Promise`<`any`>

___
<a id="logsync"></a>

###  logSync

▸ **logSync**(level: *`string`*, message: *`string`*, context?: *`object`*): `any`

*Inherited from [LoggerSync](_logger_sync_.loggersync.md).[logSync](_logger_sync_.loggersync.md#logsync)*

*Defined in [logger.sync.ts:137](https://github.com/ao-framework/logger/blob/a389378/src/logger.sync.ts#L137)*

Logs with an arbitrary level.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| level | `string` |  The level of the log entry |
| message | `string` |  The message to log |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `any`

___
<a id="notice"></a>

###  notice

▸ **notice**(message: *`string`*, context?: *`object`*): `Promise`<`any`>

*Defined in [logger.ts:108](https://github.com/ao-framework/logger/blob/a389378/src/logger.ts#L108)*

Normal but significant events.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `Promise`<`any`>

___
<a id="noticesync"></a>

###  noticeSync

▸ **noticeSync**(message: *`string`*, context?: *`object`*): `any`

*Inherited from [LoggerSync](_logger_sync_.loggersync.md).[noticeSync](_logger_sync_.loggersync.md#noticesync)*

*Defined in [logger.sync.ts:104](https://github.com/ao-framework/logger/blob/a389378/src/logger.sync.ts#L104)*

Normal but significant events.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `any`

___
<a id="warning"></a>

###  warning

▸ **warning**(message: *`string`*, context?: *`object`*): `Promise`<`any`>

*Defined in [logger.ts:98](https://github.com/ao-framework/logger/blob/a389378/src/logger.ts#L98)*

Exceptional occurrences that are not errors.

Example: Use of deprecated APIs, poor use of an API, undesirable things that are not necessarily wrong.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `Promise`<`any`>

___
<a id="warningsync"></a>

###  warningSync

▸ **warningSync**(message: *`string`*, context?: *`object`*): `any`

*Inherited from [LoggerSync](_logger_sync_.loggersync.md).[warningSync](_logger_sync_.loggersync.md#warningsync)*

*Defined in [logger.sync.ts:94](https://github.com/ao-framework/logger/blob/a389378/src/logger.sync.ts#L94)*

Exceptional occurrences that are not errors.

Example: Use of deprecated APIs, poor use of an API, undesirable things that are not necessarily wrong.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `any`

___

