$(document).ready( function () {
    $('#datatable1').DataTable();
} );



$('.btn-del').click(function() {
    $(this).closest('tr').remove();
});





