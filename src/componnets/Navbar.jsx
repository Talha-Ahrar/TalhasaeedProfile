import { FaGithub, FaLinkedin } from "react-icons/fa"
import logo from "../assets/talhasaeed.webp"
export default function Navbar() {
  return (
   <nav className="flex items-center justify-between py-6">
<div className="flex flex-shrink-0 items-center">
<a href="/" aria-label="Home">
<img src = {logo} className="mx-2" width={50} height={33}
alt="logo"
>
</img>
</a>


</div>
<div className="m-8 flex items-center justify-center gap-4  text-2xl">
<a href="https://www.linkedin.com/in/muhammad-talha-saeed-3a2084168/"
target="_blank"
rel="noopener noreferrer"
aria-label="LinkedIn"
>

<FaLinkedin />

</a>




<a href="https://github.com/Talha-Ahrar"
target="_blank"
rel="noopener noreferrer"
aria-label="github"
>

<FaGithub />

</a>


</div>

   </nav>
  )
}
