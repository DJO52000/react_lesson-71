// export function Navbar() {
//     return (
//         <nav>
//             <ul>
//                 <li>
//                     <a href="/">Home</a>
//                 </li>
//                 <li>
//                     <a href="/about">About</a>
//                 </li>
//                 <li>
//                     <a href="/store">Store</a>
//                 </li>
//             </ul>
//         </nav>
//     )
// }

import { Link } from "react-router-dom";

//GO AROUND REFRESH PAGE Y USE LINK 
export function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/store">Store</Link>
                </li>
            </ul>
        </nav>
    )
}