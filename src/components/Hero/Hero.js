import '../Hero/Hero.css'
function Hero() {
    return (
        <>
            <section className='heroSection'>
                <div className='heroTextBox'>
                    <div className='heroHeaders'>
                        <h1>
                            Wallace Development
                        </h1>
                        <p className='heroText'>
                           Passionate and technically minded, I always strive to deliver the best possible product. With a hunger to develop both impeccable applications and my own skills, I am constantly learning new languages and abilities. </p>
                           <p className='heroText'>
                           Having recently completed a Front-End Web Development course (provided by edX & Birmingham University), I am comfortable working in the following languages:
                            <ul>
                                <li>HTML 5</li>
                                <li>CSS 3</li>
                                <li>Javascript ES6</li>
                                <li>JQuery</li>
                                <li>SASS</li>
                                <li>React</li>
                                <li>Bootstrap</li>

                            </ul>
                            This list will continue to grow over time.
                            
                        </p>
               

                    </div>

                </div>
                <div className='heroImage'></div>
            </section>
        </>
    )
}
export default Hero