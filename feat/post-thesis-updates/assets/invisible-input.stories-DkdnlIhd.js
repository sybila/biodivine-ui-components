import{i as m,a as d,x as s}from"./iframe-C7Qx2NIC.js";import{n as l,t as y}from"./property-DN3M5KAW.js";var p=Object.defineProperty,v=Object.getOwnPropertyDescriptor,f=(i,e,o)=>e in i?p(i,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[e]=o,n=(i,e,o,a)=>{for(var r=a>1?void 0:a?v(e,o):e,c=i.length-1,g;c>=0;c--)(g=i[c])&&(r=(a?g(e,o,r):g(r))||r);return a&&r&&p(e,o,r),r},h=(i,e,o)=>f(i,typeof e!="symbol"?e+"":e,o);let t=class extends d{changeHandler(i){this.handleChange&&this.handleChange(i.target.value)}blurHandler(i){this.handleBlur&&this.handleBlur(i.target.value)}keyUpHandler(i){this.handleKeyUp&&this.handleKeyUp(i.target.value)}updateStyleVariable(i,e,o){const a=this[i]??o;this.style.setProperty(e,a)}updated(i){const e=(o,a,r)=>i.has(o)&&this.updateStyleVariable(o,a,r);e("compHeight","--invisible-input-comp-height","200px"),e("compWidth","--invisible-input-comp-width","400px"),e("contHeight","--invisible-input-cont-height","100%"),e("contWidth","--invisible-input-cont-width","100%"),e("contOverflowX","--invisible-input-cont-overflow-x","auto"),e("contOverflowY","--invisible-input-cont-overflow-y","auto"),e("contPadX","--invisible-input-cont-padx","0"),e("contPadY","--invisible-input-cont-pady","0"),e("contBorderRadius","--invisible-input-border-radius","4px"),e("singleHeight","--invisible-input-singleline-height","100%"),e("singleWidth","--invisible-input-singleline-width","100%"),e("singleMaxHeight","--invisible-input-single-max-height","100%"),e("singleMaxWidth","--invisible-input-single-max-width","100%"),e("singleLineHeight","--invisible-input-singleline-line-height","100%"),e("singleFontFamily","--invisible-input-singleline-font-family","'FiraMono', monospace"),e("singleFontWeight","--invisible-input-singleline-font-weight","normal"),e("singleFontSize","--invisible-input-singleline-font-size","100%"),e("singleTextColor","--invisible-input-singleline-text-color","black"),e("singleTextAlign","--invisible-input-singleline-text-align","start"),e("singleFocusFontFamily","--invisible-input-singleline-focus-font-family","'FiraMonoBold', monospace"),e("singleFocusFontWeight","--invisible-input-singleline-focus-font-weight","bold"),e("singleFocusBgColor","--invisible-input-singleline-focus-bg-color","transparent"),e("singlePlaceholderColor","--invisible-input-singleline-placeholder-color","black"),e("singlePlaceholderFontStyle","--invisible-input-singleline-placeholder-font-style","normal"),e("singlePlaceholderFontFamily","--invisible-input-singleline-placeholder-font-family","'FiraMono', monospace"),e("multiHeight","--invisible-input-multiline-height","100%"),e("multiWidth","--invisible-input-multiline-width","100%"),e("multiMaxHeight","--invisible-input-multiline-max-height","100%"),e("multiMaxWidth","--invisible-input-multiline-max-width","100%"),e("multiLineHeight","--invisible-input-multiline-line-height","21px"),e("multiFontFamily","--invisible-input-multiline-font-family","'FiraMono', monospace"),e("multiFontWeight","--invisible-input-multiline-font-weight","normal"),e("multiFontSize","--invisible-input-multiline-font-size","20px"),e("multiTextColor","--invisible-input-multiline-text-color","gray"),e("multiFocusFontFamily","--invisible-input-multiline-focus-font-family","'FiraMono', monospace"),e("multiTextAlign","--invisible-input-multiline-text-align","center"),e("multiFocusFontWeight","--invisible-input-multiline-focus-font-weight","normal"),e("multiFocusBgColor","--invisible-input-multiline-focus-bg-color","#eceff1"),e("multiPlaceholderColor","--invisible-input-multiline-placeholder-color","gray"),e("multiPlaceholderFontStyle","--invisible-input-multiline-placeholder-font-style","italic"),e("multiPlaceholderFontFamily","--invisible-input-multiline-placeholder-font-family","sans-serif"),e("errorBgColor","--invisible-input-error-bg-color","rgba(200, 40, 40, 0.4)")}render(){const i=this.multiLine?"multiline":"",e=this.value??"",o=this.error?"error":"";return s`<div
      id="container"
      class="${i} ${o}"
      part="container"
    >
      ${this.multiLine?s`<textarea
            id="multiline-text-input"
            class="${o}"
            .value=${e}
            placeholder=${this.placeholder}
            @blur=${this.blurHandler}
            @change=${this.changeHandler}
            @keyup=${this.keyUpHandler}
            part="multiline-text-input"
          >
          </textarea>`:s`<input
            id="text-input"
            class="${o}"
            .value="${e}"
            placeholder=${this.placeholder}
            type="text"
            @blur=${this.blurHandler}
            @change=${this.changeHandler}
            @keyup=${this.keyUpHandler}
            part="singleline-text-input"
          />`}

      <img
        id="hover-icon"
        src="${this.hoverIconSrc??t.defaultIconSrc}"
        alt="hover icon"
        part="hover-icon"
      />
    </div>`}};h(t,"styles",m`
    :host {
      display: inline-block;
      height: var(--invisible-input-comp-height, 200px);
      width: var(--invisible-input-comp-width, 400px);
      max-height: var(--invisible-input-comp-height, 200px);
      max-width: var(--invisible-input-comp-width, 400px);
    }

    #container {
      position: relative;
      display: inline-block;
      height: var(--invisible-input-cont-height, 100%);
      max-height: var(--invisible-input-cont-max-height, 100%);
      width: var(--invisible-input-cont-width, 100%);
      max-width: var(--invisible-input-cont-max-width, 100%);

      box-sizing: border-box;
      padding: var(--invisible-input-cont-padx, 0)
        var(--invisible-input-cont-pady, 0);
      border-radius: var(--invisible-input-border-radius, 4px);
      transition: 0.3s;
    }

    #container.error,
    #text-input.error,
    #multiline-text-input.error {
      background-color: var(
        --invisible-input-error-bg-color,
        rgba(200, 40, 40, 0.4)
      );
    }

    #container:not(.multiline):focus-within {
      outline: none;
      background-color: var(
        --invisible-input-singleline-focus-bg-color,
        transparent
      );
    }

    #container.multiline:focus-within {
      outline: none;
      background-color: var(
        --invisible-input-multiline-focus-bg-color,
        #eceff1
      );
    }

    #text-input {
      height: var(--invisible-input-singleline-height, 100%);
      width: var(--invisible-input-singleline-width, 100%);
      font-family: var(
        --invisible-input-singleline-font-family,
        'FiraMono',
        monospace
      );
      background: none;
      border: none;
      color: var(--invisible-input-singleline-text-color, black);
      line-height: var(--invisible-input-singleline-line-height, 100%);
      font-size: var(--invisible-input-singleline-font-size, 100%);
      font-weight: var(--invisible-input-singleline-font-weight, normal);
      overflow-x: var(--invisible-input-cont-overflow-x, auto);
      overflow-y: var(--invisible-input-cont-overflow-y, auto);
      text-align: var(--invisible-input-singleline-text-align, start);
    }

    #text-input::placeholder {
      color: var(--invisible-input-singleline-placeholder-color, black);
      font-style: var(
        --invisible-input-singleline-placeholder-font-style,
        normal
      );
      font-family: var(
        --invisible-input-singleline-placeholder-font-family,
        'FiraMono',
        monospace
      );
    }

    #text-input:focus {
      outline: none;
      font-weight: var(--invisible-input-singleline-focus-font-weight, bold);
      font-family: var(
        --invisible-input-singleline-focus-font-family,
        'FiraMonoBold',
        monospace
      );
    }

    #multiline-text-input {
      height: var(--invisible-input-multiline-height, 100%);
      width: var(--invisible-input-multiline-width, 100%);
      max-height: var(--invisible-input-multiline-max-height, 100%);
      max-width: var(--invisible-input-multiline-max-width, 100%);
      background: none;
      border: none;
      line-height: var(--invisible-input-multiline-line-height, 21px);
      font-family: var(
        --invisible-input-multiline-font-family,
        'FiraMono',
        monospace
      );
      font-size: var(--invisible-input-multiline-font-size, 20px);
      font-weight: var(--invisible-input-multiline-font-weight, normal);
      color: var(--invisible-input-multiline-text-color, gray);
      resize: none;
      word-break: break-all;
      overflow-x: var(--invisible-input-cont-overflow-x, auto);
      overflow-y: var(--invisible-input-cont-overflow-y, auto);
      text-align: var(--invisible-input-multiline-text-align, center);
    }

    #multiline-text-input::placeholder {
      color: var(--invisible-input-multiline-placeholder-color, grey);
      font-style: var(
        --invisible-input-multiline-placeholder-font-style,
        italic
      );
      font-family: var(
        --invisible-input-multiline-placeholder-font-family,
        sans-serif
      );
    }

    #multiline-text-input:focus {
      outline: none;
      font-weight: var(--invisible-input-multiline-focus-font-weight, normal);
      font-family: var(
        --invisible-input-multiline-focus-font-family,
        'FiraMono',
        monospace
      );
    }

    #hover-icon {
      position: absolute;
      right: 0;
      top: 0;
      width: var(--invisible-input-hover-icon-width, 24px);
      max-width: var(--invisible-input-hover-icon-width, 24px);
      height: var(--invisible-input-hover-icon-height, 24px);
      max-height: var(--invisible-input-hover-icon-height, 24px);
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s;
    }

    #container:hover #hover-icon {
      opacity: 1;
    }
  `);h(t,"defaultIconSrc","data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMyAxNy4yNVYyMWgzLjc1TDE3LjgxIDkuOTRsLTMuNzUtMy43NUwzIDE3LjI1ek0yMC43MSA3LjA0Yy4zOS0uMzkuMzktMS4wMiAwLTEuNDFsLTIuMzQtMi4zNGMtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDBsLTEuODMgMS44MyAzLjc1IDMuNzUgMS44My0xLjgzeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=");n([l({type:String})],t.prototype,"compHeight",2);n([l({type:String})],t.prototype,"compWidth",2);n([l({type:String})],t.prototype,"contHeight",2);n([l({type:String})],t.prototype,"contWidth",2);n([l({type:String})],t.prototype,"contPadX",2);n([l({type:String})],t.prototype,"contPadY",2);n([l({type:String})],t.prototype,"contBorderRadius",2);n([l({type:String})],t.prototype,"contOverflowX",2);n([l({type:String})],t.prototype,"contOverflowY",2);n([l({type:String})],t.prototype,"singleHeight",2);n([l({type:String})],t.prototype,"singleWidth",2);n([l({type:String})],t.prototype,"singleMaxHeight",2);n([l({type:String})],t.prototype,"singleMaxWidth",2);n([l({type:String})],t.prototype,"singleLineHeight",2);n([l({type:String})],t.prototype,"singleFontFamily",2);n([l({type:String})],t.prototype,"singleFontWeight",2);n([l({type:String})],t.prototype,"singleFontSize",2);n([l({type:String})],t.prototype,"singleTextColor",2);n([l({type:String})],t.prototype,"singleTextAlign",2);n([l({type:String})],t.prototype,"singleFocusFontFamily",2);n([l({type:String})],t.prototype,"singleFocusFontWeight",2);n([l({type:String})],t.prototype,"singleFocusBgColor",2);n([l({type:String})],t.prototype,"singlePlaceholderColor",2);n([l({type:String})],t.prototype,"singlePlaceholderFontStyle",2);n([l({type:String})],t.prototype,"singlePlaceholderFontFamily",2);n([l({type:Boolean})],t.prototype,"multiLine",2);n([l({type:String})],t.prototype,"multiHeight",2);n([l({type:String})],t.prototype,"multiWidth",2);n([l({type:String})],t.prototype,"multiMaxHeight",2);n([l({type:String})],t.prototype,"multiMaxWidth",2);n([l({type:String})],t.prototype,"multiLineHeight",2);n([l({type:String})],t.prototype,"multiFontFamily",2);n([l({type:String})],t.prototype,"multiFontWeight",2);n([l({type:String})],t.prototype,"multiFontSize",2);n([l({type:String})],t.prototype,"multiTextColor",2);n([l({type:String})],t.prototype,"multiTextAlign",2);n([l({type:String})],t.prototype,"multiFocusFontFamily",2);n([l({type:String})],t.prototype,"multiFocusFontWeight",2);n([l({type:String})],t.prototype,"multiFocusBgColor",2);n([l({type:String})],t.prototype,"multiPlaceholderColor",2);n([l({type:String})],t.prototype,"multiPlaceholderFontStyle",2);n([l({type:String})],t.prototype,"multiPlaceholderFontFamily",2);n([l({type:String})],t.prototype,"hoverIconSrc",2);n([l({type:String})],t.prototype,"hoverIconHeight",2);n([l({type:String})],t.prototype,"hoverIconWidth",2);n([l({type:String})],t.prototype,"errorBgColor",2);n([l({type:String})],t.prototype,"value",2);n([l({type:Boolean})],t.prototype,"error",2);n([l({type:String})],t.prototype,"placeholder",2);n([l({type:Function})],t.prototype,"handleChange",2);n([l({type:Function})],t.prototype,"handleBlur",2);n([l({type:Function})],t.prototype,"handleKeyUp",2);t=n([y("invisible-input")],t);const x={title:"Components/Text/Invisible Input",tags:["autodocs"],parameters:{docs:{description:{component:"\n### `<invisible-input>`\n\nInput field supporting both single-line and multi-line modes.\n\n#### CSS Custom Properties\n\n| Variable                                             | Description                                 |\n|------------------------------------------------------|---------------------------------------------|\n| `--invisible-input-comp-height`                    | Component height                            |\n| `--invisible-input-comp-width`                     | Component width                             |\n| `--invisible-input-cont-height`                    | Container height                            |\n| `--invisible-input-cont-width`                     | Container width                             |\n| `--invisible-input-cont-padx`                      | Horizontal container padding                |\n| `--invisible-input-cont-pady`                      | Vertical container padding                  |\n| `--invisible-input-border-radius`                  | Border radius of container                  |\n| `--invisible-input-cont-overflow-x`                | Container horizontal overflow               |\n| `--invisible-input-cont-overflow-y`                | Container vertical overflow                 |\n| `--invisible-input-singleline-height`              | Single-line input height                    |\n| `--invisible-input-singleline-width`               | Single-line input width                     |\n| `--invisible-input-single-max-height`              | Single-line input max height                |\n| `--invisible-input-single-max-width`               | Single-line input max width                 |\n| `--invisible-input-singleline-line-height`         | Single-line input line height               |\n| `--invisible-input-singleline-font-family`         | Single-line input font family               |\n| `--invisible-input-singleline-font-weight`         | Single-line input font weight               |\n| `--invisible-input-singleline-font-size`           | Single-line input font size                 |\n| `--invisible-input-singleline-text-color`          | Single-line input text color                |\n| `--invisible-input-singleline-text-align`          | Single-line input text alignment            |\n| `--invisible-input-singleline-focus-font-family`   | Single-line input font family on focus      |\n| `--invisible-input-singleline-focus-font-weight`   | Single-line input font weight on focus      |\n| `--invisible-input-singleline-focus-bg-color`      | Single-line input background on focus       |\n| `--invisible-input-singleline-placeholder-color`   | Single-line input placeholder color         |\n| `--invisible-input-singleline-placeholder-font-style` | Single-line input placeholder font style |\n| `--invisible-input-singleline-placeholder-font-family` | Single-line input placeholder font family |\n| `--invisible-input-multiline-height`               | Multi-line input height                     |\n| `--invisible-input-multiline-width`                | Multi-line input width                      |\n| `--invisible-input-multiline-max-height`           | Multi-line input max height                 |\n| `--invisible-input-multiline-max-width`            | Multi-line input max width                  |\n| `--invisible-input-multiline-line-height`          | Multi-line input line height                |\n| `--invisible-input-multiline-font-family`          | Multi-line input font family                |\n| `--invisible-input-multiline-font-weight`          | Multi-line input font weight                |\n| `--invisible-input-multiline-font-size`            | Multi-line input font size                  |\n| `--invisible-input-multiline-text-color`           | Multi-line input text color                 |\n| `--invisible-input-multiline-text-align`           | Multi-line input text alignment             |\n| `--invisible-input-multiline-focus-font-family`    | Multi-line input font family on focus       |\n| `--invisible-input-multiline-focus-font-weight`    | Multi-line input font weight on focus       |\n| `--invisible-input-multiline-focus-bg-color`       | Multi-line input background on focus        |\n| `--invisible-input-multiline-placeholder-color`    | Multi-line input placeholder color          |\n| `--invisible-input-multiline-placeholder-font-style` | Multi-line input placeholder font style  |\n| `--invisible-input-multiline-placeholder-font-family` | Multi-line input placeholder font family |\n| `--invisible-input-hover-icon-width`               | Hover icon width                            |\n| `--invisible-input-hover-icon-height`              | Hover icon height                           |\n| `--invisible-input-error-bg-color`                 | Error background color                      |\n\n#### Shadow DOM Parts\n\n| Part Name              | Description                        |\n|------------------------|------------------------------------|\n| `container`          | The main container                 |\n| `singleline-text-input` | The single-line input element   |\n| `multiline-text-input`  | The multi-line textarea element |\n| `hover-icon`         | The hover icon image               |\n        "}}},argTypes:{compHeight:{control:"text",description:"Component height",table:{category:"Component",defaultValue:{summary:"200px"}}},compWidth:{control:"text",description:"Component width",table:{category:"Component",defaultValue:{summary:"400px"}}},contHeight:{control:"text",description:"Container height",table:{category:"Container",defaultValue:{summary:"100%"}}},contWidth:{control:"text",description:"Container width",table:{category:"Container",defaultValue:{summary:"100%"}}},contPadX:{control:"text",description:"Horizontal container padding",table:{category:"Container",defaultValue:{summary:"0"}}},contPadY:{control:"text",description:"Vertical container padding",table:{category:"Container",defaultValue:{summary:"0"}}},contBorderRadius:{control:"text",description:"Border radius of container",table:{category:"Container",defaultValue:{summary:"4px"}}},contOverflowX:{control:"text",description:"Container horizontal overflow",table:{category:"Container",defaultValue:{summary:"auto"}}},contOverflowY:{control:"text",description:"Container vertical overflow",table:{category:"Container",defaultValue:{summary:"auto"}}},singleHeight:{control:"text",description:"Single-line input height",table:{category:"Single Line Mode",defaultValue:{summary:"100%"}}},singleWidth:{control:"text",description:"Single-line input width",table:{category:"Single Line Mode",defaultValue:{summary:"100%"}}},singleMaxHeight:{control:"text",description:"Max height for single-line input",table:{category:"Single Line Mode",defaultValue:{summary:"100%"}}},singleMaxWidth:{control:"text",description:"Max width for single-line input",table:{category:"Single Line Mode",defaultValue:{summary:"100%"}}},singleLineHeight:{control:"text",description:"Line height for single-line input",table:{category:"Single Line Mode",defaultValue:{summary:"100%"}}},singleFontFamily:{control:"text",description:"Font family for single-line input",table:{category:"Single Line Mode",defaultValue:{summary:"'FiraMono', monospace"}}},singleFontWeight:{control:"text",description:"Font weight for single-line input",table:{category:"Single Line Mode",defaultValue:{summary:"normal"}}},singleFontSize:{control:"text",description:"Font size for single-line input",table:{category:"Single Line Mode",defaultValue:{summary:"18px"}}},singleTextColor:{control:"color",description:"Text color for single-line input",table:{category:"Single Line Mode",defaultValue:{summary:"black"}}},singleTextAlign:{control:"text",description:"Text alignment for single-line input",table:{category:"Single Line Mode",defaultValue:{summary:"start"}}},singleFocusFontFamily:{control:"text",description:"Font family on focus (single-line)",table:{category:"Single Line Mode",defaultValue:{summary:"'FiraMonoBold', monospace"}}},singleFocusFontWeight:{control:"text",description:"Font weight on focus (single-line)",table:{category:"Single Line Mode",defaultValue:{summary:"bold"}}},singleFocusBgColor:{control:"color",description:"Background color on focus (single-line)",table:{category:"Single Line Mode",defaultValue:{summary:"transparent"}}},singlePlaceholderColor:{control:"color",description:"Placeholder color (single-line)",table:{category:"Single Line Mode",defaultValue:{summary:"black"}}},singlePlaceholderFontStyle:{control:"text",description:"Placeholder font style (single-line)",table:{category:"Single Line Mode",defaultValue:{summary:"normal"}}},singlePlaceholderFontFamily:{control:"text",description:"Placeholder font family (single-line)",table:{category:"Single Line Mode",defaultValue:{summary:"'FiraMono', monospace"}}},multiLine:{control:"boolean",description:"Enable multi-line input",table:{category:"Multi-Line Mode",defaultValue:{summary:"false"}}},multiHeight:{control:"text",description:"Height for multi-line input",table:{category:"Multi-Line Mode",defaultValue:{summary:"100%"}}},multiWidth:{control:"text",description:"Width for multi-line input",table:{category:"Multi-Line Mode",defaultValue:{summary:"100%"}}},multiMaxHeight:{control:"text",description:"Max height for multi-line input",table:{category:"Multi-Line Mode",defaultValue:{summary:"100%"}}},multiMaxWidth:{control:"text",description:"Max width for multi-line input",table:{category:"Multi-Line Mode",defaultValue:{summary:"100%"}}},multiLineHeight:{control:"text",description:"Line height for multi-line input",table:{category:"Multi-Line Mode",defaultValue:{summary:"21px"}}},multiFontFamily:{control:"text",description:"Font family for multi-line input",table:{category:"Multi-Line Mode",defaultValue:{summary:"'FiraMono', monospace"}}},multiFontWeight:{control:"text",description:"Font weight for multi-line input",table:{category:"Multi-Line Mode",defaultValue:{summary:"normal"}}},multiFontSize:{control:"text",description:"Font size for multi-line input",table:{category:"Multi-Line Mode",defaultValue:{summary:"20px"}}},multiTextColor:{control:"color",description:"Text color for multi-line input",table:{category:"Multi-Line Mode",defaultValue:{summary:"gray"}}},multiTextAlign:{control:"text",description:"Text alignment for multi-line input",table:{category:"Multi-Line Mode",defaultValue:{summary:"center"}}},multiFocusFontFamily:{control:"text",description:"Font family on focus (multi-line)",table:{category:"Multi-Line Mode",defaultValue:{summary:"'FiraMono', monospace"}}},multiFocusFontWeight:{control:"text",description:"Font weight on focus (multi-line)",table:{category:"Multi-Line Mode",defaultValue:{summary:"normal"}}},multiFocusBgColor:{control:"color",description:"Background color on focus (multi-line)",table:{category:"Multi-Line Mode",defaultValue:{summary:"#eceff1"}}},multiPlaceholderColor:{control:"color",description:"Placeholder color (multi-line)",table:{category:"Multi-Line Mode",defaultValue:{summary:"gray"}}},multiPlaceholderFontStyle:{control:"text",description:"Placeholder font style (multi-line)",table:{category:"Multi-Line Mode",defaultValue:{summary:"italic"}}},multiPlaceholderFontFamily:{control:"text",description:"Placeholder font family (multi-line)",table:{category:"Multi-Line Mode",defaultValue:{summary:"sans-serif"}}},hoverIconSrc:{control:"text",description:"Image source URL for hover icon",table:{category:"Hover Icon"}},hoverIconHeight:{control:"text",description:"Height of the hover icon",table:{category:"Hover Icon",defaultValue:{summary:"24px"}}},hoverIconWidth:{control:"text",description:"Width of the hover icon",table:{category:"Hover Icon",defaultValue:{summary:"24px"}}},errorBgColor:{control:"color",description:"Background color for error state",table:{category:"Error",defaultValue:{summary:"rgba(200, 40, 40, 0.4)"}}},error:{control:"boolean",description:"Error state",table:{category:"Error",defaultValue:{summary:"false"}}},value:{control:"text",description:"Input value",table:{category:"Content"}},placeholder:{control:"text",description:"Placeholder text",table:{category:"Content"}},handleChange:{control:!1,description:"Callback for change event",table:{category:"Events"}},handleBlur:{control:!1,description:"Callback for blur event",table:{category:"Events"}},handleKeyUp:{control:!1,description:"Callback for key up event",table:{category:"Events"}}}},u=i=>s`
  <invisible-input
    .compHeight=${i.compHeight}
    .compWidth=${i.compWidth}
    .contHeight=${i.contHeight}
    .contWidth=${i.contWidth}
    .contPadX=${i.contPadX}
    .contPadY=${i.contPadY}
    .contBorderRadius=${i.contBorderRadius}
    .contOverflowX=${i.contOverflowX}
    .contOverflowY=${i.contOverflowY}
    .singleHeight=${i.singleHeight}
    .singleWidth=${i.singleWidth}
    .singleMaxHeight=${i.singleMaxHeight}
    .singleMaxWidth=${i.singleMaxWidth}
    .singleLineHeight=${i.singleLineHeight}
    .singleFontFamily=${i.singleFontFamily}
    .singleFontWeight=${i.singleFontWeight}
    .singleFontSize=${i.singleFontSize}
    .singleTextColor=${i.singleTextColor}
    .singleTextAlign=${i.singleTextAlign}
    .singleFocusFontFamily=${i.singleFocusFontFamily}
    .singleFocusFontWeight=${i.singleFocusFontWeight}
    .singleFocusBgColor=${i.singleFocusBgColor}
    .singlePlaceholderColor=${i.singlePlaceholderColor}
    .singlePlaceholderFontStyle=${i.singlePlaceholderFontStyle}
    .singlePlaceholderFontFamily=${i.singlePlaceholderFontFamily}
    .multiLine=${i.multiLine}
    .multiHeight=${i.multiHeight}
    .multiWidth=${i.multiWidth}
    .multiMaxHeight=${i.multiMaxHeight}
    .multiMaxWidth=${i.multiMaxWidth}
    .multiLineHeight=${i.multiLineHeight}
    .multiFontFamily=${i.multiFontFamily}
    .multiFontWeight=${i.multiFontWeight}
    .multiFontSize=${i.multiFontSize}
    .multiTextColor=${i.multiTextColor}
    .multiTextAlign=${i.multiTextAlign}
    .multiFocusFontFamily=${i.multiFocusFontFamily}
    .multiFocusFontWeight=${i.multiFocusFontWeight}
    .multiFocusBgColor=${i.multiFocusBgColor}
    .multiPlaceholderColor=${i.multiPlaceholderColor}
    .multiPlaceholderFontStyle=${i.multiPlaceholderFontStyle}
    .multiPlaceholderFontFamily=${i.multiPlaceholderFontFamily}
    .hoverIconSrc=${i.hoverIconSrc}
    .hoverIconHeight=${i.hoverIconHeight}
    .hoverIconWidth=${i.hoverIconWidth}
    .errorBgColor=${i.errorBgColor}
    .value=${i.value}
    .placeholder=${i.placeholder}
    .error=${i.error}
    .handleBlur=${i.handleBlur}
    .handleChange=${i.handleChange}
    .handleKeyUp=${i.handleKeyUp}
  ></invisible-input>
`;u.args={compHeight:"200px",compWidth:"400px",contHeight:"100%",contWidth:"100%",contPadX:"8px",contPadY:"6px",contBorderRadius:"6px",contOverflowX:"auto",contOverflowY:"auto",singleHeight:"100%",singleWidth:"100%",singleMaxHeight:"100%",singleMaxWidth:"100%",singleFontSize:"18px",singleFontWeight:"normal",singleTextColor:"black",singleLineHeight:"21px",singleFontFamily:"'FiraMono', monospace",singleTextAlign:"start",singleFocusFontFamily:"'FiraMonoBold', monospace",singleFocusFontWeight:"bold",singleFocusBgColor:"transparent",singlePlaceholderColor:"black",singlePlaceholderFontStyle:"normal",singlePlaceholderFontFamily:"'FiraMono', monospace",multiLine:!1,multiHeight:"100%",multiWidth:"100%",multiMaxHeight:"100%",multiMaxWidth:"100%",multiLineHeight:"21px",multiFontFamily:"'FiraMono', monospace",multiFontWeight:"normal",multiFontSize:"20px",multiTextColor:"gray",multiTextAlign:"center",multiFocusFontFamily:"'FiraMono', monospace",multiFocusFontWeight:"normal",multiFocusBgColor:"#eceff1",multiPlaceholderColor:"gray",multiPlaceholderFontStyle:"italic",multiPlaceholderFontFamily:"sans-serif",hoverIconHeight:"24px",hoverIconWidth:"24px",errorBgColor:"rgba(200, 40, 40, 0.4)",value:"",placeholder:"Enter text here...",error:!1,handleBlur:i=>{console.log(`Blur: ${i}`)},handleChange:i=>{console.log(`Change: ${i}`)},handleKeyUp:i=>{console.log(`KeyUp: ${i}`)}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => html\`
  <invisible-input
    .compHeight=\${args.compHeight}
    .compWidth=\${args.compWidth}
    .contHeight=\${args.contHeight}
    .contWidth=\${args.contWidth}
    .contPadX=\${args.contPadX}
    .contPadY=\${args.contPadY}
    .contBorderRadius=\${args.contBorderRadius}
    .contOverflowX=\${args.contOverflowX}
    .contOverflowY=\${args.contOverflowY}
    .singleHeight=\${args.singleHeight}
    .singleWidth=\${args.singleWidth}
    .singleMaxHeight=\${args.singleMaxHeight}
    .singleMaxWidth=\${args.singleMaxWidth}
    .singleLineHeight=\${args.singleLineHeight}
    .singleFontFamily=\${args.singleFontFamily}
    .singleFontWeight=\${args.singleFontWeight}
    .singleFontSize=\${args.singleFontSize}
    .singleTextColor=\${args.singleTextColor}
    .singleTextAlign=\${args.singleTextAlign}
    .singleFocusFontFamily=\${args.singleFocusFontFamily}
    .singleFocusFontWeight=\${args.singleFocusFontWeight}
    .singleFocusBgColor=\${args.singleFocusBgColor}
    .singlePlaceholderColor=\${args.singlePlaceholderColor}
    .singlePlaceholderFontStyle=\${args.singlePlaceholderFontStyle}
    .singlePlaceholderFontFamily=\${args.singlePlaceholderFontFamily}
    .multiLine=\${args.multiLine}
    .multiHeight=\${args.multiHeight}
    .multiWidth=\${args.multiWidth}
    .multiMaxHeight=\${args.multiMaxHeight}
    .multiMaxWidth=\${args.multiMaxWidth}
    .multiLineHeight=\${args.multiLineHeight}
    .multiFontFamily=\${args.multiFontFamily}
    .multiFontWeight=\${args.multiFontWeight}
    .multiFontSize=\${args.multiFontSize}
    .multiTextColor=\${args.multiTextColor}
    .multiTextAlign=\${args.multiTextAlign}
    .multiFocusFontFamily=\${args.multiFocusFontFamily}
    .multiFocusFontWeight=\${args.multiFocusFontWeight}
    .multiFocusBgColor=\${args.multiFocusBgColor}
    .multiPlaceholderColor=\${args.multiPlaceholderColor}
    .multiPlaceholderFontStyle=\${args.multiPlaceholderFontStyle}
    .multiPlaceholderFontFamily=\${args.multiPlaceholderFontFamily}
    .hoverIconSrc=\${args.hoverIconSrc}
    .hoverIconHeight=\${args.hoverIconHeight}
    .hoverIconWidth=\${args.hoverIconWidth}
    .errorBgColor=\${args.errorBgColor}
    .value=\${args.value}
    .placeholder=\${args.placeholder}
    .error=\${args.error}
    .handleBlur=\${args.handleBlur}
    .handleChange=\${args.handleChange}
    .handleKeyUp=\${args.handleKeyUp}
  ></invisible-input>
\``,...u.parameters?.docs?.source}}};const M=["Default"];export{u as Default,M as __namedExportsOrder,x as default};
