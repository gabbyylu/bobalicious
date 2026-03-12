import { useState } from "react";

function Card({ name, title, blurb, github, skills }) {
const [showMore, setShowMore] = useState(false);

return (
  <div className="w-80 mx-auto p-6 bg-purple-50 border-2 border-purple-500 rounded-2xl shadow-lg text-center">
<h3 className="text-xl font-bold text-gray-800">
{name}
</h3>
<p className="text-blue-500 font-semibold">{title}</p>
<p className="text-gray-500 mt-2">{blurb}</p>

<button
onClick={() => setShowMore(!showMore)}
className="mt-4 text-sm text-blue-500
hover: text-blue-700 font-semibold"
>

{showMore ? " ^" : " ⌄"}
</button>

{showMore && (
<div className="mt-4 pt-4 border-t
border-gray-200 text-left">
{github && (
<p className="text-sm text-gray-600">
<a href={github}
className="text-blue-500
hover: underline">
GitHub Repo</a>
</p>
)}
{skills && (
<p className="text-sm text-gray-600 mt-2">
Skills: {skills}
</p>
)}
</div>
)}
</div>
);
}
export default Card;