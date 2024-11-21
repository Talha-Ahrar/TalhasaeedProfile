import profilepic from "../assets/talhap.webp"
import resume from '../assets/TalhaCV.pdf';
function Hero() {

    let HERO_CONTENT = 'I am Muhammad Talha Saeed, a skilled software engineer with a Bachelor of Science in Computer Science from the University of Agriculture Faisalabad. With over four years of experience, I specialize in developing web and mobile applications using technologies like Angular, React JS, along with expertise in databases like MySQL and MongoDB. Proficient in front-end frameworks, back-end APIs, I deliver user-focused, efficient, and scalable solutions. Fluent in English and Urdu, I thrive in collaborative environments and am eager to contribute to innovative projects.'
    return (
        <div className="pb-4 lg:mb-36">
            <div className="flex flex-wrap lg:flex-row-reverse">

                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8">
                        <img src={profilepic}
                            alt="Talha Saeed" className="border
     border-stone-900 rounded-3xl"
                        />
                    </div>

                </div>
                <div className="w-full lg:w-1/2">
                    <div className=" flex flex-col items-center lg:item-start mt-10" >
                        <h2 className="pb-2 text-4x 
tracking-tighter lg:text-8xl">
                            M Talha Saeed
                        </h2>
                        <span className="bg-gradient-to-r
 from-stone-300 to-stone-600
 bg-clip-text text-3xl tracking-tight
 text-transparent
 ">
                            Software Engineer
                        </span>
                        <p className="my-2 max-w-lg py-6 text-xl
leading-relaxed tracking-tighter
">
                            {HERO_CONTENT}
                        </p>
                        <a href={resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="bg-white rounded-full p-4 text-sm
                        text-stone-800 mb-10
                        "

                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Hero