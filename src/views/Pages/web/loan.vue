<template>
    <div>
        <section class="loan-application">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="loan-card">
            <h6 class="p-lg my-0 text-uppercase">Loan Application</h6>
          </div>
            <form-wizard  id="msform" @onComplete="submit">
            <!-- fieldsets -->
            <tab-content title="" :selected="true">
              <div class="row">
                <div class="col-md-6">
                  <label for="">Loan type <span class="red-text">*</span></label>
                  <select name="" v-model="formData.loan_type" id="" class="site-input"
                    :class="hasError('loan_type') ? 'is-invalid': ''">
                    <option value="" selected disabled>Select Loan type</option>
                    <option value="DealerPurchase">Dealer purchase</option>
                    <option value="Refinance">Refinance</option>
                    <option value="LeaseBuyout">Lease buyout</option>
                    <option value="PrivateParty">Private party</option>
                  </select>
                    <div v-if=" hasError('loan_type')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.loan_type.required">
                            Loan type is required.
                        </div>
                    </div>
                </div>
                <div class="col-12 mt-4">
                  <p class="p-md mb-0" :class="hasError('customer') ? 'is-invalid': ''">Are you a Caryours customer?</p>
                  <p class="black-text mt-2 mb-0">
                    <input type="checkbox" v-model="formData.customer" id="loan1" name="radio-group-11" value="Yes">
                    <label for="loan1" class="bordered mb-0">Yes. Prefill and customize my application with my account information.</label>
                  </p>
                  <div v-if=" hasError('customer')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.customer.required">
                            Are you cutomer caryours is required.
                        </div>
                    </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <hr class="my-3">
                </div>
                <div class="col-12">
                  <p class="p-md mb-0">About the car</p>
                </div>
              </div>
              <div class="row align-items-end">
                <div class="col-md-6 mt-2">
                  <label for="">Make <span class="red-text">*</span></label>
                  <input type="text" name="" v-model="formData.make" class="site-input" id="" :class="hasError('make') ? 'is-invalid': ''">
                  <div v-if=" hasError('make')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.make.required">
                            make is required.
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mt-2">
                  <label for="">Model <span class="red-text">*</span></label>
                  <input type="text" name="" v-model="formData.model" class="site-input" id="" :class="hasError('model') ? 'is-invalid': ''">
                  <div v-if=" hasError('model')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.model.required">
                            model is required.
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mt-2">
                  <label for="">Mileage <span class="red-text">*</span></label>
                  <input type="text" name="" v-model="formData.mileage" class="site-input" id="" :class="hasError('mileage') ? 'is-invalid': ''">
                  <div v-if=" hasError('mileage')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.mileage.required">
                            mileage is required.
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mt-2">
                  <label for="">Year <span class="red-text">*</span></label>
                  <input type="text" name="" v-model="formData.year" class="site-input" id="" :class="hasError('year') ? 'is-invalid': ''">
                  <div v-if=" hasError('year')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.year.required">
                            year is required.
                        </div>
                    </div>
                </div>
                <!-- <div class="col-md-6 mt-2">
                  <button class="site-btn">Lookup Vehicle</button>
                </div> -->
              </div>
              <div class="row">
                <div class="col-12">
                  <hr class="my-3">
                </div>
                <div class="col-12">
                  <p class="p-md mb-0">About the loan</p>
                  <p class="p-sm mt-2">You can request a change to the loan amount once you have the final price or payoff of the car. Changes may affect your approval and loan terms.</p>
                </div>
              </div>
              <div class="row align-items-end">
                <div class="col-md-6 mt-2">
                  <label for="">Loan amount <span class="red-text">*</span></label>
                  <input type="text" name="" v-model="formData.loan_amount" class="site-input" id="" :class="hasError('loan_amount') ? 'is-invalid': ''">
                  <div v-if=" hasError('loan_amount')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.loan_amount.required">
                            loan amount is required.
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mt-2">
                  <label for="">Loan term <span class="red-text">*</span></label>
                  <select name="" id="" v-model="formData.loan_term" class="site-input" :class="hasError('loan_term') ? 'is-invalid': ''">
                    <option value="" selected disabled>Loan term</option>
                    <option value="48 months">48 months</option>
                    <option value="60 months">60 months</option>
                    <option value="72 months">72 months</option>
                  </select>
                  <div v-if=" hasError('loan_term')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.loan_term.required">
                            loan term is required.
                        </div>
                    </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <hr class="my-3">
                </div>
                <div class="col-12">
                  <p class="p-md mb-0">About You</p>
                  <p class="p-sm mt-2">Caryours, like all financial institutions, is required by federal law to obtain, verify, and record information that identifies each customer who opens an account with us. When you open an account with us, we will ask for your name, address and other information that will allow us to identify you.</p>
                </div>
              </div>
              <div class="row align-items-end">
                <div class="col-md-6 mt-2">
                  <label for="">First name <span class="red-text">*</span></label>
                  <input type="text" name="" v-model="formData.first_name" class="site-input" id="" :class="hasError('first_name') ? 'is-invalid': ''">
                  <div v-if=" hasError('first_name')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.first_name.required">
                            first name is required.
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mt-2">
                  <label for="">Middle name</label>
                  <input type="text" name="" v-model="formData.middle_name" class="site-input" id="" :class="hasError('middle_name') ? 'is-invalid': ''">
                  <div v-if=" hasError('middle_name')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.middle_name.required">
                            middle name is required.
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mt-2">
                  <label for="">Last name <span class="red-text">*</span></label>
                  <input type="text" name="" v-model="formData.last_name" class="site-input" id="" :class="hasError('last_name') ? 'is-invalid': ''">
                  <div v-if=" hasError('last_name')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.last_name.required">
                            last name is required.
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mt-2">
                  <label for="">Suffix <span class="red-text">*</span></label>
                  <select name="" id="" v-model="formData.suffix" class="site-input" :class="hasError('suffix') ? 'is-invalid': ''">
                    <option value="" selected disabled>Select Suffix</option>
                    <option value="Jr">Jr</option>
                    <option value="Sr">Sr</option>
                  </select>
                  <div v-if=" hasError('suffix')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.suffix.required">
                            suffix is required.
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mt-2">
                  <label for="">Address Number <span class="red-text">*</span></label>
                  <input type="text" name="" v-model="formData.address_number" class="site-input" id="" :class="hasError('address_number') ? 'is-invalid': ''">
                  <div v-if=" hasError('address_number')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.address_number.required">
                            address number is required.
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mt-2">
                  <label for="">Street Name <span class="red-text">*</span></label>
                  <input type="text" name="" v-model="formData.streets" class="site-input" id="" :class="hasError('streets') ? 'is-invalid': ''">
                  <div v-if=" hasError('streets')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.streets.required">
                            street is required.
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mt-2">
                  <label for="">Apartment #</label>
                  <input type="text" name="" v-model="formData.appartment" class="site-input" id="" :class="hasError('appartment') ? 'is-invalid': ''">
                  <div v-if=" hasError('appartment')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.appartment.required">
                            street is required.
                        </div>
                    </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mt-2">
                  <label for="">City <span class="red-text">*</span></label>
                  <input type="text" name="" v-model="formData.city" class="site-input" id="" :class="hasError('city') ? 'is-invalid': ''">
                  <div v-if=" hasError('city')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.city.required">
                            street is required.
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mt-2">
                  <label for="">State <span class="red-text">*</span></label>
                  <select name="" id="" v-model="formData.state" class="site-input" :class="hasError('city') ? 'is-invalid': ''">
                    <option value="" selected disabled>Select State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                  <div v-if=" hasError('state')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.state.required">
                            street is required.
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mt-2">
                  <label for="">Zip Code <span class="red-text">*</span></label>
                  <input type="number" name="" v-model="formData.zip_code" class="site-input" id="" :class="hasError('zip_code') ? 'is-invalid': ''">
                  <div v-if=" hasError('zip_code')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.zip_code.required">
                            zip_code is required.
                        </div>
                    </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mt-2">
                  <label for="">Time at this address <span class="red-text">*</span></label>
                  <select name="" id="" v-model="formData.time_of_address" class="site-input" :class="hasError('time_of_address') ? 'is-invalid': ''">
                    <option value="">Select Time</option>
                    <option value="0">Less than 1 year</option>
                    <option value="1">1 year</option>
                    <option value="2">2 years</option>
                    <option value="3">3 years</option>
                    <option value="4">4 years</option>
                    <option value="5">5 years</option>
                    <option value="6">6 years</option>
                    <option value="7">7 years</option>
                    <option value="8">8 years</option>
                    <option value="9">9 years</option>
                    <option value="10">10 years</option>
                    <option value="11">11 years or more</option>
                  </select>
                  <div v-if=" hasError('time_of_address')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.time_of_address.required">
                            time of address is required.
                        </div>
                    </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mt-2">
                  <label for="">Home phone number <span class="red-text">*</span></label>
                  <input type="number" v-model="formData.home_address" class="site-input" :class="hasError('home_address') ? 'is-invalid': ''">
                  <div v-if=" hasError('home_address')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.home_address.required">
                            home phone number is required.
                        </div>
                    </div>
                </div>
                <div class="col-md-9 mt-2">
                  <p class="p-sm mb-0">Note: The phone number supplied may be used to leave a detailed message regarding your loan. If you are providing a mobile phone number, by submitting your application, you are providing consent to receive text messages on the mobile number provided</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mt-2">
                  <label for="">Email Address <span class="red-text">*</span></label>
                  <input type="email"  v-model="formData.email_address" class="site-input" :class="hasError('email_address') ? 'is-invalid': ''">
                  <div v-if=" hasError('email_address')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.email_address.required">
                            email address is required.
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mt-2">
                  <label for="">Re-enter Email Address <span class="red-text">*</span></label>
                  <input type="email" class="site-input">
                </div>
                <div class="col-md-6 mt-2">
                  <label for="">Are you a US Citizen? <span class="red-text">*</span></label>
                  <div class="d-flex align-items-center" :class="hasError('us_citizen') ? 'is-invalid': ''">
                    <div class="form-check mt-2" >
                      <input class="form-check-input" v-model="formData.us_citizend" type="radio" value="Yes" name="citizen" id="citizen-1">
                      <label class="form-check-label l-grey-text" for="citizen-1">Yes</label>

                    </div>
                    <div class="form-check ms-3 mt-2" >
                      <input class="form-check-input" v-model="formData.us_citizen" type="radio" value="No" name="citizen" id="citizen-2" >
                      <label class="form-check-label l-grey-text" for="citizen-2">No</label>

                    </div>

                  </div>
                  <div v-if=" hasError('us_citizen')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.us_citizen.required">
                            us citizen is required.
                        </div>
                    </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 mt-2">
                  <label for="">Do you have a dual citizenship? <span class="red-text">*</span></label>
                  <div class="d-flex align-items-center" :class="hasError('dual_citizen') ? 'is-invalid': ''">
                    <div class="form-check mt-2" >
                      <input class="form-check-input" v-model="formData.dual_citizen" type="radio" value="Yes" name="citizenship" id="citizen-3">
                      <label class="form-check-label l-grey-text" for="citizen-3">Yes</label>

                    </div>
                    <div class="form-check ms-3 mt-2">
                      <input class="form-check-input" v-model="formData.dual_citizen" type="radio" value="No" name="citizenship" id="citizen-4">
                      <label class="form-check-label l-grey-text" for="citizen-4">No</label>
                    </div>

                  </div>
                  <div v-if=" hasError('dual_citizen')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.dual_citizen.required">
                            dual citizen is required.
                        </div>
                    </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mt-2">
                  <label for="">Country of residence <span class="red-text">*</span></label>
                  <select name="" v-model="formData.country" id="" class="site-input" :class="hasError('country') ? 'is-invalid': ''">
                    <option value="" selected disabled>Select Country</option>
                    <option value="1000249">United States</option>
                    <option value="1000003">Afghanistan</option>
                    <option value="1000006">Albania</option>
                    <option value="1000004">Algeria</option>
                    <option value="1000008">Andorra</option>
                    <option value="1000009">Angola</option>
                    <option value="1000015">Anguilla</option>
                    <option value="1000002">Antigua and Barbuda</option>
                    <option value="1000011">Argentina</option>
                    <option value="1000007">Armenia</option>
                    <option value="1000001">Aruba</option>
                    <option value="1000012">Australia</option>
                    <option value="1000014">Austria</option>
                    <option value="1000005">Azerbaijan</option>
                    <option value="1000022">Bahamas (the)</option>
                    <option value="1000017">Bahrain</option>
                    <option value="1000023">Bangladesh</option>
                    <option value="1000018">Barbados</option>
                    <option value="1000029">Belarus</option>
                    <option value="1000021">Belgium</option>
                    <option value="1000024">Belize</option>
                    <option value="1000028">Benin</option>
                    <option value="1000020">Bermuda</option>
                    <option value="1000034">Bhutan</option>
                    <option value="1000026">Bolivia, Plurinational State of</option>
                    <option value="1000302">Bonaire, Sint Eustatius and Saba</option>
                    <option value="1000025">Bosnia and Herzegovina</option>
                    <option value="1000019">Botswana</option>
                    <option value="1000032">Brazil</option>
                    <option value="1000037">Brunei Darussalam</option>
                    <option value="1000035">Bulgaria</option>
                    <option value="1000250">Burkina Faso</option>
                    <option value="1000027">Burma</option>
                    <option value="1000038">Burundi</option>
                    <option value="1000057">Cabo Verde (Cape Verde)</option>
                    <option value="1000040">Cambodia</option>
                    <option value="1000049">Cameroon</option>
                    <option value="1000039">Canada</option>
                    <option value="1000047">Cayman Islands (the)</option>
                    <option value="1000055">Central African Republic (the)</option>
                    <option value="1000041">Chad</option>
                    <option value="1000046">Chile</option>
                    <option value="1000045">China</option>
                    <option value="1000134">Christmas Island</option>
                    <option value="1000048">Cocos (Keeling) Islands (the)</option>
                    <option value="1000051">Colombia</option>
                    <option value="1000050">Comoros</option>
                    <option value="1000043">Congo, Republic of (Brazzaville)</option>
                    <option value="1000044">Congo, The Democratic Republic of (Kinshasa)</option>
                    <option value="1000058">Cook Islands (the)</option>
                    <option value="1000054">Costa Rica</option>
                    <option value="1000119">Cote D'Ivoire (Ivory Coast)</option>
                    <option value="1000108">Croatia</option>
                    <option value="1000056">Cuba</option>
                    <option value="1000182">Curacao</option>
                    <option value="1000059">Cyprus (Republic of)</option>
                    <option value="1000074">Czech Republic (the)</option>
                    <option value="1000060">Denmark</option>
                    <option value="1000061">Djibouti</option>
                    <option value="1000062">Dominica</option>
                    <option value="1000064">Dominican Republic (the)</option>
                    <option value="1000065">Ecuador</option>
                    <option value="1000066">Egypt</option>
                    <option value="1000071">El Salvador</option>
                    <option value="1000068">Equatorial Guinea</option>
                    <option value="1000070">Eritrea</option>
                    <option value="1000069">Estonia</option>
                    <option value="1000266">Eswatini</option>
                    <option value="1000072">Ethiopia</option>
                    <option value="1000079">Falkland Islands (the) [Islas Malvinas]</option>
                    <option value="1000081">Faroe Islands (the)</option>
                    <option value="1000078">Fiji</option>
                    <option value="1000077">Finland</option>
                    <option value="1000084">France</option>
                    <option value="1000310">French Guiana</option>
                    <option value="1000082">French Polynesia</option>
                    <option value="1000087">Gabon</option>
                    <option value="1000086">Gambia (The Republic of)</option>
                    <option value="1000088">Georgia</option>
                    <option value="1000094">Germany</option>
                    <option value="1000089">Ghana</option>
                    <option value="1000090">Gibraltar</option>
                    <option value="1000098">Greece</option>
                    <option value="1000093">Greenland</option>
                    <option value="1000091">Grenada</option>
                    <option value="1000096">Guadeloupe</option>
                    <option value="1000099">Guatemala</option>
                    <option value="1000092">Guernsey</option>
                    <option value="1000100">Guinea</option>
                    <option value="1000197">Guinea-Bissau</option>
                    <option value="1000101">Guyana</option>
                    <option value="1000103">Haiti</option>
                    <option value="1000106">Honduras</option>
                    <option value="1000104">Hong Kong</option>
                    <option value="1000109">Hungary</option>
                    <option value="1000110">Iceland</option>
                    <option value="1000113">India</option>
                    <option value="1000111">Indonesia</option>
                    <option value="1000116">Iran (the Islamic Republic of)</option>
                    <option value="1000120">Iraq</option>
                    <option value="1000067">Ireland</option>
                    <option value="1000112">Isle of Man</option>
                    <option value="1000117">Israel</option>
                    <option value="1000118">Italy</option>
                    <option value="1000123">Jamaica</option>
                    <option value="1000124">Jan Mayen</option>
                    <option value="1000121">Japan</option>
                    <option value="1000122">Jersey</option>
                    <option value="1000125">Jordan</option>
                    <option value="1000136">Kazakhstan</option>
                    <option value="1000128">Kenya</option>
                    <option value="1000132">Kiribati</option>
                    <option value="1000130">Korea, Democratic People's Republic of (North)</option>
                    <option value="1000133">Korea, Republic of (South)</option>
                    <option value="1000315">Kosovo</option>
                    <option value="1000135">Kuwait</option>
                    <option value="1000129">Kyrgyzstan</option>
                    <option value="1000137">Lao People's Democratic Republic (the) [Laos]</option>
                    <option value="1000139">Latvia</option>
                    <option value="1000138">Lebanon</option>
                    <option value="1000145">Lesotho</option>
                    <option value="1000141">Liberia</option>
                    <option value="1000147">Libya</option>
                    <option value="1000144">Liechtenstein</option>
                    <option value="1000140">Lithuania</option>
                    <option value="1000146">Luxembourg</option>
                    <option value="1000150">Macao (Macau)</option>
                    <option value="1000148">Madagascar</option>
                    <option value="1000155">Malawi</option>
                    <option value="1000169">Malaysia</option>
                    <option value="1000166">Maldives</option>
                    <option value="1000157">Mali</option>
                    <option value="1000164">Malta</option>
                    <option value="1000200">Marshall Islands (The Republic of)</option>
                    <option value="1000149">Martinique</option>
                    <option value="1000163">Mauritania</option>
                    <option value="1000161">Mauritius</option>
                    <option value="1000152">Mayotte</option>
                    <option value="1000168">Mexico</option>
                    <option value="1000080">Micronesia (the Federated States of)</option>
                    <option value="1000151">Moldova (the Republic of)</option>
                    <option value="1000159">Monaco</option>
                    <option value="1000153">Mongolia</option>
                    <option value="1000167">Montenegro</option>
                    <option value="1000154">Montserrat</option>
                    <option value="1000160">Morocco</option>
                    <option value="1000170">Mozambique</option>
                    <option value="1000158">Myanmar (the Republic of the Union of)</option>
                    <option value="1000260">Namibia</option>
                    <option value="1000180">Nauru</option>
                    <option value="1000179">Nepal</option>
                    <option value="1000177">Netherlands (the)</option>
                    <option value="1000171">New Caledonia</option>
                    <option value="1000184">New Zealand</option>
                    <option value="1000183">Nicaragua</option>
                    <option value="1000174">Niger (the Republic of)</option>
                    <option value="1000176">Nigeria</option>
                    <option value="1000172">Niue</option>
                    <option value="1000173">Norfolk Island</option>
                    <option value="1000156">North Macedonia</option>
                    <option value="1000178">Norway</option>
                    <option value="1000165">Oman</option>
                    <option value="1000191">Pakistan</option>
                    <option value="1000196">Palau</option>
                    <option value="1000279">Palestine, State of</option>
                    <option value="1000193">Panama</option>
                    <option value="1000195">Papua New Guinea</option>
                    <option value="1000189">Paracel Islands</option>
                    <option value="1000186">Paraguay</option>
                    <option value="1000188">Peru</option>
                    <option value="1000202">Philippines (Republic of the)</option>
                    <option value="1000187">Pitcairn Islands</option>
                    <option value="1000192">Poland</option>
                    <option value="1000194">Portugal</option>
                    <option value="1000198">Qatar</option>
                    <option value="1000199">Reunion</option>
                    <option value="1000201">Romania</option>
                    <option value="1000204">Russian Federation (the)</option>
                    <option value="1000205">Rwanda</option>
                    <option value="1000265">Samoa</option>
                    <option value="1000215">San Marino</option>
                    <option value="1000236">Sao Tome and Principe</option>
                    <option value="1000206">Saudi Arabia</option>
                    <option value="1000211">Senegal</option>
                    <option value="1000219">Serbia</option>
                    <option value="1000209">Seychelles</option>
                    <option value="1000214">Sierra Leone</option>
                    <option value="1000216">Singapore</option>
                    <option value="1000142">Slovakia</option>
                    <option value="1000213">Slovenia</option>
                    <option value="1000030">Solomon Islands (the)</option>
                    <option value="1000217">Somalia</option>
                    <option value="1000210">South Africa</option>
                    <option value="1000280">South Sudan</option>
                    <option value="1000218">Spain</option>
                    <option value="1000042">Sri Lanka</option>
                    <option value="1000281">St. Barthelemy</option>
                    <option value="1000208">St. Christopher (St. Kitts) and Nevis</option>
                    <option value="1000212">St. Helena</option>
                    <option value="1000220">St. Lucia</option>
                    <option value="1000283">St. Maarten (Dutch part)</option>
                    <option value="1000282">St. Martin (French part)</option>
                    <option value="1000207">St. Pierre and Miquelon</option>
                    <option value="1000253">St. Vincent and the Grenadines</option>
                    <option value="1000221">Sudan (Republic of the)</option>
                    <option value="1000181">Suriname</option>
                    <option value="1000222">Svalbard</option>
                    <option value="1000223">Sweden</option>
                    <option value="1000226">Switzerland</option>
                    <option value="1000225">Syrian Arab Republic (Syria)</option>
                    <option value="1000241">Taiwan </option>
                    <option value="1000231">Tajikistan</option>
                    <option value="1000243">Tanzania, United Republic of</option>
                    <option value="1000230">Thailand</option>
                    <option value="1000238">Timor-Leste</option>
                    <option value="1000235">Togo</option>
                    <option value="1000233">Tokelau</option>
                    <option value="1000234">Tonga</option>
                    <option value="1000228">Trinidad and Tobago</option>
                    <option value="1000237">Tunisia</option>
                    <option value="1000239">Turkey</option>
                    <option value="1000242">Turkmenistan</option>
                    <option value="1000232">Turks and Caicos Islands (the)</option>
                    <option value="1000240">Tuvalu</option>
                    <option value="1000246">Uganda</option>
                    <option value="1000248">Ukraine</option>
                    <option value="1000227">United Arab Emirates (the)</option>
                    <option value="1000247">United Kingdom</option>
                    <option value="1000251">Uruguay</option>
                    <option value="1000252">Uzbekistan</option>
                    <option value="1000175">Vanuatu</option>
                    <option value="1000259">Vatican City (Holy See)</option>
                    <option value="1000254">Venezuela (Bolivarian Republic of)</option>
                    <option value="1000256">Vietnam</option>
                    <option value="1000255">Virgin Islands (British)</option>
                    <option value="1000262">Wallis and Futuna</option>
                    <option value="1000263">Western Sahara</option>
                    <option value="1000267">Yemen (Republic of)</option>
                    <option value="1000270">Zambia</option>
                    <option value="1000271">Zimbabwe</option>
                  </select>
                  <div v-if=" hasError('country')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.country.required">
                             country is required.
                        </div>
                    </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mt-2">
                  <label for="">Date of birth <span class="red-text">*</span></label>
                  <input type="date" name="" v-model="formData.dat_of_birthday" id="" class="site-input" :class="hasError('dat_of_birthday') ? 'is-invalid': ''">
                  <div v-if=" hasError('dat_of_birthday')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.dat_of_birthday.required">
                            date of birthday is required.
                        </div>
                    </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 mt-3">
                  <p class="p-md mb-0">Mother's maiden name</p>
                  <p class="p-sm mb-0">We'll use it to verify your identity when you're checking your application status.</p>
                </div>
                <div class="col-md-6 mt-2">
                  <label for="">Mother's maiden name <span class="red-text">*</span></label>
                  <input type="text" name="" id="" v-model="formData.mother_median" class="site-input" :class="hasError('mother_median') ? 'is-invalid': ''">
                  <div v-if=" hasError('mother_median')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.mother_median.required">
                            mother median is required.
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mt-2">
                  <label for="">Confirm maiden name <span class="red-text">*</span></label>
                  <input type="text" name="" id="" class="site-input" >
                  <div v-if=" hasError('dat_of_birthday')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.dat_of_birthday.required">
                            date of birthday is required.
                        </div>
                    </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <hr class="my-3">
                </div>
                <div class="col-12">
                  <p class="p-md">Employment & finances</p>
                </div>
                <div class="col-12">
                  <p class="black-text mb-0">
                    <input type="checkbox" id="employment" v-model="formData.employment_finance" name="employment" :class="hasError('employment_finance') ? 'is-invalid': ''">
                    <label for="employment" class="bordered mb-0">I'm an active or retired Bank of America employee</label>
                    <div v-if=" hasError('employment_finance')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.employment_finance.required">
                            employement & finace  is required.
                        </div>
                    </div>
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mt-2">
                  <label for="">Employment status <span class="red-text">*</span></label>
                  <select name="" id="" v-model="formData.employment_status" class="site-input" :class="hasError('employment_status') ? 'is-invalid': ''">
                    <option value="" selected disabled>Select Status</option>
                    <option value="Employed">Employed</option>
                    <option value="Retired">Retired</option>
                    <option value="SelfEmployed">Self-employed</option>
                    <option value="Unemployed">Not employed</option>
                    <option value="HomeMaker">Homemaker</option>
                    <option value="StudentEmployed">Student / Employed</option>
                    <option value="StudentNotEmployed">Student / Not employed</option>
                  </select>
                  <div v-if=" hasError('employment_status')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.employment_status.required">
                            employment status is required.
                        </div>
                    </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mt-2">
                  <label for="">Housing status <span class="red-text">*</span></label>
                  <select name="" id="" v-model="formData.housing_status" class="site-input" :class="hasError('housing_status') ? 'is-invalid': ''">
                    <option value="" selected disabled>Select Status</option>
                    <option value="Rent">I rent</option>
                    <option value="Own">I own</option>
                    <option value="LiveWithFamily">I live with my family</option>
                    <option value="Military">I'm in the military</option>
                  </select>
                  <div v-if=" hasError('housing_status')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.housing_status.required">
                           housing status is required.
                        </div>
                    </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mt-2">
                  <label for="">Monthly housing payment <span class="red-text">*</span></label>
                  <input type="number" v-model="formData.monthly_house_pay" class="site-input" :class="hasError('monthly_house_pay') ? 'is-invalid': ''">
                  <div v-if=" hasError('monthly_house_pay')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.monthly_house_pay.required">
                            monthly housing payment is required.
                        </div>
                    </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <hr>
                </div>
                <div class="col-12">
                  <p class="p-md mb-0">Adding a co-applicant</p>
                </div>
                <div class="col-12 mt-2">
                  <label for="">Are you applying individually or jointly? <span class="red-text">*</span></label>
                  <div class="d-flex align-items-center" :class="hasError('family_type') ? 'is-invalid': ''">
                    <div class="form-check mt-2">
                      <input class="form-check-input" v-model="formData.family_type" type="radio" value="individually" name="applying" id="citizen-5">
                      <label class="form-check-label l-grey-text" for="citizen-5">Individually</label>

                    </div>
                    <div class="form-check ms-3 mt-2">
                      <input class="form-check-input" type="radio" v-model="formData.family_type" value="jointly" name="applying" id="citizen-6">
                      <label class="form-check-label l-grey-text" for="citizen-6">Jointly</label>
                    </div>
                  </div>
                  <div v-if=" hasError('family_type')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.family_type.required">
                           family type is required.
                        </div>
                    </div>
                </div>
                <div class="col-12 mt-4">
                  <p class="mb-0">If you have a promo code, enter it here.</p>
                </div>
                <div class="col-md-6 mt-3">
                  <label for="">Promo code</label>
                  <input type="text" class="site-input" v-model="formData.promo_code" :class="hasError('promo_code') ? 'is-invalid': ''" >
                  <div v-if=" hasError('promo_code')" class="invalid-feedback">
                        <div class="error" v-if="!$v.formData.promo_code.required">
                            promo code is required.
                        </div>
                    </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <hr>
                </div>
                <div class="col-12">
                  <p class="mb-0 p-md">Go Paperless</p>
                  <p class="mt-2">Opt-in to receive your statements and documents online instead of receiving paper statements. An
                    email notification will be sent when your statement is available. You can view and download your
                    statements or change your paperless settings in Mobile or Online Banking.
                  </p>
                </div>
                <div class="col-12 mt-3">
                  <p class="black-text mb-0">
                    <input type="checkbox" id="employment-3" name="employment2">
                    <label for="employment-3" class="bordered mb-0">Yes, I want to receive paperless auto loan statements and documents. I understand the Online Banking
                      eCommunications Disclosure governs my consent to receive paperless communications regarding my account.</label>
                  </p>
                </div>
              </div>
            </tab-content>
            <tab-content>
              <h5 class="blue-text text-uppercase bold">Electronic Consumer Information consent</h5>
              <p class="mb-2 mt-3">To receive the Consumer Information electronically, scroll to read the complete disclosure and then select I consent on this page.</p>
              <p class="mb-2">As part of your online auto loan application, Bank of America, N.A., is required by law to provide you with certain
                Consumer Information. You have the right to receive the Consumer Information on paper. With your consent, we
                may provide the Consumer Information to you electronically instead. If you prefer to receive the Consumer
                Information on paper, you’ll need to visit any Bank of America banking center to apply in person.</p>
              <p class="mb-2 p-sm">Your consent only applies to this loan application and the documents listed here. You aren't required to consent to receive information
                electronically to complete this application. If you’d like to withdraw your consent after consenting to receive information electronically, or
                if after receiving electronic documents you would like paper copies, you may do so in the Application Status Center or contact us at
                1.888.540.5730 and we will provide you with paper copies at no charge. You can also update your contact information with us by calling
                that same telephone number. Consent withdrawal won’t apply to any actions already taken or initiated in reliance on your consent.</p>
              <p class="mb-2">Type of electronic Consumer Information you may receive:</p>
              <ul>
                <li class="mt-2">Credit Score Notice, if your application is approved</li>
                <li class="mt-2">Adverse Action Letter, if your application is declined</li>
                <li class="mt-2">Any other information related to your application</li>
              </ul>
              <h5 class="mb-2 mt-3 p-lg bold">System Requirements</h5>
              <p class="mb-2">In order to properly access and retain your Consumer Information, you must have the following hardware and
                software (collectively known as system requirements):</p>
              <ul>
                <li class="mt-2">An internet-enabled computer or mobile device with a supported browser listed here. For optimal viewing of the
                  disclosures on a tablet, we recommend a screen size of 7.9 inches or larger.</li>
                <li class="mt-2">An active email account</li>
                <li class="mt-2">A printer or sufficient storage space to print or save Consumer Information</li>
              </ul>
              <p class="mb-2 p-sm">For documents in PDF format, you will need Adobe Reader. Go to www.adobe.com to download a free copy.</p>
              <h5 class="mb-2 mt-3 p-lg bold">Supported browsers</h5>
              <p class="mb-2">Access from a personal computer:</p>
              <p class="mb-2">For Windows 7 or higher we support Internet Explorer 11 and higher, Edge (Windows 10 and higher), Firefox 51 and higher, and
                Chrome 56 and higher.</p>
              <p class="mb-2">For Mac OS 10.9 or higher we support Safari 10 and higher and Chrome 56 and higher.</p>
              <p class="mb-2 mt-3">Access from a mobile device:</p>
              <p class="mb-2">Android 4.4 and higher with the default browser, Apple iOS 8 or higher with the default browser, Windows 10 or higher with the default browser.</p>

            </tab-content>
            <tab-content>
              <div class="row">
                <div class="col-12">
                  <p class="p-md mb-0">Review & Submit</p>
                  <p class="mb-0">Syed, You are almost done. Please check your information before you submit.</p>
                </div>
                <div class="col-12">
                  <hr class="my-3">
                </div>
                <div class="col-12">
                  <p class="p-md mb-0">About the car</p>
                </div>
              </div>
              <div class="row align-items-end">
                <div class="col-md-6 col-lg-4 mt-2">
                  <label for="">Make</label>
                  <input type="text" name="" :value="formData?.make" disabled class="site-input" id="">
                </div>


                <div class="col-md-6 col-lg-4 mt-2">
                  <label for="">Model</label>
                  <input type="text" name="" :value="formData?.model" disabled class="site-input" id="">
                </div>
                <div class="col-md-6 col-lg-4 mt-2">
                  <label for="">Year</label>
                  <input type="number" name="" :value="formData?.year" disabled class="site-input" id="">
                </div>
                <div class="col-md-6 col-lg-4 mt-2">
                  <label for="">Mileage</label>
                  <input type="text" name="" :value="formData?.mileage" disabled class="site-input" id="">
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <hr class="my-3">
                </div>
                <div class="col-12">
                  <p class="p-md mb-0">About your loan</p>
                </div>
              </div>
              <div class="row align-items-end">
                <div class="col-md-6 col-lg-4 mt-2">
                  <label for="">Loan Amount</label>
                  <input type="text" name="" :value="formData?.loan_amount" disabled class="site-input" id="">
                </div>
                <div class="col-md-6 col-lg-4 mt-2">
                  <label for="">Term</label>
                  <input type="text" name="" :value="formData?.loan_term" disabled class="site-input" id="">
                </div>
                <div class="col-md-6 col-lg-4 mt-2">
                  <label for="">Perchase Type</label>
                  <input type="text" name="" :value="formData?.loan_type" disabled class="site-input" id="">
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <hr class="my-3">
                </div>
                <div class="col-12">
                  <p class="p-md mb-0">About you</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 col-lg-4 mt-2">
                  <label for="">Name</label>
                  <input type="text" name="" :value="formData?.first_name" disabled class="site-input" id="">
                </div>
                <div class="col-md-6 col-lg-4 mt-2">
                  <label for="">Social Security Number</label>
                </div>
                <div class="col-md-6 col-lg-4 mt-2">
                  <label for="">Employment Status</label>
                  <input type="text" name="" :value="formData?.employment_status" disabled class="site-input" id="">
                </div>
                <div class="col-md-6 col-lg-4 mt-2">
                  <label for="">Address</label>
                  <input type="text" name="" :value="formData?.home_address" disabled class="site-input" id="">
                </div>
                <div class="col-md-6 col-lg-4 mt-2">
                  <label for="">Country Residence</label>
                  <input type="text" name="" :value="formData?.country" disabled class="site-input" id="">
                </div>
                <div class="col-md-6 col-lg-4 mt-2">
                  <label for="">Employer</label>
                  <input type="text" name="" value="Mars" disabled class="site-input" id="">
                </div>
                <div class="col-md-6 col-lg-4 mt-2">
                  <label for="">Time at this address</label>
                  <input type="text" name="" :value="formData?.time_of_address" disabled class="site-input" id="">
                </div>
                <div class="col-md-6 col-lg-4 mt-2">
                  <label for="">Date of birth</label>
                  <input type="date" name="" :value="formData?.dat_of_birthday" disabled class="site-input" id="">
                </div>
                <div class="col-md-6 col-lg-4 mt-2">
                  <label for="">Occupation</label>
                  <input type="text" name="" value="IT Computer Occupation" disabled class="site-input" id="">
                </div>
                <div class="col-md-6 col-lg-4 mt-2">
                  <label for="">House phone number</label>
                  <input type="text" name="" :value="formData?.address_number" disabled class="site-input" id="">
                </div>
                <div class="col-md-6 col-lg-4 mt-2">
                  <label for="">Mother's Name</label>
                  <input type="text" name="" :value="formData?.mother_median" disabled class="site-input" id="">
                </div>
                <div class="col-md-6 col-lg-4 mt-2">
                  <label for="">Time employed</label>
                  <input type="text" name="" value="4 years" disabled class="site-input" id="">
                </div>
                <div class="col-md-6 col-lg-4 mt-2">
                  <label for="">Email Address</label>
                  <input type="email" name="" :value="formData?.email_address" disabled class="site-input" id="">
                </div>
                <div class="col-md-6 col-lg-4 mt-2">
                  <label for="">Bank of America employee (active or retired)</label>
                  <input type="text" name="" value="No" disabled class="site-input" id="">
                </div>
                <div class="col-md-6 col-lg-4 mt-2">
                  <label for="">Work Number</label>
                  <input type="text" name="" value="***-***-9041" disabled class="site-input" id="">
                </div>
                <div class="col-md-6 col-lg-4 mt-2">
                  <label for="">Dual citizenship?</label>
                  <input type="text" name="" :value="formData?.dual_citizen" disabled class="site-input" id="">
                </div>
                <div class="col-md-6 col-lg-4 mt-2">
                  <label for="">Country of citizenship</label>
                  <input type="text" name="" :value="formData?.us_citizen" disabled class="site-input" id="">
                </div>
                <div class="col-md-6 col-lg-4 mt-2">
                  <label for="">Housing Status</label>
                  <input type="text" name="" :value="formData?.housing_status" disabled class="site-input" id="">
                </div>
                <div class="col-md-6 col-lg-4 mt-2">
                  <label for="">Monthly Housing payment</label>
                  <input type="text" name="" :value='formData?.monthly_house_pay' disabled class="site-input" id="">
                </div>
              </div>
              <!-- <input type="button" name="previous" class="previous site-btn mt-3 px-5 py-3" value="Previous" />
              <button class="site-btn l-blue-btn mt-3 px-5 py-3" type="submit">Submit</button> -->
            </tab-content>
            </form-wizard>
        </div>
      </div>
    </div>
  </section>

    </div>
</template>

<script>
import { FormWizard, TabContent, ValidationHelper } from "vue-step-wizard";
import "vue-step-wizard/dist/vue-step-wizard.css";
import { required } from "vuelidate/lib/validators";
export default {
    components: {
        FormWizard,
        TabContent,
    },
    mixins: [ValidationHelper],
    data() {
        return {
            formData: {
                make: "",
                model: "",
                year: "",
                mileage: "",
                loan_type: '',
                customer: '',
                loan_amount: '',
                loan_term: '',
                first_name: '',
                middle_name: '',
                last_name: '',
                suffix: '',
                address_number: '',
                streets: '',
                appartment: '',
                country: '',
                city: '',
                state: '',
                zip_code: '',
                time_of_address: '',
                home_address: '',
                email_address: '',
                us_citizen: '',
                dual_citizen: '',
                country_residence: '',
                dat_of_birthday: '',
                employment_finance: '',
                employment_status: '',
                mother_median: '',
                housing_status: '',
                monthly_rent: '',
                monthly_house_pay: '',
                family_type: '',
                promo_code: ''
            },
            validationRules: [
                {
                    // loan_type: { required },
                    // make: {required},
                    // model: {required},
                    // year: {required},
                    // mileage: {required},
                    // customer: {  },
                    // loan_amount: { required },
                    // loan_term: { required },
                    // first_name: { required },
                    // middle_name: { required },
                    // last_name: { required },
                    // suffix: { required },
                    // address_number: { required },
                    // streets: { required },
                    // appartment: { required },
                    // country: { required },
                    // city: { required },
                    // state: { required },
                    // zip_code: { required },
                    // time_of_address: { required },
                    // home_address: { required },
                    // email_address: { required },
                    // us_citizen: { required },
                    // dual_citizen: { required },
                    // country_residence: {  },
                    // dat_of_birthday: { required },
                    // mother_median: { required },
                    // employment_finance: { required },
                    // employment_status: { required },
                    // housing_status: { required },
                    // monthly_rent: {  },
                    // monthly_house_pay: { required },
                    // family_type: { required },
                    // promo_code: {  }
                },
            ]
        }
    },
    methods: {
        async submit() {
            let response = await axios.post("/api/loan-application", this.formData);
            if (response.data.data) {
                this.$router.push({
                    name: "web.home.category",
                });
                this.$snotify.success(response.data.message);
            } else {
                this.$snotify.error(response.data.message);
            }
        },
    }
}

</script>
