import React,{useState} from "react";
export const AppContext=React.createContext();

function AppContextProvider({children}) {
 
    const [isAuth,setIsAuth] =useState(false);
    const [token,setToken]=useState(null)
    const [formValue1,setFormValue1] =useState( {email:"",city:"",fullname:"",contact:"",option1:"",option2:"",date:"",image1:"",duration:"",cost:"",place:""});
    const [formValue2,setFormValue2] =useState( {image:"",duration:"",cost:"",place:""});

  
  const loginUser=(token)=>{
      setToken(token);
      setIsAuth(true)
     
  }
  
  const logoutUser=()=>{
      setToken(null);
      setIsAuth(false)
  }
  
  const fillForm1=(form)=>{
   setFormValue1({
    email:form.email,
    city:form.city,
    fullname:form.fullname,
    contact:form.contact,
    option1:form.option1,
    option2:form.option2,
    date:form.date,
   })
  }
  const fillForm2=(form)=>{
    setFormValue2({
        image:form.img,
     days:form.days,
     cost:form.cost,
     place:form.days
    })
   }
  
  return (
      <AppContext.Provider value={{isAuth,token,loginUser,logoutUser,formValue1,fillForm1,formValue2,fillForm2}}>{children}</AppContext.Provider>
  )
  }
export default AppContextProvider;