import{i as s,a as h,x as c}from"./iframe-CK5V5V3N.js";import{n as r,t as m}from"./property-CcJRuCMl.js";var x=Object.defineProperty,g=Object.getOwnPropertyDescriptor,f=(t,e,n)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,i=(t,e,n,a)=>{for(var p=a>1?void 0:a?g(e,n):e,l=t.length-1,d;l>=0;l--)(d=t[l])&&(p=(a?d(e,n,p):d(p))||p);return a&&p&&x(e,n,p),p},y=(t,e,n)=>f(t,e+"",n);let o=class extends h{writeHandler(t){this.onWrite&&this.onWrite(t.target.value)}updateStyleVariable(t,e,n){const a=this[t]??n;this.style.setProperty(e,a)}updated(t){const e=(n,a,p)=>t.has(n)&&this.updateStyleVariable(n,a,p);e("compHeight","--text-input-comp-height","26px"),e("compWidth","--text-input-comp-width","500px"),e("inputHeight","--text-input-height","100%"),e("inputWidth","--text-input-width","100%"),e("inputBorderColor","--text-input-border-color","#cfd8dc"),e("inputBorderRadius","--text-input-border-radius","8px"),e("inputColor","--text-input-background-color","#fafafa"),e("textColor","--text-input-text-color","#333"),e("textFontSize","--text-input-font-size","14px"),e("textFontWeight","--text-input-font-weight","normal"),e("textFontFamily","--text-input-font-family","'Helvetica', 'Arial', sans-serif")}render(){return c`<input
      @keyup=${t=>this.writeHandler(t)}
      type="text"
      placeholder=${this.placeholder??""}
      .value=${this.value??""}
      part="text-input"
    />`}};y(o,"styles",s`
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
  `);i([r({type:String})],o.prototype,"compHeight",2);i([r({type:String})],o.prototype,"compWidth",2);i([r({type:String})],o.prototype,"inputHeight",2);i([r({type:String})],o.prototype,"inputWidth",2);i([r({type:String})],o.prototype,"inputBorderColor",2);i([r({type:String})],o.prototype,"inputBorderRadius",2);i([r({type:String})],o.prototype,"inputColor",2);i([r({type:Function})],o.prototype,"onWrite",2);i([r({type:String})],o.prototype,"textColor",2);i([r({type:String})],o.prototype,"textFontSize",2);i([r({type:String})],o.prototype,"textFontWeight",2);i([r({type:String})],o.prototype,"textFontFamily",2);i([r({type:String})],o.prototype,"placeholder",2);i([r({type:String})],o.prototype,"value",2);o=i([m("text-input")],o);const v={title:"Components/Text/Text Input",tags:["autodocs"],parameters:{docs:{description:{component:"\n### `<text-input>`\n\nBasic text input component.\n\n#### CSS Custom Properties\n\n| Variable                              | Description                     |\n|----------------------------------------|---------------------------------|\n| `--text-input-comp-height`           | Height of outer wrapper         |\n| `--text-input-comp-width`            | Width of outer wrapper          |\n| `--text-input-height`                | Input field height              |\n| `--text-input-width`                 | Input field width               |\n| `--text-input-border-color`          | Input border color              |\n| `--text-input-border-radius`         | Input border radius             |\n| `--text-input-background-color`      | Input background color          |\n| `--text-input-text-color`            | Text color inside input         |\n| `--text-input-font-size`             | Font size of input text         |\n| `--text-input-font-weight`           | Font weight of input text       |\n| `--text-input-font-family`           | Font family for input text      |\n\n#### Shadow DOM Parts\n\n| Part Name    | Element | Description           |\n|--------------|---------|-----------------------|\n| `text-input` | `input` | The input element        |\n        "}}},argTypes:{compHeight:{control:"text",description:"Height of the outer component container",table:{category:"Layout",defaultValue:{summary:"26px"}}},compWidth:{control:"text",description:"Width of the outer component container",table:{category:"Layout",defaultValue:{summary:"500px"}}},inputHeight:{control:"text",description:"Height of the input box",table:{category:"Input",defaultValue:{summary:"100%"}}},inputWidth:{control:"text",description:"Width of the input box",table:{category:"Input",defaultValue:{summary:"100%"}}},inputBorderColor:{control:"color",description:"Border color of the input box",table:{category:"Input",defaultValue:{summary:"#cfd8dc"}}},inputBorderRadius:{control:"text",description:"Border radius of the input box",table:{category:"Input",defaultValue:{summary:"8px"}}},inputColor:{control:"color",description:"Background color of the input",table:{category:"Input",defaultValue:{summary:"#fafafa"}}},textColor:{control:"color",description:"Text color inside the input",table:{category:"Text",defaultValue:{summary:"#333"}}},textFontSize:{control:"text",description:"Font size of the input text",table:{category:"Text",defaultValue:{summary:"14px"}}},textFontWeight:{control:"text",description:"Font weight of the input text",table:{category:"Text",defaultValue:{summary:"normal"}}},textFontFamily:{control:"text",description:"Font family of the input text",table:{category:"Text",defaultValue:{summary:"'Helvetica', 'Arial', sans-serif"}}},placeholder:{control:"text",description:"Placeholder text inside the input",table:{category:"Input",defaultValue:{summary:""}}},value:{control:"text",description:"Value of the input",table:{category:"Input",defaultValue:{summary:""}}},onWrite:{action:"keyup",description:"Function to handle keyup event. Receives input value as string.",table:{category:"Events"}}}},u=t=>c`
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
  ></text-input>
`;u.args={compHeight:"26px",compWidth:"500px",inputHeight:"100%",inputWidth:"100%",inputBorderColor:"#cfd8dc",inputBorderRadius:"8px",inputColor:"#fafafa",textColor:"#333",textFontSize:"14px",textFontWeight:"normal",textFontFamily:"'Helvetica', 'Arial', sans-serif",placeholder:"Enter text...",value:"",onWrite:t=>console.log("Write:",t)};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => html\`
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
  ></text-input>
\``,...u.parameters?.docs?.source}}};const W=["Default"];export{u as Default,W as __namedExportsOrder,v as default};
