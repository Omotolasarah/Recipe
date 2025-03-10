const List = ({loading,error,recipes ,frecipe ,keyword})=>{
    if(loading){
        return(
            <div  style={{minheight: "100px" , display:"flex" , justifyContent:"center",alignItems:"center",paddingTop:"50px",paddingBottom:"50px"}}>
            <div className="spinner-border" style={{width: "3rem",height: "3rem"}} role="status">
                <span className="visually-hidden">loading.....</span>
            </div>
            </div>
        )
    }
    return(
        <>
            <div className="row  py-5" style={{ backgroundColor: "#F2F2F2 !important" }}>

                <div className="col-md-10 offset-md-1">
                        <h3 style={{ marginBottom: 30 }} className="text-center">
                        Recipes
                        </h3>
                    <div className="row">
                        {
                            keyword.length == 0 ? 
                            recipes.length > 0 ? recipes.map((recipe)=>{
                                return(
                                <div className="col-md-4 my-4" key={recipe.id}>
                                    <img src={recipe.image} className="img-fluid" />
                                    <div className="descriptions pix">
                                    <h6>{recipe.name}</h6>
                                    <p>
                                        <b>Ingredients</b>: {recipe.ingredients.map((ing)=>{
                                            return (
                                                <span>{ing}</span>
                                            )
                                        })}
                                    </p>
                                    </div>
                                </div>
                                )
                            }) :
                            <p>Recipes not available at the moment</p>
                            :
                            frecipe.length > 0 ? frecipe.map((recipe)=>{
                                return(
                                <div className="col-md-4 my-4" key={recipe.id}>
                                    <img src={recipe.image} className="img-fluid" />
                                    <div className="descriptions pix">
                                    <h6>{recipe.name}</h6>
                                    <p>
                                        <b>Ingredients</b>: {recipe.ingredients.map((ing)=>{
                                            return (
                                                <span>{ing}</span>
                                            )
                                        })}
                                    </p>
                                    </div>
                                </div>
                                )
                            }) :
                            <p>Recipes not available at the moment</p>

                        }
                      
                    </div>
                </div>
            </div>

        </>
    )
}

export default List;