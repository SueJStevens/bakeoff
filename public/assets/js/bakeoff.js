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
      case 'cookies':
      case 'Cookie':
      case 'Cookies':
          category = "Cookies";
          break;
      case 'cake':
      case 'cakes':
      case 'Cake':
      case 'Cakes':
          category = "Cakes";
          break;
      case 'pie':
      case 'pies':
      case 'Pie':
      case 'Pies':
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

  $("#btnHome").on("click", function(event){
    console.log("Home Button Clicked");
    $('#cardheader').text("All Holiday Foods!");

    window.location="/"
    return;

  });

  $(".category-filter").on("click", function(event) {
    console.log("Filter Button Clicked!");
    var category = $(this).data("category");
    console.log(category);
    $('#cardheader').text(category.charAt(0).toUpperCase() + category.slice(1)+"!");

    //create the object to send to ajax
    var catFilter = {
      productCat: category
    };
    window.location="/"+category;
    return;
  });



    //delete dom elements then insert them again
    //otherwise new route with /:category where category=?

    // Send the PUT request.
    //$.ajax("/api/category/" + category, {
      /*
    $.ajax("/api/category", {
        type: "GET", //throws error Can't set headers after they are sent.
      //type: "PATCH",  //throws 404 not found
      //type: "PUT",
      data: catFilter
    }).then(
      function() {
        // Reload the page to get the filtered list
        console.log("Did I reload?");
        location.reload();
      }
    );
    
  });
*/
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
