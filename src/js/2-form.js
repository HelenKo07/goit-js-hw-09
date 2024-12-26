const feedbackFormEl = document.querySelector('.feedback-form');
let formData = {
    email: '',
    message: '',
};

const fillformFields = () => {
    try {
        const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-data'));
        console.log(formDataFromLS);
    } catch(err) {
        console.log(err);
    }
};

fillformFields();

const onFormFieldChange = event => {
const {target: formFieldEl} = event; 

const fieldValue = formFieldEl.value;
const fieldName = formFieldEl.name;

formData[fieldName] = fieldValue;

localStorage.setItem('feedback-form-data', JSON.stringify(formData));
// console.log(formData);
// console.log(fieldValue);

}

feedbackFormEl.addEventListener('change', onFormFieldChange);



// console.log(feedbackFormEl);
