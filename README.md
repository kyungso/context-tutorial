## Context API

**react v16.3 or later**

This project uses **Provider, Consumer of createContext**

### Other ways

#### 1) Using Hook 

``` JavaScript
import React, { useContext } from 'react';
import ColorContext from '../contexts/color';

const ColorBox = () => {
    const { state } = useContext(ColorContext);
    return (
      <>
       <div
         style={{
            width: '64px',
            height:'64px',
            background: state.color
         }}
       />
       <div
         style={{
            width: '32px',
            height:'32px',
            background: state.subcolor
         }}
       />
      </>
    );
};

export default ColorBox;
```

<br>

#### 2) Using static contextType

You can use static contextType in class type component.

``` JavaScript
import React, { Component } from 'react';
import ColorContext from '../contexts/color';

class ColorBox extends Component {

    static contextType = ColorContext;
    // this.context is value of Context

    render() {
      return (
        <>
        <div
            style={{
                width: '64px',
                height:'64px',
                background: this.context.state.color
            }}
        />
        <div
            style={{
                width: '32px',
                height:'32px',
                background: this.context.state.subcolor
            }}
        />
        </>
      );
    }
};

export default ColorBox;
```