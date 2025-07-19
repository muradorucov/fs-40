let url = "https://pixabay.com/api/?key=24090419-925e057925ba4cc124682bb5f&q=";
const search = document.querySelector("#search");
let a = "Nature";
async function fetchdata(query) {
  const response = await fetch(`${url}${query}`);
  const data = await response.json();
  return data.hits;
}
async function renderdata() {
  let data = await fetchdata(a);
  const container = document.querySelector("#hits");
  container.innerHTML = "";
  data.forEach((item) => {
    container.innerHTML += `
                <div class="shadow-lg rounded-md border border-[violet]"
                    bis_skin_checked="1">
                    <img
                        src="${item.webformatURL}"
                        alt class="w-full object-cover h-[300px]">
                    <div class="p-[20px]" bis_skin_checked="1">
                        <p class="mb-[10px] flex flex-wrap gap-[4px]">

                        </p>
                        <button>
                            <a
                                href="${item.largeImageURL}" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="size-6">
                                    <path stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
                                </svg>
                            </a>
                        </button>
                    </div>
                </div>
                `;
  });
}
renderdata();
search.addEventListener("keyup", (e) => {
  a = search.value;
  if (e.key == "Enter") {
    renderdata();
  }
});