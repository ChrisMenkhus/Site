document.getElementById('nameForm').addEventListener('submit', function (event) {
  event.preventDefault()

  const domain = 'https://localhost'

  let body = JSON.stringify({
    firstName: document.getElementById('name').value,
    lastName: document.getElementById('last').value,
    maidenName: document.getElementById('maiden').value,
    relationship: document.getElementById('relationship').value,
    email: document.getElementById('email').value,
    confirmEmail: document.getElementById('confirmemail').value,
    areaCode: document.getElementById('areacode').value,
    phoneNumber: document.getElementById('phonenumber').value,
    classYear: document.getElementById('classyear').value,
    childName: document.getElementById('childname').value,
    childMiddleName: document.getElementById('childmiddle').value,
    childLastName: document.getElementById('childlast').value,
    childSuffix: document.getElementById('childsuffix').value,
    childPreferredName: document.getElementById('childpreferredname').value,
    childDateOfBirth: document.getElementById('childdob').value,
    childAddress1: document.getElementById('childaddress1').value,
    childAddress2: document.getElementById('childaddress2').value,
    childCity: document.getElementById('childcity').value,
    childState: document.getElementById('childstate').value,
    childZip: document.getElementById('childzip').value,
    childCountry: document.getElementById('childcountry').value,
    childEmail: document.getElementById('childemail').value,
    childConfirmEmail: document.getElementById('childemailcomfirm').value,
    childGradYear: document.getElementById('childgradyear').value,
  })

  console.log(body)

  document.getElementById('submitbody').textContent = body

  fetch('https://localhost/components/custom.ashx?handler=ZuriGroup.BBISHandlers.LegacyData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: name }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error('Error:', error)
    })
})
