class Familly{                                                                  // Familly is a parent class
    constructor(papa,mummy,sivlings,belongs){                                  // constructor for creating propertirs 
        this.father_name=papa
        this.mother_name=mummy
        this.sivlings=sivlings
        this.state=belongs
    }
    Father(){                                                                  // Father is a method 
        return` he is my father ${this.father_name} and he is a Business Man`
    }                                                                           // method is a function which is a property of an object
    Mother(){
        return`she is my mother ${this.mother_name}`
    }
    bestFF(){
        return`${this.sivlings}  they all are my familly`
    }
}
class Brother extends Familly{                                                      // Brother is a child class
    constructor(papa,mummy,sivlings,belongs,loving_bro,favs_bro){
        super(papa,mummy,sivlings,belongs)
        this.loving_bro=loving_bro
        this.favs_bro=favs_bro
    }
    caring(){
        return`${this.favs_bro} caring me a lot`
    }
    supporting(){
        return`${this.loving_bro} supporting me always`
    }
    set updatebelong(now){
        this.now_living=now
    }
}
class Bro_father extends Familly{
    constructor(papa,mummy,sivlings,belongs,b_name,Age,study){
        super(papa,mummy,sivlings,belongs)
        this.bro_name=b_name
        this.age=Age
        this.study=study
    }
    dream(){
        return` ${this.bro_name} , his dream is scientist`
    }
}
class Frnd_bro extends Familly{                                                     // Frnd_bro is a child class
    constructor(papa,mummy,sivlings,belongs,friend_bro_name,f_age,qualification,Job,child){
    super(papa,mummy,sivlings,belongs)                                               
    this.friend_bro=friend_bro_name
    this.bro_age=f_age
    this.b_qualification=qualification
    this.b_job=Job
    this.baby_name=child
    }
    start_f(){
        return`${this.friend_bro} he is married,he has little baby`
    }
    set baby(chotu){
        this.chotu=chotu
        return `his baby name is ${this.babay_name}`
    }
}
const world=new Familly("swapan","gouri","[saroj,santanu,chandana,suoarna,aparna]","WB")
console.log(world)
console.log(world.Father())
console.log(world.Mother())
console.log(world.bestFF())

let sivli=new Brother("swapan","gouri","sarmistha","WB","saroj","santanu")
console.log(sivli)
console.log(sivli.caring())
console.log(sivli.supporting())
Brother.updatebelong="Kolkata"
console.log(Brother.updatebelong)
console.log(sivli)


const bhai=new Bro_father("swapan","gouri","sarmistha","kolkata","saroj",".24","B.ed")
console.log(bhai)
console.log(bhai.dream())



var bhai_friend=new Frnd_bro("suvendu","sumitra",["suparna","aparna"],"WB","santanu",29,"safty_engenerring","SBI bank manager","sonu")
console.log(bhai_friend)
console.log(bhai_friend.start_f())
Frnd_bro.baby="rick"
console.log(Frnd_bro.baby)
console.log(bhai_friend)




