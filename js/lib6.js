const productList = [

    {
        id: "01",
        name: "Hạt giống hoa hồng Pháp",
        price: 230,
        image: "../assests/images/rose1.jpg",
        productLink: "product-detail.html"
    },

    {
        id: "02",
        name: "Hoa hướng dương",
        price: 210,
        image: "../assests/images/sunflower.jpg",
        productLink: "product-detail.html"
    },

    {
        id: "03",
        name: "Hoa tulip",
        price: 240,
        image: "../assests/images/tulip.jpg",
        productLink: "product-detail.html"
    },

    {
        id: "04",
        name: "Hoa cẩm tú cầu",
        price: 250,
        image: "../assests/images/camtu.jpg",
        productLink: "product-detail.html"
    },

    {
        id: "05",
        name: "Hoa lavender",
        price: 260,
        image: "../assests/images/lavender.jpg",
        productLink: "product-detail.html"
    },

    {
        id: "06",
        name: "Hoa baby",
        price: 270,
        image: "../assests/images/baby.jpg",
        productLink: "product-detail.html"
    },

    {
        id: "07",
        name: "Hoa ly",
        price: 280,
        image: "../assests/images/ly.jpg",
        productLink: "product-detail.html"
    },

    {
        id: "08",
        name: "Hoa sen",
        price: 290,
        image: "../assests/images/sen.jpg",
        productLink: "product-detail.html"
    }

];



function addProduct(id, name, price, image, hyperLink)
{

    //Tạo thẻ div khung chứa 1 sản phẩm - product item
    const productItem = document.createElement("div");


    //Thêm thuộc tính cho thẻ div
    productItem.setAttribute("class", "product-item col");



    //Tạo khung số 1 - chứa ảnh - product image
    const productImage = document.createElement("div");


    //Thêm thuộc tính cho thẻ div
    productImage.setAttribute("class", "product-image");
    productItem.setAttribute("class", "product-item col mb-4");

    //Thêm ảnh vào khung chứa
    const myImage = document.createElement("img");

    myImage.setAttribute("src", image);

    myImage.setAttribute("alt", name);

   myImage.setAttribute(
    "class",
    "img-fluid w-100 rounded-top"
    );
       myImage.style.height = "250px";
       myImage.style.objectFit = "cover";



    //Gắn hình vào khung chứa product image
    productImage.appendChild(myImage);



    //Tạo khung số 2 - chứa thông tin sản phẩm - product info
    const productInfo = document.createElement("div");



    //Thêm thuộc tính cho thẻ div
    productInfo.setAttribute(
        "class",
        "product-info text-center border p-3 rounded-bottom"
    );



    //Thêm đối tượng p cho khung chứa product info
    const productName = document.createElement("p");

    const productNameText = document.createTextNode(name);

    productName.appendChild(productNameText);

    productName.setAttribute("class", "fw-bold");



    //Gắn vào khung chứa
    productInfo.appendChild(productName);



    //Thêm đối tượng p cho khung chứa product info
    const productPrice = document.createElement("p");

    const productPriceText =
        document.createTextNode(price + "k/túi");

    productPrice.setAttribute(
        "class",
        "text-danger fw-bold"
    );

    productPrice.appendChild(productPriceText);



    //Gắn vào khung chứa
    productInfo.appendChild(productPrice);



    //Tạo link
    const productLink = document.createElement("a");

    const productLinkText =
        document.createTextNode("Xem chi tiết");

    productLink.setAttribute("href", hyperLink);

    productLink.setAttribute(
        "class",
        "btn btn-primary"
    );

    productLink.appendChild(productLinkText);



    //Gắn link vào product info
    productInfo.appendChild(productLink);



    //Gắn 2 khung chứa image + info vào product item
    productItem.appendChild(productImage);

    productItem.appendChild(productInfo);



    //Gắn product item vào product list
    document.getElementById("product-list")
        .appendChild(productItem);

}