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

            $('#Cards').append(template)
        }
    });
}

 $(() => {
    //load all items on initial load
    SearchItems()

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