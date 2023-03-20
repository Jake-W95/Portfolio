import { useForm, ValidationError } from '@formspree/react'


const ContactForm = () => {
    const [state, handleSubmit] = useForm("mzbqgbog");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <>
                <h1>Contact Me</h1>
                <form onSubmit={handleSubmit} className='contactForm'>
                    <label htmlFor="email">
                        Email Address:
                    </label>
                    <input id="email"
                        type="email"
                        name="email"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <label htmlFor='name'>
                        Name:
                    </label>
                    <input
                        id='name'
                        type='name'
                        name='name'
                        />
                        <label htmlFor='message'>
                            Message:
                        </label>
                    <textarea
                        id="message"
                        name="message"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button type="submit" disabled={state.submitting}>
                        Submit
                    </button>
                </form>
                </>
            
    )
}

export default ContactForm