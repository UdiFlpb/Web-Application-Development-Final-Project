function SearchItems()
{
    $.ajax({
        url: 'search?search=' + $('#SearchBar').val(),
        context: document.body
      }).done(function(array) {
        $('#Cards').html('')
        for (let index = 0; index < array.length; index++) {
            let element = array[index];
            let template = $('#Search_Template').html()

            for(const key in element)
            {
                template = template.replaceAll('{' + key + '}', element[key])
            }

            template = template.replaceAll('{ID}', index)

            $('#Cards').append(template)
        }
    });
}

function SearchType(Type)
{
    //reset the search bar value after clicking a category
    $('#SearchBar').val('')

    $.ajax({
        url: 'type?type=' + Type,
        context: document.body
      }).done(function(array) {
        $('#Cards').html('')
        for (let index = 0; index < array.length; index++) {
            let element = array[index];
            let template = $('#Search_Template').html()

            for(const key in element)
            {
                template = template.replaceAll('{' + key + '}', element[key])
            }

            template = template.replaceAll('{ID}', index)

            $('#Cards').append(template)
        }
    });
}

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


function AddToCart(ID)
{
   let name = $('#item' + ID).children('.name').html()
   let template = $('#Cart_Template').html()
   template = template.replaceAll('{name}', name) 

  $ ( "#cartBtn" ).append( template); 
}


 $(() => {
    //load all items on initial load
    SearchItems()
    GetStores()
    
    //Search for new items everytime something is being pressed in the search bar
    $('#SearchBar').keyup(function(){ 
        SearchItems()
    })

    $('#dairy_product').click(() =>{
        SearchType('milk')
    })

    $('#meat_product').click(() =>{
        SearchType('meat')
    })

    $('#drink_product').click(() =>{
        SearchType('drinks')
    })

    $('#fruit_product').click(() =>{
        SearchType('fruits')
    })
})