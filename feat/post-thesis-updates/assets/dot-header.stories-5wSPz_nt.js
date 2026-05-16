import{i as c,a as m,x as p}from"./iframe-BsOJfzME.js";import{n as r,t as g}from"./property-BKF_dqFi.js";var s=Object.defineProperty,f=Object.getOwnPropertyDescriptor,y=(t,e,n)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,a=(t,e,n,d)=>{for(var i=d>1?void 0:d?f(e,n):e,l=t.length-1,x;l>=0;l--)(x=t[l])&&(i=(d?x(e,n,i):x(i))||i);return d&&i&&s(e,n,i),i},u=(t,e,n)=>y(t,e+"",n);let o=class extends m{updateStyleVariable(t,e,n){const d=this[t]??n;this.style.setProperty(e,d)}updated(t){const e=(n,d,i)=>t.has(n)&&this.updateStyleVariable(n,d,i);e("compHeight","--dot-header-comp-height","fit-content"),e("compWidth","--dot-header-comp-width","fit-content"),e("justifyHeader","--dot-header-justify-content","center"),e("alignHeader","--dot-header-align-items","center"),e("dotTextGap","--dot-header-dot-text-gap","7px"),e("lineHeight","--dot-header-line-height","22px"),e("textFontSize","--dot-header-font-size","21px"),e("textFontWeight","--dot-header-font-weight","normal"),e("textFontFamily","--dot-header-font-family","'FiraMono', sans-serif"),e("textColor","--dot-header-color","black"),e("textShadow","--dot-header-text-shadow","0px 2px 5px #d0d0d0"),e("textTransform","--dot-header-text-transform","uppercase"),e("textAlign","--dot-header-text-align","center")}render(){return p`<span id="dot" part="dot">∘</span
      ><span id="text" part="text">${this.headerText??""}</span> `}};u(o,"styles",c`
    :host {
      display: flex;
      justify-content: var(--dot-header-justify-content, center);
      align-items: var(--dot-header-align-items, center);
      height: var(--dot-header-comp-height, fit-content);
      width: var(--dot-header-comp-width, fit-content);
      gap: var(--dot-header-dot-text-gap, 7px);
      overflow: hidden;
      pointer-events: none;
    }

    span {
      display: flex;
      justify-content: center;
      height: fit-content;
      width: fit-content;
      line-height: var(--dot-header-line-height, 22px);
      align-items: center;
      overflow: hidden;
      box-sizing: border-box;
      pointer-events: none;
      text-align: var(--dot-header-text-align, center);
      font-size: var(--dot-header-font-size, 21px);
      font-weight: var(--dot-header-font-weight, normal);
      font-family: var(--dot-header-font-family, 'FiraMono', sans-serif);
      text-shadow: var(--dot-header-text-shadow, 0px 2px 5px #d0d0d0);
      color: var(--dot-header-color, black);
      text-transform: var(--dot-header-text-transform, uppercase);
    }
  `);a([r({type:String})],o.prototype,"compHeight",2);a([r({type:String})],o.prototype,"compWidth",2);a([r({type:String})],o.prototype,"justifyHeader",2);a([r({type:String})],o.prototype,"alignHeader",2);a([r({type:String})],o.prototype,"dotTextGap",2);a([r({type:String})],o.prototype,"headerText",2);a([r({type:String})],o.prototype,"lineHeight",2);a([r({type:String})],o.prototype,"textFontSize",2);a([r({type:String})],o.prototype,"textFontWeight",2);a([r({type:String})],o.prototype,"textFontFamily",2);a([r({type:String})],o.prototype,"textColor",2);a([r({type:String})],o.prototype,"textShadow",2);a([r({type:String})],o.prototype,"textTransform",2);a([r({type:String})],o.prototype,"textAlign",2);o=a([g("dot-header")],o);const H={title:"Components/Text/Dot Header",tags:["autodocs"],parameters:{docs:{description:{component:"\n### `<dot-header>`\n\nA header component that displays a dot followed by customizable text.\n\n#### CSS Custom Properties\n\n| Variable                             | Description                |\n|---------------------------------------|----------------------------|\n| `--dot-header-comp-height`          | Container height           |\n| `--dot-header-comp-width`           | Container width            |\n| `--dot-header-justify-content`      | Flexbox justify-content    |\n| `--dot-header-align-items`          | Flexbox align-items        |\n| `--dot-header-dot-text-gap`         | Gap between dot and text   |\n| `--dot-header-line-height`          | Line height of text        |\n| `--dot-header-font-size`            | Font size of text          |\n| `--dot-header-font-weight`          | Font weight of text        |\n| `--dot-header-font-family`          | Font family of text        |\n| `--dot-header-color`                | Text color                 |\n| `--dot-header-text-shadow`          | Text shadow                |\n| `--dot-header-text-transform`       | Text transform             |\n| `--dot-header-text-align`           | Text alignment             |\n\n#### Shadow DOM Parts\n\n| Part Name | Element | Description         |\n|-----------|---------|---------------------|\n| `dot`    | `span`  | The dot character    |\n| `text`   | `span`  | The header text span |\n        "}}},argTypes:{compHeight:{control:"text",description:"Height of the outer component container",table:{category:"Layout",defaultValue:{summary:"fit-content"}}},compWidth:{control:"text",description:"Width of the outer component container",table:{category:"Layout",defaultValue:{summary:"fit-content"}}},justifyHeader:{control:"text",description:"Justify content of the header container",table:{category:"Layout",defaultValue:{summary:"center"}}},alignHeader:{control:"text",description:"Align items of the header container",table:{category:"Layout",defaultValue:{summary:"center"}}},dotTextGap:{control:"text",description:"Gap between the dot and the text",table:{category:"Layout",defaultValue:{summary:"7px"}}},headerText:{control:"text",description:"Header text content",table:{category:"Text",defaultValue:{summary:"Dot Header"}}},lineHeight:{control:"text",description:"Line height of the header text",table:{category:"Text",defaultValue:{summary:"22px"}}},textFontSize:{control:"text",description:"Font size of the header text",table:{category:"Text",defaultValue:{summary:"21px"}}},textFontWeight:{control:"text",description:"Font weight of the header text",table:{category:"Text",defaultValue:{summary:"normal"}}},textFontFamily:{control:"text",description:"Font family of the header text",table:{category:"Text",defaultValue:{summary:"'FiraMono', sans-serif"}}},textColor:{control:"color",description:"Color of the header text",table:{category:"Text",defaultValue:{summary:"black"}}},textShadow:{control:"text",description:"Text shadow for the header text",table:{category:"Text",defaultValue:{summary:"0px 2px 5px #d0d0d0"}}},textTransform:{control:"text",description:"Text transformation (e.g., uppercase, lowercase) for the header text",table:{category:"Text",defaultValue:{summary:"uppercase"}}},textAlign:{control:"text",description:"Text alignment within the header",table:{category:"Text",defaultValue:{summary:"center"}}}}},h=t=>p`
  <dot-header
    .compHeight=${t.compHeight}
    .compWidth=${t.compWidth}
    .justifyHeader=${t.justifyHeader}
    .alignHeader=${t.alignHeader}
    .dotTextGap=${t.dotTextGap}
    .headerText=${t.headerText}
    .lineHeight=${t.lineHeight}
    .textFontSize=${t.textFontSize}
    .textFontWeight=${t.textFontWeight}
    .textFontFamily=${t.textFontFamily}
    .textColor=${t.textColor}
    .textShadow=${t.textShadow}
    .textTransform=${t.textTransform}
    .textAlign=${t.textAlign}
  ></dot-header>
`;h.args={compHeight:"fit-content",compWidth:"fit-content",justifyHeader:"center",alignHeader:"center",dotTextGap:"7px",headerText:"Dot Header",lineHeight:"22px",textFontSize:"21px",textFontWeight:"normal",textFontFamily:"'FiraMono', sans-serif",textColor:"black",textShadow:"0px 2px 5px #d0d0d0",textTransform:"uppercase",textAlign:"center"};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => html\`
  <dot-header
    .compHeight=\${args.compHeight}
    .compWidth=\${args.compWidth}
    .justifyHeader=\${args.justifyHeader}
    .alignHeader=\${args.alignHeader}
    .dotTextGap=\${args.dotTextGap}
    .headerText=\${args.headerText}
    .lineHeight=\${args.lineHeight}
    .textFontSize=\${args.textFontSize}
    .textFontWeight=\${args.textFontWeight}
    .textFontFamily=\${args.textFontFamily}
    .textColor=\${args.textColor}
    .textShadow=\${args.textShadow}
    .textTransform=\${args.textTransform}
    .textAlign=\${args.textAlign}
  ></dot-header>
\``,...h.parameters?.docs?.source}}};const w=["Default"];export{h as Default,w as __namedExportsOrder,H as default};
