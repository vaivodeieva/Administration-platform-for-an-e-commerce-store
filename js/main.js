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

$('.create-category').click(function() {
    $('#new-category').removeAttr('hidden');
    $('#new-category').toggle(true);
})

$('.save-category').click(function() {
    const newCategory = `
    <tr>
        <td>${$('.category-id-input').val()}</td>
        <td>${$('.category-name-input').val()}</td>
        <td>${$('.category-description-input').val()}</td>
        <td>
            <button class="btn btn-outline-warning btn-edit">Edit</button>
            <button class="btn btn-danger btn-del">Delete</button>
        </td>
    </tr>
    `;
    $('#categories-datatable tbody').prepend(newCategory);
    $('.category-id-input').val('');
    $('.category-name-input').val('');
    $('.category-description-input').val('');
    $('#new-category').toggle(false);
    $('#categories-datatable tbody').prepend($('#new-category'));
})



$('.btn-edit').click(function() {
    const editInput = `
        <td>
            <input type="text" class="form-control category-id-input" placeholder="${$(this).parent().prev().prev().prev().text()}">
        </td>
        <td>
            <input type="text" class="form-control category-name-input" placeholder="${$(this).parent().prev().prev().text()}">
        </td>
        <td>
            <input type="text" class="form-control category-description-input" placeholder="${$(this).parent().prev().text()}">
        </td>
        <td>
            <button class="btn btn-success save-category">Save</button>
        </td>
    `;
    $(this).closest('tr').html(editInput);

    // $('.save-category').click(function() {
    //     const newCategory = `
    //     <tr>
    //         <td>${$(this).closest('.category-id-input').val()}</td>
    //         <td>${$(this).closest('.category-name-input').val()}</td>
    //         <td>${$(this).closest('.category-description-input').val()}</td>
    //         <td>
    //             <button class="btn btn-outline-warning">Edit</button>
    //             <button class="btn btn-danger btn-del">Delete</button>
    //         </td>
    //     </tr>
    //     `;
    //     $(this).closest('tr').html(newCategory);
    // })
})





// $('#create-product').click(function() {
//     $('#new-product').removeAttr('hidden');
//     $('#new-product').toggle(true);
// })

// $('.save-product').click(function() {
//     const newProduct = `
//     <tr>
//         <td>
//             <img class="img-fluid" src="images/products/1.jpg" alt="">
//         </td>
//         <td>${$('.product-id-input').val()}</td>
//         <td>${$('.product-name-input').val()}</td>
//         <td>${$('.product-description-input').val()}</td>
//         <td>${$('.product-price-input').val()}</td>
//         <td>${$('.product-d-price-input').val()}</td>
//         <td>
//             <button class="btn btn-outline-warning">Edit</button>
//             <button class="btn btn-danger btn-del">Delete</button>
//         </td>
//     </tr>
//     `;
//     $('#products-datatable tbody').prepend(newProduct);
//     $('.product-id-input').val('');
//     $('.product-name-input').val('');
//     $('.product-description-input').val('');
//     $('#new-product').toggle(false);
//     $('#products-datatable tbody').prepend($('#new-product'));
// })