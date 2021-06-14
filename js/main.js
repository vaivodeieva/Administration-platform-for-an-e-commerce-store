$('#categories-datatable').DataTable({
    columnDefs: [
        { orderable: false, targets: 3 }
    ]
});

$('#products-datatable').DataTable({
    "lengthMenu": [
        [5, 10, 15, -1],
        [5, 10, 15, "All"]
    ],
    columnDefs: [
        { orderable: false, targets: [0, 6] },
    ],
    "order": [0]
});

$('#orders-datatable').DataTable({
    "lengthMenu": [
        [5, 10, 15, -1],
        [5, 10, 15, "All"]
    ],
    columnDefs: [
        { orderable: false, targets: 7 }
    ],
    // columnDefs: [
    //     { orderable: false, targets: 0 }
    // ],
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


// edit btn for categories page
$('.btn-edit').click(function() {
    const editInput = `
        <td>
            <input type="text" class="form-control category-id-input" value="${$(this).parent().prev().prev().prev().text()}">
        </td>
        <td>
            <input type="text" class="form-control category-name-input" value="${$(this).parent().prev().prev().text()}">
        </td>
        <td>
            <input type="text" class="form-control category-description-input" value="${$(this).parent().prev().text()}">
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
});

// $('#create-product').click(function() {
//     $('#new-product').removeAttr('hidden');
//     $('#new-product').toggle(true);
// });

// $('#save-new-product').click(function() {
//     const newProduct = `
//     <tr>
//         <td>
//             <img class="img-fluid" src="images/products/1.jpg" alt="">
//         </td>
//         <td>${$('.product-id-input').val()}</td>
//         <td>${$('.product-id-input').val()}</td>
//         <td>${$('.product-description-input').val()}</td>
//         <td>${$('.product-price-input').val()}</td>
//         <td>${$('.product-d-price-input').val()}</td>
//         <td>
//             <button class="btn btn-outline-warning btn-edit2">Edit</button>
//             <button class="btn btn-danger delete-product">Delete</button>
//         </td>
//     </tr>
//     `;
//     $('#products-datatable tbody').prepend(newProduct);
//     $('.product-id-input').val('');
//     $('.product-name-input').val('');
//     $('.product-description-input').val('');
//     $('.product-price-input').val('');
//     $('.product-d-price-input').val('');
//     $('#new-product').toggle(false);
//     $('#products-datatable tbody').prepend($('#new-product'));
// })

// edit btn for products page
$('.btn-edit2').click(function() {
    const editInput = `
        <td>
         <button type="button" class="btn btn-outline-info">Upload IMG</button>
       </td>   
        <td>
          <input type="text" class="form-control category-id-input" value="${$(this).parent().prev().prev().prev().prev().prev().text()}">
        </td>
        <td>
          <input type="text" class="form-control category-id-input" value="${$(this).parent().prev().prev().prev().prev().text()}">
        </td>
       
        <td>
            <input type="text" class="form-control category-id-input" value="${$(this).parent().prev().prev().prev().text()}">
        </td>
        <td>
            <input type="text" class="form-control category-name-input" value="${$(this).parent().prev().prev().text()}">
        </td>
        <td>
            <input type="text" class="form-control category-description-input" value="${$(this).parent().prev().text()}">
        </td>
        <td>
            <button class="btn btn-success save-category">Save</button>
        </td>
    `;
    $(this).closest('tr').html(editInput);
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

// edit btn for orders page
$('.edit-order').click(function() {
    const editInput = `
        <td>
            <input class="form-control" type="text" value="${$(this).parent().prev().prev().prev().prev().prev().prev().prev().text()}">
        </td>
        <td>
            <input class="form-control" type="text" value="${$(this).parent().prev().prev().prev().prev().prev().prev().children(":first").text()}">
            <input class="form-control" type="text" value="${$(this).parent().prev().prev().prev().prev().prev().prev().children(":nth-child(2)").text()}">
            <input class="form-control" type="text" value="${$(this).parent().prev().prev().prev().prev().prev().prev().children(":nth-child(3)").text()}">
        </td>
        <td>
            <input class="form-control" type="text" value="${$(this).parent().prev().prev().prev().prev().prev().text()}">
        </td>
        <td>
            <input class="form-control" type="text" value="${$(this).parent().prev().prev().prev().prev().text()}">
        </td>
        <td>
            <input class="form-control" type="text" value="${$(this).parent().prev().prev().prev().text()}">
        </td>
        <td>
            <input class="form-control" type="text" value="${$(this).parent().prev().prev().text()}">
        </td>
        <td>
            <select class="form-control">
                <option class="badge bg-success" value="success">Completed</option>
                <option class="badge bg-warning" value="success">Pending</option>
                <option class="badge bg-danger" value="success">Cancelled</option>
            </select>
        </td>
        <td>
            <button class="btn btn-success">Save</button>
        </td>
    `;
    $(this).closest('tr').html(editInput);
})