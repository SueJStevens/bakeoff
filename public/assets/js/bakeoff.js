// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-eaten").on("click", function(event) {
    console.log("Eaten Button Clicked!");
    var id = $(this).data("id");
    var newEaten = true;

    var newEatenState = {
      eaten: newEaten
    };

    // Send the PUT request.
    $.ajax("/api/product/" + id, {
      type: "PUT",
      data: newEatenState
    }).then(
      function() {
        //console.log("changed eaten to", newEaten);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    console.log("Create!");
    event.preventDefault();

    // Identify category from product entered
    str = $("#product").val().trim().toLowerCase().split(" ").pop();
    console.log("Product To Add: " + str);

    switch(str) {
      case 'cookie':
          category = "Cookies";
          break;
      case 'cake':
          category = "Cakes";
          break;
      case 'pie':
          category = "Pies";
          break;
      default:
          category = "Other";
  }

    var newProduct = {

      productName: $("#product").val().trim(),
      productCat: category
    };

    // Send the POST request.
    $.ajax("/api/products", {
      type: "POST",
      data: newProduct
    }).then(
      function() {
        console.log("created new product");

        //Reset Form
        $('.create-form')[0].reset();
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-product").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/product/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("Deleted Product", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
