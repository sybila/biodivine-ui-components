import{i as c,a as f,x}from"./iframe-BaeWje9I.js";import{n as r,t as b}from"./property-BTrKnaGH.js";var u=Object.defineProperty,s=Object.getOwnPropertyDescriptor,p=(t,e,n)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,i=(t,e,n,a)=>{for(var l=a>1?void 0:a?s(e,n):e,d=t.length-1,g;d>=0;d--)(g=t[d])&&(l=(a?g(e,n,l):g(l))||l);return a&&l&&u(e,n,l),l},m=(t,e,n)=>p(t,e+"",n);let o=class extends f{updateStyleVariable(t,e,n){const a=this[t]??n;this.style.setProperty(e,a)}updated(t){const e=(n,a,l)=>t.has(n)&&this.updateStyleVariable(n,a,l);e("compHeight","--double-text-button-comp-height","60px"),e("compWidth","--double-text-button-comp-width","242px"),e("buttonHeight","--double-text-button-height","100%"),e("buttonWidth","--double-text-button-width","100%"),e("buttonBorderRadius","--double-text-button-border-radius","12px"),e("buttonShadow","--double-text-button-shadow","0px 2px 5px #d0d0d0"),e("leftColor","--double-text-button-left-bg-color","#eceff1"),e("leftHoverColor","--double-text-button-left-hover-bg-color","#CFD8DC"),e("leftPadX","--double-text-button-left-padx","10px"),e("leftWidth","--double-text-button-left-width","50%"),e("leftTextFontSize","--double-text-button-left-font-size","16px"),e("leftTextFontWeight","--double-text-button-left-font-weight","bold"),e("leftTextFontFamily","--double-text-button-left-font-family","'Helvetica', 'Arial', sans-serif"),e("leftTextColor","--double-text-button-left-color","black"),e("leftTextShadow","--double-text-button-left-text-shadow","0px 2px 5px #d0d0d0"),e("leftTextTransform","--double-text-button-left-text-transform","none"),e("leftTextAlign","--double-text-button-left-text-align","center"),e("leftLineHeight","--double-text-button-left-line-height","21px"),e("rightColor","--double-text-button-right-bg-color","#cfd8dc"),e("rightHoverColor","--double-text-button-right-hover-bg-color","#B0BEC5"),e("rightPadX","--double-text-button-right-padx","10px"),e("rightWidth","--double-text-button-right-width","50%"),e("rightTextFontSize","--double-text-button-right-font-size","16px"),e("rightTextFontWeight","--double-text-button-right-font-weight","bold"),e("rightTextFontFamily","--double-text-button-right-font-family","'Helvetica', 'Arial', sans-serif"),e("rightTextColor","--double-text-button-right-color","black"),e("rightTextShadow","--double-text-button-right-text-shadow","0px 2px 5px #d0d0d0"),e("rightTextTransform","--double-text-button-right-text-transform","none"),e("rightTextAlign","--double-text-button-right-text-align","center"),e("rightLineHeight","--double-text-button-right-line-height","21px")}render(){return x`<button part="button" @click="${this.onClick}">
      <span id="left-section" part="left-section">
        ${this.leftText?this.leftText:""}
      </span>
      <span id="right-section" part="right-section">
        ${this.rightText?this.rightText:""}
      </span>
    </button> `}};m(o,"styles",c`
    :host {
      display: inline-block;
      height: var(--double-text-button-comp-height, 60px);
      width: var(--double-text-button-comp-width, 242px);
      max-height: var(--double-text-button-comp-height, 60px);
      max-width: var(--double-text-button-comp-width, 242px);
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: var(--double-text-button-height, 100%);
      width: var(--double-text-button-width, 100%);
      box-shadow: var(--double-text-button-shadow, 0px 2px 5px #d0d0d0);
      padding: 0;
      background-color: transparent;
      border: none;
      border-radius: var(--double-text-button-border-radius, 12px);
      cursor: pointer;
      overflow: hidden;
    }

    button:hover #left-section {
      background-color: var(--double-text-button-left-hover-bg-color, #cfd8dc);
    }

    button:hover #right-section {
      background-color: var(--double-text-button-right-hover-bg-color, #b0bec5);
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      box-sizing: border-box;
      overflow: hidden;
      transition: background-color 0.3s;
    }

    #left-section {
      width: var(--double-text-button-left-width, 50%);
      background-color: var(--double-text-button-left-bg-color, #eceff1);
      padding-left: var(--double-text-button-left-padx, 10px);
      padding-right: var(--double-text-button-left-padx, 10px);
      font-size: var(--double-text-button-left-font-size, 16px);
      font-weight: var(--double-text-button-left-font-weight, bold);
      font-family: var(
        --double-text-button-left-font-family,
        'Helvetica',
        'Arial',
        sans-serif
      );
      text-shadow: var(
        --double-text-button-left-text-shadow,
        0px 2px 5px #d0d0d0
      );
      color: var(--double-text-button-left-color, black);
      text-transform: var(--double-text-button-left-text-transform, none);
      text-align: var(--double-text-button-left-text-align, center);
      line-height: var(--double-text-button-left-line-height, 21px);
    }

    #right-section {
      width: var(--double-text-button-right-width, 50%);
      background-color: var(--double-text-button-right-bg-color, #cfd8dc);
      padding-left: var(--double-text-button-right-padx, 10px);
      padding-right: var(--double-text-button-right-padx, 10px);
      font-size: var(--double-text-button-right-font-size, 16px);
      font-weight: var(--double-text-button-right-font-weight, bold);
      font-family: var(
        --double-text-button-right-font-family,
        'Helvetica',
        'Arial',
        sans-serif
      );
      text-shadow: var(
        --double-text-button-right-text-shadow,
        0px 2px 5px #d0d0d0
      );
      color: var(--double-text-button-right-color, black);
      text-transform: var(--double-text-button-right-text-transform, none);
      text-align: var(--double-text-button-right-text-align, center);
      line-height: var(--double-text-button-right-line-height, 21px);
    }
  `);i([r({type:String})],o.prototype,"compHeight",2);i([r({type:String})],o.prototype,"compWidth",2);i([r({type:String})],o.prototype,"buttonHeight",2);i([r({type:String})],o.prototype,"buttonWidth",2);i([r({type:String})],o.prototype,"buttonBorderRadius",2);i([r({type:String})],o.prototype,"buttonShadow",2);i([r({type:Function})],o.prototype,"onClick",2);i([r({type:String})],o.prototype,"leftColor",2);i([r({type:String})],o.prototype,"leftHoverColor",2);i([r({type:String})],o.prototype,"leftText",2);i([r({type:String})],o.prototype,"leftWidth",2);i([r({type:String})],o.prototype,"leftPadX",2);i([r({type:String})],o.prototype,"leftTextFontSize",2);i([r({type:String})],o.prototype,"leftTextFontWeight",2);i([r({type:String})],o.prototype,"leftTextFontFamily",2);i([r({type:String})],o.prototype,"leftTextColor",2);i([r({type:String})],o.prototype,"leftTextShadow",2);i([r({type:String})],o.prototype,"leftTextTransform",2);i([r({type:String})],o.prototype,"leftTextAlign",2);i([r({type:String})],o.prototype,"leftLineHeight",2);i([r({type:String})],o.prototype,"rightColor",2);i([r({type:String})],o.prototype,"rightHoverColor",2);i([r({type:String})],o.prototype,"rightText",2);i([r({type:String})],o.prototype,"rightWidth",2);i([r({type:String})],o.prototype,"rightPadX",2);i([r({type:String})],o.prototype,"rightTextFontSize",2);i([r({type:String})],o.prototype,"rightTextFontWeight",2);i([r({type:String})],o.prototype,"rightTextFontFamily",2);i([r({type:String})],o.prototype,"rightTextColor",2);i([r({type:String})],o.prototype,"rightTextShadow",2);i([r({type:String})],o.prototype,"rightTextTransform",2);i([r({type:String})],o.prototype,"rightTextAlign",2);i([r({type:String})],o.prototype,"rightLineHeight",2);o=i([b("double-text-button")],o);const S={title:"Components/Buttons/Double Text Button",tags:["autodocs"],parameters:{docs:{description:{component:"\n### `<double-text-button>`\n\nA button with two customizable text sections (left and right).\n\n#### CSS Custom Properties\n\n| Variable                                         | Description                              |\n|--------------------------------------------------|------------------------------------------|\n| `--double-text-button-comp-height`              | Container height                         |\n| `--double-text-button-comp-width`               | Container width                          |\n| `--double-text-button-height`                   | Button height                            |\n| `--double-text-button-width`                    | Button width                             |\n| `--double-text-button-border-radius`            | Button border radius                     |\n| `--double-text-button-shadow`                   | Button shadow                            |\n| `--double-text-button-left-bg-color`            | Left section background color            |\n| `--double-text-button-left-hover-bg-color`      | Left section hover background color      |\n| `--double-text-button-left-width`               | Left section width                       |\n| `--double-text-button-left-padx`                | Left section horizontal padding          |\n| `--double-text-button-left-font-size`           | Left section font size                   |\n| `--double-text-button-left-font-weight`         | Left section font weight                 |\n| `--double-text-button-left-font-family`         | Left section font family                 |\n| `--double-text-button-left-color`               | Left section text color                  |\n| `--double-text-button-left-text-shadow`         | Left section text shadow                 |\n| `--double-text-button-left-text-transform`      | Left section text transform              |\n| `--double-text-button-left-text-align`          | Left section text alignment              |\n| `--double-text-button-left-line-height`         | Left section line height                 |\n| `--double-text-button-right-bg-color`           | Right section background color           |\n| `--double-text-button-right-hover-bg-color`     | Right section hover background color     |\n| `--double-text-button-right-width`              | Right section width                      |\n| `--double-text-button-right-padx`               | Right section horizontal padding         |\n| `--double-text-button-right-font-size`          | Right section font size                  |\n| `--double-text-button-right-font-weight`        | Right section font weight                |\n| `--double-text-button-right-font-family`        | Right section font family                |\n| `--double-text-button-right-color`              | Right section text color                 |\n| `--double-text-button-right-text-shadow`        | Right section text shadow                |\n| `--double-text-button-right-text-transform`     | Right section text transform             |\n| `--double-text-button-right-text-align`         | Right section text alignment             |\n| `--double-text-button-right-line-height`        | Right section line height                |\n        \n#### Shadow DOM Parts\n\n| Part Name      | Description                |\n|----------------|----------------------------|\n| `button`        | The clickable button area  |\n| `left-section`  | Left text section         |\n| `right-section` | Right text section        |\n"}}},argTypes:{compHeight:{control:"text",description:"Height of the outer component container",table:{category:"Layout",defaultValue:{summary:"60px"}}},compWidth:{control:"text",description:"Width of the outer component container",table:{category:"Layout",defaultValue:{summary:"242px"}}},buttonHeight:{control:"text",description:"Height of the button",table:{category:"Button",defaultValue:{summary:"100%"}}},buttonWidth:{control:"text",description:"Width of the button",table:{category:"Button",defaultValue:{summary:"100%"}}},buttonBorderRadius:{control:"text",description:"Border radius of the button",table:{category:"Button",defaultValue:{summary:"12px"}}},buttonShadow:{control:"text",description:"Box shadow of the button",table:{category:"Button",defaultValue:{summary:"0px 2px 5px #d0d0d0"}}},onClick:{action:"clicked",description:"Click event handler",table:{type:{summary:"() => void"},category:"Events"},control:!1},leftColor:{control:"color",description:"Background color of the left section",table:{category:"Left Section",defaultValue:{summary:"#eceff1"}}},leftHoverColor:{control:"color",description:"Background color of the left section on hover",table:{category:"Left Section",defaultValue:{summary:"#cfd8dc"}}},leftText:{control:"text",description:"Text content of the left section",table:{category:"Left Section"}},leftWidth:{control:"text",description:"Width of the left section",table:{category:"Left Section",defaultValue:{summary:"300px"}}},leftPadX:{control:"text",description:"Horizontal padding of the left section",table:{category:"Left Section",defaultValue:{summary:"10px"}}},leftTextFontSize:{control:"text",description:"Font size of the left section text",table:{category:"Left Section",defaultValue:{summary:"16px"}}},leftTextFontWeight:{control:"text",description:"Font weight of the left section text",table:{category:"Left Section",defaultValue:{summary:"bold"}}},leftTextFontFamily:{control:"text",description:"Font family of the left section text",table:{category:"Left Section",defaultValue:{summary:"'Helvetica', 'Arial', sans-serif"}}},leftTextColor:{control:"color",description:"Color of the left section text",table:{category:"Left Section",defaultValue:{summary:"black"}}},leftTextShadow:{control:"text",description:"Text shadow for the left section text",table:{category:"Left Section",defaultValue:{summary:"0px 2px 5px #d0d0d0"}}},leftTextTransform:{control:"text",description:"Text transformation (e.g., uppercase, lowercase) for the left section",table:{category:"Left Section",defaultValue:{summary:"none"}}},leftTextAlign:{control:"text",description:"Text alignment within the left section",table:{category:"Left Section",defaultValue:{summary:"center"}}},leftLineHeight:{control:"text",description:"Line height of the left section text",table:{category:"Left Section",defaultValue:{summary:"21px"}}},rightColor:{control:"color",description:"Background color of the right section",table:{category:"Right Section",defaultValue:{summary:"#cfd8dc"}}},rightHoverColor:{control:"color",description:"Background color of the right section on hover",table:{category:"Right Section",defaultValue:{summary:"#B0BEC5"}}},rightText:{control:"text",description:"Text content of the right section",table:{category:"Right Section"}},rightWidth:{control:"text",description:"Width of the right section",table:{category:"Right Section",defaultValue:{summary:"300px"}}},rightPadX:{control:"text",description:"Horizontal padding of the right section",table:{category:"Right Section",defaultValue:{summary:"10px"}}},rightTextFontSize:{control:"text",description:"Font size of the right section text",table:{category:"Right Section",defaultValue:{summary:"16px"}}},rightTextFontWeight:{control:"text",description:"Font weight of the right section text",table:{category:"Right Section",defaultValue:{summary:"bold"}}},rightTextFontFamily:{control:"text",description:"Font family of the right section text",table:{category:"Right Section",defaultValue:{summary:"'Helvetica', 'Arial', sans-serif"}}},rightTextColor:{control:"color",description:"Color of the right section text",table:{category:"Right Section",defaultValue:{summary:"black"}}},rightTextShadow:{control:"text",description:"Text shadow for the right section text",table:{category:"Right Section",defaultValue:{summary:"0px 2px 5px #d0d0d0"}}},rightTextTransform:{control:"text",description:"Text transformation (e.g., uppercase, lowercase) for the right section",table:{category:"Right Section",defaultValue:{summary:"none"}}},rightTextAlign:{control:"text",description:"Text alignment within the right section",table:{category:"Right Section",defaultValue:{summary:"center"}}},rightLineHeight:{control:"text",description:"Line height of the right section text",table:{category:"Right Section",defaultValue:{summary:"21px"}}}}},h=t=>x`
  <double-text-button
    .compHeight=${t.compHeight}
    .compWidth=${t.compWidth}
    .buttonHeight=${t.buttonHeight}
    .buttonWidth=${t.buttonWidth}
    .buttonBorderRadius=${t.buttonBorderRadius}
    .buttonShadow=${t.buttonShadow}
    .onClick=${t.onClick}
    .leftColor=${t.leftColor}
    .leftHoverColor=${t.leftHoverColor}
    .leftText=${t.leftText}
    .leftWidth=${t.leftWidth}
    .leftPadX=${t.leftPadX}
    .leftTextFontSize=${t.leftTextFontSize}
    .leftTextFontWeight=${t.leftTextFontWeight}
    .leftTextFontFamily=${t.leftTextFontFamily}
    .leftTextColor=${t.leftTextColor}
    .leftTextShadow=${t.leftTextShadow}
    .leftTextTransform=${t.leftTextTransform}
    .leftTextAlign=${t.leftTextAlign}
    .leftLineHeight=${t.leftLineHeight}
    .rightColor=${t.rightColor}
    .rightHoverColor=${t.rightHoverColor}
    .rightText=${t.rightText}
    .rightWidth=${t.rightWidth}
    .rightPadX=${t.rightPadX}
    .rightTextFontSize=${t.rightTextFontSize}
    .rightTextFontWeight=${t.rightTextFontWeight}
    .rightTextFontFamily=${t.rightTextFontFamily}
    .rightTextColor=${t.rightTextColor}
    .rightTextShadow=${t.rightTextShadow}
    .rightTextTransform=${t.rightTextTransform}
    .rightTextAlign=${t.rightTextAlign}
    .rightLineHeight=${t.rightLineHeight}
  ></double-text-button>
`;h.args={compHeight:"60px",compWidth:"242px",buttonHeight:"100%",buttonWidth:"100%",buttonBorderRadius:"12px",buttonShadow:"0px 2px 5px #d0d0d0",leftColor:"#eceff1",leftHoverColor:"#cfd8dc",leftText:"Left",leftWidth:"300px",leftPadX:"10px",leftTextFontSize:"16px",leftTextFontWeight:"bold",leftTextFontFamily:"'Helvetica', 'Arial', sans-serif",leftTextColor:"black",leftTextShadow:"0px 2px 5px #d0d0d0",leftTextTransform:"none",leftTextAlign:"center",leftLineHeight:"21px",rightColor:"#cfd8dc",rightHoverColor:"#B0BEC5",rightText:"Right",rightWidth:"300px",rightPadX:"10px",rightTextFontSize:"16px",rightTextFontWeight:"bold",rightTextFontFamily:"'Helvetica', 'Arial', sans-serif",rightTextColor:"black",rightTextShadow:"0px 2px 5px #d0d0d0",rightTextTransform:"none",rightTextAlign:"center",rightLineHeight:"21px"};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => html\`
  <double-text-button
    .compHeight=\${args.compHeight}
    .compWidth=\${args.compWidth}
    .buttonHeight=\${args.buttonHeight}
    .buttonWidth=\${args.buttonWidth}
    .buttonBorderRadius=\${args.buttonBorderRadius}
    .buttonShadow=\${args.buttonShadow}
    .onClick=\${args.onClick}
    .leftColor=\${args.leftColor}
    .leftHoverColor=\${args.leftHoverColor}
    .leftText=\${args.leftText}
    .leftWidth=\${args.leftWidth}
    .leftPadX=\${args.leftPadX}
    .leftTextFontSize=\${args.leftTextFontSize}
    .leftTextFontWeight=\${args.leftTextFontWeight}
    .leftTextFontFamily=\${args.leftTextFontFamily}
    .leftTextColor=\${args.leftTextColor}
    .leftTextShadow=\${args.leftTextShadow}
    .leftTextTransform=\${args.leftTextTransform}
    .leftTextAlign=\${args.leftTextAlign}
    .leftLineHeight=\${args.leftLineHeight}
    .rightColor=\${args.rightColor}
    .rightHoverColor=\${args.rightHoverColor}
    .rightText=\${args.rightText}
    .rightWidth=\${args.rightWidth}
    .rightPadX=\${args.rightPadX}
    .rightTextFontSize=\${args.rightTextFontSize}
    .rightTextFontWeight=\${args.rightTextFontWeight}
    .rightTextFontFamily=\${args.rightTextFontFamily}
    .rightTextColor=\${args.rightTextColor}
    .rightTextShadow=\${args.rightTextShadow}
    .rightTextTransform=\${args.rightTextTransform}
    .rightTextAlign=\${args.rightTextAlign}
    .rightLineHeight=\${args.rightLineHeight}
  ></double-text-button>
\``,...h.parameters?.docs?.source}}};const w=["Default"];export{h as Default,w as __namedExportsOrder,S as default};
