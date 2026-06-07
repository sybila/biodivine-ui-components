import{i as h,a as u,x}from"./iframe-2_Qw5Wcc.js";import{n as i,t as d}from"./property-BZNcQu1B.js";var m=Object.defineProperty,y=Object.getOwnPropertyDescriptor,f=(t,e,r)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,l=(t,e,r,a)=>{for(var n=a>1?void 0:a?y(e,r):e,p=t.length-1,s;p>=0;p--)(s=t[p])&&(n=(a?s(e,r,n):s(n))||n);return a&&n&&m(e,r,n),n},g=(t,e,r)=>f(t,e+"",r);let o=class extends u{updateStyleVariable(t,e,r){const a=this[t]??r;this.style.setProperty(e,a)}updated(t){const e=(r,a,n)=>t.has(r)&&this.updateStyleVariable(r,a,n);e("compHeight","--multiline-text-comp-height","300px"),e("compWidth","--multiline-text-comp-width","200px"),e("overflowY","--multiline-text-overflow-y","auto"),e("textColor","--multiline-text-color","black"),e("textJustify","--multiline-text-justify","center"),e("textAlign","--multiline-text-align","start"),e("textShadow","--multiline-text-shadow","none"),e("textFontSize","--multiline-text-font-size","16px"),e("textFontWeight","--multiline-text-font-weight","normal"),e("textFontFamily","--multiline-text-font-family","'Helvetica', 'Arial', sans-serif"),e("textOverflow","--multiline-text-overflow","ellipsis"),e("textFontStyle","--multiline-text-font-style","normal"),e("placeholderColor","--multiline-text-placeholder-color","gray"),e("placeholderFontFamily","--multiline-text-placeholder-font-family","'FiraMono', monospace"),e("placeholderFontWeight","--multiline-text-placeholder-font-weight","normal"),e("placeholderFontStyle","--multiline-text-placeholder-font-style","italic"),e("userSelect","--multiline-text-user-select","none")}render(){const t=this.text?"":"placeholder";return x`<span class=${t}
      >${this.text||this.placeholder}</span
    >`}};g(o,"styles",h`
    :host {
      display: inline-block;

      height: var(--multiline-text-comp-height, 300px);
      width: var(--multiline-text-comp-width, 200px);
    }

    span {
      display: inline-block;

      height: 100%;
      width: 100%;

      color: var(--multiline-text-color, black);

      text-justify: var(--multiline-text-justify, center);
      text-align: var(--multiline-text-align, start);

      user-select: var(--multiline-text-user-select, none);

      text-shadow: var(--multiline-text-shadow, none);
      font-size: var(--multiline-text-font-size, 16px);
      font-weight: var(--multiline-text-font-weight, normal);
      font-style: var(--multiline-text-font-style, normal);
      font-family: var(
        --multiline-text-font-family,
        'Helvetica',
        'Arial',
        sans-serif
      );

      overflow-x: hidden;
      overflow-y: var(--multiline-text-overflow-y, auto);
      text-overflow: var(--multiline-text-overflow, ellipsis);
      white-space: normal;
      overflow-wrap: anywhere;
    }

    .placeholder {
      color: var(--multiline-text-placeholder-color, gray);

      font-family: var(
        --multiline-text-placeholder-font-family,
        'FiraMono',
        monospace
      );

      font-weight: var(--multiline-text-placeholder-font-weight, normal);

      font-style: var(--multiline-text-placeholder-font-style, italic);
    }
  `);l([i({type:String})],o.prototype,"compHeight",2);l([i({type:String})],o.prototype,"compWidth",2);l([i({type:String})],o.prototype,"overflowY",2);l([i({type:String})],o.prototype,"textColor",2);l([i({type:String})],o.prototype,"textJustify",2);l([i({type:String})],o.prototype,"textAlign",2);l([i({type:String})],o.prototype,"textShadow",2);l([i({type:String})],o.prototype,"textFontSize",2);l([i({type:String})],o.prototype,"textFontWeight",2);l([i({type:String})],o.prototype,"textFontFamily",2);l([i({type:String})],o.prototype,"textFontStyle",2);l([i({type:String})],o.prototype,"textOverflow",2);l([i({type:String})],o.prototype,"placeholderColor",2);l([i({type:String})],o.prototype,"placeholderFontFamily",2);l([i({type:String})],o.prototype,"placeholderFontWeight",2);l([i({type:String})],o.prototype,"placeholderFontStyle",2);l([i({type:String})],o.prototype,"userSelect",2);l([i({type:String})],o.prototype,"text",2);l([i({type:String})],o.prototype,"placeholder",2);o=l([d("multiline-text")],o);const S={title:"Components/Text/Multiline Text",tags:["autodocs"],parameters:{docs:{description:{component:`
### <multiline-text>

Multi-line text component that wraps and can show a placeholder when empty.

#### CSS Custom Properties

| Variable | Description |
|-------------------------------|-------------------------------|
| --multiline-text-comp-height | Height of the component (does not support fit-content) |
| --multiline-text-comp-width | Width of the component (does not support fit-content) |
| --multiline-text-overflow-y | Vertical overflow behavior |
| --multiline-text-user-select | User select behavior |
| --multiline-text-color | Text color |
| --multiline-text-justify | Justify content |
| --multiline-text-align | Align text |
| --multiline-text-shadow | Text shadow |
| --multiline-text-font-size | Font size |
| --multiline-text-font-weight | Font weight |
| --multiline-text-font-family | Font family |
| --multiline-text-font-style | Font style |
| --multiline-text-placeholder-color | Placeholder color |
| --multiline-text-placeholder-font-family | Placeholder font family |
| --multiline-text-placeholder-font-weight | Placeholder font weight |
| --multiline-text-placeholder-font-style | Placeholder font style |
`}}},argTypes:{compHeight:{control:"text",description:"Height of the component (does not support fit-content)",table:{defaultValue:{summary:"300px"},category:"Component"}},compWidth:{control:"text",description:"Width of the component (does not support fit-content)",table:{defaultValue:{summary:"200px"},category:"Component"}},overflowY:{control:"text",description:"Vertical overflow behavior",table:{defaultValue:{summary:"auto"},category:"Component"}},userSelect:{control:"text",description:"User select behavior",table:{defaultValue:{summary:"none"},category:"Component"}},textColor:{control:"color",description:"Text color",table:{defaultValue:{summary:"black"},category:"Text"}},textJustify:{control:"text",description:"Justify text",table:{defaultValue:{summary:"center"},category:"Text"}},textAlign:{control:"text",description:"Align text",table:{defaultValue:{summary:"start"},category:"Text"}},textShadow:{control:"text",description:"Text shadow",table:{defaultValue:{summary:"none"},category:"Text"}},textFontSize:{control:"text",description:"Font size",table:{defaultValue:{summary:"16px"},category:"Text"}},textFontWeight:{control:"text",description:"Font weight",table:{defaultValue:{summary:"normal"},category:"Text"}},textFontFamily:{control:"text",description:"Font family",table:{defaultValue:{summary:"'Helvetica', 'Arial', sans-serif"},category:"Text"}},textFontStyle:{control:"text",description:"Font style",table:{defaultValue:{summary:"normal"},category:"Text"}},placeholderColor:{control:"color",description:"Placeholder color",table:{defaultValue:{summary:"gray"},category:"Placeholder"}},placeholderFontFamily:{control:"text",description:"Placeholder font family",table:{defaultValue:{summary:"'FiraMono', monospace"},category:"Placeholder"}},placeholderFontWeight:{control:"text",description:"Placeholder font weight",table:{defaultValue:{summary:"normal"},category:"Placeholder"}},placeholderFontStyle:{control:"text",description:"Placeholder font style",table:{defaultValue:{summary:"italic"},category:"Placeholder"}},text:{control:"text",description:"Text content",table:{category:"Text"}},placeholder:{control:"text",description:"Placeholder text when empty",table:{category:"Placeholder"}}}},c=t=>x`
  <multiline-text
    .compHeight=${t.compHeight}
    .compWidth=${t.compWidth}
    .overflowY=${t.overflowY}
    .userSelect=${t.userSelect}
    .textColor=${t.textColor}
    .textJustify=${t.textJustify}
    .textAlign=${t.textAlign}
    .textShadow=${t.textShadow}
    .textFontSize=${t.textFontSize}
    .textFontWeight=${t.textFontWeight}
    .textFontFamily=${t.textFontFamily}
    .textFontStyle=${t.textFontStyle}
    .placeholderColor=${t.placeholderColor}
    .placeholderFontFamily=${t.placeholderFontFamily}
    .placeholderFontWeight=${t.placeholderFontWeight}
    .placeholderFontStyle=${t.placeholderFontStyle}
    .text=${t.text}
    .placeholder=${t.placeholder}
  ></multiline-text>
`;c.args={compHeight:"300px",compWidth:"200px",overflowY:"auto",userSelect:"none",textColor:"black",textJustify:"center",textAlign:"start",textShadow:"none",textFontSize:"16px",textFontWeight:"normal",textFontFamily:"'Helvetica', 'Arial', sans-serif",textFontStyle:"normal",placeholderColor:"gray",placeholderFontFamily:"'FiraMono', monospace",placeholderFontWeight:"normal",placeholderFontStyle:"italic",text:`This is a multiline text example. It should wrap across lines and demonstrate the component behavior.
Second line of text to show wrapping.`,placeholder:"Empty text placeholder"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => html\`
  <multiline-text
    .compHeight=\${args.compHeight}
    .compWidth=\${args.compWidth}
    .overflowY=\${args.overflowY}
    .userSelect=\${args.userSelect}
    .textColor=\${args.textColor}
    .textJustify=\${args.textJustify}
    .textAlign=\${args.textAlign}
    .textShadow=\${args.textShadow}
    .textFontSize=\${args.textFontSize}
    .textFontWeight=\${args.textFontWeight}
    .textFontFamily=\${args.textFontFamily}
    .textFontStyle=\${args.textFontStyle}
    .placeholderColor=\${args.placeholderColor}
    .placeholderFontFamily=\${args.placeholderFontFamily}
    .placeholderFontWeight=\${args.placeholderFontWeight}
    .placeholderFontStyle=\${args.placeholderFontStyle}
    .text=\${args.text}
    .placeholder=\${args.placeholder}
  ></multiline-text>
\``,...c.parameters?.docs?.source}}};const v=["Default"];export{c as Default,v as __namedExportsOrder,S as default};
