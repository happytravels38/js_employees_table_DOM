document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("body"),t=document.querySelector("table"),n=t.querySelectorAll("th"),a=-1,r=1,i=t.querySelector("tbody"),l=Array.from(i.querySelectorAll("tr"));n.forEach(function(e,t){e.addEventListener("click",function(){t!==a?(r=1,a=t):r*=-1,l.sort(function(e,n){var a=e.cells[t].textContent.trim(),i=n.cells[t].textContent.trim();return 3===t?(Number(a)-Number(i))*r:4===t?(parseFloat(a.replace(/[^0-9.-]+/g,""))-parseFloat(i.replace(/[^0-9.-]+/g,"")))*r:a.localeCompare(i)*r}),n.forEach(function(e){return e.classList.remove("ascending","descending")}),1===r?n[t].classList.add("ascending"):n[t].classList.add("descending"),i.innerHTML="",l.forEach(function(e){return i.appendChild(e)})})}),i.addEventListener("click",function(e){var t=e.target.closest("tr");t&&(i.querySelectorAll("tr.active").forEach(function(e){return e.classList.remove("active")}),t.classList.add("active"))});var u=document.createElement("form");u.setAttribute("id","form"),u.setAttribute("class","new-employee-form");var o=document.createElement("label");o.textContent="Name: ",u.appendChild(o);var d=document.createElement("input");d.setAttribute("data-qa","name"),d.setAttribute("name","name"),d.setAttribute("type","text"),d.setAttribute("required",""),o.appendChild(d);var c=document.createElement("label");c.textContent="Position: ",u.appendChild(c);var s=document.createElement("input");s.setAttribute("data-qa","position"),s.setAttribute("name","position"),s.setAttribute("type","text"),s.setAttribute("required",""),c.appendChild(s);var m=document.createElement("label");m.textContent="Office: ";var p=document.createElement("select");p.setAttribute("data-qa","office"),[{value:"Tokyo",text:"Tokyo"},{value:"Singapore",text:"Singapore"},{value:"London",text:"London"},{value:"New York",text:"New York"},{value:"San Francisco",text:"San Francisco"},{value:"Edinburgh",text:"Edinburgh"}].forEach(function(e){var t=document.createElement("option");t.value=e.value,t.textContent=e.text,p.appendChild(t)}),m.appendChild(p),p.setAttribute("required",""),u.appendChild(m);var v=document.createElement("label");v.textContent="Age: ",u.appendChild(v);var b=document.createElement("input");b.setAttribute("data-qa","age"),b.setAttribute("name","age"),b.setAttribute("type","number"),b.setAttribute("required",""),v.appendChild(b);var f=document.createElement("label");f.textContent="Salary: ",u.appendChild(f);var h=document.createElement("input");function E(e){var t=e.replace(/[^0-9]/g,"");return t?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}).format(parseInt(t)):""}function C(t,n,a){var r=document.createElement("div");r.classList.add("notification",t),r.setAttribute("data-qa","notification");var i=document.createElement("span");i.classList.add("title"),i.textContent=n;var l=document.createElement("p");l.textContent=a,r.appendChild(i),r.appendChild(l),e.appendChild(r),setTimeout(function(){e.removeChild(r)},3e3)}h.setAttribute("data-qa","salary"),h.setAttribute("name","salary"),h.setAttribute("type","text"),h.setAttribute("required",""),f.appendChild(h),h.addEventListener("input",function(e){e.target.value=E(e.target.value)}),h.addEventListener("blur",function(e){e.target.value=E(e.target.value)}),h.addEventListener("input",function(){var e=h.selectionStart,t=h.value.length;h.value=E(h.value);var n=h.value.length;h.setSelectionRange(e+(n-t),e+(n-t))}),h.addEventListener("blur",function(){h.value=E(h.value)});var A=document.createElement("button");A.textContent="Save to table",A.setAttribute("type","submit"),A.setAttribute("data-qa","save-button"),A.addEventListener("click",function(e){e.preventDefault();var t=d.value.trim(),n=parseInt(b.value.trim(),10),a=s.value.trim();if(t.length<4){C("error","Invalid Data","Name must be at least 4 characters long.");return}if(isNaN(n)||n<18||n>90){C("error","Invalid Age","Age must be between 18 and 90.");return}if(!a){C("error","Position undefrined","Position should be added.");return}var r=document.createElement("tr");i.appendChild(r),u.querySelectorAll("input, select").forEach(function(e){var t=document.createElement("td");t.textContent=e.value,r.appendChild(t)}),C("success","Employee Added","New employee successfully added to the table."),u.reset()}),u.appendChild(A),e.appendChild(u)});
//# sourceMappingURL=index.aa85cb12.js.map
