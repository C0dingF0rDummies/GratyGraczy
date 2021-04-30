let karta = document.querySelectorAll('.add-cart');
let produkt = [
{
	Nazwa: "HP Pavilion Gaming i7",
	tag: "HP Pavilion Gaming i7",
	Cena: 3699,
	wKarcie: 0
},
{
	Nazwa: "Lenovo Legion 5-15",
	tag: "Lenovo Legion 5-15",
	Cena: 4299,
	wKarcie: 0
},
{
	Nazwa: "HP Pavilion Gaming i5",
	tag: "HP Pavilion Gaming i5",
	Cena: 4299,
	wKarcie: 0
},
{
	Nazwa: "Dell Inspiron G3",
	tag: "Dell Inspiron G3",
	Cena: 4099,
	wKarcie: 0
},
	{
	Nazwa: "HP Pavilion Gaming",
	tag: "HP Pavilion Gaming",
	Cena: 3999,
	wKarcie: 0
},
	{
	Nazwa: "Lenovo Legion 5i-17",
	tag: "Lenovo Legion 5i-17",
	Cena: 4899,
	wKarcie: 0
},
	{
	Nazwa: "Dell Inspiron 3793",
	tag: "Dell Inspiron 3793",
	Cena: 3599,
	wKarcie: 0
},
	{
	Nazwa: "Lenovo Legion Y540-17",
	tag: "Lenovo Legion Y540-17",
	Cena: 4099,
	wKarcie: 0
},
	{
	Nazwa: "Dell Inspiron 5406",
	tag: "Dell Inspiron 5406",
	Cena: 4499,
	wKarcie: 0
},
	{
	Nazwa: "ASUS ZenBook Flip S UX371EA",
	tag: "ASUS ZenBook Flip S UX371EA",
	Cena: 7599,
	wKarcie: 0
},
	{
	Nazwa: "Microsoft Surface Pro 7",
	tag: "Microsoft Surface Pro 7",
	Cena: 3999,
	wKarcie: 0
},
	{
	Nazwa: "Lenovo Yoga C940",
	tag: "Lenovo Yoga C940",
	Cena: 4499,
	wKarcie: 0
},
	{
	Nazwa: "Lenovo Tab M10 +",
	tag: "Lenovo Tab M10 +",
	Cena: 999,
	wKarcie: 0
},
	{
	Nazwa: "Apple New iPad Pro 11",
	tag: "Apple New iPad Pro 11",
	Cena: 3899,
	wKarcie: 0
},
	{
	Nazwa: "Huawei MediaPad T3",
	tag: "Huawei MediaPad T3",
	Cena: 499,
	wKarcie: 0
},
	{
	Nazwa: "Lenovo Tab M10 Plus",
	tag: "Lenovo Tab M10 Plus",
	Cena: 1111,
	wKarcie: 0
},
	{
	Nazwa: "Gigabyte GeForce RTX 2060",
	tag: "Gigabyte GeForce RTX 2060",
	Cena: 2799,
	wKarcie: 0
},
	{
	Nazwa: "MSI GeForce RTX 3070 Gaming X Trio",
	tag: "MSI GeForce RTX 3070 Gaming X Trio",
	Cena: 6099,
	wKarcie: 0
},
	{
	Nazwa: "Gigabyte GeForce RTX 3080 GAMING",
	tag: "Gigabyte GeForce RTX 3080 GAMING",
	Cena: 6599,
	wKarcie: 0
},
	{
	Nazwa: "XFX Radeon RX 580 GTS XXX Edition",
	tag: "XFX Radeon RX 580 GTS XXX Edition",
	Cena: 3199,
	wKarcie: 0
},
	{
	Nazwa: "Intel Core i5-10400F",
	tag: "Intel Core i5-10400F",
	Cena: 599,
	wKarcie: 0
},
	{
	Nazwa: "AMD Ryzen 5 3600",
	tag: "AMD Ryzen 5 3600",
	Cena: 849,
	wKarcie: 0
},
	{
	Nazwa: "Intel Core i5-10400",
	tag: "Intel Core i5-10400",
	Cena: 699,
	wKarcie: 0
},
	{
	Nazwa: "AMD Ryzen 5 1600 AF",
	tag: "AMD Ryzen 5 1600 AF",
	Cena: 549,
	wKarcie: 0
},
	{
	Nazwa: "MSI Z490-A PRO",
	tag: "MSI Z490-A PRO",
	Cena: 719,
	wKarcie: 0
},
	{
	Nazwa: "ASRock B460M PRO4",
	tag: "ASRock B460M PRO4",
	Cena: 399,
	wKarcie: 0
},
	{
	Nazwa: "Gigabyte B450M DS3H V2",
	tag: "Gigabyte B450M DS3H V2",
	Cena: 299,
	wKarcie: 0
},
	{
	Nazwa: "MSI MAG B550 TOMAHAWK",
	tag: "MSI MAG B550 TOMAHAWK",
	Cena: 749,
	wKarcie: 0
},
	{
	Nazwa: "G.Skill TridentZ RGB",
	tag: "G.Skill TridentZ RGB",
	Cena: 699,
	wKarcie: 0
},
	{
	Nazwa: "HyperX Fury",
	tag: "HyperX Fury",
	Cena: 369,
	wKarcie: 0
},
	{
	Nazwa: "Patriot Viper Elite Grey",
	tag: "Patriot Viper Elite Grey",
	Cena: 349,
	wKarcie: 0
},
	{
	Nazwa: "Corsair Vengeance RGB Pro",
	tag: "Corsair Vengeance RGB Pro",
	Cena: 529,
	wKarcie: 0
},
	{
	Nazwa: "WD 1TB M.2 PCIe NVMe Blue SN550",
	tag: "WD 1TB M.2 PCIe NVMe Blue SN550",
	Cena: 459,
	wKarcie: 0
},
	{
	Nazwa: "Seagate BARRACUDA 2TB 7200obr. 256MB",
	tag: "Seagate BARRACUDA 2TB 7200obr. 256MB",
	Cena: 239,
	wKarcie: 0
},
	{
	Nazwa: 'Samsung 250GB 2.5 SATA SSD 870 EVO',
	tag: 'Samsung 250GB 2.5 SATA SSD 870 EVO',
	Cena: 199,
	wKarcie: 0
},
	{
	Nazwa: "Samsung 500GB M.2 PCIe NVMe 970 EVO Plus",
	tag: "Samsung 500GB M.2 PCIe NVMe 970 EVO Plus",
	Cena: 389,
	wKarcie: 0
},
	{
	Nazwa: "be quiet! System Power 9 500W 80 Plus Bronze",
	tag: "be quiet! System Power 9 500W 80 Plus Bronze",
	Cena: 229,
	wKarcie: 0
},
	{
	Nazwa: "SilentiumPC Vero L3 600W 80 Plus Bronze",
	tag: "SilentiumPC Vero L3 600W 80 Plus Bronze",
	Cena: 229,
	wKarcie: 0
},
	{
	Nazwa: "SilentiumPC Supremo FM2 750W 80 Plus Gold",
	tag: "SilentiumPC Supremo FM2 750W 80 Plus Gold",
	Cena: 419,
	wKarcie: 0
},
	{
	Nazwa: "be quiet! System Power 9 600W 80 Plus Bronze",
	tag: "be quiet! System Power 9 600W 80 Plus Bronze",
	Cena: 259,
	wKarcie: 0
},
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
},
	{
	Nazwa: "Logitech G PRO GAMING HEADSET",
	tag: "Logitech G PRO GAMING HEADSET",
	Cena: 349,
	wKarcie: 0
},
	{
	Nazwa: "SteelSeries Arctis 5 Czarne",
	tag: "SteelSeries Arctis 5 Czarne",
	Cena: 459,
	wKarcie: 0
},
	{
	Nazwa: "SteelSeries Arctis 7 Czarne",
	tag: "SteelSeries Arctis 7 Czarne",
	Cena: 689,
	wKarcie: 0
},
	{
	Nazwa: "HyperX Cloud Alpha",
	tag: "HyperX Cloud Alpha",
	Cena: 359,
	wKarcie: 0
},
	{
	Nazwa: "SteelSeries Rival 3",
	tag: "SteelSeries Rival 3",
	Cena: 159,
	wKarcie: 0
},
	{
	Nazwa: "Razer Deathadder Essential",
	tag: "Razer Deathadder Essential",
	Cena: 149,
	wKarcie: 0
},
	{
	Nazwa: "Razer Basilisk X Hyperspeed",
	tag: "Razer Basilisk X Hyperspeed",
	Cena: 269,
	wKarcie: 0
},
	{
	Nazwa: "ASUS ROG Gladius II Wireless",
	tag: "ASUS ROG Gladius II Wireless",
	Cena: 349,
	wKarcie: 0
},
	{
	Nazwa: "SPC Gear GK630K Tournament Kailh Brown RGB",
	tag: "SPC Gear GK630K Tournament Kailh Brown RGB",
	Cena: 249,
	wKarcie: 0
},
	{
	Nazwa: "Corsair K55 Gaming",
	tag: "Corsair K55 Gaming",
	Cena: 199,
	wKarcie: 0
},
	{
	Nazwa: "SPC Gear GK630K Onyx White Tournament Kailh Brown RGB",
	tag: "SPC Gear GK630K Onyx White Tournament Kailh Brown RGB",
	Cena: 299,
	wKarcie: 0
},
	{
	Nazwa: "SteelSeries Apex PRO TKL OmniPoint",
	tag: "SteelSeries Apex PRO TKL OmniPoint",
	Cena: 929,
	wKarcie: 0
},
	{
	Nazwa: "Corsair MM300 Gaming",
	tag: "Corsair MM300 Gaming",
	Cena: 134,
	wKarcie: 0
},
	{
	Nazwa: "Redragon LIBRA",
	tag: "Redragon LIBRA",
	Cena: 39,
	wKarcie: 0
},
	{
	Nazwa: "SteelSeries QcK",
	tag: "SteelSeries QcK",
	Cena: 50,
	wKarcie: 0
},
	{
	Nazwa: "MSI AGILITY GD60",
	tag: "MSI AGILITY GD60",
	Cena: 179,
	wKarcie: 0
},
	{
	Nazwa: "SanDisk 64GB iXpand",
	tag: "SanDisk 64GB iXpand",
	Cena: 249,
	wKarcie: 0
},
	{
	Nazwa: "SanDisk 64GB Ultra Luxe",
	tag: "SanDisk 64GB Ultra Luxe",
	Cena: 43,
	wKarcie: 0
},
	{
	Nazwa: "SanDisk 16GB Ultra Flair",
	tag: "SanDisk 16GB Ultra Flair",
	Cena: 25,
	wKarcie: 0
},
	{
	Nazwa: "SanDisk 128GB Ultra Loop",
	tag: "SanDisk 128GB Ultra Loop",
	Cena: 82,
	wKarcie: 0
},
	{
	Nazwa: "Silver Monkey Kabel HDMI 2.0 - HDMI 1,5m",
	tag: "Silver Monkey Kabel HDMI 2.0 - HDMI 1,5m",
	Cena: 16,
	wKarcie: 0
},
	{
	Nazwa: "Silver Monkey Kabel USB 2.0 - micro USB 2m",
	tag: "Silver Monkey Kabel USB 2.0 - micro USB 2m",
	Cena: 15,
	wKarcie: 0
},
	{
	Nazwa: "Silver Monkey Kabel SCHUKO - C13 3m",
	tag: "Silver Monkey Kabel SCHUKO - C13 3m",
	Cena: 18,
	wKarcie: 0
},
	{
	Nazwa: "Unitek Kabel Jack 3.5mm - Jack 3.5mm 1,5m",
	tag: "Unitek Kabel Jack 3.5mm - Jack 3.5mm 1,5m",
	Cena: 20,
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
    DoKoszyka(produkt);
}

function DoKoszyka(produkt) {
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
            `<div class="produkty"><ion-icon class="usu" name="close-circle"></ion-icon><img src="./${item.tag}.png" width="100px" height="100px"></img>
                <span class="na">${item.Nazwa}</span>
            </div>
            <div class="ce">${item.Cena},00zł</div>
            <div class="il">
                <ion-icon class="mniej " name="arrow-dropleft-circle"></ion-icon>
                    <span class="test">${item.wKarcie}</span>
                <ion-icon class="wiecej" name="arrow-dropright-circle"></ion-icon>   
            </div>
            <div class="ra">${item.wKarcie * item.Cena},00zł</div>`;
        });
		productContainer.innerHTML += `
            <div class="suma">
                <h4 class="sumatytul">Suma</h4>
                <h4 class="sumaRazem">${koszyk},00zł</h4>
            </div>`
		UsuwaniezKoszyka();
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
            NazwaProduktu = usuwanie[i].parentElement.querySelector('span').textContent;
			localStorage.setItem('KartaNumer', NumerProduktu-KartaPrzedmiot[NazwaProduktu].wKarcie);
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