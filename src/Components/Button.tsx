import { ReactNode } from "react";

function Button({children}: {children: ReactNode}) {
    return ( 
        <>
            <a href="mailto:satishsurani60@gmail.com" title="email">
                <button className="interactive-button">
                    {children}
                </button>
            </a>
        </>
     );
}

export default Button;