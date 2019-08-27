
function validate()
{
	var uname1 = document.getElementById("uname");
	var password1 = document.getElementById("pass");

	if (uname.value.trim() == " ") 
	{
		alert("Blank User name");
		//uname.style.border = "2px solid red";
		//document.getElementById("lbluser").style.visibility="visible";
		return false;
	}
	else if (password.value.trim() == " ") 
	{
		alert("Blank password");
		return false;
	}
	else if (password.value.trim().length < 8) 
	{
		alert("Password too short");
		return false;
	}
	else {
		return true;
	}
}

