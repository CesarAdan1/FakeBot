var nombre = "";

setTimeout(function(){
    var text = document.createElement('p');
    text.className = 'message__text'
    document.querySelector('#roboto').appendChild(text);

    text.textContent ='Hello my name is Cesar!';
}, 2000)

setTimeout(function(){
    var text = document.createElement('p');
    text.className = 'message__text';
    document.querySelector('#roboto').appendChild(text);

    text.textContent ="I studied telecommunications and electronics engineering, but now I'm studying for being a JavaScript developer";
}, 3000)

setTimeout(function(){
    var text = document.createElement('p');
    text.className = 'message__text'
    document.querySelector('#roboto').appendChild(text);

    text.textContent ='I like to play the piano, the code and languages'; 
}, 4000)

setTimeout(function(){
    var text = document.createElement('p');
    text.className = 'message__bot';
    document.querySelector('#roboto').appendChild(text);

    text.textContent ='What would you like to call you?'; 
}, 5000)

setTimeout(function(){
    var inUser = document.createElement('input');
    inUser.type = 'text';
    inUser.className = 'input__text';
    document.querySelector('#roboto').appendChild(inUser);
    
    var buttonUser = document.createElement('button');
    buttonUser.className = 'button__get';
    buttonUser.textContent = "Submit";
    document.querySelector('#roboto').appendChild(buttonUser);

    buttonUser.addEventListener('click',function(){
        nombre = inUser.value;

        if(nombre === ""){
            var text = document.createElement('p');
            text.className = 'message__bot'
            document.querySelector('#roboto').appendChild(text);  
            text.textContent ='Your name has not 6 characters'; 

            var inUser2 = document.createElement('input');
            inUser2.type = 'text';
            inUser2.className = 'input__text';
            document.querySelector('#roboto').appendChild(inUser2);
            
            var buttonUser2 = document.createElement('button');
            buttonUser2.className = 'button__get';
            buttonUser2.textContent = "Submit";
            document.querySelector('#roboto').appendChild(buttonUser2);

            buttonUser2.addEventListener('click', function(){
                nombre = inUser2.value;

                if(nombre.length >= 6){
                    var text = document.createElement('p');
                    text.className = 'message__bot'
                    document.querySelector('#roboto').appendChild(text);
                
                    text.textContent ='You have a very large name ' + nombre;  
                } else if (nombre.length < 6 && nombre !== ""){
                    var text = document.createElement('p');
                    text.className = 'message__bot'
                    document.querySelector('#roboto').appendChild(text);
                
                    text.textContent ='Great! Nice to meet you ' + nombre;};
            })
        } else if(nombre.length >= 6){
            var text = document.createElement('p');
            text.className = 'message__bot'
            document.querySelector('#roboto').appendChild(text);
        
            text.textContent ='You have a very large name '+ nombre + ' Nice to meet you!';  
        } else if (nombre.length < 6 && nombre !== ""){
            var text = document.createElement('p');
            text.className = 'message__bot'
            document.querySelector('#roboto').appendChild(text);
        
            text.textContent = "Your name is too short. Nice to meet you " + nombre + "!!!" ;};
    });
},7000)

