export default function TabButton({children , onSelect}){
    
    return(

    <li><button onClick={onSelect}>{children}</button></li>
            
    )
}

// onclick 은 함수 