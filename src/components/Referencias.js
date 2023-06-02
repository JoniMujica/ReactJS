import React , {createRef,useRef} from 'react';

export default function Referencias(){

    //let refMenu = createRef(),
    let refMenu = useRef(),
    refMenuBtn = useRef();


    //console.log(refMenu,refMenuBtn)
    const handleToggleMenu = (e) =>{
        /*
        const $menu = document.getElementById("menu");
        if (e.target.textConttent === "Menu") {
            e.target.textConttent = "Cerrar";
            $menu.style.display = "block"
        }else{
            e.target.textConttent = "Menu";
            $menu.style.display = "none"
        }*/
        if (refMenuBtn.current.textConttent === "Menu") {
            refMenuBtn.current.textConttent = "Cerrar";
            refMenu.current.style.display = "block"
        }else{
            refMenuBtn.current.textConttent = "Menu";
            refMenu.current.style.display = "none"
        }
        

    }

    return(
        <>
            <h2>Referencias</h2>

            <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>Menu</button>
            <nav id='menu' ref={refMenu} style={{display:'none'}}>
                <a href='#'>Seccion 1</a>
                <br/>
                <a href='#'>Seccion 2</a>
                <br/>
                <a href='#'>Seccion 3</a>
                <br/>
                <a href='#'>Seccion 4</a>
                <br/>
                <a href='#'>Seccion 5</a>
            </nav>
        </>
    )
}