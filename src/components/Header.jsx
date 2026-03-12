import { useState } from "react";

function Header() {
const [isOpen, setIsOpen] = useState(false);

return (
<header className="bg-sky-400 text-white-500 px-6 py-4">
<div className="flex justify-between items-center">
<h1 className="text-xl text-white-200">Bobalicious</h1>
<br></br>
<button
onClick={() => setIsOpen(!isOpen)}
className="text-2xl"
>
{isOpen ? "×" : "≡"}
</button>
</div>

{isOpen && (
<nav className="mt-4">
<ul className="flex flex-col gap-2">
<li><a href="#">Home</a></li>
<li><a href="#">About</a></li>
<li><a href="#">Portfolio</a></li>
<li><a href="#">Contact</a></li>
</ul>
</nav>
)}
</header>
);}
export default Header;