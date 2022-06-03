import { useState } from 'react'
import  BarcodeReader from 'react-barcode-reader'

const Reader = () =>{
    const [result, setResult] = useState('No result');
    
    const handleScan = (data) =>{
        setResult('data')
    }

    const handleError = (error) =>{
        console.log(error);
    }

    return(
        <div>
            <BarcodeReader onError={handleError} onScan={handleScan}/>
            <p>{result}</p>
        </div>
        
    )
}

export default Reader