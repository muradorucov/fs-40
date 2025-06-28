const searchInput = document.querySelector("#searchInput");
const userCard = document.querySelector("#card")
const spinner = document.querySelector("#spinner")
const toast = document.querySelector("#toast-container")
let url = "https://api.github.com/users/";

domRender("cumsud-ismayilov")
searchInput.addEventListener("keyup", (e) => {
  const val = e.target.value.trim()
  if (e.key === "Enter") {
    domRender(val)
  }
})
let timer;

async function domRender(username) {
  spinner.classList.remove("hidden")
  try {
    const data = await getData(username)
    userCard.innerHTML = `
        <div class="flex gap-[40px] items-center">
        <a href="${data.html_url}" target="_blank">
          <img src="${data.avatar_url}" class="rounded-[50%] w-[100px] h-[100px]">
        </a>
          <div>
            <h2 class="text-[#ab4654] font-[800] text-[20px]">${data.name}</h2>
            ${data.twitter_username ? `<a href="https://x.com/${data.twitter_username}" class="text-[#287498]" target="_blank">@twitter ${data.twitter_username}</a>` :
        ' <p>Twitter username yoxdur</p>'
      }
          </div>
        </div>
        <p class="text-[20px] text-[tomato]">${data.bio || "Bio haqqında məlumat yoxdur"}</p>
        <p>Company: ${data.company || "Company haqqında  məlumat yoxdur"}</p>
        <p>Location: ${data.location || "Ünvan haqqında  məlumat yoxdur"}</p>
        <a href="${data.blog}" class="text-[#287498]" target="_blank">@Sosial şəbəkə: ${data.blog && new URL(data.blog).hostname
      }</a >
  `
    toast.innerHTML = "User uğurla tapıldı!"
  } catch (error) {
    toast.innerHTML = error
  }
  finally {
    spinner.classList.add("hidden")
    toast.classList.remove("hidden")
    timer = setTimeout(() => {
      toast.classList.add("hidden")
    }, 3000);
  }
}

async function getData(username) {
  const res = await fetch(url + username);
  const data = await res.json()
  if (data.message) {
    throw new Error("User tapılmadı!");
  }
  return data
}

toast.addEventListener("mouseenter", (e) => {
  clearTimeout(timer)
})
toast.addEventListener("mouseleave", (e) => {
  setTimeout(() => {
    toast.classList.add("hidden")
  }, 3000)
})