import React,{ useRef,useEffect,useState } from 'react'
import image from './assests/file.jpg'
import classes from './App.module.css'
import {uploadFile} from './services/api';


function App() {
  const uploadElement=useRef()
  const [file,setFile]=useState("")
  const [result,setResult]=useState('')
  useEffect(()=>{
    const getImage= async ()=>{
      if(file){
          const data=new FormData();
          data.append("name",file.name);
          data.append("file",file);

          let response=await uploadFile(data) //api function call
          setResult(response.path)
      }
    }
    getImage()
  },[file])
  const updateClick=()=>{
    uploadElement.current.click()
  }
  const onChangeHandler=(event)=>{
    setFile(event.target.files[0])
  }
  return (
    <React.Fragment>
      <div className={classes.container}>
        
        <img className={classes.image} src={image} alt="banner"/>
        <div className={classes.wrapper}>
          
          <h1>Make Contribution through Distribution...</h1>
          <p>Upload and Share the download Link!..</p>
          <h3 className={classes.effect}>For more information contact: <a href='mailto:mishrapriyanshu555@gmail.com'>mishrapriyanshu555@gmail.com</a></h3>
          <button className={classes.btn} onClick={updateClick}>Upload</button>
          <input type='file' ref={uploadElement} style={{display:'none'}} onChange={onChangeHandler}></input>
          {result && <h3>Here is the link!!.. Click and downLoad</h3>}
          {result && <a className={classes.tag} href={result}>{result}</a>}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
