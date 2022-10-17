function SearchItems() {
    $.ajax({
        url: 'search?search=' + '',
        context: document.body
    }).done(function (array) {
        $('#ItemCards').html('')
        for (let index = 0; index < array.length; index++) {
            let element = array[index];
            let template = $('#Search_Template').html()

            for (const key in element) {
                template = template.replaceAll('{' + key + '}', element[key])
            }

            template = template.replaceAll('{ID}', index)

            $('#ItemCards').append(template)
            $('#item' + index).find('.form-control').val(element["name"])
            $('#item' + index).find('.form-control').hide()
        }
    });
}

function GetStores() {
    $.ajax({
        url: 'shops',
        context: document.body
    }).done(function (array) {
        $('#ShopCards').html('')
        for (let index = 0; index < array.length; index++) {
            let element = array[index];
            let template = $('#Shops_Template').html()

            for (const key in element) {
                template = template.replaceAll('{' + key + '}', element[key])
            }

            template = template.replaceAll('{ID}', index)

            $('#ShopCards').append(template)
        }
    });
}

function edititem(ID) {
    let originalIMG = $('#item' + ID).children('.img').attr('src')
    let originalNAME = $('#item' + ID).children('.name').html()
    let originalPRICE = $('#item' + ID).children('.price').html()
    $('#item' + ID).html('')
    let template = $('#edit_product_template').html()
    template = template.replaceAll('{ID}', ID)
    $('#item' + ID).append(template)
    $('#inputimg').val(originalIMG)
    $('#inputname').val(originalNAME)
    $('#inputprice').val(originalPRICE)
    $('#originalname').val(originalNAME)
    $('#originalname').hide()
}

function CancelProductEdit()
{
    SearchItems()
}


$(() => {
    //load all items on initial load
    SearchItems()
    GetStores()
})