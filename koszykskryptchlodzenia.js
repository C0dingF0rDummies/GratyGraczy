let karta = document.querySelectorAll('.add-cart');
let produkt = [
	{
	Nazwa: "SilentiumPC Navis RGB 240 2x120mm",
	tag: "SilentiumPC Navis RGB 240 2x120mm",
	Cena: 319,
	wKarcie: 0
},
	{
	Nazwa: "be quiet! Dark Rock Pro 4 120 x 135mm",
	tag: "be quiet! Dark Rock Pro 4 120 x 135mm",
	Cena: 355,
	wKarcie: 0
},
	{
	Nazwa: "SilentiumPC Navis Evo ARGB 240 2x120mm",
	tag: "SilentiumPC Navis Evo ARGB 240 2x120mm",
	Cena: 379,
	wKarcie: 0
},
	{
	Nazwa: "SilentiumPC Fera 3 EVO ARGB 120mm",
	tag: "SilentiumPC Fera 3 EVO ARGB 120mm",
	Cena: 149,
	wKarcie: 0
}
];
		for(let i=0; i< karta.length; i++) {
    karta[i].addEventListener('click', () => {
        KartaNumer(produkt[i]);
        CalkowityKoszt(produkt[i]);
    });
}

function NumerKoszykaRefresh() {
    let NumerProduktu = localStorage.getItem('KartaNumer');
    if( NumerProduktu ) {
        var element = document.querySelector(".cart span")
		if(element)
		{
        element.textContent = NumerProduktu;
    }
}
}

function KartaNumer(produkt, action) {
    let NumerProduktu = localStorage.getItem('KartaNumer');
    NumerProduktu = parseInt(NumerProduktu);

    let KartaPrzedmiot = localStorage.getItem('produktWkarcie');
    KartaPrzedmiot = JSON.parse(KartaPrzedmiot);

    if( action ) {
        localStorage.setItem("KartaNumer", NumerProduktu - 1);
		var element = document.querySelector(".cart span")
		if(element)
		{
        element.textContent = NumerProduktu - 1;
        console.log("action running");

    }
    } else if( NumerProduktu ) {
        localStorage.setItem("KartaNumer", NumerProduktu + 1);
		var element = document.querySelector(".cart span")
		if(element)
		{
        element.textContent = NumerProduktu + 1;
    } 
    } else {
        localStorage.setItem("KartaNumer", 1);
        var element = document.querySelector(".cart span")
		if(element)
		{
        element.textContent = 1;
    } 
    }
    setItems(produkt);
}

function setItems(produkt) {
    // let NumerProduktu = localStorage.getItem('KartaNumer');
    // NumerProduktu = parseInt(NumerProduktu);
    let KartaPrzedmiot = localStorage.getItem('produktWkarcie');
    KartaPrzedmiot = JSON.parse(KartaPrzedmiot);

    if(KartaPrzedmiot != null) {
        let ObecnyProdukt = produkt.tag;
    
        if( KartaPrzedmiot[ObecnyProdukt] == undefined ) {
            KartaPrzedmiot = {
                ...KartaPrzedmiot,
                [ObecnyProdukt]: produkt
            }
        } 
        KartaPrzedmiot[ObecnyProdukt].wKarcie += 1;

    } else {
        produkt.wKarcie = 1;
        KartaPrzedmiot = { 
            [produkt.tag]: produkt
        };
    }

    localStorage.setItem('produktWkarcie', JSON.stringify(KartaPrzedmiot));
}

function CalkowityKoszt( produkt, action ) {
    let koszyk = localStorage.getItem("CalkowityKoszt");

    if( action) {
        koszyk = parseInt(koszyk);

        localStorage.setItem("CalkowityKoszt", koszyk - produkt.Cena);
    } else if(koszyk != null) {
        
        koszyk = parseInt(koszyk);
        localStorage.setItem("CalkowityKoszt", koszyk + produkt.Cena);
    
    } else {
        localStorage.setItem("CalkowityKoszt", produkt.Cena);
    }
}

function Koszyk() {
    let KartaPrzedmiot = localStorage.getItem('produktWkarcie');
    KartaPrzedmiot = JSON.parse(KartaPrzedmiot);

    let koszyk = localStorage.getItem("CalkowityKoszt");
    koszyk = parseInt(koszyk);

    let productContainer = document.querySelector('.produkty');
    
    if( KartaPrzedmiot && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(KartaPrzedmiot).map( (item, index) => {
            productContainer.innerHTML += 
            `<div class="produkty"><ion-icon name="close-circle"></ion-icon><img src="./${item.tag}.png"></img>
                <span>${item.Nazwa}</span>
            </div>
            <div class="cena">$${item.Cena},00</div>
            <div class="ilosc">
                <ion-icon class="decrease " name="arrow-dropleft-circle"></ion-icon>
                    <span>${item.wKarcie}</span>
                <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>   
            </div>
            <div class="razem">$${item.wKarcie * item.Cena},00</div>`;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">Basket Total</h4>
                <h4 class="basketTotal">$${koszyk},00</h4>
            </div>`

     // UsuwaniezKoszyka();
        ZmianaIlosci();
    }
}

function ZmianaIlosci() {
    let mniej = document.querySelectorAll('.mniej');
    let wiecej = document.querySelectorAll('.wiecej');
    let ObecnieIlosc = 0;
    let ObecnyProdukt = '';
    let KartaPrzedmiot = localStorage.getItem('produktWkarcie');
    KartaPrzedmiot = JSON.parse(KartaPrzedmiot);

    for(let i=0; i < wiecej.length; i++) {
        mniej[i].addEventListener('click', () => {
            console.log(KartaPrzedmiot);
            ObecnieIlosc = mniej[i].parentElement.querySelector('span').textContent;
            console.log(ObecnieIlosc);
			console.log('span');
            ObecnyProdukt = mniej[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent;
            console.log(ObecnyProdukt);

            if( KartaPrzedmiot[ObecnyProdukt].wKarcie > 1 ) {
                KartaPrzedmiot[ObecnyProdukt].wKarcie -= 1;
                KartaNumer(KartaPrzedmiot[ObecnyProdukt], "decrease");
                CalkowityKoszt(KartaPrzedmiot[ObecnyProdukt], "decrease");
                localStorage.setItem('produktWkarcie', JSON.stringify(KartaPrzedmiot));
                Koszyk();
            }
        });

        wiecej[i].addEventListener('click', () => {
            console.log(KartaPrzedmiot);
            ObecnieIlosc = wiecej[i].parentElement.querySelector('span').textContent;
            console.log(ObecnieIlosc);
            ObecnyProdukt = wiecej[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent;
            console.log(ObecnyProdukt);

            KartaPrzedmiot[ObecnyProdukt].wKarcie += 1;
            KartaNumer(KartaPrzedmiot[ObecnyProdukt]);
            CalkowityKoszt(KartaPrzedmiot[ObecnyProdukt]);
            localStorage.setItem('produktWkarcie', JSON.stringify(KartaPrzedmiot));
            Koszyk();
        });
    }
}

function UsuwaniezKoszyka() {
    let usuwanie = document.querySelectorAll('.produkty ion-icon');
    let NumerProduktu = localStorage.getItem('KartaNumer');
    let KosztKoszyka = localStorage.getItem("CalkowityKoszt");
    let KartaPrzedmiot = localStorage.getItem('produktWkarcie');
    KartaPrzedmiot = JSON.parse(KartaPrzedmiot);
    let NazwaProduktu;
    console.log(KartaPrzedmiot);

    for(let i=0; i < usuwanie.length; i++) {
        usuwanie[i].addEventListener('click', () => {
            NazwaProduktu = usuwanie[i].parentElement.textContent;
           console.log(NazwaProduktu);
            localStorage.setItem('KartaNumer', NumerProduktu - KartaPrzedmiot[NazwaProduktu].wKarcie);
            localStorage.setItem('CalkowityKoszt', KosztKoszyka - ( KartaPrzedmiot[NazwaProduktu].Cena * KartaPrzedmiot[NazwaProduktu].wKarcie));

            delete KartaPrzedmiot[NazwaProduktu];
            localStorage.setItem('produktWkarcie', JSON.stringify(KartaPrzedmiot));

            Koszyk();
            NumerKoszykaRefresh();
        })
    }
}

NumerKoszykaRefresh();
Koszyk();