import { useState } from "react"
import toast from "react-hot-toast"

const TestLogin = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const [error, showError] = useState(false)
    let flag = 0

    const handleChange = (e, type) => {
        setForm((prev) => ({ ...prev, [type]: e.target.value }))
    }

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        flag = emailRegex.test(email)
        return emailRegex.test(email);
    };

    const handleSubmit = () => {
        showError(true)
        if (form?.email && form?.password && flag) {
            toast.success('Loggedin Successfully')
        } else {
            toast.error('Please fill all the details')
        }
    }

    return (
        <section>
            <div className="row justify-content-center align-items-center border rounded" style={{ height: '90vh' }}>
                <div className="col-md-6 border  p-5">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label htmlFor="email">
                                Name <span className="text-danger">*</span>
                            </label>
                            <input type='email'  onChange={(e) => handleChange(e, 'email')} name="email" className="form-control" placeholder="eg: example@gmail.com" />
                            {(!validateEmail(form.email) && error) && (
                                <div className="text-danger">Please enter a valid email</div>
                            )}
                        </div>
                        <div className="my-3">
                            <label htmlFor="password">
                                Password <span className="text-danger">*</span>
                            </label>required
                            <input type='password' required onChange={(e) => handleChange(e, 'password')} name="name" className="form-control" placeholder="Enter your password" />
                            {(!form?.password && error) &&
                                <div className="text-danger">Please enter your password</div>}
                        </div>
                        <div className="text-center">
                            <button type="button" onClick={() => handleSubmit()} required className="btn btn-primary"><span className="px-5">Submit</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default TestLogin