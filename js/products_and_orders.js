$(document).ready(function() {
    $('#products-datatable').DataTable();
});

$(document).ready(function() {
    $('#orders-datatable').DataTable();
});

$('.delete-product').click(function() {
    $(this).closest('tr').remove();
})

$('.delete-order').click(function() {
    $(this).closest('tr').remove();
})