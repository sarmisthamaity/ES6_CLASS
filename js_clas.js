class Goal{
    constructor(name,gender,belongs,target){
        this.name=name
        this.gender=gender
        this.belongs=belongs
        this.dream=target
    }
    Aim(){
        return `i am ${this.name} my goal is ${this.dream}`
    }
}
class Afterboardexam extends Goal{
    constructor(name,gender,belongs,target,clas,marks){
        super(name,gender,belongs,target)
        this.current_stage=clas
        this.marks=marks
    }
    whichClas(){
        return `I am ${this.current_stage} and i passed 12th with ${this.marks} marks`
    }
    persuing(){
        return `terget is become a full_stack Developer`
    }
}
class Brother extends Goal{
    constructor(name,gender,belongs,target,nowage,stream,marks){
        super(name,gender,belongs,target)
        this.age=nowage
        this.stream=stream
        this.marks=marks
    }
    nextStep(){
        if(this.marks>375){
            return `your mark is ${this.marks} very good so u can choose anything`
        }
        else{
            return "don't gove up and try your best"
        }
    }
    get fulfill(){
        return` he is doing bank job`
    }
}
class Saroj_bro extends Goal{
    constructor(name,gender,belongs,target,collageName,stream,targe){
        super(name,gender,belongs,target)
        this.collageName=collageName
        this.stream=stream
        this.wish=targe
    }
    tryforPhd(){
        let deg=require("readline-sync")
        let degree=deg.question("Are you trying for phd/Neet==> ")
        if (degree=="Neet"){
            return "all the best for your exam"
        }
        else{
            return "try to medical also"
        }
    }
    forDoctor(){
        let chance=require("readline-sync")
        let be_doctor=chance.question("have you crack the phd/Neet exam yes/no-- ")
        if(be_doctor=="yes"){
            return "do hardwork and full fill your dream"
        }
        else{
            return "you can try  again for your dream PHD"
        }
    }
}
class Neverstop extends Goal{
    constructor(name,gender,belongs,target,fname,age,aim){
        super(name,gender,belongs,target)
        this.fname=fname
        this.currentage=age
        this.aim=aim
    }
    set setdateDream(wantToBe){
        this.dream=wantToBe
        
    }
    get getarea(){
        return`from ${this.belongs} now live in bagalore`
    }
}
const goal=new Goal("sarmistha","girl","WB","Army officer")
console.log(goal.Aim())
console.log(goal)

let Boardex=new Afterboardexam("sarmi","girl","WB","Army","learning soft skill",400)
console.log(Boardex)
console.log(Boardex.whichClas())
console.log(Boardex.persuing())



const histerget=new Brother("santanu","boy","WB","safetyengeenieer",25,"kolkata university",390)
console.log(histerget)
console.log(histerget.nextStep())
console.log(histerget.fulfill)



var sa_target=new Saroj_bro("saroj","boy","WB","crack neet","kolkata university","chemistry","scientist")
console.log(sa_target)
console.log(sa_target.tryforPhd())
console.log(sa_target.forDoctor())



const Nevrstop=new Neverstop("sarmi","girl","Kolkata","software","sarmistha",19,"software deleloper")
console.log(Nevrstop)
console.log(Nevrstop.getarea)
Neverstop.setdateDream="want to marry army man"
console.log(Neverstop.setdateDream)



