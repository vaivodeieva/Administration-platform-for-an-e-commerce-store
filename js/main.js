$(document).ready(function() {
    $('#products-datatable, #orders-datatable, #categories-datatable').DataTable();
});

$('#products-datatable, #orders-datatable, #categories-datatable').dataTable({
    "lengthMenu": [
        [5, 10, 15, -1],
        [5, 10, 15, "All"]
    ]
});

$('.delete-product, .delete-order, .btn-del').click(function() {
    $(this).closest('tr').remove();
})