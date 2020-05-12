$(document).ready(function () {


    //SÖDERMALM
    let build2 = new building("Åsögatan 172", "Stockholm", "Södermalm", "Sen 1880-tals Nyränessans", 1886, "Fin byggnad på många år med en jävla massa pelare");

    //VASASTAN
    let build3 = new building("Hälsingegatan 7", "Stockholm", "Vasastan", "Sen 1895-tals tidig jugend", 1899, "Fin byggnad på många år som är grön");
    let build1 = new building("Kammarkargatan 12", "Stockholm", "Vasastan", "Sen 1880-tals Nyränessans", 1884, "Fin byggnad på många år");

    //KUNGSHOLMEN
    let build4 = new building("Sankt Eriksgatan 15", "Stockholm", "Kungsholmen", "Sekelskift, National Romantisk", 1912, "Fin byggnad på många år som är grön och jag bor där", "sankteriksgatan15.jpg");
    let build5 = new building("Scheelegatan 24", "Stockholm", "Kungsholmen", "Gothisc sekelskift", 1892, "Fin byggnad på många år som är otorlig cool");
    let build6 = new building("Hantverkargatan 22", "Stockholm", "kungsholmen", "Jugend", 1903, "Magnik byggnad med tydliga detaljer från jugends-era")
    //GÖTEBORG

    //ÖSTERMALM
    let build7 = new building("Narvavägen 8", "Stockholm", "Östermalm", "Nationalromantik", 1918, "Fin byggnad nära Strandvägen");
    let build8 = new building("Karlavägen 11", "Stockholm", "Vasastan", "Nationalromantik", 1918, "Fin byggnad med kanske stadens finaste port");


    let vasastan = [build1, build3];
    let sodermalm = [build2];
    let kungsholmen = [build4, build5, build6];
    let ostermalm = [build7, build8];


    function building(street, city, area, type, century, description, pic, header) {

        this.street = street;
        this.city = city;
        this.area = area;
        this.type = type;
        this.century = century;
        this.description = description;
        this.pic = pic;
        this.header = header; 

    }



   

    //area-nav

    // KUNGSHOLMEN
    let findImgDivKung = $(".area-pic-kungsholmen");
    let kungsholmenHeader = $("<img>").attr("src", "images/norrmalarstrand_52.jpeg").addClass("img-fluid");
    let createCaption = $("<div>").addClass("caption").html("KUNGSHOLMEN");
        
  
    
    kungsholmenHeader.appendTo(findImgDivKung);
    createCaption.appendTo(findImgDivKung);
    findImgDivKung.on("click", function () {
        window.open("html/kungsholmen.html", "_self")
    });


    // VASASTAN
    let findImgDivVasa = $(".area-pic-vasastan");
    let vasastanHeader = $("<img>").attr("src", "images/sankteriksplan.jpg").addClass("img-fluid");
    let createCaption1 = $("<div>").addClass("caption").html("VASASTAN");

    vasastanHeader.appendTo(findImgDivVasa);
    createCaption1.appendTo(findImgDivVasa);


    // SODERMALM
    let findImgDivSoder = $(".area-pic-sodermalm");
    let sodermalmHeader = $("<img>").attr("src", "images/sodermalm-header.jpeg").addClass("img-fluid");
    let createCaption2 = $("<div>").addClass("caption").html("SÖDERMALM");

    sodermalmHeader.appendTo(findImgDivSoder);
    createCaption2.appendTo(findImgDivSoder);


    // OSTERMALM
    let findImgDivOster = $(".area-pic-ostermalm");
    let ostermalmHeader = $("<img>").attr("src", "images/stureplan.jpeg").addClass("img-fluid");
    let createCaption3 = $("<div>").addClass("caption").html("ÖSTERMALM");

    ostermalmHeader.appendTo(findImgDivOster);
    createCaption3.appendTo(findImgDivOster);


    // GÖTEBORG
    let findImgDivGote = $(".area-pic-goteborg");
    let goteborgHeader = $("<img>").attr("src", "images/goteborg_header.jpg").addClass("img-fluid");
    let createCaption4 = $("<div>").addClass("caption").html("GÖTEBORG");

    goteborgHeader.appendTo(findImgDivGote);
    createCaption4.appendTo(findImgDivGote);




    // Creating kungsholmen
    for (let i = 0; i < kungsholmen.length; i++) {
        console.log(kungsholmen);
        let findCon = $("#kungsholmen-container").addClass("container");
        let createRow = $("<div>").addClass("row");
        let createCol1 = $("<div>").addClass("col-12");
        let createCol2 = $("<div>").addClass("col-4");
        let createCol3 = $("<div>").addClass("col-4");
        let createCol4 = $("<div>").addClass("col-4");
        $(createRow).appendTo(findCon);
        $(createCol1).appendTo(createRow);
        $(createCol2).appendTo(createRow);
        $(createCol3).appendTo(createRow);
        $(createCol4).appendTo(createRow);

        $("<h1>").html(kungsholmen[i].street).appendTo(createCol4);
        $("<img>").attr("src", "../Husritningar/" + kungsholmen[i].header).addClass("img-fluid").appendTo(createCol1);
        // $("<p>").html(kungsholmen[i].city).appendTo(createCol2);
        // $("<p>").html(kungsholmen[i].area).appendTo(createCol2);
        // $("<p>").html(kungsholmen[i].type).appendTo(createCol2);
        // $("<p>").html(kungsholmen[i].century).appendTo(createCol3);
        // $("<p>").html(kungsholmen[i].description).appendTo(createCol3);

    }

    // // Creating Vasastan
    // for (let i = 0; i < vasastan.length; i++) {
    //     console.log(vasastan);
    //     let findCon = $("#vasastan-container").addClass("container");
    //     let createRow = $("<div>").addClass("row");
    //     let createCol1 = $("<div>").addClass("col-12");
    //     let createCol2 = $("<div>").addClass("col");
    //     let createCol3 = $("<div>").addClass("col");
    //     $(createRow).appendTo(findCon);
    //     $(createCol1).appendTo(createRow);
    //     $(createCol2).appendTo(createRow);
    //     $(createCol3).appendTo(createRow);

    //     $("<h1>").html(vasastan[i].street).appendTo(createCol1);
    //     $("<p>").html(vasastan[i].city).appendTo(createCol2);
    //     $("<p>").html(vasastan[i].area).appendTo(createCol2);
    //     $("<p>").html(vasastan[i].type).appendTo(createCol2);
    //     $("<p>").html(vasastan[i].century).appendTo(createCol3);
    //     $("<p>").html(vasastan[i].description).appendTo(createCol3);

    // }







});


