import 'antd/dist/antd.css';
import './App.css';
import { Button } from 'antd'
import { useState } from 'react';
import { PoweroffOutlined} from '@ant-design/icons';


function App() {
  const [loading, setLoading] = useState(false)
  const onButtonClick= (e) =>{
    console.log('Button Clicked')
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    }, 2000);
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <Button 
        type='primary'
        block  
        loading={loading} 
        icon={<PoweroffOutlined />}
        onClick={onButtonClick}
        
       
       className='my-button' 
         onClick={onButtonClick}
         href='https://www.google.com'>First Button</Button>
      </header>
      </div>
  );
}
export default App;
