
![](./assets/ao.logo.svg)  
**Logger**

Import the library

```ts
import Logger from "@ao-framework/logger";
```

Create a Logger

```ts
export class MyLogger extends Logger {

    protected async implementation(level: string, message: string) {
        console.log(level, message);
        return "anything you want"
    }

}

export default new MyLogger();
```

Use it

```ts
import mylogger from "./loggers/mylogger"

//either below will work
mylogger.info(`This is a log message for ${user.name}`)
mylogger.info("This is a log message for ${user.name}", user)
```

Available Methods:

```ts
logger.emergency(message: string, context?: object) => Promise<any> 
```

```ts
logger.alert(message: string, context?: object) => Promise<any> 
```

```ts
logger.critical(message: string, context?: object) => Promise<any> 
```

```ts
logger.error(message: string, context?: object) => Promise<any> 
```

```ts
logger.warning(message: string, context?: object) => Promise<any> 
```

```ts
logger.notice(message: string, context?: object) => Promise<any> 
```

```ts
logger.info(message: string, context?: object) => Promise<any> 
```

```ts
logger.debug(message: string, context?: object) => Promise<any> 
```

```ts
logger.log(level: string, message: string, context?: object) => Promise<any> 
```

## Index

### External modules

* ["index"](modules/_index_.md)
* ["logger"](modules/_logger_.md)

---

