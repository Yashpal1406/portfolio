// =========================
// Smooth Scrolling
// =========================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior:"smooth"
        });

    });
});


// =========================
// Active Navbar Link
// =========================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-120;

        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});


// =========================
// Navbar Shadow on Scroll
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.boxShadow="0 5px 20px rgba(0,0,0,.5)";

    }

    else{

        header.style.boxShadow="none";

    }

});


// =========================
// Scroll Animation
// =========================

const revealElements=document.querySelectorAll("section");

function reveal(){

    revealElements.forEach(element=>{

        const windowHeight=window.innerHeight;

        const revealTop=element.getBoundingClientRect().top;

        const revealPoint=120;

        if(revealTop<windowHeight-revealPoint){

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();


// =========================
// Contact Form Validation
// =========================

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const name=document.querySelector("input[type='text']").value;

const email=document.querySelector("input[type='email']").value;

const message=document.querySelector("textarea").value;

if(name==""||email==""||message==""){

alert("Please fill all fields.");

return;

}

alert("Message Sent Successfully!");

form.reset();

});

}


// =========================
// Scroll To Top Button
// =========================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="20px";
topBtn.style.right="20px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#2563eb";
topBtn.style.color="white";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});