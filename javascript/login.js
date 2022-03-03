
const inputId = document.getElementById('user_id');
const submitBtn = document.getElementById('submit_btn');
let user_id = null;
submitBtn.addEventListener('click', ()=> {
    const userId = inputId.value;
    if(userId.length > 0){
      document.location.href  = `/page/home.html?userId=${user_id}`;
    }
    else{
        console.log('Input is empty!')
    }

})




