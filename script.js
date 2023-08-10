document.addEventListener('DOMContentLoaded', function () {
  initializeForm()
})

initializeForm = () => {
  initializeAdditionalChildrenFeature()

  document.getElementById('nameForm').addEventListener('submit', function (event) {
    event.preventDefault()
    const domain = 'https://localhost/'
    let bodyFields = {}
    bodyFields = getAlumniInformation()
    bodyFields.childrenInformation = getChildrenInformation()
    let body = JSON.stringify(bodyFields)

    // fetch(domain + 'Default_bbis/components/custom.ashx?handler=ZuriGroup.MSU.BBISHandlers.LegacyData_TEST', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(body),
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => {
    //     console.error('Error:', error)
    //   })

    document.getElementById('submitbody').textContent = body
  })

  getAlumniInformation = () => {
    return {
      firstName: document.getElementById('name').value,
      lastName: document.getElementById('last').value,
      maidenName: document.getElementById('maiden').value,
      relationship: document.getElementById('relationship').value,
      email: document.getElementById('email').value,
      confirmEmail: document.getElementById('confirmemail').value,
      areaCode: document.getElementById('areacode').value,
      phoneNumber: document.getElementById('phonenumber').value,
      classYear: document.getElementById('classyear').value,
    }
  }

  getChildrenInformation = () => {
    var childContainers = document.querySelectorAll('#childInformation')
    var childData = []
    childContainers.forEach((container) => {
      var child = {
        childName: container.querySelector('#childname').value,
        childMiddleName: container.querySelector('#childmiddle').value,
        childLastName: container.querySelector('#childlast').value,
        childSuffix: container.querySelector('#childsuffix').value,
        childPreferredName: container.querySelector('#childpreferredname').value,
        childDateOfBirth: container.querySelector('#childdob').value,
        childAddress1: container.querySelector('#childaddress1').value,
        childAddress2: container.querySelector('#childaddress2').value,
        childCity: container.querySelector('#childcity').value,
        childState: container.querySelector('#childstate').value,
        childZip: container.querySelector('#childzip').value,
        childCountry: container.querySelector('#childcountry').value,
        childEmail: container.querySelector('#childemail').value,
        childConfirmEmail: container.querySelector('#childemailcomfirm').value,
        childGradYear: container.querySelector('#childgradyear').value,
      }
      childData.push(child)
    })
    return childData
  }
}

initializeAdditionalChildrenFeature = () => {
  var childFormInstanceNumber = 1
  document.getElementById('addChildButton').addEventListener('click', function () {
    childFormInstanceNumber++
    var newChildFields = `
        <h3>Child ${childFormInstanceNumber}</h3>
        <div class="input-group">
        <label for="childname">First name</label>
        <input type="text" id="childname" name="childname" placeholder="First name" />
        </div>
        <div class="input-group">
          <label for="childmiddle">Middle name</label>
          <input type="text" id="childmiddle" name="childmiddle" placeholder="Middle name" />
        </div>
        <div class="input-group">
          <label for="childlast">Last name</label>
          <input type="text" id="childlast" name="childlast" placeholder="Last name" />
        </div>
        <div class="input-group">
          <label for="childsuffix">Suffix</label>
          <input type="text" id="childsuffix" name="childsuffix" placeholder="Suffix" />
        </div>
        <div class="input-group">
          <label for="childpreferredname">Preferred name</label>
          <input type="text" id="childpreferredname" name="childpreferredname" placeholder="Preferred name" />
        </div>
        <div class="input-group">
          <label for="childdob">Date of birth</label>
          <input type="text" id="childdob" name="childdob" placeholder="01/01/1900" />
        </div>
        <div class="input-group">
          <label for="childaddress1">Address 1</label>
          <input type="text" id="childaddress1" name="childaddress1" placeholder="Address 1" />
        </div>
        <div class="input-group">
          <label for="childaddress2">Address 2</label>
          <input type="text" id="childaddress2" name="childaddress2" placeholder="Address 2" />
        </div>
        <div class="input-group">
          <label for="childcity">City</label>
          <input type="text" id="childcity" name="childcity" placeholder="City" />
        </div>
        <div class="input-group">
          <label for="childstate">State</label>
          <input type="text" id="childstate" name="childstate" placeholder="State" />
        </div>
        <div class="input-group">
          <label for="childzip">Zip</label>
          <input type="text" id="childzip" name="childzip" placeholder="Zip" />
        </div>
        <div class="input-group">
          <label for="childcountry">Country</label>
          <input type="text" id="childcountry" name="childcountry" placeholder="Country" />
        </div>
        <div class="input-group">
          <label for="childemail">Email (if applicable)</label>
          <input type="text" id="childemail" name="childemail" placeholder="Email" />
        </div>
        <div class="input-group">
          <label for="childemailcomfirm">Confirm email</label>
          <input type="text" id="childemailcomfirm" name="childemailcomfirm" placeholder="Confirm email" />
        </div>
        <div class="input-group">
          <label for="childgradyear">High School Grad Year</label>
          <input type="text" id="childgradyear" name="childgradyear" placeholder="1900" />
        </div>
    `

    var childContainer = document.createElement('div')
    childContainer.id = 'childInformation'
    childContainer.innerHTML = newChildFields
    var existingDiv = document.getElementById('formFooter')
    var form = document.getElementById('nameForm')
    form.insertBefore(childContainer, existingDiv)
  })
}
