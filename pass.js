let dis=document.getElementById('des')
let fis=document.getElementById('fall')
let ran=document.getElementById('weq')
let san=document.getElementById('kop')
let der=document.getElementById('ded')
console.log()
ran.classList.add('cl')

fis.onclick=function(){
  
    let rel = 8
    let pass=''

    for(let i=0; i<rel; i++){
        let dan=Math.floor(Math.random() * ran.innerHTML.length)
        console.log(dan)
        pass=ran.innerHTML.substring(dan, dan + 8)
        console.log(pass)
    }
    dis.innerText = pass  
    san.innerText = 'Password Copied! : ' + pass 
    document.getElementById('fall').setAttribute("disabled", "disabled")     
  
         
         der.onclick=function(){
    
            if(dis.innerText=pass){
             san.style.animationName='afa'
             san.style.animationDuration='1.3s'
             san.style.animation=' afa 10s  steps(3) easy-in-out'
    
            }
         }
      
}




