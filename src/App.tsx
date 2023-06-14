import React from 'react';
import './App.css';
import { Player } from "@remotion/player";
import { MyComposition } from './remotion/Composition';
import { Layout, Row, Col } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';


function App() {
  return (
    <Layout style={{
      height: "100%",
    }}>
      <Header>Hello How are you</Header>
      <Content style={{
        height: "100%",
      }}>
        <Row>
          <Col span={8}>Video Editor</Col>
          <Col span={12}>
            <Player
              component={MyComposition}
              inputProps={{ text: "World" }}
              durationInFrames={120}
              compositionWidth={1920}
              compositionHeight={1080}
              fps={30}
              style={{
                width: 1280,
                height: 720,
              }}
              controls
            />

          </Col>
        </Row>

      </Content>
    </Layout>
  );
}

export default App;
