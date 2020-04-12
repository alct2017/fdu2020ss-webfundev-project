$(function () {
    $("#fileupload").on("change", function () {
        var imgUrl = getImgUrl(this.files[0]);
        if (imgUrl) {
            $("#photo-preview").attr("src", imgUrl);
            $('#photo-container').css("background-color", "unset");
        }
    })
});

function getImgUrl(file) {
    var url = null;
    if (window.createObjectURL != undefined) {
        url = window.createObjectURL(file);
    } else if (window.URL != undefined) {
        url = window.URL.createObjectURL(file);
    } else if (window.webkitURL != undefined) {
        url = window.webkitURL.createObjectURL(file);
    }
    return url;
}
function checkUpload(){
    var uploaded=false;
    $('#fileupload').each(function(){
        if($(this).val()!=""){
            uploaded=true;
        }
    });
    if(uploaded){
        alert('Submitted');
    }else{
        alert('No Photo Upload');
    }
}