const Playboy = require("discord-rpc");

//Yarattığımız App'in ClientId'si Buraya
const ClientId = '388341171086295040';

Playboy.register(ClientId);

const Mansion = new Playboy.Client({ transport: 'ipc' });



//////////////////////////////////////
//##################################//
//#                                #//
//#       Custom Rpc Özelliği      #//
//#  Console.Owner("Maviş");#1693  #//
//#        Mansion Creation        #//
//#                                #//
//##################################//
//////////////////////////////////////



//Asıl Olay İşte Burada
Mansion.on('ready', () => {
  console.log("Başarılı...");
  console.log("Mansion Creation RPC\'yi Kullandığınız İçin Teşekkür Ederiz.");
  Mansion.setActivity({
	//Not: Eğer "... Oynuyor" Değiştirmek İstiyorsanız Yarattığımız App'a Gidip App'in İsmini Değiştirin 
    details: 'Console.Owner("Maviş");',//Ortadaki Yazı
    state: 'Custom RPC Özelliği',//En Alttaki Yazı
    largeImageKey: 'mavis_1',// Large Seçeneğini İşaretleyip Yüklediğimiz Fotoğraf'ın İsmi
    largeImageText: 'Github: InfinityMavis',// Resmin Üstüne İmleci Getirince Çıkacak Olan Yazı
    smallImageKey: 'mavis_2',// Small Seçeneğini İşaretleyip Yüklediğimiz Fotoğraf'ın İsmi
    smallImageText: 'Github\'da Bulabilirsiniz'// Resmin Üstüne İmleci Getirince Çıkacak Olan Yazı
  });
});

//Mansion Creation™ Size Yardım Ve Destek Etmekten Gurur Duyar..
Mansion.login(ClientId).catch(console.error);