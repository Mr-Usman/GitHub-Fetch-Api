if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/index.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  }

  function GetUser(){ 
  var user = document.getElementById('user');
   fetch('https://api.github.com/users/' + user.value + '/followers')
   .then(function(res){
   return res.json();
   }).then(function(result){
    console.log('fetch data Github', result); console.log("\n\n\n");
    var table = document.getElementById("FetchFollowerTable");
    for( var i=0;i<result.length;i++){
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = result[i].login;
        cell2.innerHTML = result[i].id;
        cell3.innerHTML = result[i].followers_url;
       }
    
   });

}