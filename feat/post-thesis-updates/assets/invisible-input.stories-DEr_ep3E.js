import{i as d,a as g,x as c}from"./iframe-TPGbQXMN.js";import{n,t as m}from"./property-CjcnBI7P.js";var u=Object.defineProperty,y=Object.getOwnPropertyDescriptor,v=(t,e,r)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,o=(t,e,r,l)=>{for(var a=l>1?void 0:l?y(e,r):e,s=t.length-1,h;s>=0;s--)(h=t[s])&&(a=(l?h(e,r,a):h(a))||a);return l&&a&&u(e,r,a),a},x=(t,e,r)=>v(t,typeof e!="symbol"?e+"":e,r);let i=class extends g{changeHandler(t){this.handleChange&&this.handleChange(t.target.value)}blurHandler(t){this.handleBlur&&this.handleBlur(t.target.value)}keyUpHandler(t){this.handleKeyUp&&this.handleKeyUp(t.target.value)}updateStyleVariable(t,e,r){const l=this[t]??r;this.style.setProperty(e,l)}updated(t){const e=(r,l,a)=>t.has(r)&&this.updateStyleVariable(r,l,a);e("contMinHeight","--invisible-input-cont-min-height","28px"),e("contMinWidth","--invisible-input-cont-min-width","400px"),e("contMaxHeight","--invisible-input-cont-max-height","28px"),e("contMaxWidth","--invisible-input-cont-max-width","400px"),e("contOverflowX","--invisible-input-cont-overflow-x","auto"),e("contOverflowY","--invisible-input-cont-overflow-y","auto"),e("contPadX","--invisible-input-cont-padx","0"),e("contPadY","--invisible-input-cont-pady","0"),e("contBorderRadius","--invisible-input-border-radius","4px"),e("contFocusBgColor","--invisible-input-cont-focus-bg-color","transparent"),e("contErrorBgColor","--invisible-input-cont-error-bg-color","rgba(200, 40, 40, 0.4)"),e("textBoxMinHeight","--invisible-input-textbox-min-height","28px"),e("textBoxMinWidth","--invisible-input-textbox-min-width","400px"),e("textBoxMaxHeight","--invisible-input-textbox-max-height","28px"),e("textBoxMaxWidth","--invisible-input-textbox-max-width","400px"),e("textLineHeight","--invisible-input-text-line-height","27px"),e("fontFamily","--invisible-input-font-family","'FiraMono', monospace"),e("fontWeight","--invisible-input-font-weight","normal"),e("fontSize","--invisible-input-font-size","20px"),e("textColor","--invisible-input-text-color","black"),e("textAlign","--invisible-input-text-align","start"),e("focusFontFamily","--invisible-input-focus-font-family","'FiraMonoBold', monospace"),e("focusFontWeight","--invisible-input-focus-font-weight","bold"),e("placeholderColor","--invisible-input-placeholder-color","grey"),e("placeholderFontStyle","--invisible-input-placeholder-font-style","normal"),e("placeholderFontFamily","--invisible-input-placeholder-font-family","'FiraMono', monospace")}autoResize(t){const e=this.textBoxMaxHeight?parseInt(this.textBoxMaxHeight.replace("px",""),10):28,r=this.textBoxMinHeight?parseInt(this.textBoxMinHeight.replace("px",""),10):28;t.style.height="auto",t.style.height=`${Math.min(Math.max(t.scrollHeight,r),e)}px`}render(){const t=this.multiLine?"multiline":"",e=this.value??"",r=this.error?"error":"";return c`<div
      id="container"
      class="${t} ${r}"
      part="container"
    >
      ${this.multiLine?c`<textarea
            id="multiline-text-input"
            class="${r}"
            .value=${e}
            placeholder=${this.placeholder}
            @blur=${this.blurHandler}
            @change=${this.changeHandler}
            @keyup=${this.keyUpHandler}
            @input=${l=>this.autoResize(l.target)}
            part="multiline-text-input"
          >
          </textarea>`:c`<input
            id="text-input"
            class="${r}"
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
        src="${this.hoverIconSrc??i.defaultIconSrc}"
        alt="hover icon"
        part="hover-icon"
      />
    </div>`}};x(i,"styles",d`
    :host {
      display: inline-block;
      min-height: var(--invisible-input-cont-min-height, 28px);
      min-width: var(--invisible-input-cont-min-width, 400px);
      max-height: var(--invisible-input-cont-max-height, 28px);
      max-width: var(--invisible-input-cont-max-width, 400px);
    }

    #container {
      position: relative;
      display: inline-block;
      min-height: var(--invisible-input-cont-min-height, 28px);
      min-width: var(--invisible-input-cont-min-width, 400px);
      max-height: var(--invisible-input-cont-max-height, 28px);
      max-width: var(--invisible-input-cont-max-width, 400px);

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
      min-height: var(--invisible-input-textbox-min-height, 28px);
      min-width: var(--invisible-input-textbox-min-width, 400px);
      max-height: var(--invisible-input-textbox-max-height, 28px);
      max-width: var(--invisible-input-textbox-max-width, 400px);
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
      min-height: var(--invisible-input-textbox-min-height, 28px);
      min-width: var(--invisible-input-textbox-min-width, 400px);
      max-height: var(--invisible-input-textbox-max-height, 28px);
      max-width: var(--invisible-input-textbox-max-width, 400px);
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
  `);x(i,"defaultIconSrc","data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMyAxNy4yNVYyMWgzLjc1TDE3LjgxIDkuOTRsLTMuNzUtMy43NUwzIDE3LjI1ek0yMC43MSA3LjA0Yy4zOS0uMzkuMzktMS4wMiAwLTEuNDFsLTIuMzQtMi4zNGMtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDBsLTEuODMgMS44MyAzLjc1IDMuNzUgMS44My0xLjgzeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=");o([n({type:String})],i.prototype,"contMaxHeight",2);o([n({type:String})],i.prototype,"contMinHeight",2);o([n({type:String})],i.prototype,"contMaxWidth",2);o([n({type:String})],i.prototype,"contMinWidth",2);o([n({type:String})],i.prototype,"contFocusBgColor",2);o([n({type:String})],i.prototype,"contErrorBgColor",2);o([n({type:String})],i.prototype,"contPadX",2);o([n({type:String})],i.prototype,"contPadY",2);o([n({type:String})],i.prototype,"contBorderRadius",2);o([n({type:String})],i.prototype,"contOverflowX",2);o([n({type:String})],i.prototype,"contOverflowY",2);o([n({type:String})],i.prototype,"textBoxMinHeight",2);o([n({type:String})],i.prototype,"textBoxMinWidth",2);o([n({type:String})],i.prototype,"textBoxMaxHeight",2);o([n({type:String})],i.prototype,"textBoxMaxWidth",2);o([n({type:String})],i.prototype,"textLineHeight",2);o([n({type:String})],i.prototype,"fontFamily",2);o([n({type:String})],i.prototype,"fontWeight",2);o([n({type:String})],i.prototype,"fontSize",2);o([n({type:String})],i.prototype,"textColor",2);o([n({type:String})],i.prototype,"textAlign",2);o([n({type:String})],i.prototype,"focusFontFamily",2);o([n({type:String})],i.prototype,"focusFontWeight",2);o([n({type:String})],i.prototype,"placeholderColor",2);o([n({type:String})],i.prototype,"placeholderFontStyle",2);o([n({type:String})],i.prototype,"placeholderFontFamily",2);o([n({type:Boolean})],i.prototype,"multiLine",2);o([n({type:String})],i.prototype,"hoverIconSrc",2);o([n({type:String})],i.prototype,"hoverIconHeight",2);o([n({type:String})],i.prototype,"hoverIconWidth",2);o([n({type:String})],i.prototype,"value",2);o([n({type:Boolean})],i.prototype,"error",2);o([n({type:String})],i.prototype,"placeholder",2);o([n({type:Function})],i.prototype,"handleChange",2);o([n({type:Function})],i.prototype,"handleBlur",2);o([n({type:Function})],i.prototype,"handleKeyUp",2);i=o([m("invisible-input")],i);const M={title:"Components/Text/Invisible Input",tags:["autodocs"],parameters:{docs:{description:{component:`
### '<invisible-input>'

A flexible input component that supports both **single-line** and **multi-line** modes using a unified styling system.

Set 'multiLine' to 'true' to render a textarea html element, otherwise a standard input html element is used.

---

### CSS Custom Properties

#### Container

| Variable | Description |
|----------|------------|
| '--invisible-input-cont-min-height' | Minimum container height - supports only fixed values like px,em... (for example not %) |
| '--invisible-input-cont-min-width' | Minimum container width - supports only fixed values like px,em... (for example not %) |
| '--invisible-input-cont-max-height' | Maximum container height - supports only fixed values like px,em... (for example not %) |
| '--invisible-input-cont-max-width' | Maximum container width - supports only fixed values like px,em... (for example not %) |
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
| '--invisible-input-textbox-min-height' | Minimum height - supports only px (in some browser in multiline mode may be overwritten by the browser and set to higher value) |
| '--invisible-input-textbox-min-width' | Minimum width - supports only px |
| '--invisible-input-textbox-max-height' | Maximum height - supports only px |
| '--invisible-input-textbox-max-width' | Maximum width - supports only px |
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
- Error state is controlled via the 'error' property.`}}},argTypes:{contMinHeight:{control:"text",description:"Minimum container height - supports only fixed values like px,em... (for example not %)",table:{category:"Container",defaultValue:{summary:"28px"}}},contMinWidth:{control:"text",description:"Minimum container width - supports only fixed values like px,em... (for example not %)",table:{category:"Container",defaultValue:{summary:"400px"}}},contMaxHeight:{control:"text",description:"Maximum container height - supports only fixed values like px,em... (for example not %)",table:{category:"Container",defaultValue:{summary:"28px"}}},contMaxWidth:{control:"text",description:"Maximum container width - supports only fixed values like px,em... (for example not %)",table:{category:"Container",defaultValue:{summary:"400px"}}},contPadX:{control:"text",description:"Horizontal container padding",table:{category:"Container",defaultValue:{summary:"0"}}},contPadY:{control:"text",description:"Vertical container padding",table:{category:"Container",defaultValue:{summary:"0"}}},contBorderRadius:{control:"text",description:"Border radius",table:{category:"Container",defaultValue:{summary:"4px"}}},contOverflowX:{control:"text",description:"Horizontal overflow",table:{category:"Container",defaultValue:{summary:"auto"}}},contOverflowY:{control:"text",description:"Vertical overflow",table:{category:"Container",defaultValue:{summary:"auto"}}},contFocusBgColor:{control:"color",description:"Background color on focus",table:{category:"Container",defaultValue:{summary:"transparent"}}},contErrorBgColor:{control:"color",description:"Background color in error state",table:{category:"Container",defaultValue:{summary:"rgba(200, 40, 40, 0.4)"}}},textBoxMinHeight:{control:"text",description:"Minimum textbox height - supports only px (in some browser in multiline mode may be overwritten by the browser and set to higher value)",table:{category:"Text Box",defaultValue:{summary:"28px"}}},textBoxMinWidth:{control:"text",description:"Minimum textbox width - supports only px",table:{category:"Text Box",defaultValue:{summary:"400px"}}},textBoxMaxHeight:{control:"text",description:"Maximum textbox height - supports only px",table:{category:"Text Box",defaultValue:{summary:"28px"}}},textBoxMaxWidth:{control:"text",description:"Maximum textbox width - supports only px",table:{category:"Text Box",defaultValue:{summary:"400px"}}},textLineHeight:{control:"text",description:"Line height",table:{category:"Text Box",defaultValue:{summary:"27px"}}},fontFamily:{control:"text",description:"Font family",table:{category:"Typography",defaultValue:{summary:"'FiraMono', monospace"}}},fontWeight:{control:"text",description:"Font weight",table:{category:"Typography",defaultValue:{summary:"normal"}}},fontSize:{control:"text",description:"Font size",table:{category:"Typography",defaultValue:{summary:"20px"}}},textColor:{control:"color",description:"Text color",table:{category:"Typography",defaultValue:{summary:"black"}}},textAlign:{control:"text",description:"Text alignment",table:{category:"Typography",defaultValue:{summary:"start"}}},focusFontFamily:{control:"text",description:"Font family on focus",table:{category:"Focus",defaultValue:{summary:"'FiraMonoBold', monospace"}}},focusFontWeight:{control:"text",description:"Font weight on focus",table:{category:"Focus",defaultValue:{summary:"bold"}}},placeholderColor:{control:"color",description:"Placeholder color",table:{category:"Placeholder",defaultValue:{summary:"gray"}}},placeholderFontStyle:{control:"text",description:"Placeholder font style",table:{category:"Placeholder",defaultValue:{summary:"normal"}}},placeholderFontFamily:{control:"text",description:"Placeholder font family",table:{category:"Placeholder",defaultValue:{summary:"'FiraMono', monospace"}}},multiLine:{control:"boolean",description:"Enable multi-line textarea",table:{category:"Mode",defaultValue:{summary:"false"}}},hoverIconSrc:{control:"text",description:"Hover icon source",table:{category:"Hover Icon"}},hoverIconHeight:{control:"text",description:"Hover icon height",table:{category:"Hover Icon",defaultValue:{summary:"24px"}}},hoverIconWidth:{control:"text",description:"Hover icon width",table:{category:"Hover Icon",defaultValue:{summary:"24px"}}},value:{control:"text",description:"Input value",table:{category:"Content"}},placeholder:{control:"text",description:"Placeholder text",table:{category:"Content"}},error:{control:"boolean",description:"Error state",table:{category:"State",defaultValue:{summary:"false"}}},handleChange:{control:!1,description:"Change callback",table:{category:"Events"}},handleBlur:{control:!1,description:"Blur callback",table:{category:"Events"}},handleKeyUp:{control:!1,description:"Key up callback",table:{category:"Events"}}}},p=t=>c`
  <invisible-input
    .contMinHeight=${t.contMinHeight}
    .contMinWidth=${t.contMinWidth}
    .contMaxHeight=${t.contMaxHeight}
    .contMaxWidth=${t.contMaxWidth}
    .contPadX=${t.contPadX}
    .contPadY=${t.contPadY}
    .contBorderRadius=${t.contBorderRadius}
    .contOverflowX=${t.contOverflowX}
    .contOverflowY=${t.contOverflowY}
    .textBoxMinHeight=${t.textBoxMinHeight}
    .textBoxMinWidth=${t.textBoxMinWidth}
    .textBoxMaxHeight=${t.textBoxMaxHeight}
    .textBoxMaxWidth=${t.textBoxMaxWidth}
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
    .contFocusBgColor=${t.contFocusBgColor}
    .contErrorBgColor=${t.contErrorBgColor}
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
  ></invisible-input>
`;p.args={contMinHeight:"28px",contMinWidth:"400px",contMaxHeight:"28px",contMaxWidth:"400px",contPadX:"8px",contPadY:"6px",contBorderRadius:"6px",contOverflowX:"auto",contOverflowY:"auto",textBoxMinHeight:"28px",textBoxMinWidth:"400px",textBoxMaxHeight:"28px",textBoxMaxWidth:"400px",textLineHeight:"27px",fontFamily:"'FiraMono', monospace",fontWeight:"normal",fontSize:"20px",textColor:"black",textAlign:"start",focusFontFamily:"'FiraMonoBold', monospace",focusFontWeight:"bold",placeholderColor:"gray",placeholderFontStyle:"normal",placeholderFontFamily:"'FiraMono', monospace",contFocusBgColor:"transparent",contErrorBgColor:"rgba(200, 40, 40, 0.4)",multiLine:!1,hoverIconHeight:"24px",hoverIconWidth:"24px",value:"",placeholder:"Enter text here...",error:!1,handleBlur:t=>console.log(`Blur: ${t}`),handleChange:t=>console.log(`Change: ${t}`),handleKeyUp:t=>console.log(`KeyUp: ${t}`)};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => html\`
  <invisible-input
    .contMinHeight=\${args.contMinHeight}
    .contMinWidth=\${args.contMinWidth}
    .contMaxHeight=\${args.contMaxHeight}
    .contMaxWidth=\${args.contMaxWidth}
    .contPadX=\${args.contPadX}
    .contPadY=\${args.contPadY}
    .contBorderRadius=\${args.contBorderRadius}
    .contOverflowX=\${args.contOverflowX}
    .contOverflowY=\${args.contOverflowY}
    .textBoxMinHeight=\${args.textBoxMinHeight}
    .textBoxMinWidth=\${args.textBoxMinWidth}
    .textBoxMaxHeight=\${args.textBoxMaxHeight}
    .textBoxMaxWidth=\${args.textBoxMaxWidth}
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
    .contFocusBgColor=\${args.contFocusBgColor}
    .contErrorBgColor=\${args.contErrorBgColor}
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
  ></invisible-input>
\``,...p.parameters?.docs?.source}}};const w=["Default"];export{p as Default,w as __namedExportsOrder,M as default};
