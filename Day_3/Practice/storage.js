// Cookies :-

document.cookie = "username=John Doe; expires=Tues, 21 dec 2025 06:35:00 UTC";
document.cookie = "username=Ramesh Borate; expires=Tues, 22 Nov 2025 06:35:00 UTC";

var myCookie=document.cookie;

console.log(myCookie);

//----------------------------------------------------------------------------------------------------------


// Local Storage :-                   [ deleted only when we remove it ]

data5= "Ramesh Bapurao Borate";

localStorage.setItem('name',data5);
localStorage.setItem('username','Rameshborate');
localStorage.setItem('password','Ramesh@2001');

var result= localStorage.getItem('name');
console.log(result);
// localStorage.removeItem('password');

// localStorage.clear();                                    // clears all local storage data


//----------------------------------------------------------------------------------------------------------


// Session Storage :-               [ deleted when we close the browser or refresh it ]

data="Ramesh Bapurao Borate";
sessionStorage.setItem('user',data);
sessionStorage.setItem('username','Rameshborate');
sessionStorage.setItem('password','Ramesh@2001');

sessionStorage.setItem('demo','cognnizent');
console.log(sessionStorage.getItem('demo'));

var result2 = sessionStorage.getItem('user');
console.log(result2);


// sessionStorage.removeItem('demo');



