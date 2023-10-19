$(document).ready(function () {

    $("#openPopup").click(function () {
        $("#formPopup").css("display", "block");
    });


    $("#dataForm").submit(function (e) {
        e.preventDefault();
        var name = $("#name").val();
        var Father = $("#Father").val();
        var Date = $("#Date").val();
        var address = $("#address").val();
        var District = $("#District").val();
        var pin = $("#pin").val();


        $("#dataTable").append('<tr><td><button class="fa fa-edit edit_button"></button></td><td><button class="fa fa-trash add-icon trash_entries"></button></td><td>' + name + '</td><td>' + Father + '</td><td>' + Date + '</td><td>' + address + '</td><td>' + District + '</td><td>' + pin + '</td></tr>');


        $("#dataForm")[0].reset();
        $("#formPopup").css("display", "none");
    });


});