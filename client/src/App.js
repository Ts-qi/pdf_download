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
    name:'',
    RecepitId :'',
    Price1:'',
    Price2:'',
  })

  const handleChange = ({target: {name,value}}) => {
    const pd = Object.assign({},info,{[name]:value})
    setInfo(pd)
  }
  const handleCreateDownloadPdf = () => {
    console.log(info)
    axios.post('/create-pdf',info)
  }
  return (
    <div className="App">
        <h1> PDF 配置下载</h1>
        <Row>
          <Col span={4} style={styles}>
            <Input placeholder="Name" name="name" onChange={handleChange}/>
          </Col>
          <Col span={4} style={styles}> 
            <Input placeholder="Recepit ID " name="RecepitId" onChange={handleChange}/>
          </Col>
          <Col span={4} style={styles}> 
            <Input placeholder="Price1" name="Price1" onChange={handleChange}/>
          </Col>
          <Col span={4} style={styles}> 
            <Input placeholder="Price2" name="Price2" onChange={handleChange}/>
          </Col>
          <Button style={styles} 
            onClick={handleCreateDownloadPdf}
          >下载</Button>
        </Row>
    </div>
  );
}

export default App;
