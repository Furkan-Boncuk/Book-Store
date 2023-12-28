import React, { useEffect, useState } from 'react'
import styles from "./payment.module.css"
import { useCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
    const { cartState, removeAllItemsFromCart } = useCart()
    const { totalItems, totalPrice } = cartState
    const navigate = useNavigate()

    // FORM BİLGİLERİNİ TUTACAK STATE'LER
    // address
    const [selectedCountry, setSelectedCountry] = useState("")
    const [selectedCity, setSelectedCity] = useState("")
    const [selectedDistrict, setSelectedDistrict] = useState("")
    const [deliveryAddress, setDeliveryAddress] = useState("")
    // contact
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    // credit card
    const [cardNumber, setCardNumber] = useState("")
    const [nameOnTheCard, setNameOnTheCard] = useState("")
    // expiration date
    const [selectedYear, setSelectedYear] = useState("")
    const [selectedMonth, setSelectedMonth] = useState("")
    const [cvv, setCvv] = useState("")

    // form errors
    const [formErrors, setFormErrors] = useState({})

    const checkFieldsForValidation = () => {
        const formValidationErrors = {}

        if (!selectedCountry || !selectedCity || !selectedDistrict ||
            !deliveryAddress || !name || !surname || !phoneNumber ||
            !cardNumber || !nameOnTheCard || !selectedYear || !selectedMonth) {
            alert("Please Fill In All Fields")
            // return
        }

        if (!selectedCountry) {
            formValidationErrors.selectedCountry = 'Please select a country.';
        }

        if (!selectedCity) {
            formValidationErrors.selectedCity = 'Please select a city.';
        }

        if (!selectedDistrict) {
            formValidationErrors.selectedDistrict = 'Please select a district.';
        }

        if (!deliveryAddress.trim()) {
            formValidationErrors.deliveryAddress = 'Delivery address field can not be empty.'
        }

        if (!name.trim()) {
            formValidationErrors.name = 'Name field can not be empty.'
        }

        if (!surname.trim()) {
            formValidationErrors.surname = 'Surname field can not be empty.'
        }

        if (!phoneNumber.trim()) {
            formValidationErrors.phoneNumber = 'Phone number field can not be empty.'
        }

        if (parseInt(phoneNumber.substring(0, 3)) < 500) {
            formValidationErrors.phoneNumber = 'Please provide a valid phone number.'
        }

        if (phoneNumber?.length !== 10) {
            formValidationErrors.phoneNumber = 'Phone number must be 10 digits.'
        }

        if (!cardNumber.trim()) {
            formValidationErrors.cardNumber = 'Card number field can not be empty.'
        }

        // cardNumber field'ının yalnızca sayısal karakter içerdiğinin regex ile kontrolü
        if (/\D/.test(cardNumber)) {
            formValidationErrors.cardNumber = 'Please provide a valid card number.'
        }

        if (cardNumber?.length !== 16) {
            formValidationErrors.cardNumber = 'Please provide a valid card number.'
        }

        if (!nameOnTheCard.trim()) {
            formValidationErrors.nameOnTheCard = 'Name on the card field can not be empty.'
        }

        if (!selectedYear) {
            formValidationErrors.selectedYear = 'Please select a year.';
        }

        if (!selectedMonth) {
            formValidationErrors.selectedMonth = 'Please select a month.';
        }

        if (cvv.length !== 3) {
            formValidationErrors.cvv = 'Please provide a valid CVV.'
        }

        if (!cvv.trim()) {
            formValidationErrors.cvv = 'CVV field can not be empty.'
        }

        if (/\D/.test(cvv)) {
            formValidationErrors.cvv = 'Please provide a valid CVV.'
        }

        // hataları state'e gönder
        setFormErrors(formValidationErrors)

        // hata yoksa true
        return Object.keys(formValidationErrors).length === 0
    }

    const handlePayment = (e) => {
        e.preventDefault()

        const isFormValid = checkFieldsForValidation()

        if (isFormValid) {
            // sepeti boşalt
            removeAllItemsFromCart()
            // anasayfaya yönlendir
            navigate("/")
        }
    }

    return (
        <div className={styles.paymentContainer}>
            <div className={styles.paymentTitle}>
                Payment
            </div>

            <div className={styles.formContainer}>
                <form className={styles.paymentForm}>

                    {/* ADDRESS */}

                    <div className={styles.address}>
                        <div className={styles.addressTitle}>
                            Address
                        </div>
                        <label htmlFor="country" className={styles.addressText}>
                            Country
                        </label>
                        <select
                            className={`${styles.addressInput} ${formErrors.selectedCountry ? styles.errorInput : ""}`}
                            id="country"
                            value={selectedCountry}
                            onChange={(e) => setSelectedCountry(e.target.value)}
                        >
                            <option className={styles.defaultOption} value="">Select a country</option>
                            <option value="Country A">Country A</option>
                            <option value="Country B">Country B</option>
                            <option value="Country C">Country C</option>
                        </select>

                        {formErrors?.selectedCountry && <p className={styles.error}>{formErrors.selectedCountry}</p>}

                        <label htmlFor="city" className={styles.addressText}>
                            City
                        </label>
                        <select
                            className={`${styles.addressInput} ${formErrors.selectedCity ? styles.errorInput : ""}`}
                            id="city"
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                        >
                            <option className={styles.defaultOption} value="">Select a city</option>
                            <option value="City A">City A</option>
                            <option value="City B">City B</option>
                            <option value="City C">City C</option>
                        </select>

                        {formErrors?.selectedCity && <p className={styles.error}>{formErrors.selectedCity}</p>}


                        <label htmlFor="district" className={styles.addressText}>
                            District
                        </label>
                        <select
                            className={`${styles.addressInput} ${formErrors.selectedDistrict ? styles.errorInput : ""}`}
                            id="disctrict"
                            value={selectedDistrict}
                            onChange={(e) => setSelectedDistrict(e.target.value)}
                        >
                            <option className={styles.defaultOption} value="">Select a district</option>
                            <option value="City A">District A</option>
                            <option value="City B">District B</option>
                            <option value="City C">District C</option>
                        </select>

                        {formErrors?.selectedDistrict && <p className={styles.error}>{formErrors.selectedDistrict}</p>}

                        <label htmlFor="deliveryAddress" className={styles.addressText}>
                            Delivery Address
                        </label>
                        <input
                            className={`${styles.addressInput} ${formErrors.deliveryAddress ? styles.errorInput : ""}`}
                            type='text'
                            id='deliveryAddress'
                            placeholder='Type delivery address here...'
                            value={deliveryAddress}
                            onChange={(e) => setDeliveryAddress(e.target.value)}
                        />

                        {formErrors?.deliveryAddress && <p className={styles.error}>{formErrors.deliveryAddress}</p>}

                    </div>

                    {/* CONTACT */}

                    <div className={styles.contact}>
                        <div className={styles.contactTitle}>
                            Contact
                        </div>
                        <label htmlFor="name" className={styles.contactText}>
                            Name
                        </label>
                        <input
                            className={`${styles.contactInput} ${formErrors.name ? styles.errorInput : ""}`}
                            type='text'
                            id='name'
                            placeholder='Type name here...'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        {formErrors?.name && <p className={styles.error}>{formErrors.name}</p>}

                        <label htmlFor="surname" className={styles.contactText}>
                            Surname
                        </label>
                        <input
                            className={`${styles.contactInput} ${formErrors.surname ? styles.errorInput : ""}`}
                            type='text'
                            id='surname'
                            placeholder='Type surname here...'
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                        />

                        {formErrors?.surname && <p className={styles.error}>{formErrors.surname}</p>}

                        <label htmlFor="phoneNumber" className={styles.contactText}>
                            Phone Number
                        </label>
                        <input
                            className={`${styles.contactInput} ${formErrors.phoneNumber ? styles.errorInput : ""}`}
                            type='text'
                            id='phoneNumber'
                            placeholder='5xx xxx xx xx'
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />

                        {formErrors?.phoneNumber && <p className={styles.error}>{formErrors.phoneNumber}</p>}

                    </div>

                    {/* CREDIT CARD */}

                    <div className={styles.creditCard}>
                        <div className={styles.creditCardTitle}>
                            Credit Card
                        </div>
                        <label htmlFor="cardNumber" className={styles.creditCardText}>
                            Card Number
                        </label>
                        <input
                            className={`${styles.creditCardInput} ${formErrors.cardNumber ? styles.errorInput : ""}`}
                            type='text'
                            id='cardNumber'
                            placeholder='Type card number here...'
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                        />

                        {formErrors?.cardNumber && <p className={styles.error}>{formErrors.cardNumber}</p>}

                        <label htmlFor="nameOnTheCard" className={styles.creditCardText}>
                            Name On the Card
                        </label>
                        <input
                            className={`${styles.creditCardInput} ${formErrors.nameOnTheCard ? styles.errorInput : ""}`}
                            type='text'
                            id='nameOnTheCard'
                            placeholder='Type name on the card here...'
                            value={nameOnTheCard}
                            onChange={(e) => setNameOnTheCard(e.target.value)}
                        />

                        {formErrors?.nameOnTheCard && <p className={styles.error}>{formErrors.nameOnTheCard}</p>}

                        <div className={styles.expirationDate}>
                            <label htmlFor="expirationDate" className={styles.expirationDateTitle}>
                                Expiration Date
                            </label>
                            <label htmlFor="selectedYear" className={styles.expirationDateText}>
                                Year
                            </label>
                            <select
                                className={`${styles.creditCardInput} ${formErrors.selectedYear ? styles.errorInput : ""}`}
                                id="selectedYear"
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                            >
                                <option className={styles.defaultOption} value="">Select a year</option>
                                <option value="2029">2029</option>
                                <option value="2028">2028</option>
                                <option value="2027">2027</option>
                            </select>

                            {formErrors?.selectedYear && <p className={styles.error}>{formErrors.selectedYear}</p>}

                            <label htmlFor="selectedMonth" className={styles.expirationDateText}>
                                Month
                            </label>
                            <select
                                className={`${styles.creditCardInput} ${formErrors.selectedMonth ? styles.errorInput : ""}`}
                                id="selectedMonth"
                                value={selectedMonth}
                                onChange={(e) => setSelectedMonth(e.target.value)}
                            >
                                <option className={styles.defaultOption} value="">Select a year</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                            </select>

                            {formErrors?.selectedMonth && <p className={styles.error}>{formErrors.selectedMonth}</p>}

                            <label htmlFor="cvv" className={styles.expirationDateText}>
                                CVV
                            </label>
                            <input
                                className={`${styles.creditCardInput} ${formErrors.cvv ? styles.errorInput : ""}`}
                                type='text'
                                id='cvv'
                                placeholder='Type cvv here...'
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                            />

                            {formErrors?.cvv && <p className={styles.error}>{formErrors.cvv}</p>}

                        </div>
                    </div>
                </form>

                <div className={styles.orderSummary}>
                    <div className={styles.orderSummaryCard}>
                        <div className={styles.cardTitle}>Order Summary</div>
                        <div className={styles.numberOfProduct}>{totalItems > 1 ? totalItems + " Products" : totalItems + " Product"} </div>
                        <div className={styles.amountContainer}>
                            <div className={styles.amountText}>Payment : </div>
                            <div className={styles.amount}>{totalPrice ? totalPrice + " TRY" : "FREE"}</div>
                        </div>

                        <button className={styles.orderButton}
                            onClick={handlePayment}
                        >
                            Order
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment