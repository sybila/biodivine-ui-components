import{i as x,a as c,x as h}from"./iframe-CCp7-dTo.js";import{n as i,t as g}from"./property-CDy3harW.js";var m=Object.defineProperty,f=Object.getOwnPropertyDescriptor,y=(e,t,o)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,a=(e,t,o,l)=>{for(var n=l>1?void 0:l?f(t,o):t,p=e.length-1,d;p>=0;p--)(d=e[p])&&(n=(l?d(t,o,n):d(n))||n);return l&&n&&m(t,o,n),n},u=(e,t,o)=>y(e,t+"",o);let r=class extends c{updateStyleVariable(e,t,o){const l=this[e]??o;this.style.setProperty(t,l)}updated(e){const t=(o,l,n)=>e.has(o)&&this.updateStyleVariable(o,l,n);t("compHeight","--simple-header-comp-height","fit-content"),t("compWidth","--simple-header-comp-width","fit-content"),t("justifyHeader","--simple-header-justify-content","center"),t("alignHeader","--simple-header-align-items","center"),t("lineHeight","--simple-header-line-height","22px"),t("textFontSize","--simple-header-font-size","21px"),t("textFontWeight","--simple-header-font-weight","bold"),t("textFontFamily","--simple-header-font-family","'Helvetica', 'Arial', sans-serif"),t("textColor","--simple-header-color","black"),t("textShadow","--simple-header-text-shadow","0px 2px 5px #d0d0d0"),t("textTransform","--simple-header-text-transform","none"),t("textAlign","--simple-header-text-align","center")}render(){return h`<span part="header-text">${this.headerText??""}</span>`}};u(r,"styles",x`
    :host {
      display: flex;
      justify-content: var(--simple-header-justify-content, center);
      align-items: var(--simple-header-align-items, center);
      height: var(--simple-header-comp-height, fit-content);
      width: var(--simple-header-comp-width, fit-content);
      overflow: hidden;
    }

    span {
      display: flex;
      justify-content: center;
      height: fit-content;
      width: fit-content;
      line-height: var(--simple-header-line-height, 22px);
      align-items: center;
      overflow: hidden;
      box-sizing: border-box;
      pointer-events: none;
      text-align: var(--simple-header-text-align, center);
      font-size: var(--simple-header-font-size, 21px);
      font-weight: var(--simple-header-font-weight, bold);
      font-family: var(
        --simple-header-font-family,
        'Helvetica',
        'Arial',
        sans-serif
      );
      text-shadow: var(--simple-header-text-shadow, 0px 2px 5px #d0d0d0);
      color: var(--simple-header-color, black);
      text-transform: var(--simple-header-text-transform, none);
    }
  `);a([i({type:String})],r.prototype,"compHeight",2);a([i({type:String})],r.prototype,"compWidth",2);a([i({type:String})],r.prototype,"justifyHeader",2);a([i({type:String})],r.prototype,"alignHeader",2);a([i({type:String})],r.prototype,"headerText",2);a([i({type:String})],r.prototype,"lineHeight",2);a([i({type:String})],r.prototype,"textFontSize",2);a([i({type:String})],r.prototype,"textFontWeight",2);a([i({type:String})],r.prototype,"textFontFamily",2);a([i({type:String})],r.prototype,"textColor",2);a([i({type:String})],r.prototype,"textShadow",2);a([i({type:String})],r.prototype,"textTransform",2);a([i({type:String})],r.prototype,"textAlign",2);r=a([g("simple-header")],r);const S={title:"Components/Text/Simple Header",tags:["autodocs"],parameters:{docs:{description:{component:"\n### `<simple-header>`\n\nSimple header component.\n\n#### CSS Custom Properties\n\n| Variable                              | Description                |\n|----------------------------------------|----------------------------|\n| `--simple-header-comp-height`        | Container height           |\n| `--simple-header-comp-width`         | Container width            |\n| `--simple-header-justify-content`    | Flexbox justify-content    |\n| `--simple-header-align-items`        | Flexbox align-items        |\n| `--simple-header-line-height`        | Line height of text        |\n| `--simple-header-font-size`          | Font size of text          |\n| `--simple-header-font-weight`        | Font weight of text        |\n| `--simple-header-font-family`        | Font family of text        |\n| `--simple-header-color`              | Text color                 |\n| `--simple-header-text-shadow`        | Text shadow                |\n| `--simple-header-text-transform`     | Text transform             |\n| `--simple-header-text-align`         | Text alignment             |\n\n#### Shadow DOM Parts\n\n| Part Name    | Element | Description           |\n|--------------|---------|-----------------------|\n| `header-text` | `span`  | The header text span   |\n        "}}},argTypes:{compHeight:{control:"text",description:"Height of the outer component container",table:{category:"Layout",defaultValue:{summary:"fit-content"}}},compWidth:{control:"text",description:"Width of the outer component container",table:{category:"Layout",defaultValue:{summary:"fit-content"}}},justifyHeader:{control:"text",description:"Justify content of the header container",table:{category:"Layout",defaultValue:{summary:"center"}}},alignHeader:{control:"text",description:"Align items of the header container",table:{category:"Layout",defaultValue:{summary:"center"}}},headerText:{control:"text",description:"Header text content",table:{category:"Text",defaultValue:{summary:"Simple Header"}}},lineHeight:{control:"text",description:"Line height of the header text",table:{category:"Text",defaultValue:{summary:"22px"}}},textFontSize:{control:"text",description:"Font size of the header text",table:{category:"Text",defaultValue:{summary:"21px"}}},textFontWeight:{control:"text",description:"Font weight of the header text",table:{category:"Text",defaultValue:{summary:"bold"}}},textFontFamily:{control:"text",description:"Font family of the header text",table:{category:"Text",defaultValue:{summary:"'Helvetica', 'Arial', sans-serif"}}},textColor:{control:"color",description:"Color of the header text",table:{category:"Text",defaultValue:{summary:"black"}}},textShadow:{control:"text",description:"Text shadow for the header text",table:{category:"Text",defaultValue:{summary:"0px 2px 5px #d0d0d0"}}},textTransform:{control:"text",description:"Text transformation (e.g., uppercase, lowercase) for the header text",table:{category:"Text",defaultValue:{summary:"none"}}},textAlign:{control:"text",description:"Text alignment within the header",table:{category:"Text",defaultValue:{summary:"center"}}}}},s=e=>h`
  <simple-header
    .compHeight=${e.compHeight}
    .compWidth=${e.compWidth}
    .justifyHeader=${e.justifyHeader}
    .alignHeader=${e.alignHeader}
    .headerText=${e.headerText}
    .lineHeight=${e.lineHeight}
    .textFontSize=${e.textFontSize}
    .textFontWeight=${e.textFontWeight}
    .textFontFamily=${e.textFontFamily}
    .textColor=${e.textColor}
    .textShadow=${e.textShadow}
    .textTransform=${e.textTransform}
    .textAlign=${e.textAlign}
  ></simple-header>
`;s.args={compHeight:"fit-content",compWidth:"fit-content",justifyHeader:"center",alignHeader:"center",headerText:"Simple Header",lineHeight:"22px",textFontSize:"21px",textFontWeight:"bold",textFontFamily:"'Helvetica', 'Arial', sans-serif",textColor:"black",textShadow:"0px 2px 5px #d0d0d0",textTransform:"none",textAlign:"center"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => html\`
  <simple-header
    .compHeight=\${args.compHeight}
    .compWidth=\${args.compWidth}
    .justifyHeader=\${args.justifyHeader}
    .alignHeader=\${args.alignHeader}
    .headerText=\${args.headerText}
    .lineHeight=\${args.lineHeight}
    .textFontSize=\${args.textFontSize}
    .textFontWeight=\${args.textFontWeight}
    .textFontFamily=\${args.textFontFamily}
    .textColor=\${args.textColor}
    .textShadow=\${args.textShadow}
    .textTransform=\${args.textTransform}
    .textAlign=\${args.textAlign}
  ></simple-header>
\``,...s.parameters?.docs?.source}}};const T=["Default"];export{s as Default,T as __namedExportsOrder,S as default};
