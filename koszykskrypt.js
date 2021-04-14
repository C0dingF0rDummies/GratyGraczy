let karta = document.querySelectorAll('.add-cart');
let product = [
{
	Nazwa: "HP Pavilion Gaming",
	tag: "HP1",
	Cena: 3699,
	wKarcie: 0
},
{
	Nazwa: "Lenovo Legion 5-15",
	tag: "Lenovo1",
	Cena: 4299,
	wKarcie: 0
},
{
	Nazwa: "HP Pavilion Gaming",
	tag: "HP2",
	Cena: 4299,
	wKarcie: 0
},
{
	Nazwa: "Dell Inspiron G3",
	tag: "Dell1",
	Cena: 4099,
	wKarcie: 0
},
	{
	Nazwa: "HP Pavilion Gaming",
	tag: "HP3",
	Cena: 3999,
	wKarcie: 0
},
	{
	Nazwa: "Lenovo Legion 5i-17",
	tag: "Lenovo2",
	Cena: 4899,
	wKarcie: 0
},
	{
	Nazwa: "Dell Inspiron 3793",
	tag: "Dell2",
	Cena: 3599,
	wKarcie: 0
},
	{
	Nazwa: "Lenovo Legion Y540-17",
	tag: "Lenovo3",
	Cena: 4099,
	wKarcie: 0
},
	{
	Nazwa: "Dell Inspiron 5406",
	tag: "Dell3",
	Cena: 4499,
	wKarcie: 0
},
	{
	Nazwa: "ASUS ZenBook Flip S UX371EA",
	tag: "ASUS1",
	Cena: 7599,
	wKarcie: 0
},
	{
	Nazwa: "Microsoft Surface Pro 7",
	tag: "Microsoft",
	Cena: 3999,
	wKarcie: 0
},
	{
	Nazwa: "Lenovo Yoga C940",
	tag: "Lenovo4",
	Cena: 4499,
	wKarcie: 0
},
	{
	Nazwa: "Lenovo Tab M10 Plus",
	tag: "Lenovo5",
	Cena: 999,
	wKarcie: 0
},
	{
	Nazwa: "Apple New iPad Pro 11",
	tag: "Apple",
	Cena: 3899,
	wKarcie: 0
},
	{
	Nazwa: "Huawei MediaPad T3",
	tag: "Huawei",
	Cena: 499,
	wKarcie: 0
},
	{
	Nazwa: "Lenovo Tab M10 Plus",
	tag: "Lenovo6",
	Cena: 1111,
	wKarcie: 0
},
	{
	Nazwa: "Gigabyte GeForce RTX 2060",
	tag: "Gigabyte1",
	Cena: 2799,
	wKarcie: 0
},
	{
	Nazwa: "MSI GeForce RTX 3070 Gaming X Trio",
	tag: "MSI1",
	Cena: 6099,
	wKarcie: 0
},
	{
	Nazwa: "Gigabyte GeForce RTX 3080 GAMING",
	tag: "Gigabyte2",
	Cena: 6599,
	wKarcie: 0
},
	{
	Nazwa: "XFX Radeon RX 580 GTS XXX Edition",
	tag: "Radeon",
	Cena: 3199,
	wKarcie: 0
},
	{
	Nazwa: "Intel Core i5-10400F",
	tag: "Intel1",
	Cena: 599,
	wKarcie: 0
},
	{
	Nazwa: "AMD Ryzen 5 3600",
	tag: "Ryzen1",
	Cena: 849,
	wKarcie: 0
},
	{
	Nazwa: "Intel Core i5-10400",
	tag: "Intel2",
	Cena: 699,
	wKarcie: 0
},
	{
	Nazwa: "AMD Ryzen 5 1600 AF",
	tag: "Ryzen2",
	Cena: 549,
	wKarcie: 0
},
	{
	Nazwa: "MSI Z490‑A PRO",
	tag: "MSI2",
	Cena: 719,
	wKarcie: 0
},
	{
	Nazwa: "ASRock B460M PRO4",
	tag: "ASRock1",
	Cena: 399,
	wKarcie: 0
},
	{
	Nazwa: "Gigabyte B450M DS3H V2",
	tag: "Gigabyte3",
	Cena: 299,
	wKarcie: 0
},
	{
	Nazwa: "MSI MAG B550 TOMAHAWK",
	tag: "MSI3",
	Cena: 749,
	wKarcie: 0
},
	{
	Nazwa: "G.Skill TridentZ RGB",
	tag: "Gskill",
	Cena: 699,
	wKarcie: 0
},
	{
	Nazwa: "HyperX Fury",
	tag: "HyperX",
	Cena: 369,
	wKarcie: 0
},
	{
	Nazwa: "Patriot Viper Elite Grey",
	tag: "Patriot",
	Cena: 349,
	wKarcie: 0
},
	{
	Nazwa: "Corsair Vengeance RGB Pro",
	tag: "Corsair1",
	Cena: 529,
	wKarcie: 0
},
	{
	Nazwa: "WD 1TB M.2 PCIe NVMe Blue SN550",
	tag: "WD",
	Cena: 459,
	wKarcie: 0
},
	{
	Nazwa: "Seagate BARRACUDA 2TB 7200obr. 256MB",
	tag: "Seagate",
	Cena: 239,
	wKarcie: 0
},
	{
	Nazwa: 'Samsung 250GB 2.5" SATA SSD 870 EVO',
	tag: "Samsung1",
	Cena: 199,
	wKarcie: 0
},
	{
	Nazwa: "Samsung 500GB M.2 PCIe NVMe 970 EVO Plus",
	tag: "Samsung2",
	Cena: 389,
	wKarcie: 0
},
	{
	Nazwa: "be quiet! System Power 9 500W 80 Plus Bronze",
	tag: "be1",
	Cena: 229,
	wKarcie: 0
},
	{
	Nazwa: "SilentiumPC Vero L3 600W 80 Plus Bronze",
	tag: "Silentium1",
	Cena: 229,
	wKarcie: 0
},
	{
	Nazwa: "SilentiumPC Supremo FM2 750W 80 Plus Gold",
	tag: "Silentium2",
	Cena: 419,
	wKarcie: 0
},
	{
	Nazwa: "be quiet! System Power 9 600W 80 Plus Bronze",
	tag: "be2",
	Cena: 259,
	wKarcie: 0
},
	{
	Nazwa: "SilentiumPC Navis RGB 240 2x120mm",
	tag: "Silientium3",
	Cena: 319,
	wKarcie: 0
},
	{
	Nazwa: "be quiet! Dark Rock Pro 4 120/135mm",
	tag: "be3",
	Cena: 355,
	wKarcie: 0
},
	{
	Nazwa: "SilentiumPC Navis Evo ARGB 240 2x120mm",
	tag: "Silentium4",
	Cena: 379,
	wKarcie: 0
},
	{
	Nazwa: "SilentiumPC Fera 3 EVO ARGB 120mm",
	tag: "Silentium5",
	Cena: 149,
	wKarcie: 0
},
	{
	Nazwa: "Logitech G PRO GAMING HEADSET",
	tag: "Logitech1",
	Cena: 349,
	wKarcie: 0
},
	{
	Nazwa: "SteelSeries Arctis 5 Czarne",
	tag: "SteelSeries1",
	Cena: 459,
	wKarcie: 0
},
	{
	Nazwa: "SteelSeries Arctis 7 Czarne",
	tag: "SteelSeries2",
	Cena: 689,
	wKarcie: 0
},
	{
	Nazwa: "HyperX Cloud Alpha",
	tag: "HyperX2",
	Cena: 359,
	wKarcie: 0
},
	{
	Nazwa: "SteelSeries Rival 3",
	tag: "SteelSeries3",
	Cena: 159,
	wKarcie: 0
},
	{
	Nazwa: "Razer Deathadder Essential",
	tag: "Razer1",
	Cena: 149,
	wKarcie: 0
},
	{
	Nazwa: "Razer Basilisk X Hyperspeed",
	tag: "Razer2",
	Cena: 269,
	wKarcie: 0
},
	{
	Nazwa: "ASUS ROG Gladius II Wireless",
	tag: "ASUS2",
	Cena: 349,
	wKarcie: 0
},
	{
	Nazwa: "SPC Gear GK630K Tournament Kailh Brown RGB",
	tag: "SPC1",
	Cena: 249,
	wKarcie: 0
},
	{
	Nazwa: "Corsair K55 Gaming",
	tag: "Corsair2",
	Cena: 199,
	wKarcie: 0
},
	{
	Nazwa: "SPC Gear GK630K Onyx White Tournament Kailh Brown RGB",
	tag: "SCP2",
	Cena: 299,
	wKarcie: 0
},
	{
	Nazwa: "SteelSeries Apex PRO TKL OmniPoint",
	tag: "SteelSeries4",
	Cena: 929,
	wKarcie: 0
},
	{
	Nazwa: "Corsair MM300 Gaming (Extended)",
	tag: "Corsair3",
	Cena: 134,
	wKarcie: 0
},
	{
	Nazwa: "Redragon LIBRA",
	tag: "Redragon",
	Cena: 39,
	wKarcie: 0
},
	{
	Nazwa: "SteelSeries QcK",
	tag: "SteelSeries5",
	Cena: 50,
	wKarcie: 0
},
	{
	Nazwa: "MSI AGILITY GD60",
	tag: "MSI4",
	Cena: 179,
	wKarcie: 0
},
	{
	Nazwa: "SanDisk 64GB iXpand iPhone/iPad (USB 3.0+Lightning)",
	tag: "SanDisk1",
	Cena: 249,
	wKarcie: 0
},
	{
	Nazwa: "SanDisk 64GB Ultra Luxe 150MB/s USB 3.1",
	tag: "SanDisk2",
	Cena: 43,
	wKarcie: 0
},
	{
	Nazwa: "SanDisk 16GB Ultra Flair (USB 3.0)",
	tag: "SanDisk3",
	Cena: 25,
	wKarcie: 0
},
	{
	Nazwa: "SanDisk 128GB Ultra Loop 130MB/s USB 3.0",
	tag: "SanDisk4",
	Cena: 82,
	wKarcie: 0
},
	{
	Nazwa: "Silver Monkey Kabel HDMI 2.0 - HDMI 1,5m",
	tag: "Silver1",
	Cena: 16,
	wKarcie: 0
},
	{
	Nazwa: "Silver Monkey Kabel USB 2.0 - micro USB 2m",
	tag: "Silver2",
	Cena: 15,
	wKarcie: 0
},
	{
	Nazwa: "Silver Monkey Kabel SCHUKO - C13 3m",
	tag: "Silver3",
	Cena: 18,
	wKarcie: 0
},
	{
	Nazwa: "Unitek Kabel Jack 3.5mm - Jack 3.5mm 1,5m",
	tag: "Unitek",
	Cena: 20,
	wKarcie: 0
},
	
];
		for (let i=0; i<karta.length; i++)
		{
		karta[i].addEventListener('click',() => {
			NumerKoszyk(product[i])
			CalkowityKoszt(product[i])
		})
		}
		function NumerKoszykRefresh()
		{
			let numerProduktu = localStorage.getItem("NumerKoszyk");
			if(numerProduktu)
			{
				var element = document.querySelector(".cart span")
				if (element) {
					element.textContent=numerProduktu
                }
				//document.querySelector(".cart span").textContent=numerProduktu;
			}
		}
		
		function NumerKoszyk(product)
		{
			let numerProduktu = localStorage.getItem("NumerKoszyk");
			numerProduktu=parseInt(numerProduktu);
			if(numerProduktu)
			{
				localStorage.setItem("NumerKoszyk" ,numerProduktu + 1);
				document.querySelector(".cart span").textContent=numerProduktu+1;
			}
			else
			{
				localStorage.setItem("NumerKoszyk" ,1);
				document.querySelector(".cart span").textContent=1;
			}
			DoKoszyka(product);
		}
		
		function DoKoszyka(product)
		{	
			let ProduktyKarty = localStorage.getItem("produktWkarcie");
			ProduktyKarty = JSON.parse(ProduktyKarty);
			if(ProduktyKarty != null)
			{
				if(ProduktyKarty[product.tag] == undefined)
				{
					ProduktyKarty={
						...ProduktyKarty,
						[product.tag]: product
					}
				}
				ProduktyKarty[product.tag].wKarcie+=1;
			}
			else
			{
			product.wKarcie=1;
			ProduktyKarty={
			[product.tag]: product
			}
			}
			localStorage.setItem("produktWkarcie", JSON.stringify(ProduktyKarty));
		}
		
		function CalkowityKoszt(product)
		{
			let KoszykCena = localStorage.getItem("CalkowityKoszt");
			console.log("Cena koszyka to: ", KoszykCena);
			console.log(typeof KoszykCena);
			if(KoszykCena != null)
			{
				KoszykCena= parseInt(KoszykCena);
				localStorage.setItem("CalkowityKoszt", KoszykCena+product.Cena);
			}
			else
			{
				localStorage.setItem("CalkowityKoszt", product.Cena);
			}
			
		}
		
		function Karta()
		{
			let KartaProdukty = localStorage.getItem("produktWkarcie");
			KartaProdukty= JSON.parse(KartaProdukty);
			let ProduktKoszyk = document.querySelector(".produkty");
			console.log(KartaProdukty);
			if(KartaProdukty && ProduktKoszyk)
			{
				ProduktKoszyk.innerHTML = "";
				Object.values(KartaProdukty).map(item => {
				ProduktKoszyk.innerHTML+=
				`<div class="produkty">
				<span class="na">${item.Nazwa}</span>

				<span class="ce">${item.Cena},00</span>

				<input type="number" value="${item.wKarcie}" class="il">

				<span class="prawo">${item.Cena*item.wKarcie},00</span>
				</div>
				`
				
				});
			}
		}
		NumerKoszykRefresh();
		Karta();
