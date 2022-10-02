
    
    var field = document.querySelectorAll('.field')
    for (let i = 0; i < field.length; i++) {
        var rangeInput = document.querySelectorAll('.range-input input')
    var progress = document.querySelectorAll('.slider .progress')
    var price = document.querySelectorAll(' .inputprice')
   var mark = document.querySelector('#mark')
   var and = 0
   var and1 = 0
   var and2 = 0
   var sum = document.querySelector('.sum h2')
   var pay = document.querySelector('.pay h2')
    rangeInput.forEach(input=>{
        input.addEventListener("input",()=>{
            let minVal = parseInt(rangeInput[i].value)
  progress[i].style.width=((minVal-rangeInput[i].min)/(rangeInput[i].max-rangeInput[i].min)*100)+ '%'
            minVal
            price[i].value = minVal
            var pays = ((and-and1)*((0.035*Math.pow((1+0.035),and2))/(Math.pow((1+0.035),and2)-1))).toFixed(0)
            pay.innerHTML = (((and-and1)*((0.035*Math.pow((1+0.035),and2))/(Math.pow((1+0.035),and2)-1))).toFixed(0))+'₽';
            sum.innerHTML = ((and1+and2*pays).toFixed(0))+'₽'
            
            if (i==0){
            and = minVal
        }
        if (i==1){
            and1 = (minVal*(and/100))
        }
        if (i==2){
            and2 = minVal
        }
            if (i==1){
     mark.innerHTML = minVal + '%'
    price[1].value=(minVal*(and/100)).toFixed(0)
    }

        })
    })
    }
    var button = document.querySelector('.button')
    button.addEventListener('click', async _ =>{
        try{
            var responce = await fetch('https://httpbin.org/post',{
                method:'post',
                body:pay.innerHTML
                
            })
            alert('completed')
        }catch(err){
            alert(err)
        }
    })
