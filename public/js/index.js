let dairy_product=document.getElementById("dairy_product")
console.log(dairy_product)
dairy_product.addEventListener('click',function(){
    milkobject={
        "productname":"milk",
        "description": "חלב 3%",
        "price": "6.9₪ 'ליח"
    }
   
    yougortobject={
        "productname":"yougurt",
        "description":"מעדן פרו",
        "price": "5.9₪ 'ליח"
    }
    categoryarry=[milkobject,yougortobject]
    createMarketCatogry(categoryarry)
}
)
function createMarketCatogry(categoryarry){
   
    let sizeofarry=categoryarry.length;
    let cards=document.getElementById("Cards");
    cards.innerHTML=""// div empty 
    for(let i=0;i<sizeofarry;i++){
     let card=document.createElement("div");
     card.classList.add("Card")
     card.setAttribute("product",categoryarry[i]["productname"]) //גישה לערך של שם המוצר
     let img=document.createElement("img")
     img.src="images/dairy product/"+categoryarry[i]["productname"]+ ".png";
     card.appendChild(img);
     let description=document.createElement("p")//יצירת אובייקט P
     description.classList.add("text-lowercase") //הוספת מחלקה לאובייקט
     description.textContent=categoryarry[i]["description"]//הכנסה של טקסא לאובייקט P
     card.appendChild(description)//יצירת הטקסט//קישור בין דיבים
     let price=document.createElement("p")//יצירת אובייקט P
    price.classList.add("text-lowercase") //הוספת מחלקה לאובייקט
     price.textContent=categoryarry[i]["price"]//הכנסה של טקסא לאובייקט P
     card.appendChild(price)
     let justiftContent=document.createElement("ul")//יצירת  UL
     justiftContent.classList.add("nav") 
     justiftContent.classList.add("justify-content-end")
     let item1=document.createElement("li") //יצרת item1
     item1.classList.add("nav-item1")
     let btn=document.createElement("button")
     btn.setAttribute("type","button")
     btn.classList.add("btn")
     btn.classList.add("btn-outline-info")
     btn.textContent="הוסף לסל"  //כפתור קבוע
     //קישוריות של המחלקות
     item1.appendChild(btn); 
     justiftContent.appendChild(item1);
     card.appendChild(justiftContent);
     cards.appendChild(card);
    }
 }


 $(() => {
    $('#SearchBar').keyup(function(){
        $('#Cards').load('search?search=' + $('#SearchBar').val())
    })
})