// CRUD
const url = "https://northwind.vercel.app/api/suppliers"
const tbody = document.querySelector('#table-body');
const companyForm = document.querySelector("#companyForm");
const cancelBtn = document.querySelector("#cancel");
const createModal = document.querySelector("#createModal");
const newCompanyBtn = document.querySelector("#newCompanyBtn");
const saveBtn = document.querySelector("#save")
domRender();
let editId = null;

async function getAllData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error", error.message);
  }
  finally {
    console.log("finish");
  }
}

async function domRender() {
  const companies = await getAllData()
  tbody.innerHTML = ""
  companies.forEach(company => {
    tbody.innerHTML += `
      <div class="grid grid-cols-6">
        <div>${company.id}</div>
        <div>${company.companyName || "Məlumat yoxdur"}</div>
        <div>${company.contactName || "Məlumat yoxdur"}</div>
        <div>${company.contactTitle || "Məlumat yoxdur"}</div>
        <div>${company.address.street || "Məlumat yoxdur"}</div>
        <div class="flex gap-2">
          <button class="bg-blue-500 text-white px-4 py-2 rounded"
          onclick="editCompany(${company.id})">Edit</button>
          <button class="bg-red-500 text-white px-4 py-2 rounded disabled:bg-[#000]" onclick="deleteCompany(${company.id},this)">Delete</button>
        </div>
      </div>
 `
  });

}

companyForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const {
    companyName,
    contactName,
    contactTitle, city, street,
    country, phone, postalCode, region
  } = companyForm;

  const newCompany = {
    companyName: companyName.value,
    contactName: contactName.value,
    contactTitle: contactTitle.value,
    address: {
      city: city.value,
      street: street.value,
      country: country.value,
      phone: phone.value,
      postalCode: postalCode.value,
      region: region.value
    }
  }

  saveBtn.disabled = true
  if (editId) {
    fetch(`${url}/${editId}`, {
      method: "put",
      body: JSON.stringify(newCompany),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(() => domRender())
      .finally(() => {
        createModal.classList.add("hidden")
        saveBtn.disabled = false
        companyForm.reset()
        editId = null
      })
  } else {
    fetch(url, {
      method: "post",
      body: JSON.stringify(newCompany),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(() => domRender())
      .finally(() => {
        createModal.classList.add("hidden")
        saveBtn.disabled = false
        companyForm.reset()
      })
  }

})

cancelBtn.addEventListener("click", () => {
  createModal.classList.add("hidden")
})
newCompanyBtn.addEventListener("click", () => {
  createModal.classList.remove("hidden")
})

function deleteCompany(id, btn) {
  btn.disabled = true

  fetch(`${url}/${id}`, {
    method: "delete"
  }).then(() => domRender())
    .finally(() => btn.disabled = false)

}

function editCompany(id) {
  editId = id
  createModal.classList.remove("hidden")

  fetch(`${url}/${id}`).then(res => res.json())
    .then(data => {
      companyForm.contactName.value = data.companyName;
      companyForm.companyName.value = data.contactName;
      companyForm.contactTitle.value = data.contactTitle;
      companyForm.city.value = data.address.city;
      companyForm.street.value = data.address.street;
      companyForm.country.value = data.address.country;
      companyForm.phone.value = data.address.phone;
      companyForm.postalCode.value = data.address.postalCode;
      companyForm.region.value = data.address.region;
    })
}