import React, { useState } from 'react';
import './App.css'
import axios from 'axios'
import { saveAs } from 'file-saver'
import { Input, Col, Row ,Button} from 'antd'
const styles = {
  marginLeft:20
}

function App() {
  const [info,setInfo] = useState({
    name:'tangqi',
    age :'22',
    weight:'63kg',
    height:'180',
  })

  const handleChange = ({target: {name,value}}) => {
    const pd = Object.assign({},info,{[name]:value})
    setInfo(pd)
  }
  const handleCreateDownloadPdf = () => {
    console.log(info)
    axios.post('http://localhost:5000/create-pdf',info)
    .then( ()=> axios.get('http://localhost:5000/fetch-pdf',{
      responseType: 'blob'
    }))
    .then((res)=> {
      const pdfBlob = new Blob([res.data],{
        type:'applcation/pdf'
      })
      saveAs(pdfBlob,'dowanload-pdf.pdf')

    } )
  }
  return (
    <div className="App">
        <h1> PDF 配置下载</h1>
        <Row style={{textAlign:"center"}}>
          <Col span={4} style={styles}>
            <Input placeholder="Name" name="name" onChange={handleChange}/>
          </Col>
          <Col span={4} style={styles}> 
            <Input placeholder="age" name="age" onChange={handleChange}/>
          </Col>
          <Col span={4} style={styles}> 
            <Input placeholder="weight" name="weight" onChange={handleChange}/>
          </Col>
          <Col span={4} style={styles}> 
            <Input placeholder="height" name="height" onChange={handleChange}/>
          </Col>
          <Button style={styles} 
            onClick={handleCreateDownloadPdf}
            type="primary"
          >PDF下载</Button>
        </Row>
    </div>
  );
}

export default App;
