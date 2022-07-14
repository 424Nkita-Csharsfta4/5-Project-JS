const circles = document.querySelectorAll('.circle');
const progressBar = document.querySelector('.progress-bar');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
//position of the active circle
let currentCircle = 1;

//next button event listener
nextBtn.addEventListener('click', () => {
    //increment the 'currentcircle' which is === '1'
    //of  '1' evetytime you click
    currentCircle++;
    // to keep the circle within boundaries [1 to 4]
    if (currentCircle > circles.length) {
        currentCircle = circles.length;
       
    }
    
    if (currentCircle === circles.length) {
        nextBtn.disabled = true;
    }
    
    if(currentCircle >1){
        //change the button to able to disabled and vice versa
        prevBtn.disabled = false;
    }



    update()


})



//prev button event listener
prevBtn.addEventListener('click', () => {

    currentCircle--;

    if (currentCircle <1) {
        currentCircle = 1;
    }

    if(currentCircle === 1){
        nextBtn.disabled = false;
        prevBtn.disabled = true;
    }

    update()

})


function update() {

    //making the circle border 'black' when active
    circles.forEach((circle, index) => {
        if(index < currentCircle) {
            circle.classList.add('active-circle');
        } else {
            circle.classList.remove('active-circle');
        }
    })

    
    //call all the active circle
    const activeCircles = document.querySelectorAll ('.active-circle');
    //progress bar 
    progressBar.style.width =  ((activeCircles.length -1)/(circles.length-1)) * 100 + '%';
    
    
}
const div = document.createElement("div");
console.log(div);
//div.innerText = "Bye"
const messagecon = document.createElement('div');
messagecon.className ="message-con";
messagecon.innerHTML = "Tyt";
messagecon.style.color = 'red';
messagecon.style.backgroundColor ='black';
document.body.append(messagecon); 
let x = -5;
if(x < 0) x = -x;
console.log(x);
//let S=0, i=1;
//while((S += i++) < 100 );
//console.log(S);
//let t=0;
//for(let i=1;i <= 1000; ++i) t += 1/i;
//console.log(t);
let S=0, M=10, N=5;
for(let i=1;i <= N; ++i)
         for(let j=1; j <= M; ++j)
                   S += i*j;
 
console.log("S = " + S);
function agreeCookies(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
   
  function agreeYes() { 
     console.log("Вы приняли соглашение о cookies");
  }
   
  function agreeNo() {
     console.log("Вы отказались от использования cookies");
  }
   
  agreeCookies("Наш сайт использует cookies. Нам нужно ваше согласие", agreeYes, agreeNo);
  function pow(x, n) {
    if(n <= 0) return 1;
    else return x*pow(x, n-1);
}
 
let res = pow(2, 3);
let company = {
    sales: [{name: 'Иван', salary: 1000}, {name: 'Михаил', salary: 600}],
    development: {
        sites: [{name: 'Евгений', salary: 2000}, {name: 'Алексей', salary: 1800}],
        internals: [{name: 'Федор', salary: 1300}]
    }
};
function sumSalary(department) {
    if(Array.isArray(department)) {
         return department.reduce((prev, current) => prev + current.salary, 0);
    }
    else {
         let sum = 0;
         for(let prop in department) {
             sum += sumSalary(department[prop]);
         }
         return sum;
    }
}

let an =() => console.log("ogo");
an();

//object
let boook = {
    model:"ok",
    title:  "sds",
       autor: "sa",
       go:function(){
        console.log("This is car");
       },
       stop: function(){
        console.log("Stop");
       },
       getModel(){
        return this.model;
       }
};
boook.go();
boook.isSels = false;
console.log(boook.autor);

let ob = document.createElement('li');
let section = document.createElement('div');
section = `
<span>${ob.after }</span>`;
console.log(ob);
//Перед обьектом textElement.before(Element);
//После обькта textElement.after(Element);
//Внутрь и вначало обькта textElement.prepend(Element);
//В конец и внуторь text.eLEMENT.APPEND();