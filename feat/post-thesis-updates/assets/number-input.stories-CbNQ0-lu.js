import{i as s,a as m,x as h}from"./iframe-_MpM58oJ.js";import{n as i,t as x}from"./property-BraZR-Uc.js";var c=Object.defineProperty,g=Object.getOwnPropertyDescriptor,y=(t,e,r)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,n=(t,e,r,p)=>{for(var a=p>1?void 0:p?g(e,r):e,l=t.length-1,d;l>=0;l--)(d=t[l])&&(a=(p?d(e,r,a):d(a))||a);return p&&a&&c(e,r,a),a},f=(t,e,r)=>y(t,e+"",r);let o=class extends m{getInputValue(t){const e=t.target.value;return e===""?void 0:Number(e)}changeHandler(t){this.handleChange&&this.handleChange(this.getInputValue(t))}blurHandler(t){this.handleBlur&&this.handleBlur(this.getInputValue(t))}keyUpHandler(t){this.handleKeyUp&&this.handleKeyUp(this.getInputValue(t))}updateStyleVariable(t,e,r){const p=this[t]??r;this.style.setProperty(e,p)}updated(t){const e=(r,p,a)=>t.has(r)&&this.updateStyleVariable(r,p,a);e("compHeight","--text-input-comp-height","26px"),e("compWidth","--text-input-comp-width","500px"),e("inputHeight","--text-input-height","100%"),e("inputWidth","--text-input-width","100%"),e("inputBorderColor","--text-input-border-color","#cfd8dc"),e("inputBorderRadius","--text-input-border-radius","8px"),e("inputColor","--text-input-background-color","#fafafa"),e("textColor","--text-input-text-color","#333"),e("textFontSize","--text-input-font-size","14px"),e("textFontWeight","--text-input-font-weight","normal"),e("textFontFamily","--text-input-font-family","'Helvetica', 'Arial', sans-serif")}render(){return h`<input
      @keyup=${t=>this.keyUpHandler(t)}
      @change=${t=>this.changeHandler(t)}
      @blur=${t=>this.blurHandler(t)}
      type="number"
      min=${this.min??""}
      max=${this.max??""}
      step=${this.step??""}
      placeholder=${this.placeholder??""}
      .value=${this.value??""}
      part="number-input"
    />`}};f(o,"styles",s`
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
  `);n([i({type:String})],o.prototype,"compHeight",2);n([i({type:String})],o.prototype,"compWidth",2);n([i({type:String})],o.prototype,"inputHeight",2);n([i({type:String})],o.prototype,"inputWidth",2);n([i({type:String})],o.prototype,"inputBorderColor",2);n([i({type:String})],o.prototype,"inputBorderRadius",2);n([i({type:String})],o.prototype,"inputColor",2);n([i({type:String})],o.prototype,"textColor",2);n([i({type:String})],o.prototype,"textFontSize",2);n([i({type:String})],o.prototype,"textFontWeight",2);n([i({type:String})],o.prototype,"textFontFamily",2);n([i({type:String})],o.prototype,"placeholder",2);n([i({type:String})],o.prototype,"value",2);n([i({type:Number})],o.prototype,"min",2);n([i({type:Number})],o.prototype,"max",2);n([i({type:Number})],o.prototype,"step",2);n([i({type:Function})],o.prototype,"handleChange",2);n([i({type:Function})],o.prototype,"handleBlur",2);n([i({type:Function})],o.prototype,"handleKeyUp",2);o=n([x("number-input")],o);const $={title:"Components/Text/Number Input",tags:["autodocs"],parameters:{docs:{description:{component:"\n### `<number-input>`\n\nBasic number input component.\n\n#### CSS Custom Properties\n\n| Variable                        | Description                        |\n|----------------------------------|------------------------------------|\n| `--text-input-comp-height`     | Height of outer wrapper            |\n| `--text-input-comp-width`      | Width of outer wrapper             |\n| `--text-input-height`          | Input field height                 |\n| `--text-input-width`           | Input field width                  |\n| `--text-input-border-color`    | Input border color                 |\n| `--text-input-border-radius`   | Input border radius                |\n| `--text-input-background-color`| Input background color             |\n| `--text-input-text-color`      | Text color inside input            |\n| `--text-input-font-size`       | Font size of input text            |\n| `--text-input-font-weight`     | Font weight of input text          |\n| `--text-input-font-family`     | Font family for input text         |\n\n#### Shadow DOM Parts\n\n| Part Name      | Element | Description         |\n|----------------|---------|---------------------|\n| `number-input` | `input` | The input element  |\n        "}}},argTypes:{compHeight:{control:"text",description:"Height of the outer component container",table:{defaultValue:{summary:"26px"},category:"Layout"}},compWidth:{control:"text",description:"Width of the outer component container",table:{defaultValue:{summary:"500px"},category:"Layout"}},inputHeight:{control:"text",description:"Height of the input box",table:{defaultValue:{summary:"100%"},category:"Input"}},inputWidth:{control:"text",description:"Width of the input box",table:{defaultValue:{summary:"100%"},category:"Input"}},inputBorderColor:{control:"color",description:"Border color of the input box",table:{defaultValue:{summary:"#cfd8dc"},category:"Input"}},inputBorderRadius:{control:"text",description:"Border radius of the input box",table:{defaultValue:{summary:"8px"},category:"Input"}},inputColor:{control:"color",description:"Background color of the input",table:{defaultValue:{summary:"#fafafa"},category:"Input"}},textColor:{control:"color",description:"Text color inside the input",table:{defaultValue:{summary:"#333"},category:"Text"}},textFontSize:{control:"text",description:"Font size of the input text",table:{defaultValue:{summary:"14px"},category:"Text"}},textFontWeight:{control:"text",description:"Font weight of the input text",table:{defaultValue:{summary:"normal"},category:"Text"}},textFontFamily:{control:"text",description:"Font family of the input text",table:{defaultValue:{summary:"'Helvetica', 'Arial', sans-serif"},category:"Text"}},placeholder:{control:"text",description:"Placeholder text inside the input",table:{defaultValue:{summary:""},category:"Input"}},value:{control:"text",description:"Value of the input",table:{defaultValue:{summary:""},category:"Input"}},min:{control:"number",description:"Minimum value",table:{defaultValue:{summary:void 0},category:"Input"}},max:{control:"number",description:"Maximum value",table:{defaultValue:{summary:void 0},category:"Input"}},step:{control:"number",description:"Step value",table:{defaultValue:{summary:void 0},category:"Input"}},handleChange:{action:"change",description:"Function to handle change event. Receives input value as number or undefined.",table:{category:"Events"}},handleBlur:{action:"blur",description:"Function to handle blur event. Receives input value as number or undefined.",table:{category:"Events"}},handleKeyUp:{action:"keyup",description:"Function to handle keyup event. Receives input value as number or undefined.",table:{category:"Events"}}}},u=t=>h`
  <number-input
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
    .min=${t.min}
    .max=${t.max}
    .step=${t.step}
    .handleChange=${t.handleChange}
    .handleBlur=${t.handleBlur}
    .handleKeyUp=${t.handleKeyUp}
  ></number-input>
`;u.args={compHeight:"26px",compWidth:"500px",inputHeight:"100%",inputWidth:"100%",inputBorderColor:"#cfd8dc",inputBorderRadius:"8px",inputColor:"#fafafa",textColor:"#333",textFontSize:"14px",textFontWeight:"normal",textFontFamily:"'Helvetica', 'Arial', sans-serif",placeholder:"Enter a number...",value:"",min:void 0,max:void 0,step:void 0,handleChange:t=>console.log("Change:",t),handleBlur:t=>console.log("Blur:",t),handleKeyUp:t=>console.log("KeyUp:",t)};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => html\`
  <number-input
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
    .min=\${args.min}
    .max=\${args.max}
    .step=\${args.step}
    .handleChange=\${args.handleChange}
    .handleBlur=\${args.handleBlur}
    .handleKeyUp=\${args.handleKeyUp}
  ></number-input>
\``,...u.parameters?.docs?.source}}};const F=["Default"];export{u as Default,F as __namedExportsOrder,$ as default};
