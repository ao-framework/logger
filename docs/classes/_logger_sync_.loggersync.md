[@ao-framework/logger](../README.md) > ["logger.sync"](../modules/_logger_sync_.md) > [LoggerSync](../classes/_logger_sync_.loggersync.md)

# Class: LoggerSync

Abstract class definition for the creating custom loggers where the developer only has to handle the implementation

Inspired by PSR-3 created by the PHP-FIG team. Thanks!!

## Hierarchy

**LoggerSync**

↳  [Logger](_logger_.logger.md)

## Index

### Methods

* [alertSync](_logger_sync_.loggersync.md#alertsync)
* [criticalSync](_logger_sync_.loggersync.md#criticalsync)
* [debugSync](_logger_sync_.loggersync.md#debugsync)
* [emergencySync](_logger_sync_.loggersync.md#emergencysync)
* [errorSync](_logger_sync_.loggersync.md#errorsync)
* [implementationSync](_logger_sync_.loggersync.md#implementationsync)
* [infoSync](_logger_sync_.loggersync.md#infosync)
* [interpolate](_logger_sync_.loggersync.md#interpolate)
* [logSync](_logger_sync_.loggersync.md#logsync)
* [noticeSync](_logger_sync_.loggersync.md#noticesync)
* [warningSync](_logger_sync_.loggersync.md#warningsync)

---

## Methods

<a id="alertsync"></a>

###  alertSync

▸ **alertSync**(message: *`string`*, context?: *`object`*): `any`

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
<a id="criticalsync"></a>

###  criticalSync

▸ **criticalSync**(message: *`string`*, context?: *`object`*): `any`

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
<a id="debugsync"></a>

###  debugSync

▸ **debugSync**(message: *`string`*, context?: *`object`*): `any`

*Defined in [logger.sync.ts:126](https://github.com/ao-framework/logger/blob/a389378/src/logger.sync.ts#L126)*

Detailed debug information.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `any`

___
<a id="emergencysync"></a>

###  emergencySync

▸ **emergencySync**(message: *`string`*, context?: *`object`*): `any`

*Defined in [logger.sync.ts:45](https://github.com/ao-framework/logger/blob/a389378/src/logger.sync.ts#L45)*

System is unusable.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `any`

___
<a id="errorsync"></a>

###  errorSync

▸ **errorSync**(message: *`string`*, context?: *`object`*): `any`

*Defined in [logger.sync.ts:81](https://github.com/ao-framework/logger/blob/a389378/src/logger.sync.ts#L81)*

Runtime errors that do not require immediate action but should typically be logged and monitored.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `any`

___
<a id="implementationsync"></a>

### `<Protected>` implementationSync

▸ **implementationSync**(level: *`string`*, message: *`string`*): `any`

*Defined in [logger.sync.ts:37](https://github.com/ao-framework/logger/blob/a389378/src/logger.sync.ts#L37)*

Create the implementation of this specific logger

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| level | `string` |  The level of the log entry |
| message | `string` |  The message to log |

**Returns:** `any`

___
<a id="infosync"></a>

###  infoSync

▸ **infoSync**(message: *`string`*, context?: *`object`*): `any`

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

*Defined in [logger.sync.ts:20](https://github.com/ao-framework/logger/blob/a389378/src/logger.sync.ts#L20)*

Method to handle interpolation to recursively combine a context with a message. Usually this is done directly with javascript. However, there maybe times when a piece of code would smell better using this version of interpolation.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to use in the interpolation |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `string`

___
<a id="logsync"></a>

###  logSync

▸ **logSync**(level: *`string`*, message: *`string`*, context?: *`object`*): `any`

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
<a id="noticesync"></a>

###  noticeSync

▸ **noticeSync**(message: *`string`*, context?: *`object`*): `any`

*Defined in [logger.sync.ts:104](https://github.com/ao-framework/logger/blob/a389378/src/logger.sync.ts#L104)*

Normal but significant events.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log |
| `Optional` context | `object` |  The context data to use with the message |

**Returns:** `any`

___
<a id="warningsync"></a>

###  warningSync

▸ **warningSync**(message: *`string`*, context?: *`object`*): `any`

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

