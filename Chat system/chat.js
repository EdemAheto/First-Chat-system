const writeInput = document.getElementById('Write_input');
const sendButton = document.getElementById('Send');
const inputDiv = document.getElementById('info');
const memberInfo = document.getElementById('Member_info')
const messageCounter = document.getElementById('counter')

sendButton.addEventListener('click', (event)=>{
    event.preventDefault();
let message = document.createElement('li');
message.innerHTML=writeInput.value;
message.style.width = '400px';
message.style.background = '#D9D9D9';
message.style.minHeight = '80px';
message.style.marginTop = '1%';
message.style.marginLeft = '53%';
message.style.paddingLeft = '2%';
message.style.paddingTop = '2%';
message.style.listStyleType= 'none';
message.style.display= 'block';
message.style.borderTopRightRadius= '40px';
message.style.borderTopLeftRadius= '40px';
message.style.borderBottomLeftRadius= '40px';
inputDiv.appendChild(message);
memberInfo.innerHTML=writeInput.value;
writeInput.value = "";


if(writeInput.value===""){
    let response =  document.createElement('p');
    response.innerHTML = "Hello Bro";
    response.style.width = '400px';
    response.style.background = '#D9D9D9';
    response.style.minHeight = '80px';
    response.style.marginTop = '1%';
    response.style.marginLeft = '1%';
    response.style.paddingLeft = '2%';
    response.style.paddingTop = '2%';
    response.style.listStyleType= 'none';
    response.style.display= 'block';
    response.style.borderTopRightRadius= '40px';
    response.style.borderTopLeftRadius= '40px';
    response.style.borderBottomRightRadius= '40px';
    inputDiv.appendChild(response);
}

});

