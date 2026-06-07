import{i as g,a as y,x as p}from"./iframe-2_Qw5Wcc.js";import{n as i,t as v}from"./property-BZNcQu1B.js";var h=Object.defineProperty,m=Object.getOwnPropertyDescriptor,f=(t,e,r)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,n=(t,e,r,a)=>{for(var l=a>1?void 0:a?m(e,r):e,s=t.length-1,u;s>=0;s--)(u=t[s])&&(l=(a?u(e,r,l):u(l))||l);return a&&l&&h(e,r,l),l},d=(t,e,r)=>f(t,typeof e!="symbol"?e+"":e,r);let o=class extends y{changeHandler(t){this.handleChange&&this.handleChange(t.target.value)}blurHandler(t){this.handleBlur&&this.handleBlur(t.target.value)}keyUpHandler(t){this.handleKeyUp&&this.handleKeyUp(t.target.value)}updateStyleVariable(t,e,r){const a=this[t]??r;this.style.setProperty(e,a)}updated(t){const e=(r,a,l)=>t.has(r)&&this.updateStyleVariable(r,a,l);e("compHeight","--invisible-input-comp-height","28px"),e("compWidth","--invisible-input-comp-width","300px"),e("contOverflowX","--invisible-input-cont-overflow-x","auto"),e("contOverflowY","--invisible-input-cont-overflow-y","auto"),e("contPadX","--invisible-input-cont-padx","0"),e("contPadY","--invisible-input-cont-pady","0"),e("contBorderRadius","--invisible-input-border-radius","4px"),e("contBgColor","--invisible-input-cont-bg-color","transparent"),e("contFocusBgColor","--invisible-input-cont-focus-bg-color","transparent"),e("contErrorBgColor","--invisible-input-cont-error-bg-color","rgba(200, 40, 40, 0.4)"),e("textLineHeight","--invisible-input-text-line-height","27px"),e("fontFamily","--invisible-input-font-family","'FiraMono', monospace"),e("fontWeight","--invisible-input-font-weight","normal"),e("fontSize","--invisible-input-font-size","20px"),e("textColor","--invisible-input-text-color","black"),e("textAlign","--invisible-input-text-align","start"),e("focusFontFamily","--invisible-input-focus-font-family","'FiraMonoBold', monospace"),e("focusFontWeight","--invisible-input-focus-font-weight","bold"),e("placeholderColor","--invisible-input-placeholder-color","grey"),e("placeholderFontStyle","--invisible-input-placeholder-font-style","normal"),e("placeholderFontFamily","--invisible-input-placeholder-font-family","'FiraMono', monospace")}onSubmit(t){this.handleSubmit&&t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),this.handleSubmit(t.target.value))}render(){const t=this.multiLine?"multiline":"",e=this.value??"",r=this.error?"error":"";return p`<div
      id="container"
      class="${t} ${r}"
      part="container"
    >
      ${this.multiLine?p`<textarea
            id="multiline-text-input"
            .value=${e}
            placeholder=${this.placeholder}
            @blur=${this.blurHandler}
            @change=${this.changeHandler}
            @keyup=${this.keyUpHandler}
            @keydown=${this.onSubmit}
            part="multiline-text-input"
          >
          </textarea>`:p`<input
            id="text-input"
            .value="${e}"
            placeholder=${this.placeholder}
            type="text"
            @blur=${this.blurHandler}
            @change=${this.changeHandler}
            @keyup=${this.keyUpHandler}
            @keydown=${this.onSubmit}
            part="singleline-text-input"
          />`}

      <img
        id="hover-icon"
        src="${this.hoverIconSrc??o.defaultIconSrc}"
        alt="hover icon"
        part="hover-icon"
      />
    </div>`}};d(o,"styles",g`
    :host {
      display: inline-block;
      height: var(--invisible-input-comp-height, 28px);
      width: var(--invisible-input-comp-width, 300px);
    }

    #container {
      position: relative;
      display: inline-block;
      height: 100%;
      width: 100%;
      background-color: var(--invisible-input-cont-bg-color, transparent);
      box-sizing: border-box;
      padding: var(--invisible-input-cont-pady, 0)
        var(--invisible-input-cont-padx, 0);

      border-radius: var(--invisible-input-border-radius, 4px);
      transition: 0.3s;
    }

    #container.error {
      background-color: var(
        --invisible-input-cont-error-bg-color,
        rgba(200, 40, 40, 0.4)
      );
    }

    #container:not(.multiline):focus-within {
      outline: none;
      background-color: var(--invisible-input-cont-focus-bg-color, transparent);
    }

    #container.multiline:focus-within {
      outline: none;
      background-color: var(--invisible-input-cont-focus-bg-color, transparent);
    }

    #text-input {
      height: 100%;
      width: 100%;
      font-family: var(--invisible-input-font-family, 'FiraMono', monospace);
      background: none;
      border: none;
      color: var(--invisible-input-text-color, black);
      line-height: var(--invisible-input-text-line-height, 27px);
      font-size: var(--invisible-input-font-size, 20px);
      font-weight: var(--invisible-input-font-weight, normal);
      overflow-x: var(--invisible-input-cont-overflow-x, auto);
      overflow-y: var(--invisible-input-cont-overflow-y, auto);
      text-align: var(--invisible-input-text-align, start);
    }

    #text-input::placeholder {
      color: var(--invisible-input-placeholder-color, grey);
      font-style: var(--invisible-input-placeholder-font-style, normal);
      font-family: var(
        --invisible-input-placeholder-font-family,
        'FiraMono',
        monospace
      );
    }

    #text-input:focus {
      outline: none;
      font-weight: var(--invisible-input-focus-font-weight, bold);
      font-family: var(
        --invisible-input-focus-font-family,
        'FiraMonoBold',
        monospace
      );
    }

    #multiline-text-input {
      height: 100%;
      width: 100%;
      background: none;
      border: none;
      line-height: var(--invisible-input-text-line-height, 27px);
      font-family: var(--invisible-input-font-family, 'FiraMono', monospace);
      font-size: var(--invisible-input-font-size, 20px);
      font-weight: var(--invisible-input-font-weight, normal);
      color: var(--invisible-input-text-color, gray);
      resize: none;
      word-break: break-all;
      overflow-x: var(--invisible-input-cont-overflow-x, auto);
      overflow-y: var(--invisible-input-cont-overflow-y, auto);
      text-align: var(--invisible-input-text-align, center);
    }

    #multiline-text-input::placeholder {
      color: var(--invisible-input-placeholder-color, grey);
      font-style: var(--invisible-input-placeholder-font-style, italic);
      font-family: var(--invisible-input-placeholder-font-family, sans-serif);
    }

    #multiline-text-input:focus {
      outline: none;
      font-weight: var(--invisible-input-focus-font-weight, normal);
      font-family: var(
        --invisible-input-focus-font-family,
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
  `);d(o,"defaultIconSrc","data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMyAxNy4yNVYyMWgzLjc1TDE3LjgxIDkuOTRsLTMuNzUtMy43NUwzIDE3LjI1ek0yMC43MSA3LjA0Yy4zOS0uMzkuMzktMS4wMiAwLTEuNDFsLTIuMzQtMi4zNGMtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDBsLTEuODMgMS44MyAzLjc1IDMuNzUgMS44My0xLjgzeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=");n([i({type:String})],o.prototype,"compHeight",2);n([i({type:String})],o.prototype,"compWidth",2);n([i({type:String})],o.prototype,"contBgColor",2);n([i({type:String})],o.prototype,"contFocusBgColor",2);n([i({type:String})],o.prototype,"contErrorBgColor",2);n([i({type:String})],o.prototype,"contPadX",2);n([i({type:String})],o.prototype,"contPadY",2);n([i({type:String})],o.prototype,"contBorderRadius",2);n([i({type:String})],o.prototype,"contOverflowX",2);n([i({type:String})],o.prototype,"contOverflowY",2);n([i({type:String})],o.prototype,"textLineHeight",2);n([i({type:String})],o.prototype,"fontFamily",2);n([i({type:String})],o.prototype,"fontWeight",2);n([i({type:String})],o.prototype,"fontSize",2);n([i({type:String})],o.prototype,"textColor",2);n([i({type:String})],o.prototype,"textAlign",2);n([i({type:String})],o.prototype,"focusFontFamily",2);n([i({type:String})],o.prototype,"focusFontWeight",2);n([i({type:String})],o.prototype,"placeholderColor",2);n([i({type:String})],o.prototype,"placeholderFontStyle",2);n([i({type:String})],o.prototype,"placeholderFontFamily",2);n([i({type:Boolean})],o.prototype,"multiLine",2);n([i({type:String})],o.prototype,"hoverIconSrc",2);n([i({type:String})],o.prototype,"hoverIconHeight",2);n([i({type:String})],o.prototype,"hoverIconWidth",2);n([i({type:String})],o.prototype,"value",2);n([i({type:Boolean})],o.prototype,"error",2);n([i({type:String})],o.prototype,"placeholder",2);n([i({type:Function})],o.prototype,"handleSubmit",2);n([i({type:Function})],o.prototype,"handleChange",2);n([i({type:Function})],o.prototype,"handleBlur",2);n([i({type:Function})],o.prototype,"handleKeyUp",2);o=n([v("invisible-input")],o);const F={title:"Components/Text/Invisible Input",tags:["autodocs"],parameters:{docs:{description:{component:`
### '<invisible-input>'

A flexible input component that supports both **single-line** and **multi-line** modes using a unified styling system.

Set 'multiLine' to 'true' to render a textarea html element, otherwise a standard input html element is used.

---

### CSS Custom Properties

#### Container

| Variable | Description |
|----------|------------|
| '--invisible-input-comp-height' | Component height (doesn't support fit-content) |
| '--invisible-input-comp-width' | Component width (doesn't support fit-content) |
| '--invisible-input-cont-padx' | Horizontal padding |
| '--invisible-input-cont-pady' | Vertical padding |
| '--invisible-input-border-radius' | Container border radius |
| '--invisible-input-cont-overflow-x' | Horizontal overflow behavior |
| '--invisible-input-cont-overflow-y' | Vertical overflow behavior |
| '--invisible-input-cont-focus-bg-color' | Background color on focus |
| '--invisible-input-cont-error-bg-color' | Background color in error state |

---

#### Text Box (applies to both input & textarea)

| Variable | Description |
|----------|------------|
| '--invisible-input-text-line-height' | Line height |

---

#### Typography

| Variable | Description |
|----------|------------|
| '--invisible-input-font-family' | Font family |
| '--invisible-input-font-weight' | Font weight |
| '--invisible-input-font-size' | Font size |
| '--invisible-input-text-color' | Text color |
| '--invisible-input-text-align' | Text alignment |

---

#### Focus Typography

| Variable | Description |
|----------|------------|
| '--invisible-input-focus-font-family' | Font family on focus |
| '--invisible-input-focus-font-weight' | Font weight on focus |

---

#### Placeholder

| Variable | Description |
|----------|------------|
| '--invisible-input-placeholder-color' | Placeholder text color |
| '--invisible-input-placeholder-font-style' | Placeholder font style |
| '--invisible-input-placeholder-font-family' | Placeholder font family |

---

#### Hover Icon

| Variable | Description |
|----------|------------|
| '--invisible-input-hover-icon-width' | Hover icon width |
| '--invisible-input-hover-icon-height' | Hover icon height |

---

### Shadow DOM Parts

| Part Name | Description |
|-----------|------------|
| 'container' | Wrapper element |
| 'singleline-text-input' | input html element (single-line mode) |
| 'multiline-text-input' | textarea html element (multi-line mode) |
| 'hover-icon' | Hover icon image |

---

### Notes

- All styling is shared between single-line and multi-line modes.
- Use 'multiLine' to switch rendering behavior.
- Error state is controlled via the 'error' property.`}}},argTypes:{compHeight:{control:"text",description:"Component height (doesn't support fit-content)",table:{category:"Container",defaultValue:{summary:"28px"}}},compWidth:{control:"text",description:"Component width (doesn't support fit-content)",table:{category:"Container",defaultValue:{summary:"300px"}}},contPadX:{control:"text",description:"Horizontal container padding",table:{category:"Container",defaultValue:{summary:"0"}}},contPadY:{control:"text",description:"Vertical container padding",table:{category:"Container",defaultValue:{summary:"0"}}},contBorderRadius:{control:"text",description:"Border radius",table:{category:"Container",defaultValue:{summary:"4px"}}},contOverflowX:{control:"text",description:"Horizontal overflow",table:{category:"Container",defaultValue:{summary:"auto"}}},contOverflowY:{control:"text",description:"Vertical overflow",table:{category:"Container",defaultValue:{summary:"auto"}}},contBgColor:{control:"color",description:"Background color of the container",table:{category:"Container",defaultValue:{summary:"transparent"}}},contFocusBgColor:{control:"color",description:"Background color on focus",table:{category:"Container",defaultValue:{summary:"transparent"}}},contErrorBgColor:{control:"color",description:"Background color in error state",table:{category:"Container",defaultValue:{summary:"rgba(200, 40, 40, 0.4)"}}},textLineHeight:{control:"text",description:"Line height",table:{category:"Text Box",defaultValue:{summary:"27px"}}},fontFamily:{control:"text",description:"Font family",table:{category:"Typography",defaultValue:{summary:"'FiraMono', monospace"}}},fontWeight:{control:"text",description:"Font weight",table:{category:"Typography",defaultValue:{summary:"normal"}}},fontSize:{control:"text",description:"Font size",table:{category:"Typography",defaultValue:{summary:"20px"}}},textColor:{control:"color",description:"Text color",table:{category:"Typography",defaultValue:{summary:"black"}}},textAlign:{control:"text",description:"Text alignment",table:{category:"Typography",defaultValue:{summary:"start"}}},focusFontFamily:{control:"text",description:"Font family on focus",table:{category:"Focus",defaultValue:{summary:"'FiraMonoBold', monospace"}}},focusFontWeight:{control:"text",description:"Font weight on focus",table:{category:"Focus",defaultValue:{summary:"bold"}}},placeholderColor:{control:"color",description:"Placeholder color",table:{category:"Placeholder",defaultValue:{summary:"gray"}}},placeholderFontStyle:{control:"text",description:"Placeholder font style",table:{category:"Placeholder",defaultValue:{summary:"normal"}}},placeholderFontFamily:{control:"text",description:"Placeholder font family",table:{category:"Placeholder",defaultValue:{summary:"'FiraMono', monospace"}}},multiLine:{control:"boolean",description:"Enable multi-line textarea",table:{category:"Mode",defaultValue:{summary:"false"}}},hoverIconSrc:{control:"text",description:"Hover icon source",table:{category:"Hover Icon"}},hoverIconHeight:{control:"text",description:"Hover icon height",table:{category:"Hover Icon",defaultValue:{summary:"24px"}}},hoverIconWidth:{control:"text",description:"Hover icon width",table:{category:"Hover Icon",defaultValue:{summary:"24px"}}},value:{control:"text",description:"Input value",table:{category:"Content"}},placeholder:{control:"text",description:"Placeholder text",table:{category:"Content"}},error:{control:"boolean",description:"Error state",table:{category:"State",defaultValue:{summary:"false"}}},handleSubmit:{control:!1,description:"Submit callback (Submits after pressing Enter) -> When multiLine is true, Shift + Enter creates a new line and Enter alone submits the form.",table:{category:"Events"}},handleChange:{control:!1,description:"Change callback",table:{category:"Events"}},handleBlur:{control:!1,description:"Blur callback",table:{category:"Events"}},handleKeyUp:{control:!1,description:"Key up callback",table:{category:"Events"}}}},c=t=>p`
  <invisible-input
    .compHeight=${t.compHeight}
    .compWidth=${t.compWidth}
    .contBgColor=${t.contBgColor}
    .contFocusBgColor=${t.contFocusBgColor}
    .contErrorBgColor=${t.contErrorBgColor}
    .contPadX=${t.contPadX}
    .contPadY=${t.contPadY}
    .contBorderRadius=${t.contBorderRadius}
    .contOverflowX=${t.contOverflowX}
    .contOverflowY=${t.contOverflowY}
    .textLineHeight=${t.textLineHeight}
    .fontFamily=${t.fontFamily}
    .fontWeight=${t.fontWeight}
    .fontSize=${t.fontSize}
    .textColor=${t.textColor}
    .textAlign=${t.textAlign}
    .focusFontFamily=${t.focusFontFamily}
    .focusFontWeight=${t.focusFontWeight}
    .placeholderColor=${t.placeholderColor}
    .placeholderFontStyle=${t.placeholderFontStyle}
    .placeholderFontFamily=${t.placeholderFontFamily}
    .multiLine=${t.multiLine}
    .hoverIconSrc=${t.hoverIconSrc}
    .hoverIconHeight=${t.hoverIconHeight}
    .hoverIconWidth=${t.hoverIconWidth}
    .value=${t.value}
    .placeholder=${t.placeholder}
    .error=${t.error}
    .handleBlur=${t.handleBlur}
    .handleChange=${t.handleChange}
    .handleKeyUp=${t.handleKeyUp}
    .handleSubmit=${t.handleSubmit}
    .handleChange=${t.handleChange}
    .handleBlur=${t.handleBlur}
    .handleKeyUp=${t.handleKeyUp}
  ></invisible-input>
`;c.args={compHeight:"28px",compWidth:"300px",contBgColor:"transparent",contFocusBgColor:"transparent",contErrorBgColor:"rgba(200, 40, 40, 0.4)",contPadX:"8px",contPadY:"6px",contBorderRadius:"6px",contOverflowX:"auto",contOverflowY:"auto",textLineHeight:"27px",fontFamily:"'FiraMono', monospace",fontWeight:"normal",fontSize:"20px",textColor:"black",textAlign:"start",focusFontFamily:"'FiraMonoBold', monospace",focusFontWeight:"bold",placeholderColor:"gray",placeholderFontStyle:"normal",placeholderFontFamily:"'FiraMono', monospace",multiLine:!1,hoverIconSrc:void 0,hoverIconHeight:"24px",hoverIconWidth:"24px",value:"",placeholder:"Enter text here...",error:!1,handleSubmit:t=>console.log(`Submit: ${t}`),handleBlur:t=>console.log(`Blur: ${t}`),handleChange:t=>console.log(`Change: ${t}`),handleKeyUp:t=>console.log(`KeyUp: ${t}`)};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => html\`
  <invisible-input
    .compHeight=\${args.compHeight}
    .compWidth=\${args.compWidth}
    .contBgColor=\${args.contBgColor}
    .contFocusBgColor=\${args.contFocusBgColor}
    .contErrorBgColor=\${args.contErrorBgColor}
    .contPadX=\${args.contPadX}
    .contPadY=\${args.contPadY}
    .contBorderRadius=\${args.contBorderRadius}
    .contOverflowX=\${args.contOverflowX}
    .contOverflowY=\${args.contOverflowY}
    .textLineHeight=\${args.textLineHeight}
    .fontFamily=\${args.fontFamily}
    .fontWeight=\${args.fontWeight}
    .fontSize=\${args.fontSize}
    .textColor=\${args.textColor}
    .textAlign=\${args.textAlign}
    .focusFontFamily=\${args.focusFontFamily}
    .focusFontWeight=\${args.focusFontWeight}
    .placeholderColor=\${args.placeholderColor}
    .placeholderFontStyle=\${args.placeholderFontStyle}
    .placeholderFontFamily=\${args.placeholderFontFamily}
    .multiLine=\${args.multiLine}
    .hoverIconSrc=\${args.hoverIconSrc}
    .hoverIconHeight=\${args.hoverIconHeight}
    .hoverIconWidth=\${args.hoverIconWidth}
    .value=\${args.value}
    .placeholder=\${args.placeholder}
    .error=\${args.error}
    .handleBlur=\${args.handleBlur}
    .handleChange=\${args.handleChange}
    .handleKeyUp=\${args.handleKeyUp}
    .handleSubmit=\${args.handleSubmit}
    .handleChange=\${args.handleChange}
    .handleBlur=\${args.handleBlur}
    .handleKeyUp=\${args.handleKeyUp}
  ></invisible-input>
\``,...c.parameters?.docs?.source}}};const $=["Default"];export{c as Default,$ as __namedExportsOrder,F as default};
