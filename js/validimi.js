function validimi()                                    
{ 
    var name = document.forms["forma"]["emri"];               
    var email = document.forms["forma"]["email"];    
    var dscp = document.forms["forma"]["description"];  
    
   
    if (name.value == "")                                  
    { 
        window.alert("Ju lutem shkruani emrin dhe mbiemri"); 
        name.focus(); 
        return false; 
    } 
   
    if (dscp.value == "")                               
    { 
        window.alert("Please enter your address."); 
        name.focus(); 
        return false; 
    } 
       
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    }    
    return true; 
}