class Tanaman {
  //-------------------------------------------------------------
  /***1. tambah statis property jumlah tanaman yang didaftar */
  static get amount() {
    return Tanaman._amount;
  }
  //-------------------------------------------------------------
  constructor(nama, latin, jumblahCabang){
    //dia assignment/setting up value parameter
    //properties bisa dikatakan karakter
    this.nama = nama; //undefined
    //-------------------------------------------------------------
    /***2. tambah propertyh nama latin, jgn lupa parameternya */
    this.latin = latin;
    //-------------------------------------------------------------
    this.jumblahCabang = jumblahCabang;
    Tanaman._amount = Tanaman._amount || 0;
    Tanaman._amount++;
    console.log(Tanaman._amount);
  }
  //methods deklarasi
  //propertis/karakter = statis(bisa berubah tp )
  //memiliki fungsi = methods(yang bisa dinamis)
  info(){
   return `Ini adalah tanamana ${this.nama} sekarang dia punya cabang berjumlah ${this.jumblahCabang}` 
  }

  //-------------------------------------------------------------
  /***3. GetSet fullName => 'nama (nama latin)'  */
  get fullName() {
    return `${this.nama} (${this.latin})`;
  }

  set fullName(fN) {
    if (/[a-zA-Z]+[\s][a-zA-Z]+/.test(fN)) {
      [this.nama, this.latin] = fN.split(" ");
    } else {
      throw Error("Bad fullname");
    }
  }
  //-------------------------------------------------------------


  tumbuh = () => {
    this.jumblahCabang++;
  }
}

class Rumput extends Tanaman{
  //this.bentukAkar
  //tinggi
  constructor(nama, latin, jumblahCabang, bentukAkar, tinggiTanaman){
    super(nama, latin, jumblahCabang);
    this.bentukAkar = bentukAkar;
    this.tinggiTanaman = tinggiTanaman;
  }

  info() {
    return `${super.info()} dan memiliki bentuk akar ${this.bentukAkar} dan memiliki tinggi tanaman ${this.tinggiTanaman} meter`
  }
}
const RumputSatu = new Rumput("Rumput biasa", "Latin rumput", 5, 5, 5);
console.log(RumputSatu.info())
console.log(RumputSatu.fullName)
RumputSatu.fullName = "Testing Regex";
console.log(RumputSatu.fullName)

// export default Tanaman;

class Pohon extends Tanaman{
  constructor(nama, latin, jumblahCabang, tinggiPohon, lebarPohon){
    //ini code pewarisannya
    super(nama, latin, jumblahCabang);
    this.tinggiPohon = tinggiPohon;
    this.lebarPohon = lebarPohon;
  }
  //overidding
  info(){
    return `${super.info()} dan memiliki tinggi ${this.tinggiPohon} meter dan memiliki lebar ${this.lebarPohon} meter`
  }
}

//create object/instance pohon
const Trembesi = new Pohon("Trembesi", "Latin Trembesi", 100, 5, 1);
console.log(Trembesi.info())
console.log(Trembesi.fullName)

class Alang2 extends Tanaman{
  constructor(nama, latin, jumblahCabang, panjangAkar, lebarRumput){
    //ini code pewarisannya
    super(nama, latin, jumblahCabang);
    this.tinggiPohon = panjangAkar;
    this.lebarPohon = lebarRumput;
  }
  //overidding
  info(){
    return `${super.info()} dan panjang akar ${this.panjangAkar} meter dan memiliki lebar ${this.lebarRumput} meter`
  }
}

//create object/instance pohon
const Sereh = new Alang2("Sereh wangi", "Latin wangi", 100, 5, 1);
console.log(Sereh.info())
console.log(Sereh.fullName)