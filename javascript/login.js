
const inputId = document.getElementById('user_id');
const submitBtn = document.getElementById('submit_btn');
let user_id = null;
submitBtn.addEventListener('click', ()=> {
    const userId = inputId.value;
    if(userId.length > 0){
        get(`http://basic-web.dev.avc.web.usf.edu/${userId}`).then(function(response){
            //Put all code that relies on the data from this request in here.
            if(response.status == 200){
              user_id= response.data.id; //The username that was requested. In this case it is "myUserName".
              document.location.href  = `/page/home.html?userId=${user_id}`;
            }
            else{
              //User "myUserName" not found.
              //response.data is null
              post(`http://basic-web.dev.avc.web.usf.edu/${userId}`, { score: 0 }).then(function(response){
                   switch(response.status){
                     case 201:
                      user_id = response.data.id;
                      document.location.href  = `page/home.html?userId=${user_id}`;
                      break;
                     case 400:
                       //Bad request. Most likely your data that you sent (in this case dataToSend) was formatted incorrectly, or you supplied a negative score value.
                      console.error(response.data);
                       break;
                     case 500:
                       //Something went wrong on the server, such as the database got deleted somehow. This should never happen.
                       console.error(response.data);
                       break;
                   }
                 });; //create a new user.
           }
        });
    }
    else{
        console.log('Input is empty!')
    }

})




