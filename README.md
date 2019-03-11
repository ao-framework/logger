<p align="center">
<img width="150" src="https://ao-framework.github.io/website/ao.logo.svg"><br>
<b>Logger</b>
</p>

The **logger** is an abstract class that allows you to create custom loggers where you can define the functionality implementation without having to worry about implementing commonly used methods in the practice of logging information. It provides for both **sync** and **async** functionality. 

#### Import the library
```ts
import Logger from "@ao-framework/logger";
```

#### Create a Logger 
```ts
export class MyLogger extends Logger {

    protected async implementation(level: string, message: string) {
        //do something with your message
    }

    protected implementationSync(level: string, message: string) {
        //do something with your message
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
//or
logger.emergencySync(message: string, context?: object) => any 
```
```ts 
logger.alert(message: string, context?: object) => Promise<any>
//or 
logger.alertSync(message: string, context?: object) => any 
```
```ts 
logger.critical(message: string, context?: object) => Promise<any> 
//or
logger.criticalSync(message: string, context?: object) => any
```
```ts 
logger.error(message: string, context?: object) => Promise<any> 
//or
logger.errorSync(message: string, context?: object) => any 
```
```ts 
logger.warning(message: string, context?: object) => Promise<any> 
//or
logger.warningSync(message: string, context?: object) => any 
```
```ts 
logger.notice(message: string, context?: object) => Promise<any> 
//or
logger.noticeSync(message: string, context?: object) => any 
```
```ts 
logger.info(message: string, context?: object) => Promise<any> 
//or
logger.infoSync(message: string, context?: object) => any 
```
```ts 
logger.debug(message: string, context?: object) => Promise<any> 
//or
logger.debugSync(message: string, context?: object) => any 
```
```ts 
logger.log(level: string, message: string, context?: object) => Promise<any> 
//or
logger.logSync(level: string, message: string, context?: object) => any 
```
