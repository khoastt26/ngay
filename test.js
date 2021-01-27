function numberday(){
    let month = document.getElementById('month').value;
    
    if(month == 4 || month == 6 || month == 9 || month == 11)
    {
      
        document.getElementById('result').innerHTML= '30 ngay';
    }
    if(month == 2){
       
        document.getElementById('result').innerHTML=  '28 ngay';
    } else {
        
        document.getElementById('result').innerHTML= '31 ngay';
    }
}
numberday();