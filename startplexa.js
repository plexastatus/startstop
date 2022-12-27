function myfunction() {
    alert("This is an alert message box.");
    var url = "https://prod-21.centralus.logic.azure.com:443/workflows/493f210daeda498d8e2c8f7434ace239/triggers/request/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Frequest%2Frun&sv=1.0&sig=eOpgs2zh7jI1rc5hIcfluwZgYbQOuuYFJ1Nf0adbdng";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
        alert(xhr.readyState);
    };
    xhr.send();
    alert("This is an alert message box - end.");
}