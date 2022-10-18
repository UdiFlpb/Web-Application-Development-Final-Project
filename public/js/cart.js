
let proudactasOnCart=[] //define the arry same as in the index.js file

function ProudactArry()
{
    for (let index = 0; index < proudactasOnCart.length; index++){ //loop that run on all the products
     cards.appendchild(card);
    }
} 


//load the cart page


function GetStores()
{
    $.ajax({
        url: 'shops',
        context: document.body
      }).done(function(array) {
        $('#shopsMenu').html('')
        for (let index = 0; index < array.length; index++) {
            let element = array[index];
            let template = $('#Shops_Template').html()

            for(const key in element)
            {
                template = template.replaceAll('{' + key + '}', element[key])
            }

            $('#shopsMenu').append(template)
        }
    });
}