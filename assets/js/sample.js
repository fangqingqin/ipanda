
document.addEventListener('DOMContentLoaded', function() {
    var previewButton1 = document.getElementById('go-generate-1');
    var previewButton2 = document.getElementById('go-generate-2');
    console.log(previewButton1, previewButton2);
    
    previewButton1.addEventListener('click', function() {
        window.location.href = 'index.html'; 
    });
    previewButton2.addEventListener('click', function() {
        window.location.href = 'index.html'; 
    });
});


document.getElementById('go-generate').addEventListener('click', function() {

    console.log("!@3123");
    window.location.href = 'index.html';
});
