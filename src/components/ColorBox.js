import React from 'react';
import { ColorConsumer } from '../contexts/color';

const ColorBox = () => {
    return (
        <ColorConsumer>
            {value => (
              <>
                <div
                  style={{
                      width: '64px',
                      height: '64px',
                      backgroundColor: value.state.color
                  }}
                />
                <div
                style={{
                    width: '32px',
                    height: '32px',
                    backgroundColor: value.state.subcolor
                }}
                />
              </>
            )}
        </ColorConsumer>
    );
};

export default ColorBox;