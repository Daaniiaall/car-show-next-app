import { useState } from 'react'
import { useRouter } from 'next/router'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './SearchBar.module.css'

function SearchBar() {
    const [min , setMin] = useState("")
    const [max , setMax] = useState("")

    const router = useRouter();

    function searchHandler(){
        if(min && max){
            router.push(`/filter/${min}/${max}`)
        } else{
            toast.error('please enter Minimum and Maximum price', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    }
  return (
    <>
      <div className={styles.container}>
        <div>
            <input placeholder='enter min-price' value={min} onChange={(e)=> setMin(e.target.value)}/>
            <input placeholder='enter max-price' value={max} onChange={(e)=> setMax(e.target.value)}/>
        </div>
        <button onClick={searchHandler}>Search</button>
      </div>
      <ToastContainer />
    </>
  )
}

export default SearchBar