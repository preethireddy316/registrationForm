// Write your JS code here
import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFormSubmitted: false,
    firstErrorShown: false,
    lastErrorShown: false,
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '') {
      this.setState({firstErrorShown: true})
    }
    if (lastName === '') {
      this.setState({lastErrorShown: true})
    }
    if (firstName !== '' && lastName !== '') {
      this.setState({isFormSubmitted: true})
    }
  }

  backToForm = () => {
    this.setState({
      isFormSubmitted: false,
      firstErrorShown: false,
      lastErrorShown: false,
      firstName: '',
      lastName: '',
    })
  }

  registrationSuccessView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button type="button" onClick={this.backToForm}>
        Submit Another Response
      </button>
    </>
  )

  blurFirst = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({firstErrorShown: true})
    }
  }

  blurLast = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({lastErrorShown: true})
    }
  }

  formView = () => {
    const {firstErrorShown, lastErrorShown, firstName, lastName} = this.state
    return (
      <form onSubmit={this.onSubmitForm}>
        <label htmlFor="firstName">FIRST NAME</label>
        <input
          type="text"
          onBlur={this.blurFirst}
          onChange={this.onChangeFirst}
          placeholder="First name"
          value={firstName}
          id="firstName"
        />
        {firstErrorShown && <p>Required</p>}
        <label htmlFor="lastName">LAST NAME</label>
        <input
          type="text"
          onBlur={this.blurLast}
          onChange={this.onChangeSecond}
          placeholder="Last name"
          value={lastName}
          id="lastName"
        />
        {lastErrorShown && <p>Required</p>}
        <button type="submit">Submit</button>
      </form>
    )
  }

  onChangeFirst = event => {
    if (event.target.value === '') {
      this.setState({firstErrorShown: true})
    }
    this.setState({firstName: event.target.value, firstErrorShown: false})
  }

  onChangeSecond = event => {
    if (event.target.value === '') {
      this.setState({lastErrorShown: true})
    }
    this.setState({lastName: event.target.value, lastErrorShown: false})
  }

  render() {
    const {isFormSubmitted} = this.state
    return (
      <>
        <h1>Registration</h1>
        <div>
          {isFormSubmitted ? this.registrationSuccessView() : this.formView()}
        </div>
      </>
    )
  }
}

export default RegistrationForm
