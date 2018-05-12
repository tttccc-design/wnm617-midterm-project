function handleSignUp(){
    
    //step1:Get the email/password entered by user
    var email=document.getElementById('form-email').value;
    var password=document.getElementById('form-password').value;


    //step2:validate
    if(email.length<4){

       alert("please enter a valid email address");
       return;

    }
    if(password.length<4){
       alert("please enter a valid password address");
       return;

    }

    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(

     // success
      function(){

      	alert("user created");
      }

    )
    .catch(
           function(error){

           	alert(error,message);
           }



    	)

}
function handleSignIn(){

	//step1:Get the email/password entered by user

	var email=document.getElementById('form-email').value;
    var password=document.getElementById('form-password').value;
    //step2 sign them in
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(
      function(){

    window.location.href="https://google.com"

      }


)
      .catch(
           function(error){

           	alert(error,message);
           }



    	)



}

function handleSignOut(){

   firebase.auth().signOut().then(function(){


   	alert("user signed out");
   })
.catch(function(error){

	alert(error.message)
});
	
}

function handleFBlogin(){

    if(! firebase.auth().currentUser){

       var provider = new firebase.auth.FacebookAuthProvider();

       firebase.auth().signInWithPopup(provider)
          .then(function(result){
              
       var token=result.credential.accessToken;
       var user=result.user;
       console.log(user);

       var image = document.getElementById('image_URL');
       image.src=user.photoURL;

       alert(user.email);

       //window.location.href="http://tttcccdesign.com/aau/wnm617/midterm/main.html";//


     })
     
    .catch(function(error){

	alert(error.message)
     });
}
    else{

    	handleSignOut();
    }
}