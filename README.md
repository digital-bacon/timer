# timer
Practice with setTimeout async with Lighthouse Labs


## Summary
An alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments.


## Functions

<dl>
<dt><a href="#queueAlarms">queueAlarms(actionAlarms, ...requestedDelays)</a></dt>
<dd><p>Function that queues any number of alarms and will perform an action after each requested delay has transpired</p>
</dd>

<dl>
<dt><a href="#alarm">alarm(timeUntilAlarm, actionAlarm)</a></dt>
<dd><p>Function that creates an alarm that does something after some time has passed</p>
</dd>

<dl>
<dt><a href="#beepInTerminal">beepInTerminal()</a></dt>
<dd><p>Plays a given sound in the node terminal</p>
</dd>

<dl>
<dt><a href="#argV">argV(argumentsOnly)</a></dt>
<dd><p>Function that returns Node command line arguments</p>
</dd>


<a name="queueAlarms"></a>

## queueAlarms(actionAlarms, ...requestedDelays)
Function that queues any number of alarms and will perform an action after each requested delay has transpired 

| Param | Type | Description |
| --- | --- | --- |
| actionAlarms | <code>number</code> | Time, in milliseconds, until an alarm does something |
| ...requestedDelays | <code>Function</code> | A callback function that will be invoked when the timer has expired |

**Example**  
```js
When `actionAlarms` is `beepInTerminal` and
`...requestedDelays` is `1000 3000 5000 7000` the
result will be a node beep sound played in the node
terminal at 1000, 3000, 5000, 7000 milliseconds.
```


## Using timer2.js

Timer2.js is a command line application. It accepts user input, and plays an alarm sound.

<code>node timer2.js</code>

**Available inputs** 
|  Input   | Outcome |
| :-----:  | :------ |
|    b     | Plays an alarm sound with no delay |
|  0 - 9   | Prints an alarm delay (in seconds) and plays an alarm sound when delay has expired |
|  CTRL+C  | Exit the application |
