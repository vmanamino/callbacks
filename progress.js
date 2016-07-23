var onStart = function(callback){  
  var progress = 0;
  var count = 100;
  var counter = 0;
  while (counter < count){
    onProgress(function(){
      if ((counter % 10) == 0){
        console.log('you\'ve reached '+counter)
      }    
    });
    counter++;
  }  
  callback(counter);
}

var onProgress = function(callback){
  callback();
}

var start = function(callback){
  onStart(callback)
  
}

start(function(counter){
  console.log('you\'re done, you\'ve reached '+counter)
})