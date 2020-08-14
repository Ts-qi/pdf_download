import React from 'react';
import './App.css'
import axios from 'axios'
import { saveAs } from 'file-saver'
import { Input, Col, Row ,Button} from 'antd'
const styles = {
  marginLeft:20
}

function App() {
  const handleDownloadPdf = () => {
    console.log(1)
  }
  return (
    <div className="App">
        <h1> PDF 配置下载</h1>
        <Row>
          <Col span={4} style={styles}>
            
            <Input placeholder="aaa"/>
          </Col>
          <Col span={4} style={styles}> 
            <Input placeholder="aaa"/>
          </Col>
          <Col span={4} style={styles}> 
            <Input placeholder="aaa"/>
          </Col>
          <Col span={4} style={styles}> 
            <Input placeholder="aaa"/>
          </Col>
          <Button style={styles} 
            onClick={handleDownloadPdf}
          >下载</Button>
        </Row>
    </div>
  );
}

export default App;
