import{i as x,a as p,x as f}from"./iframe-BDM-MoQd.js";import{n as r,t as c}from"./property-DZaq70-t.js";var s=Object.defineProperty,m=Object.getOwnPropertyDescriptor,y=(t,e,n)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,o=(t,e,n,l)=>{for(var h=l>1?void 0:l?m(e,n):e,d=t.length-1,g;d>=0;d--)(g=t[d])&&(h=(l?g(e,n,h):g(h))||h);return l&&h&&s(e,n,h),h},w=(t,e,n)=>y(t,e+"",n);let i=class extends p{updateStyleVariable(t,e,n){const l=this[t]??n;this.style.setProperty(e,l)}updated(t){const e=(n,l,h)=>t.has(n)&&this.updateStyleVariable(n,l,h);e("compHeight","--two-sided-text-comp-height","fit-content"),e("compWidth","--two-sided-text-comp-width","fit-content"),e("justifyHeader","--two-sided-text-justify-content","center"),e("alignHeader","--two-sided-text-align-items","center"),e("rightHeight","--two-sided-text-right-height","fit-content"),e("rightWidth","--two-sided-text-right-width","fit-content"),e("rightLineHeight","--two-sided-text-right-line-height","40px"),e("rightFontSize","--two-sided-text-right-font-size","31px"),e("rightFontWeight","--two-sided-text-right-font-weight","normal"),e("rightFontFamily","--two-sided-text-right-font-family","'BaileyReg', monospace, sans-serif"),e("rightColor","--two-sided-text-right-color","#3a568c"),e("rightShadow","--two-sided-text-right-text-shadow","0px 2px 5px #d0d0d0"),e("rightTransform","--two-sided-text-right-text-transform","none"),e("rightAlign","--two-sided-text-right-text-align","center"),e("leftHeight","--two-sided-text-left-height","fit-content"),e("leftWidth","--two-sided-text-left-width","fit-content"),e("leftLineHeight","--two-sided-text-left-line-height","40px"),e("leftFontSize","--two-sided-text-left-font-size","31px"),e("leftFontWeight","--two-sided-text-left-font-weight","bold"),e("leftFontFamily","--two-sided-text-left-font-family","'BaileyBold', monospace, sans-serif"),e("leftColor","--two-sided-text-left-color","#d05d5d"),e("leftShadow","--two-sided-text-left-text-shadow","0px 2px 5px #d0d0d0"),e("leftTransform","--two-sided-text-left-text-transform","none"),e("leftAlign","--two-sided-text-left-text-align","center")}render(){return f`<span id="right-text" part="right-text"
        >${this.rightText??""}</span
      ><span id="left-text" part="left-text">${this.leftText??""}</span>`}};w(i,"styles",x`
    :host {
      display: flex;
      justify-content: var(--two-sided-text-justify-content, center);
      align-items: var(--two-sided-text-align-items, center);
      height: var(--two-sided-text-comp-height, fit-content);
      width: var(--two-sided-text-comp-width, fit-content);
      overflow: hidden;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      box-sizing: border-box;
      pointer-events: none;
    }

    #right-text {
      height: var(--two-sided-text-right-height, fit-content);
      width: var(--two-sided-text-right-width, fit-content);
      line-height: var(--two-sided-text-right-line-height, 40px);
      text-align: var(--two-sided-text-right-text-align, center);
      font-size: var(--two-sided-text-right-font-size, 31px);
      font-weight: var(--two-sided-text-right-font-weight, normal);
      font-family: var(
        --two-sided-text-right-font-family,
        'BaileyReg',
        monospace,
        sans-serif
      );
      text-shadow: var(--two-sided-text-right-text-shadow, 0px 2px 5px #d0d0d0);
      color: var(--two-sided-text-right-color, #3a568c);
      text-transform: var(--two-sided-text-right-text-transform, none);
    }

    #left-text {
      height: var(--two-sided-text-left-height, fit-content);
      width: var(--two-sided-text-left-width, fit-content);
      line-height: var(--two-sided-text-left-line-height, 40px);
      text-align: var(--two-sided-text-left-text-align, center);
      font-size: var(--two-sided-text-left-font-size, 31px);
      font-weight: var(--two-sided-text-left-font-weight, bold);
      font-family: var(
        --two-sided-text-left-font-family,
        'BaileyBold',
        monospace,
        sans-serif
      );
      text-shadow: var(--two-sided-text-left-text-shadow, 0px 2px 5px #d0d0d0);
      color: var(--two-sided-text-left-color, #d05d5d);
      text-transform: var(--two-sided-text-left-text-transform, none);
    }
  `);o([r({type:String})],i.prototype,"compHeight",2);o([r({type:String})],i.prototype,"compWidth",2);o([r({type:String})],i.prototype,"justifyHeader",2);o([r({type:String})],i.prototype,"alignHeader",2);o([r({type:String})],i.prototype,"rightText",2);o([r({type:String})],i.prototype,"rightHeight",2);o([r({type:String})],i.prototype,"rightWidth",2);o([r({type:String})],i.prototype,"rightLineHeight",2);o([r({type:String})],i.prototype,"rightFontSize",2);o([r({type:String})],i.prototype,"rightFontWeight",2);o([r({type:String})],i.prototype,"rightFontFamily",2);o([r({type:String})],i.prototype,"rightColor",2);o([r({type:String})],i.prototype,"rightShadow",2);o([r({type:String})],i.prototype,"rightTransform",2);o([r({type:String})],i.prototype,"rightAlign",2);o([r({type:String})],i.prototype,"leftText",2);o([r({type:String})],i.prototype,"leftHeight",2);o([r({type:String})],i.prototype,"leftWidth",2);o([r({type:String})],i.prototype,"leftLineHeight",2);o([r({type:String})],i.prototype,"leftFontSize",2);o([r({type:String})],i.prototype,"leftFontWeight",2);o([r({type:String})],i.prototype,"leftFontFamily",2);o([r({type:String})],i.prototype,"leftColor",2);o([r({type:String})],i.prototype,"leftShadow",2);o([r({type:String})],i.prototype,"leftTransform",2);o([r({type:String})],i.prototype,"leftAlign",2);i=o([c("two-sided-text")],i);const S={title:"Components/Text/Two Sided Text",tags:["autodocs"],parameters:{docs:{description:{component:"\n### `<two-sided-text>`\n\nA component for displaying two pieces of text side by side, each with independent styling.\n\n#### CSS Custom Properties\n\n| Variable                                 | Description                                   |\n|-------------------------------------------|-----------------------------------------------|\n| `--two-sided-text-comp-height`          | Height of the outer component                 |\n| `--two-sided-text-comp-width`           | Width of the outer component                  |\n| `--two-sided-text-justify-content`      | Justify content of the host                   |\n| `--two-sided-text-align-items`          | Align items of the host                       |\n| `--two-sided-text-right-height`         | Height of the right text                      |\n| `--two-sided-text-right-width`          | Width of the right text                       |\n| `--two-sided-text-right-line-height`    | Line height of the right text                 |\n| `--two-sided-text-right-font-size`      | Font size of the right text                   |\n| `--two-sided-text-right-font-weight`    | Font weight of the right text                 |\n| `--two-sided-text-right-font-family`    | Font family of the right text                 |\n| `--two-sided-text-right-color`          | Color of the right text                       |\n| `--two-sided-text-right-text-shadow`    | Text shadow of the right text                 |\n| `--two-sided-text-right-text-transform` | Text transform of the right text              |\n| `--two-sided-text-right-text-align`     | Text align of the right text                  |\n| `--two-sided-text-left-height`          | Height of the left text                       |\n| `--two-sided-text-left-width`           | Width of the left text                        |\n| `--two-sided-text-left-line-height`     | Line height of the left text                  |\n| `--two-sided-text-left-font-size`       | Font size of the left text                    |\n| `--two-sided-text-left-font-weight`     | Font weight of the left text                  |\n| `--two-sided-text-left-font-family`     | Font family of the left text                  |\n| `--two-sided-text-left-color`           | Color of the left text                        |\n| `--two-sided-text-left-text-shadow`     | Text shadow of the left text                  |\n| `--two-sided-text-left-text-transform`  | Text transform of the left text               |\n| `--two-sided-text-left-text-align`      | Text align of the left text                   |\n\n#### Shadow DOM Parts\n\n| Part Name      | Element | Description         |\n|----------------|---------|---------------------|\n| `right-text` | `span` | The right text span |\n| `left-text`  | `span` | The left text span  |\n        "}}},argTypes:{compHeight:{control:"text",description:"Height of the outer component",table:{defaultValue:{summary:"fit-content"},category:"Layout"}},compWidth:{control:"text",description:"Width of the outer component",table:{defaultValue:{summary:"fit-content"},category:"Layout"}},justifyHeader:{control:"text",description:"Justify content of the host",table:{defaultValue:{summary:"center"},category:"Layout"}},alignHeader:{control:"text",description:"Align items of the host",table:{defaultValue:{summary:"center"},category:"Layout"}},rightText:{control:"text",description:"Text for the right side",table:{defaultValue:{summary:"Right"},category:"Right"}},rightHeight:{control:"text",description:"Height of the right text",table:{defaultValue:{summary:"fit-content"},category:"Right"}},rightWidth:{control:"text",description:"Width of the right text",table:{defaultValue:{summary:"fit-content"},category:"Right"}},rightLineHeight:{control:"text",description:"Line height of the right text",table:{defaultValue:{summary:"40px"},category:"Right"}},rightFontSize:{control:"text",description:"Font size of the right text",table:{defaultValue:{summary:"31px"},category:"Right"}},rightFontWeight:{control:"text",description:"Font weight of the right text",table:{defaultValue:{summary:"normal"},category:"Right"}},rightFontFamily:{control:"text",description:"Font family of the right text",table:{defaultValue:{summary:"'BaileyReg', monospace, sans-serif"},category:"Right"}},rightColor:{control:"color",description:"Color of the right text",table:{defaultValue:{summary:"#3a568c"},category:"Right"}},rightShadow:{control:"text",description:"Text shadow of the right text",table:{defaultValue:{summary:"0px 2px 5px #d0d0d0"},category:"Right"}},rightTransform:{control:"text",description:"Text transform of the right text",table:{defaultValue:{summary:"none"},category:"Right"}},rightAlign:{control:"text",description:"Text align of the right text",table:{defaultValue:{summary:"center"},category:"Right"}},leftText:{control:"text",description:"Text for the left side",table:{defaultValue:{summary:"Left"},category:"Left"}},leftHeight:{control:"text",description:"Height of the left text",table:{defaultValue:{summary:"fit-content"},category:"Left"}},leftWidth:{control:"text",description:"Width of the left text",table:{defaultValue:{summary:"fit-content"},category:"Left"}},leftLineHeight:{control:"text",description:"Line height of the left text",table:{defaultValue:{summary:"40px"},category:"Left"}},leftFontSize:{control:"text",description:"Font size of the left text",table:{defaultValue:{summary:"31px"},category:"Left"}},leftFontWeight:{control:"text",description:"Font weight of the left text",table:{defaultValue:{summary:"bold"},category:"Left"}},leftFontFamily:{control:"text",description:"Font family of the left text",table:{defaultValue:{summary:"'BaileyBold', monospace, sans-serif"},category:"Left"}},leftColor:{control:"color",description:"Color of the left text",table:{defaultValue:{summary:"#d05d5d"},category:"Left"}},leftShadow:{control:"text",description:"Text shadow of the left text",table:{defaultValue:{summary:"0px 2px 5px #d0d0d0"},category:"Left"}},leftTransform:{control:"text",description:"Text transform of the left text",table:{defaultValue:{summary:"none"},category:"Left"}},leftAlign:{control:"text",description:"Text align of the left text",table:{defaultValue:{summary:"center"},category:"Left"}}}},a=t=>f`
  <two-sided-text
    .compHeight=${t.compHeight}
    .compWidth=${t.compWidth}
    .justifyHeader=${t.justifyHeader}
    .alignHeader=${t.alignHeader}
    .rightText=${t.rightText}
    .rightHeight=${t.rightHeight}
    .rightWidth=${t.rightWidth}
    .rightLineHeight=${t.rightLineHeight}
    .rightFontSize=${t.rightFontSize}
    .rightFontWeight=${t.rightFontWeight}
    .rightFontFamily=${t.rightFontFamily}
    .rightColor=${t.rightColor}
    .rightShadow=${t.rightShadow}
    .rightTransform=${t.rightTransform}
    .rightAlign=${t.rightAlign}
    .leftText=${t.leftText}
    .leftHeight=${t.leftHeight}
    .leftWidth=${t.leftWidth}
    .leftLineHeight=${t.leftLineHeight}
    .leftFontSize=${t.leftFontSize}
    .leftFontWeight=${t.leftFontWeight}
    .leftFontFamily=${t.leftFontFamily}
    .leftColor=${t.leftColor}
    .leftShadow=${t.leftShadow}
    .leftTransform=${t.leftTransform}
    .leftAlign=${t.leftAlign}
  ></two-sided-text>
`;a.args={compHeight:"fit-content",compWidth:"fit-content",justifyHeader:"center",alignHeader:"center",rightText:"Right",rightHeight:"fit-content",rightWidth:"fit-content",rightLineHeight:"40px",rightFontSize:"31px",rightFontWeight:"normal",rightFontFamily:"'BaileyReg', monospace, sans-serif",rightColor:"#3a568c",rightShadow:"0px 2px 5px #d0d0d0",rightTransform:"none",rightAlign:"center",leftText:"Left",leftHeight:"fit-content",leftWidth:"fit-content",leftLineHeight:"40px",leftFontSize:"31px",leftFontWeight:"bold",leftFontFamily:"'BaileyBold', monospace, sans-serif",leftColor:"#d05d5d",leftShadow:"0px 2px 5px #d0d0d0",leftTransform:"none",leftAlign:"center"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => html\`
  <two-sided-text
    .compHeight=\${args.compHeight}
    .compWidth=\${args.compWidth}
    .justifyHeader=\${args.justifyHeader}
    .alignHeader=\${args.alignHeader}
    .rightText=\${args.rightText}
    .rightHeight=\${args.rightHeight}
    .rightWidth=\${args.rightWidth}
    .rightLineHeight=\${args.rightLineHeight}
    .rightFontSize=\${args.rightFontSize}
    .rightFontWeight=\${args.rightFontWeight}
    .rightFontFamily=\${args.rightFontFamily}
    .rightColor=\${args.rightColor}
    .rightShadow=\${args.rightShadow}
    .rightTransform=\${args.rightTransform}
    .rightAlign=\${args.rightAlign}
    .leftText=\${args.leftText}
    .leftHeight=\${args.leftHeight}
    .leftWidth=\${args.leftWidth}
    .leftLineHeight=\${args.leftLineHeight}
    .leftFontSize=\${args.leftFontSize}
    .leftFontWeight=\${args.leftFontWeight}
    .leftFontFamily=\${args.leftFontFamily}
    .leftColor=\${args.leftColor}
    .leftShadow=\${args.leftShadow}
    .leftTransform=\${args.leftTransform}
    .leftAlign=\${args.leftAlign}
  ></two-sided-text>
\``,...a.parameters?.docs?.source}}};const H=["Default"];export{a as Default,H as __namedExportsOrder,S as default};
