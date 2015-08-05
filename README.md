# delaystart
Delay start a javascript method to attach debug when loading html page

1. Include the delaystart.js in the same folder of html file and also include the js file in html file's script element

2. find a method that is used to start the application logic,  just before calling this starting method, add the below code
    setDelayAt(obj, "startingMethodName", 30);
The first parameter is the object that contains the start method, the second parameter is the start method name. The third parameter is optional for seconds to be delayed. 
