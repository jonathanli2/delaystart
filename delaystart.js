var originalFunc;
var waitPeriod = 30;
function setDelayAt(obj, prop, waitSeconds){
	originalFunc = obj[prop];
	obj[prop] = delayedStartForDebug;
	if (waitSeconds){
	    waitPeriod = waitSeconds;
	}
}

function delayedStartForDebug() {
        var originThis = this;
        var bWait = true;
        var bDone =false;
        var i = 0
        var timer = setInterval(
                function(){
                    if (bWait && i < waitPeriod ){
                        i++;
                        console.log("set bWait to false from console window to continue");
                    }
                    else{
                        if (!bDone){
                            bDone = true;
                            clearInterval(timer);
                            originalFunc.apply(originThis, arguments);
                        }
                    }
             }, 1000);
   }

