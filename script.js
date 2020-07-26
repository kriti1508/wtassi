function fun1(id) {
    var x = document.getElementById("fillformdiv");
    var y = document.getElementById("resvtablediv");
      
    x.style.display = "none";
    y.style.display = "none";

    document.getElementById(id).style.display = "block";
    
}

  function validation(){
    resname = document.getElementById("resname"),
    username = document.getElementById("username").value,
    seats = document.getElementById("seats"),
    phone = document.getElementById("phone").value,
    email = document.getElementById("email").value,
    morning = document.getElementById("morning").value,
    afternoon = document.getElementById("afternoon").value,
    evening = document.getElementById("evening").value,
    night = document.getElementById("night").value
    userdate = document.getElementById("userdate").value

    var atposition  = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");

    if (username === "") {
        return("Name can't be empty");
    } 
    else if (username.length < 3) {
        alert("Enter a bigger name");
    } 
    else if (username.length > 30) {
        return("Name is too long");
    } 
    else if (isNaN(username) == false){
        return("Name can't contain numbers'");
    } 
    else if (email === "") {
        return("Email id can't be empty");
    } 
    else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
        return("Email id is invalid");
    } 
    else if (phone === "") {
        return("Phone Number can't be empty");
    } 
    else if (isNaN(phone)==true) {
        return("Invalid Phone Number (Only digits allowed) ");
    } 
    else if (phone.length !=10 ) {
        return("Invalid Phone Number (10 digits only)");
    }

  return true;
}

  function reservefun(){
    if(validation() == true) {
        alert("Reserving a Table");

        var resvtablevar = document.getElementById("resvtable");
        var newRow = resvtablevar.insertRow(resvtablevar.length),

        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3),
        cell5 = newRow.insertCell(4), 
        cell6 = newRow.insertCell(5),
        cell7 = newRow.insertCell(6),

        resname = document.getElementById("resname"),
        username = document.getElementById("username").value,
        seats = document.getElementById("seats"),
        phone = document.getElementById("phone").value,
        email = document.getElementById("email").value,
        morning = document.getElementById("morning").value,
        afternoon = document.getElementById("afternoon").value,
        evening = document.getElementById("evening").value,
        night = document.getElementById("night").value,
        userdate = document.getElementById("userdate").value

        var r = document.getElementById("resname");
        var rc = r.options[r.selectedIndex].text;

        var s = document.getElementById("seats");
        var sc = s.options[s.selectedIndex].text;

        if (document.getElementById('morning').checked) {
          timeslot = document.getElementById('morning').value;
        }
        else if (document.getElementById('afternoon').checked) {
          timeslot = document.getElementById('afternoon').value;
        }
        else if (document.getElementById('evening').checked) {
          timeslot = document.getElementById('evening').value;
        }
        else if (document.getElementById('night').checked) {
          timeslot = document.getElementById('night').value;
        }

        cell1.innerHTML = rc;
        cell2.innerHTML = username;
        cell3.innerHTML = sc;
        cell4.innerHTML = phone;
        cell5.innerHTML = email;
        cell6.innerHTML = timeslot;
        cell7.innerHTML = userdate;

        document.getElementById("reg").reset();
        selectedRowToInput();
        document.getElementById("reg").reset();
        
   }
   else {
       alert(validation());
   }
}