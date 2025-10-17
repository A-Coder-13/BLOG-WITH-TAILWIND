        // Cards display
        let blog_card = document.getElementById("blog");
        for (let i = 0; i < blog.length; i++) {

            blog_card.innerHTML += `
            <div class="bg-fuchsia-100 shadow-lg rounded-t-xl">
                            <div>
                                <img src="${blog[i].thumbnail}" class="w-full h-[150px] rounded-t-xl" alt="">
                            </div>
                            <div class="flex p-3 text-xl text-fuchsia-800 font-medium gap-3 items-center">
                                <div class="bg-white rounded-[50%] p-1 ring-2 ring-fuchsia-800"><img src="${blog[i].image}
                                    " class="size-[30px] rounded[50%]" alt=""></div>
                                <div>
                                    <h1>${blog[i].title}</h1>
                                </div>
                            </div>
                           <div class="p-3">
                            <div>
                                <p class="text-sm">${blog[i].summary}</p>
                                <a href="Blogdetail.html?id=${blog[i].id}" class="text-fuchsia-800 font-medium py-3 hover:text-blue-700">Read more</a>
                            </div>
                            <div class="w-full flex justify-between text-slate-400 text-[11px]">
                                <p>Author: ${blog[i].author}</p>
                                <p>Posted on: ${blog[i].date}</p>
                            </div>
                           </div>
                        </div>
            `

        }


        // Show-Nav
        function shownav() {
            const navLink = document.getElementById("nav-link");
            const btn = document.getElementById("btn");
            const icon = btn.querySelector("i");

            // Toggle the nav visibility
            navLink.classList.toggle("hidden");

            // Toggle the icon between bars and xmark
            if (navLink.classList.contains("hidden")) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            } else {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            }
        }
