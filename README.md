<p align="center">
<img width="150" src="./assets/ao.logo.svg"><br>
<b>Logger</b>
</p>

The logger is an abstract class that allows you to create custom loggers where you can define a  specific implementation without having to worry about specific methods commonly used in the practice of logging information in applications. 

#### Import the library
```ts
import Logger from "@ao-framework/logger";
```

#### Create a Logger 
```ts
export class MyLogger extends Logger {

    protected async implementation(level: string, message: string) {
        console.log(level, message);
        return "anything you want"
    }

}

export default new MyLogger();
```

#### Use it
```ts
import mylogger from "./loggers/mylogger"

//either below will work
mylogger.info(`This is a log message for ${user.name}`)
mylogger.info("This is a log message for ${user.name}", user)
```

#### Available Methods

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
