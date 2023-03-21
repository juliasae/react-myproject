
const Like = () =>{

    const handleclick = () => {
        alert("Glad att du gillar oss!")
    }
        return(
            <div class="button1">
                <button
                 onClick={handleclick}
                 >Jag gillar Hemnet👍🏼</button>
            </div> 

        );
   
}
export default Like;