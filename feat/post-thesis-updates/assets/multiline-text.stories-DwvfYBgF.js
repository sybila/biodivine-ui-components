import{i as h,a as u,x as m}from"./iframe-Bim09L3k.js";import{n as r,t as d}from"./property-DkBj7JS2.js";var x=Object.defineProperty,y=Object.getOwnPropertyDescriptor,f=(t,e,n)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,l=(t,e,n,a)=>{for(var i=a>1?void 0:a?y(e,n):e,p=t.length-1,s;p>=0;p--)(s=t[p])&&(i=(a?s(e,n,i):s(i))||i);return a&&i&&x(e,n,i),i},g=(t,e,n)=>f(t,e+"",n);let o=class extends u{updateStyleVariable(t,e,n){const a=this[t]??n;this.style.setProperty(e,a)}updated(t){const e=(n,a,i)=>t.has(n)&&this.updateStyleVariable(n,a,i);e("compHeight","--multiline-text-comp-height","300px"),e("compWidth","--multiline-text-comp-width","200px"),e("cursor","--multiline-text-cursor","default"),e("overflowY","--multiline-text-overflow-y","auto"),e("textColor","--multiline-text-color","black"),e("textJustify","--multiline-text-justify","center"),e("textAlign","--multiline-text-align","start"),e("textShadow","--multiline-text-shadow","none"),e("textFontSize","--multiline-text-font-size","16px"),e("textFontWeight","--multiline-text-font-weight","normal"),e("textFontFamily","--multiline-text-font-family","'Helvetica', 'Arial', sans-serif"),e("textFontStyle","--multiline-text-font-style","normal"),e("placeholderColor","--multiline-text-placeholder-color","gray"),e("placeholderFontFamily","--multiline-text-placeholder-font-family","'FiraMono', monospace"),e("placeholderFontWeight","--multiline-text-placeholder-font-weight","normal"),e("placeholderFontStyle","--multiline-text-placeholder-font-style","italic"),e("userSelect","--multiline-text-user-select","none")}render(){const t=this.text?"":"placeholder";return m`<span class=${t} @click=${this.handleClick}
      >${this.text||this.placeholder}</span
    >`}};g(o,"styles",h`
    :host {
      display: block;

      height: var(--multiline-text-comp-height, 300px);
      width: var(--multiline-text-comp-width, 200px);

      cursor: var(--multiline-text-cursor, default);
    }

    span {
      display: block;

      background-color: transparent;

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
  `);l([r({type:String})],o.prototype,"compHeight",2);l([r({type:String})],o.prototype,"compWidth",2);l([r({type:String})],o.prototype,"overflowY",2);l([r({type:String})],o.prototype,"textColor",2);l([r({type:String})],o.prototype,"textJustify",2);l([r({type:String})],o.prototype,"textAlign",2);l([r({type:String})],o.prototype,"textShadow",2);l([r({type:String})],o.prototype,"textFontSize",2);l([r({type:String})],o.prototype,"textFontWeight",2);l([r({type:String})],o.prototype,"textFontFamily",2);l([r({type:String})],o.prototype,"textFontStyle",2);l([r({type:String})],o.prototype,"placeholderColor",2);l([r({type:String})],o.prototype,"placeholderFontFamily",2);l([r({type:String})],o.prototype,"placeholderFontWeight",2);l([r({type:String})],o.prototype,"placeholderFontStyle",2);l([r({type:String})],o.prototype,"userSelect",2);l([r({type:String})],o.prototype,"cursor",2);l([r({type:Function})],o.prototype,"handleClick",2);l([r({type:String})],o.prototype,"text",2);l([r({type:String})],o.prototype,"placeholder",2);o=l([d("multiline-text")],o);const w={title:"Components/Text/Multiline Text",tags:["autodocs"],parameters:{docs:{description:{component:`
### <multiline-text>

Multi-line text component that wraps and can show a placeholder when empty.

#### CSS Custom Properties

| Variable | Description |
|-------------------------------|-------------------------------|
| --multiline-text-comp-height | Height of the component (does not support fit-content) |
| --multiline-text-comp-width | Width of the component (does not support fit-content) |
| --multiline-text-cursor | Cursor style for the component |
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
`}}},argTypes:{compHeight:{control:"text",description:"Height of the component (does not support fit-content)",table:{defaultValue:{summary:"300px"},category:"Component"}},compWidth:{control:"text",description:"Width of the component (does not support fit-content)",table:{defaultValue:{summary:"200px"},category:"Component"}},overflowY:{control:"text",description:"Vertical overflow behavior",table:{defaultValue:{summary:"auto"},category:"Component"}},userSelect:{control:"text",description:"User select behavior",table:{defaultValue:{summary:"none"},category:"Component"}},textColor:{control:"color",description:"Text color",table:{defaultValue:{summary:"black"},category:"Text"}},textJustify:{control:"text",description:"Justify text",table:{defaultValue:{summary:"center"},category:"Text"}},textAlign:{control:"text",description:"Align text",table:{defaultValue:{summary:"start"},category:"Text"}},textShadow:{control:"text",description:"Text shadow",table:{defaultValue:{summary:"none"},category:"Text"}},textFontSize:{control:"text",description:"Font size",table:{defaultValue:{summary:"16px"},category:"Text"}},textFontWeight:{control:"text",description:"Font weight",table:{defaultValue:{summary:"normal"},category:"Text"}},textFontFamily:{control:"text",description:"Font family",table:{defaultValue:{summary:"'Helvetica', 'Arial', sans-serif"},category:"Text"}},textFontStyle:{control:"text",description:"Font style",table:{defaultValue:{summary:"normal"},category:"Text"}},cursor:{control:"text",description:"Cursor style for the component",table:{defaultValue:{summary:"default"},category:"Component"}},handleClick:{action:"handleClick",description:"Click handler for the component (() => void function)",table:{category:"Events"}},placeholderColor:{control:"color",description:"Placeholder color",table:{defaultValue:{summary:"gray"},category:"Placeholder"}},placeholderFontFamily:{control:"text",description:"Placeholder font family",table:{defaultValue:{summary:"'FiraMono', monospace"},category:"Placeholder"}},placeholderFontWeight:{control:"text",description:"Placeholder font weight",table:{defaultValue:{summary:"normal"},category:"Placeholder"}},placeholderFontStyle:{control:"text",description:"Placeholder font style",table:{defaultValue:{summary:"italic"},category:"Placeholder"}},text:{control:"text",description:"Text content",table:{category:"Text"}},placeholder:{control:"text",description:"Placeholder text when empty",table:{category:"Placeholder"}}}},c=t=>m`
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
    .cursor=${t.cursor}
    .handleClick=${t.handleClick}
    .placeholderColor=${t.placeholderColor}
    .placeholderFontFamily=${t.placeholderFontFamily}
    .placeholderFontWeight=${t.placeholderFontWeight}
    .placeholderFontStyle=${t.placeholderFontStyle}
    .text=${t.text}
    .placeholder=${t.placeholder}
  ></multiline-text>
`;c.args={compHeight:"300px",compWidth:"200px",overflowY:"auto",userSelect:"none",textColor:"black",textJustify:"center",textAlign:"start",textShadow:"none",textFontSize:"16px",textFontWeight:"normal",textFontFamily:"'Helvetica', 'Arial', sans-serif",textFontStyle:"normal",cursor:"default",handleClick:console.log.bind(console,"Multiline text clicked"),placeholderColor:"gray",placeholderFontFamily:"'FiraMono', monospace",placeholderFontWeight:"normal",placeholderFontStyle:"italic",text:`This is a multiline text example. It should wrap across lines and demonstrate the component behavior.
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
    .cursor=\${args.cursor}
    .handleClick=\${args.handleClick}
    .placeholderColor=\${args.placeholderColor}
    .placeholderFontFamily=\${args.placeholderFontFamily}
    .placeholderFontWeight=\${args.placeholderFontWeight}
    .placeholderFontStyle=\${args.placeholderFontStyle}
    .text=\${args.text}
    .placeholder=\${args.placeholder}
  ></multiline-text>
\``,...c.parameters?.docs?.source}}};const v=["Default"];export{c as Default,v as __namedExportsOrder,w as default};
