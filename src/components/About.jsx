

// TODO 1: Create a functional component named About that accepts a prop named userInfo 
const About = ({
name , 
JobTitle,
introduction ,
 TechnologyStack,
  Tools,
   Projects,
}) => {

    return (
    
      <div className="border   max-w-auto min-h-fit  relative ">
        <div className="border  text-black min-w-64 min-h-80 absolute top-20 left-10 ">
          <h2 className="text-4xl font-Roboto  font-bold text-left">{name}</h2>
            <p className="text-3xl font-Roboto font-light text-left">{JobTitle}</p>
          <div className="mt-10 max-w-md ">
            <p className="text-sm font-Roboto font-light text-left text-wrap ">{introduction}</p>
          </div>
          
        </div>

        <div className="border min-w-80 min-h-80 absolute right-14 top-20 " >
          <div className="bg-amber-400 border min-w-48 min-h-64 rounded-2xl" >
           <p className="text-center text-2xl"> img</p>
          </div>
        </div>

        {/* todo tech stack  */}
      
      </div>
    
    )
    
    
    }

    export default About;