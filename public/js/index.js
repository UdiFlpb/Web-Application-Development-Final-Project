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
//arry of all the products
proudactasOnCart=[]

function GetCartBtn(){
    let pushAction=0; //דגל למניעת חזרה של איברים במערך ופעולה שאנחנו רוצים שתהיה פעם אחת
    const cards=document.querySelectorAll('.Cards .Card');
    cards.forEach((card)=> {
        // console.log(card);
        card.addEventListener('click',function()
        {
            if (pushAction == 0){ // check if the flag value is the same as value in the initalization stage
                proudactasOnCart.push(card);
                pushAction = 1; // flag=1 to make sure that the action will not be executed again
            }
          console.log(proudactasOnCart);
          return;
        }
        )
    }
    )
}

function AddToCart(ID)
{
    let name = $('#item' + ID).children('.name').html()
    alert(name)
    
}


 $(() => {
    //load all items on initial load
    SearchItems()
    GetStores()
    GetCartBtn()
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