import { Button } from "@mui/material";


const Flashcards = () => {
const handleClick = async() => {
    const response = await fetch("/api/flashcards");
    const data = await response.json();
    console.log(data.message);  
}
    
    
    return (
        <>
            <div
            
            style={{
                
                width: "50%",
                height: "50%",
                
                background: "blue",
            }}
            
            
            
            > 
                Flashcards
                
                <Button variant = "contained" onClick={handleClick}>hello</Button>
            
            </div>
        </>
    );
}

export default Flashcards;