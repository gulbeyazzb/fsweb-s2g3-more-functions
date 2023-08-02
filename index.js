// Aşağıdaki görevleri tamamlayın

/*
  GÖREV 1
  - Input:  Bir dosya yolunu (path) parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon, verilen bir dosya adresideki(path) dosyanın adını vermeli.
  * İpucu:  Dosya adresinin / işaretleri ile bölümlendiğine dikkat et.

  örnek input:  "C:/Users/johnsmith/Music/Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  "Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  ""
  örnek output: ""
*/

function dosyaAdiniBul(Input) {
  const arr = Input.split("/");
  return arr[arr.length - 1];
}
// console.log(
//   dosyaAdiniBul("C:UsersHpDocumentsGitHub/fsweb-s2g3-more-functions")
// );
/*
  GÖREV 2
  - Input:  Bir sayı arrayini parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasını dönmeli.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: 46

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: 104
*/

function ortalamaBul(Input) {
  if (Input.length === 0) {
    //Eğer dizi boşsa null dön
    return null;
  } else {
    const avr =
      Input.reduce((sum, input_value) => sum + input_value, 0) / Input.length; //Reduce ile dizi içerisinde geziniyoruz ve başta belirtilen ve ilk değeri 0 olan accumulatore ('sum')'a dizideki değerleri sırayla ekliyor ve topluyoruz. Toplam sum değeri dizinin uzunluğuna bölerek ortalamaya ulaşıyoruz.
    return Math.round(avr); //ortalama değeri tutan avr'i Math.round() metoduyla yuvarlıyoruz.
  }
}

// console.log(ortalamaBul([20, 10]));
/*
  GÖREV 3
  - Input:  Bir sayı arrayini ve ortalama bulmaya yarayacak bir fonksiyonu parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasından büyük ya da eşit elemanlardan oluşan bir array dönmeli.
  * Çağırırken kendi ortalama fonksiyonunla çağırabilirsin, ama parametrenin tanımlama aşamasında soyut bir ifade olduğunu unutma.
  * f(x) = 2x+5 içerisindeki x değeri gibi.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: [50, 153]

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: [109, 216, 288, 143, 185, 194]
*/

function ortalamadanBuyukleriBul(Input, ortalamaBul) {
  if (Input.length == 0) {
    //Eğer dizi boşsa null dön
    return null;
  }
  let smaller = [];
  const avr = ortalamaBul(Input); //OrtalamaBul functionı Callback edildi ve dönen değer avr değişkenine atanır.
  let bigger = [];
  for (let i = 0; i < Input.length; i++) {
    if (Input[i] >= avr) {
      //Eğer indexin değeri ortalamadan(avr'den) büyük veya eşitse ;
      bigger.push(Input[i]); //bigger dizisine pushla
    } else {
      smaller.push(Input[i]); //değilse smaller dizisine pushla
    }
  }
  return bigger; //Ortalamadan büyük olan sayıları bulunduran diziyi döndürür
}
const arr = [109, 216, 288, 143, 71, 185, -278, 194, 5];
console.log(ortalamaBul(arr)); //Önce verilen dizinin ortalamasını döndürüyoruz. //104
console.log(ortalamadanBuyukleriBul(arr, ortalamaBul)); //Ortalamadan büyük verileri çağırıyor
/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as() {
  console.log("Kodlar sorunsuz çalışıyor!");
  return "sa";
}
as();
export { dosyaAdiniBul, ortalamaBul, ortalamadanBuyukleriBul, as };
