import{i as x,a as h,x as d}from"./iframe-DkD8NZt-.js";import{n as r,t as m}from"./property-rgYTM_nL.js";var s=Object.defineProperty,g=Object.getOwnPropertyDescriptor,y=(t,e,n)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,i=(t,e,n,u)=>{for(var p=u>1?void 0:u?g(e,n):e,l=t.length-1,c;l>=0;l--)(c=t[l])&&(p=(u?c(e,n,p):c(p))||p);return u&&p&&s(e,n,p),p},f=(t,e,n)=>y(t,e+"",n);let o=class extends h{writeHandler(t){this.onWrite&&this.onWrite(t.target.value)}submitHandler(t){t.key==="Enter"&&this.onSubmit&&this.onSubmit(t.target.value)}updateStyleVariable(t,e,n){const u=this[t]??n;this.style.setProperty(e,u)}async focus(){await this.updateComplete,this.renderRoot?.querySelector("input")?.focus()}updated(t){const e=(n,u,p)=>t.has(n)&&this.updateStyleVariable(n,u,p);e("compHeight","--text-input-comp-height","26px"),e("compWidth","--text-input-comp-width","500px"),e("inputHeight","--text-input-height","100%"),e("inputWidth","--text-input-width","100%"),e("inputBorderColor","--text-input-border-color","#cfd8dc"),e("inputBorderRadius","--text-input-border-radius","8px"),e("inputColor","--text-input-background-color","#fafafa"),e("textColor","--text-input-text-color","#333"),e("textFontSize","--text-input-font-size","14px"),e("textFontWeight","--text-input-font-weight","normal"),e("textFontFamily","--text-input-font-family","'Helvetica', 'Arial', sans-serif")}render(){return d`<input
      @keydown=${t=>this.submitHandler(t)}
      @keyup=${t=>this.writeHandler(t)}
      type="text"
      placeholder=${this.placeholder??""}
      .value=${this.value??""}
      part="text-input"
    />`}};f(o,"styles",x`
    :host {
      display: inline-block;
      height: var(--text-input-comp-height, 26px);
      width: var(--text-input-comp-width, 500px);
      max-height: var(--text-input-comp-height, 26px);
      max-width: var(--text-input-comp-width, 500px);
    }

    input {
      display: block;
      height: var(--text-input-height, 100%);
      width: var(--text-input-width, 100%);
      box-sizing: border-box;
      border-color: var(--text-input-border-color, #cfd8dc);
      border-radius: var(--text-input-border-radius, 8px);
      background-color: var(--text-input-background-color, #fafafa);
      color: var(--text-input-text-color, #333);
      font-size: var(--text-input-font-size, 14px);
      font-weight: var(--text-input-font-weight, normal);
      font-family: var(
        --text-input-font-family,
        'Helvetica',
        'Arial',
        sans-serif
      );
    }
  `);i([r({type:String})],o.prototype,"compHeight",2);i([r({type:String})],o.prototype,"compWidth",2);i([r({type:String})],o.prototype,"inputHeight",2);i([r({type:String})],o.prototype,"inputWidth",2);i([r({type:String})],o.prototype,"inputBorderColor",2);i([r({type:String})],o.prototype,"inputBorderRadius",2);i([r({type:String})],o.prototype,"inputColor",2);i([r({type:Function})],o.prototype,"onWrite",2);i([r({type:Function})],o.prototype,"onSubmit",2);i([r({type:String})],o.prototype,"textColor",2);i([r({type:String})],o.prototype,"textFontSize",2);i([r({type:String})],o.prototype,"textFontWeight",2);i([r({type:String})],o.prototype,"textFontFamily",2);i([r({type:String})],o.prototype,"placeholder",2);i([r({type:String})],o.prototype,"value",2);o=i([m("text-input")],o);const v={title:"Components/Text/Text Input",tags:["autodocs"],parameters:{docs:{description:{component:`
### \`<text-input>\`

Basic text input component.

#### CSS Custom Properties

| Variable                              | Description                     |
|----------------------------------------|---------------------------------|
| \`--text-input-comp-height\`           | Height of outer wrapper         |
| \`--text-input-comp-width\`            | Width of outer wrapper          |
| \`--text-input-height\`                | Input field height              |
| \`--text-input-width\`                 | Input field width               |
| \`--text-input-border-color\`          | Input border color              |
| \`--text-input-border-radius\`         | Input border radius             |
| \`--text-input-background-color\`      | Input background color          |
| \`--text-input-text-color\`            | Text color inside input         |
| \`--text-input-font-size\`             | Font size of input text         |
| \`--text-input-font-weight\`           | Font weight of input text       |
| \`--text-input-font-family\`           | Font family for input text      |

#### Shadow DOM Parts

| Part Name    | Element | Description           |
|--------------|---------|-----------------------|
| \`text-input\` | \`input\` | The input element        |

#### Methods

| Method | Description |
|--------|-------------|
| \`focus()\` | Focuses the internal input element |
        `}}},argTypes:{compHeight:{control:"text",description:"Height of the outer component container",table:{category:"Layout",defaultValue:{summary:"26px"}}},compWidth:{control:"text",description:"Width of the outer component container",table:{category:"Layout",defaultValue:{summary:"500px"}}},inputHeight:{control:"text",description:"Height of the input box",table:{category:"Input",defaultValue:{summary:"100%"}}},inputWidth:{control:"text",description:"Width of the input box",table:{category:"Input",defaultValue:{summary:"100%"}}},inputBorderColor:{control:"color",description:"Border color of the input box",table:{category:"Input",defaultValue:{summary:"#cfd8dc"}}},inputBorderRadius:{control:"text",description:"Border radius of the input box",table:{category:"Input",defaultValue:{summary:"8px"}}},inputColor:{control:"color",description:"Background color of the input",table:{category:"Input",defaultValue:{summary:"#fafafa"}}},textColor:{control:"color",description:"Text color inside the input",table:{category:"Text",defaultValue:{summary:"#333"}}},textFontSize:{control:"text",description:"Font size of the input text",table:{category:"Text",defaultValue:{summary:"14px"}}},textFontWeight:{control:"text",description:"Font weight of the input text",table:{category:"Text",defaultValue:{summary:"normal"}}},textFontFamily:{control:"text",description:"Font family of the input text",table:{category:"Text",defaultValue:{summary:"'Helvetica', 'Arial', sans-serif"}}},placeholder:{control:"text",description:"Placeholder text inside the input",table:{category:"Input",defaultValue:{summary:""}}},value:{control:"text",description:"Value of the input",table:{category:"Input",defaultValue:{summary:""}}},onWrite:{action:"keyup",description:"Function to handle keyup event. Receives input value as string.",table:{category:"Events"}},onSubmit:{action:"keydown",description:"Function to handle submit event (press of enter key). Receives input value as string.",table:{category:"Events"}}}},a=t=>d`
  <text-input
    .compHeight=${t.compHeight}
    .compWidth=${t.compWidth}
    .inputHeight=${t.inputHeight}
    .inputWidth=${t.inputWidth}
    .inputBorderColor=${t.inputBorderColor}
    .inputBorderRadius=${t.inputBorderRadius}
    .inputColor=${t.inputColor}
    .textColor=${t.textColor}
    .textFontSize=${t.textFontSize}
    .textFontWeight=${t.textFontWeight}
    .textFontFamily=${t.textFontFamily}
    .placeholder=${t.placeholder}
    .value=${t.value}
    .onWrite=${t.onWrite}
    .onSubmit=${t.onSubmit}
  ></text-input>
`;a.args={compHeight:"26px",compWidth:"500px",inputHeight:"100%",inputWidth:"100%",inputBorderColor:"#cfd8dc",inputBorderRadius:"8px",inputColor:"#fafafa",textColor:"#333",textFontSize:"14px",textFontWeight:"normal",textFontFamily:"'Helvetica', 'Arial', sans-serif",placeholder:"Enter text...",value:"",onWrite:t=>console.log("Write:",t),onSubmit:t=>console.log("Submit:",t)};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => html\`
  <text-input
    .compHeight=\${args.compHeight}
    .compWidth=\${args.compWidth}
    .inputHeight=\${args.inputHeight}
    .inputWidth=\${args.inputWidth}
    .inputBorderColor=\${args.inputBorderColor}
    .inputBorderRadius=\${args.inputBorderRadius}
    .inputColor=\${args.inputColor}
    .textColor=\${args.textColor}
    .textFontSize=\${args.textFontSize}
    .textFontWeight=\${args.textFontWeight}
    .textFontFamily=\${args.textFontFamily}
    .placeholder=\${args.placeholder}
    .value=\${args.value}
    .onWrite=\${args.onWrite}
    .onSubmit=\${args.onSubmit}
  ></text-input>
\``,...a.parameters?.docs?.source}}};const S=["Default"];export{a as Default,S as __namedExportsOrder,v as default};
