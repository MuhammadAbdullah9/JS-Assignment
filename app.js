//  <==  JS ASSIGNMENT  ==>

// CHAPTERS 21-67 COMPLETE


// CHAPTER # 21-25


// Ex#1

// var fName=prompt("Enter your First name")
// var lName=prompt("Enter your Last name")
// var fullName=fName + " " + lName
// alert("Thanks for cooperating with us " + fullName + "!")

// EX#2

// var mobileModel=prompt("Which is your favorite mobile phone model ?")
// document.write("My Favorite phone is : " + mobileModel + "<br>")
// document.write("length of String : " + mobileModel.length)

// EX#3

// var cont = "Pakistani"
// document.write("String : " + cont + "<br>")
// var i=cont.indexOf("n") ;
// document.write("index of 'n' :" + i)

// EX#4

// var c="Hello World"
// document.write("String: " + c + "<br>");
// var i=c.lastIndexOf("l")
// document.write("Last Index of 'I' : " + i)

// EX#5

// var str="Pakistani"
// document.write("String : "+ str + "<br>")
// var i=str.charAt("3")
// document.write("Character at index 3 : " + i)

// EX#6

// var fName=prompt("Enter your First name")
// var lName=prompt("Enter your Last name")
// var fullName=fName.concat(" ",lName) 
// alert("Thanks for cooperating with us " + fullName + "!")

// EX#7

// var c="Hyderabad"
// document.write("City: " + c + "<br>")
// var r=c.replace("Hyder","Islam")
// document.write("After replacement: " + r)

// EX#8

// var message="Ali and Sami are best friends. They play cricket and football together."
// var r=message.replace(/and/g,"&")
// document.write("message: <br>" + message + "<br>")
// document.write("message after replacement: <br>" + r + "<br>")

// EX#9

// var v1="472"
// var v2=parseInt("472")
// var t1=typeof(v1)
// var t2=typeof(v2)
// document.write("Value : "+ v1  + "<br>")
// document.write("Type : "+ t1  + "<br>")
// document.write("Value : "+ v2  + "<br>")
// document.write("Type : "+ t2  + "<br>")

// EX#10

// var ip=prompt("Enter a word ")
// var uc=ip.toUpperCase()
// document.write("You wrote : " + ip  + "<br>")
// document.write("We changed : " + uc  + "<br>")

// EX#11

// var ip=prompt("Enter a word ")
// var s=ip.slice(0,1)
// var uc=s.toUpperCase()
// var s1=ip.slice(1,)
// var lc=s1.toLowerCase()
// var c=uc + lc
// document.write("You wrote : " + ip  + "<br>")
// document.write("We changed : " + c  + "<br>")

// EX#12

// var int=35.36;
// var i=35.36*100
// var s=i.toString()
// document.write("Number: " + int + "<br> Result: " + s )

// EX#13

// var name=prompt("enter your name")
// for (i=0 ; i<name.length ; i++){
//     if(name[i]=="!" || name[i]=="@" || name[i]=="." || name[i]==","){
//         alert("Please enter a valid username")
//     }
// }
// alert(name)

// EX#14

// var A=["cake" , "apple pie" , "cookie" , "chips" , "patties"]
// var s=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am ?")
// var c=s.toLowerCase()
// var b=A.indexOf(c)
// if(c=="cake" || c=="apple pie" || c=="cookie" || c=="chips" || c=="patties"){
//     document.write(c + " is available at index " + b + " in our bakery!" )
// }
// else{
//     document.write("We are sorry, " + c + " is not available in our bakery")
// }

// EX#15

// var p=prompt("enter your password: ")
// if(((p>="A" && p<="Z") || (p>="a" && p<="z")) && (p>="0" && p<="9") && (p.length>=6)){
//     if(p.slice(0,1)>= "0" || p.slice(0,1)<="9"){
//         alert("Password cannot begin with a number <br> Please enter a valid password ")
//     }
//     else{
//         alert(p)
//     }
// }
// if(((p>="A" && p<="Z") || (p>="a" && p<="z")) && (p.length>=6) && (p.slice(0,1)>= "0" || p.slice(0,1)<="9")){
//     alert("It should contain numbers too! also cannot begin with a number first <br> Please enter a valid password")
// }
// if(((p>="A" && p<="Z") || (p>="a" && p<="z")) && p.length<6){
//     alert("It should contain numbers too! <br> And must have six characters atleast <br> Please enter a valid password")
// }
// if((p>="0" && p<="9")){
//     alert("It should contain alphabets too! <br> Please enter a valid password")
// }
// if(p.slice(0,1)>= "0" || p.slice(0,1)<="9"){
//     alert("Password cannot begin with a number <br> Please enter a valid password ")
// }
// if(((p>="A" && p<="Z") || (p>="a" && p<="z")) && (p>="0" && p<="9") && p.length<6){
//     alert("It must have Six characters atleast ! <br> Please enter a valid password")
// }

// EX#16

// var university="University of Karachi"
// var ss=university.split("")
// for(i=0 ; i < ss.length; i++){ 
// document.write(ss[i] + "<br>")
// }

// EX#17

// var input=prompt("Enter any word")
// var word=input.charAt(input.length-1)
// document.write("User input " + input + "<br>")
// document.write("Last character of input " + word)

// EX#18

// var text="The quick brown fox jumps over the lazy dog"
// var t1=text.toLowerCase()
// var s=0;
// for(i=0; i<t1.length ; i++){
//     if(t1.slice(i,i+3)=="the"){
//         s++
//     }
// }
// if(s>=2){
//     document.write("There are " + s + " Occurence(s) of the word 'the' ")
// }
// else{
//     document.write("There is " + s + " Occurence of the word 'the'")
// }

// ==========================================================================================

// CHAPTER # 26-30

// EX#1

// var num=prompt("Enter any positive number")
// var r=Math.round(num)
// var f=Math.floor(num)
// var c=Math.ceil(num)
// if (num<0){
//     alert("Please enter a positive number")
// }
// else if(num>0){
//     document.write("number you entrered : " +num + "<br>")
//     document.write("After rounding off : " + r + "<br>")
//     document.write("The floor value of number: " + f + "<br>")
//     document.write("The ceil value of number: " +c + "<br>")
// }
// else{
//     alert("Please enter only number")
// }

// EX#2

// var num=prompt("Enter a negative floating point number")
// var r=Math.round(num)
// var f=Math.floor(num)
// var c=Math.ceil(num)
// if (num>0){
//     alert("Please enter a negative number")
// }
// else if(num<0){
//     document.write("number you entrered : " +num + "<br>")
//     document.write("After rounding off : " + r + "<br>")
//     document.write("The floor value of number: " + f + "<br>")
//     document.write("The ceil value of number: " +c + "<br>")
// }
// else{
//     alert("Please enter only number")
// }

// EX#3

// var num=prompt("enter a number ")
// if(num<0){
//     num=(num)*(-1)
//     document.write(num)
// }
// else if (num>0){
//      document.write(num)
// }
// else{
//     document.write("please enter only number")
// }

// EX#4

// var r=Math.ceil(Math.random()*6)
// document.write("Random Dice Value : " + r)

// EX#5

// var r=Math.ceil(Math.random()*2)
// if(r==2){
// document.write(r +"<br>" + "Random Coin Value Says: Heads" )
// }
// else if(r==1){
//     document.write(r +"<br>" + "Random Coin Value Says: Tails" )
// }

// EX#6

// var r=Math.ceil(Math.random()*100)
// document.write("Random Number between 1 and 100 : " + r)

// EX#7

// var w=prompt("Enter your weight in kilograms")
// document.write("The weight of user is " + w)

// EX#8

// var sn=Math.ceil(Math.random()*10)
// var num=+prompt("Enter a number between 1 and 10")
// if(sn===num){
//     document.write("Congratulations ! You catch it")
// }
// else if(sn!==num){
//     document.write("Try Agian !")
// }


// ==========================================================================================


// CHAPTER# 31-34


// EX#1

// var a=new Date()
// document.write(a)

// EX#2

// var monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"];

// var a = new Date();
// alert("Current month : " + monthNames[a.getMonth()]);

// EX#3

// var dayNames=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" , "Sunday"]
// var a = new Date();
// alert("Today is " + dayNames[a.getDay()].slice(0,3))

// EX#4

// var dayNames=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" , "Sunday"]
// var a = new Date();
// var ch=dayNames[a.getDay()]
// if(ch==="Saturday" || ch==="Sunday"){
//     alert("It's Fun day")
// }
// else{
//     alert(ch)
// }

// EX#5

// var a= new Date()
// var b=a.getDate()
// if(b<16){
//     document.write("First fifteen Days of the month")
// }
// else if(b>=16){
//     document.write("Last Days of the Month")
// }

// EX#6

// var a=new Date("Jan,1 1970")
// var b=new Date()
// var aM=a.getTime()
// var bM=b.getTime()
// var ds=bM-aM
// var dm=((ds*1000)/60)
// document.write("Current Date : " + b + "<br>")
// document.write("miliseconds from 1970 : "+ds  + "<br>")
// document.write("minutes from 1970 : " + dm  + "<br>")

// EX#7

// var a = new Date()
// var b=a.getHours()
// var c=b.toString()
// if (c<"12:00"){
//     alert("It's am")
// }
// else if(c>="12:00"){
//     alert("It's pm")
// }

// EX#8

// var laterDate=new Date("Dec , 31  2020")
// document.write("Later Date :" +laterDate)

// EX#9

// var ramzanDate=new Date("June 18, 2015")
// var supposedDate=new Date("December 30, 2015")
// var a=ramzanDate.getTime()
// var b=supposedDate.getTime()
// var dms=b-a
// var ds=dms/1000
// var days=(ds/(60*60*24))
// alert(days + " days have passed since 1st Ramadan, 2015")

// EX#10

// var s=new Date("Jan 1, 2015")
// var rD=new Date("Feb 1, 2015")
// var a=s.getTime()
// var b=rD.getTime()
// var dms=b-a
// var ds=dms/1000
// document.write(ds + " seconds have passed since Jan 1 to Feb 1 of 2015")

// EX#11

// var cd=new Date()
// var ud=cd.getHours()
// var uh=ud+1
// var fd=new Date(2020, 5 , 20 , uh)
// document.write("current date : " + cd + "<br>")
// document.write("An hour ahead it would be : " + fd)

// EX#12

// var cd=new Date()
// var gd=cd.getFullYear()
// var by=gd-100
// var bd=new Date(by, 5, 20)
// document.write("Current Date : " + cd + "<br>")
// document.write("100 years back it was : " + bd)

// EX#13

// var age=prompt("Enter your age :")
// var cd=new Date()
// var gy=cd.getFullYear()
// var by=gy-age
// document.write("Your age is :" + age + "<br>")
// document.write("Your birth year is :" + by)

// EX#14

// var name="Haider"
// var month="June"
// var NumberOfUnits=500
// var chargesPerUnits=20
// var netAmountPayable=NumberOfUnits*chargesPerUnits
// var lateAmountPayament=300
// var GrossAmountPayable=netAmountPayable+lateAmountPayament
// document.write("<h1>K-Electric Bill</h1>" + "<br>")
// document.write("Customer Name: "+ name + "<br>")
// document.write("Current Month : " + month + "<br>")
// document.write("Number of Units : "+ NumberOfUnits + "<br>")
// document.write("Charges Per Unit : "+ chargesPerUnits + "<br>")
// document.write("<br>")
// document.write("Net Amount Payable(Within Due Date) : " + netAmountPayable + "<br>")
// document.write("Late Payment Surcharge : " + lateAmountPayament + "<br>")
// document.write("Gross Amount Payable(After Due Date): " + GrossAmountPayable)


// ==========================================================================================


// CHAPTER#35-38

// EX#1

// function dateAndTime(){
//     document.write(new Date())
// }
// dateAndTime();

// EX#2

// function greetings(fName,lName){
//       var fullName=fName+ " " +lName  
//       alert("Welcome " +fullName) 
// }
//   greetings((prompt("Enter your first name :")),(prompt("Enter your last name :")))

// EX#3

// function add(n1,n2){
//     var r=n1+n2
//     return r
// }
// var s=add((+prompt("enter a number")),(+prompt("enter second number")))
// alert(s)

// EX#4

// function calc(n1,n2,op){
//     if(op=="+"){
//         var r=(n1+n2)
//     }
//     else if(op=="-"){
//         var r=(n1-n2)
//     }
//     else if(op=="*"){
//         var r=(n1*n2)
//     }
//     else if(op=="/"){
//         var r=(n1/n2)
//     }
//     else if(op=="%"){
//         var r=(n1 % n2)
//     }
//     return r
// }
// var result=calc((+prompt("Enter the first number ")), (+prompt("Enter the second number")),(prompt("Enter the operation you want to perform; '+' , '-' , '*' , '/' , '%' ")))
// document.write(result)

// EX#5

// function sq(arg){
//     var r=arg*arg
//     alert(r)
// }
// sq(+prompt("enter a number you want to square it"))

// EX#6

// var r=1
// function fact(num){
//     while(num>=1){
//         r*=num
//         num--
//     }
//   alert(r)
// }
// fact(+prompt("enter a number to know its factorial"))

// EX#7

// function counting(n1,n2){
//     var a=[]
//     var b=n2-n1
//     var c=n1-n2

//     if(n1<=n2){
//     for(i=0; i<=b ; i++){
//         a[i]=n1
//         n1++
//     }
// }
// else if(n2<n1){
//     for(i=0; i<=c;i++){
//         a[i]=n1
//         n1--
//     }
// }
// document.write(a)
// }

// counting(+prompt("Enter a starting number for counting"), +prompt("Enter an ending number for counting"))

// EX#8

// function calcHyp(b,p){
//     function calcSq(){
//        h1=(b*b)+(p*p)
//     }
//     calcSq()
//     var h=Math.sqrt(h1)
//     document.write("Hypotenuse^2 : " + h1 + "<br>")
//     document.write("Hypotenuse : "+h)
// }
// calcHyp(+prompt("Enter base of a triangle "), +prompt("Enter perpendicular of a triangle "))

// EX#9

// i. Argument as value

// function Area(w,h){
//     var A=w*h
//     document.write("Area of rectangle " +A)
// }
// Area(6,4)

// ii. Argument as variable

// function Area(w,h){
//     var A=w*h
//     document.write("Area of rectangle " +A)
// }
// Area(+prompt("enter width "), +prompt("enter height"))

// EX#10

// function palindrome(word){
//     var check=""
//     for(i=0 ; i < word.length ; i++){
//         check+=word[i]
//     }
//     if(check==word){
//         alert(word + " is a palindrome word")
//     }
//     else{
//         alert(word + " is not a palindrome word")
//     }
// }
// palindrome(prompt("Enter any word"))

// EX#11

// function stringUpperCase(str) {
//     var x="";
//     var sp=str.split(" ")
//     for(i=0; i< sp.length; i++){
//         x+=sp[i].slice(0,1).toUpperCase() + sp[i].slice(1).toLowerCase() + " "
//     }
//     document.write("Entered string :" + str + "<br>")
//     document.write("Expected Output : " + x)
// }
// stringUpperCase(prompt("Enter a string"))

// EX#12

// function longest(str){
//     var x=""
//     var y=0
//     var sp=str.split(" ")
//     for(i=0 ; i<sp.length ; i++){
//         if(sp[i].length > y){
//             x=sp[i]
//             y=x.length
//         }
//         else{
//             continue;
//         }
//     }
//     document.write("Entered String : " + str + "<br>")
//     document.write("Largest word : " + "'"+x+"'")
// }
// longest(prompt("Enter a string"))

// EX#13

// function occurence(str , l){
//     var s=0;
//     for(i=0; i<str.length ; i++){
//         if(str.slice(i,i+1)==l){
//         s++
//         }
//     } 
//     document.write(l  + " occurs " + "'"+s+"'" + " times in "+ str)   
// }
// occurence(prompt("Enter a string"), prompt("Enter a letter to find it's occurence in the entered string"))

// EX#14

// function calcCircum(r){
//     var pi=3.142
//     var C=2*pi*r
//     alert("The circumference is :" +C)
// }
// function calcArea(r){
//     var pi=3.142
//     var A=pi*r*r
//     alert("The Area is :" +A)
// }
// calcCircum(prompt("Enter the radius of circle"))
// calcArea(prompt("Enter the radius of circle"))

// ==========================================================================================



// CHAPTER#38-44

// EX#1

// function power(a,b){
//     c=1
//     for(var i=1 ; i<=b ; i++){
//         c=c*a
//     }
//     alert(c)
// }
// power(+prompt("enter number as a base :"), +prompt("Enter number as an exponent to base :"))

// EX#2

// function leapYear(year) {
//     if (((year % 4 == 0) && (year % 100 !=0)) || (year %400 ==0)){
//         alert("leap year")
//     }
//     else {
//         alert("Not a leap year")
//     }
// }
// leapYear(+prompt("Enter the year in 4 digit number"))

// EX#3

// function Area(a,b,c){
//     function arcLength(){
//         s=(a+b+c)/2
//     }
//     arcLength()
//     var A=(s*(s-a)*(s-b)*(s-c))
//     alert(A)
// }
// Area(+prompt("Enter a side of triangle : "), +prompt("Enter another side of triangle : ") , +prompt("Enter another side of triangle : "))

// EX#4

// function Student(a,b,c){
//     var avg;
//     var hr;
//     var prcntage;

//     function Avg(){
//         avg=(a+b+c)/3
//         return avg
//     }
//     function percentage(){
//         prcntage=(((a+b+c)/300)*100)
//         return prcntage
//     }
//     alert("Average is :" + Avg() + ", Percentage is : " + percentage()+"%" )
// }
// Student(+prompt("Enter marks of 1st subject :") , +prompt("Enter marks of 2nd subject :") , +prompt("Enter marks of 3rd subject :"))

// EX#5

// function IndexFinder(text , a){
//     var i;
//     i=0;
//     while(text.length){
//         if(text[i]==a){
//             alert("Index of " + a + " is " + i)
//             break
//         }
//         i++
//     }
// }
// IndexFinder(prompt("Enter the String"), prompt("Enter the character, you want to find index of "))

// EX#6

// function vowels(sent){
//     var i=0
//     var text=sent.toLowerCase()
//     document.write("Entered sentence : " + text + "<br>")
//     while(i<=text.length){
//         if((text[i]=="a") || (text[i]=="e") || (text[i]=="i") || (text[i]=="o") || (text[i]=="u")){
//             text=text.replace(text[i], "")
//         }
//         i++
//     }

//     document.write("Vowels free sentence : "+ text)
// }
// vowels(prompt("enter the sentence"))

// EX#7

// function vowelOccurrence(text) {
//     var occ = 0
//     var i = 0
//     while (i <= text.length) {
//         switch (text.slice(i, i + 2)) {
//             case "aa":
//             case "ae":
//             case "ai":
//             case "ao":
//             case "au":
//             case "ea":
//             case "ee":
//             case "ei":
//             case "eo":
//             case "eu":
//             case "ia":
//             case "ie":
//             case "ii":
//             case "io":
//             case "iu":
//             case "oa":
//             case "oe":
//             case "oi":
//             case "oo":
//             case "ou":
//             case "ua":
//             case "ue":
//             case "ui":
//             case "uo":
//             case "uu":
//                 occ++
//                 break;
//         }
//         i++
//     }
//     document.write("There are " + occ + " occurrences of consecutive vowels in the given text")
// }
// vowelOccurrence(prompt("Enter a text"))

// EX#8

// function conversion(dis) {
//     document.write("The given distance is : " + dis +"km" +"<br>")

//     function meter() {
//         var m = dis * 1000
//         document.write("The given distance in meter is : " + m +"m" + "<br>")
//     }
//     function feet() {
//         var f = dis * 3280.84
//         document.write("The given distance in feet is : " + f + "ft" + "<br>")
//     }
//     function inches() {
//         var i = dis * 39370.079
//         document.write("The given distance in inches is : " + i + "inch" + "<br>")
//     }
//     function centimeter() {
//         var c = dis * 100000
//         document.write("The given distance in centimeter is : " + c +"cm" + "<br>")
//     }
//     meter()
//     feet()
//     inches()
//     centimeter()
// }
// conversion(+prompt("Enter a distance in kilometers"))

// EX#9

// function overPay(hrs){
//     if(hrs==40){
//         alert("You didn't work overtime so no overpays")
//     }
//     else if(hrs>40){
//         var r=hrs-40
//         var o=r*12.00
//         alert("You worked for " + r + " hours of overtime so overtime pay is Rs." + o)
//     }
//     else{
//         alert("You have to work hard more")
//     }
// }
// overPay(+prompt("Enter the hours in numbers you worked"))

// EX#10

// function notes(value){
//     var i
//     var j
//     var k
//     i=Math.floor(value/100)
//     j=Math.floor((value%100)/50)
//     k=Math.floor(((value%100)%50)/10)
    
//     document.write("You will have " + i + " hundred notes " + j + " fifty notes and " + k + " ten notes.")
// }
// notes(+prompt("Enter amount you want to withdrawn :"))



// CHAPTER # 43 - 48


// EX#1

// function greet(){
//     alert("Welcome to the page !")
// }

// EX#2

// function display(){
//     alert("Thanks for purchasing this mobile phone from us")
// }

// EX#3

// function removing(row){
//     var row=row.parentNode.parentNode.remove()
// }

// EX#5

// var i=0;
// var val=document.getElementById("count")
// function inc(){
//     i++
//     val.innerHTML=i
// }
// function dec(){
//     i--
//     val.innerHTML=i
// }


// CHAPTER # 49 - 52

// EX#1

// function submission(){
//     var Name=document.getElementById("Name").value
//     var Email=document.getElementById("Email").value
//     var Contact=document.getElementById("Contact").value
//     document.write("You fed the following data : <br>" + Name +"<br>"+ Email +"<br>" +Contact)
// }

// EX#2

// function read(){
//     var text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque facere, tenetur est odio, commodieius in, temporibus aspernatur incidunt natus provident quibusdam earum ullam cumque ipsum corrupti praesentiumalias? Fugiat?"
//     var para1=document.getElementById("para")
//     para1.innerHTML=text
// }

// EX#3
// document.getElementById("name").style.display="none"
// document.getElementById("class").style.display="none"
// document.getElementById("save").style.display="none"
// document.getElementById("delete").style.display="block"

// function removing(row){
//         var row=row.parentNode.parentNode.remove()
//     }
// function edit(row){
//     document.getElementById("edit").style.display="none"
//     document.getElementById("delete").style.display="none"
//     document.getElementById("save").style.display="inline-block"
    


//     row=row.parentNode.parentNode
//     var td=row.getElementsByTagName("td")
//     td[1].remove()
//     td[2].remove()
//     document.getElementById("name").style.display="block"
//     document.getElementById("class").style.display="block"
// }
// function save(row){
    
//     row=row.parentNode.parentNode
//     var td=row.getElementsByTagName("td")
//     td[1].innerHTML=document.getElementById("name").value
//     td[2].innerHTML=document.getElementById("class").value
    
//     document.getElementById("save").style.display="none"
//     document.getElementById("edit").style.display="inline-block"
    
//     document.getElementById("name").style.display="none"
//     document.getElementById("class").style.display="none"
    
// }


// CHAPTER # 53-58 (MODAL)

// function modal(img){
//     document.getElementById("body").src=img.src
// }

// <!-- ZOOM IN AND ZOOM OUT QUESTION 

// var para=document.getElementById("para")

// function ZoomIn(){   
//     para.style.fontSize="10px"
    
// }
// function ZoomOut(){
//     para.style.fontSize="10px"
// }
// PROBLEM
// (NOT INCRAESING VALUE ON EACH CLICK)




// DOM

// Question # 1
// var ce=document.getElementById("main-content")

// console.log(ce.children[0])
// console.log(ce.children[1])
// console.log(ce.children[2])
// console.log(ce.children[3])
// console.log(ce.children[4])

// var c=document.getElementsByClassName("render")
// document.write(c[0].innerHTML)
// document.write(c[1].innerHTML)
// document.write(c[2].innerHTML)
// document.write(c[3].innerHTML)
// document.write(c[4].innerHTML)

// var fname=document.getElementById("first-name")
// fname.value="Saylani"

// var lname=document.getElementById("last-name")
// lname.value="Saylani2"

// var email=document.getElementById("email")
// email.value="Saylani@gmail.com"


// QUESTION #2

// console.log(document.getElementById("form-content").nodeType)

// console.log(document.getElementById("lastName").nodeType)
// var b=document.getElementById("lastName")
// console.log(b.childNodes[0].nodeType)

// console.log(b.childNodes[0]="Last Name : John")

// var t=document.getElementById("main-content")
// console.log(t.firstElementChild)
// console.log(t.lastElementChild)

// console.log(document.getElementById("lastName").nextElementSibling)
// console.log(document.getElementById("lastName").previousElementSibling)

// console.log(document.getElementById("email").parentNode)
// console.log(document.getElementById("email").nodeType)

